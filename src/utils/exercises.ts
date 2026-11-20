import type { VocabEntry, ExerciseType, Exercise, ExampleSentence } from '../types';
import { extraSentenceBank, getSentencesForVocab } from '../data/sentence_bank';
import { authenticTranslations } from '../data/authentic_translations';

/** Shuffle array (Fisher-Yates) */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick N random items from array */
export function pickRandom<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

/** Helper: lấy ngẫu nhiên 1 câu ví dụ phong phú từ vocab hoặc ngân hàng câu mở rộng theo đúng cấp độ */
export function getRandomSentence(vocab: VocabEntry): ExampleSentence | null {
  const level = vocab.hsk2Level || vocab.hsk3Level || 1;
  const allSentences = getSentencesForVocab(vocab.simplified, vocab.exampleSentences, level);
  if (!allSentences || allSentences.length === 0) return null;
  const idx = Math.floor(Math.random() * allSentences.length);
  return allSentences[idx];
}

/** Generate distractor options (wrong answers) */
export function getDistractors(vocab: VocabEntry[], correct: VocabEntry, field: 'meaning' | 'simplified' | 'pinyin', count = 3): string[] {
  const pool = vocab.filter(v => v.id !== correct.id);
  return pickRandom(pool, count).map(v => v[field] ?? '');
}

/** Shuffle options with correct answer inserted */
export function makeOptions(correct: string, distractors: string[]): string[] {
  const all = [correct, ...distractors.filter(d => d && d !== correct)];
  return shuffle(all);
}

/** Build exercise from vocab entry */
export function buildExercise(
  type: ExerciseType,
  vocab: VocabEntry,
  allVocab: VocabEntry[],
): Exercise {
  switch (type) {
    case 'flashcard': return buildFlashcard(vocab);
    case 'char_recognition': return buildCharRecognition(vocab, allVocab);
    case 'cloze': return buildCloze(vocab, allVocab);
    case 'cloze_typing': return buildClozeTyping(vocab, allVocab);
    case 'translation': return buildTranslation(vocab, allVocab);
    case 'word_scramble': return buildWordScramble(vocab);
    case 'collocation_match': return buildCollocationMatch(vocab, allVocab);
    case 'error_spot': return buildErrorSpot(vocab, allVocab);
    case 'dictation': return buildDictation(vocab);
    case 'stroke_order': return buildStrokeOrder(vocab);
    default: return buildFlashcard(vocab);
  }
}

function buildFlashcard(vocab: VocabEntry): Exercise {
  return {
    type: 'flashcard',
    vocabId: vocab.id,
    question: { prompt: vocab.simplified, promptPinyin: vocab.pinyin, audioText: vocab.simplified },
    answer: { correct: vocab.meaning, explanation: vocab.memoryTip },
  };
}

function buildCharRecognition(vocab: VocabEntry, allVocab: VocabEntry[]): Exercise {
  const options = makeOptions(vocab.meaning, getDistractors(allVocab, vocab, 'meaning'));
  return {
    type: 'char_recognition',
    vocabId: vocab.id,
    question: { prompt: vocab.simplified, promptPinyin: vocab.pinyin, audioText: vocab.simplified, options },
    answer: { correct: vocab.meaning },
  };
}

