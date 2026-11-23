import React, { useState, useMemo } from 'react';
import { useApp } from '../../store/AppContext';
import { allPacks } from '../../data';
import { sixMonthRoadmap, type RoadmapLesson } from '../../data/roadmap_data';
import { getStats } from '../../utils/srs';
import { 
  BookOpen, Zap, TrendingUp, Settings, Award, 
  CheckCircle, ChevronRight, Sliders, Check, CheckSquare, Cloud,
  Compass, Calendar, Target, Flag, Play, Sparkles, Languages, Filter
} from 'lucide-react';
import { CloudSyncModal } from '../auth/CloudSyncModal';
import { getSavedCloudAccount } from '../../utils/cloudSync';

export function HomeView() {
  const { state, navigate } = useApp();
  const { settings } = state.progress;
  const stats = getStats(state.progress);
  
  // Bộ lọc cho lộ trình bài học duy nhất
  const [stageFilter, setStageFilter] = useState<number | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'vocab' | 'grammar_review' | 'checkpoint'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'learning' | 'completed' | 'unlearned'>('all');
  const [showCloudSync, setShowCloudSync] = useState(false);
  const cloudAccount = getSavedCloudAccount();

  const passedMilestones = new Set(state.progress.passedMilestones || []);

  // Tính toán trạng thái hoàn thành và tiến độ từng bài trong lộ trình
  const lessonsWithProgress = useMemo(() => {
    return sixMonthRoadmap.map(lesson => {
      let isCompleted = false;
      let isLearning = false;
      let pct = 0;
      let doneWords = 0;
      let totalWords = 15;

      if (lesson.type === 'checkpoint' || lesson.type === 'graduation_mock') {
        if (lesson.checkpointExamId && passedMilestones.has(lesson.checkpointExamId)) {
          isCompleted = true;
          pct = 100;
        }
      } else if (lesson.packId) {
        const pack = allPacks.find(p => p.id === lesson.packId);
        if (pack) {
          totalWords = pack.vocabIds.length;
          doneWords = pack.vocabIds.filter(id => {
            const card = state.progress.cards[id];
            return card && card.repetitions > 0;
          }).length;
          
          if (state.progress.completedPacks?.includes(lesson.packId) || (totalWords > 0 && doneWords >= totalWords)) {
            isCompleted = true;
            pct = 100;
          } else if (doneWords > 0) {
            isLearning = true;
            pct = Math.round((doneWords / totalWords) * 100);
          }
        }
      }

      const status: 'completed' | 'learning' | 'unlearned' = isCompleted ? 'completed' : isLearning ? 'learning' : 'unlearned';

      return {
        lesson,
        isCompleted,
        isLearning,
        status,
        pct,
        doneWords,
        totalWords,
      };
    });
  }, [state.progress.cards, state.progress.completedPacks, passedMilestones]);

  // Bộ lọc bài học
  const filteredLessons = useMemo(() => {
    return lessonsWithProgress.filter(item => {
      const { lesson } = item;
      
      // Lọc theo Chặng / Tháng
      if (stageFilter !== 'all') {
        if (stageFilter === 45) {
          if (lesson.month !== 4 && lesson.month !== 5) return false;
        } else if (lesson.month !== stageFilter) {
          return false;
        }
      }

      // Lọc theo Loại bài
      if (typeFilter !== 'all') {
        if (typeFilter === 'checkpoint') {
          if (lesson.type !== 'checkpoint' && lesson.type !== 'graduation_mock') return false;
        } else if (lesson.type !== typeFilter) {
          return false;
        }
      }

      // Lọc theo Trạng thái học
      if (statusFilter !== 'all') {
        if (item.status !== statusFilter) return false;
      }

      return true;
    });
  }, [lessonsWithProgress, stageFilter, typeFilter, statusFilter]);

  const completedLessonsCount = lessonsWithProgress.filter(item => item.isCompleted).length;
  const overallRoadmapPercent = Math.round((completedLessonsCount / sixMonthRoadmap.length) * 100);

  const handleLessonClick = (lesson: RoadmapLesson) => {
    if (lesson.type === 'checkpoint' || lesson.type === 'graduation_mock') {
      navigate('checkpoint', lesson.checkpointExamId || undefined);
    } else if (lesson.type === 'grammar_review') {
      (window as any).__initialLessonTab = 'grammar';
      navigate('lesson', lesson.packId || 'hsk1_pack1');
    } else {
      (window as any).__initialLessonTab = 'preview';
      navigate('lesson', lesson.packId || 'hsk1_pack1');
    }
  };

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
            <p className="text-[11px] text-[#6b7280]">Lộ trình sư phạm toàn diện HSK 1 - HSK 4</p>
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

        {/* COMPACT HUB SHORTCUT PILL */}
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
                Kho tài liệu tra cứu và công cụ bổ trợ học ngữ pháp & chữ Hán chuyên sâu
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-[#4a7c59] group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
            Khám phá ➔
          </span>
        </div>

        {/* ROADMAP SECTION: UNIFIED PEDAGOGICAL CURRICULUM */}
        <div className="space-y-4 pt-1">
          {/* Roadmap Progress Banner */}
          <div className="bg-white border border-[#e5e1d8] rounded-3xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-[#1a1a1a]">Tiến độ lộ trình học bài bản (HSK 1 - HSK 4)</h3>
                  <span className="text-[10px] font-bold text-[#4a7c59] bg-[#e8f0eb] px-2 py-0.5 rounded-full">
                    {completedLessonsCount} / {sixMonthRoadmap.length} bài xong
                  </span>
                </div>
                <p className="text-xs text-[#6b7280] mt-0.5">
                  Chu kỳ khoa học: <strong>2 Bài Từ Vựng ➔ 1 Bài Ngữ Pháp & Ôn Tập ➔ 1 Bài Kiểm Tra Định Kỳ ➔ Thi Tốt Nghiệp</strong>
                </p>
              </div>
              <span className="text-lg font-black text-[#4a7c59] bg-[#e8f0eb] px-3.5 py-1 rounded-2xl shadow-2xs">
                {overallRoadmapPercent}%
              </span>
            </div>

            <div className="h-2.5 bg-[#FAF9F6] border border-[#e5e1d8] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#4a7c59] rounded-full transition-all duration-700" 
                style={{ width: `${overallRoadmapPercent}%` }} 
              />
            </div>
          </div>

          {/* Stage / Month Filter Tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs font-semibold scrollbar-none">
            {[
              { id: 'all', label: `Tất cả (${sixMonthRoadmap.length} bài)` },
              { id: 1, label: 'Tháng 1: HSK 1 Cơ bản (Bài 1-16)' },
              { id: 2, label: 'Tháng 2: HSK 1 Tốt nghiệp (Bài 17-29)' },
              { id: 3, label: 'Tháng 3: HSK 2 Cấp tốc (Bài 30-40)' },
              { id: 45, label: 'Tháng 4-5: HSK 3 Bứt phá (Bài 41-47)' },
              { id: 6, label: 'Tháng 6: HSK 4 Chinh phục (Bài 48-51)' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setStageFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                  stageFilter === tab.id
                    ? 'bg-[#4a7c59] text-white shadow-2xs font-bold'
                    : 'bg-white border border-[#e5e1d8] text-[#6b7280] hover:bg-[#FAF9F6]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Sub-filters: Type & Status */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            {/* Filter by lesson type */}
            <div className="flex gap-1 bg-[#e5e1d8]/50 p-1 rounded-xl text-xs font-medium">
              {[
                { id: 'all', label: 'Tất cả loại bài' },
                { id: 'vocab', label: '📖 Từ mới' },
                { id: 'grammar_review', label: '📐 Ngữ pháp + Ôn từ' },
                { id: 'checkpoint', label: '🎯 Kiểm tra & Thi thử' },
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setTypeFilter(t.id as any)}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    typeFilter === t.id ? 'bg-white text-[#1a1a1a] shadow-xs font-bold' : 'text-[#6b7280]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Filter by completion status */}
            <div className="flex gap-1 bg-[#e5e1d8]/50 p-1 rounded-xl text-xs font-medium">
              {[
                { id: 'all', label: 'Tất cả trạng thái' },
                { id: 'learning', label: 'Đang học' },
                { id: 'completed', label: 'Đã xong' },
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => setStatusFilter(s.id as any)}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    statusFilter === s.id ? 'bg-white text-[#1a1a1a] shadow-xs font-bold' : 'text-[#6b7280]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Roadmap Lessons List */}
          <div className="space-y-3 pt-1">
            {filteredLessons.length === 0 ? (
              <div className="bg-white border border-[#e5e1d8] rounded-3xl p-8 text-center text-[#6b7280] text-sm">
                Không tìm thấy bài học nào phù hợp với bộ lọc hiện tại.
              </div>
            ) : (
              filteredLessons.map(({ lesson, isCompleted, isLearning, pct, doneWords, totalWords }) => {
                const typeCls = 
                  lesson.type === 'vocab' ? 'bg-emerald-100 text-emerald-800' :
                  lesson.type === 'grammar_review' ? 'bg-indigo-100 text-indigo-800' :
                  lesson.type === 'checkpoint' ? 'bg-amber-100 text-amber-800' :
                  'bg-rose-100 text-rose-800';

                const typeLabel = 
                  lesson.type === 'vocab' ? '📖 Học từ mới' :
                  lesson.type === 'grammar_review' ? '📐 Ngữ pháp + Ôn từ' :
                  lesson.type === 'checkpoint' ? '🎯 Kiểm tra định kỳ' :
                  '🏆 Đại thi tốt nghiệp';

                return (
                  <div
                    key={lesson.id}
                    onClick={() => handleLessonClick(lesson)}
                    className={`rounded-3xl border p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 cursor-pointer transition-all shadow-xs group ${
                      isCompleted 
                        ? 'border-emerald-300 bg-emerald-50/20 hover:border-emerald-500' 
                        : isLearning
                        ? 'border-amber-300 bg-amber-50/20 hover:border-amber-500'
                        : 'border-[#e5e1d8] bg-white hover:border-[#4a7c59]'
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                      {/* Step Circle */}
                      <div className={`w-12 h-12 rounded-2xl flex flex-col items-center justify-center shrink-0 font-bold transition-all ${
                        isCompleted
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : isLearning
                          ? 'bg-amber-500 text-white shadow-xs'
                          : lesson.type === 'graduation_mock'
                          ? 'bg-rose-500 text-white shadow-xs'
                          : 'bg-[#e8f0eb] text-[#4a7c59]'
                      }`}>
                        {isCompleted ? (
                          <Check size={22} />
                        ) : (
                          <>
                            <span className="text-[10px] uppercase font-mono leading-none">Bài</span>
                            <span className="text-base font-black leading-tight">{lesson.lessonNumber}</span>
                          </>
                        )}
                      </div>

                      {/* Content Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${typeCls}`}>
                            {typeLabel}
                          </span>
                          <span className="text-[10px] text-[#6b7280] bg-[#FAF9F6] border border-[#e5e1d8] px-2 py-0.5 rounded-full font-medium">
                            Tuần {lesson.week} · Tháng {lesson.month} · {lesson.stage.toUpperCase()}
                          </span>
                          <span className="text-[10px] font-bold text-[#4a7c59] bg-[#e8f0eb] px-2 py-0.5 rounded-full">
                            🎯 {lesson.targetCountText}
                          </span>
                          {isCompleted && (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Check size={10} /> Đã hoàn thành
                            </span>
                          )}
                          {isLearning && (
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                              Đang học ({doneWords}/{totalWords} từ · {pct}%)
                            </span>
                          )}
                        </div>

                        <h4 className="font-bold text-sm sm:text-base text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors leading-snug">
                          {lesson.titleVi}
                        </h4>
                        <p className="text-xs text-[#6b7280] mt-1 line-clamp-2">
                          {lesson.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Action */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#e5e1d8]/50">
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-800 group-hover:bg-emerald-200'
                          : isLearning
                          ? 'bg-amber-100 text-amber-800 group-hover:bg-amber-200'
                          : lesson.type === 'graduation_mock'
                          ? 'bg-rose-500 text-white shadow-xs group-hover:bg-rose-600'
                          : 'bg-[#4a7c59] text-white shadow-xs group-hover:bg-[#3d6b4a]'
                      }`}>
                        {isCompleted ? (
                          'Ôn lại bài'
                        ) : isLearning ? (
                          'Học tiếp'
                        ) : lesson.type === 'checkpoint' ? (
                          'Làm bài thi'
                        ) : lesson.type === 'graduation_mock' ? (
                          'Thi tốt nghiệp'
                        ) : lesson.type === 'grammar_review' ? (
                          'Học ngữ pháp'
                        ) : (
                          'Vào học bài'
                        )}
                        <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                );
              })
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
