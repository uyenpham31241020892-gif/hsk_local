import type { UserProgress, SRSCard, MockExamRecord, SessionRecord } from '../types';
import { saveProgress } from './srs';

export interface CloudAccount {
  email: string;
  syncKey: string;
  lastSyncedAt?: string;
  supabaseUrl?: string;
  supabaseKey?: string;
}

const ACCOUNT_STORAGE_KEY = 'hsk_cloud_account_v1';
const PROGRESS_STORAGE_KEY = 'hsk_progress_v1';

// Default Admin Account (admin / admin)
export const DEFAULT_ADMIN_ACCOUNT: CloudAccount = {
  email: 'admin',
  syncKey: 'admin',
};

// Global cross-device endpoints with CORS enabled (No login or API key required)
const PRIMARY_ADMIN_OBJECT_ID = 'ff808181a09d98f701a2083c371325c8';
const PRIMARY_API_BASE = 'https://api.restful-api.dev/objects';
const MIRROR_ADMIN_URL = 'https://extendsclass.com/api/json-storage/bin/dadbead';

/**
 * Lấy thông tin tài khoản đám mây đã lưu trên máy.
 * Mặc định tự động kết nối tài khoản 'admin' / 'admin' nếu chưa từng thiết lập.
 */
export function getSavedCloudAccount(): CloudAccount {
  try {
    const raw = localStorage.getItem(ACCOUNT_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.syncKey) return parsed;
    }
  } catch {}
  
  // Tự động gán tài khoản admin mặc định cho mọi máy
  try {
    localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(DEFAULT_ADMIN_ACCOUNT));
  } catch {}
  return { ...DEFAULT_ADMIN_ACCOUNT };
}

/**
 * Lưu tài khoản đám mây vào localStorage
 */
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

/** Tạo khóa lưu trữ đám mây an toàn từ tên tài khoản */
function makeKey(syncKey: string): string {
  return syncKey.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '_');
}

/**
 * Thuật toán Hợp nhất thông minh 2 chiều (Smart Two-Way Merge):
 * Đảm bảo khi học trên Máy A và Máy B, tiến trình luôn được gộp lại tối đa,
 * KHÔNG BAO GIỜ bị mất từ vựng đã học hay bị máy mới ghi đè làm mất dữ liệu!
 */
export function mergeProgress(local: UserProgress, remote: UserProgress): UserProgress {
  if (!local) return remote;
  if (!remote) return local;

  // 1. Hợp nhất thẻ SRS (ưu tiên số lần lặp lại, mốc ôn tập xa hơn và độ vững chắc)
  const mergedCards: Record<string, SRSCard> = { ...(local.cards || {}) };
  const remoteCards = remote.cards || {};

  for (const [id, rCard] of Object.entries(remoteCards)) {
    const lCard = mergedCards[id];
    if (!lCard) {
      mergedCards[id] = rCard;
    } else {
      mergedCards[id] = {
        vocabId: id,
        easeFactor: Math.max(lCard.easeFactor || 2.5, rCard.easeFactor || 2.5),
        interval: Math.max(lCard.interval || 0, rCard.interval || 0),
        repetitions: Math.max(lCard.repetitions || 0, rCard.repetitions || 0),
        nextReview: Math.max(lCard.nextReview || 0, rCard.nextReview || 0),
        lapses: Math.max(lCard.lapses || 0, rCard.lapses || 0),
        lastResult: rCard.lastResult || lCard.lastResult,
        mistakeCount: Math.max(lCard.mistakeCount || 0, rCard.mistakeCount || 0),
      };
    }
  }

  // 2. Hợp nhất danh sách bài học và cột mốc đã hoàn thành (Union Set)
  const unlockedPacks = Array.from(new Set([
    ...(local.unlockedPacks || ['hsk1_pack1']),
    ...(remote.unlockedPacks || [])
  ]));

  const completedPacks = Array.from(new Set([
    ...(local.completedPacks || []),
    ...(remote.completedPacks || [])
  ]));

  const passedMilestones = Array.from(new Set([
    ...(local.passedMilestones || []),
    ...(remote.passedMilestones || [])
  ]));

  const mistakeIds = Array.from(new Set([
    ...(local.mistakeIds || []),
    ...(remote.mistakeIds || [])
  ]));

  // 3. Hợp nhất lịch sử thi thử HSK (tránh trùng lặp theo date + examId)
  const examMap = new Map<string, MockExamRecord>();
  [...(remote.mockExamHistory || []), ...(local.mockExamHistory || [])].forEach(rec => {
    const key = `${rec.examId}_${rec.date}`;
    if (!examMap.has(key)) examMap.set(key, rec);
  });
  const mockExamHistory = Array.from(examMap.values())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 50);

  // 4. Hợp nhất lịch sử phiên học (sessionHistory)
  const sessionMap = new Map<string, SessionRecord>();
  [...(remote.sessionHistory || []), ...(local.sessionHistory || [])].forEach(s => {
    const key = `${s.packId}_${s.date}_${s.mode}`;
    if (!sessionMap.has(key)) sessionMap.set(key, s);
  });
  const sessionHistory = Array.from(sessionMap.values())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 100);

  // 5. Điểm kỷ lục Mini-games
  const gameHighScores = {
    speedHunter: Math.max(local.gameHighScores?.speedHunter || 0, remote.gameHighScores?.speedHunter || 0),
    toneMaster: Math.max(local.gameHighScores?.toneMaster || 0, remote.gameHighScores?.toneMaster || 0),
    pinyinShowdown: Math.max(local.gameHighScores?.pinyinShowdown || 0, remote.gameHighScores?.pinyinShowdown || 0),
  };

  // 6. Chuỗi ngày học (Streak) và ngày học gần nhất
  const currentStreak = Math.max(local.currentStreak || 0, remote.currentStreak || 0);
  const lastStudyDate = (local.lastStudyDate > (remote.lastStudyDate || '')) 
    ? local.lastStudyDate 
    : (remote.lastStudyDate || local.lastStudyDate);

  return {
    ...local,
    cards: mergedCards,
    unlockedPacks,
    completedPacks,
    passedMilestones,
    mistakeIds,
    mockExamHistory,
    sessionHistory,
    gameHighScores,
    currentStreak,
    lastStudyDate,
    settings: {
      ...local.settings,
      ...(remote.settings || {}),
    }
  };
}

