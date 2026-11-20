import React, { useMemo, useState } from 'react';
import { useApp } from '../../store/AppContext';
import { allVocab, vocabById } from '../../data';
import { getDueCards } from '../../utils/srs';
import { buildSRSMix } from '../../utils/exercises';
import { ExerciseRunner } from '../exercises/ExerciseRunner';
import { X, Zap } from 'lucide-react';

export function ReviewView() {
  const { state, navigate, dispatch, gradeCard } = useApp();
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState<{ correct: number; total: number } | null>(null);

  const dueIds = useMemo(() => {
    return getDueCards(state.progress, allVocab.map(v => v.id));
  }, [state.progress]);

  const dueVocab = useMemo(() => {
    return dueIds.map(id => vocabById[id]).filter(Boolean).slice(0, 30);
  }, [dueIds]);

  const exercises = useMemo(() => {
    if (!started || !dueVocab.length) return [];
    return buildSRSMix(dueVocab, allVocab);
  }, [started, dueVocab]);

  if (started && !finished) {
    return (
      <ExerciseRunner
        exercises={exercises}
        speechRate={state.progress.settings.speechRate}
        showPinyinFirst={state.progress.settings.showPinyinFirst}
        blindMode={state.progress.settings.blindMode}
        onFinish={(r) => {
          setResults(r);
          setFinished(true);
          dispatch({ type: 'RECORD_SESSION', packId: 'srs_mix', mode: 'srs_mix', correct: r.correct, total: r.total, durationMs: 0 });
        }}
        onExit={() => navigate('home')}
      />
    );
  }

  if (finished && results) {
    const pct = Math.round((results.correct / results.total) * 100);
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-8 max-w-sm w-full text-center shadow-sm">
          <p className="text-5xl mb-4">{pct >= 80 ? '🌟' : pct >= 50 ? '👍' : '💪'}</p>
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-1">Ôn tập xong!</h2>
          <p className="text-[#6b7280] text-sm mb-6">SRS Hỗn hợp</p>
          <div className="bg-[#FAF9F6] rounded-2xl p-4 mb-6">
            <p className="text-3xl font-bold text-[#4a7c59]">{pct}%</p>
            <p className="text-sm text-[#6b7280]">{results.correct} / {results.total} đúng</p>
          </div>
          <div className="flex flex-col gap-2">
            <button onClick={() => { setStarted(false); setFinished(false); setResults(null); }}
              className="w-full py-3 rounded-xl bg-[#4a7c59] text-white font-medium hover:bg-[#3d6b4a] transition-colors">
              Ôn tiếp
            </button>
            <button onClick={() => navigate('home')}
              className="w-full py-3 rounded-xl border border-[#e5e1d8] text-[#6b7280] hover:bg-[#FAF9F6] transition-colors">
              Về trang chủ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-20">
      <div className="flex items-center gap-3 px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10">
        <button onClick={() => navigate('home')} className="p-2 rounded-lg hover:bg-[#FAF9F6] transition-colors">
          <X size={20} className="text-[#6b7280]" />
        </button>
        <div>
          <h1 className="font-semibold text-[#1a1a1a]">Ôn tập hỗn hợp SRS</h1>
          <p className="text-xs text-[#6b7280]">{dueVocab.length} từ cần ôn</p>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">
        {dueVocab.length === 0 ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
            <p className="text-3xl mb-2">🎉</p>
            <p className="font-medium text-green-800">Bạn đã ôn xong hết từ hôm nay!</p>
            <p className="text-sm text-green-700 mt-1">Quay lại vào ngày mai để ôn tiếp.</p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-2xl border border-[#e5e1d8] p-5">
              <p className="text-sm text-[#6b7280] mb-3">Từ sắp ôn hôm nay:</p>
              <div className="flex flex-wrap gap-2">
                {dueVocab.slice(0, 20).map(v => (
                  <span key={v.id} className="chinese-char text-lg bg-[#FAF9F6] border border-[#e5e1d8] px-2 py-1 rounded-lg">
                    {v.simplified}
                  </span>
                ))}
                {dueVocab.length > 20 && (
                  <span className="text-sm text-[#6b7280] self-center">+{dueVocab.length - 20}</span>
                )}
              </div>
            </div>

            <div className="bg-[#e8f0eb] rounded-2xl p-4 text-sm">
              <p className="font-medium text-[#4a7c59] mb-2">🔀 SRS Hỗn hợp tự động</p>
              <p className="text-[#1a1a1a]">Web sẽ tự trộn cả 8 dạng bài: Flashcard, Điền từ, Sắp câu, Nghe chép... cho những từ cần ôn hôm nay.</p>
              <p className="text-[#6b7280] mt-1">Từ sai sẽ quay lại sau vài câu.</p>
            </div>

            <button
              onClick={() => setStarted(true)}
              className="w-full py-4 rounded-2xl bg-[#4a7c59] text-white font-semibold text-lg hover:bg-[#3d6b4a] transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Zap size={20} />
              Bắt đầu ôn ({dueVocab.length} từ)
            </button>
          </>
        )}
      </div>
    </div>
  );
}
