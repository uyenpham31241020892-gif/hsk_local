import React from 'react';
import { useApp } from '../../store/AppContext';
import type { AppView } from '../../types';
import { BookOpen, Sparkles, Layers, Award, Flame } from 'lucide-react';

export function BottomNav() {
  const { state, navigate } = useApp();
  const currentView = state.view;

  // Don't show bottom nav inside an active lesson runner or exercise session
  if (state.isExercising || currentView === 'lesson') return null;

  const mistakesCount = state.progress.mistakeIds?.length || 0;

  const navItems: { view: AppView; label: string; icon: React.ReactNode; badge?: number }[] = [
    { view: 'home', label: 'Học HSK', icon: <BookOpen size={18} /> },
    { view: 'hub', label: 'Chuyên mục', icon: <Layers size={18} /> },
    { view: 'checkpoint', label: 'Thi HSK & Đề', icon: <Award size={18} /> },
    { view: 'culture', label: 'Nhạc & Douyin', icon: <Sparkles size={18} /> },
    { view: 'mistakes', label: 'Từ hay sai', icon: <Flame size={18} />, badge: mistakesCount },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e5e1d8] py-2 px-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => navigate(item.view)}
              className={`relative flex flex-col items-center gap-1 py-1 px-2 rounded-xl transition-all ${
                isActive
                  ? 'text-[#4a7c59] font-semibold scale-105'
                  : 'text-[#6b7280] hover:text-[#1a1a1a]'
              }`}
            >
              <div className={`p-1 rounded-lg ${isActive ? 'bg-[#e8f0eb]' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[10px] tracking-tight">{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -top-0.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
