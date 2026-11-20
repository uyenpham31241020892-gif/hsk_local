import React, { useState, useEffect, useRef, useMemo } from 'react';
import { allVocab, vocabById } from '../../data';
import type { VocabEntry } from '../../types';
import { speak, shuffle } from '../../utils/exercises';
import { useApp } from '../../store/AppContext';
import { Volume2, Zap, RotateCcw, Trophy, Award, Flame, Filter } from 'lucide-react';

type WordScope = 'pack1' | 'pack1_2' | 'hsk1' | 'weak' | 'all';

export function SpeedCardHunter({ onExit }: { onExit: () => void }) {
  const { state } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedScope, setSelectedScope] = useState<WordScope>('pack1');
  const [bestScore, setBestScore] = useState(() => {
    return parseInt(localStorage.getItem('hsk_speed_hunter_highscore') || '0', 10);
  });

  const [currentTarget, setCurrentTarget] = useState<VocabEntry | null>(null);
  const [boardCards, setBoardCards] = useState<VocabEntry[]>([]);
  const [lastClickedId, setLastClickedId] = useState<string | null>(null);
  const [lastClickStatus, setLastClickStatus] = useState<'correct' | 'wrong' | null>(null);

  const timerRef = useRef<any>(null);

  // Compute vocabulary pool based on user selection
  const candidateVocab = useMemo(() => {
    const mistakeSet = new Set(state.progress.mistakeIds || []);

    switch (selectedScope) {
      case 'pack1':
        // First 15 words of HSK 1
        return allVocab.slice(0, 15);
      case 'pack1_2':
        // First 30 words (Pack 1 + Pack 2)
        return allVocab.slice(0, 30);
      case 'hsk1':
        // All HSK 1 words (50 words)
        return allVocab.filter(v => v.hsk2Level === 1 || v.hsk3Level === 1);
      case 'weak': {
        const weakList = (state.progress.mistakeIds || [])
          .map(id => vocabById[id])
          .filter(Boolean);
        return weakList.length >= 8 ? weakList : allVocab.slice(0, 20);
      }
      case 'all':
      default:
        return allVocab;
    }
  }, [selectedScope, state.progress.mistakeIds]);

  // Pick board words and a target word
  const setupRound = () => {
    // If pool has fewer than 16 items, pad with other words or use full pool
    let pool = [...candidateVocab];
    if (pool.length < 16) {
      const extra = allVocab.filter(v => !pool.some(p => p.id === v.id));
      pool = [...pool, ...extra.slice(0, 16 - pool.length)];
    }
    const shuffledPool = shuffle(pool).slice(0, 16);
    const target = shuffledPool[Math.floor(Math.random() * shuffledPool.length)];
    setBoardCards(shuffledPool);
    setCurrentTarget(target);
    speak(target.simplified);
  };

  const startGame = () => {
    setScore(0);
    setStreak(0);
    setTimeLeft(60);
    setIsPlaying(true);
    setLastClickStatus(null);
    setupRound();
  };

  // Timer countdown
  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
      clearInterval(timerRef.current);
      setScore(s => {
        if (s > bestScore) {
          setBestScore(s);
          localStorage.setItem('hsk_speed_hunter_highscore', s.toString());
        }
        return s;
      });
    }

    return () => clearInterval(timerRef.current);
  }, [isPlaying, timeLeft, bestScore]);

  const handleCardClick = (card: VocabEntry) => {
    if (!isPlaying || !currentTarget) return;

    setLastClickedId(card.id);

    if (card.id === currentTarget.id) {
      // Correct
      const newStreak = streak + 1;
      const points = 100 + newStreak * 20;
      setScore(s => s + points);
      setStreak(newStreak);
      setLastClickStatus('correct');

      setTimeout(() => {
        setLastClickedId(null);
        setLastClickStatus(null);
        setupRound();
      }, 350);
    } else {
      // Wrong
      setStreak(0);
      setLastClickStatus('wrong');
      setTimeout(() => {
        setLastClickedId(null);
        setLastClickStatus(null);
      }, 400);
    }
  };

  const weakWordsCount = state.progress.mistakeIds?.length || 0;

  return (
    <div className="flex flex-col items-center max-w-xl mx-auto space-y-5 fade-in">
      {/* Top Game Bar */}
      <div className="w-full bg-white rounded-2xl border border-[#e5e1d8] p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy size={18} className="text-amber-500" />
          <span className="text-xs text-[#6b7280]">Kỷ lục:</span>
          <span className="text-sm font-bold text-[#1a1a1a]">{bestScore}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[#6b7280]">Thời gian:</span>
            <span className={`text-lg font-bold font-mono ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-[#4a7c59]'}`}>
              {timeLeft}s
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs text-[#6b7280]">Điểm:</span>
            <span className="text-lg font-bold text-[#1a1a1a]">{score}</span>
          </div>
        </div>
      </div>

      {!isPlaying && timeLeft === 60 ? (
        /* Welcome & Word Scope Selector Screen */
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-6 sm:p-8 text-center space-y-5 shadow-sm w-full">
          <div className="w-16 h-16 bg-[#e8f0eb] text-[#4a7c59] rounded-2xl flex items-center justify-center mx-auto text-3xl">
            ⚡
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1a1a1a]">Săn Chữ Siêu Tốc (Word Blitz)</h2>
            <p className="text-xs text-[#6b7280] leading-relaxed max-w-md mx-auto mt-1">
              Chọn cấp độ từ vựng bạn vừa học để chơi cho vừa sức, không bị ngợp từ nâng cao:
            </p>
          </div>

          {/* Level / Scope Selector */}
          <div className="text-left space-y-2 max-w-md mx-auto">
            <label className="text-xs font-semibold text-[#1a1a1a] flex items-center gap-1.5">
              <Filter size={14} className="text-[#4a7c59]" /> Chọn kho từ bạn muốn luyện:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedScope('pack1')}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  selectedScope === 'pack1'
                    ? 'border-[#4a7c59] bg-[#e8f0eb] font-semibold text-[#1a1a1a]'
                    : 'border-[#e5e1d8] bg-white text-[#6b7280] hover:border-[#4a7c59]'
                }`}
              >
                🌱 <strong>Chỉ Bài 1 (15 từ đầu)</strong>
                <p className="text-[11px] text-[#6b7280] font-normal mt-0.5">Dành cho người mới học</p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedScope('pack1_2')}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  selectedScope === 'pack1_2'
                    ? 'border-[#4a7c59] bg-[#e8f0eb] font-semibold text-[#1a1a1a]'
                    : 'border-[#e5e1d8] bg-white text-[#6b7280] hover:border-[#4a7c59]'
                }`}
              >
                🌿 <strong>Bài 1 + Bài 2 (30 từ)</strong>
                <p className="text-[11px] text-[#6b7280] font-normal mt-0.5">Ăn uống, gia đình, vị trí</p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedScope('hsk1')}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  selectedScope === 'hsk1'
                    ? 'border-[#4a7c59] bg-[#e8f0eb] font-semibold text-[#1a1a1a]'
                    : 'border-[#e5e1d8] bg-white text-[#6b7280] hover:border-[#4a7c59]'
                }`}
              >
                📘 <strong>Toàn bộ HSK 1 (50 từ)</strong>
                <p className="text-[11px] text-[#6b7280] font-normal mt-0.5">Ôn tập trọn gói cấp 1</p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedScope('weak')}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  selectedScope === 'weak'
                    ? 'border-red-400 bg-red-50 font-semibold text-red-900'
                    : 'border-[#e5e1d8] bg-white text-[#6b7280] hover:border-red-300'
                }`}
              >
                🔥 <strong>Từ hay làm sai ({weakWordsCount})</strong>
                <p className="text-[11px] text-[#6b7280] font-normal mt-0.5">Củng cố các từ yếu</p>
              </button>
            </div>
          </div>

          <div className="flex gap-2 justify-center pt-2">
            <button
              onClick={startGame}
              className="w-full py-4 rounded-2xl bg-[#4a7c59] text-white font-semibold text-base hover:bg-[#3d6b4a] transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Zap size={18} /> Bắt đầu ngay (60 Giây)
            </button>
          </div>
        </div>
      ) : !isPlaying && timeLeft === 0 ? (
        /* Game Over Screen */
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-8 text-center space-y-4 shadow-sm w-full slide-up">
          <div className="text-5xl">🏆</div>
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Hết giờ!</h2>
          <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 max-w-xs mx-auto space-y-1">
            <p className="text-xs text-[#6b7280]">Điểm của bạn:</p>
            <p className="text-4xl font-extrabold text-[#4a7c59]">{score}</p>
            {score >= bestScore && score > 0 && (
              <p className="text-xs font-semibold text-amber-600 flex items-center justify-center gap-1 mt-1">
                <Award size={14} /> Kỷ lục mới xuất sắc!
              </p>
            )}
          </div>

          <div className="flex gap-2 justify-center pt-2">
            <button
              onClick={startGame}
              className="px-6 py-3 rounded-xl bg-[#4a7c59] text-white font-medium hover:bg-[#3d6b4a] transition-colors flex items-center gap-1.5 text-sm"
            >
              <RotateCcw size={16} /> Chơi lại
            </button>
            <button
              onClick={onExit}
              className="px-6 py-3 rounded-xl border border-[#e5e1d8] text-[#6b7280] hover:bg-[#FAF9F6] transition-colors text-sm"
            >
              Quay lại menu
            </button>
          </div>
        </div>
      ) : (
        /* Active Game Board */
        <div className="w-full space-y-4">
          {/* Target Vocab Prompt */}
          {currentTarget && (
            <div className="bg-white rounded-2xl border-2 border-[#4a7c59] p-4 text-center shadow-xs flex items-center justify-between">
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#6b7280]">Tìm chữ Hán của:</span>
                  {streak > 1 && (
                    <span className="text-[11px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-0.5 animate-bounce">
                      <Flame size={12} /> Combo x{streak}
                    </span>
                  )}
                </div>
                <p className="text-xl font-bold text-[#4a7c59] tracking-wider mt-0.5">
                  {currentTarget.pinyin}
                </p>
                <p className="text-xs text-[#1a1a1a] font-medium">{currentTarget.meaning}</p>
              </div>

              <button
                onClick={() => speak(currentTarget.simplified)}
                className="p-3 bg-[#e8f0eb] hover:bg-[#d8e8dc] text-[#4a7c59] rounded-xl transition-colors"
                title="Nghe lại phát âm"
              >
                <Volume2 size={22} />
              </button>
            </div>
          )}

          {/* 16 Cards Grid (4x4) */}
          <div className="grid grid-cols-4 gap-2.5">
            {boardCards.map((card) => {
              const isClicked = lastClickedId === card.id;
              let btnClass = 'p-3 sm:p-4 rounded-2xl border text-center font-medium transition-all shadow-xs chinese-char text-2xl sm:text-3xl select-none ';

              if (isClicked && lastClickStatus === 'correct') {
                btnClass += 'bg-green-500 text-white border-green-600 scale-105';
              } else if (isClicked && lastClickStatus === 'wrong') {
                btnClass += 'bg-red-500 text-white border-red-600 animate-shake';
              } else {
                btnClass += 'bg-white border-[#e5e1d8] text-[#1a1a1a] hover:border-[#4a7c59] hover:bg-[#e8f0eb]/40 active:scale-95';
              }

              return (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  className={btnClass}
                  style={{ minHeight: '75px' }}
                >
                  {card.simplified}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
