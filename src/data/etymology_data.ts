// Cây gia phả chữ Hán (Học 1 nhớ 10) & Cặp chữ sinh đôi lệch 1 nét
export interface EtymologyFamily {
  id: string;
  rootChar: string;          // Gốc âm (thanh phù)
  rootPinyin: string;
  rootMeaning: string;
  story: string;             // Câu chuyện cốt lõi
  familyMembers: {
    char: string;
    pinyin: string;
    meaning: string;
    radical: string;         // Bộ chỉ nghĩa (nghĩa phù)
    radicalMeaning: string;
    composition: string;     // ví dụ: 氵 (nước) + 青 (xanh) = 清 (trong vắt)
    exampleWord: string;
    examplePinyin: string;
    exampleMeaning: string;
  }[];
}

export interface TwinCharPair {
  id: string;
  title: string;
  char1: string;
  pinyin1: string;
  meaning1: string;
  char2: string;
  pinyin2: string;
  meaning2: string;
  differencePoint: string;   // Điểm khác biệt đúng 1 nét
  mnemonic: string;          // Mẹo phân biệt không bao giờ quên
  exampleSentences: {
    zh1: string;
    vi1: string;
    zh2: string;
    vi2: string;
  };
}

export const etymologyFamilies: EtymologyFamily[] = [
  {
    id: 'fam_bao',
    rootChar: '包',
    rootPinyin: 'bāo',
    rootMeaning: 'Bao bọc, túi, gói bánh bao',
    story: 'Họ chữ "Bao (包)": Gốc âm là bāo. Khi ghép với các bộ chỉ nghĩa khác nhau, ta lập tức suy ra nghĩa mới mà âm đọc vẫn xoay quanh bao / bǎo / bào / pǎo / pào!',
    familyMembers: [
      {
        char: '饱',
        pinyin: 'bǎo',
        meaning: 'No bụng, ăn no',
        radical: '饣/食',
        radicalMeaning: 'bộ Thực (ăn uống)',
        composition: '饣(ăn) + 包 = bụng được bao bọc đầy thức ăn → NO',
        exampleWord: '吃饱',
        examplePinyin: 'chībǎo',
        exampleMeaning: 'ăn no',
      },
      {
        char: '抱',
        pinyin: 'bào',
        meaning: 'Ôm ấp, bế',
        radical: '扌/手',
        radicalMeaning: 'bộ Thủ (tay)',
        composition: '扌(tay) + 包 = dùng hai tay bao bọc lấy ai đó → ÔM',
        exampleWord: '拥抱',
        examplePinyin: 'yōngbào',
        exampleMeaning: 'ôm chặt',
      },
      {
        char: '跑',
        pinyin: 'pǎo',
        meaning: 'Chạy bộ, chạy trốn',
        radical: '⻊/足',
        radicalMeaning: 'bộ Túc (chân)',
        composition: '⻊(chân) + 包 = đôi chân guồng nhanh như cuộn tròn lại → CHẠY',
        exampleWord: '跑步',
        examplePinyin: 'pǎobù',
        exampleMeaning: 'chạy bộ',
      },
      {
        char: '泡',
        pinyin: 'pào',
        meaning: 'Bong bóng, ngâm nước, pha trà',
        radical: '氵/水',
        radicalMeaning: 'bộ Thủy (nước)',
        composition: '氵(nước) + 包 = bọc nước phồng lên thành bọt nước → BONG BÓNG, PHA TRÀ',
        exampleWord: '泡茶',
        examplePinyin: 'pào chá',
        exampleMeaning: 'pha trà, hãm trà',
      },
      {
        char: '雹',
        pinyin: 'báo',
        meaning: 'Mưa đá',
        radical: '雨',
        radicalMeaning: 'bộ Vũ (mưa)',
        composition: '雨(mưa) + 包 = nước mưa đông lại thành từng bọc đá rơi xuống → MƯA ĐÁ',
        exampleWord: '冰雹',
        examplePinyin: 'bīngbáo',
        exampleMeaning: 'mưa đá',
      },
    ],
  },
  {
    id: 'fam_qing',
    rootChar: '青',
    rootPinyin: 'qīng',
    rootMeaning: 'Màu xanh lục/xanh lam, thanh xuân',
    story: 'Họ chữ "Thanh (青)": Gốc âm qīng/qíng/jīng. Cứ nhìn thấy chữ có thành phần 青 thì nghĩa sẽ liên quan đến sự trong sáng, tươi đẹp hoặc tính chất thanh cao!',
    familyMembers: [
      {
        char: '清',
        pinyin: 'qīng',
        meaning: 'Trong vắt, trong sạch, thanh khiết',
        radical: '氵',
        radicalMeaning: 'bộ Thủy (nước)',
        composition: '氵(nước) + 青 = dòng nước trong xanh vắt không một hạt bụi → THANH KHIẾT',
        exampleWord: '清楚',
        examplePinyin: 'qīngchu',
        exampleMeaning: 'rõ ràng, rành mạch',
      },
      {
        char: '晴',
        pinyin: 'qíng',
        meaning: 'Trời nắng ráo, quang đãng',
        radical: '日',
        radicalMeaning: 'bộ Nhật (mặt trời)',
        composition: '日(mặt trời) + 青 = có ánh mặt trời chiếu rọi bầu trời xanh ngắt → NẮNG ĐẸP',
        exampleWord: '晴天',
        examplePinyin: 'qíngtiān',
        exampleMeaning: 'ngày nắng đẹp',
      },
      {
        char: '请',
        pinyin: 'qǐng',
        meaning: 'Mời, xin phép, làm ơn',
        radical: '讠/言',
        radicalMeaning: 'bộ Ngôn (lời nói)',
        composition: '讠(lời nói) + 青 = dùng lời nói thanh nhã, lịch thiệp để mời người khác → MỜI',
        exampleWord: '请坐',
        examplePinyin: 'qǐng zuò',
        exampleMeaning: 'mời ngồi',
      },
      {
        char: '情',
        pinyin: 'qíng',
        meaning: 'Tình cảm, tâm trạng, cảm xúc',
        radical: '忄/心',
        radicalMeaning: 'bộ Tâm (trái tim)',
        composition: '忄(trái tim) + 青 = cảm xúc trong veo nảy sinh từ tận đáy lòng → TÌNH CẢM',
        exampleWord: '心情',
        examplePinyin: 'xīnqíng',
        exampleMeaning: 'tâm trạng',
      },
      {
        char: '睛',
        pinyin: 'jīng',
        meaning: 'Tròng mắt, con ngươi',
        radical: '目',
        radicalMeaning: 'bộ Mục (mắt)',
        composition: '目(mắt) + 青 = phần con ngươi tinh anh trong đôi mắt → MẮT',
        exampleWord: '眼睛',
        examplePinyin: 'yǎnjing',
        exampleMeaning: 'đôi mắt',
      },
    ],
  },
  {
    id: 'fam_ye',
    rootChar: '也',
    rootPinyin: 'yě',
    rootMeaning: 'Cũng (phó từ)',
    story: 'Họ chữ "Dã (也)": Gốc âm yě/tā/dì. Nhìn bề ngoài như chiếc bình rót nước thời cổ, khi thêm bộ thủ sẽ tạo nên các đại từ và từ ngữ cốt lõi nhất của HSK 1!',
    familyMembers: [
      {
        char: '他',
        pinyin: 'tā',
        meaning: 'Anh ấy, ông ấy, cậu ấy',
        radical: '亻',
        radicalMeaning: 'bộ Nhân đứng (con người)',
        composition: '亻(người) + 也 = người đàn ông khác ngoài ta → ANH ẤY',
        exampleWord: '他们',
        examplePinyin: 'tāmen',
        exampleMeaning: 'bọn họ',
      },
      {
        char: '她',
        pinyin: 'tā',
        meaning: 'Cô ấy, bà ấy, chị ấy',
        radical: '女',
        radicalMeaning: 'bộ Nữ (phụ nữ)',
        composition: '女(nữ) + 也 = người phụ nữ khác ngoài ta → CÔ ẤY',
        exampleWord: '她们',
        examplePinyin: 'tāmen',
        exampleMeaning: 'các cô ấy',
      },
      {
        char: '地',
        pinyin: 'dì / de',
        meaning: 'Mặt đất, đất đai / Trợ từ trạng thái',
        radical: '土',
        radicalMeaning: 'bộ Thổ (đất đai)',
        composition: '土(đất) + 也 = lớp đất bề mặt rộng lớn bao la → ĐẤT ĐAI',
        exampleWord: '地方',
        examplePinyin: 'dìfang',
        exampleMeaning: 'địa điểm, nơi chốn',
      },
      {
        char: '池',
        pinyin: 'chí',
        meaning: 'Ao, đầm, hồ chứa nước',
        radical: '氵',
        radicalMeaning: 'bộ Thủy (nước)',
        composition: '氵(nước) + 也 = nơi chứa nước đọng lại thành vùng → AO HỒ',
        exampleWord: '游泳池',
        examplePinyin: 'yóuyǒngchí',
        exampleMeaning: 'hồ bơi',
      },
    ],
  },
  {
    id: 'fam_ba',
    rootChar: '巴',
    rootPinyin: 'bā',
    rootMeaning: 'Bám dính, khao khát (như hình con trăn bám cây)',
    story: 'Họ chữ "Ba (巴)": Gốc âm bā/bà/bǎ. Rất phổ biến trong khẩu ngữ tiếng Trung hàng ngày!',
    familyMembers: [
      {
        char: '爸',
        pinyin: 'bà',
        meaning: 'Bố, cha',
        radical: '父',
        radicalMeaning: 'bộ Phụ (người cha)',
        composition: '父(cha) + 巴(gốc âm bà) = người cha trụ cột gia đình → BỐ',
        exampleWord: '爸爸',
        examplePinyin: 'bàba',
        exampleMeaning: 'bố',
      },
      {
        char: '吧',
        pinyin: 'ba',
        meaning: 'Nhé, nhỉ (trợ từ ngữ khí đề nghị)',
        radical: '口',
        radicalMeaning: 'bộ Khẩu (miệng)',
        composition: '口(miệng phát âm) + 巴 = lời thốt ra nơi đầu môi đề nghị → NHÉ, NHỈ',
        exampleWord: '走吧',
        examplePinyin: 'zǒu ba',
        exampleMeaning: 'đi thôi nào',
      },
      {
        char: '把',
        pinyin: 'bǎ',
        meaning: 'Cầm nắm, lượng từ chiếc/cái / Câu chữ 把',
        radical: '扌',
        radicalMeaning: 'bộ Thủ (bàn tay)',
        composition: '扌(tay) + 巴 = bàn tay nắm chặt lấy đồ vật → CẦM NẮM',
        exampleWord: '一把伞',
        examplePinyin: 'yī bǎ sǎn',
        exampleMeaning: 'một chiếc ô',
      },
    ],
  },
];

