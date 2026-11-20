// Comprehensive Pinyin Chart Data: Initials (Thanh mẫu), Finals (Vận mẫu), and Tone System

export interface PinyinInitial {
  letter: string;
  ipa: string;
  hanVietApprox: string;
  mouthGuide: string;
  category: 'Âm môi' | 'Âm đầu lưỡi' | 'Âm gốc lưỡi' | 'Âm mặt lưỡi' | 'Âm uốn lưỡi' | 'Âm răng trước';
  examples: { zh: string; pinyin: string; vi: string }[];
}

export interface PinyinFinal {
  letter: string;
  hanVietApprox: string;
  type: 'Vận mẫu đơn' | 'Vận mẫu kép' | 'Vận mẫu mũi trước' | 'Vận mẫu mũi sau' | 'Vận mẫu đặc biệt';
  examples: { zh: string; pinyin: string; vi: string }[];
}

export interface PinyinTone {
  toneNumber: 1 | 2 | 3 | 4 | 0;
  name: string;
  hanViet: string;
  pitch: string; // e.g., 5-5
  symbol: string;
  description: string;
  ruleTip: string;
  exampleChar: string;
  examplePinyin: string;
  exampleMeaning: string;
}

export const pinyinInitials: PinyinInitial[] = [
  {
    letter: 'b',
    ipa: '[p]',
    hanVietApprox: 'Gần giống "p" tiếng Việt nhưng không bật hơi (nghe như b nhẹ)',
    mouthGuide: 'Hai môi khép chặt, bật nhẹ luồng hơi không mạnh.',
    category: 'Âm môi',
    examples: [
      { zh: '爸', pinyin: 'bà', vi: 'Bố' },
      { zh: '不', pinyin: 'bù', vi: 'Không' },
      { zh: '白', pinyin: 'bái', vi: 'Trắng' }
    ]
  },
  {
    letter: 'p',
    ipa: '[pʰ]',
    hanVietApprox: 'Bật hơi mạnh (đặt tờ giấy trước miệng sẽ bay phần phật)',
    mouthGuide: 'Hai môi khép chặt rồi mở bung ra, luồng hơi tống mạnh qua kẽ môi.',
    category: 'Âm môi',
    examples: [
      { zh: '跑', pinyin: 'pǎo', vi: 'Chạy' },
      { zh: '朋', pinyin: 'péng', vi: 'Bạn' },
      { zh: '票', pinyin: 'piào', vi: 'Vé' }
    ]
  },
  {
    letter: 'm',
    ipa: '[m]',
    hanVietApprox: 'Giống chữ "m" tiếng Việt',
    mouthGuide: 'Hai môi khép chặt, luồng hơi thoát ra từ khoang mũi.',
    category: 'Âm môi',
    examples: [
      { zh: '妈', pinyin: 'mā', vi: 'Mẹ' },
      { zh: '买', pinyin: 'mǎi', vi: 'Mua' },
      { zh: '猫', pinyin: 'māo', vi: 'Mèo' }
    ]
  },
  {
    letter: 'f',
    ipa: '[f]',
    hanVietApprox: 'Giống chữ "ph" tiếng Việt',
    mouthGuide: 'Răng trên chạm nhẹ vào môi dưới, luồng hơi ma sát thoát ra ngoài.',
    category: 'Âm môi',
    examples: [
      { zh: '饭', pinyin: 'fàn', vi: 'Cơm' },
      { zh: '风', pinyin: 'fēng', vi: 'Gió' },
      { zh: '飞', pinyin: 'fēi', vi: 'Bay' }
    ]
  },
  {
    letter: 'd',
    ipa: '[t]',
    hanVietApprox: 'Đọc giống chữ "t" trong tiếng Việt (không đọc là đ)',
    mouthGuide: 'Đầu lưỡi chạm ngạc răng trên, bật mở nhẹ luồng hơi ra.',
    category: 'Âm đầu lưỡi',
    examples: [
      { zh: '大', pinyin: 'dà', vi: 'To, lớn' },
      { zh: '的', pinyin: 'de', vi: 'Của' },
      { zh: '点', pinyin: 'diǎn', vi: 'Điểm, giờ' }
    ]
  },
  {
    letter: 't',
    ipa: '[tʰ]',
    hanVietApprox: 'Đọc giống chữ "th" tiếng Việt nhưng bật hơi dứt khoát',
    mouthGuide: 'Đầu lưỡi dính chặt lợi trên rồi giật lùi, bung luồng hơi mạnh.',
    category: 'Âm đầu lưỡi',
    examples: [
      { zh: '他', pinyin: 'tā', vi: 'Anh ấy' },
      { zh: '天', pinyin: 'tiān', vi: 'Trời, ngày' },
      { zh: '听', pinyin: 'tīng', vi: 'Nghe' }
    ]
  },
  {
    letter: 'n',
    ipa: '[n]',
    hanVietApprox: 'Giống chữ "n" tiếng Việt',
    mouthGuide: 'Đầu lưỡi dán vào lợi trên, hơi thoát qua mũi rung thanh đới.',
    category: 'Âm đầu lưỡi',
    examples: [
      { zh: '你', pinyin: 'nǐ', vi: 'Bạn' },
      { zh: '那', pinyin: 'nà', vi: 'Đó, kia' },
      { zh: '年', pinyin: 'nián', vi: 'Năm' }
    ]
  },
  {
    letter: 'l',
    ipa: '[l]',
    hanVietApprox: 'Giống chữ "l" tiếng Việt',
    mouthGuide: 'Đầu lưỡi chạm lợi trên, luồng hơi lách qua hai bên rìa lưỡi.',
    category: 'Âm đầu lưỡi',
    examples: [
      { zh: '来', pinyin: 'lái', vi: 'Đến' },
      { zh: '冷', pinyin: 'lěng', vi: 'Lạnh' },
      { zh: '老', pinyin: 'lǎo', vi: 'Già' }
    ]
  },
  {
    letter: 'g',
    ipa: '[k]',
    hanVietApprox: 'Đọc giống chữ "c / k" tiếng Việt (không bật hơi)',
    mouthGuide: 'Cuống lưỡi nâng lên chạm ngạc mềm, hạ xuống tạo âm ngắt.',
    category: 'Âm gốc lưỡi',
    examples: [
      { zh: '高', pinyin: 'gāo', vi: 'Cao' },
      { zh: '个', pinyin: 'gè', vi: 'Cái, chiếc' },
      { zh: '过', pinyin: 'guò', vi: 'Qua' }
    ]
  },
  {
    letter: 'k',
    ipa: '[kʰ]',
    hanVietApprox: 'Đọc giống "kh" tiếng Việt nhưng bật luồng hơi từ cuống họng',
    mouthGuide: 'Cuống lưỡi nâng chặn hơi rồi mở phừng, tống hơi cuống họng mạnh.',
    category: 'Âm gốc lưỡi',
    examples: [
      { zh: '看', pinyin: 'kàn', vi: 'Xem' },
      { zh: '开', pinyin: 'kāi', vi: 'Mở' },
      { zh: '快', pinyin: 'kuài', vi: 'Nhanh' }
    ]
  },
  {
    letter: 'h',
    ipa: '[x]',
    hanVietApprox: 'Nằm giữa chữ "h" và "kh" tiếng Việt',
    mouthGuide: 'Cuống lưỡi nâng lên tạo khe hẹp với ngạc mềm, hơi ma sát nhẹ thoát ra.',
    category: 'Âm gốc lưỡi',
    examples: [
      { zh: '好', pinyin: 'hǎo', vi: 'Tốt' },
      { zh: '喝', pinyin: 'hē', vi: 'Uống' },
      { zh: '话', pinyin: 'huà', vi: 'Lời nói' }
    ]
  },
  {
    letter: 'j',
    ipa: '[tɕ]',
    hanVietApprox: 'Gần giống "ch" tiếng Việt nhưng dẹt môi và mặt lưỡi dán ngạc cứng',
    mouthGuide: 'Mặt lưỡi áp sát ngạc cứng, mép miệng kéo căng sang hai bên, không bật hơi.',
    category: 'Âm mặt lưỡi',
    examples: [
      { zh: '家', pinyin: 'jiā', vi: 'Nhà' },
      { zh: '叫', pinyin: 'jiào', vi: 'Gọi là' },
      { zh: '见', pinyin: 'jiàn', vi: 'Gặp' }
    ]
  },
  {
    letter: 'q',
    ipa: '[tɕʰ]',
    hanVietApprox: 'Đọc giống "j" nhưng BẬT HƠI cực mạnh và dẹp môi',
    mouthGuide: 'Vị trí giống chữ j nhưng luồng hơi đẩy qua khe hẹp xì mạnh như tiếng huýt sáo.',
    category: 'Âm mặt lưỡi',
    examples: [
      { zh: '去', pinyin: 'qù', vi: 'Đi' },
      { zh: '钱', pinyin: 'qián', vi: 'Tiền' },
      { zh: '请', pinyin: 'qǐng', vi: 'Mời, xin' }
    ]
  },
  {
    letter: 'x',
    ipa: '[ɕ]',
    hanVietApprox: 'Gần giống "x" tiếng Việt nhưng mặt lưỡi áp sát vòm miệng trên',
    mouthGuide: 'Mặt lưỡi nâng cao sát ngạc cứng, khóe miệng cười rộng, hơi xì mỏng.',
    category: 'Âm mặt lưỡi',
    examples: [
      { zh: '想', pinyin: 'xiǎng', vi: 'Muốn, nghĩ' },
      { zh: '小', pinyin: 'xiǎo', vi: 'Nhỏ' },
      { zh: '写', pinyin: 'xiě', vi: 'Viết' }
    ]
  },
  {
    letter: 'zh',
    ipa: '[ʈʂ]',
    hanVietApprox: 'Gần giống "tr" tiếng Việt nhưng uốn cong đầu lưỡi lên ngạc cứng',
    mouthGuide: 'Đầu lưỡi uốn cong lên chạm ngạc cứng (vòm họng trên), không bật hơi.',
    category: 'Âm uốn lưỡi',
    examples: [
      { zh: '这', pinyin: 'zhè', vi: 'Đây, này' },
      { zh: '中', pinyin: 'zhōng', vi: 'Giữa, Trung' },
      { zh: '住', pinyin: 'zhù', vi: 'Sống, ở' }
    ]
  },
  {
    letter: 'ch',
    ipa: '[ʈʂʰ]',
    hanVietApprox: 'Uốn cong đầu lưỡi như "zh" nhưng BẬT HƠI mạnh',
    mouthGuide: 'Đầu lưỡi uốn chạm vòm họng rồi buông xuống, tống luồng hơi mạnh ra ngoài.',
    category: 'Âm uốn lưỡi',
    examples: [
      { zh: '吃', pinyin: 'chī', vi: 'Ăn' },
      { zh: '茶', pinyin: 'chá', vi: 'Trà' },
      { zh: '出', pinyin: 'chū', vi: 'Ra' }
    ]
  },
  {
    letter: 'sh',
    ipa: '[ʂ]',
    hanVietApprox: 'Uốn cong đầu lưỡi, đọc như chữ "s" nặng tiếng miền Nam',
    mouthGuide: 'Đầu lưỡi uốn cong sát ngạc cứng tạo khe hở, luồng hơi xì xào thoát ra.',
    category: 'Âm uốn lưỡi',
    examples: [
      { zh: '是', pinyin: 'shì', vi: 'Là' },
      { zh: '书', pinyin: 'shū', vi: 'Sách' },
      { zh: '水', pinyin: 'shuǐ', vi: 'Nước' }
    ]
  },
  {
    letter: 'r',
    ipa: '[ʐ]',
    hanVietApprox: 'Đọc giữa chữ "r" và "d" nhưng uốn lưỡi chạm vòm miệng',
    mouthGuide: 'Đầu lưỡi uốn cao như sh, thanh đới rung lên (không rung đầu lưỡi như tiếng Nga/Ý).',
    category: 'Âm uốn lưỡi',
    examples: [
      { zh: '人', pinyin: 'rén', vi: 'Người' },
      { zh: '日', pinyin: 'rì', vi: 'Ngày, mặt trời' },
      { zh: '热', pinyin: 'rè', vi: 'Nóng' }
    ]
  },
  {
    letter: 'z',
    ipa: '[ts]',
    hanVietApprox: 'Đầu lưỡi thẳng chạm chân răng trên, đọc như "ch" nhẹ phẳng lưỡi',
    mouthGuide: 'Lưỡi nằm thẳng ngang, đầu lưỡi dí nhẹ mặt sau răng cửa trên, không bật hơi.',
    category: 'Âm răng trước',
    examples: [
      { zh: '在', pinyin: 'zài', vi: 'Ở, tại' },
      { zh: '早', pinyin: 'zǎo', vi: 'Sớm' },
      { zh: '再', pinyin: 'zài', vi: 'Lại' }
    ]
  },
  {
    letter: 'c',
    ipa: '[tsʰ]',
    hanVietApprox: 'Thẳng đầu lưỡi chạm chân răng trên, BẬT HƠI xì phì cực mạnh',
    mouthGuide: 'Đầu lưỡi thẳng chạm răng trên rồi lùi nhẹ, hơi tống mạnh qua kẽ răng.',
    category: 'Âm răng trước',
    examples: [
      { zh: '从', pinyin: 'cóng', vi: 'Từ' },
      { zh: '菜', pinyin: 'cài', vi: 'Món ăn' },
      { zh: '次', pinyin: 'cì', vi: 'Lần' }
    ]
  },
  {
    letter: 's',
    ipa: '[s]',
    hanVietApprox: 'Đọc giống "x" nhẹ trong tiếng Việt (lưỡi thẳng, không uốn cong)',
    mouthGuide: 'Đầu lưỡi thẳng áp sát răng dưới, luồng hơi trượt trên mặt lưỡi xì ra.',
    category: 'Âm răng trước',
    examples: [
      { zh: '四', pinyin: 'sì', vi: 'Số 4' },
      { zh: '三', pinyin: 'sān', vi: 'Số 3' },
      { zh: '岁', pinyin: 'suì', vi: 'Tuổi' }
    ]
  }
];

