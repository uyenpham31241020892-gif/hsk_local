import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { etymologyFamilies, twinCharPairs } from '../../data/etymology_data';
import { speak } from '../../utils/exercises';
import { Volume2, Sparkles, GitBranch, Copy, BookOpen, ArrowLeft } from 'lucide-react';

export function EtymologyView() {
  const { navigate } = useApp();
  const [activeTab, setActiveTab] = useState<'family' | 'twins'>('family');
  const [selectedFamilyId, setSelectedFamilyId] = useState<string>('fam_bao');

  const selectedFamily = etymologyFamilies.find(f => f.id === selectedFamilyId) || etymologyFamilies[0];

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
              <span>🌳</span> Cây Gia Phả Chữ Hán & Chữ Sinh Đôi
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              Học 1 nhớ 10 qua họ chữ Hình thanh · Bóc tách các cặp chữ lệch 1 nét
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        {/* Tab switch */}
        <div className="grid grid-cols-2 p-1 bg-[#e5e1d8]/50 rounded-2xl">
          <button
            onClick={() => setActiveTab('family')}
            className={`py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'family'
                ? 'bg-white text-[#1a1a1a] shadow-xs'
                : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            <GitBranch size={16} className={activeTab === 'family' ? 'text-[#4a7c59]' : ''} />
            Cây Gia Phả (Học 1 Nhớ 10)
          </button>

          <button
            onClick={() => setActiveTab('twins')}
            className={`py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'twins'
                ? 'bg-white text-[#1a1a1a] shadow-xs'
                : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            <Copy size={16} className={activeTab === 'twins' ? 'text-amber-600' : ''} />
            Cặp Sinh Đôi Lệch 1 Nét
          </button>
        </div>

        {/* TAB 1: CÂY GIA PHẢ CHỮ HÌNH THANH */}
        {activeTab === 'family' && (
          <div className="space-y-5 fade-in">
            {/* Family Selector Pills */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {etymologyFamilies.map(fam => (
                <button
                  key={fam.id}
                  onClick={() => setSelectedFamilyId(fam.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                    selectedFamily.id === fam.id
                      ? 'bg-[#4a7c59] text-white shadow-xs scale-105'
                      : 'bg-white border border-[#e5e1d8] text-[#6b7280] hover:border-[#4a7c59]'
                  }`}
                >
                  <span className="chinese-char text-base">{fam.rootChar}</span>
                  <span>Họ chữ {fam.rootPinyin}</span>
                </button>
              ))}
            </div>

            {/* Root Card (Gốc âm) */}
            <div className="bg-white rounded-3xl border-2 border-[#4a7c59] p-6 text-center space-y-3 shadow-xs">
              <span className="text-xs font-bold text-[#4a7c59] bg-[#e8f0eb] px-3 py-1 rounded-full inline-block">
                Gốc âm (Thanh phù cốt lõi)
              </span>
              <div className="flex items-center justify-center gap-3">
                <span className="chinese-char text-6xl font-normal text-[#1a1a1a]">
                  {selectedFamily.rootChar}
                </span>
                <button
                  onClick={() => speak(selectedFamily.rootChar)}
                  className="p-3 bg-[#e8f0eb] hover:bg-[#d8e8dc] text-[#4a7c59] rounded-2xl transition-colors"
                  title="Nghe phát âm gốc"
                >
                  <Volume2 size={22} />
                </button>
              </div>
              <p className="text-lg font-bold text-[#4a7c59]">{selectedFamily.rootPinyin}</p>
              <p className="text-sm font-medium text-[#1a1a1a]">{selectedFamily.rootMeaning}</p>
              <p className="text-xs text-[#6b7280] leading-relaxed max-w-md mx-auto pt-1">
                {selectedFamily.story}
              </p>
            </div>

            {/* Branches / Family Members */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-[#1a1a1a] flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#4a7c59]" />
                Các chữ "con cháu" sinh ra từ gốc {selectedFamily.rootChar} ({selectedFamily.familyMembers.length} chữ):
              </p>

              <div className="grid grid-cols-1 gap-3">
                {selectedFamily.familyMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#e5e1d8] p-4.5 hover:border-[#4a7c59] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Character Box */}
                      <div className="w-16 h-16 rounded-2xl bg-[#FAF9F6] border border-[#e5e1d8] flex items-center justify-center shrink-0">
                        <span className="chinese-char text-3xl font-medium text-[#1a1a1a]">
                          {member.char}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#4a7c59]">{member.pinyin}</span>
                          <span className="text-[11px] font-semibold text-[#1a1a1a] bg-[#FAF9F6] border border-[#e5e1d8] px-2 py-0.5 rounded-lg">
                            {member.meaning}
                          </span>
                        </div>
                        <p className="text-xs text-[#4a7c59] font-medium">
                          {member.composition}
                        </p>
                        <p className="text-xs text-[#6b7280]">
                          Từ ví dụ: <strong className="chinese-char text-sm text-[#1a1a1a]">{member.exampleWord}</strong> ({member.examplePinyin}) = {member.exampleMeaning}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => speak(member.char)}
                      className="p-2.5 rounded-xl border border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59] transition-colors self-end sm:self-center"
                      title="Nghe phát âm"
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CẶP CHỮ SINH ĐÔI LỆCH 1 NÉT */}
        {activeTab === 'twins' && (
          <div className="space-y-4 fade-in">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 leading-relaxed">
              💡 <strong>Bí quyết chống "hoa mắt":</strong> Chữ Hán nhìn thoáng qua có vẻ giống nhau như hai giọt nước, nhưng người bản xứ luôn nhìn vào đúng <strong>1 nét cốt lõi</strong> để phân biệt. Dưới đây là các cặp kinh điển nhất!
            </div>

            <div className="space-y-4">
              {twinCharPairs.map(pair => (
                <div
                  key={pair.id}
                  className="bg-white rounded-3xl border border-[#e5e1d8] p-5 space-y-4 shadow-2xs hover:border-amber-400 transition-all"
                >
                  <h3 className="font-bold text-sm text-[#1a1a1a] flex items-center gap-2 border-b border-[#e5e1d8] pb-2">
                    <span>⚡</span> {pair.title}
                  </h3>

                  {/* 2 Characters Side by Side */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#e5e1d8] space-y-1">
                      <span className="chinese-char text-5xl font-normal text-[#1a1a1a] block">
                        {pair.char1}
                      </span>
                      <p className="text-sm font-bold text-[#4a7c59]">{pair.pinyin1}</p>
                      <p className="text-xs font-medium text-[#1a1a1a]">{pair.meaning1}</p>
                      <button
                        onClick={() => speak(pair.char1)}
                        className="mt-1 p-1.5 rounded-lg border border-[#e5e1d8] text-[#4a7c59] hover:bg-[#e8f0eb] inline-block"
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>

                    <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#e5e1d8] space-y-1">
                      <span className="chinese-char text-5xl font-normal text-[#1a1a1a] block">
                        {pair.char2}
                      </span>
                      <p className="text-sm font-bold text-amber-600">{pair.pinyin2}</p>
                      <p className="text-xs font-medium text-[#1a1a1a]">{pair.meaning2}</p>
                      <button
                        onClick={() => speak(pair.char2)}
                        className="mt-1 p-1.5 rounded-lg border border-[#e5e1d8] text-amber-600 hover:bg-amber-100 inline-block"
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Difference & Mnemonic */}
                  <div className="space-y-2 text-xs">
                    <p className="font-semibold text-red-700 bg-red-50 border border-red-100 rounded-xl p-2.5">
                      🔍 <strong>Điểm khác biệt:</strong> {pair.differencePoint}
                    </p>
                    <p className="text-[#1a1a1a] bg-amber-50/70 border border-amber-200/60 rounded-xl p-2.5 leading-relaxed">
                      {pair.mnemonic}
                    </p>
                  </div>

                  {/* Examples */}
                  <div className="bg-[#FAF9F6] rounded-xl p-3 text-xs space-y-1.5 border border-[#e5e1d8]/50">
                    <div>
                      <p className="chinese-char text-sm text-[#1a1a1a] font-medium">{pair.exampleSentences.zh1}</p>
                      <p className="text-[#6b7280]">{pair.exampleSentences.vi1}</p>
                    </div>
                    <div className="border-t border-[#e5e1d8]/50 pt-1.5">
                      <p className="chinese-char text-sm text-[#1a1a1a] font-medium">{pair.exampleSentences.zh2}</p>
                      <p className="text-[#6b7280]">{pair.exampleSentences.vi2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
