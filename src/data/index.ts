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

// Mapping trọng điểm ngữ pháp Migii HSK 1 cho từng bài học chuyên đề
const hsk1GrammarMap: Record<number, string[]> = {
  // Bài 3: Chuyên đề Ngữ pháp 1 (dùng từ vựng Bài 1 & Bài 2: Chào hỏi, tên tuổi, xưng hô)
  1: ['gram_hsk1_20', 'gram_hsk1_32', 'gram_hsk1_02', 'gram_hsk1_39'], // Động từ 叫 & 什么 + Câu chữ 是 + Phủ định 不 + Hỏi 吗
  2: ['gram_hsk1_20', 'gram_hsk1_32', 'gram_hsk1_02', 'gram_hsk1_39'],
  // Bài 7: Chuyên đề Ngữ pháp 2 (dùng từ vựng Bài 5 & Bài 6: Số đếm, Gia đình, Xưng hô)
  3: ['gram_hsk1_19', 'gram_hsk1_01', 'gram_hsk1_14', 'gram_hsk1_08', 'gram_hsk1_40'], // Động từ 有/没有 + Sở hữu 的 + Lượng từ 个/口 + So sánh 二 và 两
  4: ['gram_hsk1_19', 'gram_hsk1_01', 'gram_hsk1_14', 'gram_hsk1_08', 'gram_hsk1_40'],
  // Bài 11: Chuyên đề Ngữ pháp 3 (dùng từ vựng Bài 9 & Bài 10: Thời gian, Ngày tháng, Địa điểm, Nơi chốn)
  5: ['gram_hsk1_09', 'gram_hsk1_12', 'gram_hsk1_17', 'gram_hsk1_21', 'gram_hsk1_31'], // Ngày tháng năm + Giờ giấc + Ở đâu 在 + Đi đâu 去 + Trật tự câu S+Time+Place+V
  6: ['gram_hsk1_09', 'gram_hsk1_12', 'gram_hsk1_17', 'gram_hsk1_21', 'gram_hsk1_31'],
  // Bài 15: Chuyên đề Ngữ pháp 4 (dùng từ vựng Bài 13 & Bài 14: Ẩm thực, Mua sắm, Giá cả)
  7: ['gram_hsk1_27', 'gram_hsk1_24', 'gram_hsk1_33', 'gram_hsk1_34'], // Muốn 想/要 + Kỹ năng 会 + Cảm thán 太...了 + Vị ngữ tính từ 很
  8: ['gram_hsk1_27', 'gram_hsk1_24', 'gram_hsk1_33', 'gram_hsk1_34'],
  // Bài 19: Chuyên đề Ngữ pháp 5 (dùng từ vựng Bài 17 & Bài 18: Giao thông, Phương tiện, Cảm xúc)
  9: ['gram_hsk1_15', 'gram_hsk1_16', 'gram_hsk1_03', 'gram_hsk1_04'], // Hỏi 呢 + Gợi ý 吧 + Phạm vi 都 + Cũng 也
  10: ['gram_hsk1_15', 'gram_hsk1_16', 'gram_hsk1_03', 'gram_hsk1_04'],
  // Bài 23: Chuyên đề Ngữ pháp 6 (dùng từ vựng Bài 21 & Bài 22: Đồ vật, Thiết bị, Hoạt động)
  11: ['gram_hsk1_05', 'gram_hsk1_06', 'gram_hsk1_28', 'gram_hsk1_36'], // Liên từ 和 + Lựa chọn 还是 + Cách làm 怎么 + Vị trí từ để hỏi
  12: ['gram_hsk1_05', 'gram_hsk1_06', 'gram_hsk1_28', 'gram_hsk1_36'],
  // Bài 26: Chuyên đề Ngữ pháp 7 (Tổng duyệt các mẫu câu & Lệnh cấm)
  13: ['gram_hsk1_30', 'gram_hsk1_29', 'gram_hsk1_26', 'gram_hsk1_35'], // Đừng 不要 + Phủ định 没 + Cho phép 可以 + Hỏi chính phản V+不+V
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

// Mapping tiêu đề bài học sư phạm chuẩn cho HSK 1
const hsk1PackTitles: Record<number, { title: string; titleVi: string }> = {
  1: { title: "Bài 1: Chào hỏi & Nhập môn", titleVi: "Chào hỏi & Đại từ nhân xưng (你好, 您, 你们, 谢谢, 再见...)" },
  2: { title: "Bài 2: Tên tuổi & Làm quen", titleVi: "Tên tuổi & Giới thiệu bản thân (我, 叫, 什么, 名字, 是, 认识, 高兴...)" },
  3: { title: "Bài 5: Số đếm & Thứ tự", titleVi: "Số đếm & Thứ tự (一, 二, 三, 四, 五...)" },
  4: { title: "Bài 6: Gia đình & Xưng hô", titleVi: "Gia đình & Xưng hô (爸爸, 妈妈, 哥哥, 有, 没有...)" },
  5: { title: "Bài 9: Thời gian & Ngày tháng", titleVi: "Thời gian & Ngày tháng (今天, 明天, 几点, 星期...)" },
  6: { title: "Bài 10: Địa điểm & Trường lớp", titleVi: "Địa điểm & Nơi chốn (学校, 医院, 商店, 在, 哪儿...)" },
  7: { title: "Bài 13: Ẩm thực & Thức uống", titleVi: "Ẩm thực & Thức uống (米饭, 水, 茶, 吃, 喝...)" },
  8: { title: "Bài 14: Mua sắm & Tiền bạc", titleVi: "Mua sắm & Tiền bạc (钱, 块, 买, 贵, 便宜, 多少钱...)" },
  9: { title: "Bài 17: Phương tiện giao thông", titleVi: "Phương tiện giao thông (飞机, 火车, 汽车, 坐, 开...)" },
  10: { title: "Bài 18: Cảm xúc & Tính chất", titleVi: "Cảm xúc & Tính chất (大, 小, 多, 少, 冷, 热, 漂亮...)" },
  11: { title: "Bài 21: Đồ vật & Thiết bị", titleVi: "Đồ vật & Thiết bị (桌子, 电视, 电脑, 手机, 电话...)" },
  12: { title: "Bài 22: Hoạt động thường nhật", titleVi: "Hoạt động thường nhật & Giúp đỡ (睡觉, 说话, 读, 写, 帮, 帮忙...)" },
  13: { title: "Bài 25: Sở thích & Vui chơi", titleVi: "Sở thích & Vui chơi (爱, 爱好, 喜欢, 唱歌, 玩儿...)" },
};

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

      const customTitle = level === 1 ? hsk1PackTitles[packNum] : undefined;
      packs.push({
        id: `hsk${level}_pack${packNum}`,
        title: customTitle ? customTitle.title : `HSK ${level} - Bài ${packNum}`,
        titleVi: customTitle ? customTitle.titleVi : `HSK cấp ${level} - Phần ${packNum}`,
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
