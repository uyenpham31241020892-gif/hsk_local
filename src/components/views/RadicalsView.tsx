import React, { useState, useMemo } from 'react';
import { useApp } from '../../store/AppContext';
import { coreRadicals, type RadicalEntry, TOTAL_KANGXI_RADICALS_COUNT } from '../../data/radicals_data';
import { speak } from '../../utils/exercises';
import { 
  Volume2, 
  Sparkles, 
  BookOpen, 
  Layers, 
  ArrowLeft, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Filter,
  Check
} from 'lucide-react';

export function RadicalsView() {
  const { navigate } = useApp();
  const [selectedRadicalId, setSelectedRadicalId] = useState<string>('rad_1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [strokeFilter, setStrokeFilter] = useState<'all' | 'common' | '1-2' | '3' | '4' | '5-6' | '7-8' | '9-10' | '11+'>('all');

  // Filtered radicals
  const filteredRadicals = useMemo(() => {
    return coreRadicals.filter((rad) => {
      // Stroke filter
      if (strokeFilter === 'common' && !rad.isCommon) return false;
      if (strokeFilter === '1-2' && rad.strokes > 2) return false;
      if (strokeFilter === '3' && rad.strokes !== 3) return false;
      if (strokeFilter === '4' && rad.strokes !== 4) return false;
      if (strokeFilter === '5-6' && (rad.strokes < 5 || rad.strokes > 6)) return false;
      if (strokeFilter === '7-8' && (rad.strokes < 7 || rad.strokes > 8)) return false;
      if (strokeFilter === '9-10' && (rad.strokes < 9 || rad.strokes > 10)) return false;
      if (strokeFilter === '11+' && rad.strokes < 11) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchChar = rad.char.includes(q) || (rad.variant && rad.variant.includes(q));
        const matchPinyin = rad.pinyin.toLowerCase().includes(q);
        const matchHanViet = rad.hanViet.toLowerCase().includes(q);
        const matchMeaning = rad.meaningVi.toLowerCase().includes(q);
        const matchNumber = String(rad.orderNumber) === q;
        return matchChar || matchPinyin || matchHanViet || matchMeaning || matchNumber;
      }

      return true;
    });
  }, [searchQuery, strokeFilter]);

  const selectedRadicalIndex = coreRadicals.findIndex(r => r.id === selectedRadicalId);
  const selectedRadical = (selectedRadicalIndex >= 0 ? coreRadicals[selectedRadicalIndex] : coreRadicals[0]) || coreRadicals[0];

  const handlePrevRadical = () => {
    if (selectedRadicalIndex > 0) {
      setSelectedRadicalId(coreRadicals[selectedRadicalIndex - 1].id);
    } else {
      setSelectedRadicalId(coreRadicals[coreRadicals.length - 1].id);
    }
  };

  const handleNextRadical = () => {
    if (selectedRadicalIndex < coreRadicals.length - 1) {
      setSelectedRadicalId(coreRadicals[selectedRadicalIndex + 1].id);
    } else {
      setSelectedRadicalId(coreRadicals[0].id);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top Header */}
      <div className="px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-20 flex items-center justify-between shadow-2xs">
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
              <span>🧩</span> 214 Bộ Thủ Chữ Hán Khang Hy (部首)
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              Chìa khóa vàng giải mã chiết tự & cấu trúc 90% chữ Hán
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[11px] font-bold text-[#4a7c59] bg-[#e8f0eb] px-2.5 py-1 rounded-full">
            {coreRadicals.length} / 214 Bộ
          </span>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-4 shadow-xs space-y-3">
          {/* Search Bar */}
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b7280]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo chữ Hán (水), Pinyin (shui), Hán Việt (Thủy), nghĩa (nước)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl text-xs sm:text-sm text-[#1a1a1a] focus:outline-none focus:border-[#4a7c59]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6b7280] hover:text-[#1a1a1a]"
              >
                Xóa
              </button>
            )}
          </div>

          {/* Stroke Filter Tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none font-medium">
            <button
              onClick={() => setStrokeFilter('all')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                strokeFilter === 'all'
                  ? 'bg-[#4a7c59] text-white font-bold shadow-2xs'
                  : 'bg-[#FAF9F6] text-[#6b7280] hover:bg-[#e5e1d8]'
              }`}
            >
              Tất cả ({coreRadicals.length})
            </button>
            <button
              onClick={() => setStrokeFilter('common')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all flex items-center gap-1 ${
                strokeFilter === 'common'
                  ? 'bg-amber-600 text-white font-bold shadow-2xs'
                  : 'bg-[#FAF9F6] text-amber-800 hover:bg-amber-100'
              }`}
            >
              <span>⭐</span> Top HSK hay gặp
            </button>
            <button
              onClick={() => setStrokeFilter('1-2')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                strokeFilter === '1-2' ? 'bg-[#4a7c59] text-white font-bold shadow-2xs' : 'bg-[#FAF9F6] text-[#6b7280]'
              }`}
            >
              1–2 nét
            </button>
            <button
              onClick={() => setStrokeFilter('3')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                strokeFilter === '3' ? 'bg-[#4a7c59] text-white font-bold shadow-2xs' : 'bg-[#FAF9F6] text-[#6b7280]'
              }`}
            >
              3 nét
            </button>
            <button
              onClick={() => setStrokeFilter('4')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                strokeFilter === '4' ? 'bg-[#4a7c59] text-white font-bold shadow-2xs' : 'bg-[#FAF9F6] text-[#6b7280]'
              }`}
            >
              4 nét
            </button>
            <button
              onClick={() => setStrokeFilter('5-6')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                strokeFilter === '5-6' ? 'bg-[#4a7c59] text-white font-bold shadow-2xs' : 'bg-[#FAF9F6] text-[#6b7280]'
              }`}
            >
              5–6 nét
            </button>
            <button
              onClick={() => setStrokeFilter('7-8')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                strokeFilter === '7-8' ? 'bg-[#4a7c59] text-white font-bold shadow-2xs' : 'bg-[#FAF9F6] text-[#6b7280]'
              }`}
            >
              7–8 nét
            </button>
            <button
              onClick={() => setStrokeFilter('9-10')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                strokeFilter === '9-10' ? 'bg-[#4a7c59] text-white font-bold shadow-2xs' : 'bg-[#FAF9F6] text-[#6b7280]'
              }`}
            >
              9–10 nét
            </button>
            <button
              onClick={() => setStrokeFilter('11+')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                strokeFilter === '11+' ? 'bg-[#4a7c59] text-white font-bold shadow-2xs' : 'bg-[#FAF9F6] text-[#6b7280]'
              }`}
            >
              11+ nét
            </button>
          </div>

          {/* LƯỚI TẤT CẢ 214 BỘ THỦ KHANG HY (DỄ DÀNG CUỘN VÀ CHỌN BẰNG CHUỘT/CHẠM) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-[#6b7280] px-1 font-medium">
              <span>Bấm vào một ô bên dưới để xem chi tiết (hoặc cuộn chuột xem đủ 214 bộ):</span>
              <span className="font-bold text-[#4a7c59] bg-[#e8f0eb] px-2 py-0.5 rounded-full">
                {filteredRadicals.length} / {coreRadicals.length} bộ
              </span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 max-h-72 sm:max-h-80 overflow-y-auto p-2.5 bg-[#FAF9F6] rounded-2xl border border-[#e5e1d8] shadow-inner scrollbar-thin">
              {filteredRadicals.map((rad) => {
                const isSelected = rad.id === selectedRadical.id;
                return (
                  <button
                    key={rad.id}
                    onClick={() => {
                      setSelectedRadicalId(rad.id);
                      speak(rad.char);
                    }}
                    className={`p-2 rounded-xl text-center transition-all flex flex-col items-center justify-center border relative ${
                      isSelected
                        ? 'bg-[#4a7c59] text-white border-[#4a7c59] shadow-xs scale-105 ring-2 ring-[#4a7c59]/30 z-10'
                        : 'bg-white text-[#1a1a1a] border-[#e5e1d8] hover:border-[#4a7c59] hover:bg-[#e8f0eb]/50'
                    }`}
                  >
                    <span className="chinese-char text-2xl font-normal leading-tight">
                      {rad.char}
                    </span>
                    <span className={`text-[10px] font-semibold truncate max-w-full ${isSelected ? 'text-white/95' : 'text-[#4a7c59]'}`}>
                      {rad.pinyin}
                    </span>
                    <span className={`text-[9px] truncate max-w-full ${isSelected ? 'text-white/80' : 'text-[#6b7280]'}`}>
                      #{rad.orderNumber} · {rad.hanViet.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* SELECTED RADICAL DETAIL CARD */}
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-6 space-y-4 shadow-sm slide-up relative overflow-hidden">
          {/* Top navigation buttons (Trước / Sau) */}
          <div className="flex items-center justify-between border-b border-[#e5e1d8] pb-4">
            <div className="flex items-baseline gap-3">
              <span className="chinese-char text-6xl font-light text-[#1a1a1a]">
                {selectedRadical.char}
              </span>
              {selectedRadical.variant && (
                <div className="text-left">
                  <span className="chinese-char text-2xl text-[#4a7c59] font-medium" title="Biến thể khi ghép với chữ khác">
                    ({selectedRadical.variant})
                  </span>
                  <p className="text-[10px] text-[#6b7280]">Biến thể ghép chữ</p>
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold text-[#4a7c59]">{selectedRadical.pinyin}</p>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                    Bộ số {selectedRadical.orderNumber} · {selectedRadical.strokes} nét
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#1a1a1a] mt-0.5">
                  Hán Việt: <span className="text-amber-900">{selectedRadical.hanViet}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => speak(selectedRadical.char)}
                className="p-3 rounded-2xl bg-[#e8f0eb] hover:bg-[#d5e7db] text-[#4a7c59] transition-transform active:scale-95"
                title="Nghe phát âm bộ thủ"
              >
                <Volume2 size={22} />
              </button>

              <div className="flex gap-1 ml-1">
                <button
                  onClick={handlePrevRadical}
                  className="p-2.5 rounded-xl border border-[#e5e1d8] hover:bg-[#FAF9F6] text-[#6b7280] hover:text-[#1a1a1a] transition-colors"
                  title="Bộ trước đó"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextRadical}
                  className="p-2.5 rounded-xl border border-[#e5e1d8] hover:bg-[#FAF9F6] text-[#6b7280] hover:text-[#1a1a1a] transition-colors"
                  title="Bộ tiếp theo"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Meaning box */}
          <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 text-xs text-[#1a1a1a] leading-relaxed space-y-1">
            <p className="font-bold text-[#4a7c59] flex items-center gap-1.5 text-xs">
              <Layers size={14} /> Ý nghĩa & Trường từ vựng:
            </p>
            <p className="text-xs text-[#4b5563]">
              {selectedRadical.meaningVi}
            </p>
          </div>

          {/* Mnemonic Story */}
          <div className="bg-amber-50/80 border border-amber-200 text-amber-950 rounded-2xl p-4 text-xs space-y-1">
            <p className="font-bold text-amber-900 flex items-center gap-1.5">
              <span>💡</span> Câu chuyện chiết tự dễ nhớ:
            </p>
            <p className="leading-relaxed text-amber-900">
              {selectedRadical.mnemonicStory}
            </p>
          </div>

          {/* Common Words using this Radical */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-[#1a1a1a] flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#4a7c59]" />
                Chữ Hán tiêu biểu chứa bộ thủ này:
              </p>
              <span className="text-[11px] text-[#6b7280]">Chạm vào chữ để nghe phát âm</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {selectedRadical.commonWords.map((word, idx) => (
                <div
                  key={idx}
                  onClick={() => speak(word.char)}
                  className="p-3 bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl hover:border-[#4a7c59] hover:bg-white cursor-pointer transition-all group text-center space-y-0.5 shadow-2xs"
                >
                  <span className="chinese-char text-3xl font-normal text-[#1a1a1a] group-hover:text-[#4a7c59] group-hover:scale-110 transition-transform inline-block">
                    {word.char}
                  </span>
                  <p className="text-xs font-bold text-[#4a7c59]">{word.pinyin}</p>
                  <p className="text-[11px] text-[#6b7280] truncate">{word.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
