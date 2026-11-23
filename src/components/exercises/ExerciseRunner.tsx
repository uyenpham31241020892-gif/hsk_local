import React, { useState, useRef } from 'react';
import type { Exercise, ExerciseType, VocabEntry } from '../../types';
import { Flashcard } from './Flashcard';
import { CharRecognition } from './CharRecognition';
import { ClozeTest } from './ClozeTest';
import { ClozeTyping } from './ClozeTyping';
import { Translation } from './Translation';
import { WordScramble } from './WordScramble';
import { Dictation } from './Dictation';
import { StrokeOrder } from './StrokeOrder';
import { ErrorSpot } from './ErrorSpot';
import { CollocationMatch } from './CollocationMatch';
import { vocabById } from '../../data';
import { useApp } from '../../store/AppContext';
import { X, ChevronRight, Eye, EyeOff } from 'lucide-react';

interface ExerciseRunnerProps {
  exercises: Exercise[];
  speechRate: number;
  showPinyinFirst: boolean;
  blindMode: boolean;
  onFinish: (results: { correct: number; total: number }) => void;
  onExit: () => void;
}

const EXERCISE_LABELS: Record<ExerciseType, string> = {
  flashcard: '🃏 Flashcard',
  stroke_order: '✍️ Thứ tự nét',
  char_recognition: '👀 Nhận chữ',
  cloze: '📝 Điền từ (Trắc nghiệm)',
  cloze_typing: '✍️ Điền từ tự viết',
  translation: '🔄 Luyện dịch Việt - Trung',
  word_scramble: '🔀 Sắp xếp câu',
  collocation_match: '🔗 Ghép cụm từ',
  error_spot: '🔍 Sửa lỗi',
  dictation: '🎧 Nghe chép',
};

