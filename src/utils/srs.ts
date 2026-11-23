import type { SRSCard, UserProgress, UserSettings } from '../types';

const STORAGE_KEY = 'hsk_progress_v1';

const defaultSettings: UserSettings = {
  hskVersion: 'hsk2',
  selectedLevels: [1, 2],
  dailyGoal: 20,
  speechRate: 0.85,
  showPinyinFirst: false,
  enableStrokeOrder: true,
  blindMode: false,
  chineseFont: 'kaiti',
};

export function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        cards: parsed.cards ?? {},
        sessionHistory: parsed.sessionHistory ?? [],
        settings: { ...defaultSettings, ...(parsed.settings ?? {}) },
        unlockedPacks: parsed.unlockedPacks ?? ['hsk1_pack1'],
        currentStreak: parsed.currentStreak ?? 0,
        lastStudyDate: parsed.lastStudyDate ?? '',
        mistakeIds: parsed.mistakeIds ?? [],
        passedMilestones: parsed.passedMilestones ?? [],
        gameHighScores: parsed.gameHighScores ?? {},
      };
    }
  } catch {}
  return {
    cards: {},
    sessionHistory: [],
    settings: { ...defaultSettings },
    unlockedPacks: ['hsk1_pack1'],
    currentStreak: 0,
    lastStudyDate: '',
    mistakeIds: [],
    passedMilestones: [],
    gameHighScores: {},
  };
}

export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

/** SM-2 algorithm with mistake tracking */
export function updateSRSCard(
  card: SRSCard,
  quality: 0 | 1 | 2 | 3 | 4 | 5,  // 0-2: wrong, 3-5: correct
): SRSCard {
  let { easeFactor, interval, repetitions, lapses, mistakeCount = 0 } = card;
  const now = Date.now();

  if (quality >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions++;
  } else {
    lapses++;
    mistakeCount++;
    repetitions = 0;
    interval = 1;
  }

  easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  const nextReview = now + interval * 24 * 60 * 60 * 1000;

  return { 
    ...card, 
    easeFactor, 
    interval, 
    repetitions, 
    lapses, 
    mistakeCount,
    nextReview, 
    lastResult: quality >= 3 ? 'correct' : 'wrong' 
  };
}

export function getOrCreateCard(progress: UserProgress, vocabId: string): SRSCard {
  if (progress.cards[vocabId]) return progress.cards[vocabId];
  return {
    vocabId,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: 0,
    lapses: 0,
    mistakeCount: 0,
  };
}

/** Record a mistake: automatically tracks words user struggles with */
export function recordMistake(progress: UserProgress, vocabId: string): UserProgress {
  const currentMistakes = progress.mistakeIds || [];
  const updatedMistakes = currentMistakes.includes(vocabId)
    ? currentMistakes
    : [vocabId, ...currentMistakes];

  const card = getOrCreateCard(progress, vocabId);
  const updatedCard = {
    ...card,
    mistakeCount: (card.mistakeCount || 0) + 1,
    lastResult: 'wrong' as const,
  };

  return {
    ...progress,
    mistakeIds: updatedMistakes,
    cards: {
      ...progress.cards,
      [vocabId]: updatedCard,
    },
  };
}

/** Master a mistake word: remove from weak words once answered correctly */
export function resolveMistake(progress: UserProgress, vocabId: string): UserProgress {
  const currentMistakes = progress.mistakeIds || [];
  return {
    ...progress,
    mistakeIds: currentMistakes.filter(id => id !== vocabId),
  };
}

/** Get due cards with WEAK WORDS prioritization (xào lại từ sai trước) */
export function getDueCards(progress: UserProgress, vocabIds: string[]): string[] {
  const now = Date.now();
  const mistakeSet = new Set(progress.mistakeIds || []);

  const due = vocabIds.filter(id => {
    // If it's a known mistake, always prioritize reviewing
    if (mistakeSet.has(id)) return true;
    const card = progress.cards[id];
    if (!card) return true; // new card
    return card.nextReview <= now;
  });

  // Sort: words with mistakes or lapses come first!
  return due.sort((a, b) => {
    const isMistakeA = mistakeSet.has(a) ? 1 : 0;
    const isMistakeB = mistakeSet.has(b) ? 1 : 0;
    if (isMistakeA !== isMistakeB) return isMistakeB - isMistakeA;

    const countA = progress.cards[a]?.mistakeCount || 0;
    const countB = progress.cards[b]?.mistakeCount || 0;
    return countB - countA;
  });
}

export function getStats(progress: UserProgress) {
  const cards = Object.values(progress.cards);
  const total = cards.length;
  const learned = cards.filter(c => c.repetitions > 0).length;
  const due = cards.filter(c => c.nextReview <= Date.now()).length;
  const totalSessions = progress.sessionHistory.length;
  const totalWords = progress.sessionHistory.reduce((s, r) => s + r.total, 0);
  const correctWords = progress.sessionHistory.reduce((s, r) => s + r.correct, 0);
  const accuracy = totalWords > 0 ? Math.round((correctWords / totalWords) * 100) : 0;
  const weakWordsCount = progress.mistakeIds?.length || 0;

  return { 
    total, 
    learned, 
    due, 
    totalSessions, 
    totalWords, 
    accuracy, 
    streak: progress.currentStreak,
    weakWordsCount,
  };
}

export function updateStreak(progress: UserProgress): UserProgress {
  const today = new Date().toISOString().slice(0, 10);
  if (progress.lastStudyDate === today) return progress;

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const streak = progress.lastStudyDate === yesterday ? progress.currentStreak + 1 : 1;

  return { ...progress, lastStudyDate: today, currentStreak: streak };
}
