import React from 'react';
import { AppProvider, useApp } from './store/AppContext';
import { HomeView } from './components/views/HomeView';
import { LessonView } from './components/views/LessonView';
import { ReviewView } from './components/views/ReviewView';
import { ProgressView } from './components/views/ProgressView';
import { SettingsView } from './components/views/SettingsView';
import { CultureView } from './components/views/CultureView';
import { GamesView } from './components/views/GamesView';
import { CheckpointExamView } from './components/views/CheckpointExamView';
import { MistakeClinicView } from './components/views/MistakeClinicView';
import { EtymologyView } from './components/views/EtymologyView';
import { RadicalsView } from './components/views/RadicalsView';
import { MeasureWordsView } from './components/views/MeasureWordsView';
import { IdiomsView } from './components/views/IdiomsView';
import { PinyinChartView } from './components/views/PinyinChartView';
import { TranslatorView } from './components/views/TranslatorView';
import { DialoguesView } from './components/views/DialoguesView';
import { GrammarView } from './components/views/GrammarView';
import { HubView } from './components/views/HubView';
import { BottomNav } from './components/navigation/BottomNav';

function AppInner() {
  const { state } = useApp();

  const renderView = () => {
    switch (state.view) {
      case 'home':         return <HomeView />;
      case 'hub':          return <HubView />;
      case 'lesson':       return <LessonView />;
      case 'review':       return <ReviewView />;
      case 'progress':     return <ProgressView />;
      case 'settings':     return <SettingsView />;
      case 'culture':      return <CultureView />;
      case 'games':        return <GamesView />;
      case 'checkpoint':   return <CheckpointExamView />;
      case 'mistakes':     return <MistakeClinicView />;
      case 'etymology':    return <EtymologyView />;
      case 'radicals':     return <RadicalsView />;
      case 'measures':     return <MeasureWordsView />;
      case 'idioms':       return <IdiomsView />;
      case 'pinyin_chart': return <PinyinChartView />;
      case 'translator':   return <TranslatorView />;
      case 'dialogues':    return <DialoguesView />;
      case 'grammar':      return <GrammarView />;
      default:             return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {renderView()}
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}

export default App;
