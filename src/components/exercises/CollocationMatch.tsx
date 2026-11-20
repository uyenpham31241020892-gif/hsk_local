import React, { useState, useEffect } from 'react';
import type { Exercise } from '../../types';
import { Volume2, ChevronRight } from 'lucide-react';
import { speak } from '../../utils/exercises';
import { vocabById } from '../../data';

interface CollocationMatchProps {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
  onNext?: () => void;
}

export function CollocationMatch({ exercise, onAnswer, onNext }: CollocationMatchProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const correct = Array.isArray(exercise.answer.correct) ? exercise.answer.correct[0] : exercise.answer.correct;
  const vocab = vocabById[exercise.vocabId];

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

  const handleSpeak = () => {
    // Speak prompt without plus sign
    const text = exercise.question.prompt.replace(/\+/g, '');
    speak(text);
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl border border-[#e5e1d8] p-6 text-center">
        <p className="text-[#6b7280] text-sm mb-3">🔗 Cụm từ hay đi liền (Collocation)</p>
        <p className="chinese-char text-3xl font-medium text-[#4a7c59] mb-1">{exercise.question.prompt}</p>
        
        {/* Pinyin under Chinese */}
        {vocab && (
          <p className="text-[#4a7c59] text-sm font-medium mb-2">{vocab.pinyin}</p>
        )}

        <div className="flex justify-center mb-2">
          <button
            onClick={handleSpeak}
            className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-[#e8f0eb] transition-colors inline-flex items-center gap-1.5 text-xs text-[#4a7c59]"
          >
            <Volume2 size={16} /> Nghe đọc
          </button>
        </div>
        <p className="text-xs text-[#b5b2ab]">Chọn nghĩa tiếng Việt chính xác nhất</p>
      </div>

      <div className="flex flex-col gap-2">
        {exercise.question.options?.map((opt, i) => {
          let cls = 'p-4 rounded-xl border text-left cursor-pointer transition-all text-sm ';
          if (!revealed) {
            cls += 'border-[#e5e1d8] bg-white hover:border-[#4a7c59] hover:bg-[#e8f0eb] text-[#1a1a1a]';
          } else if (opt === correct) {
            cls += 'border-green-400 bg-green-50 text-green-800 font-medium';
          } else if (opt === selected) {
            cls += 'border-red-400 bg-red-50 text-red-800';
          } else {
            cls += 'border-[#e5e1d8] bg-[#FAF9F6] text-[#9ca3af]';
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(opt)}>
              {String.fromCharCode(65 + i)}. {opt}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className={`rounded-2xl p-4 text-sm fade-in shadow-xs ${selected === correct ? 'bg-green-50 border border-green-200 text-green-900' : 'bg-red-50 border border-red-200 text-red-900'}`}>
          <div className="font-bold">
            {selected === correct ? '✅ Chính xác!' : `❌ Đáp án đúng: ${correct}`}
          </div>
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
