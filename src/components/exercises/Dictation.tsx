import React, { useState, useEffect, useRef } from 'react';
import type { Exercise } from '../../types';
import { Volume2, Pause, Eye, EyeOff, ChevronRight } from 'lucide-react';
import { speak, diffChars } from '../../utils/exercises';
import { vocabById } from '../../data';

interface DictationProps {
  exercise: Exercise;
  speechRate: number;
  onAnswer: (correct: boolean) => void;
  onNext?: () => void;
}

export function Dictation({ exercise, speechRate, onAnswer, onNext }: DictationProps) {
  const [input, setInput] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [showPinyinHint, setShowPinyinHint] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const correct = Array.isArray(exercise.answer.correct) ? exercise.answer.correct[0] : exercise.answer.correct;
  const vocab = vocabById[exercise.vocabId];
  const correctNoPunct = correct.replace(/[。！？，、]/g, '');

  useEffect(() => {
    setInput('');
    setRevealed(false);
    setPlayCount(0);
    inputRef.current?.focus();
  }, [exercise.vocabId]);

  const handlePlay = (slow = false) => {
    setPlayCount(c => c + 1);
    speak(exercise.question.audioText ?? correct, slow ? 0.5 : speechRate);
  };

  const handleCheck = () => {
    if (!input.trim()) return;
    setRevealed(true);
    const isCorrect = input.trim().replace(/[。！？，、\s]/g, '') === correctNoPunct.replace(/\s/g, '');
    onAnswer(isCorrect);
  };

  const diff = revealed ? diffChars(input.trim(), correct) : [];

  return (
    <div className="flex flex-col gap-5 w-full max-w-md mx-auto">
      {/* Target Word Clue & Speaking Guide */}
      {vocab && (
        <div className="bg-white border border-[#e5e1d8] rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-[#6b7280]">Từ cần nghe viết & luyện đọc:</p>
            {showPinyinHint && (
              <p className="text-base text-[#4a7c59] font-semibold tracking-wider mt-0.5">
                {vocab.pinyin}
              </p>
            )}
            <p className="text-sm font-medium text-[#1a1a1a] mt-0.5">
              Nghĩa: {vocab.meaning}
            </p>
          </div>
          <button
            onClick={() => setShowPinyinHint(!showPinyinHint)}
            className="p-2 text-xs text-[#6b7280] hover:text-[#1a1a1a] border border-[#e5e1d8] rounded-xl flex items-center gap-1"
          >
            {showPinyinHint ? <EyeOff size={14} /> : <Eye size={14} />}
            {showPinyinHint ? 'Ẩn Pinyin' : 'Hiện Pinyin'}
          </button>
        </div>
      )}

      {/* Audio Play Center */}
      <div className="bg-white rounded-2xl border border-[#e5e1d8] p-6 text-center shadow-xs">
        <p className="text-[#6b7280] text-sm mb-4">🎧 Nghe kỹ âm đọc rồi gõ lại chữ Hán</p>

        {/* Play buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => handlePlay(false)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#4a7c59] text-white text-sm font-medium hover:bg-[#3d6b4a] transition-colors shadow-sm"
          >
            <Volume2 size={18} />
            Nghe đọc ({Math.round(speechRate * 100)}%)
          </button>
          <button
            onClick={() => handlePlay(true)}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[#e5e1d8] text-[#4a7c59] text-sm hover:bg-[#e8f0eb] transition-colors"
          >
            <Pause size={16} />
            Đọc chậm (50%)
          </button>
        </div>
        {playCount === 0 ? (
          <p className="text-amber-600 text-xs mt-3">👆 Bấm nút Nghe trước khi gõ</p>
        ) : (
          <p className="text-[#6b7280] text-xs mt-3">Đã nghe {playCount} lần. Đọc nhẩm theo để luyện phát âm!</p>
        )}
      </div>

      {/* Input Field */}
      <div className="bg-white rounded-2xl border border-[#e5e1d8] p-4">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && input.trim()) handleCheck(); }}
          disabled={revealed}
          placeholder="Gõ chữ Hán hoặc Pinyin (bấm dấu cách để chọn chữ)..."
          className="w-full chinese-char text-xl bg-transparent outline-none text-[#1a1a1a] placeholder:text-[#b5b2ab]"
        />
      </div>

      {/* Diff display */}
      {revealed && (
        <div className="bg-white rounded-2xl border border-[#e5e1d8] p-4 fade-in">
          <p className="text-xs text-[#6b7280] mb-2">So sánh kết quả từng ký tự:</p>
          <div className="flex flex-wrap gap-1 mb-3">
            {diff.map((d, i) => (
              <span
                key={i}
                className={`chinese-char text-2xl px-2 py-1 rounded-lg ${
                  d.correct 
                    ? 'text-green-700 bg-green-50 border border-green-200' 
                    : 'text-red-700 bg-red-50 border border-red-200'
                }`}
              >
                {d.char}
              </span>
            ))}
          </div>
          <div className="pt-3 border-t border-[#e5e1d8]">
            <p className="text-xs text-[#6b7280]">Chữ đúng chuẩn:</p>
            <p className="chinese-char text-xl text-[#1a1a1a] mt-0.5 font-medium">{correct}</p>
            {vocab && (
              <p className="text-xs text-[#4a7c59] mt-1 font-semibold">{vocab.pinyin} · {vocab.meaning}</p>
            )}
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

      {/* Submit Button */}
      {!revealed && (
        <button
          onClick={handleCheck}
          disabled={!input.trim()}
          className="w-full py-3.5 rounded-xl bg-[#4a7c59] text-white font-medium hover:bg-[#3d6b4a] disabled:opacity-40 transition-colors shadow-xs"
        >
          Kiểm tra kết quả
        </button>
      )}
    </div>
  );
}
