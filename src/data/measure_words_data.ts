export interface MeasureWordEntry {
  id: string;
  char: string;
  pinyin: string;
  hanViet: string;
  usageRule: string;           // Quy tắc dùng
  collocations: {
    nounZh: string;
    nounPinyin: string;
    nounVi: string;
    phraseZh: string;
    phraseVi: string;
  }[];
  tip: string;
}

export const measureWordsData: MeasureWordEntry[] = [
  {
    id: 'mw_ge',
    char: '个',
    pinyin: 'gè',
    hanViet: 'Cá / Cái',
    usageRule: 'Lượng từ phổ biến nhất trong tiếng Trung. Dùng cho người, đồ vật chung, hoặc dùng thay thế khi không nhớ lượng từ chuyên biệt.',
    collocations: [
      { nounZh: '人', nounPinyin: 'rén', nounVi: 'người', phraseZh: '一个人', phraseVi: 'một người' },
      { nounZh: '朋友', nounPinyin: 'péngyou', nounVi: 'bạn bè', phraseZh: '三个朋友', phraseVi: 'ba người bạn' },
      { nounZh: '苹果', nounPinyin: 'píngguǒ', nounVi: 'quả táo', phraseZh: '五个苹果', phraseVi: 'năm quả táo' },
      { nounZh: '问题', nounPinyin: 'wèntí', nounVi: 'câu hỏi / vấn đề', phraseZh: '一个问题', phraseVi: 'một câu hỏi' },
    ],
    tip: 'Nếu gặp danh từ mà không biết dùng lượng từ gì, cứ dùng "个 (gè)" thì đối phương vẫn hiểu 95%!',
  },
  {
    id: 'mw_ben',
    char: '本',
    pinyin: 'běn',
    hanViet: 'Bản / Quyển / Cuốn',
    usageRule: 'Dùng riêng cho các vật phẩm đóng gáy thành tập, sách, vở, từ điển, tạp chí.',
    collocations: [
      { nounZh: '书', nounPinyin: 'shū', nounVi: 'sách', phraseZh: '一本书', phraseVi: 'một quyển sách' },
      { nounZh: '词典', nounPinyin: 'cídiǎn', nounVi: 'từ điển', phraseZh: '这本词典', phraseVi: 'cuốn từ điển này' },
      { nounZh: '杂志', nounPinyin: 'zázhì', nounVi: 'tạp chí', phraseZh: '两本杂志', phraseVi: 'hai cuốn tạp chí' },
    ],
    tip: 'Chữ 本 có hình dáng cái cây (木) với nét gạch ngang chỉ gốc rễ → sách vở là gốc rễ của tri thức!',
  },
  {
    id: 'mw_zhang',
    char: '张',
    pinyin: 'zhāng',
    hanViet: 'Trương / Tờ / Tấm / Chiếc',
    usageRule: 'Dùng cho các vật thể phẳng, mỏng hoặc có mặt phẳng rộng: tờ giấy, bức ảnh, tấm vé, cái bàn, chiếc giường.',
    collocations: [
      { nounZh: '纸', nounPinyin: 'zhǐ', nounVi: 'giấy', phraseZh: '一张纸', phraseVi: 'một tờ giấy' },
      { nounZh: '照片', nounPinyin: 'zhàopiàn', nounVi: 'bức ảnh', phraseZh: '一张照片', phraseVi: 'một bức ảnh' },
      { nounZh: '票', nounPinyin: 'piào', nounVi: 'tấm vé', phraseZh: '两张电影票', phraseVi: 'hai tấm vé xem phim' },
      { nounZh: '桌子', nounPinyin: 'zhuōzi', nounVi: 'cái bàn', phraseZh: '一张桌子', phraseVi: 'một chiếc bàn' },
    ],
    tip: 'Cứ cái gì "phẳng lì" hoặc có mặt phẳng để trải ra (như mặt bàn, vé tàu, bức tranh) là dùng 张!',
  },
  {
    id: 'mw_tiao',
    char: '条',
    pinyin: 'tiáo',
    hanViet: 'Điều / Sợi / Con',
    usageRule: 'Dùng cho các vật thể dài, mềm mại hoặc uốn lượn: con cá, con sông, con đường, chiếc quần, chiếc cà vạt.',
    collocations: [
      { nounZh: '鱼', nounPinyin: 'yú', nounVi: 'con cá', phraseZh: '一条鱼', phraseVi: 'một con cá' },
      { nounZh: '路', nounPinyin: 'lù', nounVi: 'con đường', phraseZh: '一条路', phraseVi: 'một con đường' },
      { nounZh: '裤子', nounPinyin: 'kùzi', nounVi: 'chiếc quần', phraseZh: '一条裤子', phraseVi: 'một chiếc quần dài' },
      { nounZh: '河', nounPinyin: 'hé', nounVi: 'dòng sông', phraseZh: '一条大河', phraseVi: 'một dòng sông lớn' },
    ],
    tip: 'Con cá bơi uốn lượn, con đường ngoằn ngoèo, chiếc quần có ống dài thon thả → tất cả đều dùng 条 (tiáo)!',
  },
  {
    id: 'mw_jian',
    char: '件',
    pinyin: 'jiàn',
    hanViet: 'Kiện / Chiếc / Vụ',
    usageRule: 'Dùng cho quần áo thân trên (áo sơ mi, áo khoác, áo len) hoặc các sự việc, món quà.',
    collocations: [
      { nounZh: '衣服', nounPinyin: 'yīfu', nounVi: 'quần áo', phraseZh: '一件衣服', phraseVi: 'một bộ/chiếc quần áo' },
      { nounZh: '事', nounPinyin: 'shì', nounVi: 'sự việc', phraseZh: '一件事', phraseVi: 'một sự việc' },
      { nounZh: '礼物', nounPinyin: 'lǐwù', nounVi: 'món quà', phraseZh: '一件礼物', phraseVi: 'một món quà' },
    ],
    tip: 'Áo mặc bên trên dùng 件 (jiàn), quần mặc bên dưới dùng 条 (tiáo)!',
  },
  {
    id: 'mw_liang',
    char: '辆',
    pinyin: 'liàng',
    hanViet: 'Lượng / Chiếc (xe cộ)',
    usageRule: 'Dùng chuyên biệt cho các phương tiện có bánh xe di chuyển trên cạn: ô tô, xe đạp, xe máy, xe buýt.',
    collocations: [
      { nounZh: '车', nounPinyin: 'chē', nounVi: 'xe cộ', phraseZh: '一辆车', phraseVi: 'một chiếc xe' },
      { nounZh: '自行车', nounPinyin: 'zìxíngchē', nounVi: 'xe đạp', phraseZh: '一辆自行车', phraseVi: 'một chiếc xe đạp' },
      { nounZh: '出租车', nounPinyin: 'chūzūchē', nounVi: 'xe taxi', phraseZh: '一辆出租车', phraseVi: 'một chiếc xe taxi' },
    ],
    tip: 'Bên trái chữ 辆 có sẵn bộ Xa (车 = chiếc xe)!',
  },
  {
    id: 'mw_zhi',
    char: '只',
    pinyin: 'zhī',
    hanViet: 'Chích / Con / Chiếc',
    usageRule: 'Dùng cho động vật nhỏ (chó, mèo, chim...) hoặc một chiếc lẻ trong một đôi (một con mắt, một cánh tay, một chiếc giày).',
    collocations: [
      { nounZh: '狗', nounPinyin: 'gǒu', nounVi: 'con chó', phraseZh: '一只狗', phraseVi: 'một con chó' },
      { nounZh: '猫', nounPinyin: 'māo', nounVi: 'con mèo', phraseZh: '一只猫', phraseVi: 'một con mèo' },
      { nounZh: '鸟', nounPinyin: 'niǎo', nounVi: 'con chim', phraseZh: '一只鸟', phraseVi: 'một con chim' },
      { nounZh: '手', nounPinyin: 'shǒu', nounVi: 'bàn tay', phraseZh: '一只手', phraseVi: 'một bàn tay' },
    ],
    tip: 'Động vật bốn chân hoặc chim chóc nhỏ thường đi với 只 (zhī)!',
  },
  {
    id: 'mw_shuang',
    char: '双',
    pinyin: 'shuāng',
    hanViet: 'Song / Đôi',
    usageRule: 'Dùng cho các đồ vật hoặc bộ phận đi thành từng cặp, đôi đối xứng.',
    collocations: [
      { nounZh: '筷子', nounPinyin: 'kuàizi', nounVi: 'đũa', phraseZh: '一双筷子', phraseVi: 'một đôi đũa' },
      { nounZh: '鞋', nounPinyin: 'xié', nounVi: 'giày', phraseZh: '一双鞋', phraseVi: 'một đôi giày' },
      { nounZh: '眼睛', nounPinyin: 'yǎnjing', nounVi: 'mắt', phraseZh: '一双眼睛', phraseVi: 'một đôi mắt' },
    ],
    tip: 'Chữ 双 gồm 2 chữ Hựu (又 + 又 = hai bàn tay cùng cầm) tượng trưng cho MỘT ĐÔI song hành.',
  },
];