// Danh từ, đại từ, động từ, cụm từ chuẩn HSK 1 - 3 phục vụ phân đoạn câu tự nhiên
const KNOWN_WORDS = new Set([
  // Đại từ nhân xưng & chỉ thị
  '我们', '你们', '他们', '她们', '它们', '大家', '自己', '别人',
  '这个', '那个', '这些', '那些', '这里', '那里', '这儿', '那儿', '哪儿', '哪里',
  
  // Từ để hỏi
  '什么', '怎么', '怎么样', '为什么', '多少', '哪个', '谁的', '几点', '几月', '几号',
  
  // Thời gian
  '今天', '明天', '昨天', '后天', '前天', '现在', '以前', '以后',
  '早上', '上午', '中午', '下午', '晚上', '白天', '夜里',
  '今年', '去年', '明年', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天', '星期日',
  '有时候', '什么时候', '这时候', '那时候', '小时', '分钟',
  
  // Gia đình & Con người
  '爸爸', '妈妈', '哥哥', '姐姐', '弟弟', '妹妹', '儿子', '女儿', '孩子',
  '爷爷', '奶奶', '先生', '小姐', '老师', '学生', '同学', '朋友', '医生', '师傅', '服务员',
  
  // Nơi chốn & Quốc gia
  '中国', '北京', '上海', '越南', '学校', '医院', '商店', '饭馆', '机场', '车站', '地铁站',
  '教室', '房间', '办公室', '操场', '家里', '外面', '前面', '后面', '上面', '下面', '里面',
  
  // Đồ vật & Phương tiện
  '飞机', '出租车', '公共汽车', '自行车', '火车', '船',
  '电脑', '电视', '电影', '手机', '电话', '桌子', '椅子', '杯子', '衣服', '东西', '书本',
  '小猫', '小狗', '小鸟',
  
  // Đồ ăn & Thức uống
  '米饭', '苹果', '西瓜', '饺子', '包子', '水果', '牛肉', '羊肉', '面条', '茶水', '咖啡', '牛奶', '温水', '热水', '中国茶', '中国菜',
  
  // Ngôn ngữ & Khái niệm
  '汉语', '中文', '英语', '外语', '汉字', '名字', '天气', '身体', '作业', '问题', '时间', '意思',
  
  // Cụm động từ & Động từ
  '回家', '回去', '过来', '出来', '进来', '进去', '起来',
  '喜欢', '学习', '工作', '睡觉', '说话', '打电话', '看书', '看电影', '看电视',
  '吃饭', '喝茶', '喝水', '买东西', '上学', '放学', '上课', '下课',
  '认识', '知道', '觉得', '希望', '帮助', '准备', '打算', '旅游', '跑步', '运动', '锻炼',
  '开门', '关门', '走路', '生病', '唱歌', '跳舞', '考试',
  
  // Phó từ & Tính từ
  '非常', '特别', '经常', '一起', '已经', '正在', '马上', '一点儿', '一点',
  '高兴', '快乐', '漂亮', '好看', '好吃', '好喝', '好玩', '可爱', '认真', '清楚', '便宜', '舒服', '容易',
  
  // Cụm cố định
  '太好了', '对不起', '没关系', '不客气', '谢谢', '再见', '请问', '欢迎',
  
  // Số từ + Lượng từ
  '一个', '两个', '三个', '四个', '五只', '一只', '两只', '一本', '两本', '一辆', '两辆', '一杯', '一瓶', '一碗', '一件', '两件', '一块', '两块'
]);

/** 
 * Phân đoạn câu tiếng Trung theo phương pháp Forward Maximum Matching (FMM)
 * Tôn trọng toàn vẹn từ mục tiêu, nhận diện từ vựng chuẩn HSK 1-3,
 * giữ các chữ đơn lẻ độc lập, tuyệt đối không chém ngang từ ghép.
 */
export function segmentChineseSentence(s: string, targetVocab?: string): string[] {
  const clean = s.replace(/[^\u4e00-\u9fff\u3400-\u4dbf]/g, '');
  if (!clean) return targetVocab ? [targetVocab] : [];

  const target = targetVocab ? targetVocab.trim() : '';
  const tokens: string[] = [];
  let i = 0;

  while (i < clean.length) {
    // 1. Nếu gặp đúng từ mục tiêu (targetVocab) -> giữ nguyên khối 100%
    if (target && target.length > 1 && clean.startsWith(target, i)) {
      tokens.push(target);
      i += target.length;
      continue;
    }

    // 2. Tra cứu từ điển từ dài đến ngắn (4 chữ -> 3 chữ -> 2 chữ)
    let matchedWord = '';
    const maxLen = Math.min(4, clean.length - i);
    for (let len = maxLen; len >= 2; len--) {
      const candidate = clean.slice(i, i + len);
      if (KNOWN_WORDS.has(candidate)) {
        matchedWord = candidate;
        break;
      }
    }

    if (matchedWord) {
      tokens.push(matchedWord);
      i += matchedWord.length;
    } else {
      // 3. Ký tự đơn lẻ: giữ nguyên 1 chữ Hán, không tự ý ghép bừa
      tokens.push(clean[i]);
      i += 1;
    }
  }

  return tokens;
}

