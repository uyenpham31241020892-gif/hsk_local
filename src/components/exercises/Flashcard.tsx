import React, { useState, useEffect } from 'react';
import type { VocabEntry } from '../../types';
import { speak } from '../../utils/exercises';
import { Volume2, RotateCcw, Lightbulb, ChevronRight, CheckCircle2 } from 'lucide-react';

interface FlashcardProps {
  vocab: VocabEntry;
  speechRate: number;
  showPinyinFirst: boolean;
  onGrade: (quality: 0|1|2|3|4|5) => void;
  onNext?: () => void;
}

export function Flashcard({ vocab, speechRate, showPinyinFirst, onGrade, onNext }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [graded, setGraded] = useState(false);

  useEffect(() => {
    setFlipped(false);
    setShowTip(false);
    setGraded(false);
  }, [vocab.id]);

  const handleFlip = () => {
    if (!flipped) speak(vocab.simplified, speechRate);
    setFlipped(f => !f);
  };

  const handleGrade = (q: 0|1|2|3|4|5) => {
    if (graded) return;
    setGraded(true);
    onGrade(q);
    // No auto-advance – ExerciseRunner shows "Next" button
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
      {/* Card */}
      <div
        className="card-container w-full cursor-pointer"
        style={{ height: '300px' }}
        onClick={handleFlip}
      >
        <div className={`card-inner ${flipped ? 'flipped' : ''}`} style={{ height: '100%' }}>
          {/* Front */}
          <div className="card-face bg-white rounded-2xl border border-[#e5e1d8] shadow-sm flex flex-col items-center justify-center p-8 gap-3">
            {showPinyinFirst && (
              <p className="text-[#4a7c59] text-lg tracking-widest font-medium">{vocab.pinyin}</p>
            )}
            <span className="chinese-char text-7xl font-light text-[#1a1a1a] leading-none select-none">
              {vocab.simplified}
            </span>
            {/* Pinyin always visible below */}
            {!showPinyinFirst && (
              <p className="text-[#4a7c59] text-base tracking-widest mt-1">{vocab.pinyin}</p>
            )}
            <p className="text-[#b5b2ab] text-xs mt-1">Nhấn để xem nghĩa ↓</p>
          </div>

          {/* Back */}
          <div className="card-face card-back bg-white rounded-2xl border border-[#e5e1d8] shadow-sm flex flex-col items-center justify-center p-6 gap-3">
            <span className="chinese-char text-4xl font-medium text-[#1a1a1a]">{vocab.simplified}</span>
            <p className="text-[#4a7c59] font-semibold text-xl tracking-wide">{vocab.pinyin}</p>
            <div className="w-12 h-px bg-[#e5e1d8]" />
            <p className="text-[#1a1a1a] text-lg font-medium text-center">{vocab.meaning}</p>
            {vocab.meaningEn && (
              <p className="text-[#6b7280] text-sm italic">{vocab.meaningEn}</p>
            )}
            {vocab.pos && (
              <span className="text-xs bg-[#e8f0eb] text-[#4a7c59] px-2 py-0.5 rounded-full">
                {vocab.pos.join(' / ')}
              </span>
            )}
            {vocab.exampleSentences?.[0] && (
              <div className="bg-[#FAF9F6] rounded-xl p-3 w-full text-center mt-1">
                <p className="chinese-char text-base text-[#1a1a1a]">{vocab.exampleSentences[0].zh}</p>
                <p className="text-[#4a7c59] text-xs mt-0.5">{vocab.exampleSentences[0].pinyin}</p>
                <p className="text-[#6b7280] text-xs mt-0.5">{vocab.exampleSentences[0].vi}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex gap-3 items-center">
        <button
          onClick={() => speak(vocab.simplified, speechRate)}
          className="p-2.5 rounded-xl border border-[#e5e1d8] hover:bg-[#e8f0eb] transition-colors"
          title="Nghe phát âm"
        >
          <Volume2 size={18} className="text-[#4a7c59]" />
        </button>
        <button
          onClick={() => setFlipped(false)}
          className="p-2.5 rounded-xl border border-[#e5e1d8] hover:bg-[#e8f0eb] transition-colors"
          title="Lật lại"
        >
          <RotateCcw size={18} className="text-[#6b7280]" />
        </button>
        {vocab.memoryTip && (
          <button
            onClick={() => setShowTip(t => !t)}
            className="p-2.5 rounded-xl border border-[#e5e1d8] hover:bg-amber-50 transition-colors"
            title="Mẹo nhớ"
          >
            <Lightbulb size={18} className="text-amber-500" />
          </button>
        )}
      </div>

      {/* Memory tip */}
      {showTip && vocab.memoryTip && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 w-full max-w-lg fade-in">
          💡 {vocab.memoryTip}
        </div>
      )}

      {/* Grade buttons – only shown after flip, not graded yet */}
      {flipped && !graded && (
        <div className="w-full max-w-lg fade-in">
          <p className="text-xs text-[#6b7280] text-center mb-3">Bạn nhớ được không?</p>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => handleGrade(1)}
              className="py-3 rounded-xl border border-red-200 bg-red-50 text-red-700 font-medium hover:bg-red-100 transition-colors text-sm"
            >
              😕 Quên mất
            </button>
            <button
              onClick={() => handleGrade(3)}
              className="py-3 rounded-xl border border-amber-200 bg-amber-50 text-amber-700 font-medium hover:bg-amber-100 transition-colors text-sm"
            >
              🤔 Nhớ ra rồi
            </button>
            <button
              onClick={() => handleGrade(5)}
              className="py-3 rounded-xl border border-green-200 bg-green-50 text-green-700 font-medium hover:bg-green-100 transition-colors text-sm"
            >
              ✅ Nhớ ngay
            </button>
          </div>
        </div>
      )}
      {flipped && graded && (
        <div className="w-full max-w-lg fade-in space-y-2">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-[#4a7c59] shrink-0" />
              <div>
                <p className="text-xs font-bold text-emerald-950">Đã ghi nhận đánh giá của bạn!</p>
                <p className="text-[11px] text-emerald-700">Bấm tiếp theo để chuyển sang bài tập tiếp theo</p>
              </div>
            </div>
            {onNext && (
              <button
                onClick={onNext}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Câu tiếp theo</span>
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
