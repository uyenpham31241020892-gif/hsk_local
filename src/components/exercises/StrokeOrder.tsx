import React, { useEffect, useRef, useState, useMemo } from 'react';
import type { Exercise } from '../../types';
import { RotateCcw, ChevronRight, Volume2, CheckCircle2, ArrowRight } from 'lucide-react';
import { speak } from '../../utils/exercises';
import { vocabById } from '../../data';

interface StrokeOrderProps {
  exercise: Exercise;
  blindMode: boolean;
  showPinyin?: boolean;
  onTogglePinyin?: () => void;
  onAnswer: (correct: boolean) => void;
  onNext?: () => void;
}

export function StrokeOrder({ exercise, blindMode, showPinyin = true, onTogglePinyin: _onTogglePinyin, onAnswer, onNext }: StrokeOrderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [practicing, setPracticing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const vocab = vocabById[exercise.vocabId];
  const fullWord = vocab?.simplified || exercise.question.prompt || '';
  
  // Extract all Chinese characters from the word (e.g. 杯子 -> ['杯', '子'])
  const chars = useMemo(() => {
    const list = fullWord.replace(/[^\u4e00-\u9fff\u3400-\u4dbf]/g, '').split('');
    return list.length > 0 ? list : [fullWord.charAt(0) || '字'];
  }, [fullWord]);

  const [activeCharIndex, setActiveCharIndex] = useState(0);
  const [completedIndices, setCompletedIndices] = useState<number[]>([]);

  const currentChar = chars[activeCharIndex] || chars[0];

  // Reset when vocab changes
  useEffect(() => {
    setActiveCharIndex(0);
    setCompletedIndices([]);
    setPracticing(false);
    setCompleted(false);
  }, [exercise.vocabId]);

  // Re-init HanziWriter when currentChar or blindMode changes
  useEffect(() => {
    let writer: any = null;
    setLoaded(false);
    setPracticing(false);

    async function init() {
      try {
        const HanziWriter = (await import('hanzi-writer')).default;
        if (!containerRef.current) return;
        containerRef.current.innerHTML = '';

        writer = HanziWriter.create(containerRef.current, currentChar, {
          width: 220,
          height: 220,
          padding: 10,
          strokeColor: '#1a1a1a',
          radicalColor: '#4a7c59',
          highlightColor: '#e8f0eb',
          outlineColor: '#e5e1d8',
          showOutline: true,
          showCharacter: !blindMode,
          strokeAnimationSpeed: 1,
          delayBetweenStrokes: 200,
        });

        writerRef.current = writer;
        setLoaded(true);
      } catch (err) {
        console.error('HanziWriter load error', err);
        setLoaded(true);
      }
    }

    init();
    return () => { writerRef.current = null; };
  }, [currentChar, blindMode]);

  const animateStrokes = () => {
    writerRef.current?.animateCharacter();
    speak(currentChar);
  };

  const startQuiz = () => {
    setPracticing(true);
    writerRef.current?.quiz({
      onComplete: () => {
        speak(currentChar);
        setCompletedIndices(prev => {
          const next = prev.includes(activeCharIndex) ? prev : [...prev, activeCharIndex];
          const allDone = chars.every((_, i) => next.includes(i));
          if (allDone) {
            setCompleted(true);
            speak(fullWord);
            onAnswer(true);
          } else if (activeCharIndex + 1 < chars.length) {
            // Auto advance to next character in the word
            setTimeout(() => {
              setActiveCharIndex(activeCharIndex + 1);
              setPracticing(false);
            }, 600);
          }
          return next;
        });
      },
    });
  };

  const handleSkipOrCompleteCurrent = () => {
    setCompletedIndices(prev => {
      const next = prev.includes(activeCharIndex) ? prev : [...prev, activeCharIndex];
      if (activeCharIndex + 1 < chars.length) {
        setActiveCharIndex(activeCharIndex + 1);
        setPracticing(false);
      } else {
        setCompleted(true);
        speak(fullWord);
        onAnswer(true);
      }
      return next;
    });
  };

  const reset = () => {
    setPracticing(false);
    writerRef.current?.cancelQuiz();
    writerRef.current?.setCharacter(currentChar);
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-md mx-auto">
      {/* Word header info with full word and pinyin */}
      <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 w-full flex items-center justify-between shadow-xs">
        <div className="text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#e8f0eb] text-[#4a7c59]">
              ✍️ Luyện viết đủ {chars.length} chữ
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="chinese-char text-3xl font-bold text-[#1a1a1a]">{fullWord}</span>
            {showPinyin && (
              <span className="text-base font-semibold text-[#4a7c59] tracking-wider">
                {vocab?.pinyin ?? exercise.question.promptPinyin}
              </span>
            )}
          </div>
          <p className="text-xs text-[#6b7280]">{vocab?.meaning ?? exercise.question.sentence}</p>
        </div>
        <button
          onClick={() => speak(fullWord)}
          className="p-3 rounded-2xl border border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59] transition-colors"
          title="Nghe phát âm toàn bộ từ"
        >
          <Volume2 size={20} />
        </button>
      </div>

      {/* Multi-character step navigator (if word has >= 2 characters) */}
      {chars.length > 1 && (
        <div className="w-full bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-3 flex flex-col items-center gap-2">
          <div className="flex items-center justify-between w-full text-xs text-[#6b7280] px-1 font-medium">
            <span>Tiến độ viết các chữ trong từ:</span>
            <span>{completedIndices.length} / {chars.length} chữ hoàn thành</span>
          </div>
          <div className="flex gap-2 flex-wrap justify-center w-full">
            {chars.map((c, i) => {
              const isCurrent = i === activeCharIndex;
              const isDone = completedIndices.includes(i);
              return (
                <button
                  key={i}
                  onClick={() => {
                    setActiveCharIndex(i);
                    setPracticing(false);
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isCurrent
                      ? 'bg-[#4a7c59] text-white shadow-xs scale-105 ring-2 ring-[#4a7c59]/20'
                      : isDone
                        ? 'bg-green-100 text-green-800 border border-green-300'
                        : 'bg-white border border-[#e5e1d8] text-[#6b7280] hover:border-[#4a7c59]'
                  }`}
                >
                  <span className="chinese-char text-base leading-none">{c}</span>
                  <span>{isDone ? '✓' : `(${i + 1}/${chars.length})`}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Canvas container */}
      <div className="relative">
        <div
          ref={containerRef}
          className="rounded-3xl border-2 border-[#e5e1d8] bg-white shadow-sm overflow-hidden"
          style={{ width: 220, height: 220 }}
        />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-3xl">
            <div className="w-8 h-8 border-2 border-[#4a7c59] border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Character indicator while practicing */}
      <p className="text-xs text-[#6b7280] flex items-center gap-1 font-medium">
        Đang tập chữ: <span className="chinese-char text-base font-bold text-[#1a1a1a]">{currentChar}</span>
        {chars.length > 1 && (
          <span>(Chữ thứ {activeCharIndex + 1} của từ "{fullWord}")</span>
        )}
      </p>

      {/* Action Controls */}
      {loaded && (
        <div className="flex flex-wrap gap-2 justify-center w-full">
          {!practicing && (
            <>
              <button
                onClick={animateStrokes}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#e5e1d8] text-sm text-[#4a7c59] font-semibold hover:bg-[#e8f0eb] transition-colors"
              >
                ▶ Xem mẫu nét "{currentChar}"
              </button>
              <button
                onClick={startQuiz}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#4a7c59] text-white text-sm font-bold hover:bg-[#3d6b4a] transition-colors shadow-sm"
              >
                ✍️ Tô nét chữ "{currentChar}"
              </button>
            </>
          )}

          {practicing && (
            <>
              <button
                onClick={reset}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#e5e1d8] text-sm text-[#6b7280] hover:bg-[#FAF9F6] transition-colors"
              >
                <RotateCcw size={14} /> Viết lại chữ này
              </button>
              {!completed && (
                <button
                  onClick={handleSkipOrCompleteCurrent}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#e5e1d8] text-sm text-[#4a7c59] hover:bg-[#FAF9F6] transition-colors font-medium"
                >
                  {activeCharIndex + 1 < chars.length ? (
                    <>
                      <span>Xong chữ này, qua chữ tiếp</span>
                      <ArrowRight size={14} />
                    </>
                  ) : (
                    <>
                      <span>Hoàn thành từ này</span>
                      <ChevronRight size={14} />
                    </>
                  )}
                </button>
              )}
            </>
          )}
        </div>
      )}

      {practicing && !completed && (
        <p className="text-[#6b7280] text-xs text-center">
          Dùng chuột hoặc ngón tay vẽ từng nét chữ <strong>{currentChar}</strong> theo đúng hướng và thứ tự.
        </p>
      )}

      {/* Completion Box for the ENTIRE Word */}
      {completed && (
        <div className="bg-green-50 border border-green-200 text-green-900 rounded-3xl p-5 text-center w-full shadow-xs fade-in space-y-3">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={24} className="text-[#4a7c59]" />
            <p className="text-base font-bold">
              Xuất sắc! Đã viết hoàn chỉnh: <span className="chinese-char text-xl">{fullWord}</span>
            </p>
          </div>
          <p className="text-xs text-[#4a7c59] font-medium">
            {vocab?.pinyin ?? exercise.question.promptPinyin} · {vocab?.meaning ?? exercise.question.sentence}
          </p>

          {onNext && (
            <button
              onClick={onNext}
              className="w-full mt-2 py-3 px-6 rounded-xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
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
