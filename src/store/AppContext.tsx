import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import type { UserProgress, UserSettings, AppView, MockExamRecord } from '../types';
import { allPacks } from '../data';
import { 
  loadProgress, 
  saveProgress, 
  updateSRSCard, 
  getOrCreateCard, 
  updateStreak,
  recordMistake,
  resolveMistake
} from '../utils/srs';
import { 
  getSavedCloudAccount, 
  syncTwoWay, 
  pushProgressToCloud 
} from '../utils/cloudSync';

// ─── State ───────────────────────────────────────────────────────────────────
interface AppState {
  progress: UserProgress;
  view: AppView;
  currentPackId: string | null;
  isDirty: boolean;
  isExercising?: boolean;
}

const initialState: AppState = {
  progress: loadProgress(),
  view: 'home',
  currentPackId: null,
  isDirty: false,
  isExercising: false,
};

// ─── Actions ─────────────────────────────────────────────────────────────────
type Action =
  | { type: 'SET_VIEW'; view: AppView; packId?: string }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<UserSettings> }
  | { type: 'GRADE_CARD'; vocabId: string; quality: 0|1|2|3|4|5 }
  | { type: 'RECORD_MISTAKE'; vocabId: string }
  | { type: 'RESOLVE_MISTAKE'; vocabId: string }
  | { type: 'RECORD_MILESTONE'; milestoneId: string }
  | { type: 'UNLOCK_PACK'; packId: string }
  | { type: 'MARK_PACK_COMPLETED'; packId: string }
  | { type: 'RECORD_SESSION'; packId: string; mode: string; correct: number; total: number; durationMs: number }
  | { type: 'RECORD_MOCK_EXAM'; record: MockExamRecord }
  | { type: 'REPLACE_PROGRESS'; progress: UserProgress }
  | { type: 'SET_EXERCISING'; isExercising: boolean }
  | { type: 'MARK_DIRTY' }
  | { type: 'SAVED' };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'REPLACE_PROGRESS':
      return { ...state, progress: action.progress, isDirty: false };

    case 'SET_EXERCISING':
      return { ...state, isExercising: action.isExercising };

    case 'SET_VIEW':
      return { ...state, view: action.view, currentPackId: action.packId ?? null };

    case 'UPDATE_SETTINGS': {
      const progress = {
        ...state.progress,
        settings: { ...state.progress.settings, ...action.settings },
      };
      return { ...state, progress, isDirty: true };
    }

    case 'GRADE_CARD': {
      const existing = getOrCreateCard(state.progress, action.vocabId);
      const updated = updateSRSCard(existing, action.quality);
      let progress = {
        ...state.progress,
        cards: { ...state.progress.cards, [action.vocabId]: updated },
      };
      if (action.quality < 3) {
        progress = recordMistake(progress, action.vocabId);
      } else if (action.quality >= 4) {
        progress = resolveMistake(progress, action.vocabId);
      }
      return { ...state, progress, isDirty: true };
    }

    case 'RECORD_MISTAKE': {
      const progress = recordMistake(state.progress, action.vocabId);
      return { ...state, progress, isDirty: true };
    }

    case 'RESOLVE_MISTAKE': {
      const progress = resolveMistake(state.progress, action.vocabId);
      return { ...state, progress, isDirty: true };
    }

    case 'RECORD_MILESTONE': {
      const current = state.progress.passedMilestones || [];
      if (current.includes(action.milestoneId)) return state;
      const progress = {
        ...state.progress,
        passedMilestones: [...current, action.milestoneId],
      };
      return { ...state, progress, isDirty: true };
    }

    case 'UNLOCK_PACK': {
      if (state.progress.unlockedPacks.includes(action.packId)) return state;
      const progress = {
        ...state.progress,
        unlockedPacks: [...state.progress.unlockedPacks, action.packId],
      };
      return { ...state, progress, isDirty: true };
    }

    case 'MARK_PACK_COMPLETED': {
      const pack = allPacks.find(p => p.id === action.packId);
      const updatedCards = { ...state.progress.cards };
      if (pack) {
        pack.vocabIds.forEach(id => {
          const existing = updatedCards[id] || getOrCreateCard(state.progress, id);
          updatedCards[id] = {
            ...existing,
            repetitions: Math.max(existing.repetitions, 1),
            interval: Math.max(existing.interval, 1),
            nextReview: existing.nextReview || (Date.now() + 86400000),
            lastResult: 'correct',
          };
        });
      }
      const existingCompleted = state.progress.completedPacks || [];
      const completedPacks = existingCompleted.includes(action.packId)
        ? existingCompleted
        : [...existingCompleted, action.packId];

      const progress: UserProgress = {
        ...state.progress,
        cards: updatedCards,
        completedPacks,
      };
      return { ...state, progress, isDirty: true };
    }

    case 'RECORD_MOCK_EXAM': {
      const existingExams = state.progress.mockExamHistory || [];
      const progress: UserProgress = {
        ...state.progress,
        mockExamHistory: [action.record, ...existingExams],
      };
      return { ...state, progress, isDirty: true };
    }

    case 'RECORD_SESSION': {
      const updatedCards = { ...state.progress.cards };
      const pack = allPacks.find(p => p.id === action.packId);
      const isGoodScore = action.total > 0 && (action.correct / action.total) >= 0.6;

      if (pack) {
        pack.vocabIds.forEach(id => {
          const existing = updatedCards[id] || getOrCreateCard(state.progress, id);
          updatedCards[id] = {
            ...existing,
            repetitions: Math.max(existing.repetitions, 1),
            interval: Math.max(existing.interval, 1),
            nextReview: existing.nextReview || (Date.now() + 86400000),
            lastResult: isGoodScore ? 'correct' : (existing.lastResult || 'correct'),
          };
        });
      }

      const existingCompleted = state.progress.completedPacks || [];
      const completedPacks = (isGoodScore && pack && !existingCompleted.includes(action.packId))
        ? [...existingCompleted, action.packId]
        : existingCompleted;

      const progress = updateStreak({
        ...state.progress,
        cards: updatedCards,
        completedPacks,
        sessionHistory: [
          ...state.progress.sessionHistory,
          {
            date: new Date().toISOString(),
            packId: action.packId,
            mode: action.mode as any,
            correct: action.correct,
            total: action.total,
            durationMs: action.durationMs,
          },
        ],
      });
      return { ...state, progress, isDirty: true };
    }

    case 'MARK_DIRTY': return { ...state, isDirty: true };
    case 'SAVED': return { ...state, isDirty: false };
    default: return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────
interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  navigate: (view: AppView, packId?: string) => void;
  gradeCard: (vocabId: string, quality: 0|1|2|3|4|5) => void;
  updateSettings: (s: Partial<UserSettings>) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Auto-save locally and push to cloud when dirty
  useEffect(() => {
    if (!state.isDirty) return;
    const timer = setTimeout(() => {
      saveProgress(state.progress);
      dispatch({ type: 'SAVED' });
      // Non-blocking auto-push to cloud
      pushProgressToCloud(state.progress).catch(() => null);
    }, 1000);
    return () => clearTimeout(timer);
  }, [state.isDirty, state.progress]);

  // Auto-sync two-way with cloud across all devices
  useEffect(() => {
    let isCancelled = false;

    const performSync = async () => {
      try {
        const acc = getSavedCloudAccount();
        if (!acc) return;
        const res = await syncTwoWay(state.progress, acc);
        if (!isCancelled && res.success && res.mergedProgress) {
          dispatch({ type: 'REPLACE_PROGRESS', progress: res.mergedProgress });
        }
      } catch (e) {
        console.warn('Auto cloud sync failed', e);
      }
    };

    // 1. Initial sync on app start
    performSync();

    // 2. Sync on tab / window focus
    const handleFocus = () => {
      performSync();
    };
    window.addEventListener('focus', handleFocus);

    // 3. Periodic sync every 60 seconds
    const interval = setInterval(performSync, 60000);

    return () => {
      isCancelled = true;
      window.removeEventListener('focus', handleFocus);
      clearInterval(interval);
    };
  }, []);

  const navigate = useCallback((view: AppView, packId?: string) => {
    dispatch({ type: 'SET_VIEW', view, packId });
  }, []);

  const gradeCard = useCallback((vocabId: string, quality: 0|1|2|3|4|5) => {
    dispatch({ type: 'GRADE_CARD', vocabId, quality });
  }, []);

  const updateSettings = useCallback((s: Partial<UserSettings>) => {
    dispatch({ type: 'UPDATE_SETTINGS', settings: s });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, navigate, gradeCard, updateSettings }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