function buildCloze(vocab: VocabEntry, allVocab: VocabEntry[]): Exercise {
  const ex = getRandomSentence(vocab);
  if (!ex) return buildCharRecognition(vocab, allVocab);

  const sentence = ex.zh.replace(vocab.simplified, '___');
  const escapedPinyin = vocab.pinyin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const maskedPinyin = ex.pinyin.replace(new RegExp(escapedPinyin, 'i'), '___');
  
  const userLevel = vocab.hsk2Level || vocab.hsk3Level || 1;
  const levelFilteredVocab = allVocab.filter(v => (v.hsk2Level || 1) <= userLevel);
  const options = makeOptions(
    vocab.simplified, 
    getDistractors(levelFilteredVocab.length >= 4 ? levelFilteredVocab : allVocab, vocab, 'simplified')
  );

  return {
    type: 'cloze',
    vocabId: vocab.id,
    question: { prompt: sentence, promptPinyin: maskedPinyin, sentence: ex.vi, options },
    answer: { correct: vocab.simplified, explanation: `${vocab.simplified} (${vocab.pinyin}) = ${vocab.meaning}` },
  };
}

function buildClozeTyping(vocab: VocabEntry, allVocab: VocabEntry[]): Exercise {
  const ex = getRandomSentence(vocab);
  if (!ex) return buildCharRecognition(vocab, allVocab);

  const sentence = ex.zh.replace(vocab.simplified, '____');
  const escapedPinyin = vocab.pinyin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const maskedPinyin = ex.pinyin.replace(new RegExp(escapedPinyin, 'i'), '____');
  const targetChars = vocab.simplified.split('');
  
  const userLevel = vocab.hsk2Level || vocab.hsk3Level || 1;
  const levelFilteredVocab = allVocab.filter(v => (v.hsk2Level || 1) <= userLevel);
  const distractorChars = getDistractors(levelFilteredVocab.length >= 4 ? levelFilteredVocab : allVocab, vocab, 'simplified')
    .flatMap(s => s.split(''))
    .slice(0, 4);
  const options = shuffle([...new Set([...targetChars, ...distractorChars])]);

  return {
    type: 'cloze_typing',
    vocabId: vocab.id,
    question: {
      prompt: sentence,
      promptPinyin: maskedPinyin,
      sentence: ex.vi,
      options,
    },
    answer: {
      correct: vocab.simplified,
      explanation: `${vocab.simplified} (${vocab.pinyin}): ${vocab.meaning}`,
    },
  };
}

function buildTranslation(vocab: VocabEntry, allVocab: VocabEntry[]): Exercise {
  const userLevel = vocab.hsk2Level || vocab.hsk3Level || 1;
  // Ưu tiên câu dịch thực chiến từ tài liệu luyện dịch HSK đúng cấp độ
  const matchingAuth = authenticTranslations.filter(t => t.hsk <= userLevel && t.zh.includes(vocab.simplified));
  let ex: ExampleSentence | null = null;
  if (matchingAuth.length > 0) {
    const picked = matchingAuth[Math.floor(Math.random() * matchingAuth.length)];
    ex = { zh: picked.zh, pinyin: picked.pinyin, vi: picked.vi };
  } else {
    ex = getRandomSentence(vocab);
  }

  if (!ex) return buildCharRecognition(vocab, allVocab);

  const clean = ex.zh.replace(/[。！？，、]/g, '');
  const tokens = segmentChineseSentence(clean, vocab.simplified);
  const sameLevelVocab = allVocab.filter(v => v.id !== vocab.id && (v.hsk2Level || 1) <= userLevel);
  const distractors = pickRandom(sameLevelVocab.length >= 2 ? sameLevelVocab : allVocab.filter(v => v.id !== vocab.id), 2).map(v => v.simplified);
  const chips = shuffle([...tokens, ...distractors]);

  return {
    type: 'translation',
    vocabId: vocab.id,
    question: {
      prompt: ex.vi,
      promptPinyin: ex.pinyin,
      sentence: ex.vi,
      options: chips,
    },
    answer: {
      correct: ex.zh,
      explanation: `${ex.zh} (${ex.pinyin}) = ${ex.vi}`,
    },
  };
}

function buildWordScramble(vocab: VocabEntry): Exercise {
  const ex = getRandomSentence(vocab);
  if (!ex) return buildFlashcard(vocab);

  const cleanSentence = ex.zh.replace(/[。！？，、]/g, '');
  let words = segmentChineseSentence(cleanSentence, vocab.simplified);
  if (words.length <= 1) {
    words = cleanSentence.split('').filter(Boolean);
  }

  let scrambled = shuffle([...words]);
  if (scrambled.join('') === words.join('') && words.length > 1) {
    scrambled = [words[words.length - 1], ...words.slice(0, words.length - 1)];
  }

  return {
    type: 'word_scramble',
    vocabId: vocab.id,
    question: { 
      prompt: `Sắp xếp thành câu đúng:\n${ex.vi}`, 
      promptPinyin: ex.pinyin,
      sentence: ex.vi,
      words: scrambled 
    },
    answer: { correct: words, explanation: `${ex.zh} (${ex.pinyin})` },
  };
}

