import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { measureWordsData } from '../../data/measure_words_data';
import { speak } from '../../utils/exercises';
import { Volume2, BookOpen, Check, X, Sparkles, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

export function MeasureWordsView() {
  const { navigate } = useApp();
  const [selectedWordId, setSelectedWordId] = useState<string>('mw_ge');
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizStatus, setQuizStatus] = useState<'correct' | 'wrong' | null>(null);

  const selectedIndex = measureWordsData.findIndex(m => m.id === selectedWordId);
  const selectedMw = (selectedIndex >= 0 ? measureWordsData[selectedIndex] : measureWordsData[0]) || measureWordsData[0];

  const handlePrevMw = () => {
    const prevIdx = selectedIndex > 0 ? selectedIndex - 1 : measureWordsData.length - 1;
    setSelectedWordId(measureWordsData[prevIdx].id);
    setQuizAnswer(null);
    setQuizStatus(null);
  };

  const handleNextMw = () => {
    const nextIdx = selectedIndex < measureWordsData.length - 1 ? selectedIndex + 1 : 0;
    setSelectedWordId(measureWordsData[nextIdx].id);
    setQuizAnswer(null);
    setQuizStatus(null);
  };

  const handleTestCollocation = (chosen: string, correct: string) => {
    setQuizAnswer(chosen);
    if (chosen === correct) {
      setQuizStatus('correct');
    } else {
      setQuizStatus('wrong');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top Header */}
      <div className="px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('home')}
            className="p-1.5 -ml-1 text-[#6b7280] hover:text-[#1a1a1a] rounded-xl hover:bg-[#FAF9F6] transition-colors"
            title="Quay lại Trang chủ"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-base font-bold text-[#1a1a1a] flex items-center gap-1.5">
              <span>📦</span> Cẩm Nang Lượng Từ Tiếng Trung (量词)
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              Quy tắc kết hợp chuẩn xác · Không bao giờ nói nhầm "một con sách"
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handlePrevMw}
            className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-[#FAF9F6] text-[#6b7280] hover:text-[#1a1a1a] transition-colors"
            title="Lượng từ trước"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNextMw}
            className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-[#FAF9F6] text-[#6b7280] hover:text-[#1a1a1a] transition-colors"
            title="Lượng từ sau"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        {/* Grid / Horizontal Selector */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-[#6b7280] px-1">
            <span>Danh sách lượng từ phổ biến:</span>
            <span>{measureWordsData.length} từ</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {measureWordsData.map(mw => (
              <button
                key={mw.id}
                onClick={() => {
                  setSelectedWordId(mw.id);
                  setQuizAnswer(null);
                  setQuizStatus(null);
                }}
                className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                  selectedMw.id === mw.id
                    ? 'bg-[#4a7c59] text-white shadow-xs scale-105'
                    : 'bg-white border border-[#e5e1d8] text-[#6b7280] hover:border-[#4a7c59]'
                }`}
              >
                <span className="chinese-char text-base">{mw.char}</span>
                <span>{mw.pinyin}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Measure Word Detail Card */}
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-6 space-y-4 shadow-sm slide-up">
          <div className="flex items-center justify-between border-b border-[#e5e1d8] pb-3">
            <div className="flex items-baseline gap-3">
              <span className="chinese-char text-5xl font-light text-[#1a1a1a]">
                {selectedMw.char}
              </span>
              <div>
                <p className="text-lg font-bold text-[#4a7c59]">{selectedMw.pinyin}</p>
                <p className="text-xs text-[#6b7280]">Hán Việt: {selectedMw.hanViet}</p>
              </div>
            </div>

            <button
              onClick={() => speak(selectedMw.char)}
              className="p-3 rounded-2xl border border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59] transition-colors"
              title="Nghe phát âm lượng từ"
            >
              <Volume2 size={20} />
            </button>
          </div>

          {/* Usage Rule */}
          <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 text-xs text-[#1a1a1a] leading-relaxed">
            <p className="font-semibold text-[#4a7c59] mb-1 flex items-center gap-1.5">
              <BookOpen size={14} /> Quy tắc sử dụng:
            </p>
            {selectedMw.usageRule}
          </div>

          {/* Golden Tip */}
          <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl p-3.5 text-xs">
            💡 <strong>Mẹo vàng ghi nhớ:</strong> {selectedMw.tip}
          </div>

          {/* Common Collocations */}
          <div className="space-y-2.5 pt-2">
            <p className="text-xs font-bold text-[#1a1a1a] flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#4a7c59]" />
              Các cụm từ hay đi liền (Collocations):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedMw.collocations.map((col, idx) => (
                <div
                  key={idx}
                  onClick={() => speak(col.phraseZh)}
                  className="p-3 bg-[#FAF9F6] border border-[#e5e1d8] rounded-xl hover:border-[#4a7c59] cursor-pointer transition-colors group flex items-center justify-between"
                >
                  <div>
                    <span className="chinese-char text-base font-semibold text-[#1a1a1a] group-hover:text-[#4a7c59]">
                      {col.phraseZh}
                    </span>
                    <p className="text-[11px] text-[#4a7c59] font-medium">{col.nounPinyin}</p>
                    <p className="text-xs text-[#6b7280]">{col.phraseVi}</p>
                  </div>
                  <Volume2 size={16} className="text-[#b5b2ab] group-hover:text-[#4a7c59]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
