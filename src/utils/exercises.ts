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

/** Generate distractor options (wrong answers) strictly respecting the question's HSK level */
export function getDistractors(vocab: VocabEntry[], correct: VocabEntry, field: 'meaning' | 'simplified' | 'pinyin', count = 3): string[] {
  const correctLevel = correct.hsk2Level || correct.hsk3Level || 1;
  // STRICT: Tuyệt đối không chọn từ vựng cấp cao hơn cấp độ của câu hỏi (tránh lấy từ HSK 2 cho đề HSK 1)
  const sameLevelPool = vocab.filter(v => v.id !== correct.id && ((v.hsk2Level || v.hsk3Level || 1) <= correctLevel));
  const pool = sameLevelPool.length >= count ? sameLevelPool : vocab.filter(v => v.id !== correct.id);
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
  const userLevel = vocab.hsk2Level || vocab.hsk3Level || 1;
  const levelFilteredVocab = allVocab.filter(v => (v.hsk2Level || v.hsk3Level || 1) <= userLevel);
  const options = makeOptions(
    vocab.meaning, 
    getDistractors(levelFilteredVocab.length >= 4 ? levelFilteredVocab : allVocab, vocab, 'meaning')
  );
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
    question: {
      prompt: sentence,
      promptPinyin: maskedPinyin,
      sentence: ex.vi,
      audioText: ex.zh, // Toàn bộ câu gốc chuẩn xác không chứa ô trống để nghe phát âm tự nhiên
      options
    },
    answer: { correct: vocab.simplified, explanation: `${vocab.simplified} (${vocab.pinyin}) = ${vocab.meaning}` },
  };
}

