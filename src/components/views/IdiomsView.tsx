import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { idiomStories, type IdiomStory } from '../../data/idiom_stories_data';
import { speak } from '../../utils/exercises';
import { Volume2, BookOpen, Sparkles, ChevronRight, X, Play, Pause, Award, ArrowLeft } from 'lucide-react';

export function IdiomsView() {
  const { navigate } = useApp();
  const [selectedIdiom, setSelectedIdiom] = useState<IdiomStory | null>(null);
  const [playingLineIdx, setPlayingLineIdx] = useState<number | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  const handlePlayLine = (text: string, idx: number) => {
    setPlayingLineIdx(idx);
    speak(text);
    setTimeout(() => setPlayingLineIdx(null), 2500);
  };

  const handlePlayAll = (story: IdiomStory) => {
    if (isPlayingAll) {
      window.speechSynthesis?.cancel();
      setIsPlayingAll(false);
      setPlayingLineIdx(null);
      return;
    }

    setIsPlayingAll(true);
    let i = 0;

    const playNext = () => {
      if (i >= story.storyLines.length) {
        setIsPlayingAll(false);
        setPlayingLineIdx(null);
        return;
      }
      setPlayingLineIdx(i);
      speak(story.storyLines[i].zh, 0.8);
      i++;
      setTimeout(playNext, 3500);
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
              <span>📜</span> Đọc Truyện Thành Ngữ (成语故事)
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              Học tiếng Trung qua điển cố lịch sử · Vừa giỏi chữ vừa thấu hiểu văn hóa
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        {selectedIdiom ? (
          /* Idiom Detail Story View */
          <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 sm:p-7 shadow-sm space-y-6 slide-up">
            <div className="flex items-start justify-between border-b border-[#e5e1d8] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold px-2.5 py-0.5 bg-[#e8f0eb] text-[#4a7c59] rounded-full">
                  HSK Cấp {selectedIdiom.hskLevel}
                </span>
                <h2 className="chinese-char text-3xl font-bold text-[#1a1a1a] mt-1 tracking-wide">
                  {selectedIdiom.idiom}
                </h2>
                <p className="text-sm font-semibold text-[#4a7c59]">{selectedIdiom.pinyin}</p>
                <p className="text-xs text-[#6b7280]">Hán Việt: {selectedIdiom.hanViet}</p>
                <p className="text-sm font-medium text-[#1a1a1a] mt-1">{selectedIdiom.meaningVi}</p>
              </div>

              <button
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setIsPlayingAll(false);
                  setSelectedIdiom(null);
                }}
                className="p-2 rounded-xl hover:bg-[#FAF9F6] border border-[#e5e1d8] text-[#6b7280]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Moral Lesson */}
            <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl p-4 text-xs leading-relaxed">
              <p className="font-bold mb-1 flex items-center gap-1.5">
                <Award size={14} className="text-amber-600" /> Bài học triết lý nhân sinh:
              </p>
              {selectedIdiom.moralLesson}
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between bg-[#e8f0eb]/70 rounded-2xl p-3">
              <span className="text-xs text-[#4a7c59] font-medium">
                🎧 Nghe toàn bộ câu chuyện:
              </span>
              <button
                onClick={() => handlePlayAll(selectedIdiom)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shadow-xs ${
                  isPlayingAll
                    ? 'bg-red-500 text-white'
                    : 'bg-[#4a7c59] text-white hover:bg-[#3d6b4a]'
                }`}
              >
                {isPlayingAll ? <Pause size={14} /> : <Play size={14} />}
                {isPlayingAll ? 'Tạm dừng' : 'Kể chuyện Audio'}
              </button>
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-[#1a1a1a]">Nội dung truyện tích:</p>
              <div className="space-y-2.5">
                {selectedIdiom.storyLines.map((line, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border p-4 transition-all flex items-start justify-between gap-3 ${
                      playingLineIdx === idx
                        ? 'border-[#4a7c59] bg-[#e8f0eb]/40 shadow-xs ring-1 ring-[#4a7c59]'
                        : 'border-[#e5e1d8] bg-white hover:border-[#4a7c59]/40'
                    }`}
                  >
                    <div className="space-y-1 flex-1">
                      <p className="chinese-char text-base font-medium text-[#1a1a1a] leading-relaxed">
                        {line.zh}
                      </p>
                      <p className="text-xs text-[#4a7c59] font-semibold">{line.pinyin}</p>
                      <p className="text-xs text-[#6b7280]">{line.vi}</p>
                    </div>

                    <button
                      onClick={() => handlePlayLine(line.zh, idx)}
                      className={`p-2 rounded-xl border shrink-0 ${
                        playingLineIdx === idx
                          ? 'bg-[#4a7c59] text-white border-[#4a7c59]'
                          : 'border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59]'
                      }`}
                      title="Nghe câu này"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setIsPlayingAll(false);
                  setSelectedIdiom(null);
                }}
                className="px-6 py-2.5 rounded-xl border border-[#e5e1d8] text-sm text-[#6b7280] hover:bg-[#FAF9F6] transition-colors"
              >
                Quay lại danh sách truyện
              </button>
            </div>
          </div>
        ) : (
          /* Idioms List */
          <div className="space-y-3.5">
            {idiomStories.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedIdiom(story)}
                className="bg-white rounded-3xl border border-[#e5e1d8] p-5 hover:border-[#4a7c59] hover:shadow-sm cursor-pointer transition-all group flex items-start justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 bg-[#e8f0eb] text-[#4a7c59] rounded-full">
                      HSK {story.hskLevel}
                    </span>
                    <span className="text-xs text-[#6b7280]">{story.pinyin}</span>
                  </div>
                  <h3 className="chinese-char text-2xl font-bold text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors">
                    {story.idiom}
                  </h3>
                  <p className="text-xs font-semibold text-[#4a7c59]">{story.meaningVi}</p>
                  <p className="text-xs text-[#6b7280] line-clamp-2 leading-relaxed">
                    {story.moralLesson}
                  </p>
                </div>

                <div className="self-center p-2 rounded-xl text-[#b5b2ab] group-hover:text-[#4a7c59] group-hover:translate-x-1 transition-all">
                  <ChevronRight size={20} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
