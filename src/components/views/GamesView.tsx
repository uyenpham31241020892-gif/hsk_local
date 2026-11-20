import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { SpeedCardHunter } from '../games/SpeedCardHunter';
import { ToneMaster } from '../games/ToneMaster';
import { PinyinReflexTrainer } from '../games/PinyinReflexTrainer';
import { WordRainGame } from '../games/WordRainGame';
import { Zap, Volume2, Trophy, ArrowRight, Sparkles, Flame, Wind, CloudRain } from 'lucide-react';

export function GamesView() {
  const { navigate } = useApp();
  const [activeGame, setActiveGame] = useState<'speed' | 'tone' | 'sound' | 'rain' | null>(null);

  if (activeGame === 'speed') {
    return (
      <div className="min-h-screen bg-[#FAF9F6] p-4 pb-24">
        <SpeedCardHunter onExit={() => setActiveGame(null)} />
      </div>
    );
  }

  if (activeGame === 'tone') {
    return (
      <div className="min-h-screen bg-[#FAF9F6] p-4 pb-24">
        <ToneMaster onExit={() => setActiveGame(null)} />
      </div>
    );
  }

  if (activeGame === 'sound') {
    return (
      <div className="min-h-screen bg-[#FAF9F6] p-4 pb-24">
        <PinyinReflexTrainer onExit={() => setActiveGame(null)} />
      </div>
    );
  }

  if (activeGame === 'rain') {
    return (
      <div className="min-h-screen bg-[#FAF9F6] p-4 pb-24">
        <WordRainGame onExit={() => setActiveGame(null)} />
      </div>
    );
  }

  const speedHighScore = localStorage.getItem('hsk_speed_hunter_highscore') || '0';

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top Header */}
      <div className="px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10">
        <h1 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
          <span>🎮</span> Đấu Trường Mini & Luyện Phản Xạ
        </h1>
        <p className="text-xs text-[#6b7280]">Chọn cấp độ từ vựng theo bài học · Luyện thanh điệu & âm dễ nhầm</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">
        {/* Banner */}
        <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-3xl p-5 text-center space-y-2">
          <p className="text-xs font-semibold text-[#4a7c59] bg-[#e8f0eb] px-3 py-1 rounded-full inline-block">
            Học mà chơi · Phản xạ tức thì
          </p>
          <h2 className="text-xl font-bold text-[#1a1a1a]">Càng chơi càng nhớ sâu!</h2>
          <p className="text-xs text-[#6b7280] max-w-md mx-auto">
            Không còn học vẹt. Đấu trường giúp não bộ ghi nhớ mặt chữ, khẩu hình và cao độ thanh điệu nhanh gấp 3 lần.
          </p>
        </div>

        {/* Game 1: Speed Card Hunter */}
        <div
          onClick={() => setActiveGame('speed')}
          className="bg-white rounded-3xl border border-[#e5e1d8] p-5 hover:border-[#4a7c59] hover:shadow-sm cursor-pointer transition-all group flex flex-col justify-between space-y-3"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors">
                    1. Săn Chữ Siêu Tốc (Word Blitz)
                  </h3>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <Flame size={10} /> Chọn theo bài học
                  </span>
                </div>
                <p className="text-xs text-[#6b7280] mt-0.5">
                  Chọn chỉ bài 1, bài 1+2 hoặc toàn bộ từ vựng để tìm chữ Hán trong 60 giây
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-[#e5e1d8]/60 text-xs">
            <span className="text-[#6b7280] flex items-center gap-1">
              <Trophy size={14} className="text-amber-500" /> Kỷ lục: <strong className="text-[#1a1a1a]">{speedHighScore} điểm</strong>
            </span>
            <span className="text-[#4a7c59] font-medium flex items-center gap-1 group-hover:underline">
              Chơi ngay <ArrowRight size={14} />
            </span>
          </div>
        </div>

        {/* Game 2: Pinyin Reflex Trainer (zh/z, ch/c, sh/s) */}
        <div
          onClick={() => setActiveGame('sound')}
          className="bg-white rounded-3xl border border-[#e5e1d8] p-5 hover:border-sky-500 hover:shadow-sm cursor-pointer transition-all group flex flex-col justify-between space-y-3"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🌬️
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-sky-700 transition-colors">
                    2. Đấu Trường Ngữ Âm (Pinyin Showdown)
                  </h3>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
                    zh/z · ch/c · sh/s · b/p
                  </span>
                </div>
                <p className="text-xs text-[#6b7280] mt-0.5">
                  Luyện tai phân biệt các cặp âm "sêm sêm" dễ nhầm lẫn nhất + mẹo luồng hơi
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-[#e5e1d8]/60 text-xs">
            <span className="text-[#6b7280]">
              Kiểm tra luồng hơi & uốn lưỡi chạm ngạc cứng
            </span>
            <span className="text-sky-700 font-medium flex items-center gap-1 group-hover:underline">
              Luyện ngay <ArrowRight size={14} />
            </span>
          </div>
        </div>

        {/* Game 3: Tone Master */}
        <div
          onClick={() => setActiveGame('tone')}
          className="bg-white rounded-3xl border border-[#e5e1d8] p-5 hover:border-[#4a7c59] hover:shadow-sm cursor-pointer transition-all group flex flex-col justify-between space-y-3"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#4a7c59] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🎯
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors">
                    3. Bậc Thầy Thanh Điệu (Tricky Tone Master)
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Cao độ 5-5 / 5-1
                  </span>
                </div>
                <p className="text-xs text-[#6b7280] mt-0.5">
                  Luyện tai phân biệt các cặp bẫy kinh điển: 妈/麻/马/骂, 买/卖, 十/四, 汤/糖...
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-[#e5e1d8]/60 text-xs">
            <span className="text-[#6b7280]">
              Biểu đồ cao độ 4 thanh điệu (5-5, 3-5, 2-1-4, 5-1)
            </span>
            <span className="text-[#4a7c59] font-medium flex items-center gap-1 group-hover:underline">
              Thử sức ngay <ArrowRight size={14} />
            </span>
          </div>
        </div>

        {/* Game 4: Word Rain Game (Mưa từ vựng HOT) */}
        <div
          onClick={() => setActiveGame('rain')}
          className="bg-white rounded-3xl border border-[#e5e1d8] p-5 hover:border-indigo-500 hover:shadow-sm cursor-pointer transition-all group flex flex-col justify-between space-y-3"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🌧️
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-indigo-600 transition-colors">
                    4. Mưa Từ Vựng HOT (Word Rain)
                  </h3>
                  <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full">
                    Đọc nghĩa rơi · Gõ Pinyin bắn hạ
                  </span>
                </div>
                <p className="text-xs text-[#6b7280] mt-0.5">
                  Thử thách phản xạ gõ Pinyin cực đã: từ rơi từ trên trời xuống, gõ trúng là nổ tan biến!
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-[#e5e1d8]/60 text-xs">
            <span className="text-[#6b7280]">
              Tập phản xạ bộ gõ Pinyin & dịch nhanh nghĩa tiếng Việt
            </span>
            <span className="text-indigo-600 font-medium flex items-center gap-1 group-hover:underline">
              Bắn hạ ngay <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
