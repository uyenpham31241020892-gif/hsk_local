import React, { useState } from 'react';
import { getRandomConfusingChallenges } from '../../data/confusing_sounds_data';
import type { ConfusingSoundChallenge } from '../../types';
import { speak } from '../../utils/exercises';
import { Volume2, CheckCircle2, XCircle, RotateCcw, ChevronRight, Wind, Sparkles, Filter, Shuffle } from 'lucide-react';

export function PinyinReflexTrainer({ onExit }: { onExit: () => void }) {
  const [selectedPairType, setSelectedPairType] = useState<string>('all');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [challenges, setChallenges] = useState<ConfusingSoundChallenge[]>(() => getRandomConfusingChallenges(10, 'all'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const startNewQuiz = (pair = selectedPairType, count = questionCount) => {
    const fresh = getRandomConfusingChallenges(count, pair);
    setChallenges(fresh);
    setCurrentIndex(0);
    setSelectedOptionIndex(null);
    setRevealed(false);
    setScore(0);
    setIsFinished(false);
  };

  const current = challenges[currentIndex];

  const handlePlay = (slow = false) => {
    if (!current) return;
    speak(current.audioText, slow ? 0.5 : 0.85);
  };

  const handleSelect = (idx: number) => {
    if (revealed || !current) return;
    setSelectedOptionIndex(idx);
    setRevealed(true);
    const chosen = current.distractors[idx];
    if (chosen.char === current.audioText || chosen.pinyin === current.correctPinyin) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= challenges.length) {
      setIsFinished(true);
    } else {
      setCurrentIndex(i => i + 1);
      setSelectedOptionIndex(null);
      setRevealed(false);
    }
  };

  if (isFinished) {
    const pct = Math.round((score / challenges.length) * 100);
    return (
      <div className="bg-white rounded-3xl border border-[#e5e1d8] p-8 text-center space-y-5 shadow-sm max-w-md mx-auto slide-up">
        <div className="text-5xl">{pct >= 80 ? '🎯' : pct >= 50 ? '👍' : '💪'}</div>
        <h2 className="text-2xl font-bold text-[#1a1a1a]">Hoàn thành Huấn Luyện Ngữ Âm!</h2>
        <p className="text-sm text-[#6b7280]">Đấu trường Phân biệt Âm dễ nhầm (Pinyin Showdown)</p>

        <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 max-w-xs mx-auto space-y-1">
          <p className="text-xs text-[#6b7280]">Độ chuẩn xác:</p>
          <p className="text-4xl font-extrabold text-[#4a7c59]">{pct}%</p>
          <p className="text-xs text-[#6b7280]">{score} / {challenges.length} câu đúng</p>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <button
            onClick={() => startNewQuiz()}
            className="w-full py-3.5 rounded-2xl bg-[#4a7c59] text-white font-bold hover:bg-[#3d6b4a] transition-all flex items-center justify-center gap-2 text-sm shadow-xs active:scale-[0.99]"
          >
            <Shuffle size={16} /> Tạo bộ câu hỏi ngẫu nhiên mới
          </button>
          <button
            onClick={onExit}
            className="w-full py-3 rounded-2xl border border-[#e5e1d8] text-[#6b7280] hover:bg-[#FAF9F6] transition-colors text-sm font-semibold"
          >
            Quay lại menu
          </button>
        </div>
      </div>
    );
  }

  const chosenOption = selectedOptionIndex !== null && current ? current.distractors[selectedOptionIndex] : null;
  const isCorrect = chosenOption ? (chosenOption.char === current.audioText || chosenOption.pinyin === current.correctPinyin) : false;

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto space-y-4 fade-in">
      {/* Category Pills & Fresh Shuffle Bar */}
      <div className="w-full bg-white rounded-2xl border border-[#e5e1d8] p-3 shadow-2xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#1a1a1a] flex items-center gap-1.5">
            <Filter size={13} className="text-[#4a7c59]" /> Chọn cặp âm cần luyện:
          </span>
          <button
            onClick={() => startNewQuiz()}
            className="text-[11px] font-bold text-[#4a7c59] hover:underline flex items-center gap-1 bg-[#e8f0eb] px-2.5 py-1 rounded-xl transition-all"
            title="Đổi đề ngẫu nhiên mới"
          >
            <Shuffle size={12} /> Đổi đề mới
          </button>
        </div>

        <div className="flex gap-1 overflow-x-auto pb-1 text-xs font-semibold">
          {[
            { id: 'all', label: 'Tất cả (Trộn ngẫu nhiên)' },
            { id: 'zh_z', label: 'zh vs z (Uốn lưỡi)' },
            { id: 'ch_c', label: 'ch vs c (Bật hơi)' },
            { id: 'sh_s', label: 'sh vs s' },
            { id: 'b_p', label: 'b vs p (Bật hơi)' },
            { id: 'd_t', label: 'd vs t' },
            { id: 'g_k', label: 'g vs k' },
            { id: 'j_q', label: 'j vs q (Mặt lưỡi)' },
            { id: 'r_l', label: 'r vs l' },
            { id: 'n_ng', label: 'Mũi trước -n vs sau -ng' },
          ].map(c => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedPairType(c.id);
                startNewQuiz(c.id, questionCount);
              }}
              className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-all ${
                selectedPairType === c.id
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-[#FAF9F6] text-[#6b7280] hover:text-[#1a1a1a]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Header */}
      <div className="w-full bg-white rounded-2xl border border-[#e5e1d8] p-4 flex items-center justify-between">
        <div>
          <span className="text-xs text-[#6b7280]">Đấu trường Pinyin · Tự động sinh đề mới</span>
          <p className="text-sm font-bold text-[#1a1a1a]">
            Câu {currentIndex + 1} / {challenges.length}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs font-semibold px-3 py-1 bg-sky-50 text-sky-700 border border-sky-200 rounded-full">
            Đúng: {score} câu
          </div>
          <button
            onClick={onExit}
            className="text-xs text-[#6b7280] hover:text-[#1a1a1a] p-1.5"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      {current && (
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-6 w-full text-center space-y-4 shadow-xs">
          <div>
            <span className="text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-0.5 rounded-full inline-block">
              {current.pairCategory}
            </span>
            <h3 className="text-base font-bold text-[#1a1a1a] mt-2">
              Lắng nghe phát âm và chọn Pinyin / Chữ Hán đúng:
            </h3>
          </div>

          {/* Audio Controls */}
          <div className="flex justify-center gap-3 py-1">
            <button
              onClick={() => handlePlay(false)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-xs transition-transform active:scale-95"
            >
              <Volume2 size={16} /> Nghe phát âm chuẩn (1.0x)
            </button>
            <button
              onClick={() => handlePlay(true)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl border border-[#e5e1d8] hover:bg-[#FAF9F6] text-[#6b7280] font-semibold text-xs transition-colors"
            >
              🐢 Chậm (0.5x)
            </button>
          </div>

          {/* Choices */}
          <div className={`grid gap-3 pt-2 ${current.distractors.length > 2 ? 'grid-cols-2' : 'grid-cols-2'}`}>
            {current.distractors.map((item, idx) => {
              const isSelected = selectedOptionIndex === idx;
              const isCorrectItem = item.char === current.audioText || item.pinyin === current.correctPinyin;

              let btnCls = 'p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 ';
              if (!revealed) {
                btnCls += 'border-[#e5e1d8] bg-white hover:border-sky-500 hover:bg-sky-50/40 cursor-pointer shadow-2xs';
              } else if (isCorrectItem) {
                btnCls += 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
              } else if (isSelected) {
                btnCls += 'border-red-400 bg-red-50 text-red-900';
              } else {
                btnCls += 'border-[#e5e1d8] bg-[#FAF9F6] opacity-40';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={btnCls}
                >
                  <span className="chinese-char text-3xl font-medium text-[#1a1a1a]">{item.char}</span>
                  <span className="text-sky-700 font-bold text-base tracking-wide">{item.pinyin}</span>
                  <span className="text-xs text-[#6b7280] line-clamp-1">{item.meaning}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation & Mouth Shape Guide */}
          {revealed && (
            <div className={`p-4 rounded-2xl text-xs space-y-2 fade-in text-left border ${
              isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-red-50 border-red-200 text-red-950'
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm flex items-center gap-1.5">
                  {isCorrect ? '✅ Bạn nghe rất chuẩn!' : `❌ Đáp án đúng là: ${current.audioText} (${current.correctPinyin})`}
                </span>
                <span className="font-bold text-sky-800">Nghĩa: {current.meaning}</span>
              </div>

              <div className="bg-white/80 border border-black/5 rounded-xl p-3 space-y-1">
                <p className="font-bold text-[#1a1a1a] flex items-center gap-1">
                  <Wind size={13} className="text-sky-600" /> Hướng dẫn luồng hơi & khẩu hình:
                </p>
                <p className="whitespace-pre-line text-[#6b7280] text-[11px] leading-relaxed">
                  {current.mouthShapeGuide}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full mt-3 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <span>{currentIndex + 1 >= challenges.length ? 'Xem kết quả' : 'Câu tiếp theo'}</span>
                <ChevronRight size={15} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
