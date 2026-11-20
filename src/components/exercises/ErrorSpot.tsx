import React, { useState, useEffect } from 'react';
import type { Exercise } from '../../types';
import { Volume2, ChevronRight } from 'lucide-react';
import { speak } from '../../utils/exercises';
import { vocabById } from '../../data';

interface ErrorSpotProps {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
  onNext?: () => void;
}

export function ErrorSpot({ exercise, onAnswer, onNext }: ErrorSpotProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const correct = Array.isArray(exercise.answer.correct) ? exercise.answer.correct[0] : exercise.answer.correct;

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

  return (
    <div className="flex flex-col gap-5 w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl border border-[#e5e1d8] p-6">
        <p className="text-[#6b7280] text-sm text-center mb-3">🔍 Tìm và sửa lỗi ngữ pháp / dùng từ sai</p>
        <p className="chinese-char text-2xl text-center leading-relaxed text-[#1a1a1a] mb-1">
          {exercise.question.prompt}
        </p>

        {/* Pinyin */}
        {exercise.question.promptPinyin && (
          <p className="text-[#4a7c59] text-xs text-center mb-2">{exercise.question.promptPinyin}</p>
        )}

        {exercise.question.sentence && (
          <p className="text-[#6b7280] text-xs text-center italic mb-3">{exercise.question.sentence}</p>
        )}

        <div className="flex justify-center">
          <button
            onClick={() => speak(exercise.question.prompt)}
            className="p-1.5 rounded-lg border border-[#e5e1d8] hover:bg-[#e8f0eb] transition-colors inline-flex items-center gap-1 text-xs text-[#4a7c59]"
          >
            <Volume2 size={14} /> Nghe câu
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {exercise.question.options?.map((opt, i) => {
          let cls = 'p-4 rounded-xl border text-center cursor-pointer transition-all ';
          if (!revealed) {
            cls += 'border-[#e5e1d8] bg-white hover:border-[#4a7c59] hover:bg-[#e8f0eb]';
          } else if (opt === correct) {
            cls += 'border-green-400 bg-green-50';
          } else if (opt === selected) {
            cls += 'border-red-400 bg-red-50';
          } else {
            cls += 'border-[#e5e1d8] bg-[#FAF9F6] opacity-50';
          }

          const optVocab = Object.values(vocabById).find(v => v.simplified === opt);

          return (
            <button key={i} className={cls} onClick={() => handleSelect(opt)}>
              <span className="chinese-char text-2xl block text-[#1a1a1a]">{opt}</span>
              {optVocab && (
                <span className="text-[#4a7c59] text-xs block mt-0.5">{optVocab.pinyin}</span>
              )}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className={`rounded-2xl p-4 text-sm fade-in shadow-xs ${selected === correct ? 'bg-green-50 border border-green-200 text-green-900' : 'bg-red-50 border border-red-200 text-red-900'}`}>
          <p className="font-bold">{selected === correct ? '✅ Chính xác!' : '❌ Chưa chính xác!'}</p>
          {exercise.answer.explanation && (
            <p className="mt-1 text-[#4a7c59] text-xs font-semibold">{exercise.answer.explanation}</p>
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
