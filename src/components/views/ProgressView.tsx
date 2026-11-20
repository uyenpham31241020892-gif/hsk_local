import React from 'react';
import { useApp } from '../../store/AppContext';
import { getStats } from '../../utils/srs';
import { X, BookOpen, CheckCircle, Calendar, Target } from 'lucide-react';

export function ProgressView() {
  const { state, navigate } = useApp();
  const stats = getStats(state.progress);
  const history = [...state.progress.sessionHistory].reverse().slice(0, 20);

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-20">
      <div className="flex items-center gap-3 px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10">
        <button onClick={() => navigate('home')} className="p-2 rounded-lg hover:bg-[#FAF9F6] transition-colors">
          <X size={20} className="text-[#6b7280]" />
        </button>
        <h1 className="font-semibold text-[#1a1a1a]">Tiến độ học tập</h1>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">
        {/* Overview */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl border border-[#e5e1d8] p-4 text-center">
            <BookOpen size={20} className="text-[#4a7c59] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#1a1a1a]">{stats.learned}</p>
            <p className="text-xs text-[#6b7280]">Từ đã học</p>
          </div>
          <div className="bg-white rounded-2xl border border-[#e5e1d8] p-4 text-center">
            <Target size={20} className="text-amber-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#1a1a1a]">{stats.accuracy}%</p>
            <p className="text-xs text-[#6b7280]">Độ chính xác</p>
          </div>
          <div className="bg-white rounded-2xl border border-[#e5e1d8] p-4 text-center">
            <Calendar size={20} className="text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#1a1a1a]">{stats.streak}</p>
            <p className="text-xs text-[#6b7280]">Ngày liên tiếp</p>
          </div>
          <div className="bg-white rounded-2xl border border-[#e5e1d8] p-4 text-center">
            <CheckCircle size={20} className="text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#1a1a1a]">{stats.totalSessions}</p>
            <p className="text-xs text-[#6b7280]">Phiên học</p>
          </div>
        </div>

        {/* Accuracy bar */}
        <div className="bg-white rounded-2xl border border-[#e5e1d8] p-5">
          <div className="flex justify-between mb-2">
            <p className="text-sm font-medium text-[#1a1a1a]">Độ chính xác tổng</p>
            <p className="text-sm text-[#4a7c59] font-semibold">{stats.accuracy}%</p>
          </div>
          <div className="h-3 bg-[#e5e1d8] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4a7c59] rounded-full progress-bar"
              style={{ width: `${stats.accuracy}%` }}
            />
          </div>
          <p className="text-xs text-[#6b7280] mt-2">{stats.totalWords} câu đã làm</p>
        </div>

        {/* Session history */}
        {history.length > 0 && (
          <div className="bg-white rounded-2xl border border-[#e5e1d8] overflow-hidden">
            <div className="p-4 border-b border-[#e5e1d8]">
              <p className="font-medium text-[#1a1a1a] text-sm">Lịch sử phiên học</p>
            </div>
            <div className="divide-y divide-[#e5e1d8]">
              {history.map((s, i) => {
                const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
                const date = new Date(s.date).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
                return (
                  <div key={i} className="flex items-center gap-3 px-4 py-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${pct >= 80 ? 'bg-green-50 text-green-700' : pct >= 50 ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'}`}>
                      {pct}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#1a1a1a] truncate">{s.packId}</p>
                      <p className="text-xs text-[#6b7280]">{s.correct}/{s.total} đúng · {s.mode}</p>
                    </div>
                    <p className="text-xs text-[#b5b2ab]">{date}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {history.length === 0 && (
          <div className="bg-white rounded-2xl border border-[#e5e1d8] p-8 text-center">
            <p className="text-[#6b7280] text-sm">Chưa có phiên học nào. Hãy bắt đầu học nhé!</p>
          </div>
        )}
      </div>
    </div>
  );
}
