import React, { useState, useEffect } from 'react';
import { 
  Cloud, RefreshCw, X, ShieldCheck, 
  LogOut, ArrowDownCircle, ArrowUpCircle, Database, CheckCircle2, Zap
} from 'lucide-react';
import { 
  getSavedCloudAccount, 
  saveCloudAccount, 
  pushProgressToCloud, 
  pullProgressFromCloud,
  syncTwoWay,
  DEFAULT_ADMIN_ACCOUNT,
  type CloudAccount 
} from '../../utils/cloudSync';
import { useApp } from '../../store/AppContext';

interface CloudSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CloudSyncModal({ isOpen, onClose }: CloudSyncModalProps) {
  const { state, dispatch } = useApp();
  const [account, setAccount] = useState<CloudAccount | null>(null);
  const [usernameInput, setUsernameInput] = useState('admin');
  const [passwordInput, setPasswordInput] = useState('admin');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseKey, setSupabaseKey] = useState('');

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  useEffect(() => {
    if (isOpen) {
      const saved = getSavedCloudAccount();
      setAccount(saved);
      if (saved) {
        setUsernameInput(saved.email);
        setPasswordInput(saved.syncKey);
        setSupabaseUrl(saved.supabaseUrl || '');
        setSupabaseKey(saved.supabaseKey || '');
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // 1. Đồng bộ 2 chiều ngay lập tức (Sync Now)
  const handleTwoWaySync = async () => {
    if (!account) return;
    setLoading(true);
    setStatusMessage({ text: 'Đang tải và đồng bộ hai chiều với máy chủ...', type: 'info' });

    const res = await syncTwoWay(state.progress, account);
    setLoading(false);

    if (res.success && res.mergedProgress) {
      dispatch({ type: 'REPLACE_PROGRESS', progress: res.mergedProgress });
      setAccount(getSavedCloudAccount());
      setStatusMessage({ 
        text: `✓ Đồng bộ hai chiều thành công! Toàn bộ tiến trình đã được cập nhật đồng nhất giữa các máy.`, 
        type: 'success' 
      });
    } else {
      setStatusMessage({ text: res.message, type: 'error' });
    }
  };

  // 2. Đăng nhập nhanh tài khoản Admin mặc định
  const handleQuickLoginAdmin = async () => {
    setLoading(true);
    setStatusMessage({ text: 'Đang kích hoạt tài khoản Admin...', type: 'info' });

    saveCloudAccount(DEFAULT_ADMIN_ACCOUNT);
    setAccount(DEFAULT_ADMIN_ACCOUNT);
    setUsernameInput('admin');
    setPasswordInput('admin');

    const res = await syncTwoWay(state.progress, DEFAULT_ADMIN_ACCOUNT);
    setLoading(false);

    if (res.success && res.mergedProgress) {
      dispatch({ type: 'REPLACE_PROGRESS', progress: res.mergedProgress });
      setAccount(getSavedCloudAccount());
      setStatusMessage({ text: '✓ Đã kích hoạt tài khoản Admin & tự động đồng bộ thành công!', type: 'success' });
    } else {
      setStatusMessage({ text: res.message, type: 'error' });
    }
  };

  // 3. Đăng nhập form tùy chỉnh
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameInput.trim() || !passwordInput.trim()) {
      setStatusMessage({ text: 'Vui lòng nhập Tên tài khoản và Mật khẩu!', type: 'error' });
      return;
    }

    setLoading(true);
    setStatusMessage({ text: 'Đang kết nối tài khoản đám mây...', type: 'info' });

    const newAcc: CloudAccount = {
      email: usernameInput.trim(),
      syncKey: passwordInput.trim(),
      supabaseUrl: supabaseUrl.trim() || undefined,
      supabaseKey: supabaseKey.trim() || undefined,
    };

    saveCloudAccount(newAcc);
    setAccount(newAcc);

    // Đồng bộ hai chiều an toàn, không sợ ghi đè
    const res = await syncTwoWay(state.progress, newAcc);
    setLoading(false);

    if (res.success && res.mergedProgress) {
      dispatch({ type: 'REPLACE_PROGRESS', progress: res.mergedProgress });
      setAccount(getSavedCloudAccount());
      setStatusMessage({ text: '✓ Đăng nhập và đồng bộ tiến trình thành công!', type: 'success' });
    } else {
      setStatusMessage({ text: res.message, type: 'error' });
    }
  };

  // 4. Đẩy thủ công
  const handleManualPush = async () => {
    if (!account) return;
    setLoading(true);
    setStatusMessage({ text: 'Đang đẩy tiến trình hiện tại lên đám mây...', type: 'info' });

    const res = await pushProgressToCloud(state.progress, account);
    setLoading(false);

    if (res.success) {
      setAccount(getSavedCloudAccount());
      setStatusMessage({ text: '✓ Đã đẩy tiến trình lên mây thành công!', type: 'success' });
    } else {
      setStatusMessage({ text: res.message, type: 'error' });
    }
  };

  // 5. Tải thủ công từ mây về
  const handleManualPull = async () => {
    if (!account) return;
    setLoading(true);
    setStatusMessage({ text: 'Đang tải dữ liệu từ đám mây về...', type: 'info' });

    const res = await pullProgressFromCloud(account);
    setLoading(false);

    if (res.success && res.data) {
      dispatch({ type: 'REPLACE_PROGRESS', progress: res.data });
      setStatusMessage({ text: '✓ Đã tải dữ liệu từ mây về máy này thành công!', type: 'success' });
    } else {
      setStatusMessage({ text: res.message, type: 'error' });
    }
  };

  const handleLogout = () => {
    if (confirm('Bạn có chắc muốn đăng xuất khỏi tài khoản trên máy này?')) {
      saveCloudAccount(null);
      setAccount(null);
      setUsernameInput('');
      setPasswordInput('');
      setStatusMessage({ text: 'Đã đăng xuất tài khoản trên máy này.', type: 'info' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs fade-in">
      <div className="bg-white rounded-3xl border border-[#e5e1d8] max-w-md w-full p-6 shadow-2xl space-y-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#6b7280] hover:bg-[#FAF9F6] transition-colors"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#e8f0eb] text-[#4a7c59] flex items-center justify-center text-2xl shrink-0 shadow-2xs">
            ☁️
          </div>
          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">Tài Khoản & Đồng Bộ Đám Mây</h2>
            <p className="text-xs text-[#6b7280]">Tự động cập nhật qua lại giữa máy tính, laptop và điện thoại</p>
          </div>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <div className={`p-3 rounded-2xl text-xs flex items-center gap-2 ${
            statusMessage.type === 'success' 
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
              : statusMessage.type === 'error'
              ? 'bg-red-50 text-red-800 border border-red-200'
              : 'bg-blue-50 text-blue-800 border border-blue-200'
          }`}>
            <span>{statusMessage.text}</span>
          </div>
        )}

        {account ? (
          /* LOGGED IN VIEW */
          <div className="space-y-3.5">
            <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck size={12} /> Tự động đồng bộ 2 chiều
                </span>
                <button
                  onClick={handleLogout}
                  className="text-xs text-red-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <LogOut size={13} /> Đổi tài khoản
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-[#6b7280]">Tài khoản:</p>
                  <p className="font-bold text-sm text-[#1a1a1a]">{account.email}</p>
                </div>
                <div>
                  <p className="text-[#6b7280]">Mật khẩu:</p>
                  <p className="font-mono font-bold text-sm text-[#1a1a1a]">{account.syncKey}</p>
                </div>
              </div>

              <div className="text-[11px] text-[#6b7280] pt-2 border-t border-[#e5e1d8]/60 flex items-center justify-between">
                <span>Lần đồng bộ gần nhất:</span>
                <strong className="text-[#1a1a1a]">
                  {account.lastSyncedAt 
                    ? new Date(account.lastSyncedAt).toLocaleTimeString('vi-VN') + ' ' + new Date(account.lastSyncedAt).toLocaleDateString('vi-VN')
                    : 'Vừa kích hoạt'}
                </strong>
              </div>
            </div>

            {/* Main Action: Sync Now */}
            <button
              onClick={handleTwoWaySync}
              disabled={loading}
              className="w-full py-3 px-4 rounded-2xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              <span>{loading ? 'Đang đồng bộ...' : 'Đồng bộ hai chiều ngay bây giờ'}</span>
            </button>

            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleManualPush}
                disabled={loading}
                className="py-2.5 px-3 rounded-xl border border-[#e5e1d8] bg-white hover:bg-[#FAF9F6] text-[#1a1a1a] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <ArrowUpCircle size={14} className="text-[#4a7c59]" />
                <span>Đẩy lên mây</span>
              </button>

              <button
                onClick={handleManualPull}
                disabled={loading}
                className="py-2.5 px-3 rounded-xl border border-[#e5e1d8] bg-white hover:bg-[#FAF9F6] text-[#1a1a1a] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <ArrowDownCircle size={14} className="text-[#4a7c59]" />
                <span>Tải từ mây về</span>
              </button>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 text-[11px] text-emerald-900 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-700" />
                Cơ chế tự động qua lại giữa các máy:
              </p>
              <p className="leading-relaxed">
                Mỗi khi bạn học xong một bài, mở ứng dụng hoặc chuyển tab, hệ thống sẽ tự động gửi và nhận dữ liệu qua lại. Bạn có thể mở web trên bất kỳ máy nào, tiến trình học luôn luôn đồng nhất!
              </p>
            </div>
          </div>
        ) : (
          /* LOGIN FORM */
          <div className="space-y-3.5">
            {/* Quick 1-Click Admin Button */}
            <button
              onClick={handleQuickLoginAdmin}
              disabled={loading}
              className="w-full py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-all"
            >
              <Zap size={16} />
              <span>Kích hoạt ngay tài khoản Admin (admin / admin)</span>
            </button>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-[#e5e1d8]"></div>
              <span className="flex-shrink mx-3 text-[11px] text-[#6b7280]">hoặc nhập tài khoản khác</span>
              <div className="flex-grow border-t border-[#e5e1d8]"></div>
            </div>

            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#1a1a1a] mb-1">
                  Tên tài khoản (hoặc Email)
                </label>
                <input
                  type="text"
                  required
                  placeholder="admin"
                  value={usernameInput}
                  onChange={e => setUsernameInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e5e1d8] bg-[#FAF9F6] text-sm text-[#1a1a1a] focus:bg-white focus:outline-none focus:border-[#4a7c59]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a1a1a] mb-1">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  required
                  placeholder="admin"
                  value={passwordInput}
                  onChange={e => setPasswordInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e5e1d8] bg-[#FAF9F6] text-sm text-[#1a1a1a] focus:bg-white focus:outline-none focus:border-[#4a7c59]"
                />
              </div>

              {/* Advanced toggle */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="text-xs text-[#6b7280] hover:text-[#4a7c59] flex items-center gap-1 font-semibold"
                >
                  <Database size={12} />
                  <span>{showAdvanced ? 'Ẩn cài đặt Supabase riêng' : 'Tùy chọn: Kết nối Supabase riêng'}</span>
                </button>

                {showAdvanced && (
                  <div className="mt-2 p-3 bg-[#FAF9F6] border border-[#e5e1d8] rounded-xl space-y-2 fade-in">
                    <input
                      type="text"
                      placeholder="Supabase Project URL (https://xyz.supabase.co)"
                      value={supabaseUrl}
                      onChange={e => setSupabaseUrl(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#e5e1d8] bg-white text-xs"
                    />
                    <input
                      type="password"
                      placeholder="Supabase Anon Public API Key"
                      value={supabaseKey}
                      onChange={e => setSupabaseKey(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#e5e1d8] bg-white text-xs"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-2xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors disabled:opacity-50 mt-1"
              >
                {loading ? <RefreshCw size={15} className="animate-spin" /> : <Cloud size={15} />}
                <span>Đăng nhập & Bật đồng bộ</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
