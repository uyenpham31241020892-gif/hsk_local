import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { allVocab, vocabById } from '../../data';
import { buildMistakeDeepDrill, type MistakeDrillMode, speak } from '../../utils/exercises';
import { ExerciseRunner } from '../exercises/ExerciseRunner';
import { 
  AlertCircle, 
  Volume2, 
  RotateCcw, 
  CheckCircle, 
  Flame, 
  Zap, 
  BookOpen, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import type { VocabEntry } from '../../types';

export function MistakeClinicView() {
  const { state, navigate, dispatch } = useApp();
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [drillMode, setDrillMode] = useState<MistakeDrillMode>('deep');
  const [results, setResults] = useState<{ correct: number; total: number } | null>(null);

  const mistakeIds = state.progress.mistakeIds || [];
  const weakVocab: VocabEntry[] = mistakeIds
    .map(id => vocabById[id])
    .filter(Boolean);

  const exercises = React.useMemo(() => {
    if (!started || weakVocab.length === 0) return [];
    return buildMistakeDeepDrill(weakVocab, allVocab, drillMode);
  }, [started, weakVocab, drillMode]);

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
            packId: 'mistake_clinic', 
            mode: 'mistake_clinic', 
            correct: r.correct, 
            total: r.total, 
            durationMs: 0 
          });
        }}
        onExit={() => setStarted(false)}
      />
    );
  }

  if (finished && results) {
    const pct = results.total > 0 ? Math.round((results.correct / results.total) * 100) : 0;
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-8 max-w-sm w-full text-center shadow-sm space-y-4 slide-up">
          <div className="text-5xl">{pct >= 80 ? '🎉' : '💪'}</div>
          <h2 className="text-xl font-bold text-[#1a1a1a]">Hoàn thành Tiêu Diệt Từ Sai!</h2>
          <p className="text-xs text-[#6b7280]">Các từ yếu đã được củng cố và xào đi xào lại nhiều lần</p>

          <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4">
            <p className="text-3xl font-extrabold text-[#4a7c59]">{pct}%</p>
            <p className="text-xs text-[#6b7280] mt-0.5">{results.correct} / {results.total} câu đạt chuẩn</p>
          </div>

          <div className="space-y-2 pt-2">
            <button
              onClick={() => { setStarted(false); setFinished(false); }}
              className="w-full py-3 rounded-xl bg-[#4a7c59] text-white font-medium hover:bg-[#3d6b4a] transition-colors text-sm"
            >
              Tiếp tục củng cố
            </button>
            <button
              onClick={() => navigate('home')}
              className="w-full py-3 rounded-xl border border-[#e5e1d8] text-[#6b7280] hover:bg-[#FAF9F6] transition-colors text-sm"
            >
              Về trang chủ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top Header */}
      <div className="px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
            <span>🔥</span> Sổ Tay Từ Hay Làm Sai (错题本)
          </h1>
          <p className="text-xs text-[#6b7280]">
            Tự động gom các từ bạn từng chọn sai để xào lại liên tục đến khi nhớ sâu
          </p>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">
        {weakVocab.length === 0 ? (
          /* Empty state */
          <div className="bg-white rounded-3xl border border-[#e5e1d8] p-8 text-center space-y-3 shadow-xs">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto text-3xl">
              ✨
            </div>
            <h2 className="text-lg font-bold text-[#1a1a1a]">Tuyệt vời! Bạn chưa có từ nào bị sai!</h2>
            <p className="text-xs text-[#6b7280] max-w-sm mx-auto leading-relaxed">
              Mỗi khi bạn làm bài tập hoặc chơi trò chơi mà chọn nhầm, hệ thống sẽ tự động lưu từ đó vào đây để bạn củng cố.
            </p>
            <button
              onClick={() => navigate('home')}
              className="px-6 py-2.5 rounded-xl bg-[#4a7c59] text-white text-xs font-semibold hover:bg-[#3d6b4a] transition-colors inline-block"
            >
              Bắt đầu học bài mới
            </button>
          </div>
        ) : (
          /* Has mistakes */
          <div className="space-y-4">
            {/* Action Banner */}
            <div className="bg-red-50 border border-red-200 rounded-3xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
              <div>
                <p className="text-base font-bold text-red-950 flex items-center gap-2">
                  <Flame size={18} className="text-red-600" /> Có {weakVocab.length} từ bạn đang hay bị nhầm lẫn
                </p>
                <p className="text-xs text-red-800 mt-1 leading-relaxed">
                  Đừng chỉ xem lướt qua! Hãy xào liên hoàn qua <strong>4 dạng bài</strong> (Xem lại ➔ Điền câu ➔ Sắp xếp câu ➔ Nghe chép) để nhớ tận gốc rễ.
                </p>
              </div>

              <button
                onClick={() => setStarted(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 shrink-0 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Flame size={16} /> Bắt Đầu Tiêu Diệt Từ Sai
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Drill Mode Selector */}
            <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 shadow-xs space-y-3">
              <p className="text-xs font-bold text-[#1a1a1a] flex items-center gap-1.5">
                <Layers size={15} className="text-[#4a7c59]" />
                Chọn mức độ lồng ghép dạng bài để khắc sâu:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setDrillMode('deep')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    drillMode === 'deep'
                      ? 'border-[#4a7c59] bg-[#e8f0eb] ring-2 ring-[#4a7c59]/20 shadow-xs'
                      : 'border-[#e5e1d8] bg-[#FAF9F6] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#1a1a1a]">🔥 Luyện sâu 4 bước</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#4a7c59] text-white">Khuyên dùng</span>
                  </div>
                  <p className="text-[11px] text-[#6b7280] leading-relaxed">
                    Xào liên hoàn 4 bài/từ: Mặt chữ ➔ Điền ngữ cảnh ➔ Sắp xếp câu ➔ Nghe chép ({weakVocab.length * 4} câu)
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setDrillMode('context')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    drillMode === 'context'
                      ? 'border-[#4a7c59] bg-[#e8f0eb] ring-2 ring-[#4a7c59]/20 shadow-xs'
                      : 'border-[#e5e1d8] bg-[#FAF9F6] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#1a1a1a]">📝 Thực chiến câu</span>
                    <span className="text-[10px] font-medium text-[#4a7c59] bg-[#e8f0eb] px-1.5 py-0.5 rounded-full">Ngữ cảnh</span>
                  </div>
                  <p className="text-[11px] text-[#6b7280] leading-relaxed">
                    Bỏ qua lật thẻ, giải thẳng bài tập điền từ + xếp câu + nghe chép ({weakVocab.length * 3} câu)
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setDrillMode('quick')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    drillMode === 'quick'
                      ? 'border-[#4a7c59] bg-[#e8f0eb] ring-2 ring-[#4a7c59]/20 shadow-xs'
                      : 'border-[#e5e1d8] bg-[#FAF9F6] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#1a1a1a]">⚡ Ôn nhanh cốt lõi</span>
                    <span className="text-[10px] font-medium text-[#6b7280] bg-[#e5e1d8] px-1.5 py-0.5 rounded-full">Nhanh</span>
                  </div>
                  <p className="text-[11px] text-[#6b7280] leading-relaxed">
                    2 bài/từ: Lật Flashcard nhớ nghĩa + Điền vào chỗ trống ({weakVocab.length * 2} câu)
                  </p>
                </button>
              </div>
            </div>

            {/* List of weak words */}
            <div className="space-y-2.5">
              <p className="text-xs font-semibold text-[#6b7280]">Danh sách các từ cần ôn kỹ:</p>
              {weakVocab.map((vocab) => {
                const card = state.progress.cards[vocab.id];
                const mistakeCount = card?.mistakeCount || 1;

                return (
                  <div
                    key={vocab.id}
                    className="bg-white rounded-2xl border border-[#e5e1d8] p-4 flex items-center justify-between gap-3 hover:border-red-300 transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="chinese-char text-3xl font-medium text-[#1a1a1a]">
                        {vocab.simplified}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#4a7c59]">
                            {vocab.pinyin}
                          </span>
                          <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                            Sai {mistakeCount} lần
                          </span>
                        </div>
                        <p className="text-xs text-[#1a1a1a] mt-0.5">{vocab.meaning}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => speak(vocab.simplified)}
                        className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59] transition-colors"
                        title="Nghe phát âm"
                      >
                        <Volume2 size={16} />
                      </button>
                      <button
                        onClick={() => dispatch({ type: 'RESOLVE_MISTAKE', vocabId: vocab.id })}
                        className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-green-50 text-green-700 transition-colors"
                        title="Đã nhớ rồi, xóa khỏi danh sách sai"
                      >
                        <CheckCircle size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
