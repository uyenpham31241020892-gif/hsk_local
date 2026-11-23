import React, { useState, useMemo, useEffect } from 'react';
import type { Exercise } from '../../types';
import { speak } from '../../utils/exercises';
import { Volume2, CheckCircle2, XCircle, RotateCcw, Eye, EyeOff, Keyboard, Layers, ArrowRight } from 'lucide-react';

interface TranslationProps {
  exercise: Exercise;
  speechRate?: number;
  showPinyin?: boolean;
  onTogglePinyin?: () => void;
  onAnswer: (correct: boolean) => void;
  onNext?: () => void;
}

export function Translation({ exercise, speechRate = 1.0, showPinyin: showPinyinProp, onTogglePinyin, onAnswer, onNext }: TranslationProps) {
  // Input mode: 'chips' (click word tiles) or 'type' (free input keyboard)
  const [inputMode, setInputMode] = useState<'chips' | 'type'>('chips');
  const [typedInput, setTypedInput] = useState('');
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<{ id: string; text: string }[]>([]);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHelpHint, setShowHelpHint] = useState(false);
  const [localShowPinyin, setLocalShowPinyin] = useState<boolean>(() => {
    const saved = localStorage.getItem('hsk_exercise_show_pinyin');
    if (saved !== null) return saved === 'true';
    return localStorage.getItem('hsk_show_translation_pinyin') !== 'false';
  });

  const showPinyin = showPinyinProp !== undefined ? showPinyinProp : localShowPinyin;

  const togglePinyin = () => {
    if (onTogglePinyin) {
      onTogglePinyin();
    } else {
      const next = !showPinyin;
      setLocalShowPinyin(next);
      localStorage.setItem('hsk_exercise_show_pinyin', String(next));
      localStorage.setItem('hsk_show_translation_pinyin', String(next));
    }
  };

  const targetSentence: string = Array.isArray(exercise.answer.correct)
    ? exercise.answer.correct.join('')
    : (exercise.answer.correct || '');

  const vietnamesePrompt: string = exercise.question.sentence || exercise.question.prompt || '';
  const targetPinyin: string = exercise.question.promptPinyin || '';

  // Prepare tokens (target split into words + 2-3 distractor chips)
  useEffect(() => {
    const rawOptions = exercise.question.options || [];
    // If options are provided by exercise generator, use them as chips
    if (rawOptions.length > 0) {
      setAvailableTokens(rawOptions.map((opt, i) => ({ id: `${opt}_${i}`, text: opt })));
    } else {
      // Fallback: segment target sentence
      const clean = targetSentence.replace(/[。！？，、,.!? ]/g, '');
      const defaultChips = clean.split('').filter(Boolean);
      setAvailableTokens(defaultChips.map((c: string, i: number) => ({ id: `${c}_${i}`, text: c })));
    }
    setSelectedTokens([]);
    setTypedInput('');
    setAnswered(false);
    setIsCorrect(false);
    setShowHelpHint(false);
  }, [exercise, targetSentence]);

  const handleSelectChip = (token: { id: string; text: string }) => {
    if (answered) return;
    setSelectedTokens(prev => [...prev, token.text]);
    setAvailableTokens(prev => prev.filter(t => t.id !== token.id));
  };

  const handleRemoveChip = (index: number) => {
    if (answered) return;
    const removedText = selectedTokens[index];
    setSelectedTokens(prev => prev.filter((_, i) => i !== index));
    setAvailableTokens(prev => [...prev, { id: `${removedText}_${Date.now()}`, text: removedText }]);
  };

  const handleResetChips = () => {
    if (answered) return;
    const rawOptions = exercise.question.options || [];
    setAvailableTokens(rawOptions.map((opt, i) => ({ id: `${opt}_${i}`, text: opt })));
    setSelectedTokens([]);
  };

  const cleanString = (str: string) => {
    return str.replace(/[。！？，、,.!? \s]/g, '').toLowerCase().trim();
  };

  const stripTones = (str: string) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ü/g, 'v')
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fff]/g, '');
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (answered) return;

    const userChinese = inputMode === 'chips' 
      ? selectedTokens.join('') 
      : typedInput.trim();

    if (!userChinese) return;

    const cleanUser = cleanString(userChinese);
    const cleanTarget = cleanString(targetSentence);
    const cleanPinyin = cleanString(targetPinyin);

    // Accept exact Hanzi match or accurate Pinyin match (with or without tone marks)
    const correct: boolean = Boolean(
      cleanUser === cleanTarget || 
      (cleanPinyin && cleanUser === cleanPinyin) ||
      (targetPinyin && stripTones(userChinese) === stripTones(targetPinyin))
    );

    setIsCorrect(correct);
    setAnswered(true);
    onAnswer(correct);

    if (correct) {
      speak(targetSentence, speechRate);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto w-full space-y-4">
      {/* Exercise Subtitle & Pinyin Toggle */}
      <div className="flex items-center justify-between w-full px-2">
        <span className="text-xs font-semibold text-[#4a7c59] bg-[#e8f0eb] px-3 py-1 rounded-full flex items-center gap-1.5">
          <span>🔄</span> Luyện dịch Việt ➔ Trung
        </span>
        <button
          type="button"
          onClick={togglePinyin}
          className={`text-xs flex items-center gap-1.5 border px-2.5 py-1 rounded-xl shadow-2xs transition-colors ${
            showPinyin
              ? 'bg-emerald-50 border-emerald-300 text-[#4a7c59]'
              : 'bg-zinc-100 border-zinc-300 text-zinc-600'
          }`}
          title={showPinyin ? 'Đang bật Pinyin. Bấm để ẩn Pinyin' : 'Đang ẩn Pinyin. Bấm để bật Pinyin'}
        >
          {showPinyin ? <Eye size={13} className="text-[#4a7c59]" /> : <EyeOff size={13} />}
          <span>Pinyin: {showPinyin ? 'Bật' : 'Tắt'}</span>
        </button>
      </div>

      {/* Prompt Card (Vietnamese sentence to translate) */}
      <div className="bg-white rounded-3xl border border-[#e5e1d8] p-6 w-full shadow-xs text-center space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-[#6b7280]">
          Hãy dịch câu sau sang tiếng Trung:
        </p>

        <p className="text-xl sm:text-2xl font-bold text-[#1a1a1a] leading-relaxed">
          {vietnamesePrompt}
        </p>

        {/* Optional Hint - Collapsed by default, NEVER leaks answer automatically */}
        {!answered && targetPinyin && showPinyin && (
          <div className="pt-0.5">
            {showHelpHint ? (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 slide-up">
                <span>💡 Gợi ý Pinyin:</span>
                <span className="font-bold text-[#4a7c59]">{targetPinyin}</span>
                <button
                  type="button"
                  onClick={() => setShowHelpHint(false)}
                  className="text-[#9ca3af] hover:text-amber-900 text-xs ml-1 font-bold"
                  title="Ẩn gợi ý"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowHelpHint(true)}
                className="text-[11px] text-[#6b7280] hover:text-[#4a7c59] inline-flex items-center gap-1 transition-colors py-0.5"
              >
                <span>💡 Cần gợi ý Pinyin? (Bấm để xem)</span>
              </button>
            )}
          </div>
        )}

        {/* Input Mode Selector */}
        {!answered && (
          <div className="flex justify-center gap-2 pt-2 border-t border-[#e5e1d8]/60">
            <button
              onClick={() => setInputMode('chips')}
              className={`text-xs px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all ${
                inputMode === 'chips' 
                  ? 'bg-[#4a7c59] text-white font-bold shadow-2xs' 
                  : 'bg-[#FAF9F6] text-[#6b7280] hover:bg-[#e5e1d8]'
              }`}
            >
              <Layers size={13} />
              <span>Ghép từ</span>
            </button>
            <button
              onClick={() => setInputMode('type')}
              className={`text-xs px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all ${
                inputMode === 'type' 
                  ? 'bg-[#4a7c59] text-white font-bold shadow-2xs' 
                  : 'bg-[#FAF9F6] text-[#6b7280] hover:bg-[#e5e1d8]'
              }`}
            >
              <Keyboard size={13} />
              <span>Tự gõ (Chữ/Pinyin)</span>
            </button>
          </div>
        )}
      </div>

      {/* INPUT AREA */}
      {!answered && (
        <div className="w-full space-y-3">
          {inputMode === 'chips' ? (
            <div className="space-y-3">
              {/* Assembled sentence drop box */}
              <div className="bg-white rounded-2xl border-2 border-dashed border-[#4a7c59]/40 p-4 min-h-[70px] flex flex-wrap items-center gap-2 justify-center">
                {selectedTokens.length === 0 ? (
                  <span className="text-xs text-[#9ca3af] italic">
                    Chạm các khối từ bên dưới để ghép thành câu dịch hoàn chỉnh...
                  </span>
                ) : (
                  selectedTokens.map((token, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleRemoveChip(idx)}
                      className="chinese-char px-3 py-1.5 bg-[#4a7c59] text-white text-base font-medium rounded-xl shadow-2xs hover:bg-red-600 transition-colors cursor-pointer group flex items-center gap-1"
                      title="Chạm để gỡ bỏ"
                    >
                      <span>{token}</span>
                      <span className="text-[10px] opacity-70 group-hover:opacity-100">✕</span>
                    </button>
                  ))
                )}
              </div>

              {/* Action buttons (Reset & Submit) */}
              <div className="flex items-center justify-between px-1">
                <button
                  onClick={handleResetChips}
                  disabled={selectedTokens.length === 0}
                  className="text-xs text-[#6b7280] hover:text-[#1a1a1a] flex items-center gap-1 disabled:opacity-30"
                >
                  <RotateCcw size={12} />
                  <span>Xếp lại từ đầu</span>
                </button>
                <button
                  onClick={() => handleSubmit()}
                  disabled={selectedTokens.length === 0}
                  className="px-5 py-2 rounded-xl bg-[#4a7c59] text-white font-bold text-xs hover:bg-[#3d6b4a] disabled:opacity-40 shadow-xs transition-transform active:scale-95"
                >
                  Kiểm tra đáp án ➔
                </button>
              </div>

              {/* Pool of available word chips */}
              <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-3 flex flex-wrap justify-center gap-2 min-h-[90px]">
                {availableTokens.map((token) => (
                  <button
                    key={token.id}
                    onClick={() => handleSelectChip(token)}
                    className="chinese-char px-3.5 py-2 bg-white border border-[#e5e1d8] hover:border-[#4a7c59] hover:bg-[#e8f0eb] text-[#1a1a1a] text-lg font-medium rounded-xl shadow-2xs transition-all active:scale-95"
                  >
                    {token.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Free Typing Mode */
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Free typing input field */}
              <div className="relative">
                <input
                  type="text"
                  value={typedInput}
                  onChange={(e) => setTypedInput(e.target.value)}
                  placeholder="Gõ chữ Hán hoặc Pinyin (ví dụ: ni hao)..."
                  className="w-full px-4 py-3.5 bg-white border border-[#e5e1d8] focus:border-[#4a7c59] rounded-2xl text-base text-[#1a1a1a] focus:outline-none shadow-xs"
                  autoFocus
                />
                {typedInput && (
                  <button
                    type="button"
                    onClick={() => setTypedInput('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6b7280] hover:text-[#1a1a1a]"
                  >
                    Xóa
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={!typedInput.trim()}
                className="w-full py-3 rounded-xl bg-[#4a7c59] text-white font-bold text-sm hover:bg-[#3d6b4a] disabled:opacity-40 shadow-xs transition-transform active:scale-95"
              >
                Kiểm tra bản dịch ➔
              </button>
            </form>
          )}
        </div>
      )}

      {/* RESULT & EXPLANATION CARD WITH INLINE NEXT BUTTON */}
      {answered && (
        <div className={`w-full rounded-3xl border p-5 space-y-4 shadow-sm slide-up ${
          isCorrect ? 'bg-emerald-50/90 border-emerald-200' : 'bg-red-50/90 border-red-200'
        }`}>
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <CheckCircle2 size={22} className="text-emerald-700 shrink-0" />
            ) : (
              <XCircle size={22} className="text-red-700 shrink-0" />
            )}
            <h4 className={`font-bold text-sm ${isCorrect ? 'text-emerald-900' : 'text-red-900'}`}>
              {isCorrect ? 'Tuyệt vời! Câu dịch hoàn toàn chuẩn xác.' : 'Chưa chuẩn xác, cùng xem câu mẫu nhé:'}
            </h4>
          </div>

          {/* Canonical Translation Box */}
          <div className="bg-white rounded-2xl border border-[#e5e1d8] p-4 text-left space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#6b7280] uppercase">
                Bản dịch tiếng Trung chuẩn:
              </span>
              <button
                onClick={() => speak(targetSentence, speechRate)}
                className="text-[#4a7c59] hover:bg-[#e8f0eb] p-1.5 rounded-xl border border-[#e5e1d8] flex items-center gap-1 text-xs font-semibold"
                title="Nghe phát âm chuẩn câu này"
              >
                <Volume2 size={15} />
                <span>Nghe câu</span>
              </button>
            </div>

            <p className="chinese-char text-xl sm:text-2xl font-medium text-[#1a1a1a] leading-relaxed">
              {targetSentence}
            </p>

            {targetPinyin && (
              <p className="text-sm font-medium tracking-wide">
                {showPinyin ? (
                  <span className="text-[#4a7c59]">{targetPinyin}</span>
                ) : (
                  <span className="text-[#9ca3af] text-xs italic">
                    (Pinyin đang ẩn · Bấm "Pinyin: Bật" để xem)
                  </span>
                )}
              </p>
            )}

            <p className="text-xs text-[#4b5563] pt-1 border-t border-[#e5e1d8]/60">
              Nghĩa: {vietnamesePrompt}
            </p>
          </div>

          {/* INLINE NEXT BUTTON - Never get stuck! */}
          {onNext && (
            <button
              onClick={onNext}
              className="w-full py-3.5 rounded-2xl bg-[#4a7c59] text-white font-bold text-sm hover:bg-[#3d6b4a] transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
            >
              <span>Câu tiếp theo</span>
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
