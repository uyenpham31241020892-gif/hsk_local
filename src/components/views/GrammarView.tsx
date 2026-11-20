import React, { useState, useMemo } from 'react';
import { useApp } from '../../store/AppContext';
import { grammarTopics, type GrammarTopicEntry } from '../../data/grammar_topics_data';
import { speak } from '../../utils/exercises';
import { 
  ArrowLeft, 
  Search, 
  BookOpen, 
  Layers, 
  CheckCircle, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export function GrammarView() {
  const { navigate } = useApp();
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTopics = useMemo(() => {
    return grammarTopics.filter((topic) => {
      // Level filter
      if (selectedLevel !== 'all' && topic.level.toUpperCase() !== selectedLevel.toUpperCase()) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && topic.category !== selectedCategory) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return topic.title.toLowerCase().includes(q) || topic.category.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedLevel, selectedCategory, searchQuery]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    grammarTopics.forEach(t => { if (t.category) set.add(t.category); });
    return Array.from(set);
  }, []);

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
              <span>📚</span> Kho Chuyên Đề Ngữ Pháp Toàn Diện
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              229 cấu trúc chuẩn mực từ HSK 1 đến HSK 6 (Trích xuất từ Google Drive cá nhân)
            </p>
          </div>
        </div>

        <span className="text-xs font-bold text-[#4a7c59] bg-[#e8f0eb] px-2.5 py-1 rounded-full">
          {filteredTopics.length} / {grammarTopics.length} mục
        </span>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">
        {/* Search & Filter Card */}
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-4 shadow-xs space-y-3">
          {/* Search Bar */}
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b7280]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm ngữ pháp: câu chữ 把, câu 被, bổ ngữ kết quả, lượng từ..."
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

          {/* Level Filter Tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none font-medium">
            {['all', 'HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'].map((lvl) => {
              const isSelected = selectedLevel === lvl;
              const count = lvl === 'all' 
                ? grammarTopics.length 
                : grammarTopics.filter(t => t.level.toUpperCase() === lvl.toUpperCase()).length;
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#4a7c59] text-white font-bold shadow-2xs'
                      : 'bg-[#FAF9F6] text-[#6b7280] hover:bg-[#e5e1d8]'
                  }`}
                >
                  {lvl === 'all' ? 'Tất cả' : lvl} ({count})
                </button>
              );
            })}
          </div>

          {/* Category Chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-amber-100 text-amber-900 font-bold'
                  : 'text-[#6b7280] hover:bg-neutral-100'
              }`}
            >
              Mọi chủ điểm
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-all capitalize ${
                  selectedCategory === cat
                    ? 'bg-amber-100 text-amber-900 font-bold'
                    : 'text-[#6b7280] hover:bg-neutral-100'
                }`}
              >
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* List of Grammar Topics */}
        <div className="space-y-2.5">
          {filteredTopics.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#e5e1d8] p-4 hover:border-[#4a7c59] transition-all shadow-xs flex items-center justify-between gap-3 group"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    item.level === 'HSK1' ? 'bg-emerald-100 text-emerald-800' :
                    item.level === 'HSK2' ? 'bg-blue-100 text-blue-800' :
                    item.level === 'HSK3' ? 'bg-indigo-100 text-indigo-800' :
                    item.level === 'HSK4' ? 'bg-purple-100 text-purple-800' :
                    item.level === 'HSK5' ? 'bg-amber-100 text-amber-800' :
                    'bg-rose-100 text-rose-800'
                  }`}>
                    {item.level}
                  </span>
                  {item.category && (
                    <span className="text-[10px] bg-[#FAF9F6] text-[#6b7280] border border-[#e5e1d8] px-1.5 py-0.5 rounded">
                      {item.category}
                    </span>
                  )}
                  <span className="text-[11px] text-[#9ca3af]">#{idx + 1}</span>
                </div>

                <p className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors">
                  {item.title}
                </p>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => {
                    // Speak Chinese formula / example if present in title
                    const zhMatch = item.title.match(/[\u4e00-\u9fff]+/g);
                    if (zhMatch) {
                      speak(zhMatch.join(' '));
                    }
                  }}
                  className="p-2 rounded-xl text-[#6b7280] hover:text-[#4a7c59] hover:bg-[#e8f0eb] border border-[#e5e1d8] transition-colors text-xs flex items-center gap-1"
                  title="Nghe phát âm ví dụ"
                >
                  <Sparkles size={14} />
                </button>
              </div>
            </div>
          ))}

          {filteredTopics.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-[#e5e1d8] p-6 text-[#6b7280] space-y-2">
              <p className="text-base font-medium">Không tìm thấy chuyên đề phù hợp</p>
              <p className="text-xs">Hãy thử đổi từ khóa tìm kiếm hoặc chọn cấp HSK khác.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
