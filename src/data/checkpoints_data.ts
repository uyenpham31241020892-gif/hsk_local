import type { CheckpointExam } from '../types';

export const checkpointExams: CheckpointExam[] = [
  {
    id: 'checkpoint_m1',
    title: 'Milestone 1: Khởi Động Vững Vàng',
    titleVi: 'Ôn tập tổng hợp Bài 1 + Bài 2 (30 từ đầu)',
    description: 'Xào lại toàn diện các từ vựng Chào hỏi, Số đếm, Gia đình, Đồ uống, Món ăn và Chỉ vị trí. Tránh tình trạng học bài mới quên bài cũ!',
    coveredPackIds: ['hsk1_pack1', 'hsk1_pack2'],
    targetVocabIds: [
      'v001', 'v002', 'v003', 'v004', 'v005', 'v006', 'v007', 'v008', 'v009', 'v010',
      'v011', 'v012', 'v013', 'v014', 'v015', 'v016', 'v017', 'v018', 'v019', 'v020',
      'v021', 'v022', 'v023', 'v024', 'v025', 'v026', 'v027', 'v028', 'v029', 'v030'
    ],
    questionsCount: 15,
    badge: '🥉 Huy Hiệu Khởi Động',
  },
  {
    id: 'checkpoint_m2',
    title: 'Milestone 2: Tổng Duyệt HSK 1',
    titleVi: 'Ôn tập toàn diện toàn bộ HSK 1 (50 từ cốt lõi)',
    description: 'Trộn ngẫu nhiên cả 50 từ vựng và ngữ pháp của HSK 1 qua các dạng câu hỏi khác nhau. Đảm bảo nhớ sâu 100% trước khi lên HSK 2.',
    coveredPackIds: ['hsk1_pack1', 'hsk1_pack2', 'hsk1_pack3'],
    targetVocabIds: [
      'v001', 'v002', 'v003', 'v004', 'v005', 'v006', 'v007', 'v008', 'v009', 'v010',
      'v011', 'v012', 'v013', 'v014', 'v015', 'v016', 'v017', 'v018', 'v019', 'v020',
      'v021', 'v022', 'v023', 'v024', 'v025', 'v026', 'v027', 'v028', 'v029', 'v030',
      'v031', 'v032', 'v033', 'v034', 'v035', 'v036', 'v037', 'v038', 'v039', 'v040',
      'v041', 'v042', 'v043', 'v044', 'v045', 'v046', 'v047', 'v048', 'v049', 'v050'
    ],
    questionsCount: 20,
    badge: '🥈 Huy Hiệu Toàn Năng HSK 1',
  },
  {
    id: 'checkpoint_m3',
    title: 'Milestone 3: Đột Phá HSK 2',
    titleVi: 'Ôn tập mở rộng HSK 1 + HSK 2 (80 từ nền tảng)',
    description: 'Xào liên hoàn các cấu trúc so sánh 比, trợ từ ngữ khí 吧, liên từ 但是, trạng từ 非常, cùng hệ thống từ vựng sinh hoạt thường ngày.',
    coveredPackIds: ['hsk1_pack1', 'hsk1_pack2', 'hsk2_pack1', 'hsk2_pack2'],
    targetVocabIds: [
      'v001', 'v005', 'v008', 'v011', 'v015', 'v021', 'v035', 'v041', 'v047', 'v048',
      'v101', 'v102', 'v103', 'v104', 'v105', 'v106', 'v107', 'v108', 'v109', 'v110',
      'v111', 'v112', 'v113', 'v114', 'v115', 'v116', 'v117', 'v118', 'v119', 'v120',
      'v121', 'v122', 'v123', 'v124', 'v125', 'v126', 'v127', 'v128', 'v129', 'v130'
    ],
    questionsCount: 25,
    badge: '🥇 Huy Hiệu Đột Phá HSK 2',
  },
];
