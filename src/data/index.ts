import type { VocabPack, VocabEntry, GrammarPoint } from '../types';
import { hsk1Vocab } from './hsk_vocab_hsk1';
import { hsk2Vocab } from './hsk_vocab_hsk2';
import { hsk3Vocab } from './hsk_vocab_hsk3';
import { grammarTopics } from './grammar_topics_data';

// Combine all vocab
export const allVocab: VocabEntry[] = [
  ...hsk1Vocab,
  ...hsk2Vocab,
  ...hsk3Vocab,
];

export const vocabById: Record<string, VocabEntry> = {};
allVocab.forEach(v => { vocabById[v.id] = v; });

// Mapping trọng điểm ngữ pháp Migii HSK 1 cho từng bài học
const hsk1GrammarMap: Record<number, string[]> = {
  1: ['gram_hsk1_31', 'gram_hsk1_02'], // Thứ tự câu cơ bản + Phủ định 不
  2: ['gram_hsk1_14', 'gram_hsk1_13'], // Sở hữu 的 + Sở hữu chặt chẽ
  3: ['gram_hsk1_01', 'gram_hsk1_19'], // Phủ định 没 + Sở hữu 有
  4: ['gram_hsk1_07', 'gram_hsk1_08'], // Tuổi 岁 + Lượng từ 个
  5: ['gram_hsk1_09', 'gram_hsk1_10'], // Ngày tháng năm + Các ngày trong tuần
  6: ['gram_hsk1_11', 'gram_hsk1_40'], // Viết số + So sánh 二 và 两
  7: ['gram_hsk1_17', 'gram_hsk1_18'], // Tồn tại với 在 + Tồn tại với 有
  8: ['gram_hsk1_20', 'gram_hsk1_22'], // Động từ 叫 + Sử dụng từ 姓
  9: ['gram_hsk1_21', 'gram_hsk1_27'], // Động từ 去 + Muốn làm gì với 要 / 想
  10: ['gram_hsk1_24', 'gram_hsk1_25'], // Kỹ năng 会 + Khả năng 能
  11: ['gram_hsk1_26', 'gram_hsk1_23'], // Cho phép 可以 + Dự định 要
  12: ['gram_hsk1_03', 'gram_hsk1_04'], // Phạm vi 都 + Cũng 也
  13: ['gram_hsk1_05', 'gram_hsk1_06'], // Và 和 + Lựa chọn 还是
  14: ['gram_hsk1_15', 'gram_hsk1_16'], // Hỏi 呢 + Gợi ý 吧
  15: ['gram_hsk1_28', 'gram_hsk1_36'], // Làm gì với 怎么 + Vị trí từ để hỏi
  16: ['gram_hsk1_30', 'gram_hsk1_29'], // Lệnh phủ định 不要 + Phủ định quá khứ 没
  17: ['gram_hsk1_32', 'gram_hsk1_34'], // Danh từ với 是 + Câu Danh từ + Tính từ đơn
  18: ['gram_hsk1_33', 'gram_hsk1_35'], // Quá mức 太...了 + Hỏi chính phản V+不+V
  19: ['gram_hsk1_37', 'gram_hsk1_38'], // Hỏi với 不 + Hỏi với 吗
  20: ['gram_hsk1_39', 'gram_hsk1_12'], // Hỏi Có - Không 吗 + Cấu trúc thời gian
};

// Helper lấy grammar point theo ID
function getGrammarPointsByIds(ids: string[]): GrammarPoint[] {
  const list: GrammarPoint[] = [];
  ids.forEach(id => {
    const found = grammarTopics.find(t => t.id === id);
    if (found) {
      list.push({
        id: found.id,
        title: found.title,
        structure: found.structure || found.title,
        meaning: found.meaning || '',
        usage: found.usage || '',
        notes: found.notes || [],
        examples: found.examples || [],
      });
    }
  });
  return list;
}

