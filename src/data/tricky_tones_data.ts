import type { ToneChallenge } from '../types';

export const trickyToneChallenges: ToneChallenge[] = [
  {
    "id": "tone_gao_1",
    "audioText": "高",
    "promptPinyinWithoutTone": "gao",
    "correctPinyin": "gāo",
    "correctTone": 1,
    "category": "four_tones",
    "meaning": "Cao ráo (高兴, 很高)",
    "distractors": [
      {
        "char": "高",
        "pinyin": "gāo",
        "meaning": "cao ráo (高兴)",
        "tone": 1
      },
      {
        "char": "搞",
        "pinyin": "gǎo",
        "meaning": "làm, xử lý (搞定)",
        "tone": 3
      },
      {
        "char": "告",
        "pinyin": "gào",
        "meaning": "báo cho biết (告诉)",
        "tone": 4
      },
      {
        "char": "糕",
        "pinyin": "gāo",
        "meaning": "bánh ngọt (蛋糕)",
        "tone": 1
      }
    ],
    "tip": "高兴 (gāoxìng - vui vẻ) thanh 1 cao đều. 告诉 (gàosu - nói cho biết) gào thanh 4 dứt khoát."
  },
  {
    "id": "tone_gao_2",
    "audioText": "告",
    "promptPinyinWithoutTone": "gao",
    "correctPinyin": "gào",
    "correctTone": 4,
    "category": "tone1_vs_tone4",
    "meaning": "Báo, cáo (告诉)",
    "distractors": [
      {
        "char": "高",
        "pinyin": "gāo",
        "meaning": "cao",
        "tone": 1
      },
      {
        "char": "稿",
        "pinyin": "gǎo",
        "meaning": "bản thảo",
        "tone": 3
      },
      {
        "char": "告",
        "pinyin": "gào",
        "meaning": "nói cho biết (告诉)",
        "tone": 4
      },
      {
        "char": "浩",
        "pinyin": "hào",
        "meaning": "sai âm",
        "tone": 4
      }
    ],
    "tip": "告诉 (gàosu): gào thanh 4 mạnh mẽ, su khinh thanh nhẹ."
  },
  {
    "id": "tone_dong_1",
    "audioText": "东",
    "promptPinyinWithoutTone": "dong",
    "correctPinyin": "dōng",
    "correctTone": 1,
    "category": "four_tones",
    "meaning": "Phía đông, đồ vật (东西)",
    "distractors": [
      {
        "char": "东",
        "pinyin": "dōng",
        "meaning": "phía đông, đồ vật (东西)",
        "tone": 1
      },
      {
        "char": "懂",
        "pinyin": "dǒng",
        "meaning": "hiểu biết (懂不懂)",
        "tone": 3
      },
      {
        "char": "动",
        "pinyin": "dòng",
        "meaning": "cử động, vận động (运动)",
        "tone": 4
      },
      {
        "char": "冬",
        "pinyin": "dōng",
        "meaning": "mùa đông (冬天)",
        "tone": 1
      }
    ],
    "tip": "买东西 (Mǎi dōngxi): dōng thanh 1. 听懂了 (Tīng dǒng le): dǒng thanh 3."
  },
  {
    "id": "tone_dong_2",
    "audioText": "懂",
    "promptPinyinWithoutTone": "dong",
    "correctPinyin": "dǒng",
    "correctTone": 3,
    "category": "tone3_vs_tone4",
    "meaning": "Hiểu biết (听得懂)",
    "distractors": [
      {
        "char": "东",
        "pinyin": "dōng",
        "meaning": "đông",
        "tone": 1
      },
      {
        "char": "董",
        "pinyin": "dǒng",
        "meaning": "họ Đổng",
        "tone": 3
      },
      {
        "char": "懂",
        "pinyin": "dǒng",
        "meaning": "hiểu, ngộ ra",
        "tone": 3
      },
      {
        "char": "动",
        "pinyin": "dòng",
        "meaning": "chuyển động",
        "tone": 4
      }
    ],
    "tip": "懂 (dǒng): Thanh 3 chìm sâu rồi vút lên biểu thị sự thấu hiểu."
  },
  {
    "id": "tone_shang_1",
    "audioText": "商",
    "promptPinyinWithoutTone": "shang",
    "correctPinyin": "shāng",
    "correctTone": 1,
    "category": "four_tones",
    "meaning": "Buôn bán, thương mại (商店)",
    "distractors": [
      {
        "char": "商",
        "pinyin": "shāng",
        "meaning": "buôn bán (商店)",
        "tone": 1
      },
      {
        "char": "赏",
        "pinyin": "shǎng",
        "meaning": "thưởng, ngắm (赏月)",
        "tone": 3
      },
      {
        "char": "上",
        "pinyin": "shàng",
        "meaning": "ở trên, đi lên (上面, 上班)",
        "tone": 4
      },
      {
        "char": "伤",
        "pinyin": "shāng",
        "meaning": "vết thương",
        "tone": 1
      }
    ],
    "tip": "商店 (shāngdiàn): shāng thanh 1. 上车 (shàng chē): shàng thanh 4 giật nhanh."
  },
  {
    "id": "tone_shang_2",
    "audioText": "上",
    "promptPinyinWithoutTone": "shang",
    "correctPinyin": "shàng",
    "correctTone": 4,
    "category": "tone1_vs_tone4",
    "meaning": "Trên, lên (上午, 上课)",
    "distractors": [
      {
        "char": "商",
        "pinyin": "shāng",
        "meaning": "thương nhân",
        "tone": 1
      },
      {
        "char": "晌",
        "pinyin": "shǎng",
        "meaning": "buổi trưa",
        "tone": 3
      },
      {
        "char": "赏",
        "pinyin": "shǎng",
        "meaning": "thưởng",
        "tone": 3
      },
      {
        "char": "上",
        "pinyin": "shàng",
        "meaning": "trên, lên xe, đi làm",
        "tone": 4
      }
    ],
    "tip": "上 (shàng): Thanh 4 dứt khoát như một bước chân bước lên xe."
  },
  {
    "id": "tone_zhi_1",
    "audioText": "知",
    "promptPinyinWithoutTone": "zhi",
    "correctPinyin": "zhī",
    "correctTone": 1,
    "category": "four_tones",
    "meaning": "Biết (知道)",
    "distractors": [
      {
        "char": "知",
        "pinyin": "zhī",
        "meaning": "biết (知道)",
        "tone": 1
      },
      {
        "char": "直",
        "pinyin": "zhí",
        "meaning": "thẳng thắn (一直)",
        "tone": 2
      },
      {
        "char": "只",
        "pinyin": "zhǐ",
        "meaning": "chỉ, vỏn vẹn (只有)",
        "tone": 3
      },
      {
        "char": "字",
        "pinyin": "zì",
        "meaning": "chữ Hán (汉字)",
        "tone": 4
      }
    ],
    "tip": "知道 (zhīdào): zhī thanh 1. 一直 (yìzhí): zhí thanh 2 đi lên."
  },
  {
    "id": "tone_zhi_2",
    "audioText": "直",
    "promptPinyinWithoutTone": "zhi",
    "correctPinyin": "zhí",
    "correctTone": 2,
    "category": "tone2_vs_tone3",
    "meaning": "Thẳng, liên tục (一直)",
    "distractors": [
      {
        "char": "支",
        "pinyin": "zhī",
        "meaning": "lượng từ cái bút (一支笔)",
        "tone": 1
      },
      {
        "char": "直",
        "pinyin": "zhí",
        "meaning": "thẳng, cứ mãi",
        "tone": 2
      },
      {
        "char": "纸",
        "pinyin": "zhǐ",
        "meaning": "tờ giấy",
        "tone": 3
      },
      {
        "char": "志",
        "pinyin": "zhì",
        "meaning": "ý chí",
        "tone": 4
      }
    ],
    "tip": "一直走 (Yìzhí zǒu - Đi thẳng): zhí thanh 2 vút lên phía trước."
  },
  {
    "id": "tone_nan_1",
    "audioText": "南",
    "promptPinyinWithoutTone": "nan",
    "correctPinyin": "nán",
    "correctTone": 2,
    "category": "tone2_vs_tone3",
    "meaning": "Phương nam, phía nam (南方)",
    "distractors": [
      {
        "char": "南",
        "pinyin": "nán",
        "meaning": "phía nam",
        "tone": 2
      },
      {
        "char": "男",
        "pinyin": "nán",
        "meaning": "nam giới (男人)",
        "tone": 2
      },
      {
        "char": "难",
        "pinyin": "nán",
        "meaning": "khó khăn (很难)",
        "tone": 2
      },
      {
        "char": "喃",
        "pinyin": "nán",
        "meaning": "thì thầm",
        "tone": 2
      }
    ],
    "tip": "男 (nán - nam) và 难 (nán - khó): Đều mang thanh 2 đi lên. Đàn ông rất khó! (男人很难)"
  },
  {
    "id": "tone_xie_1",
    "audioText": "些",
    "promptPinyinWithoutTone": "xie",
    "correctPinyin": "xiē",
    "correctTone": 1,
    "category": "four_tones",
    "meaning": "Một vài, một ít (这些, 那些)",
    "distractors": [
      {
        "char": "些",
        "pinyin": "xiē",
        "meaning": "những, vài (一些)",
        "tone": 1
      },
      {
        "char": "斜",
        "pinyin": "xié",
        "meaning": "nghiêng nghiêng",
        "tone": 2
      },
      {
        "char": "写",
        "pinyin": "xiě",
        "meaning": "viết chữ (写字)",
        "tone": 3
      },
      {
        "char": "谢",
        "pinyin": "xiè",
        "meaning": "cảm ơn (谢谢)",
        "tone": 4
      }
    ],
    "tip": "写字 (xiě zì): xiě thanh 3 uốn lượn như nét bút. 谢谢 (xièxie): xiè thanh 4 dứt khoát."
  },
  {
    "id": "tone_xie_2",
    "audioText": "谢",
    "promptPinyinWithoutTone": "xie",
    "correctPinyin": "xiè",
    "correctTone": 4,
    "category": "tone3_vs_tone4",
    "meaning": "Cảm ơn (谢谢)",
    "distractors": [
      {
        "char": "些",
        "pinyin": "xiē",
        "meaning": "vài",
        "tone": 1
      },
      {
        "char": "鞋",
        "pinyin": "xié",
        "meaning": "đôi giày",
        "tone": 2
      },
      {
        "char": "写",
        "pinyin": "xiě",
        "meaning": "viết",
        "tone": 3
      },
      {
        "char": "谢",
        "pinyin": "xiè",
        "meaning": "cảm ơn",
        "tone": 4
      }
    ],
    "tip": "谢谢 (xièxie): Chữ đầu là thanh 4, rơi nhanh xuống, chữ sau thanh nhẹ."
  },
  {
    "id": "tone_zai_1",
    "audioText": "在",
    "promptPinyinWithoutTone": "zai",
    "correctPinyin": "zài",
    "correctTone": 4,
    "category": "tone3_vs_tone4",
    "meaning": "Ở, tại, đang (在哪儿, 正在)",
    "distractors": [
      {
        "char": "栽",
        "pinyin": "zāi",
        "meaning": "trồng cây",
        "tone": 1
      },
      {
        "char": "灾",
        "pinyin": "zāi",
        "meaning": "tai họa",
        "tone": 1
      },
      {
        "char": "宰",
        "pinyin": "zǎi",
        "meaning": "mổ thịt, chém giá",
        "tone": 3
      },
      {
        "char": "在",
        "pinyin": "zài",
        "meaning": "ở tại, đang (在哪儿)",
        "tone": 4
      }
    ],
    "tip": "再见 (zàijiàn) và 我在家 (Wǒ zài jiā): zài đều là thanh 4 vững chãi như chân cắm xuống đất."
  },
  {
    "id": "tone_hou_1",
    "audioText": "后",
    "promptPinyinWithoutTone": "hou",
    "correctPinyin": "hòu",
    "correctTone": 4,
    "category": "tone2_vs_tone3",
    "meaning": "Phía sau, sau này (后面, 以后)",
    "distractors": [
      {
        "char": "吼",
        "pinyin": "hǒu",
        "meaning": "gầm thét",
        "tone": 3
      },
      {
        "char": "猴",
        "pinyin": "hóu",
        "meaning": "con khỉ",
        "tone": 2
      },
      {
        "char": "厚",
        "pinyin": "hòu",
        "meaning": "dày cộm",
        "tone": 4
      },
      {
        "char": "后",
        "pinyin": "hòu",
        "meaning": "phía sau (后面)",
        "tone": 4
      }
    ],
    "tip": "后面 (hòumiàn - phía sau): hòu thanh 4 dứt khoát lùi lại."
  },
  {
    "id": "tone_duo_1",
    "audioText": "多",
    "promptPinyinWithoutTone": "duo",
    "correctPinyin": "duō",
    "correctTone": 1,
    "category": "four_tones",
    "meaning": "Nhiều, bao nhiêu (多少)",
    "distractors": [
      {
        "char": "多",
        "pinyin": "duō",
        "meaning": "nhiều (多少)",
        "tone": 1
      },
      {
        "char": "夺",
        "pinyin": "duó",
        "meaning": "đoạt lấy",
        "tone": 2
      },
      {
        "char": "朵",
        "pinyin": "duǒ",
        "meaning": "bông hoa (一朵花)",
        "tone": 3
      },
      {
        "char": "跺",
        "pinyin": "duò",
        "meaning": "giậm chân",
        "tone": 4
      }
    ],
    "tip": "很多 (hěn duō): duō thanh 1 cao đều. 一朵花 (yì duǒ huā): duǒ thanh 3."
  },
  {
    "id": "tone_sheng_1",
    "audioText": "声",
    "promptPinyinWithoutTone": "sheng",
    "correctPinyin": "shēng",
    "correctTone": 1,
    "category": "four_tones",
    "meaning": "Âm thanh, tiếng (声音)",
    "distractors": [
      {
        "char": "声",
        "pinyin": "shēng",
        "meaning": "âm thanh, tiếng",
        "tone": 1
      },
      {
        "char": "生",
        "pinyin": "shēng",
        "meaning": "học sinh (学生)",
        "tone": 1
      },
      {
        "char": "省",
        "pinyin": "shěng",
        "meaning": "tỉnh thành, tiết kiệm",
        "tone": 3
      },
      {
        "char": "胜",
        "pinyin": "shèng",
        "meaning": "chiến thắng",
        "tone": 4
      }
    ],
    "tip": "声音 (shēngyīn) thanh 1 vang dài. 省钱 (shěng qián) thanh 3 thắt lưng buộc bụng."
  },
  {
    "id": "tone_zuo_1",
    "audioText": "做",
    "promptPinyinWithoutTone": "zuo",
    "correctPinyin": "zuò",
    "correctTone": 4,
    "category": "tone3_vs_tone4",
    "meaning": "Làm (做饭, 做作业)",
    "distractors": [
      {
        "char": "作",
        "pinyin": "zuò",
        "meaning": "công việc (工作)",
        "tone": 4
      },
      {
        "char": "坐",
        "pinyin": "zuò",
        "meaning": "ngồi (请坐)",
        "tone": 4
      },
      {
        "char": "做",
        "pinyin": "zuò",
        "meaning": "làm (做菜)",
        "tone": 4
      },
      {
        "char": "左",
        "pinyin": "zuǒ",
        "meaning": "bên trái (左边)",
        "tone": 3
      }
    ],
    "tip": "左边 (zuǒbiān - bên trái) thanh 3 uốn. 坐车 (zuò chē - ngồi xe) và 做饭 (zuò fàn - nấu cơm) đều thanh 4!"
  }
];

/**
 * Trả về bộ câu hỏi ngẫu nhiên từ kho dữ liệu thanh điệu, xáo trộn đáp án mỗi lần chơi.
 */
export function getRandomToneChallenges(count = 10, category?: string): ToneChallenge[] {
  let pool = [...trickyToneChallenges];
  if (category && category !== 'all') {
    pool = pool.filter(c => (c as any).category === category);
    if (pool.length === 0) pool = [...trickyToneChallenges];
  }

  // Xáo trộn Fisher-Yates
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  // Xáo trộn các lựa chọn distractors bên trong từng câu
  return selected.map(q => ({
    ...q,
    distractors: [...q.distractors].sort(() => Math.random() - 0.5),
  }));
}
