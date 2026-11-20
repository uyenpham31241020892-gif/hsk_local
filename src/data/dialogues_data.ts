// Situational Real-World Dialogues (Hội thoại giao tiếp thực tế)

export interface DialogueLine {
  speaker: string;     // e.g., "A", "B", "Phục vụ", "Khách"
  speakerNameVi: string;
  avatar: string;      // emoji
  zh: string;
  pinyin: string;
  vi: string;
  audioSlowRate?: number;
}

export interface DialogueTopic {
  id: string;
  title: string;
  titleVi: string;
  category: 'daily' | 'food' | 'shopping' | 'travel' | 'work' | 'medical';
  emoji: string;
  difficulty: 'Cơ bản (HSK 1-2)' | 'Trung cấp (HSK 3-4)' | 'Nâng cao (HSK 5+)';
  description: string;
  lines: DialogueLine[];
  keyVocab: {
    word: string;
    pinyin: string;
    meaning: string;
    sampleUsage: string;
  }[];
  cultureTip: string;
}

export const dialoguesData: DialogueTopic[] = [
  {
    id: 'dlg_hotpot',
    title: '去海底捞吃火锅',
    titleVi: 'Đi ăn lẩu Haidilao & Gọi món',
    category: 'food',
    emoji: '🍲',
    difficulty: 'Cơ bản (HSK 1-2)',
    description: 'Học cách chọn nước lẩu cay Tứ Xuyên / lẩu cà chua, gọi thêm thịt bò lát, nước chấm và xin hóa đơn tính tiền.',
    lines: [
      {
        speaker: '服务员',
        speakerNameVi: 'Nhân viên',
        avatar: '💁‍♂️',
        zh: '您好！欢迎光临海底捞，请问几位？',
        pinyin: 'Nín hǎo! Huānyíng guānglín Hǎidǐlāo, qǐngwèn jǐ wèi?',
        vi: 'Kính chào quý khách! Hoan nghênh đến Haidilao, xin hỏi đi mấy người ạ?'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '你好，我们两个人，想坐靠窗的位置。',
        pinyin: 'Nǐ hǎo, wǒmen liǎng gè rén, xiǎng zuò kào chuāng de wèizhì.',
        vi: 'Chào bạn, chúng tôi đi 2 người, muốn ngồi vị trí gần cửa sổ.'
      },
      {
        speaker: '服务员',
        speakerNameVi: 'Nhân viên',
        avatar: '💁‍♂️',
        zh: '好的，请跟我来。请问锅底想要什么口味？',
        pinyin: 'Hǎo de, qǐng gēn wǒ lái. Qǐngwèn guōdǐ xiǎng yào shénme kǒuwèi?',
        vi: 'Dạ được, xin mời đi theo tôi. Xin hỏi quý khách muốn dùng nước lẩu vị gì ạ?'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '我们要一个四宫格：番茄锅和微辣的麻辣锅。',
        pinyin: 'Wǒmen yào yí gè sìgōnggé: fānqié guō hé wēi là de málà guō.',
        vi: 'Chúng tôi muốn nồi 4 ngăn: lẩu cà chua và lẩu cay tê ít cay.'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '再来一份肥牛、一份虾滑和生菜。',
        pinyin: 'Zài lái yí fèn féiniú, yí fèn xiāhuá hé shēngcài.',
        vi: 'Cho thêm một phần bò ba chỉ, một phần tôm viên phết và xà lách.'
      },
      {
        speaker: '服务员',
        speakerNameVi: 'Nhân viên',
        avatar: '💁‍♂️',
        zh: '好的，小料台在前面，可以自己调酱料。',
        pinyin: 'Hǎo de, xiǎoliàotái zài qiánmiàn, kěyǐ zìjǐ tiáo jiàngliào.',
        vi: 'Dạ vâng, quầy nước chấm ở phía trước, quý khách có thể tự pha sốt ạ.'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '服务员，买单！可以扫微信支付吗？',
        pinyin: 'Fúwùyuán, mǎidān! Kěyǐ sǎo Wēixìn zhīfù ma?',
        vi: 'Phục vụ ơi, tính tiền! Có thể quét WeChat Pay được không?'
      }
    ],
    keyVocab: [
      { word: '锅底', pinyin: 'guōdǐ', meaning: 'Nồi nước lẩu', sampleUsage: '你要什么锅底？' },
      { word: '微辣', pinyin: 'wēi là', meaning: 'Ít cay / hơi cay', sampleUsage: '我不太能吃辣，要微辣。' },
      { word: '肥牛', pinyin: 'féiniú', meaning: 'Thịt bò cuộn ba chỉ', sampleUsage: '来两份肥牛。' },
      { word: '买单', pinyin: 'mǎidān', meaning: 'Thanh toán hóa đơn', sampleUsage: '服务员，买单！' }
    ],
    cultureTip: 'Ở Trung Quốc, người ta thường dùng từ "扫码" (quét mã) để thanh toán qua WeChat Pay hoặc Alipay, hầu như không còn dùng tiền mặt giấy.'
  },
  {
    id: 'dlg_milktea',
    title: '点一杯奶茶',
    titleVi: 'Gọi một ly trà sữa (Chỉnh đường & đá)',
    category: 'food',
    emoji: '🧋',
    difficulty: 'Cơ bản (HSK 1-2)',
    description: 'Học cách order trà sữa chuẩn xịn Trung Quốc: chọn độ ngọt (nửa đường, không đường), lượng đá và topping trân châu.',
    lines: [
      {
        speaker: '店员',
        speakerNameVi: 'Nhân viên quán',
        avatar: '🧑‍🍳',
        zh: '您好，想喝点什么？',
        pinyin: 'Nín hǎo, xiǎng hē diǎn shénme?',
        vi: 'Xin chào quý khách, muốn uống gì ạ?'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '你好，我要一杯杨枝甘露和大杯珍珠奶茶。',
        pinyin: 'Nǐ hǎo, wǒ yào yì bēi yángzhī gānlù hé dà bēi zhēnzhū nǎichá.',
        vi: 'Chào bạn, cho tôi một ly Dương Chi Cam Lộ và một ly lớn trà sữa trân châu.'
      },
      {
        speaker: '店员',
        speakerNameVi: 'Nhân viên quán',
        avatar: '🧑‍🍳',
        zh: '甜度和冰块怎么选？',
        pinyin: 'Tiándù hé bīngkuài zěnme xuǎn?',
        vi: 'Độ ngọt và lượng đá quý khách chọn thế nào ạ?'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '珍珠奶茶要半糖、少冰。杨枝甘露微糖、去冰。',
        pinyin: 'Zhēnzhū nǎichá yào bàn táng, shǎo bīng. Yángzhī gānlù wēi táng, qù bīng.',
        vi: 'Trà sữa trân châu lấy 50% đường (nửa đường), ít đá. Dương Chi Cam Lộ lấy 30% đường (ít ngọt), không đá.'
      },
      {
        speaker: '店员',
        speakerNameVi: 'Nhân viên quán',
        avatar: '🧑‍🍳',
        zh: '好的，一共三十二块，需要打包还是现在喝？',
        pinyin: 'Hǎo de, yí gòng sānshí\'èr kuài, xūyào dǎbāo háishì xiànzài hē?',
        vi: 'Dạ được, tổng cộng 32 tệ, bạn mang về (take-away) hay uống luôn ạ?'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '打包，谢谢！',
        pinyin: 'Dǎbāo, xièxie!',
        vi: 'Đóng gói mang đi giùm tôi, cảm ơn!'
      }
    ],
    keyVocab: [
      { word: '半糖', pinyin: 'bàn táng', meaning: 'Nửa đường (50%)', sampleUsage: '一杯波霸奶茶半糖。' },
      { word: '少冰', pinyin: 'shǎo bīng', meaning: 'Ít đá', sampleUsage: '少冰更划算。' },
      { word: '去冰', pinyin: 'qù bīng', meaning: 'Không bỏ đá', sampleUsage: '天气冷，我要去冰。' },
      { word: '打包', pinyin: 'dǎbāo', meaning: 'Đóng gói mang về (takeaway)', sampleUsage: '请帮我打包。' }
    ],
    cultureTip: 'Thang đo độ ngọt chuẩn ở quán trà sữa Trung Quốc: 全糖 (100%), 少糖/七分糖 (70%), 半糖 (50%), 微糖/三分糖 (30%), 不加糖/无糖 (0%).'
  },
  {
    id: 'dlg_shopping',
    title: '买衣服与讨价还价',
    titleVi: 'Mua sắm & Trả giá ở chợ',
    category: 'shopping',
    emoji: '🛍️',
    difficulty: 'Cơ bản (HSK 1-2)',
    description: 'Hỏi giá, xin thử size quần áo, khen chê chất vải và nghệ thuật trả giá giảm bớt tiền.',
    lines: [
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '老板，请问这件外套多少钱？',
        pinyin: 'Lǎobǎn, qǐngwèn zhè jiàn wàitào duōshǎo qián?',
        vi: 'Ông chủ ơi, xin hỏi cái áo khoác này bao nhiêu tiền vậy?'
      },
      {
        speaker: '老板',
        speakerNameVi: 'Chủ shop',
        avatar: '👨‍💼',
        zh: '这件原价三百，今天打折，给你两百二。',
        pinyin: 'Zhè jiàn yuánjià sānbǎi, jīntiān dǎzhé, gěi nǐ liǎng bǎi èr.',
        vi: 'Cái này giá gốc 300, hôm nay giảm giá để bạn 220 tệ.'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '有点贵，能不能再便宜一点？一百五卖不卖？',
        pinyin: 'Yǒudiǎn guì, néng bù néng zài piányi yìdiǎn? Yì bǎi wǔ mài bu mài?',
        vi: 'Hơi đắt quá, có thể bớt chút nữa không? 150 tệ bán không anh?'
      },
      {
        speaker: '老板',
        speakerNameVi: 'Chủ shop',
        avatar: '👨‍💼',
        zh: '一百五连成本都不够！最少一百八，质量特别好。',
        pinyin: 'Yì bǎi wǔ lián chéngběn dōu bú gòu! Zuì shǎo yì bǎi bā, zhìliàng tèbié hǎo.',
        vi: '150 tệ còn chưa đủ tiền vốn! Thấp nhất 180 tệ, chất lượng cực kỳ tốt luôn.'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '那一百六吧，合适我现在就扫码付款。',
        pinyin: 'Nà yì bǎi liù ba, héshì wǒ xiànzài jiù sǎo mǎ fùkuǎn.',
        vi: 'Vậy 160 tệ đi, được thì tôi quét mã trả tiền ngay bây giờ.'
      },
      {
        speaker: '老板',
        speakerNameVi: 'Chủ shop',
        avatar: '👨‍💼',
        zh: '行行行，看你这么诚心，给你一件大号的。',
        pinyin: 'Xíng xíng xíng, kàn nǐ zhème chéngxīn, gěi nǐ yí jiàn dàhào de.',
        vi: 'Thôi được rồi, thấy bạn nhiệt tình, lấy cho bạn cái size lớn nhé.'
      }
    ],
    keyVocab: [
      { word: '打折', pinyin: 'dǎzhé', meaning: 'Giảm giá, chiết khấu', sampleUsage: '打八折 = giảm 20% (bán 80% giá).' },
      { word: '便宜', pinyin: 'piányi', meaning: 'Rẻ', sampleUsage: '便宜点吧！' },
      { word: '质量', pinyin: 'zhìliàng', meaning: 'Chất lượng', sampleUsage: '中国制造质量很好。' },
      { word: '试穿', pinyin: 'shìchuān', meaning: 'Mặc thử', sampleUsage: '我可以试穿一下吗？' }
    ],
    cultureTip: 'Quy tắc nói chiết khấu của người Trung Quốc ngược với Việt Nam: "打八折" có nghĩa là lấy 80% giá gốc (tức giảm 20%), "打五折" là giảm 50% (nửa giá).'
  },
  {
    id: 'dlg_taxi',
    title: '打车与问路',
    titleVi: 'Bắt xe Taxi & Hỏi đường đi tàu điện',
    category: 'travel',
    emoji: '🚕',
    difficulty: 'Cơ bản (HSK 1-2)',
    description: 'Bảo tài xế bật đồng hồ tính cước, chỉ hướng rẽ trái, rẽ phải, dừng xe ở ngã tư.',
    lines: [
      {
        speaker: '司机',
        speakerNameVi: 'Tài xế',
        avatar: '🚖',
        zh: '你好，去哪儿？',
        pinyin: 'Nǐ hǎo, qù nǎr?',
        vi: 'Chào bạn, đi đâu thế?'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '师傅，去北京南站，麻烦打表。',
        pinyin: 'Shīfu, qù Běijīng Nán Zhàn, máfan dǎbiǎo.',
        vi: 'Bác tài ơi, đến ga tàu Nam Bắc Kinh, phiền bác bật đồng hồ tính cước nhé.'
      },
      {
        speaker: '司机',
        speakerNameVi: 'Tài xế',
        avatar: '🚖',
        zh: '好嘞！现在早高峰，前面可能有点堵车。',
        pinyin: 'Hǎo lei! Xiànzài zǎo gāofēng, qiánmiàn kěnéng yǒudiǎn dǔchē.',
        vi: 'Được rồi! Giờ đang cao điểm buổi sáng, phía trước có thể hơi tắc đường xíu.'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '大概需要多长时间？我赶十点半的高铁。',
        pinyin: 'Dàgài xūyào duō cháng shíjiān? Wǒ gǎn shí diǎn bàn de gāotiě.',
        vi: 'Khoảng mất bao lâu thời gian ạ? Tôi phải kịp chuyến tàu cao tốc lúc 10 rưỡi.'
      },
      {
        speaker: '司机',
        speakerNameVi: 'Tài xế',
        avatar: '🚖',
        zh: '走环路半小时就到，肯定赶得上！',
        pinyin: 'Zǒu huánlù bàn xiǎoshí jiù dào, kěndìng gǎn de shàng!',
        vi: 'Đi đường vành đai nửa tiếng là tới, nhất định kịp mà!'
      },
      {
        speaker: '我',
        speakerNameVi: 'Tôi',
        avatar: '🙋‍♀️',
        zh: '太好了，在前面的十字路口靠边停就行。',
        pinyin: 'Tài hǎo le, zài qiánmiàn de shízì lùkǒu kàobiān tíng jiù xíng.',
        vi: 'Tuyệt quá, đến ngã tư phía trước bác cứ tấp vào lề dừng xe là được.'
      }
    ],
    keyVocab: [
      { word: '打表', pinyin: 'dǎbiǎo', meaning: 'Bật đồng hồ tính tiền (xe taxi)', sampleUsage: '上车一定要记得打表。' },
      { word: '堵车', pinyin: 'dǔchē', meaning: 'Tắc đường, kẹt xe', sampleUsage: '下雨天容易堵车。' },
      { word: '高铁', pinyin: 'gāotiě', meaning: 'Tàu cao tốc (CRH)', sampleUsage: '坐高铁比坐飞机更方便。' },
      { word: '靠边停', pinyin: 'kàobiān tíng', meaning: 'Tấp vào lề dừng xe', sampleUsage: '麻烦靠边停一下。' }
    ],
    cultureTip: 'Ở Trung Quốc, cách xưng hô thân mật và lịch sự với tài xế, thợ sửa xe hay nhân viên kỹ thuật là gọi "师傅" (Shīfu - Sư phụ / Bác tài).'
  },
  {
    id: 'dlg_factory',
    title: '工厂交接与车间管理',
    titleVi: 'Hội thoại tiếng Trung Công Xưởng & Văn Phòng',
    category: 'work',
    emoji: '🏭',
    difficulty: 'Trung cấp (HSK 3-4)',
    description: 'Kiểm tra sản lượng chuyền may/điện tử, tỷ lệ hàng lỗi (良率/不良品), giao hàng đúng tiến độ và an toàn lao động.',
    lines: [
      {
        speaker: '主管',
        speakerNameVi: 'Chủ quản',
        avatar: '👷‍♂️',
        zh: '李组长，今天早班的生产进度怎么样？',
        pinyin: 'Lǐ zǔzhǎng, jīntiān zǎobān de shēngchǎn jìndù zěnmeyàng?',
        vi: 'Tổ trưởng Lý, tiến độ sản xuất ca sáng hôm nay thế nào rồi?'
      },
      {
        speaker: '组长',
        speakerNameVi: 'Tổ trưởng Lý',
        avatar: '👷‍♀️',
        zh: '主管，目前一号流水线已经完成了八百件，良品率达到百分之九十八。',
        pinyin: 'Zhǔguǎn, mùqián yī hào liúshuǐxiàn yǐjīng wánchéng le bābǎi jiàn, liángpǐn lǜ dádào bǎifēn zhī jiǔshíbā.',
        vi: 'Thưa chủ quản, hiện tại chuyền 1 đã hoàn thành 800 chiếc, tỷ lệ hàng đạt chuẩn đạt 98%.'
      },
      {
        speaker: '主管',
        speakerNameVi: 'Chủ quản',
        avatar: '👷‍♂️',
        zh: '很好。这批货明天下午必须出货，千万不能耽误交期。',
        pinyin: 'Hěn hǎo. Zhè pī huò míngtiān xiàwǔ bìxū chūhuò, qiānwàn bù néng dānwù jiāoqī.',
        vi: 'Rất tốt. Lô hàng này chiều mai bắt buộc phải xuất hàng, tuyệt đối không được trễ kỳ hạn giao hàng.'
      },
      {
        speaker: '组长',
        speakerNameVi: 'Tổ trưởng Lý',
        avatar: '👷‍♀️',
        zh: '明白！下午我们会安排加班两个小时，保证按时交货。',
        pinyin: 'Míngbai! Xiàwǔ wǒmen huì ānpái jiābān liǎng gè xiǎoshí, bǎozhèng ànshí jiāohuò.',
        vi: 'Tôi rõ rồi! Chiều nay chúng tôi sẽ bố trí tăng ca 2 tiếng, đảm bảo giao hàng đúng giờ.'
      },
      {
        speaker: '主管',
        speakerNameVi: 'Chủ quản',
        avatar: '👷‍♂️',
        zh: '记得提醒大家注意车间安全，必须穿劳保鞋和戴安全帽。',
        pinyin: 'Jìde tíxǐng dàjiā zhùyì chējiān ānquán, bìxū chuān láobǎoxié hé dài ānquánmào.',
        vi: 'Nhớ nhắc mọi người chú ý an toàn trong xưởng, bắt buộc phải mang giày bảo hộ và đội mũ an toàn.'
      }
    ],
    keyVocab: [
      { word: '流水线', pinyin: 'liúshuǐxiàn', meaning: 'Dây chuyền sản xuất', sampleUsage: '流水线速度调快一点。' },
      { word: '良品率', pinyin: 'liángpǐn lǜ', meaning: 'Tỷ lệ hàng đạt chất lượng chuẩn', sampleUsage: '良品率要保持在99%以上。' },
      { word: '交期', pinyin: 'jiāoqī', meaning: 'Thời hạn giao hàng (Delivery date)', sampleUsage: '客户要求提前交期。' },
      { word: '加班', pinyin: 'jiābān', meaning: 'Làm thêm giờ (Tăng ca)', sampleUsage: '今天晚上要加班吗？' }
    ],
    cultureTip: 'Trong các nhà máy FDI Trung Quốc / Đài Loan, các thuật ngữ như 良品 (hàng đạt), 不良品 (hàng lỗi), 出货 (xuất hàng), 报废 (hủy bỏ) được dùng hàng ngày.'
  }
];