// Auto-generate packs: group by topic ~15 words each
function groupByTopic(vocab: VocabEntry[], packSize = 15): VocabPack[] {
  const topicMap: Record<string, VocabEntry[]> = {};
  
  vocab.forEach(v => {
    const topics = v.tags || ['chung'];
    topics.forEach(t => {
      if (!topicMap[t]) topicMap[t] = [];
      topicMap[t].push(v);
    });
  });

  const packs: VocabPack[] = [];
  let idx = 0;

  // Level-based packs first
  for (let level = 1; level <= 3; level++) {
    const levelWords = vocab.filter(v => v.hsk2Level === level || v.hsk3Level === level);
    for (let i = 0; i < levelWords.length; i += packSize) {
      const chunk = levelWords.slice(i, i + packSize);
      if (chunk.length < 5) continue;
      const packNum = Math.floor(i / packSize) + 1;
      
      // Gán điểm ngữ pháp tương ứng cho bài học
      let assignedGrammar: GrammarPoint[] = [];
      if (level === 1) {
        const mappedIds = hsk1GrammarMap[packNum] || [
          `gram_hsk1_${(((packNum - 1) % 40) + 1).toString().padStart(2, '0')}`
        ];
        assignedGrammar = getGrammarPointsByIds(mappedIds);
      } else {
        // Cho HSK 2 và HSK 3, lấy các chuyên đề theo cấp tương ứng
        const lvlTopics = grammarTopics.filter(t => t.level === `HSK${level}`);
        if (lvlTopics.length > 0) {
          const pickedTopic = lvlTopics[(packNum - 1) % lvlTopics.length];
          assignedGrammar = getGrammarPointsByIds([pickedTopic.id]);
        }
      }

      packs.push({
        id: `hsk${level}_pack${packNum}`,
        title: `HSK ${level} - Bài ${packNum}`,
        titleVi: `HSK cấp ${level} - Phần ${packNum}`,
        topic: `hsk${level}`,
        hsk2Levels: [level],
        hsk3Levels: [level],
        vocabIds: chunk.map(v => v.id),
        orderIndex: idx++,
        grammarPoints: assignedGrammar,
      });
    }
  }

  // Topic packs
  const topicNames: Record<string, string> = {
    'ăn uống': 'Ăn uống & Thực phẩm',
    'gia đình': 'Gia đình',
    'giao tiếp': 'Giao tiếp hàng ngày',
    'giao thông': 'Giao thông & Du lịch',
    'cảm xúc': 'Cảm xúc & Tính cách',
    'thời gian': 'Thời gian & Ngày tháng',
    'công việc': 'Công việc & Nghề nghiệp',
    'mua sắm': 'Mua sắm & Tiền bạc',
    'thể thao': 'Thể thao & Giải trí',
    'ngữ pháp': 'Điểm ngữ pháp quan trọng',
    'học tập': 'Học tập & Giáo dục',
  };

  Object.entries(topicNames).forEach(([topic, titleVi]) => {
    const topicWords = topicMap[topic] || [];
    if (topicWords.length < 5) return;
    for (let i = 0; i < topicWords.length; i += packSize) {
      const chunk = topicWords.slice(i, i + packSize);
      if (chunk.length < 5) continue;
      packs.push({
        id: `topic_${topic.replace(/\s/g, '_')}_${Math.floor(i / packSize)}`,
        title: titleVi,
        titleVi,
        topic,
        hsk2Levels: [...new Set(chunk.map(v => v.hsk2Level).filter(Boolean) as number[])],
        hsk3Levels: [...new Set(chunk.map(v => v.hsk3Level).filter(Boolean) as number[])],
        vocabIds: chunk.map(v => v.id),
        orderIndex: idx++,
      });
    }
  });

  return packs;
}

export const allPacks: VocabPack[] = groupByTopic(allVocab);

// Get vocab by level filters
export function getVocabByFilter(opts: {
  hskVersion: 'hsk2' | 'hsk3' | 'both';
  levels: number[];
}): VocabEntry[] {
  return allVocab.filter(v => {
    if (opts.hskVersion === 'hsk2') return opts.levels.includes(v.hsk2Level ?? 0);
    if (opts.hskVersion === 'hsk3') return opts.levels.includes(v.hsk3Level ?? 0);
    return opts.levels.includes(v.hsk2Level ?? 0) || opts.levels.includes(v.hsk3Level ?? 0);
  });
}

// Topic tags list
export const allTopics = [
  'ăn uống', 'gia đình', 'giao tiếp', 'giao thông', 'cảm xúc',
  'thời gian', 'công việc', 'mua sắm', 'thể thao', 'ngữ pháp',
  'học tập', 'số đếm', 'màu sắc', 'động vật', 'môi trường',
];
