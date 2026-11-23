import React, { useState, useMemo } from 'react';
import { useApp } from '../../store/AppContext';
import { grammarTopics, type GrammarTopicEntry } from '../../data/grammar_topics_data';
import { allVocab } from '../../data';
import { speak, buildGrammarExercises } from '../../utils/exercises';
import { ExerciseRunner } from '../exercises/ExerciseRunner';
import type { Exercise } from '../../types';
import { 
  ArrowLeft, 
  Search, 
  BookOpen, 
  Layers, 
  CheckCircle, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  X,
  Volume2,
  Zap,
  RotateCcw
} from 'lucide-react';

export function GrammarView() {
  const { navigate } = useApp();
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopicEntry | null>(null);

  // Trạng thái luyện tập bài tập ngữ pháp
  const [isPracticing, setIsPracticing] = useState(false);
  const [grammarExercises, setGrammarExercises] = useState<Exercise[]>([]);
  const [practiceResult, setPracticeResult] = useState<{ correct: number; total: number } | null>(null);

  const handleStartGrammarPractice = (topic: GrammarTopicEntry) => {
    const exList = buildGrammarExercises(topic, allVocab);
    if (!exList || exList.length === 0) {
      alert('Chuyên đề này hiện đang hoàn thiện bộ câu hỏi mẫu.');
      return;
    }
    setGrammarExercises(exList);
    setIsPracticing(true);
    setPracticeResult(null);
  };

  const filteredTopics = useMemo(() => {
    return grammarTopics.filter((topic) => {
      // Level filter
      if (selectedLevel !== 'all' && topic.level.toUpperCase() !== selectedLevel.toUpperCase()) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && topic.category !== selectedCategory) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return topic.title.toLowerCase().includes(q) || topic.category.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedLevel, selectedCategory, searchQuery]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    grammarTopics.forEach(t => { if (t.category) set.add(t.category); });
    return Array.from(set);
  }, []);

  // Khi đang làm bài tập luyện tập ngữ pháp
  if (isPracticing && grammarExercises.length > 0) {
    return (
      <ExerciseRunner
        exercises={grammarExercises}
        speechRate={0.85}
        showPinyinFirst={true}
        blindMode={false}
        onFinish={(r) => {
          setPracticeResult(r);
          setIsPracticing(false);
        }}
        onExit={() => setIsPracticing(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top Header */}
      <div className="px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-20 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('home')}
            className="p-1.5 -ml-1 text-[#6b7280] hover:text-[#1a1a1a] rounded-xl hover:bg-[#FAF9F6] transition-colors"
            title="Quay lại Trang chủ"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-base font-bold text-[#1a1a1a] flex items-center gap-1.5">
              <span>📚</span> Kho Chuyên Đề Ngữ Pháp Toàn Diện
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              229 cấu trúc chuẩn mực từ HSK 1 đến HSK 6 (Trích xuất từ Google Drive cá nhân)
            </p>
          </div>
        </div>

        <span className="text-xs font-bold text-[#4a7c59] bg-[#e8f0eb] px-2.5 py-1 rounded-full">
          {filteredTopics.length} / {grammarTopics.length} mục
        </span>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">
        {/* Search & Filter Card */}
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-4 shadow-xs space-y-3">
          {/* Search Bar */}
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b7280]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm ngữ pháp: câu chữ 把, câu 被, bổ ngữ kết quả, lượng từ..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl text-xs sm:text-sm text-[#1a1a1a] focus:outline-none focus:border-[#4a7c59]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6b7280] hover:text-[#1a1a1a]"
              >
                Xóa
              </button>
            )}
          </div>

          {/* Level Filter Tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none font-medium">
            {['all', 'HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'].map((lvl) => {
              const isSelected = selectedLevel === lvl;
              const count = lvl === 'all' 
                ? grammarTopics.length 
                : grammarTopics.filter(t => t.level.toUpperCase() === lvl.toUpperCase()).length;
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#4a7c59] text-white font-bold shadow-2xs'
                      : 'bg-[#FAF9F6] text-[#6b7280] hover:bg-[#e5e1d8]'
                  }`}
                >
                  {lvl === 'all' ? 'Tất cả' : lvl} ({count})
                </button>
              );
            })}
          </div>

          {/* Category Chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-amber-100 text-amber-900 font-bold'
                  : 'text-[#6b7280] hover:bg-neutral-100'
              }`}
            >
              Mọi chủ điểm
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-all capitalize ${
                  selectedCategory === cat
                    ? 'bg-amber-100 text-amber-900 font-bold'
                    : 'text-[#6b7280] hover:bg-neutral-100'
                }`}
              >
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* List of Grammar Topics */}
        <div className="space-y-2.5">
          {filteredTopics.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedTopic(item)}
              className="bg-white rounded-2xl border border-[#e5e1d8] p-4 hover:border-[#4a7c59] transition-all shadow-xs flex items-center justify-between gap-3 group cursor-pointer"
            >
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    item.level === 'HSK1' ? 'bg-emerald-100 text-emerald-800' :
                    item.level === 'HSK2' ? 'bg-blue-100 text-blue-800' :
                    item.level === 'HSK3' ? 'bg-indigo-100 text-indigo-800' :
                    item.level === 'HSK4' ? 'bg-purple-100 text-purple-800' :
                    item.level === 'HSK5' ? 'bg-amber-100 text-amber-800' :
                    'bg-rose-100 text-rose-800'
                  }`}>
                    {item.level}
                  </span>
                  {item.category && (
                    <span className="text-[10px] bg-[#FAF9F6] text-[#6b7280] border border-[#e5e1d8] px-1.5 py-0.5 rounded">
                      {item.category}
                    </span>
                  )}
                  {item.structure && (
                    <span className="text-[11px] font-mono text-[#4a7c59] bg-[#e8f0eb] px-2 py-0.5 rounded-md truncate max-w-[200px]">
                      {item.structure}
                    </span>
                  )}
                  <span className="text-[11px] text-[#9ca3af]">#{idx + 1}</span>
                </div>

                <p className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors">
                  {item.title}
                </p>

                {item.meaning && (
                  <p className="text-xs text-[#6b7280] line-clamp-1">
                    {item.meaning}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const zhMatch = item.title.match(/[\u4e00-\u9fff]+/g);
                    if (zhMatch) {
                      speak(zhMatch.join(' '));
                    } else if (item.examples?.[0]?.zh) {
                      speak(item.examples[0].zh);
                    }
                  }}
                  className="p-2 rounded-xl text-[#6b7280] hover:text-[#4a7c59] hover:bg-[#e8f0eb] border border-[#e5e1d8] transition-colors text-xs flex items-center gap-1"
                  title="Nghe phát âm"
                >
                  <Sparkles size={14} />
                </button>
                <div className="p-1 text-[#9ca3af] group-hover:text-[#4a7c59] group-hover:translate-x-0.5 transition-all">
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>
          ))}

          {filteredTopics.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-[#e5e1d8] p-6 text-[#6b7280] space-y-2">
              <p className="text-base font-medium">Không tìm thấy chuyên đề phù hợp</p>
              <p className="text-xs">Hãy thử đổi từ khóa tìm kiếm hoặc chọn cấp HSK khác.</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal / Drawer khi bấm vào chuyên đề */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div 
            className="bg-white rounded-3xl border border-[#e5e1d8] shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-[#e5e1d8] flex items-start justify-between gap-3 bg-[#FAF9F6]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    selectedTopic.level === 'HSK1' ? 'bg-emerald-100 text-emerald-800' :
                    selectedTopic.level === 'HSK2' ? 'bg-blue-100 text-blue-800' :
                    selectedTopic.level === 'HSK3' ? 'bg-indigo-100 text-indigo-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {selectedTopic.level}
                  </span>
                  {selectedTopic.category && (
                    <span className="text-[10px] bg-white text-[#6b7280] border border-[#e5e1d8] px-1.5 py-0.5 rounded">
                      {selectedTopic.category}
                    </span>
                  )}
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#1a1a1a]">
                  {selectedTopic.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedTopic(null)}
                className="p-1.5 rounded-xl text-[#6b7280] hover:text-[#1a1a1a] hover:bg-white transition-colors border border-transparent hover:border-[#e5e1d8]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 text-xs text-[#374151]">
              {/* Công thức / Cấu trúc */}
              {selectedTopic.structure && (
                <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-3.5 space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    Cấu Trúc / Công Thức Ngữ Pháp:
                  </p>
                  <p className="text-sm font-bold text-amber-950 font-mono">
                    {selectedTopic.structure}
                  </p>
                </div>
              )}

              {/* Ý nghĩa */}
              {selectedTopic.meaning && (
                <div className="space-y-1">
                  <h4 className="font-bold text-[#1a1a1a] text-xs">1. Ý nghĩa:</h4>
                  <p className="text-[#4b5563] leading-relaxed bg-[#FAF9F6] p-3 rounded-xl border border-[#e5e1d8]/60">
                    {selectedTopic.meaning}
                  </p>
                </div>
              )}

              {/* Cách dùng */}
              {selectedTopic.usage && (
                <div className="space-y-1">
                  <h4 className="font-bold text-[#1a1a1a] text-xs">2. Cách dùng chi tiết:</h4>
                  <p className="text-[#4b5563] leading-relaxed whitespace-pre-line bg-[#FAF9F6] p-3 rounded-xl border border-[#e5e1d8]/60">
                    {selectedTopic.usage}
                  </p>
                </div>
              )}

              {/* Lưu ý quan trọng */}
              {selectedTopic.notes && selectedTopic.notes.length > 0 && (
                <div className="bg-red-50/60 border border-red-200/60 rounded-2xl p-3.5 space-y-1.5">
                  <h4 className="font-bold text-red-900 text-xs flex items-center gap-1.5">
                    <span>⚠️</span> Các lưu ý tránh lỗi sai phổ biến:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-[11px] text-red-800 leading-relaxed">
                    {selectedTopic.notes.map((note, nIdx) => (
                      <li key={nIdx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Danh sách câu ví dụ thực tế */}
              {selectedTopic.examples && selectedTopic.examples.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#f0eee9]">
                  <h4 className="font-bold text-[#1a1a1a] text-xs">3. Câu ví dụ thực tế chuẩn HSK:</h4>
                  <div className="space-y-2">
                    {selectedTopic.examples.map((ex, exIdx) => (
                      <div
                        key={exIdx}
                        className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-3.5 space-y-1 hover:border-[#4a7c59] transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="chinese-char text-base font-semibold text-[#1a1a1a]">
                            {ex.zh}
                          </span>
                          <button
                            onClick={() => speak(ex.zh)}
                            className="p-1.5 rounded-xl bg-white border border-[#e5e1d8] text-[#4a7c59] hover:bg-[#e8f0eb] transition-colors flex items-center gap-1 text-[11px] font-semibold"
                            title="Nghe câu"
                          >
                            <Volume2 size={14} />
                            <span>Nghe</span>
                          </button>
                        </div>
                        <p className="text-[#4a7c59] font-medium text-xs">{ex.pinyin}</p>
                        <p className="text-[#6b7280] text-xs">{ex.vi}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer with Practice CTA */}
            <div className="p-4 border-t border-[#e5e1d8] bg-[#FAF9F6] flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <button
                onClick={() => setSelectedTopic(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#e5e1d8] text-[#6b7280] font-medium text-xs hover:bg-white transition-colors text-center"
              >
                Đóng lại
              </button>
              
              <button
                onClick={() => handleStartGrammarPractice(selectedTopic)}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-[#4a7c59] text-white font-bold text-xs hover:bg-[#3d6b4a] transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <Zap size={15} />
                <span>Làm bài tập luyện tập chuyên đề này ({selectedTopic.examples?.length ? Math.min(selectedTopic.examples.length, 5) : 5} câu)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Practice Result Popup */}
      {practiceResult && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#e5e1d8] p-6 max-w-sm w-full text-center shadow-xl space-y-4 animate-scale-up">
            <p className="text-4xl">{practiceResult.correct === practiceResult.total ? '🎉' : '💪'}</p>
            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">Hoàn thành bài luyện ngữ pháp!</h3>
              <p className="text-xs text-[#6b7280] mt-0.5">{selectedTopic?.title || 'Chuyên đề ngữ pháp'}</p>
            </div>
            
            <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4">
              <p className="text-3xl font-black text-[#4a7c59]">
                {practiceResult.total > 0 ? Math.round((practiceResult.correct / practiceResult.total) * 100) : 0}%
              </p>
              <p className="text-xs text-[#6b7280] mt-1">
                {practiceResult.correct} / {practiceResult.total} câu trả lời đúng
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {selectedTopic && (
                <button
                  onClick={() => handleStartGrammarPractice(selectedTopic)}
                  className="w-full py-2.5 rounded-xl bg-[#4a7c59] text-white font-bold text-xs hover:bg-[#3d6b4a] transition-colors flex items-center justify-center gap-1.5"
                >
                  <RotateCcw size={14} />
                  <span>Luyện tập lại chuyên đề này</span>
                </button>
              )}
              <button
                onClick={() => setPracticeResult(null)}
                className="w-full py-2.5 rounded-xl border border-[#e5e1d8] text-[#6b7280] font-semibold text-xs hover:bg-[#FAF9F6] transition-colors"
              >
                Về danh sách chuyên đề
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
