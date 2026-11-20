import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../store/AppContext';
import { cultureItems } from '../../data/culture_data';
import type { CultureCategory, CultureItem, CultureLine, CultureKeyword } from '../../types';
import { speak, shuffle } from '../../utils/exercises';
import { 
  Volume2, 
  BookOpen, 
  Sparkles, 
  Film, 
  Music, 
  Flame, 
  Utensils, 
  ChevronRight, 
  X,
  Play,
  Pause,
  Mic,
  Gauge,
  ArrowLeft,
  Upload,
  Radio,
  Headphones,
  ExternalLink,
  RotateCcw,
  Video,
  Search,
  CheckCircle2,
  HelpCircle,
  Trophy
} from 'lucide-react';

function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[1-5\s,\.!?，。！？]/g, '');
}

function isGapCorrect(userVal: string, targetZh: string, targetPinyin: string): boolean {
  if (!userVal || !userVal.trim()) return false;
  const cleanUser = userVal.trim();
  if (cleanUser === targetZh.trim()) return true;
  
  const normUser = normalizeText(cleanUser);
  const normZh = normalizeText(targetZh);
  const normPinyin = normalizeText(targetPinyin);
  
  return normUser === normZh || (normPinyin.length > 0 && normUser === normPinyin);
}

function getLineGapTarget(line: CultureLine, keywords: CultureKeyword[]): {
  targetZh: string;
  targetPinyin: string;
  targetMeaning: string;
  prefixZh: string;
  suffixZh: string;
} {
  const match = keywords.find(k => line.zh.includes(k.word));
  let targetZh = match?.word || '';
  let targetPinyin = match?.pinyin || '';
  let targetMeaning = match?.meaning || '';

  if (!targetZh) {
    const clean = line.zh.replace(/[，。！？、…\s]/g, '');
    if (clean.length >= 4) {
      targetZh = clean.slice(clean.length >= 6 ? 2 : 0, clean.length >= 6 ? 4 : 2);
    } else {
      targetZh = clean.slice(0, Math.min(2, clean.length));
    }
  }

  const parts = line.zh.split(targetZh);
  return {
    targetZh,
    targetPinyin,
    targetMeaning,
    prefixZh: parts[0] || '',
    suffixZh: parts.slice(1).join(targetZh) || '',
  };
}

function getGapOptions(targetZh: string, keywords: CultureKeyword[]): string[] {
  const otherKws = keywords.map(k => k.word).filter(w => w !== targetZh);
  const fallback = ['疯狂', '执着', '喜欢', '我们', '回忆', '阳光', '等待', '离开', '故事', '爱情', '永远', '承诺', '原谅', '温柔'];
  const distractors = fallback.filter(w => w !== targetZh && !otherKws.includes(w));
  const pool = [...otherKws, ...distractors].slice(0, 3);
  return shuffle([targetZh, ...pool]);
}

