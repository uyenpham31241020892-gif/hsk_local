import type { ExampleSentence } from '../types';

/**
 * Ngân hàng câu ví dụ phong phú, chuẩn hóa 100% theo đúng cấp độ HSK 1 & HSK 2.
 * Ngữ pháp chuẩn mực, từ vựng ngắn gọn, thân thuộc (đời sống, gia đình, học tập, giao tiếp).
 * Tuyệt đối không dùng từ HSK 4-6 phức tạp để tránh gây sốc hoặc quá tải cho người học sơ cấp.
 */
export const extraSentenceBank: Record<string, ExampleSentence[]> = {
  // Đại từ & Xưng hô
  '我': [
    { zh: '我是越南人。', pinyin: 'Wǒ shì Yuènán rén.', vi: 'Tôi là người Việt Nam.' },
    { zh: '我想去学校学汉语。', pinyin: 'Wǒ xiǎng qù xuéxiào xué hànyǔ.', vi: 'Tôi muốn đến trường học tiếng Hán.' },
    { zh: '我今天很高兴。', pinyin: 'Wǒ jīntiān hěn gāoxìng.', vi: 'Hôm nay tôi rất vui.' },
    { zh: '这是我的书。', pinyin: 'Zhè shì wǒ de shū.', vi: 'Đây là sách của tôi.' },
    { zh: '我喜欢吃中国菜。', pinyin: 'Wǒ xǐhuan chī Zhōngguó cài.', vi: 'Tôi thích ăn món ăn Trung Quốc.' },
  ],
  '你': [
    { zh: '你好，你叫什么名字？', pinyin: 'Nǐ hǎo, nǐ jiào shénme míngzi?', vi: 'Xin chào, bạn tên là gì?' },
    { zh: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', vi: 'Bạn là người nước nào?' },
    { zh: '你想喝茶还是喝水？', pinyin: 'Nǐ xiǎng hē chá háishì hē shuǐ?', vi: 'Bạn muốn uống trà hay uống nước?' },
    { zh: '你明天去学校吗？', pinyin: 'Nǐ míngtiān qù xuéxiào ma?', vi: 'Ngày mai bạn đi học không?' },
  ],
  '他': [
    { zh: '他是我的好朋友。', pinyin: 'Tā shì wǒ de hǎo péngyou.', vi: 'Anh ấy là người bạn tốt của tôi.' },
    { zh: '他明天坐飞机去北京。', pinyin: 'Tā míngtiān zuò fēijī qù Běijīng.', vi: 'Ngày mai anh ấy đi máy bay đến Bắc Kinh.' },
    { zh: '他不在家，他在医院。', pinyin: 'Tā bú zài jiā, tā zài yīyuàn.', vi: 'Anh ấy không có ở nhà, anh ấy ở bệnh viện.' },
    { zh: '他会说一点儿汉语。', pinyin: 'Tā huì shuō yìdiǎnr hànyǔ.', vi: 'Anh ấy biết nói một chút tiếng Hán.' },
  ],
  '她': [
    { zh: '她是我们的汉语老师。', pinyin: 'Tā shì wǒmen de hànyǔ lǎoshī.', vi: 'Cô ấy là cô giáo tiếng Hán của chúng tôi.' },
    { zh: '她今年十八岁。', pinyin: 'Tā jīnnián shíbā suì.', vi: 'Cô ấy năm nay 18 tuổi.' },
    { zh: '她去商店买苹果了。', pinyin: 'Tā qù shāngdiàn mǎi píngguǒ le.', vi: 'Cô ấy đi cửa hàng mua táo rồi.' },
    { zh: '她很喜欢小猫。', pinyin: 'Tā hěn xǐhuan xiǎomāo.', vi: 'Cô ấy rất thích mèo con.' },
  ],
  '我们': [
    { zh: '我们都是学生。', pinyin: 'Wǒmen dōu shì xuésheng.', vi: 'Chúng tôi đều là học sinh.' },
    { zh: '我们一起去吃米饭吧。', pinyin: 'Wǒmen yīqǐ qù chī mǐfàn ba.', vi: 'Chúng mình cùng đi ăn cơm nhé.' },
    { zh: '我们坐出租车回家吧。', pinyin: 'Wǒmen zuò chūzūchē huíjiā ba.', vi: 'Chúng mình đi taxi về nhà đi.' },
    { zh: '我们明天去看电影。', pinyin: 'Wǒmen míngtiān qù kàn diànyǐng.', vi: 'Ngày mai chúng tôi đi xem phim.' },
  ],
  '爸爸': [
    { zh: '我爸爸是医生。', pinyin: 'Wǒ bàba shì yīshēng.', vi: 'Bố tôi là bác sĩ.' },
    { zh: '爸爸在家里看书。', pinyin: 'Bàba zài jiā lǐ kànshū.', vi: 'Bố đang ở nhà đọc sách.' },
    { zh: '爸爸今天工作很忙。', pinyin: 'Bàba jīntiān gōngzuò hěn máng.', vi: 'Hôm nay bố làm việc rất bận.' },
    { zh: '爸爸很喜欢喝茶。', pinyin: 'Bàba hěn xǐhuan hē chá.', vi: 'Bố rất thích uống trà.' },
  ],
  '妈妈': [
    { zh: '我妈妈做的菜很好吃。', pinyin: 'Wǒ māma zuò de cài hěn hǎochī.', vi: 'Món mẹ tôi nấu rất ngon.' },
    { zh: '妈妈去商店买东西了。', pinyin: 'Māma qù shāngdiàn mǎi dōngxi le.', vi: 'Mẹ đi cửa hàng mua đồ rồi.' },
    { zh: '妈妈，你在哪儿？', pinyin: 'Māma, nǐ zài nǎr?', vi: 'Mẹ ơi, mẹ đang ở đâu thế?' },
    { zh: '妈妈喝了一杯热水。', pinyin: 'Māma hē le yì bēi rè shuǐ.', vi: 'Mẹ đã uống một ly nước ấm.' },
  ],
  '朋友': [
    { zh: '他是我最好的朋友。', pinyin: 'Tā shì wǒ zuì hǎo de péngyou.', vi: 'Cậu ấy là người bạn tốt nhất của tôi.' },
    { zh: '我有很多中国朋友。', pinyin: 'Wǒ yǒu hěn duō Zhōngguó péngyou.', vi: 'Tôi có rất nhiều người bạn Trung Quốc.' },
    { zh: '我和朋友一起去喝茶。', pinyin: 'Wǒ hé péngyou yīqǐ qù hē chá.', vi: 'Tôi và bạn cùng nhau đi uống trà.' },
    { zh: '明天朋友来我家做客。', pinyin: 'Míngtiān péngyou lái wǒ jiā zuòkè.', vi: 'Ngày mai bạn tôi đến nhà tôi chơi.' },
  ],
  '老师': [
    { zh: '李老师教我们汉语。', pinyin: 'Lǐ lǎoshī jiāo wǒmen hànyǔ.', vi: 'Thầy Lý dạy chúng tôi tiếng Hán.' },
    { zh: '王老师在学校吗？', pinyin: 'Wáng lǎoshī zài xuéxiào ma?', vi: 'Thầy Vương có ở trường không?' },
    { zh: '老师好，这是我的作业。', pinyin: 'Lǎoshī hǎo, zhè shì wǒ de zuòyè.', vi: 'Em chào thầy, đây là bài tập của em.' },
    { zh: '我们的老师非常高兴。', pinyin: 'Wǒmen de lǎoshī fēicháng gāoxìng.', vi: 'Thầy giáo của chúng tôi rất vui mừng.' },
  ],
  '学生': [
    { zh: '他是北京大学的学生。', pinyin: 'Tā shì Běijīng Dàxué de xuésheng.', vi: 'Cậu ấy là sinh viên Đại học Bắc Kinh.' },
    { zh: '我们学校有很多外国学生。', pinyin: 'Wǒmen xuéxiào yǒu hěn duō wàiguó xuésheng.', vi: 'Trường chúng tôi có rất nhiều học sinh nước ngoài.' },
    { zh: '学生们都在教室里看书。', pinyin: 'Xuéshengmen dōu zài jiàoshì lǐ kànshū.', vi: 'Các học sinh đều đang đọc sách trong phòng học.' },
  ],
  '同学': [
    { zh: '她是我的同班同学。', pinyin: 'Tā shì wǒ de tóngbān tóngxué.', vi: 'Cô ấy là bạn học cùng lớp với tôi.' },
    { zh: '我和同学们一起去吃饭。', pinyin: 'Wǒ hé tóngxuémen yīqǐ qù chīfàn.', vi: 'Tôi cùng các bạn học đi ăn cơm.' },
    { zh: '明天同学来找我玩。', pinyin: 'Míngtiān tóngxué lái zhǎo wǒ wán.', vi: 'Ngày mai bạn học đến tìm tôi chơi.' },
  ],
  '医生': [
    { zh: '李医生在医院工作。', pinyin: 'Lǐ yīshēng zài yīyuàn gōngzuò.', vi: 'Bác sĩ Lý làm việc ở bệnh viện.' },
    { zh: '他生病了，要去看医生。', pinyin: 'Tā shēngbìng le, yào qù kàn yīshēng.', vi: 'Anh ấy bị ốm rồi, phải đi khám bác sĩ.' },
    { zh: '医生说要多喝水。', pinyin: 'Yīshēng shuō yào duō hē shuǐ.', vi: 'Bác sĩ bảo phải uống nhiều nước.' },
  ],

  // Đồ vật & Ăn uống
  '杯子': [
    { zh: '桌子上有一个杯子。', pinyin: 'Zhuōzi shàng yǒu yí gè bēizi.', vi: 'Trên bàn có một chiếc cốc.' },
    { zh: '这个杯子多少钱？', pinyin: 'Zhè ge bēizi duōshao qián?', vi: 'Chiếc cốc này bao nhiêu tiền?' },
    { zh: '我想买一个新的水杯。', pinyin: 'Wǒ xiǎng mǎi yí gè xīn de shuǐbēi.', vi: 'Tôi muốn mua một chiếc cốc nước mới.' },
    { zh: '杯子里有温水。', pinyin: 'Bēizi lǐ yǒu wēn shuǐ.', vi: 'Trong cốc có nước ấm.' },
  ],
  '水': [
    { zh: '请喝一杯温水。', pinyin: 'Qǐng hē yì bēi wēn shuǐ.', vi: 'Xin mời uống một ly nước ấm.' },
    { zh: '我想喝水，天气太热了。', pinyin: 'Wǒ xiǎng hē shuǐ, tiānqì tài rè le.', vi: 'Tôi muốn uống nước, trời nóng quá.' },
    { zh: '桌子上有一瓶水。', pinyin: 'Zhuōzi shàng yǒu yì píng shuǐ.', vi: 'Trên bàn có một chai nước.' },
    { zh: '这里的水很好喝。', pinyin: 'Zhèlǐ de shuǐ hěn hǎohē.', vi: 'Nước ở đây uống rất ngon.' },
  ],
  '茶': [
    { zh: '中国人很喜欢喝茶。', pinyin: 'Zhōngguó rén hěn xǐhuan hē chá.', vi: 'Người Trung Quốc rất thích uống trà.' },
    { zh: '服务员，请来一杯热茶。', pinyin: 'Fúwùyuán, qǐng lái yì bēi rè chá.', vi: 'Phục vụ ơi, cho tôi một cốc trà nóng.' },
    { zh: '爸爸在喝中国茶。', pinyin: 'Bàba zài hē Zhōngguó chá.', vi: 'Bố đang uống trà Trung Quốc.' },
    { zh: '你想喝茶还是喝水？', pinyin: 'Nǐ xiǎng hē chá háishì hē shuǐ?', vi: 'Bạn muốn uống trà hay uống nước?' },
  ],
  '苹果': [
    { zh: '桌子上有三个大苹果。', pinyin: 'Zhuōzi shàng yǒu sān gè dà píngguǒ.', vi: 'Trên bàn có ba quả táo lớn.' },
    { zh: '这个苹果又大又甜。', pinyin: 'Zhè ge píngguǒ yòu dà yòu tián.', vi: 'Quả táo này vừa to vừa ngọt.' },
    { zh: '我去商店买苹果。', pinyin: 'Wǒ qù shāngdiàn mǎi píngguǒ.', vi: 'Tôi đi cửa hàng mua táo.' },
    { zh: '苹果一斤多少钱？', pinyin: 'Píngguǒ yì jīn duōshao qián?', vi: 'Táo bao nhiêu tiền một cân?' },
  ],
  '米饭': [
    { zh: '你想吃米饭吗？', pinyin: 'Nǐ xiǎng chī mǐfàn ma?', vi: 'Bạn muốn ăn cơm không?' },
    { zh: '我今天中午吃了米饭。', pinyin: 'Wǒ jīntiān zhōngwǔ chī le mǐfàn.', vi: 'Trưa nay tôi đã ăn cơm.' },
    { zh: '这里的米饭很好吃。', pinyin: 'Zhèlǐ de mǐfàn hěn hǎochī.', vi: 'Cơm ở đây rất ngon.' },
    { zh: '服务员，再来一碗米饭。', pinyin: 'Fúwùyuán, zài lái yì wǎn mǐfàn.', vi: 'Phục vụ ơi, cho thêm một bát cơm nữa.' },
  ],
  '菜': [
    { zh: '妈妈做的中国菜很好吃。', pinyin: 'Māma zuò de Zhōngguó cài hěn hǎochī.', vi: 'Món ăn Trung Quốc mẹ nấu rất ngon.' },
    { zh: '你想吃什么菜？', pinyin: 'Nǐ xiǎng chī shénme cài?', vi: 'Bạn muốn ăn món gì?' },
    { zh: '这个菜太辣了。', pinyin: 'Zhè ge cài tài là le.', vi: 'Món ăn này cay quá.' },
  ],

  // Địa điểm & Phương tiện
  '北京': [
    { zh: '他明天坐飞机去北京。', pinyin: 'Tā míngtiān zuò fēijī qù Běijīng.', vi: 'Ngày mai anh ấy đi máy bay đến Bắc Kinh.' },
    { zh: '北京的天气怎么样？', pinyin: 'Běijīng de tiānqì zěnmeyàng?', vi: 'Thời tiết Bắc Kinh thế nào?' },
    { zh: '我想去北京学汉语。', pinyin: 'Wǒ xiǎng qù Běijīng xué hànyǔ.', vi: 'Tôi muốn đến Bắc Kinh học tiếng Hán.' },
    { zh: '我的老师是北京人。', pinyin: 'Wǒ de lǎoshī shì Běijīng rén.', vi: 'Thầy giáo tôi là người Bắc Kinh.' },
  ],
  '学校': [
    { zh: '我们在学校学汉语。', pinyin: 'Wǒmen zài xuéxiào xué hànyǔ.', vi: 'Chúng tôi học tiếng Hán ở trường.' },
    { zh: '我们的学校很大很漂亮。', pinyin: 'Wǒmen de xuéxiào hěn dà hěn piàoliang.', vi: 'Trường học của chúng tôi rất to và đẹp.' },
    { zh: '他每天早上八点去学校。', pinyin: 'Tā měitiān zǎoshang bā diǎn qù xuéxiào.', vi: 'Cậu ấy đi học lúc 8 giờ sáng mỗi ngày.' },
    { zh: '学校里有很多学生。', pinyin: 'Xuéxiào lǐ yǒu hěn duō xuésheng.', vi: 'Trong trường có rất nhiều học sinh.' },
  ],
  '医院': [
    { zh: '爸爸在医院工作。', pinyin: 'Bàba zài yīyuàn gōngzuò.', vi: 'Bố làm việc ở bệnh viện.' },
    { zh: '我生病了，要去医院看医生。', pinyin: 'Wǒ shēngbìng le, yào qù yīyuàn kàn yīshēng.', vi: 'Tôi bị ốm rồi, phải đến bệnh viện khám bác sĩ.' },
    { zh: '医院离学校不远。', pinyin: 'Yīyuàn lí xuéxiào bù yuǎn.', vi: 'Bệnh viện cách trường học không xa.' },
  ],
  '商店': [
    { zh: '我去商店买东西。', pinyin: 'Wǒ qù shāngdiàn mǎi dōngxi.', vi: 'Tôi đến cửa hàng mua đồ.' },
    { zh: '这个商店有很多漂亮的衣服。', pinyin: 'Zhè ge shāngdiàn yǒu hěn duō piàoliang de yīfu.', vi: 'Cửa hàng này có rất nhiều quần áo đẹp.' },
    { zh: '学校前面有一个小商店。', pinyin: 'Xuéxiào qiánmiàn yǒu yí gè xiǎo shāngdiàn.', vi: 'Phía trước trường có một tiệm tạp hóa nhỏ.' },
    { zh: '商店几点开门？', pinyin: 'Shāngdiàn jǐ diǎn kāimén?', vi: 'Cửa hàng mấy giờ mở cửa?' },
  ],
  '飞机': [
    { zh: '我坐飞机去北京。', pinyin: 'Wǒ zuò fēijī qù Běijīng.', vi: 'Tôi đi máy bay đến Bắc Kinh.' },
    { zh: '天上有两架飞机。', pinyin: 'Tiānshàng yǒu liǎng jià fēijī.', vi: 'Trên trời có hai chiếc máy bay.' },
    { zh: '他买好了明天的飞机票。', pinyin: 'Tā mǎihǎo le míngtiān de fēijīpiào.', vi: 'Anh ấy đã mua xong vé máy bay cho ngày mai.' },
    { zh: '坐飞机去中国很快。', pinyin: 'Zuò fēijī qù Zhōngguó hěn kuài.', vi: 'Đi máy bay sang Trung Quốc rất nhanh.' },
  ],
  '出租车': [
    { zh: '我坐出租车去学校。', pinyin: 'Wǒ zuò chūzūchē qù xuéxiào.', vi: 'Tôi đi taxi đến trường.' },
    { zh: '我们坐出租车回家吧。', pinyin: 'Wǒmen zuò chūzūchē huíjiā ba.', vi: 'Chúng mình đi taxi về nhà đi.' },
    { zh: '前面有一辆出租车。', pinyin: 'Qiánmiàn yǒu yí liàng chūzūchē.', vi: 'Phía trước có một chiếc xe taxi.' },
    { zh: '我想打出租车去机场。', pinyin: 'Wǒ xiǎng dǎ chūzūchē qù jīchǎng.', vi: 'Tôi muốn bắt taxi đi sân bay.' },
  ],

  // Động vật
  '猫': [
    { zh: '我家有一只小猫。', pinyin: 'Wǒ jiā yǒu yì zhī xiǎomāo.', vi: 'Nhà tôi có một con mèo nhỏ.' },
    { zh: '这只小猫很可爱。', pinyin: 'Zhè zhī xiǎomāo hěn kě\'ài.', vi: 'Con mèo nhỏ này rất đáng yêu.' },
    { zh: '小猫在椅子下面睡觉。', pinyin: 'Xiǎomāo zài yǐzi xiàmiàn shuìjiào.', vi: 'Mèo con đang ngủ dưới gầm ghế.' },
    { zh: '妹妹很喜欢小猫。', pinyin: 'Mèimei hěn xǐhuan xiǎomāo.', vi: 'Em gái rất thích mèo con.' },
  ],
  '狗': [
    { zh: '这只小狗是我的。', pinyin: 'Zhè zhī xiǎogǒu shì wǒ de.', vi: 'Chú chó nhỏ này là của tôi.' },
    { zh: '那只大狗很漂亮。', pinyin: 'Nà zhī dà gǒu hěn piàoliang.', vi: 'Con chó to kia rất đẹp.' },
    { zh: '小狗在门前面。', pinyin: 'Xiǎogǒu zài mén qiánmiàn.', vi: 'Chó con ở trước cửa.' },
    { zh: '他喜欢和小狗一起玩。', pinyin: 'Tā xǐhuan hé xiǎogǒu yīqǐ wán.', vi: 'Anh ấy thích chơi đùa cùng cún con.' },
  ],

  // Động từ & Tính từ cơ bản
  '高兴': [
    { zh: '认识你，我很高兴。', pinyin: 'Rènshi nǐ, wǒ hěn gāoxìng.', vi: 'Quen biết bạn, tôi rất vui mừng.' },
    { zh: '今天大家都很高兴。', pinyin: 'Jīntiān dàjiā dōu hěn gāoxìng.', vi: 'Hôm nay mọi người đều rất vui vẻ.' },
    { zh: '看到爸爸回家，孩子很高兴。', pinyin: 'Kàndào bàba huíjiā, háizi hěn gāoxìng.', vi: 'Thấy bố về nhà, đứa bé rất vui mừng.' },
    { zh: '李老师今天非常高兴。', pinyin: 'Lǐ lǎoshī jīntiān fēicháng gāoxìng.', vi: 'Thầy Lý hôm nay vô cùng vui.' },
  ],
  '学习': [
    { zh: '我们在学校学习汉语。', pinyin: 'Wǒmen zài xuéxiào xuéxí hànyǔ.', vi: 'Chúng tôi học tiếng Hán ở trường.' },
    { zh: '他每天认真学习。', pinyin: 'Tā měitiān rènzhēn xuéxí.', vi: 'Cậu ấy chăm chỉ học tập mỗi ngày.' },
    { zh: '我很喜欢学习中文。', pinyin: 'Wǒ hěn xǐhuan xuéxí zhōngwén.', vi: 'Tôi rất thích học tiếng Trung.' },
    { zh: '学习汉语很有意思。', pinyin: 'Xuéxí hànyǔ hěn yǒu yìsi.', vi: 'Học tiếng Hán rất thú vị.' },
  ],
  '看': [
    { zh: '你在看什么书？', pinyin: 'Nǐ zài kàn shénme shū?', vi: 'Bạn đang đọc sách gì thế?' },
    { zh: '我想看中国电影。', pinyin: 'Wǒ xiǎng kàn Zhōngguó diànyǐng.', vi: 'Tôi muốn xem phim Trung Quốc.' },
    { zh: '请看前面的黑板。', pinyin: 'Qǐng kàn qiánmiàn de hēibǎn.', vi: 'Xin mời nhìn lên bảng phía trước.' },
    { zh: '爸爸在家里看电视。', pinyin: 'Bàba zài jiā lǐ kàn diànshì.', vi: 'Bố đang ở nhà xem ti vi.' },
  ],
  '听': [
    { zh: '你听，这是什么声音？', pinyin: 'Nǐ tīng, zhè shì shénme shēngyīn?', vi: 'Bạn nghe xem, đây là âm thanh gì?' },
    { zh: '我喜欢听中文歌。', pinyin: 'Wǒ xǐhuan tīng zhōngwén gē.', vi: 'Tôi thích nghe bài hát tiếng Trung.' },
    { zh: '请大家认真听老师说。', pinyin: 'Qǐng dàjiā rènzhēn tīng lǎoshī shuō.', vi: 'Xin mọi người chú ý lắng nghe cô giáo nói.' },
    { zh: '我听懂他说的话了。', pinyin: 'Wǒ tīng dǒng tā shuō de huà le.', vi: 'Tôi nghe hiểu lời anh ấy nói rồi.' },
  ],
  '写': [
    { zh: '他会写中国汉字。', pinyin: 'Tā huì xiě Zhōngguó hànzì.', vi: 'Anh ấy biết viết chữ Hán Trung Quốc.' },
    { zh: '请在这里写你的名字。', pinyin: 'Qǐng zài zhèlǐ xiě nǐ de míngzi.', vi: 'Xin hãy viết tên của bạn vào đây.' },
    { zh: '你在写什么字？', pinyin: 'Nǐ zài xiě shénme zì?', vi: 'Bạn đang viết chữ gì thế?' },
    { zh: '这个汉字很容易写。', pinyin: 'Zhè ge hànzì hěn róngyì xiě.', vi: 'Chữ Hán này rất dễ viết.' },
  ],
  '说': [
    { zh: '他会说一点儿汉语。', pinyin: 'Tā huì shuō yìdiǎnr hànyǔ.', vi: 'Anh ấy biết nói một chút tiếng Hán.' },
    { zh: '你说得很好。', pinyin: 'Nǐ shuō de hěn hǎo.', vi: 'Bạn nói rất tốt.' },
    { zh: '请慢一点儿说。', pinyin: 'Qǐng màn yìdiǎnr shuō.', vi: 'Xin hãy nói chậm lại một chút.' },
    { zh: '他在跟朋友说话。', pinyin: 'Tā zài gēn péngyou shuōhuà.', vi: 'Anh ấy đang trò chuyện cùng bạn bè.' },
  ],
  '买': [
    { zh: '你想买什么东西？', pinyin: 'Nǐ xiǎng mǎi shénme dōngxi?', vi: 'Bạn muốn mua đồ gì?' },
    { zh: '我想买一本书和一个杯子。', pinyin: 'Wǒ xiǎng mǎi yì běn shū hé yí gè bēizi.', vi: 'Tôi muốn mua một quyển sách và một chiếc cốc.' },
    { zh: '这个苹果是在商店买的。', pinyin: 'Zhè ge píngguǒ shì zài shāngdiàn mǎi de.', vi: 'Quả táo này được mua ở cửa hàng.' },
    { zh: '这件衣服太贵了，我不买。', pinyin: 'Zhè jiàn yīfu tài guì le, wǒ bù mǎi.', vi: 'Chiếc áo này đắt quá, tôi không mua.' },
  ],
  '吃': [
    { zh: '你今天中午吃什么？', pinyin: 'Nǐ jīntiān zhōngwǔ chī shénme?', vi: 'Trưa nay bạn ăn món gì?' },
    { zh: '我想吃中国菜和米饭。', pinyin: 'Wǒ xiǎng chī Zhōngguó cài hé mǐfàn.', vi: 'Tôi muốn ăn món Trung Quốc và cơm.' },
    { zh: '大家一起开心地吃饭。', pinyin: 'Dàjiā yīqǐ kāixīn de chīfàn.', vi: 'Mọi người cùng nhau ăn cơm vui vẻ.' },
    { zh: '请吃一点儿新鲜水果。', pinyin: 'Qǐng chī yìdiǎnr xīnxiān shuǐguǒ.', vi: 'Xin mời ăn chút hoa quả tươi.' },
  ],
  '喝': [
    { zh: '天气很热，请多喝水。', pinyin: 'Tiānqì hěn rè, qǐng duō hē shuǐ.', vi: 'Trời rất nóng, xin hãy uống nhiều nước.' },
    { zh: '你想喝茶还是喝水？', pinyin: 'Nǐ xiǎng hē chá háishì hē shuǐ?', vi: 'Bạn muốn uống trà hay uống nước?' },
    { zh: '妈妈喜欢喝热茶。', pinyin: 'Māma xǐhuan hē rè chá.', vi: 'Mẹ thích uống trà nóng.' },
    { zh: '我不喝凉水。', pinyin: 'Wǒ bù hē liáng shuǐ.', vi: 'Tôi không uống nước lạnh.' },
  ],
  '睡': [
    { zh: '昨晚我十点睡觉。', pinyin: 'Zuówǎn wǒ shí diǎn shuìjiào.', vi: 'Tối qua tôi đi ngủ lúc 10 giờ.' },
    { zh: '小狗在椅子下睡着了。', pinyin: 'Xiǎogǒu zài yǐzi xià shuìzháo le.', vi: 'Chú chó nhỏ đã ngủ gật dưới gầm ghế.' },
    { zh: '太晚了，我们去睡觉吧。', pinyin: 'Tài wǎn le, wǒmen qù shuìjiào ba.', vi: 'Muộn quá rồi, chúng mình đi ngủ thôi.' },
  ],
  '去': [
    { zh: '明天下午你去学校吗？', pinyin: 'Míngtiān xiàwǔ nǐ qù xuéxiào ma?', vi: 'Chiều mai bạn có đến trường không?' },
    { zh: '我想去商店买水。', pinyin: 'Wǒ xiǎng qù shāngdiàn mǎi shuǐ.', vi: 'Tôi muốn đến tiệm mua nước.' },
    { zh: '我们坐出租车去机场。', pinyin: 'Wǒmen zuò chūzūchē qù jīchǎng.', vi: 'Chúng mình đi taxi đến sân bay.' },
    { zh: '他去北京旅游了。', pinyin: 'Tā qù Běijīng lǚyóu le.', vi: 'Anh ấy đi Bắc Kinh du lịch rồi.' },
  ],
  '来': [
    { zh: '欢迎你来我家做客。', pinyin: 'Huānyíng nǐ lái wǒ jiā zuòkè.', vi: 'Hoan nghênh bạn đến nhà tôi chơi.' },
    { zh: '李老师今天来学校了吗？', pinyin: 'Lǐ lǎoshī jīntiān lái xuéxiào le ma?', vi: 'Thầy Lý hôm nay đã đến trường chưa?' },
    { zh: '请大家来这边坐。', pinyin: 'Qǐng dàjiā lái zhèbiān zuò.', vi: 'Xin mời mọi người lại đây ngồi.' },
    { zh: '他从北京来了。', pinyin: 'Tā cóng Běijīng lái le.', vi: 'Anh ấy từ Bắc Kinh tới.' },
  ],
  '做': [
    { zh: '你今天在做什么？', pinyin: 'Nǐ jīntiān zài zuò shénme?', vi: 'Hôm nay bạn đang làm gì đấy?' },
    { zh: '妈妈在厨房做饭。', pinyin: 'Māma zài chúfáng zuòfàn.', vi: 'Mẹ đang nấu cơm trong bếp.' },
    { zh: '你会做中国菜吗？', pinyin: 'Nǐ huì zuò Zhōngguó cài ma?', vi: 'Bạn biết nấu món Trung Quốc không?' },
    { zh: '他在认真做作业。', pinyin: 'Tā zài rènzhēn zuò zuòyè.', vi: 'Cậu ấy đang chăm chỉ làm bài tập.' },
  ],
  '喜欢': [
    { zh: '我非常喜欢学汉语。', pinyin: 'Wǒ fēicháng xǐhuan xué hànyǔ.', vi: 'Tôi rất thích học tiếng Hán.' },
    { zh: '你喜欢猫还是喜欢狗？', pinyin: 'Nǐ xǐhuan māo háishì xǐhuan gǒu?', vi: 'Bạn thích mèo hay thích chó?' },
    { zh: '妹妹很喜欢吃苹果。', pinyin: 'Mèimei hěn xǐhuan chī píngguǒ.', vi: 'Em gái rất thích ăn táo.' },
    { zh: '他们都喜欢中国菜。', pinyin: 'Tāmen dōu xǐhuan Zhōngguó cài.', vi: 'Họ đều thích món ăn Trung Quốc.' },
  ],
  '爱': [
    { zh: '我爱我的爸爸妈妈。', pinyin: 'Wǒ ài wǒ de bàba māma.', vi: 'Tôi yêu thương bố mẹ của tôi.' },
    { zh: '小猫很爱睡觉。', pinyin: 'Xiǎomāo hěn ài shuìjiào.', vi: 'Mèo con rất thích ngủ.' },
    { zh: '我们都爱中国文化。', pinyin: 'Wǒmen dōu ài Zhōngguó wénhuà.', vi: 'Chúng tôi đều yêu văn hóa Trung Hoa.' },
    { zh: '他很爱喝茶。', pinyin: 'Tā hěn ài hē chá.', vi: 'Anh ấy rất mê uống trà.' },
  ],
  '钱': [
    { zh: '请问这个杯子多少钱？', pinyin: 'Qǐngwèn zhè ge bēizi duōshao qián?', vi: 'Xin hỏi chiếc cốc này bao nhiêu tiền?' },
    { zh: '我身上只有十块钱。', pinyin: 'Wǒ shēnshang zhǐ yǒu shí kuài qián.', vi: 'Trên người tôi chỉ có 10 tệ.' },
    { zh: '苹果五块钱一斤。', pinyin: 'Píngguǒ wǔ kuài qián yì jīn.', vi: 'Táo 5 tệ một cân.' },
    { zh: '买这本书需要多少钱？', pinyin: 'Mǎi zhè běn shū xūyào duōshao qián?', vi: 'Mua quyển sách này cần bao nhiêu tiền?' },
  ],
  '今天': [
    { zh: '今天天气非常好。', pinyin: 'Jīntiān tiānqì fēicháng hǎo.', vi: 'Hôm nay thời tiết rất đẹp.' },
    { zh: '今天星期几？', pinyin: 'Jīntiān xīngqī jǐ?', vi: 'Hôm nay là thứ mấy?' },
    { zh: '今天是我朋友的生日。', pinyin: 'Jīntiān shì wǒ péngyou de shēngrì.', vi: 'Hôm nay là sinh nhật bạn tôi.' },
    { zh: '我今天去学校学汉语。', pinyin: 'Wǒ jīntiān qù xuéxiào xué hànyǔ.', vi: 'Hôm nay tôi đến trường học tiếng Hán.' },
  ],
  '明天': [
    { zh: '明天是星期天，不用上课。', pinyin: 'Míngtiān shì xīngqītiān, bú yòng shàngkè.', vi: 'Ngày mai là chủ nhật, không phải đi học.' },
    { zh: '你明天上午有空吗？', pinyin: 'Nǐ míngtiān shàngwǔ yǒukòng ma?', vi: 'Sáng mai bạn có rảnh không?' },
    { zh: '我们明天坐飞机去北京。', pinyin: 'Wǒmen míngtiān zuò fēijī qù Běijīng.', vi: 'Ngày mai chúng tôi đi máy bay đến Bắc Kinh.' },
    { zh: '明天见，祝你开心！', pinyin: 'Míngtiān jiàn, zhù nǐ kāixīn!', vi: 'Hẹn mai gặp lại, chúc bạn vui vẻ!' },
  ],
  '昨天': [
    { zh: '昨天下午下了大雨。', pinyin: 'Zuótiān xiàwǔ xià le dàyǔ.', vi: 'Chiều hôm qua trời đã đổ cơn mưa to.' },
    { zh: '昨天我和朋友去喝茶。', pinyin: 'Zuótiān wǒ hé péngyou qù hē chá.', vi: 'Hôm qua tôi và bạn đi uống trà.' },
    { zh: '昨天买的苹果很甜。', pinyin: 'Zuótiān mǎi de píngguǒ hěn tián.', vi: 'Táo mua hôm qua rất ngọt.' },
    { zh: '你昨天去哪儿了？', pinyin: 'Nǐ zuótiān qù nǎr le?', vi: 'Hôm qua bạn đã đi đâu đấy?' },
  ],
  '大': [
    { zh: '这个房间很大。', pinyin: 'Zhège fángjiān hěn dà.', vi: 'Căn phòng này rất rộng lớn.' },
    { zh: '那个苹果很大很甜。', pinyin: 'Nà ge píngguǒ hěn dà hěn tián.', vi: 'Quả táo kia rất to và ngọt.' },
    { zh: '北京是一个大城市。', pinyin: 'Běijīng shì yí gè dà chéngshì.', vi: 'Bắc Kinh là một thành phố lớn.' },
  ],
  '小': [
    { zh: '我家有一只小猫。', pinyin: 'Wǒ jiā yǒu yì zhī xiǎomāo.', vi: 'Nhà tôi có một chú mèo nhỏ.' },
    { zh: '这个杯子太小了。', pinyin: 'Zhè ge bēizi tài xiǎo le.', vi: 'Chiếc cốc này nhỏ quá.' },
    { zh: '那个小狗很可爱。', pinyin: 'Nà ge xiǎogǒu hěn kě\'ài.', vi: 'Chú cún nhỏ kia rất đáng yêu.' },
  ],
  '多': [
    { zh: '学校里有很多学生。', pinyin: 'Xuéxiào lǐ yǒu hěn duō xuésheng.', vi: 'Trong trường học có rất nhiều học sinh.' },
    { zh: '天气冷了，多穿衣服。', pinyin: 'Tiānqì lěng le, duō chuān yīfu.', vi: 'Trời lạnh rồi, hãy mặc nhiều áo vào.' },
    { zh: '你想买多少苹果？', pinyin: 'Nǐ xiǎng mǎi duōshao píngguǒ?', vi: 'Bạn muốn mua bao nhiêu táo?' },
  ],
  '少': [
    { zh: '今天来的人很少。', pinyin: 'Jīntiān lái de rén hěn shǎo.', vi: 'Hôm nay số người đến rất ít.' },
    { zh: '他很少喝茶。', pinyin: 'Tā hěn shǎo hē chá.', vi: 'Anh ấy rất hiếm khi uống trà.' },
  ],
  '好': [
    { zh: '今天的天气很好。', pinyin: 'Jīntiān de tiānqì hěn hǎo.', vi: 'Thời tiết hôm nay rất đẹp.' },
    { zh: '他是我的好老师。', pinyin: 'Tā shì wǒ de hǎo lǎoshī.', vi: 'Thầy ấy là người thầy giáo tốt của tôi.' },
    { zh: '这本汉语书很好。', pinyin: 'Zhè běn hànyǔ shū hěn hǎo.', vi: 'Quyển sách tiếng Hán này rất hay.' },
  ],
  '冷': [
    { zh: '今天北京很冷。', pinyin: 'Jīntiān Běijīng hěn lěng.', vi: 'Hôm nay Bắc Kinh rất lạnh.' },
    { zh: '太冷了，我想喝热水。', pinyin: 'Tài lěng le, wǒ xiǎng hē rè shuǐ.', vi: 'Lạnh quá rồi, tôi muốn uống nước ấm.' },
  ],
  '热': [
    { zh: '今天天气太热了。', pinyin: 'Jīntiān tiānqì tài rè le.', vi: 'Hôm nay thời tiết nóng quá.' },
    { zh: '请喝一杯热茶。', pinyin: 'Qǐng hē yì bēi rè chá.', vi: 'Xin mời uống một ly trà nóng.' },
  ],
};

/** 
 * Helper: lấy toàn bộ câu của một từ, kết hợp cả ví dụ gốc và ngân hàng câu bổ trợ.
 * Tự động sàng lọc theo level: Nếu là HSK 1 hoặc HSK 2, loại bỏ hoàn toàn các câu văn quá dài (> 15 chữ).
 */
export function getSentencesForVocab(
  simplified: string, 
  fallbackSentences?: ExampleSentence[], 
  level: number = 1
): ExampleSentence[] {
  const fromBank = extraSentenceBank[simplified] || [];
  const fallbacks = fallbackSentences || [];
  const all = [...fallbacks, ...fromBank];

  if (level <= 2) {
    const suitable = all.filter(s => s.zh.replace(/[，。！？]/g, '').length <= 15);
    return suitable.length > 0 ? suitable : all;
  }

  return all.length > 0 ? all : fallbacks;
}
