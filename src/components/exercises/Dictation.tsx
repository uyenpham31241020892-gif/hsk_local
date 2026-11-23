import React, { useState, useEffect, useRef } from 'react';
import type { Exercise } from '../../types';
import { Volume2, Pause, ChevronRight, Lightbulb } from 'lucide-react';
import { speak, diffChars } from '../../utils/exercises';
import { vocabById } from '../../data';

interface DictationProps {
  exercise: Exercise;
  speechRate: number;
  showPinyin?: boolean;
  onTogglePinyin?: () => void;
  onAnswer: (correct: boolean) => void;
  onNext?: () => void;
}

export function Dictation({ exercise, speechRate, showPinyin = true, onTogglePinyin, onAnswer, onNext }: DictationProps) {
  const [input, setInput] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [showMeaningHint, setShowMeaningHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const correct = Array.isArray(exercise.answer.correct) ? exercise.answer.correct[0] : exercise.answer.correct;
  const vocab = vocabById[exercise.vocabId];
  const correctNoPunct = correct.replace(/[。！？，、]/g, '');

  const handlePlay = (slow = false) => {
    setPlayCount(c => c + 1);
    speak(exercise.question.audioText ?? correct, slow ? 0.5 : speechRate);
  };

  useEffect(() => {
    setInput('');
    setRevealed(false);
    setPlayCount(0);
    setShowMeaningHint(false);
    inputRef.current?.focus();
    // Tự động phát âm thanh lần đầu khi xuất hiện câu hỏi
    const timer = setTimeout(() => {
      handlePlay(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [exercise.vocabId]);

  const stripTones = (str: string) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ü/g, 'v')
      .toLowerCase();
  };

  const handleCheck = () => {
    if (!input.trim()) return;
    setRevealed(true);
    const cleanInput = input.trim().replace(/[。！？，、\s]/g, '').toLowerCase();
    const cleanCorrect = correctNoPunct.replace(/\s/g, '').toLowerCase();
    const cleanPinyin = (vocab?.pinyin || '').replace(/[\s']/g, '').toLowerCase();

    const isCorrect = cleanInput === cleanCorrect || stripTones(cleanInput) === stripTones(cleanPinyin);
    onAnswer(isCorrect);
  };

  const diff = revealed ? diffChars(input.trim(), correct) : [];

  return (
    <div className="flex flex-col gap-5 w-full max-w-md mx-auto">
      {/* Audio Play Center */}
      <div className="bg-white rounded-3xl border border-[#e5e1d8] p-6 text-center shadow-xs space-y-4">
        <div>
          <span className="text-xs font-bold text-[#4a7c59] bg-[#e8f0eb] px-3 py-1 rounded-full inline-block">
            🎧 Nghe chính tả (Dictation)
          </span>
          <p className="text-sm text-[#1a1a1a] font-medium mt-2">
            Nghe kỹ âm đọc rồi gõ lại chữ Hán (hoặc Pinyin)
          </p>
        </div>

        {/* Play buttons */}
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            onClick={() => handlePlay(false)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#4a7c59] text-white text-sm font-semibold hover:bg-[#3d6b4a] transition-all shadow-xs active:scale-95"
          >
            <Volume2 size={18} />
            {playCount === 0 ? 'Nghe đọc' : 'Nghe lại'} ({Math.round(speechRate * 100)}%)
          </button>
          <button
            type="button"
            onClick={() => handlePlay(true)}
            className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-[#e5e1d8] bg-[#FAF9F6] text-[#4a7c59] text-sm font-medium hover:bg-[#e8f0eb] transition-all active:scale-95"
          >
            <Pause size={16} />
            Đọc chậm (50%)
          </button>
        </div>

        <div className="flex items-center justify-between pt-1 text-xs text-[#6b7280]">
          <span>{playCount > 0 ? `Đã nghe ${playCount} lần` : 'Bấm nghe trước khi gõ'}</span>

          {/* Optional Meaning Hint (Hidden by default, only meaning, never Pinyin/Hanzi) */}
          {vocab?.meaning && !revealed && (
            <button
              type="button"
              onClick={() => setShowMeaningHint(prev => !prev)}
              className="text-[#4a7c59] hover:underline flex items-center gap-1 font-medium"
            >
              <Lightbulb size={13} />
              <span>{showMeaningHint ? 'Ẩn gợi ý' : 'Gợi ý nghĩa tiếng Việt'}</span>
            </button>
          )}
        </div>

        {/* Meaning Hint Display */}
        {showMeaningHint && vocab?.meaning && !revealed && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 fade-in text-left">
            💡 <strong>Nghĩa từ:</strong> {vocab.meaning}
          </div>
        )}
      </div>

      {/* Input Field */}
      <div className="bg-white rounded-2xl border-2 border-[#e5e1d8] focus-within:border-[#4a7c59] p-4 shadow-2xs transition-all">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && input.trim()) handleCheck(); }}
          disabled={revealed}
          placeholder="Gõ chữ Hán hoặc Pinyin vào đây..."
          className="w-full chinese-char text-xl bg-transparent outline-none text-[#1a1a1a] placeholder:text-[#b5b2ab]"
        />
      </div>

      {/* Submit Button */}
      {!revealed && (
        <button
          type="button"
          onClick={handleCheck}
          disabled={!input.trim()}
          className="w-full py-3.5 rounded-xl bg-[#4a7c59] text-white font-bold text-sm hover:bg-[#3d6b4a] disabled:opacity-40 transition-colors shadow-xs active:scale-[0.99]"
        >
          Kiểm tra kết quả
        </button>
      )}

      {/* Diff display after answering */}
      {revealed && (
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 space-y-4 shadow-sm fade-in">
          <div>
            <p className="text-xs text-[#6b7280] mb-2 font-medium">So sánh kết quả từng ký tự:</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {diff.map((d, i) => (
                <span
                  key={i}
                  className={`chinese-char text-2xl px-2.5 py-1 rounded-xl font-medium ${
                    d.correct 
                      ? 'text-green-700 bg-green-50 border border-green-200' 
                      : 'text-red-700 bg-red-50 border border-red-200'
                  }`}
                >
                  {d.char}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#e5e1d8] space-y-1">
            <p className="text-xs text-[#6b7280]">Đáp án chính xác:</p>
            <div className="flex items-baseline gap-3">
              <span className="chinese-char text-3xl font-bold text-[#1a1a1a]">{correct}</span>
              {vocab && showPinyin && (
                <span className="text-base text-[#4a7c59] font-bold tracking-wider">{vocab.pinyin}</span>
              )}
            </div>
            {vocab && (
              <p className="text-xs text-[#6b7280] mt-0.5">Nghĩa: {vocab.meaning}</p>
            )}
          </div>

          {onNext && (
            <button
              type="button"
              onClick={onNext}
              className="w-full mt-3 py-3.5 px-6 rounded-2xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
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
