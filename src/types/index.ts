// Core vocabulary entry
export interface VocabEntry {
  id: string;
  simplified: string;
  traditional?: string;
  pinyin: string;
  pinyinNumeric?: string;
  meaning: string;         // Vietnamese meaning
  meaningEn?: string;      // English meaning
  radical?: string;
  pos?: string[];          // parts of speech
  hsk2Level?: number;      // HSK 2.0: 1-6
  hsk3Level?: number;      // HSK 3.0: 1-9
  frequency?: number;
  exampleSentences?: ExampleSentence[];
  collocations?: Collocation[];
  strokeCount?: number;
  tags?: string[];         // topic tags: 饮食, 交通, etc.
  memoryTip?: string;      // mẹo nhớ
}

export interface ExampleSentence {
  zh: string;
  pinyin: string;
  vi: string;
}

export interface Collocation {
  pattern: string;         // e.g., "看 + 电影"
  meaning: string;
}

// SRS card state
export interface SRSCard {
  vocabId: string;
  easeFactor: number;      // SM-2: starts at 2.5
  interval: number;        // days
  repetitions: number;
  nextReview: number;      // timestamp ms
  lapses: number;
  lastResult?: 'correct' | 'wrong' | 'skip';
  mistakeCount?: number;   // total times answered wrong
}

// User progress
export interface MockExamRecord {
  date: string;
  examId: string;
  examTitle: string;
  listeningScore: number; // 0 - 100
  readingScore: number;   // 0 - 100
  totalScore: number;     // 0 - 200
  passed: boolean;        // totalScore >= 120
  durationSeconds: number;
}

export interface UserProgress {
  cards: Record<string, SRSCard>;
  sessionHistory: SessionRecord[];
  settings: UserSettings;
  unlockedPacks: string[];
  completedPacks?: string[];
  currentStreak: number;
  lastStudyDate: string;
  mistakeIds?: string[];   // words user struggled with
  passedMilestones?: string[]; // IDs of passed checkpoint exams
  mockExamHistory?: MockExamRecord[];
  gameHighScores?: {
    speedHunter?: number;
    toneMaster?: number;
    pinyinShowdown?: number;
  };
}

export interface SessionRecord {
  date: string;
  packId: string;
  mode: StudyMode;
  correct: number;
  total: number;
  durationMs: number;
}

export interface UserSettings {
  hskVersion: 'hsk2' | 'hsk3' | 'both';
  selectedLevels: number[];
  dailyGoal: number;        // cards
  speechRate: number;       // 0.5–1.5
  showPinyinFirst: boolean;
  enableStrokeOrder: boolean;
  blindMode: boolean;       // hide stroke hints
}

// Study modes
export type StudyMode =
  | 'lesson'    // cuốn chiếu theo bài
  | 'srs_mix'   // ôn tập hỗn hợp SRS
  | 'flashcard'
  | 'stroke_order'
  | 'char_recognition'
  | 'cloze'
  | 'word_scramble'
  | 'dictation'
  | 'culture_study'
  | 'mistake_clinic'
  | 'checkpoint_exam';

// Exercise types
export type ExerciseType =
  | 'flashcard'
  | 'stroke_order'
  | 'char_recognition'
  | 'collocation_match'
  | 'cloze'
  | 'cloze_typing'
  | 'translation'
  | 'word_scramble'
  | 'error_spot'
  | 'dictation';

export interface Exercise {
  type: ExerciseType;
  vocabId: string;
  question: ExerciseQuestion;
  answer: ExerciseAnswer;
}

export interface ExerciseQuestion {
  prompt: string;
  promptPinyin?: string;
  options?: string[];
  audioText?: string;
  sentence?: string;
  words?: string[];         // for scramble
  errorIndex?: number;      // for error_spot
}

export interface ExerciseAnswer {
  correct: string | string[];
  explanation?: string;
}

// Vocab Pack
export interface GrammarPoint {
  id: string;
  title: string;
  structure: string;
  meaning: string;
  usage?: string;
  notes?: string[];
  examples: {
    zh: string;
    pinyin: string;
    vi: string;
  }[];
}

export interface VocabPack {
  id: string;
  title: string;
  titleVi: string;
  topic: string;
  hsk2Levels: number[];
  hsk3Levels: number[];
  vocabIds: string[];
  orderIndex: number;
  grammarPoints?: GrammarPoint[];
}

// Culture & Media Types
export type CultureCategory = 'music' | 'movie' | 'slang' | 'food';

export interface CultureLine {
  zh: string;
  pinyin: string;
  vi: string;
  words?: {
    zh: string;
    pinyin: string;
    vi: string;
  }[];
}

export interface CultureKeyword {
  word: string;
  pinyin: string;
  meaning: string;
  note?: string;
}

export interface CultureItem {
  id: string;
  category: CultureCategory;
  title: string;
  titleVi: string;
  authorOrSource: string;
  tag: string;
  emoji: string;
  story: string;
  lines: CultureLine[];
  keywords: CultureKeyword[];
  youtubeId?: string;      // YouTube MV / Audio ID for real singer vocals & music
  alternateYoutubeIds?: string[]; // Alternative YouTube Karaoke / Lyrics IDs (chống chặn embed)
  audioUrl?: string;       // Direct MP3 URL
  timestamp?: string;      // Timestamp string e.g. "09:04"
  timestampSeconds?: number; // Start second for jumping in videos e.g. 544
}

// Tone Challenge Type
export interface ToneChallenge {
  id: string;
  audioText: string;
  promptPinyinWithoutTone: string;
  correctPinyin: string;
  correctTone: 1 | 2 | 3 | 4 | 0; // 0 is neutral
  meaning: string;
  category?: string;
  distractors: {
    char: string;
    pinyin: string;
    meaning: string;
    tone: 1 | 2 | 3 | 4 | 0;
  }[];
  tip: string;
}

// Confusing Sound / Minimal Pair Challenge Type
export interface ConfusingSoundChallenge {
  id: string;
  pairType: 'zh_z' | 'ch_c' | 'sh_s' | 'j_q' | 'b_p' | 'd_t' | 'g_k' | 'r_l' | 'n_ng' | 'an_ang' | 'en_eng' | 'in_ing';
  audioText: string;
  correctPinyin: string;
  meaning: string;
  pairCategory: string; // e.g., "Âm uốn lưỡi vs đầu lưỡi: zh vs z"
  distractors: {
    char: string;
    pinyin: string;
    meaning: string;
  }[];
  mouthShapeGuide: string; // Mẹo khẩu hình & luồng hơi
}

// Checkpoint Milestone Exam
export interface CheckpointExam {
  id: string;
  title: string;
  titleVi: string;
  description: string;
  coveredPackIds: string[];
  targetVocabIds: string[];
  questionsCount: number;
  badge: string;
}

// App navigation
export type AppView =
  | 'home'
  | 'hub'
  | 'lesson'
  | 'exercise'
  | 'review'
  | 'progress'
  | 'settings'
  | 'culture'
  | 'games'
  | 'mistakes'
  | 'checkpoint'
  | 'etymology'
  | 'radicals'
  | 'measures'
  | 'idioms'
  | 'pinyin_chart'
  | 'translator'
  | 'dialogues'
  | 'grammar';