export function CultureView() {
  const { navigate } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<CultureCategory | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<CultureItem | null>(null);
  const [playingLineIndex, setPlayingLineIndex] = useState<number | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [singSpeed, setSingSpeed] = useState<number>(0.75); // 0.5x, 0.75x, 1.0x

  // View mode & Gap Filling
  const [viewMode, setViewMode] = useState<'lyrics' | 'gap_filling'>('lyrics');
  const [gapAnswers, setGapAnswers] = useState<Record<number, string>>({});
  const [inputMode, setInputMode] = useState<'type' | 'chips'>('type');
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (selectedItem) {
      setCustomYoutubeId(selectedItem.youtubeId || '');
      setViewMode('lyrics');
      setGapAnswers({});
      setShowHints({});
    }
  }, [selectedItem?.id]);
  
  // Custom video/audio states
  const [customMediaUrl, setCustomMediaUrl] = useState<string | null>(null);
  const [customFileName, setCustomFileName] = useState<string | null>(null);
  const [isCustomVideo, setIsCustomVideo] = useState(false);
  const [customYoutubeId, setCustomYoutubeId] = useState<string>('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlInputValue, setUrlInputValue] = useState('');
  
  // Custom Mashup / Compilation URL (stored in localStorage)
  const [mashupUrl, setMashupUrl] = useState<string>(() => {
    return localStorage.getItem('hsk_custom_mashup_url') || '';
  });
  const [showMashupInput, setShowMashupInput] = useState(false);
  const [mashupInputValue, setMashupInputValue] = useState('');
  const [jumpTimestamp, setJumpTimestamp] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement | null>(null);

  const extractYoutubeId = (urlOrId: string): string => {
    if (!urlOrId) return '';
    const trimmed = urlOrId.trim();
    const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
    if (match && match[1]) return match[1];
    if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
    return '';
  };

  const filteredItems = selectedCategory === 'all'
    ? cultureItems
    : cultureItems.filter(item => item.category === selectedCategory);

  const gapCorrectCount = selectedItem
    ? selectedItem.lines.filter((line, idx) => {
        const target = getLineGapTarget(line, selectedItem.keywords);
        return isGapCorrect(gapAnswers[idx] || '', target.targetZh, target.targetPinyin);
      }).length
    : 0;

  // Active YouTube ID resolution:
  // 1. Custom YouTube ID set for this specific item
  // 2. If item has timestampSeconds and user configured a mashup URL, use that mashup ID
  // 3. Fallback to item.youtubeId
  const activeYoutubeId = customYoutubeId 
    ? extractYoutubeId(customYoutubeId) 
    : (selectedItem?.timestampSeconds && mashupUrl ? extractYoutubeId(mashupUrl) : (selectedItem?.youtubeId || ''));

  const activeStartSecond = jumpTimestamp !== null 
    ? jumpTimestamp 
    : (selectedItem?.timestampSeconds || 0);

  const handlePlayLine = (text: string, index: number, rate = singSpeed) => {
    setPlayingLineIndex(index);
    speak(text, rate);
    const duration = Math.max(2000, (text.length * 400) / rate);
    setTimeout(() => {
      setPlayingLineIndex(null);
    }, duration);
  };

  const handleInspectWord = (char: string) => {
    speak(char, 0.6); // slow pronunciation for shadowing
  };

  const handlePlayAllLines = (item: CultureItem) => {
    if (isPlayingAll) {
      window.speechSynthesis?.cancel();
      setIsPlayingAll(false);
      setPlayingLineIndex(null);
      return;
    }

    setIsPlayingAll(true);
    let idx = 0;

    const playNext = () => {
      if (idx >= item.lines.length) {
        setIsPlayingAll(false);
        setPlayingLineIndex(null);
        return;
      }
      setPlayingLineIndex(idx);
      speak(item.lines[idx].zh, singSpeed);
      idx++;
      const waitMs = Math.max(3000, (item.lines[idx - 1].zh.length * 350) / singSpeed + 2500);
      setTimeout(playNext, waitMs);
    };

    playNext();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomMediaUrl(url);
      setCustomFileName(file.name);
      setIsCustomVideo(file.type.startsWith('video/'));
    }
  };

  const handleApplyCustomUrl = () => {
    if (!urlInputValue.trim()) return;
    const vidId = extractYoutubeId(urlInputValue);
    if (vidId) {
      setCustomYoutubeId(vidId);
    }
    setShowUrlInput(false);
  };

  const handleSaveMashupUrl = () => {
    const trimmed = mashupInputValue.trim();
    setMashupUrl(trimmed);
    localStorage.setItem('hsk_custom_mashup_url', trimmed);
    setShowMashupInput(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10 shadow-2xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (selectedItem) {
                window.speechSynthesis?.cancel();
                setIsPlayingAll(false);
                setSelectedItem(null);
                setCustomMediaUrl(null);
                setCustomFileName(null);
                setCustomYoutubeId('');
              } else {
                navigate('home');
              }
            }}
            className="p-1.5 -ml-1 text-[#6b7280] hover:text-[#1a1a1a] rounded-xl hover:bg-[#FAF9F6] transition-colors"
            title="Quay lại"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-base font-bold text-[#1a1a1a] flex items-center gap-2">
              <span>🇨🇳</span> Âm Nhạc Douyin & Luyện Hát Karaoke
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              {selectedItem ? selectedItem.title : 'Vừa nghe nhạc vừa xem Pinyin & luyện đọc từng chữ'}
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        {/* Category Filter Pills (When browsing list) */}
        {!selectedItem && (
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            <CategoryFilterBtn
              active={selectedCategory === 'all'}
              icon={<Sparkles size={14} />}
              label="Tất cả"
              onClick={() => setSelectedCategory('all')}
            />
            <CategoryFilterBtn
              active={selectedCategory === 'music'}
              icon={<Music size={14} />}
              label="🎵 Nhạc có ca sĩ hát"
              onClick={() => setSelectedCategory('music')}
            />
            <CategoryFilterBtn
              active={selectedCategory === 'movie'}
              icon={<Film size={14} />}
              label="🎬 Phim ảnh kinh điển"
              onClick={() => setSelectedCategory('movie')}
            />
            <CategoryFilterBtn
              active={selectedCategory === 'slang'}
              icon={<Flame size={14} />}
              label="🔥 Tiếng lóng Gen Z"
              onClick={() => setSelectedCategory('slang')}
            />
            <CategoryFilterBtn
              active={selectedCategory === 'food'}
              icon={<Utensils size={14} />}
              label="🍲 Ẩm thực & Đời sống"
              onClick={() => setSelectedCategory('food')}
            />
          </div>
        )}

        {/* Selected Culture Detail Reader / Karaoke View */}
        {selectedItem ? (
          <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 sm:p-7 shadow-sm space-y-6 slide-up">
            {/* Header of Detail */}
            <div className="flex items-start justify-between border-b border-[#e5e1d8] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#e8f0eb] text-[#4a7c59] rounded-full inline-block">
                  {selectedItem.tag}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] flex items-center gap-2 mt-1">
                  <span>{selectedItem.emoji}</span>
                  {selectedItem.title}
                </h2>
                <p className="text-sm text-[#4a7c59] font-medium">{selectedItem.titleVi}</p>
                <p className="text-xs text-[#6b7280]">Trình bày / Tác giả: <strong>{selectedItem.authorOrSource}</strong></p>
              </div>

              <button
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setIsPlayingAll(false);
                  setSelectedItem(null);
                  setCustomMediaUrl(null);
                  setCustomFileName(null);
                  setCustomYoutubeId('');
                }}
                className="p-2 rounded-xl hover:bg-[#FAF9F6] border border-[#e5e1d8] text-[#6b7280] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Cultural Story / Background */}
            <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 text-xs sm:text-sm text-[#1a1a1a] leading-relaxed">
              <p className="font-bold text-[#4a7c59] mb-1 flex items-center gap-1.5 text-xs">
                <BookOpen size={14} /> Ý nghĩa & Bối cảnh bài hát:
              </p>
              {selectedItem.story}
            </div>

            {/* ─── GẮN VIDEO / AUDIO KARAOKE VÀO LUÔN TRÊN LỜI BÀI HÁT ─── */}
            <div className="space-y-3 bg-[#FAF9F6] p-4 rounded-3xl border border-[#e5e1d8]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <h3 className="font-bold text-xs sm:text-sm text-[#1a1a1a] flex items-center gap-1.5">
                    <Radio size={15} className="text-red-500" />
                    Video / Bản Nhạc Karaoke Có Ca Sĩ Hát:
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {/* YouTube Search Direct Link - Always 100% Works */}
                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedItem.title + ' ' + (selectedItem.authorOrSource || '') + ' vietsub pinyin')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] bg-[#e8f0eb] hover:bg-[#d4e4d9] text-[#4a7c59] px-2.5 py-1 rounded-xl border border-[#4a7c59]/20 flex items-center gap-1 font-semibold transition-colors"
                    title="Mở tìm kiếm video vietsub pinyin bài hát này trên YouTube"
                  >
                    <Search size={12} />
                    <span>Mở YouTube (Chuẩn 100%)</span>
                  </a>

                  {activeYoutubeId && (
                    <a
                      href={`https://www.youtube.com/watch?v=${activeYoutubeId}${activeStartSecond ? `&t=${activeStartSecond}s` : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#4a7c59] hover:underline bg-white px-2.5 py-1 rounded-xl border border-[#e5e1d8] flex items-center gap-1 font-medium"
                      title="Mở tab mới trên YouTube"
                    >
                      <span>Mở link bài</span>
                      <ExternalLink size={12} />
                    </a>
                  )}

                  <button
                    onClick={() => setShowUrlInput(!showUrlInput)}
                    className="text-[11px] text-[#6b7280] hover:text-[#1a1a1a] bg-white px-2.5 py-1 rounded-xl border border-[#e5e1d8]"
                  >
                    Đổi video khác
                  </button>

                  <button
                    onClick={() => setShowMashupInput(!showMashupInput)}
                    className="text-[11px] text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-xl border border-amber-200 font-medium"
                    title="Gắn link video tuyển tập / mashup YouTube"
                  >
                    {mashupUrl ? '🎶 Mashup đã lưu' : '➕ Link Tuyển tập'}
                  </button>
                </div>
              </div>

              {/* Timestamp Banner if available */}
              {selectedItem.timestamp && selectedItem.timestampSeconds !== undefined && (
                <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-amber-50/90 border border-amber-200 rounded-2xl text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-amber-900">
                      ⏱️ Đoạn hát trong video tuyển tập:
                    </span>
                    <span className="bg-amber-200 text-amber-900 px-2 py-0.5 rounded-lg font-mono font-bold">
                      {selectedItem.timestamp} ({selectedItem.timestampSeconds}s)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setJumpTimestamp(selectedItem.timestampSeconds ?? 0)}
                      className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold flex items-center gap-1 transition-colors shadow-2xs"
                    >
                      <Play size={12} />
                      <span>Nhảy ngay đến {selectedItem.timestamp}</span>
                    </button>
                    {activeYoutubeId && (
                      <a
                        href={`https://www.youtube.com/watch?v=${activeYoutubeId}&t=${selectedItem.timestampSeconds}s`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-800 hover:underline flex items-center gap-1 font-medium text-[11px]"
                      >
                        <span>Mở tab YouTube đúng đoạn này</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Paste custom YouTube ID / Link drawer */}
              {showUrlInput && (
                <div className="p-3 bg-white rounded-2xl border border-[#e5e1d8] flex items-center gap-2 text-xs">
                  <input
                    type="text"
                    value={urlInputValue}
                    onChange={(e) => setUrlInputValue(e.target.value)}
                    placeholder="Dán link hoặc ID YouTube bài hát bạn thích..."
                    className="flex-1 p-2 bg-[#FAF9F6] border border-[#e5e1d8] rounded-xl text-xs focus:outline-none focus:border-[#4a7c59]"
                  />
                  <button
                    onClick={handleApplyCustomUrl}
                    className="px-3 py-2 bg-[#4a7c59] text-white rounded-xl font-bold shrink-0 text-xs"
                  >
                    Gắn vào
                  </button>
                </div>
              )}

              {/* Mashup URL Drawer */}
              {showMashupInput && (
                <div className="p-3 bg-white rounded-2xl border border-amber-200 space-y-2 text-xs">
                  <p className="text-[11px] text-[#6b7280]">
                    Dán link video Tuyển tập / Mashup YouTube của bạn. Tất cả các bài có mốc thời gian (như [09:04], [12:05], [15:59], [20:42]) sẽ tự động phát đúng đoạn từ video này!
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={mashupInputValue}
                      onChange={(e) => setMashupInputValue(e.target.value)}
                      placeholder={mashupUrl || "Dán link YouTube tuyển tập (ví dụ: https://youtube.com/watch?v=...)"}
                      className="flex-1 p-2 bg-[#FAF9F6] border border-[#e5e1d8] rounded-xl text-xs focus:outline-none focus:border-[#4a7c59]"
                    />
                    <button
                      onClick={handleSaveMashupUrl}
                      className="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold shrink-0 text-xs"
                    >
                      Lưu video này
                    </button>
                  </div>
                  {mashupUrl && (
                    <div className="flex items-center justify-between text-[11px] pt-1">
                      <span className="text-emerald-700 font-medium truncate max-w-xs">
                        Đang dùng: {mashupUrl}
                      </span>
                      <button
                        onClick={() => {
                          setMashupUrl('');
                          localStorage.removeItem('hsk_custom_mashup_url');
                        }}
                        className="text-red-600 hover:underline"
                      >
                        Xóa link Mashup
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Local Media (MP4/MP3) if uploaded */}
              {customMediaUrl ? (
                <div className="space-y-2">
                  {isCustomVideo ? (
                    <video
                      src={customMediaUrl}
                      controls
                      className="w-full rounded-2xl max-h-72 bg-black border border-[#e5e1d8]"
                    />
                  ) : (
                    <div className="bg-white p-4 rounded-2xl border border-[#e5e1d8] space-y-2">
                      <p className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                        <Music size={14} /> Đang phát nhạc từ máy: {customFileName}
                      </p>
                      <audio src={customMediaUrl} controls className="w-full h-10" />
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setCustomMediaUrl(null);
                      setCustomFileName(null);
                    }}
                    className="text-[11px] text-red-600 hover:underline"
                  >
                    Bỏ file này, dùng lại bản gốc
                  </button>
                </div>
              ) : (
                /* YouTube Embedded Player with fallback notice */
                activeYoutubeId && (
                  <div className="space-y-2">
                    <div className="relative w-full rounded-2xl overflow-hidden aspect-video border border-[#e5e1d8] shadow-sm bg-black">
                      <iframe
                        key={`${activeYoutubeId}_${activeStartSecond}`}
                        src={`https://www.youtube.com/embed/${activeYoutubeId}?rel=0&autoplay=0&enablejsapi=1${activeStartSecond > 0 ? `&start=${activeStartSecond}` : ''}`}
                        title={selectedItem.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>

                    {/* Quick Alternate Video Version Switcher (Lyrics / Kara / Vietsub) */}
                    {selectedItem.alternateYoutubeIds && selectedItem.alternateYoutubeIds.length > 1 && (
                      <div className="flex flex-wrap items-center gap-1.5 p-2 bg-white rounded-xl border border-[#e5e1d8] text-xs">
                        <span className="text-[11px] font-bold text-[#6b7280]">
                          🎬 Bản video Karaoke / Lyrics khác:
                        </span>
                        {selectedItem.alternateYoutubeIds.map((altId, altIdx) => (
                          <button
                            key={altId}
                            onClick={() => setCustomYoutubeId(altId)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                              activeYoutubeId === altId
                                ? 'bg-[#4a7c59] text-white shadow-2xs font-bold'
                                : 'bg-[#FAF9F6] border border-[#e5e1d8] text-[#1a1a1a] hover:border-[#4a7c59]'
                            }`}
                          >
                            {altIdx === 0 ? 'Bản Vietsub chính' : `Bản dự phòng ${altIdx}`}
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between text-[11px] text-[#6b7280] px-1 gap-2">
                      <span>💡 <em>Vừa bật nhạc video chạy vừa nhìn lời bài hát bên dưới để hát theo!</em></span>
                      <a
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedItem.title + ' ' + (selectedItem.authorOrSource || '') + ' vietsub pinyin')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-800 hover:underline font-semibold flex items-center gap-1"
                      >
                        Gặp lỗi "Video không có sẵn"? Bấm tìm bản đẹp trên YouTube ➔
                      </a>
                    </div>
                  </div>
                )
              )}

              {/* Local File Picker (Cho phép chọn file MP3 / MP4 từ máy E:\1) */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#e5e1d8]/60 text-xs">
                <span className="text-[#6b7280] text-[11px]">
                  Hoặc phát file MP3 / MP4 có sẵn trên máy tính của bạn:
                </span>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="audio/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 bg-white border border-[#e5e1d8] hover:border-[#4a7c59] rounded-xl text-xs font-semibold text-[#1a1a1a] flex items-center gap-1.5 transition-all shadow-2xs"
                >
                  <Upload size={13} className="text-[#4a7c59]" />
                  <span>{customFileName ? 'Đổi file khác' : 'Chọn file MP3/MP4 từ máy'}</span>
                </button>
              </div>
            </div>

            {/* ─── THANH ĐIỀU KHIỂN LUYỆN ĐỌC CHẬM (SHADOWING) ─── */}
            <div className="bg-[#e8f0eb]/70 border border-[#4a7c59]/20 rounded-2xl p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Mic size={17} className="text-[#4a7c59]" />
                  <span className="text-xs font-bold text-[#1a1a1a]">
                    Chế độ Luyện Đọc Chậm (Nhại theo từng câu):
                  </span>
                </div>

                {/* Speed selector */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#e5e1d8]">
                  <span className="text-[11px] text-[#6b7280] px-1 flex items-center gap-0.5">
                    <Gauge size={12} /> Tốc độ nhại:
                  </span>
                  {[0.5, 0.75, 1.0].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setSingSpeed(rate)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-bold transition-all ${
                        singSpeed === rate
                          ? 'bg-[#4a7c59] text-white shadow-xs'
                          : 'text-[#6b7280] hover:text-[#1a1a1a]'
                      }`}
                    >
                      {rate === 0.5 ? 'Chậm 0.5x' : rate === 0.75 ? 'Vừa 0.75x' : 'Chuẩn 1.0x'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <p className="text-[11px] text-[#4a7c59]">
                  💡 <em>Máy đọc chậm từng câu rồi dừng 2.5s để bạn nhại theo. Bấm vào từng chữ để nghe riêng chữ đó!</em>
                </p>
                <button
                  onClick={() => handlePlayAllLines(selectedItem)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs shrink-0 ${
                    isPlayingAll
                      ? 'bg-red-500 text-white animate-pulse'
                      : 'bg-[#4a7c59] text-white hover:bg-[#3d6b4a]'
                  }`}
                >
                  {isPlayingAll ? <Pause size={14} /> : <Play size={14} />}
                  {isPlayingAll ? 'Dừng đọc nhại' : 'Bật đọc chậm từng câu'}
                </button>
              </div>
            </div>

            {/* ─── TABS CHỌN CHẾ ĐỘ: LỜI BÀI HÁT vs ĐIỀN TỪ THEO NHẠC ─── */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#e5e1d8] pb-3">
              <button
                onClick={() => setViewMode('lyrics')}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                  viewMode === 'lyrics'
                    ? 'bg-[#4a7c59] text-white shadow-xs'
                    : 'bg-white border border-[#e5e1d8] text-[#6b7280] hover:text-[#1a1a1a]'
                }`}
              >
                <BookOpen size={14} />
                <span>📜 Lời Bài Hát & Pinyin</span>
              </button>

              <button
                onClick={() => setViewMode('gap_filling')}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                  viewMode === 'gap_filling'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-amber-50 border border-amber-200 text-amber-900 hover:bg-amber-100'
                }`}
              >
                <span>✍️ Vừa Nghe Nhạc Vừa Điền Từ (Gap-Filling)</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  viewMode === 'gap_filling' ? 'bg-white text-amber-700' : 'bg-amber-200 text-amber-900'
                }`}>
                  {gapCorrectCount}/{selectedItem.lines.length} câu
                </span>
              </button>
            </div>

            {/* ─── NỘI DUNG THEO TAB ─── */}
            {viewMode === 'gap_filling' ? (
              /* CHẾ ĐỘ THỬ THÁCH ĐIỀN TỪ THEO NHẠC */
              <div className="space-y-4">
                {/* Header bar of Gap Filling */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-amber-900 flex items-center gap-1.5">
                      <span>🎧</span> Thử Thách Vừa Nghe Vừa Điền Lời Bài Hát
                    </h3>
                    <p className="text-xs text-amber-800 mt-0.5">
                      Bật video chạy ở trên hoặc bấm nút loa từng câu để nghe hát, sau đó điền từ còn thiếu vào chỗ trống!
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Toggle input mode: Type vs Chips */}
                    <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-amber-200 text-xs">
                      <button
                        onClick={() => setInputMode('type')}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                          inputMode === 'type' ? 'bg-amber-600 text-white shadow-2xs' : 'text-[#6b7280]'
                        }`}
                      >
                        ⌨️ Tự gõ (Hán tự/Pinyin)
                      </button>
                      <button
                        onClick={() => setInputMode('chips')}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                          inputMode === 'chips' ? 'bg-amber-600 text-white shadow-2xs' : 'text-[#6b7280]'
                        }`}
                      >
                        🔤 Chọn từ gợi ý
                      </button>
                    </div>

                    <button
                      onClick={() => { setGapAnswers({}); setShowHints({}); }}
                      className="px-3 py-1.5 rounded-xl border border-amber-200 bg-white text-xs font-semibold text-amber-800 hover:bg-amber-100 flex items-center gap-1"
                      title="Xóa hết đáp án làm lại từ đầu"
                    >
                      <RotateCcw size={12} />
                      <span>Làm lại</span>
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="bg-white border border-[#e5e1d8] rounded-2xl p-3 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1a1a1a]">Tiến độ nghe điền lời:</span>
                    <span className="font-bold text-[#4a7c59]">
                      {gapCorrectCount} / {selectedItem.lines.length} câu hoàn thành ({Math.round((gapCorrectCount / selectedItem.lines.length) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full bg-[#FAF9F6] h-2.5 rounded-full overflow-hidden border border-[#e5e1d8]">
                    <div 
                      className="bg-[#4a7c59] h-full transition-all duration-300"
                      style={{ width: `${(gapCorrectCount / selectedItem.lines.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Lines list with interactive blank slots */}
                <div className="space-y-3">
                  {selectedItem.lines.map((line, idx) => {
                    const target = getLineGapTarget(line, selectedItem.keywords);
                    const userAns = gapAnswers[idx] || '';
                    const isCorrect = isGapCorrect(userAns, target.targetZh, target.targetPinyin);
                    const options = getGapOptions(target.targetZh, selectedItem.keywords);
                    const isHintOpen = !!showHints[idx];

                    return (
                      <div
                        key={idx}
                        className={`rounded-2xl border p-4 transition-all space-y-3 ${
                          isCorrect
                            ? 'bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-400'
                            : userAns
                            ? 'bg-amber-50/40 border-amber-300'
                            : 'bg-white border-[#e5e1d8]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-2 flex-1">
                            {/* Sentence with Gap */}
                            <div className="chinese-char text-xl font-medium text-[#1a1a1a] flex flex-wrap items-center gap-1.5">
                              <span className="text-xs font-mono font-bold text-[#b5b2ab] mr-1">#{idx + 1}</span>
                              <span>{target.prefixZh}</span>
                              
                              {/* The Gap Slot */}
                              {inputMode === 'type' ? (
                                <input
                                  type="text"
                                  value={userAns}
                                  disabled={isCorrect}
                                  onChange={(e) => setGapAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                                  placeholder={isHintOpen ? (target.targetPinyin || '...') : '______'}
                                  className={`px-2.5 py-1 text-lg rounded-xl border font-bold text-center min-w-[100px] max-w-[160px] focus:outline-none transition-all ${
                                    isCorrect
                                      ? 'bg-emerald-100 border-emerald-400 text-emerald-800'
                                      : userAns
                                      ? 'bg-white border-amber-400 text-amber-900'
                                      : 'bg-[#FAF9F6] border-[#d1cfc9] text-[#1a1a1a] focus:border-[#4a7c59]'
                                  }`}
                                />
                              ) : (
                                <span className={`px-3 py-1 rounded-xl border font-bold min-w-[90px] text-center inline-block transition-all ${
                                  isCorrect
                                    ? 'bg-emerald-100 border-emerald-400 text-emerald-800'
                                    : userAns
                                    ? 'bg-amber-100 border-amber-400 text-amber-900'
                                    : 'bg-[#FAF9F6] border-dashed border-[#d1cfc9] text-[#b5b2ab]'
                                }`}>
                                  {userAns || '______'}
                                </span>
                              )}

                              <span>{target.suffixZh}</span>

                              {isCorrect && (
                                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                  <CheckCircle2 size={13} /> Chuẩn!
                                </span>
                              )}
                            </div>

                            {/* Subtext info */}
                            <div className="text-xs space-y-1">
                              <p className="text-[#6b7280] italic">
                                Nghĩa câu: {line.vi}
                              </p>
                              {isHintOpen && (
                                <p className="text-[11px] text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                                  💡 Gợi ý từ cần điền: <strong>{target.targetPinyin}</strong> {target.targetMeaning ? `(${target.targetMeaning})` : ''} · Chữ Hán: <strong>{target.targetZh}</strong>
                                </p>
                              )}
                            </div>

                            {/* Chip picker mode */}
                            {inputMode === 'chips' && !isCorrect && (
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {options.map((opt, optIdx) => (
                                  <button
                                    key={optIdx}
                                    onClick={() => setGapAnswers(prev => ({ ...prev, [idx]: opt }))}
                                    className={`chinese-char text-base px-3 py-1.5 rounded-xl border transition-all ${
                                      userAns === opt
                                        ? 'bg-[#4a7c59] text-white border-[#4a7c59] shadow-2xs'
                                        : 'bg-[#FAF9F6] border-[#e5e1d8] text-[#1a1a1a] hover:border-[#4a7c59]'
                                    }`}
                                  >
                                    {opt}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Actions per line */}
                          <div className="flex flex-col gap-1.5 shrink-0">
                            <button
                              onClick={() => handlePlayLine(line.zh, idx, singSpeed)}
                              className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59] transition-colors"
                              title="Bấm để nghe đọc lại câu này"
                            >
                              <Volume2 size={16} />
                            </button>
                            {!isCorrect && (
                              <button
                                onClick={() => setShowHints(prev => ({ ...prev, [idx]: !prev[idx] }))}
                                className="p-2 rounded-xl border border-[#e5e1d8] hover:bg-amber-50 text-amber-700 transition-colors"
                                title="Bấm để xem gợi ý Pinyin"
                              >
                                <HelpCircle size={16} />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 100% Completion Celebration Banner */}
                {gapCorrectCount === selectedItem.lines.length && selectedItem.lines.length > 0 && (
                  <div className="p-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl text-white text-center space-y-3 shadow-md slide-up">
                    <div className="text-4xl">🎉 🏆</div>
                    <h3 className="text-xl font-extrabold">Đỉnh chóp! Bạn đã nghe và điền đúng 100% lời bài hát!</h3>
                    <p className="text-xs text-white/90 max-w-md mx-auto">
                      Khả năng bắt nhịp âm thanh và nhận diện chữ Hán của bạn rất xuất sắc. Hãy bật video lên và hát thử cùng ca sĩ nhé!
                    </p>
                    <button
                      onClick={() => setViewMode('lyrics')}
                      className="px-6 py-2.5 bg-white text-emerald-800 font-bold rounded-xl hover:bg-white/90 transition-all text-xs shadow-sm"
                    >
                      Quay lại luyện hát theo video ➔
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* CHẾ ĐỘ XEM LỜI BÀI HÁT & PINYIN (GỐC) */
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#1a1a1a] flex items-center gap-2">
                    <span>📜</span> Lời bài hát & Pinyin (Vừa nghe video vừa nhép theo):
                  </h3>
                  <span className="text-[11px] text-[#6b7280]">Chạm từng chữ để nghe phát âm</span>
                </div>

                <div className="space-y-2.5">
                  {selectedItem.lines.map((line, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl border p-4 transition-all flex items-start justify-between gap-3 ${
                        playingLineIndex === idx
                          ? 'border-[#4a7c59] bg-[#e8f0eb]/50 shadow-xs ring-2 ring-[#4a7c59]'
                          : 'border-[#e5e1d8] bg-white hover:border-[#4a7c59]/50'
                      }`}
                    >
                      <div className="space-y-1.5 flex-1">
                        {/* Interactive Chinese Characters */}
                        <div className="flex flex-wrap gap-1 items-center">
                          {line.zh.split('').map((ch, charIdx) => {
                            const isPunct = /[，。！？、…\s]/.test(ch);
                            if (isPunct) {
                              return <span key={charIdx} className="chinese-char text-lg text-[#6b7280]">{ch}</span>;
                            }
                            return (
                              <button
                                key={charIdx}
                                onClick={() => handleInspectWord(ch)}
                                className="chinese-char text-xl font-medium text-[#1a1a1a] px-1 py-0.5 rounded hover:bg-[#4a7c59] hover:text-white transition-colors cursor-pointer"
                                title="Bấm để nghe phát âm chữ này"
                              >
                                {ch}
                              </button>
                            );
                          })}
                        </div>

                        {/* Pinyin */}
                        <p className="text-xs text-[#4a7c59] font-bold tracking-wider">
                          {line.pinyin}
                        </p>

                        {/* Translation */}
                        <p className="text-xs text-[#4b5563] pt-0.5 border-t border-[#e5e1d8]/50">
                          {line.vi}
                        </p>
                      </div>

                      <div className="flex flex-col gap-1 shrink-0">
                        <button
                          onClick={() => handlePlayLine(line.zh, idx, singSpeed)}
                          className={`p-2.5 rounded-xl border transition-colors ${
                            playingLineIndex === idx
                              ? 'bg-[#4a7c59] text-white border-[#4a7c59]'
                              : 'border-[#e5e1d8] hover:bg-[#e8f0eb] text-[#4a7c59]'
                          }`}
                          title="Nghe mẫu phát âm câu này"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vocabulary & Slang Spotlight */}
            <div className="space-y-3 pt-3 border-t border-[#e5e1d8]">
              <h3 className="text-sm font-bold text-[#1a1a1a] flex items-center gap-2">
                <span>💡</span> Từ vựng trọng điểm & Điểm ngữ pháp trong bài:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedItem.keywords.map((kw, i) => (
                  <div
                    key={i}
                    onClick={() => speak(kw.word, singSpeed)}
                    className="p-3 bg-[#FAF9F6] border border-[#e5e1d8] rounded-xl hover:border-[#4a7c59] cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="chinese-char text-base font-semibold text-[#1a1a1a] group-hover:text-[#4a7c59]">
                        {kw.word}
                      </span>
                      <span className="text-xs text-[#4a7c59] font-medium">{kw.pinyin}</span>
                    </div>
                    <p className="text-xs text-[#1a1a1a] font-medium mt-1">{kw.meaning}</p>
                    {kw.note && (
                      <p className="text-[11px] text-[#6b7280] italic mt-0.5">{kw.note}</p>
                    )}
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
                  setSelectedItem(null);
                  setCustomMediaUrl(null);
                  setCustomFileName(null);
                  setCustomYoutubeId('');
                }}
                className="px-6 py-2.5 rounded-xl border border-[#e5e1d8] text-xs font-bold text-[#6b7280] hover:bg-[#FAF9F6] transition-colors"
              >
                Quay lại danh sách bài hát
              </button>
            </div>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 gap-3.5">
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-3xl border border-[#e5e1d8] p-5 hover:border-[#4a7c59] hover:shadow-xs cursor-pointer transition-all group flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl p-3 bg-[#FAF9F6] rounded-2xl group-hover:scale-110 transition-transform border border-[#e5e1d8]/50 shrink-0">
                    {item.emoji}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-[#e8f0eb] text-[#4a7c59] rounded-full">
                        {item.tag}
                      </span>
                      <span className="text-xs text-[#6b7280]">
                        {item.authorOrSource}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4a7c59] font-medium">
                      {item.titleVi}
                    </p>
                    <p className="text-xs text-[#6b7280] line-clamp-2 leading-relaxed mt-1">
                      {item.story}
                    </p>
                  </div>
                </div>

                <div className="self-center p-2 rounded-xl text-[#b5b2ab] group-hover:text-[#4a7c59] group-hover:translate-x-1 transition-all shrink-0">
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

function CategoryFilterBtn({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
        active
          ? 'bg-[#4a7c59] text-white shadow-xs'
          : 'bg-white border border-[#e5e1d8] text-[#6b7280] hover:border-[#4a7c59]'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