export function ExerciseRunner({
  exercises, speechRate, showPinyinFirst, blindMode, onFinish, onExit,
}: ExerciseRunnerProps) {
  const { dispatch } = useApp();
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  // answered: null = chưa trả lời, true/false = đúng/sai – chờ user bấm Next
  const [answered, setAnswered] = useState<boolean | null>(null);
  const correctRef = useRef(0);

  // Global Pinyin toggle for all exercise types in runner
  const [showPinyin, setShowPinyin] = useState<boolean>(() => {
    const saved = localStorage.getItem('hsk_exercise_show_pinyin');
    return saved !== null ? saved === 'true' : true;
  });

  const togglePinyin = () => {
    const next = !showPinyin;
    setShowPinyin(next);
    localStorage.setItem('hsk_exercise_show_pinyin', String(next));
  };

  // Mark exercising active to hide BottomNav
  React.useEffect(() => {
    dispatch({ type: 'SET_EXERCISING', isExercising: true });
    return () => {
      dispatch({ type: 'SET_EXERCISING', isExercising: false });
    };
  }, [dispatch]);

  const current = exercises[index];
  const vocab = current ? vocabById[current.vocabId] : null;
  const progress = (index / exercises.length) * 100;

  if (!current || !vocab) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-[#6b7280]">Không còn bài tập.</p>
        <button onClick={() => onFinish({ correct: correctRef.current, total: exercises.length })} className="mt-4 px-6 py-2 rounded-xl bg-[#4a7c59] text-white">
          Kết thúc
        </button>
      </div>
    );
  }

  const advance = () => {
    setAnswered(null);
    if (index + 1 >= exercises.length) {
      onFinish({ correct: correctRef.current, total: exercises.length });
    } else {
      setIndex(i => i + 1);
    }
  };

  // Called by each exercise component when user submits answer
  const handleAnswer = (isCorrect: boolean) => {
    if (answered !== null) return; // already answered
    if (isCorrect) {
      correctRef.current += 1;
      setCorrect(correctRef.current);
      if (current) dispatch({ type: 'GRADE_CARD', vocabId: current.vocabId, quality: 4 });
    } else {
      if (current) {
        dispatch({ type: 'GRADE_CARD', vocabId: current.vocabId, quality: 1 });
        dispatch({ type: 'RECORD_MISTAKE', vocabId: current.vocabId });
      }
    }
    setAnswered(isCorrect);
  };

  // Flashcard grade
  const handleGrade = (quality: 0 | 1 | 2 | 3 | 4 | 5) => {
    if (answered !== null) return;
    const isCorrect = quality >= 3;
    if (isCorrect) {
      correctRef.current += 1;
      setCorrect(correctRef.current);
    } else {
      if (current) dispatch({ type: 'RECORD_MISTAKE', vocabId: current.vocabId });
    }
    setAnswered(isCorrect);
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e5e1d8] bg-white sticky top-0 z-10">
        <button onClick={onExit} className="p-2 rounded-lg hover:bg-[#FAF9F6] transition-colors">
          <X size={20} className="text-[#6b7280]" />
        </button>
        <div className="flex flex-col items-center">
          <span className="text-xs text-[#6b7280]">{EXERCISE_LABELS[current.type]}</span>
          <span className="text-sm font-medium text-[#1a1a1a]">{index + 1} / {exercises.length}</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Global Pinyin Toggle Button */}
          <button
            type="button"
            onClick={togglePinyin}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all shadow-2xs ${
              showPinyin
                ? 'bg-emerald-50 border-emerald-300 text-[#4a7c59] hover:bg-emerald-100'
                : 'bg-zinc-100 border-zinc-300 text-zinc-600 hover:text-zinc-900'
            }`}
            title={showPinyin ? 'Đang hiện Pinyin. Bấm để ẩn Pinyin' : 'Đang ẩn Pinyin. Bấm để hiện Pinyin'}
          >
            {showPinyin ? <Eye size={14} className="text-[#4a7c59]" /> : <EyeOff size={14} />}
            <span>Pinyin: {showPinyin ? 'Bật' : 'Tắt'}</span>
          </button>
          <div className="text-sm text-[#4a7c59] font-medium hidden sm:block">✅ {correct}</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-[#e5e1d8]">
        <div className="h-full bg-[#4a7c59] progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* Exercise content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 pb-32" key={index}>
        <div className="slide-up">
          {current.type === 'flashcard' && vocab && (
            <Flashcard 
              vocab={vocab} 
              speechRate={speechRate} 
              showPinyinFirst={showPinyinFirst} 
              showPinyin={showPinyin}
              onTogglePinyin={togglePinyin}
              onGrade={handleGrade}
              onNext={advance} 
            />
          )}
          {current.type === 'char_recognition' && (
            <CharRecognition exercise={current} speechRate={speechRate} showPinyin={showPinyin} onAnswer={handleAnswer} onNext={advance} />
          )}
          {current.type === 'cloze' && (
            <ClozeTest exercise={current} speechRate={speechRate} showPinyin={showPinyin} onAnswer={handleAnswer} onNext={advance} />
          )}
          {current.type === 'cloze_typing' && (
            <ClozeTyping exercise={current} speechRate={speechRate} showPinyin={showPinyin} onAnswer={handleAnswer} onNext={advance} />
          )}
          {current.type === 'translation' && (
            <Translation exercise={current} speechRate={speechRate} showPinyin={showPinyin} onAnswer={handleAnswer} onNext={advance} />
          )}
          {current.type === 'word_scramble' && (
            <WordScramble exercise={current} showPinyin={showPinyin} onAnswer={handleAnswer} onNext={advance} />
          )}
          {current.type === 'dictation' && (
            <Dictation exercise={current} speechRate={speechRate} showPinyin={showPinyin} onAnswer={handleAnswer} onNext={advance} />
          )}
          {current.type === 'stroke_order' && (
            <StrokeOrder exercise={current} blindMode={blindMode} showPinyin={showPinyin} onAnswer={handleAnswer} onNext={advance} />
          )}
          {current.type === 'error_spot' && (
            <ErrorSpot exercise={current} onAnswer={handleAnswer} onNext={advance} />
          )}
          {current.type === 'collocation_match' && (
            <CollocationMatch exercise={current} onAnswer={handleAnswer} onNext={advance} />
          )}
        </div>
      </div>

      {/* Fixed bottom: Next button – ALWAYS visible above everything */}
      {answered !== null && (
        <div className={`fixed bottom-0 left-0 right-0 z-50 px-4 py-3.5 border-t border-[#e5e1d8] shadow-2xl backdrop-blur-md transition-all fade-in ${answered ? 'bg-green-50/95' : 'bg-red-50/95'}`}>
          <div className="flex items-center justify-between max-w-lg mx-auto">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${answered ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
              <span className={`text-sm font-bold ${answered ? 'text-green-800' : 'text-red-800'}`}>
                {answered ? '✅ Chính xác!' : '❌ Chưa chính xác, cố lên nhé'}
              </span>
            </div>
            <button
              onClick={advance}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#4a7c59] text-white font-bold text-sm hover:bg-[#3d6b4a] transition-all shadow-md transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{index + 1 >= exercises.length ? 'Xem kết quả' : 'Câu tiếp theo'}</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
