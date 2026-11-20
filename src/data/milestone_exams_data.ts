import type { ExamQuestion, HSKMockExam } from './hsk_mock_exams_data';

export const milestonePeriodicExams: HSKMockExam[] = Array.from({ length: 6 }, (_, i) => {
  const mIndex = i + 1;
  const startPack = (mIndex - 1) * 3 + 1;
  const endPack = mIndex * 3;

  return {
    id: `milestone_periodic_${mIndex}`,
    level: 1,
    code: `ĐỊNH KỲ ${mIndex}`,
    category: 'milestone',
    coveredPacks: `Bài ${startPack}, ${startPack + 1}, ${endPack}`,
    title: `HSK 1 定期测试 · 单元 ${mIndex} (Bài Kiểm Tra Định Kỳ ${mIndex})`,
    titleVi: `Bài kiểm tra định kỳ ${mIndex} · Ôn tập cuốn chiếu Bài ${startPack} + ${startPack + 1} + ${endPack}`,
    durationMinutes: 20,
    totalQuestions: 20,
    passScore: 60,
    questions: [
      // 10 Listening questions
      {
        id: 1, section: 'listening', part: 1, type: 'image_choice',
        audioScript: '你好！很高兴认识你。 你好！很高兴认识你。',
        options: [
          { key: 'A', imageIcon: '🤝', imageDesc: 'Hai người bắt tay chào hỏi (你好)' },
          { key: 'B', imageIcon: '🏃', imageDesc: 'Chàng trai đang chạy bộ (跑步)' },
          { key: 'C', imageIcon: '😴', imageDesc: 'Em bé đang ngủ say (睡觉)' }
        ],
        correctAnswer: 'A',
        explanation: 'Audio: "你好！很高兴认识你" (Chào bạn! Rất vui được gặp bạn). Tranh A vẽ hai người bắt tay.'
      },
      {
        id: 2, section: 'listening', part: 1, type: 'image_choice',
        audioScript: '我想喝一杯水。 我想喝一杯水。',
        options: [
          { key: 'A', imageIcon: '🍎', imageDesc: 'Quả táo đỏ (苹果)' },
          { key: 'B', imageIcon: '🥛', imageDesc: 'Ly nước lọc mát (喝水)' },
          { key: 'C', imageIcon: '🚗', imageDesc: 'Chiếc xe hơi (汽车)' }
        ],
        correctAnswer: 'B',
        explanation: 'Audio: "我想喝一杯水" (Tôi muốn uống một cốc nước). Đáp án B là cốc nước (喝水).'
      },
      {
        id: 3, section: 'listening', part: 1, type: 'image_choice',
        audioScript: '这里有两本书。 这里有两本书。',
        options: [
          { key: 'A', imageIcon: '📖', imageDesc: 'Hai cuốn sách (书)' },
          { key: 'B', imageIcon: '🍞', imageDesc: 'Bánh mì (面包)' },
          { key: 'C', imageIcon: '🥚', imageDesc: 'Quả trứng (鸡蛋)' }
        ],
        correctAnswer: 'A',
        explanation: 'Audio: "这里有两本书" -> A: Cuốn sách.'
      },
      {
        id: 4, section: 'listening', part: 1, type: 'image_choice',
        audioScript: '他们一起看电影。 他们一起看电影。',
        options: [
          { key: 'A', imageIcon: '✍️', imageDesc: 'Học bài (写字)' },
          { key: 'B', imageIcon: '🎬', imageDesc: 'Rạp chiếu phim (看电影)' },
          { key: 'C', imageIcon: '📱', imageDesc: 'Lướt điện thoại (看手机)' }
        ],
        correctAnswer: 'B',
        explanation: 'Audio: "他们一起看电影" -> B: Xem phim.'
      },
      {
        id: 5, section: 'listening', part: 1, type: 'image_choice',
        audioScript: '桌子上有很多水果。 桌子上有很多水果。',
        options: [
          { key: 'A', imageIcon: '🍲', imageDesc: 'Bát canh (汤)' },
          { key: 'B', imageIcon: '🍇', imageDesc: 'Đĩa hoa quả tươi (水果)' },
          { key: 'C', imageIcon: '👗', imageDesc: 'Chiếc váy (衣服)' }
        ],
        correctAnswer: 'B',
        explanation: 'Audio: "桌子上有很多水果" -> B: Hoa quả.'
      },
      {
        id: 6, section: 'listening', part: 2, type: 'text_choice',
        audioScript: '你叫什么名字？ 你叫什么名字？',
        questionText: '★ 听问题，选择正确答案：',
        options: [
          { key: 'A', text: '我叫王朋。', pinyin: 'Wǒ jiào Wáng Péng.' },
          { key: 'B', text: '我是老师。', pinyin: 'Wǒ shì lǎoshī.' },
          { key: 'C', text: '我不去。', pinyin: 'Wǒ bù qù.' }
        ],
        correctAnswer: 'A',
        explanation: 'Hỏi tên -> Trả lời tên riêng: A.'
      },
      {
        id: 7, section: 'listening', part: 2, type: 'text_choice',
        audioScript: '今天星期几？ 今天星期几？',
        questionText: '★ 听问题，选择正确答案：',
        options: [
          { key: 'A', text: '十块钱。', pinyin: 'Shí kuài qián.' },
          { key: 'B', text: '星期五。', pinyin: 'Xīngqīwǔ.' },
          { key: 'C', text: '太好了。', pinyin: 'Tài hǎo le.' }
        ],
        correctAnswer: 'B',
        explanation: 'Hỏi thứ trong tuần -> B: 星期五.'
      },
      {
        id: 8, section: 'listening', part: 2, type: 'text_choice',
        audioScript: '你想喝茶还是喝水？ 你想喝茶还是喝水？',
        questionText: '★ 听问题，选择正确答案：',
        options: [
          { key: 'A', text: '我喝茶。', pinyin: 'Wǒ hē chá.' },
          { key: 'B', text: '在家里。', pinyin: 'Zài jiā lǐ.' },
          { key: 'C', text: '很高兴。', pinyin: 'Hěn gāoxìng.' }
        ],
        correctAnswer: 'A',
        explanation: 'Hỏi chọn uống gì -> A: 我喝茶.'
      },
      {
        id: 9, section: 'listening', part: 2, type: 'text_choice',
        audioScript: '这是谁的书？ 这是谁的书？',
        questionText: '★ 听问题，选择正确答案：',
        options: [
          { key: 'A', text: '这是我的书。', pinyin: 'Zhè shì wǒ de shū.' },
          { key: 'B', text: '很好吃。', pinyin: 'Hěn hǎochī.' },
          { key: 'C', text: '没关系。', pinyin: 'Méi guānxi.' }
        ],
        correctAnswer: 'A',
        explanation: 'Hỏi sở hữu -> A: 这是我的书.'
      },
      {
        id: 10, section: 'listening', part: 2, type: 'text_choice',
        audioScript: '火车站远不远？ 火车站远不远？',
        questionText: '★ 听问题，选择正确答案：',
        options: [
          { key: 'A', text: '不远，很近。', pinyin: 'Bù yuǎn, hěn jìn.' },
          { key: 'B', text: '现在两点。', pinyin: 'Xiànzài liǎng diǎn.' },
          { key: 'C', text: '有很多人。', pinyin: 'Yǒu hěn duō rén.' }
        ],
        correctAnswer: 'A',
        explanation: 'Hỏi xa gần -> A: 不远，很近.'
      },
      // 10 Reading questions
      {
        id: 11, section: 'reading', part: 1, type: 'cloze_match',
        prompt: '你好，请问你 ____ 什么名字？',
        promptPinyin: 'Nǐ hǎo, qǐngwèn nǐ ____ shénme míngzi?',
        options: [
          { key: 'A', text: '叫', pinyin: 'jiào' },
          { key: 'B', text: '吃', pinyin: 'chī' },
          { key: 'C', text: '不', pinyin: 'bù' },
          { key: 'D', text: '看', pinyin: 'kàn' },
          { key: 'E', text: '岁', pinyin: 'suì' },
          { key: 'F', text: '是', pinyin: 'shì' }
        ],
        correctAnswer: 'A',
        explanation: 'Ghép từ: 叫什么名字 -> A.'
      },
      {
        id: 12, section: 'reading', part: 1, type: 'cloze_match',
        prompt: '李老师 ____ 中国人，她是美国人。',
        promptPinyin: 'Lǐ lǎoshī ____ Zhōngguó rén, tā shì Měiguó rén.',
        options: [
          { key: 'A', text: '叫', pinyin: 'jiào' },
          { key: 'B', text: '吃', pinyin: 'chī' },
          { key: 'C', text: '不', pinyin: 'bù' },
          { key: 'D', text: '看', pinyin: 'kàn' },
          { key: 'E', text: '岁', pinyin: 'suì' },
          { key: 'F', text: '是', pinyin: 'shì' }
        ],
        correctAnswer: 'C',
        explanation: 'Phủ định: 不是 -> C.'
      },
      {
        id: 13, section: 'reading', part: 1, type: 'cloze_match',
        prompt: '他今天去朋友家 ____ 电视。',
        promptPinyin: 'Tā jīntiān qù péngyou jiā ____ diànshì.',
        options: [
          { key: 'A', text: '叫', pinyin: 'jiào' },
          { key: 'B', text: '吃', pinyin: 'chī' },
          { key: 'C', text: '不', pinyin: 'bù' },
          { key: 'D', text: '看', pinyin: 'kàn' },
          { key: 'E', text: '岁', pinyin: 'suì' },
          { key: 'F', text: '是', pinyin: 'shì' }
        ],
        correctAnswer: 'D',
        explanation: 'Xem ti vi: 看电视 -> D.'
      },
      {
        id: 14, section: 'reading', part: 1, type: 'cloze_match',
        prompt: '我女儿今年五 ____ 了，在上学。',
        promptPinyin: 'Wǒ nǚ\'ér jīnnián wǔ ____ le, zài shàngxué.',
        options: [
          { key: 'A', text: '叫', pinyin: 'jiào' },
          { key: 'B', text: '吃', pinyin: 'chī' },
          { key: 'C', text: '不', pinyin: 'bù' },
          { key: 'D', text: '看', pinyin: 'kàn' },
          { key: 'E', text: '岁', pinyin: 'suì' },
          { key: 'F', text: '是', pinyin: 'shì' }
        ],
        correctAnswer: 'E',
        explanation: '5 tuổi: 五岁 -> E.'
      },
      {
        id: 15, section: 'reading', part: 1, type: 'cloze_match',
        prompt: '我们中午一起去 ____ 中国菜吧！',
        promptPinyin: 'Wǒmen zhōngwǔ yìqǐ qù ____ Zhōngguó cài ba!',
        options: [
          { key: 'A', text: '叫', pinyin: 'jiào' },
          { key: 'B', text: '吃', pinyin: 'chī' },
          { key: 'C', text: '不', pinyin: 'bù' },
          { key: 'D', text: '看', pinyin: 'kàn' },
          { key: 'E', text: '岁', pinyin: 'suì' },
          { key: 'F', text: '是', pinyin: 'shì' }
        ],
        correctAnswer: 'B',
        explanation: 'Ăn đồ ăn: 吃 -> B.'
      },
      {
        id: 16, section: 'reading', part: 2, type: 'text_choice',
        passage: '大卫是我的好同学，他会说一点儿汉语。',
        promptPinyin: 'Dàwèi shì wǒ de hǎo tóngxué, tā huì shuō yìdiǎnr Hànyǔ.',
        questionText: '★ 大卫会说什么语言？',
        options: [
          { key: 'A', text: '汉语', pinyin: 'Hànyǔ' },
          { key: 'B', text: '英语', pinyin: 'Yīngyǔ' },
          { key: 'C', text: '法语', pinyin: 'Fǎyǔ' }
        ],
        correctAnswer: 'A',
        explanation: 'Bài đọc: "他会说一点儿汉语" -> A: 汉语.'
      },
      {
        id: 17, section: 'reading', part: 2, type: 'text_choice',
        passage: '今天我爸爸不在家，他去北京工作了。',
        promptPinyin: 'Jīntiān wǒ bàba bú zài jiā, tā qù Běijīng gōngzuò le.',
        questionText: '★ 爸爸去哪里了？',
        options: [
          { key: 'A', text: '北京', pinyin: 'Běijīng' },
          { key: 'B', text: '上海', pinyin: 'Shànghǎi' },
          { key: 'C', text: '学校', pinyin: 'xuéxiào' }
        ],
        correctAnswer: 'A',
        explanation: 'Đi Bắc Kinh: 北京 -> A.'
      },
      {
        id: 18, section: 'reading', part: 2, type: 'text_choice',
        passage: '小狗喜欢在桌子底下睡觉。',
        promptPinyin: 'Xiǎogǒu xǐhuan zài zhuōzi dǐxia shuìjiào.',
        questionText: '★ 小狗在哪里睡觉？',
        options: [
          { key: 'A', text: '椅子上', pinyin: 'yǐzi shang' },
          { key: 'B', text: '桌子下', pinyin: 'zhuōzi xià' },
          { key: 'C', text: '门外边', pinyin: 'mén wàibian' }
        ],
        correctAnswer: 'B',
        explanation: 'Dưới bàn: 桌子下 -> B.'
      },
      {
        id: 19, section: 'reading', part: 2, type: 'text_choice',
        passage: '那本书是二十块钱，不是很贵。',
        promptPinyin: 'Nà běn shū shì èrshí kuài qián, bú shì hěn guì.',
        questionText: '★ 那本书多少钱？',
        options: [
          { key: 'A', text: '十块', pinyin: 'shí kuài' },
          { key: 'B', text: '二十块', pinyin: 'èrshí kuài' },
          { key: 'C', text: '三十块', pinyin: 'sānshí kuài' }
        ],
        correctAnswer: 'B',
        explanation: '20 tệ: 二十块 -> B.'
      },
      {
        id: 20, section: 'reading', part: 2, type: 'text_choice',
        passage: '妈妈做的中国菜非常好吃，我很爱吃。',
        promptPinyin: 'Māma zuò de Zhōngguó cài fēicháng hǎochī, wǒ hěn ài chī.',
        questionText: '★ 妈妈做的菜怎么样？',
        options: [
          { key: 'A', text: '很好吃', pinyin: 'hěn hǎochī' },
          { key: 'B', text: '不好吃', pinyin: 'bù hǎochī' },
          { key: 'C', text: '很少', pinyin: 'hěn shǎo' }
        ],
        correctAnswer: 'A',
        explanation: 'Ngon: 很好吃 -> A.'
      }
    ]
  };
});
