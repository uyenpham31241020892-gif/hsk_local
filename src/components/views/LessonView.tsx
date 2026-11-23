import React, { useState, useMemo } from 'react';
import { useApp } from '../../store/AppContext';
import { allPacks, allVocab, vocabById } from '../../data';
import { sixMonthRoadmap, type RoadmapLesson } from '../../data/roadmap_data';
import { buildLessonByMode, speak, buildGrammarExercises, type LessonPracticeMode } from '../../utils/exercises';
import { ExerciseRunner } from '../exercises/ExerciseRunner';
import { 
  X, 
  Volume2, 
  BookOpen, 
  Edit3, 
  CheckSquare, 
  FileText, 
  Shuffle, 
  Headphones, 
  Zap, 
  RotateCcw,
  Sparkles,
  PenLine,
  Languages
} from 'lucide-react';
import type { VocabEntry, GrammarPoint, Exercise } from '../../types';

export function LessonView() {
  const { state, navigate, dispatch } = useApp();
  const packId = state.currentPackId;
  const pack = allPacks.find(p => p.id === packId);

  // Nhận diện loại bài học từ lộ trình (Từ vựng hay Ngữ pháp)
  const currentRoadmapLesson: RoadmapLesson | undefined = useMemo(() => {
    const fromWin = (window as any).__currentLesson;
    if (fromWin) return fromWin;
    return sixMonthRoadmap.find(l => l.packId === packId);
  }, [packId]);

  const isGrammarLesson = currentRoadmapLesson?.type === 'grammar_review';
  const isPureVocab = !isGrammarLesson;

  const [activeTab, setActiveTab] = useState<'preview' | 'grammar' | 'practice'>(() => {
    const init = (window as any).__initialLessonTab;
    (window as any).__initialLessonTab = null;
    if (isGrammarLesson) {
      return init === 'practice' ? 'practice' : 'grammar';
    }
    return init === 'practice' ? 'practice' : 'preview';
  });
  const [selectedMode, setSelectedMode] = useState<LessonPracticeMode | null>(null);
  const [customExercises, setCustomExercises] = useState<Exercise[] | null>(null);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState<{ correct: number; total: number } | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  const vocabList = useMemo(() => {
    if (!pack) return [];
    return pack.vocabIds.map(id => vocabById[id]).filter(Boolean);
  }, [pack]);

  const exercises = useMemo(() => {
    if (customExercises && customExercises.length > 0) return customExercises;
    if (!started || !selectedMode || !vocabList.length) return [];
    return buildLessonByMode(selectedMode, vocabList, allVocab);
  }, [customExercises, started, selectedMode, vocabList]);

  const handleStartSingleGrammarPractice = (gp: GrammarPoint) => {
    const ex = buildGrammarExercises(gp, allVocab);
    if (!ex || ex.length === 0) {
      alert('Chuyên đề ngữ pháp này đang được cập nhật câu hỏi.');
      return;
    }
    setCustomExercises(ex);
    setSelectedMode('cloze');
    setStarted(true);
    setFinished(false);
    setResults(null);
  };

  const handleStartAllGrammarPractice = () => {
    if (!pack || !pack.grammarPoints || pack.grammarPoints.length === 0) return;
    const allEx = pack.grammarPoints.flatMap(gp => buildGrammarExercises(gp, allVocab));
    if (allEx.length === 0) return;
    setCustomExercises(allEx.slice(0, 10));
    setSelectedMode('cloze');
    setStarted(true);
    setFinished(false);
    setResults(null);
  };

  if (!pack) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-[#6b7280]">Không tìm thấy bài học</p>
          <button onClick={() => navigate('home')} className="mt-4 text-[#4a7c59] font-medium">Quay về trang chủ</button>
        </div>
      </div>
    );
  }

  // Play audio for all vocab in sequence
  const playAllVocab = () => {
    if (isPlayingAll) {
      window.speechSynthesis?.cancel();
      setIsPlayingAll(false);
      return;
    }

    setIsPlayingAll(true);
    let index = 0;

    const playNext = () => {
      if (index >= vocabList.length) {
        setIsPlayingAll(false);
        return;
      }
      const v = vocabList[index];
      speak(v.simplified, state.progress.settings.speechRate);
      index++;
      setTimeout(playNext, 1800);
    };

    playNext();
  };

  const handleStartPractice = (mode: LessonPracticeMode) => {
    setSelectedMode(mode);
    setStarted(true);
    setFinished(false);
    setResults(null);
  };

  if (started && !finished && exercises.length > 0) {
    return (
      <ExerciseRunner
        exercises={exercises}
        speechRate={state.progress.settings.speechRate}
        showPinyinFirst={state.progress.settings.showPinyinFirst}
        blindMode={state.progress.settings.blindMode}
        onFinish={(r) => {
          setResults(r);
          setFinished(true);
          dispatch({ 
            type: 'RECORD_SESSION', 
            packId: pack.id, 
            mode: selectedMode || 'lesson', 
            correct: r.correct, 
            total: r.total, 
            durationMs: 0 
          });
          dispatch({ type: 'UNLOCK_PACK', packId: pack.id });
        }}
        onExit={() => {
          setStarted(false);
          setSelectedMode(null);
          setCustomExercises(null);
        }}
      />
    );
  }

  // Result screen
  if (finished && results) {
    const pct = results.total > 0 ? Math.round((results.correct / results.total) * 100) : 0;
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-8 max-w-sm w-full text-center shadow-sm">
          <p className="text-5xl mb-4">{pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</p>
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-1">
            {customExercises ? 'Hoàn thành bài tập ngữ pháp!' : 'Hoàn thành bài luyện tập!'}
          </h2>
          <p className="text-[#6b7280] text-sm mb-6">{pack.titleVi}</p>
          <div className="bg-[#FAF9F6] rounded-2xl p-4 mb-6">
            <p className="text-3xl font-bold text-[#4a7c59]">{pct}%</p>
            <p className="text-sm text-[#6b7280]">{results.correct} / {results.total} câu đúng</p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => { setStarted(false); setFinished(false); setResults(null); setCustomExercises(null); }}
              className="w-full py-3 rounded-xl bg-[#4a7c59] text-white font-medium hover:bg-[#3d6b4a] transition-colors"
            >
              {customExercises ? 'Trở về bài học ngữ pháp' : 'Chọn dạng bài khác'}
            </button>
            <button
              onClick={() => navigate('home')}
              className="w-full py-3 rounded-xl border border-[#e5e1d8] text-[#6b7280] hover:bg-[#FAF9F6] transition-colors"
            >
              Về trang chủ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-20">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('home')} className="p-2 rounded-lg hover:bg-[#FAF9F6] transition-colors">
            <X size={20} className="text-[#6b7280]" />
          </button>
          <div>
            <h1 className="font-semibold text-[#1a1a1a] text-base">
              {currentRoadmapLesson?.titleVi || pack.titleVi}
            </h1>
            <p className="text-xs text-[#6b7280]">
              {isGrammarLesson 
                ? `${pack.grammarPoints?.length || 1} chuyên đề ngữ pháp trọng tâm` 
                : `${vocabList.length} từ vựng mới`}
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        {/* Step Tabs: Tách biệt bài Từ vựng và bài Ngữ pháp */}
        {isGrammarLesson ? (
          <div className="grid grid-cols-2 p-1 bg-[#e5e1d8]/50 rounded-2xl gap-1">
            <button
              onClick={() => setActiveTab('grammar')}
              className={`py-2.5 px-1 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'grammar' 
                  ? 'bg-white text-[#1a1a1a] shadow-sm font-bold' 
                  : 'text-[#6b7280] hover:text-[#1a1a1a]'
              }`}
            >
              <Languages size={15} className={activeTab === 'grammar' ? 'text-[#4a7c59]' : ''} />
              <span>1. Chuyên đề Ngữ pháp ({pack.grammarPoints?.length || 1})</span>
            </button>

            <button
              onClick={() => setActiveTab('practice')}
              className={`py-2.5 px-1 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'practice' 
                  ? 'bg-white text-[#1a1a1a] shadow-sm font-bold' 
                  : 'text-[#6b7280] hover:text-[#1a1a1a]'
              }`}
            >
              <Zap size={15} className={activeTab === 'practice' ? 'text-[#4a7c59]' : ''} />
              <span>2. Luyện bài tập & Ôn từ</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 p-1 bg-[#e5e1d8]/50 rounded-2xl gap-1">
            <button
              onClick={() => setActiveTab('preview')}
              className={`py-2.5 px-1 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'preview' 
                  ? 'bg-white text-[#1a1a1a] shadow-sm font-bold' 
                  : 'text-[#6b7280] hover:text-[#1a1a1a]'
              }`}
            >
              <BookOpen size={15} className={activeTab === 'preview' ? 'text-[#4a7c59]' : ''} />
              <span>1. Học từ mới ({vocabList.length} từ)</span>
            </button>

            <button
              onClick={() => setActiveTab('practice')}
              className={`py-2.5 px-1 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'practice' 
                  ? 'bg-white text-[#1a1a1a] shadow-sm font-bold' 
                  : 'text-[#6b7280] hover:text-[#1a1a1a]'
              }`}
            >
              <Zap size={15} className={activeTab === 'practice' ? 'text-[#4a7c59]' : ''} />
              <span>2. Luyện tập từ vựng</span>
            </button>
          </div>
        )}

        {/* TAB 1: Học từ mới trước */}
        {activeTab === 'preview' && (
          <div className="space-y-4 fade-in">
            {/* Action Bar */}
            <div className="flex items-center justify-between bg-white border border-[#e5e1d8] rounded-2xl p-4 gap-2 flex-wrap sm:flex-nowrap">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-[#1a1a1a]">Luyện phát âm & Nhớ mặt chữ</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    vocabList.length > 0 && vocabList.filter(v => state.progress.cards[v.id]?.repetitions > 0).length === vocabList.length
                      ? 'bg-emerald-100 text-emerald-800'
                      : vocabList.filter(v => state.progress.cards[v.id]?.repetitions > 0).length > 0
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-[#FAF9F6] text-[#6b7280]'
                  }`}>
                    {vocabList.filter(v => state.progress.cards[v.id]?.repetitions > 0).length} / {vocabList.length} từ đã nhớ
                  </span>
                </div>
                <p className="text-xs text-[#6b7280] mt-0.5">Bấm vào loa để nghe đọc và nhại lại theo</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => dispatch({ type: 'MARK_PACK_COMPLETED', packId: pack.id })}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-[#e8f0eb] text-[#4a7c59] hover:bg-[#d5e7dc] transition-colors flex items-center gap-1 shadow-2xs"
                  title="Đánh dấu đã thuộc toàn bộ từ của bài này"
                >
                  <CheckSquare size={14} />
                  <span>Đánh dấu thuộc bài</span>
                </button>
                <button
                  onClick={playAllVocab}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 shadow-2xs ${
                    isPlayingAll 
                      ? 'bg-red-50 text-red-600 border border-red-200' 
                      : 'bg-[#4a7c59] text-white hover:bg-[#3d6b4a]'
                  }`}
                >
                  <Volume2 size={15} />
                  {isPlayingAll ? 'Dừng đọc' : 'Nghe toàn bộ'}
                </button>
              </div>
            </div>

            {/* List of Vocab Cards */}
            <div className="space-y-3">
              {vocabList.map((vocab) => (
                <div 
                  key={vocab.id} 
                  className="bg-white rounded-2xl border border-[#e5e1d8] p-4 flex flex-col gap-2.5 hover:border-[#4a7c59]/50 transition-all shadow-xs"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="chinese-char text-3xl font-medium text-[#1a1a1a] tracking-wide">
                        {vocab.simplified}
                      </span>
                      {/* Pinyin clearly displayed under/beside Chinese */}
                      <span className="text-base text-[#4a7c59] font-semibold tracking-wider">
                        {vocab.pinyin}
                      </span>
                      {vocab.pos && (
                        <span className="text-[11px] bg-[#FAF9F6] text-[#6b7280] border border-[#e5e1d8] px-1.5 py-0.5 rounded">
                          {vocab.pos.join(', ')}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => speak(vocab.simplified, state.progress.settings.speechRate)}
                      className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59] transition-colors"
                      title="Nghe phát âm"
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>

                  <p className="text-sm text-[#1a1a1a] font-medium">
                    {vocab.meaning}
                  </p>

                  {vocab.memoryTip && (
                    <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg p-2">
                      💡 <strong>Mẹo nhớ:</strong> {vocab.memoryTip}
                    </p>
                  )}

                  {vocab.exampleSentences?.[0] && (
                    <div className="bg-[#FAF9F6] border border-[#e5e1d8]/60 rounded-xl p-2.5 text-xs text-[#1a1a1a]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="chinese-char text-sm font-medium text-[#1a1a1a]">
                          {vocab.exampleSentences[0].zh}
                        </span>
                        <button
                          onClick={() => speak(vocab.exampleSentences![0].zh, state.progress.settings.speechRate)}
                          className="text-[#4a7c59] hover:underline flex items-center gap-1 text-[11px]"
                        >
                          <Volume2 size={12} /> Nghe câu
                        </button>
                      </div>
                      <p className="text-[#4a7c59] font-medium">{vocab.exampleSentences[0].pinyin}</p>
                      <p className="text-[#6b7280] mt-0.5">{vocab.exampleSentences[0].vi}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom action to Practice */}
            <div className="pt-2">
              <button
                onClick={() => setActiveTab('practice')}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#4a7c59] text-white font-semibold text-sm hover:bg-[#3d6b4a] transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Zap size={18} />
                <span>Thuộc từ rồi ➔ Sang luyện tập từ vựng ngay</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB: Học Ngữ Pháp & Cấu Trúc Câu */}
        {activeTab === 'grammar' && (
          <div className="space-y-6 fade-in">
            {/* Header Chuyên Đề Ngữ Pháp */}
            <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 shadow-xs space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-[#e8f0eb] text-[#4a7c59] shrink-0">
                  <Languages size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a1a]">
                    {currentRoadmapLesson?.titleVi || pack.titleVi || 'Chuyên đề ngữ pháp'}
                  </h3>
                  <p className="text-xs text-[#6b7280] mt-0.5">
                    Các cấu trúc ngữ pháp trọng tâm được xây dựng và giải thích dựa trên vốn từ bạn đã học.
                  </p>
                </div>
              </div>
            </div>

            {/* Danh sách các chuyên đề ngữ pháp trong bài học */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#1a1a1a] flex items-center gap-2">
                <span>📚</span> Chuyên đề ngữ pháp trọng tâm bài này ({pack.grammarPoints?.length || 0})
              </h4>

              {(!pack.grammarPoints || pack.grammarPoints.length === 0) ? (
                <div className="bg-white rounded-2xl border border-[#e5e1d8] p-6 text-center text-[#6b7280] text-xs">
                  Chuyên đề ngữ pháp đang được cập nhật thêm. Bạn có thể sang thẻ Luyện tập để ôn từ vựng ngay!
                </div>
              ) : (
                pack.grammarPoints.map((gp, idx) => (
                  <div
                    key={gp.id || idx}
                    className="bg-white rounded-3xl border border-[#e5e1d8] p-5 shadow-xs space-y-4"
                  >
                    {/* Header */}
                    <div className="border-b border-[#f0eee9] pb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#e8f0eb] text-[#4a7c59]">
                          Chuyên đề #{idx + 1}
                        </span>
                        {gp.structure && (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-mono">
                            {gp.structure}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-[#1a1a1a]">{gp.title}</h3>
                    </div>

                    {/* Ý nghĩa & Cách dùng */}
                    <div className="space-y-2 text-xs text-[#374151]">
                      {gp.meaning && (
                        <div>
                          <strong className="text-[#1a1a1a]">1. Ý nghĩa:</strong>
                          <p className="mt-0.5 text-[#4b5563] leading-relaxed">{gp.meaning}</p>
                        </div>
                      )}

                      {gp.usage && (
                        <div>
                          <strong className="text-[#1a1a1a]">2. Cách dùng:</strong>
                          <p className="mt-0.5 text-[#4b5563] leading-relaxed whitespace-pre-line">{gp.usage}</p>
                        </div>
                      )}

                      {/* Lưu ý */}
                      {gp.notes && gp.notes.length > 0 && (
                        <div className="bg-amber-50/70 border border-amber-200/60 rounded-2xl p-3.5 space-y-1.5 mt-2">
                          <p className="font-bold text-amber-900 text-xs flex items-center gap-1.5">
                            <span>⚠️</span> Lưu ý quan trọng khi ghép câu:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-[11px] text-amber-800">
                            {gp.notes.map((note, nIdx) => (
                              <li key={nIdx} className="leading-relaxed">{note}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Câu ví dụ mẫu */}
                    {gp.examples && gp.examples.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-[#f0eee9]">
                        <p className="text-xs font-bold text-[#1a1a1a]">3. Câu ví dụ thực tế chuẩn HSK:</p>
                        <div className="space-y-2">
                          {gp.examples.map((ex, exIdx) => (
                            <div
                              key={exIdx}
                              className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-3 text-xs space-y-1"
                            >
                              <div className="flex items-center justify-between">
                                <span className="chinese-char text-sm font-semibold text-[#1a1a1a]">
                                  {ex.zh}
                                </span>
                                <button
                                  onClick={() => speak(ex.zh, state.progress.settings.speechRate)}
                                  className="text-[#4a7c59] hover:text-[#3d6b4a] p-1 rounded-lg hover:bg-[#e8f0eb] transition-colors"
                                  title="Nghe câu ví dụ"
                                >
                                  <Volume2 size={14} />
                                </button>
                              </div>
                              <p className="text-[#4a7c59] font-medium text-[11px]">{ex.pinyin}</p>
                              <p className="text-[#6b7280] text-[11px]">{ex.vi}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Nút bấm luyện tập bài tập chuyên đề ngữ pháp này */}
                    <div className="pt-3 border-t border-[#f0eee9] flex justify-end">
                      <button
                        onClick={() => handleStartSingleGrammarPractice(gp)}
                        className="px-4 py-2.5 rounded-xl bg-[#4a7c59] text-white hover:bg-[#3d6b4a] transition-all text-xs font-bold flex items-center gap-1.5 shadow-xs"
                      >
                        <Zap size={14} />
                        <span>Làm bài tập riêng cho chuyên đề này ({gp.examples?.length ? Math.min(gp.examples.length, 5) : 5} câu)</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* CTA chuyển sang luyện tập */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={handleStartAllGrammarPractice}
                className="flex-1 py-4 px-4 rounded-2xl bg-[#4a7c59] text-white font-bold text-sm hover:bg-[#3d6b4a] transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Zap size={18} />
                <span>Luyện toàn bộ bài tập ngữ pháp bài này</span>
              </button>
              <button
                onClick={() => setActiveTab('practice')}
                className="py-4 px-5 rounded-2xl border border-[#4a7c59] text-[#4a7c59] font-bold text-sm hover:bg-[#e8f0eb] transition-all flex items-center justify-center gap-1.5"
              >
                <span>Sang bài tập ôn từ</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: Chọn dạng bài luyện tập */}
        {activeTab === 'practice' && (
          <div className="space-y-4 fade-in">
            {isGrammarLesson && (
              <div 
                onClick={handleStartAllGrammarPractice}
                className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-indigo-100/70 transition-all shadow-xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-indigo-950 group-hover:text-indigo-700">
                      Luyện Toàn Bộ Bài Tập Ngữ Pháp ({pack.grammarPoints?.length || 1} chuyên đề)
                    </h4>
                    <p className="text-xs text-indigo-800">
                      Thực hành xếp từ thành câu đúng, điền trợ từ và dịch câu dùng 100% từ đã học
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-indigo-700 bg-white px-3 py-1.5 rounded-xl border border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
                  Luyện ngay ➔
                </span>
              </div>
            )}

            <div className="bg-[#e8f0eb] rounded-2xl p-4 text-sm text-[#1a1a1a]">
              <p className="font-semibold text-[#4a7c59] mb-1">
                {isGrammarLesson ? '🎯 Ôn tập củng cố từ vựng các bài trước' : '🎯 Bạn muốn luyện dạng nào trước?'}
              </p>
              <p className="text-xs text-[#6b7280]">
                {isGrammarLesson
                  ? 'Ôn luyện lại vốn từ vựng đã học thông qua Flashcard, Trắc nghiệm nhận chữ hoặc Nghe phát âm.'
                  : 'Khuyên dùng: Luyện Flashcard hoặc Tập viết để thuộc nét trước, sau đó thử Trắc nghiệm & Điền từ, cuối cùng làm Nghe chép.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Option 1: Flashcard */}
              <PracticeModeCard
                icon={<BookOpen className="text-emerald-600" size={22} />}
                title="1. Học thẻ Flashcard"
                desc="Lật thẻ 3 mặt (Chữ → Pinyin/Audio → Nghĩa) & tự chấm điểm"
                badge="Nhớ mặt chữ"
                onClick={() => handleStartPractice('flashcard')}
              />

              {/* Option 2: Stroke Order */}
              <PracticeModeCard
                icon={<Edit3 className="text-blue-600" size={22} />}
                title="2. Tập viết thứ tự nét"
                desc="Vẽ từng nét trên màn hình với hanzi-writer để quen tay"
                badge="Tập viết"
                onClick={() => handleStartPractice('stroke_order')}
              />

              {/* Option 3: Char Recognition */}
              <PracticeModeCard
                icon={<CheckSquare className="text-indigo-600" size={22} />}
                title="3. Nhận chữ & Âm đọc"
                desc="Trắc nghiệm 4 lựa chọn có bẫy chữ gần giống / đồng âm"
                badge="Phản xạ nhanh"
                onClick={() => handleStartPractice('char_recognition')}
              />

              {/* Option 4: Cloze Test */}
              <PracticeModeCard
                icon={<FileText className="text-purple-600" size={22} />}
                title="4. Điền từ vào câu"
                desc="Chọn từ thích hợp đặt vào ngữ cảnh câu hoàn chỉnh"
                badge="Ngữ cảnh"
                onClick={() => handleStartPractice('cloze')}
              />

              {/* Option 5: Word Scramble */}
              <PracticeModeCard
                icon={<Shuffle className="text-amber-600" size={22} />}
                title="5. Sắp xếp câu"
                desc="Xếp các khối từ đã chia nhỏ thành câu đúng ngữ pháp"
                badge="Ngữ pháp"
                onClick={() => handleStartPractice('word_scramble')}
              />

              {/* Option 6: Dictation */}
              <PracticeModeCard
                icon={<Headphones className="text-rose-600" size={22} />}
                title="6. Nghe chép chính tả"
                desc="Nghe phát âm từ mới & gõ lại bằng Pinyin / chữ Hán"
                badge="Luyện tai & gõ"
                onClick={() => handleStartPractice('dictation')}
              />

              {/* Option 7: Cloze Typing (Gap filling tự viết) */}
              <PracticeModeCard
                icon={<PenLine className="text-teal-600" size={22} />}
                title="7. Điền từ tự viết (Gap filling)"
                desc="Tự gõ chữ Hán hoặc Pinyin vào ô trống ngữ cảnh"
                badge="Tự viết chữ"
                onClick={() => handleStartPractice('cloze_typing')}
              />

              {/* Option 8: Translation (Luyện dịch Việt - Trung) */}
              <PracticeModeCard
                icon={<Languages className="text-sky-600" size={22} />}
                title="8. Luyện dịch Việt ➔ Trung"
                desc="Ghép thẻ từ hoặc tự gõ bản dịch câu tiếng Trung chuẩn"
                badge="Thực chiến câu"
                onClick={() => handleStartPractice('translation')}
              />
            </div>

            {/* Option 7: All in one */}
            <button
              onClick={() => handleStartPractice('all')}
              className="w-full mt-2 py-4 px-5 rounded-2xl bg-[#1a1a1a] text-white hover:bg-neutral-800 transition-all flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 bg-white/10 rounded-xl">
                  <Sparkles size={22} className="text-amber-400" />
                </div>
                <div>
                  <p className="font-semibold text-base">🚀 Luyện toàn diện cuốn chiếu</p>
                  <p className="text-xs text-neutral-400">Trộn liên hoàn các dạng bài theo lộ trình chuẩn HSK</p>
                </div>
              </div>
              <span className="text-xs bg-white/20 px-3 py-1.5 rounded-xl font-medium">Bắt đầu</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function PracticeModeCard({
  icon,
  title,
  desc,
  badge,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-[#e5e1d8] rounded-2xl p-4 text-left hover:border-[#4a7c59] hover:shadow-sm transition-all group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="p-2 bg-[#FAF9F6] rounded-xl group-hover:bg-[#e8f0eb] transition-colors">
            {icon}
          </div>
          <span className="text-[11px] font-medium text-[#4a7c59] bg-[#e8f0eb] px-2 py-0.5 rounded-full">
            {badge}
          </span>
        </div>
        <h3 className="font-semibold text-sm text-[#1a1a1a] mb-1">{title}</h3>
        <p className="text-xs text-[#6b7280] leading-relaxed">{desc}</p>
      </div>
      <div className="mt-3 pt-2 border-t border-[#e5e1d8]/50 flex justify-end">
        <span className="text-xs text-[#4a7c59] font-medium group-hover:underline">Luyện ngay →</span>
      </div>
    </button>
  );
}
