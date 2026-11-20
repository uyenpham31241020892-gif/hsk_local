import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { getStats } from '../../utils/srs';
import { 
  ArrowLeft, BookOpen, Layers, Sparkles, Volume2, 
  MessageSquare, Search, Award, Flame, Sliders, ChevronRight
} from 'lucide-react';

export function HubView() {
  const { state, navigate } = useApp();
  const stats = getStats(state.progress);
  const [activeCategoryTab, setActiveCategoryTab] = useState<'all' | 'curriculum' | 'tools' | 'practice'>('all');

  const learningModules = [
    {
      id: 'hsk2',
      title: 'Giáo trình HSK 1–6 (2.0)',
      sub: 'Học chuẩn quốc tế 5.000 từ, tích hợp 8 dạng bài cuốn chiếu',
      countText: '150 bài học',
      emoji: '📘',
      category: 'curriculum',
      badge: 'Chuẩn gốc',
      action: () => navigate('home')
    },
    {
      id: 'hsk3',
      title: 'Giáo trình HSK 3.0 Mới',
      sub: 'Khung chương trình HSK 3.0 (Cấp 1–9) chuẩn quốc gia mới nhất',
      countText: '180 bài học',
      emoji: '🎓',
      category: 'curriculum',
      badge: 'MỚI NHẤT',
      badgeColor: 'amber',
      action: () => navigate('home')
    },
    {
      id: 'grammar',
      title: '229 Chuyên Đề Ngữ Pháp Toàn Diện (HSK 1–6)',
      sub: 'Kho chuyên đề chuẩn mực: Câu chữ 把, câu bị động 被, bổ ngữ, liên từ...',
      countText: '229 chuyên đề',
      emoji: '📖',
      category: 'curriculum',
      badge: 'Tài liệu Drive',
      badgeColor: 'emerald',
      action: () => navigate('grammar')
    },
    {
      id: 'etymology',
      title: 'Cây Gia Phả Chữ Hán (Học 1 nhớ 10)',
      sub: 'Họ chữ Hình thanh (Bao, Thanh, Da, Ba...) & 12 Cặp sinh đôi lệch 1 nét',
      countText: 'Bóc tách chiết tự',
      emoji: '🌳',
      category: 'tools',
      badge: 'Khuyên dùng',
      action: () => navigate('etymology')
    },
    {
      id: 'radicals',
      title: '214 Bộ Thủ Chữ Hán (部首)',
      sub: 'Nắm vững 214 bộ thủ kèm hình ảnh chiết tự, câu chuyện và thứ tự nét viết',
      countText: '214 bộ thủ',
      emoji: '🧩',
      category: 'tools',
      action: () => navigate('radicals')
    },
    {
      id: 'measures',
      title: 'Cẩm Nang Lượng Từ (量词)',
      sub: 'Tổng hợp lượng từ phổ biến kèm quy tắc ghép chuẩn xác & mini quiz',
      countText: '45 lượng từ',
      emoji: '📦',
      category: 'tools',
      action: () => navigate('measures')
    },
    {
      id: 'idioms',
      title: 'Đọc Truyện Thành Ngữ (成语)',
      sub: 'Điển cố lịch sử kinh điển (Ếch đáy giếng, Ôm cây đợi thỏ) kèm audio',
      countText: 'Kho thành ngữ',
      emoji: '📜',
      category: 'tools',
      badge: 'HSK 1-6',
      action: () => navigate('idioms')
    },
    {
      id: 'pinyin',
      title: 'Lộ Trình Ngữ Âm Pinyin',
      sub: 'Bảng 23 thanh mẫu, 24 vận mẫu & 4 thanh điệu kèm audio bản xứ',
      countText: 'Từ con số 0',
      emoji: '🗣️',
      category: 'tools',
      action: () => navigate('pinyin_chart')
    },
    {
      id: 'dialogues',
      title: 'Hội Thoại & Mẫu Câu Thực Tế',
      sub: 'Tình huống đời sống: Gọi món lẩu, trà sữa, mua sắm trả giá, công xưởng',
      countText: 'Đóng vai nói',
      emoji: '💬',
      category: 'curriculum',
      action: () => navigate('dialogues')
    },
    {
      id: 'translator',
      title: 'Công Cụ Dịch & Phân Tích Pinyin',
      sub: 'Tách từ, tạo Pinyin có thanh điệu, tra cứu Hán-Việt & cấu trúc chữ',
      countText: 'Tra cứu nhanh',
      emoji: '🔍',
      category: 'tools',
      action: () => navigate('translator')
    },
    {
      id: 'games',
      title: 'Mưa Từ Vựng & Đấu Trường Game',
      sub: 'Mưa từ vựng HOT gõ Pinyin, Săn chữ siêu tốc 60s, Đấu trường âm zh/z',
      countText: '4 trò chơi',
      emoji: '🌧️',
      category: 'practice',
      badge: 'CỰC HOT',
      badgeColor: 'rose',
      action: () => navigate('games')
    },
    {
      id: 'mistakes',
      title: 'Sổ Tay Từ Hay Làm Sai (错题本)',
      sub: 'Tự động gom những từ bạn hay quên/làm sai, tăng tần suất ôn gấp 3 lần',
      countText: `${stats.weakWordsCount} từ cần khắc phục`,
      emoji: '🔥',
      category: 'practice',
      badge: stats.weakWordsCount > 0 ? `${stats.weakWordsCount}` : undefined,
      badgeColor: 'red',
      action: () => navigate('mistakes')
    }
  ];

  const displayedModules = learningModules.filter(m => {
    if (activeCategoryTab === 'all') return true;
    return m.category === activeCategoryTab;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top Header */}
      <div className="px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => navigate('home')}
            className="p-1.5 -ml-1 text-[#6b7280] hover:text-[#1a1a1a] rounded-xl hover:bg-[#FAF9F6] transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-base font-bold text-[#1a1a1a] flex items-center gap-1.5">
              <span>🏮</span> Trung Tâm Chuyên Mục & Công Cụ
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              12 module bổ trợ: 229 Ngữ pháp, 214 Bộ thủ, Cây chữ, Lượng từ, Pinyin...
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">
        {/* Category Filter Pills */}
        <div className="flex gap-1.5 bg-white border border-[#e5e1d8] p-1.5 rounded-2xl text-xs font-semibold overflow-x-auto shadow-2xs">
          <button
            onClick={() => setActiveCategoryTab('all')}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              activeCategoryTab === 'all' ? 'bg-[#4a7c59] text-white shadow-xs' : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            Tất cả (12)
          </button>
          <button
            onClick={() => setActiveCategoryTab('curriculum')}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              activeCategoryTab === 'curriculum' ? 'bg-[#4a7c59] text-white shadow-xs' : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            Giáo trình & Ngữ pháp
          </button>
          <button
            onClick={() => setActiveCategoryTab('tools')}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              activeCategoryTab === 'tools' ? 'bg-[#4a7c59] text-white shadow-xs' : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            Công cụ chiết tự & Từ vựng
          </button>
          <button
            onClick={() => setActiveCategoryTab('practice')}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              activeCategoryTab === 'practice' ? 'bg-[#4a7c59] text-white shadow-xs' : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            Luyện tập & Trò chơi
          </button>
        </div>

        {/* Grid of 12 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {displayedModules.map((mod) => (
            <div
              key={mod.id}
              onClick={mod.action}
              className="bg-white rounded-3xl border border-[#e5e1d8] p-4 sm:p-5 hover:border-[#4a7c59] hover:shadow-xs cursor-pointer transition-all group flex flex-col justify-between space-y-3 relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF9F6] border border-[#e5e1d8] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {mod.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors leading-snug">
                      {mod.title}
                    </h3>
                    <span className="text-[11px] text-[#4a7c59] font-medium bg-[#e8f0eb] px-2 py-0.5 rounded-full inline-block mt-0.5">
                      {mod.countText}
                    </span>
                  </div>
                </div>

                {mod.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      mod.badgeColor === 'amber'
                        ? 'bg-amber-100 text-amber-800'
                        : mod.badgeColor === 'rose'
                        ? 'bg-rose-100 text-rose-800'
                        : mod.badgeColor === 'red'
                        ? 'bg-red-500 text-white'
                        : 'bg-[#e8f0eb] text-[#4a7c59]'
                    }`}
                  >
                    {mod.badge}
                  </span>
                )}
              </div>

              <p className="text-xs text-[#6b7280] leading-relaxed line-clamp-2">
                {mod.sub}
              </p>

              <div className="pt-2 border-t border-[#e5e1d8]/50 flex items-center justify-between text-[11px]">
                <span className="text-[#6b7280] font-medium">Mở chuyên mục</span>
                <span className="text-[#4a7c59] font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                  Mở ➔
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
