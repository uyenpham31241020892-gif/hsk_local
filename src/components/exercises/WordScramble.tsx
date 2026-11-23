import React, { useState, useEffect } from 'react';
import type { Exercise } from '../../types';
import { Check, X, ChevronRight } from 'lucide-react';
import { vocabById } from '../../data';

interface WordScrambleProps {
  exercise: Exercise;
  showPinyin?: boolean;
  onTogglePinyin?: () => void;
  onAnswer: (correct: boolean) => void;
  onNext?: () => void;
}

export function WordScramble({ exercise, showPinyin = true, onTogglePinyin: _onTogglePinyin, onAnswer, onNext }: WordScrambleProps) {
  const correctWords = Array.isArray(exercise.answer.correct)
    ? exercise.answer.correct
    : [exercise.answer.correct];

  const [available, setAvailable] = useState<string[]>([...(exercise.question.words ?? [])]);
  const [placed, setPlaced] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const vocab = vocabById[exercise.vocabId];

  useEffect(() => {
    let initialWords = [...(exercise.question.words ?? [])];
    // Safety check: If words array only has 1 chunk and that chunk has multiple characters, split into individual characters
    if (initialWords.length <= 1 && initialWords[0] && initialWords[0].length > 1) {
      initialWords = initialWords[0].split('');
    }
    setAvailable(initialWords);
    setPlaced([]);
    setRevealed(false);
  }, [exercise.vocabId, exercise.question.words]);

  const addWord = (word: string, idx: number) => {
    if (revealed) return;
    setAvailable(prev => { const a = [...prev]; a.splice(idx, 1); return a; });
    setPlaced(prev => [...prev, word]);
  };

  const removeWord = (word: string, idx: number) => {
    if (revealed) return;
    setPlaced(prev => { const p = [...prev]; p.splice(idx, 1); return p; });
    setAvailable(prev => [...prev, word]);
  };

  const checkAnswer = () => {
    // Compare joined strings (ignore segmentation differences)
    const placedStr = placed.join('');
    const correctStr = correctWords.join('');
    const correct = placedStr === correctStr;
    setIsCorrect(correct);
    setRevealed(true);
    onAnswer(correct);
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-lg mx-auto">
      {/* Vocab hint */}
      {vocab && (
        <div className="flex items-center gap-3 bg-[#e8f0eb] rounded-xl px-4 py-2">
          <span className="chinese-char text-2xl text-[#1a1a1a]">{vocab.simplified}</span>
          <div>
            {showPinyin && <p className="text-[#4a7c59] text-sm font-medium">{vocab.pinyin}</p>}
            <p className="text-[#6b7280] text-xs">{vocab.meaning}</p>
          </div>
        </div>
      )}

      {/* Prompt */}
      <div className="bg-white rounded-2xl border border-[#e5e1d8] p-5">
        <p className="text-[#6b7280] text-sm text-center mb-1">🔀 Sắp xếp thành câu đúng</p>
        <p className="text-[#1a1a1a] text-center text-sm italic">
          {exercise.question.prompt.split('\n').pop()}
        </p>
      </div>

      {/* Answer zone */}
      <div className="min-h-[64px] bg-[#FAF9F6] border-2 border-dashed border-[#d1cfc9] rounded-2xl p-3 flex flex-wrap gap-2 items-center">
        {placed.length === 0 && (
          <span className="text-[#b5b2ab] text-sm w-full text-center">Nhấn vào từ bên dưới để đặt vào đây</span>
        )}
        {placed.map((w, i) => (
          <button
            key={i}
            onClick={() => removeWord(w, i)}
            className={`word-chip px-3 py-2 rounded-lg border chinese-char text-base
              ${revealed
                ? isCorrect
                  ? 'bg-green-50 border-green-300 text-green-800'
                  : 'bg-red-50 border-red-300 text-red-800'
                : 'bg-white border-[#4a7c59] text-[#1a1a1a]'
              }`}
          >
            {w}
          </button>
        ))}
      </div>

      {/* Available word chips */}
      <div className="flex flex-wrap gap-2 justify-center min-h-[48px]">
        {available.map((w, i) => (
          <button
            key={i}
            onClick={() => addWord(w, i)}
            className="word-chip px-3 py-2 rounded-lg bg-white border border-[#e5e1d8] hover:border-[#4a7c59] hover:bg-[#e8f0eb] text-[#1a1a1a] chinese-char text-base"
          >
            {w}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => { setAvailable([...(exercise.question.words ?? [])]); setPlaced([]); }}
          disabled={revealed}
          className="px-4 py-2 rounded-xl border border-[#e5e1d8] text-[#6b7280] text-sm hover:bg-[#FAF9F6] transition-colors disabled:opacity-40"
        >
          Xóa hết
        </button>
        <button
          onClick={checkAnswer}
          disabled={placed.length === 0 || revealed}
          className="px-6 py-2 rounded-xl bg-[#4a7c59] text-white text-sm font-medium hover:bg-[#3d6b4a] disabled:opacity-40 transition-colors"
        >
          Kiểm tra
        </button>
      </div>

      {/* Result */}
      {revealed && (
        <div className={`rounded-2xl p-4 fade-in text-sm shadow-xs ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          {isCorrect ? (
            <p className="text-green-800 font-bold flex items-center gap-2"><Check size={16} /> Chính xác!</p>
          ) : (
            <div className="text-red-900">
              <p className="flex items-center gap-2 font-bold mb-1"><X size={16} /> Thứ tự đúng chuẩn:</p>
              <p className="chinese-char text-lg font-bold text-red-950 bg-white/70 px-3 py-1.5 rounded-xl border border-red-200 inline-block">{correctWords.join('')}</p>
              {exercise.answer.explanation && (
                <p className="text-xs text-[#4a7c59] mt-2 font-semibold">{exercise.answer.explanation}</p>
              )}
            </div>
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