export const pinyinFinals: PinyinFinal[] = [
  { letter: 'a', hanVietApprox: 'Đọc như "a" tròn miệng', type: 'Vận mẫu đơn', examples: [{ zh: '八', pinyin: 'bā', vi: 'Tám' }] },
  { letter: 'o', hanVietApprox: 'Đọc hơi lai giữa "ô" và "ua"', type: 'Vận mẫu đơn', examples: [{ zh: '我', pinyin: 'wǒ', vi: 'Tôi' }] },
  { letter: 'e', hanVietApprox: 'Đọc hơi giống "ưa" / "ơ" tiếng Việt', type: 'Vận mẫu đơn', examples: [{ zh: '喝', pinyin: 'hē', vi: 'Uống' }] },
  { letter: 'i', hanVietApprox: 'Đọc là "i" (trừ khi đi sau zh, ch, sh, r, z, c, s đọc là "ư")', type: 'Vận mẫu đơn', examples: [{ zh: '你', pinyin: 'nǐ', vi: 'Bạn' }] },
  { letter: 'u', hanVietApprox: 'Đọc như "u" tròn môi chu tròn', type: 'Vận mẫu đơn', examples: [{ zh: '不', pinyin: 'bù', vi: 'Không' }] },
  { letter: 'ü', hanVietApprox: 'Chu môi tròn đọc chữ "uy" giữ nguyên khuôn miệng không di chuyển', type: 'Vận mẫu đơn', examples: [{ zh: '绿', pinyin: 'lǜ', vi: 'Xanh lá' }] },
  
  { letter: 'ai', hanVietApprox: 'Đọc như "ai" tiếng Việt', type: 'Vận mẫu kép', examples: [{ zh: '白', pinyin: 'bái', vi: 'Trắng' }] },
  { letter: 'ei', hanVietApprox: 'Đọc như "ây" tiếng Việt', type: 'Vận mẫu kép', examples: [{ zh: '北', pinyin: 'běi', vi: 'Bắc' }] },
  { letter: 'ao', hanVietApprox: 'Đọc như "ao" tiếng Việt', type: 'Vận mẫu kép', examples: [{ zh: '高', pinyin: 'gāo', vi: 'Cao' }] },
  { letter: 'ou', hanVietApprox: 'Đọc như "âu" tiếng Việt', type: 'Vận mẫu kép', examples: [{ zh: '狗', pinyin: 'gǒu', vi: 'Chó' }] },
  { letter: 'ia', hanVietApprox: 'Đọc như "ia" tiếng Việt', type: 'Vận mẫu kép', examples: [{ zh: '家', pinyin: 'jiā', vi: 'Nhà' }] },
  { letter: 'ie', hanVietApprox: 'Đọc như "i-ê"', type: 'Vận mẫu kép', examples: [{ zh: '写', pinyin: 'xiě', vi: 'Viết' }] },
  { letter: 'ua', hanVietApprox: 'Đọc như "oa"', type: 'Vận mẫu kép', examples: [{ zh: '花', pinyin: 'huā', vi: 'Hoa' }] },
  { letter: 'uo', hanVietApprox: 'Đọc như "ua" / "uô"', type: 'Vận mẫu kép', examples: [{ zh: '多', pinyin: 'duō', vi: 'Nhiều' }] },
  { letter: 'üe', hanVietApprox: 'Chu môi đọc "uy-ê"', type: 'Vận mẫu kép', examples: [{ zh: '月', pinyin: 'yuè', vi: 'Trăng' }] },

  { letter: 'an', hanVietApprox: 'Đọc như "an" tiếng Việt', type: 'Vận mẫu mũi trước', examples: [{ zh: '看', pinyin: 'kàn', vi: 'Xem' }] },
  { letter: 'en', hanVietApprox: 'Đọc như "ơn" hoặc "ân"', type: 'Vận mẫu mũi trước', examples: [{ zh: '门', pinyin: 'mén', vi: 'Cửa' }] },
  { letter: 'in', hanVietApprox: 'Đọc như "in" tiếng Việt', type: 'Vận mẫu mũi trước', examples: [{ zh: '心', pinyin: 'xīn', vi: 'Tim' }] },
  { letter: 'ang', hanVietApprox: 'Đọc như "ang" há to miệng âm vang vòm họng', type: 'Vận mẫu mũi sau', examples: [{ zh: '帮', pinyin: 'bāng', vi: 'Giúp' }] },
  { letter: 'eng', hanVietApprox: 'Đọc như "âng" vòm họng mở', type: 'Vận mẫu mũi sau', examples: [{ zh: '朋', pinyin: 'péng', vi: 'Bạn' }] },
  { letter: 'ing', hanVietApprox: 'Đọc như "inh" tiếng Việt', type: 'Vận mẫu mũi sau', examples: [{ zh: '明', pinyin: 'míng', vi: 'Sáng' }] },
  { letter: 'ong', hanVietApprox: 'Đọc như "ung" tròn môi', type: 'Vận mẫu mũi sau', examples: [{ zh: '中', pinyin: 'zhōng', vi: 'Trung' }] },
  { letter: 'er', hanVietApprox: 'Đọc "ơ" rồi uốn cong lưỡi sâu vào trong', type: 'Vận mẫu đặc biệt', examples: [{ zh: '二', pinyin: 'èr', vi: 'Hai' }] }
];

