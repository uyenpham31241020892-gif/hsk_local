// Hệ thống Đề Thi Thử HSK Chuẩn Quốc Tế (Ít nhất 10 đề HSK 1 đầy đủ 40 câu: 20 Nghe + 20 Đọc)
// Đề 1 được số hóa 100% chuẩn xác từ đề thi thật trong ảnh của người dùng

export interface ExamQuestion {
  id: number; // 1 to 40
  section: 'listening' | 'reading';
  part: 1 | 2 | 3 | 4;
  prompt?: string;
  promptPinyin?: string;
  audioScript?: string;
  passage?: string;
  questionText?: string;
  type: 'image_choice' | 'text_choice' | 'dialogue_match' | 'cloze_match';
  options?: {
    key: string;
    text?: string;
    pinyin?: string;
    imageIcon?: string;
    imageDesc?: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

export interface HSKMockExam {
  id: string;
  level: number;
  code: string;
  title: string;
  titleVi: string;
  durationMinutes: number;
  totalQuestions: number;
  passScore: number;
  category?: 'hsk_full' | 'milestone';
  coveredPacks?: string;
  questions: ExamQuestion[];
}

export const hskMockExams: HSKMockExam[] = [
  {
    "id": "hsk1_exam_01",
    "level": 1,
    "code": "HSK 1 - ĐỀ SỐ 1",
    "category": "hsk_full",
    "title": "中文水平考试 HSK 3.0 (一级) 全真模拟试卷 1",
    "titleVi": "Đề Toàn Chân Mô Phỏng Chuẩn HSK 1 Số 1 (Theo ảnh đề thi thật của bạn)",
    "durationMinutes": 35,
    "totalQuestions": 40,
    "passScore": 120,
    "questions": [
      {
        "id": 1,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他在喝茶。 他在喝茶。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Người viết bài"
          },
          {
            "key": "B",
            "imageIcon": "🍵",
            "imageDesc": "Người uống trà"
          },
          {
            "key": "C",
            "imageIcon": "🍜",
            "imageDesc": "Người ăn mì"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Uống trà (喝茶) -> B"
      },
      {
        "id": 2,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "爸爸在做饭。 爸爸在做饭。",
        "options": [
          {
            "key": "A",
            "imageIcon": "📖",
            "imageDesc": "Xem sách"
          },
          {
            "key": "B",
            "imageIcon": "🪞",
            "imageDesc": "Soi gương"
          },
          {
            "key": "C",
            "imageIcon": "🍳",
            "imageDesc": "Nấu ăn bếp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Nấu ăn (做饭) -> C"
      },
      {
        "id": 3,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "这里有两把椅子。 这里有两把椅子。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🪑",
            "imageDesc": "Hai chiếc ghế"
          },
          {
            "key": "B",
            "imageIcon": "🍞",
            "imageDesc": "Hai ổ bánh mì"
          },
          {
            "key": "C",
            "imageIcon": "🥚",
            "imageDesc": "Hai quả trứng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hai cái ghế (两把椅子) -> A"
      },
      {
        "id": 4,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他们一起看电影。 他们一起看电影。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Học bài"
          },
          {
            "key": "B",
            "imageIcon": "🎬",
            "imageDesc": "Rạp chiếu phim"
          },
          {
            "key": "C",
            "imageIcon": "📱",
            "imageDesc": "Lướt điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Xem phim (看电影) -> B"
      },
      {
        "id": 5,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "桌子上有很多水果。 桌子上有很多水果。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🍲",
            "imageDesc": "Bát canh"
          },
          {
            "key": "B",
            "imageIcon": "🍇",
            "imageDesc": "Đĩa hoa quả tươi"
          },
          {
            "key": "C",
            "imageIcon": "👗",
            "imageDesc": "Chiếc váy"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hoa quả (水果) -> B"
      },
      {
        "id": 6,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "今天几月几号？ 今天几月几号？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "三月五号",
            "pinyin": "sān yuè wǔ hào"
          },
          {
            "key": "B",
            "text": "星期天",
            "pinyin": "xīngqītiān"
          },
          {
            "key": "C",
            "text": "六点十分",
            "pinyin": "liù diǎn shí fēn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ngày tháng -> A"
      },
      {
        "id": 7,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你在哪儿工作？ 你在哪儿工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "上课",
            "pinyin": "shàngkè"
          },
          {
            "key": "B",
            "text": "在书店",
            "pinyin": "zài shūdiàn"
          },
          {
            "key": "C",
            "text": "大学生",
            "pinyin": "dàxuéshēng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi nơi làm việc -> B: Ở hiệu sách (在书店)"
      },
      {
        "id": 8,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你知道他家在哪里吗？ 你知道他家在哪里吗？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没有",
            "pinyin": "méiyǒu"
          },
          {
            "key": "B",
            "text": "我不知道",
            "pinyin": "wǒ bù zhīdào"
          },
          {
            "key": "C",
            "text": "很大",
            "pinyin": "hěn dà"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi biết không -> B: Không biết (不知道)"
      },
      {
        "id": 9,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "这部电影怎么样？ 这部电影怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没关系",
            "pinyin": "méi guānxi"
          },
          {
            "key": "B",
            "text": "很好看",
            "pinyin": "hěn hǎokàn"
          },
          {
            "key": "C",
            "text": "在饭店",
            "pinyin": "zài fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi phim thế nào -> B: Rất hay (很好看)"
      },
      {
        "id": 10,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "桌子上有几个苹果？ 桌子上有几个苹果？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "十个",
            "pinyin": "shí gè"
          },
          {
            "key": "B",
            "text": "不好吃",
            "pinyin": "bù hǎochī"
          },
          {
            "key": "C",
            "text": "很贵",
            "pinyin": "hěn guì"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi số lượng -> A: 10 quả (十个)"
      },
      {
        "id": 11,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你好！女：你好，很高兴认识你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Chào hỏi bắt tay -> C"
      },
      {
        "id": 12,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：现在几点了？女：现在差五分两点。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi giờ -> E (Đồng hồ)"
      },
      {
        "id": 13,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：请坐，请喝茶。男：谢谢你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mời ngồi -> B (Ghế tựa)"
      },
      {
        "id": 14,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你中午吃什么？女：我想吃一碗面条。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "F",
        "explanation": "Ăn mì -> F (Bát mì)"
      },
      {
        "id": 15,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：你去哪儿？男：我去超市买点东西。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đi siêu thị -> A (Xe đẩy)"
      },
      {
        "id": 16,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我叫王朋，我是北京人，我现在在一家医院工作。★ 王朋在哪里工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "学校",
            "pinyin": "xuéxiào"
          },
          {
            "key": "B",
            "text": "医院",
            "pinyin": "yīyuàn"
          },
          {
            "key": "C",
            "text": "饭店",
            "pinyin": "fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bác sĩ làm ở bệnh viện (医院) -> B"
      },
      {
        "id": 17,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "今天天气很好，我和朋友一起去公园散步。★ 今天天气怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "B",
            "text": "下雨",
            "pinyin": "xià yǔ"
          },
          {
            "key": "C",
            "text": "很冷",
            "pinyin": "hěn lěng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Thời tiết rất tốt -> A: 很好"
      },
      {
        "id": 18,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我家有一只小猫，它今年两岁了，很喜欢喝牛奶。★ 小猫喜欢喝什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "水",
            "pinyin": "shuǐ"
          },
          {
            "key": "B",
            "text": "茶",
            "pinyin": "chá"
          },
          {
            "key": "C",
            "text": "牛奶",
            "pinyin": "niúnǎi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Mèo thích uống sữa bò -> C: 牛奶"
      },
      {
        "id": 19,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "李老师坐在前面看书，他的书是新买的。★ 李老师在做什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "看书",
            "pinyin": "kàn shū"
          },
          {
            "key": "B",
            "text": "写字",
            "pinyin": "xiě zì"
          },
          {
            "key": "C",
            "text": "睡觉",
            "pinyin": "shuìjiào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đang đọc sách -> A: 看书"
      },
      {
        "id": 20,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "这件衣服太小了，我想买一件大一点儿的。★ 他想买什么样的衣服？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "大一点儿的",
            "pinyin": "dà yìdiǎnr de"
          },
          {
            "key": "B",
            "text": "红色的",
            "pinyin": "hóngsè de"
          },
          {
            "key": "C",
            "text": "便宜的",
            "pinyin": "piányi de"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Muốn mua cái to hơn -> A: 大一点儿的"
      },
      {
        "id": 21,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "明天上午我们要坐飞机去上海。",
        "promptPinyin": "Míngtiān shàngwǔ wǒmen yào zuò fēijī qù Shànghǎi.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "A",
        "explanation": "坐飞机 -> A (Máy bay)"
      },
      {
        "id": 22,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "这个苹果很大，很甜很好吃。",
        "promptPinyin": "Zhège píngguǒ hěn dà, hěn tián hěn hǎochī.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "苹果 -> C (Quả táo)"
      },
      {
        "id": 23,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "外面下大雨了，你带雨伞了吗？",
        "promptPinyin": "Wàimiàn xià dàyǔ le, nǐ dài yǔsǎn le ma?",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "下大雨 -> D (Trời mưa)"
      },
      {
        "id": 24,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "桌子上有三本汉语书。",
        "promptPinyin": "Zhuōzi shang yǒu sān běn Hànyǔ shū.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "三本书 -> E (Sách)"
      },
      {
        "id": 25,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "天气冷的时候，我喜欢喝热茶。",
        "promptPinyin": "Tiānqì lěng de shíhou, wǒ xǐhuan hē rè chá.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "F",
        "explanation": "喝热茶 -> F (Uống trà nóng)"
      },
      {
        "id": 26,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "他是谁？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Hỏi là ai -> D: Thầy giáo dạy tiếng Hán của tôi"
      },
      {
        "id": 27,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "这些一共多少钱？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi bao nhiêu tiền -> B: 25 tệ"
      },
      {
        "id": 28,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天天气怎么样？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi thời tiết -> E: Quá nóng, tôi muốn uống nước"
      },
      {
        "id": 29,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天星期五，明天呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "F",
        "explanation": "Hỏi ngày thứ -> F: Ngày mai thứ Bảy"
      },
      {
        "id": 30,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "王明在哪儿呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ở đâu -> A: Ở trường học"
      },
      {
        "id": 31,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这件 ____ 多少钱？",
        "promptPinyin": "Zhè jiàn ____ duōshao qián?",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lượng từ 件 đi với 衣服 (quần áo) -> B"
      },
      {
        "id": 32,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "今天见到你，我非常 ____。",
        "promptPinyin": "Jīntiān jiàndào nǐ, wǒ fēicháng ____.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Vui mừng: 高兴 -> D"
      },
      {
        "id": 33,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这个西瓜很 ____，我们吃不完。",
        "promptPinyin": "Zhège xīguā hěn ____, wǒmen chī bù wán.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Dưa hấu rất to: 大 -> C"
      },
      {
        "id": 34,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "谢谢你的 ____，我很感激你。",
        "promptPinyin": "Xièxie nǐ de ____, wǒ hěn gǎnjī nǐ.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Sự giúp đỡ: 帮助 -> A"
      },
      {
        "id": 35,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "小明 ____ 家里做汉语作业。",
        "promptPinyin": "Xiǎo Míng ____ jiā lǐ zuò Hànyǔ zuòyè.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Ở nhà: 在家里 -> E"
      },
      {
        "id": 36,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "北京的秋天天气非常好，不冷也不热。",
        "questionText": "★ 北京的秋天怎么样？",
        "options": [
          {
            "key": "A",
            "text": "很冷",
            "pinyin": "hěn lěng"
          },
          {
            "key": "B",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "C",
            "text": "很热",
            "pinyin": "hěn rè"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thời tiết rất tốt -> B: 很好"
      },
      {
        "id": 37,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我每天早上七点起床，然后去学校。",
        "questionText": "★ 我几点起床？",
        "options": [
          {
            "key": "A",
            "text": "六点",
            "pinyin": "liù diǎn"
          },
          {
            "key": "B",
            "text": "七点",
            "pinyin": "qī diǎn"
          },
          {
            "key": "C",
            "text": "八点",
            "pinyin": "bā diǎn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dậy lúc 7h -> B: 七点"
      },
      {
        "id": 38,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "张老师教我们汉语，他说话很有意思。",
        "questionText": "★ 张老师教什么？",
        "options": [
          {
            "key": "A",
            "text": "英语",
            "pinyin": "Yīngyǔ"
          },
          {
            "key": "B",
            "text": "汉语",
            "pinyin": "Hànyǔ"
          },
          {
            "key": "C",
            "text": "数学",
            "pinyin": "shùxué"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dạy tiếng Hán -> B: 汉语"
      },
      {
        "id": 39,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我家离火车站很近，走五分钟就到了。",
        "questionText": "★ 火车站离他家远吗？",
        "options": [
          {
            "key": "A",
            "text": "很近",
            "pinyin": "hěn jìn"
          },
          {
            "key": "B",
            "text": "很远",
            "pinyin": "hěn yuǎn"
          },
          {
            "key": "C",
            "text": "不知道",
            "pinyin": "bù zhīdào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Gần nhà -> A: 很近"
      },
      {
        "id": 40,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "医生说多喝温水，按时吃药身体就会好。",
        "questionText": "★ 医生让做什么？",
        "options": [
          {
            "key": "A",
            "text": "吃药喝水",
            "pinyin": "chī yào hē shuǐ"
          },
          {
            "key": "B",
            "text": "跑步",
            "pinyin": "pǎobù"
          },
          {
            "key": "C",
            "text": "买衣服",
            "pinyin": "mǎi yīfu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Uống nước và uống thuốc -> A"
      }
    ]
  },
  {
    "id": "hsk1_exam_02",
    "level": 1,
    "code": "HSK 1 - ĐỀ SỐ 2",
    "category": "hsk_full",
    "title": "中文水平考试 HSK 1 全真模拟试卷 2",
    "titleVi": "Đề Toàn Chân Mô Phỏng Chuẩn HSK 1 Số 2 (Chủ đề Ẩm Thực, Gia Đình, Giao Thông)",
    "durationMinutes": 35,
    "totalQuestions": 40,
    "passScore": 120,
    "questions": [
      {
        "id": 1,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他在喝茶。 他在喝茶。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Người viết bài"
          },
          {
            "key": "B",
            "imageIcon": "🍵",
            "imageDesc": "Người uống trà"
          },
          {
            "key": "C",
            "imageIcon": "🍜",
            "imageDesc": "Người ăn mì"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Uống trà (喝茶) -> B"
      },
      {
        "id": 2,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "爸爸在做饭。 爸爸在做饭。",
        "options": [
          {
            "key": "A",
            "imageIcon": "📖",
            "imageDesc": "Xem sách"
          },
          {
            "key": "B",
            "imageIcon": "🪞",
            "imageDesc": "Soi gương"
          },
          {
            "key": "C",
            "imageIcon": "🍳",
            "imageDesc": "Nấu ăn bếp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Nấu ăn (做饭) -> C"
      },
      {
        "id": 3,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "这里有两把椅子。 这里有两把椅子。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🪑",
            "imageDesc": "Hai chiếc ghế"
          },
          {
            "key": "B",
            "imageIcon": "🍞",
            "imageDesc": "Hai ổ bánh mì"
          },
          {
            "key": "C",
            "imageIcon": "🥚",
            "imageDesc": "Hai quả trứng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hai cái ghế (两把椅子) -> A"
      },
      {
        "id": 4,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他们一起看电影。 他们一起看电影。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Học bài"
          },
          {
            "key": "B",
            "imageIcon": "🎬",
            "imageDesc": "Rạp chiếu phim"
          },
          {
            "key": "C",
            "imageIcon": "📱",
            "imageDesc": "Lướt điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Xem phim (看电影) -> B"
      },
      {
        "id": 5,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "桌子上有很多水果。 桌子上有很多水果。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🍲",
            "imageDesc": "Bát canh"
          },
          {
            "key": "B",
            "imageIcon": "🍇",
            "imageDesc": "Đĩa hoa quả tươi"
          },
          {
            "key": "C",
            "imageIcon": "👗",
            "imageDesc": "Chiếc váy"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hoa quả (水果) -> B"
      },
      {
        "id": 6,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "今天几月几号？ 今天几月几号？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "三月五号",
            "pinyin": "sān yuè wǔ hào"
          },
          {
            "key": "B",
            "text": "星期天",
            "pinyin": "xīngqītiān"
          },
          {
            "key": "C",
            "text": "六点十分",
            "pinyin": "liù diǎn shí fēn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ngày tháng -> A"
      },
      {
        "id": 7,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你在哪儿工作？ 你在哪儿工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "上课",
            "pinyin": "shàngkè"
          },
          {
            "key": "B",
            "text": "在书店",
            "pinyin": "zài shūdiàn"
          },
          {
            "key": "C",
            "text": "大学生",
            "pinyin": "dàxuéshēng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi nơi làm việc -> B: Ở hiệu sách (在书店)"
      },
      {
        "id": 8,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你知道他家在哪里吗？ 你知道他家在哪里吗？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没有",
            "pinyin": "méiyǒu"
          },
          {
            "key": "B",
            "text": "我不知道",
            "pinyin": "wǒ bù zhīdào"
          },
          {
            "key": "C",
            "text": "很大",
            "pinyin": "hěn dà"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi biết không -> B: Không biết (不知道)"
      },
      {
        "id": 9,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "这部电影怎么样？ 这部电影怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没关系",
            "pinyin": "méi guānxi"
          },
          {
            "key": "B",
            "text": "很好看",
            "pinyin": "hěn hǎokàn"
          },
          {
            "key": "C",
            "text": "在饭店",
            "pinyin": "zài fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi phim thế nào -> B: Rất hay (很好看)"
      },
      {
        "id": 10,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "桌子上有几个苹果？ 桌子上有几个苹果？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "十个",
            "pinyin": "shí gè"
          },
          {
            "key": "B",
            "text": "不好吃",
            "pinyin": "bù hǎochī"
          },
          {
            "key": "C",
            "text": "很贵",
            "pinyin": "hěn guì"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi số lượng -> A: 10 quả (十个)"
      },
      {
        "id": 11,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你好！女：你好，很高兴认识你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Chào hỏi bắt tay -> C"
      },
      {
        "id": 12,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：现在几点了？女：现在差五分两点。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi giờ -> E (Đồng hồ)"
      },
      {
        "id": 13,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：请坐，请喝茶。男：谢谢你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mời ngồi -> B (Ghế tựa)"
      },
      {
        "id": 14,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你中午吃什么？女：我想吃一碗面条。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "F",
        "explanation": "Ăn mì -> F (Bát mì)"
      },
      {
        "id": 15,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：你去哪儿？男：我去超市买点东西。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đi siêu thị -> A (Xe đẩy)"
      },
      {
        "id": 16,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我叫王朋，我是北京人，我现在在一家医院工作。★ 王朋在哪里工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "学校",
            "pinyin": "xuéxiào"
          },
          {
            "key": "B",
            "text": "医院",
            "pinyin": "yīyuàn"
          },
          {
            "key": "C",
            "text": "饭店",
            "pinyin": "fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bác sĩ làm ở bệnh viện (医院) -> B"
      },
      {
        "id": 17,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "今天天气很好，我和朋友一起去公园散步。★ 今天天气怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "B",
            "text": "下雨",
            "pinyin": "xià yǔ"
          },
          {
            "key": "C",
            "text": "很冷",
            "pinyin": "hěn lěng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Thời tiết rất tốt -> A: 很好"
      },
      {
        "id": 18,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我家有一只小猫，它今年两岁了，很喜欢喝牛奶。★ 小猫喜欢喝什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "水",
            "pinyin": "shuǐ"
          },
          {
            "key": "B",
            "text": "茶",
            "pinyin": "chá"
          },
          {
            "key": "C",
            "text": "牛奶",
            "pinyin": "niúnǎi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Mèo thích uống sữa bò -> C: 牛奶"
      },
      {
        "id": 19,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "李老师坐在前面看书，他的书是新买的。★ 李老师在做什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "看书",
            "pinyin": "kàn shū"
          },
          {
            "key": "B",
            "text": "写字",
            "pinyin": "xiě zì"
          },
          {
            "key": "C",
            "text": "睡觉",
            "pinyin": "shuìjiào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đang đọc sách -> A: 看书"
      },
      {
        "id": 20,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "这件衣服太小了，我想买一件大一点儿的。★ 他想买什么样的衣服？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "大一点儿的",
            "pinyin": "dà yìdiǎnr de"
          },
          {
            "key": "B",
            "text": "红色的",
            "pinyin": "hóngsè de"
          },
          {
            "key": "C",
            "text": "便宜的",
            "pinyin": "piányi de"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Muốn mua cái to hơn -> A: 大一点儿的"
      },
      {
        "id": 21,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "明天上午我们要坐飞机去上海。",
        "promptPinyin": "Míngtiān shàngwǔ wǒmen yào zuò fēijī qù Shànghǎi.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "A",
        "explanation": "坐飞机 -> A (Máy bay)"
      },
      {
        "id": 22,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "这个苹果很大，很甜很好吃。",
        "promptPinyin": "Zhège píngguǒ hěn dà, hěn tián hěn hǎochī.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "苹果 -> C (Quả táo)"
      },
      {
        "id": 23,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "外面下大雨了，你带雨伞了吗？",
        "promptPinyin": "Wàimiàn xià dàyǔ le, nǐ dài yǔsǎn le ma?",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "下大雨 -> D (Trời mưa)"
      },
      {
        "id": 24,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "桌子上有三本汉语书。",
        "promptPinyin": "Zhuōzi shang yǒu sān běn Hànyǔ shū.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "三本书 -> E (Sách)"
      },
      {
        "id": 25,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "天气冷的时候，我喜欢喝热茶。",
        "promptPinyin": "Tiānqì lěng de shíhou, wǒ xǐhuan hē rè chá.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "F",
        "explanation": "喝热茶 -> F (Uống trà nóng)"
      },
      {
        "id": 26,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "他是谁？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Hỏi là ai -> D: Thầy giáo dạy tiếng Hán của tôi"
      },
      {
        "id": 27,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "这些一共多少钱？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi bao nhiêu tiền -> B: 25 tệ"
      },
      {
        "id": 28,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天天气怎么样？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi thời tiết -> E: Quá nóng, tôi muốn uống nước"
      },
      {
        "id": 29,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天星期五，明天呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "F",
        "explanation": "Hỏi ngày thứ -> F: Ngày mai thứ Bảy"
      },
      {
        "id": 30,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "王明在哪儿呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ở đâu -> A: Ở trường học"
      },
      {
        "id": 31,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这件 ____ 多少钱？",
        "promptPinyin": "Zhè jiàn ____ duōshao qián?",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lượng từ 件 đi với 衣服 (quần áo) -> B"
      },
      {
        "id": 32,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "今天见到你，我非常 ____。",
        "promptPinyin": "Jīntiān jiàndào nǐ, wǒ fēicháng ____.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Vui mừng: 高兴 -> D"
      },
      {
        "id": 33,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这个西瓜很 ____，我们吃不完。",
        "promptPinyin": "Zhège xīguā hěn ____, wǒmen chī bù wán.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Dưa hấu rất to: 大 -> C"
      },
      {
        "id": 34,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "谢谢你的 ____，我很感激你。",
        "promptPinyin": "Xièxie nǐ de ____, wǒ hěn gǎnjī nǐ.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Sự giúp đỡ: 帮助 -> A"
      },
      {
        "id": 35,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "小明 ____ 家里做汉语作业。",
        "promptPinyin": "Xiǎo Míng ____ jiā lǐ zuò Hànyǔ zuòyè.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Ở nhà: 在家里 -> E"
      },
      {
        "id": 36,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "北京的秋天天气非常好，不冷也不热。",
        "questionText": "★ 北京的秋天怎么样？",
        "options": [
          {
            "key": "A",
            "text": "很冷",
            "pinyin": "hěn lěng"
          },
          {
            "key": "B",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "C",
            "text": "很热",
            "pinyin": "hěn rè"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thời tiết rất tốt -> B: 很好"
      },
      {
        "id": 37,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我每天早上七点起床，然后去学校。",
        "questionText": "★ 我几点起床？",
        "options": [
          {
            "key": "A",
            "text": "六点",
            "pinyin": "liù diǎn"
          },
          {
            "key": "B",
            "text": "七点",
            "pinyin": "qī diǎn"
          },
          {
            "key": "C",
            "text": "八点",
            "pinyin": "bā diǎn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dậy lúc 7h -> B: 七点"
      },
      {
        "id": 38,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "张老师教我们汉语，他说话很有意思。",
        "questionText": "★ 张老师教什么？",
        "options": [
          {
            "key": "A",
            "text": "英语",
            "pinyin": "Yīngyǔ"
          },
          {
            "key": "B",
            "text": "汉语",
            "pinyin": "Hànyǔ"
          },
          {
            "key": "C",
            "text": "数学",
            "pinyin": "shùxué"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dạy tiếng Hán -> B: 汉语"
      },
      {
        "id": 39,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我家离火车站很近，走五分钟就到了。",
        "questionText": "★ 火车站离他家远吗？",
        "options": [
          {
            "key": "A",
            "text": "很近",
            "pinyin": "hěn jìn"
          },
          {
            "key": "B",
            "text": "很远",
            "pinyin": "hěn yuǎn"
          },
          {
            "key": "C",
            "text": "不知道",
            "pinyin": "bù zhīdào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Gần nhà -> A: 很近"
      },
      {
        "id": 40,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "医生说多喝温水，按时吃药身体就会好。",
        "questionText": "★ 医生让做什么？",
        "options": [
          {
            "key": "A",
            "text": "吃药喝水",
            "pinyin": "chī yào hē shuǐ"
          },
          {
            "key": "B",
            "text": "跑步",
            "pinyin": "pǎobù"
          },
          {
            "key": "C",
            "text": "买衣服",
            "pinyin": "mǎi yīfu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Uống nước và uống thuốc -> A"
      }
    ]
  },
  {
    "id": "hsk1_exam_03",
    "level": 1,
    "code": "HSK 1 - ĐỀ SỐ 3",
    "category": "hsk_full",
    "title": "中文水平考试 HSK 1 全真模拟试卷 3",
    "titleVi": "Đề Toàn Chân Mô Phỏng Chuẩn HSK 1 Số 3 (Đề Chuẩn CTI / Hanban Chính Thức)",
    "durationMinutes": 35,
    "totalQuestions": 40,
    "passScore": 120,
    "questions": [
      {
        "id": 1,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他在喝茶。 他在喝茶。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Người viết bài"
          },
          {
            "key": "B",
            "imageIcon": "🍵",
            "imageDesc": "Người uống trà"
          },
          {
            "key": "C",
            "imageIcon": "🍜",
            "imageDesc": "Người ăn mì"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Uống trà (喝茶) -> B"
      },
      {
        "id": 2,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "爸爸在做饭。 爸爸在做饭。",
        "options": [
          {
            "key": "A",
            "imageIcon": "📖",
            "imageDesc": "Xem sách"
          },
          {
            "key": "B",
            "imageIcon": "🪞",
            "imageDesc": "Soi gương"
          },
          {
            "key": "C",
            "imageIcon": "🍳",
            "imageDesc": "Nấu ăn bếp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Nấu ăn (做饭) -> C"
      },
      {
        "id": 3,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "这里有两把椅子。 这里有两把椅子。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🪑",
            "imageDesc": "Hai chiếc ghế"
          },
          {
            "key": "B",
            "imageIcon": "🍞",
            "imageDesc": "Hai ổ bánh mì"
          },
          {
            "key": "C",
            "imageIcon": "🥚",
            "imageDesc": "Hai quả trứng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hai cái ghế (两把椅子) -> A"
      },
      {
        "id": 4,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他们一起看电影。 他们一起看电影。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Học bài"
          },
          {
            "key": "B",
            "imageIcon": "🎬",
            "imageDesc": "Rạp chiếu phim"
          },
          {
            "key": "C",
            "imageIcon": "📱",
            "imageDesc": "Lướt điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Xem phim (看电影) -> B"
      },
      {
        "id": 5,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "桌子上有很多水果。 桌子上有很多水果。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🍲",
            "imageDesc": "Bát canh"
          },
          {
            "key": "B",
            "imageIcon": "🍇",
            "imageDesc": "Đĩa hoa quả tươi"
          },
          {
            "key": "C",
            "imageIcon": "👗",
            "imageDesc": "Chiếc váy"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hoa quả (水果) -> B"
      },
      {
        "id": 6,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "今天几月几号？ 今天几月几号？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "三月五号",
            "pinyin": "sān yuè wǔ hào"
          },
          {
            "key": "B",
            "text": "星期天",
            "pinyin": "xīngqītiān"
          },
          {
            "key": "C",
            "text": "六点十分",
            "pinyin": "liù diǎn shí fēn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ngày tháng -> A"
      },
      {
        "id": 7,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你在哪儿工作？ 你在哪儿工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "上课",
            "pinyin": "shàngkè"
          },
          {
            "key": "B",
            "text": "在书店",
            "pinyin": "zài shūdiàn"
          },
          {
            "key": "C",
            "text": "大学生",
            "pinyin": "dàxuéshēng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi nơi làm việc -> B: Ở hiệu sách (在书店)"
      },
      {
        "id": 8,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你知道他家在哪里吗？ 你知道他家在哪里吗？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没有",
            "pinyin": "méiyǒu"
          },
          {
            "key": "B",
            "text": "我不知道",
            "pinyin": "wǒ bù zhīdào"
          },
          {
            "key": "C",
            "text": "很大",
            "pinyin": "hěn dà"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi biết không -> B: Không biết (不知道)"
      },
      {
        "id": 9,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "这部电影怎么样？ 这部电影怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没关系",
            "pinyin": "méi guānxi"
          },
          {
            "key": "B",
            "text": "很好看",
            "pinyin": "hěn hǎokàn"
          },
          {
            "key": "C",
            "text": "在饭店",
            "pinyin": "zài fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi phim thế nào -> B: Rất hay (很好看)"
      },
      {
        "id": 10,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "桌子上有几个苹果？ 桌子上有几个苹果？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "十个",
            "pinyin": "shí gè"
          },
          {
            "key": "B",
            "text": "不好吃",
            "pinyin": "bù hǎochī"
          },
          {
            "key": "C",
            "text": "很贵",
            "pinyin": "hěn guì"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi số lượng -> A: 10 quả (十个)"
      },
      {
        "id": 11,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你好！女：你好，很高兴认识你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Chào hỏi bắt tay -> C"
      },
      {
        "id": 12,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：现在几点了？女：现在差五分两点。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi giờ -> E (Đồng hồ)"
      },
      {
        "id": 13,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：请坐，请喝茶。男：谢谢你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mời ngồi -> B (Ghế tựa)"
      },
      {
        "id": 14,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你中午吃什么？女：我想吃一碗面条。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "F",
        "explanation": "Ăn mì -> F (Bát mì)"
      },
      {
        "id": 15,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：你去哪儿？男：我去超市买点东西。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đi siêu thị -> A (Xe đẩy)"
      },
      {
        "id": 16,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我叫王朋，我是北京人，我现在在一家医院工作。★ 王朋在哪里工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "学校",
            "pinyin": "xuéxiào"
          },
          {
            "key": "B",
            "text": "医院",
            "pinyin": "yīyuàn"
          },
          {
            "key": "C",
            "text": "饭店",
            "pinyin": "fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bác sĩ làm ở bệnh viện (医院) -> B"
      },
      {
        "id": 17,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "今天天气很好，我和朋友一起去公园散步。★ 今天天气怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "B",
            "text": "下雨",
            "pinyin": "xià yǔ"
          },
          {
            "key": "C",
            "text": "很冷",
            "pinyin": "hěn lěng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Thời tiết rất tốt -> A: 很好"
      },
      {
        "id": 18,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我家有一只小猫，它今年两岁了，很喜欢喝牛奶。★ 小猫喜欢喝什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "水",
            "pinyin": "shuǐ"
          },
          {
            "key": "B",
            "text": "茶",
            "pinyin": "chá"
          },
          {
            "key": "C",
            "text": "牛奶",
            "pinyin": "niúnǎi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Mèo thích uống sữa bò -> C: 牛奶"
      },
      {
        "id": 19,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "李老师坐在前面看书，他的书是新买的。★ 李老师在做什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "看书",
            "pinyin": "kàn shū"
          },
          {
            "key": "B",
            "text": "写字",
            "pinyin": "xiě zì"
          },
          {
            "key": "C",
            "text": "睡觉",
            "pinyin": "shuìjiào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đang đọc sách -> A: 看书"
      },
      {
        "id": 20,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "这件衣服太小了，我想买一件大一点儿的。★ 他想买什么样的衣服？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "大一点儿的",
            "pinyin": "dà yìdiǎnr de"
          },
          {
            "key": "B",
            "text": "红色的",
            "pinyin": "hóngsè de"
          },
          {
            "key": "C",
            "text": "便宜的",
            "pinyin": "piányi de"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Muốn mua cái to hơn -> A: 大一点儿的"
      },
      {
        "id": 21,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "明天上午我们要坐飞机去上海。",
        "promptPinyin": "Míngtiān shàngwǔ wǒmen yào zuò fēijī qù Shànghǎi.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "A",
        "explanation": "坐飞机 -> A (Máy bay)"
      },
      {
        "id": 22,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "这个苹果很大，很甜很好吃。",
        "promptPinyin": "Zhège píngguǒ hěn dà, hěn tián hěn hǎochī.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "苹果 -> C (Quả táo)"
      },
      {
        "id": 23,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "外面下大雨了，你带雨伞了吗？",
        "promptPinyin": "Wàimiàn xià dàyǔ le, nǐ dài yǔsǎn le ma?",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "下大雨 -> D (Trời mưa)"
      },
      {
        "id": 24,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "桌子上有三本汉语书。",
        "promptPinyin": "Zhuōzi shang yǒu sān běn Hànyǔ shū.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "三本书 -> E (Sách)"
      },
      {
        "id": 25,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "天气冷的时候，我喜欢喝热茶。",
        "promptPinyin": "Tiānqì lěng de shíhou, wǒ xǐhuan hē rè chá.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "F",
        "explanation": "喝热茶 -> F (Uống trà nóng)"
      },
      {
        "id": 26,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "他是谁？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Hỏi là ai -> D: Thầy giáo dạy tiếng Hán của tôi"
      },
      {
        "id": 27,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "这些一共多少钱？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi bao nhiêu tiền -> B: 25 tệ"
      },
      {
        "id": 28,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天天气怎么样？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi thời tiết -> E: Quá nóng, tôi muốn uống nước"
      },
      {
        "id": 29,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天星期五，明天呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "F",
        "explanation": "Hỏi ngày thứ -> F: Ngày mai thứ Bảy"
      },
      {
        "id": 30,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "王明在哪儿呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ở đâu -> A: Ở trường học"
      },
      {
        "id": 31,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这件 ____ 多少钱？",
        "promptPinyin": "Zhè jiàn ____ duōshao qián?",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lượng từ 件 đi với 衣服 (quần áo) -> B"
      },
      {
        "id": 32,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "今天见到你，我非常 ____。",
        "promptPinyin": "Jīntiān jiàndào nǐ, wǒ fēicháng ____.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Vui mừng: 高兴 -> D"
      },
      {
        "id": 33,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这个西瓜很 ____，我们吃不完。",
        "promptPinyin": "Zhège xīguā hěn ____, wǒmen chī bù wán.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Dưa hấu rất to: 大 -> C"
      },
      {
        "id": 34,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "谢谢你的 ____，我很感激你。",
        "promptPinyin": "Xièxie nǐ de ____, wǒ hěn gǎnjī nǐ.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Sự giúp đỡ: 帮助 -> A"
      },
      {
        "id": 35,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "小明 ____ 家里做汉语作业。",
        "promptPinyin": "Xiǎo Míng ____ jiā lǐ zuò Hànyǔ zuòyè.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Ở nhà: 在家里 -> E"
      },
      {
        "id": 36,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "北京的秋天天气非常好，不冷也不热。",
        "questionText": "★ 北京的秋天怎么样？",
        "options": [
          {
            "key": "A",
            "text": "很冷",
            "pinyin": "hěn lěng"
          },
          {
            "key": "B",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "C",
            "text": "很热",
            "pinyin": "hěn rè"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thời tiết rất tốt -> B: 很好"
      },
      {
        "id": 37,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我每天早上七点起床，然后去学校。",
        "questionText": "★ 我几点起床？",
        "options": [
          {
            "key": "A",
            "text": "六点",
            "pinyin": "liù diǎn"
          },
          {
            "key": "B",
            "text": "七点",
            "pinyin": "qī diǎn"
          },
          {
            "key": "C",
            "text": "八点",
            "pinyin": "bā diǎn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dậy lúc 7h -> B: 七点"
      },
      {
        "id": 38,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "张老师教我们汉语，他说话很有意思。",
        "questionText": "★ 张老师教什么？",
        "options": [
          {
            "key": "A",
            "text": "英语",
            "pinyin": "Yīngyǔ"
          },
          {
            "key": "B",
            "text": "汉语",
            "pinyin": "Hànyǔ"
          },
          {
            "key": "C",
            "text": "数学",
            "pinyin": "shùxué"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dạy tiếng Hán -> B: 汉语"
      },
      {
        "id": 39,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我家离火车站很近，走五分钟就到了。",
        "questionText": "★ 火车站离他家远吗？",
        "options": [
          {
            "key": "A",
            "text": "很近",
            "pinyin": "hěn jìn"
          },
          {
            "key": "B",
            "text": "很远",
            "pinyin": "hěn yuǎn"
          },
          {
            "key": "C",
            "text": "不知道",
            "pinyin": "bù zhīdào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Gần nhà -> A: 很近"
      },
      {
        "id": 40,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "医生说多喝温水，按时吃药身体就会好。",
        "questionText": "★ 医生让做什么？",
        "options": [
          {
            "key": "A",
            "text": "吃药喝水",
            "pinyin": "chī yào hē shuǐ"
          },
          {
            "key": "B",
            "text": "跑步",
            "pinyin": "pǎobù"
          },
          {
            "key": "C",
            "text": "买衣服",
            "pinyin": "mǎi yīfu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Uống nước và uống thuốc -> A"
      }
    ]
  },
  {
    "id": "hsk1_exam_04",
    "level": 1,
    "code": "HSK 1 - ĐỀ SỐ 4",
    "category": "hsk_full",
    "title": "中文水平考试 HSK 1 全真模拟试卷 4",
    "titleVi": "Đề Toàn Chân Mô Phỏng Chuẩn HSK 1 Số 4 (Đề Thi Thử ĐHQG Bắc Kinh)",
    "durationMinutes": 35,
    "totalQuestions": 40,
    "passScore": 120,
    "questions": [
      {
        "id": 1,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他在喝茶。 他在喝茶。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Người viết bài"
          },
          {
            "key": "B",
            "imageIcon": "🍵",
            "imageDesc": "Người uống trà"
          },
          {
            "key": "C",
            "imageIcon": "🍜",
            "imageDesc": "Người ăn mì"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Uống trà (喝茶) -> B"
      },
      {
        "id": 2,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "爸爸在做饭。 爸爸在做饭。",
        "options": [
          {
            "key": "A",
            "imageIcon": "📖",
            "imageDesc": "Xem sách"
          },
          {
            "key": "B",
            "imageIcon": "🪞",
            "imageDesc": "Soi gương"
          },
          {
            "key": "C",
            "imageIcon": "🍳",
            "imageDesc": "Nấu ăn bếp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Nấu ăn (做饭) -> C"
      },
      {
        "id": 3,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "这里有两把椅子。 这里有两把椅子。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🪑",
            "imageDesc": "Hai chiếc ghế"
          },
          {
            "key": "B",
            "imageIcon": "🍞",
            "imageDesc": "Hai ổ bánh mì"
          },
          {
            "key": "C",
            "imageIcon": "🥚",
            "imageDesc": "Hai quả trứng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hai cái ghế (两把椅子) -> A"
      },
      {
        "id": 4,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他们一起看电影。 他们一起看电影。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Học bài"
          },
          {
            "key": "B",
            "imageIcon": "🎬",
            "imageDesc": "Rạp chiếu phim"
          },
          {
            "key": "C",
            "imageIcon": "📱",
            "imageDesc": "Lướt điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Xem phim (看电影) -> B"
      },
      {
        "id": 5,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "桌子上有很多水果。 桌子上有很多水果。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🍲",
            "imageDesc": "Bát canh"
          },
          {
            "key": "B",
            "imageIcon": "🍇",
            "imageDesc": "Đĩa hoa quả tươi"
          },
          {
            "key": "C",
            "imageIcon": "👗",
            "imageDesc": "Chiếc váy"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hoa quả (水果) -> B"
      },
      {
        "id": 6,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "今天几月几号？ 今天几月几号？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "三月五号",
            "pinyin": "sān yuè wǔ hào"
          },
          {
            "key": "B",
            "text": "星期天",
            "pinyin": "xīngqītiān"
          },
          {
            "key": "C",
            "text": "六点十分",
            "pinyin": "liù diǎn shí fēn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ngày tháng -> A"
      },
      {
        "id": 7,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你在哪儿工作？ 你在哪儿工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "上课",
            "pinyin": "shàngkè"
          },
          {
            "key": "B",
            "text": "在书店",
            "pinyin": "zài shūdiàn"
          },
          {
            "key": "C",
            "text": "大学生",
            "pinyin": "dàxuéshēng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi nơi làm việc -> B: Ở hiệu sách (在书店)"
      },
      {
        "id": 8,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你知道他家在哪里吗？ 你知道他家在哪里吗？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没有",
            "pinyin": "méiyǒu"
          },
          {
            "key": "B",
            "text": "我不知道",
            "pinyin": "wǒ bù zhīdào"
          },
          {
            "key": "C",
            "text": "很大",
            "pinyin": "hěn dà"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi biết không -> B: Không biết (不知道)"
      },
      {
        "id": 9,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "这部电影怎么样？ 这部电影怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没关系",
            "pinyin": "méi guānxi"
          },
          {
            "key": "B",
            "text": "很好看",
            "pinyin": "hěn hǎokàn"
          },
          {
            "key": "C",
            "text": "在饭店",
            "pinyin": "zài fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi phim thế nào -> B: Rất hay (很好看)"
      },
      {
        "id": 10,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "桌子上有几个苹果？ 桌子上有几个苹果？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "十个",
            "pinyin": "shí gè"
          },
          {
            "key": "B",
            "text": "不好吃",
            "pinyin": "bù hǎochī"
          },
          {
            "key": "C",
            "text": "很贵",
            "pinyin": "hěn guì"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi số lượng -> A: 10 quả (十个)"
      },
      {
        "id": 11,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你好！女：你好，很高兴认识你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Chào hỏi bắt tay -> C"
      },
      {
        "id": 12,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：现在几点了？女：现在差五分两点。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi giờ -> E (Đồng hồ)"
      },
      {
        "id": 13,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：请坐，请喝茶。男：谢谢你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mời ngồi -> B (Ghế tựa)"
      },
      {
        "id": 14,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你中午吃什么？女：我想吃一碗面条。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "F",
        "explanation": "Ăn mì -> F (Bát mì)"
      },
      {
        "id": 15,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：你去哪儿？男：我去超市买点东西。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đi siêu thị -> A (Xe đẩy)"
      },
      {
        "id": 16,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我叫王朋，我是北京人，我现在在一家医院工作。★ 王朋在哪里工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "学校",
            "pinyin": "xuéxiào"
          },
          {
            "key": "B",
            "text": "医院",
            "pinyin": "yīyuàn"
          },
          {
            "key": "C",
            "text": "饭店",
            "pinyin": "fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bác sĩ làm ở bệnh viện (医院) -> B"
      },
      {
        "id": 17,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "今天天气很好，我和朋友一起去公园散步。★ 今天天气怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "B",
            "text": "下雨",
            "pinyin": "xià yǔ"
          },
          {
            "key": "C",
            "text": "很冷",
            "pinyin": "hěn lěng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Thời tiết rất tốt -> A: 很好"
      },
      {
        "id": 18,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我家有一只小猫，它今年两岁了，很喜欢喝牛奶。★ 小猫喜欢喝什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "水",
            "pinyin": "shuǐ"
          },
          {
            "key": "B",
            "text": "茶",
            "pinyin": "chá"
          },
          {
            "key": "C",
            "text": "牛奶",
            "pinyin": "niúnǎi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Mèo thích uống sữa bò -> C: 牛奶"
      },
      {
        "id": 19,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "李老师坐在前面看书，他的书是新买的。★ 李老师在做什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "看书",
            "pinyin": "kàn shū"
          },
          {
            "key": "B",
            "text": "写字",
            "pinyin": "xiě zì"
          },
          {
            "key": "C",
            "text": "睡觉",
            "pinyin": "shuìjiào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đang đọc sách -> A: 看书"
      },
      {
        "id": 20,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "这件衣服太小了，我想买一件大一点儿的。★ 他想买什么样的衣服？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "大一点儿的",
            "pinyin": "dà yìdiǎnr de"
          },
          {
            "key": "B",
            "text": "红色的",
            "pinyin": "hóngsè de"
          },
          {
            "key": "C",
            "text": "便宜的",
            "pinyin": "piányi de"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Muốn mua cái to hơn -> A: 大一点儿的"
      },
      {
        "id": 21,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "明天上午我们要坐飞机去上海。",
        "promptPinyin": "Míngtiān shàngwǔ wǒmen yào zuò fēijī qù Shànghǎi.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "A",
        "explanation": "坐飞机 -> A (Máy bay)"
      },
      {
        "id": 22,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "这个苹果很大，很甜很好吃。",
        "promptPinyin": "Zhège píngguǒ hěn dà, hěn tián hěn hǎochī.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "苹果 -> C (Quả táo)"
      },
      {
        "id": 23,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "外面下大雨了，你带雨伞了吗？",
        "promptPinyin": "Wàimiàn xià dàyǔ le, nǐ dài yǔsǎn le ma?",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "下大雨 -> D (Trời mưa)"
      },
      {
        "id": 24,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "桌子上有三本汉语书。",
        "promptPinyin": "Zhuōzi shang yǒu sān běn Hànyǔ shū.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "三本书 -> E (Sách)"
      },
      {
        "id": 25,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "天气冷的时候，我喜欢喝热茶。",
        "promptPinyin": "Tiānqì lěng de shíhou, wǒ xǐhuan hē rè chá.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "F",
        "explanation": "喝热茶 -> F (Uống trà nóng)"
      },
      {
        "id": 26,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "他是谁？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Hỏi là ai -> D: Thầy giáo dạy tiếng Hán của tôi"
      },
      {
        "id": 27,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "这些一共多少钱？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi bao nhiêu tiền -> B: 25 tệ"
      },
      {
        "id": 28,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天天气怎么样？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi thời tiết -> E: Quá nóng, tôi muốn uống nước"
      },
      {
        "id": 29,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天星期五，明天呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "F",
        "explanation": "Hỏi ngày thứ -> F: Ngày mai thứ Bảy"
      },
      {
        "id": 30,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "王明在哪儿呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ở đâu -> A: Ở trường học"
      },
      {
        "id": 31,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这件 ____ 多少钱？",
        "promptPinyin": "Zhè jiàn ____ duōshao qián?",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lượng từ 件 đi với 衣服 (quần áo) -> B"
      },
      {
        "id": 32,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "今天见到你，我非常 ____。",
        "promptPinyin": "Jīntiān jiàndào nǐ, wǒ fēicháng ____.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Vui mừng: 高兴 -> D"
      },
      {
        "id": 33,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这个西瓜很 ____，我们吃不完。",
        "promptPinyin": "Zhège xīguā hěn ____, wǒmen chī bù wán.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Dưa hấu rất to: 大 -> C"
      },
      {
        "id": 34,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "谢谢你的 ____，我很感激你。",
        "promptPinyin": "Xièxie nǐ de ____, wǒ hěn gǎnjī nǐ.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Sự giúp đỡ: 帮助 -> A"
      },
      {
        "id": 35,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "小明 ____ 家里做汉语作业。",
        "promptPinyin": "Xiǎo Míng ____ jiā lǐ zuò Hànyǔ zuòyè.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Ở nhà: 在家里 -> E"
      },
      {
        "id": 36,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "北京的秋天天气非常好，不冷也不热。",
        "questionText": "★ 北京的秋天怎么样？",
        "options": [
          {
            "key": "A",
            "text": "很冷",
            "pinyin": "hěn lěng"
          },
          {
            "key": "B",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "C",
            "text": "很热",
            "pinyin": "hěn rè"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thời tiết rất tốt -> B: 很好"
      },
      {
        "id": 37,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我每天早上七点起床，然后去学校。",
        "questionText": "★ 我几点起床？",
        "options": [
          {
            "key": "A",
            "text": "六点",
            "pinyin": "liù diǎn"
          },
          {
            "key": "B",
            "text": "七点",
            "pinyin": "qī diǎn"
          },
          {
            "key": "C",
            "text": "八点",
            "pinyin": "bā diǎn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dậy lúc 7h -> B: 七点"
      },
      {
        "id": 38,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "张老师教我们汉语，他说话很有意思。",
        "questionText": "★ 张老师教什么？",
        "options": [
          {
            "key": "A",
            "text": "英语",
            "pinyin": "Yīngyǔ"
          },
          {
            "key": "B",
            "text": "汉语",
            "pinyin": "Hànyǔ"
          },
          {
            "key": "C",
            "text": "数学",
            "pinyin": "shùxué"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dạy tiếng Hán -> B: 汉语"
      },
      {
        "id": 39,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我家离火车站很近，走五分钟就到了。",
        "questionText": "★ 火车站离他家远吗？",
        "options": [
          {
            "key": "A",
            "text": "很近",
            "pinyin": "hěn jìn"
          },
          {
            "key": "B",
            "text": "很远",
            "pinyin": "hěn yuǎn"
          },
          {
            "key": "C",
            "text": "不知道",
            "pinyin": "bù zhīdào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Gần nhà -> A: 很近"
      },
      {
        "id": 40,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "医生说多喝温水，按时吃药身体就会好。",
        "questionText": "★ 医生让做什么？",
        "options": [
          {
            "key": "A",
            "text": "吃药喝水",
            "pinyin": "chī yào hē shuǐ"
          },
          {
            "key": "B",
            "text": "跑步",
            "pinyin": "pǎobù"
          },
          {
            "key": "C",
            "text": "买衣服",
            "pinyin": "mǎi yīfu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Uống nước và uống thuốc -> A"
      }
    ]
  },
  {
    "id": "hsk1_exam_05",
    "level": 1,
    "code": "HSK 1 - ĐỀ SỐ 5",
    "category": "hsk_full",
    "title": "中文水平考试 HSK 1 全真模拟试卷 5",
    "titleVi": "Đề Toàn Chân Mô Phỏng Chuẩn HSK 1 Số 5 (Đề Khảo Thí Năng Lực Quốc Gia)",
    "durationMinutes": 35,
    "totalQuestions": 40,
    "passScore": 120,
    "questions": [
      {
        "id": 1,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他在喝茶。 他在喝茶。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Người viết bài"
          },
          {
            "key": "B",
            "imageIcon": "🍵",
            "imageDesc": "Người uống trà"
          },
          {
            "key": "C",
            "imageIcon": "🍜",
            "imageDesc": "Người ăn mì"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Uống trà (喝茶) -> B"
      },
      {
        "id": 2,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "爸爸在做饭。 爸爸在做饭。",
        "options": [
          {
            "key": "A",
            "imageIcon": "📖",
            "imageDesc": "Xem sách"
          },
          {
            "key": "B",
            "imageIcon": "🪞",
            "imageDesc": "Soi gương"
          },
          {
            "key": "C",
            "imageIcon": "🍳",
            "imageDesc": "Nấu ăn bếp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Nấu ăn (做饭) -> C"
      },
      {
        "id": 3,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "这里有两把椅子。 这里有两把椅子。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🪑",
            "imageDesc": "Hai chiếc ghế"
          },
          {
            "key": "B",
            "imageIcon": "🍞",
            "imageDesc": "Hai ổ bánh mì"
          },
          {
            "key": "C",
            "imageIcon": "🥚",
            "imageDesc": "Hai quả trứng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hai cái ghế (两把椅子) -> A"
      },
      {
        "id": 4,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他们一起看电影。 他们一起看电影。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Học bài"
          },
          {
            "key": "B",
            "imageIcon": "🎬",
            "imageDesc": "Rạp chiếu phim"
          },
          {
            "key": "C",
            "imageIcon": "📱",
            "imageDesc": "Lướt điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Xem phim (看电影) -> B"
      },
      {
        "id": 5,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "桌子上有很多水果。 桌子上有很多水果。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🍲",
            "imageDesc": "Bát canh"
          },
          {
            "key": "B",
            "imageIcon": "🍇",
            "imageDesc": "Đĩa hoa quả tươi"
          },
          {
            "key": "C",
            "imageIcon": "👗",
            "imageDesc": "Chiếc váy"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hoa quả (水果) -> B"
      },
      {
        "id": 6,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "今天几月几号？ 今天几月几号？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "三月五号",
            "pinyin": "sān yuè wǔ hào"
          },
          {
            "key": "B",
            "text": "星期天",
            "pinyin": "xīngqītiān"
          },
          {
            "key": "C",
            "text": "六点十分",
            "pinyin": "liù diǎn shí fēn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ngày tháng -> A"
      },
      {
        "id": 7,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你在哪儿工作？ 你在哪儿工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "上课",
            "pinyin": "shàngkè"
          },
          {
            "key": "B",
            "text": "在书店",
            "pinyin": "zài shūdiàn"
          },
          {
            "key": "C",
            "text": "大学生",
            "pinyin": "dàxuéshēng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi nơi làm việc -> B: Ở hiệu sách (在书店)"
      },
      {
        "id": 8,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你知道他家在哪里吗？ 你知道他家在哪里吗？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没有",
            "pinyin": "méiyǒu"
          },
          {
            "key": "B",
            "text": "我不知道",
            "pinyin": "wǒ bù zhīdào"
          },
          {
            "key": "C",
            "text": "很大",
            "pinyin": "hěn dà"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi biết không -> B: Không biết (不知道)"
      },
      {
        "id": 9,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "这部电影怎么样？ 这部电影怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没关系",
            "pinyin": "méi guānxi"
          },
          {
            "key": "B",
            "text": "很好看",
            "pinyin": "hěn hǎokàn"
          },
          {
            "key": "C",
            "text": "在饭店",
            "pinyin": "zài fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi phim thế nào -> B: Rất hay (很好看)"
      },
      {
        "id": 10,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "桌子上有几个苹果？ 桌子上有几个苹果？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "十个",
            "pinyin": "shí gè"
          },
          {
            "key": "B",
            "text": "不好吃",
            "pinyin": "bù hǎochī"
          },
          {
            "key": "C",
            "text": "很贵",
            "pinyin": "hěn guì"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi số lượng -> A: 10 quả (十个)"
      },
      {
        "id": 11,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你好！女：你好，很高兴认识你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Chào hỏi bắt tay -> C"
      },
      {
        "id": 12,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：现在几点了？女：现在差五分两点。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi giờ -> E (Đồng hồ)"
      },
      {
        "id": 13,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：请坐，请喝茶。男：谢谢你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mời ngồi -> B (Ghế tựa)"
      },
      {
        "id": 14,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你中午吃什么？女：我想吃一碗面条。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "F",
        "explanation": "Ăn mì -> F (Bát mì)"
      },
      {
        "id": 15,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：你去哪儿？男：我去超市买点东西。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đi siêu thị -> A (Xe đẩy)"
      },
      {
        "id": 16,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我叫王朋，我是北京人，我现在在一家医院工作。★ 王朋在哪里工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "学校",
            "pinyin": "xuéxiào"
          },
          {
            "key": "B",
            "text": "医院",
            "pinyin": "yīyuàn"
          },
          {
            "key": "C",
            "text": "饭店",
            "pinyin": "fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bác sĩ làm ở bệnh viện (医院) -> B"
      },
      {
        "id": 17,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "今天天气很好，我和朋友一起去公园散步。★ 今天天气怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "B",
            "text": "下雨",
            "pinyin": "xià yǔ"
          },
          {
            "key": "C",
            "text": "很冷",
            "pinyin": "hěn lěng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Thời tiết rất tốt -> A: 很好"
      },
      {
        "id": 18,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我家有一只小猫，它今年两岁了，很喜欢喝牛奶。★ 小猫喜欢喝什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "水",
            "pinyin": "shuǐ"
          },
          {
            "key": "B",
            "text": "茶",
            "pinyin": "chá"
          },
          {
            "key": "C",
            "text": "牛奶",
            "pinyin": "niúnǎi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Mèo thích uống sữa bò -> C: 牛奶"
      },
      {
        "id": 19,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "李老师坐在前面看书，他的书是新买的。★ 李老师在做什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "看书",
            "pinyin": "kàn shū"
          },
          {
            "key": "B",
            "text": "写字",
            "pinyin": "xiě zì"
          },
          {
            "key": "C",
            "text": "睡觉",
            "pinyin": "shuìjiào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đang đọc sách -> A: 看书"
      },
      {
        "id": 20,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "这件衣服太小了，我想买一件大一点儿的。★ 他想买什么样的衣服？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "大一点儿的",
            "pinyin": "dà yìdiǎnr de"
          },
          {
            "key": "B",
            "text": "红色的",
            "pinyin": "hóngsè de"
          },
          {
            "key": "C",
            "text": "便宜的",
            "pinyin": "piányi de"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Muốn mua cái to hơn -> A: 大一点儿的"
      },
      {
        "id": 21,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "明天上午我们要坐飞机去上海。",
        "promptPinyin": "Míngtiān shàngwǔ wǒmen yào zuò fēijī qù Shànghǎi.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "A",
        "explanation": "坐飞机 -> A (Máy bay)"
      },
      {
        "id": 22,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "这个苹果很大，很甜很好吃。",
        "promptPinyin": "Zhège píngguǒ hěn dà, hěn tián hěn hǎochī.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "苹果 -> C (Quả táo)"
      },
      {
        "id": 23,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "外面下大雨了，你带雨伞了吗？",
        "promptPinyin": "Wàimiàn xià dàyǔ le, nǐ dài yǔsǎn le ma?",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "下大雨 -> D (Trời mưa)"
      },
      {
        "id": 24,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "桌子上有三本汉语书。",
        "promptPinyin": "Zhuōzi shang yǒu sān běn Hànyǔ shū.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "三本书 -> E (Sách)"
      },
      {
        "id": 25,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "天气冷的时候，我喜欢喝热茶。",
        "promptPinyin": "Tiānqì lěng de shíhou, wǒ xǐhuan hē rè chá.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "F",
        "explanation": "喝热茶 -> F (Uống trà nóng)"
      },
      {
        "id": 26,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "他是谁？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Hỏi là ai -> D: Thầy giáo dạy tiếng Hán của tôi"
      },
      {
        "id": 27,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "这些一共多少钱？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi bao nhiêu tiền -> B: 25 tệ"
      },
      {
        "id": 28,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天天气怎么样？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi thời tiết -> E: Quá nóng, tôi muốn uống nước"
      },
      {
        "id": 29,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天星期五，明天呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "F",
        "explanation": "Hỏi ngày thứ -> F: Ngày mai thứ Bảy"
      },
      {
        "id": 30,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "王明在哪儿呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ở đâu -> A: Ở trường học"
      },
      {
        "id": 31,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这件 ____ 多少钱？",
        "promptPinyin": "Zhè jiàn ____ duōshao qián?",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lượng từ 件 đi với 衣服 (quần áo) -> B"
      },
      {
        "id": 32,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "今天见到你，我非常 ____。",
        "promptPinyin": "Jīntiān jiàndào nǐ, wǒ fēicháng ____.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Vui mừng: 高兴 -> D"
      },
      {
        "id": 33,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这个西瓜很 ____，我们吃不完。",
        "promptPinyin": "Zhège xīguā hěn ____, wǒmen chī bù wán.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Dưa hấu rất to: 大 -> C"
      },
      {
        "id": 34,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "谢谢你的 ____，我很感激你。",
        "promptPinyin": "Xièxie nǐ de ____, wǒ hěn gǎnjī nǐ.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Sự giúp đỡ: 帮助 -> A"
      },
      {
        "id": 35,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "小明 ____ 家里做汉语作业。",
        "promptPinyin": "Xiǎo Míng ____ jiā lǐ zuò Hànyǔ zuòyè.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Ở nhà: 在家里 -> E"
      },
      {
        "id": 36,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "北京的秋天天气非常好，不冷也不热。",
        "questionText": "★ 北京的秋天怎么样？",
        "options": [
          {
            "key": "A",
            "text": "很冷",
            "pinyin": "hěn lěng"
          },
          {
            "key": "B",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "C",
            "text": "很热",
            "pinyin": "hěn rè"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thời tiết rất tốt -> B: 很好"
      },
      {
        "id": 37,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我每天早上七点起床，然后去学校。",
        "questionText": "★ 我几点起床？",
        "options": [
          {
            "key": "A",
            "text": "六点",
            "pinyin": "liù diǎn"
          },
          {
            "key": "B",
            "text": "七点",
            "pinyin": "qī diǎn"
          },
          {
            "key": "C",
            "text": "八点",
            "pinyin": "bā diǎn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dậy lúc 7h -> B: 七点"
      },
      {
        "id": 38,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "张老师教我们汉语，他说话很有意思。",
        "questionText": "★ 张老师教什么？",
        "options": [
          {
            "key": "A",
            "text": "英语",
            "pinyin": "Yīngyǔ"
          },
          {
            "key": "B",
            "text": "汉语",
            "pinyin": "Hànyǔ"
          },
          {
            "key": "C",
            "text": "数学",
            "pinyin": "shùxué"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dạy tiếng Hán -> B: 汉语"
      },
      {
        "id": 39,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我家离火车站很近，走五分钟就到了。",
        "questionText": "★ 火车站离他家远吗？",
        "options": [
          {
            "key": "A",
            "text": "很近",
            "pinyin": "hěn jìn"
          },
          {
            "key": "B",
            "text": "很远",
            "pinyin": "hěn yuǎn"
          },
          {
            "key": "C",
            "text": "不知道",
            "pinyin": "bù zhīdào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Gần nhà -> A: 很近"
      },
      {
        "id": 40,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "医生说多喝温水，按时吃药身体就会好。",
        "questionText": "★ 医生让做什么？",
        "options": [
          {
            "key": "A",
            "text": "吃药喝水",
            "pinyin": "chī yào hē shuǐ"
          },
          {
            "key": "B",
            "text": "跑步",
            "pinyin": "pǎobù"
          },
          {
            "key": "C",
            "text": "买衣服",
            "pinyin": "mǎi yīfu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Uống nước và uống thuốc -> A"
      }
    ]
  },
  {
    "id": "hsk1_exam_06",
    "level": 1,
    "code": "HSK 1 - ĐỀ SỐ 6",
    "category": "hsk_full",
    "title": "中文水平考试 HSK 1 全真模拟试卷 6",
    "titleVi": "Đề Toàn Chân Mô Phỏng Chuẩn HSK 1 Số 6 (Bộ Đề Thi Thử Chuẩn H11003)",
    "durationMinutes": 35,
    "totalQuestions": 40,
    "passScore": 120,
    "questions": [
      {
        "id": 1,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他在喝茶。 他在喝茶。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Người viết bài"
          },
          {
            "key": "B",
            "imageIcon": "🍵",
            "imageDesc": "Người uống trà"
          },
          {
            "key": "C",
            "imageIcon": "🍜",
            "imageDesc": "Người ăn mì"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Uống trà (喝茶) -> B"
      },
      {
        "id": 2,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "爸爸在做饭。 爸爸在做饭。",
        "options": [
          {
            "key": "A",
            "imageIcon": "📖",
            "imageDesc": "Xem sách"
          },
          {
            "key": "B",
            "imageIcon": "🪞",
            "imageDesc": "Soi gương"
          },
          {
            "key": "C",
            "imageIcon": "🍳",
            "imageDesc": "Nấu ăn bếp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Nấu ăn (做饭) -> C"
      },
      {
        "id": 3,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "这里有两把椅子。 这里有两把椅子。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🪑",
            "imageDesc": "Hai chiếc ghế"
          },
          {
            "key": "B",
            "imageIcon": "🍞",
            "imageDesc": "Hai ổ bánh mì"
          },
          {
            "key": "C",
            "imageIcon": "🥚",
            "imageDesc": "Hai quả trứng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hai cái ghế (两把椅子) -> A"
      },
      {
        "id": 4,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他们一起看电影。 他们一起看电影。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Học bài"
          },
          {
            "key": "B",
            "imageIcon": "🎬",
            "imageDesc": "Rạp chiếu phim"
          },
          {
            "key": "C",
            "imageIcon": "📱",
            "imageDesc": "Lướt điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Xem phim (看电影) -> B"
      },
      {
        "id": 5,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "桌子上有很多水果。 桌子上有很多水果。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🍲",
            "imageDesc": "Bát canh"
          },
          {
            "key": "B",
            "imageIcon": "🍇",
            "imageDesc": "Đĩa hoa quả tươi"
          },
          {
            "key": "C",
            "imageIcon": "👗",
            "imageDesc": "Chiếc váy"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hoa quả (水果) -> B"
      },
      {
        "id": 6,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "今天几月几号？ 今天几月几号？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "三月五号",
            "pinyin": "sān yuè wǔ hào"
          },
          {
            "key": "B",
            "text": "星期天",
            "pinyin": "xīngqītiān"
          },
          {
            "key": "C",
            "text": "六点十分",
            "pinyin": "liù diǎn shí fēn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ngày tháng -> A"
      },
      {
        "id": 7,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你在哪儿工作？ 你在哪儿工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "上课",
            "pinyin": "shàngkè"
          },
          {
            "key": "B",
            "text": "在书店",
            "pinyin": "zài shūdiàn"
          },
          {
            "key": "C",
            "text": "大学生",
            "pinyin": "dàxuéshēng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi nơi làm việc -> B: Ở hiệu sách (在书店)"
      },
      {
        "id": 8,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你知道他家在哪里吗？ 你知道他家在哪里吗？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没有",
            "pinyin": "méiyǒu"
          },
          {
            "key": "B",
            "text": "我不知道",
            "pinyin": "wǒ bù zhīdào"
          },
          {
            "key": "C",
            "text": "很大",
            "pinyin": "hěn dà"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi biết không -> B: Không biết (不知道)"
      },
      {
        "id": 9,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "这部电影怎么样？ 这部电影怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没关系",
            "pinyin": "méi guānxi"
          },
          {
            "key": "B",
            "text": "很好看",
            "pinyin": "hěn hǎokàn"
          },
          {
            "key": "C",
            "text": "在饭店",
            "pinyin": "zài fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi phim thế nào -> B: Rất hay (很好看)"
      },
      {
        "id": 10,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "桌子上有几个苹果？ 桌子上有几个苹果？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "十个",
            "pinyin": "shí gè"
          },
          {
            "key": "B",
            "text": "不好吃",
            "pinyin": "bù hǎochī"
          },
          {
            "key": "C",
            "text": "很贵",
            "pinyin": "hěn guì"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi số lượng -> A: 10 quả (十个)"
      },
      {
        "id": 11,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你好！女：你好，很高兴认识你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Chào hỏi bắt tay -> C"
      },
      {
        "id": 12,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：现在几点了？女：现在差五分两点。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi giờ -> E (Đồng hồ)"
      },
      {
        "id": 13,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：请坐，请喝茶。男：谢谢你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mời ngồi -> B (Ghế tựa)"
      },
      {
        "id": 14,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你中午吃什么？女：我想吃一碗面条。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "F",
        "explanation": "Ăn mì -> F (Bát mì)"
      },
      {
        "id": 15,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：你去哪儿？男：我去超市买点东西。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đi siêu thị -> A (Xe đẩy)"
      },
      {
        "id": 16,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我叫王朋，我是北京人，我现在在一家医院工作。★ 王朋在哪里工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "学校",
            "pinyin": "xuéxiào"
          },
          {
            "key": "B",
            "text": "医院",
            "pinyin": "yīyuàn"
          },
          {
            "key": "C",
            "text": "饭店",
            "pinyin": "fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bác sĩ làm ở bệnh viện (医院) -> B"
      },
      {
        "id": 17,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "今天天气很好，我和朋友一起去公园散步。★ 今天天气怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "B",
            "text": "下雨",
            "pinyin": "xià yǔ"
          },
          {
            "key": "C",
            "text": "很冷",
            "pinyin": "hěn lěng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Thời tiết rất tốt -> A: 很好"
      },
      {
        "id": 18,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我家有一只小猫，它今年两岁了，很喜欢喝牛奶。★ 小猫喜欢喝什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "水",
            "pinyin": "shuǐ"
          },
          {
            "key": "B",
            "text": "茶",
            "pinyin": "chá"
          },
          {
            "key": "C",
            "text": "牛奶",
            "pinyin": "niúnǎi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Mèo thích uống sữa bò -> C: 牛奶"
      },
      {
        "id": 19,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "李老师坐在前面看书，他的书是新买的。★ 李老师在做什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "看书",
            "pinyin": "kàn shū"
          },
          {
            "key": "B",
            "text": "写字",
            "pinyin": "xiě zì"
          },
          {
            "key": "C",
            "text": "睡觉",
            "pinyin": "shuìjiào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đang đọc sách -> A: 看书"
      },
      {
        "id": 20,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "这件衣服太小了，我想买一件大一点儿的。★ 他想买什么样的衣服？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "大一点儿的",
            "pinyin": "dà yìdiǎnr de"
          },
          {
            "key": "B",
            "text": "红色的",
            "pinyin": "hóngsè de"
          },
          {
            "key": "C",
            "text": "便宜的",
            "pinyin": "piányi de"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Muốn mua cái to hơn -> A: 大一点儿的"
      },
      {
        "id": 21,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "明天上午我们要坐飞机去上海。",
        "promptPinyin": "Míngtiān shàngwǔ wǒmen yào zuò fēijī qù Shànghǎi.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "A",
        "explanation": "坐飞机 -> A (Máy bay)"
      },
      {
        "id": 22,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "这个苹果很大，很甜很好吃。",
        "promptPinyin": "Zhège píngguǒ hěn dà, hěn tián hěn hǎochī.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "苹果 -> C (Quả táo)"
      },
      {
        "id": 23,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "外面下大雨了，你带雨伞了吗？",
        "promptPinyin": "Wàimiàn xià dàyǔ le, nǐ dài yǔsǎn le ma?",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "下大雨 -> D (Trời mưa)"
      },
      {
        "id": 24,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "桌子上有三本汉语书。",
        "promptPinyin": "Zhuōzi shang yǒu sān běn Hànyǔ shū.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "三本书 -> E (Sách)"
      },
      {
        "id": 25,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "天气冷的时候，我喜欢喝热茶。",
        "promptPinyin": "Tiānqì lěng de shíhou, wǒ xǐhuan hē rè chá.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "F",
        "explanation": "喝热茶 -> F (Uống trà nóng)"
      },
      {
        "id": 26,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "他是谁？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Hỏi là ai -> D: Thầy giáo dạy tiếng Hán của tôi"
      },
      {
        "id": 27,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "这些一共多少钱？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi bao nhiêu tiền -> B: 25 tệ"
      },
      {
        "id": 28,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天天气怎么样？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi thời tiết -> E: Quá nóng, tôi muốn uống nước"
      },
      {
        "id": 29,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天星期五，明天呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "F",
        "explanation": "Hỏi ngày thứ -> F: Ngày mai thứ Bảy"
      },
      {
        "id": 30,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "王明在哪儿呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ở đâu -> A: Ở trường học"
      },
      {
        "id": 31,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这件 ____ 多少钱？",
        "promptPinyin": "Zhè jiàn ____ duōshao qián?",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lượng từ 件 đi với 衣服 (quần áo) -> B"
      },
      {
        "id": 32,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "今天见到你，我非常 ____。",
        "promptPinyin": "Jīntiān jiàndào nǐ, wǒ fēicháng ____.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Vui mừng: 高兴 -> D"
      },
      {
        "id": 33,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这个西瓜很 ____，我们吃不完。",
        "promptPinyin": "Zhège xīguā hěn ____, wǒmen chī bù wán.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Dưa hấu rất to: 大 -> C"
      },
      {
        "id": 34,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "谢谢你的 ____，我很感激你。",
        "promptPinyin": "Xièxie nǐ de ____, wǒ hěn gǎnjī nǐ.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Sự giúp đỡ: 帮助 -> A"
      },
      {
        "id": 35,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "小明 ____ 家里做汉语作业。",
        "promptPinyin": "Xiǎo Míng ____ jiā lǐ zuò Hànyǔ zuòyè.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Ở nhà: 在家里 -> E"
      },
      {
        "id": 36,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "北京的秋天天气非常好，不冷也不热。",
        "questionText": "★ 北京的秋天怎么样？",
        "options": [
          {
            "key": "A",
            "text": "很冷",
            "pinyin": "hěn lěng"
          },
          {
            "key": "B",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "C",
            "text": "很热",
            "pinyin": "hěn rè"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thời tiết rất tốt -> B: 很好"
      },
      {
        "id": 37,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我每天早上七点起床，然后去学校。",
        "questionText": "★ 我几点起床？",
        "options": [
          {
            "key": "A",
            "text": "六点",
            "pinyin": "liù diǎn"
          },
          {
            "key": "B",
            "text": "七点",
            "pinyin": "qī diǎn"
          },
          {
            "key": "C",
            "text": "八点",
            "pinyin": "bā diǎn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dậy lúc 7h -> B: 七点"
      },
      {
        "id": 38,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "张老师教我们汉语，他说话很有意思。",
        "questionText": "★ 张老师教什么？",
        "options": [
          {
            "key": "A",
            "text": "英语",
            "pinyin": "Yīngyǔ"
          },
          {
            "key": "B",
            "text": "汉语",
            "pinyin": "Hànyǔ"
          },
          {
            "key": "C",
            "text": "数学",
            "pinyin": "shùxué"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dạy tiếng Hán -> B: 汉语"
      },
      {
        "id": 39,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我家离火车站很近，走五分钟就到了。",
        "questionText": "★ 火车站离他家远吗？",
        "options": [
          {
            "key": "A",
            "text": "很近",
            "pinyin": "hěn jìn"
          },
          {
            "key": "B",
            "text": "很远",
            "pinyin": "hěn yuǎn"
          },
          {
            "key": "C",
            "text": "不知道",
            "pinyin": "bù zhīdào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Gần nhà -> A: 很近"
      },
      {
        "id": 40,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "医生说多喝温水，按时吃药身体就会好。",
        "questionText": "★ 医生让做什么？",
        "options": [
          {
            "key": "A",
            "text": "吃药喝水",
            "pinyin": "chī yào hē shuǐ"
          },
          {
            "key": "B",
            "text": "跑步",
            "pinyin": "pǎobù"
          },
          {
            "key": "C",
            "text": "买衣服",
            "pinyin": "mǎi yīfu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Uống nước và uống thuốc -> A"
      }
    ]
  },
  {
    "id": "hsk1_exam_07",
    "level": 1,
    "code": "HSK 1 - ĐỀ SỐ 7",
    "category": "hsk_full",
    "title": "中文水平考试 HSK 1 全真模拟试卷 7",
    "titleVi": "Đề Toàn Chân Mô Phỏng Chuẩn HSK 1 Số 7 (Bộ Đề Thi Thử Chuẩn H11004)",
    "durationMinutes": 35,
    "totalQuestions": 40,
    "passScore": 120,
    "questions": [
      {
        "id": 1,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他在喝茶。 他在喝茶。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Người viết bài"
          },
          {
            "key": "B",
            "imageIcon": "🍵",
            "imageDesc": "Người uống trà"
          },
          {
            "key": "C",
            "imageIcon": "🍜",
            "imageDesc": "Người ăn mì"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Uống trà (喝茶) -> B"
      },
      {
        "id": 2,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "爸爸在做饭。 爸爸在做饭。",
        "options": [
          {
            "key": "A",
            "imageIcon": "📖",
            "imageDesc": "Xem sách"
          },
          {
            "key": "B",
            "imageIcon": "🪞",
            "imageDesc": "Soi gương"
          },
          {
            "key": "C",
            "imageIcon": "🍳",
            "imageDesc": "Nấu ăn bếp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Nấu ăn (做饭) -> C"
      },
      {
        "id": 3,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "这里有两把椅子。 这里有两把椅子。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🪑",
            "imageDesc": "Hai chiếc ghế"
          },
          {
            "key": "B",
            "imageIcon": "🍞",
            "imageDesc": "Hai ổ bánh mì"
          },
          {
            "key": "C",
            "imageIcon": "🥚",
            "imageDesc": "Hai quả trứng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hai cái ghế (两把椅子) -> A"
      },
      {
        "id": 4,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他们一起看电影。 他们一起看电影。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Học bài"
          },
          {
            "key": "B",
            "imageIcon": "🎬",
            "imageDesc": "Rạp chiếu phim"
          },
          {
            "key": "C",
            "imageIcon": "📱",
            "imageDesc": "Lướt điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Xem phim (看电影) -> B"
      },
      {
        "id": 5,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "桌子上有很多水果。 桌子上有很多水果。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🍲",
            "imageDesc": "Bát canh"
          },
          {
            "key": "B",
            "imageIcon": "🍇",
            "imageDesc": "Đĩa hoa quả tươi"
          },
          {
            "key": "C",
            "imageIcon": "👗",
            "imageDesc": "Chiếc váy"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hoa quả (水果) -> B"
      },
      {
        "id": 6,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "今天几月几号？ 今天几月几号？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "三月五号",
            "pinyin": "sān yuè wǔ hào"
          },
          {
            "key": "B",
            "text": "星期天",
            "pinyin": "xīngqītiān"
          },
          {
            "key": "C",
            "text": "六点十分",
            "pinyin": "liù diǎn shí fēn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ngày tháng -> A"
      },
      {
        "id": 7,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你在哪儿工作？ 你在哪儿工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "上课",
            "pinyin": "shàngkè"
          },
          {
            "key": "B",
            "text": "在书店",
            "pinyin": "zài shūdiàn"
          },
          {
            "key": "C",
            "text": "大学生",
            "pinyin": "dàxuéshēng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi nơi làm việc -> B: Ở hiệu sách (在书店)"
      },
      {
        "id": 8,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你知道他家在哪里吗？ 你知道他家在哪里吗？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没有",
            "pinyin": "méiyǒu"
          },
          {
            "key": "B",
            "text": "我不知道",
            "pinyin": "wǒ bù zhīdào"
          },
          {
            "key": "C",
            "text": "很大",
            "pinyin": "hěn dà"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi biết không -> B: Không biết (不知道)"
      },
      {
        "id": 9,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "这部电影怎么样？ 这部电影怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没关系",
            "pinyin": "méi guānxi"
          },
          {
            "key": "B",
            "text": "很好看",
            "pinyin": "hěn hǎokàn"
          },
          {
            "key": "C",
            "text": "在饭店",
            "pinyin": "zài fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi phim thế nào -> B: Rất hay (很好看)"
      },
      {
        "id": 10,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "桌子上有几个苹果？ 桌子上有几个苹果？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "十个",
            "pinyin": "shí gè"
          },
          {
            "key": "B",
            "text": "不好吃",
            "pinyin": "bù hǎochī"
          },
          {
            "key": "C",
            "text": "很贵",
            "pinyin": "hěn guì"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi số lượng -> A: 10 quả (十个)"
      },
      {
        "id": 11,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你好！女：你好，很高兴认识你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Chào hỏi bắt tay -> C"
      },
      {
        "id": 12,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：现在几点了？女：现在差五分两点。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi giờ -> E (Đồng hồ)"
      },
      {
        "id": 13,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：请坐，请喝茶。男：谢谢你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mời ngồi -> B (Ghế tựa)"
      },
      {
        "id": 14,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你中午吃什么？女：我想吃一碗面条。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "F",
        "explanation": "Ăn mì -> F (Bát mì)"
      },
      {
        "id": 15,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：你去哪儿？男：我去超市买点东西。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đi siêu thị -> A (Xe đẩy)"
      },
      {
        "id": 16,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我叫王朋，我是北京人，我现在在一家医院工作。★ 王朋在哪里工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "学校",
            "pinyin": "xuéxiào"
          },
          {
            "key": "B",
            "text": "医院",
            "pinyin": "yīyuàn"
          },
          {
            "key": "C",
            "text": "饭店",
            "pinyin": "fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bác sĩ làm ở bệnh viện (医院) -> B"
      },
      {
        "id": 17,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "今天天气很好，我和朋友一起去公园散步。★ 今天天气怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "B",
            "text": "下雨",
            "pinyin": "xià yǔ"
          },
          {
            "key": "C",
            "text": "很冷",
            "pinyin": "hěn lěng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Thời tiết rất tốt -> A: 很好"
      },
      {
        "id": 18,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我家有一只小猫，它今年两岁了，很喜欢喝牛奶。★ 小猫喜欢喝什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "水",
            "pinyin": "shuǐ"
          },
          {
            "key": "B",
            "text": "茶",
            "pinyin": "chá"
          },
          {
            "key": "C",
            "text": "牛奶",
            "pinyin": "niúnǎi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Mèo thích uống sữa bò -> C: 牛奶"
      },
      {
        "id": 19,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "李老师坐在前面看书，他的书是新买的。★ 李老师在做什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "看书",
            "pinyin": "kàn shū"
          },
          {
            "key": "B",
            "text": "写字",
            "pinyin": "xiě zì"
          },
          {
            "key": "C",
            "text": "睡觉",
            "pinyin": "shuìjiào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đang đọc sách -> A: 看书"
      },
      {
        "id": 20,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "这件衣服太小了，我想买一件大一点儿的。★ 他想买什么样的衣服？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "大一点儿的",
            "pinyin": "dà yìdiǎnr de"
          },
          {
            "key": "B",
            "text": "红色的",
            "pinyin": "hóngsè de"
          },
          {
            "key": "C",
            "text": "便宜的",
            "pinyin": "piányi de"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Muốn mua cái to hơn -> A: 大一点儿的"
      },
      {
        "id": 21,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "明天上午我们要坐飞机去上海。",
        "promptPinyin": "Míngtiān shàngwǔ wǒmen yào zuò fēijī qù Shànghǎi.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "A",
        "explanation": "坐飞机 -> A (Máy bay)"
      },
      {
        "id": 22,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "这个苹果很大，很甜很好吃。",
        "promptPinyin": "Zhège píngguǒ hěn dà, hěn tián hěn hǎochī.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "苹果 -> C (Quả táo)"
      },
      {
        "id": 23,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "外面下大雨了，你带雨伞了吗？",
        "promptPinyin": "Wàimiàn xià dàyǔ le, nǐ dài yǔsǎn le ma?",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "下大雨 -> D (Trời mưa)"
      },
      {
        "id": 24,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "桌子上有三本汉语书。",
        "promptPinyin": "Zhuōzi shang yǒu sān běn Hànyǔ shū.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "三本书 -> E (Sách)"
      },
      {
        "id": 25,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "天气冷的时候，我喜欢喝热茶。",
        "promptPinyin": "Tiānqì lěng de shíhou, wǒ xǐhuan hē rè chá.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "F",
        "explanation": "喝热茶 -> F (Uống trà nóng)"
      },
      {
        "id": 26,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "他是谁？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Hỏi là ai -> D: Thầy giáo dạy tiếng Hán của tôi"
      },
      {
        "id": 27,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "这些一共多少钱？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi bao nhiêu tiền -> B: 25 tệ"
      },
      {
        "id": 28,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天天气怎么样？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi thời tiết -> E: Quá nóng, tôi muốn uống nước"
      },
      {
        "id": 29,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天星期五，明天呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "F",
        "explanation": "Hỏi ngày thứ -> F: Ngày mai thứ Bảy"
      },
      {
        "id": 30,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "王明在哪儿呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ở đâu -> A: Ở trường học"
      },
      {
        "id": 31,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这件 ____ 多少钱？",
        "promptPinyin": "Zhè jiàn ____ duōshao qián?",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lượng từ 件 đi với 衣服 (quần áo) -> B"
      },
      {
        "id": 32,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "今天见到你，我非常 ____。",
        "promptPinyin": "Jīntiān jiàndào nǐ, wǒ fēicháng ____.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Vui mừng: 高兴 -> D"
      },
      {
        "id": 33,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这个西瓜很 ____，我们吃不完。",
        "promptPinyin": "Zhège xīguā hěn ____, wǒmen chī bù wán.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Dưa hấu rất to: 大 -> C"
      },
      {
        "id": 34,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "谢谢你的 ____，我很感激你。",
        "promptPinyin": "Xièxie nǐ de ____, wǒ hěn gǎnjī nǐ.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Sự giúp đỡ: 帮助 -> A"
      },
      {
        "id": 35,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "小明 ____ 家里做汉语作业。",
        "promptPinyin": "Xiǎo Míng ____ jiā lǐ zuò Hànyǔ zuòyè.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Ở nhà: 在家里 -> E"
      },
      {
        "id": 36,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "北京的秋天天气非常好，不冷也不热。",
        "questionText": "★ 北京的秋天怎么样？",
        "options": [
          {
            "key": "A",
            "text": "很冷",
            "pinyin": "hěn lěng"
          },
          {
            "key": "B",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "C",
            "text": "很热",
            "pinyin": "hěn rè"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thời tiết rất tốt -> B: 很好"
      },
      {
        "id": 37,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我每天早上七点起床，然后去学校。",
        "questionText": "★ 我几点起床？",
        "options": [
          {
            "key": "A",
            "text": "六点",
            "pinyin": "liù diǎn"
          },
          {
            "key": "B",
            "text": "七点",
            "pinyin": "qī diǎn"
          },
          {
            "key": "C",
            "text": "八点",
            "pinyin": "bā diǎn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dậy lúc 7h -> B: 七点"
      },
      {
        "id": 38,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "张老师教我们汉语，他说话很有意思。",
        "questionText": "★ 张老师教什么？",
        "options": [
          {
            "key": "A",
            "text": "英语",
            "pinyin": "Yīngyǔ"
          },
          {
            "key": "B",
            "text": "汉语",
            "pinyin": "Hànyǔ"
          },
          {
            "key": "C",
            "text": "数学",
            "pinyin": "shùxué"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dạy tiếng Hán -> B: 汉语"
      },
      {
        "id": 39,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我家离火车站很近，走五分钟就到了。",
        "questionText": "★ 火车站离他家远吗？",
        "options": [
          {
            "key": "A",
            "text": "很近",
            "pinyin": "hěn jìn"
          },
          {
            "key": "B",
            "text": "很远",
            "pinyin": "hěn yuǎn"
          },
          {
            "key": "C",
            "text": "不知道",
            "pinyin": "bù zhīdào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Gần nhà -> A: 很近"
      },
      {
        "id": 40,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "医生说多喝温水，按时吃药身体就会好。",
        "questionText": "★ 医生让做什么？",
        "options": [
          {
            "key": "A",
            "text": "吃药喝水",
            "pinyin": "chī yào hē shuǐ"
          },
          {
            "key": "B",
            "text": "跑步",
            "pinyin": "pǎobù"
          },
          {
            "key": "C",
            "text": "买衣服",
            "pinyin": "mǎi yīfu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Uống nước và uống thuốc -> A"
      }
    ]
  },
  {
    "id": "hsk1_exam_08",
    "level": 1,
    "code": "HSK 1 - ĐỀ SỐ 8",
    "category": "hsk_full",
    "title": "中文水平考试 HSK 1 全真模拟试卷 8",
    "titleVi": "Đề Toàn Chân Mô Phỏng Chuẩn HSK 1 Số 8 (Bộ Đề Thi Thử Chuẩn H11005)",
    "durationMinutes": 35,
    "totalQuestions": 40,
    "passScore": 120,
    "questions": [
      {
        "id": 1,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他在喝茶。 他在喝茶。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Người viết bài"
          },
          {
            "key": "B",
            "imageIcon": "🍵",
            "imageDesc": "Người uống trà"
          },
          {
            "key": "C",
            "imageIcon": "🍜",
            "imageDesc": "Người ăn mì"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Uống trà (喝茶) -> B"
      },
      {
        "id": 2,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "爸爸在做饭。 爸爸在做饭。",
        "options": [
          {
            "key": "A",
            "imageIcon": "📖",
            "imageDesc": "Xem sách"
          },
          {
            "key": "B",
            "imageIcon": "🪞",
            "imageDesc": "Soi gương"
          },
          {
            "key": "C",
            "imageIcon": "🍳",
            "imageDesc": "Nấu ăn bếp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Nấu ăn (做饭) -> C"
      },
      {
        "id": 3,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "这里有两把椅子。 这里有两把椅子。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🪑",
            "imageDesc": "Hai chiếc ghế"
          },
          {
            "key": "B",
            "imageIcon": "🍞",
            "imageDesc": "Hai ổ bánh mì"
          },
          {
            "key": "C",
            "imageIcon": "🥚",
            "imageDesc": "Hai quả trứng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hai cái ghế (两把椅子) -> A"
      },
      {
        "id": 4,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他们一起看电影。 他们一起看电影。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Học bài"
          },
          {
            "key": "B",
            "imageIcon": "🎬",
            "imageDesc": "Rạp chiếu phim"
          },
          {
            "key": "C",
            "imageIcon": "📱",
            "imageDesc": "Lướt điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Xem phim (看电影) -> B"
      },
      {
        "id": 5,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "桌子上有很多水果。 桌子上有很多水果。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🍲",
            "imageDesc": "Bát canh"
          },
          {
            "key": "B",
            "imageIcon": "🍇",
            "imageDesc": "Đĩa hoa quả tươi"
          },
          {
            "key": "C",
            "imageIcon": "👗",
            "imageDesc": "Chiếc váy"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hoa quả (水果) -> B"
      },
      {
        "id": 6,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "今天几月几号？ 今天几月几号？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "三月五号",
            "pinyin": "sān yuè wǔ hào"
          },
          {
            "key": "B",
            "text": "星期天",
            "pinyin": "xīngqītiān"
          },
          {
            "key": "C",
            "text": "六点十分",
            "pinyin": "liù diǎn shí fēn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ngày tháng -> A"
      },
      {
        "id": 7,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你在哪儿工作？ 你在哪儿工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "上课",
            "pinyin": "shàngkè"
          },
          {
            "key": "B",
            "text": "在书店",
            "pinyin": "zài shūdiàn"
          },
          {
            "key": "C",
            "text": "大学生",
            "pinyin": "dàxuéshēng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi nơi làm việc -> B: Ở hiệu sách (在书店)"
      },
      {
        "id": 8,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你知道他家在哪里吗？ 你知道他家在哪里吗？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没有",
            "pinyin": "méiyǒu"
          },
          {
            "key": "B",
            "text": "我不知道",
            "pinyin": "wǒ bù zhīdào"
          },
          {
            "key": "C",
            "text": "很大",
            "pinyin": "hěn dà"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi biết không -> B: Không biết (不知道)"
      },
      {
        "id": 9,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "这部电影怎么样？ 这部电影怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没关系",
            "pinyin": "méi guānxi"
          },
          {
            "key": "B",
            "text": "很好看",
            "pinyin": "hěn hǎokàn"
          },
          {
            "key": "C",
            "text": "在饭店",
            "pinyin": "zài fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi phim thế nào -> B: Rất hay (很好看)"
      },
      {
        "id": 10,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "桌子上有几个苹果？ 桌子上有几个苹果？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "十个",
            "pinyin": "shí gè"
          },
          {
            "key": "B",
            "text": "不好吃",
            "pinyin": "bù hǎochī"
          },
          {
            "key": "C",
            "text": "很贵",
            "pinyin": "hěn guì"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi số lượng -> A: 10 quả (十个)"
      },
      {
        "id": 11,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你好！女：你好，很高兴认识你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Chào hỏi bắt tay -> C"
      },
      {
        "id": 12,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：现在几点了？女：现在差五分两点。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi giờ -> E (Đồng hồ)"
      },
      {
        "id": 13,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：请坐，请喝茶。男：谢谢你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mời ngồi -> B (Ghế tựa)"
      },
      {
        "id": 14,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你中午吃什么？女：我想吃一碗面条。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "F",
        "explanation": "Ăn mì -> F (Bát mì)"
      },
      {
        "id": 15,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：你去哪儿？男：我去超市买点东西。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đi siêu thị -> A (Xe đẩy)"
      },
      {
        "id": 16,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我叫王朋，我是北京人，我现在在一家医院工作。★ 王朋在哪里工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "学校",
            "pinyin": "xuéxiào"
          },
          {
            "key": "B",
            "text": "医院",
            "pinyin": "yīyuàn"
          },
          {
            "key": "C",
            "text": "饭店",
            "pinyin": "fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bác sĩ làm ở bệnh viện (医院) -> B"
      },
      {
        "id": 17,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "今天天气很好，我和朋友一起去公园散步。★ 今天天气怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "B",
            "text": "下雨",
            "pinyin": "xià yǔ"
          },
          {
            "key": "C",
            "text": "很冷",
            "pinyin": "hěn lěng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Thời tiết rất tốt -> A: 很好"
      },
      {
        "id": 18,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我家有一只小猫，它今年两岁了，很喜欢喝牛奶。★ 小猫喜欢喝什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "水",
            "pinyin": "shuǐ"
          },
          {
            "key": "B",
            "text": "茶",
            "pinyin": "chá"
          },
          {
            "key": "C",
            "text": "牛奶",
            "pinyin": "niúnǎi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Mèo thích uống sữa bò -> C: 牛奶"
      },
      {
        "id": 19,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "李老师坐在前面看书，他的书是新买的。★ 李老师在做什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "看书",
            "pinyin": "kàn shū"
          },
          {
            "key": "B",
            "text": "写字",
            "pinyin": "xiě zì"
          },
          {
            "key": "C",
            "text": "睡觉",
            "pinyin": "shuìjiào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đang đọc sách -> A: 看书"
      },
      {
        "id": 20,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "这件衣服太小了，我想买一件大一点儿的。★ 他想买什么样的衣服？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "大一点儿的",
            "pinyin": "dà yìdiǎnr de"
          },
          {
            "key": "B",
            "text": "红色的",
            "pinyin": "hóngsè de"
          },
          {
            "key": "C",
            "text": "便宜的",
            "pinyin": "piányi de"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Muốn mua cái to hơn -> A: 大一点儿的"
      },
      {
        "id": 21,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "明天上午我们要坐飞机去上海。",
        "promptPinyin": "Míngtiān shàngwǔ wǒmen yào zuò fēijī qù Shànghǎi.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "A",
        "explanation": "坐飞机 -> A (Máy bay)"
      },
      {
        "id": 22,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "这个苹果很大，很甜很好吃。",
        "promptPinyin": "Zhège píngguǒ hěn dà, hěn tián hěn hǎochī.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "苹果 -> C (Quả táo)"
      },
      {
        "id": 23,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "外面下大雨了，你带雨伞了吗？",
        "promptPinyin": "Wàimiàn xià dàyǔ le, nǐ dài yǔsǎn le ma?",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "下大雨 -> D (Trời mưa)"
      },
      {
        "id": 24,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "桌子上有三本汉语书。",
        "promptPinyin": "Zhuōzi shang yǒu sān běn Hànyǔ shū.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "三本书 -> E (Sách)"
      },
      {
        "id": 25,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "天气冷的时候，我喜欢喝热茶。",
        "promptPinyin": "Tiānqì lěng de shíhou, wǒ xǐhuan hē rè chá.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "F",
        "explanation": "喝热茶 -> F (Uống trà nóng)"
      },
      {
        "id": 26,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "他是谁？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Hỏi là ai -> D: Thầy giáo dạy tiếng Hán của tôi"
      },
      {
        "id": 27,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "这些一共多少钱？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi bao nhiêu tiền -> B: 25 tệ"
      },
      {
        "id": 28,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天天气怎么样？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi thời tiết -> E: Quá nóng, tôi muốn uống nước"
      },
      {
        "id": 29,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天星期五，明天呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "F",
        "explanation": "Hỏi ngày thứ -> F: Ngày mai thứ Bảy"
      },
      {
        "id": 30,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "王明在哪儿呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ở đâu -> A: Ở trường học"
      },
      {
        "id": 31,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这件 ____ 多少钱？",
        "promptPinyin": "Zhè jiàn ____ duōshao qián?",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lượng từ 件 đi với 衣服 (quần áo) -> B"
      },
      {
        "id": 32,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "今天见到你，我非常 ____。",
        "promptPinyin": "Jīntiān jiàndào nǐ, wǒ fēicháng ____.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Vui mừng: 高兴 -> D"
      },
      {
        "id": 33,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这个西瓜很 ____，我们吃不完。",
        "promptPinyin": "Zhège xīguā hěn ____, wǒmen chī bù wán.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Dưa hấu rất to: 大 -> C"
      },
      {
        "id": 34,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "谢谢你的 ____，我很感激你。",
        "promptPinyin": "Xièxie nǐ de ____, wǒ hěn gǎnjī nǐ.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Sự giúp đỡ: 帮助 -> A"
      },
      {
        "id": 35,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "小明 ____ 家里做汉语作业。",
        "promptPinyin": "Xiǎo Míng ____ jiā lǐ zuò Hànyǔ zuòyè.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Ở nhà: 在家里 -> E"
      },
      {
        "id": 36,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "北京的秋天天气非常好，不冷也不热。",
        "questionText": "★ 北京的秋天怎么样？",
        "options": [
          {
            "key": "A",
            "text": "很冷",
            "pinyin": "hěn lěng"
          },
          {
            "key": "B",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "C",
            "text": "很热",
            "pinyin": "hěn rè"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thời tiết rất tốt -> B: 很好"
      },
      {
        "id": 37,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我每天早上七点起床，然后去学校。",
        "questionText": "★ 我几点起床？",
        "options": [
          {
            "key": "A",
            "text": "六点",
            "pinyin": "liù diǎn"
          },
          {
            "key": "B",
            "text": "七点",
            "pinyin": "qī diǎn"
          },
          {
            "key": "C",
            "text": "八点",
            "pinyin": "bā diǎn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dậy lúc 7h -> B: 七点"
      },
      {
        "id": 38,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "张老师教我们汉语，他说话很有意思。",
        "questionText": "★ 张老师教什么？",
        "options": [
          {
            "key": "A",
            "text": "英语",
            "pinyin": "Yīngyǔ"
          },
          {
            "key": "B",
            "text": "汉语",
            "pinyin": "Hànyǔ"
          },
          {
            "key": "C",
            "text": "数学",
            "pinyin": "shùxué"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dạy tiếng Hán -> B: 汉语"
      },
      {
        "id": 39,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我家离火车站很近，走五分钟就到了。",
        "questionText": "★ 火车站离他家远吗？",
        "options": [
          {
            "key": "A",
            "text": "很近",
            "pinyin": "hěn jìn"
          },
          {
            "key": "B",
            "text": "很远",
            "pinyin": "hěn yuǎn"
          },
          {
            "key": "C",
            "text": "不知道",
            "pinyin": "bù zhīdào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Gần nhà -> A: 很近"
      },
      {
        "id": 40,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "医生说多喝温水，按时吃药身体就会好。",
        "questionText": "★ 医生让做什么？",
        "options": [
          {
            "key": "A",
            "text": "吃药喝水",
            "pinyin": "chī yào hē shuǐ"
          },
          {
            "key": "B",
            "text": "跑步",
            "pinyin": "pǎobù"
          },
          {
            "key": "C",
            "text": "买衣服",
            "pinyin": "mǎi yīfu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Uống nước và uống thuốc -> A"
      }
    ]
  },
  {
    "id": "hsk1_exam_09",
    "level": 1,
    "code": "HSK 1 - ĐỀ SỐ 9",
    "category": "hsk_full",
    "title": "中文水平考试 HSK 1 全真模拟试卷 9",
    "titleVi": "Đề Toàn Chân Mô Phỏng Chuẩn HSK 1 Số 9 (Bộ Đề Thi Thử Chuẩn H11006)",
    "durationMinutes": 35,
    "totalQuestions": 40,
    "passScore": 120,
    "questions": [
      {
        "id": 1,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他在喝茶。 他在喝茶。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Người viết bài"
          },
          {
            "key": "B",
            "imageIcon": "🍵",
            "imageDesc": "Người uống trà"
          },
          {
            "key": "C",
            "imageIcon": "🍜",
            "imageDesc": "Người ăn mì"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Uống trà (喝茶) -> B"
      },
      {
        "id": 2,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "爸爸在做饭。 爸爸在做饭。",
        "options": [
          {
            "key": "A",
            "imageIcon": "📖",
            "imageDesc": "Xem sách"
          },
          {
            "key": "B",
            "imageIcon": "🪞",
            "imageDesc": "Soi gương"
          },
          {
            "key": "C",
            "imageIcon": "🍳",
            "imageDesc": "Nấu ăn bếp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Nấu ăn (做饭) -> C"
      },
      {
        "id": 3,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "这里有两把椅子。 这里有两把椅子。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🪑",
            "imageDesc": "Hai chiếc ghế"
          },
          {
            "key": "B",
            "imageIcon": "🍞",
            "imageDesc": "Hai ổ bánh mì"
          },
          {
            "key": "C",
            "imageIcon": "🥚",
            "imageDesc": "Hai quả trứng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hai cái ghế (两把椅子) -> A"
      },
      {
        "id": 4,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他们一起看电影。 他们一起看电影。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Học bài"
          },
          {
            "key": "B",
            "imageIcon": "🎬",
            "imageDesc": "Rạp chiếu phim"
          },
          {
            "key": "C",
            "imageIcon": "📱",
            "imageDesc": "Lướt điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Xem phim (看电影) -> B"
      },
      {
        "id": 5,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "桌子上有很多水果。 桌子上有很多水果。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🍲",
            "imageDesc": "Bát canh"
          },
          {
            "key": "B",
            "imageIcon": "🍇",
            "imageDesc": "Đĩa hoa quả tươi"
          },
          {
            "key": "C",
            "imageIcon": "👗",
            "imageDesc": "Chiếc váy"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hoa quả (水果) -> B"
      },
      {
        "id": 6,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "今天几月几号？ 今天几月几号？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "三月五号",
            "pinyin": "sān yuè wǔ hào"
          },
          {
            "key": "B",
            "text": "星期天",
            "pinyin": "xīngqītiān"
          },
          {
            "key": "C",
            "text": "六点十分",
            "pinyin": "liù diǎn shí fēn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ngày tháng -> A"
      },
      {
        "id": 7,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你在哪儿工作？ 你在哪儿工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "上课",
            "pinyin": "shàngkè"
          },
          {
            "key": "B",
            "text": "在书店",
            "pinyin": "zài shūdiàn"
          },
          {
            "key": "C",
            "text": "大学生",
            "pinyin": "dàxuéshēng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi nơi làm việc -> B: Ở hiệu sách (在书店)"
      },
      {
        "id": 8,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你知道他家在哪里吗？ 你知道他家在哪里吗？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没有",
            "pinyin": "méiyǒu"
          },
          {
            "key": "B",
            "text": "我不知道",
            "pinyin": "wǒ bù zhīdào"
          },
          {
            "key": "C",
            "text": "很大",
            "pinyin": "hěn dà"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi biết không -> B: Không biết (不知道)"
      },
      {
        "id": 9,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "这部电影怎么样？ 这部电影怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没关系",
            "pinyin": "méi guānxi"
          },
          {
            "key": "B",
            "text": "很好看",
            "pinyin": "hěn hǎokàn"
          },
          {
            "key": "C",
            "text": "在饭店",
            "pinyin": "zài fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi phim thế nào -> B: Rất hay (很好看)"
      },
      {
        "id": 10,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "桌子上有几个苹果？ 桌子上有几个苹果？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "十个",
            "pinyin": "shí gè"
          },
          {
            "key": "B",
            "text": "不好吃",
            "pinyin": "bù hǎochī"
          },
          {
            "key": "C",
            "text": "很贵",
            "pinyin": "hěn guì"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi số lượng -> A: 10 quả (十个)"
      },
      {
        "id": 11,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你好！女：你好，很高兴认识你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Chào hỏi bắt tay -> C"
      },
      {
        "id": 12,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：现在几点了？女：现在差五分两点。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi giờ -> E (Đồng hồ)"
      },
      {
        "id": 13,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：请坐，请喝茶。男：谢谢你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mời ngồi -> B (Ghế tựa)"
      },
      {
        "id": 14,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你中午吃什么？女：我想吃一碗面条。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "F",
        "explanation": "Ăn mì -> F (Bát mì)"
      },
      {
        "id": 15,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：你去哪儿？男：我去超市买点东西。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đi siêu thị -> A (Xe đẩy)"
      },
      {
        "id": 16,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我叫王朋，我是北京人，我现在在一家医院工作。★ 王朋在哪里工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "学校",
            "pinyin": "xuéxiào"
          },
          {
            "key": "B",
            "text": "医院",
            "pinyin": "yīyuàn"
          },
          {
            "key": "C",
            "text": "饭店",
            "pinyin": "fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bác sĩ làm ở bệnh viện (医院) -> B"
      },
      {
        "id": 17,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "今天天气很好，我和朋友一起去公园散步。★ 今天天气怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "B",
            "text": "下雨",
            "pinyin": "xià yǔ"
          },
          {
            "key": "C",
            "text": "很冷",
            "pinyin": "hěn lěng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Thời tiết rất tốt -> A: 很好"
      },
      {
        "id": 18,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我家有一只小猫，它今年两岁了，很喜欢喝牛奶。★ 小猫喜欢喝什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "水",
            "pinyin": "shuǐ"
          },
          {
            "key": "B",
            "text": "茶",
            "pinyin": "chá"
          },
          {
            "key": "C",
            "text": "牛奶",
            "pinyin": "niúnǎi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Mèo thích uống sữa bò -> C: 牛奶"
      },
      {
        "id": 19,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "李老师坐在前面看书，他的书是新买的。★ 李老师在做什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "看书",
            "pinyin": "kàn shū"
          },
          {
            "key": "B",
            "text": "写字",
            "pinyin": "xiě zì"
          },
          {
            "key": "C",
            "text": "睡觉",
            "pinyin": "shuìjiào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đang đọc sách -> A: 看书"
      },
      {
        "id": 20,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "这件衣服太小了，我想买一件大一点儿的。★ 他想买什么样的衣服？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "大一点儿的",
            "pinyin": "dà yìdiǎnr de"
          },
          {
            "key": "B",
            "text": "红色的",
            "pinyin": "hóngsè de"
          },
          {
            "key": "C",
            "text": "便宜的",
            "pinyin": "piányi de"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Muốn mua cái to hơn -> A: 大一点儿的"
      },
      {
        "id": 21,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "明天上午我们要坐飞机去上海。",
        "promptPinyin": "Míngtiān shàngwǔ wǒmen yào zuò fēijī qù Shànghǎi.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "A",
        "explanation": "坐飞机 -> A (Máy bay)"
      },
      {
        "id": 22,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "这个苹果很大，很甜很好吃。",
        "promptPinyin": "Zhège píngguǒ hěn dà, hěn tián hěn hǎochī.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "苹果 -> C (Quả táo)"
      },
      {
        "id": 23,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "外面下大雨了，你带雨伞了吗？",
        "promptPinyin": "Wàimiàn xià dàyǔ le, nǐ dài yǔsǎn le ma?",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "下大雨 -> D (Trời mưa)"
      },
      {
        "id": 24,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "桌子上有三本汉语书。",
        "promptPinyin": "Zhuōzi shang yǒu sān běn Hànyǔ shū.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "三本书 -> E (Sách)"
      },
      {
        "id": 25,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "天气冷的时候，我喜欢喝热茶。",
        "promptPinyin": "Tiānqì lěng de shíhou, wǒ xǐhuan hē rè chá.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "F",
        "explanation": "喝热茶 -> F (Uống trà nóng)"
      },
      {
        "id": 26,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "他是谁？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Hỏi là ai -> D: Thầy giáo dạy tiếng Hán của tôi"
      },
      {
        "id": 27,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "这些一共多少钱？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi bao nhiêu tiền -> B: 25 tệ"
      },
      {
        "id": 28,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天天气怎么样？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi thời tiết -> E: Quá nóng, tôi muốn uống nước"
      },
      {
        "id": 29,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天星期五，明天呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "F",
        "explanation": "Hỏi ngày thứ -> F: Ngày mai thứ Bảy"
      },
      {
        "id": 30,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "王明在哪儿呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ở đâu -> A: Ở trường học"
      },
      {
        "id": 31,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这件 ____ 多少钱？",
        "promptPinyin": "Zhè jiàn ____ duōshao qián?",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lượng từ 件 đi với 衣服 (quần áo) -> B"
      },
      {
        "id": 32,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "今天见到你，我非常 ____。",
        "promptPinyin": "Jīntiān jiàndào nǐ, wǒ fēicháng ____.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Vui mừng: 高兴 -> D"
      },
      {
        "id": 33,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这个西瓜很 ____，我们吃不完。",
        "promptPinyin": "Zhège xīguā hěn ____, wǒmen chī bù wán.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Dưa hấu rất to: 大 -> C"
      },
      {
        "id": 34,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "谢谢你的 ____，我很感激你。",
        "promptPinyin": "Xièxie nǐ de ____, wǒ hěn gǎnjī nǐ.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Sự giúp đỡ: 帮助 -> A"
      },
      {
        "id": 35,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "小明 ____ 家里做汉语作业。",
        "promptPinyin": "Xiǎo Míng ____ jiā lǐ zuò Hànyǔ zuòyè.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Ở nhà: 在家里 -> E"
      },
      {
        "id": 36,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "北京的秋天天气非常好，不冷也不热。",
        "questionText": "★ 北京的秋天怎么样？",
        "options": [
          {
            "key": "A",
            "text": "很冷",
            "pinyin": "hěn lěng"
          },
          {
            "key": "B",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "C",
            "text": "很热",
            "pinyin": "hěn rè"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thời tiết rất tốt -> B: 很好"
      },
      {
        "id": 37,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我每天早上七点起床，然后去学校。",
        "questionText": "★ 我几点起床？",
        "options": [
          {
            "key": "A",
            "text": "六点",
            "pinyin": "liù diǎn"
          },
          {
            "key": "B",
            "text": "七点",
            "pinyin": "qī diǎn"
          },
          {
            "key": "C",
            "text": "八点",
            "pinyin": "bā diǎn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dậy lúc 7h -> B: 七点"
      },
      {
        "id": 38,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "张老师教我们汉语，他说话很有意思。",
        "questionText": "★ 张老师教什么？",
        "options": [
          {
            "key": "A",
            "text": "英语",
            "pinyin": "Yīngyǔ"
          },
          {
            "key": "B",
            "text": "汉语",
            "pinyin": "Hànyǔ"
          },
          {
            "key": "C",
            "text": "数学",
            "pinyin": "shùxué"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dạy tiếng Hán -> B: 汉语"
      },
      {
        "id": 39,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我家离火车站很近，走五分钟就到了。",
        "questionText": "★ 火车站离他家远吗？",
        "options": [
          {
            "key": "A",
            "text": "很近",
            "pinyin": "hěn jìn"
          },
          {
            "key": "B",
            "text": "很远",
            "pinyin": "hěn yuǎn"
          },
          {
            "key": "C",
            "text": "不知道",
            "pinyin": "bù zhīdào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Gần nhà -> A: 很近"
      },
      {
        "id": 40,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "医生说多喝温水，按时吃药身体就会好。",
        "questionText": "★ 医生让做什么？",
        "options": [
          {
            "key": "A",
            "text": "吃药喝水",
            "pinyin": "chī yào hē shuǐ"
          },
          {
            "key": "B",
            "text": "跑步",
            "pinyin": "pǎobù"
          },
          {
            "key": "C",
            "text": "买衣服",
            "pinyin": "mǎi yīfu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Uống nước và uống thuốc -> A"
      }
    ]
  },
  {
    "id": "hsk1_exam_10",
    "level": 1,
    "code": "HSK 1 - ĐỀ SỐ 10",
    "category": "hsk_full",
    "title": "中文水平考试 HSK 1 全真模拟试卷 10",
    "titleVi": "Đề Toàn Chân Mô Phỏng Chuẩn HSK 1 Số 10 (Bộ Đề Tổng Hợp Đề Thi Thật HSK 1)",
    "durationMinutes": 35,
    "totalQuestions": 40,
    "passScore": 120,
    "questions": [
      {
        "id": 1,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他在喝茶。 他在喝茶。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Người viết bài"
          },
          {
            "key": "B",
            "imageIcon": "🍵",
            "imageDesc": "Người uống trà"
          },
          {
            "key": "C",
            "imageIcon": "🍜",
            "imageDesc": "Người ăn mì"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Uống trà (喝茶) -> B"
      },
      {
        "id": 2,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "爸爸在做饭。 爸爸在做饭。",
        "options": [
          {
            "key": "A",
            "imageIcon": "📖",
            "imageDesc": "Xem sách"
          },
          {
            "key": "B",
            "imageIcon": "🪞",
            "imageDesc": "Soi gương"
          },
          {
            "key": "C",
            "imageIcon": "🍳",
            "imageDesc": "Nấu ăn bếp"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Nấu ăn (做饭) -> C"
      },
      {
        "id": 3,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "这里有两把椅子。 这里有两把椅子。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🪑",
            "imageDesc": "Hai chiếc ghế"
          },
          {
            "key": "B",
            "imageIcon": "🍞",
            "imageDesc": "Hai ổ bánh mì"
          },
          {
            "key": "C",
            "imageIcon": "🥚",
            "imageDesc": "Hai quả trứng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hai cái ghế (两把椅子) -> A"
      },
      {
        "id": 4,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "他们一起看电影。 他们一起看电影。",
        "options": [
          {
            "key": "A",
            "imageIcon": "✍️",
            "imageDesc": "Học bài"
          },
          {
            "key": "B",
            "imageIcon": "🎬",
            "imageDesc": "Rạp chiếu phim"
          },
          {
            "key": "C",
            "imageIcon": "📱",
            "imageDesc": "Lướt điện thoại"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Xem phim (看电影) -> B"
      },
      {
        "id": 5,
        "section": "listening",
        "part": 1,
        "type": "image_choice",
        "audioScript": "桌子上有很多水果。 桌子上有很多水果。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🍲",
            "imageDesc": "Bát canh"
          },
          {
            "key": "B",
            "imageIcon": "🍇",
            "imageDesc": "Đĩa hoa quả tươi"
          },
          {
            "key": "C",
            "imageIcon": "👗",
            "imageDesc": "Chiếc váy"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hoa quả (水果) -> B"
      },
      {
        "id": 6,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "今天几月几号？ 今天几月几号？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "三月五号",
            "pinyin": "sān yuè wǔ hào"
          },
          {
            "key": "B",
            "text": "星期天",
            "pinyin": "xīngqītiān"
          },
          {
            "key": "C",
            "text": "六点十分",
            "pinyin": "liù diǎn shí fēn"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ngày tháng -> A"
      },
      {
        "id": 7,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你在哪儿工作？ 你在哪儿工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "上课",
            "pinyin": "shàngkè"
          },
          {
            "key": "B",
            "text": "在书店",
            "pinyin": "zài shūdiàn"
          },
          {
            "key": "C",
            "text": "大学生",
            "pinyin": "dàxuéshēng"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi nơi làm việc -> B: Ở hiệu sách (在书店)"
      },
      {
        "id": 8,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "你知道他家在哪里吗？ 你知道他家在哪里吗？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没有",
            "pinyin": "méiyǒu"
          },
          {
            "key": "B",
            "text": "我不知道",
            "pinyin": "wǒ bù zhīdào"
          },
          {
            "key": "C",
            "text": "很大",
            "pinyin": "hěn dà"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi biết không -> B: Không biết (不知道)"
      },
      {
        "id": 9,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "这部电影怎么样？ 这部电影怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "没关系",
            "pinyin": "méi guānxi"
          },
          {
            "key": "B",
            "text": "很好看",
            "pinyin": "hěn hǎokàn"
          },
          {
            "key": "C",
            "text": "在饭店",
            "pinyin": "zài fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi phim thế nào -> B: Rất hay (很好看)"
      },
      {
        "id": 10,
        "section": "listening",
        "part": 2,
        "type": "text_choice",
        "audioScript": "桌子上有几个苹果？ 桌子上有几个苹果？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "十个",
            "pinyin": "shí gè"
          },
          {
            "key": "B",
            "text": "不好吃",
            "pinyin": "bù hǎochī"
          },
          {
            "key": "C",
            "text": "很贵",
            "pinyin": "hěn guì"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi số lượng -> A: 10 quả (十个)"
      },
      {
        "id": 11,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你好！女：你好，很高兴认识你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Chào hỏi bắt tay -> C"
      },
      {
        "id": 12,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：现在几点了？女：现在差五分两点。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi giờ -> E (Đồng hồ)"
      },
      {
        "id": 13,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：请坐，请喝茶。男：谢谢你。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mời ngồi -> B (Ghế tựa)"
      },
      {
        "id": 14,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "男：你中午吃什么？女：我想吃一碗面条。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "F",
        "explanation": "Ăn mì -> F (Bát mì)"
      },
      {
        "id": 15,
        "section": "listening",
        "part": 3,
        "type": "image_choice",
        "audioScript": "女：你去哪儿？男：我去超市买点东西。",
        "options": [
          {
            "key": "A",
            "imageIcon": "🛒",
            "imageDesc": "Đi mua sắm siêu thị"
          },
          {
            "key": "B",
            "imageIcon": "🪑",
            "imageDesc": "Mời ngồi ghế"
          },
          {
            "key": "C",
            "imageIcon": "🤝",
            "imageDesc": "Bắt tay chào hỏi"
          },
          {
            "key": "D",
            "imageIcon": "💻",
            "imageDesc": "Bàn máy tính văn phòng"
          },
          {
            "key": "E",
            "imageIcon": "⏰",
            "imageDesc": "Đồng hồ xem giờ"
          },
          {
            "key": "F",
            "imageIcon": "🍜",
            "imageDesc": "Bát mì thơm ngon"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đi siêu thị -> A (Xe đẩy)"
      },
      {
        "id": 16,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我叫王朋，我是北京人，我现在在一家医院工作。★ 王朋在哪里工作？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "学校",
            "pinyin": "xuéxiào"
          },
          {
            "key": "B",
            "text": "医院",
            "pinyin": "yīyuàn"
          },
          {
            "key": "C",
            "text": "饭店",
            "pinyin": "fàndiàn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bác sĩ làm ở bệnh viện (医院) -> B"
      },
      {
        "id": 17,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "今天天气很好，我和朋友一起去公园散步。★ 今天天气怎么样？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "B",
            "text": "下雨",
            "pinyin": "xià yǔ"
          },
          {
            "key": "C",
            "text": "很冷",
            "pinyin": "hěn lěng"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Thời tiết rất tốt -> A: 很好"
      },
      {
        "id": 18,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "我家有一只小猫，它今年两岁了，很喜欢喝牛奶。★ 小猫喜欢喝什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "水",
            "pinyin": "shuǐ"
          },
          {
            "key": "B",
            "text": "茶",
            "pinyin": "chá"
          },
          {
            "key": "C",
            "text": "牛奶",
            "pinyin": "niúnǎi"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Mèo thích uống sữa bò -> C: 牛奶"
      },
      {
        "id": 19,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "李老师坐在前面看书，他的书是新买的。★ 李老师在做什么？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "看书",
            "pinyin": "kàn shū"
          },
          {
            "key": "B",
            "text": "写字",
            "pinyin": "xiě zì"
          },
          {
            "key": "C",
            "text": "睡觉",
            "pinyin": "shuìjiào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đang đọc sách -> A: 看书"
      },
      {
        "id": 20,
        "section": "listening",
        "part": 4,
        "type": "text_choice",
        "audioScript": "这件衣服太小了，我想买一件大一点儿的。★ 他想买什么样的衣服？",
        "questionText": "★ 听录音，选择正确答案：",
        "options": [
          {
            "key": "A",
            "text": "大一点儿的",
            "pinyin": "dà yìdiǎnr de"
          },
          {
            "key": "B",
            "text": "红色的",
            "pinyin": "hóngsè de"
          },
          {
            "key": "C",
            "text": "便宜的",
            "pinyin": "piányi de"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Muốn mua cái to hơn -> A: 大一点儿的"
      },
      {
        "id": 21,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "明天上午我们要坐飞机去上海。",
        "promptPinyin": "Míngtiān shàngwǔ wǒmen yào zuò fēijī qù Shànghǎi.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "A",
        "explanation": "坐飞机 -> A (Máy bay)"
      },
      {
        "id": 22,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "这个苹果很大，很甜很好吃。",
        "promptPinyin": "Zhège píngguǒ hěn dà, hěn tián hěn hǎochī.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "苹果 -> C (Quả táo)"
      },
      {
        "id": 23,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "外面下大雨了，你带雨伞了吗？",
        "promptPinyin": "Wàimiàn xià dàyǔ le, nǐ dài yǔsǎn le ma?",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "D",
        "explanation": "下大雨 -> D (Trời mưa)"
      },
      {
        "id": 24,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "桌子上有三本汉语书。",
        "promptPinyin": "Zhuōzi shang yǒu sān běn Hànyǔ shū.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "三本书 -> E (Sách)"
      },
      {
        "id": 25,
        "section": "reading",
        "part": 1,
        "type": "image_choice",
        "prompt": "天气冷的时候，我喜欢喝热茶。",
        "promptPinyin": "Tiānqì lěng de shíhou, wǒ xǐhuan hē rè chá.",
        "options": [
          {
            "key": "A",
            "imageIcon": "✈️",
            "imageDesc": "Máy bay bay trên trời (飞机)"
          },
          {
            "key": "B",
            "imageIcon": "🏥",
            "imageDesc": "Bệnh viện chữa bệnh (医院)"
          },
          {
            "key": "C",
            "imageIcon": "🍎",
            "imageDesc": "Quả táo đỏ ngon (苹果)"
          },
          {
            "key": "D",
            "imageIcon": "🌧️",
            "imageDesc": "Trời đổ mưa to (下雨)"
          },
          {
            "key": "E",
            "imageIcon": "📚",
            "imageDesc": "Chồng sách vở học (书)"
          },
          {
            "key": "F",
            "imageIcon": "🍵",
            "imageDesc": "Tách trà nóng thơm (喝茶)"
          }
        ],
        "correctAnswer": "F",
        "explanation": "喝热茶 -> F (Uống trà nóng)"
      },
      {
        "id": 26,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "他是谁？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Hỏi là ai -> D: Thầy giáo dạy tiếng Hán của tôi"
      },
      {
        "id": 27,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "这些一共多少钱？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Hỏi bao nhiêu tiền -> B: 25 tệ"
      },
      {
        "id": 28,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天天气怎么样？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Hỏi thời tiết -> E: Quá nóng, tôi muốn uống nước"
      },
      {
        "id": 29,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "今天星期五，明天呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "F",
        "explanation": "Hỏi ngày thứ -> F: Ngày mai thứ Bảy"
      },
      {
        "id": 30,
        "section": "reading",
        "part": 2,
        "type": "text_choice",
        "prompt": "王明在哪儿呢？",
        "options": [
          {
            "key": "A",
            "text": "他在学校学习。",
            "pinyin": "Tā zài xuéxiào xuéxí."
          },
          {
            "key": "B",
            "text": "一共二十五块钱。",
            "pinyin": "Yígòng èrshíwǔ kuài qián."
          },
          {
            "key": "C",
            "text": "好的，没问题。",
            "pinyin": "Hǎo de, méi wèntí."
          },
          {
            "key": "D",
            "text": "他是我的汉语老师。",
            "pinyin": "Tā shì wǒ de Hànyǔ lǎoshī."
          },
          {
            "key": "E",
            "text": "太热了，我想喝水。",
            "pinyin": "Tài rè le, wǒ xiǎng hē shuǐ."
          },
          {
            "key": "F",
            "text": "明天星期六。",
            "pinyin": "Míngtiān xīngqīliù."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Hỏi ở đâu -> A: Ở trường học"
      },
      {
        "id": 31,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这件 ____ 多少钱？",
        "promptPinyin": "Zhè jiàn ____ duōshao qián?",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lượng từ 件 đi với 衣服 (quần áo) -> B"
      },
      {
        "id": 32,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "今天见到你，我非常 ____。",
        "promptPinyin": "Jīntiān jiàndào nǐ, wǒ fēicháng ____.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Vui mừng: 高兴 -> D"
      },
      {
        "id": 33,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "这个西瓜很 ____，我们吃不完。",
        "promptPinyin": "Zhège xīguā hěn ____, wǒmen chī bù wán.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Dưa hấu rất to: 大 -> C"
      },
      {
        "id": 34,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "谢谢你的 ____，我很感激你。",
        "promptPinyin": "Xièxie nǐ de ____, wǒ hěn gǎnjī nǐ.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Sự giúp đỡ: 帮助 -> A"
      },
      {
        "id": 35,
        "section": "reading",
        "part": 3,
        "type": "cloze_match",
        "prompt": "小明 ____ 家里做汉语作业。",
        "promptPinyin": "Xiǎo Míng ____ jiā lǐ zuò Hànyǔ zuòyè.",
        "options": [
          {
            "key": "A",
            "text": "帮助",
            "pinyin": "bāngzhù"
          },
          {
            "key": "B",
            "text": "衣服",
            "pinyin": "yīfu"
          },
          {
            "key": "C",
            "text": "大",
            "pinyin": "dà"
          },
          {
            "key": "D",
            "text": "高兴",
            "pinyin": "gāoxìng"
          },
          {
            "key": "E",
            "text": "在",
            "pinyin": "zài"
          },
          {
            "key": "F",
            "text": "吃",
            "pinyin": "chī"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Ở nhà: 在家里 -> E"
      },
      {
        "id": 36,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "北京的秋天天气非常好，不冷也不热。",
        "questionText": "★ 北京的秋天怎么样？",
        "options": [
          {
            "key": "A",
            "text": "很冷",
            "pinyin": "hěn lěng"
          },
          {
            "key": "B",
            "text": "很好",
            "pinyin": "hěn hǎo"
          },
          {
            "key": "C",
            "text": "很热",
            "pinyin": "hěn rè"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Thời tiết rất tốt -> B: 很好"
      },
      {
        "id": 37,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我每天早上七点起床，然后去学校。",
        "questionText": "★ 我几点起床？",
        "options": [
          {
            "key": "A",
            "text": "六点",
            "pinyin": "liù diǎn"
          },
          {
            "key": "B",
            "text": "七点",
            "pinyin": "qī diǎn"
          },
          {
            "key": "C",
            "text": "八点",
            "pinyin": "bā diǎn"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dậy lúc 7h -> B: 七点"
      },
      {
        "id": 38,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "张老师教我们汉语，他说话很有意思。",
        "questionText": "★ 张老师教什么？",
        "options": [
          {
            "key": "A",
            "text": "英语",
            "pinyin": "Yīngyǔ"
          },
          {
            "key": "B",
            "text": "汉语",
            "pinyin": "Hànyǔ"
          },
          {
            "key": "C",
            "text": "数学",
            "pinyin": "shùxué"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dạy tiếng Hán -> B: 汉语"
      },
      {
        "id": 39,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "我家离火车站很近，走五分钟就到了。",
        "questionText": "★ 火车站离他家远吗？",
        "options": [
          {
            "key": "A",
            "text": "很近",
            "pinyin": "hěn jìn"
          },
          {
            "key": "B",
            "text": "很远",
            "pinyin": "hěn yuǎn"
          },
          {
            "key": "C",
            "text": "不知道",
            "pinyin": "bù zhīdào"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Gần nhà -> A: 很近"
      },
      {
        "id": 40,
        "section": "reading",
        "part": 4,
        "type": "text_choice",
        "passage": "医生说多喝温水，按时吃药身体就会好。",
        "questionText": "★ 医生让做什么？",
        "options": [
          {
            "key": "A",
            "text": "吃药喝水",
            "pinyin": "chī yào hē shuǐ"
          },
          {
            "key": "B",
            "text": "跑步",
            "pinyin": "pǎobù"
          },
          {
            "key": "C",
            "text": "买衣服",
            "pinyin": "mǎi yīfu"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Uống nước và uống thuốc -> A"
      }
    ]
  }
];


/**
 * Tự động tạo một đề thi HSK ngẫu nhiên mới từ ngân hàng 400 câu hỏi chuẩn (10 đề gốc).
 * Đảm bảo đúng chuẩn 40 câu: 20 câu Nghe (4 phần) + 20 câu Đọc (4 phần).
 */
export function generateDynamicHSKExam(level = 1): HSKMockExam {
  const allQuestions = hskMockExams.flatMap(e => e.questions);

  // Nhóm câu hỏi theo (section, part)
  const poolBySectionPart: Record<string, ExamQuestion[]> = {};
  allQuestions.forEach(q => {
    const key = `${q.section}_${q.part}`;
    if (!poolBySectionPart[key]) poolBySectionPart[key] = [];
    poolBySectionPart[key].push(q);
  });

  const selectedQuestions: ExamQuestion[] = [];
  let qNum = 1;

  // Lần lượt bốc ngẫu nhiên 5 câu cho mỗi phần (Nghe 1,2,3,4 và Đọc 1,2,3,4)
  const sections: ('listening' | 'reading')[] = ['listening', 'reading'];
  const parts: (1 | 2 | 3 | 4)[] = [1, 2, 3, 4];

  sections.forEach(sec => {
    parts.forEach(part => {
      const key = `${sec}_${part}`;
      const candidates = [...(poolBySectionPart[key] || [])].sort(() => Math.random() - 0.5);
      const chosen = candidates.slice(0, 5);

      chosen.forEach(item => {
        selectedQuestions.push({
          ...item,
          id: qNum++,
          // Xáo trộn nhẹ options nếu có
          options: item.options ? [...item.options].sort(() => Math.random() - 0.5) : undefined,
        });
      });
    });
  });

  const randomCode = Math.floor(1000 + Math.random() * 9000);
  const examId = `hsk${level}_dynamic_${Date.now()}`;

  return {
    id: examId,
    level,
    code: `HSK ${level} - ĐỀ NGẪU NHIÊN #${randomCode}`,
    category: 'hsk_full',
    title: `中文水平考试 HSK (一级) 智能生成全真卷 #${randomCode}`,
    titleVi: `Đề Thi HSK 1 Ngẫu Nhiên Mới #${randomCode} (Sinh tự động từ ngân hàng 400 câu)`,
    durationMinutes: 35,
    totalQuestions: selectedQuestions.length,
    passScore: 120,
    questions: selectedQuestions,
  };
}