function buildCollocationMatch(vocab: VocabEntry, allVocab: VocabEntry[]): Exercise {
  const col = vocab.collocations?.[0];
  if (!col) return buildCharRecognition(vocab, allVocab);

  const otherCols = allVocab
    .filter(v => v.id !== vocab.id && v.collocations?.length)
    .slice(0, 3)
    .map(v => v.collocations![0].meaning);

  const options = makeOptions(col.meaning, otherCols.length >= 3 ? otherCols.slice(0, 3) : getDistractors(allVocab, vocab, 'meaning'));

  return {
    type: 'collocation_match',
    vocabId: vocab.id,
    question: { prompt: col.pattern, promptPinyin: vocab.pinyin, options },
    answer: { correct: col.meaning, explanation: `${col.pattern} = ${col.meaning}` },
  };
}

function buildErrorSpot(vocab: VocabEntry, allVocab: VocabEntry[]): Exercise {
  const ex = getRandomSentence(vocab) || vocab.exampleSentences?.[0];
  if (!ex) return buildCharRecognition(vocab, allVocab);

  const userLevel = vocab.hsk2Level || vocab.hsk3Level || 1;
  const sameLevelVocab = allVocab.filter(v => (v.hsk2Level || 1) <= userLevel);
  const candidatePool = sameLevelVocab.length >= 3 ? sameLevelVocab : allVocab;
  const wrongWords = candidatePool.filter(v => v.id !== vocab.id && v.pos?.some(p => vocab.pos?.includes(p)));
  const wrongWord = wrongWords[0];

  const errorSentence = wrongWord
    ? ex.zh.replace(vocab.simplified, wrongWord.simplified)
    : ex.zh;

  return {
    type: 'error_spot',
    vocabId: vocab.id,
    question: {
      prompt: errorSentence,
      promptPinyin: ex.pinyin,
      sentence: `Nghĩa đúng của câu: ${ex.vi}`,
      options: wrongWord ? [wrongWord.simplified, vocab.simplified] : [vocab.simplified],
    },
    answer: {
      correct: vocab.simplified,
      explanation: `Từ đúng là "${vocab.simplified}" (${vocab.pinyin}) = ${vocab.meaning}`,
    },
  };
}

function buildDictation(vocab: VocabEntry): Exercise {
  // Luyện nghe chép đúng từ vừa học: đọc từ vựng hoặc cụm từ ngắn
  const text = vocab.simplified;
  return {
    type: 'dictation',
    vocabId: vocab.id,
    question: { 
      prompt: 'Nghe và gõ lại từ vựng:', 
      promptPinyin: vocab.pinyin,
      audioText: text, 
      sentence: `${vocab.pinyin} · ${vocab.meaning}` 
    },
    answer: { correct: text, explanation: `${vocab.simplified} (${vocab.pinyin}): ${vocab.meaning}` },
  };
}

function buildStrokeOrder(vocab: VocabEntry): Exercise {
  return {
    type: 'stroke_order',
    vocabId: vocab.id,
    question: { 
      prompt: vocab.simplified, 
      promptPinyin: vocab.pinyin,
      sentence: `${vocab.pinyin} - ${vocab.meaning}` 
    },
    answer: { correct: vocab.simplified },
  };
}

export type LessonPracticeMode = 
  | 'all' 
  | 'flashcard' 
  | 'stroke_order' 
  | 'char_recognition' 
  | 'cloze' 
  | 'cloze_typing'
  | 'translation'
  | 'word_scramble' 
  | 'dictation';

/** Build exercises based on user's chosen mode */
export function buildLessonByMode(mode: LessonPracticeMode, vocabList: VocabEntry[], allVocab: VocabEntry[]): Exercise[] {
  if (mode === 'all') {
    return buildLessonSequence(vocabList, allVocab);
  }
  return vocabList.map(v => buildExercise(mode as ExerciseType, v, allVocab));
}

export type MistakeDrillMode = 'deep' | 'context' | 'quick' | 'cloze_only' | 'scramble_only';

/** 
 * Build Deep Drill for Mistake Clinic:
 * Multi-stage mastery loop for each weak word across multiple exercise types
 */