export const pinyinTones: PinyinTone[] = [
  {
    toneNumber: 1,
    name: 'Thanh 1 (Âm bình)',
    hanViet: 'Dấu ngang ( — )',
    pitch: '5 - 5 (Cao & Ngang phẳng)',
    symbol: '¯',
    description: 'Giọng bắt đầu ở độ cao 5 và giữ nguyên độ cao cho tới khi dứt âm, ngân đều như nốt Đố kéo dài.',
    ruleTip: 'Không được chúc xuống như thanh không dấu tiếng Việt. Phải giữ giọng cao và phẳng.',
    exampleChar: '妈',
    examplePinyin: 'mā',
    exampleMeaning: 'Mẹ'
  },
  {
    toneNumber: 2,
    name: 'Thanh 2 (Dương bình)',
    hanViet: 'Dấu sắc ( / )',
    pitch: '3 - 5 (Đi lên dốc)',
    symbol: 'ˊ',
    description: 'Bắt đầu từ tầm trung (3) và vút nhanh lên đỉnh (5), giống giọng nghi vấn ngạc nhiên "Hả?!" trong tiếng Việt.',
    ruleTip: 'Lên giọng dứt khoát, không kéo dài quá mức.',
    exampleChar: '麻',
    examplePinyin: 'má',
    exampleMeaning: 'Vải gai / Tê'
  },
  {
    toneNumber: 3,
    name: 'Thanh 3 (Thượng thanh)',
    hanViet: 'Dấu hỏi / móc ( ˇ )',
    pitch: '2 - 1 - 4 (Hạ sâu rồi ngoặc lên)',
    symbol: 'ˇ',
    description: 'Hạ giọng thật sâu xuống đáy cổ họng (1) rồi nẩy nhẹ lên (4). Khi nói nhanh thường chỉ cần đọc nửa đầu thanh 3 (2-1).',
    ruleTip: 'Quy tắc vàng: 2 thanh 3 đi liền nhau (ví dụ: 你 + 好) thì thanh 3 đầu tiên biến thành thanh 2 (ní hǎo).',
    exampleChar: '马',
    examplePinyin: 'mǎ',
    exampleMeaning: 'Con ngựa'
  },
  {
    toneNumber: 4,
    name: 'Thanh 4 (Khứ thanh)',
    hanViet: 'Dấu huyền dốc ( \\ )',
    pitch: '5 - 1 (Rơi tự do cực mạnh)',
    symbol: 'ˋ',
    description: 'Bắt đầu từ đỉnh cao nhất (5) rơi thẳng đứng xuống đáy (1), giọng dứt khoát như tiếng ra lệnh hoặc chặt chém.',
    ruleTip: 'Không kéo dài âm như dấu huyền tiếng Việt ("mà" tiếng Việt là 2-1). Thanh 4 rơi từ 5 xuống 1 trong 0.2 giây!',
    exampleChar: '骂',
    examplePinyin: 'mà',
    exampleMeaning: 'Mắng mỏ'
  },
  {
    toneNumber: 0,
    name: 'Thanh nhẹ (Khinh thanh)',
    hanViet: 'Không dấu',
    pitch: 'Nhẹ & Ngắn',
    symbol: '·',
    description: 'Đọc rất ngắn, nhẹ, không nhấn trọng âm, nương theo thanh điệu của từ đứng trước.',
    ruleTip: 'Thường gặp ở trợ từ (的 de, 了 le, 吗 ma) hoặc từ láy (爸爸 bàba, 妈妈 māma).',
    exampleChar: '吗',
    examplePinyin: 'ma',
    exampleMeaning: 'Trợ từ nghi vấn: ...không?'
  }
];
