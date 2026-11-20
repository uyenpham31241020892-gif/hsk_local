import React, { useState, useEffect } from 'react';
import { 
  Cloud, CloudCheck, CloudOff, RefreshCw, X, ShieldCheck, 
  LogIn, LogOut, Check, ArrowDownCircle, ArrowUpCircle, Database, Sparkles 
} from 'lucide-react';
import { 
  getSavedCloudAccount, 
  saveCloudAccount, 
  pushProgressToCloud, 
  pullProgressFromCloud,
  type CloudAccount 
} from '../../utils/cloudSync';
import { useApp } from '../../store/AppContext';

interface CloudSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CloudSyncModal({ isOpen, onClose }: CloudSyncModalProps) {
  const { state } = useApp();
  const [account, setAccount] = useState<CloudAccount | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [syncKeyInput, setSyncKeyInput] = useState('');
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
        setEmailInput(saved.email);
        setSyncKeyInput(saved.syncKey);
        setSupabaseUrl(saved.supabaseUrl || '');
        setSupabaseKey(saved.supabaseKey || '');
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !syncKeyInput.trim()) {
      setStatusMessage({ text: 'Vui lòng nhập Email và Mật khẩu đồng bộ!', type: 'error' });
      return;
    }

    setLoading(true);
    setStatusMessage({ text: 'Đang kết nối tài khoản đám mây...', type: 'info' });

    const newAcc: CloudAccount = {
      email: emailInput.trim(),
      syncKey: syncKeyInput.trim(),
      supabaseUrl: supabaseUrl.trim() || undefined,
      supabaseKey: supabaseKey.trim() || undefined,
    };

    saveCloudAccount(newAcc);
    setAccount(newAcc);

    // Initial push current progress to cloud
    const res = await pushProgressToCloud(state.progress, newAcc);
    setLoading(false);

    if (res.success) {
      setStatusMessage({ text: '✓ Đăng nhập và đồng bộ tiến trình thành công!', type: 'success' });
      setAccount(getSavedCloudAccount());
    } else {
      setStatusMessage({ text: res.message, type: 'error' });
    }
  };

  const handleManualPush = async () => {
    if (!account) return;
    setLoading(true);
    setStatusMessage({ text: 'Đang đẩy tiến trình lên đám mây...', type: 'info' });

    const res = await pushProgressToCloud(state.progress, account);
    setLoading(false);

    if (res.success) {
      setStatusMessage({ text: '✓ Đã đồng bộ lên đám mây thành công!', type: 'success' });
      setAccount(getSavedCloudAccount());
    } else {
      setStatusMessage({ text: res.message, type: 'error' });
    }
  };

  const handleManualPull = async () => {
    if (!account) return;
    if (!confirm('Tải tiến trình từ đám mây sẽ ghi đè vào máy này. Bạn có muốn tiếp tục?')) return;

    setLoading(true);
    setStatusMessage({ text: 'Đang tải dữ liệu từ đám mây về...', type: 'info' });

    const res = await pullProgressFromCloud(account);
    setLoading(false);

    if (res.success && res.data) {
      localStorage.setItem('hsk_progress_v1', JSON.stringify(res.data));
      setStatusMessage({ text: '✓ Đã tải dữ liệu về! Đang khởi động lại trang...', type: 'success' });
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } else {
      setStatusMessage({ text: res.message, type: 'error' });
    }
  };

  const handleLogout = () => {
    if (confirm('Bạn có chắc muốn đăng xuất khỏi tài khoản đám mây trên máy này?')) {
      saveCloudAccount(null);
      setAccount(null);
      setEmailInput('');
      setSyncKeyInput('');
      setStatusMessage({ text: 'Đã ngắt kết nối đám mây trên máy này.', type: 'info' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs fade-in">
      <div className="bg-white rounded-3xl border border-[#e5e1d8] max-w-md w-full p-6 shadow-2xl space-y-5 relative">
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
            <p className="text-xs text-[#6b7280]">Học ở máy tính, laptop hay điện thoại không lo mất dữ liệu</p>
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
          <div className="space-y-4">
            <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#4a7c59] bg-[#e8f0eb] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck size={12} /> Đang kết nối
                </span>
                <button
                  onClick={handleLogout}
                  className="text-xs text-red-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <LogOut size={13} /> Đăng xuất
                </button>
              </div>

              <div>
                <p className="text-xs text-[#6b7280]">Tài khoản:</p>
                <p className="font-bold text-sm text-[#1a1a1a]">{account.email}</p>
              </div>

              <div className="text-[11px] text-[#6b7280] pt-1 border-t border-[#e5e1d8]/60 flex items-center justify-between">
                <span>Lần đồng bộ gần nhất:</span>
                <strong className="text-[#1a1a1a]">
                  {account.lastSyncedAt 
                    ? new Date(account.lastSyncedAt).toLocaleString('vi-VN') 
                    : 'Chưa đồng bộ'}
                </strong>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleManualPush}
                disabled={loading}
                className="py-3 px-3 rounded-2xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors disabled:opacity-50"
              >
                <ArrowUpCircle size={15} />
                <span>Đẩy lên mây</span>
              </button>

              <button
                onClick={handleManualPull}
                disabled={loading}
                className="py-3 px-3 rounded-2xl border border-[#4a7c59] text-[#4a7c59] hover:bg-[#e8f0eb] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <ArrowDownCircle size={15} />
                <span>Tải về máy này</span>
              </button>
            </div>

            <p className="text-[11px] text-[#6b7280] text-center leading-relaxed">
              💡 <strong>Mẹo:</strong> Khi sang máy tính khác, bạn chỉ cần mở bảng này, nhập cùng <strong>Email & Mật khẩu đồng bộ</strong> và bấm <em>Tải về máy này</em> là xong!
            </p>
          </div>
        ) : (
          /* LOGIN / REGISTER FORM */
          <form onSubmit={handleLogin} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-[#1a1a1a] mb-1">
                Địa chỉ Email của bạn
              </label>
              <input
                type="email"
                required
                placeholder="vidu@gmail.com"
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e5e1d8] bg-[#FAF9F6] text-sm text-[#1a1a1a] focus:bg-white focus:outline-none focus:border-[#4a7c59]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1a1a1a] mb-1">
                Mật khẩu đồng bộ (hoặc Mã sync cá nhân)
              </label>
              <input
                type="password"
                required
                placeholder="Nhập mật khẩu bạn tự chọn"
                value={syncKeyInput}
                onChange={e => setSyncKeyInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e5e1d8] bg-[#FAF9F6] text-sm text-[#1a1a1a] focus:bg-white focus:outline-none focus:border-[#4a7c59]"
              />
              <p className="text-[10px] text-[#6b7280] mt-1">
                Mật khẩu này dùng để bảo vệ tiến trình học tập của bạn trên đám mây.
              </p>
            </div>

            {/* Advanced toggle */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-xs text-[#6b7280] hover:text-[#4a7c59] flex items-center gap-1 font-semibold"
              >
                <Database size={12} />
                <span>{showAdvanced ? 'Ẩn cài đặt Supabase riêng' : 'Tùy chọn: Kết nối Supabase riêng của bạn'}</span>
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
              className="w-full py-3 rounded-2xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors disabled:opacity-50 mt-2"
            >
              {loading ? <RefreshCw size={15} className="animate-spin" /> : <Cloud size={15} />}
              <span>Kích Hoạt Đồng Bộ Đám Mây</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
