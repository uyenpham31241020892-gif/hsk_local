import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { dialoguesData, type DialogueTopic, type DialogueLine } from '../../data/dialogues_data';
import { speak } from '../../utils/exercises';
import { Volume2, Play, Pause, Sparkles, MessageCircle, UserCheck, BookOpen, Layers, ArrowLeft } from 'lucide-react';

export function DialoguesView() {
  const { navigate } = useApp();
  const [selectedTopicId, setSelectedTopicId] = useState<string>('dlg_hotpot');
  const [playingLineIdx, setPlayingLineIdx] = useState<number | null>(null);
  const [speedRate, setSpeedRate] = useState<number>(0.85);
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [roleplayMode, setRoleplayMode] = useState<boolean>(false);

  const topic = dialoguesData.find(d => d.id === selectedTopicId) || dialoguesData[0];

  const handlePlayLine = (text: string, idx: number) => {
    setPlayingLineIdx(idx);
    speak(text, speedRate);
    setTimeout(() => {
      setPlayingLineIdx(null);
    }, 2800);
  };

  const handlePlayFullConversation = () => {
    window.speechSynthesis?.cancel();
    let idx = 0;
    const playNext = () => {
      if (idx >= topic.lines.length) {
        setPlayingLineIdx(null);
        return;
      }
      setPlayingLineIdx(idx);
      speak(topic.lines[idx].zh, speedRate);
      idx++;
      setTimeout(playNext, 3400);
    };
    playNext();
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
              <span>💬</span> Hội Thoại & Mẫu Câu Giao Tiếp Thực Tế
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              Luyện nghe hội thoại đời sống, công xưởng & đóng vai nhân vật phản xạ
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        {/* Horizontal Topic Selector Bar */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {dialoguesData.map((d) => (
            <button
              key={d.id}
              onClick={() => {
                setSelectedTopicId(d.id);
                setPlayingLineIdx(null);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                topic.id === d.id
                  ? 'bg-[#4a7c59] text-white shadow-xs scale-105'
                  : 'bg-white border border-[#e5e1d8] text-[#6b7280] hover:border-[#4a7c59]'
              }`}
            >
              <span>{d.emoji}</span>
              <span>{d.titleVi.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Topic Header Card */}
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 shadow-sm space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#4a7c59] bg-[#e8f0eb] px-2.5 py-0.5 rounded-full inline-block">
                {topic.difficulty}
              </span>
              <h2 className="text-xl font-bold text-[#1a1a1a] flex items-center gap-2">
                <span>{topic.emoji}</span> {topic.title}
              </h2>
              <p className="text-xs font-medium text-[#6b7280]">{topic.titleVi}</p>
            </div>

            <button
              onClick={handlePlayFullConversation}
              className="p-3 bg-[#4a7c59] text-white rounded-2xl hover:bg-[#3d6b4a] transition-all flex items-center gap-1.5 text-xs font-bold shadow-xs active:scale-95"
            >
              <Play size={16} fill="white" />
              <span>Nghe toàn bài</span>
            </button>
          </div>

          <p className="text-xs text-[#4b5563] leading-relaxed bg-[#FAF9F6] p-3 rounded-2xl border border-[#e5e1d8]/80">
            {topic.description}
          </p>

          {/* Controls Bar: Pinyin Toggle, Rate, Roleplay Mode */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#e5e1d8]/60 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPinyin(!showPinyin)}
                className={`px-3 py-1.5 rounded-xl border transition-all ${
                  showPinyin
                    ? 'bg-[#e8f0eb] text-[#4a7c59] border-[#4a7c59] font-semibold'
                    : 'bg-white text-[#6b7280] border-[#e5e1d8]'
                }`}
              >
                Pinyin: {showPinyin ? 'Hiện' : 'Ẩn'}
              </button>

              <button
                onClick={() => setRoleplayMode(!roleplayMode)}
                className={`px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1 ${
                  roleplayMode
                    ? 'bg-amber-100 text-amber-800 border-amber-300 font-bold'
                    : 'bg-white text-[#6b7280] border-[#e5e1d8]'
                }`}
              >
                <UserCheck size={14} />
                <span>Đóng vai nhân vật</span>
              </button>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[#6b7280]">Tốc độ:</span>
              <button
                onClick={() => setSpeedRate(speedRate === 0.7 ? 1.0 : 0.7)}
                className="px-2.5 py-1 rounded-lg bg-[#FAF9F6] border border-[#e5e1d8] font-mono font-bold text-[#1a1a1a]"
              >
                {speedRate}x {speedRate === 0.7 ? '(Chậm)' : ''}
              </button>
            </div>
          </div>
        </div>

        {/* Conversation Chat Bubbles */}
        <div className="space-y-4">
          {topic.lines.map((line, idx) => {
            const isMe = line.speaker === '我' || line.speaker === '组长';
            const isPlaying = playingLineIdx === idx;

            return (
              <div
                key={idx}
                className={`flex gap-3 items-start transition-all ${
                  isMe ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#e5e1d8] flex items-center justify-center text-xl shrink-0 shadow-xs">
                  {line.avatar}
                </div>

                {/* Bubble */}
                <div
                  onClick={() => handlePlayLine(line.zh, idx)}
                  className={`p-4 rounded-3xl max-w-[85%] border cursor-pointer transition-all ${
                    isPlaying
                      ? 'border-[#4a7c59] bg-[#e8f0eb]/70 shadow-sm ring-2 ring-[#4a7c59]/20'
                      : isMe
                      ? 'bg-white border-[#e5e1d8] hover:border-[#4a7c59]'
                      : 'bg-white border-[#e5e1d8] hover:border-sky-400'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-[11px] font-bold text-[#6b7280]">
                      {line.speaker} ({line.speakerNameVi})
                    </span>
                    <button className="text-[#6b7280] hover:text-[#4a7c59] p-1">
                      <Volume2 size={16} />
                    </button>
                  </div>

                  <p className="chinese-char text-lg font-normal text-[#1a1a1a] leading-relaxed">
                    {line.zh}
                  </p>

                  {showPinyin && (
                    <p className="text-xs text-[#4a7c59] font-medium mt-0.5">
                      {line.pinyin}
                    </p>
                  )}

                  <p className="text-xs text-[#4b5563] mt-1 pt-1 border-t border-[#e5e1d8]/50">
                    {line.vi}
                  </p>

                  {roleplayMode && isMe && (
                    <div className="mt-2 pt-2 border-t border-dashed border-[#e5e1d8] flex items-center justify-between text-[11px] text-amber-700 font-semibold">
                      <span>🎤 Lượt bạn đọc câu này!</span>
                      <span className="text-[10px] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Nhấn loa nghe lại
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Vocabulary in Topic */}
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 shadow-sm space-y-3">
          <h3 className="font-bold text-sm text-[#1a1a1a] flex items-center gap-2">
            <BookOpen size={16} className="text-[#4a7c59]" />
            Từ vựng đắt giá trong bài hội thoại
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {topic.keyVocab.map((v, i) => (
              <div
                key={i}
                onClick={() => speak(v.word)}
                className="p-3 bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl cursor-pointer hover:border-[#4a7c59] transition-all"
              >
                <div className="flex items-baseline justify-between">
                  <span className="chinese-char text-xl font-medium text-[#1a1a1a]">{v.word}</span>
                  <span className="text-xs font-bold text-[#4a7c59]">{v.pinyin}</span>
                </div>
                <p className="text-xs text-[#4b5563] font-medium mt-0.5">{v.meaning}</p>
                <p className="text-[11px] text-[#6b7280] italic mt-1 bg-white px-2 py-1 rounded-lg border border-[#e5e1d8]/50">
                  Ví dụ: {v.sampleUsage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Tip */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-3xl p-5 space-y-1.5 text-xs text-amber-950">
          <p className="font-bold text-amber-900 flex items-center gap-1.5">
            <Sparkles size={16} className="text-amber-600" />
            Văn hóa & Mẹo giao tiếp thực tế của người bản xứ:
          </p>
          <p className="leading-relaxed text-amber-900">
            {topic.cultureTip}
          </p>
        </div>
      </div>
    </div>
  );
}
