import type { VocabPack, VocabEntry } from '../types';
import { hsk1Vocab } from './hsk_vocab_hsk1';
import { hsk2Vocab } from './hsk_vocab_hsk2';
import { hsk3Vocab } from './hsk_vocab_hsk3';

// Combine all vocab
export const allVocab: VocabEntry[] = [
  ...hsk1Vocab,
  ...hsk2Vocab,
  ...hsk3Vocab,
];

export const vocabById: Record<string, VocabEntry> = {};
allVocab.forEach(v => { vocabById[v.id] = v; });

// Auto-generate packs: group by topic ~15-20 words each
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
  for (let level = 1; level <= 5; level++) {
    const levelWords = vocab.filter(v => v.hsk2Level === level || v.hsk3Level === level);
    for (let i = 0; i < levelWords.length; i += packSize) {
      const chunk = levelWords.slice(i, i + packSize);
      if (chunk.length < 5) continue;
      packs.push({
        id: `hsk${level}_pack${Math.floor(i / packSize) + 1}`,
        title: `HSK ${level} - Bài ${Math.floor(i / packSize) + 1}`,
        titleVi: `HSK cấp ${level} - Phần ${Math.floor(i / packSize) + 1}`,
        topic: `hsk${level}`,
        hsk2Levels: [level],
        hsk3Levels: [level],
        vocabIds: chunk.map(v => v.id),
        orderIndex: idx++,
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
