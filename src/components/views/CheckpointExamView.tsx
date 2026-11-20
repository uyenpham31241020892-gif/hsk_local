import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useApp } from '../../store/AppContext';
import { hskMockExams, generateDynamicHSKExam, type HSKMockExam, type ExamQuestion } from '../../data/hsk_mock_exams_data';
import { milestonePeriodicExams } from '../../data/milestone_exams_data';
import { thptqgExams, type THPTQGExam } from '../../data/d4_thptqg_data';
import { checkpointExams } from '../../data/checkpoints_data';
import { speak } from '../../utils/exercises';
import { 
  Award, Trophy, CheckCircle, ChevronRight, BookOpen, RotateCcw, 
  Sparkles, ShieldCheck, Volume2, Clock, Check, X, AlertTriangle, 
  HelpCircle, ChevronLeft, ArrowLeft, Headphones, FileText, CheckCircle2,
  XCircle, ListChecks, Play, Pause, GraduationCap, Eye, ZoomIn, ZoomOut,
  Maximize2, Layers, ExternalLink
} from 'lucide-react';

export function CheckpointExamView() {
  const { state, navigate, dispatch } = useApp();
  
  // Selection Screen States: 'hsk' | 'thptqg'
  const [examTab, setExamTab] = useState<'hsk' | 'thptqg'>('hsk');

  // Active Exam Type
  const [activeExamType, setActiveExamType] = useState<'hsk' | 'thptqg' | null>(null);
  
  // HSK / Milestone Exam States
  const [selectedHSKExam, setSelectedHSKExam] = useState<HSKMockExam | null>(null);
  const [isExamRunning, setIsExamRunning] = useState(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);
  const [examViewMode, setExamViewMode] = useState<'paged' | 'continuous'>('paged'); // 'paged' = 5 câu/trang, 'continuous' = cuộn tất cả
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // 0 to 7 (8 pages total for 40 questions)
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({}); // { [questionId]: 'A' | 'B' | ... }
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(35 * 60);
  const [showAnswerSheetModal, setShowAnswerSheetModal] = useState(false);
  const [showConfirmSubmitModal, setShowConfirmSubmitModal] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('all');
  const [playingAudioId, setPlayingAudioId] = useState<number | null>(null);

  // THPTQG Exam States
  const [selectedTHPTExam, setSelectedTHPTExam] = useState<THPTQGExam | null>(null);
  const [thptPageIndex, setThptPageIndex] = useState(0);
  const [thptAnswers, setThptAnswers] = useState<Record<number, string>>({});
  const [thptTimeLeft, setThptTimeLeft] = useState(50 * 60);
  const [isThptSubmitted, setIsThptSubmitted] = useState(false);

  const passedMilestones = new Set(state.progress.passedMilestones || []);
  const mockExamHistory = state.progress.mockExamHistory || [];

  // Auto-launch exam if currentPackId points to a periodic milestone or specific HSK exam
  useEffect(() => {
    if (state.currentPackId) {
      if (state.currentPackId.startsWith('milestone_periodic_')) {
        const found = milestonePeriodicExams.find(m => m.id === state.currentPackId);
        if (found) {
          handleStartHSKExam(found);
        }
      } else if (state.currentPackId.startsWith('hsk1_exam_')) {
        const found = hskMockExams.find(e => e.id === state.currentPackId);
        if (found) {
          handleStartHSKExam(found);
        }
      }
    }
  }, [state.currentPackId]);

  // Countdown timer for HSK exam
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isExamRunning && !isExamSubmitted) {
      timer = setInterval(() => {
        setTimeLeftSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitHSKExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isExamRunning, isExamSubmitted]);

  // Countdown timer for THPTQG exam
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (activeExamType === 'thptqg' && selectedTHPTExam && !isThptSubmitted) {
      timer = setInterval(() => {
        setThptTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitTHPTExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeExamType, selectedTHPTExam, isThptSubmitted]);

  // Audio player with official 2-repeat cadence
  const playListeningAudio = (audioScript?: string, questionId?: number) => {
    if (!audioScript) return;
    window.speechSynthesis?.cancel();
    if (questionId !== undefined) setPlayingAudioId(questionId);

    const firstPlay = new SpeechSynthesisUtterance(audioScript);
    firstPlay.lang = 'zh-CN';
    firstPlay.rate = 0.82;

    firstPlay.onend = () => {
      setTimeout(() => {
        if (!isExamRunning && !isExamSubmitted) return;
        const secondPlay = new SpeechSynthesisUtterance(audioScript);
        secondPlay.lang = 'zh-CN';
        secondPlay.rate = 0.82;
        secondPlay.onend = () => {
          setPlayingAudioId(null);
        };
        secondPlay.onerror = () => {
          setPlayingAudioId(null);
        };
        window.speechSynthesis?.speak(secondPlay);
      }, 1800);
    };

    firstPlay.onerror = () => {
      setPlayingAudioId(null);
    };

    window.speechSynthesis?.speak(firstPlay);
  };

  const stopAudio = () => {
    window.speechSynthesis?.cancel();
    setPlayingAudioId(null);
  };

  // Start an HSK Exam (or Milestone exam formatted as HSK)
  const handleStartHSKExam = (exam: HSKMockExam) => {
    stopAudio();
    setSelectedHSKExam(exam);
    setActiveExamType('hsk');
    setUserAnswers({});
    setTimeLeftSeconds(exam.durationMinutes * 60);
    setCurrentPageIndex(0);
    setIsExamRunning(true);
    setIsExamSubmitted(false);
    setShowAnswerSheetModal(false);
    setShowConfirmSubmitModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start a THPTQG D4 Exam
  const handleStartTHPTExam = (exam: THPTQGExam) => {
    setSelectedTHPTExam(exam);
    setActiveExamType('thptqg');
    setThptAnswers({});
    setThptPageIndex(0);
    setThptTimeLeft(exam.durationMinutes * 60);
    setIsThptSubmitted(false);
    setShowConfirmSubmitModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select an answer for HSK
  const handleSelectHSKAnswer = (questionId: number, answerKey: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answerKey }));
  };

  // Select an answer for THPT
  const handleSelectTHPTAnswer = (questionId: number, answerKey: string) => {
    setThptAnswers(prev => ({ ...prev, [questionId]: answerKey }));
  };

  // Submit HSK Exam
  const handleSubmitHSKExam = () => {
    stopAudio();
    setIsExamSubmitted(true);
    setIsExamRunning(false);
    setShowConfirmSubmitModal(false);
    setShowAnswerSheetModal(false);

    if (selectedHSKExam) {
      let listeningCorrect = 0;
      let readingCorrect = 0;

      selectedHSKExam.questions.forEach(q => {
        const isCorrect = userAnswers[q.id] === q.correctAnswer;
        if (q.section === 'listening' && isCorrect) listeningCorrect++;
        if (q.section === 'reading' && isCorrect) readingCorrect++;
      });

      const ptsPerQ = selectedHSKExam.totalQuestions === 20 ? 5 : 5;
      const listeningScore = listeningCorrect * ptsPerQ;
      const readingScore = readingCorrect * ptsPerQ;
      const totalScore = listeningScore + readingScore;
      const passed = totalScore >= selectedHSKExam.passScore;

      // If milestone, record milestone pass
      if (selectedHSKExam.category === 'milestone' && passed) {
        dispatch({ type: 'RECORD_MILESTONE', milestoneId: selectedHSKExam.id });
      }

      dispatch({
        type: 'RECORD_MOCK_EXAM',
        record: {
          date: new Date().toISOString(),
          examId: selectedHSKExam.id,
          examTitle: selectedHSKExam.code,
          listeningScore,
          readingScore,
          totalScore,
          passed,
          durationSeconds: (selectedHSKExam.durationMinutes * 60) - timeLeftSeconds
        }
      });
    }
  };

  // Submit THPT Exam
  const handleSubmitTHPTExam = () => {
    setIsThptSubmitted(true);
    setShowConfirmSubmitModal(false);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Group HSK questions into Pages (5 questions per page, matching official HSK structure)
  const examPages = useMemo(() => {
    if (!selectedHSKExam) return [];
    const pages: {
      pageIndex: number;
      section: 'listening' | 'reading';
      part: number;
      title: string;
      titleVi: string;
      questions: ExamQuestion[];
    }[] = [];

    // Group by section & part
    const grouped: Record<string, ExamQuestion[]> = {};
    selectedHSKExam.questions.forEach(q => {
      const key = `${q.section}_part${q.part}`;
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(q);
    });

    let pIdx = 0;
    Object.entries(grouped).forEach(([key, qList]) => {
      const firstQ = qList[0];
      const sectionName = firstQ.section === 'listening' ? '一、听力 (Phần Nghe)' : '二、阅读 (Phần Đọc)';
      const partName = `第 ${firstQ.part} 部分 (Câu ${qList[0].id}—${qList[qList.length - 1].id})`;
      pages.push({
        pageIndex: pIdx++,
        section: firstQ.section,
        part: firstQ.part,
        title: `${sectionName} · ${partName}`,
        titleVi: firstQ.section === 'listening' ? `Phần Nghe (听力) - Nhóm câu ${qList[0].id}–${qList[qList.length - 1].id}` : `Phần Đọc (阅读) - Nhóm câu ${qList[0].id}–${qList[qList.length - 1].id}`,
        questions: qList
      });
    });

    return pages;
  }, [selectedHSKExam]);

  const currentPage = examPages[currentPageIndex] || examPages[0];
  const hskAnsweredCount = Object.keys(userAnswers).length;
  const thptAnsweredCount = Object.keys(thptAnswers).length;

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW A: LIVE HSK EXAM HALL (TRÌNH BÀY DẠNG TRANG ĐỀ THI - NHIỀU CÂU/TRANG)
  // ══════════════════════════════════════════════════════════════════════════
  if (isExamRunning && selectedHSKExam && currentPage) {
    const isUnder5Min = timeLeftSeconds < 5 * 60;
    const isUnder1Min = timeLeftSeconds < 60;

    return (
      <div className="min-h-screen bg-[#FAF9F6] pb-32">
        {/* Top Sticky Bar */}
        <div className="bg-white border-b border-[#e5e1d8] sticky top-0 z-20 px-4 py-3 shadow-xs">
          <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (confirm('Bạn có chắc muốn thoát phòng thi? Bài làm hiện tại sẽ không được lưu.')) {
                    stopAudio();
                    setIsExamRunning(false);
                    setSelectedHSKExam(null);
                  }
                }}
                className="p-1.5 -ml-1 text-[#6b7280] hover:text-[#1a1a1a] rounded-xl hover:bg-[#FAF9F6] transition-colors"
                title="Thoát phòng thi"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-[#4a7c59] bg-[#e8f0eb] px-2 py-0.5 rounded-full">
                    {selectedHSKExam.code}
                  </span>
                  <span className="text-[10px] text-[#6b7280] font-mono">
                    Trang {currentPageIndex + 1}/{examPages.length}
                  </span>
                </div>
                <p className="text-xs font-bold text-[#1a1a1a] truncate max-w-[140px] sm:max-w-xs">
                  {selectedHSKExam.title}
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border font-mono font-bold text-sm shadow-2xs transition-all ${
              isUnder1Min 
                ? 'bg-red-50 text-red-600 border-red-300 animate-pulse ring-2 ring-red-400' 
                : isUnder5Min
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'bg-[#FAF9F6] text-[#1a1a1a] border-[#e5e1d8]'
            }`}>
              <Clock size={15} className={isUnder1Min ? 'text-red-600 animate-spin' : isUnder5Min ? 'text-amber-600' : 'text-[#6b7280]'} />
              <span>{formatTime(timeLeftSeconds)}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setExamViewMode(prev => prev === 'paged' ? 'continuous' : 'paged')}
                className="px-2.5 py-1.5 rounded-xl border border-[#e5e1d8] bg-white hover:bg-[#FAF9F6] text-xs font-semibold text-[#1a1a1a] hidden sm:flex items-center gap-1 transition-colors shadow-2xs"
                title={examViewMode === 'paged' ? 'Chuyển sang chế độ xem liền mạch tất cả câu' : 'Chuyển sang chế độ từng trang 5 câu'}
              >
                <Layers size={14} className="text-[#4a7c59]" />
                <span>{examViewMode === 'paged' ? 'Từng trang' : 'Cuộn tất cả'}</span>
              </button>

              <button
                onClick={() => setShowAnswerSheetModal(true)}
                className="px-2.5 py-1.5 rounded-xl border border-[#e5e1d8] bg-white hover:bg-[#FAF9F6] text-xs font-semibold text-[#1a1a1a] flex items-center gap-1 transition-colors shadow-2xs"
                title="Mở phiếu trả lời"
              >
                <ListChecks size={15} className="text-[#4a7c59]" />
                <span className="font-bold text-[#4a7c59]">{hskAnsweredCount}/{selectedHSKExam.totalQuestions}</span>
              </button>

              <button
                onClick={() => setShowConfirmSubmitModal(true)}
                className="px-3 py-1.5 rounded-xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white text-xs font-bold shadow-xs transition-colors"
              >
                Nộp bài
              </button>
            </div>
          </div>
        </div>

        {/* Paper Tabs Navigation Bar (Trang 1..8) */}
        {examViewMode === 'paged' && (
          <div className="bg-white border-b border-[#e5e1d8] px-4 py-2 sticky top-[53px] z-10 overflow-x-auto scrollbar-none">
            <div className="max-w-3xl mx-auto flex items-center gap-1.5 text-xs font-bold whitespace-nowrap">
              {examPages.map((page, idx) => {
                const isCurrent = currentPageIndex === idx;
                const pageAnsweredCount = page.questions.filter(q => userAnswers[q.id]).length;
                const isAllPageAnswered = pageAnsweredCount === page.questions.length;

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      stopAudio();
                      setCurrentPageIndex(idx);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                      isCurrent
                        ? 'bg-[#4a7c59] text-white shadow-2xs'
                        : 'bg-[#FAF9F6] text-[#6b7280] hover:bg-[#e5e1d8]'
                    }`}
                  >
                    <span>{page.section === 'listening' ? '🎧' : '📖'} Trang {idx + 1}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isCurrent ? 'bg-white/20 text-white' : isAllPageAnswered ? 'bg-emerald-100 text-emerald-800' : 'bg-[#e5e1d8] text-[#6b7280]'
                    }`}>
                      {pageAnsweredCount}/{page.questions.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* PAPER EXAM SHEET CANVAS */}
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          {(examViewMode === 'paged' ? [currentPage] : examPages).map((page, pageIdx) => (
            <div 
              key={page.pageIndex} 
              className="bg-white rounded-3xl border border-[#e5e1d8] p-6 shadow-sm space-y-6 paper-sheet relative overflow-hidden"
            >
              {/* Official Section & Part Header */}
              <div className="border-b-2 border-[#1a1a1a] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="chinese-char text-xl font-bold text-[#1a1a1a] tracking-wide">
                    {page.title}
                  </h2>
                  <p className="text-xs text-[#6b7280] mt-0.5">
                    {page.titleVi} · Chọn 1 đáp án đúng nhất cho từng câu hỏi bên dưới
                  </p>
                </div>

                {page.section === 'listening' && (
                  <button
                    onClick={() => {
                      const fullAudioScript = page.questions.map(q => q.audioScript).filter(Boolean).join(' ... ');
                      playListeningAudio(fullAudioScript);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#e8f0eb] hover:bg-[#d4e6db] text-[#4a7c59] text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0 shadow-2xs"
                  >
                    <Volume2 size={15} />
                    <span>Nghe toàn bộ trang này</span>
                  </button>
                )}
              </div>

              {/* SHARED IMAGE BOX FOR PART 3 & PART 5 (Bảng 6 tranh A-F ở đầu trang) */}
              {(page.part === 3 || (page.section === 'reading' && page.part === 1)) && page.questions[0]?.options && (
                <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 space-y-2">
                  <p className="text-xs font-bold text-[#4a7c59] flex items-center gap-1.5">
                    <span>🖼️</span> Bảng tranh đối chiếu A—F (Quan sát tranh để chọn đáp án tương ứng):
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                    {page.questions[0].options.map((opt) => (
                      <div key={opt.key} className="bg-white border border-[#e5e1d8] rounded-xl p-2.5 text-center shadow-2xs space-y-1">
                        <span className="w-5 h-5 rounded-full bg-[#e8f0eb] text-[#4a7c59] font-bold text-[10px] inline-flex items-center justify-center">
                          {opt.key}
                        </span>
                        {opt.imageIcon && <div className="text-2xl">{opt.imageIcon}</div>}
                        <p className="text-[10px] text-[#6b7280] leading-tight line-clamp-2">{opt.imageDesc || opt.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SHARED WORD BANK FOR READING PART 3 (Hộp từ vựng A-F ở đầu trang) */}
              {page.section === 'reading' && page.part === 3 && page.questions[0]?.options && (
                <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 space-y-2">
                  <p className="text-xs font-bold text-[#4a7c59] flex items-center gap-1.5">
                    <span>🔤</span> Hộp từ vựng lựa chọn A—F (Chọn từ thích hợp điền vào chỗ trống):
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                    {page.questions[0].options.map((opt) => (
                      <div key={opt.key} className="bg-white border border-[#e5e1d8] rounded-xl p-2.5 text-center shadow-2xs">
                        <span className="w-5 h-5 rounded-full bg-[#e8f0eb] text-[#4a7c59] font-bold text-[10px] inline-flex items-center justify-center mb-1">
                          {opt.key}
                        </span>
                        <p className="chinese-char text-base font-medium text-[#1a1a1a]">{opt.text}</p>
                        <p className="text-[10px] text-[#4a7c59] font-medium">{opt.pinyin}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* QUESTIONS LIST ON THIS PAGE */}
              <div className="space-y-6">
                {page.questions.map((q) => {
                  const isAnswered = Boolean(userAnswers[q.id]);
                  const selectedKey = userAnswers[q.id];
                  const isPlayingThisAudio = playingAudioId === q.id;

                  return (
                    <div 
                      key={q.id} 
                      className={`p-4 rounded-2xl border transition-all ${
                        isAnswered ? 'bg-white border-[#4a7c59]/40 shadow-xs' : 'bg-[#FAF9F6]/60 border-[#e5e1d8]'
                      }`}
                    >
                      {/* Question Top Row */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center ${
                            isAnswered ? 'bg-[#4a7c59] text-white shadow-2xs' : 'bg-white border border-[#e5e1d8] text-[#1a1a1a]'
                          }`}>
                            {q.id}
                          </span>
                          <span className="text-xs font-semibold text-[#6b7280]">
                            Câu số {q.id}
                          </span>
                        </div>

                        {q.audioScript && (
                          <button
                            onClick={() => {
                              if (isPlayingThisAudio) stopAudio();
                              else playListeningAudio(q.audioScript, q.id);
                            }}
                            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                              isPlayingThisAudio
                                ? 'bg-amber-500 text-white border-amber-500 animate-pulse'
                                : 'bg-white border-[#e5e1d8] text-[#4a7c59] hover:bg-[#e8f0eb]'
                            }`}
                          >
                            <Volume2 size={14} />
                            <span>{isPlayingThisAudio ? 'Đang phát...' : 'Nghe audio'}</span>
                          </button>
                        )}
                      </div>

                      {/* Reading Passage or Prompt */}
                      {q.passage && (
                        <div className="bg-white border border-[#e5e1d8] rounded-xl p-3 mb-3">
                          <p className="chinese-char text-base text-[#1a1a1a] font-medium leading-relaxed">{q.passage}</p>
                          {q.promptPinyin && <p className="text-xs text-[#4a7c59] font-medium mt-0.5">{q.promptPinyin}</p>}
                        </div>
                      )}

                      {q.prompt && (
                        <div className="mb-3">
                          <p className="chinese-char text-lg text-[#1a1a1a] font-medium">{q.prompt}</p>
                          {q.promptPinyin && <p className="text-xs text-[#4a7c59] font-medium">{q.promptPinyin}</p>}
                        </div>
                      )}

                      {q.questionText && (
                        <p className="text-xs font-bold text-[#1a1a1a] mb-2 border-l-2 border-[#4a7c59] pl-2">
                          {q.questionText}
                        </p>
                      )}

                      {/* Options Grid (Row of choices) */}
                      <div className={`grid gap-2 ${
                        q.type === 'image_choice' ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-3'
                      }`}>
                        {q.options?.map((opt) => {
                          const isSelected = selectedKey === opt.key;

                          return (
                            <button
                              key={opt.key}
                              onClick={() => handleSelectHSKAnswer(q.id, opt.key)}
                              className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'border-[#4a7c59] bg-[#e8f0eb] ring-2 ring-[#4a7c59]/30 shadow-2xs'
                                  : 'border-[#e5e1d8] bg-white hover:border-[#4a7c59]/50 hover:bg-[#FAF9F6]'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                                  isSelected ? 'bg-[#4a7c59] text-white' : 'bg-[#FAF9F6] text-[#6b7280] border border-[#e5e1d8]'
                                }`}>
                                  {opt.key}
                                </span>

                                {opt.imageIcon && <span className="text-xl shrink-0">{opt.imageIcon}</span>}

                                <div className="min-w-0">
                                  {opt.text && <p className="chinese-char text-sm font-medium text-[#1a1a1a] truncate">{opt.text}</p>}
                                  {opt.pinyin && <p className="text-[10px] text-[#4a7c59] font-medium truncate">{opt.pinyin}</p>}
                                  {opt.imageDesc && <p className="text-[11px] text-[#6b7280] truncate">{opt.imageDesc}</p>}
                                </div>
                              </div>

                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? 'border-[#4a7c59] bg-[#4a7c59] text-white' : 'border-[#e5e1d8]'
                              }`}>
                                {isSelected && <Check size={10} />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Navigation of Page */}
              {examViewMode === 'paged' && (
                <div className="pt-4 border-t border-[#e5e1d8] flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      if (currentPageIndex > 0) {
                        stopAudio();
                        setCurrentPageIndex(prev => prev - 1);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    disabled={currentPageIndex === 0}
                    className={`px-4 py-2.5 rounded-2xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
                      currentPageIndex === 0
                        ? 'opacity-40 cursor-not-allowed bg-white border-[#e5e1d8] text-[#6b7280]'
                        : 'bg-white hover:bg-[#FAF9F6] border-[#e5e1d8] text-[#1a1a1a] shadow-xs'
                    }`}
                  >
                    <ChevronLeft size={16} />
                    <span>Trang trước</span>
                  </button>

                  <span className="text-xs text-[#6b7280] font-medium hidden sm:inline">
                    Đã chọn: <strong className="text-[#4a7c59]">{hskAnsweredCount}</strong> / {selectedHSKExam.totalQuestions} câu
                  </span>

                  <button
                    onClick={() => {
                      if (currentPageIndex < examPages.length - 1) {
                        stopAudio();
                        setCurrentPageIndex(prev => prev + 1);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        setShowConfirmSubmitModal(true);
                      }
                    }}
                    className="px-5 py-2.5 rounded-2xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
                  >
                    <span>{currentPageIndex === examPages.length - 1 ? 'Hoàn tất & Nộp bài' : 'Trang tiếp theo'}</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* If continuous mode, bottom submit button */}
          {examViewMode === 'continuous' && (
            <div className="text-center pt-4">
              <button
                onClick={() => setShowConfirmSubmitModal(true)}
                className="px-8 py-4 rounded-2xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white font-bold text-sm shadow-md transition-all"
              >
                Hoàn tất & Nộp bài thi
              </button>
            </div>
          )}
        </div>

        {/* Modal: Collapsible Answer Sheet */}
        {showAnswerSheetModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-white rounded-3xl border border-[#e5e1d8] max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-[#e5e1d8] pb-3">
                <div className="flex items-center gap-2">
                  <ListChecks size={20} className="text-[#4a7c59]" />
                  <h3 className="font-bold text-base text-[#1a1a1a]">Phiếu trả lời {selectedHSKExam.totalQuestions} câu</h3>
                </div>
                <button
                  onClick={() => setShowAnswerSheetModal(false)}
                  className="p-1 rounded-xl text-[#6b7280] hover:text-[#1a1a1a]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {Array.from({ length: selectedHSKExam.totalQuestions }, (_, i) => {
                  const qId = i + 1;
                  const ans = userAnswers[qId];

                  return (
                    <button
                      key={qId}
                      onClick={() => {
                        // find page index
                        const targetPageIndex = examPages.findIndex(p => p.questions.some(q => q.id === qId));
                        if (targetPageIndex >= 0) setCurrentPageIndex(targetPageIndex);
                        setShowAnswerSheetModal(false);
                      }}
                      className={`h-11 rounded-xl text-xs font-bold flex flex-col items-center justify-center border transition-all ${
                        ans
                          ? 'bg-[#4a7c59] text-white border-[#4a7c59]'
                          : 'bg-white border-dashed border-[#e5e1d8] text-[#6b7280] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      <span className="text-[10px] opacity-75">{qId}</span>
                      <span>{ans || '—'}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowAnswerSheetModal(false)}
                  className="w-full py-2.5 rounded-xl bg-[#FAF9F6] border border-[#e5e1d8] text-xs font-bold text-[#1a1a1a]"
                >
                  Đóng lại & Tiếp tục làm bài
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Confirm Submit */}
        {showConfirmSubmitModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-white rounded-3xl border border-[#e5e1d8] max-w-sm w-full p-6 shadow-2xl text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#e8f0eb] text-[#4a7c59] flex items-center justify-center mx-auto text-2xl">
                📝
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1a1a1a]">Nộp bài thi?</h3>
                <p className="text-xs text-[#6b7280] mt-1">
                  Bạn đã làm <strong>{hskAnsweredCount}</strong> / {selectedHSKExam.totalQuestions} câu hỏi.
                  {selectedHSKExam.totalQuestions - hskAnsweredCount > 0 && (
                    <span className="block text-amber-700 font-semibold mt-1">
                      ⚠️ Còn {selectedHSKExam.totalQuestions - hskAnsweredCount} câu chưa chọn đáp án!
                    </span>
                  )}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => setShowConfirmSubmitModal(false)}
                  className="py-2.5 rounded-xl border border-[#e5e1d8] text-xs font-semibold text-[#6b7280] hover:bg-[#FAF9F6]"
                >
                  Làm tiếp
                </button>
                <button
                  onClick={handleSubmitHSKExam}
                  className="py-2.5 rounded-xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white text-xs font-bold shadow-xs"
                >
                  Xác nhận nộp bài
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW B: LIVE THPT QUỐC GIA D4 EXAM HALL (XEM ẢNH ĐỀ THẬT + TÔ PHIẾU ĐÁP ÁN)
  // ══════════════════════════════════════════════════════════════════════════
  if (activeExamType === 'thptqg' && selectedTHPTExam) {
    const isUnder5Min = thptTimeLeft < 5 * 60;

    return (
      <div className="min-h-screen bg-[#FAF9F6] pb-24">
        {/* Sticky Header */}
        <div className="bg-white border-b border-[#e5e1d8] sticky top-0 z-20 px-4 py-3 shadow-xs">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (confirm('Thoát phòng thi THPTQG?')) {
                    setSelectedTHPTExam(null);
                    setActiveExamType(null);
                  }
                }}
                className="p-1.5 -ml-1 text-[#6b7280] hover:text-[#1a1a1a] rounded-xl hover:bg-[#FAF9F6]"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                  THPTQG {selectedTHPTExam.year} · {selectedTHPTExam.code}
                </span>
                <p className="text-xs font-bold text-[#1a1a1a] truncate max-w-xs">
                  {selectedTHPTExam.title}
                </p>
              </div>
            </div>

            {/* Timer */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border font-mono font-bold text-sm shadow-2xs ${
              isUnder5Min ? 'bg-amber-50 text-amber-700 border-amber-300' : 'bg-[#FAF9F6] text-[#1a1a1a] border-[#e5e1d8]'
            }`}>
              <Clock size={15} />
              <span>{formatTime(thptTimeLeft)}</span>
            </div>

            <button
              onClick={() => setShowConfirmSubmitModal(true)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors"
            >
              Nộp bài ({thptAnsweredCount}/{selectedTHPTExam.totalQuestions})
            </button>
          </div>
        </div>

        {/* THPT Paper View: Split Screen (Left: Genuine Exam Paper Photos, Right: 40-cell OMR Sheet) */}
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN: Exam Paper Image Viewer (Pages 1 to 4) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-3xl border border-[#e5e1d8] p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-[#e5e1d8] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#1a1a1a]">
                    📸 Trang đề thi gốc của Bộ GD&ĐT:
                  </span>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                    Trang {thptPageIndex + 1} / {selectedTHPTExam.pageImages.length}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {selectedTHPTExam.pageImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setThptPageIndex(idx)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                        thptPageIndex === idx
                          ? 'bg-blue-600 text-white shadow-2xs'
                          : 'bg-[#FAF9F6] text-[#6b7280] hover:bg-[#e5e1d8]'
                      }`}
                    >
                      Trang {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Real exam sheet image */}
              <div className="bg-[#1a1a1a]/5 rounded-2xl p-2 border border-[#e5e1d8] overflow-hidden flex items-center justify-center min-h-[500px]">
                {selectedTHPTExam.pageImages[thptPageIndex] ? (
                  <img
                    src={selectedTHPTExam.pageImages[thptPageIndex]}
                    alt={`Đề thi trang ${thptPageIndex + 1}`}
                    className="max-w-full h-auto rounded-xl shadow-md object-contain"
                  />
                ) : (
                  <p className="text-xs text-[#6b7280]">Đang tải trang đề thi...</p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 40-cell OMR Answer Sheet */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 shadow-sm sticky top-20 space-y-4 max-h-[85vh] overflow-y-auto">
              <div className="border-b border-[#e5e1d8] pb-2">
                <h3 className="font-bold text-sm text-[#1a1a1a] flex items-center gap-1.5">
                  <ListChecks size={16} className="text-blue-600" />
                  Phiếu tô đáp án trắc nghiệm (40 câu)
                </h3>
                <p className="text-[11px] text-[#6b7280]">
                  Đã làm: <strong>{thptAnsweredCount}</strong> / {selectedTHPTExam.totalQuestions} câu
                </p>
              </div>

              <div className="space-y-2">
                {Array.from({ length: selectedTHPTExam.totalQuestions }, (_, i) => {
                  const qId = i + 1;
                  const currentChoice = thptAnswers[qId];

                  return (
                    <div 
                      key={qId} 
                      className={`p-2 rounded-xl border flex items-center justify-between text-xs transition-all ${
                        currentChoice ? 'bg-blue-50/50 border-blue-200' : 'bg-white border-[#e5e1d8]'
                      }`}
                    >
                      <span className="font-bold text-[#1a1a1a] w-8">
                        Câu {qId}:
                      </span>

                      <div className="flex items-center gap-1.5">
                        {['A', 'B', 'C', 'D'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleSelectTHPTAnswer(qId, opt)}
                            className={`w-7 h-7 rounded-lg font-bold text-xs transition-all flex items-center justify-center ${
                              currentChoice === opt
                                ? 'bg-blue-600 text-white shadow-2xs scale-105'
                                : 'bg-[#FAF9F6] text-[#6b7280] border border-[#e5e1d8] hover:bg-[#e5e1d8]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setShowConfirmSubmitModal(true)}
                className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
              >
                Nộp bài & Chấm điểm chính thức
              </button>
            </div>
          </div>
        </div>

        {/* Modal: Confirm Submit THPT */}
        {showConfirmSubmitModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-white rounded-3xl border border-[#e5e1d8] max-w-sm w-full p-6 shadow-2xl text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto text-2xl">
                🎓
              </div>
              <h3 className="font-bold text-lg text-[#1a1a1a]">Nộp bài thi THPT Quốc Gia?</h3>
              <p className="text-xs text-[#6b7280]">
                Đã tô <strong>{thptAnsweredCount}</strong> / {selectedTHPTExam.totalQuestions} câu.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => setShowConfirmSubmitModal(false)}
                  className="py-2.5 rounded-xl border border-[#e5e1d8] text-xs font-semibold text-[#6b7280]"
                >
                  Làm tiếp
                </button>
                <button
                  onClick={handleSubmitTHPTExam}
                  className="py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-xs"
                >
                  Xác nhận nộp bài
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW C: THPTQG SCORE REPORT & ANSWER COMPARISON
  // ══════════════════════════════════════════════════════════════════════════
  if (isThptSubmitted && selectedTHPTExam) {
    let correctCount = 0;
    Object.entries(selectedTHPTExam.answers).forEach(([qId, officialAns]) => {
      if (thptAnswers[Number(qId)] === officialAns) correctCount++;
    });
    const score10 = Number(((correctCount / selectedTHPTExam.totalQuestions) * 10).toFixed(2));

    return (
      <div className="min-h-screen bg-[#FAF9F6] pb-24">
        <div className="px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedTHPTExam(null);
                setActiveExamType(null);
                setIsThptSubmitted(false);
              }}
              className="p-1.5 -ml-1 text-[#6b7280] hover:text-[#1a1a1a] rounded-xl hover:bg-[#FAF9F6]"
            >
              <ArrowLeft size={18} />
            </button>
            <h1 className="text-base font-bold text-[#1a1a1a]">Kết Quả Thi THPT Quốc Gia (D4)</h1>
          </div>
          <button
            onClick={() => handleStartTHPTExam(selectedTHPTExam)}
            className="px-3 py-1.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 text-xs font-bold flex items-center gap-1"
          >
            <RotateCcw size={13} />
            <span>Thi lại đề này</span>
          </button>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <div className="bg-white rounded-3xl border-2 border-blue-600 p-6 shadow-md text-center space-y-4">
            <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Đáp Án Chính Thức Bộ GD&ĐT · CTI HSK
            </span>
            <h2 className="text-xl font-extrabold text-[#1a1a1a]">
              {selectedTHPTExam.title}
            </h2>
            <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 max-w-xs mx-auto">
              <p className="text-xs text-[#6b7280]">Điểm thi đạt được (Thang điểm 10):</p>
              <p className="text-4xl font-black text-blue-600 mt-1">{score10} <span className="text-sm font-normal text-[#6b7280]">/ 10</span></p>
              <p className="text-xs font-bold text-[#4a7c59] mt-1">{correctCount} / {selectedTHPTExam.totalQuestions} câu đúng</p>
            </div>
          </div>

          {/* Question comparison table */}
          <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#1a1a1a]">Bảng đối chiếu đáp án chi tiết (40 câu):</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.entries(selectedTHPTExam.answers).map(([qId, officialAns]) => {
                const userChoice = thptAnswers[Number(qId)];
                const isCorrect = userChoice === officialAns;

                return (
                  <div
                    key={qId}
                    className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                      isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-[#1a1a1a]">Câu {qId}: </span>
                      <strong className={isCorrect ? 'text-green-700' : 'text-red-600'}>
                        {userChoice || '—'}
                      </strong>
                    </div>
                    <span className="text-[10px] font-bold text-green-800 bg-green-100 px-2 py-0.5 rounded-md">
                      Đ/A: {officialAns}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW D: HSK / MILESTONE SCORE REPORT & DEEP REVIEW
  // ══════════════════════════════════════════════════════════════════════════
  if (isExamSubmitted && selectedHSKExam) {
    let listeningCorrect = 0;
    let readingCorrect = 0;

    selectedHSKExam.questions.forEach(q => {
      const isCorrect = userAnswers[q.id] === q.correctAnswer;
      if (q.section === 'listening' && isCorrect) listeningCorrect++;
      if (q.section === 'reading' && isCorrect) readingCorrect++;
    });

    const ptsPerQ = selectedHSKExam.totalQuestions === 20 ? 5 : 5;
    const listeningScore = listeningCorrect * ptsPerQ;
    const readingScore = readingCorrect * ptsPerQ;
    const totalScore = listeningScore + readingScore;
    const isPassed = totalScore >= selectedHSKExam.passScore;

    const displayedQuestions = selectedHSKExam.questions.filter(q => {
      const isCorrect = userAnswers[q.id] === q.correctAnswer;
      if (reviewFilter === 'wrong') return !isCorrect;
      if (reviewFilter === 'correct') return isCorrect;
      return true;
    });

    return (
      <div className="min-h-screen bg-[#FAF9F6] pb-24">
        {/* Header */}
        <div className="px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsExamSubmitted(false);
                setSelectedHSKExam(null);
                setActiveExamType(null);
              }}
              className="p-1.5 -ml-1 text-[#6b7280] hover:text-[#1a1a1a] rounded-xl hover:bg-[#FAF9F6]"
            >
              <ArrowLeft size={18} />
            </button>
            <h1 className="text-base font-bold text-[#1a1a1a]">Bảng Điểm & Phân Tích Bài Thi</h1>
          </div>
          <button
            onClick={() => handleStartHSKExam(selectedHSKExam)}
            className="px-3 py-1.5 rounded-xl border border-[#4a7c59] text-[#4a7c59] hover:bg-[#e8f0eb] text-xs font-bold flex items-center gap-1"
          >
            <RotateCcw size={13} />
            <span>Thi lại đề này</span>
          </button>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          {/* Certificate Scorecard */}
          <div className="bg-white rounded-3xl border-2 border-[#4a7c59] p-6 shadow-md space-y-5 text-center">
            <span className="text-[10px] font-bold text-[#4a7c59] bg-[#e8f0eb] px-3 py-1 rounded-full uppercase tracking-wider">
              {selectedHSKExam.category === 'milestone' ? 'Báo cáo Kiểm Tra Định Kỳ' : 'Chứng Nhận Mô Phỏng HSK Quốc Tế'}
            </span>
            <h2 className="text-xl font-extrabold text-[#1a1a1a]">
              {selectedHSKExam.title}
            </h2>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-3.5">
                <p className="text-[11px] text-[#6b7280] font-medium">🎧 Điểm Nghe</p>
                <p className="text-2xl font-black text-[#4a7c59] mt-1">{listeningScore}</p>
                <p className="text-[10px] text-[#6b7280]">{listeningCorrect} câu đúng</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-3.5">
                <p className="text-[11px] text-[#6b7280] font-medium">📖 Điểm Đọc</p>
                <p className="text-2xl font-black text-[#4a7c59] mt-1">{readingScore}</p>
                <p className="text-[10px] text-[#6b7280]">{readingCorrect} câu đúng</p>
              </div>

              <div className={`rounded-2xl p-3.5 border ${
                isPassed ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-red-50 border-red-200 text-red-900'
              }`}>
                <p className="text-[11px] font-medium">🏆 Tổng điểm</p>
                <p className="text-2xl font-black mt-1">{totalScore} <span className="text-xs font-normal opacity-75">/ {selectedHSKExam.totalQuestions * 5}</span></p>
                <p className="text-[10px] font-bold mt-0.5">
                  {isPassed ? '✅ 合格 (ĐẬU)' : '❌ 不合格 (CHƯA ĐẠT)'}
                </p>
              </div>
            </div>
          </div>

          {/* Deep Question Review */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#e5e1d8] pb-3">
              <h3 className="font-bold text-base text-[#1a1a1a] flex items-center gap-1.5">
                <span>🔍</span> Giải Thích Chi Tiết Từng Câu
              </h3>

              <div className="flex gap-1 bg-[#e5e1d8]/50 p-1 rounded-xl text-xs font-semibold">
                <button
                  onClick={() => setReviewFilter('all')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${reviewFilter === 'all' ? 'bg-white shadow-xs' : 'text-[#6b7280]'}`}
                >
                  Tất cả ({selectedHSKExam.questions.length})
                </button>
                <button
                  onClick={() => setReviewFilter('wrong')}
                  className={`px-2.5 py-1 rounded-lg transition-all text-red-600 ${reviewFilter === 'wrong' ? 'bg-white shadow-xs font-bold' : ''}`}
                >
                  Sai ({selectedHSKExam.questions.length - (listeningCorrect + readingCorrect)})
                </button>
                <button
                  onClick={() => setReviewFilter('correct')}
                  className={`px-2.5 py-1 rounded-lg transition-all text-emerald-700 ${reviewFilter === 'correct' ? 'bg-white shadow-xs font-bold' : ''}`}
                >
                  Đúng ({listeningCorrect + readingCorrect})
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {displayedQuestions.map((q) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`bg-white rounded-3xl border p-5 space-y-3 ${
                      isCorrect ? 'border-[#e5e1d8]' : 'border-red-200 bg-red-50/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                          isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {q.id}
                        </span>
                        <span className="text-xs font-bold text-[#1a1a1a]">
                          {q.section === 'listening' ? '🎧 Phần Nghe' : '📖 Phần Đọc'} (Phần {q.part})
                        </span>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {isCorrect ? 'Đúng (+5đ)' : 'Sai (0đ)'}
                      </span>
                    </div>

                    {q.audioScript && (
                      <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-xl p-3 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-[#6b7280]">Audio thoại:</p>
                          <p className="chinese-char text-base text-[#1a1a1a] font-medium">{q.audioScript}</p>
                        </div>
                        <button onClick={() => speak(q.audioScript!)} className="p-2 text-[#4a7c59]">
                          <Volume2 size={16} />
                        </button>
                      </div>
                    )}

                    {q.prompt && (
                      <div className="py-1">
                        <p className="chinese-char text-base text-[#1a1a1a] font-medium">{q.prompt}</p>
                        {q.promptPinyin && <p className="text-xs text-[#4a7c59] font-medium">{q.promptPinyin}</p>}
                      </div>
                    )}

                    <div className="bg-[#e8f0eb] border border-[#4a7c59]/20 rounded-2xl p-3 text-xs text-[#1a1a1a] space-y-1">
                      <p className="font-bold text-[#4a7c59]">💡 Phân tích & Giải thích:</p>
                      <p>{q.explanation}</p>
                      <p className="text-[11px] text-[#6b7280] pt-1">
                        Bạn chọn: <strong className={isCorrect ? 'text-green-700' : 'text-red-600'}>{userAns || 'Chưa chọn'}</strong> · Đáp án chuẩn: <strong className="text-green-700">{q.correctAnswer}</strong>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW E: SELECTION SCREEN (DANH SÁCH TẤT CẢ CÁC ĐỀ THI)
  // ══════════════════════════════════════════════════════════════════════════
  const fullHSKExams = hskMockExams.filter(e => e.category !== 'milestone');
  const milestoneHSKExams = hskMockExams.filter(e => e.category === 'milestone');

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top Header */}
      <div className="px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => navigate('home')}
            className="p-1.5 -ml-1 text-[#6b7280] hover:text-[#1a1a1a] rounded-xl hover:bg-[#FAF9F6]"
            title="Về trang chủ"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-base font-bold text-[#1a1a1a] flex items-center gap-1.5">
              <span>🏛️</span> Trung Tâm Khảo Thí HSK & THPT Quốc Gia
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              Đề thi thật THPTQG D4 (2025) · Đề HSK 1 toàn chân chuẩn quốc tế
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        {/* Category Tabs: HSK (10 Đề) | THPTQG D4 (9 Mã Đề) */}
        <div className="grid grid-cols-2 gap-2 bg-white border border-[#e5e1d8] p-1.5 rounded-2xl shadow-2xs">
          <button
            onClick={() => setExamTab('hsk')}
            className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              examTab === 'hsk' ? 'bg-[#4a7c59] text-white shadow-xs' : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            <Trophy size={14} />
            <span>Bộ Đề Thi Thử HSK ({fullHSKExams.length} Đề)</span>
          </button>

          <button
            onClick={() => setExamTab('thptqg')}
            className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              examTab === 'thptqg' ? 'bg-blue-600 text-white shadow-xs' : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            <GraduationCap size={14} />
            <span>Đề Thi Thật THPTQG D4 ({thptqgExams.length} Mã Đề)</span>
          </button>
        </div>

        {/* TAB 1: ĐỀ THI HSK 1 TOÀN CHÂN (40 CÂU · 35 PHÚT) */}
        {examTab === 'hsk' && (
          <div className="space-y-4 fade-in">
            {/* INFINITE DYNAMIC EXAM GENERATOR (TẠO ĐỀ THI MỚI NGẪU NHIÊN) */}
            <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-[#1e3b27] text-white rounded-3xl p-5 shadow-sm space-y-3 border border-emerald-500/30">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-amber-400 text-emerald-950 px-2.5 py-0.5 rounded-full shadow-2xs">
                    ✨ Kho Đề Thi Vô Tận · Tự Động Sinh Mới
                  </span>
                  <h3 className="font-bold text-base text-white">
                    Tạo Đề Thi Thử HSK Ngẫu Nhiên Mới (40 Câu)
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed max-w-lg">
                    Mỗi lần bấm là hệ thống tự động bốc ngẫu nhiên 40 câu hỏi mới toanh từ ngân hàng 400 câu chuẩn HSK (20 Nghe + 20 Đọc). Không bao giờ hết đề để luyện tập!
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl shrink-0">
                  🎲
                </div>
              </div>

              <button
                onClick={() => {
                  const dynamicExam = generateDynamicHSKExam(1);
                  handleStartHSKExam(dynamicExam);
                }}
                className="w-full py-3.5 rounded-2xl bg-white text-[#1e3b27] hover:bg-emerald-50 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.99]"
              >
                <Sparkles size={16} className="text-amber-600" />
                <span>Sinh đề thi ngẫu nhiên mới & Bắt đầu làm ngay ➔</span>
              </button>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-[#4a7c59]/30 rounded-3xl p-5 space-y-2">
              <span className="text-xs font-bold text-white bg-[#4a7c59] px-2.5 py-0.5 rounded-full">
                Mô phỏng 100% đề thi HSK thật · Đủ 10 đề chuẩn
              </span>
              <h2 className="text-lg font-bold text-[#1a1a1a]">
                Bộ Đề Toàn Chân Mô Phỏng HSK 1 ({fullHSKExams.length} Đề Cố Định)
              </h2>
              <p className="text-xs text-[#6b7280] leading-relaxed">
                Trình bày dạng tờ đề thi <strong>5 câu / trang</strong> (hoặc cuộn xem tất cả), có Audio phát âm 2 lần chuẩn giọng bản ngữ, thang 200 điểm.
              </p>
            </div>

            <div className="space-y-3">
              {fullHSKExams.map((exam, idx) => (
                <div key={exam.id} className="bg-white rounded-3xl border border-[#e5e1d8] p-5 hover:border-[#4a7c59] transition-all space-y-3 shadow-xs">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-[#4a7c59] bg-[#e8f0eb] px-2.5 py-0.5 rounded-full">
                          {exam.code}
                        </span>
                        {idx === 0 && (
                          <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                            📸 Theo ảnh đề thi thật của bạn
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-base text-[#1a1a1a] pt-1">{exam.title}</h3>
                      <p className="text-xs text-[#6b7280]">{exam.titleVi}</p>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-[#FAF9F6] border border-[#e5e1d8] flex items-center justify-center text-xl shrink-0">
                      📄
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-[#FAF9F6] p-2 rounded-xl border border-[#e5e1d8]">
                      <span className="text-[#6b7280] block text-[10px]">Thời gian</span>
                      <strong className="text-[#1a1a1a]">{exam.durationMinutes} phút</strong>
                    </div>
                    <div className="bg-[#FAF9F6] p-2 rounded-xl border border-[#e5e1d8]">
                      <span className="text-[#6b7280] block text-[10px]">Số câu</span>
                      <strong className="text-[#1a1a1a]">{exam.totalQuestions} câu</strong>
                    </div>
                    <div className="bg-[#FAF9F6] p-2 rounded-xl border border-[#e5e1d8]">
                      <span className="text-[#6b7280] block text-[10px]">Điểm đạt</span>
                      <strong className="text-[#4a7c59]">≥ {exam.passScore}/200</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartHSKExam(exam)}
                    className="w-full py-3 rounded-2xl bg-[#4a7c59] hover:bg-[#3d6b4a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <Trophy size={15} />
                    <span>Vào phòng thi HSK (Dạng trang đề)</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ĐỀ THI THẬT THPT QUỐC GIA D4 (2025) */}
        {examTab === 'thptqg' && (
          <div className="space-y-4 fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-5 space-y-2">
              <span className="text-xs font-bold text-white bg-blue-600 px-2.5 py-0.5 rounded-full">
                Đề Thi Thật D4 Năm 2025 & THPT Quốc Gia
              </span>
              <h2 className="text-lg font-bold text-[#1a1a1a]">
                Kho Đề Thi Chính Thức Môn Tiếng Trung (Khối D4)
              </h2>
              <p className="text-xs text-[#6b7280] leading-relaxed">
                Tích hợp toàn bộ đề thi thật từ thư mục <code>E:\1\ĐỀ THI THẬT D4 NĂM 2025</code>: Quan sát ảnh gốc tờ đề thi của Bộ GD&ĐT, tô phiếu trắc nghiệm 40 câu và chấm điểm tự động.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {thptqgExams.map((exam) => (
                <div
                  key={exam.id}
                  className="bg-white rounded-3xl border border-[#e5e1d8] p-5 hover:border-blue-500 transition-all space-y-3 shadow-xs"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
                        {exam.code}
                      </span>
                      <h4 className="font-bold text-sm text-[#1a1a1a] mt-1.5">{exam.title}</h4>
                      <p className="text-xs text-[#6b7280]">{exam.titleVi}</p>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-lg shrink-0">
                      🎓
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#6b7280] pt-1">
                    <span>{exam.durationMinutes} phút</span>
                    <span>{exam.totalQuestions} câu hỏi</span>
                    <span>{exam.pageImages.length} trang ảnh gốc</span>
                  </div>

                  <button
                    onClick={() => handleStartTHPTExam(exam)}
                    className="w-full py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                  >
                    <span>Làm đề {exam.code}</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
