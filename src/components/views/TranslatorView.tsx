import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { allVocab } from '../../data';
import { coreRadicals } from '../../data/radicals_data';
import { speak } from '../../utils/exercises';
import { Search, Volume2, Sparkles, Copy, Check, ArrowRight, BookOpen, Layers, ArrowLeft } from 'lucide-react';

interface TokenAnalysis {
  char: string;
  pinyin: string;
  meaning: string;
  hanViet?: string;
  radical?: string;
  hskLevel?: string;
}

export function TranslatorView() {
  const { navigate } = useApp();
  const [inputText, setInputText] = useState('我想喝一杯半糖去冰的珍珠奶茶。');
  const [analyzedTokens, setAnalyzedTokens] = useState<TokenAnalysis[]>([]);
  const [copied, setCopied] = useState(false);

  const sampleSentences = [
    '我想喝一杯半糖去冰的珍珠奶茶。',
    '明天下午我们要开会讨论生产进度。',
    '北京是中国的首都，历史非常悠久。',
    '服务员，麻烦帮我加一点汤，买单！'
  ];

  const handleAnalyze = (textToAnalyze: string = inputText) => {
    if (!textToAnalyze.trim()) return;

    const chars = Array.from(textToAnalyze.trim());
    const results: TokenAnalysis[] = [];

    // Simple greedy matcher against allVocab
    let i = 0;
    while (i < chars.length) {
      const c = chars[i];
      // Skip punctuation and spaces
      if (/[\s，。！？、,.!?…“”"']/.test(c)) {
        i++;
        continue;
      }

      // Check 3-char, 2-char, 1-char combinations
      const threeChars = chars.slice(i, i + 3).join('');
      const twoChars = chars.slice(i, i + 2).join('');
      const oneChar = c;

      const match3 = allVocab.find(v => v.simplified === threeChars);
      const match2 = allVocab.find(v => v.simplified === twoChars);
      const match1 = allVocab.find(v => v.simplified === oneChar);

      if (match3) {
        results.push({
          char: match3.simplified,
          pinyin: match3.pinyin,
          meaning: match3.meaning,
          radical: match3.radical,
          hskLevel: match3.hsk2Level ? `HSK ${match3.hsk2Level}` : undefined
        });
        i += 3;
      } else if (match2) {
        results.push({
          char: match2.simplified,
          pinyin: match2.pinyin,
          meaning: match2.meaning,
          radical: match2.radical,
          hskLevel: match2.hsk2Level ? `HSK ${match2.hsk2Level}` : undefined
        });
        i += 2;
      } else if (match1) {
        results.push({
          char: match1.simplified,
          pinyin: match1.pinyin,
          meaning: match1.meaning,
          radical: match1.radical,
          hskLevel: match1.hsk2Level ? `HSK ${match1.hsk2Level}` : undefined
        });
        i += 1;
      } else {
        // Fallback for character not directly in vocab list
        const radMatch = coreRadicals.find(r => r.char === oneChar);
        results.push({
          char: oneChar,
          pinyin: radMatch?.pinyin || '',
          meaning: radMatch?.meaningVi || 'Ký tự Hán',
          radical: radMatch?.char,
        });
        i += 1;
      }
    }

    setAnalyzedTokens(results);
  };

  // Run initial analysis
  React.useEffect(() => {
    handleAnalyze(inputText);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top Header */}
      <div className="px-4 py-4 border-b border-[#e5e1d8] bg-white sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('home')}
            className="p-1.5 -ml-1 text-[#6b7280] hover:text-[#1a1a1a] rounded-xl hover:bg-[#FAF9F6] transition-colors"
            title="Quay lại Trang chủ"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-base font-bold text-[#1a1a1a] flex items-center gap-1.5">
              <span>🔍</span> Công Cụ Dịch & Phân Tích Chữ Hán Thông Minh
            </h1>
            <p className="text-[11px] text-[#6b7280]">
              Tách từ, tạo Pinyin, giải nghĩa Hán-Việt & bóc tách cấu trúc từng chữ
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        {/* Input Box */}
        <div className="bg-white rounded-3xl border border-[#e5e1d8] p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#4a7c59] uppercase tracking-wider">
              Nhập hoặc dán chữ Hán vào đây:
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="text-xs text-[#6b7280] hover:text-[#1a1a1a] flex items-center gap-1"
                title="Sao chép"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copied ? 'Đã chép' : 'Chép'}</span>
              </button>
              <button
                onClick={() => speak(inputText)}
                className="text-xs text-[#4a7c59] hover:underline flex items-center gap-1 font-medium"
              >
                <Volume2 size={14} />
                <span>Đọc cả câu</span>
              </button>
            </div>
          </div>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={3}
            className="w-full text-base sm:text-lg font-normal text-[#1a1a1a] bg-[#FAF9F6] border border-[#e5e1d8] rounded-2xl p-4 focus:outline-none focus:border-[#4a7c59] resize-none chinese-char"
            placeholder="Ví dụ: 我想喝一杯奶茶..."
          />

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[11px] text-[#6b7280]">Câu mẫu:</span>
              {sampleSentences.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputText(s);
                    handleAnalyze(s);
                  }}
                  className="text-[11px] bg-[#FAF9F6] border border-[#e5e1d8] px-2 py-0.5 rounded-lg text-[#4b5563] hover:border-[#4a7c59] hover:text-[#4a7c59] truncate max-w-[150px]"
                >
                  {s}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleAnalyze(inputText)}
              className="px-4 py-2 bg-[#4a7c59] text-white rounded-xl text-xs font-bold hover:bg-[#3d6b4a] transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>Phân tích</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Analysis Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#1a1a1a] flex items-center gap-1.5">
              <Sparkles size={16} className="text-amber-500" />
              Kết quả bóc tách từ vựng & Pinyin ({analyzedTokens.length} từ)
            </h2>
            <span className="text-xs text-[#6b7280]">Chạm vào từng từ để nghe đọc</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {analyzedTokens.map((tok, idx) => (
              <div
                key={idx}
                onClick={() => speak(tok.char)}
                className="bg-white rounded-2xl border border-[#e5e1d8] p-4 cursor-pointer hover:border-[#4a7c59] hover:shadow-sm transition-all group relative"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="chinese-char text-3xl font-light text-[#1a1a1a] group-hover:text-[#4a7c59] transition-colors">
                      {tok.char}
                    </span>
                    <p className="text-sm font-bold text-[#4a7c59] mt-0.5">{tok.pinyin}</p>
                  </div>

                  <div className="text-right space-y-1">
                    {tok.hskLevel && (
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full inline-block">
                        {tok.hskLevel}
                      </span>
                    )}
                    {tok.radical && (
                      <p className="text-[11px] text-[#6b7280]">
                        Bộ: <span className="chinese-char font-medium text-[#1a1a1a]">{tok.radical}</span>
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-xs text-[#4b5563] font-medium mt-2 pt-2 border-t border-[#e5e1d8]/50">
                  {tok.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Translation Guidance Card */}
        <div className="bg-[#FAF9F6] border border-[#e5e1d8] rounded-3xl p-5 space-y-2 text-xs text-[#4b5563]">
          <h4 className="font-bold text-[#1a1a1a] flex items-center gap-1.5 text-sm">
            <span>💡</span> Mẹo dịch chuẩn ngữ pháp tiếng Trung:
          </h4>
          <ul className="list-disc pl-4 space-y-1 text-xs">
            <li><strong>Trạng ngữ thời gian và địa điểm:</strong> Thường đứng trước động từ (Tôi [ở thư viện] [đọc sách] chứ không nói "Tôi đọc sách ở thư viện").</li>
            <li><strong>Định ngữ đứng trước trung tâm ngữ:</strong> Cụm "của..." dùng 的 (de), tính từ bổ nghĩa cho danh từ luôn đứng phía trước.</li>
            <li><strong>Bổ ngữ kết quả / phương hướng:</strong> Đứng liền ngay sau động từ (Ví dụ: 看完 - xem xong, 走进来 - bước vào trong).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