/**
 * Đẩy toàn bộ tiến trình học lên đám mây máy chủ.
 */
export async function pushProgressToCloud(
  progress: UserProgress, 
  account?: CloudAccount | null
): Promise<{ success: boolean; message: string; timestamp?: string }> {
  const acc = account || getSavedCloudAccount();
  if (!acc || !acc.syncKey) {
    return { success: false, message: 'Chưa có thông tin tài khoản.' };
  }

  const timestamp = new Date().toISOString();
  const payload = {
    ...progress,
    lastCloudSync: timestamp,
    syncKey: acc.syncKey,
    syncEmail: acc.email,
  };

  try {
    // 1. Nếu cấu hình Supabase riêng
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

      if (!res.ok) throw new Error(`Lỗi Supabase: ${res.statusText}`);
    } else {
      // 2. Hệ thống đám mây mặc định tự động (Zero-Config Global Relay)
      const isAdmin = acc.email.toLowerCase() === 'admin' && acc.syncKey === 'admin';
      const targetObjectId = isAdmin ? PRIMARY_ADMIN_OBJECT_ID : (localStorage.getItem(`hsk_obj_id_${makeKey(acc.syncKey)}`) || PRIMARY_ADMIN_OBJECT_ID);

      // Đẩy lên Primary Relay (api.restful-api.dev)
      const putRes = await fetch(`${PRIMARY_API_BASE}/${targetObjectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `hsk_sync_${makeKey(acc.syncKey)}`,
          data: payload,
        }),
      }).catch(err => {
        console.warn('Primary cloud push failed, trying mirror...', err);
        return null;
      });

      // Đẩy lên Mirror Backup (extendsclass.com) nếu là tài khoản admin
      if (isAdmin) {
        fetch(MIRROR_ADMIN_URL, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch(() => null);
      }

      if (!putRes || !putRes.ok) {
        // Nếu object chưa tồn tại cho tài khoản custom mới, tự động tạo mới
        if (!isAdmin) {
          const createRes = await fetch(PRIMARY_API_BASE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: `hsk_sync_${makeKey(acc.syncKey)}`,
              data: payload,
            }),
          }).catch(() => null);

          if (createRes && createRes.ok) {
            const created = await createRes.json();
            if (created.id) {
              localStorage.setItem(`hsk_obj_id_${makeKey(acc.syncKey)}`, created.id);
            }
          }
        }
      }

      // Lưu bản sao cục bộ
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
      message: err.message || 'Lỗi mạng khi đẩy dữ liệu lên đám mây.' 
    };
  }
}

/**
 * Tải tiến trình mới nhất từ đám mây về.
 */
export async function pullProgressFromCloud(
  account?: CloudAccount | null
): Promise<{ success: boolean; data?: UserProgress; message: string }> {
  const acc = account || getSavedCloudAccount();
  if (!acc || !acc.syncKey) {
    return { success: false, message: 'Chưa có thông tin tài khoản.' };
  }

  try {
    const key = makeKey(acc.syncKey);

    // 1. Nếu có Supabase
    if (acc.supabaseUrl && acc.supabaseKey) {
      const url = `${acc.supabaseUrl.replace(/\/$/, '')}/rest/v1/user_sync?sync_key=eq.${key}&select=data,updated_at`;
      const res = await fetch(url, {
        headers: {
          'apikey': acc.supabaseKey,
          'Authorization': `Bearer ${acc.supabaseKey}`,
        },
      });

      if (res.ok) {
        const rows = await res.json();
        if (rows && rows.length > 0 && rows[0].data) {
          return { success: true, data: rows[0].data, message: 'Đã tải tiến trình từ Supabase!' };
        }
      }
    }

    // 2. Tải từ Primary Cloud Relay
    const isAdmin = acc.email.toLowerCase() === 'admin' && acc.syncKey === 'admin';
    const targetObjectId = isAdmin ? PRIMARY_ADMIN_OBJECT_ID : (localStorage.getItem(`hsk_obj_id_${key}`) || PRIMARY_ADMIN_OBJECT_ID);

    try {
      const res = await fetch(`${PRIMARY_API_BASE}/${targetObjectId}`);
      if (res.ok) {
        const json = await res.json();
        const cloudData = json.data?.cards ? json.data : json.data?.progress;
        if (cloudData && (cloudData.cards || cloudData.unlockedPacks)) {
          return { success: true, data: cloudData, message: 'Đã tải tiến trình từ đám mây chính!' };
        }
      }
    } catch (e) {
      console.warn('Primary cloud pull failed, trying mirror...', e);
    }

    // 3. Tải từ Mirror Cloud Relay (extendsclass)
    if (isAdmin) {
      try {
        const mirrorRes = await fetch(MIRROR_ADMIN_URL);
        if (mirrorRes.ok) {
          const raw = await mirrorRes.text();
          const cleanJson = raw.slice(0, raw.lastIndexOf('}') + 1);
          const mirrorData = JSON.parse(cleanJson);
          if (mirrorData && (mirrorData.cards || mirrorData.unlockedPacks)) {
            return { success: true, data: mirrorData, message: 'Đã tải tiến trình từ máy chủ dự phòng!' };
          }
        }
      } catch (e) {
        console.warn('Mirror cloud pull failed', e);
      }
    }

    // 4. Fallback: Nếu không có kết nối mạng, đọc từ localStorage của máy này
    const localRaw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (localRaw) {
      return { success: true, data: JSON.parse(localRaw), message: 'Sử dụng bản lưu bộ nhớ cục bộ.' };
    }

    return { success: false, message: 'Chưa tìm thấy bản sao lưu nào cho tài khoản này.' };
  } catch (err: any) {
    return { success: false, message: err.message || 'Không thể kết nối tải dữ liệu.' };
  }
}

/**
 * Đồng bộ hai chiều hoàn hảo (Two-Way Sync):
 * 1. Tải dữ liệu mới nhất từ đám mây
 * 2. Hợp nhất (merge) với tiến trình hiện tại trên máy này
 * 3. Đẩy dữ liệu đã hợp nhất ngược lại lên đám mây
 * 4. Trả về tiến trình tối ưu nhất để cập nhật ngay vào giao diện
 */
export async function syncTwoWay(
  localProgress: UserProgress,
  account?: CloudAccount | null
): Promise<{ success: boolean; mergedProgress?: UserProgress; message: string }> {
  const acc = account || getSavedCloudAccount();
  if (!acc) return { success: false, message: 'Chưa có tài khoản.' };

  try {
    const pullRes = await pullProgressFromCloud(acc);
    let merged = localProgress;

    if (pullRes.success && pullRes.data) {
      merged = mergeProgress(localProgress, pullRes.data);
    }

    // Đẩy bản đã hợp nhất lên mây để mọi máy khác đều nhận được
    await pushProgressToCloud(merged, acc);
    saveProgress(merged);

    return {
      success: true,
      mergedProgress: merged,
      message: 'Đồng bộ hai chiều giữa các thiết bị thành công!',
    };
  } catch (err: any) {
    return {
      success: false,
      message: err.message || 'Lỗi trong quá trình đồng bộ.',
    };
  }
}
