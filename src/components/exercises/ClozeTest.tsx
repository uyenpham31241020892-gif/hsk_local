import React, { useState, useEffect } from 'react';
import type { Exercise } from '../../types';
import { Volume2, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { speak } from '../../utils/exercises';
import { vocabById } from '../../data';

interface ClozeTestProps {
  exercise: Exercise;
  speechRate: number;
  showPinyin?: boolean;
  onTogglePinyin?: () => void;
  onAnswer: (correct: boolean) => void;
  onNext?: () => void;
}

export function ClozeTest({ exercise, speechRate, showPinyin: showPinyinProp, onTogglePinyin, onAnswer, onNext }: ClozeTestProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const correct = Array.isArray(exercise.answer.correct) ? exercise.answer.correct[0] : exercise.answer.correct;
  const vocab = vocabById[exercise.vocabId];

  // Option to toggle pinyin on/off
  const [localShowPinyin, setLocalShowPinyin] = useState<boolean>(() => {
    const saved = localStorage.getItem('hsk_exercise_show_pinyin');
    return saved !== null ? saved === 'true' : true;
  });

  const showPinyin = showPinyinProp !== undefined ? showPinyinProp : localShowPinyin;

  const togglePinyin = () => {
    if (onTogglePinyin) {
      onTogglePinyin();
    } else {
      const next = !showPinyin;
      setLocalShowPinyin(next);
      localStorage.setItem('hsk_exercise_show_pinyin', String(next));
    }
  };

  useEffect(() => {
    setSelected(null);
    setRevealed(false);
  }, [exercise.vocabId]);

  const handleSelect = (opt: string) => {
    if (revealed) return;
    setSelected(opt);
    setRevealed(true);
    onAnswer(opt === correct);
  };

  const sentenceParts = exercise.question.prompt.split(/_{2,}/);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      {/* Sentence */}
      <div className="bg-white rounded-3xl border border-[#e5e1d8] shadow-sm p-6 w-full">
        <div className="flex items-center justify-between mb-4 border-b border-[#e5e1d8] pb-2.5">
          <p className="text-[#6b7280] text-xs font-semibold">📝 Chọn từ đúng để điền vào chỗ trống</p>
          <button
            type="button"
            onClick={togglePinyin}
            className={`px-2.5 py-1 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all shadow-2xs ${
              showPinyin
                ? 'bg-[#e8f0eb] border-[#4a7c59]/30 text-[#4a7c59]'
                : 'bg-[#FAF9F6] border-[#e5e1d8] text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
            title={showPinyin ? 'Đang hiện Pinyin. Bấm để ẩn Pinyin' : 'Đang ẩn Pinyin. Bấm để hiện Pinyin'}
          >
            {showPinyin ? <Eye size={13} /> : <EyeOff size={13} />}
            <span>Pinyin: {showPinyin ? 'Bật' : 'Tắt'}</span>
          </button>
        </div>

        <div className="chinese-char text-3xl text-center leading-relaxed text-[#1a1a1a] mb-2 font-medium">
          {sentenceParts[0]}
          <span className="inline-block min-w-[56px] border-b-2 border-[#4a7c59] mx-1.5 text-[#4a7c59] font-bold">
            {revealed ? correct : '____'}
          </span>
          {sentenceParts[1] ?? ''}
        </div>

        {/* Pinyin of the sentence (Masked before answering, NEVER leaks the answer!) */}
        {showPinyin && (
          <p className="text-[#4a7c59] text-sm text-center mb-1 font-medium tracking-wide">
            {revealed && vocab 
              ? (exercise.question.promptPinyin ? exercise.question.promptPinyin.replace(/_{3,}/g, vocab.pinyin) : vocab.pinyin)
              : (exercise.question.promptPinyin 
                  ? exercise.question.promptPinyin.replace(new RegExp(vocab?.pinyin || '', 'gi'), '___')
                  : '___')}
          </p>
        )}

        {/* Vietnamese translation shown ONLY after answer is revealed to prevent giving away the answer */}
        {revealed && exercise.question.sentence && (
          <p className="text-[#6b7280] text-sm text-center italic">{exercise.question.sentence}</p>
        )}

        <div className="flex justify-center mt-3">
          <button
            onClick={() => speak(exercise.question.audioText || exercise.question.prompt.replace(/_{2,}/g, correct), speechRate)}
            className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59] transition-colors"
            title="Nghe đọc cả câu"
          >
            <Volume2 size={16} />
          </button>
        </div>
      </div>

      {/* Options – show both Chinese char AND pinyin (or ONLY Chinese char if pinyin is toggled off) */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {exercise.question.options?.map((opt, i) => {
          let cls = 'p-4 rounded-2xl border text-center cursor-pointer transition-all shadow-2xs ';
          if (!revealed) {
            cls += 'border-[#e5e1d8] bg-white hover:border-[#4a7c59] hover:bg-[#e8f0eb]';
          } else if (opt === correct) {
            cls += 'border-green-400 bg-green-50 text-green-900 font-bold';
          } else if (opt === selected) {
            cls += 'border-red-400 bg-red-50 text-red-900 font-bold';
          } else {
            cls += 'border-[#e5e1d8] bg-[#FAF9F6] opacity-40';
          }

          // Try to find pinyin for each option
          const optVocab = Object.values(vocabById).find(v => v.simplified === opt);

          return (
            <button key={i} className={cls} onClick={() => handleSelect(opt)}>
              <span className="chinese-char text-2xl block text-[#1a1a1a] font-medium">{opt}</span>
              {showPinyin && optVocab && (
                <span className="text-[#4a7c59] text-xs block mt-1 font-semibold">{optVocab.pinyin}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation after reveal */}
      {revealed && (
        <div className={`w-full rounded-2xl p-4 text-sm fade-in shadow-xs ${selected === correct ? 'bg-green-50 border border-green-200 text-green-900' : 'bg-red-50 border border-red-200 text-red-900'}`}>
          <div className="font-bold">
            {selected === correct ? '✅ Chính xác!' : `❌ Đáp án đúng: ${correct}`}
          </div>
          {exercise.answer.explanation && (
            <p className="text-xs text-[#4a7c59] mt-1 font-semibold">{exercise.answer.explanation}</p>
          )}
          {onNext && (
            <button
              onClick={onNext}
              className="w-full mt-3 py-3 px-6 rounded-xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Câu tiếp theo</span>
              <ChevronRight size={17} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
