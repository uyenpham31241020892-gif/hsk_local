export interface IdiomStory {
  id: string;
  idiom: string;            // 4 chữ thành ngữ
  pinyin: string;
  hanViet: string;
  meaningVi: string;        // Nghĩa tiếng Việt
  hskLevel: number;
  moralLesson: string;      // Bài học triết lý
  storyLines: {
    zh: string;
    pinyin: string;
    vi: string;
  }[];
  keywords: {
    word: string;
    pinyin: string;
    meaning: string;
  }[];
}

export const idiomStories: IdiomStory[] = [
  {
    id: 'idiom_jingdizhiwa',
    idiom: '井底之蛙',
    pinyin: 'jǐng dǐ zhī wā',
    hanViet: 'Tỉnh để chi oa',
    meaningVi: 'Ếch ngồi đáy giếng (tầm nhìn hạn hẹp, tự mãn)',
    hskLevel: 3,
    moralLesson: 'Đừng tự mãn khi chỉ ở trong một góc nhỏ hẹp của thế giới. Hãy mở rộng tầm mắt và không ngừng học hỏi.',
    storyLines: [
      { zh: '从前，有一只青蛙住在一口废弃的浅井里。', pinyin: 'Cóngqián, yǒu yī zhī qīngwā zhù zài yī kǒu fèiqì de qiǎnjǐng lǐ.', vi: 'Ngày xửa ngày xưa, có một chú ếch sống trong một cái giếng cạn bỏ hoang.' },
      { zh: '它觉得自己是这里最快乐的王。', pinyin: 'Tā juéde zìjǐ shì zhèlǐ zuì kuàilè de wáng.', vi: 'Nó cảm thấy mình là vị vua hạnh phúc nhất ở nơi này.' },
      { zh: '一天，一只大海龟经过井口。', pinyin: 'Yī tiān, yī zhī dà hǎiguī jīngguò jǐngkǒu.', vi: 'Một ngày nọ, một chú rùa biển lớn đi ngang qua miệng giếng.' },
      { zh: '青蛙得意地对海龟说：“你看，我在这里多自在啊！”', pinyin: 'Qīngwā déyì de duì hǎiguī shuō: "Nǐ kàn, wǒ zài zhèlǐ duō zìzài a!"', vi: 'Ếch đắc ý nói với rùa biển: "Bạn nhìn xem, tôi ở đây tự tại biết bao!"' },
      { zh: '海龟告诉它：“大海辽阔无边，千里的远，万丈的高，那才叫壮观。”', pinyin: 'Hǎiguī gàosu tā: "Dàhǎi liáokuò wúbiān, qiānlǐ de yuǎn, wànzhàng de gāo, nà cái jiào zhuàngguān."', vi: 'Rùa biển bảo nó: "Biển cả bao la vô tận, xa ngàn dặm, sâu vạn trượng, đó mới gọi là kỳ vĩ."' },
      { zh: '青蛙听了，目瞪口呆，觉得自己非常渺小。', pinyin: 'Qīngwā tīng le, mùdèng-kǒudāi, juéde zìjǐ fēicháng miǎoxiǎo.', vi: 'Ếch nghe xong, sững sờ há hốc miệng, bỗng thấy bản thân vô cùng nhỏ bé.' },
    ],
    keywords: [
      { word: '井', pinyin: 'jǐng', meaning: 'cái giếng nước' },
      { word: '青蛙', pinyin: 'qīngwā', meaning: 'con ếch' },
      { word: '海龟', pinyin: 'hǎiguī', meaning: 'con rùa biển' },
      { word: '辽阔', pinyin: 'liáokuò', meaning: 'bao la, bát ngát' },
      { word: '目瞪口呆', pinyin: 'mùdèng-kǒudāi', meaning: 'há hốc mồm, sững sờ ngạc nhiên' },
    ],
  },
  {
    id: 'idiom_huashetianzu',
    idiom: '画蛇添足',
    pinyin: 'huà shé tiān zú',
    hanViet: 'Họa xà thiêm túc',
    meaningVi: 'Vẽ rắn thêm chân (làm chuyện thừa thãi, tự chuốc thất bại)',
    hskLevel: 3,
    moralLesson: 'Làm việc gì cũng phải biết điểm dừng. Làm điều thừa thãi không những không được khen mà còn làm hỏng việc lớn.',
    storyLines: [
      { zh: '战国时期，楚国有人送给几位门客一壶美酒。', pinyin: 'Zhànguó shíqī, Chǔguó yǒurén sòng gěi jǐ wèi ménkè yī hú měijiǔ.', vi: 'Thời Chiến Quốc, ở nước Sở có người tặng cho mấy vị gia khách một bình rượu ngon.' },
      { zh: '酒只有一壶，大家决定比赛画蛇，谁先画好谁就喝酒。', pinyin: 'Jiǔ zhǐ yǒu yī hú, dàjiā juédìng bǐsài huà shé, shéi xiān huà hǎo shéi jiù hē jiǔ.', vi: 'Rượu chỉ có một bình, mọi người quyết định thi vẽ rắn, ai vẽ xong trước thì được uống.' },
      { zh: '有一个人最先画完了蛇，他拿起酒壶准备喝。', pinyin: 'Yǒu yī ge rén zuì xiān huà wán le shé, tā ná qǐ jiǔhú zhǔnbèi hē.', vi: 'Có một người vẽ xong con rắn trước tiên, anh ta cầm lấy bình rượu chuẩn bị uống.' },
      { zh: '他见别人还没画完，便得意地给蛇添上了四只脚。', pinyin: 'Tā jiàn biérén hái méi huà wán, biàn déyì de gěi shé tiān shàng le sì zhī jiǎo.', vi: 'Anh ta thấy người khác vẫn chưa vẽ xong, liền đắc ý vẽ thêm bốn cái chân cho con rắn.' },
      { zh: '这时另一个人也画好了，抢过酒壶说：“蛇本来没有脚，你画的不是蛇！”', pinyin: 'Zhè shí lìng yī ge rén yě huà hǎo le, qiǎng guò jiǔhú shuō: "Shé běnlái méiyǒu jiǎo, nǐ huà de bù shì shé!"', vi: 'Lúc này một người khác cũng vẽ xong, giật lấy bình rượu nói: "Rắn vốn làm gì có chân, anh vẽ đâu phải là rắn!"' },
      { zh: '结果那个添了脚的人一口酒也没喝到。', pinyin: 'Jiéguǒ nà ge tiān le jiǎo de rén yī kǒu jiǔ yě méi hē dào.', vi: 'Kết cục người vẽ thêm chân kia chẳng được uống ngụm rượu nào.' },
    ],
    keywords: [
      { word: '蛇', pinyin: 'shé', meaning: 'con rắn' },
      { word: '添', pinyin: 'tiān', meaning: 'thêm vào, bổ sung' },
      { word: '脚', pinyin: 'jiǎo', meaning: 'bàn chân' },
      { word: '本来', pinyin: 'běnlái', meaning: 'vốn dĩ, ban đầu' },
    ],
  },
  {
    id: 'idiom_shouzhudaitu',
    idiom: '守株待兔',
    pinyin: 'shǒu zhū dài tù',
    hanViet: 'Thủ chu đãi thỏ',
    meaningVi: 'Ôm cây đợi thỏ (ngồi chờ sung rụng, không chịu nỗ lực)',
    hskLevel: 4,
    moralLesson: 'Không thể trông chờ vào vận may ngẫu nhiên mà không chịu bỏ công sức lao động chăm chỉ.',
    storyLines: [
      { zh: '宋国有一个农夫，在田里辛勤地劳作。', pinyin: 'Sòngguó yǒu yī ge nóngfū, zài tián lǐ xīnqín de láozuò.', vi: 'Nước Tống có một người nông dân, đang chăm chỉ làm việc trên đồng ruộng.' },
      { zh: '忽然，一只兔子飞快地跑过来，撞在树桩上死掉了。', pinyin: 'Hūrán, yī zhī tùzi fēikuài de pǎo guòlái, zhuàng zài shùzhuāng shàng sǐ diào le.', vi: 'Đột nhiên, một con thỏ chạy như bay tới, đâm sầm vào gốc cây chết tươi.' },
      { zh: '农夫白白捡了一只兔子，心里非常高兴。', pinyin: 'Nóngfū báibái jiǎn le yī zhī tùzi, xīn lǐ fēicháng gāoxìng.', vi: 'Người nông dân bỗng dưng nhặt được con thỏ, trong lòng sướng rơn.' },
      { zh: '从此，他放下农具，天天守在树桩旁等待再捡兔子。', pinyin: 'Cóngcǐ, tā fàngxià nóngjù, tiāntiān shǒu zài shùzhuāng páng děngdài zài jiǎn tùzi.', vi: 'Kể từ đó, ông ta buông bỏ cày cuốc, ngày ngày ngồi canh bên gốc cây đợi nhặt thỏ tiếp.' },
      { zh: '田地荒芜了，而他再也没有等到第二只兔子。', pinyin: 'Tiándì huāngwú le, ér tā zài yě méiyǒu děng dào dì èr zhī tùzi.', vi: 'Ruộng đồng hoang tàn cỏ mọc, mà ông ta thì chẳng bao giờ đợi được con thỏ thứ hai.' },
    ],
    keywords: [
      { word: '农夫', pinyin: 'nóngfū', meaning: 'người nông dân' },
      { word: '树桩', pinyin: 'shùzhuāng', meaning: 'gốc cây đốn' },
      { word: '等待', pinyin: 'děngdài', meaning: 'chờ đợi' },
      { word: '兔子', pinyin: 'tùzi', meaning: 'con thỏ' },
    ],
  },
  {
    id: 'idiom_hujiahuwei',
    idiom: '狐假虎威',
    pinyin: 'hú jiǎ hǔ wēi',
    hanViet: 'Hồ giả hổ uy',
    meaningVi: 'Cáo mượn oai hùm (lợi dụng thế lực người khác để dọa dẫm)',
    hskLevel: 4,
    moralLesson: 'Kẻ mượn oai quyền của người khác để tác oai tác quái sớm muộn cũng sẽ bị lật tẩy bản chất hèn nhát.',
    storyLines: [
      { zh: '森林里有一只老虎抓到了一只狐狸，准备吃掉它。', pinyin: 'Sēnlín lǐ yǒu yī zhī lǎohǔ zhuā dào le yī zhī húli, zhǔnbèi chī diào tā.', vi: 'Trong rừng nọ có một con hổ bắt được một con cáo, chuẩn bị ăn thịt nó.' },
      { zh: '狐狸灵机一动说：“我是天帝派来的兽中之王，你不能吃我！”', pinyin: 'Húli língjī-yīdòng shuō: "Wǒ shì Tiāndì pài lái de shòuzhōngzhīwáng, nǐ bù néng chī wǒ!"', vi: 'Con cáo nhanh trí nảy ra mẹo nói: "Ta là vua muôn loài do Thượng Đế phái xuống, ngươi không được ăn ta!"' },
      { zh: '老虎不信，狐狸便说：“你跟着我走，看百兽敢不敢不怕我。”', pinyin: 'Lǎohǔ bù xìn, húli biàn shuō: "Nǐ gēn zhe wǒ zǒu, kàn bǎishòu gǎn bù gǎn bù pà wǒ."', vi: 'Hổ không tin, cáo liền bảo: "Ngươi đi theo sau ta mà xem muôn thú có sợ ta không."' },
      { zh: '狐狸神气活现地走在前面，老虎紧随其后。', pinyin: 'Húli shénqì-huóxiàn de zǒu zài qiánmiàn, lǎohǔ jǐnsuí-qíhòu.', vi: 'Cáo vênh váo bước đằng trước, hổ theo sát ngay phía sau.' },
      { zh: '百兽看见老虎，吓得纷纷逃跑。老虎以为百兽真的怕狐狸。', pinyin: 'Bǎishòu kànjiàn lǎohǔ, xià de fēnfēn táopǎo. Lǎohǔ yǐwéi bǎishòu zhēn de pà húli.', vi: 'Muôn thú nhìn thấy con hổ, sợ quá chạy tán loạn. Hổ ta tưởng muôn thú thực sự sợ con cáo.' },
    ],
    keywords: [
      { word: '狐狸', pinyin: 'húli', meaning: 'con cáo' },
      { word: '老虎', pinyin: 'lǎohǔ', meaning: 'con hổ' },
      { word: '威风', pinyin: 'wēifēng', meaning: 'oai phong, uy thế' },
      { word: '百兽', pinyin: 'bǎishòu', meaning: 'muôn loài thú' },
    ],
  },
];