export const twinCharPairs: TwinCharPair[] = [
  {
    id: 'twin_mai_mai',
    title: 'Cặp bẫy số 1: 买 (Mua) vs 卖 (Bán)',
    char1: '买',
    pinyin1: 'mǎi',
    meaning1: 'Mua (thanh 3)',
    char2: '卖',
    pinyin2: 'mài',
    meaning2: 'Bán (thanh 4)',
    differencePoint: 'Chữ 卖 (Bán) có thêm chữ Thập (十) ở trên đầu so với chữ 买 (Mua)!',
    mnemonic: '💡 Mẹo nhớ: Người BÁN (卖) là người có thêm 10 (十) món hàng trên đầu để bán cho người MUA (买). Có hàng bán thì mới có dấu Thập 十!',
    exampleSentences: {
      zh1: '我想买一个新手机。',
      vi1: 'Tôi muốn mua một chiếc điện thoại mới.',
      zh2: '这家店卖很好吃的菜。',
      vi2: 'Quán này bán món ăn rất ngon.',
    },
  },
  {
    id: 'twin_ji_yi_si',
    title: 'Cặp sinh ba: 己 (Kỷ) vs 已 (Dĩ) vs 巳 (Tị)',
    char1: '己',
    pinyin1: 'jǐ',
    meaning1: 'Bản thân, tự mình (trong 自己)',
    char2: '已',
    pinyin2: 'yǐ',
    meaning2: 'Đã, rồi (trong 已经)',
    differencePoint: 'Độ khép của nét gấp: 己 (hở toang) -> 已 (khép một nửa) -> 巳 (khép kín mít)!',
    mnemonic: '💡 Câu khẩu quyết dân gian: "Tự KỶ (己) mở toang cửa lòng; DĨ (已) rồi khép nửa; TỊ (巳) thời khép kín bưng".',
    exampleSentences: {
      zh1: '我要照顾好自己。',
      vi1: 'Tôi cần chăm sóc tốt cho chính mình.',
      zh2: '我已经吃完饭了。',
      vi2: 'Tôi đã ăn cơm xong rồi.',
    },
  },
  {
    id: 'twin_xiu_ti',
    title: 'Cặp sinh đôi: 休 (Nghỉ ngơi) vs 体 (Thân thể)',
    char1: '休',
    pinyin1: 'xiū',
    meaning1: 'Nghỉ ngơi (trong 休息)',
    char2: '体',
    pinyin2: 'tǐ',
    meaning2: 'Thân thể, cơ thể (trong 身体)',
    differencePoint: 'Chữ 休 bên phải là cây (木). Chữ 体 bên phải là gốc rễ (本 - có thêm một nét gạch ngang ở chân)!',
    mnemonic: '💡 Mẹo nhớ: Con người (亻) tựa lưng vào cây (木) đứng bóng râm tức là đang NGHỈ NGƠI (休). Con người giữ lấy cái gốc rễ (本) tức là THÂN THỂ (体).',
    exampleSentences: {
      zh1: '累了就休息一下吧。',
      vi1: 'Mệt rồi thì nghỉ ngơi một chút đi nhé.',
      zh2: '多运动对身体好。',
      vi2: 'Tập thể dục nhiều tốt cho cơ thể.',
    },
  },
  {
    id: 'twin_mo_wei',
    title: 'Cặp sinh đôi: 末 (Mạt/Cuối) vs 未 (Vị/Chưa)',
    char1: '末',
    pinyin1: 'mò',
    meaning1: 'Ngọn, cuối cùng (trong 周末 cuối tuần)',
    char2: '未',
    pinyin2: 'wèi',
    meaning2: 'Chưa, tương lai (trong 未来 tương lai)',
    differencePoint: 'Chữ 末: nét ngang trên DÀI hơn nét ngang dưới. Chữ 未: nét ngang trên NGẮN hơn nét ngang dưới!',
    mnemonic: '💡 Mẹo nhớ: 末 là ngọn cây (cành lá phía trên xòe DÀI hơn gốc). 未 là mầm cây đang mọc (chồi non phía trên còn NGẮN hơn gốc, chưa nở hết).',
    exampleSentences: {
      zh1: '这个周末你打算做什么？',
      vi1: 'Cuối tuần này bạn dự định làm gì?',
      zh2: '我们对未来充满希望。',
      vi2: 'Chúng tôi tràn đầy hy vọng vào tương lai.',
    },
  },
];
