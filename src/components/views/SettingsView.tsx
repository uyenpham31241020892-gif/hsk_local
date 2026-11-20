import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import type { UserSettings } from '../../types';
import { speak } from '../../utils/exercises';
import { ArrowLeft, CheckCircle2, Volume2, Sparkles, Trash2, Eye, Sliders, ShieldCheck, Download, Upload, Cloud } from 'lucide-react';
import { CloudSyncModal } from '../auth/CloudSyncModal';
import { getSavedCloudAccount } from '../../utils/cloudSync';

export function SettingsView() {
  const { state, navigate, updateSettings } = useApp();
  const s = state.progress.settings;
  const [lastSavedMessage, setLastSavedMessage] = useState<string | null>(null);
  const [showCloudSync, setShowCloudSync] = useState(false);
  const savedAccount = getSavedCloudAccount();

  const update = (patch: Partial<UserSettings>, label: string) => {
    updateSettings(patch);
    const timeStr = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLastSavedMessage(`✓ Đã áp dụng: ${label} (${timeStr})`);
    setTimeout(() => {
      setLastSavedMessage(null);
    }, 3500);
  };

  const handleTestSpeech = () => {
    speak('你好！这是 tốc độ phát âm bạn vừa chọn.', s.speechRate);
  };

  const clearData = () => {
    if (window.confirm('Xóa toàn bộ tiến độ học tập? Hành động này không thể hoàn tác.')) {
      localStorage.removeItem('hsk_progress_v1');
      window.location.reload();
    }
  };

  const exportProgress = () => {
    try {
      const dataStr = localStorage.getItem('hsk_progress_v1') || JSON.stringify(state.progress);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `hsk_progress_backup_${new Date().toISOString().slice(0, 10)}.json`;
      link.click();
      URL.revokeObjectURL(url);
      setLastSavedMessage('✓ Đã tải file sao lưu tiến trình về máy!');
    } catch {
      alert('Không thể xuất file tiến trình');
    }
  };

  const importProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);
        if (parsed && typeof parsed === 'object') {
          localStorage.setItem('hsk_progress_v1', JSON.stringify(parsed));
          alert('Khôi phục tiến trình thành công! Ứng dụng sẽ tự tải lại.');
          window.location.reload();
        } else {
          alert('File sao lưu không hợp lệ!');
        }
      } catch {
        alert('Lỗi đọc file sao lưu. Vui lòng kiểm tra lại file .json!');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('home')}
            className="p-1.5 -ml-1 text-[#6b7280] hover:text-[#1a1a1a] rounded-xl hover:bg-[#FAF9F6] transition-colors"
            title="Quay lại Trang chủ"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-base font-bold text-[#1a1a1a]">Cài Đặt Hệ Thống</h1>
            <p className="text-[11px] text-[#6b7280]">Tự động lưu vào máy · Áp dụng tức thì</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          <CheckCircle2 size={13} />
          <span>Tự động đồng bộ</span>
        </div>
      </div>

      {/* Floating Save Notification */}
      {lastSavedMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-30 bg-[#1a1a1a] text-white text-xs font-semibold px-4 py-2 rounded-2xl shadow-lg border border-white/10 flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{lastSavedMessage}</span>
        </div>
      )}

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">
        {/* LIVE STATUS CARD (Kiểm tra xem hệ thống đã apply chưa) */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/90 rounded-3xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <h3 className="font-bold text-sm text-emerald-950">
                Bảng Trạng Thái Đang Kích Hoạt
              </h3>
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-0.5 rounded-full border border-emerald-200">
              Đang hoạt động
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white/80 p-3 rounded-2xl border border-emerald-100">
              <p className="text-[11px] text-[#6b7280]">Hệ giáo trình:</p>
              <p className="font-bold text-emerald-900 mt-0.5">
                {s.hskVersion === 'hsk2' ? 'HSK 2.0 (5.000 từ)' : s.hskVersion === 'hsk3' ? 'HSK 3.0 Mới' : 'Cả 2.0 & 3.0'}
              </p>
            </div>
            <div className="bg-white/80 p-3 rounded-2xl border border-emerald-100">
              <p className="text-[11px] text-[#6b7280]">Cấp độ hiển thị:</p>
              <p className="font-bold text-emerald-900 mt-0.5">
                Cấp {s.selectedLevels.sort().join(', ')}
              </p>
            </div>
          </div>

          {/* Test speech immediately */}
          <div className="bg-white p-3 rounded-2xl border border-emerald-200/70 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#1a1a1a]">
                Tốc độ đọc giọng mẫu: <span className="text-[#4a7c59] font-mono">{Math.round(s.speechRate * 100)}%</span>
              </p>
              <p className="text-[11px] text-[#6b7280]">Bấm nghe để thử trực tiếp tốc độ này</p>
            </div>
            <button
              onClick={handleTestSpeech}
              className="px-3.5 py-2 bg-[#4a7c59] hover:bg-[#3d6b4a] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
            >
              <Volume2 size={15} />
              <span>Nghe thử ngay</span>
            </button>
          </div>
        </div>

        {/* 1. HSK Version */}
        <Section title="1. Chọn phiên bản HSK muốn học" sub="Quyết định bộ từ vựng và khung bài thi được lọc trên web">
          <div className="grid grid-cols-3 gap-2">
            {(['hsk2', 'hsk3', 'both'] as const).map(v => (
              <button
                key={v}
                onClick={() => update({ hskVersion: v }, v === 'hsk2' ? 'HSK 2.0' : v === 'hsk3' ? 'HSK 3.0' : 'Cả HSK 2.0 & 3.0')}
                className={`py-3 rounded-2xl border text-xs font-bold transition-all ${
                  s.hskVersion === v 
                    ? 'bg-[#4a7c59] border-[#4a7c59] text-white shadow-xs scale-[1.02]' 
                    : 'border-[#e5e1d8] bg-white text-[#6b7280] hover:border-[#4a7c59]'
                }`}
              >
                {v === 'hsk2' ? 'HSK 2.0 (Gốc)' : v === 'hsk3' ? 'HSK 3.0 Mới' : 'Cả hai hệ'}
              </button>
            ))}
          </div>
        </Section>

        {/* 2. Levels */}
        <Section title="2. Cấp độ HSK hiển thị" sub="Lọc danh sách các bài học Pack 1, Pack 2... ngoài trang chủ">
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map(level => {
              const sel = s.selectedLevels.includes(level);
              return (
                <button
                  key={level}
                  onClick={() => {
                    if (sel && s.selectedLevels.length <= 1) return;
                    const next = sel ? s.selectedLevels.filter(l => l !== level) : [...s.selectedLevels, level];
                    update({ selectedLevels: next }, `Cấp độ ${next.sort().join(', ')}`);
                  }}
                  className={`px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all ${
                    sel 
                      ? 'bg-[#4a7c59] border-[#4a7c59] text-white shadow-xs scale-105' 
                      : 'border-[#e5e1d8] bg-white text-[#6b7280] hover:border-[#4a7c59]'
                  }`}
                >
                  Cấp HSK {level}
                </button>
              );
            })}
          </div>
        </Section>

        {/* 3. Speech rate */}
        <Section 
          title={`3. Tốc độ đọc phát âm tiếng Trung: ${Math.round(s.speechRate * 100)}%`}
          sub="Áp dụng cho tất cả bài học, flashcard, truyện thành ngữ và nghe chép"
        >
          <input
            type="range" min="50" max="150" step="5"
            value={Math.round(s.speechRate * 100)}
            onChange={e => update({ speechRate: parseInt(e.target.value) / 100 }, `Tốc độ đọc ${e.target.value}%`)}
            className="w-full accent-[#4a7c59] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#6b7280] font-mono mt-1">
            <span>Rất chậm (50%)</span>
            <span>Chuẩn bản xứ (85%–100%)</span>
            <span>Nhanh (150%)</span>
          </div>
        </Section>

        {/* 4. Display Toggles */}
        <Section title="4. Tùy chọn hiển thị & Luyện tập" sub="Điều chỉnh trải nghiệm làm bài tập và flashcard">
          <div className="space-y-3">
            <Toggle
              label="Hiển thị Pinyin trước"
              description="Hiện Pinyin ngay trên mặt trước của thẻ Flashcard (tắt nếu muốn thử trí nhớ mặt chữ Hán thuần túy)"
              checked={s.showPinyinFirst}
              onChange={v => update({ showPinyinFirst: v }, `Pinyin trước: ${v ? 'Bật' : 'Tắt'}`)}
            />
            <Toggle
              label="Chế độ Viết mù (Blind Mode)"
              description="Ẩn nét viền mờ màu xám khi tập viết chữ Hán, ép não tự nhớ thứ tự từng nét"
              checked={s.blindMode}
              onChange={v => update({ blindMode: v }, `Viết mù: ${v ? 'Bật' : 'Tắt'}`)}
            />
            <Toggle
              label="Bật thứ tự nét viết chuẩn"
              description="Sử dụng động cơ hoạt họa HanziWriter hướng dẫn quy tắc bút thuận"
              checked={s.enableStrokeOrder}
              onChange={v => update({ enableStrokeOrder: v }, `Nét chuẩn: ${v ? 'Bật' : 'Tắt'}`)}
            />
          </div>
        </Section>

        {/* 5. Daily Goal */}
        <Section title={`5. Mục tiêu học hàng ngày: ${s.dailyGoal} từ / ngày`} sub="Được tính vào tiến độ theo dõi mỗi ngày">
          <input
            type="range" min="5" max="100" step="5"
            value={s.dailyGoal}
            onChange={e => update({ dailyGoal: parseInt(e.target.value) }, `Mục tiêu ${e.target.value} từ/ngày`)}
            className="w-full accent-[#4a7c59] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#6b7280] mt-1 font-mono">
            <span>5 từ (Nhẹ nhàng)</span>
            <span>20 từ (Khuyên dùng)</span>
            <span>100 từ (Cày cấp tốc)</span>
          </div>
        </Section>

        {/* Data Backup & Restore */}
        <div className="bg-white border border-[#e5e1d8] rounded-3xl p-5 shadow-xs space-y-3">
          <div>
            <p className="text-sm font-bold text-[#1a1a1a]">📦 Sao lưu & Chuyển tiến trình giữa các máy</p>
            <p className="text-xs text-[#6b7280] mt-0.5">
              Dữ liệu học tập đang được lưu trên trình duyệt của máy này. Bạn có thể xuất file sao lưu để chuyển sang máy khác mà không cần đăng nhập.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <button
              onClick={() => setShowCloudSync(true)}
              className="w-full col-span-1 sm:col-span-2 py-3 px-4 rounded-2xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <Cloud size={16} />
              <span>{savedAccount ? `Tài khoản đám mây: ${savedAccount.email} (Bấm để quản lý)` : '☁️ Đăng nhập & Bật đồng bộ đám mây (Cloud Sync)'}</span>
            </button>

            <button
              onClick={exportProgress}
              className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#e8f0eb] hover:bg-[#d8e8dc] text-[#4a7c59] text-xs font-bold transition-all border border-[#4a7c59]/20 shadow-2xs"
            >
              <Download size={16} />
              <span>Xuất file tiến trình (.json)</span>
            </button>

            <label className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white hover:bg-[#FAF9F6] text-[#1a1a1a] text-xs font-bold transition-all border border-[#e5e1d8] cursor-pointer shadow-2xs">
              <Upload size={16} className="text-[#4a7c59]" />
              <span>Nhập file tiến trình (.json)</span>
              <input
                type="file"
                accept=".json"
                onChange={importProgress}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Danger zone */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-5 space-y-2">
          <p className="text-xs font-bold text-red-900 uppercase tracking-wider">Vùng quản trị dữ liệu</p>
          <p className="text-xs text-red-700 leading-relaxed">
            Tiến độ của bạn được lưu an toàn trong trình duyệt của bạn (localStorage). Nếu muốn học lại từ đầu, bấm nút bên dưới:
          </p>
          <button
            onClick={clearData}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-red-300 text-red-700 bg-white hover:bg-red-100 text-xs font-bold transition-all mt-2"
          >
            <Trash2 size={15} />
            <span>Xóa toàn bộ tiến độ & đặt lại</span>
          </button>
        </div>
      </div>

      <CloudSyncModal isOpen={showCloudSync} onClose={() => setShowCloudSync(false)} />
    </div>
  );
}

function Section({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 shadow-xs space-y-3">
      <div>
        <p className="text-sm font-bold text-[#1a1a1a]">{title}</p>
        {sub && <p className="text-xs text-[#6b7280] mt-0.5">{sub}</p>}
      </div>
      {children}
    </div>
  );
}

function Toggle({ label, description, checked, onChange }: { label: string; description: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-4 p-3 bg-[#FAF9F6] rounded-2xl border border-[#e5e1d8]/80">
      <div>
        <p className="text-xs font-bold text-[#1a1a1a]">{label}</p>
        <p className="text-[11px] text-[#6b7280] mt-0.5 leading-snug">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${checked ? 'bg-[#4a7c59]' : 'bg-[#d1cfc9]'}`}
      >
        <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </button>
    </div>
  );
}
