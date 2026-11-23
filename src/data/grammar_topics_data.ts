// 260 Comprehensive Grammar Topics (Kho Chuyên Đề Ngữ Pháp HSK 1 - HSK 6)
// Trích xuất từ Migii HSK 1 (40 chuyên đề chuẩn bộ GD) và tài liệu ngữ pháp nâng cao

export interface GrammarExample {
  zh: string;
  pinyin: string;
  vi: string;
}

export interface GrammarTopicEntry {
  id: string;
  level: string; // HSK1, HSK2, HSK3, HSK4, HSK5, HSK6
  title: string;
  category: string;
  structure?: string;
  meaning?: string;
  usage?: string;
  notes?: string[];
  examples?: GrammarExample[];
}

export const grammarTopics: GrammarTopicEntry[] = [
  {
    "id": "gram_hsk1_01",
    "level": "HSK1",
    "title": "Ngữ pháp 1: PHỦ ĐỊNH CỦA \"有\" VỚI \"没\"",
    "category": "cau-hoi-phu-dinh",
    "structure": "没 + 有 (+Tân ngữ)",
    "meaning": "Từ chối,phủ định",
    "usage": "Hầu như tấtcả các động từđều được phủ định với phó từ phủ định 不 (bù),riêng động\ntừ有 (yǒu) làmột ngoại lệvà phải được phủ định bằng phó từ phủ định 没 (méi).\n\nCấu trúc: 没 + 有 (+Tân ngữ)",
    "notes": [
      "Do mối quan hệ đặc biệtgiữa 没 (méi) và 有 (yǒu),nên bình thường câu 没有\n thường được viết liền:\"méiyǒu\".",
      "Hãy nhớ rằng cố gắng phủ nhận 有 (yǒu) với 不 (bù) làmột sailầm kinhđiển mà\n nhiều người mắc phải trong giaiđoạn đầu học tiếngTrung.",
      "Không bao giờ sử dụng 不 (bù)để phủ định有 (yǒu).",
      "没有 (méiyǒu) có thể được rútngắn thành 没 (méi) mà không làm thay đổiý\n nghĩa của nó."
    ],
    "examples": [
      {
        "zh": "我没有哥哥。",
        "pinyin": "Wǒ méiyǒu gēge.",
        "vi": "Tôi không có anh trai."
      },
      {
        "zh": "他没有钱。",
        "pinyin": "Tā méiyǒu qián.",
        "vi": "Anh ấy không có tiền."
      },
      {
        "zh": "我们没有书。",
        "pinyin": "Wǒmen méiyǒu shū.",
        "vi": "Chúng tôi không có sách."
      }
    ]
  },
  {
    "id": "gram_hsk1_02",
    "level": "HSK1",
    "title": "Ngữ pháp 2: PHỦ ĐỊNH TIÊU CHUẨN VỚI “不”",
    "category": "cau-hoi-phu-dinh",
    "structure": "Chủ ngữ + 不 + Động từ + Tân ngữ",
    "meaning": "Phủ định, mô tảhành động, từ chối, Đề cập đến hiện tại,Đề cập đến tương lai,Đề cập\nđến hành động theo thóiquen",
    "usage": "不(bù) thường được sử dụng để phủ định một sự việc trong hiện tạihoặc tương lai,\nhoặc để nói về một sự thậthiển nhiên, ví dụ như một thóiquen. Vìvậy, việc biểu đạt\nnhững câu như 'Tôikhông muốn đi'hoặc 'Tôikhông đi'hoặc 'Tôi không ăn thịt'sẽlà\ncách sử dụng điển hình của 不 (bù).\nĐể phủ địnhmột động từ,chỉ cần đặt 不 (bù)trước động từ đó:\nCấu trúc: Chủ ngữ + 不 + Động từ + Tân ngữ",
    "notes": [
      "Nếu động từ phía sau là thanh 4, thì不 phải được phát âm thành (bú), (vídụ: 不\n 去 (bú qù),不对 (bú duì),...)Các trường hợp khác giữ nguyên cách đọc.",
      "Hầu như tấtcả các động từ có thể được phủ định với不 (bù) (trừkhi bạn nói về\n quá khứ). Động từ duy nhất không bao giờ có thể bịphủ định với 不 (bù) là有\n (yǒu).",
      "Cấu trúcvới tínhtừ về cơ bản giống như cấu trúc có động từ.",
      "Cấu trúc:Chủ ngữ + 不 + Tính từ",
      "Chữ 不 còn dùng trong những câu biểu thịý cầu khiến, thường là 不要，不用……."
    ],
    "examples": [
      {
        "zh": "我不是老师，我是学生。",
        "pinyin": "Wǒ bú shì lǎoshī, wǒ shì xuésheng.",
        "vi": "Tôi không phải giáo viên, tôi là học sinh."
      },
      {
        "zh": "他不是中国人。",
        "pinyin": "Tā bú shì Zhōngguó rén.",
        "vi": "Anh ấy không phải người Trung Quốc."
      },
      {
        "zh": "我不认识他。",
        "pinyin": "Wǒ bú rènshi tā.",
        "vi": "Tôi không quen biết anh ấy."
      },
      {
        "zh": "我不叫李文。",
        "pinyin": "Wǒ bù jiào Lǐ Wén.",
        "vi": "Tôi không tên là Lý Văn."
      }
    ]
  },
  {
    "id": "gram_hsk1_03",
    "level": "HSK1",
    "title": "Ngữ pháp 3: PHÓ TỪ CHỈ PHẠM VI VỚI “都”",
    "category": "tinh-tu-trang-tu",
    "structure": "Chủ ngữ +都 + động từ/ tínhtừ",
    "meaning": "Thể hiện số lượng, nhấn mạnh phạm vi",
    "usage": "“都” làphó từ phạm vi,thường dùng để chỉtoàn bộ người hoặc sự việc đã nhắc đến\ntrướcđó. Trong câu “都” thường đứng trước động từ hoặc tínhtừ .\nCấu trúc: Chủ ngữ +都 + động từ/ tínhtừ.",
    "notes": [
      "Một trongnhững lỗithường gặp trong việc dùng \"都\" là đặttrước chủ ngữ. Hãy luôn nhớ\nvịtrícủa\"都\" trongcâu làđứng sau chủ ngữ vàđứng trước động từhoặc danh từ."
    ],
    "examples": [
      {
        "zh": "你们都认识 John 吗？",
        "pinyin": "Nǐmen dōu rènshiJohn ma?",
        "vi": "Các bạn đều quen biếtJohn à?"
      },
      {
        "zh": "他们都在上海 。",
        "pinyin": "Tāmen dōu zài Shànghǎi.",
        "vi": "Họ đều ở Thượng Hải."
      },
      {
        "zh": "他们都不是韩国人。",
        "pinyin": "Tāmen dōu búshì hánguó rén.",
        "vi": "Họ đều không phải người Hàn Quốc."
      },
      {
        "zh": "他们不都是韩国人。",
        "pinyin": "Tāmen bù dōu shìhánguó rén.",
        "vi": "Họ không phải đều là người Hàn Quốc."
      }
    ]
  },
  {
    "id": "gram_hsk1_04",
    "level": "HSK1",
    "title": "Ngữ pháp 4: TRẠNG TỪ “CŨNG” “也”",
    "category": "tinh-tu-trang-tu",
    "structure": "Chủ ngữ + 也 + (cụm) động từ /(cụm) tính từ",
    "meaning": "Thể hiện sự tương đồng, có ý so sánh.",
    "usage": "Trạng từ tiếng Việt “cũng” được thể hiện bằng tiếng Trung là “也” (yě). Trong tiếng\nTrung, nó luôn cần phải đứng trước động từ (hoặc tínhtừ).\nVìnó làtrạng từ, 也 (yě)được chèn sau chủ ngữ, trước (cụm) động từ hoặc (cụm) tính\ntừ.\nCấu trúc:Chủ ngữ + 也 + (cụm) động từ /(cụm) tính từ",
    "notes": [
      "Đối với các câu 'Danh từ + tính từ đơn âm tiết',thôngthường bạn cần thêm một\n trạng từ như 很 (hěn) trước tính từ,bởi vì tínhtừ đơn âm tiếtkhông bao giờ\n đứng một mình. Trong trường hợp đó, cần đặt 也 (yě)trước trạng từ rồimới đến\n tínhtừ.\n Cấu trúc: Chủ ngữ + 也 (+ Trạng từ) + Tính từ",
      "Thật khó để biếtcách nói 'tôicũng vậy' khi bạn mới học từ 也 (yě) lần đầu tiên,vì\n vậy một lỗirấtthường gặp đó là nói 'wǒ yě'.Đó không phải làmột câu hoàn\n chỉnh, bạn không thể để 也 (yě)ở đó mà không có gìđi sau nó.",
      "Cách chính xác để nói 'tôicũng vậy' đó là \"我也是“（wǒ yě shì)."
    ],
    "examples": [
      {
        "zh": "我也是学生。",
        "pinyin": "Wǒ yě shì xuésheng.",
        "vi": "Tôi cũng làhọc sinh."
      },
      {
        "zh": "她也有一个儿子。",
        "pinyin": "Tā yě yǒu yīgè érzi.",
        "vi": "Cô ấy cũng có một đứa con trai."
      },
      {
        "zh": "你也很高。",
        "pinyin": "Nǐ yě hěn gāo.",
        "vi": "Bạn cũng rấtcao."
      }
    ]
  },
  {
    "id": "gram_hsk1_05",
    "level": "HSK1",
    "title": "Ngữ pháp 5: THỂ HIỆN “VÀ” VỚI “和”",
    "category": "gioi-tu-lien-tu",
    "structure": "THỂ HIỆN “VÀ” VỚI “和”",
    "meaning": "Liên từthể hiện sự liệtkê,giớitừ thể hiện sự liên quan, so sánh.",
    "usage": "和 (hé) là liêntừ dùng để liệtkêra nhiều danh từ. Tuy nhiên cần nhớ rằng 和 (hé)không\nphải trongtrường hợp nào cũng dịch thành từ 'và'trong tiếng Việt.Đôi khi 和 (hé) cũng\ncó thểdịch thành 'cùng,cùng với'.\n和 (hé) chủ yếu được sử dụng để liên kếtcác danh từ. Ngoài ra 和 (hé) cũng có thểsử\ndụng để liên kếtcác (cụm) động từ,hoặc các (cụm) tínhtừ mang chức năng của danh\ntừ.",
    "notes": [
      "Hai vế trước và sau 和 (hé)phải tương đương về chức năng ngữ pháp. 和 (hé)\n chỉmối quan hệ ngang bằng, tức là haivế trước và sau 和 (hé) phải có thể thay\n đổivị trícho nhau mà không làm nộidung câu thay đổi.\n Cấu trúc: Danh từ 1 + 和 + Danh từ 2 = Danh từ 2 + 和 + Danh từ 1\n Cấu trúc: Cụm động từ 1 + 和 + Cụm động từ 2",
      "Danh từ + 和 + Động từ làmột cách dùng sairất phổ biến của người học tiếng\n Trung."
    ],
    "examples": [
      {
        "zh": "老板喜欢咖啡和茶。",
        "pinyin": "Lǎobǎn xǐhuan kāfēi hé chá.",
        "vi": "Sếp thích cà phê và trà."
      },
      {
        "zh": "看书和去旅游都是我的爱好。",
        "pinyin": "Kànshū hé qù lǚyóu dōu shì wǒ de àihào.",
        "vi": "Đọc sách và đidu lịchđều làsở thíchcủa tôi."
      },
      {
        "zh": "聪明和漂亮哪个更重要？",
        "pinyin": "Cōngmíng hé piàoliang nǎge gèng zhòngyào?",
        "vi": "Thông minh và xinh đẹp, điều gì quan trọng hơn?"
      },
      {
        "zh": "今天和明天都可以吗 ？",
        "pinyin": "Jīntiānhé míngtiān dōu kěyǐ ma?",
        "vi": "Hôm nay và ngày mai cả haicó ổn không?"
      }
    ]
  },
  {
    "id": "gram_hsk1_06",
    "level": "HSK1",
    "title": "Ngữ pháp 6: ĐƯA RA LỰA CHỌN VỚI “还是”",
    "category": "gioi-tu-lien-tu",
    "structure": "Phương án A + 还是 + Phương án B?",
    "meaning": "Đặt câu hỏi,đưa ra giảipháp thay thế,phương án lựa chọn",
    "usage": "还是 (háishì)được sử dụng trong tiếng Trung để cung cấp các lựa chọn trong một câu\nhỏi.Điều này tương đương với một trong những cách sử dụng từ 'hoặc','hay'trong\ntiếngViệt.\nCấu trúc: Phương án A + 还是 + Phương án B?\nKhibạn hỏi một câu hỏi theo mẫu này, có hai cách bạn dự kiến sẽtrảlời:Phương án A\nhoặc Phương án B. Không phải là không có câu trảlờinào khác, nhưng thường là khi\nmột người hỏibạn theo cách này, người hỏi mong bạn chỉ chọn một.\nVídụ: nếu được hỏinếu bạn thích uống cà phê hoặc trà,hầu hết mọi người sẽ chọn cái\nnày hoặc cái kia,không yêu cầu cả hai.\nTuy nhiên bạn hoàn toàn có thể lựa chọn cả hai.Ví dụ: khiđược hỏi bạn yêu bố hay mẹ\nhơn? Bạn hoàn toàn có thể trảlời:tôiyêu cả hai người họ.\nCấu trúc: Chủ ngữ + Động từ+ Tùy chọn A + 还是 + Tùy chọn B?",
    "notes": [
      "还是 (háishì)hầu hết dùng trongcâu hỏi.",
      "Tuy nhiên vẫn có một ngoại lệcủa 还是 (háishì),đó làdùng trongcâu trần thuật,\n 还是 (háishì)đứng sau chủ ngữ và trước động từ để nhấn mạnh động từ đó."
    ],
    "examples": [
      {
        "zh": "一个还是两个？",
        "pinyin": "Yī gè háishì liǎnggè?",
        "vi": "Một cáihay hai cái?"
      },
      {
        "zh": "他是美国人还是英国人？",
        "pinyin": "Tā shìMěiguó rén háishìYīngguó rén?",
        "vi": "Anh ấy làngười Mỹ hay người Anh?"
      },
      {
        "zh": "你要喝茶还是咖啡？",
        "pinyin": "Nǐ yào hē chá háishì kāfēi?",
        "vi": "Bạn có muốn uống trà hoặc cà phê?"
      },
      {
        "zh": "我还是吃越南菜吧。",
        "pinyin": "Wǒ háishì chīyuènán càiba.",
        "vi": "Tôi vẫn ăn đồ ăn Việt Nam vậy."
      },
      {
        "zh": "老师都叫他好几次了，他还是不来。",
        "pinyin": "Lǎoshī dōu jiàotāhǎojǐ cìle,tāháishìbù lái.",
        "vi": "Giáo viêngọi anh tanhiều lần và anh ta vẫn không đến."
      }
    ]
  },
  {
    "id": "gram_hsk1_07",
    "level": "HSK1",
    "title": "Ngữ pháp 7: TUỔI VỚI “岁”",
    "category": "so-tu",
    "structure": "Chủ ngữ + Số + 岁",
    "meaning": "Giớithiệu người, mô tả người",
    "usage": "Sử dụng 岁 (suì)để nói về tuổi của một người, tương tự như cách chúng tanói 'tuổi'\ntrongtiếng Việt.\nCấu trúc để nói tuổicủa aiđó với 岁 (suì)là:\nCấu trúc:Chủ ngữ + Số + 岁",
    "notes": [
      "Không cần sử dụng bấtkỳ động từ nào khi bạn sử dụng câu với 岁 (suì).",
      "Không cần sử dụng động từ 是 (shì)hoặc lượng từ như 个 (gè) trong câu với 岁\n (suì).",
      "Từ 'rưỡi'trong tiếng Trung là 半 (bàn) và bạn chỉ cần thêm từ này sau 岁 (suì)\n nếu như bạn muốn nói 'x tuổirưỡi'."
    ],
    "examples": [
      {
        "zh": "我儿子一岁。",
        "pinyin": "Wǒ érziyī suì.",
        "vi": "Con traitôimột tuổi."
      },
      {
        "zh": "我妈妈今年45岁。",
        "pinyin": "Wǒ māma jīnniánsìshíwǔ suì.",
        "vi": "Năm nay mẹ tôi 45 tuổi."
      },
      {
        "zh": "她两岁半。",
        "pinyin": "Tā liǎng suìbàn.",
        "vi": "Nó hai tuổirưỡi."
      }
    ]
  },
  {
    "id": "gram_hsk1_08",
    "level": "HSK1",
    "title": "Ngữ pháp 8: LƯỢNG TỪ “个”",
    "category": "luong-tu",
    "structure": "Số + 个/lượng từ + Danh từ",
    "meaning": "Thể hiện số lượng",
    "usage": "个 (gè) làtừ lượng từ được sử dụng phổ biến nhất.Nó có thể được sử dụng cho bất kỳ\ndanh từ nào nếu bạn không thể nghĩ ramột lượng từ chính xác hơn. Ngoài ra, đốivới\nnhiều danh từ, 个 (gè)là lượng từ chính xác duy nhất.\nCấu trúc chung cho 个 (gè)và các lượng từ nóichung là:\nCấu trúc: Số + 个/lượng từ + Danh từ",
    "notes": [
      "Bất cứ khinào bạn muốn nói có bao nhiêu thứ gìđó (danh từ)trong tiếng Trung,\n bạn đều cần một lượng từđứng trước để bổ trợcho cho danh từ đó. Trước tiên\n hãy làm quen với cách sử dụng với 个 (gè).\n Động từ+ 个 + Danh từ",
      "Nếu số lượng làmột (1),bạn có thể bỏ qua số từvà chỉ sử dụng 个 (gè)như một\n thểrút gọn của 一个（yí gè)."
    ],
    "examples": [
      {
        "zh": "一 个人",
        "pinyin": "yīgè rén",
        "vi": "một người"
      },
      {
        "zh": "三个苹果手机",
        "pinyin": "sān gè Píngguǒ shǒujī",
        "vi": "ba chiếc iPhone"
      },
      {
        "zh": "五个星期",
        "pinyin": "wǔ gè xīngqī",
        "vi": "Năm tuần"
      }
    ]
  },
  {
    "id": "gram_hsk1_09",
    "level": "HSK1",
    "title": "Ngữ pháp 9: CÁCH NÓI NGÀY, THÁNG, NĂM",
    "category": "thoi-gian",
    "structure": "x 年 + y 月 + z 日",
    "meaning": "Thể hiện thờigian và ngày",
    "usage": "Ngày tháng trong tiếng Trung sắp xếp theo thứ tự 'năm, tháng, ngày.' Điều này phù hợp\nvớixu hướng 'từlớn tới nhỏ'bao trùm trên nhiều khía cạnh của văn hóa Trung Quốc.\nThời gian được sắp xếp từ đơn vị lớn nhất đến nhỏ nhất: năm, tháng, ngày.\nCấu trúc:x 年 + y 月 + z 日\nVậy ngày 1 tháng 4 năm 2019 là2019年4月1日 (èr-líng-yī-jiǔniánsìyuè yīrì).",
    "notes": [
      "号 (hào) thường được sử dụng trong giao tiếpbằng khẩu ngữ ,còn 日 ( rì)phổ\n biến hơn trong tiếng Trung viết.\n Cấu trúc: x年 + y 月 + z 号\n Ví dụ trêntrở thành: 2019年4月1号 (èr-líng-yī-jiǔniánsìyuè yīhào).",
      "Trong câu, trạng từ chỉ thờigian (ngày, tháng, năm) có thể đứng trước hoặc sau\n chủ ngữ, nhưng luôn đứng trước vị ngữ."
    ],
    "examples": [
      {
        "zh": "1868年1月18号",
        "pinyin": "Yī-bā-liù-bānián Yī yuè shíbā hào",
        "vi": "Ngày 18 tháng 1 năm 1868"
      },
      {
        "zh": "10月1号我们去上海。",
        "pinyin": "Shí yuè yī hào wǒmen qù Shànghǎi.",
        "vi": "Chúng tôisẽ đến Thượng Hải vào ngày 1 tháng 10."
      },
      {
        "zh": "我1990年7月出生。",
        "pinyin": "Wǒ Yī-jiǔ-jiǔ-língniánQīyuè chūshēng.",
        "vi": "Tôi sinhvào tháng 7 năm 1990."
      }
    ]
  },
  {
    "id": "gram_hsk1_10",
    "level": "HSK1",
    "title": "Ngữ pháp 10: CÁCH NÓI CÁC NGÀY TRONG TUẦN",
    "category": "thoi-gian",
    "structure": "CÁCH NÓI CÁC NGÀY TRONG TUẦN",
    "meaning": "Thể hiện thời gian và ngày",
    "usage": "星期 (xīngqī)có nghĩa là'tuần'trong tiếng Trung. Đôi khi bạn cũng thấy người Trung\ndùng 周（zhōu）, từ này cũng có nghĩa là tuần nhưng ngắn gọn hơn.\nCác ngày trong tuần bằng tiếngTrung được hình thành bởi từ 'tuần'theo sau là một số,\nbắtđầu từ số 1.Theo đó ta có:\n星期一/ 周一（xīngqīyī/zhōuyī)：thứ 2\n星期六/ 周六（xīngqíliù/zhōuliù): thứ 7",
    "notes": [
      "Chủ nhật làngoại lệduy nhất. Thay vìmột số, 天 (tiān)hoặc 日(rì) được sử dụng.\n 星期天/ 星期日 (Xīngqítiān/xīngqírì):Chủ nhật",
      "周日（Zhōu rì）cũng có nghĩa làchủ nhật, nhưng chú ý là không có từ周天. Bên\n cạnh đó tacòn có từ周末（zhōumò) nghĩa là cuối tuần.",
      "Một ý nghĩa khác của hệ thống này mà bạn có thể nhận thấy: 'đầu tuần' trong\n tiếngViệt làThứ hai. Nhưng trong văn hóa Trung Quốc, ngày đầu tuần là\"thứ\n một\" theo nghĩa đen của từ\"星期一\", chứ không phải Chủ nhật.",
      "Ngoài ra tiếng Trung còn có từ khác cho 'tuần'là礼拜 (lǐbài)."
    ],
    "examples": [
      {
        "zh": "今天是星期一吗？",
        "pinyin": "Jīntiānshì Xīngqīyī ma?",
        "vi": "Hôm nay làthứ hai phải không?"
      },
      {
        "zh": "你星期天要做什么？",
        "pinyin": "Nǐ Xīngqītiān yào zuò shénme?",
        "vi": "Bạn làm gìvào ngày Chủ nhật?"
      },
      {
        "zh": "上个星期五我跟他见面了。",
        "pinyin": "Shàng gè Xīngqīwǔwǒ gēn tā jiànmiàn le.",
        "vi": "Tôi đã gặp anh ấy vào thứ Sáu tuần trước."
      }
    ]
  },
  {
    "id": "gram_hsk1_11",
    "level": "HSK1",
    "title": "Ngữ pháp 11: CÁCH VIẾT CỦA SỐ",
    "category": "so-tu",
    "structure": "CÁCH VIẾT CỦA SỐ",
    "meaning": "",
    "usage": "Trung Quốc xử lýcác con số một cách rất nhất quán và hợp lý.Khi bạn đã thành thạo,\nbạn sẽ biếtcách đọc bất kỳ số nào bằng tiếng Trung.\n ● Giống như trong tiếng Anh, số điện thoại trong tiếng Trung được đọc và viếtdưới\n dạng một chuỗi các số riêng lẻ,sử dụng các chữ số 0-9. Khác biệtduy nhất là số\n 1 được phát âm là 'yāo' thay vì'yī'để tránh nhầm lẫnvới số 7, được phát âm là\n 'qī.'\n ● Số hai chữ số cũng được xử lý rấtlogic. Chúng được hình thành bởi 十 (shí)\n theo sau là một chữ số 一 (yī)đến 九 (jiǔ).Vậy 11 là十一 (shíyī),12 là 十二\n (shí'èr),13 là十 (shísān), và cứ thế đến mười chín, đó là 十九 (shíjiǔ).\n 十 + x\n ● Tương tự 20 là二十 (èrshí),30 là三十 (sānshí), v.v.Các số hàng đơn vịchỉ đơn\n giản làđược thêm vào cuối. Vậy 21 là二十一 (èrshí-yī),34 là三十 四 (sānshí-sì)\n và 99 là九十九 (jiǔshí-jiǔ).Tất cả đều rấtlogic và nhất quán.\n x + 十\n x + 十 + y\n ● 100 chỉ đơn giản là 一百 (yībǎi),như trong tiếng Anh. Vì vậy, bây giờ bạn đã biết\n làm thế nào để đếm từ 1 đến 100 bằng tiếng Trung Quốc.",
    "notes": [
      "Khi có '0'ở giữa một số, bạn đọc nó là 零 (líng)và không đặt một đơn vị(như\n 'mươi' hoặc 'trăm')sau số đó. Ví dụ 101 là 一百零一（Yībǎi líng yī).\n x + 百 + 零 + y",
      "Đối với các số lớn hơn 100, nếu số kết thúc bằng 0 (110, 230, 370, 450, etc.),ví\n dụ 150 có thể được đọc là 一百五十 (yībǎi wǔshí), hoặc thường được đọc là 一百\n 五 (yībǎi wǔ).\n Trên thực tế, đọc là一百五 (yībǎi wǔ) luôn có nghĩa là150, không bao giờ 105.\n Vì như được mô tả ở trên, 105 sẽ được đọc là一百零五 (yībǎilíng wǔ).",
      "Ngoài ra, đôi khi số '200' được đọc là二百 (èrbǎi),cũng có thể được đọc là 两百\n (liǎngbǎi). Cả hai cách đều đúng.\n x + 百 + y + 十 + z",
      "千 (qiān) có nghĩa là 'nghìn'trong tiếng Trung. Quy tắcsử dụng của nó tương tự\n như quy tắc cho 'trăm.'Chỉ cần lưu ý rằng cho dù có bao nhiêu số 0 ở giữa số,\n bạn chỉcần nói 零 (líng) một lần. Ví dụ 1006 đọc là 一千零六(Yīqiān líng liù)."
    ],
    "examples": [
      {
        "zh": "120",
        "pinyin": "yāo èr líng",
        "vi": "số phòng"
      },
      {
        "zh": "119",
        "pinyin": "yāo yāo jiǔ",
        "vi": "số điện thoại"
      },
      {
        "zh": "13501200120",
        "pinyin": "yāo sān wǔ língyāo èrlíng língyāo èrlíng",
        "vi": "số điện thoại"
      }
    ]
  },
  {
    "id": "gram_hsk1_12",
    "level": "HSK1",
    "title": "Ngữ pháp 12: CẤU TRÚC CỦA THỜI GIAN (CƠ",
    "category": "thoi-gian",
    "structure": "上午/下午 + x点 + y分 + z秒",
    "meaning": "Thể hiện thời gian và ngày",
    "usage": "Thời gian bằng tiếng Trung, được thể hiện bằng cách nêu giờ đầu tiên,và sau đó là\nphút và cuối cùng làgiây. Đúng như quy tắc 'từ lớn tớinhỏ' như trong nói ngày, tháng,\nnăm. Ta có 点(diǎn) làgiờ, 分钟（fēnzhōng) là phút,秒（miǎo) làgiây.\nThời gian trong ngày bằng tiếng Trung được hình thành với số từ 1 đến 12 (一 (yī)đến\n十二 (shí'èr))theo sau là 点 (diăn).点 (diăn) này tương đương với 'giờ'trong tiếng Việt.\nNgười Trung Quốc thường sử dụng đồng hồ mười hai giờ, kèm theo đó 上午 (shàngwŭ)\nlàbuổi sáng và 下午 (xiàwŭ) làbuổi chiều đặt đằng trước thời gian.\nCấu trúc: 上午/下午 + x点 + y分 + z秒\nĐôi khi,mọi người sử dụng 点钟 (diǎnzhōng) thay vìchỉ 点 (diǎn),cả hai từ này có nghĩa\nnhư nhau.\nNếu bạn muốn nóithời gian cụ thể hơn, hãy bắt đầu với ngày, theo sau là buổi,và thời\ngian đồng hồ chính xác cuối cùng.\nCấu trúc:a年 + b月 + c号 +上午/下午 + x点 + y分 + z秒",
    "notes": [
      "Hai giờ là两点 (liǎngdiǎn), không dùng 二点 (èrdiǎn). Tuy nhiên 'Mười hai giờ',\n vẫn là 十二点 (shí'èrdiǎn), chứ không phải là 十两点(shí liǎng diǎn).",
      "Ta đã biết 'nửa'hay 'rưỡi'là半 (bàn), cách nói'x giờ rưỡi'đó là thêm 半 (bàn) ở\n sau 点.\n x 点 + 半"
    ],
    "examples": [
      {
        "zh": "上午七点",
        "pinyin": "shàngwǔ qīdiǎn",
        "vi": "7 giờ sáng"
      },
      {
        "zh": "五点 半",
        "pinyin": "wǔ diǎn bàn",
        "vi": "5:30"
      },
      {
        "zh": "星期天上午十点半",
        "pinyin": "Xīngqītiān shàngwǔ shí diǎn bàn",
        "vi": "10:30 sáng Chủ nhật"
      },
      {
        "zh": "今天下午四点半",
        "pinyin": "jīntiānxiàwǔ sì diǎn bàn",
        "vi": "4:30 chiều nay."
      }
    ]
  },
  {
    "id": "gram_hsk1_13",
    "level": "HSK1",
    "title": "Ngữ pháp 13: THỂ HIỆN SỰ SỞ HỮU CHẶT CHẼ",
    "category": "so-huu",
    "structure": "Đại từ + Danh từ",
    "meaning": "Biểuthịquan hệ sở hữu, hạn định",
    "usage": "Thể hiệnsự sở hữu bằng tiếngTrung được thực hiệnvới 的 (de).Nhưng đôikhicó một\nsốmối quan hệ (đặcbiệtgần gũi) nhấtđịnh,việc bỏ 的 (de) sẽ giúpcụm từtự nhiên và\nngắn gọn hơn.\nCấu trúc:Đại từ + Danh từ",
    "notes": [
      "Tacó thể lược bỏ 的 (de) trongnhững trường hợp danh từ đisau đại từlà từchỉ: thành\nviêntronggia đình,bạn bè thầy cô ở trường lớp,đồng nghiệp trong công ty,hoặc bộ\nphận cơ thể,.....\nTrong những trường hợp này,的 (de)có thể được lược bỏ."
    ],
    "examples": [
      {
        "zh": "你哥哥很高。",
        "pinyin": "Nǐ gēge hěn gāo.",
        "vi": "Anh traicủabạn rấtcao."
      },
      {
        "zh": "我们学校很大。",
        "pinyin": "Wǒmen xuéxiào hěn dà.",
        "vi": "Trường chúng tôilớn."
      },
      {
        "zh": "他爸爸是我们公司的老板。",
        "pinyin": "Tā bàba shìwǒmen gōngsī de lǎobǎn.",
        "vi": "Cha của anh ấy làông chủ của công tychúng tôi."
      }
    ]
  },
  {
    "id": "gram_hsk1_14",
    "level": "HSK1",
    "title": "Ngữ pháp 14: THỂ HIỆN SỰ SỞ HỮU VỚI “的”",
    "category": "so-huu",
    "structure": "Định ngữ + 的 + Trung tâm ngữ",
    "meaning": "Biểu thịquan hệ sở hữu, hạn định",
    "usage": "Trong tiếng Trung, “的” là trợ từkết cấu nối định ngữ và trung tâm ngữ để tạo thành cụm\ndanh từ.\nCấu trúc: Định ngữ + 的 + Trung tâm ngữ.\nTrong đó:\n ● Định ngữ: là thành phần bổ sung ýnghĩa cho danh từ,biểu thị tínhchất, trạng\n thái,sở hữu của người hoặc vật. Định ngữ có thể là danh từ,tính từ, đạitừ hoặc\n cụm chủ -vị.\n ● Trung tâm ngữ: Từ được định ngữ bổ sung ýnghĩa. Là đối tượng chính được\n nhắc đến trong cụm danh từ,thường đứng phía sau.",
    "notes": [
      "Khi danh từ hoặc đại từ làm định ngữ biểu thịquan hệ hạn chế, hoặc sở hữu thì\n phải thêm '的'\n Định ngữ biểu thịquan hệ sở hữu, hạn định:\n Cấu trúc: A + 的 + B\n Ta có thể dịch đơn giản ratiếng Việt là'B của A'.",
      "Khi trung tâm ngữ làđối tượng đã được nhắc đến ở phía trước, hoặc là đối\n tượng mà cả người nói và người nghe đều ngầm hiểu là gì,thìtrung tâm ngữ có\n thể được rút gọn.\n Cấu trúc: A + 的 + B ( đầy đủ) /A + 的 (rút gọn B)"
    ],
    "examples": [
      {
        "zh": "我的爸爸是医生。",
        "pinyin": "Wǒ de bàba shì yīshēng.",
        "vi": "Bố của tôi là bác sĩ."
      },
      {
        "zh": "这是我的书。",
        "pinyin": "Zhè shì wǒ de shū.",
        "vi": "Đây là sách của tôi."
      },
      {
        "zh": "他的名字叫王兰。",
        "pinyin": "Tā de míngzi jiào Wáng Lán.",
        "vi": "Tên của anh ấy là Vương Lan."
      }
    ]
  },
  {
    "id": "gram_hsk1_15",
    "level": "HSK1",
    "title": "Ngữ pháp 15: CÂU HỎI VỚI “呢”",
    "category": "cau-hoi-phu-dinh",
    "structure": "Chủ ngữ + 呢",
    "meaning": "Hỏi như thế nào, câu hỏitỉnh lược",
    "usage": "Câu hỏi tỉnhlược với \"呢\" có 2 cách dùng:\n ● Trong trường hợp không có ngữ cảnh cụ thể, câu văn trước và sau thể hiện\n những nội dung không liênquan, thìcâu hỏivới \"呢\" dùng để hỏi vịtrí,địađiểm.\n ● Trong trường hợp câu văn trước và sau có đề cập nội dung liên quan, ngữ nghĩa\n của câu hỏi với \"呢\" phụ thuộc vào câu trước và sau đó. Thông thường 呢 (ne) có\n thể được sử dụng để đặt câu hỏi đối ứng. 呢 (ne) cũng có thểđược sử dụng để\n tạo thành các câu hỏiđơn giản hỏi 'thếcòn...?'hoặc 'làm thếnào về...?'\n Cấu trúc: Chủ ngữ + 呢\n\n3.Ví dụ\n\n ● VD1: 我的车呢？\n\n Wǒ de chē ne?\n\n Xe của tôiđâu?\n\n ● VD2: A:你好吗？\n\n Nǐ hǎo ma?\n Bạn có khoẻ không?\n\n B: 我很好。你呢？\n\n Wǒ hěn hǎo. Nǐ ne?\n\n Tôikhoẻ. Còn bạn?\n\n ● VD3: 这个很好， 那个呢？\n\n Zhège hěn hǎo, nàge ne?\n\n Cái này tốt.Còn cái đó thìsao?\n\n ● VD4: 今天晚上没空？ 明天晚上呢？\n\n Jīntiānwǎnshang méi kòng? Míngtiān wǎnshang ne?\n\n Bạn không có thờigian tốinay? Tối mai thìsao?",
    "notes": [],
    "examples": []
  },
  {
    "id": "gram_hsk1_16",
    "level": "HSK1",
    "title": "Ngữ pháp 16: GỢI Ý VỚI “吧”",
    "category": "tro-tu",
    "structure": "(Chủ ngữ)+ Động từ + 吧",
    "meaning": "Thể hiện tháiđộ, yêu cầu, gợi ý",
    "usage": "Trợ từngữ khí 吧 (ba)có một số cách sử dụng khác nhau. Ở đây chúng ta sẽ nóivề\ncách đơn giản nhất để sử dụng 吧 (ba).吧 (ba) đặt cuốicâu hay cuối phân câu, biểu thị\nngữ khí:suy đoán, nghi vấn, thương lượng, hốithúc, yêu cầu, xác nhận, cầu mong,.....\nTa có thểdựa vào nội dung câu để dịch thành tiếngViệt với nghĩa phù hợp như 'thôi;đi;\nnào; nhé; hãy,…'\nCấu trúc: (Chủ ngữ)+ Động từ + 吧\n\n3.Ví dụ\n\n ● VD1: 我们走吧。\n\n Wǒmen zǒu ba.\n\n Chúng tađi thôi.\n\n ● VD2: 你说吧。\n Nǐ shuō ba.\n\n Bạn nóiđi.\n\n ● VD3: 新工厂早已开工了吧？\n\n Xīn gōng chǎng zǎo yǐkāi gong leba?\n\n Nhà máy mới đã hoạt động lâu rồiphải không?\n\n ● VD4: 老板 ，便宜 一点吧。\n\n Lǎobǎn, piányiyīdiǎn ba.\n\n Ông chủ, giảm giá chút đi.",
    "notes": [],
    "examples": []
  },
  {
    "id": "gram_hsk1_17",
    "level": "HSK1",
    "title": "Ngữ pháp 17: THỂ HIỆN SỰ TỒN TẠI Ở MỘT NƠI",
    "category": "gioi-tu-lien-tu",
    "structure": "THỂ HIỆN SỰ TỒN TẠI Ở MỘT NƠI",
    "meaning": "Thể hiện sự tồntại,thể hiện vịtrí,chỉra điều kiện",
    "usage": "Giớitừ 在 (zài)cộng thêm từ chỉđịa điểm tạo thành trạng ngữ chỉnơi chốn.\nChủ ngữ + 在 + Địa điểm + vịngữ\n在 (zài) có thểđược dịch sang tiếng Việtlà \"ở\", tuy nhiên từ này biểu thịsự tồn tạicủa\nchủ thể tạimột vị trínào đó, không nên nhầm lẫnvới động từ \"ở\" có nghĩa làsinh sống\ntrongtiếng Việt.",
    "notes": [
      "Đây là một cấu trúcđơn giản,chỉ có một lưu ýđó làvịtrícủa trạngngữ chỉ nơi chốn, 在\n(zài)luôn được đặt sau chủ ngữ và trước động từ. Vì sự khác nhau trong thói quen sử\ndụng ngôn ngữ, rất nhiều người mắc lỗiđặt 在 (zài)sau động từ."
    ],
    "examples": [
      {
        "zh": "他们在英国。",
        "pinyin": "Tāmen zàiYīngguó.",
        "vi": "Họ đang ở Anh."
      },
      {
        "zh": "他不在学校。",
        "pinyin": "Tā bù zài xuéxiào.",
        "vi": "Anh ấy không ở trường."
      },
      {
        "zh": "她现在在家吗？",
        "pinyin": "Tā xiànzài zàijiāma？",
        "vi": "Bây giờcô ấy có ở nhà không?"
      }
    ]
  },
  {
    "id": "gram_hsk1_18",
    "level": "HSK1",
    "title": "Ngữ pháp 18: THỂ HIỆN SỰ TỒN TẠI VỚI “有”",
    "category": "dong-tu",
    "structure": "Địa điểm + 有 + Tân ngữ",
    "meaning": "Thể hiện sự tồntại,chỉra điều kiện,mô tả địađiểm",
    "usage": "Động từ 有 (yǒu),có nghĩa là'có'cũng có thể được sử dụng để diễn tảsự tồn tại.\nCấu trúc: Địa điểm + 有 + Tân ngữ\nCấu trúcnày có thể dùng để thể hiện:\n ● Hiện có (= tồn tại)ai/cáigì\n ● Dùng kê khai (liệtkê)xem có ai/cáigì\n\n3.Ví dụ\n\n ● VD1: 我家有很多小狗。\n\n Wǒ jiāyǒu hěn duō xiǎogǒu.\n\n Có rấtnhiều chó con trong nhà của tôi.\n\n ● VD2: 这里有一个问题。\n\n Zhèlǐ yǒu yīgè wèntí.\n\n Có một vấn đề ở đây.\n\n ● VD3: 我的手机里有你的号码。\n Wǒ de shǒujīlǐyǒu nǐde hàomǎ.\n\n Tôicó số điện thoại của bạn rồi.\n\n ● VD4: 操场上有打球癿，有跑步癿，有练太极拳癿。\n\n Cāochǎng shàng yǒu dǎqiú qié, yǒu pǎobù qié,yǒu liàntàijíquánqié.\n\n Ở sân vận động có người đánh banh, có người chạy bộ,có người tập Thái cực\n quyền.",
    "notes": [],
    "examples": []
  },
  {
    "id": "gram_hsk1_19",
    "level": "HSK1",
    "title": "Ngữ pháp 19: THỂ HIỆN SỰ SỞ HỮU VỚI “有”",
    "category": "dong-tu",
    "structure": "Chủ ngữ + 有 + Tân ngữ",
    "meaning": "Thể hiện sự sở hữu",
    "usage": "有 (yǒu) có thể được sử dụng theo nhiều cách khác nhau, nhưng ý nghĩa cơ bản nhất\ncủa động từ này bạn cần biếtlà 'có'\nCấu trúc: Chủ ngữ + 有 + Tân ngữ\nCấu trúc này có thể dùng để thể hiện:\n ● Aicó cái gì(sự sở hữu)\n ● Cái gìgồm có bao nhiêu\nĐộng từ 有 (yǒu) bịphủ địnhtheo cách đặc biệt.Không giống như hầu hết các động từ\nkhác,nó bịphủ định với 没 (méi)thay vì 不 (bù). Để biếtthêm về chủ đề này, hãy xem\nphần phủ định '不 'với'没'.\n\n3.Ví dụ\n\n ● VD1: 我有钱。\n\n Wǒ yǒu qián.\n\n Tôicó tiền.\n\n ● VD2: 她没有车。\n\n Tā méiyǒu chē.\n\n Cô ấy không có xe hơi.\n ● VD3: 他有女朋友吗？\n\n Tā yǒu nǚpéngyou ma?\n\n Anh ấy có bạn gáichưa?",
    "notes": [],
    "examples": [
      {
        "zh": "我家有四口人。",
        "pinyin": "Wǒ jiā yǒu sì kǒu rén.",
        "vi": "Nhà tôi có 4 người."
      },
      {
        "zh": "我有两个弟弟。",
        "pinyin": "Wǒ yǒu liǎng gè dìdi.",
        "vi": "Tôi có hai người em trai."
      },
      {
        "zh": "你有中国朋友吗？",
        "pinyin": "Nǐ yǒu Zhōngguó péngyou ma?",
        "vi": "Bạn có bạn Trung Quốc không?"
      }
    ]
  },
  {
    "id": "gram_hsk1_20",
    "level": "HSK1",
    "title": "Ngữ pháp 20: SỬ DỤNG ĐỘNG TỪ “叫”",
    "category": "dong-tu",
    "structure": "Chủ ngữ + 叫 + [Tên]",
    "meaning": "Giớithiệu người",
    "usage": "Động từ叫 (jiào)được sử dụng để chỉra aiđó hoặc cái gìđó được gọi, hoặc tên của ai\nđó hoặc cái gìđó là gì.Cách sử dụng của nó có vẻ hơi lạđối với người mới bắt đầu, vì\nvậy nó có điểm ngữ pháp riêng.\n ● Động từ叫 (jiào)có nghĩa là cả 'đểgọi'hoặc 'được gọi.'Ta có thể tìm hiểucấu\n trúcđơn giản sau:\n Cấu trúc: Chủ ngữ + 叫 + [Tên]\n Cấu trúc này có thể được dịch là'Ai/cáigì'tên/gọi (làgì)'.\n ● Bạn cũng có thể hỏimột người/ vật tênhoặc cách gọi với 叫 (jiào):\n Cấu trúc: Chủ ngữ + 叫 + 什么（Shénme）？\n\n3.Ví dụ\n\n ● VD1: 他叫李小龙。\n\n Tā jiàoLǐXiǎolóng.\n\n Tên anh ấy làLý Tiểu Long.\n\n ● VD2: 那个叫什么？\n\n Nàge jiàoshénme?\n\n Cái đó gọilà gì?\n\n ● VD3: 这个地方叫外滩。\n\n Zhège dìfang jiàoWàitān.\n Nơi này được gọi làBến Thượng Hải.",
    "notes": [],
    "examples": [
      {
        "zh": "你叫什么名字？",
        "pinyin": "Nǐ jiào shénme míngzi?",
        "vi": "Bạn tên là gì?"
      },
      {
        "zh": "我叫李文。",
        "pinyin": "Wǒ jiào Lǐ Wén.",
        "vi": "Tôi tên là Lý Văn."
      },
      {
        "zh": "他叫什么？",
        "pinyin": "Tā jiào shénme?",
        "vi": "Anh ấy tên là gì?"
      },
      {
        "zh": "她叫王兰。",
        "pinyin": "Tā jiào Wáng Lán.",
        "vi": "Cô ấy tên là Vương Lan."
      }
    ]
  },
  {
    "id": "gram_hsk1_21",
    "level": "HSK1",
    "title": "Ngữ pháp 21: SỬ DỤNG ĐỘNG TỪ “去”",
    "category": "dong-tu",
    "structure": "Chủ ngữ + 去 + Địa điểm /hành động",
    "meaning": "Thể hiện hành động, xu hướng",
    "usage": "Bạn có thể sử dụng động từ去 (qù) bất cứ khinào chỉcần theo sau nó là một từ chỉnơi\nchốn, hoặc hành động.\nĐộng từ去 (qù) có nghĩa là 'đi',vàlàmột cách dễ dàng để nóivề việc điđến các địa\nđiểm hoặc mục đích .\nCấu trúc: Chủ ngữ + 去 + Địa điểm /hành động",
    "notes": [
      ":",
      "Không cần một từ để diễn đạt 'đến.'Cấu trúcnày được dịchlà 'điđâu đó'hoặc '\n đilàm gì đó'.",
      "Bạn cũng có thể sử dụng 去 (qù) để đặt câu hỏi. (Lưu ý việcsử dụng các từnghi\n vấn và từ để hỏi)",
      "Bạn không thể chỉsử dụng 去 (qù) khikhông có ngữ cảnh."
    ],
    "examples": [
      {
        "zh": "A: 你去哪儿？",
        "pinyin": "Nǐqù nǎr?",
        "vi": "Bạn đi đâu? B: 我去学校。 Wǒ qù xuéxiào. Tôiđang đi đến trường."
      },
      {
        "zh": "A: 你去我家吗？",
        "pinyin": "Nǐqù wǒ jiāma?",
        "vi": "Bạn có đi đến nhà tôikhông? B: 我去。 Wǒ qù. Tôi có."
      },
      {
        "zh": "我去工作。",
        "pinyin": "Wǒ qù gōngzuò.",
        "vi": "Tôi đang đilàm việc."
      }
    ]
  },
  {
    "id": "gram_hsk1_22",
    "level": "HSK1",
    "title": "Ngữ pháp 22: SỬ DỤNG TỪ “姓”",
    "category": "dong-tu",
    "structure": "Chủ ngữ + 姓 + [Họ]",
    "meaning": "Giới thiệungười",
    "usage": "Danh từ 姓 (xìng)có nghĩa đen là 'họ'.Ban đầu, bạn có thể thấy khó hiểu khicó một\ndanh từ đi liềnsau là một danh từ khác mà không cần động từ,nhưng bạn sẽ thấy rằng\nnó được sử dụng khá thường xuyên trong tiếngTrung. Đây làmột cách nói rútgọn mà\nbạn cũng thấy rấtphổ biến trong tiếngViệt. Ví dụ như :Tôi họ Dương (我姓杨）.\n ● 姓 (xìng)được sử dụng thường xuyên nhất để nói với ai đó họ của bạn ('họ'hoặc\n 'tên')hoặc để hỏi họ của người khác.\n Cấu trúc: Chủ ngữ + 姓 + [Họ]\n ● Bạn cũng có thể sử dụng 姓 (xìng)để hỏi họ trong tên của aiđó.\n Cấu trúc: Chủ ngữ + 姓 + 什么？\n ● Đôi khi bạn cũng sẽ bắt gặp các câu hỏi sau đây:\n Cấu trúc: 请问（Qǐngwèn） + Chủ ngữ + 贵姓（guìxìng）？",
    "notes": [
      ":\n贵姓（guìxìng）và 姓 (xìng) đều có nghĩa làhọ, tuy nhiên 贵姓（guìxìng) là cách nói lịchsự\nhơn và thường được dùng với cấu trúc ở trên,thể hiện sự tôn trọng của người hỏivới\nngười được hỏi.Tuy nhiên từ 贵姓（guìxìng) lạithường không được dùng trong câu trả\nlờicho câu hỏinày, nó thể hiện sự khiêm tốn của người trảlời."
    ],
    "examples": [
      {
        "zh": "那个帅哥姓张。",
        "pinyin": "Nàge shuàigē xìng Zhāng.",
        "vi": "Anh chàng đẹp traiđó Họ Trương."
      },
      {
        "zh": "你姓什么?",
        "pinyin": "Nǐ xìng shénme?",
        "vi": "Bạn họ gì?"
      },
      {
        "zh": "请问您贵姓？",
        "pinyin": "Qǐngwèn nín guìxìng?",
        "vi": "Xin hỏihọ của ông làgì?"
      }
    ]
  },
  {
    "id": "gram_hsk1_23",
    "level": "HSK1",
    "title": "Ngữ pháp 23: THỂ HIỆN DỰ ĐỊNH VỚI “要”",
    "category": "dong-tu",
    "structure": "Chủ ngữ + Thời gian + 要 + Động từ",
    "meaning": "Thể hiện mong muốn, thểhiện quyết tâm, đề cập đến tương lai,đề cập đến những thay\nđổicủa tìnhhuống",
    "usage": "Động từphụ trợ 要 (yào) có một số nghĩa khác nhau. Ở đây chúng ta sẽ tìm hiểu từ 要\n(yào)với nghĩa là'sẽ'.Bạn sẽ sử dụng 要 (yào)khi bạn đang thảo luận về kế hoạch của\nbạn với aiđó.\nÝ tưởng đằng sau việcsử dụng 要 (yào)này làai đó là'lênkế hoạch' hoặc 'sẽ'hoặc\n'chuẩn bịđể' làm điều gì đó. Không phải là họ chỉmuốn, hoặc phải, mà họ hoàn toàn\nmong đợi để làm điều đó, đó làkế hoạch của họ.\nCách sử dụng 要 (yào)này thường bao gồm một từ chỉ thờigian, có thể được đặt trước\nhoặc sau chủ ngữ. Điều này khá logic;nếu bạn đang thảo luận về kế hoạch cho tương\nlai,bạn hoàn toàn có khả năng nóikhi bạn dự định thực hiện việc gì đó vào thời gian\nnào đó.\nCấu trúc:Chủ ngữ + Thời gian + 要 + Động từ\nCấu trúc:Thời gian + Chủ ngữ + 要 + Động từ",
    "notes": [
      ":\nTrạng ngữ chỉthời gian không có yêu cầu bắt buộc và có thể bị khuyết."
    ],
    "examples": [
      {
        "zh": "我明天要买一 个iPhone。",
        "pinyin": "Wǒ míngtiān yào mǎi yīgè iPhone.",
        "vi": "Tôisẽ mua một chiếc iPhone vào ngày mai."
      },
      {
        "zh": "这个星期天你要做什么？",
        "pinyin": "Zhège Xīngqītiān nǐyào zuò shénme?",
        "vi": "Chủ nhật tuần này bạn làm gì?"
      },
      {
        "zh": "下班以后你要回家吗?",
        "pinyin": "Xiàbān yǐhòu nǐyào huíjiāma?",
        "vi": "Tan làm bạn đang sẽ về nhà phải không?"
      }
    ]
  },
  {
    "id": "gram_hsk1_24",
    "level": "HSK1",
    "title": "Ngữ pháp 24: THỂ HIỆN KỸ NĂNG ĐÃ HỌC VỚI",
    "category": "dong-tu",
    "structure": "Chủ ngữ +会 + Động từ + Tân ngữ",
    "meaning": "Khả năng thể hiện",
    "usage": "● Từ 会 (huì)có thể được sử dụng để diễn tảmột khả năng, một kĩnăng đã được\n học được. Trong trường hợp này,会 (huì) làmột động từ phụ trợ.\n Cấu trúc:Chủ ngữ +会 + Động từ + Tân ngữ\n Cấu trúc này là cách dễ nhất để thểhiện tất cả các loạikỹ năng, từ ngôn ngữ,\n thểthao, đến các kỹ năng trong cuộc sống hàng ngày như nấu ăn và lái\n xe,.....màaiđó biết thông qua quá trìnhtìm hiểu, học tập.\n ● Các câu 会 (huì)được phủ định bằng 不 (bù),được chèn vào trước 会 (huì):\n Cấu trúc:Chủ ngữ +不 + 会 + Động từ + Tân ngữ\n Đây là cách đơn giản nhất để thể hiện sự thiếu khả năng hoặc không biết làm\n việcgì đó. Bạn có thể dịch '不会' (bù huì) là 'tôikhông biếtlàm sao để' hoặc 'tôi\n không biết(làm gìđó).",
    "notes": [
      ":",
      "Ngoài ra, do quy tắc thay đổiâm cho '不'(bù), vìtừ '会' (huì)làthanh 4 nên cụm\n từ'不会' (bù huì) được phát âm thành 'bú huì.'",
      "Nếu chúng ta nói我不能说中文 (wǒ bù néng shuō Zhōngwén), người nghe sẽ\n hiểu rằng bạn biếtnói tiếng Trung nhưng không thể nói được vìmột số lý do nào\n đó khác ngoài khả năng của mình."
    ],
    "examples": [
      {
        "zh": "我会写汉字。",
        "pinyin": "Wǒ huìxiě Hànzì.",
        "vi": "Tôicó thể viếtchữ Trung Quốc."
      },
      {
        "zh": "你会做饭吗？",
        "pinyin": "Nǐhuì zuòfàn ma?",
        "vi": "Bạn có biết nấu ăn không?"
      },
      {
        "zh": "我不会说英文。",
        "pinyin": "Wǒ bù huì shuō Yīngwén.",
        "vi": "Tôikhông biếtnói tiếng Anh."
      }
    ]
  },
  {
    "id": "gram_hsk1_25",
    "level": "HSK1",
    "title": "Ngữ pháp 25: THỂ HIỆN KHẢ NĂNG VỚI “能”",
    "category": "dong-tu",
    "structure": "Chủ ngữ + 能 + Động từ + Tân ngữ",
    "meaning": "Thể hiện khả năng, năng lực",
    "usage": "能 (néng) làmột trong một số những từ tiếngTrung thường được dịchlà 'cóthể'.Tuy\nnhiên,能 (néng) thường được sử dụng để nhấn mạnh khả năng của một người hoặc\nkhả năng xảy ramột sự việc nào đó.\n\n ● 能 (néng) chỉra khả năng thực hiện một việc khiđược sử dụng với các hoạt động\n không được học hoặc nghiên cứu một cách có ý thức.\n Cấu trúc để sử dụng 能 (néng) để thể hiện 'cókhả năng' là:\n Cấu trúc:Chủ ngữ + 能 + Động từ + Tân ngữ\n ● Khi được sử dụng vớicác hoạt động được học hoặc nghiên cứu một cách có ý\n thức,能 (néng) thường có nghĩa làhoàn cảnh không cho phép thực hiện hành\n động. Nói cách khác, điều đó là không thể.\n Cấu trúc sử dụng 能 (néng) để thể hiện khả năng hoàn toàn giống nhau:\n Cấu trúc:Chủ ngữ + 能 + Động từ + Tân ngữ\n\nTa có thểthấy, như vậy cấu trúcvới 能 (néng) liênquan đến việc có được sự đồng ý\nhoặc dựa vào sức khỏe, điều kiệnkhách quan để thực hiện hành động hay không. Nếu\nngười nói muốn bày tỏ rằng họ có thể thực hiện một hành động đòi hỏimột kỹ năng\nđược nghiên cứu có ýthức, thì会 (huì)có thể được sử dụng thay thế. Bạn cần phân\nbiệtđược sự khác nhau giữa 能 (néng) và 会 (huì).\n\nBởi vì能 (néng) có thể diễn đạt khả năng, nó cũng thường được sử dụng để tạo thành\ncác câu hỏi lịchsự, giống như 'liệucó thể làm gì đó'.\n\n3.Ví dụ\n\n ● VD1: 他能工作24个小时。\n Tā néng gōngzuò èrshí-sìgè xiǎoshí.\n Anh ấy có thể làm việc 24 giờ.\n ● VD2: 你们能小声一点吗？\n Nǐmen néng xiǎo shēng yīdiǎn ma?\n Các bạn có thể nhỏ tiếngmột chút không?\n ● VD3: 这里不能游泳。\n Zhèlǐbù néng yóuyǒng.\n Bạn không thể bơi ở đây được.",
    "notes": [],
    "examples": []
  },
  {
    "id": "gram_hsk1_26",
    "level": "HSK1",
    "title": "Ngữ pháp 26: THỂ HIỆN SỰ CHO PHÉP VỚI “可以”",
    "category": "dong-tu",
    "structure": "Chủ ngữ + 可以 + Động từ + Tân ngữ",
    "meaning": "Thể hiện khả năng, yêu cầu",
    "usage": "可以 (kěyǐ)làmột trợtừ chủ yếu được sử dụng để thểhiện sự cho phép. Nó thường\nđược dịchlà 'cóthể'.\n ● Chỉ cần đặt 可以 (kěyǐ)trực tiếptrước một động từ để tạo nghĩa của 'cóthể'(làm\n gìđó). Cấu trúc tương tựcũng được dùng một tuyên bố hoặc một câu hỏi.\n Cấu trúc:Chủ ngữ + 可以 + Động từ + Tân ngữ\n Cấu trúc: Chủ ngữ + 可以 +Động từ + Tân ngữ + 吗？\n Sử dụng cấu trúcnày để thể hiện sự cho phép để làm việc gìđó.\n ● 可以 (kěyǐ)được phủ địnhbằng 不 (bù),được chèn trước 可以 (kěyǐ).\n Cấu trúc: Chủ ngữ + 不 + 可以 + Động từ + Tân ngữ\n ● Ta cũng có thểbắt gặp 可以 trong dạng câu hỏilặp từ:\n Cấu trúc: Chủ ngữ + 可 + 不 + 可以 + Động từ + Tân ngữ?\n Cấu trúcnày có thểđược dịch là'có thể làm (gìđó) hay không?'\n\n3.Ví dụ\n\n ● VD1: 我可以进来吗？\n Wǒ kěyǐ jìnláima?\n Tôi vào được không?\n ● VD2: 二十一岁以后可以喝酒。\n Èrshí-yī suìyǐhòu kěyǐ hējiǔ.\n Sau khibạn đủ 21 tuổi,bạn có thể uống rượu.\n ● VD3: 这里不可以抽烟。\n Zhèlǐ bù kěyǐchōuyān.\n Bạn không thểhút thuốc ở đây.\n ● VD4: 我可不可以借你的书？\n Wǒ kěbù kěyǐjiènǐ de shū?\n Tôi có thể mượn sách của bạn được không?",
    "notes": [],
    "examples": []
  },
  {
    "id": "gram_hsk1_27",
    "level": "HSK1",
    "title": "Ngữ pháp 27: MUỐN LÀM GÌ ĐÓ VỚI “要”",
    "category": "dong-tu",
    "structure": "Chủ ngữ + 要 + Động từ +Tân ngữ",
    "meaning": "Thể hiện mong muốn, thểhiện quyết tâm, đề cập đến tương lai,thể hiệnmục đích",
    "usage": "Động từ phụ trợ 要 (yào)có một số nghĩa khác nhau và ở đây chúng ta sẽ cùng tìm hiều\nnghĩa 'muốn'.Để diễn đạt'muốn làm'một cáigì đó,ta có thể sử dụng 要 (yào) đặttrước\nđộng từ.\nĐộng từ 要 (yào) có thểđược sử dụng như một trợtừ để biểu thịmuốn làm điều gìđó.\nCấu trúc: Chủ ngữ + 要 + Động từ +Tân ngữ",
    "notes": [
      "Thay vì sử dụng 要 (yào), cũng có thểsử dụng từ 想 (xiǎng).Hai từ này phần lớn có thể\nhoán đổi cho nhau và cả hai đều có thể có nghĩa là 'muốn.'Sự khác biệtnhỏ là 要 (yào)\nthường được sử dụng cho những hành động đòihỏi phải được hoàn thành, thểhiện sự\nquan trọng và nghĩa vụ, thậm chícần lênkế hoạch hành động. Còn 想(xiǎng) thìhành\nđộng đó chỉ mang tính chất là“muốn” thôi,không làm cũng không sao."
    ],
    "examples": [
      {
        "zh": "他要学中文。",
        "pinyin": "Tā yào xué Zhōngwén.",
        "vi": "Anh cần phải học tiếngTrung."
      },
      {
        "zh": "今天很累，我要休息。",
        "pinyin": "Jīntiānhěn lèi,wǒ yào xiūxi.",
        "vi": "Hôm nay tôirất mệt, tôimuốn nghỉ ngơi."
      },
      {
        "zh": "你要/ 想吃什么？",
        "pinyin": "Nǐyào/ xiǎng chī shénme?",
        "vi": "Bạn muốn ăn gì?"
      }
    ]
  },
  {
    "id": "gram_hsk1_28",
    "level": "HSK1",
    "title": "Ngữ pháp 28: CÁCH LÀM GÌ ĐÓ VỚI “怎么”",
    "category": "cau-hoi-phu-dinh",
    "structure": "Chủ ngữ + 怎么 + Động từ + Tân ngữ?",
    "meaning": "Câu hỏi về cách làm, phương pháp, phương tiện",
    "usage": "● Câu hỏi với từ để hỏi怎么 (zěnme) được sử dụng để hỏi“làm thếnào” bằng\n tiếngTrung. Nó được chèn vào trước động từđang được hỏi về:\n Cấu trúc:Chủ ngữ + 怎么 + Động từ + Tân ngữ?\n Lưu ý rằng chủ ngữ thường có thể được lược bỏ trong các câu hỏi 'làmthế nào'\n và không phải luôn luôn có một đốitượng.\n ● Bắt đầu một câu hỏi 'làmsao để'với chủ ngữ ở đầu câu hỏilà rấtphổ biến.\n Cấu trúc:(Chủ ngữ) + 怎么 + Động từ?\n Đối tượng không phải lúcnào cũng nhất thiếtđứng sau động từ.Đôi khinó di\n chuyển lênphía trước của câu hỏi, phíatrước 怎么(zěnme).\n\n3.Ví dụ\n\n ● VD1: 你们怎么学中文？\n Nǐmen zěnme xué Zhōngwén?\n Các bạn học tiếngtrung như thếnào?\n ● VD2: 我不知道怎么跟女孩子说话。\n Wǒ bù zhīdào zěnme gēn nǚháizishuōhuà.\n Tôi không biết nóichuyện vớicác cô gái thếnào.\n ● VD3: 芒果怎么吃？\n Mángguǒ zěnme chī?\n Xoài ăn kiểu gìnhỉ?",
    "notes": [],
    "examples": []
  },
  {
    "id": "gram_hsk1_29",
    "level": "HSK1",
    "title": "Ngữ pháp 29: PHỦ ĐỊNH CÁC HÀNH ĐỘNG TRONG",
    "category": "cau-hoi-phu-dinh",
    "structure": "Chủ ngữ + 没有/没 + Động từ",
    "meaning": "Từ chốivà từ chối,đề cập đến quá khứ",
    "usage": "Sử dụng 没有 (méiyǒu) để phủ địnhcác hành động trong quá khứ (để nói rằng aiđó đã\nkhông làm điều gìđó, hoặc điều gìđó đã không xảy ra).\n\nThông thường các động từ có thể bịphủ định với 不 (bù),nhưng cấu trúc đó được sử\ndụng cho các hành động theo thóiquen hoặc ở hiệntại.Tuy nhiên, nếu động từ nói về\nmột hành động trongquá khứ, thìnên sử dụng 没有 (méiyǒu):\nCấu trúc: Chủ ngữ + 没有/没 + Động từ",
    "notes": [
      "Bạn có thểrútngắn 没有 (méiyǒu) thành 没 (méi)mà không ảnh hưởng đến nội\n dung của câu.",
      "Một điều bạn cần nhớ khi sử dụng 没有 (méiyǒu) là了 (le)thường không được\n sử dụng với没有 (méiyǒu). 了 (le)đánh dấu các hành động đã hoàn thành, trong\n khi没有 (méiyǒu) được sử dụng cho các hành động không xảy ra(vì vậy tất\n nhiên chúng chưa hoàn thành). Đây làmột lỗirất phổ biến đối vớingười mới bắt\n đầu học tiếng Trung.",
      "Tuy nhiên bạn cũng có thể sẽ bắt gặp 没(méi) đi cùng với 了 (le)\n Danh từ 1+ 没(méi) + Danh từ 2 + 了 (le)\n Trong trường hợp này, ta có thể hiểulà 'cáigìđó/ai đó' hết'cáigì đó'rồi.了 (le)\n ở đây không phải làtrợ từ biểuthị hành động sự đã hoàn thành nữa, mà nó đóng\n vaitròlà trợtừ ngữ khí để nhấn mạnh."
    ],
    "examples": [
      {
        "zh": "我没有去上班。",
        "pinyin": "Wǒ méiyǒu qù shàngbān.",
        "vi": "Tôiđã không đi làm."
      },
      {
        "zh": "我没有做。",
        "pinyin": "Wǒ méiyǒu zuò.",
        "vi": "Tôikhông làm việcđó."
      },
      {
        "zh": "你昨天没回家吗？",
        "pinyin": "Nǐzuótiān méi huíjiāma?",
        "vi": "Bạn đã không trở về nhà ngày hôm qua?"
      },
      {
        "zh": "老师今天没生气。",
        "pinyin": "Lǎoshī jīntiānméi shēngqì.",
        "vi": "Hôm nay giáo viên đã không nổi giận."
      },
      {
        "zh": "我手机没电了。",
        "pinyin": "Wǒ shǒujīméi diàn le.",
        "vi": "Điện thoại của tôihết pinrồi."
      },
      {
        "zh": "我没钱了。",
        "pinyin": "Wǒ méi qián le.",
        "vi": "Tôihết tiền rồi."
      }
    ]
  },
  {
    "id": "gram_hsk1_30",
    "level": "HSK1",
    "title": "Ngữ pháp 30: CÁC LỆNH PHỦ ĐỊNH VỚI “不要”",
    "category": "cau-hoi-phu-dinh",
    "structure": "不要 + Động từ",
    "meaning": "Từ chối và từchối, đưa ra mệnh lệnh",
    "usage": "Bạn có thể sử dụng 不要 (bùyào) để ra lệnh cho aiđó: 'không' (làm gìđó). Điều này\ntương tự với lệnh phủ định '别 (bié)'.\nCác lệnh phủ định trong tiếngTrung ('không')được hình thành với 不要. Thông thường\nchủ ngữ được lược bỏ.\nCấu trúc: 不要 + Động từ\n不要 (bùyào) cũng được dùng trong câu trảlời(tuy nhiên không lịchsự) khi bạn muốn\nnóilà'không cần'hoặc 'không muốn' cáigì đó.",
    "notes": [
      "Bính âm cho 不要 được viết'bùyào'nhưng phát âm là 'búyào'do quy tắcthay đổi âm\nđiệu."
    ],
    "examples": [
      {
        "zh": "不要走。",
        "pinyin": "Bùyào zǒu.",
        "vi": "Đừng đi."
      },
      {
        "zh": "你们不要喝酒。",
        "pinyin": "Nǐmen bùyào hējiǔ.",
        "vi": "Các bạn đừng uống rượu."
      },
      {
        "zh": "A: 你还要买这件衣服吗？",
        "pinyin": "Nǐhái yāomǎi zhè jiànyīfúma?",
        "vi": "Bạn còn muốn mua bộ quần áo này không? B: 不要了，谢谢！ Bùyào le,xièxiè! Không cần nữa, cảm ơn!"
      }
    ]
  },
  {
    "id": "gram_hsk1_31",
    "level": "HSK1",
    "title": "Ngữ pháp 31: THỨ TỰ CÂU CƠ BẢN",
    "category": "cau-truc-cau",
    "structure": "Chủ ngữ + Động từ",
    "meaning": "Mẫu câu",
    "usage": "● Một vịngữ đơn giảncó thể chỉ bao gồm một động từ. Cấu trúccơ bản nhất trong\n tiếngTrung là:\n Cấu trúc:Chủ ngữ + Động từ\n Bạn có thể tạo thành những câu rấtđơn giản chỉ với haitừ.\n ● Một vịngữ dài hơn một chút có thểgồm một động từ cộng với một đối tượng làm\n tânngữ. Một câu có cả động từ và đối tượng được hình thành vớicấu trúcnày:\n Cấu trúc:Chủ ngữ + Động từ + Tân ngữ",
    "notes": [
      "Mặc dù có sự tương đồng về trậttự từ được nêu ở trên,mọi thứ sẽ trởnên phức tạp\nhơn khi bạn bắt đầu thêm vào các thành phần câu đơn giản như trạng từ'cũng' 也 (yě),\ntrạngtừ chỉ thờigian hoặc trạngtừ chỉ nơi chốn."
    ],
    "examples": [
      {
        "zh": "我明天在学校学习。",
        "pinyin": "Wǒ míngtiān zài xuéxiào xuéxí.",
        "vi": "Ngày mai tôi học ở trường."
      },
      {
        "zh": "爸爸晚上在家休息。",
        "pinyin": "Bàba wǎnshang zài jiā xiūxi.",
        "vi": "Buổi tối bố ở nhà nghỉ ngơi."
      },
      {
        "zh": "我们今天去商店买东西。",
        "pinyin": "Wǒmen jīntiān qù shāngdiàn mǎi dōngxi.",
        "vi": "Hôm nay chúng tôi đến cửa hàng mua đồ."
      },
      {
        "zh": "你在哪儿吃饭？",
        "pinyin": "Nǐ zài nǎr chīfàn?",
        "vi": "Bạn ăn cơm ở đâu?"
      }
    ]
  },
  {
    "id": "gram_hsk1_32",
    "level": "HSK1",
    "title": "Ngữ pháp 32: KẾT HỢP DANH TỪ VỚI “是’’",
    "category": "cau-truc-cau",
    "structure": "Chủ ngữ + 是 + Danh từ",
    "meaning": "Giới thiệu người, mô tả người, thể hiện sự tồn tại,đề cập đến hiện tại",
    "usage": "Trong tiếng Trung, 是 (shì)là để kết nối các danh từ hoặc cụm từ mang chức năng danh\ntừvà thường không được sử dụng với tínhtừ.\n ● Cấu trúc để kết nối danh từ với 是 (shì) là:\n Cấu trúc: Chủ ngữ + 是 + Danh từ\n Cấu trúc này có thể dịch là 'Chủ ngữ làcái gì đó '.\n Tiếng Trung không chia động từ. Tức làhình thức của động từ luôn giữ nguyên\n cho dù chủ ngữ ngôi số mấy và hành động xảy ra ở thì nào. Trong trường hợp\n này, nó luôn là是 (shì) và không bao giờ thay đổi.\n Chủ ngữ trong cấu trúc trên thường cũng là do một danh từ đảm nhận, ngoài ra\n chủ ngữ cũng có thể làmột đại từ, cụm động từ mang chức năng danh từ,\n ......Bạncó thể sẽ thấy khó hiểu với khái niệm 'cụm động từmang chức năng\n danh từ',vậy đây sẽ là một vídụ để bạn dễ hình dung hơn：听音乐是我的爱好（\n Nghe nhạc là sở thíchcủa tôi).Ở đây 'nghe nhạc' là một cụm động từđóng vai\n trò chủ ngữ, vìvậy cụm động từ mang chức năng danh từ hoàn toàn có thể làvế\n trước của 是 (shì).\n ● Trong tiếng Trung cũng có thể sử dụng cụm từ '是不是 (shì bu shì)?' Nó có thể\n được sử dụng ở đầu hoặc cuối câu. Ý nghĩa của nó là 'đúng không' và 'phải\n không'.\n ● Một cách khác để sử dụng 是 (shì) làsử dụng nó như một câu hỏi.Bạn có thể\n thêm 是吗 (shìma?) vào cuối câu hỏi，có nghĩa tương đương với:'đúng không?'\n Sử dụng câu hỏi này trong câu hỏi thường cho phép người hỏi nhận được câu\n trả lờimang tínhxác nhận.",
    "notes": [
      "Đisau 是 (shì) không thể làmột tính từ. Nếu muốn diễn đạt ý đó, bạn sẽ cần sử dụng\nmột cấu trúckhác với từ liên kết 很 (hěn)."
    ],
    "examples": [
      {
        "zh": "我是学生。",
        "pinyin": "Wǒ shì xuésheng.",
        "vi": "Tôi là học sinh."
      },
      {
        "zh": "他是老师。",
        "pinyin": "Tā shì lǎoshī.",
        "vi": "Thầy ấy là giáo viên."
      },
      {
        "zh": "我是中国人。",
        "pinyin": "Wǒ shì Zhōngguó rén.",
        "vi": "Tôi là người Trung Quốc."
      },
      {
        "zh": "我们是朋友。",
        "pinyin": "Wǒmen shì péngyou.",
        "vi": "Chúng tôi là bạn bè."
      }
    ]
  },
  {
    "id": "gram_hsk1_33",
    "level": "HSK1",
    "title": "Ngữ pháp 33: THỂ HIỆN “QUÁ MỨC” VỚI “太’’",
    "category": "tinh-tu-trang-tu",
    "structure": "太 + Tính từ + 了",
    "meaning": "Thể hiện, nhấn mạnh mức độ",
    "usage": "Trong tiếng Trung, cấu trúcđơn giản nhất để diễn đạt 'quá'theo nghĩa của 'quá mức' là\nsử dụng từ太 (tài).Thêm trợtừ ngữ khí 了 (le)sau tínhtừ không những giúp nhấn\nmạnh ngữ khícủa câu mà còn giúp câu nói thêm tựnhiên, và không bị cụt.\nCấu trúc: 太 + Tính từ + 了\n ● Cấu trúc này có thể diễn tả rằng một cái gìđó thực sự quá mức, hoặc cũng có\n thểdiễn đạt một cách thông thường ýnghĩa của 'nhiều'.\n ● Cấu trúc với 太 (tài)cóthể diễn tảmột lờiphàn nàn, một lờicảm thán hoặc cũng\n có thểlà sự nói giảm nói tránh.",
    "notes": [
      "Lưu ý cho người học nâng cao hơn: 太 (tài)còn có thể được sử dụng với các động từ\nnhư (会 (huì),能 (néng)) cũng như các động từ chỉtâm lý(喜欢 (xǐhuan),想 (xiǎng),爱\n(ài))đểtăng cường độ."
    ],
    "examples": [
      {
        "zh": "现在太晚了。",
        "pinyin": "Xiànzàitàiwǎn le.",
        "vi": "Bây giờ đã quá muộn rồi."
      },
      {
        "zh": "老板太忙了。",
        "pinyin": "Lǎobǎn tàimáng le.",
        "vi": "Sếp quá bận rộn."
      },
      {
        "zh": "这个女孩太漂亮了。",
        "pinyin": "Zhège nǚhái tàipiàoliangle.",
        "vi": "Cô gái này thậtxinh đẹp."
      },
      {
        "zh": "你也太会说话了。",
        "pinyin": "Nǐyě tàihuì shuōhuàle.",
        "vi": "Bạn cũng thậtbiếtcách ăn nói."
      },
      {
        "zh": "我太喜欢他了。",
        "pinyin": "Wǒ tàixǐhuān tāle.",
        "vi": "Tôithích anh ấy quá đi!"
      }
    ]
  },
  {
    "id": "gram_hsk1_34",
    "level": "HSK1",
    "title": "Ngữ pháp 34: CÂU “DANH TỪ + TÍNH TỪ” ĐƠN",
    "category": "cau-truc-cau",
    "structure": "Danh từ + 很 + Tính từ",
    "meaning": "Thể hiện chất lượng, mô tảsự vật",
    "usage": "Danh từ được liênkết với các danh từ khác với 是 (shì).Danh từđược liênkết với tính\ntừvới 很 (hěn).\nCấu trúc: Danh từ + 很 + Tính từ\nDanh từ trong cấu trúc này làchủ ngữ của câu. Đôi khi,很 (hěn) trong cấu trúcnày\nđược dịch là 'rất'nhưng thường thìđó chỉlà một cách để liênkếtmột danh từ với tính\ntừ.",
    "notes": [
      "是 (shì) không được sử dụng để liênkếttính từ vớidanh từ. Đây là một sai lầm\n kinhđiển mà hầu hếtmọi người đều mắc phải khihọc tiếng Trung. Đảm bảo bạn\n sử dụng 很 (hěn) chứ không phải 是 (shì)để liênkết tínhtừ với danh từ.",
      "Đôi khibạn cũng có thể bắt gặp cấu trúc rútgọn 'Danh từ + Tính từ.'Trong\n trường hợp đặc biệtnày 很 (hěn)đã bịlược bỏ.",
      "Nếu bạn thực sự muốn thêm nghĩa của 'rất'vàocâu, bạn cũng có thể sử dụng\n một trạng từ khác thay vì很 (hěn), vídụ dùng 非常 (fēicháng)."
    ],
    "examples": [
      {
        "zh": "你家也很远吗？",
        "pinyin": "Nǐjiāyě hěn yuǎn ma?",
        "vi": "Có phải nhà bạn cũng ở xa?"
      },
      {
        "zh": "爸爸很忙，妈妈也很忙。",
        "pinyin": "Bàba hěn máng, māma yě hěn máng.",
        "vi": "Bố bận, mẹ cũng bận."
      },
      {
        "zh": "他很高。",
        "pinyin": "Tā hěn gāo.",
        "vi": "Anh ấy rất cao."
      },
      {
        "zh": "他非常高。",
        "pinyin": "Tā fēicháng gāo.",
        "vi": "Anh ấy rất cao."
      }
    ]
  },
  {
    "id": "gram_hsk1_35",
    "level": "HSK1",
    "title": "Ngữ pháp 35: CÂU HỎI KHẲNG ĐỊNH PHỦ ĐỊNH",
    "category": "cau-hoi-phu-dinh",
    "structure": "Động từ + 不 + Động từ",
    "meaning": "Đặt câu hỏi,đưa ra giảipháp thay thế",
    "usage": "● Một cách phổ biến để hình thành câu hỏitrong tiếng Trung là trước tiênsử dụng\n một động từtheo nghĩa khẳng định,sau đó lặplạiđộng từ đó ở dạng phủ định.\n Cấu trúc:Động từ + 不 + Động từ\n Lưu ý rằng câu hỏicung cấp cho người nghe cả hai câu trả lờicó thể có: đó là\n 'Động từ'hoặc '不 (bù) Động từ.'\n ● Nếu bạn muốn thêm một đốitượng sau động từ, cấu trúc câu chung là:\n Cấu trúc: Chủ ngữ + Động từ + 不 + Động từ + Tân ngữ\n ● Nó cũng có thể được thực hiện với tính từ :\n Cấu trúc: Tính từ + 不 + Tính từ.\n Một lầnnữa, câu hỏi cung cấp cho người nghe cả hai câu trả lờicó thể có: đó là\n 'Tính từ'hoặc '不 (bù) Tính từ.'\n ● Hầu hết các động từ được sử dụng cho dạng cấu trúcnày đều là động từ một\n âm tiết.Sử dụng động từ hai âm tiếttrong các câu hỏi khẳng định phủ định sẽ\n hơi phức tạp hơn. Đông từ trước 不 (bù) thường được rútgọn âm tiếtthứ 2.Ví\n dụ 喜不喜欢 (xǐbu xǐhuan) ,可不可以（Kěbù kěyǐ）. Bạn có thể lặp lạitoàn bộ động\n từ hai ký tự hailần, nhưng cách này ítphổ biến hơn.\n ● Vì động từ 有 (yǒu) bịphủ định với 没 (méi) chứ không phải là不 (bù), nên cấu\n trúc cho các câu hỏi phủ định khẳng định với 有 (yǒu) là:\n Cấu trúc: Chủ ngữ + 有没有 + Tân ngữ\n Các câu trả lờicó thể là:'有 (yǒu)'hoặc '没有 (méiyǒu).'\n Các câu hỏi có thể là hỏi về sở hữu hiện tại('Bạn có nó chưa?') hoặc hỏi về các\n động từ trong quá khứ ('Bạn đã làm à?').\n\n3.Ví dụ\n\n ● VD1: 是不是？\n Shì bu shì?\n Có phải không?\n ● VD2: 你想不想我？\n Nǐ xiǎng bu xiǎng wǒ?\n Bạn có nhớ tôikhông?\n ● VD3: 热不热？\n Rè bu rè?\n Có nóng không?\n ● VD4: 他帅不帅？\n Tā shuài bu shuài?\n Anh ấy có đẹp traikhông?\n ● VD5: 喜欢不喜欢？\n Xǐhuan bu xǐhuan?\n Bạn có thích nó không?",
    "notes": [],
    "examples": []
  },
  {
    "id": "gram_hsk1_36",
    "level": "HSK1",
    "title": "Ngữ pháp 36: VỊ TRÍ CỦA TỪ ĐỂ HỎI",
    "category": "cau-hoi-phu-dinh",
    "structure": "Chủ ngữ + 是 + 谁？",
    "meaning": "Đặt câu hỏi,mẫu câu",
    "usage": "谁(ai),什么(cái gì),什么时候(khi nào), 哪里 /哪儿(ở đâu), 为什么(tại sao) và 怎么(như\nthếnào), những từ để hỏi này đều được sử dụng để hình thành câu hỏi bằng tiếng\nTrung. Điều quan trọng cần nắm rõlà thứ tựsắp xếp các thành phần trong câu hỏi tiếng\nTrung.\nTrong tiếngTrung, bạn chỉcần đặtmột từ để hỏitương ứng vào vịtrícủa thành phần\nbạn muốn hỏi về.Không có gìcần phải sắp xếp lại.\n ● Vídụ dạng câu hỏi -'ailà ai?'dùng từ để hỏi là'谁‘（shéi):\n Cấu trúc: Chủ ngữ + 是 + 谁？\n ● Điều này cũng tương tự với tấtcả các từ để hỏi khác.\n Cấu trúc: Chủ ngữ + Động từ + 什么 + (Danh từ)?\n ● Các từ 哪里 (nǎlǐ)và 哪儿 (nǎr)có nghĩa tương tự.Sự khác biệtchỉđơn giản là\n thóiquen từng vùng miền: 哪里 (nǎlǐ)được ưa thích ở phía nam (Thượng Hải,\n Đài Loan), trongkhi 哪儿 (nǎr)được ưu tiênở phía bắc (Bắc Kinh,Tây An).\n Cấu trúc:\n Chủ ngữ + Động từ + 哪里 /哪儿?\n Chủ ngữ + Động từ + 哪个 (+ Danh từ)?\n ● Chủ ngữ + 是 + 谁?\n ● 谁 + Động từ?\n ● Chủ ngữ + 什么时候 + Vị ngữ?\n ● Chủ ngữ + 为什么 + Vị ngữ?\n ● Chủ ngữ + 怎么 + Động từ (+ Tân ngữ)?\n\n3.Ví dụ\n ● VD1: A: 这是什么？\n Zhè shìshénme?\n Đây làcáigì?\n B: 这是我的 iPad。\n Zhè shìwǒ deiPad.\n Đây làiPad của tôi.\n ● VD2: A: 你喜欢吃什么菜？\n Nǐxǐhuan chīshénme cài?\n Bạn thíchđồ ăn gì?\n B: 我喜欢吃中国菜。\n Wǒ xǐhuan chī Zhōngguó cài.\n Tôithíchđồ ăn Trung Quốc.\n ● VD3: A: 你在哪里？\n Nǐzàinǎlǐ?\n Bạn ở đâu?\n B: 我在家。\n Wǒ zài jiā.\n Tôiđang ở nhà.\n ● VD4: A: 你要去哪儿？\n Nǐyào qù nǎr?\n Bây giờbạn điđâu?\n B: 我要去洗手间。\n Wǒ yào qù xǐshǒujiān.\n Tôiđang đi vào phòng tắm.",
    "notes": [],
    "examples": []
  },
  {
    "id": "gram_hsk1_37",
    "level": "HSK1",
    "title": "Ngữ pháp 37: ĐẶT CÂU HỎI VỚI “不”",
    "category": "cau-hoi-phu-dinh",
    "structure": "Động từ/Tính từ + 不 + Động từ/ Tính từ",
    "meaning": "Đặtcâu hỏi,đưa ragiảipháp thay thế",
    "usage": "Cũng giống như cách bạn thành lập câu hỏi với吗 (ma), câu hỏicũng có thể được hình\nthành bằng cách sử dụng 不 (bù).Cấu trúc này được thành lập bằng cách đặt một câu\nhỏikhẳng định -phủ định ở cuối câu.\nCấu trúc: Động từ/Tính từ + 不 + Động từ/ Tính từ\nCác động từ thường được sử dụng trong cấu trúc này là: 对(duì), 是 (shì),và tínhtừ 好（\nhǎo）.\nCấu trúc này được thêm vào cuối một câu trầnthuật để tạo thành một câu hỏi. Các câu\nhỏidạng này tìm kiếm sự xác nhận hoặc chấp nhận những gì đã được nhắc đến. Ta có\nthểdịch thành 'đúng không?' hoặc 'được chứ?' .\n\n3.Ví dụ\n\n ● VD1: 你会说中文，对不对？\n Nǐhuì shuō Zhōngwén, duì bu duì?\n Bạn biết nóitiếng Trung Quốc phải không?\n ● VD2: 你有新女朋友了，是不是？\n Nǐyǒu xīnnǚpéngyou le, shìbu shì?\n Bạn có bạn gái mới, phải không?\n ● VD3: 我们回家吧，好不好？\n Wǒmen huíjiāba, hǎo bu hǎo?\n Chúng ta về nhà nhé, được không?",
    "notes": [],
    "examples": []
  },
  {
    "id": "gram_hsk1_38",
    "level": "HSK1",
    "title": "Ngữ pháp 38: ĐẶT CÂU HỎI VỚI “吗”",
    "category": "cau-hoi-phu-dinh",
    "structure": "Chủ ngữ + Vị ngữ, 好/ 对 / 是 / 可以 + 吗?",
    "meaning": "Đặt câu hỏi,yêu cầu",
    "usage": "Cũng như câu hỏilựa chọn có/ không, bạn cũng có thể hình thành các câu hỏi với吗\n(ma).Câu hỏi cấu trúc này được thành lậpbằng cách đặt từ để hỏi 吗(ma) ở cuối một\ncâu cơ bản.\nCách dễ nhất để thành lập câu với cấu trúc này trong tiếng Trung là thêm một số từ như\n好 (hǎo), 对 (duì),是 (shì)hoặc 可以 (kěyǐ),tiếptheo là吗 (ma) ở cuối câu.\nCấu trúc: Chủ ngữ + Vị ngữ, 好/ 对 / 是 / 可以 + 吗?\nVới câu hỏidạng này, bạn có thể nêu ra một câu hỏi,một đề nghị hoặc yêu cầu xác\nnhận.\nCâu này được dịch thành: (mệnh lệnh/cầu khiến/ thậm chícâu trần thuật),đúng không/\nđược không?\n\n3.Ví dụ\n\n ● VD1: 这样做，对吗？\n Zhèyàng zuò, duìma?\n Làm như thế này,phải không?\n ● VD2: 他们昨天都没去，是吗？\n Tāmen zuótiān dōu méi qù, shì ma?\n Họ đều không đingày hôm qua, phải không?\n ● VD3: 我们去你家，好吗？\n Wǒmen qù nǐjiā,hǎo ma?\n Chúng tahãy đến chỗ của bạn, được chứ?\n ● VD4: 妈妈，我要吃巧克力，可以吗？\n Māma, wǒ yào chīqiǎokèlì,kěyǐ ma?\n Mẹ ơi,con muốn ăn sô cô la,được không ạ?",
    "notes": [],
    "examples": []
  },
  {
    "id": "gram_hsk1_39",
    "level": "HSK1",
    "title": "Ngữ pháp 39: CÂU HỎI CÓ - KHÔNG VỚI “吗”",
    "category": "cau-hoi-phu-dinh",
    "structure": "[Trần thuật] + 吗",
    "meaning": "Đặt câu hỏi,yêu cầu",
    "usage": "Câu hỏi 吗 (ma) làmột cách đơn giản và phổ biếnđể hìnhthành câu hỏibằng tiếng\nTrung.Bằng cách đặt吗 (ma) vào cuốicâu trầnthuật bạn đã chuyển đổinó thành câu\nhỏicó/không.\nBấtkỳ câu trầnthuật nào cũng có thể được chuyển đổithành câu hỏicó / không với 吗\n(ma).\nCấu trúc: [Trần thuật] + 吗\nVà ngược lạicâu hỏi có/không hoàn lạicâu trầnthuật khibạn bỏ 吗 (ma).\nNếu bạn trả lờibằng 对 (duì)/是（shì) cho câu hỏi ở dạng khẳng định, thìcâu trảlờicủa\nbạn có nghĩa là'có/ đúng/ vâng'.\nNếu bạn trả lờibằng 对 (duì)/是（shì) cho câu hỏi ở dạng phủ định, thì câu trả lờicủa\nbạn có nghĩa là' không/ không đúng'.\nCòn một cách trảlờikhác cho câu hỏi dạng này là dùng động từ chính trong câu hỏi để\nlàm câu trả lời.",
    "notes": [
      "Điều quan trọng cần nhớ làbạn không được thêm 吗 (ma) vào một câu vốn đã là\n một câu hỏi.",
      "Tuy nhiên, điều này không có nghĩa là một câu không bao giờ có từ nghi vấn và\n 吗 (ma). Nếu một câu có chứa các động từ hiểu biếtnhư 知道 (zhīdào), 了解\n (liǎojiě),明白 (míngbai), 认识 (rènshi),v.v.,thì吗 (ma) vẫn có thể được thêm vào\n cuối câu hỏi. Sau này bạn sẽ tìm hiểu thêm về những câu hỏi nâng cao có -\n không có câu hỏi này với 'ma'."
    ],
    "examples": [
      {
        "zh": "你是老师吗？",
        "pinyin": "Nǐ shì lǎoshī ma?",
        "vi": "Bạn có phải là giáo viên không?"
      },
      {
        "zh": "他是中国人吗？",
        "pinyin": "Tā shì Zhōngguó rén ma?",
        "vi": "Anh ấy có phải là người Trung Quốc không?"
      },
      {
        "zh": "你们是朋友吗？",
        "pinyin": "Nǐmen shì péngyou ma?",
        "vi": "Các bạn có phải là bạn bè không?"
      },
      {
        "zh": "你好吗？",
        "pinyin": "Nǐ hǎo ma?",
        "vi": "Bạn có khỏe không?"
      }
    ]
  },
  {
    "id": "gram_hsk1_40",
    "level": "HSK1",
    "title": "Ngữ pháp 40: SO SÁNH “二” VÀ “两”",
    "category": "so-tu",
    "structure": "SO SÁNH “二” VÀ “两”",
    "meaning": "Thể hiện số lượng",
    "usage": "Trong tiếng Trung, có hai từdành đều có nghĩa là'hai',đó là 二 (èr)và 两 (liǎng),và mỗi\ntừđược sử dụng trong các trường hợp khác nhau.\nChữ số '2'là二 (èr).Điều này thường được sử dụng trong các số đếm, khi đếm đến 10,\nđưa ra một số điện thoại, số nhà, v.v.\nKhi chỉđịnh số lượng, 两 (liǎng) được sử dụng, khi bạn muốn nói 'haicủa cái gì đó' hoặc\n'cảhai'.\nKhác với 两 (liǎng),二 (èr) không được sử dụng để nói có 'hai'của một cáigì đó và\nthường không đứng trước lượng từ.Tuy nhiên các số như 十二 (12) (shí'èr)và 二十二\n(22)(èrshí-èr) kết thúc bằng 二(èr) thì vẫn có thể được kết hợp với các lượng từ phía\nsau.\nKhi nóivề giờ,2 giờ là 两点 （Liǎng diǎn），chứ không dùng 二点（Èr diǎn. Tuy nhiên 12\ngiờ thìvẫn là 十二点（Shí'èr diǎn）.\n\n3.Ví dụ\n ● VD1: 第二个: dì-èr gè: cáithứ hai\n ● VD2: 二月: Èr yuè: Tháng 2\n ● VD3: 十二: shí'èr:mười hai\n ● VD4: 二十: èrshí:hai mươi\n ● VD5: 两个小时: liǎnggè xiǎoshí:hai tiếng\n ● VD6: 两点: liǎng diǎn:2 giờ\n ● VD7: 两天: liǎng tiān:hai ngày\n ● VD8: 两年: liǎng nián:hai năm\n ● VD9: 两块钱: liǎng kuài qián: 2 tệ\n ● VD10: 两百: liǎngbǎi: hai trăm\n ● VD11: 两千: liǎng qiān: 2.000\n 铁杵磨成针\n Tiě chǔ mó chéng zhēn\n Có công mài sắt có ngày nên kim\n\n48",
    "notes": [],
    "examples": []
  },
  {
    "id": "gram_12",
    "level": "HSK2",
    "title": "了: hành động hoàn thành",
    "category": "tro-tu",
    "structure": "了",
    "meaning": "Chuyên đề ngữ pháp HSK2: 了: hành động hoàn thành",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“了”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"了\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “了”."
      }
    ]
  },
  {
    "id": "gram_13",
    "level": "HSK2",
    "title": "过: kinh nghiệm đã từng",
    "category": "tro-tu",
    "structure": "过",
    "meaning": "Chuyên đề ngữ pháp HSK2: 过: kinh nghiệm đã từng",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“过”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"过\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “过”."
      }
    ]
  },
  {
    "id": "gram_14",
    "level": "HSK2",
    "title": "正在 / …呢: đang làm",
    "category": "tro-tu",
    "structure": "正在 / …呢",
    "meaning": "Chuyên đề ngữ pháp HSK2: 正在 / …呢: đang làm",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“正在”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"正在\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “正在”."
      }
    ]
  },
  {
    "id": "gram_15",
    "level": "HSK2",
    "title": "会 / 能 / 可以: biết, có thể, được phép",
    "category": "dong-tu",
    "structure": "会 / 能 / 可以",
    "meaning": "Chuyên đề ngữ pháp HSK2: 会 / 能 / 可以: biết, có thể, được phép",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“会”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"会\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “会”."
      }
    ]
  },
  {
    "id": "gram_16",
    "level": "HSK2",
    "title": "比: so sánh hơn",
    "category": "so-sanh",
    "structure": "比",
    "meaning": "Chuyên đề ngữ pháp HSK2: 比: so sánh hơn",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“比”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"比\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “比”."
      }
    ]
  },
  {
    "id": "gram_17",
    "level": "HSK2",
    "title": "最 và 更: nhất và hơn nữa",
    "category": "so-sanh",
    "structure": "最 và 更",
    "meaning": "Chuyên đề ngữ pháp HSK2: 最 và 更: nhất và hơn nữa",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“最”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"最\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “最”."
      }
    ]
  },
  {
    "id": "gram_18",
    "level": "HSK2",
    "title": "太…了: cảm thán mức độ",
    "category": "cau-truc",
    "structure": "太…了",
    "meaning": "Chuyên đề ngữ pháp HSK2: 太…了: cảm thán mức độ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“太”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"太\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “太”."
      }
    ]
  },
  {
    "id": "gram_19",
    "level": "HSK2",
    "title": "一…就…: vừa… là ngay…",
    "category": "gioi-tu-lien-tu",
    "structure": "一…就…",
    "meaning": "Chuyên đề ngữ pháp HSK2: 一…就…: vừa… là ngay…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“一”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"一\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “一”."
      }
    ]
  },
  {
    "id": "gram_20",
    "level": "HSK2",
    "title": "因为…所以…: vì… nên…",
    "category": "gioi-tu-lien-tu",
    "structure": "因为…所以…",
    "meaning": "Chuyên đề ngữ pháp HSK2: 因为…所以…: vì… nên…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“因为”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"因为\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “因为”."
      }
    ]
  },
  {
    "id": "gram_21",
    "level": "HSK2",
    "title": "虽然…但是…: dù… nhưng…",
    "category": "gioi-tu-lien-tu",
    "structure": "虽然…但是…",
    "meaning": "Chuyên đề ngữ pháp HSK2: 虽然…但是…: dù… nhưng…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“虽然”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"虽然\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “虽然”."
      }
    ]
  },
  {
    "id": "gram_22",
    "level": "HSK2",
    "title": "先…然后…: trước… sau đó…",
    "category": "gioi-tu-lien-tu",
    "structure": "先…然后…",
    "meaning": "Chuyên đề ngữ pháp HSK2: 先…然后…: trước… sau đó…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“先”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"先\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “先”."
      }
    ]
  },
  {
    "id": "gram_23",
    "level": "HSK2",
    "title": "给: cho, làm cho ai",
    "category": "gioi-tu-lien-tu",
    "structure": "给",
    "meaning": "Chuyên đề ngữ pháp HSK2: 给: cho, làm cho ai",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“给”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"给\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “给”."
      }
    ]
  },
  {
    "id": "gram_24",
    "level": "HSK2",
    "title": "跟: cùng với, với ai",
    "category": "gioi-tu-lien-tu",
    "structure": "跟",
    "meaning": "Chuyên đề ngữ pháp HSK2: 跟: cùng với, với ai",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“跟”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"跟\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “跟”."
      }
    ]
  },
  {
    "id": "gram_25",
    "level": "HSK2",
    "title": "Lượng từ 本 / 件 / 张 / 块 / 条",
    "category": "luong-tu",
    "structure": "Lượng từ 本 / 件 / 张 / 块 / 条",
    "meaning": "Chuyên đề ngữ pháp HSK2: Lượng từ 本 / 件 / 张 / 块 / 条",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“本”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"本\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “本”."
      }
    ]
  },
  {
    "id": "gram_26",
    "level": "HSK2",
    "title": "从…到… và cách nói giờ",
    "category": "gioi-tu-lien-tu",
    "structure": "从…到… và cách nói giờ",
    "meaning": "Chuyên đề ngữ pháp HSK2: 从…到… và cách nói giờ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“从”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"从\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “从”."
      }
    ]
  },
  {
    "id": "gram_27",
    "level": "HSK2",
    "title": "喜欢 / 觉得 / 希望 + mệnh đề",
    "category": "dong-tu",
    "structure": "喜欢 / 觉得 / 希望 + mệnh đề",
    "meaning": "Chuyên đề ngữ pháp HSK2: 喜欢 / 觉得 / 希望 + mệnh đề",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“喜欢”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"喜欢\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “喜欢”."
      }
    ]
  },
  {
    "id": "gram_28",
    "level": "HSK2",
    "title": "可能 / 会 / 能 / 可以: đoán, kỹ năng, điều kiện và cho phép",
    "category": "dong-tu",
    "structure": "可能 / 会 / 能 / 可以",
    "meaning": "Chuyên đề ngữ pháp HSK2: 可能 / 会 / 能 / 可以: đoán, kỹ năng, điều kiện và cho phép",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“可能”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"可能\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “可能”."
      }
    ]
  },
  {
    "id": "gram_29",
    "level": "HSK2",
    "title": "该 / 应该: nên làm gì",
    "category": "dong-tu",
    "structure": "该 / 应该",
    "meaning": "Chuyên đề ngữ pháp HSK2: 该 / 应该: nên làm gì",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“该”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"该\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “该”."
      }
    ]
  },
  {
    "id": "gram_30",
    "level": "HSK2",
    "title": "愿意: sẵn lòng làm gì",
    "category": "dong-tu",
    "structure": "愿意",
    "meaning": "Chuyên đề ngữ pháp HSK2: 愿意: sẵn lòng làm gì",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“愿意”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"愿意\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “愿意”."
      }
    ]
  },
  {
    "id": "gram_31",
    "level": "HSK2",
    "title": "Động từ lặp lại: 看看 / 看一看 / 看了看 / 学习学习",
    "category": "dong-tu",
    "structure": "Động từ lặp lại",
    "meaning": "Chuyên đề ngữ pháp HSK2: Động từ lặp lại: 看看 / 看一看 / 看了看 / 学习学习",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK2, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“看看”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"看看\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “看看”."
      }
    ]
  },
  {
    "id": "gram_32",
    "level": "HSK3",
    "title": "把: đưa tân ngữ lên trước (cơ bản)",
    "category": "cau-truc",
    "structure": "把",
    "meaning": "Chuyên đề ngữ pháp HSK3: 把: đưa tân ngữ lên trước (cơ bản)",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“把”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"把\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “把”."
      }
    ]
  },
  {
    "id": "gram_33",
    "level": "HSK3",
    "title": "被: câu bị động",
    "category": "cau-truc",
    "structure": "被",
    "meaning": "Chuyên đề ngữ pháp HSK3: 被: câu bị động",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“被”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"被\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “被”."
      }
    ]
  },
  {
    "id": "gram_34",
    "level": "HSK3",
    "title": "Bổ ngữ kết quả: 完/到/见/懂/好",
    "category": "bo-ngu",
    "structure": "Bổ ngữ kết quả",
    "meaning": "Chuyên đề ngữ pháp HSK3: Bổ ngữ kết quả: 完/到/见/懂/好",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“完”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"完\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “完”."
      }
    ]
  },
  {
    "id": "gram_35",
    "level": "HSK3",
    "title": "Bổ ngữ hướng: 来/去/上/下/进/出/回",
    "category": "bo-ngu",
    "structure": "Bổ ngữ hướng",
    "meaning": "Chuyên đề ngữ pháp HSK3: Bổ ngữ hướng: 来/去/上/下/进/出/回",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“来”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"来\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “来”."
      }
    ]
  },
  {
    "id": "gram_36",
    "level": "HSK3",
    "title": "Bổ ngữ mức độ với 得",
    "category": "bo-ngu",
    "structure": "Bổ ngữ mức độ với 得",
    "meaning": "Chuyên đề ngữ pháp HSK3: Bổ ngữ mức độ với 得",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“得”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"得\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “得”."
      }
    ]
  },
  {
    "id": "gram_37",
    "level": "HSK3",
    "title": "越来越 và 越…越…",
    "category": "so-sanh",
    "structure": "越来越 và 越…越…",
    "meaning": "Chuyên đề ngữ pháp HSK3: 越来越 và 越…越…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“越来越”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"越来越\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “越来越”."
      }
    ]
  },
  {
    "id": "gram_38",
    "level": "HSK3",
    "title": "一边…一边…: hai hành động song song",
    "category": "gioi-tu-lien-tu",
    "structure": "一边…一边…",
    "meaning": "Chuyên đề ngữ pháp HSK3: 一边…一边…: hai hành động song song",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“一边”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"一边\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “一边”."
      }
    ]
  },
  {
    "id": "gram_39",
    "level": "HSK3",
    "title": "除了…以外: ngoài… ra",
    "category": "gioi-tu-lien-tu",
    "structure": "除了…以外",
    "meaning": "Chuyên đề ngữ pháp HSK3: 除了…以外: ngoài… ra",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“除了”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"除了\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “除了”."
      }
    ]
  },
  {
    "id": "gram_40",
    "level": "HSK3",
    "title": "又 / 再 / 还: lặp lại hành động",
    "category": "tinh-tu-trang-tu",
    "structure": "又 / 再 / 还",
    "meaning": "Chuyên đề ngữ pháp HSK3: 又 / 再 / 还: lặp lại hành động",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“又”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"又\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “又”."
      }
    ]
  },
  {
    "id": "gram_41",
    "level": "HSK3",
    "title": "快…了 / 要…了: sắp… rồi",
    "category": "tro-tu",
    "structure": "快…了 / 要…了",
    "meaning": "Chuyên đề ngữ pháp HSK3: 快…了 / 要…了: sắp… rồi",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“快”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"快\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “快”."
      }
    ]
  },
  {
    "id": "gram_42",
    "level": "HSK3",
    "title": "着: trạng thái sau động từ",
    "category": "tro-tu",
    "structure": "着",
    "meaning": "Chuyên đề ngữ pháp HSK3: 着: trạng thái sau động từ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“着”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"着\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “着”."
      }
    ]
  },
  {
    "id": "gram_43",
    "level": "HSK3",
    "title": "是…的: nhấn thông tin đã biết",
    "category": "cau-truc",
    "structure": "是…的",
    "meaning": "Chuyên đề ngữ pháp HSK3: 是…的: nhấn thông tin đã biết",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“是”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"是\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “是”."
      }
    ]
  },
  {
    "id": "gram_44",
    "level": "HSK3",
    "title": "如果…就…: nếu… thì…",
    "category": "gioi-tu-lien-tu",
    "structure": "如果…就…",
    "meaning": "Chuyên đề ngữ pháp HSK3: 如果…就…: nếu… thì…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“如果”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"如果\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “如果”."
      }
    ]
  },
  {
    "id": "gram_45",
    "level": "HSK3",
    "title": "让: bảo/cho ai làm gì",
    "category": "dong-tu",
    "structure": "让",
    "meaning": "Chuyên đề ngữ pháp HSK3: 让: bảo/cho ai làm gì",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“让”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"让\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “让”."
      }
    ]
  },
  {
    "id": "gram_46",
    "level": "HSK3",
    "title": "Câu hai tân ngữ: 给/送/教/问",
    "category": "cau-truc",
    "structure": "Câu hai tân ngữ",
    "meaning": "Chuyên đề ngữ pháp HSK3: Câu hai tân ngữ: 给/送/教/问",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“给”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"给\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “给”."
      }
    ]
  },
  {
    "id": "gram_47",
    "level": "HSK3",
    "title": "Lượng từ và cách nói giờ",
    "category": "luong-tu",
    "structure": "Lượng từ và cách nói giờ",
    "meaning": "Chuyên đề ngữ pháp HSK3: Lượng từ và cách nói giờ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_48",
    "level": "HSK3",
    "title": "有的…有的…: có người… có người…",
    "category": "cau-truc",
    "structure": "有的…有的…",
    "meaning": "Chuyên đề ngữ pháp HSK3: 有的…有的…: có người… có người…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“有的”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"有的\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “有的”."
      }
    ]
  },
  {
    "id": "gram_49",
    "level": "HSK3",
    "title": "Câu hỏi vặn: 不是…吗 / 怎么",
    "category": "cau-hoi-phu-dinh",
    "structure": "Câu hỏi vặn",
    "meaning": "Chuyên đề ngữ pháp HSK3: Câu hỏi vặn: 不是…吗 / 怎么",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不是”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不是\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不是”."
      }
    ]
  },
  {
    "id": "gram_50",
    "level": "HSK3",
    "title": "Tiền tố 第、老、 小 trong cách gọi",
    "category": "cau-truc",
    "structure": "Tiền tố 第、老、 小 trong cách gọi",
    "meaning": "Chuyên đề ngữ pháp HSK3: Tiền tố 第、老、 小 trong cách gọi",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“第”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"第\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “第”."
      }
    ]
  },
  {
    "id": "gram_51",
    "level": "HSK3",
    "title": "Hậu tố 儿、们、子 và từ ghép quen thuộc",
    "category": "cau-truc",
    "structure": "Hậu tố 儿、们、子 và từ ghép quen thuộc",
    "meaning": "Chuyên đề ngữ pháp HSK3: Hậu tố 儿、们、子 và từ ghép quen thuộc",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“儿”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"儿\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “儿”."
      }
    ]
  },
  {
    "id": "gram_52",
    "level": "HSK3",
    "title": "敢: dám làm điều gì",
    "category": "dong-tu",
    "structure": "敢",
    "meaning": "Chuyên đề ngữ pháp HSK3: 敢: dám làm điều gì",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“敢”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"敢\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “敢”."
      }
    ]
  },
  {
    "id": "gram_53",
    "level": "HSK3",
    "title": "需要: cần một việc hoặc một thứ",
    "category": "dong-tu",
    "structure": "需要",
    "meaning": "Chuyên đề ngữ pháp HSK3: 需要: cần một việc hoặc một thứ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“需要”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"需要\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “需要”."
      }
    ]
  },
  {
    "id": "gram_54",
    "level": "HSK3",
    "title": "Đại từ nghi vấn dùng không để hỏi",
    "category": "cau-hoi-phu-dinh",
    "structure": "Đại từ nghi vấn dùng không để hỏi",
    "meaning": "Chuyên đề ngữ pháp HSK3: Đại từ nghi vấn dùng không để hỏi",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_55",
    "level": "HSK3",
    "title": "Lặp lượng từ: 个个、天天",
    "category": "luong-tu",
    "structure": "Lặp lượng từ",
    "meaning": "Chuyên đề ngữ pháp HSK3: Lặp lượng từ: 个个、天天",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“个个”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"个个\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “个个”."
      }
    ]
  },
  {
    "id": "gram_56",
    "level": "HSK3",
    "title": "自从: kể từ một mốc thời gian",
    "category": "gioi-tu-lien-tu",
    "structure": "自从",
    "meaning": "Chuyên đề ngữ pháp HSK3: 自从: kể từ một mốc thời gian",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“自从”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"自从\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “自从”."
      }
    ]
  },
  {
    "id": "gram_57",
    "level": "HSK3",
    "title": "朝: hướng về phía ai hoặc nơi nào",
    "category": "gioi-tu-lien-tu",
    "structure": "朝",
    "meaning": "Chuyên đề ngữ pháp HSK3: 朝: hướng về phía ai hoặc nơi nào",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“朝”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"朝\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “朝”."
      }
    ]
  },
  {
    "id": "gram_58",
    "level": "HSK3",
    "title": "为了: làm gì vì một mục đích",
    "category": "gioi-tu-lien-tu",
    "structure": "为了",
    "meaning": "Chuyên đề ngữ pháp HSK3: 为了: làm gì vì một mục đích",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“为了”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"为了\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “为了”."
      }
    ]
  },
  {
    "id": "gram_59",
    "level": "HSK3",
    "title": "从……起: bắt đầu từ mốc nào",
    "category": "cau-truc",
    "structure": "从……起",
    "meaning": "Chuyên đề ngữ pháp HSK3: 从……起: bắt đầu từ mốc nào",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“从”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"从\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “从”."
      }
    ]
  },
  {
    "id": "gram_60",
    "level": "HSK3",
    "title": "对……来说: xét theo góc nhìn nào",
    "category": "cau-truc",
    "structure": "对……来说",
    "meaning": "Chuyên đề ngữ pháp HSK3: 对……来说: xét theo góc nhìn nào",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“对”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"对\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “对”."
      }
    ]
  },
  {
    "id": "gram_61",
    "level": "HSK3",
    "title": "一……也/都不: hoàn toàn không",
    "category": "cau-hoi-phu-dinh",
    "structure": "一……也/都不",
    "meaning": "Chuyên đề ngữ pháp HSK3: 一……也/都不: hoàn toàn không",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK3, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“一”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"一\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “一”."
      }
    ]
  },
  {
    "id": "gram_62",
    "level": "HSK4",
    "title": "把 + bổ ngữ (mở rộng)",
    "category": "cau-truc",
    "structure": "把 + bổ ngữ (mở rộng)",
    "meaning": "Chuyên đề ngữ pháp HSK4: 把 + bổ ngữ (mở rộng)",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“把”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"把\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “把”."
      }
    ]
  },
  {
    "id": "gram_63",
    "level": "HSK4",
    "title": "被 mở rộng",
    "category": "cau-truc",
    "structure": "被 mở rộng",
    "meaning": "Chuyên đề ngữ pháp HSK4: 被 mở rộng",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“被”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"被\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “被”."
      }
    ]
  },
  {
    "id": "gram_64",
    "level": "HSK4",
    "title": "Bổ ngữ hướng kép",
    "category": "bo-ngu",
    "structure": "Bổ ngữ hướng kép",
    "meaning": "Chuyên đề ngữ pháp HSK4: Bổ ngữ hướng kép",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_65",
    "level": "HSK4",
    "title": "Bổ ngữ khả năng 得/不",
    "category": "bo-ngu",
    "structure": "Bổ ngữ khả năng 得/不",
    "meaning": "Chuyên đề ngữ pháp HSK4: Bổ ngữ khả năng 得/不",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“得”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"得\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “得”."
      }
    ]
  },
  {
    "id": "gram_66",
    "level": "HSK4",
    "title": "不但…而且…",
    "category": "gioi-tu-lien-tu",
    "structure": "不但…而且…",
    "meaning": "Chuyên đề ngữ pháp HSK4: 不但…而且…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不但”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不但\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不但”."
      }
    ]
  },
  {
    "id": "gram_67",
    "level": "HSK4",
    "title": "不管/无论…都…",
    "category": "gioi-tu-lien-tu",
    "structure": "不管/无论…都…",
    "meaning": "Chuyên đề ngữ pháp HSK4: 不管/无论…都…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不管”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不管\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不管”."
      }
    ]
  },
  {
    "id": "gram_68",
    "level": "HSK4",
    "title": "只要…就… vs 只有…才…",
    "category": "gioi-tu-lien-tu",
    "structure": "只要…就… vs 只有…才…",
    "meaning": "Chuyên đề ngữ pháp HSK4: 只要…就… vs 只有…才…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“只要”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"只要\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “只要”."
      }
    ]
  },
  {
    "id": "gram_69",
    "level": "HSK4",
    "title": "既然…就…",
    "category": "gioi-tu-lien-tu",
    "structure": "既然…就…",
    "meaning": "Chuyên đề ngữ pháp HSK4: 既然…就…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“既然”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"既然\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “既然”."
      }
    ]
  },
  {
    "id": "gram_70",
    "level": "HSK4",
    "title": "即使…也…",
    "category": "gioi-tu-lien-tu",
    "structure": "即使…也…",
    "meaning": "Chuyên đề ngữ pháp HSK4: 即使…也…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“即使”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"即使\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “即使”."
      }
    ]
  },
  {
    "id": "gram_71",
    "level": "HSK4",
    "title": "尽管/虽然…可是…",
    "category": "gioi-tu-lien-tu",
    "structure": "尽管/虽然…可是…",
    "meaning": "Chuyên đề ngữ pháp HSK4: 尽管/虽然…可是…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“尽管”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"尽管\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “尽管”."
      }
    ]
  },
  {
    "id": "gram_72",
    "level": "HSK4",
    "title": "除非 trừ khi",
    "category": "gioi-tu-lien-tu",
    "structure": "除非 trừ khi",
    "meaning": "Chuyên đề ngữ pháp HSK4: 除非 trừ khi",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“除非”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"除非\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “除非”."
      }
    ]
  },
  {
    "id": "gram_73",
    "level": "HSK4",
    "title": "连…都/也…",
    "category": "nhan-manh-van-viet",
    "structure": "连…都/也…",
    "meaning": "Chuyên đề ngữ pháp HSK4: 连…都/也…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“连”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"连\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “连”."
      }
    ]
  },
  {
    "id": "gram_74",
    "level": "HSK4",
    "title": "却 / 竟然",
    "category": "tinh-tu-trang-tu",
    "structure": "却 / 竟然",
    "meaning": "Chuyên đề ngữ pháp HSK4: 却 / 竟然",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“却”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"却\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “却”."
      }
    ]
  },
  {
    "id": "gram_75",
    "level": "HSK4",
    "title": "还是 lựa chọn",
    "category": "cau-hoi-phu-dinh",
    "structure": "还是 lựa chọn",
    "meaning": "Chuyên đề ngữ pháp HSK4: 还是 lựa chọn",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“还是”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"还是\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “还是”."
      }
    ]
  },
  {
    "id": "gram_76",
    "level": "HSK4",
    "title": "顺便 / 幸亏 / 难怪",
    "category": "tinh-tu-trang-tu",
    "structure": "顺便 / 幸亏 / 难怪",
    "meaning": "Chuyên đề ngữ pháp HSK4: 顺便 / 幸亏 / 难怪",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“顺便”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"顺便\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “顺便”."
      }
    ]
  },
  {
    "id": "gram_77",
    "level": "HSK4",
    "title": "Bổ ngữ kết quả phức: 住/成/掉/开",
    "category": "bo-ngu",
    "structure": "Bổ ngữ kết quả phức",
    "meaning": "Chuyên đề ngữ pháp HSK4: Bổ ngữ kết quả phức: 住/成/掉/开",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“住”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"住\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “住”."
      }
    ]
  },
  {
    "id": "gram_78",
    "level": "HSK4",
    "title": "Động từ tách rời",
    "category": "dong-tu",
    "structure": "Động từ tách rời",
    "meaning": "Chuyên đề ngữ pháp HSK4: Động từ tách rời",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_79",
    "level": "HSK4",
    "title": "又…又… / 既…又…",
    "category": "gioi-tu-lien-tu",
    "structure": "又…又… / 既…又…",
    "meaning": "Chuyên đề ngữ pháp HSK4: 又…又… / 既…又…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“又”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"又\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “又”."
      }
    ]
  },
  {
    "id": "gram_80",
    "level": "HSK4",
    "title": "越来越 / 越…越… (mở rộng): ngày càng, càng… càng…",
    "category": "so-sanh",
    "structure": "越来越 / 越…越… (mở rộng)",
    "meaning": "Chuyên đề ngữ pháp HSK4: 越来越 / 越…越… (mở rộng): ngày càng, càng… càng…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“越来越”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"越来越\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “越来越”."
      }
    ]
  },
  {
    "id": "gram_81",
    "level": "HSK4",
    "title": "一…就… (mở rộng): vừa… là…, cứ… là…",
    "category": "gioi-tu-lien-tu",
    "structure": "一…就… (mở rộng)",
    "meaning": "Chuyên đề ngữ pháp HSK4: 一…就… (mở rộng): vừa… là…, cứ… là…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“一”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"一\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “一”."
      }
    ]
  },
  {
    "id": "gram_82",
    "level": "HSK4",
    "title": "V + 着 (mở rộng): trạng thái làm nền",
    "category": "tro-tu",
    "structure": "V + 着 (mở rộng)",
    "meaning": "Chuyên đề ngữ pháp HSK4: V + 着 (mở rộng): trạng thái làm nền",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“着”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"着\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “着”."
      }
    ]
  },
  {
    "id": "gram_83",
    "level": "HSK4",
    "title": "A 比 B + 得多 / 多了 / 一点儿: chênh nhiều, chênh ít",
    "category": "so-sanh",
    "structure": "A 比 B + 得多 / 多了 / 一点儿",
    "meaning": "Chuyên đề ngữ pháp HSK4: A 比 B + 得多 / 多了 / 一点儿: chênh nhiều, chênh ít",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“比”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"比\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “比”."
      }
    ]
  },
  {
    "id": "gram_84",
    "level": "HSK4",
    "title": "除了…（以外）(mở rộng): 都 loại trừ, 还/也 gộp thêm",
    "category": "gioi-tu-lien-tu",
    "structure": "除了…（以外）(mở rộng)",
    "meaning": "Chuyên đề ngữ pháp HSK4: 除了…（以外）(mở rộng): 都 loại trừ, 还/也 gộp thêm",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“除了”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"除了\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “除了”."
      }
    ]
  },
  {
    "id": "gram_85",
    "level": "HSK4",
    "title": "V + 了 + thời lượng: 住了两年了",
    "category": "dong-tu",
    "structure": "V + 了 + thời lượng",
    "meaning": "Chuyên đề ngữ pháp HSK4: V + 了 + thời lượng: 住了两年了",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“了”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"了\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “了”."
      }
    ]
  },
  {
    "id": "gram_86",
    "level": "HSK4",
    "title": "得 (phải) và 人家",
    "category": "dong-tu",
    "structure": "得 (phải) và 人家",
    "meaning": "Chuyên đề ngữ pháp HSK4: 得 (phải) và 人家",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“得”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"得\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “得”."
      }
    ]
  },
  {
    "id": "gram_87",
    "level": "HSK4",
    "title": "Lượng từ và số lượng xấp xỉ",
    "category": "luong-tu",
    "structure": "Lượng từ và số lượng xấp xỉ",
    "meaning": "Chuyên đề ngữ pháp HSK4: Lượng từ và số lượng xấp xỉ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_88",
    "level": "HSK4",
    "title": "Trạng từ thời gian và tần suất",
    "category": "tinh-tu-trang-tu",
    "structure": "Trạng từ thời gian và tần suất",
    "meaning": "Chuyên đề ngữ pháp HSK4: Trạng từ thời gian và tần suất",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_89",
    "level": "HSK4",
    "title": "Mức độ và suy đoán: 格外, 未必, 似乎",
    "category": "tinh-tu-trang-tu",
    "structure": "Mức độ và suy đoán",
    "meaning": "Chuyên đề ngữ pháp HSK4: Mức độ và suy đoán: 格外, 未必, 似乎",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“格外”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"格外\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “格外”."
      }
    ]
  },
  {
    "id": "gram_90",
    "level": "HSK4",
    "title": "Trạng từ ngữ khí: 的确, 反而, 究竟",
    "category": "tinh-tu-trang-tu",
    "structure": "Trạng từ ngữ khí",
    "meaning": "Chuyên đề ngữ pháp HSK4: Trạng từ ngữ khí: 的确, 反而, 究竟",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“的确”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"的确\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “的确”."
      }
    ]
  },
  {
    "id": "gram_91",
    "level": "HSK4",
    "title": "Giới từ chỉ đối tượng: 对于, 关于, 替, 自",
    "category": "gioi-tu-lien-tu",
    "structure": "Giới từ chỉ đối tượng",
    "meaning": "Chuyên đề ngữ pháp HSK4: Giới từ chỉ đối tượng: 对于, 关于, 替, 自",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“对于”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"对于\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “对于”."
      }
    ]
  },
  {
    "id": "gram_92",
    "level": "HSK4",
    "title": "根据, 作为, 并 và 以及",
    "category": "gioi-tu-lien-tu",
    "structure": "根据, 作为, 并 và 以及",
    "meaning": "Chuyên đề ngữ pháp HSK4: 根据, 作为, 并 và 以及",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“根据”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"根据\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “根据”."
      }
    ]
  },
  {
    "id": "gram_93",
    "level": "HSK4",
    "title": "Liên từ văn viết: 而是, 甚至, 假如, 可见",
    "category": "gioi-tu-lien-tu",
    "structure": "Liên từ văn viết",
    "meaning": "Chuyên đề ngữ pháp HSK4: Liên từ văn viết: 而是, 甚至, 假如, 可见",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“而是”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"而是\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “而是”."
      }
    ]
  },
  {
    "id": "gram_94",
    "level": "HSK4",
    "title": "Cụm cố định: 似的, 看来, 说不定",
    "category": "cau-truc",
    "structure": "Cụm cố định",
    "meaning": "Chuyên đề ngữ pháp HSK4: Cụm cố định: 似的, 看来, 说不定",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“似的”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"似的\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “似的”."
      }
    ]
  },
  {
    "id": "gram_95",
    "level": "HSK4",
    "title": "Mốc thời gian và phạm vi: 以来, 方面, 由…组成",
    "category": "cau-truc",
    "structure": "Mốc thời gian và phạm vi",
    "meaning": "Chuyên đề ngữ pháp HSK4: Mốc thời gian và phạm vi: 以来, 方面, 由…组成",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“以来”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"以来\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “以来”."
      }
    ]
  },
  {
    "id": "gram_96",
    "level": "HSK4",
    "title": "Chủ ngữ, định ngữ và bổ ngữ xu hướng",
    "category": "cau-truc",
    "structure": "Chủ ngữ, định ngữ và bổ ngữ xu hướng",
    "meaning": "Chuyên đề ngữ pháp HSK4: Chủ ngữ, định ngữ và bổ ngữ xu hướng",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_97",
    "level": "HSK4",
    "title": "Nhấn mạnh và mẫu khẩu ngữ HSK4",
    "category": "nhan-manh-van-viet",
    "structure": "Nhấn mạnh và mẫu khẩu ngữ HSK4",
    "meaning": "Chuyên đề ngữ pháp HSK4: Nhấn mạnh và mẫu khẩu ngữ HSK4",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK4, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_98",
    "level": "HSK5",
    "title": "是…的 (nâng cao): tách thông tin đã biết",
    "category": "nhan-manh-van-viet",
    "structure": "是…的 (nâng cao)",
    "meaning": "Chuyên đề ngữ pháp HSK5: 是…的 (nâng cao): tách thông tin đã biết",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“是”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"是\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “是”."
      }
    ]
  },
  {
    "id": "gram_99",
    "level": "HSK5",
    "title": "与其…不如…: thà chọn phương án tốt hơn",
    "category": "gioi-tu-lien-tu",
    "structure": "与其…不如…",
    "meaning": "Chuyên đề ngữ pháp HSK5: 与其…不如…: thà chọn phương án tốt hơn",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“与其”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"与其\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “与其”."
      }
    ]
  },
  {
    "id": "gram_100",
    "level": "HSK5",
    "title": "哪怕 / 就是…也…: nhường bộ cực đoan",
    "category": "gioi-tu-lien-tu",
    "structure": "哪怕 / 就是…也…",
    "meaning": "Chuyên đề ngữ pháp HSK5: 哪怕 / 就是…也…: nhường bộ cực đoan",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“哪怕”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"哪怕\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “哪怕”."
      }
    ]
  },
  {
    "id": "gram_101",
    "level": "HSK5",
    "title": "何况 / 更何况: lập luận tiến thêm một bước",
    "category": "gioi-tu-lien-tu",
    "structure": "何况 / 更何况",
    "meaning": "Chuyên đề ngữ pháp HSK5: 何况 / 更何况: lập luận tiến thêm một bước",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“何况”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"何况\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “何况”."
      }
    ]
  },
  {
    "id": "gram_102",
    "level": "HSK5",
    "title": "不是…而是…: đính chính thông tin",
    "category": "nhan-manh-van-viet",
    "structure": "不是…而是…",
    "meaning": "Chuyên đề ngữ pháp HSK5: 不是…而是…: đính chính thông tin",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不是”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不是\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不是”."
      }
    ]
  },
  {
    "id": "gram_104",
    "level": "HSK5",
    "title": "就…而言: giới hạn phương diện đánh giá",
    "category": "nhan-manh-van-viet",
    "structure": "就…而言",
    "meaning": "Chuyên đề ngữ pháp HSK5: 就…而言: giới hạn phương diện đánh giá",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“就”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"就\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “就”."
      }
    ]
  },
  {
    "id": "gram_106",
    "level": "HSK5",
    "title": "而: nối ý và đối chiếu văn viết",
    "category": "nhan-manh-van-viet",
    "structure": "而",
    "meaning": "Chuyên đề ngữ pháp HSK5: 而: nối ý và đối chiếu văn viết",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“而”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"而\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “而”."
      }
    ]
  },
  {
    "id": "gram_108",
    "level": "HSK5",
    "title": "Bổ ngữ hướng nghĩa bóng: 想起来 / 说不出",
    "category": "bo-ngu",
    "structure": "Bổ ngữ hướng nghĩa bóng",
    "meaning": "Chuyên đề ngữ pháp HSK5: Bổ ngữ hướng nghĩa bóng: 想起来 / 说不出",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“想起来”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"想起来\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “想起来”."
      }
    ]
  },
  {
    "id": "gram_109",
    "level": "HSK5",
    "title": "关于 / 对于 / 至于: ba giới từ văn",
    "category": "gioi-tu-lien-tu",
    "structure": "关于 / 对于 / 至于",
    "meaning": "Chuyên đề ngữ pháp HSK5: 关于 / 对于 / 至于: ba giới từ văn",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“关于”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"关于\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “关于”."
      }
    ]
  },
  {
    "id": "gram_110",
    "level": "HSK5",
    "title": "逐渐 / 一步步 / 一下子: quá trình và tức thời",
    "category": "tinh-tu-trang-tu",
    "structure": "逐渐 / 一步步 / 一下子",
    "meaning": "Chuyên đề ngữ pháp HSK5: 逐渐 / 一步步 / 一下子: quá trình và tức thời",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“逐渐”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"逐渐\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “逐渐”."
      }
    ]
  },
  {
    "id": "gram_112",
    "level": "HSK5",
    "title": "毕竟 / 到底: dù sao thì, cuối cùng thì",
    "category": "tinh-tu-trang-tu",
    "structure": "毕竟 / 到底",
    "meaning": "Chuyên đề ngữ pháp HSK5: 毕竟 / 到底: dù sao thì, cuối cùng thì",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“毕竟”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"毕竟\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “毕竟”."
      }
    ]
  },
  {
    "id": "gram_113",
    "level": "HSK5",
    "title": "随着…（而）…: cùng với sự thay đổi",
    "category": "gioi-tu-lien-tu",
    "structure": "随着…（而）…",
    "meaning": "Chuyên đề ngữ pháp HSK5: 随着…（而）…: cùng với sự thay đổi",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“随着”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"随着\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “随着”."
      }
    ]
  },
  {
    "id": "gram_114",
    "level": "HSK5",
    "title": "通过: nhờ, bằng / đi qua",
    "category": "gioi-tu-lien-tu",
    "structure": "通过",
    "meaning": "Chuyên đề ngữ pháp HSK5: 通过: nhờ, bằng / đi qua",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“通过”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"通过\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “通过”."
      }
    ]
  },
  {
    "id": "gram_115",
    "level": "HSK5",
    "title": "拿…来说 / 按…来说: lấy ví dụ như / theo như",
    "category": "cau-truc",
    "structure": "拿…来说 / 按…来说",
    "meaning": "Chuyên đề ngữ pháp HSK5: 拿…来说 / 按…来说: lấy ví dụ như / theo như",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“拿”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"拿\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “拿”."
      }
    ]
  },
  {
    "id": "gram_116",
    "level": "HSK5",
    "title": "差点儿 / 差点儿没: suýt nữa",
    "category": "tinh-tu-trang-tu",
    "structure": "差点儿 / 差点儿没",
    "meaning": "Chuyên đề ngữ pháp HSK5: 差点儿 / 差点儿没: suýt nữa",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“差点儿”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"差点儿\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “差点儿”."
      }
    ]
  },
  {
    "id": "gram_117",
    "level": "HSK5",
    "title": "来得及 / 来不及 và bốn bổ ngữ nâng cao",
    "category": "cau-truc",
    "structure": "来得及 / 来不及 và bốn bổ ngữ nâng cao",
    "meaning": "Chuyên đề ngữ pháp HSK5: 来得及 / 来不及 và bốn bổ ngữ nâng cao",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“来得及”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"来得及\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “来得及”."
      }
    ]
  },
  {
    "id": "gram_118",
    "level": "HSK5",
    "title": "难道…吗: chẳng lẽ (câu hỏi tu từ)",
    "category": "cau-hoi-phu-dinh",
    "structure": "难道…吗",
    "meaning": "Chuyên đề ngữ pháp HSK5: 难道…吗: chẳng lẽ (câu hỏi tu từ)",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“难道”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"难道\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “难道”."
      }
    ]
  },
  {
    "id": "gram_119",
    "level": "HSK5",
    "title": "尤其 / 甚至: đặc biệt là / thậm chí",
    "category": "nhan-manh-van-viet",
    "structure": "尤其 / 甚至",
    "meaning": "Chuyên đề ngữ pháp HSK5: 尤其 / 甚至: đặc biệt là / thậm chí",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“尤其”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"尤其\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “尤其”."
      }
    ]
  },
  {
    "id": "gram_120",
    "level": "HSK5",
    "title": "不然 / 否则: nếu không thì",
    "category": "gioi-tu-lien-tu",
    "structure": "不然 / 否则",
    "meaning": "Chuyên đề ngữ pháp HSK5: 不然 / 否则: nếu không thì",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不然”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不然\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不然”."
      }
    ]
  },
  {
    "id": "gram_121",
    "level": "HSK5",
    "title": "看来 / 恐怕 / 说不定: suy đoán gần, e rằng, biết đâu",
    "category": "tinh-tu-trang-tu",
    "structure": "看来 / 恐怕 / 说不定",
    "meaning": "Chuyên đề ngữ pháp HSK5: 看来 / 恐怕 / 说不定: suy đoán gần, e rằng, biết đâu",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“看来”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"看来\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “看来”."
      }
    ]
  },
  {
    "id": "gram_122",
    "level": "HSK5",
    "title": "简直 / 几乎: đúng là / gần như",
    "category": "nhan-manh-van-viet",
    "structure": "简直 / 几乎",
    "meaning": "Chuyên đề ngữ pháp HSK5: 简直 / 几乎: đúng là / gần như",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“简直”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"简直\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “简直”."
      }
    ]
  },
  {
    "id": "gram_123",
    "level": "HSK5",
    "title": "顿时 / 立刻 / 一时: tức thời và tạm thời",
    "category": "tinh-tu-trang-tu",
    "structure": "顿时 / 立刻 / 一时",
    "meaning": "Chuyên đề ngữ pháp HSK5: 顿时 / 立刻 / 一时: tức thời và tạm thời",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“顿时”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"顿时\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “顿时”."
      }
    ]
  },
  {
    "id": "gram_124",
    "level": "HSK5",
    "title": "彼此、如此: lẫn nhau và như vậy",
    "category": "cau-truc",
    "structure": "彼此、如此",
    "meaning": "Chuyên đề ngữ pháp HSK5: 彼此、如此: lẫn nhau và như vậy",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“彼此”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"彼此\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “彼此”."
      }
    ]
  },
  {
    "id": "gram_125",
    "level": "HSK5",
    "title": "Lượng từ: 册、朵、幅、届、颗、匹、扇",
    "category": "luong-tu",
    "structure": "Lượng từ",
    "meaning": "Chuyên đề ngữ pháp HSK5: Lượng từ: 册、朵、幅、届、颗、匹、扇",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“册”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"册\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “册”."
      }
    ]
  },
  {
    "id": "gram_126",
    "level": "HSK5",
    "title": "过于、可、稍、稍微、尤其",
    "category": "tinh-tu-trang-tu",
    "structure": "过于、可、稍、稍微、尤其",
    "meaning": "Chuyên đề ngữ pháp HSK5: 过于、可、稍、稍微、尤其",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“过于”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"过于\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “过于”."
      }
    ]
  },
  {
    "id": "gram_127",
    "level": "HSK5",
    "title": "大都: phần lớn, đa số",
    "category": "tinh-tu-trang-tu",
    "structure": "大都",
    "meaning": "Chuyên đề ngữ pháp HSK5: 大都: phần lớn, đa số",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“大都”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"大都\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “大都”."
      }
    ]
  },
  {
    "id": "gram_128",
    "level": "HSK5",
    "title": "不时、将(要)、仍旧、时常、时刻、依旧、一向",
    "category": "tinh-tu-trang-tu",
    "structure": "不时、将(要)、仍旧、时常、时刻、依旧、一向",
    "meaning": "Chuyên đề ngữ pháp HSK5: 不时、将(要)、仍旧、时常、时刻、依旧、一向",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不时”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不时\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不时”."
      }
    ]
  },
  {
    "id": "gram_129",
    "level": "HSK5",
    "title": "偶尔、再次: thỉnh thoảng và một lần nữa",
    "category": "tinh-tu-trang-tu",
    "structure": "偶尔、再次",
    "meaning": "Chuyên đề ngữ pháp HSK5: 偶尔、再次: thỉnh thoảng và một lần nữa",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“偶尔”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"偶尔\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “偶尔”."
      }
    ]
  },
  {
    "id": "gram_130",
    "level": "HSK5",
    "title": "偷偷: lén, không để ai phát hiện",
    "category": "tinh-tu-trang-tu",
    "structure": "偷偷",
    "meaning": "Chuyên đề ngữ pháp HSK5: 偷偷: lén, không để ai phát hiện",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“偷偷”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"偷偷\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “偷偷”."
      }
    ]
  },
  {
    "id": "gram_131",
    "level": "HSK5",
    "title": "Phó từ ngữ khí: thái độ người nói",
    "category": "tinh-tu-trang-tu",
    "structure": "Phó từ ngữ khí",
    "meaning": "Chuyên đề ngữ pháp HSK5: Phó từ ngữ khí: thái độ người nói",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_132",
    "level": "HSK5",
    "title": "Giới từ 将: đưa đối tượng xử lý ra trước",
    "category": "gioi-tu-lien-tu",
    "structure": "Giới từ 将",
    "meaning": "Chuyên đề ngữ pháp HSK5: Giới từ 将: đưa đối tượng xử lý ra trước",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“将”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"将\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “将”."
      }
    ]
  },
  {
    "id": "gram_133",
    "level": "HSK5",
    "title": "Giới từ 由: do bên chịu trách nhiệm",
    "category": "gioi-tu-lien-tu",
    "structure": "Giới từ 由",
    "meaning": "Chuyên đề ngữ pháp HSK5: Giới từ 由: do bên chịu trách nhiệm",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“由”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"由\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “由”."
      }
    ]
  },
  {
    "id": "gram_134",
    "level": "HSK5",
    "title": "Giới từ 凭: dựa vào năng lực hoặc căn cứ",
    "category": "gioi-tu-lien-tu",
    "structure": "Giới từ 凭",
    "meaning": "Chuyên đề ngữ pháp HSK5: Giới từ 凭: dựa vào năng lực hoặc căn cứ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“凭”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"凭\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “凭”."
      }
    ]
  },
  {
    "id": "gram_135",
    "level": "HSK5",
    "title": "依据: căn cứ khách quan",
    "category": "gioi-tu-lien-tu",
    "structure": "依据",
    "meaning": "Chuyên đề ngữ pháp HSK5: 依据: căn cứ khách quan",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“依据”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"依据\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “依据”."
      }
    ]
  },
  {
    "id": "gram_136",
    "level": "HSK5",
    "title": "依照: làm theo quy định",
    "category": "gioi-tu-lien-tu",
    "structure": "依照",
    "meaning": "Chuyên đề ngữ pháp HSK5: 依照: làm theo quy định",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“依照”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"依照\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “依照”."
      }
    ]
  },
  {
    "id": "gram_137",
    "level": "HSK5",
    "title": "Nối mệnh đề: 从而、加上、完了、一旦",
    "category": "gioi-tu-lien-tu",
    "structure": "Nối mệnh đề",
    "meaning": "Chuyên đề ngữ pháp HSK5: Nối mệnh đề: 从而、加上、完了、一旦",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK5, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“从而”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"从而\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “从而”."
      }
    ]
  },
  {
    "id": "gram_138",
    "level": "HSK6",
    "title": "无非 / 不过是: chẳng qua là",
    "category": "nhan-manh-van-viet",
    "structure": "无非 / 不过是",
    "meaning": "Chuyên đề ngữ pháp HSK6: 无非 / 不过是: chẳng qua là",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“无非”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"无非\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “无非”."
      }
    ]
  },
  {
    "id": "gram_139",
    "level": "HSK6",
    "title": "不妨 / 何必: cứ thử cũng được / cớ gì phải",
    "category": "nhan-manh-van-viet",
    "structure": "不妨 / 何必",
    "meaning": "Chuyên đề ngữ pháp HSK6: 不妨 / 何必: cứ thử cũng được / cớ gì phải",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不妨”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不妨\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不妨”."
      }
    ]
  },
  {
    "id": "gram_140",
    "level": "HSK6",
    "title": "相比之下 / 与其说…不如说…: so bối cảnh và đính chính bản chất",
    "category": "so-sanh",
    "structure": "相比之下 / 与其说…不如说…",
    "meaning": "Chuyên đề ngữ pháp HSK6: 相比之下 / 与其说…不如说…: so bối cảnh và đính chính bản chất",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“相比之下”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"相比之下\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “相比之下”."
      }
    ]
  },
  {
    "id": "gram_141",
    "level": "HSK6",
    "title": "由此可见 / 从而: từ đó thấy rõ / nhờ đó dẫn tới",
    "category": "gioi-tu-lien-tu",
    "structure": "由此可见 / 从而",
    "meaning": "Chuyên đề ngữ pháp HSK6: 由此可见 / 从而: từ đó thấy rõ / nhờ đó dẫn tới",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“由此可见”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"由此可见\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “由此可见”."
      }
    ]
  },
  {
    "id": "gram_142",
    "level": "HSK6",
    "title": "若 / 倘若…则…: nếu… thì (văn viết)",
    "category": "gioi-tu-lien-tu",
    "structure": "若 / 倘若…则…",
    "meaning": "Chuyên đề ngữ pháp HSK6: 若 / 倘若…则…: nếu… thì (văn viết)",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“若”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"若\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “若”."
      }
    ]
  },
  {
    "id": "gram_143",
    "level": "HSK6",
    "title": "其 / 之: 其中、其实、其余、之一、之所以…是因为…",
    "category": "nhan-manh-van-viet",
    "structure": "其 / 之",
    "meaning": "Chuyên đề ngữ pháp HSK6: 其 / 之: 其中、其实、其余、之一、之所以…是因为…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“其”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"其\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “其”."
      }
    ]
  },
  {
    "id": "gram_144",
    "level": "HSK6",
    "title": "Ngữ pháp thành ngữ 4 chữ: 不X而Y, 无可X, 理所当然",
    "category": "nhan-manh-van-viet",
    "structure": "Ngữ pháp thành ngữ 4 chữ",
    "meaning": "Chuyên đề ngữ pháp HSK6: Ngữ pháp thành ngữ 4 chữ: 不X而Y, 无可X, 理所当然",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不”."
      }
    ]
  },
  {
    "id": "gram_145",
    "level": "HSK6",
    "title": "Văn báo chí: 将 / 以 / 均 / 皆",
    "category": "nhan-manh-van-viet",
    "structure": "Văn báo chí",
    "meaning": "Chuyên đề ngữ pháp HSK6: Văn báo chí: 将 / 以 / 均 / 皆",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“将”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"将\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “将”."
      }
    ]
  },
  {
    "id": "gram_146",
    "level": "HSK6",
    "title": "明明…却… / 反而: rõ ràng… mà lại / ngược lại",
    "category": "nhan-manh-van-viet",
    "structure": "明明…却… / 反而",
    "meaning": "Chuyên đề ngữ pháp HSK6: 明明…却… / 反而: rõ ràng… mà lại / ngược lại",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“明明”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"明明\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “明明”."
      }
    ]
  },
  {
    "id": "gram_147",
    "level": "HSK6",
    "title": "固然…但是…: dĩ nhiên là… nhưng…",
    "category": "gioi-tu-lien-tu",
    "structure": "固然…但是…",
    "meaning": "Chuyên đề ngữ pháp HSK6: 固然…但是…: dĩ nhiên là… nhưng…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“固然”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"固然\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “固然”."
      }
    ]
  },
  {
    "id": "gram_149",
    "level": "HSK6",
    "title": "不禁 / 不由得: không kìm được mà…",
    "category": "tinh-tu-trang-tu",
    "structure": "不禁 / 不由得",
    "meaning": "Chuyên đề ngữ pháp HSK6: 不禁 / 不由得: không kìm được mà…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不禁”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不禁\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不禁”."
      }
    ]
  },
  {
    "id": "gram_151",
    "level": "HSK6",
    "title": "为…而…: vì… mà…",
    "category": "gioi-tu-lien-tu",
    "structure": "为…而…",
    "meaning": "Chuyên đề ngữ pháp HSK6: 为…而…: vì… mà…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“为”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"为\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “为”."
      }
    ]
  },
  {
    "id": "gram_152",
    "level": "HSK6",
    "title": "受到 / 遭到 / 遭受: bị động văn viết",
    "category": "cau-truc",
    "structure": "受到 / 遭到 / 遭受",
    "meaning": "Chuyên đề ngữ pháp HSK6: 受到 / 遭到 / 遭受: bị động văn viết",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“受到”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"受到\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “受到”."
      }
    ]
  },
  {
    "id": "gram_153",
    "level": "HSK6",
    "title": "V + 于: 成立于 / 位于 / 毕业于…",
    "category": "gioi-tu-lien-tu",
    "structure": "V + 于",
    "meaning": "Chuyên đề ngữ pháp HSK6: V + 于: 成立于 / 位于 / 毕业于…",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“于”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"于\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “于”."
      }
    ]
  },
  {
    "id": "gram_154",
    "level": "HSK6",
    "title": "一旦 / 万一: một khi / nhỡ may",
    "category": "gioi-tu-lien-tu",
    "structure": "一旦 / 万一",
    "meaning": "Chuyên đề ngữ pháp HSK6: 一旦 / 万一: một khi / nhỡ may",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“一旦”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"一旦\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “一旦”."
      }
    ]
  },
  {
    "id": "gram_155",
    "level": "HSK6",
    "title": "趁（着）/ 乘机: nhân lúc, lợi cơ",
    "category": "gioi-tu-lien-tu",
    "structure": "趁（着）/ 乘机",
    "meaning": "Chuyên đề ngữ pháp HSK6: 趁（着）/ 乘机: nhân lúc, lợi cơ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“趁”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"趁\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “趁”."
      }
    ]
  },
  {
    "id": "gram_156",
    "level": "HSK6",
    "title": "…以来 / …为止 / …之际: kể từ khi / cho tới / vào lúc",
    "category": "tro-tu",
    "structure": "…以来 / …为止 / …之际",
    "meaning": "Chuyên đề ngữ pháp HSK6: …以来 / …为止 / …之际: kể từ khi / cho tới / vào lúc",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“以来”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"以来\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “以来”."
      }
    ]
  },
  {
    "id": "gram_157",
    "level": "HSK6",
    "title": "一…再… / 再三: lặp đi lặp lại",
    "category": "tinh-tu-trang-tu",
    "structure": "一…再… / 再三",
    "meaning": "Chuyên đề ngữ pháp HSK6: 一…再… / 再三: lặp đi lặp lại",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“一”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"一\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “一”."
      }
    ]
  },
  {
    "id": "gram_158",
    "level": "HSK6",
    "title": "Tiền tố loại: 超、多、反、无、亚、准",
    "category": "cau-truc",
    "structure": "Tiền tố loại",
    "meaning": "Chuyên đề ngữ pháp HSK6: Tiền tố loại: 超、多、反、无、亚、准",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“超”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"超\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “超”."
      }
    ]
  },
  {
    "id": "gram_159",
    "level": "HSK6",
    "title": "Hậu tố loại: 化、式、型、性",
    "category": "cau-truc",
    "structure": "Hậu tố loại",
    "meaning": "Chuyên đề ngữ pháp HSK6: Hậu tố loại: 化、式、型、性",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“化”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"化\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “化”."
      }
    ]
  },
  {
    "id": "gram_160",
    "level": "HSK6",
    "title": "本、此 trong văn phong trang trọng",
    "category": "cau-truc",
    "structure": "本、此 trong văn phong trang trọng",
    "meaning": "Chuyên đề ngữ pháp HSK6: 本、此 trong văn phong trang trọng",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“本”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"本\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “本”."
      }
    ]
  },
  {
    "id": "gram_161",
    "level": "HSK6",
    "title": "Lượng từ HSK6: 餐、串、滴、番、声、趟",
    "category": "luong-tu",
    "structure": "Lượng từ HSK6",
    "meaning": "Chuyên đề ngữ pháp HSK6: Lượng từ HSK6: 餐、串、滴、番、声、趟",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“餐”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"餐\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “餐”."
      }
    ]
  },
  {
    "id": "gram_162",
    "level": "HSK6",
    "title": "Phó từ 特、异常、尽、净、一齐、一同",
    "category": "tinh-tu-trang-tu",
    "structure": "Phó từ 特、异常、尽、净、一齐、一同",
    "meaning": "Chuyên đề ngữ pháp HSK6: Phó từ 特、异常、尽、净、一齐、一同",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“特”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"特\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “特”."
      }
    ]
  },
  {
    "id": "gram_163",
    "level": "HSK6",
    "title": "时时、一时、早晚 và 不禁、特地",
    "category": "tinh-tu-trang-tu",
    "structure": "时时、一时、早晚 và 不禁、特地",
    "meaning": "Chuyên đề ngữ pháp HSK6: 时时、一时、早晚 và 不禁、特地",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“时时”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"时时\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “时时”."
      }
    ]
  },
  {
    "id": "gram_164",
    "level": "HSK6",
    "title": "仿佛、才、刚好、偏、恰好",
    "category": "tinh-tu-trang-tu",
    "structure": "仿佛、才、刚好、偏、恰好",
    "meaning": "Chuyên đề ngữ pháp HSK6: 仿佛、才、刚好、偏、恰好",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“仿佛”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"仿佛\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “仿佛”."
      }
    ]
  },
  {
    "id": "gram_165",
    "level": "HSK6",
    "title": "沿着、同、与、至于",
    "category": "gioi-tu-lien-tu",
    "structure": "沿着、同、与、至于",
    "meaning": "Chuyên đề ngữ pháp HSK6: 沿着、同、与、至于",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“沿着”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"沿着\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “沿着”."
      }
    ]
  },
  {
    "id": "gram_166",
    "level": "HSK6",
    "title": "因、除、据 trong văn phong trang trọng",
    "category": "gioi-tu-lien-tu",
    "structure": "因、除、据 trong văn phong trang trọng",
    "meaning": "Chuyên đề ngữ pháp HSK6: 因、除、据 trong văn phong trang trọng",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“因”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"因\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “因”."
      }
    ]
  },
  {
    "id": "gram_167",
    "level": "HSK6",
    "title": "而、同、与、若、所、罢了、啦、嘛",
    "category": "gioi-tu-lien-tu",
    "structure": "而、同、与、若、所、罢了、啦、嘛",
    "meaning": "Chuyên đề ngữ pháp HSK6: 而、同、与、若、所、罢了、啦、嘛",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“而”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"而\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “而”."
      }
    ]
  },
  {
    "id": "gram_168",
    "level": "HSK6",
    "title": "数词+形容词+量词",
    "category": "luong-tu",
    "structure": "数词+形容词+量词",
    "meaning": "Chuyên đề ngữ pháp HSK6: 数词+形容词+量词",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“数词”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"数词\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “数词”."
      }
    ]
  },
  {
    "id": "gram_169",
    "level": "HSK6",
    "title": "或A或B và 无A无B",
    "category": "cau-truc",
    "structure": "或A或B và 无A无B",
    "meaning": "Chuyên đề ngữ pháp HSK6: 或A或B và 无A无B",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“或”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"或\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “或”."
      }
    ]
  },
  {
    "id": "gram_170",
    "level": "HSK6",
    "title": "为了……而……",
    "category": "gioi-tu-lien-tu",
    "structure": "为了……而……",
    "meaning": "Chuyên đề ngữ pháp HSK6: 为了……而……",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“为了”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"为了\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “为了”."
      }
    ]
  },
  {
    "id": "gram_171",
    "level": "HSK6",
    "title": "Bổ ngữ hướng nghĩa trạng thái",
    "category": "bo-ngu",
    "structure": "Bổ ngữ hướng nghĩa trạng thái",
    "meaning": "Chuyên đề ngữ pháp HSK6: Bổ ngữ hướng nghĩa trạng thái",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK6, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_172",
    "level": "HSK7",
    "title": "需: cần, phải (văn bản trang trọng)",
    "category": "nhan-manh-van-viet",
    "structure": "需",
    "meaning": "Chuyên đề ngữ pháp HSK7: 需: cần, phải (văn bản trang trọng)",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“需”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"需\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “需”."
      }
    ]
  },
  {
    "id": "gram_173",
    "level": "HSK7",
    "title": "何: nghi vấn trang trọng trong 何时 / 何处 / 为何",
    "category": "cau-hoi-phu-dinh",
    "structure": "何",
    "meaning": "Chuyên đề ngữ pháp HSK7: 何: nghi vấn trang trọng trong 何时 / 何处 / 为何",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“何”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"何\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “何”."
      }
    ]
  },
  {
    "id": "gram_174",
    "level": "HSK7",
    "title": "该 / 另 / 兹: chỉ định trong công văn",
    "category": "nhan-manh-van-viet",
    "structure": "该 / 另 / 兹",
    "meaning": "Chuyên đề ngữ pháp HSK7: 该 / 另 / 兹: chỉ định trong công văn",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“该”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"该\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “该”."
      }
    ]
  },
  {
    "id": "gram_175",
    "level": "HSK7",
    "title": "栋 / 粒 / 枚 / 则 / 盏 / 人次: lượng từ chuyên biệt",
    "category": "luong-tu",
    "structure": "栋 / 粒 / 枚 / 则 / 盏 / 人次",
    "meaning": "Chuyên đề ngữ pháp HSK7: 栋 / 粒 / 枚 / 则 / 盏 / 人次: lượng từ chuyên biệt",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“栋”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"栋\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “栋”."
      }
    ]
  },
  {
    "id": "gram_176",
    "level": "HSK7",
    "title": "极为: mức độ rất cao, thiên về văn viết",
    "category": "tinh-tu-trang-tu",
    "structure": "极为",
    "meaning": "Chuyên đề ngữ pháp HSK7: 极为: mức độ rất cao, thiên về văn viết",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“极为”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"极为\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “极为”."
      }
    ]
  },
  {
    "id": "gram_177",
    "level": "HSK7",
    "title": "尽: mức độ đến cùng trong 尽量 / 尽快 / 尽皆",
    "category": "tinh-tu-trang-tu",
    "structure": "尽",
    "meaning": "Chuyên đề ngữ pháp HSK7: 尽: mức độ đến cùng trong 尽量 / 尽快 / 尽皆",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“尽”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"尽\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “尽”."
      }
    ]
  },
  {
    "id": "gram_178",
    "level": "HSK7",
    "title": "蛮: khá, rất trong khẩu ngữ có kiểm soát",
    "category": "tinh-tu-trang-tu",
    "structure": "蛮",
    "meaning": "Chuyên đề ngữ pháp HSK7: 蛮: khá, rất trong khẩu ngữ có kiểm soát",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“蛮”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"蛮\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “蛮”."
      }
    ]
  },
  {
    "id": "gram_179",
    "level": "HSK7",
    "title": "颇: khá, tương đối trong nhận định văn viết",
    "category": "tinh-tu-trang-tu",
    "structure": "颇",
    "meaning": "Chuyên đề ngữ pháp HSK7: 颇: khá, tương đối trong nhận định văn viết",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“颇”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"颇\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “颇”."
      }
    ]
  },
  {
    "id": "gram_180",
    "level": "HSK7",
    "title": "稍稍: nhỉnh một chút, điều chỉnh mức độ",
    "category": "tinh-tu-trang-tu",
    "structure": "稍稍",
    "meaning": "Chuyên đề ngữ pháp HSK7: 稍稍: nhỉnh một chút, điều chỉnh mức độ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“稍稍”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"稍稍\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “稍稍”."
      }
    ]
  },
  {
    "id": "gram_181",
    "level": "HSK7",
    "title": "尤为: đặc biệt, nổi bật hơn trong một phạm vi",
    "category": "tinh-tu-trang-tu",
    "structure": "尤为",
    "meaning": "Chuyên đề ngữ pháp HSK7: 尤为: đặc biệt, nổi bật hơn trong một phạm vi",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“尤为”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"尤为\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “尤为”."
      }
    ]
  },
  {
    "id": "gram_182",
    "level": "HSK7",
    "title": "越发: càng ngày càng, nhấn xu hướng tăng",
    "category": "tinh-tu-trang-tu",
    "structure": "越发",
    "meaning": "Chuyên đề ngữ pháp HSK7: 越发: càng ngày càng, nhấn xu hướng tăng",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“越发”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"越发\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “越发”."
      }
    ]
  },
  {
    "id": "gram_183",
    "level": "HSK7",
    "title": "凡: mọi, hễ thuộc phạm vi nêu ra (văn viết)",
    "category": "gioi-tu-lien-tu",
    "structure": "凡",
    "meaning": "Chuyên đề ngữ pháp HSK7: 凡: mọi, hễ thuộc phạm vi nêu ra (văn viết)",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“凡”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"凡\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “凡”."
      }
    ]
  },
  {
    "id": "gram_184",
    "level": "HSK7",
    "title": "皆: đều trong văn viết cô đọng",
    "category": "tinh-tu-trang-tu",
    "structure": "皆",
    "meaning": "Chuyên đề ngữ pháp HSK7: 皆: đều trong văn viết cô đọng",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“皆”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"皆\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “皆”."
      }
    ]
  },
  {
    "id": "gram_185",
    "level": "HSK7",
    "title": "统统: toàn bộ, không chừa lại (khẩu ngữ)",
    "category": "tinh-tu-trang-tu",
    "structure": "统统",
    "meaning": "Chuyên đề ngữ pháp HSK7: 统统: toàn bộ, không chừa lại (khẩu ngữ)",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“统统”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"统统\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “统统”."
      }
    ]
  },
  {
    "id": "gram_186",
    "level": "HSK7",
    "title": "唯独: chỉ riêng, nêu ngoại lệ nổi bật",
    "category": "gioi-tu-lien-tu",
    "structure": "唯独",
    "meaning": "Chuyên đề ngữ pháp HSK7: 唯独: chỉ riêng, nêu ngoại lệ nổi bật",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“唯独”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"唯独\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “唯独”."
      }
    ]
  },
  {
    "id": "gram_187",
    "level": "HSK7",
    "title": "即: ngay, tức; đặc biệt 即将 / 即使 / 即日",
    "category": "tinh-tu-trang-tu",
    "structure": "即",
    "meaning": "Chuyên đề ngữ pháp HSK7: 即: ngay, tức; đặc biệt 即将 / 即使 / 即日",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“即”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"即\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “即”."
      }
    ]
  },
  {
    "id": "gram_188",
    "level": "HSK7",
    "title": "历来: xưa nay, tính liên tục lâu dài",
    "category": "tinh-tu-trang-tu",
    "structure": "历来",
    "meaning": "Chuyên đề ngữ pháp HSK7: 历来: xưa nay, tính liên tục lâu dài",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“历来”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"历来\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “历来”."
      }
    ]
  },
  {
    "id": "gram_189",
    "level": "HSK7",
    "title": "尚: vẫn, còn; chưa (văn viết)",
    "category": "tinh-tu-trang-tu",
    "structure": "尚",
    "meaning": "Chuyên đề ngữ pháp HSK7: 尚: vẫn, còn; chưa (văn viết)",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“尚”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"尚\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “尚”."
      }
    ]
  },
  {
    "id": "gram_190",
    "level": "HSK7",
    "title": "向来: từ trước đến nay, nhất quán về thái độ",
    "category": "tinh-tu-trang-tu",
    "structure": "向来",
    "meaning": "Chuyên đề ngữ pháp HSK7: 向来: từ trước đến nay, nhất quán về thái độ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“向来”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"向来\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “向来”."
      }
    ]
  },
  {
    "id": "gram_191",
    "level": "HSK7",
    "title": "频频: liên tiếp nhiều lần, thường có sắc thái đáng chú ý",
    "category": "tinh-tu-trang-tu",
    "structure": "频频",
    "meaning": "Chuyên đề ngữ pháp HSK7: 频频: liên tiếp nhiều lần, thường có sắc thái đáng chú ý",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“频频”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"频频\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “频频”."
      }
    ]
  },
  {
    "id": "gram_192",
    "level": "HSK7",
    "title": "再度: lại một lần nữa, sự việc tái diễn",
    "category": "tinh-tu-trang-tu",
    "structure": "再度",
    "meaning": "Chuyên đề ngữ pháp HSK7: 再度: lại một lần nữa, sự việc tái diễn",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“再度”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"再度\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “再度”."
      }
    ]
  },
  {
    "id": "gram_193",
    "level": "HSK7",
    "title": "亦: cũng, đồng thời (văn viết)",
    "category": "tinh-tu-trang-tu",
    "structure": "亦",
    "meaning": "Chuyên đề ngữ pháp HSK7: 亦: cũng, đồng thời (văn viết)",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“亦”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"亦\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “亦”."
      }
    ]
  },
  {
    "id": "gram_194",
    "level": "HSK7",
    "title": "未: chưa, không (văn viết)",
    "category": "cau-hoi-phu-dinh",
    "structure": "未",
    "meaning": "Chuyên đề ngữ pháp HSK7: 未: chưa, không (văn viết)",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“未”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"未\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “未”."
      }
    ]
  },
  {
    "id": "gram_195",
    "level": "HSK7",
    "title": "勿: chớ, không được (biển báo và quy định)",
    "category": "cau-hoi-phu-dinh",
    "structure": "勿",
    "meaning": "Chuyên đề ngữ pháp HSK7: 勿: chớ, không được (biển báo và quy định)",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK7, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“勿”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"勿\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “勿”."
      }
    ]
  },
  {
    "id": "gram_196",
    "level": "HSK8",
    "title": "不由得、顺便、一连: phản ứng, tiện thể và liên tiếp",
    "category": "tinh-tu-trang-tu",
    "structure": "不由得、顺便、一连",
    "meaning": "Chuyên đề ngữ pháp HSK8: 不由得、顺便、一连: phản ứng, tiện thể và liên tiếp",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不由得”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不由得\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不由得”."
      }
    ]
  },
  {
    "id": "gram_197",
    "level": "HSK8",
    "title": "按说、必定、不妨、何必、莫非",
    "category": "tinh-tu-trang-tu",
    "structure": "按说、必定、不妨、何必、莫非",
    "meaning": "Chuyên đề ngữ pháp HSK8: 按说、必定、不妨、何必、莫非",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“按说”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"按说\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “按说”."
      }
    ]
  },
  {
    "id": "gram_198",
    "level": "HSK8",
    "title": "白白、反倒、分明、怪不得、好在",
    "category": "tinh-tu-trang-tu",
    "structure": "白白、反倒、分明、怪不得、好在",
    "meaning": "Chuyên đề ngữ pháp HSK8: 白白、反倒、分明、怪不得、好在",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“白白”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"白白\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “白白”."
      }
    ]
  },
  {
    "id": "gram_199",
    "level": "HSK8",
    "title": "乃、难怪、偏偏、索性、万万",
    "category": "tinh-tu-trang-tu",
    "structure": "乃、难怪、偏偏、索性、万万",
    "meaning": "Chuyên đề ngữ pháp HSK8: 乃、难怪、偏偏、索性、万万",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“乃”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"乃\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “乃”."
      }
    ]
  },
  {
    "id": "gram_200",
    "level": "HSK8",
    "title": "未免、无非、幸好、幸亏、终究",
    "category": "tinh-tu-trang-tu",
    "structure": "未免、无非、幸好、幸亏、终究",
    "meaning": "Chuyên đề ngữ pháp HSK8: 未免、无非、幸好、幸亏、终究",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“未免”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"未免\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “未免”."
      }
    ]
  },
  {
    "id": "gram_201",
    "level": "HSK8",
    "title": "顺着、当着、就、趁、基于、依",
    "category": "gioi-tu-lien-tu",
    "structure": "顺着、当着、就、趁、基于、依",
    "meaning": "Chuyên đề ngữ pháp HSK8: 顺着、当着、就、趁、基于、依",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“顺着”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"顺着\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “顺着”."
      }
    ]
  },
  {
    "id": "gram_202",
    "level": "HSK8",
    "title": "及、继而、要不是、之、而已、矣",
    "category": "gioi-tu-lien-tu",
    "structure": "及、继而、要不是、之、而已、矣",
    "meaning": "Chuyên đề ngữ pháp HSK8: 及、继而、要不是、之、而已、矣",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“及”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"及\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “及”."
      }
    ]
  },
  {
    "id": "gram_203",
    "level": "HSK8",
    "title": "Số lượng trừu tượng và mô thức đối xứng",
    "category": "cau-truc",
    "structure": "Số lượng trừu tượng và mô thức đối xứng",
    "meaning": "Chuyên đề ngữ pháp HSK8: Số lượng trừu tượng và mô thức đối xứng",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_204",
    "level": "HSK8",
    "title": "巴不得、别提了、可不是、没说的",
    "category": "nhan-manh-van-viet",
    "structure": "巴不得、别提了、可不是、没说的",
    "meaning": "Chuyên đề ngữ pháp HSK8: 巴不得、别提了、可不是、没说的",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“巴不得”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"巴不得\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “巴不得”."
      }
    ]
  },
  {
    "id": "gram_205",
    "level": "HSK8",
    "title": "Dấu hiệu nối và tổng kết lập luận",
    "category": "nhan-manh-van-viet",
    "structure": "Dấu hiệu nối và tổng kết lập luận",
    "meaning": "Chuyên đề ngữ pháp HSK8: Dấu hiệu nối và tổng kết lập luận",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_206",
    "level": "HSK8",
    "title": "不知……好、所谓……就是……、以……为……",
    "category": "cau-truc",
    "structure": "不知……好、所谓……就是……、以……为……",
    "meaning": "Chuyên đề ngữ pháp HSK8: 不知……好、所谓……就是……、以……为……",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不知”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不知\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不知”."
      }
    ]
  },
  {
    "id": "gram_207",
    "level": "HSK8",
    "title": "Bổ ngữ, bị động và so sánh nâng cao",
    "category": "cau-truc",
    "structure": "Bổ ngữ, bị động và so sánh nâng cao",
    "meaning": "Chuyên đề ngữ pháp HSK8: Bổ ngữ, bị động và so sánh nâng cao",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_208",
    "level": "HSK8",
    "title": "一面……一面……、此后、起初……才……",
    "category": "cau-truc",
    "structure": "一面……一面……、此后、起初……才……",
    "meaning": "Chuyên đề ngữ pháp HSK8: 一面……一面……、此后、起初……才……",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“一面”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"一面\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “一面”."
      }
    ]
  },
  {
    "id": "gram_209",
    "level": "HSK8",
    "title": "况且、连……更不用说、乃至、且、甚至于",
    "category": "cau-truc",
    "structure": "况且、连……更不用说、乃至、且、甚至于",
    "meaning": "Chuyên đề ngữ pháp HSK8: 况且、连……更不用说、乃至、且、甚至于",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“况且”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"况且\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “况且”."
      }
    ]
  },
  {
    "id": "gram_210",
    "level": "HSK8",
    "title": "或……或……、宁可、与其、而、反倒",
    "category": "cau-truc",
    "structure": "或……或……、宁可、与其、而、反倒",
    "meaning": "Chuyên đề ngữ pháp HSK8: 或……或……、宁可、与其、而、反倒",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“或”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"或\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “或”."
      }
    ]
  },
  {
    "id": "gram_211",
    "level": "HSK8",
    "title": "倘若、幸亏……否则、别管、任",
    "category": "cau-truc",
    "structure": "倘若、幸亏……否则、别管、任",
    "meaning": "Chuyên đề ngữ pháp HSK8: 倘若、幸亏……否则、别管、任",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“倘若”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"倘若\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “倘若”."
      }
    ]
  },
  {
    "id": "gram_212",
    "level": "HSK8",
    "title": "故、鉴于、以致、以至于、之所以",
    "category": "cau-truc",
    "structure": "故、鉴于、以致、以至于、之所以",
    "meaning": "Chuyên đề ngữ pháp HSK8: 故、鉴于、以致、以至于、之所以",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“故”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"故\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “故”."
      }
    ]
  },
  {
    "id": "gram_213",
    "level": "HSK8",
    "title": "固然、即便、虽说、纵然",
    "category": "cau-truc",
    "structure": "固然、即便、虽说、纵然",
    "meaning": "Chuyên đề ngữ pháp HSK8: 固然、即便、虽说、纵然",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“固然”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"固然\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “固然”."
      }
    ]
  },
  {
    "id": "gram_214",
    "level": "HSK8",
    "title": "纵然、以、以免/免得: nhượng bộ và mục đích",
    "category": "cau-truc",
    "structure": "纵然、以、以免/免得",
    "meaning": "Chuyên đề ngữ pháp HSK8: 纵然、以、以免/免得: nhượng bộ và mục đích",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“纵然”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"纵然\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “纵然”."
      }
    ]
  },
  {
    "id": "gram_215",
    "level": "HSK8",
    "title": "Mở rộng mô thức đối xứng trong diễn ngôn",
    "category": "cau-truc",
    "structure": "Mở rộng mô thức đối xứng trong diễn ngôn",
    "meaning": "Chuyên đề ngữ pháp HSK8: Mở rộng mô thức đối xứng trong diễn ngôn",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK8, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_216",
    "level": "HSK9",
    "title": "也就是说: diễn giải lại để khóa nghĩa",
    "category": "cau-truc",
    "structure": "也就是说",
    "meaning": "Chuyên đề ngữ pháp HSK9: 也就是说: diễn giải lại để khóa nghĩa",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“也就是说”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"也就是说\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “也就是说”."
      }
    ]
  },
  {
    "id": "gram_217",
    "level": "HSK9",
    "title": "要……就……个……: hành động nhanh, dứt khoát",
    "category": "cau-truc",
    "structure": "要……就……个……",
    "meaning": "Chuyên đề ngữ pháp HSK9: 要……就……个……: hành động nhanh, dứt khoát",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“要”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"要\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “要”."
      }
    ]
  },
  {
    "id": "gram_218",
    "level": "HSK9",
    "title": "V就V，别……: cảnh báo bằng câu紧缩",
    "category": "cau-truc",
    "structure": "V就V，别……",
    "meaning": "Chuyên đề ngữ pháp HSK9: V就V，别……: cảnh báo bằng câu紧缩",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“就”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"就\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “就”."
      }
    ]
  },
  {
    "id": "gram_219",
    "level": "HSK9",
    "title": "Câu phức ba tầng trở lên: quản lý quan hệ",
    "category": "cau-truc",
    "structure": "Câu phức ba tầng trở lên",
    "meaning": "Chuyên đề ngữ pháp HSK9: Câu phức ba tầng trở lên: quản lý quan hệ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_220",
    "level": "HSK9",
    "title": "何必、何苦……呢？: phản vấn để nhấn mạnh",
    "category": "nhan-manh-van-viet",
    "structure": "何必、何苦……呢？",
    "meaning": "Chuyên đề ngữ pháp HSK9: 何必、何苦……呢？: phản vấn để nhấn mạnh",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“何必”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"何必\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “何必”."
      }
    ]
  },
  {
    "id": "gram_221",
    "level": "HSK9",
    "title": "话又说回来、X也不是不X也不是",
    "category": "nhan-manh-van-viet",
    "structure": "话又说回来、X也不是不X也不是",
    "meaning": "Chuyên đề ngữ pháp HSK9: 话又说回来、X也不是不X也不是",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“话又说回来”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"话又说回来\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “话又说回来”."
      }
    ]
  },
  {
    "id": "gram_222",
    "level": "HSK9",
    "title": "X也好/也罢 và X了又Y",
    "category": "nhan-manh-van-viet",
    "structure": "X也好/也罢 và X了又Y",
    "meaning": "Chuyên đề ngữ pháp HSK9: X也好/也罢 và X了又Y",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“也好”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"也好\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “也好”."
      }
    ]
  },
  {
    "id": "gram_223",
    "level": "HSK9",
    "title": "X也X不…… và 别提（有）多X了",
    "category": "nhan-manh-van-viet",
    "structure": "X也X不…… và 别提（有）多X了",
    "meaning": "Chuyên đề ngữ pháp HSK9: X也X不…… và 别提（有）多X了",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“也”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"也\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “也”."
      }
    ]
  },
  {
    "id": "gram_224",
    "level": "HSK9",
    "title": "不知X的 và 话是这么说，不过……",
    "category": "nhan-manh-van-viet",
    "structure": "不知X的 và 话是这么说，不过……",
    "meaning": "Chuyên đề ngữ pháp HSK9: 不知X的 và 话是这么说，不过……",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“不知”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"不知\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “不知”."
      }
    ]
  },
  {
    "id": "gram_225",
    "level": "HSK9",
    "title": "看你那……样 và 看在……面子上",
    "category": "nhan-manh-van-viet",
    "structure": "看你那……样 và 看在……面子上",
    "meaning": "Chuyên đề ngữ pháp HSK9: 看你那……样 và 看在……面子上",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“看你那”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"看你那\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “看你那”."
      }
    ]
  },
  {
    "id": "gram_226",
    "level": "HSK9",
    "title": "哪有……和 什么X的Y的",
    "category": "nhan-manh-van-viet",
    "structure": "哪有……和 什么X的Y的",
    "meaning": "Chuyên đề ngữ pháp HSK9: 哪有……和 什么X的Y的",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“哪有”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"哪有\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “哪有”."
      }
    ]
  },
  {
    "id": "gram_227",
    "level": "HSK9",
    "title": "说到哪儿去了、无所谓、要X有X",
    "category": "nhan-manh-van-viet",
    "structure": "说到哪儿去了、无所谓、要X有X",
    "meaning": "Chuyên đề ngữ pháp HSK9: 说到哪儿去了、无所谓、要X有X",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": [
      {
        "zh": "我们在学习“说到哪儿去了”的用法。",
        "pinyin": "Wǒmen zài xuéxí \"说到哪儿去了\" de yòngfǎ.",
        "vi": "Chúng tôi đang học cách dùng ngữ pháp “说到哪儿去了”."
      }
    ]
  },
  {
    "id": "gram_228",
    "level": "HSK9",
    "title": "Cụm câu có và không có từ liên kết",
    "category": "cau-truc",
    "structure": "Cụm câu có và không có từ liên kết",
    "meaning": "Chuyên đề ngữ pháp HSK9: Cụm câu có và không có từ liên kết",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  },
  {
    "id": "gram_229",
    "level": "HSK9",
    "title": "Câu nhóm liên hợp và chính-phụ",
    "category": "cau-truc",
    "structure": "Câu nhóm liên hợp và chính-phụ",
    "meaning": "Chuyên đề ngữ pháp HSK9: Câu nhóm liên hợp và chính-phụ",
    "usage": "Điểm ngữ pháp quan trọng trong cấp độ HSK9, dùng phổ biến trong giao tiếp và đề thi HSK.",
    "notes": [
      "Ôn tập thường xuyên và đặt câu ví dụ thực tế để ghi nhớ sâu sắc."
    ],
    "examples": []
  }
];
