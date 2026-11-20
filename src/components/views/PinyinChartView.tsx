import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { pinyinInitials, pinyinFinals, pinyinTones, type PinyinInitial, type PinyinFinal, type PinyinTone } from '../../data/pinyin_chart_data';
import { speak } from '../../utils/exercises';
import { Volume2, Sparkles, BookOpen, Layers, Wind, ChevronRight, Activity, ArrowLeft } from 'lucide-react';

export function PinyinChartView() {
  const { navigate } = useApp();
  const [activeTab, setActiveTab] = useState<'initials' | 'finals' | 'tones'>('initials');
  const [selectedInitial, setSelectedInitial] = useState<PinyinInitial>(pinyinInitials[0]);
  const [selectedFinal, setSelectedFinal] = useState<PinyinFinal>(pinyinFinals[0]);
  const [selectedTone, setSelectedTone] = useState<PinyinTone>(pinyinTones[0]);

  const handleSpeak = (text: string, rate: number = 0.8) => {
    speak(text, rate);
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
              <span>🗣️</span> Bảng Ngữ Âm Pinyin Toàn Diện
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              Lộ trình phát âm chuẩn từ con số 0 · 23 Thanh mẫu · 24 Vận mẫu · 4 Thanh điệu & Biến âm
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        {/* Navigation Tabs */}
        <div className="grid grid-cols-3 p-1 bg-[#e5e1d8]/50 rounded-2xl">
          <button
            onClick={() => setActiveTab('initials')}
            className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'initials'
                ? 'bg-white text-[#1a1a1a] shadow-xs'
                : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            <span>👄</span> Thanh Mẫu (21)
          </button>

          <button
            onClick={() => setActiveTab('finals')}
            className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'finals'
                ? 'bg-white text-[#1a1a1a] shadow-xs'
                : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            <span>🎶</span> Vận Mẫu (24)
          </button>

          <button
            onClick={() => setActiveTab('tones')}
            className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'tones'
                ? 'bg-white text-[#1a1a1a] shadow-xs'
                : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            <span>📈</span> Thanh Điệu (5)
          </button>
        </div>

        {/* TAB 1: THANH MẪU (INITIALS) */}
        {activeTab === 'initials' && (
          <div className="space-y-5 fade-in">
            {/* Grid of Initials */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {pinyinInitials.map((ini) => (
                <button
                  key={ini.letter}
                  onClick={() => {
                    setSelectedInitial(ini);
                    handleSpeak(ini.examples[0].zh);
                  }}
                  className={`py-3 px-2 rounded-2xl border text-center transition-all ${
                    selectedInitial.letter === ini.letter
                      ? 'bg-[#4a7c59] text-white border-[#4a7c59] shadow-sm scale-105'
                      : 'bg-white border-[#e5e1d8] text-[#1a1a1a] hover:border-[#4a7c59]'
                  }`}
                >
                  <p className="font-bold text-xl tracking-wide">{ini.letter}</p>
                  <p className={`text-[10px] mt-0.5 ${selectedInitial.letter === ini.letter ? 'text-white/80' : 'text-[#6b7280]'}`}>
                    {ini.category.replace('Âm ', '')}
                  </p>
                </button>
              ))}
            </div>

            {/* Selected Initial Detail Card */}
            <div className="bg-white rounded-3xl border border-[#e5e1d8] p-6 space-y-4 shadow-sm slide-up">
              <div className="flex items-center justify-between border-b border-[#e5e1d8] pb-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-[#4a7c59] font-mono">
                    {selectedInitial.letter}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block">
                      {selectedInitial.category} · IPA: {selectedInitial.ipa}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleSpeak(selectedInitial.examples[0].zh)}
                  className="p-3 bg-[#e8f0eb] hover:bg-[#d8e6db] text-[#4a7c59] rounded-2xl transition-transform active:scale-95"
                  title="Nghe mẫu phát âm"
                >
                  <Volume2 size={22} />
                </button>
              </div>

              {/* Mouth guide */}
              <div className="space-y-3">
                <div className="bg-[#FAF9F6] p-3.5 rounded-2xl border border-[#e5e1d8]/80">
                  <p className="text-xs font-bold text-[#1a1a1a] mb-1 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-amber-500" /> Cách phát âm chuẩn:
                  </p>
                  <p className="text-xs text-[#4b5563] leading-relaxed">
                    {selectedInitial.hanVietApprox}
                  </p>
                </div>

                <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-200/60">
                  <p className="text-xs font-bold text-[#4a7c59] mb-1 flex items-center gap-1.5">
                    <Wind size={14} className="text-[#4a7c59]" /> Khẩu hình & Luồng hơi:
                  </p>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    {selectedInitial.mouthGuide}
                  </p>
                </div>
              </div>

              {/* Example Words */}
              <div className="pt-2">
                <p className="text-xs font-bold text-[#6b7280] mb-2 uppercase tracking-wider">
                  Từ vựng ví dụ thực tế (Bấm để nghe):
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {selectedInitial.examples.map((ex, i) => (
                    <div
                      key={i}
                      onClick={() => handleSpeak(ex.zh)}
                      className="p-3 bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl text-center cursor-pointer hover:border-[#4a7c59] hover:bg-white transition-all group"
                    >
                      <p className="chinese-char text-2xl group-hover:scale-110 transition-transform">{ex.zh}</p>
                      <p className="text-xs font-bold text-[#4a7c59] mt-0.5">{ex.pinyin}</p>
                      <p className="text-[11px] text-[#6b7280]">{ex.vi}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VẬN MẪU (FINALS) */}
        {activeTab === 'finals' && (
          <div className="space-y-5 fade-in">
            {/* Grid of Finals */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {pinyinFinals.map((fin) => (
                <button
                  key={fin.letter}
                  onClick={() => {
                    setSelectedFinal(fin);
                    handleSpeak(fin.examples[0].zh);
                  }}
                  className={`py-3 px-2 rounded-2xl border text-center transition-all ${
                    selectedFinal.letter === fin.letter
                      ? 'bg-sky-700 text-white border-sky-700 shadow-sm scale-105'
                      : 'bg-white border-[#e5e1d8] text-[#1a1a1a] hover:border-sky-500'
                  }`}
                >
                  <p className="font-bold text-lg font-mono">{fin.letter}</p>
                  <p className={`text-[10px] mt-0.5 ${selectedFinal.letter === fin.letter ? 'text-white/80' : 'text-[#6b7280]'}`}>
                    {fin.type.replace('Vận mẫu ', '')}
                  </p>
                </button>
              ))}
            </div>

            {/* Selected Final Detail Card */}
            <div className="bg-white rounded-3xl border border-[#e5e1d8] p-6 space-y-4 shadow-sm slide-up">
              <div className="flex items-center justify-between border-b border-[#e5e1d8] pb-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-sky-700 font-mono">
                    {selectedFinal.letter}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-full">
                      {selectedFinal.type}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleSpeak(selectedFinal.examples[0].zh)}
                  className="p-3 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-2xl transition-transform active:scale-95"
                  title="Nghe phát âm"
                >
                  <Volume2 size={22} />
                </button>
              </div>

              <div className="bg-[#FAF9F6] p-3.5 rounded-2xl border border-[#e5e1d8]">
                <p className="text-xs font-bold text-[#1a1a1a] mb-1">Mẹo đọc & khẩu hình:</p>
                <p className="text-xs text-[#4b5563] leading-relaxed">
                  {selectedFinal.hanVietApprox}
                </p>
              </div>

              {/* Example Words */}
              <div className="pt-2">
                <p className="text-xs font-bold text-[#6b7280] mb-2 uppercase tracking-wider">
                  Chữ Hán chứa vận mẫu này:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {selectedFinal.examples.map((ex, i) => (
                    <div
                      key={i}
                      onClick={() => handleSpeak(ex.zh)}
                      className="p-4 bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl flex items-center justify-between cursor-pointer hover:border-sky-500 hover:bg-white transition-all"
                    >
                      <div>
                        <span className="chinese-char text-3xl font-light text-[#1a1a1a]">{ex.zh}</span>
                        <p className="text-xs font-bold text-sky-700">{ex.pinyin}</p>
                        <p className="text-xs text-[#6b7280]">{ex.vi}</p>
                      </div>
                      <Volume2 size={18} className="text-sky-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: THANH ĐIỆU (TONES) */}
        {activeTab === 'tones' && (
          <div className="space-y-5 fade-in">
            {/* Tone Selector Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {pinyinTones.map((tone) => (
                <button
                  key={tone.toneNumber}
                  onClick={() => {
                    setSelectedTone(tone);
                    handleSpeak(tone.exampleChar);
                  }}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedTone.toneNumber === tone.toneNumber
                      ? 'bg-amber-600 text-white border-amber-600 shadow-sm scale-105'
                      : 'bg-white border-[#e5e1d8] text-[#1a1a1a] hover:border-amber-400'
                  }`}
                >
                  <p className="font-black text-2xl font-mono">{tone.symbol}</p>
                  <p className="font-bold text-xs mt-1">{tone.name.split(' ')[0]} {tone.name.split(' ')[1]}</p>
                  <p className={`text-[10px] mt-0.5 ${selectedTone.toneNumber === tone.toneNumber ? 'text-white/80' : 'text-[#6b7280]'}`}>
                    {tone.pitch.split(' ')[0]}
                  </p>
                </button>
              ))}
            </div>

            {/* Selected Tone Detail Card */}
            <div className="bg-white rounded-3xl border border-[#e5e1d8] p-6 space-y-4 shadow-sm slide-up">
              <div className="flex items-center justify-between border-b border-[#e5e1d8] pb-3">
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{selectedTone.name}</h3>
                  <p className="text-xs text-amber-700 font-medium">
                    Cao độ: {selectedTone.pitch} · {selectedTone.hanViet}
                  </p>
                </div>

                <button
                  onClick={() => handleSpeak(selectedTone.exampleChar)}
                  className="p-3 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-2xl transition-transform active:scale-95"
                  title="Nghe mẫu phát âm"
                >
                  <Volume2 size={22} />
                </button>
              </div>

              {/* Pitch Visual Card */}
              <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#e5e1d8] space-y-2">
                <p className="text-xs font-bold text-[#1a1a1a] flex items-center gap-1.5">
                  <Activity size={14} className="text-amber-600" /> Đặc điểm đường cong cao độ:
                </p>
                <p className="text-xs text-[#4b5563] leading-relaxed">
                  {selectedTone.description}
                </p>
              </div>

              {/* Rule Tip */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/60 space-y-1">
                <p className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-600" /> Mẹo chuẩn xác & biến điệu:
                </p>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {selectedTone.ruleTip}
                </p>
              </div>

              {/* Example Word */}
              <div
                onClick={() => handleSpeak(selectedTone.exampleChar)}
                className="p-4 bg-white border-2 border-dashed border-[#e5e1d8] rounded-2xl flex items-center justify-between cursor-pointer hover:border-amber-500 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="chinese-char text-4xl text-[#1a1a1a]">{selectedTone.exampleChar}</span>
                  <div>
                    <p className="text-base font-bold text-amber-700">{selectedTone.examplePinyin}</p>
                    <p className="text-xs text-[#6b7280]">Nghĩa: {selectedTone.exampleMeaning}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-700 font-medium">
                  <span>Nghe thử</span>
                  <Volume2 size={16} />
                </div>
              </div>
            </div>

            {/* 3 Golden Tone Sandhi Rules */}
            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-3xl p-5 space-y-3">
              <h4 className="font-bold text-sm text-[#4a7c59] flex items-center gap-2">
                <span>⭐</span> 3 Quy Tắc Biến Điệu Bắt Buộc Phải Nhớ (HSK 1-6)
              </h4>
              <div className="space-y-2 text-xs text-emerald-950">
                <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                  <strong>1. Hai thanh 3 đi liền nhau:</strong> Thanh 3 thứ nhất biến thành thanh 2.
                  <p className="text-emerald-700 mt-0.5">Ví dụ: 你 (nǐ) + 好 (hǎo) → đọc là <strong>ní hǎo</strong>.</p>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                  <strong>2. Biến điệu của chữ "不" (bù):</strong>
                  <p className="text-emerald-700 mt-0.5">Khi đứng trước một từ mang thanh 4, 不 biến thành thanh 2 (bú). Ví dụ: 不是 (bú shì), 不要 (bú yào).</p>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                  <strong>3. Biến điệu của chữ "一" (yī):</strong>
                  <p className="text-emerald-700 mt-0.5">Đứng trước thanh 4 đổi thành thanh 2 (yí dìng 一定); đứng trước thanh 1, 2, 3 đổi thành thanh 4 (yì tiān 一天, yì qǐ 一起).</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
