import React, { useState, useEffect, useRef } from 'react';
import { allVocab } from '../../data';
import type { VocabEntry } from '../../types';
import { speak, shuffle } from '../../utils/exercises';
import { CloudRain, Heart, Trophy, RotateCcw, Zap, Sparkles } from 'lucide-react';

interface RainDrop {
  id: number;
  vocab: VocabEntry;
  x: number;          // percent (10% - 80%)
  y: number;          // pixels from top
  speed: number;
  matchedPinyin: string; // cleaned pinyin without tones for easy typing (e.g., 'chi' for chī)
}

function cleanPinyin(pinyin: string): string {
  return pinyin
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ü/g, 'v')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '');
}

export function WordRainGame({ onExit }: { onExit: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [inputText, setInputText] = useState('');
  const [drops, setDrops] = useState<RainDrop[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<'hsk1_pack1' | 'hsk1' | 'all'>('hsk1_pack1');
  const [bestScore, setBestScore] = useState(() => {
    return parseInt(localStorage.getItem('hsk_word_rain_highscore') || '0', 10);
  });

  const nextDropId = useRef(1);
  const gameLoopRef = useRef<any>(null);
  const spawnTimerRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getCandidatePool = () => {
    if (selectedLevel === 'hsk1_pack1') return allVocab.slice(0, 15);
    if (selectedLevel === 'hsk1') return allVocab.slice(0, 50);
    return allVocab;
  };

  const spawnDrop = () => {
    const pool = getCandidatePool();
    const vocab = pool[Math.floor(Math.random() * pool.length)];
    const x = Math.floor(Math.random() * 70) + 10; // 10% to 80%

    const newDrop: RainDrop = {
      id: nextDropId.current++,
      vocab,
      x,
      y: 0,
      speed: 1.5 + Math.random() * 1.2,
      matchedPinyin: cleanPinyin(vocab.pinyin),
    };

    setDrops(prev => [...prev, newDrop]);
  };

  const startGame = () => {
    setScore(0);
    setLives(3);
    setDrops([]);
    setInputText('');
    setIsPlaying(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Game loop: move drops down
  useEffect(() => {
    if (!isPlaying) return;

    gameLoopRef.current = setInterval(() => {
      setDrops(prev => {
        const next: RainDrop[] = [];
        let hitBottom = false;

        for (const drop of prev) {
          const newY = drop.y + drop.speed;
          if (newY >= 360) {
            // Hit bottom!
            hitBottom = true;
          } else {
            next.push({ ...drop, y: newY });
          }
        }

        if (hitBottom) {
          setLives(l => {
            const nextLives = l - 1;
            if (nextLives <= 0) {
              setIsPlaying(false);
            }
            return nextLives;
          });
        }

        return next;
      });
    }, 40);

    return () => clearInterval(gameLoopRef.current);
  }, [isPlaying]);

  // Spawn timer
  useEffect(() => {
    if (!isPlaying) return;

    spawnTimerRef.current = setInterval(() => {
      spawnDrop();
    }, 2800);

    // Initial spawn
    spawnDrop();

    return () => clearInterval(spawnTimerRef.current);
  }, [isPlaying, selectedLevel]);

  // Handle typing input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase().trim();
    setInputText(e.target.value);

    // Check if matches any active drop's cleaned pinyin or Chinese character
    const matchedIndex = drops.findIndex(
      d => d.matchedPinyin === cleanPinyin(val) || d.vocab.simplified === val
    );

    if (matchedIndex !== -1) {
      const hit = drops[matchedIndex];
      speak(hit.vocab.simplified);

      // Remove drop
      setDrops(prev => prev.filter((_, i) => i !== matchedIndex));
      setInputText('');
      setScore(s => {
        const newScore = s + 100;
        if (newScore > bestScore) {
          setBestScore(newScore);
          localStorage.setItem('hsk_word_rain_highscore', newScore.toString());
        }
        return newScore;
      });
    }
  };

  return (
    <div className="flex flex-col items-center max-w-xl mx-auto space-y-4 fade-in">
      {/* Top Header */}
      <div className="w-full bg-white rounded-2xl border border-[#e5e1d8] p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy size={18} className="text-amber-500" />
          <span className="text-xs text-[#6b7280]">Kỷ lục:</span>
          <span className="text-sm font-bold text-[#1a1a1a]">{bestScore}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={i}
                size={18}
                className={i < lives ? 'text-red-500 fill-red-500' : 'text-[#d1cfc9]'}
              />
            ))}
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs text-[#6b7280]">Điểm:</span>
            <span className="text-lg font-bold text-[#4a7c59]">{score}</span>
          </div>
        </div>
      </div>

      {!isPlaying && lives === 3 ? (
        /* Welcome & Start Screen */
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-7 text-center space-y-4 shadow-sm w-full">
          <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mx-auto text-3xl">
            🌧️
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1a1a1a]">Mưa Từ Vựng (Word Rain)</h2>
            <p className="text-xs text-[#6b7280] leading-relaxed max-w-md mx-auto mt-1">
              Các giọt mưa chữ Hán kèm nghĩa tiếng Việt sẽ rơi từ trên xuống. Bạn chỉ cần gõ Pinyin (không cần dấu) hoặc gõ chữ Hán để bắn hạ giọt mưa trước khi chạm đất!
            </p>
          </div>

          {/* Level Filter */}
          <div className="space-y-1.5 max-w-xs mx-auto text-left">
            <label className="text-xs font-semibold text-[#1a1a1a]">Cấp độ từ vựng:</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setSelectedLevel('hsk1_pack1')}
                className={`p-2 rounded-xl border text-xs font-medium text-center transition-all ${
                  selectedLevel === 'hsk1_pack1'
                    ? 'border-[#4a7c59] bg-[#e8f0eb] text-[#4a7c59] font-bold'
                    : 'border-[#e5e1d8] bg-white text-[#6b7280]'
                }`}
              >
                Bài 1 (15 từ)
              </button>
              <button
                onClick={() => setSelectedLevel('hsk1')}
                className={`p-2 rounded-xl border text-xs font-medium text-center transition-all ${
                  selectedLevel === 'hsk1'
                    ? 'border-[#4a7c59] bg-[#e8f0eb] text-[#4a7c59] font-bold'
                    : 'border-[#e5e1d8] bg-white text-[#6b7280]'
                }`}
              >
                HSK 1 (50 từ)
              </button>
              <button
                onClick={() => setSelectedLevel('all')}
                className={`p-2 rounded-xl border text-xs font-medium text-center transition-all ${
                  selectedLevel === 'all'
                    ? 'border-[#4a7c59] bg-[#e8f0eb] text-[#4a7c59] font-bold'
                    : 'border-[#e5e1d8] bg-white text-[#6b7280]'
                }`}
              >
                Tất cả từ
              </button>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 rounded-2xl bg-[#4a7c59] text-white font-semibold text-base hover:bg-[#3d6b4a] transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <Zap size={18} /> Bắt đầu bắn mưa từ vựng
          </button>
        </div>
      ) : !isPlaying && lives <= 0 ? (
        /* Game Over Screen */
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-8 text-center space-y-4 shadow-sm w-full slide-up">
          <div className="text-5xl">💥</div>
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Mưa đã chạm đất!</h2>
          <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 max-w-xs mx-auto space-y-1">
            <p className="text-xs text-[#6b7280]">Tổng điểm đạt được:</p>
            <p className="text-4xl font-extrabold text-[#4a7c59]">{score}</p>
          </div>

          <div className="flex gap-2 justify-center pt-2">
            <button
              onClick={startGame}
              className="px-6 py-3 rounded-xl bg-[#4a7c59] text-white font-medium hover:bg-[#3d6b4a] transition-colors flex items-center gap-1.5 text-sm"
            >
              <RotateCcw size={16} /> Bắn lại
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
        /* Rain Gameplay Screen */
        <div className="w-full space-y-3">
          {/* Rain Arena Container (height 380px) */}
          <div className="relative w-full h-[380px] bg-gradient-to-b from-sky-50/50 via-white to-blue-50/40 rounded-3xl border-2 border-dashed border-sky-300 overflow-hidden shadow-inner">
            {drops.map((drop) => (
              <div
                key={drop.id}
                className="absolute transform -translate-x-1/2 flex flex-col items-center p-2 rounded-2xl bg-white border border-sky-300 shadow-md transition-transform"
                style={{
                  left: `${drop.x}%`,
                  top: `${drop.y}px`,
                }}
              >
                <span className="chinese-char text-2xl font-bold text-[#1a1a1a]">
                  {drop.vocab.simplified}
                </span>
                <span className="text-[10px] text-[#4a7c59] font-semibold">
                  {drop.vocab.pinyin}
                </span>
                <span className="text-[10px] text-[#6b7280] max-w-[80px] truncate text-center">
                  {drop.vocab.meaning}
                </span>
              </div>
            ))}

            {drops.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-xs text-[#b5b2ab]">
                Chuẩn bị sẵn sàng... mưa sắp rơi!
              </div>
            )}
          </div>

          {/* Typing Gun Input */}
          <div className="bg-white rounded-2xl border-2 border-[#4a7c59] p-3 shadow-sm flex items-center gap-3">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Gõ Pinyin của từ đang rơi (ví dụ: chi, he, ba...)"
              className="w-full text-base bg-transparent outline-none text-[#1a1a1a] placeholder:text-[#b5b2ab]"
              autoFocus
            />
            {inputText && (
              <button
                onClick={() => setInputText('')}
                className="text-xs text-[#6b7280] hover:text-[#1a1a1a] px-2"
              >
                Xóa
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