function buildClozeTyping(vocab: VocabEntry, allVocab: VocabEntry[]): Exercise {
  const ex = getRandomSentence(vocab);
  if (!ex) return buildCharRecognition(vocab, allVocab);

  const sentence = ex.zh.replace(vocab.simplified, '___');
  const escapedPinyin = vocab.pinyin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const maskedPinyin = ex.pinyin.replace(new RegExp(escapedPinyin, 'i'), '___');
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
      audioText: ex.zh, // Toàn bộ câu gốc chuẩn xác không chứa ô trống để nghe phát âm tự nhiên
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

/**
 * Chuẩn hóa và làm sạch văn bản trước khi đọc bằng AI (SpeechSynthesis):
 * - Loại bỏ hoàn toàn các ký hiệu gạch dưới / chỗ trống (__., ___, ____, ……)
 *   để AI KHÔNG BAO GIỜ đọc thành "xià huà xiàn" (hạ hoa tuyến / gạch dưới) hay "underscore dot".
 * - Thay thế ký hiệu đặc biệt như ★, ☆, ▲, v.v. bằng dấu phẩy để ngắt nghỉ tự nhiên.
 * - Loại bỏ nhãn người nói như "男：", "女：", "男:", "女:" để không bị đọc thành "Nán mào hào".
 * - Thay dấu ba chấm "..." bằng ngắt nghỉ nhẹ để không bị đọc thành "diǎn diǎn diǎn".
 */
export function cleanSpeechText(text: string): string {
  if (!text) return '';
  return text
    // 1. Loại bỏ các chỗ trống gạch dưới (vd: ____, __., ___, _, ____.)
    .replace(/[_\uFF3F]{1,}/g, '')
    // 2. Loại bỏ dấu ngoặc trống (vd: (   ), （   ）)
    .replace(/[（(]\s*[）)]/g, '')
    // 3. Biến ký hiệu ngôi sao câu hỏi HSK (★, ☆, ▲, etc.) thành dấu phẩy để ngắt nghỉ
    .replace(/[★☆▲▼■◆●○•]/g, '，')
    // 4. Bỏ nhãn hội thoại (男：, 女：, 男:, 女:, A:, B:, etc.)
    .replace(/(?:^|[。！？，、\s])\s*(?:男|女|[A-Za-z])\s*[：:]\s*/g, (m) => {
      const punct = m.match(/^[。！？，、]/);
      return punct ? punct[0] + ' ' : '';
    })
    // 5. Thay thế dấu ba chấm lặp lại thành dấu phẩy
    .replace(/\.{2,}/g, '，')
    .replace(/…+/g, '，')
    // 6. Xóa các dấu chấm phẩy lặp cạnh nhau
    .replace(/[，,]{2,}/g, '，')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Text-to-speech with user-configured rate */
export function speak(text: string, rate?: number, lang = 'zh-CN'): void {
  if (!('speechSynthesis' in window)) return;
  const cleaned = cleanSpeechText(text);
  if (!cleaned) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(cleaned);
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

// Bảng từ gây nhiễu ngữ pháp chuyên biệt (Grammar Distractor Map)
const GRAMMAR_DISTRACTOR_MAP: Record<string, string[]> = {
  '没': ['不', '别', '未'],
  '没有': ['不有', '不是', '别有'],
  '不': ['没', '别', '无'],
  '不要': ['不想要', '没要', '别想'],
  '的': ['得', '地', '着'],
  '在': ['有', '是', '去'],
  '有': ['在', '是', '要'],
  '和': ['跟', '还是', '或者'],
  '还是': ['或者', '和', '也'],
  '或者': ['还是', '和', '且'],
  '吗': ['呢', '吧', '啊'],
  '呢': ['吗', '吧', '呀'],
  '吧': ['吗', '呢', '了'],
  '会': ['能', '可以', '想'],
  '能': ['会', '可以', '要'],
  '可以': ['能', '会', '行'],
  '个': ['只', '本', '件'],
  '岁': ['年', '月', '号'],
  '两': ['二', '双', '个'],
  '二': ['两', '几', '多'],
  '太': ['很', '非常', '真'],
  '都': ['也', '还', '常'],
  '也': ['都', '还', '又'],
  '叫': ['姓', '是', '有'],
  '姓': ['叫', '名', '是'],
  '去': ['来', '在', '到'],
  '要': ['想', '会', '爱'],
  '想': ['要', '爱', '愿'],
  '比': ['跟', '同', '和'],
  '了': ['着', '过', '在'],
  '过': ['了', '着', '过'],
  '把': ['被', '给', '让'],
  '被': ['把', '叫', '给'],
};

/**
 * Xây dựng bộ bài tập thực hành ngữ pháp chuyên sâu (5-6 câu):
 * Bao gồm:
 * 1. Sắp xếp câu đúng cấu trúc ngữ pháp (Word Scramble)
 * 2. Điền trợ từ / từ khóa ngữ pháp vào ô trống (Cloze test)
 * 3. Luyện dịch câu áp dụng ngữ pháp (Translation)
 */
export function buildGrammarExercises(
  topic: {
    id: string;
    title: string;
    structure?: string;
    meaning?: string;
    usage?: string;
    notes?: string[];
    examples?: { zh: string; pinyin: string; vi: string }[];
  },
  allVocab: VocabEntry[]
): Exercise[] {
  const exercises: Exercise[] = [];
  const examples = (topic.examples && topic.examples.length > 0)
    ? topic.examples
    : [{ zh: '我学中文。', pinyin: 'Wǒ xué Zhōngwén.', vi: 'Tôi học tiếng Trung.' }];

  // 1. Sắp xếp câu đúng trật tự ngữ pháp (Word Scramble) cho các câu ví dụ
  examples.forEach((ex) => {
    const cleanSentence = ex.zh.replace(/[。！？，、]/g, '');
    let words = segmentChineseSentence(cleanSentence);
    if (words.length <= 1) {
      words = cleanSentence.split('').filter(Boolean);
    }
    if (words.length >= 2) {
      let scrambled = shuffle([...words]);
      if (scrambled.join('') === words.join('') && words.length > 1) {
        scrambled = [words[words.length - 1], ...words.slice(0, words.length - 1)];
      }
      exercises.push({
        type: 'word_scramble',
        vocabId: topic.id,
        question: {
          prompt: `Sắp xếp thành câu đúng theo cấu trúc: ${topic.structure || topic.title}\n"${ex.vi}"`,
          promptPinyin: ex.pinyin,
          sentence: ex.vi,
          words: scrambled,
          audioText: ex.zh,
        },
        answer: {
          correct: words,
          explanation: `Cấu trúc: ${topic.structure || topic.title}\nCâu chuẩn: ${ex.zh} (${ex.pinyin})`,
        },
      });
    }
  });

  // 2. Điền từ/trợ từ ngữ pháp vào ô trống (Cloze Test)
  examples.forEach((ex) => {
    const zhMatches = (topic.structure || topic.title).match(/[\u4e00-\u9fff]+/g) || [];
    let targetKeyword = zhMatches.find(kw => kw.length <= 4 && ex.zh.includes(kw));
    if (!targetKeyword && zhMatches.length > 0) {
      targetKeyword = zhMatches[0];
    }

    if (targetKeyword && ex.zh.includes(targetKeyword)) {
      const maskedZh = ex.zh.replace(targetKeyword, '___');
      const distractors = GRAMMAR_DISTRACTOR_MAP[targetKeyword] || ['不', '没', '是', '在'].filter(d => d !== targetKeyword);
      const options = makeOptions(targetKeyword, distractors.slice(0, 3));

      exercises.push({
        type: 'cloze',
        vocabId: topic.id,
        question: {
          prompt: maskedZh,
          promptPinyin: ex.pinyin,
          sentence: ex.vi,
          options,
          audioText: ex.zh,
        },
        answer: {
          correct: targetKeyword,
          explanation: `Đáp án đúng là "${targetKeyword}". Cấu trúc: ${topic.structure || topic.title}.\n${ex.zh} (${ex.pinyin}): ${ex.vi}`,
        },
      });
    }
  });

  // 3. Luyện dịch Việt - Trung áp dụng ngữ pháp (Translation)
  if (examples.length > 0) {
    const ex = examples[0];
    const clean = ex.zh.replace(/[。！？，、]/g, '');
    const tokens = segmentChineseSentence(clean);
    const level1Vocab = allVocab.filter(v => (v.hsk2Level || 1) <= 1);
    const distractors = pickRandom(level1Vocab, 2).map(v => v.simplified);
    const chips = shuffle([...tokens, ...distractors]);

    exercises.push({
      type: 'translation',
      vocabId: topic.id,
      question: {
        prompt: `Dịch câu sang tiếng Trung (áp dụng cấu trúc ${topic.structure || topic.title}):\n"${ex.vi}"`,
        promptPinyin: ex.pinyin,
        sentence: ex.vi,
        options: chips,
        audioText: ex.zh,
      },
      answer: {
        correct: ex.zh,
        explanation: `${ex.zh} (${ex.pinyin}) = ${ex.vi}`,
      },
    });
  }

  // Shuffle & giới hạn 5 câu bài tập mỗi lần luyện để không bị ngấy
  return exercises.length > 0 ? shuffle(exercises).slice(0, 5) : [];
}
