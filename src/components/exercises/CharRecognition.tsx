import React, { useState, useEffect } from 'react';
import type { Exercise } from '../../types';
import { Volume2, CheckCircle, XCircle, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { speak } from '../../utils/exercises';

interface CharRecognitionProps {
  exercise: Exercise;
  speechRate: number;
  showPinyin?: boolean;
  onTogglePinyin?: () => void;
  onAnswer: (correct: boolean) => void;
  onNext?: () => void;
}

export function CharRecognition({ exercise, speechRate, showPinyin: showPinyinProp, onTogglePinyin, onAnswer, onNext }: CharRecognitionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const correct = Array.isArray(exercise.answer.correct) ? exercise.answer.correct[0] : exercise.answer.correct;

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
    // No setTimeout – ExerciseRunner controls "Next"
  };

  const handleListen = () => {
    if (exercise.question.audioText) speak(exercise.question.audioText, speechRate);
    else if (exercise.question.prompt) speak(exercise.question.prompt, speechRate);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      {/* Question */}
      <div className="bg-white rounded-3xl border border-[#e5e1d8] shadow-sm p-7 w-full flex flex-col items-center gap-3">
        <div className="flex items-center justify-between w-full border-b border-[#e5e1d8] pb-2.5">
          <p className="text-[#6b7280] text-xs font-semibold">👀 Nhận diện chữ Hán</p>
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

        <span className="chinese-char text-6xl font-normal text-[#1a1a1a] leading-none my-2">
          {exercise.question.prompt}
        </span>

        {/* Pinyin (shown only when showPinyin is true, or after revealed) */}
        {(showPinyin || revealed) && exercise.question.promptPinyin && (
          <p className="text-[#4a7c59] text-xl tracking-wide font-semibold">{exercise.question.promptPinyin}</p>
        )}

        <button
          onClick={handleListen}
          className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59] transition-colors mt-1"
          title="Nghe phát âm"
        >
          <Volume2 size={18} />
        </button>
        <p className="text-[#b5b2ab] text-xs">Chọn nghĩa tiếng Việt đúng bên dưới</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {exercise.question.options?.map((opt, i) => {
          let cls = 'p-4 rounded-xl border text-center cursor-pointer transition-all text-sm font-medium ';
          if (!revealed) {
            cls += 'border-[#e5e1d8] bg-white hover:border-[#4a7c59] hover:bg-[#e8f0eb] text-[#1a1a1a]';
          } else if (opt === correct) {
            cls += 'border-green-400 bg-green-50 text-green-800';
          } else if (opt === selected) {
            cls += 'border-red-400 bg-red-50 text-red-800';
          } else {
            cls += 'border-[#e5e1d8] bg-[#FAF9F6] text-[#9ca3af]';
          }

          return (
            <button key={i} className={cls} onClick={() => handleSelect(opt)}>
              <span className="block">{opt}</span>
              {revealed && opt === correct && <CheckCircle size={14} className="inline ml-1 text-green-600" />}
              {revealed && opt === selected && opt !== correct && <XCircle size={14} className="inline ml-1 text-red-500" />}
            </button>
          );
        })}
      </div>

      {/* Explanation after reveal */}
      {revealed && (
        <div className={`w-full rounded-2xl p-4 text-sm fade-in shadow-xs ${selected === correct ? 'bg-green-50 border border-green-200 text-green-900' : 'bg-red-50 border border-red-200 text-red-900'}`}>
          <div className="flex items-center justify-between">
            <span className="font-bold flex items-center gap-1.5">
              {selected === correct ? '✅ Chính xác!' : `❌ Đáp án đúng: ${correct}`}
            </span>
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