export function buildMistakeDeepDrill(
  weakVocab: VocabEntry[],
  allVocab: VocabEntry[],
  mode: MistakeDrillMode = 'deep'
): Exercise[] {
  if (!weakVocab.length) return [];
  const exercises: Exercise[] = [];

  weakVocab.forEach((vocab) => {
    switch (mode) {
      case 'deep':
        // 4-Stage Mastery Loop:
        exercises.push(buildExercise('flashcard', vocab, allVocab));
        exercises.push(buildExercise('cloze', vocab, allVocab));
        exercises.push(buildExercise('word_scramble', vocab, allVocab));
        if (vocab.exampleSentences?.length) {
          exercises.push(buildExercise('dictation', vocab, allVocab));
        } else {
          exercises.push(buildExercise('char_recognition', vocab, allVocab));
        }
        break;

      case 'context':
        // Thực chiến câu: Điền từ + Sắp xếp câu + Nghe chép
        exercises.push(buildExercise('cloze', vocab, allVocab));
        exercises.push(buildExercise('word_scramble', vocab, allVocab));
        if (vocab.exampleSentences?.length) {
          exercises.push(buildExercise('dictation', vocab, allVocab));
        } else {
          exercises.push(buildExercise('char_recognition', vocab, allVocab));
        }
        break;

      case 'quick':
        // 2 bài/từ
        exercises.push(buildExercise('flashcard', vocab, allVocab));
        exercises.push(buildExercise('cloze', vocab, allVocab));
        break;

      case 'cloze_only':
        exercises.push(buildExercise('cloze', vocab, allVocab));
        break;

      case 'scramble_only':
        exercises.push(buildExercise('word_scramble', vocab, allVocab));
        break;
    }
  });

  // In deep mode with multiple words, group in smart pedagogic waves:
  // Wave 1: Flashcards (nạp lại nhớ)
  // Wave 2: Cloze tests (phản xạ ngữ cảnh)
  // Wave 3: Word scramble (xếp câu chuẩn ngữ pháp)
  // Wave 4: Dictation (nghe chép thính giác)
  if (mode === 'deep' && weakVocab.length > 1) {
    const flashcards = exercises.filter(e => e.type === 'flashcard');
    const clozes = exercises.filter(e => e.type === 'cloze');
    const scrambles = exercises.filter(e => e.type === 'word_scramble');
    const others = exercises.filter(e => e.type === 'dictation' || e.type === 'char_recognition');
    return [...flashcards, ...clozes, ...scrambles, ...others];
  }

  return exercises;
}

/** Build a lesson sequence: flashcard → stroke → recognition → cloze → cloze_typing → translation → scramble → dictation */
export function buildLessonSequence(vocabList: VocabEntry[], allVocab: VocabEntry[]): Exercise[] {
  const exercises: Exercise[] = [];
  const types: ExerciseType[] = [
    'flashcard', 
    'stroke_order', 
    'char_recognition', 
    'cloze', 
    'cloze_typing',
    'translation',
    'word_scramble', 
    'dictation'
  ];

  vocabList.forEach((vocab, i) => {
    const type = types[i % types.length];
    exercises.push(buildExercise(type, vocab, allVocab));
  });

  return exercises;
}

/** Build SRS mix session: mix wrong cards through multiple exercise types */
export function buildSRSMix(dueVocab: VocabEntry[], allVocab: VocabEntry[]): Exercise[] {
  const exercises: Exercise[] = [];
  const allTypes: ExerciseType[] = [
    'flashcard', 'char_recognition', 'cloze', 'word_scramble',
    'collocation_match', 'error_spot', 'dictation', 'stroke_order',
  ];

  dueVocab.forEach((vocab) => {
    const type = allTypes[Math.floor(Math.random() * allTypes.length)];
    exercises.push(buildExercise(type, vocab, allVocab));
  });

  return shuffle(exercises);
}

/** Get globally configured speech rate from localStorage if available */
export function getSavedSpeechRate(): number {
  try {
    const raw = localStorage.getItem('hsk_progress_v1');
    if (raw) {
      const data = JSON.parse(raw);
      if (typeof data.settings?.speechRate === 'number') {
        return data.settings.speechRate;
      }
    }
  } catch (e) {}
  return 0.85;
}

/** Text-to-speech with user-configured rate */
export function speak(text: string, rate?: number, lang = 'zh-CN'): void {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = rate !== undefined ? rate : getSavedSpeechRate();
  window.speechSynthesis.speak(utter);
}

/** Compare typed Chinese with correct (char-by-char diff) */
export function diffChars(typed: string, correct: string): Array<{ char: string; correct: boolean }> {
  return correct.split('').map((ch, i) => ({
    char: ch,
    correct: typed[i] === ch,
  }));
}
