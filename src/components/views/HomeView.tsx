import React, { useState, useMemo } from 'react';
import { useApp } from '../../store/AppContext';
import { allPacks } from '../../data';
import { getStats } from '../../utils/srs';
import { 
  BookOpen, Zap, TrendingUp, Settings, Award, 
  CheckCircle, ChevronRight, Sliders, Check, CheckSquare, Cloud
} from 'lucide-react';
import { CloudSyncModal } from '../auth/CloudSyncModal';
import { getSavedCloudAccount } from '../../utils/cloudSync';

export function HomeView() {
  const { state, navigate } = useApp();
  const { settings } = state.progress;
  const stats = getStats(state.progress);
  const [packStatusFilter, setPackStatusFilter] = useState<'all' | 'learning' | 'completed' | 'unlearned'>('all');
  const [displayCount, setDisplayCount] = useState(25);
  const [showCloudSync, setShowCloudSync] = useState(false);
  const cloudAccount = getSavedCloudAccount();

  const passedMilestones = new Set(state.progress.passedMilestones || []);
  const hskLabel = settings.hskVersion === 'hsk2' ? 'HSK 2.0' : settings.hskVersion === 'hsk3' ? 'HSK 3.0' : 'HSK 2.0 & 3.0';

  // Filter packs by selected levels
  const filteredPacks = useMemo(() => {
    return allPacks.filter(p => {
      if (settings.hskVersion === 'hsk2') return p.hsk2Levels.some(l => settings.selectedLevels.includes(l));
      if (settings.hskVersion === 'hsk3') return p.hsk3Levels.some(l => settings.selectedLevels.includes(l));
      return p.hsk2Levels.some(l => settings.selectedLevels.includes(l)) || p.hsk3Levels.some(l => settings.selectedLevels.includes(l));
    });
  }, [settings.hskVersion, settings.selectedLevels]);

  // Compute status & mastery for each pack
  const packStatsList = useMemo(() => {
    return filteredPacks.map(pack => {
      const doneCount = pack.vocabIds.filter(id => {
        const c = state.progress.cards[id];
        return c && c.repetitions > 0;
      }).length;
      const isCompleted = (state.progress.completedPacks && state.progress.completedPacks.includes(pack.id)) || (pack.vocabIds.length > 0 && doneCount >= pack.vocabIds.length);
      const isLearning = !isCompleted && doneCount > 0;
      const isUnlearned = !isCompleted && doneCount === 0;
      const pct = pack.vocabIds.length > 0 ? Math.round((doneCount / pack.vocabIds.length) * 100) : 0;
      return {
        pack,
        doneCount,
        totalCount: pack.vocabIds.length,
        pct,
        status: (isCompleted ? 'completed' : isLearning ? 'learning' : 'unlearned') as 'completed' | 'learning' | 'unlearned'
      };
    });
  }, [filteredPacks, state.progress.cards, state.progress.completedPacks]);

  const completedPacksCount = packStatsList.filter(p => p.status === 'completed').length;
  const learningPacksCount = packStatsList.filter(p => p.status === 'learning').length;
  const unlearnedPacksCount = packStatsList.filter(p => p.status === 'unlearned').length;
  const totalWordsLearnedInFilter = packStatsList.reduce((acc, p) => acc + p.doneCount, 0);
  const totalWordsInFilter = packStatsList.reduce((acc, p) => acc + p.totalCount, 0);
  const overallPercent = totalWordsInFilter > 0 ? Math.round((totalWordsLearnedInFilter / totalWordsInFilter) * 100) : 0;

  const visiblePacks = useMemo(() => {
    return packStatsList.filter(item => {
      if (packStatusFilter === 'learning') return item.status === 'learning';
      if (packStatusFilter === 'completed') return item.status === 'completed';
      if (packStatusFilter === 'unlearned') return item.status === 'unlearned';
      return true;
    });
  }, [packStatsList, packStatusFilter]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#4a7c59] text-white flex items-center justify-center font-bold text-base shadow-xs">
            学
          </div>
          <div>
            <h1 className="text-base font-bold text-[#1a1a1a] tracking-tight">学中文 · HSK Master</h1>
            <p className="text-[11px] text-[#6b7280]">Hệ thống luyện thi HSK 2.0 & HSK 3.0 Không Quảng Cáo</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Cloud Sync Status Button */}
          <button
            onClick={() => setShowCloudSync(true)}
            className={`p-2 rounded-xl border flex items-center gap-1.5 transition-colors ${
              cloudAccount 
                ? 'bg-emerald-50 border-emerald-200 text-[#4a7c59] hover:bg-emerald-100' 
                : 'hover:bg-[#FAF9F6] border-[#e5e1d8] text-[#6b7280]'
            }`}
            title={cloudAccount ? `Đang đồng bộ đám mây: ${cloudAccount.email}` : 'Đăng nhập & Đồng bộ đám mây'}
          >
            <Cloud size={17} />
            <span className="text-xs font-semibold sm:inline hidden">
              {cloudAccount ? cloudAccount.email.split('@')[0] : 'Đồng bộ'}
            </span>
          </button>

          <button
            onClick={() => navigate('progress')}
            className="p-2 rounded-xl hover:bg-[#FAF9F6] border border-[#e5e1d8] transition-colors"
            title="Thống kê học tập"
          >
            <TrendingUp size={18} className="text-[#4a7c59]" />
          </button>
          <button
            onClick={() => navigate('settings')}
            className="p-2 rounded-xl hover:bg-[#FAF9F6] border border-[#e5e1d8] transition-colors"
            title="Cài đặt"
          >
            <Settings size={18} className="text-[#6b7280]" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          <StatCard label="Đã học" value={stats.learned} sub="từ vựng" color="green" />
          <StatCard label="Cần ôn SRS" value={stats.due} sub="hôm nay" color={stats.due > 0 ? 'amber' : 'green'} />
          <StatCard label="Chuỗi học" value={state.progress.currentStreak} sub="ngày" color="blue" icon={<Award size={14} />} />
        </div>

        {/* SRS Review Banner (if due) */}
        {stats.due > 0 && (
          <div
            className="bg-amber-50 border border-amber-200/90 rounded-3xl p-4 flex items-center justify-between cursor-pointer hover:bg-amber-100/80 transition-all shadow-xs"
            onClick={() => navigate('review')}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
                🔁
              </div>
              <div>
                <p className="font-bold text-sm text-amber-900">Ôn tập ngắt quãng SRS</p>
                <p className="text-amber-800 text-xs">{stats.due} từ đã đến hạn ôn tập hôm nay</p>
              </div>
            </div>
            <div className="bg-amber-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs">
              Ôn ngay
            </div>
          </div>
        )}

        {/* Quick start SRS mix Button */}
        <button
          onClick={() => navigate('review')}
          className="w-full bg-[#4a7c59] text-white rounded-3xl p-5 flex items-center justify-between hover:bg-[#3d6b4a] transition-all shadow-sm active:scale-[0.99] group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-2xl p-3.5 group-hover:scale-105 transition-transform">
              <Zap size={24} className="text-white" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <p className="font-bold text-base sm:text-lg">Ôn Tập Hỗn Hợp Đa Chiều (Smart Mix)</p>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">SRS</span>
              </div>
              <p className="text-white/80 text-xs mt-0.5">
                Tự động trộn 8 dạng bài: Lật thẻ, Viết nét, Điền từ, Xếp câu, Sửa lỗi, Nghe chép...
              </p>
            </div>
          </div>
          <ChevronRight size={20} className="text-white/70 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* COMPACT HUB SHORTCUT PILL: Clean 1-line link to HubView, keeps HomeView tidy */}
        <div
          onClick={() => navigate('hub')}
          className="bg-white border border-[#e5e1d8] rounded-2xl p-3.5 px-4 flex items-center justify-between cursor-pointer hover:border-[#4a7c59] hover:bg-[#FAF9F6] transition-all shadow-2xs group"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#e8f0eb] text-[#4a7c59] flex items-center justify-center font-bold text-base shrink-0">
              🏮
            </div>
            <div>
              <p className="font-bold text-xs text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors">
                12 Chuyên đề bổ trợ: 229 Ngữ pháp, 214 Bộ thủ, Lượng từ, Thành ngữ, Trò chơi...
              </p>
              <p className="text-[11px] text-[#6b7280]">
                Đã gom gọn tại tab "Chuyên mục" để trang lộ trình học HSK luôn thông thoáng
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-[#4a7c59] group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
            Khám phá ➔
          </span>
        </div>

        {/* PACKS SECTION */}
        <div id="packs-section" className="space-y-4 pt-1">
          {/* Active Settings Filter Badge */}
          <div className="flex items-center justify-between text-xs bg-[#e8f0eb]/70 border border-[#4a7c59]/20 p-2.5 px-3.5 rounded-2xl">
            <span className="text-[#4a7c59] font-medium flex items-center gap-1.5">
              <Sliders size={13} />
              Đang lọc theo Cài đặt: <strong>{hskLabel}</strong> · Cấp <strong>{settings.selectedLevels.sort().join(', ')}</strong> ({filteredPacks.length} bài)
            </span>
            <button
              onClick={() => navigate('settings')}
              className="text-[#4a7c59] font-bold hover:underline text-[11px]"
            >
              Chỉnh cài đặt ➔
            </button>
          </div>

          {/* Overall Curriculum Progress Banner */}
          <div className="bg-white border border-[#e5e1d8] rounded-3xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-[#1a1a1a]">Tiến độ học giáo trình hiện tại</h3>
                  <span className="text-[10px] font-bold text-[#4a7c59] bg-[#e8f0eb] px-2 py-0.5 rounded-full">
                    {completedPacksCount} / {filteredPacks.length} bài xong
                  </span>
                </div>
                <p className="text-xs text-[#6b7280] mt-0.5">
                  Đã thuộc <strong>{totalWordsLearnedInFilter}</strong> / {totalWordsInFilter} từ vựng ({overallPercent}%)
                </p>
              </div>
              <span className="text-lg font-black text-[#4a7c59] bg-[#e8f0eb] px-3.5 py-1 rounded-2xl shadow-2xs">
                {overallPercent}%
              </span>
            </div>

            <div className="h-2.5 bg-[#FAF9F6] border border-[#e5e1d8] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#4a7c59] rounded-full transition-all duration-700" 
                style={{ width: `${overallPercent}%` }} 
              />
            </div>
          </div>

          {/* Section Header & Status Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
            <div>
              <h2 className="font-bold text-base text-[#1a1a1a] flex items-center gap-2">
                <span>📚</span> Danh sách bài học ({filteredPacks.length} bài)
              </h2>
              <p className="text-xs text-[#6b7280]">
                Quy trình: Xem mặt chữ & phát âm ➔ Chọn dạng bài luyện ➔ Đạt chuẩn
              </p>
            </div>

            {/* Status Filter Tabs */}
            <div className="flex gap-1 bg-[#e5e1d8]/50 p-1 rounded-xl self-start sm:self-auto text-xs font-semibold overflow-x-auto max-w-full">
              <button
                onClick={() => setPackStatusFilter('all')}
                className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap ${
                  packStatusFilter === 'all' ? 'bg-white text-[#1a1a1a] shadow-xs' : 'text-[#6b7280]'
                }`}
              >
                Tất cả ({packStatsList.length})
              </button>
              <button
                onClick={() => setPackStatusFilter('learning')}
                className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap ${
                  packStatusFilter === 'learning' ? 'bg-amber-500 text-white shadow-xs font-bold' : 'text-amber-800'
                }`}
              >
                ⚡ Đang học ({learningPacksCount})
              </button>
              <button
                onClick={() => setPackStatusFilter('completed')}
                className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap ${
                  packStatusFilter === 'completed' ? 'bg-[#4a7c59] text-white shadow-xs font-bold' : 'text-[#4a7c59]'
                }`}
              >
                ✅ Đã xong ({completedPacksCount})
              </button>
              <button
                onClick={() => setPackStatusFilter('unlearned')}
                className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap ${
                  packStatusFilter === 'unlearned' ? 'bg-white text-[#1a1a1a] shadow-xs' : 'text-[#6b7280]'
                }`}
              >
                ⚪ Chưa học ({unlearnedPacksCount})
              </button>
            </div>
          </div>

          {/* Pack Cards List with Clean Periodic Milestone Cards Every 3 Lessons */}
          <div className="space-y-3">
            {visiblePacks.length === 0 ? (
              <div className="bg-white border border-[#e5e1d8] rounded-3xl p-8 text-center text-xs text-[#6b7280]">
                Không có bài học nào trong mục này.
              </div>
            ) : (
              visiblePacks.slice(0, displayCount).map(({ pack, doneCount, totalCount, pct, status }, index) => {
                const isCompleted = status === 'completed';
                const isLearning = status === 'learning';

                const borderCls = isCompleted
                  ? 'border-emerald-300 bg-emerald-50/20 hover:border-emerald-500'
                  : isLearning
                  ? 'border-amber-300 bg-amber-50/20 hover:border-amber-500'
                  : 'border-[#e5e1d8] bg-white hover:border-[#4a7c59]';

                // Periodic milestone exam occurs every 3 lessons (after pack 3, 6, 9, 12, etc.)
                const isPeriodicMilestone = (index + 1) % 3 === 0;
                const milestoneNum = Math.floor((index + 1) / 3);
                const milestoneId = `milestone_periodic_${milestoneNum}`;
                const isMilestonePassed = passedMilestones.has(milestoneId);

                return (
                  <React.Fragment key={pack.id}>
                    <div
                      onClick={() => navigate('lesson', pack.id)}
                      className={`rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer transition-all ${borderCls} shadow-xs group`}
                    >
                      <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                          isCompleted
                            ? 'bg-emerald-100 text-emerald-700'
                            : isLearning
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-[#e8f0eb] text-[#4a7c59]'
                        }`}>
                          {isCompleted ? <CheckCircle size={20} /> : <BookOpen size={20} />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors">
                              {pack.titleVi}
                            </h4>
                            <span className="text-[10px] font-bold text-[#4a7c59] bg-[#e8f0eb] px-2 py-0.5 rounded-full">
                              HSK {pack.hsk2Levels.join(',')}
                            </span>

                            {/* Status Badge */}
                            {isCompleted && (
                              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <Check size={11} /> Đã hoàn thành ({doneCount}/{totalCount} từ)
                              </span>
                            )}
                            {isLearning && (
                              <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                                ⚡ Đang học ({doneCount}/{totalCount} từ · {pct}%)
                              </span>
                            )}
                            {!isCompleted && !isLearning && (
                              <span className="text-[10px] font-medium text-[#6b7280] bg-[#FAF9F6] border border-[#e5e1d8] px-2 py-0.5 rounded-full">
                                ⚪ Chưa học (0/{totalCount} từ)
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-[#6b7280] mt-1">
                            {totalCount} từ vựng · Chủ đề: {pack.topic}
                          </p>

                          {(isLearning || isCompleted) && (
                            <div className="mt-2 h-1.5 bg-[#e5e1d8] rounded-full overflow-hidden max-w-xs">
                              <div
                                className={`h-full rounded-full transition-all ${isCompleted ? 'bg-emerald-600' : 'bg-amber-500'}`}
                                style={{ width: `${isCompleted ? 100 : pct}%` }}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#e5e1d8]/50">
                        <div className="text-right sm:block hidden">
                          <span className={`text-xs font-bold ${isCompleted ? 'text-emerald-700' : isLearning ? 'text-amber-700' : 'text-[#6b7280]'}`}>
                            {doneCount}/{totalCount}
                          </span>
                          <p className="text-[10px] text-[#6b7280]">từ đã nhớ</p>
                        </div>

                        <span className="text-xs font-bold text-[#4a7c59] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          {isCompleted ? 'Ôn lại' : isLearning ? 'Học tiếp' : 'Bắt đầu học'} ➔
                        </span>
                      </div>
                    </div>

                    {/* PERIODIC MILESTONE EXAM: Formatted cleanly as a normal lesson card, without bold dark-green banners */}
                    {isPeriodicMilestone && (
                      <div
                        onClick={() => navigate('checkpoint', milestoneId)}
                        className={`rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer transition-all ${
                          isMilestonePassed
                            ? 'border-emerald-300 bg-emerald-50/20 hover:border-emerald-500'
                            : 'border-[#e5e1d8] bg-white hover:border-[#4a7c59]'
                        } shadow-xs group`}
                      >
                        <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                            isMilestonePassed
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-[#e8f0eb] text-[#4a7c59]'
                          }`}>
                            {isMilestonePassed ? <CheckCircle size={20} /> : <CheckSquare size={20} />}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors">
                                Bài kiểm tra định kỳ {milestoneNum} (Sau bài {index - 1}, {index}, {index + 1})
                              </h4>
                              <span className="text-[10px] font-bold text-[#4a7c59] bg-[#e8f0eb] px-2 py-0.5 rounded-full">
                                Kiểm tra định kỳ
                              </span>

                              {isMilestonePassed ? (
                                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                  <Check size={11} /> Đã đạt (≥ 60/100)
                                </span>
                              ) : (
                                <span className="text-[10px] font-medium text-[#6b7280] bg-[#FAF9F6] border border-[#e5e1d8] px-2 py-0.5 rounded-full">
                                  ⚪ Chưa làm
                                </span>
                              )}
                            </div>

                            <p className="text-xs text-[#6b7280] mt-1">
                              20 câu hỏi chuẩn đề thi HSK (10 Nghe + 10 Đọc) · 20 phút · Xào lại toàn bộ từ vựng 3 bài trước
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#e5e1d8]/50">
                          <div className="text-right sm:block hidden">
                            <span className="text-xs font-bold text-[#4a7c59]">
                              20 câu
                            </span>
                            <p className="text-[10px] text-[#6b7280]">20 phút</p>
                          </div>

                          <span className="text-xs font-bold text-[#4a7c59] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                            {isMilestonePassed ? 'Thi lại' : 'Làm bài thi'} ➔
                          </span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })
            )}

            {visiblePacks.length > displayCount && (
              <button
                onClick={() => setDisplayCount(prev => prev + 25)}
                className="w-full py-3 rounded-2xl border border-[#e5e1d8] bg-white text-xs font-bold text-[#4a7c59] hover:bg-[#e8f0eb] transition-colors"
              >
                Xem thêm bài học khác (+{visiblePacks.length - displayCount} bài)
              </button>
            )}
          </div>
        </div>
      </div>

      <CloudSyncModal isOpen={showCloudSync} onClose={() => setShowCloudSync(false)} />
    </div>
  );
}

function StatCard({ label, value, sub, color, icon }: { label: string; value: number; sub: string; color: string; icon?: React.ReactNode }) {
  const colors: Record<string, string> = {
    green: 'bg-green-50 border-green-200',
    amber: 'bg-amber-50 border-amber-200',
    blue: 'bg-blue-50 border-blue-200',
  };
  const textColors: Record<string, string> = {
    green: 'text-green-700',
    amber: 'text-amber-700',
    blue: 'text-blue-700',
  };

  return (
    <div className={`rounded-3xl border p-3.5 text-center ${colors[color] || colors.green}`}>
      <p className={`text-2xl font-bold ${textColors[color]} flex items-center justify-center gap-1`}>
        {icon}{value}
      </p>
      <p className="text-xs font-semibold text-[#1a1a1a] mt-0.5">{label}</p>
      <p className="text-[10px] text-[#6b7280]">{sub}</p>
    </div>
  );
}
