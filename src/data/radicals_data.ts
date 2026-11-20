// Comprehensive 214 Kangxi Radicals (Đầy đủ trọn vẹn 214 Bộ Thủ Khang Hy Chuẩn)

export interface RadicalEntry {
  id: string;
  orderNumber: number;       // 1 - 214
  char: string;
  variant?: string;          // Dạng biến thể khi ghép chữ (ví dụ: 人 -> 亻, 水 -> 氵, 心 -> 忄)
  pinyin: string;
  hanViet: string;
  strokes: number;           // 1 - 17 nét
  meaningVi: string;
  isCommon?: boolean;        // Thuộc top bộ thủ phổ biến nhất HSK
  mnemonicStory: string;     // Câu chuyện chiết tự dễ nhớ
  commonWords: {
    char: string;
    pinyin: string;
    meaning: string;
  }[];
}

export const coreRadicals: RadicalEntry[] = [
  {
    id: 'rad_1', orderNumber: 1, char: '一', pinyin: 'yī', hanViet: 'Nhất', strokes: 1, isCommon: true, 
    meaningVi: 'Số một, khởi đầu của vạn vật, duy nhất, đồng nhất',
    mnemonicStory: 'Một nét ngang phẳng biểu thị mặt đất hoặc khởi nguồn đầu tiên của vũ trụ.',
    commonWords: [{ char: '丁', pinyin: 'dīng', meaning: 'đinh, người' }, { char: '七', pinyin: 'qī', meaning: 'số 7' }, { char: '三', pinyin: 'sān', meaning: 'số 3' }]
  },
  {
    id: 'rad_2', orderNumber: 2, char: '丨', pinyin: 'gǔn', hanViet: 'Cổn', strokes: 1, 
    meaningVi: 'Nét sổ dọc thẳng đứng từ trên xuống dưới',
    mnemonicStory: 'Hình chiếc gậy hoặc cọc chống thẳng đứng kết nối trời và đất.',
    commonWords: [{ char: '中', pinyin: 'zhōng', meaning: 'trung, ở giữa' }, { char: '丰', pinyin: 'fēng', meaning: 'phong phú' }, { char: '串', pinyin: 'chuàn', meaning: 'xâu chuỗi' }]
  },
  {
    id: 'rad_3', orderNumber: 3, char: '丶', pinyin: 'zhǔ', hanViet: 'Chủ', strokes: 1, 
    meaningVi: 'Dấu chấm, ngọn lửa đèn dầu, điểm sáng nhỏ',
    mnemonicStory: 'Một đốm lửa nhỏ thắp sáng ngọn đèn hoặc một điểm giọt nước rơi.',
    commonWords: [{ char: '丸', pinyin: 'wán', meaning: 'viên tròn' }, { char: '凡', pinyin: 'fán', meaning: 'phàm trần' }, { char: '丹', pinyin: 'dān', meaning: 'đan đỏ' }]
  },
  {
    id: 'rad_4', orderNumber: 4, char: '丿', pinyin: 'piě', hanViet: 'Phiệt', strokes: 1, 
    meaningVi: 'Nét phẩy vuốt nghiêng từ trên xuống bên trái',
    mnemonicStory: 'Vệt gió thổi nghiêng hoặc dáng người cúi đầu nhẹ.',
    commonWords: [{ char: '少', pinyin: 'shǎo', meaning: 'ít' }, { char: '生', pinyin: 'shēng', meaning: 'sinh sống' }, { char: '年', pinyin: 'nián', meaning: 'năm' }]
  },
  {
    id: 'rad_5', orderNumber: 5, char: '乙', variant: '乚 / 乛', pinyin: 'yǐ', hanViet: 'Ất', strokes: 1, 
    meaningVi: 'Can thứ 2 trong thiên can, mầm cây non uốn lượn nhú lên',
    mnemonicStory: 'Mầm cây non đang cố uốn cong thân mình đội đất nhú lên đón ánh sáng.',
    commonWords: [{ char: '九', pinyin: 'jiǔ', meaning: 'số 9' }, { char: '乞', pinyin: 'qǐ', meaning: 'cầu xin' }, { char: '也', pinyin: 'yě', meaning: 'cũng' }]
  },
  {
    id: 'rad_6', orderNumber: 6, char: '亅', pinyin: 'jué', hanViet: 'Quyết', strokes: 1, 
    meaningVi: 'Nét sổ có móc nhọn ở chân',
    mnemonicStory: 'Hình ảnh chiếc lưỡi câu hoặc móc sắt móc đồ vật.',
    commonWords: [{ char: '了', pinyin: 'le', meaning: 'rồi' }, { char: '予', pinyin: 'yǔ', meaning: 'cho, ban tặng' }, { char: '事', pinyin: 'shì', meaning: 'sự việc' }]
  },
  {
    id: 'rad_7', orderNumber: 7, char: '二', pinyin: 'èr', hanViet: 'Nhị', strokes: 2, isCommon: true, 
    meaningVi: 'Số hai, âm dương trời đất đối xứng',
    mnemonicStory: 'Hai nét ngang tượng trưng cho trời ở trên và đất ở dưới.',
    commonWords: [{ char: '于', pinyin: 'yú', meaning: 'ở, tại' }, { char: '云', pinyin: 'yún', meaning: 'mây' }, { char: '些', pinyin: 'xiē', meaning: 'vài, một số' }]
  },
  {
    id: 'rad_8', orderNumber: 8, char: '亠', pinyin: 'tóu', hanViet: 'Đầu', strokes: 2, 
    meaningVi: 'Phần nắp che ở trên cùng, chóp mái',
    mnemonicStory: 'Chiếc nắp nồi hoặc chóp chòi canh ở vị trí cao nhất.',
    commonWords: [{ char: '六', pinyin: 'liù', meaning: 'số 6' }, { char: '市', pinyin: 'shì', meaning: 'thành phố' }, { char: '文', pinyin: 'wén', meaning: 'văn hóa' }]
  },
  {
    id: 'rad_9', orderNumber: 9, char: '人', variant: '亻', pinyin: 'rén', hanViet: 'Nhân', strokes: 2, isCommon: true, 
    meaningVi: 'Con người, hành động và tính chất liên quan đến con người',
    mnemonicStory: 'Hình ảnh con người đang sải bước đứng vững hai chân trên mặt đất.',
    commonWords: [{ char: '你', pinyin: 'nǐ', meaning: 'bạn' }, { char: '他', pinyin: 'tā', meaning: 'anh ấy' }, { char: '休', pinyin: 'xiū', meaning: 'nghỉ ngơi' }, { char: '做', pinyin: 'zuò', meaning: 'làm' }]
  },
  {
    id: 'rad_10', orderNumber: 10, char: '儿', pinyin: 'ér', hanViet: 'Nhi', strokes: 2, isCommon: true, 
    meaningVi: 'Trẻ nhỏ, con cái, đôi chân người đang chạy',
    mnemonicStory: 'Đôi chân thoăn thoắt của đứa trẻ đang chạy chơi tung tăng.',
    commonWords: [{ char: '兄', pinyin: 'xiōng', meaning: 'anh trai' }, { char: '先', pinyin: 'xiān', meaning: 'trước tiên' }, { char: '光', pinyin: 'guāng', meaning: 'ánh sáng' }]
  },
  {
    id: 'rad_11', orderNumber: 11, char: '入', pinyin: 'rù', hanViet: 'Nhập', strokes: 2, 
    meaningVi: 'Đi vào trong, thu nạp vào',
    mnemonicStory: 'Lối vào hang động hoặc mũi nhọn đang tiến vào trong.',
    commonWords: [{ char: '内', pinyin: 'nèi', meaning: 'bên trong' }, { char: '全', pinyin: 'quán', meaning: 'toàn bộ' }, { char: '两', pinyin: 'liǎng', meaning: 'hai, lượng' }]
  },
  {
    id: 'rad_12', orderNumber: 12, char: '八', variant: '丷', pinyin: 'bā', hanViet: 'Bát', strokes: 2, isCommon: true, 
    meaningVi: 'Số tám, tách ra hai bên, phân tán',
    mnemonicStory: 'Hai nét lưng tựa nhau mở rộng sang hai phía biểu thị sự chia tách.',
    commonWords: [{ char: '公', pinyin: 'gōng', meaning: 'công cộng' }, { char: '六', pinyin: 'liù', meaning: 'số 6' }, { char: '分', pinyin: 'fēn', meaning: 'chia ra' }]
  },
  {
    id: 'rad_13', orderNumber: 13, char: '冂', pinyin: 'jiōng', hanViet: 'Quynh', strokes: 2, 
    meaningVi: 'Vùng đất xa xôi biên cương, khung bao phía trên và hai bên',
    mnemonicStory: 'Khung cổng vòm nhìn ra khoảng đất hoang vắng xa xôi.',
    commonWords: [{ char: '同', pinyin: 'tóng', meaning: 'cùng' }, { char: '罔', pinyin: 'wǎng', meaning: 'lưới' }, { char: '周', pinyin: 'zhōu', meaning: 'chu kỳ' }]
  },
  {
    id: 'rad_14', orderNumber: 14, char: '冖', pinyin: 'mì', hanViet: 'Mịch', strokes: 2, 
    meaningVi: 'Khăn trùm đầu, tấm vải phủ che đậy bên trên',
    mnemonicStory: 'Tấm khăn phủ lên đồ vật để che chắn bụi bặm.',
    commonWords: [{ char: '写', pinyin: 'xiě', meaning: 'viết' }, { char: '军', pinyin: 'jūn', meaning: 'quân đội' }, { char: '冠', pinyin: 'guān', meaning: 'vương miện' }]
  },
  {
    id: 'rad_15', orderNumber: 15, char: '冫', pinyin: 'bīng', hanViet: 'Băng', strokes: 2, isCommon: true, 
    meaningVi: 'Băng đá, lạnh giá, đông cứng (hai chấm băng)',
    mnemonicStory: 'Hai giọt nước ngưng tụ đóng băng cứng ngắt lại vì giá rét.',
    commonWords: [{ char: '冷', pinyin: 'lěng', meaning: 'lạnh' }, { char: '冻', pinyin: 'dòng', meaning: 'đông đá' }, { char: '冬', pinyin: 'dōng', meaning: 'mùa đông' }]
  },
  {
    id: 'rad_16', orderNumber: 16, char: '几', pinyin: 'jī', hanViet: 'Kỷ', strokes: 2, 
    meaningVi: 'Bàn trà nhỏ, cái ghế nhỏ, mấy cái',
    mnemonicStory: 'Hình chiếc bàn trà nhỏ bằng gỗ có chân uốn cong.',
    commonWords: [{ char: '凡', pinyin: 'fán', meaning: 'phàm' }, { char: '凤', pinyin: 'fèng', meaning: 'phượng hoàng' }, { char: '凭', pinyin: 'píng', meaning: 'dựa vào' }]
  },
  {
    id: 'rad_17', orderNumber: 17, char: '凵', pinyin: 'kǎn', hanViet: 'Khảm', strokes: 2, 
    meaningVi: 'Hố sâu dưới đất, đồ đựng trũng xuống',
    mnemonicStory: 'Cái hố đào sâu xuống đất hoặc lòng chảo đựng đồ.',
    commonWords: [{ char: '凶', pinyin: 'xiōng', meaning: 'hung dữ' }, { char: '凸', pinyin: 'tū', meaning: 'lồi ra' }, { char: '凹', pinyin: 'āo', meaning: 'lõm xuống' }]
  },
  {
    id: 'rad_18', orderNumber: 18, char: '刀', variant: '刂', pinyin: 'dāo', hanViet: 'Đao', strokes: 2, isCommon: true, 
    meaningVi: 'Con dao, lưỡi gươm, hành động cắt gọt xẻ',
    mnemonicStory: 'Hình lưỡi dao sắc bén dùng để cắt gọt đồ vật.',
    commonWords: [{ char: '分', pinyin: 'fēn', meaning: 'chia' }, { char: '到', pinyin: 'dào', meaning: 'đến' }, { char: '前', pinyin: 'qián', meaning: 'phía trước' }, { char: '剪', pinyin: 'jiǎn', meaning: 'cắt kéo' }]
  },
  {
    id: 'rad_19', orderNumber: 19, char: '力', pinyin: 'lì', hanViet: 'Lực', strokes: 2, isCommon: true, 
    meaningVi: 'Sức mạnh, công sức, năng lượng cơ bắp',
    mnemonicStory: 'Bắp tay gân guốc gồng lên dùng sức lao động.',
    commonWords: [{ char: '男', pinyin: 'nán', meaning: 'nam giới' }, { char: '办', pinyin: 'bàn', meaning: 'làm việc' }, { char: '功', pinyin: 'gōng', meaning: 'công phu' }, { char: '加', pinyin: 'jiā', meaning: 'thêm vào' }]
  },
  {
    id: 'rad_20', orderNumber: 20, char: '勹', pinyin: 'bāo', hanViet: 'Bao', strokes: 2, isCommon: true, 
    meaningVi: 'Bao bọc, ôm lấy, bọc ngoài đồ vật',
    mnemonicStory: 'Cánh tay ôm quàng bọc lấy đứa trẻ hoặc gói đồ cẩn thận.',
    commonWords: [{ char: '包', pinyin: 'bāo', meaning: 'cái túi, bao' }, { char: '勺', pinyin: 'sháo', meaning: 'cái thìa' }, { char: '勾', pinyin: 'gōu', meaning: 'móc nối' }]
  },
  {
    id: 'rad_21', orderNumber: 21, char: '匕', pinyin: 'bǐ', hanViet: 'Chủy', strokes: 2, 
    meaningVi: 'Chiếc thìa múc cơm, con dao găm nhỏ',
    mnemonicStory: 'Chiếc muỗng cong để múc canh hoặc con dao găm phòng thân.',
    commonWords: [{ char: '化', pinyin: 'huà', meaning: 'biến hóa' }, { char: '北', pinyin: 'běi', meaning: 'phương bắc' }, { char: '匙', pinyin: 'chí', meaning: 'cái thìa' }]
  },
  {
    id: 'rad_22', orderNumber: 22, char: '匚', pinyin: 'fāng', hanViet: 'Phương', strokes: 2, 
    meaningVi: 'Hộp gỗ chữ nhật nằm ngang đựng đồ dùng',
    mnemonicStory: 'Chiếc tráp hoặc tủ gỗ đựng tài liệu nằm mở nắp ngang.',
    commonWords: [{ char: '区', pinyin: 'qū', meaning: 'khu vực' }, { char: '医', pinyin: 'yī', meaning: 'y học, bác sĩ' }, { char: '巨', pinyin: 'jù', meaning: 'khổng lồ' }]
  },
  {
    id: 'rad_23', orderNumber: 23, char: '匸', pinyin: 'xǐ', hanViet: 'Hỉ', strokes: 2, 
    meaningVi: 'Cất giấu kín đáo, nơi ẩn nấp',
    mnemonicStory: 'Góc tường hoặc hộp kín cất giấu đồ bí mật.',
    commonWords: [{ char: '匹', pinyin: 'pǐ', meaning: 'con ngựa, thước vải' }, { char: '匿', pinyin: 'nì', meaning: 'ẩn danh, trốn' }]
  },
  {
    id: 'rad_24', orderNumber: 24, char: '十', pinyin: 'shí', hanViet: 'Thập', strokes: 2, isCommon: true, 
    meaningVi: 'Số mười, hoàn hảo, đầy đủ vẹn toàn',
    mnemonicStory: 'Nét ngang bắc nam, nét dọc đông tây gặp nhau viên mãn vẹn toàn.',
    commonWords: [{ char: '千', pinyin: 'qiān', meaning: 'nghìn' }, { char: '午', pinyin: 'wǔ', meaning: 'buổi trưa' }, { char: '博', pinyin: 'bó', meaning: 'uyên bác' }]
  },
  {
    id: 'rad_25', orderNumber: 25, char: '卜', pinyin: 'bǔ', hanViet: 'Bốc', strokes: 2, 
    meaningVi: 'Bói toán, vết nứt mai rùa đoán điềm',
    mnemonicStory: 'Vết nứt trên mai rùa khi nung nóng để các quan coi bói xem điềm cát hung.',
    commonWords: [{ char: '占', pinyin: 'zhān', meaning: 'chiếm, bói' }, { char: '卡', pinyin: 'kǎ', meaning: 'thẻ' }, { char: '卢', pinyin: 'lú', meaning: 'họ Lư' }]
  },
  {
    id: 'rad_26', orderNumber: 26, char: '卩', variant: 'ㄗ', pinyin: 'jié', hanViet: 'Tiết', strokes: 2, 
    meaningVi: 'Đốt tre, con dấu quan ấn, quỳ gối phục tùng',
    mnemonicStory: 'Hình người đang quỳ gối trước ấn tín của triều đình.',
    commonWords: [{ char: '印', pinyin: 'yìn', meaning: 'con dấu, in ấn' }, { char: '即', pinyin: 'jí', meaning: 'tức là' }, { char: '卷', pinyin: 'juǎn', meaning: 'cuộn lại' }]
  },
  {
    id: 'rad_27', orderNumber: 27, char: '厂', pinyin: 'hǎn', hanViet: 'Hán', strokes: 2, 
    meaningVi: 'Vách đá nhô ra che mưa nắng, sườn núi',
    mnemonicStory: 'Vách núi cheo leo che chắn cho hang động dưới chân.',
    commonWords: [{ char: '历', pinyin: 'lì', meaning: 'lịch sử' }, { char: '原', pinyin: 'yuán', meaning: 'nguyên bản' }, { char: '厚', pinyin: 'hòu', meaning: 'dày dặn' }]
  },
  {
    id: 'rad_28', orderNumber: 28, char: '厶', pinyin: 'sī', hanViet: 'Khư', strokes: 2, 
    meaningVi: 'Riêng tư, bản thân, ích kỷ',
    mnemonicStory: 'Hình người đang ôm lấy của cải vào lòng mình.',
    commonWords: [{ char: '去', pinyin: 'qù', meaning: 'đi' }, { char: '参', pinyin: 'cān', meaning: 'tham gia' }, { char: '牟', pinyin: 'móu', meaning: 'mưu cầu' }]
  },
  {
    id: 'rad_29', orderNumber: 29, char: '又', pinyin: 'yòu', hanViet: 'Hựu', strokes: 2, isCommon: true, 
    meaningVi: 'Lại nữa, bàn tay phải cầm nắm đồ vật',
    mnemonicStory: 'Bàn tay phải nắm lại vươn ra cầm lấy đồ lần nữa.',
    commonWords: [{ char: '友', pinyin: 'yǒu', meaning: 'bạn bè' }, { char: '反', pinyin: 'fǎn', meaning: 'ngược lại' }, { char: '变', pinyin: 'biàn', meaning: 'thay đổi' }, { char: '双', pinyin: 'shuāng', meaning: 'đôi, cặp' }]
  },
  {
    id: 'rad_30', orderNumber: 30, char: '口', pinyin: 'kǒu', hanViet: 'Khẩu', strokes: 3, isCommon: true, 
    meaningVi: 'Cái miệng, ăn uống, lời nói, phát ngôn, lối ra vào',
    mnemonicStory: 'Khuôn miệng mở to khi nói chuyện hoặc ăn cơm.',
    commonWords: [{ char: '叫', pinyin: 'jiào', meaning: 'gọi' }, { char: '吃', pinyin: 'chī', meaning: 'ăn' }, { char: '喝', pinyin: 'hē', meaning: 'uống' }, { char: '唱', pinyin: 'chàng', meaning: 'hát' }]
  },
  {
    id: 'rad_31', orderNumber: 31, char: '囗', pinyin: 'wéi', hanViet: 'Vi', strokes: 3, isCommon: true, 
    meaningVi: 'Vây quanh bốn phía, bờ thành kín, biên giới lãnh thổ',
    mnemonicStory: 'Khung tường thành kiên cố bao quanh 4 góc giữ an toàn.',
    commonWords: [{ char: '国', pinyin: 'guó', meaning: 'quốc gia' }, { char: '回', pinyin: 'huí', meaning: 'về' }, { char: '四', pinyin: 'sì', meaning: 'số 4' }, { char: '园', pinyin: 'yuán', meaning: 'vườn' }]
  },
  {
    id: 'rad_32', orderNumber: 32, char: '土', pinyin: 'tǔ', hanViet: 'Thổ', strokes: 3, isCommon: true, 
    meaningVi: 'Đất đai, thổ nhưỡng, bờ cõi, xây dựng gạch ngói',
    mnemonicStory: 'Mầm cây nhú lên từ lòng đất màu mỡ.',
    commonWords: [{ char: '在', pinyin: 'zài', meaning: 'ở tại' }, { char: '地', pinyin: 'dì', meaning: 'mặt đất' }, { char: '坏', pinyin: 'huài', meaning: 'hỏng, xấu' }, { char: '块', pinyin: 'kuài', meaning: 'miếng, đồng' }]
  },
  {
    id: 'rad_33', orderNumber: 33, char: '士', pinyin: 'shì', hanViet: 'Sĩ', strokes: 3, 
    meaningVi: 'Kẻ sĩ, người tài trí, tầng lớp trí thức có học',
    mnemonicStory: 'Người đứng thẳng học rộng biết từ một (一) đến mười (十).',
    commonWords: [{ char: '声', pinyin: 'shēng', meaning: 'âm thanh' }, { char: '壮', pinyin: 'zhuàng', meaning: 'tráng kiện' }, { char: '壹', pinyin: 'yī', meaning: 'số 1 hoa văn' }]
  },
  {
    id: 'rad_34', orderNumber: 34, char: '夂', pinyin: 'zhǐ', hanViet: 'Truy', strokes: 3, 
    meaningVi: 'Đi chậm rãi từ phía sau tới',
    mnemonicStory: 'Đôi chân bước từ tốn theo sau người khác.',
    commonWords: [{ char: '条', pinyin: 'tiáo', meaning: 'nhành, dải' }, { char: '复', pinyin: 'fù', meaning: 'lặp lại' }, { char: '各', pinyin: 'gè', meaning: 'mỗi' }]
  },
  {
    id: 'rad_35', orderNumber: 35, char: '夊', pinyin: 'suī', hanViet: 'Tuy', strokes: 3, 
    meaningVi: 'Chân bước chậm chạp vì vướng víu',
    mnemonicStory: 'Bàn chân bước khó khăn do vướng dây kéo phía sau.',
    commonWords: [{ char: '夏', pinyin: 'xià', meaning: 'mùa hè' }, { char: '夋', pinyin: 'qūn', meaning: 'nhanh nhẹn' }]
  },
  {
    id: 'rad_36', orderNumber: 36, char: '夕', pinyin: 'xī', hanViet: 'Tịch', strokes: 3, isCommon: true, 
    meaningVi: 'Buổi chiều tà, hoàng hôn, trăng non mới ló rạng',
    mnemonicStory: 'Mảnh trăng lưỡi liềm nhô lên khi mặt trời vừa lặn.',
    commonWords: [{ char: '多', pinyin: 'duō', meaning: 'nhiều' }, { char: '外', pinyin: 'wài', meaning: 'bên ngoài' }, { char: '夜', pinyin: 'yè', meaning: 'đêm tối' }, { char: '名', pinyin: 'míng', meaning: 'tên' }]
  },
  {
    id: 'rad_37', orderNumber: 37, char: '大', pinyin: 'dà', hanViet: 'Đại', strokes: 3, isCommon: true, 
    meaningVi: 'To lớn, vĩ đại, trưởng thành',
    mnemonicStory: 'Hình ảnh người đứng dang rộng hai tay và hai chân đầy hiên ngang.',
    commonWords: [{ char: '太', pinyin: 'tài', meaning: 'quá' }, { char: '天', pinyin: 'tiān', meaning: 'trời' }, { char: '夫', pinyin: 'fū', meaning: 'chồng' }, { char: '头', pinyin: 'tóu', meaning: 'cái đầu' }]
  },
  {
    id: 'rad_38', orderNumber: 38, char: '女', pinyin: 'nǚ', hanViet: 'Nữ', strokes: 3, isCommon: true, 
    meaningVi: 'Phụ nữ, sinh nở, sắc đẹp, mẹ con',
    mnemonicStory: 'Người phụ nữ đoan trang ngồi quỳ bắt chéo tay dịu dàng.',
    commonWords: [{ char: '好', pinyin: 'hǎo', meaning: 'tốt' }, { char: '妈', pinyin: 'mā', meaning: 'mẹ' }, { char: '妹', pinyin: 'mèi', meaning: 'em gái' }, { char: '她', pinyin: 'tā', meaning: 'cô ấy' }]
  },
  {
    id: 'rad_39', orderNumber: 39, char: '子', pinyin: 'zǐ', hanViet: 'Tử', strokes: 3, isCommon: true, 
    meaningVi: 'Con cái, đứa trẻ, em bé còn quấn tã',
    mnemonicStory: 'Đứa trẻ sơ sinh dang hai tay với chiếc đầu tròn trịa.',
    commonWords: [{ char: '学', pinyin: 'xué', meaning: 'học' }, { char: '孩', pinyin: 'hái', meaning: 'trẻ con' }, { char: '字', pinyin: 'zì', meaning: 'chữ Hán' }, { char: '存', pinyin: 'cún', meaning: 'tồn tại' }]
  },
  {
    id: 'rad_40', orderNumber: 40, char: '宀', pinyin: 'mián', hanViet: 'Miên', strokes: 3, isCommon: true, 
    meaningVi: 'Mái nhà ấm cúng, che chở nơi sinh sống',
    mnemonicStory: 'Hình mái nhà có chóp và hai vách tường che nắng mưa.',
    commonWords: [{ char: '家', pinyin: 'jiā', meaning: 'nhà' }, { char: '安', pinyin: 'ān', meaning: 'bình an' }, { char: '字', pinyin: 'zì', meaning: 'chữ' }, { char: '定', pinyin: 'dìng', meaning: 'cố định' }]
  },
  {
    id: 'rad_41', orderNumber: 41, char: '寸', pinyin: 'cùn', hanViet: 'Thốn', strokes: 3, 
    meaningVi: 'Đo lường, tấc gang, khoảng cách mạch cổ tay',
    mnemonicStory: 'Khoảng cách từ bàn tay đến điểm đo mạch đập ở cổ tay.',
    commonWords: [{ char: '对', pinyin: 'duì', meaning: 'đúng' }, { char: '封', pinyin: 'fēng', meaning: 'phong bì' }, { char: '射', pinyin: 'shè', meaning: 'bắn cung' }]
  },
  {
    id: 'rad_42', orderNumber: 42, char: '小', variant: '⺌ / ⺍', pinyin: 'xiǎo', hanViet: 'Tiểu', strokes: 3, isCommon: true, 
    meaningVi: 'Nhỏ bé, vụn vặt, thu nhỏ lại',
    mnemonicStory: 'Một vật bị chia tách ra hai bên thành mảnh nhỏ xíu.',
    commonWords: [{ char: '少', pinyin: 'shǎo', meaning: 'ít' }, { char: '光', pinyin: 'guāng', meaning: 'ánh sáng' }, { char: '省', pinyin: 'shěng', meaning: 'tiết kiệm' }]
  },
  {
    id: 'rad_43', orderNumber: 43, char: '尢', variant: '尣', pinyin: 'yóu', hanViet: 'Uông', strokes: 3, 
    meaningVi: 'Người khập khiễng, dị tật chân',
    mnemonicStory: 'Dáng người bước đi chân thấp chân cao cong vẹo.',
    commonWords: [{ char: '就', pinyin: 'jiù', meaning: 'thì, liền' }, { char: '尤', pinyin: 'yóu', meaning: 'đặc biệt' }, { char: '尴', pinyin: 'gān', meaning: 'ngượng ngùng' }]
  },
  {
    id: 'rad_44', orderNumber: 44, char: '尸', pinyin: 'shī', hanViet: 'Thi', strokes: 3, 
    meaningVi: 'Xác người, dáng người nằm, chỗ ngồi',
    mnemonicStory: 'Hình dáng một người nằm cong lưng bất động.',
    commonWords: [{ char: '屋', pinyin: 'wū', meaning: 'căn nhà' }, { char: '居', pinyin: 'jū', meaning: 'cư ngụ' }, { char: '层', pinyin: 'céng', meaning: 'tầng gác' }]
  },
  {
    id: 'rad_45', orderNumber: 45, char: '屮', pinyin: 'chè', hanViet: 'Triệt', strokes: 3, 
    meaningVi: 'Mầm cây non vừa đâm chồi khỏi vỏ',
    mnemonicStory: 'Cọng mầm non hai nhánh vừa nhú lên đón bình minh.',
    commonWords: [{ char: '屯', pinyin: 'tún', meaning: 'đóng quân' }, { char: '屰', pinyin: 'nì', meaning: 'nghịch đảo' }]
  },
  {
    id: 'rad_46', orderNumber: 46, char: '山', pinyin: 'shān', hanViet: 'Sơn', strokes: 3, isCommon: true, 
    meaningVi: 'Ngọn núi cao sừng sững, đồi non hiểm trở',
    mnemonicStory: 'Hình ảnh 3 đỉnh núi nhấp nhô đỉnh cao nhất ở giữa.',
    commonWords: [{ char: '出', pinyin: 'chū', meaning: 'ra ngoài' }, { char: '岁', pinyin: 'suì', meaning: 'tuổi' }, { char: '岛', pinyin: 'dǎo', meaning: 'hòn đảo' }, { char: '岭', pinyin: 'lǐng', meaning: 'dãy núi' }]
  },
  {
    id: 'rad_47', orderNumber: 47, char: '巛', variant: '川', pinyin: 'chuān', hanViet: 'Xuyên', strokes: 3, 
    meaningVi: 'Dòng sông suối chảy uốn lượn liên hồi',
    mnemonicStory: 'Ba dòng nước sông chảy song song cuồn cuộn không ngừng.',
    commonWords: [{ char: '州', pinyin: 'zhōu', meaning: 'châu lục' }, { char: '巡', pinyin: 'xún', meaning: 'tuần tra' }, { char: '顺', pinyin: 'shùn', meaning: 'thuận buồm xuôi gió' }]
  },
  {
    id: 'rad_48', orderNumber: 48, char: '工', pinyin: 'gōng', hanViet: 'Công', strokes: 3, isCommon: true, 
    meaningVi: 'Thước đo góc của thợ thủ công, công việc, kỹ thuật',
    mnemonicStory: 'Chiếc thước chữ I hoặc đe sắt của người thợ chế tác.',
    commonWords: [{ char: '左', pinyin: 'zuǒ', meaning: 'bên trái' }, { char: '差', pinyin: 'chà', meaning: 'kém, sai khác' }, { char: '巧', pinyin: 'qiǎo', meaning: 'khéo léo' }]
  },
  {
    id: 'rad_49', orderNumber: 49, char: '己', variant: '已 / 巳', pinyin: 'jǐ', hanViet: 'Kỷ', strokes: 3, 
    meaningVi: 'Bản thân mình, can thứ 6 thiên can, dây cuộn',
    mnemonicStory: 'Sợi dây uốn lượn gọn gàng hoặc bản thân tự kiềm chế mình.',
    commonWords: [{ char: '起', pinyin: 'qǐ', meaning: 'thức dậy' }, { char: '改', pinyin: 'gǎi', meaning: 'sửa đổi' }, { char: '包', pinyin: 'bāo', meaning: 'bao bọc' }]
  },
  {
    id: 'rad_50', orderNumber: 50, char: '巾', pinyin: 'jīn', hanViet: 'Cân', strokes: 3, 
    meaningVi: 'Khăn tay, vải vóc, màn treo',
    mnemonicStory: 'Tấm khăn vải dệt treo rủ xuống từ xà ngang.',
    commonWords: [{ char: '市', pinyin: 'shì', meaning: 'chợ, thị trấn' }, { char: '布', pinyin: 'bù', meaning: 'vải bố' }, { char: '带', pinyin: 'dài', meaning: 'dây thắt lưng' }]
  },
  {
    id: 'rad_51', orderNumber: 51, char: '干', pinyin: 'gān', hanViet: 'Can', strokes: 3, 
    meaningVi: 'Lá chắn che chắn vũ khí, làm việc, khô ráo',
    mnemonicStory: 'Hình chiếc khiên chữ Y có cán cầm đỡ mũi tên giáo mác.',
    commonWords: [{ char: '平', pinyin: 'píng', meaning: 'bình yên' }, { char: '年', pinyin: 'nián', meaning: 'năm tháng' }, { char: '并', pinyin: 'bìng', meaning: 'đồng thời' }]
  },
  {
    id: 'rad_52', orderNumber: 52, char: '幺', pinyin: 'yāo', hanViet: 'Yêu', strokes: 3, 
    meaningVi: 'Bé nhỏ xíu, sợi chỉ mỏng manh, con út',
    mnemonicStory: 'Sợi tơ non cuộn tròn nhỏ li ti mỏng manh.',
    commonWords: [{ char: '幼', pinyin: 'yòu', meaning: 'ấu thơ' }, { char: '幻', pinyin: 'huàn', meaning: 'ảo giác' }, { char: '幽', pinyin: 'yōu', meaning: 'u tịch' }]
  },
  {
    id: 'rad_53', orderNumber: 53, char: '广', pinyin: 'guǎng', hanViet: 'Quảng', strokes: 3, isCommon: true, 
    meaningVi: 'Mái nhà dựa vào sườn núi, kho bãi rộng lớn',
    mnemonicStory: 'Mái nhà kho lớn xây dựa vào vách đá rộng thênh thang.',
    commonWords: [{ char: '店', pinyin: 'diàn', meaning: 'cửa hàng' }, { char: '床', pinyin: 'chuáng', meaning: 'chiếc giường' }, { char: '应', pinyin: 'yīng', meaning: 'nên, đáp ứng' }]
  },
  {
    id: 'rad_54', orderNumber: 54, char: '廴', pinyin: 'yǐn', hanViet: 'Dẫn', strokes: 3, 
    meaningVi: 'Bước chân dài thênh thang, con đường dài',
    mnemonicStory: 'Dáng người sải bước dài tiến về phía trước trên đại lộ.',
    commonWords: [{ char: '延', pinyin: 'yán', meaning: 'kéo dài' }, { char: '建', pinyin: 'jiàn', meaning: 'xây dựng' }, { char: '廷', pinyin: 'tíng', meaning: 'triều đình' }]
  },
  {
    id: 'rad_55', orderNumber: 55, char: '廾', pinyin: 'gǒng', hanViet: 'Củng', strokes: 3, 
    meaningVi: 'Chắp hai tay kính cẩn dâng đồ vật lên',
    mnemonicStory: 'Hai bàn tay xòe ra kính cẩn nâng đồ quý lên cao.',
    commonWords: [{ char: '开', pinyin: 'kāi', meaning: 'mở ra' }, { char: '弄', pinyin: 'nòng', meaning: 'làm, nghịch' }, { char: '弃', pinyin: 'qì', meaning: 'vứt bỏ' }]
  },
  {
    id: 'rad_56', orderNumber: 56, char: '弋', pinyin: 'yì', hanViet: 'Dặc', strokes: 3, 
    meaningVi: 'Cái cọc gỗ buộc dây tên bắn chim',
    mnemonicStory: 'Chiếc cọc nhọn buộc dây vào mũi tên để bắn thu hồi tên.',
    commonWords: [{ char: '式', pinyin: 'shì', meaning: 'phương thức' }, { char: '武', pinyin: 'wǔ', meaning: 'võ thuật' }, { char: '代', pinyin: 'dài', meaning: 'thời đại' }]
  },
  {
    id: 'rad_57', orderNumber: 57, char: '弓', pinyin: 'gōng', hanViet: 'Cung', strokes: 3, 
    meaningVi: 'Cây cung uốn cong để bắn tên, vũ khí',
    mnemonicStory: 'Cánh cung bằng tre uốn cong căng dây sẵn sàng bắn.',
    commonWords: [{ char: '张', pinyin: 'zhāng', meaning: 'họ Trương, mở ra' }, { char: '引', pinyin: 'yǐn', meaning: 'dẫn dắt' }, { char: '强', pinyin: 'qiáng', meaning: 'kiên cường' }]
  },
  {
    id: 'rad_58', orderNumber: 58, char: '彐', variant: '彑', pinyin: 'jì', hanViet: 'Kệ', strokes: 3, 
    meaningVi: 'Đầu con nhím, bàn tay quặp ngón quắp mồi',
    mnemonicStory: 'Bàn tay cong các ngón như vuốt thú cào lấy thức ăn.',
    commonWords: [{ char: '归', pinyin: 'guī', meaning: 'trở về' }, { char: '雪', pinyin: 'xuě', meaning: 'tuyết rơi' }, { char: '当', pinyin: 'dāng', meaning: 'làm, đương' }]
  },
  {
    id: 'rad_59', orderNumber: 59, char: '彡', pinyin: 'shān', hanViet: 'Sam', strokes: 3, 
    meaningVi: 'Lông mao tơ mềm mượt, họa tiết trang trí',
    mnemonicStory: 'Ba vệt lông vũ rủ xuống mềm mại làm đẹp trang sức.',
    commonWords: [{ char: '影', pinyin: 'yǐng', meaning: 'bóng hình' }, { char: '形', pinyin: 'xíng', meaning: 'hình dạng' }, { char: '彩', pinyin: 'cǎi', meaning: 'sặc sỡ sắc màu' }]
  },
  {
    id: 'rad_60', orderNumber: 60, char: '彳', pinyin: 'chì', hanViet: 'Xích', strokes: 3, isCommon: true, 
    meaningVi: 'Bước chân trái, đi chậm trên đường phố',
    mnemonicStory: 'Nửa bên trái của chữ Hành (行) chỉ hành động đi lại.',
    commonWords: [{ char: '很', pinyin: 'hěn', meaning: 'rất' }, { char: '行', pinyin: 'xíng', meaning: 'được, đi' }, { char: '得', pinyin: 'dé', meaning: 'được' }, { char: '微', pinyin: 'wēi', meaning: 'nhỏ bé' }]
  },
  {
    id: 'rad_61', orderNumber: 61, char: '心', variant: '忄 / ⺗', pinyin: 'xīn', hanViet: 'Tâm', strokes: 4, isCommon: true, 
    meaningVi: 'Trái tim, tình cảm, cảm xúc, suy nghĩ, tâm trí',
    mnemonicStory: 'Trái tim có 4 ngăn đập thình thịch nuôi dưỡng tình yêu.',
    commonWords: [{ char: '想', pinyin: 'xiǎng', meaning: 'muốn, nhớ' }, { char: '快', pinyin: 'kuài', meaning: 'nhanh' }, { char: '慢', pinyin: 'màn', meaning: 'chậm' }, { char: '情', pinyin: 'qíng', meaning: 'tình cảm' }]
  },
  {
    id: 'rad_62', orderNumber: 62, char: '戈', pinyin: 'gē', hanViet: 'Qua', strokes: 4, 
    meaningVi: 'Cây mác giáo thời xưa, chiến tranh, binh đao',
    mnemonicStory: 'Cây giáo dài có lưỡi ngang dùng để móc và đâm trên chiến trường.',
    commonWords: [{ char: '我', pinyin: 'wǒ', meaning: 'tôi (cầm mác tự vệ)' }, { char: '战', pinyin: 'zhàn', meaning: 'chiến đấu' }, { char: '戒', pinyin: 'jiè', meaning: 'giới nghiêm' }]
  },
  {
    id: 'rad_63', orderNumber: 63, char: '戶', variant: '户 / 戸', pinyin: 'hù', hanViet: 'Hộ', strokes: 4, 
    meaningVi: 'Cánh cửa đơn, nhà cửa, hộ khẩu gia đình',
    mnemonicStory: 'Một cánh cửa gỗ mở ra vào trong gian phòng ấm cúng.',
    commonWords: [{ char: '房', pinyin: 'fáng', meaning: 'căn phòng' }, { char: '所', pinyin: 'suǒ', meaning: 'nơi chốn' }, { char: '扁', pinyin: 'biǎn', meaning: 'dẹt phẳng' }]
  },
  {
    id: 'rad_64', orderNumber: 64, char: '手', variant: '扌', pinyin: 'shǒu', hanViet: 'Thủ', strokes: 4, isCommon: true, 
    meaningVi: 'Bàn tay, thao tác bằng tay (cầm, nắm, đánh, nhặt)',
    mnemonicStory: 'Bàn tay có 5 ngón xòe ra thao tác muôn việc khéo léo.',
    commonWords: [{ char: '打', pinyin: 'dǎ', meaning: 'đánh' }, { char: '提', pinyin: 'tí', meaning: 'xách, nêu' }, { char: '找', pinyin: 'zhǎo', meaning: 'tìm kiếm' }, { char: '把', pinyin: 'bǎ', meaning: 'cầm lấy' }]
  },
  {
    id: 'rad_65', orderNumber: 65, char: '支', pinyin: 'zhī', hanViet: 'Chi', strokes: 4, 
    meaningVi: 'Cành cây nhánh nhỏ, chi trả, ủng hộ',
    mnemonicStory: 'Bàn tay cầm cành cây chống đỡ che chở.',
    commonWords: [{ char: '支', pinyin: 'zhī', meaning: 'chiếc bút (lượng từ)' }, { char: '收', pinyin: 'shōu', meaning: 'thu vào' }, { char: '枝', pinyin: 'zhī', meaning: 'cành cây' }]
  },
  {
    id: 'rad_66', orderNumber: 66, char: '攴', variant: '攵', pinyin: 'pū', hanViet: 'Phộc', strokes: 4, isCommon: true, 
    meaningVi: 'Bàn tay cầm roi gõ nhẹ nhắc nhở, thúc đẩy hành động',
    mnemonicStory: 'Bàn tay cầm cành roi nhỏ khẽ gõ đốc thúc việc học tập.',
    commonWords: [{ char: '放', pinyin: 'fàng', meaning: 'buông thả' }, { char: '教', pinyin: 'jiāo', meaning: 'dạy học' }, { char: '政', pinyin: 'zhèng', meaning: 'chính trị' }, { char: '散', pinyin: 'sàn', meaning: 'tan rã' }]
  },
  {
    id: 'rad_67', orderNumber: 67, char: '文', pinyin: 'wén', hanViet: 'Văn', strokes: 4, 
    meaningVi: 'Văn hóa, chữ viết, hoa văn xăm trên ngực',
    mnemonicStory: 'Hoa văn chữ triện tao nhã biểu trưng cho học vấn uyên thâm.',
    commonWords: [{ char: '刘', pinyin: 'liú', meaning: 'họ Lưu' }, { char: '齐', pinyin: 'qí', meaning: 'ngay ngắn' }, { char: '斑', pinyin: 'bān', meaning: 'đốm vằn' }]
  },
  {
    id: 'rad_68', orderNumber: 68, char: '斗', pinyin: 'dǒu', hanViet: 'Đẩu', strokes: 4, 
    meaningVi: 'Cái đấu đong thóc gạo, sao Bắc Đẩu',
    mnemonicStory: 'Chiếc gáo xúc ngũ cốc đong lương thực hàng ngày.',
    commonWords: [{ char: '料', pinyin: 'liào', meaning: 'vật liệu' }, { char: '斜', pinyin: 'xié', meaning: 'nghiêng' }, { char: '斟', pinyin: 'zhēn', meaning: 'rót rượu' }]
  },
  {
    id: 'rad_69', orderNumber: 69, char: '斤', pinyin: 'jīn', hanViet: 'Cân', strokes: 4, 
    meaningVi: 'Chiếc rìu chặt gỗ, đơn vị đo trọng lượng cân (500g)',
    mnemonicStory: 'Lưỡi rìu sắc bén bổ củi hoặc cân đo hàng hóa.',
    commonWords: [{ char: '新', pinyin: 'xīn', meaning: 'mới' }, { char: '听', pinyin: 'tīng', meaning: 'nghe' }, { char: '断', pinyin: 'duàn', meaning: 'đoạn tuyệt, đứt' }]
  },
  {
    id: 'rad_70', orderNumber: 70, char: '方', pinyin: 'fāng', hanViet: 'Phương', strokes: 4, isCommon: true, 
    meaningVi: 'Hình vuông, phương hướng bốn phương, phương pháp',
    mnemonicStory: 'Hai chiếc thuyền ghép mũi vuông vắn chỉ lối đi các ngả.',
    commonWords: [{ char: '旁', pinyin: 'páng', meaning: 'bên cạnh' }, { char: '旅', pinyin: 'lǚ', meaning: 'du lịch' }, { char: '放', pinyin: 'fàng', meaning: 'thả ra' }, { char: '族', pinyin: 'zú', meaning: 'dân tộc' }]
  },
  {
    id: 'rad_71', orderNumber: 71, char: '无', variant: '旡', pinyin: 'wú', hanViet: 'Vô', strokes: 4, 
    meaningVi: 'Không có, hư vô, vũ điệu cầu mưa',
    mnemonicStory: 'Dáng người múa tay áo rỗng không cầu mưa mùa hạn.',
    commonWords: [{ char: '既', pinyin: 'jì', meaning: 'đã vậy' }, { char: '旡', pinyin: 'jì', meaning: 'nghẹn thở' }]
  },
  {
    id: 'rad_72', orderNumber: 72, char: '日', pinyin: 'rì', hanViet: 'Nhật', strokes: 4, isCommon: true, 
    meaningVi: 'Mặt trời, ánh ban ngày, ngày tháng, thời gian',
    mnemonicStory: 'Mặt trời tròn vành vạnh chiếu tỏa ánh sáng muôn nơi.',
    commonWords: [{ char: '时', pinyin: 'shí', meaning: 'thời gian' }, { char: '明', pinyin: 'míng', meaning: 'sáng rõ' }, { char: '早', pinyin: 'zǎo', meaning: 'sớm' }, { char: '晚', pinyin: 'wǎn', meaning: 'muộn' }]
  },
  {
    id: 'rad_73', orderNumber: 73, char: '曰', pinyin: 'yuē', hanViet: 'Viết', strokes: 4, 
    meaningVi: 'Lời nói, mở miệng nói rằng',
    mnemonicStory: 'Khuôn miệng hơi dẹt thốt ra lời răn dạy của tiền nhân.',
    commonWords: [{ char: '替', pinyin: 'tì', meaning: 'thay thế' }, { char: '曹', pinyin: 'cáo', meaning: 'họ Tào' }, { char: '曾', pinyin: 'céng', meaning: 'từng trải' }]
  },
  {
    id: 'rad_74', orderNumber: 74, char: '月', pinyin: 'yuè', hanViet: 'Nguyệt', strokes: 4, isCommon: true, 
    meaningVi: 'Mặt trăng, đêm rằm, thịt/cơ thể (bộ nhục biến thể)',
    mnemonicStory: 'Mảnh trăng cong soi sáng trời đêm, hoặc bắp thịt cơ thể người.',
    commonWords: [{ char: '明', pinyin: 'míng', meaning: 'sáng' }, { char: '服', pinyin: 'fú', meaning: 'quần áo' }, { char: '期', pinyin: 'qī', meaning: 'kỳ hạn' }, { char: '胖', pinyin: 'pàng', meaning: 'béo' }]
  },
  {
    id: 'rad_75', orderNumber: 75, char: '木', pinyin: 'mù', hanViet: 'Mộc', strokes: 4, isCommon: true, 
    meaningVi: 'Cây cối, gỗ, rừng, đồ dùng bằng gỗ',
    mnemonicStory: 'Cây thân gỗ vươn cành lá lên trên và rễ bám sâu vào đất.',
    commonWords: [{ char: '本', pinyin: 'běn', meaning: 'quyển sách, gốc' }, { char: '杯', pinyin: 'bēi', meaning: 'cái ly' }, { char: '机', pinyin: 'jī', meaning: 'máy móc' }, { char: '桌', pinyin: 'zhuō', meaning: 'cái bàn' }]
  },
  {
    id: 'rad_76', orderNumber: 76, char: '欠', pinyin: 'qiàn', hanViet: 'Khiếm', strokes: 4, 
    meaningVi: 'Há miệng ngáp, thiếu thốn, nợ nần',
    mnemonicStory: 'Người há to miệng ngáp vì mệt mỏi thiếu hụt sinh lực.',
    commonWords: [{ char: '欢', pinyin: 'huān', meaning: 'hoan hỉ' }, { char: '歌', pinyin: 'gē', meaning: 'bài hát' }, { char: '次', pinyin: 'cì', meaning: 'lần, thứ tự' }]
  },
  {
    id: 'rad_77', orderNumber: 77, char: '止', pinyin: 'zhǐ', hanViet: 'Chỉ', strokes: 4, 
    meaningVi: 'Dừng lại, bàn chân dừng bước, ngăn cấm',
    mnemonicStory: 'Bàn chân chạm đất dừng hẳn bước chân nghỉ ngơi.',
    commonWords: [{ char: '正', pinyin: 'zhèng', meaning: 'ngay thẳng' }, { char: '步', pinyin: 'bù', meaning: 'bước chân' }, { char: '此', pinyin: 'cǐ', meaning: 'này, đây' }]
  },
  {
    id: 'rad_78', orderNumber: 78, char: '歹', variant: '歺', pinyin: 'dǎi', hanViet: 'Đãi', strokes: 4, 
    meaningVi: 'Xương tàn, chết chóc, tai ương điềm xấu',
    mnemonicStory: 'Mảnh xương gãy vụn biểu thị sự tàn lụi mục nát.',
    commonWords: [{ char: '死', pinyin: 'sǐ', meaning: 'chết' }, { char: '殊', pinyin: 'shū', meaning: 'đặc biệt' }, { char: '残', pinyin: 'cán', meaning: 'tàn tật' }]
  },
  {
    id: 'rad_79', orderNumber: 79, char: '殳', pinyin: 'shū', hanViet: 'Thù', strokes: 4, 
    meaningVi: 'Gậy gộc bằng tre không đầu nhọn, đánh đập',
    mnemonicStory: 'Bàn tay cầm cây gậy dài dùng trong huấn luyện binh sĩ.',
    commonWords: [{ char: '段', pinyin: 'duàn', meaning: 'đoạn' }, { char: '殷', pinyin: 'yīn', meaning: 'họ Ân' }, { char: '殿', pinyin: 'diàn', meaning: 'cung điện' }]
  },
  {
    id: 'rad_80', orderNumber: 80, char: '毋', variant: '母', pinyin: 'wú', hanViet: 'Vô', strokes: 4, 
    meaningVi: 'Chớ, đừng, người mẹ hiền bồng bế con',
    mnemonicStory: 'Người mẹ dịu hiền cho con bú sữa ngọt ngào ấm áp.',
    commonWords: [{ char: '每', pinyin: 'měi', meaning: 'mỗi' }, { char: '毒', pinyin: 'dú', meaning: 'chất độc' }]
  },
  {
    id: 'rad_81', orderNumber: 81, char: '比', pinyin: 'bǐ', hanViet: 'Tỉ', strokes: 4, 
    meaningVi: 'So sánh, đứng liền kề nhau',
    mnemonicStory: 'Hai người đứng sát vai nhau để đọ chiều cao.',
    commonWords: [{ char: '毕', pinyin: 'bì', meaning: 'tốt nghiệp' }, { char: '毙', pinyin: 'bì', meaning: 'ngã quỵ' }]
  },
  {
    id: 'rad_82', orderNumber: 82, char: '毛', pinyin: 'máo', hanViet: 'Mao', strokes: 4, 
    meaningVi: 'Lông động vật, sợi tóc mượt, bút lông',
    mnemonicStory: 'Sợi lông vũ cong mềm mại nhẹ bay trong không trung.',
    commonWords: [{ char: '毫', pinyin: 'háo', meaning: 'mảy may' }, { char: '尾', pinyin: 'wěi', meaning: 'cái đuôi' }, { char: '毯', pinyin: 'tǎn', meaning: 'tấm thảm' }]
  },
  {
    id: 'rad_83', orderNumber: 83, char: '氏', pinyin: 'shì', hanViet: 'Thị', strokes: 4, 
    meaningVi: 'Dòng họ, thị tộc, người nắm ấn quyền',
    mnemonicStory: 'Nhánh cây phả hệ gia tộc truyền từ đời này sang đời khác.',
    commonWords: [{ char: '民', pinyin: 'mín', meaning: 'nhân dân' }, { char: '氓', pinyin: 'máng', meaning: 'lưu manh' }]
  },
  {
    id: 'rad_84', orderNumber: 84, char: '气', pinyin: 'qì', hanViet: 'Khí', strokes: 4, isCommon: true, 
    meaningVi: 'Không khí, hơi thở, mây khói cuộn bay, khí hậu',
    mnemonicStory: 'Hơi nước bốc lên từ dòng suối tạo thành làn mây bềnh bồng.',
    commonWords: [{ char: '气', pinyin: 'qì', meaning: 'khí quyển' }, { char: '汽', pinyin: 'qì', meaning: 'hơi nước' }, { char: '氛', pinyin: 'fēn', meaning: 'bầu không khí' }]
  },
  {
    id: 'rad_85', orderNumber: 85, char: '水', variant: '氵 / 氺', pinyin: 'shuǐ', hanViet: 'Thủy', strokes: 4, isCommon: true, 
    meaningVi: 'Nước, sông suối, chất lỏng, hành động liên quan đến nước',
    mnemonicStory: 'Ba giọt nước bắn tung tóe đại diện cho dòng chảy mát lành.',
    commonWords: [{ char: '江', pinyin: 'jiāng', meaning: 'sông' }, { char: '河', pinyin: 'hé', meaning: 'dòng sông' }, { char: '海', pinyin: 'hǎi', meaning: 'biển cả' }, { char: '洗', pinyin: 'xǐ', meaning: 'giặt, rửa' }]
  },
  {
    id: 'rad_86', orderNumber: 86, char: '火', variant: '灬', pinyin: 'huǒ', hanViet: 'Hỏa', strokes: 4, isCommon: true, 
    meaningVi: 'Lửa, nhiệt độ, nấu nướng, thiêu đốt (bốn chấm hỏa)',
    mnemonicStory: 'Ngọn lửa bốc cháy đỏ rực với bốn tia lửa ấm áp bên dưới.',
    commonWords: [{ char: '热', pinyin: 'rè', meaning: 'nóng' }, { char: '点', pinyin: 'diǎn', meaning: 'điểm, chấm' }, { char: '照', pinyin: 'zhào', meaning: 'chiếu sáng' }, { char: '烧', pinyin: 'shāo', meaning: 'thiêu đốt' }]
  },
  {
    id: 'rad_87', orderNumber: 87, char: '爪', variant: '爫', pinyin: 'zhǎo', hanViet: 'Trảo', strokes: 4, 
    meaningVi: 'Móng vuốt chim thú quắp chặt con mồi',
    mnemonicStory: 'Bàn tay hoặc móng vuốt chim cong xuống quặp lấy cành cây.',
    commonWords: [{ char: '爱', pinyin: 'ài', meaning: 'yêu thương' }, { char: '采', pinyin: 'cǎi', meaning: 'hái lượm' }, { char: '妥', pinyin: 'tuǒ', meaning: 'thỏa đáng' }]
  },
  {
    id: 'rad_88', orderNumber: 88, char: '父', pinyin: 'fù', hanViet: 'Phụ', strokes: 4, 
    meaningVi: 'Người cha, người trụ cột trong gia đình',
    mnemonicStory: 'Bàn tay người cha cầm chiếc roi nghiêm khắc mà yêu thương dạy con.',
    commonWords: [{ char: '爸', pinyin: 'bà', meaning: 'bố, ba' }, { char: '爷', pinyin: 'yé', meaning: 'ông nội' }]
  },
  {
    id: 'rad_89', orderNumber: 89, char: '爻', pinyin: 'yáo', hanViet: 'Hào', strokes: 4, 
    meaningVi: 'Vạch quẻ Kinh Dịch, đan kết chéo nhau',
    mnemonicStory: 'Hai vạch chéo nhau tượng trưng cho sự biến hóa của vạn vật đất trời.',
    commonWords: [{ char: '爽', pinyin: 'shuǎng', meaning: 'sảng khoái' }, { char: '尔', pinyin: 'ěr', meaning: 'ngươi' }]
  },
  {
    id: 'rad_90', orderNumber: 90, char: '爿', variant: '丬', pinyin: 'qiáng', hanViet: 'Tường', strokes: 4, 
    meaningVi: 'Tấm ván gỗ bên trái, chiếc giường xẻ đôi',
    mnemonicStory: 'Nửa bên trái khúc gỗ xẻ làm thanh ván dựng tường.',
    commonWords: [{ char: '壮', pinyin: 'zhuàng', meaning: 'tráng kiện' }, { char: '将', pinyin: 'jiāng', meaning: 'tướng soái' }]
  },
  {
    id: 'rad_91', orderNumber: 91, char: '片', pinyin: 'piàn', hanViet: 'Phiến', strokes: 4, 
    meaningVi: 'Mảnh ván mỏng bên phải, lá cây mỏng, viên thuốc',
    mnemonicStory: 'Nửa bên phải khúc gỗ xẻ thành lát mỏng manh.',
    commonWords: [{ char: '版', pinyin: 'bǎn', meaning: 'bản in' }, { char: '牌', pinyin: 'pái', meaning: 'tấm thẻ' }, { char: '牒', pinyin: 'dié', meaning: 'hồ sơ' }]
  },
  {
    id: 'rad_92', orderNumber: 92, char: '牙', pinyin: 'yá', hanViet: 'Nha', strokes: 4, 
    meaningVi: 'Răng nanh thú nghiến vào nhau sắc nhọn',
    mnemonicStory: 'Hai chiếc răng hàm đan khít vào nhau để nhai thức ăn.',
    commonWords: [{ char: '鸦', pinyin: 'yā', meaning: 'con quạ' }, { char: '伢', pinyin: 'yá', meaning: 'đứa bé' }]
  },
  {
    id: 'rad_93', orderNumber: 93, char: '牛', variant: '牜', pinyin: 'niú', hanViet: 'Ngưu', strokes: 4, isCommon: true, 
    meaningVi: 'Con trâu bò, sức kéo chăm chỉ cần cù',
    mnemonicStory: 'Chiếc đầu trâu có hai sừng cong vút hiền lành gặm cỏ.',
    commonWords: [{ char: '物', pinyin: 'wù', meaning: 'đồ vật' }, { char: '特', pinyin: 'tè', meaning: 'đặc biệt' }, { char: '件', pinyin: 'jiàn', meaning: 'kiện hàng' }]
  },
  {
    id: 'rad_94', orderNumber: 94, char: '犬', variant: '犭', pinyin: 'quǎn', hanViet: 'Khuyển', strokes: 4, isCommon: true, 
    meaningVi: 'Con chó, loài thú săn 4 chân',
    mnemonicStory: 'Con chó nhỏ vẫy đuôi mừng chủ hoặc săn đuổi trong rừng.',
    commonWords: [{ char: '猫', pinyin: 'māo', meaning: 'con mèo' }, { char: '狗', pinyin: 'gǒu', meaning: 'con chó' }, { char: '猪', pinyin: 'zhū', meaning: 'con lợn' }, { char: '狂', pinyin: 'kuáng', meaning: 'cuồng nhiệt' }]
  },
  {
    id: 'rad_95', orderNumber: 95, char: '玄', pinyin: 'xuán', hanViet: 'Huyền', strokes: 5, 
    meaningVi: 'Màu đen sâu thẳm, huyền bí kỳ ảo',
    mnemonicStory: 'Sợi tơ nhuộm màu đen sẫm huyền ảo không lường được.',
    commonWords: [{ char: '率', pinyin: 'shuài', meaning: 'tỷ lệ, dẫn đầu' }, { char: '畜', pinyin: 'chù', meaning: 'gia súc' }]
  },
  {
    id: 'rad_96', orderNumber: 96, char: '玉', variant: '王', pinyin: 'yù', hanViet: 'Ngọc', strokes: 5, isCommon: true, 
    meaningVi: 'Viên ngọc quý, vua chúa, đồ trang sức quý báu',
    mnemonicStory: 'Ba miếng ngọc xâu chuỗi vào một sợi dây có thêm dấu chấm sáng lấp lánh.',
    commonWords: [{ char: '玩', pinyin: 'wán', meaning: 'chơi đùa' }, { char: '球', pinyin: 'qiú', meaning: 'quả bóng' }, { char: '现', pinyin: 'xiàn', meaning: 'hiện tại' }, { char: '理', pinyin: 'lǐ', meaning: 'lý lẽ' }]
  },
  {
    id: 'rad_97', orderNumber: 97, char: '瓜', pinyin: 'guā', hanViet: 'Qua', strokes: 5, 
    meaningVi: 'Quả dưa, các loại bầu bí dây leo',
    mnemonicStory: 'Dây leo trĩu nặng quả dưa tròn ủng ở giữa.',
    commonWords: [{ char: '瓢', pinyin: 'piáo', meaning: 'chiếc gáo dừa' }, { char: '瓣', pinyin: 'bàn', meaning: 'cánh hoa, múi dưa' }]
  },
  {
    id: 'rad_98', orderNumber: 98, char: '瓦', pinyin: 'wǎ', hanViet: 'Ngõa', strokes: 5, 
    meaningVi: 'Viên ngói nung lợp mái, đồ sành sứ gốm',
    mnemonicStory: 'Miếng ngói đất sét uốn cong úp lên mái che mưa dột.',
    commonWords: [{ char: '瓶', pinyin: 'píng', meaning: 'cái chai, lọ' }, { char: '瓷', pinyin: 'cí', meaning: 'gốm sứ' }]
  },
  {
    id: 'rad_99', orderNumber: 99, char: '甘', pinyin: 'gān', hanViet: 'Cam', strokes: 5, 
    meaningVi: 'Vị ngọt ngào của quả chín cam thảo',
    mnemonicStory: 'Ngậm một mẩu đồ ăn ngọt lịm trong vòm miệng thơm ngát.',
    commonWords: [{ char: '甚', pinyin: 'shèn', meaning: 'thậm chí' }, { char: '甜', pinyin: 'tián', meaning: 'ngọt' }]
  },
  {
    id: 'rad_100', orderNumber: 100, char: '生', pinyin: 'shēng', hanViet: 'Sinh', strokes: 5, isCommon: true, 
    meaningVi: 'Sinh sôi nảy nở, sống, sinh viên, nảy sinh',
    mnemonicStory: 'Cây cỏ mọc đâm chồi lên từ mặt đất tràn đầy sức sống.',
    commonWords: [{ char: '产', pinyin: 'chǎn', meaning: 'sản xuất' }, { char: '甥', pinyin: 'shēng', meaning: 'cháu ngoại' }, { char: '甦', pinyin: 'sū', meaning: 'hồi sinh' }]
  },
  {
    id: 'rad_101', orderNumber: 101, char: '用', pinyin: 'yòng', hanViet: 'Dụng', strokes: 5, 
    meaningVi: 'Sử dụng, dùng đến, dụng cụ đồ nghề',
    mnemonicStory: 'Chiếc xô đan bằng nan tre dùng múc nước tưới cây.',
    commonWords: [{ char: '甩', pinyin: 'shuǎi', meaning: 'vung tay' }, { char: '甭', pinyin: 'béng', meaning: 'khỏi cần' }]
  },
  {
    id: 'rad_102', orderNumber: 102, char: '田', pinyin: 'tián', hanViet: 'Điền', strokes: 5, isCommon: true, 
    meaningVi: 'Thửa ruộng vuông vắn chia bờ ngang dọc',
    mnemonicStory: 'Cánh đồng lúa chia thành 4 ô vuông phì nhiêu màu mỡ.',
    commonWords: [{ char: '男', pinyin: 'nán', meaning: 'nam giới' }, { char: '画', pinyin: 'huà', meaning: 'bức tranh' }, { char: '界', pinyin: 'jiè', meaning: 'ranh giới' }, { char: '留', pinyin: 'liú', meaning: 'giữ lại' }]
  },
  {
    id: 'rad_103', orderNumber: 103, char: '疋', variant: '⺪', pinyin: 'pǐ', hanViet: 'Thất', strokes: 5, 
    meaningVi: 'Cuộn vải, xấp lụa, đôi bàn chân',
    mnemonicStory: 'Xấp vải dệt cuốn ngay ngắn chuẩn bị đem may áo.',
    commonWords: [{ char: '疏', pinyin: 'shū', meaning: 'thưa thớt' }, { char: '疑', pinyin: 'yí', meaning: 'nghi ngờ' }]
  },
  {
    id: 'rad_104', orderNumber: 104, char: '疒', pinyin: 'bìng', hanViet: 'Nạch', strokes: 5, isCommon: true, 
    meaningVi: 'Bệnh tật, đau ốm, người nằm trên giường bệnh',
    mnemonicStory: 'Người ốm sốt đổ mồ hôi nằm nghiêng trên giường dưỡng bệnh.',
    commonWords: [{ char: '病', pinyin: 'bìng', meaning: 'ốm, bệnh' }, { char: '痛', pinyin: 'tòng', meaning: 'đau đớn' }, { char: '瘦', pinyin: 'shòu', meaning: 'gầy gò' }, { char: '疼', pinyin: 'téng', meaning: 'đau nhức' }]
  },
  {
    id: 'rad_105', orderNumber: 105, char: '癶', pinyin: 'bō', hanViet: 'Bát', strokes: 5, 
    meaningVi: 'Hai bàn chân bước ngược hướng nhau',
    mnemonicStory: 'Hai dấu chân dang rộng đạp lên cỏ leo đồi.',
    commonWords: [{ char: '登', pinyin: 'dēng', meaning: 'leo núi' }, { char: '发', pinyin: 'fā', meaning: 'phát tài' }]
  },
  {
    id: 'rad_106', orderNumber: 106, char: '白', pinyin: 'bái', hanViet: 'Bạch', strokes: 5, isCommon: true, 
    meaningVi: 'Màu trắng tinh khiết, sáng tỏ rõ ràng',
    mnemonicStory: 'Hạt gạo trắng ngần hoặc ánh bình minh rạng rỡ tỏa sáng.',
    commonWords: [{ char: '百', pinyin: 'bǎi', meaning: 'một trăm' }, { char: '的', pinyin: 'de', meaning: 'của' }, { char: '皇', pinyin: 'huáng', meaning: 'hoàng đế' }]
  },
  {
    id: 'rad_107', orderNumber: 107, char: '皮', pinyin: 'pí', hanViet: 'Bì', strokes: 5, 
    meaningVi: 'Da dẻ, vỏ ngoài trái cây, tấm da thú',
    mnemonicStory: 'Bàn tay bóc tách tấm da thú phơi khô làm áo ấm.',
    commonWords: [{ char: '破', pinyin: 'pò', meaning: 'rách, vỡ' }, { char: '波', pinyin: 'bō', meaning: 'sóng nước' }]
  },
  {
    id: 'rad_108', orderNumber: 108, char: '皿', pinyin: 'mǐn', hanViet: 'Mãnh', strokes: 5, isCommon: true, 
    meaningVi: 'Bát đĩa, chén đĩa sâu lòng đựng đồ ăn',
    mnemonicStory: 'Chiếc đĩa đựng hoa quả có chân đế vững chãi.',
    commonWords: [{ char: '盆', pinyin: 'pén', meaning: 'cái chậu' }, { char: '盒', pinyin: 'hé', meaning: 'chiếc hộp' }, { char: '盘', pinyin: 'pán', meaning: 'cái đĩa' }, { char: '益', pinyin: 'yì', meaning: 'ích lợi' }]
  },
  {
    id: 'rad_109', orderNumber: 109, char: '目', pinyin: 'mù', hanViet: 'Mục', strokes: 5, isCommon: true, 
    meaningVi: 'Đôi mắt, nhìn ngắm, thị lực, mục lục',
    mnemonicStory: 'Đôi mắt có con ngươi tròn xoe tinh anh nhìn rõ muôn vật.',
    commonWords: [{ char: '看', pinyin: 'kàn', meaning: 'nhìn, xem' }, { char: '眼', pinyin: 'yǎn', meaning: 'con mắt' }, { char: '睛', pinyin: 'jīng', meaning: 'tròng mắt' }, { char: '着', pinyin: 'zhe', meaning: 'đang' }]
  },
  {
    id: 'rad_110', orderNumber: 110, char: '矛', pinyin: 'máo', hanViet: 'Mâu', strokes: 5, 
    meaningVi: 'Ngọn giáo mác nhọn hoắt đâm xuyên giáp',
    mnemonicStory: 'Ngọn mâu dài có mũi nhọn sắc lẹm của chiến binh xưa.',
    commonWords: [{ char: '柔', pinyin: 'róu', meaning: 'mềm mại' }, { char: '矜', pinyin: 'jīn', meaning: 'kiêu hãnh' }]
  },
  {
    id: 'rad_111', orderNumber: 111, char: '矢', pinyin: 'shǐ', hanViet: 'Thỉ', strokes: 5, 
    meaningVi: 'Mũi tên nhọn bay thẳng đích, lời thề',
    mnemonicStory: 'Mũi tên tre có lông vũ phía sau bay vút trúng hồng tâm.',
    commonWords: [{ char: '知', pinyin: 'zhī', meaning: 'hiểu biết' }, { char: '短', pinyin: 'duǎn', meaning: 'ngắn' }, { char: '矮', pinyin: 'ǎi', meaning: 'thấp bé' }]
  },
  {
    id: 'rad_112', orderNumber: 112, char: '石', pinyin: 'shí', hanViet: 'Thạch', strokes: 5, isCommon: true, 
    meaningVi: 'Tảng đá cứng rắn, sỏi quặng khoáng vật',
    mnemonicStory: 'Tảng đá rơi từ vách núi nằm trơ trọi vững chắc dưới chân đồi.',
    commonWords: [{ char: '破', pinyin: 'pò', meaning: 'phá vỡ' }, { char: '硬', pinyin: 'yìng', meaning: 'cứng' }, { char: '碑', pinyin: 'bēi', meaning: 'tấm bia đá' }]
  },
  {
    id: 'rad_113', orderNumber: 113, char: '示', variant: '礻', pinyin: 'shì', hanViet: 'Thị', strokes: 5, isCommon: true, 
    meaningVi: 'Thần linh, tế lễ, phước lành, ban ơn',
    mnemonicStory: 'Bàn thờ cúng tổ tiên thần linh đón nhận điều may mắn phúc lộc.',
    commonWords: [{ char: '祝', pinyin: 'zhù', meaning: 'chúc tụng' }, { char: '福', pinyin: 'fú', meaning: 'phúc lành' }, { char: '礼', pinyin: 'lǐ', meaning: 'lễ nghi' }, { char: '神', pinyin: 'shén', meaning: 'thần thánh' }]
  },
  {
    id: 'rad_114', orderNumber: 114, char: '禸', pinyin: 'róu', hanViet: 'Nhựu', strokes: 5, 
    meaningVi: 'Dấu chân thú hoang dẫm trên đất bùn',
    mnemonicStory: 'Vết chân thú móng vuốt in hằn trên mặt đất ẩm.',
    commonWords: [{ char: '禹', pinyin: 'yǔ', meaning: 'vua Vũ' }, { char: '禽', pinyin: 'qín', meaning: 'loài chim muông' }]
  },
  {
    id: 'rad_115', orderNumber: 115, char: '禾', pinyin: 'hé', hanViet: 'Hòa', strokes: 5, isCommon: true, 
    meaningVi: 'Cây lúa trĩu hạt vàng óng, mùa màng lương thực',
    mnemonicStory: 'Bông lúa chín uốn cong đầu trĩu nặng hạt vàng rực rỡ.',
    commonWords: [{ char: '秋', pinyin: 'qiū', meaning: 'mùa thu' }, { char: '种', pinyin: 'zhǒng', meaning: 'hạt giống' }, { char: '科', pinyin: 'kē', meaning: 'khoa học' }, { char: '租', pinyin: 'zū', meaning: 'thuê mướn' }]
  },
  {
    id: 'rad_116', orderNumber: 116, char: '穴', pinyin: 'xué', hanViet: 'Huyệt', strokes: 5, 
    meaningVi: 'Hang động trong lòng đất, hốc đá chật hẹp',
    mnemonicStory: 'Mái che trên hốc hang sâu hun hút nơi động vật trú ẩn.',
    commonWords: [{ char: '空', pinyin: 'kōng', meaning: 'trống rỗng, bầu trời' }, { char: '穿', pinyin: 'chuān', meaning: 'mặc áo' }, { char: '窗', pinyin: 'chuāng', meaning: 'cửa sổ' }]
  },
  {
    id: 'rad_117', orderNumber: 117, char: '立', pinyin: 'lì', hanViet: 'Lập', strokes: 5, isCommon: true, 
    meaningVi: 'Đứng thẳng hiên ngang trên mặt đất, thành lập',
    mnemonicStory: 'Người đứng vững vàng hai chân trên mặt đất không nghiêng ngả.',
    commonWords: [{ char: '站', pinyin: 'zhàn', meaning: 'đứng, trạm ga' }, { char: '亲', pinyin: 'qīn', meaning: 'thân thiết' }, { char: '音', pinyin: 'yīn', meaning: 'âm thanh' }]
  },
  {
    id: 'rad_118', orderNumber: 118, char: '竹', variant: '⺮', pinyin: 'zhú', hanViet: 'Trúc', strokes: 6, isCommon: true, 
    meaningVi: 'Cây tre trúc, ống tre, bút đóm làm bằng tre',
    mnemonicStory: 'Hai nhánh lá trúc nhọn rủ xuống đung đưa trước gió.',
    commonWords: [{ char: '等', pinyin: 'děng', meaning: 'chờ đợi' }, { char: '答', pinyin: 'dá', meaning: 'trả lời' }, { char: '笑', pinyin: 'xiào', meaning: 'cười đùa' }, { char: '笔', pinyin: 'bǐ', meaning: 'cây bút' }]
  },
  {
    id: 'rad_119', orderNumber: 119, char: '米', pinyin: 'mǐ', hanViet: 'Mễ', strokes: 6, isCommon: true, 
    meaningVi: 'Hạt gạo, ngô thóc lương thực, ăn uống no đủ',
    mnemonicStory: 'Hạt thóc tách vỏ trấu để lộ hạt gạo trắng thơm tho.',
    commonWords: [{ char: '糖', pinyin: 'táng', meaning: 'đường ngọt' }, { char: '粉', pinyin: 'fěn', meaning: 'bột mì' }, { char: '粗', pinyin: 'cū', meaning: 'thô ráp' }, { char: '类', pinyin: 'lèi', meaning: 'chủng loại' }]
  },
  {
    id: 'rad_120', orderNumber: 120, char: '糸', variant: '糹 / 纟', pinyin: 'mì', hanViet: 'Mịch', strokes: 6, isCommon: true, 
    meaningVi: 'Sợi tơ lụa, dây buộc, may vá dệt vải, kết nối',
    mnemonicStory: 'Bó sợi tơ dệt mỏng manh kết nối người với người.',
    commonWords: [{ char: '红', pinyin: 'hóng', meaning: 'màu đỏ' }, { char: '给', pinyin: 'gěi', meaning: 'cho, đưa' }, { char: '绿', pinyin: 'lǜ', meaning: 'màu xanh lá' }, { char: '线', pinyin: 'xiàn', meaning: 'sợi dây' }]
  },
  {
    id: 'rad_121', orderNumber: 121, char: '缶', pinyin: 'fǒu', hanViet: 'Phẫu', strokes: 6, 
    meaningVi: 'Chum vại bằng sành sứ gốm đựng nước',
    mnemonicStory: 'Chiếc chum đất nung có nắp đậy ủ rượu thơm lừng.',
    commonWords: [{ char: '缺', pinyin: 'quē', meaning: 'thiếu hụt' }, { char: '缸', pinyin: 'gāng', meaning: 'cái chum vại' }]
  },
  {
    id: 'rad_122', orderNumber: 122, char: '网', variant: '罒 / ⺲', pinyin: 'wǎng', hanViet: 'Võng', strokes: 6, isCommon: true, 
    meaningVi: 'Lưới đánh cá, mạng nhện, mạng lưới internet',
    mnemonicStory: 'Tấm lưới đánh bắt cá đan ô mắt cáo giữ chặt tôm cá.',
    commonWords: [{ char: '买', pinyin: 'mǎi', meaning: 'mua' }, { char: '罪', pinyin: 'zuì', meaning: 'tội lỗi' }, { char: '置', pinyin: 'zhì', meaning: 'bố trí' }, { char: '罗', pinyin: 'luó', meaning: 'họ La, lưới' }]
  },
  {
    id: 'rad_123', orderNumber: 123, char: '羊', variant: '⺶ / ⺷', pinyin: 'yáng', hanViet: 'Dương', strokes: 6, isCommon: true, 
    meaningVi: 'Con dê, con cừu hiền lành, điềm lành mỹ mãn',
    mnemonicStory: 'Đầu chú cừu non có hai sừng xoắn xinh xắn hiền dịu.',
    commonWords: [{ char: '美', pinyin: 'měi', meaning: 'xinh đẹp' }, { char: '着', pinyin: 'zhe', meaning: 'đang' }, { char: '差', pinyin: 'chà', meaning: 'sai biệt' }, { char: '群', pinyin: 'qún', meaning: 'bầy đàn' }]
  },
  {
    id: 'rad_124', orderNumber: 124, char: '羽', pinyin: 'yǔ', hanViet: 'Vũ', strokes: 6, 
    meaningVi: 'Đôi cánh lông vũ của loài chim tung bay',
    mnemonicStory: 'Hai chiếc lông vũ xếp so le nâng cánh chim bay cao.',
    commonWords: [{ char: '习', pinyin: 'xí', meaning: 'học tập' }, { char: '翅', pinyin: 'chì', meaning: 'cánh' }, { char: '翔', pinyin: 'xiáng', meaning: 'bay lượn' }]
  },
  {
    id: 'rad_125', orderNumber: 125, char: '老', variant: '耂', pinyin: 'lǎo', hanViet: 'Lão', strokes: 6, isCommon: true, 
    meaningVi: 'Người già cao tuổi, kính lão đắc thọ',
    mnemonicStory: 'Cụ già râu tóc bạc phơ chống gậy bước từng bước chậm rãi.',
    commonWords: [{ char: '老', pinyin: 'lǎo', meaning: 'già' }, { char: '考', pinyin: 'kǎo', meaning: 'thi cử' }, { char: '者', pinyin: 'zhě', meaning: 'người mà' }]
  },
  {
    id: 'rad_126', orderNumber: 126, char: '而', pinyin: 'ér', hanViet: 'Nhi', strokes: 6, 
    meaningVi: 'Mà, râu cằm rủ xuống dưới môi',
    mnemonicStory: 'Chòm râu cằm mềm mại rủ xuống dưới miệng cụ già.',
    commonWords: [{ char: '耐', pinyin: 'nài', meaning: 'nhẫn nại' }, { char: '耍', pinyin: 'shuǎ', meaning: 'chơi đùa' }]
  },
  {
    id: 'rad_127', orderNumber: 127, char: '耒', pinyin: 'lěi', hanViet: 'Lỗi', strokes: 6, 
    meaningVi: 'Cái cày xới đất của nhà nông',
    mnemonicStory: 'Lưỡi cày bằng gỗ có tay cầm cày sâu vào lòng đất.',
    commonWords: [{ char: '耕', pinyin: 'gēng', meaning: 'cày cấy' }, { char: '耗', pinyin: 'hào', meaning: 'tiêu hao' }]
  },
  {
    id: 'rad_128', orderNumber: 128, char: '耳', pinyin: 'ěr', hanViet: 'Nhĩ', strokes: 6, isCommon: true, 
    meaningVi: 'Cái tai, lắng nghe, thính giác',
    mnemonicStory: 'Vành tai người lắng nghe tiếng thì thầm của gió.',
    commonWords: [{ char: '听', pinyin: 'tīng', meaning: 'lắng nghe' }, { char: '闻', pinyin: 'wén', meaning: 'nghe ngóng' }, { char: '聪', pinyin: 'cōng', meaning: 'thông minh' }, { char: '聊', pinyin: 'liáo', meaning: 'trò chuyện' }]
  },
  {
    id: 'rad_129', orderNumber: 129, char: '聿', variant: '⺻', pinyin: 'yù', hanViet: 'Duật', strokes: 6, 
    meaningVi: 'Cây bút lông thời xưa viết trên thẻ tre',
    mnemonicStory: 'Bàn tay cầm cây bút lông thẳng đứng viết chữ lên trúc.',
    commonWords: [{ char: '律', pinyin: 'lǜ', meaning: 'kỷ luật' }, { char: '建', pinyin: 'jiàn', meaning: 'xây dựng' }]
  },
  {
    id: 'rad_130', orderNumber: 130, char: '肉', variant: '⺼', pinyin: 'ròu', hanViet: 'Nhục', strokes: 6, isCommon: true, 
    meaningVi: 'Thịt, cơ bắp, bộ phận cơ thể người (thường viết thành nguyệt 月)',
    mnemonicStory: 'Tảng thịt tươi ngon có vân mỡ bổ dưỡng cho sức khỏe.',
    commonWords: [{ char: '脚', pinyin: 'jiǎo', meaning: 'bàn chân' }, { char: '胖', pinyin: 'pàng', meaning: 'mập mạp' }, { char: '脸', pinyin: 'liǎn', meaning: 'khuôn mặt' }, { char: '肚', pinyin: 'dù', meaning: 'bụng' }]
  },
  {
    id: 'rad_131', orderNumber: 131, char: '臣', pinyin: 'chén', hanViet: 'Thần', strokes: 6, 
    meaningVi: 'Bề tôi, quần thần phủ phục trước hoàng đế',
    mnemonicStory: 'Đôi mắt nhìn cúi gằm xuống cung kính trước thiên tử.',
    commonWords: [{ char: '卧', pinyin: 'wò', meaning: 'nằm ngủ' }, { char: '臧', pinyin: 'zāng', meaning: 'họ Tang' }]
  },
  {
    id: 'rad_132', orderNumber: 132, char: '自', pinyin: 'zì', hanViet: 'Tự', strokes: 6, isCommon: true, 
    meaningVi: 'Bản thân, tự mình, chiếc mũi người',
    mnemonicStory: 'Ngón tay trỏ chỉ thẳng vào chóp mũi mình khi nói \'Tôi\'.',
    commonWords: [{ char: '息', pinyin: 'xī', meaning: 'hơi thở' }, { char: '臭', pinyin: 'chòu', meaning: 'hôi thối' }, { char: '首', pinyin: 'shǒu', meaning: 'đầu tiên' }]
  },
  {
    id: 'rad_133', orderNumber: 133, char: '至', pinyin: 'zhì', hanViet: 'Chí', strokes: 6, 
    meaningVi: 'Đến nơi, cùng cực, mũi tên rơi cắm xuống đất',
    mnemonicStory: 'Mũi tên bay vút từ xa rồi cắm phập xuống mặt đất tới đích.',
    commonWords: [{ char: '到', pinyin: 'dào', meaning: 'đến nơi' }, { char: '致', pinyin: 'zhì', meaning: 'dẫn đến' }]
  },
  {
    id: 'rad_134', orderNumber: 134, char: '臼', pinyin: 'jiù', hanViet: 'Cữu', strokes: 6, 
    meaningVi: 'Cái cối giã gạo bằng đá',
    mnemonicStory: 'Lòng cối đá có các vết răng cưa để giã nát thóc gạo.',
    commonWords: [{ char: '舅', pinyin: 'jiù', meaning: 'cậu, bác' }, { char: '毁', pinyin: 'huǐ', meaning: 'phá hủy' }]
  },
  {
    id: 'rad_135', orderNumber: 135, char: '舌', pinyin: 'shé', hanViet: 'Thiệt', strokes: 6, 
    meaningVi: 'Cái lưỡi nếm vị, lời nói, phát ngôn',
    mnemonicStory: 'Chiếc lưỡi thè ra khỏi vòm miệng nếm vị ngon món ăn.',
    commonWords: [{ char: '甜', pinyin: 'tián', meaning: 'ngọt lịm' }, { char: '乱', pinyin: 'luàn', meaning: 'bừa bãi' }, { char: '话', pinyin: 'huà', meaning: 'lời nói' }]
  },
  {
    id: 'rad_136', orderNumber: 136, char: '舛', pinyin: 'chuǎn', hanViet: 'Suyễn', strokes: 6, 
    meaningVi: 'Hai bàn chân quay ngược chiều, sai lệch',
    mnemonicStory: 'Hai bàn chân bước chéo ngoe sai lệch hướng đi.',
    commonWords: [{ char: '舜', pinyin: 'shùn', meaning: 'vua Thuấn' }, { char: '舞', pinyin: 'wǔ', meaning: 'múa nhảy' }]
  },
  {
    id: 'rad_137', orderNumber: 137, char: '舟', pinyin: 'zhōu', hanViet: 'Chu', strokes: 6, 
    meaningVi: 'Chiếc thuyền con bơi trên sông nước',
    mnemonicStory: 'Chiếc thuyền độc mộc lướt êm đềm trên sóng biếc.',
    commonWords: [{ char: '船', pinyin: 'chuán', meaning: 'con tàu, thuyền' }, { char: '般', pinyin: 'bān', meaning: 'dạng vẻ' }]
  },
  {
    id: 'rad_138', orderNumber: 138, char: '艮', pinyin: 'gèn', hanViet: 'Cấn', strokes: 6, 
    meaningVi: 'Quẻ Cấn, kiên định dừng lại, trừng mắt ngoảnh mặt',
    mnemonicStory: 'Đôi mắt trừng nhìn lại kiên quyết không nhượng bộ.',
    commonWords: [{ char: '很', pinyin: 'hěn', meaning: 'rất' }, { char: '跟', pinyin: 'gēn', meaning: 'cùng với' }, { char: '银', pinyin: 'yín', meaning: 'bạc trắng' }]
  },
  {
    id: 'rad_139', orderNumber: 139, char: '色', pinyin: 'sè', hanViet: 'Sắc', strokes: 6, 
    meaningVi: 'Màu sắc, vẻ mặt, sắc thái dung mạo',
    mnemonicStory: 'Gương mặt biểu lộ cảm xúc yêu thương hoặc giận hờn.',
    commonWords: [{ char: '艳', pinyin: 'yàn', meaning: 'rực rỡ' }, { char: '绝', pinyin: 'jué', meaning: 'tuyệt diệu' }]
  },
  {
    id: 'rad_140', orderNumber: 140, char: '艸', variant: '艹', pinyin: 'cǎo', hanViet: 'Thảo', strokes: 6, isCommon: true, 
    meaningVi: 'Cỏ cây, hoa lá thảo mộc, rau củ quả',
    mnemonicStory: 'Hai ngọn cỏ non xanh mơn mởn nhú lên đón sương sớm.',
    commonWords: [{ char: '茶', pinyin: 'chá', meaning: 'trà' }, { char: '花', pinyin: 'huā', meaning: 'bông hoa' }, { char: '草', pinyin: 'cǎo', meaning: 'ngọn cỏ' }, { char: '菜', pinyin: 'cài', meaning: 'rau, món ăn' }]
  },
  {
    id: 'rad_141', orderNumber: 141, char: '虍', pinyin: 'hū', hanViet: 'Hổ', strokes: 6, 
    meaningVi: 'Vằn lông cọp, chúa sơn lâm dũng mãnh',
    mnemonicStory: 'Bộ lông vằn vện dữ tợn của chúa sơn lâm oai phong.',
    commonWords: [{ char: '虎', pinyin: 'hǔ', meaning: 'con hổ' }, { char: '虚', pinyin: 'xū', meaning: 'hư vô' }, { char: '虑', pinyin: 'lǜ', meaning: 'lo nghĩ' }]
  },
  {
    id: 'rad_142', orderNumber: 142, char: '虫', pinyin: 'chóng', hanViet: 'Trùng', strokes: 6, isCommon: true, 
    meaningVi: 'Côn trùng, sâu bọ, rắn rết, loài bò sát',
    mnemonicStory: 'Chú sâu nhỏ uốn khúc bò trườn trên mặt đất.',
    commonWords: [{ char: '蛋', pinyin: 'dàn', meaning: 'trứng' }, { char: '蜜', pinyin: 'mì', meaning: 'mật ong' }, { char: '虽', pinyin: 'suī', meaning: 'tuy rằng' }, { char: '蛇', pinyin: 'shé', meaning: 'con rắn' }]
  },
  {
    id: 'rad_143', orderNumber: 143, char: '血', pinyin: 'xiě', hanViet: 'Huyết', strokes: 6, 
    meaningVi: 'Máu tươi trong cơ thể, tế lễ vật phẩm',
    mnemonicStory: 'Giọt máu tươi trong bát tế dâng lên trời đất cầu an.',
    commonWords: [{ char: '衅', pinyin: 'xìn', meaning: 'khiêu khích' }, { char: '衄', pinyin: 'nǜ', meaning: 'chảy máu mũi' }]
  },
  {
    id: 'rad_144', orderNumber: 144, char: '行', pinyin: 'xíng', hanViet: 'Hành', strokes: 6, isCommon: true, 
    meaningVi: 'Ngã tư đường, đi lại, tiến hành, làm được',
    mnemonicStory: 'Giao lộ ngã tư tấp nập người xe qua lại mọi hướng.',
    commonWords: [{ char: '街', pinyin: 'jiē', meaning: 'đường phố' }, { char: '律', pinyin: 'lǜ', meaning: 'luật pháp' }, { char: '术', pinyin: 'shù', meaning: 'nghệ thuật' }]
  },
  {
    id: 'rad_145', orderNumber: 145, char: '衣', variant: '衤', pinyin: 'yī', hanViet: 'Y', strokes: 6, isCommon: true, 
    meaningVi: 'Áo quần, trang phục che thân, vải vóc may mặc',
    mnemonicStory: 'Tà áo vạt chéo cài nút kín đáo giữ ấm cho cơ thể.',
    commonWords: [{ char: '裙', pinyin: 'qún', meaning: 'chiếc váy' }, { char: '被', pinyin: 'bèi', meaning: 'cái chăn' }, { char: '裤', pinyin: 'kù', meaning: 'chiếc quần' }, { char: '补', pinyin: 'bǔ', meaning: 'vá áo' }]
  },
  {
    id: 'rad_146', orderNumber: 146, char: '襾', variant: '覀 / 西', pinyin: 'yà', hanViet: 'Á', strokes: 6, 
    meaningVi: 'Nắp đậy đồ vật úp xuống, hướng tây mặt trời lặn',
    mnemonicStory: 'Chiếc nắp giỏ đậy kín giữ ấm lương thực bên trong.',
    commonWords: [{ char: '要', pinyin: 'yào', meaning: 'cần, muốn' }, { char: '票', pinyin: 'piào', meaning: 'vé' }, { char: '覆', pinyin: 'fù', meaning: 'lật úp' }]
  },
  {
    id: 'rad_147', orderNumber: 147, char: '見', variant: '见', pinyin: 'jiàn', hanViet: 'Kiến', strokes: 7, isCommon: true, 
    meaningVi: 'Nhìn thấy, trông thấy, gặp gỡ, tiếp kiến',
    mnemonicStory: 'Đôi mắt to đặt trên đôi chân dài chạy đi xem hội.',
    commonWords: [{ char: '现', pinyin: 'xiàn', meaning: 'hiện tại' }, { char: '规', pinyin: 'guī', meaning: 'quy tắc' }, { char: '视', pinyin: 'shì', meaning: 'thị giác' }, { char: '觉', pinyin: 'jué', meaning: 'cảm giác' }]
  },
  {
    id: 'rad_148', orderNumber: 148, char: '角', pinyin: 'jiǎo', hanViet: 'Giác', strokes: 7, 
    meaningVi: 'Chiếc sừng nhọn của thú, góc nhọn, hào (tiền tệ)',
    mnemonicStory: 'Chiếc sừng cong vút bảo vệ loài thú săn mồi.',
    commonWords: [{ char: '解', pinyin: 'jiě', meaning: 'giải thích' }, { char: '触', pinyin: 'chù', meaning: 'chạm vào' }]
  },
  {
    id: 'rad_149', orderNumber: 149, char: '言', variant: '讠', pinyin: 'yán', hanViet: 'Ngôn', strokes: 7, isCommon: true, 
    meaningVi: 'Lời nói, ngôn ngữ, đàm thoại, giao tiếp',
    mnemonicStory: 'Khuôn miệng phát ra những âm thanh rành rọt thành lời.',
    commonWords: [{ char: '说', pinyin: 'shuō', meaning: 'nói' }, { char: '话', pinyin: 'huà', meaning: 'lời nói' }, { char: '语', pinyin: 'yǔ', meaning: 'ngữ pháp' }, { char: '请', pinyin: 'qǐng', meaning: 'mời, xin' }]
  },
  {
    id: 'rad_150', orderNumber: 150, char: '谷', pinyin: 'gǔ', hanViet: 'Cốc', strokes: 7, 
    meaningVi: 'Thung lũng sâu giữa hai ngọn núi, khe suối',
    mnemonicStory: 'Dòng nước suối chảy từ đỉnh núi đổ vào lòng chảo thung lũng.',
    commonWords: [{ char: '却', pinyin: 'què', meaning: 'nhưng mà' }, { char: '欲', pinyin: 'yù', meaning: 'ham muốn' }]
  },
  {
    id: 'rad_151', orderNumber: 151, char: '豆', pinyin: 'dòu', hanViet: 'Đậu', strokes: 7, 
    meaningVi: 'Hạt đậu, đĩa đựng tế lễ cao chân',
    mnemonicStory: 'Chiếc đĩa có chân đế cao đựng đồ cúng tế thần linh.',
    commonWords: [{ char: '短', pinyin: 'duǎn', meaning: 'ngắn' }, { char: '登', pinyin: 'dēng', meaning: 'leo lên' }]
  },
  {
    id: 'rad_152', orderNumber: 152, char: '豕', pinyin: 'shǐ', hanViet: 'Thỉ', strokes: 7, 
    meaningVi: 'Con heo, con lợn béo núc ních',
    mnemonicStory: 'Hình dáng chú heo béo có bốn chân ngắn và chiếc đuôi cong.',
    commonWords: [{ char: '家', pinyin: 'jiā', meaning: 'nhà (nuôi lợn dưới mái)' }, { char: '豪', pinyin: 'háo', meaning: 'hào sảng' }]
  },
  {
    id: 'rad_153', orderNumber: 153, char: '豸', pinyin: 'zhì', hanViet: 'Trĩ', strokes: 7, 
    meaningVi: 'Loài thú săn mồi lưng dài uốn cong',
    mnemonicStory: 'Con báo hoặc thú săn rình mồi uốn mình chuẩn bị vồ.',
    commonWords: [{ char: '豹', pinyin: 'bào', meaning: 'con báo' }, { char: '貌', pinyin: 'mào', meaning: 'diện mạo' }]
  },
  {
    id: 'rad_154', orderNumber: 154, char: '貝', variant: '贝', pinyin: 'bèi', hanViet: 'Bối', strokes: 7, isCommon: true, 
    meaningVi: 'Vỏ sò vỏ ốc, tiền bạc của cải thời cổ đại, quý giá',
    mnemonicStory: 'Vỏ sò óng ánh dùng làm đơn vị tiền tệ trao đổi mua bán xưa.',
    commonWords: [{ char: '买', pinyin: 'mǎi', meaning: 'mua' }, { char: '贵', pinyin: 'guì', meaning: 'đắt đỏ' }, { char: '费', pinyin: 'fèi', meaning: 'chi phí' }, { char: '财', pinyin: 'cái', meaning: 'tài sản' }]
  },
  {
    id: 'rad_155', orderNumber: 155, char: '赤', pinyin: 'chì', hanViet: 'Xích', strokes: 7, 
    meaningVi: 'Màu đỏ thắm rực rỡ, trung trinh trần trụi',
    mnemonicStory: 'Ngọn lửa lớn thiêu đốt làm bừng lên màu đỏ thắm.',
    commonWords: [{ char: '赫', pinyin: 'hè', meaning: 'hiển hách' }, { char: '赦', pinyin: 'shè', meaning: 'tha thứ' }]
  },
  {
    id: 'rad_156', orderNumber: 156, char: '走', pinyin: 'zǒu', hanViet: 'Tẩu', strokes: 7, isCommon: true, 
    meaningVi: 'Đi bộ, chạy trốn, dạo bước tiến bước',
    mnemonicStory: 'Người vung tay rảo bước chân nhanh thoăn thoắt trên đường.',
    commonWords: [{ char: '起', pinyin: 'qǐ', meaning: 'thức dậy' }, { char: '赶', pinyin: 'gǎn', meaning: 'đuổi theo' }, { char: '超', pinyin: 'chāo', meaning: 'vượt qua' }, { char: '越', pinyin: 'yuè', meaning: 'vượt lên' }]
  },
  {
    id: 'rad_157', orderNumber: 157, char: '足', variant: '⻊', pinyin: 'zú', hanViet: 'Túc', strokes: 7, isCommon: true, 
    meaningVi: 'Bàn chân, đôi chân, đầy đủ túc cầu',
    mnemonicStory: 'Đầu gối và bàn chân dẫm vững trên mặt đất đá.',
    commonWords: [{ char: '跑', pinyin: 'pǎo', meaning: 'chạy bộ' }, { char: '跳', pinyin: 'tiào', meaning: 'nhảy' }, { char: '路', pinyin: 'lù', meaning: 'con đường' }, { char: '踢', pinyin: 'tī', meaning: 'đá bóng' }]
  },
  {
    id: 'rad_158', orderNumber: 158, char: '身', pinyin: 'shēn', hanViet: 'Thân', strokes: 7, 
    meaningVi: 'Thân thể con người, vóc dáng, bụng bầu',
    mnemonicStory: 'Hình người nghiêng mình để lộ chiếc bụng lớn mang bầu chở che.',
    commonWords: [{ char: '射', pinyin: 'shè', meaning: 'bắn' }, { char: '躬', pinyin: 'gōng', meaning: 'cúi mình' }]
  },
  {
    id: 'rad_159', orderNumber: 159, char: '車', variant: '车', pinyin: 'chē', hanViet: 'Xa', strokes: 7, isCommon: true, 
    meaningVi: 'Xe cộ, phương tiện bánh lăn, cỗ xe ngựa',
    mnemonicStory: 'Cỗ xe nhìn từ trên cao xuống có trục bánh và thùng xe vững chãi.',
    commonWords: [{ char: '轨', pinyin: 'guǐ', meaning: 'đường ray' }, { char: '轻', pinyin: 'qīng', meaning: 'nhẹ' }, { char: '辅', pinyin: 'fǔ', meaning: 'phụ trợ' }, { char: '辆', pinyin: 'liàng', meaning: 'chiếc xe' }]
  },
  {
    id: 'rad_160', orderNumber: 160, char: '辛', pinyin: 'xīn', hanViet: 'Tân', strokes: 7, 
    meaningVi: 'Vị cay nồng, cay đắng nhọc nhằn, dao khắc phạt tội',
    mnemonicStory: 'Dao nhọn khắc chữ phạt lên trán tội nhân chịu cay đắng gian nan.',
    commonWords: [{ char: '辣', pinyin: 'là', meaning: 'cay cay' }, { char: '辟', pinyin: 'pì', meaning: 'khai phá' }]
  },
  {
    id: 'rad_161', orderNumber: 161, char: '辰', pinyin: 'chén', hanViet: 'Thần', strokes: 7, 
    meaningVi: 'Chi thứ 5 địa chi (con Rồng), thời khắc ban mai',
    mnemonicStory: 'Vỏ sò thè lưỡi cày xới đất khi bình minh hé rạng.',
    commonWords: [{ char: '农', pinyin: 'nóng', meaning: 'nông nghiệp' }, { char: '辱', pinyin: 'rǔ', meaning: 'lăng nhục' }]
  },
  {
    id: 'rad_162', orderNumber: 162, char: '辵', variant: '辶', pinyin: 'chuò', hanViet: 'Sước', strokes: 7, isCommon: true, 
    meaningVi: 'Chân bước đi lại dừng lại, con đường hành trình',
    mnemonicStory: 'Bàn chân bước từng bước vững chãi trên con đường dài.',
    commonWords: [{ char: '这', pinyin: 'zhè', meaning: 'đây này' }, { char: '进', pinyin: 'jìn', meaning: 'tiến vào' }, { char: '送', pinyin: 'sòng', meaning: 'tiễn đưa' }, { char: '返', pinyin: 'fǎn', meaning: 'quay về' }]
  },
  {
    id: 'rad_163', orderNumber: 163, char: '邑', variant: '阝', pinyin: 'yì', hanViet: 'Ấp', strokes: 7, isCommon: true, 
    meaningVi: 'Xóm làng, vùng đất, thành phố (bộ phụ bên phải)',
    mnemonicStory: 'Khu thành phố đông dân cư sinh sống bên bờ sông hiền hòa.',
    commonWords: [{ char: '都', pinyin: 'dōu', meaning: 'tất cả, thủ đô' }, { char: '部', pinyin: 'bù', meaning: 'bộ phận' }, { char: '邮', pinyin: 'yóu', meaning: 'bưu điện' }, { char: '邻', pinyin: 'lín', meaning: 'hàng xóm' }]
  },
  {
    id: 'rad_164', orderNumber: 164, char: '酉', pinyin: 'yǒu', hanViet: 'Dậu', strokes: 7, isCommon: true, 
    meaningVi: 'Hũ rượu lên men, đồ uống có cồn, chi thứ 10 (con Gà)',
    mnemonicStory: 'Bình rượu ủ kín lên men thơm ngát dâng khách quý.',
    commonWords: [{ char: '酸', pinyin: 'suān', meaning: 'vị chua' }, { char: '酒', pinyin: 'jiǔ', meaning: 'rượu' }, { char: '醒', pinyin: 'xǐng', meaning: 'tỉnh táo' }, { char: '醋', pinyin: 'cù', meaning: 'dấm chua' }]
  },
  {
    id: 'rad_165', orderNumber: 165, char: '釆', pinyin: 'biàn', hanViet: 'Biện', strokes: 7, 
    meaningVi: 'Dấu móng vuốt phân biệt rõ ràng',
    mnemonicStory: 'Vết chân chim thú để lại giúp thợ săn phân biệt dấu vết rừng sâu.',
    commonWords: [{ char: '释', pinyin: 'shì', meaning: 'giải thích' }, { char: '釉', pinyin: 'yòu', meaning: 'men gốm' }]
  },
  {
    id: 'rad_166', orderNumber: 166, char: '里', pinyin: 'lǐ', hanViet: 'Lý', strokes: 7, isCommon: true, 
    meaningVi: 'Dặm đường (500m), bên trong, thôn xóm làng quê',
    mnemonicStory: 'Ruộng đất (田) kết hợp mặt đất (土) thành xóm làng định cư ấm êm.',
    commonWords: [{ char: '重', pinyin: 'zhòng', meaning: 'nặng' }, { char: '野', pinyin: 'yě', meaning: 'hoang dã' }, { char: '量', pinyin: 'liàng', meaning: 'đo lường' }]
  },
  {
    id: 'rad_167', orderNumber: 167, char: '金', variant: '钅', pinyin: 'jīn', hanViet: 'Kim', strokes: 8, isCommon: true, 
    meaningVi: 'Vàng bạc, kim loại sắt đồng, tiền tài quý báu',
    mnemonicStory: 'Quặng vàng giấu sâu dưới lòng đất sáng lấp lánh giá trị.',
    commonWords: [{ char: '钱', pinyin: 'qián', meaning: 'tiền' }, { char: '钟', pinyin: 'zhōng', meaning: 'đồng hồ' }, { char: '铁', pinyin: 'tiě', meaning: 'sắt thép' }, { char: '银', pinyin: 'yín', meaning: 'bạc' }]
  },
  {
    id: 'rad_168', orderNumber: 168, char: '長', variant: '长', pinyin: 'cháng', hanViet: 'Trường', strokes: 8, 
    meaningVi: 'Dài thườn thượt, lớn lên, trưởng lão, mái tóc dài',
    mnemonicStory: 'Mái tóc dài thướt tha của người trưởng giả đạo mạo.',
    commonWords: [{ char: '张', pinyin: 'zhāng', meaning: 'họ Trương' }, { char: '帐', pinyin: 'zhàng', meaning: 'trướng màn' }]
  },
  {
    id: 'rad_169', orderNumber: 169, char: '門', variant: '门', pinyin: 'mén', hanViet: 'Môn', strokes: 8, isCommon: true, 
    meaningVi: 'Cánh cổng lớn hai cánh, lối ra vào, môn phái',
    mnemonicStory: 'Hai cánh cổng lớn của dinh thự mở rộng đón khách.',
    commonWords: [{ char: '间', pinyin: 'jiān', meaning: 'ở giữa, gian' }, { char: '问', pinyin: 'wèn', meaning: 'hỏi thăm' }, { char: '闭', pinyin: 'bì', meaning: 'đóng lại' }, { char: '开', pinyin: 'kāi', meaning: 'mở' }]
  },
  {
    id: 'rad_170', orderNumber: 170, char: '阜', variant: '阝', pinyin: 'fù', hanViet: 'Phụ', strokes: 8, isCommon: true, 
    meaningVi: 'Gò đất cao, đồi núi cheo leo (bộ phụ bên trái)',
    mnemonicStory: 'Những bậc thang đất đắp cao dần lên sườn đồi.',
    commonWords: [{ char: '院', pinyin: 'yuàn', meaning: 'bệnh viện, sân' }, { char: '阳', pinyin: 'yáng', meaning: 'ánh dương' }, { char: '阴', pinyin: 'yīn', meaning: 'âm u' }, { char: '防', pinyin: 'fáng', meaning: 'phòng ngừa' }]
  },
  {
    id: 'rad_171', orderNumber: 171, char: '隶', pinyin: 'lì', hanViet: 'Đãi', strokes: 8, 
    meaningVi: 'Bắt giữ nô lệ, theo gót phục dịch',
    mnemonicStory: 'Bàn tay nắm lấy đuôi con thú hoang thuần hóa.',
    commonWords: [{ char: '隶', pinyin: 'lì', meaning: 'nô lệ' }, { char: '康', pinyin: 'kāng', meaning: 'khang trang' }]
  },
  {
    id: 'rad_172', orderNumber: 172, char: '隹', pinyin: 'zhuī', hanViet: 'Chuy', strokes: 8, 
    meaningVi: 'Chim đuôi ngắn nhỏ nhắn',
    mnemonicStory: 'Chú chim sẻ đuôi ngắn đậu líu lo trên cành trúc.',
    commonWords: [{ char: '难', pinyin: 'nán', meaning: 'khó khăn' }, { char: '谁', pinyin: 'shéi', meaning: 'ai đó' }, { char: '集', pinyin: 'jí', meaning: 'tập hợp' }]
  },
  {
    id: 'rad_173', orderNumber: 173, char: '雨', pinyin: 'yǔ', hanViet: 'Vũ', strokes: 8, isCommon: true, 
    meaningVi: 'Mưa rào, khí hậu mây sấm sương tuyết',
    mnemonicStory: 'Bầu trời phủ mây xám trút những giọt mưa rào mát rượi.',
    commonWords: [{ char: '雪', pinyin: 'xuě', meaning: 'tuyết trắng' }, { char: '零', pinyin: 'líng', meaning: 'số 0' }, { char: '雷', pinyin: 'léi', meaning: 'sấm sét' }, { char: '需', pinyin: 'xū', meaning: 'nhu cầu' }]
  },
  {
    id: 'rad_174', orderNumber: 174, char: '靑', variant: '青', pinyin: 'qīng', hanViet: 'Thanh', strokes: 8, 
    meaningVi: 'Màu xanh biếc của cây cỏ non và bầu trời trong vắt',
    mnemonicStory: 'Mầm cỏ non tốt tươi xanh biếc vươn mình sau mưa.',
    commonWords: [{ char: '静', pinyin: 'jìng', meaning: 'yên tĩnh' }, { char: '靓', pinyin: 'liàng', meaning: 'xinh xắn' }]
  },
  {
    id: 'rad_175', orderNumber: 175, char: '非', pinyin: 'fēi', hanViet: 'Phi', strokes: 8, 
    meaningVi: 'Không phải, sai trái, đôi cánh dang ngược chiều',
    mnemonicStory: 'Hai hàng lông cánh dang ngược chiều biểu thị sự bất đồng.',
    commonWords: [{ char: '靠', pinyin: 'kào', meaning: 'dựa vào' }, { char: '靡', pinyin: 'mǐ', meaning: 'xa hoa' }]
  },
  {
    id: 'rad_176', orderNumber: 176, char: '面', variant: '靣', pinyin: 'miàn', hanViet: 'Diện', strokes: 9, 
    meaningVi: 'Khuôn mặt người, bề mặt, diện tích',
    mnemonicStory: 'Khuôn mặt có mắt mũi miệng hài hòa biểu lộ cảm xúc.',
    commonWords: [{ char: '靥', pinyin: 'yè', meaning: 'má lúm đồng tiền' }, { char: '腼', pinyin: 'miǎn', meaning: 'bẽn lẽn' }]
  },
  {
    id: 'rad_177', orderNumber: 177, char: '革', pinyin: 'gé', hanViet: 'Cách', strokes: 9, 
    meaningVi: 'Tấm da thú cạo sạch lông, cải cách đổi mới',
    mnemonicStory: 'Tấm da trâu lột ra kéo căng phơi khô làm trống.',
    commonWords: [{ char: '鞋', pinyin: 'xié', meaning: 'đôi giày' }, { char: '靴', pinyin: 'xuē', meaning: 'đôi ủng' }]
  },
  {
    id: 'rad_178', orderNumber: 178, char: '韋', variant: '韦', pinyin: 'wéi', hanViet: 'Vi', strokes: 9, 
    meaningVi: 'Tấm da thuộc dẻo dai uốn cong',
    mnemonicStory: 'Tấm da thuộc mềm dẻo xoay quanh bảo vệ đôi chân chiến sĩ.',
    commonWords: [{ char: '韧', pinyin: 'rèn', meaning: 'dẻo dai' }, { char: '韩', pinyin: 'hán', meaning: 'Hàn Quốc' }]
  },
  {
    id: 'rad_179', orderNumber: 179, char: '韭', pinyin: 'jiǔ', hanViet: 'Cửu', strokes: 9, 
    meaningVi: 'Cây rau hẹ xanh ngắt mọc lại sau khi cắt',
    mnemonicStory: 'Lá hẹ mọc lên từ luống đất cắt ngọn lại đâm chồi.',
    commonWords: [{ char: '韭', pinyin: 'jiǔ', meaning: 'rau hẹ' }, { char: '韲', pinyin: 'jī', meaning: 'băm nhỏ' }]
  },
  {
    id: 'rad_180', orderNumber: 180, char: '音', pinyin: 'yīn', hanViet: 'Âm', strokes: 9, 
    meaningVi: 'Âm thanh, giai điệu du dương, tiếng nói',
    mnemonicStory: 'Lời nói phát ra từ miệng thấu tận đáy lòng ngân vang khúc hát.',
    commonWords: [{ char: '韵', pinyin: 'yùn', meaning: 'vần điệu' }, { char: '韶', pinyin: 'sháo', meaning: 'thời thanh xuân' }]
  },
  {
    id: 'rad_181', orderNumber: 181, char: '頁', variant: '页', pinyin: 'yè', hanViet: 'Hiệt', strokes: 9, isCommon: true, 
    meaningVi: 'Cái đầu người, trang sách, gáy sách',
    mnemonicStory: 'Cái đầu người có tóc trên đỉnh suy nghĩ thấu đáo.',
    commonWords: [{ char: '题', pinyin: 'tí', meaning: 'đề mục' }, { char: '顶', pinyin: 'dǐng', meaning: 'đỉnh đầu' }, { char: '顺', pinyin: 'shùn', meaning: 'thuận lợi' }, { char: '领', pinyin: 'lǐng', meaning: 'dẫn đầu' }]
  },
  {
    id: 'rad_182', orderNumber: 182, char: '風', variant: '风', pinyin: 'fēng', hanViet: 'Phong', strokes: 9, isCommon: true, 
    meaningVi: 'Gió thổi mát lành, phong tục tập quán',
    mnemonicStory: 'Cơn gió lùa mang theo sâu bọ côn trùng bay lượn trên đồng nội.',
    commonWords: [{ char: '飒', pinyin: 'sà', meaning: 'gió thổi rì rào' }, { char: '飘', pinyin: 'piāo', meaning: 'bay bổng' }, { char: '飓', pinyin: 'jù', meaning: 'gió lốc' }]
  },
  {
    id: 'rad_183', orderNumber: 183, char: '飛', variant: '飞', pinyin: 'fēi', hanViet: 'Phi', strokes: 9, 
    meaningVi: 'Bay lượn trên trời cao, đôi cánh mở rộng',
    mnemonicStory: 'Chú chim dang rộng đôi cánh dài liệng giữa trời mây.',
    commonWords: [{ char: '翻', pinyin: 'fān', meaning: 'lật giở' }, { char: '翼', pinyin: 'yì', meaning: 'đôi cánh' }]
  },
  {
    id: 'rad_184', orderNumber: 184, char: '食', variant: '飠 / 饣', pinyin: 'shí', hanViet: 'Thực', strokes: 9, isCommon: true, 
    meaningVi: 'Thức ăn, ẩm thực, ăn uống no đủ',
    mnemonicStory: 'Chiếc bát có nắp đậy thơm phức cơm canh nóng hổi.',
    commonWords: [{ char: '饭', pinyin: 'fàn', meaning: 'cơm' }, { char: '饮', pinyin: 'yǐn', meaning: 'uống nước' }, { char: '饱', pinyin: 'bǎo', meaning: 'no nê' }, { char: '饿', pinyin: 'è', meaning: 'đói bụng' }]
  },
  {
    id: 'rad_185', orderNumber: 185, char: '首', pinyin: 'shǒu', hanViet: 'Thủ', strokes: 9, 
    meaningVi: 'Cái đầu người, đứng đầu, bài thơ/bài hát',
    mnemonicStory: 'Khuôn mặt có tóc trên đầu chỉ vị chỉ huy dẫn đầu.',
    commonWords: [{ char: '道', pinyin: 'dào', meaning: 'đạo lý, con đường' }, { char: '馗', pinyin: 'kuí', meaning: 'đường lớn' }]
  },
  {
    id: 'rad_186', orderNumber: 186, char: '香', pinyin: 'xiāng', hanViet: 'Hương', strokes: 9, 
    meaningVi: 'Mùi thơm ngào ngạt của lúa nếp chín',
    mnemonicStory: 'Hạt lúa chín thơm tho tỏa ngát hương thơm mùa gặt.',
    commonWords: [{ char: '馥', pinyin: 'fù', meaning: 'thơm nức' }, { char: '馨', pinyin: 'xīn', meaning: 'hương thơm ấm áp' }]
  },
  {
    id: 'rad_187', orderNumber: 187, char: '馬', variant: '马', pinyin: 'mǎ', hanViet: 'Mã', strokes: 10, isCommon: true, 
    meaningVi: 'Con ngựa, phi nhanh, ngựa chiến dũng mãnh',
    mnemonicStory: 'Con tuấn mã tung vó với bờm tung bay trong gió lộng.',
    commonWords: [{ char: '骑', pinyin: 'qí', meaning: 'cưỡi ngựa' }, { char: '验', pinyin: 'yàn', meaning: 'kiểm nghiệm' }, { char: '驾', pinyin: 'jià', meaning: 'lái xe' }, { char: '骗', pinyin: 'piàn', meaning: 'lừa dối' }]
  },
  {
    id: 'rad_188', orderNumber: 188, char: '骨', pinyin: 'gǔ', hanViet: 'Cốt', strokes: 10, 
    meaningVi: 'Khung xương nâng đỡ thân thể, cốt cách kiên cường',
    mnemonicStory: 'Khung xương khớp kết nối vững chãi tạo nên khí phách con người.',
    commonWords: [{ char: '体', pinyin: 'tǐ', meaning: 'thể thao' }, { char: '髓', pinyin: 'suǐ', meaning: 'tủy sống' }, { char: '骷', pinyin: 'kū', meaning: 'đầu lâu' }]
  },
  {
    id: 'rad_189', orderNumber: 189, char: '高', pinyin: 'gāo', hanViet: 'Cao', strokes: 10, isCommon: true, 
    meaningVi: 'Cao ráo, chòi canh cao vút, tôn kính',
    mnemonicStory: 'Tòa lầu cao có mái chóp vươn chạm tận trời xanh.',
    commonWords: [{ char: '亮', pinyin: 'liàng', meaning: 'sáng sủa' }, { char: '亭', pinyin: 'tíng', meaning: 'chòi nghỉ' }]
  },
  {
    id: 'rad_190', orderNumber: 190, char: '髟', pinyin: 'biāo', hanViet: 'Bưu', strokes: 10, 
    meaningVi: 'Mái tóc dài thướt tha, râu ria mềm mại',
    mnemonicStory: 'Lọn tóc dài của thiếu nữ bay nhẹ nhàng trong gió xuân.',
    commonWords: [{ char: '发', pinyin: 'fà', meaning: 'mái tóc' }, { char: '鬃', pinyin: 'zōng', meaning: 'bờm ngựa' }]
  },
  {
    id: 'rad_191', orderNumber: 191, char: '鬥', pinyin: 'dòu', hanViet: 'Đấu', strokes: 10, 
    meaningVi: 'Hai người nắm tóc đánh nhau, chiến đấu',
    mnemonicStory: 'Hai võ sĩ dũng cảm tranh tài so tài cao thấp.',
    commonWords: [{ char: '闹', pinyin: 'nào', meaning: 'náo nhiệt' }, { char: '阅', pinyin: 'yuè', meaning: 'duyệt binh' }]
  },
  {
    id: 'rad_192', orderNumber: 192, char: '鬯', pinyin: 'chàng', hanViet: 'Sưởng', strokes: 10, 
    meaningVi: 'Rượu thơm cúng tế trời đất thần linh',
    mnemonicStory: 'Hũ rượu nghệ nếp thơm bốc hương tế lễ tổ tiên.',
    commonWords: [{ char: '郁', pinyin: 'yù', meaning: 'u uất, sum sê' }]
  },
  {
    id: 'rad_193', orderNumber: 193, char: '鬲', pinyin: 'lì', hanViet: 'Cách', strokes: 10, 
    meaningVi: 'Cái vạc ba chân rỗng đáy để đun nước',
    mnemonicStory: 'Chiếc vạc cổ ba chân nấu chè canh thời xa xưa.',
    commonWords: [{ char: '融', pinyin: 'róng', meaning: 'tan chảy' }, { char: '隔', pinyin: 'gé', meaning: 'ngăn cách' }]
  },
  {
    id: 'rad_194', orderNumber: 194, char: '鬼', pinyin: 'guǐ', hanViet: 'Quỷ', strokes: 10, 
    meaningVi: 'Hồn ma, quỷ dữ, linh hồn người khuất bóng',
    mnemonicStory: 'Bóng hình bí ẩn đội chiếc mũ kỳ dị lang thang đêm khuya.',
    commonWords: [{ char: '魅', pinyin: 'mèi', meaning: 'mê hoặc' }, { char: '魄', pinyin: 'pò', meaning: 'khí phách' }, { char: '魂', pinyin: 'hún', meaning: 'linh hồn' }]
  },
  {
    id: 'rad_195', orderNumber: 195, char: '魚', variant: '鱼', pinyin: 'yú', hanViet: 'Ngư', strokes: 11, isCommon: true, 
    meaningVi: 'Con cá, thủy hải sản bơi lội',
    mnemonicStory: 'Chú cá tung tăng bơi dưới nước có vây và đuôi quẫy nhịp nhàng.',
    commonWords: [{ char: '鲜', pinyin: 'xiān', meaning: 'tươi sống' }, { char: '鲁', pinyin: 'lǔ', meaning: 'xứ Lỗ, thô' }, { char: '鲸', pinyin: 'jīng', meaning: 'cá voi' }]
  },
  {
    id: 'rad_196', orderNumber: 196, char: '鳥', variant: '鸟', pinyin: 'niǎo', hanViet: 'Điểu', strokes: 11, isCommon: true, 
    meaningVi: 'Con chim đuôi dài, loài chim muông',
    mnemonicStory: 'Chú chim đậu trên cành có mắt sáng và lông đuôi sặc sỡ.',
    commonWords: [{ char: '鸡', pinyin: 'jī', meaning: 'con gà' }, { char: '鸣', pinyin: 'míng', meaning: 'chim hót' }, { char: '鸭', pinyin: 'yā', meaning: 'con vịt' }, { char: '鹅', pinyin: 'é', meaning: 'con ngỗng' }]
  },
  {
    id: 'rad_197', orderNumber: 197, char: '鹵', variant: '卤', pinyin: 'lǔ', hanViet: 'Lỗ', strokes: 11, 
    meaningVi: 'Đất mặn, muối biển, kho mặn',
    mnemonicStory: 'Thửa ruộng muối kết tinh những hạt muối trắng mặn mòi.',
    commonWords: [{ char: '咸', pinyin: 'xián', meaning: 'vị mặn' }, { char: '碱', pinyin: 'jiǎn', meaning: 'chất kiềm' }]
  },
  {
    id: 'rad_198', orderNumber: 198, char: '鹿', pinyin: 'lù', hanViet: 'Lộc', strokes: 11, 
    meaningVi: 'Con hươu sao, nai rừng nhanh nhẹn mang tài lộc',
    mnemonicStory: 'Chú hươu sao có cặp sừng phân nhánh thơ thẩn trong rừng phong.',
    commonWords: [{ char: '丽', pinyin: 'lì', meaning: 'xinh đẹp' }, { char: '尘', pinyin: 'chén', meaning: 'bụi bặm' }, { char: '麟', pinyin: 'lín', meaning: 'kỳ lân' }]
  },
  {
    id: 'rad_199', orderNumber: 199, char: '麥', variant: '麦', pinyin: 'mài', hanViet: 'Mạch', strokes: 11, 
    meaningVi: 'Cây lúa mì, lúa mạch làm bánh',
    mnemonicStory: 'Bông lúa mì có râu dài uốn lượn mang lại bột mì thơm phức.',
    commonWords: [{ char: '麸', pinyin: 'fū', meaning: 'cám mì' }, { char: '曲', pinyin: 'qū', meaning: 'men rượu' }]
  },
  {
    id: 'rad_200', orderNumber: 200, char: '麻', pinyin: 'má', hanViet: 'Ma', strokes: 11, 
    meaningVi: 'Cây gai dầu dệt vải bố, tê dại',
    mnemonicStory: 'Vỏ cây gai phơi khô dưới mái nhà bóc sợi làm dây gai.',
    commonWords: [{ char: '磨', pinyin: 'mó', meaning: 'mài giũa' }, { char: '摩', pinyin: 'mó', meaning: 'xoa bóp' }]
  },
  {
    id: 'rad_201', orderNumber: 201, char: '黃', variant: '黄', pinyin: 'huáng', hanViet: 'Hoàng', strokes: 12, 
    meaningVi: 'Màu vàng óng ả của đất đai và ánh nắng mặt trời',
    mnemonicStory: 'Màu đất phì nhiêu nuôi nấng muôn mầm sống trù phú.',
    commonWords: [{ char: '簧', pinyin: 'huáng', meaning: 'lưỡi gà kèn' }, { char: '广', pinyin: 'guǎng', meaning: 'rộng lớn' }]
  },
  {
    id: 'rad_202', orderNumber: 202, char: '黍', pinyin: 'shǔ', hanViet: 'Thử', strokes: 12, 
    meaningVi: 'Cây kê nếp, ngũ cốc nấu xôi dẻo',
    mnemonicStory: 'Bông hạt kê dính dẻo uốn cong trĩu hạt khi vào mùa gặt.',
    commonWords: [{ char: '黏', pinyin: 'nián', meaning: 'dính nhớp' }, { char: '黎', pinyin: 'lí', meaning: 'dân đen' }]
  },
  {
    id: 'rad_203', orderNumber: 203, char: '黑', pinyin: 'hēi', hanViet: 'Hắc', strokes: 12, isCommon: true, 
    meaningVi: 'Màu đen sẫm, khói bếp bồ hóng, bóng đêm',
    mnemonicStory: 'Muội than khói bếp bốc lên phủ kín miệng lò lửa bốn chấm.',
    commonWords: [{ char: '墨', pinyin: 'mò', meaning: 'mực tàu' }, { char: '默', pinyin: 'mò', meaning: 'im lặng' }, { char: '点', pinyin: 'diǎn', meaning: 'chấm đen' }]
  },
  {
    id: 'rad_204', orderNumber: 204, char: '黹', pinyin: 'zhǐ', hanViet: 'Chỉ', strokes: 12, 
    meaningVi: 'Thêu thùa may vá hoa văn trên lụa',
    mnemonicStory: 'Mũi kim luồn sợi chỉ may tỉ mỉ tạo bức thêu tuyệt mỹ.',
    commonWords: [{ char: '黼', pinyin: 'fǔ', meaning: 'áo thêu rồng' }, { char: '黻', pinyin: 'fú', meaning: 'hoa văn thêu' }]
  },
  {
    id: 'rad_205', orderNumber: 205, char: '黽', variant: '黾', pinyin: 'mǐn', hanViet: 'Mãnh', strokes: 13, 
    meaningVi: 'Con ếch nhái, rùa nước',
    mnemonicStory: 'Chú ếch ngồi bên mép bờ ao có đôi mắt lồi và bụng to.',
    commonWords: [{ char: '绳', pinyin: 'shéng', meaning: 'sợi dây' }, { char: '蝇', pinyin: 'yíng', meaning: 'con ruồi' }]
  },
  {
    id: 'rad_206', orderNumber: 206, char: '鼎', pinyin: 'dǐng', hanViet: 'Đỉnh', strokes: 13, 
    meaningVi: 'Cái vạc đỉnh đồng ba chân, biểu tượng uy quyền',
    mnemonicStory: 'Chiếc vạc đỉnh đồng đúc vững vàng trong cung điện hoàng gia.',
    commonWords: [{ char: '鼐', pinyin: 'nài', meaning: 'đỉnh lớn' }, { char: '鼒', pinyin: 'zī', meaning: 'đỉnh nhỏ' }]
  },
  {
    id: 'rad_207', orderNumber: 207, char: '鼓', pinyin: 'gǔ', hanViet: 'Cổ', strokes: 13, 
    meaningVi: 'Cái trống bịt da đánh vang rền, cổ vũ',
    mnemonicStory: 'Bàn tay cầm dùi trống gõ vang dội tiếng trống trận thúc quân.',
    commonWords: [{ char: '彭', pinyin: 'péng', meaning: 'họ Bành' }, { char: '瞽', pinyin: 'gǔ', meaning: 'mù lòa' }]
  },
  {
    id: 'rad_208', orderNumber: 208, char: '鼠', pinyin: 'shǔ', hanViet: 'Thử', strokes: 13, 
    meaningVi: 'Con chuột tinh ranh gặm nhấm, chi đầu 12 con giáp',
    mnemonicStory: 'Chú chuột có đôi tai thính và hàm răng nhọn gặm thức ăn.',
    commonWords: [{ char: '鼹', pinyin: 'yǎn', meaning: 'chuột chũi' }, { char: '鼬', pinyin: 'yòu', meaning: 'chồn hôi' }]
  },
  {
    id: 'rad_209', orderNumber: 209, char: '鼻', pinyin: 'bí', hanViet: 'Tị', strokes: 14, 
    meaningVi: 'Chiếc mũi để ngửi và hít thở không khí',
    mnemonicStory: 'Chiếc mũi hài hòa dẫn khí nuôi dưỡng sự sống cơ thể.',
    commonWords: [{ char: '齁', pinyin: 'hōu', meaning: 'ngủ ngáy' }, { char: '齆', pinyin: 'wèng', meaning: 'nghẹt mũi' }]
  },
  {
    id: 'rad_210', orderNumber: 210, char: '齊', variant: '齐', pinyin: 'qí', hanViet: 'Tề', strokes: 14, 
    meaningVi: 'Ngay ngắn, đều tăm tắp, chỉnh tề',
    mnemonicStory: 'Những bông lúa trổ bông đều tăm tắp rập rờn trong gió.',
    commonWords: [{ char: '斋', pinyin: 'zhāi', meaning: 'ăn chay' }, { char: '齑', pinyin: 'jī', meaning: 'bột giã' }]
  },
  {
    id: 'rad_211', orderNumber: 211, char: '齒', variant: '齿', pinyin: 'chǐ', hanViet: 'Xỉ', strokes: 15, 
    meaningVi: 'Hàm răng nhai thức ăn, tuổi tác',
    mnemonicStory: 'Hai hàng răng trắng đều đặn nhai cơm và biểu lộ nụ cười tươi.',
    commonWords: [{ char: '龄', pinyin: 'líng', meaning: 'tuổi thọ' }, { char: '啮', pinyin: 'niè', meaning: 'gặm cắn' }]
  },
  {
    id: 'rad_212', orderNumber: 212, char: '龍', variant: '龙', pinyin: 'lóng', hanViet: 'Long', strokes: 15, isCommon: true, 
    meaningVi: 'Con Rồng thần thoại, biểu tượng vua chúa quyền uy',
    mnemonicStory: 'Thân rồng uốn lượn bay trên mây cuộn sấm sét uy linh.',
    commonWords: [{ char: '庞', pinyin: 'páng', meaning: 'to lớn' }, { char: '聋', pinyin: 'lóng', meaning: 'điếc tai' }, { char: '龚', pinyin: 'gōng', meaning: 'họ Cung' }]
  },
  {
    id: 'rad_213', orderNumber: 213, char: '龜', variant: '龟', pinyin: 'guī', hanViet: 'Quy', strokes: 15, 
    meaningVi: 'Con rùa trường thọ, mai rùa khắc chữ giáp cốt',
    mnemonicStory: 'Chú rùa chậm rãi có mai mai cứng cáp trường tồn cùng thời gian.',
    commonWords: [{ char: '秋', pinyin: 'qiū', meaning: 'mùa thu' }, { char: '鳖', pinyin: 'biē', meaning: 'con ba ba' }]
  },
  {
    id: 'rad_214', orderNumber: 214, char: '龠', pinyin: 'yuè', hanViet: 'Dược', strokes: 17, 
    meaningVi: 'Chiếc sáo trúc ba lỗ thời cổ đại hòa tấu nhạc',
    mnemonicStory: 'Chiếc sáo tre ba lỗ tạo ra giai điệu thanh tao êm dịu lòng người.',
    commonWords: [{ char: '龢', pinyin: 'hé', meaning: 'hòa âm' }, { char: '龣', pinyin: 'jué', meaning: 'nhạc khí' }]
  },
];

// Total count constant
export const TOTAL_KANGXI_RADICALS_COUNT = 214;
