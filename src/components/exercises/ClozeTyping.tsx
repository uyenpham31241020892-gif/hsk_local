import React, { useState, useEffect, useRef } from 'react';
import type { Exercise } from '../../types';
import { Volume2, ChevronRight, Eye, EyeOff, Lightbulb, Check, X } from 'lucide-react';
import { speak } from '../../utils/exercises';
import { vocabById } from '../../data';

interface ClozeTypingProps {
  exercise: Exercise;
  speechRate: number;
  showPinyin?: boolean;
  onAnswer: (correct: boolean) => void;
  onNext?: () => void;
}

export function ClozeTyping({ exercise, speechRate, showPinyin: showPinyinProp, onAnswer, onNext }: ClozeTypingProps) {
  const [input, setInput] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const correct = Array.isArray(exercise.answer.correct) ? exercise.answer.correct[0] : exercise.answer.correct;
  const vocab = vocabById[exercise.vocabId];

  // Option to toggle pinyin on/off
  const [localShowPinyin, setLocalShowPinyin] = useState<boolean>(() => {
    const saved = localStorage.getItem('hsk_exercise_show_pinyin');
    return saved !== null ? saved === 'true' : true;
  });

  const showPinyin = showPinyinProp !== undefined ? showPinyinProp : localShowPinyin;

  const togglePinyin = () => {
    const next = !showPinyin;
    setLocalShowPinyin(next);
    localStorage.setItem('hsk_exercise_show_pinyin', String(next));
  };

  useEffect(() => {
    setInput('');
    setRevealed(false);
    setIsCorrect(false);
    setShowHint(false);
    inputRef.current?.focus();
  }, [exercise.vocabId, exercise.question.prompt]);

  // Strip tone marks for flexible pinyin comparison (e.g. bàba -> baba)
  const stripTones = (str: string) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ü/g, 'v')
      .toLowerCase()
      .trim();
  };

  const handleCheck = () => {
    if (!input.trim() || revealed) return;

    const cleanInput = input.trim().toLowerCase();
    const cleanTarget = correct.trim().toLowerCase();
    const targetPinyin = vocab ? stripTones(vocab.pinyin) : '';
    const inputWithoutTone = stripTones(cleanInput);

    // Matches if user typed the Chinese characters OR the Pinyin (with or without tone marks!)
    const matched = 
      cleanInput === cleanTarget || 
      (targetPinyin && inputWithoutTone === targetPinyin) ||
      (vocab && cleanInput === vocab.pinyin.toLowerCase());

    setIsCorrect(matched);
    setRevealed(true);
    onAnswer(matched);

    if (matched) {
      const fullSentence = exercise.question.audioText || exercise.question.prompt.replace(/_{2,}/g, correct);
      speak(fullSentence, speechRate);
    }
  };

  const handleInsertChar = (ch: string) => {
    if (revealed) return;
    setInput(prev => prev + ch);
    inputRef.current?.focus();
  };

  const handleBackspace = () => {
    if (revealed) return;
    setInput(prev => prev.slice(0, -1));
    inputRef.current?.focus();
  };

  const sentenceParts = exercise.question.prompt.split(/_{2,}/);

  // Virtual quick-character tiles (target chars + random distractors)
  const virtualTiles = React.useMemo(() => {
    const targetChars = correct.split('');
    const distractorChars = ['我', '你', '他', '她', '很', '的', '是', '不', '看', '吃', '好', '在'];
    const pool = [...targetChars];
    distractorChars.forEach(c => {
      if (!pool.includes(c) && pool.length < 8) pool.push(c);
    });
    // Deterministic shuffle based on prompt length
    return pool.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  }, [correct]);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      {/* Sentence Card */}
      <div className="bg-white rounded-3xl border border-[#e5e1d8] shadow-sm p-6 w-full space-y-4">
        <div className="flex items-center justify-between border-b border-[#e5e1d8] pb-2.5">
          <p className="text-[#6b7280] text-xs font-semibold flex items-center gap-1.5">
            <span>✍️</span> Tự gõ từ vào chỗ trống
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="px-2.5 py-1 rounded-xl text-xs font-semibold border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100 flex items-center gap-1 transition-all"
              title="Xem gợi ý nếu bạn chưa nhớ chữ"
            >
              <Lightbulb size={13} />
              <span>Gợi ý</span>
            </button>

            <button
              type="button"
              onClick={togglePinyin}
              className={`px-2.5 py-1 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all shadow-2xs ${
                showPinyin
                  ? 'bg-[#e8f0eb] border-[#4a7c59]/30 text-[#4a7c59]'
                  : 'bg-[#FAF9F6] border-[#e5e1d8] text-[#6b7280] hover:text-[#1a1a1a]'
              }`}
            >
              {showPinyin ? <Eye size={13} /> : <EyeOff size={13} />}
              <span>Pinyin: {showPinyin ? 'Bật' : 'Tắt'}</span>
            </button>
          </div>
        </div>

        {/* Hint drawer if requested */}
        {showHint && vocab && (
          <div className="p-3 bg-amber-50/90 border border-amber-200 rounded-2xl text-xs text-amber-900 space-y-1 fade-in">
            <p>💡 <strong>Gợi ý:</strong> Âm đầu là <span className="font-mono font-bold text-base text-amber-950">{vocab.pinyin.slice(0, 1).toUpperCase()}...</span></p>
            {vocab.radical && <p>🧩 Bộ thủ chính: <strong>{vocab.radical}</strong></p>}
            {vocab.memoryTip && <p>🧠 Mẹo nhớ: {vocab.memoryTip}</p>}
          </div>
        )}

        {/* Sentence with blank */}
        <div className="chinese-char text-3xl text-center leading-relaxed text-[#1a1a1a] font-medium">
          {sentenceParts[0]}
          <span className={`inline-block min-w-[64px] px-2 py-0.5 border-b-2 mx-1.5 font-bold transition-all ${
            revealed
              ? isCorrect
                ? 'border-green-500 text-green-700 bg-green-50 rounded-lg'
                : 'border-red-500 text-red-700 bg-red-50 rounded-lg'
              : 'border-[#4a7c59] text-[#4a7c59] bg-[#FAF9F6]'
          }`}>
            {revealed ? correct : (input || '____')}
          </span>
          {sentenceParts[1] ?? ''}
        </div>

        {/* Masked sentence pinyin */}
        {showPinyin && (
          <p className="text-[#4a7c59] text-sm text-center font-medium tracking-wide">
            {revealed && vocab 
              ? (exercise.question.promptPinyin ? exercise.question.promptPinyin.replace(/_{3,}/g, vocab.pinyin) : vocab.pinyin)
              : (exercise.question.promptPinyin 
                  ? exercise.question.promptPinyin.replace(new RegExp(vocab?.pinyin || '', 'gi'), '___')
                  : '___')}
          </p>
        )}

        {/* Vietnamese Translation shown ONLY after reveal */}
        {revealed && exercise.question.sentence && (
          <p className="text-[#6b7280] text-sm text-center italic">{exercise.question.sentence}</p>
        )}

        <div className="flex justify-center pt-1">
          <button
            onClick={() => {
              const fullSentence = exercise.question.audioText || exercise.question.prompt.replace(/_{2,}/g, correct);
              speak(fullSentence, speechRate);
            }}
            className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59] transition-colors"
            title="Nghe đọc cả câu"
          >
            <Volume2 size={16} />
          </button>
        </div>
      </div>

      {/* Input Box for typing */}
      {!revealed && (
        <div className="w-full bg-white rounded-3xl border border-[#e5e1d8] p-4 space-y-3 shadow-xs">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCheck();
              }}
              placeholder="Gõ chữ Hán hoặc Pinyin (ví dụ: bàba hoặc baba)..."
              className="flex-1 px-4 py-3 bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl text-base text-[#1a1a1a] focus:outline-none focus:border-[#4a7c59]"
            />
            <button
              onClick={handleCheck}
              disabled={!input.trim()}
              className="px-6 py-3 bg-[#4a7c59] hover:bg-[#3d6b4a] disabled:opacity-40 text-white font-bold text-sm rounded-2xl transition-all shadow-sm shrink-0"
            >
              Kiểm tra
            </button>
          </div>

          {/* Virtual Quick-Tiles for non-Chinese IME users */}
          <div className="pt-2 border-t border-[#e5e1d8]/60 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-[#6b7280] px-1">
              <span>Không có bộ gõ tiếng Trung? Bấm chữ bên dưới:</span>
              <button onClick={handleBackspace} className="text-red-600 hover:underline">Xóa nét (⌫)</button>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {virtualTiles.map((ch, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleInsertChar(ch)}
                  className="w-10 h-10 rounded-xl border border-[#e5e1d8] bg-[#FAF9F6] hover:bg-[#e8f0eb] hover:border-[#4a7c59] text-[#1a1a1a] chinese-char text-xl font-medium transition-all shadow-2xs"
                >
                  {ch}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Result & Explanation */}
      {revealed && (
        <div className={`w-full rounded-3xl p-5 text-sm fade-in shadow-xs ${
          isCorrect 
            ? 'bg-green-50 border border-green-200 text-green-950' 
            : 'bg-red-50 border border-red-200 text-red-950'
        }`}>
          <div className="flex items-center gap-2 mb-2 font-bold text-base">
            {isCorrect ? (
              <>
                <Check size={20} className="text-[#4a7c59]" />
                <span>Xuất sắc! Bạn đã tự điền chính xác:</span>
              </>
            ) : (
              <>
                <X size={20} className="text-red-600" />
                <span>Chưa đúng, đáp án chuẩn là:</span>
              </>
            )}
          </div>

          <div className="bg-white/80 rounded-2xl p-3 border border-[#e5e1d8] flex items-center justify-between">
            <div>
              <span className="chinese-char text-2xl font-bold text-[#1a1a1a]">{correct}</span>
              {vocab && (
                <span className="text-[#4a7c59] text-sm font-semibold ml-2">
                  ({vocab.pinyin}) · {vocab.meaning}
                </span>
              )}
            </div>
            <button
              onClick={() => speak(correct, speechRate)}
              className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59] transition-colors"
              title="Nghe phát âm"
            >
              <Volume2 size={16} />
            </button>
          </div>

          {onNext && (
            <button
              onClick={onNext}
              className="w-full mt-4 py-3.5 px-6 rounded-2xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white font-bold text-base shadow-sm flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Câu tiếp theo</span>
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
