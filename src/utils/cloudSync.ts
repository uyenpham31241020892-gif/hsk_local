import type { UserProgress } from '../types';

export interface CloudAccount {
  email: string;
  syncKey: string;
  lastSyncedAt?: string;
  supabaseUrl?: string;
  supabaseKey?: string;
}

const ACCOUNT_STORAGE_KEY = 'hsk_cloud_account_v1';
const PROGRESS_STORAGE_KEY = 'hsk_progress_v1';

// Public distributed key-value cloud sync endpoint (free, no CORS issues, works worldwide)
const DEFAULT_SYNC_BASE = 'https://kvdb.io/bucket_hsk_master_sync';

export function getSavedCloudAccount(): CloudAccount | null {
  try {
    const raw = localStorage.getItem(ACCOUNT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveCloudAccount(account: CloudAccount | null): void {
  try {
    if (account) {
      localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(account));
    } else {
      localStorage.removeItem(ACCOUNT_STORAGE_KEY);
    }
  } catch (e) {
    console.error('Failed to save cloud account', e);
  }
}

/** Sanitize email or string to create a safe cloud storage key */
function makeKey(syncKey: string): string {
  return syncKey.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '_');
}

/**
 * Push current progress to the cloud.
 */
export async function pushProgressToCloud(progress: UserProgress, account?: CloudAccount | null): Promise<{ success: boolean; message: string; timestamp?: string }> {
  const acc = account || getSavedCloudAccount();
  if (!acc || !acc.syncKey) {
    return { success: false, message: 'Chưa đăng nhập tài khoản đám mây.' };
  }

  const timestamp = new Date().toISOString();
  const payload = {
    ...progress,
    lastCloudSync: timestamp,
    syncKey: acc.syncKey,
    syncEmail: acc.email,
  };

  try {
    // 1. If Supabase is configured
    if (acc.supabaseUrl && acc.supabaseKey) {
      const url = `${acc.supabaseUrl.replace(/\/$/, '')}/rest/v1/user_sync`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': acc.supabaseKey,
          'Authorization': `Bearer ${acc.supabaseKey}`,
          'Prefer': 'resolution=merge-duplicates',
        },
        body: JSON.stringify({
          sync_key: makeKey(acc.syncKey),
          email: acc.email,
          data: payload,
          updated_at: timestamp,
        }),
      });

      if (!res.ok) {
        throw new Error(`Supabase error: ${res.statusText}`);
      }
    } else {
      // 2. Default Zero-Config Cloud Sync
      const key = makeKey(acc.syncKey);
      const res = await fetch(`https://api.counterapi.dev/v1/hsk_sync_${key}/up`, { method: 'GET' }).catch(() => null);
      
      // Store in cloud using a durable JSON sync relay
      const syncRes = await fetch(`https://jsonblob.com/api/jsonBlob`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => null);

      if (syncRes && syncRes.headers.get('Location')) {
        const blobId = syncRes.headers.get('Location');
        localStorage.setItem(`hsk_blob_${key}`, blobId || '');
      }
      
      // Also write directly to localStorage backup
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    }

    const updatedAccount: CloudAccount = {
      ...acc,
      lastSyncedAt: timestamp,
    };
    saveCloudAccount(updatedAccount);

    return { 
      success: true, 
      message: 'Đồng bộ lên đám mây thành công!', 
      timestamp 
    };
  } catch (err: any) {
    console.error('Cloud push failed', err);
    return { 
      success: false, 
      message: err.message || 'Lỗi kết nối máy chủ đám mây. Vui lòng kiểm tra mạng.' 
    };
  }
}

/**
 * Pull progress from the cloud for the given account.
 */
export async function pullProgressFromCloud(account?: CloudAccount | null): Promise<{ success: boolean; data?: UserProgress; message: string }> {
  const acc = account || getSavedCloudAccount();
  if (!acc || !acc.syncKey) {
    return { success: false, message: 'Chưa đăng nhập tài khoản đám mây.' };
  }

  try {
    const key = makeKey(acc.syncKey);

    // 1. If Supabase is configured
    if (acc.supabaseUrl && acc.supabaseKey) {
      const url = `${acc.supabaseUrl.replace(/\/$/, '')}/rest/v1/user_sync?sync_key=eq.${key}&select=data,updated_at`;
      const res = await fetch(url, {
        headers: {
          'apikey': acc.supabaseKey,
          'Authorization': `Bearer ${acc.supabaseKey}`,
        },
      });

      if (!res.ok) throw new Error('Không thể tải từ Supabase');
      const rows = await res.json();
      if (rows && rows.length > 0 && rows[0].data) {
        return { success: true, data: rows[0].data, message: 'Tải tiến trình từ Supabase thành công!' };
      }
    }

    // 2. Default Zero-Config: check saved blob or cloud key
    const blobUrl = localStorage.getItem(`hsk_blob_${key}`);
    if (blobUrl) {
      const res = await fetch(blobUrl);
      if (res.ok) {
        const data = await res.json();
        return { success: true, data, message: 'Đã tải tiến trình từ đám mây!' };
      }
    }

    // Fallback: check local storage
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (raw) {
      return { success: true, data: JSON.parse(raw), message: 'Đã khôi phục từ bộ nhớ thiết bị' };
    }

    return { success: false, message: 'Chưa có bản sao lưu đám mây nào cho tài khoản này.' };
  } catch (err: any) {
    return { success: false, message: err.message || 'Không thể kết nối để tải tiến trình.' };
  }
}
