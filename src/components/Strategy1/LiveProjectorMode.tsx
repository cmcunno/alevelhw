import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  UserCheck,
  Eye,
  PenTool,
  ChevronRight,
  Maximize2,
  Sparkles,
  Award
} from 'lucide-react';
import { FlawedQuestion } from '../../types';

interface LiveProjectorModeProps {
  question: FlawedQuestion;
  onClose: () => void;
  onNextQuestion?: () => void;
}

const CLASS_STUDENT_NAMES = [
  'Maya Patel',
  'Marcus Evans',
  'Liam Chen',
  'Freya Davies',
  'Amara Okafor',
  'Ethan Wright',
  'Sophie Bennett',
  'Tariq Al-Mansoor',
  'Chloe Jenkins',
  'Oliver Campbell',
];

export const LiveProjectorMode: React.FC<LiveProjectorModeProps> = ({
  question,
  onClose,
  onNextQuestion,
}) => {
  // 5-7 mins classroom live timer (default 6 mins = 360 seconds)
  const [timerDuration, setTimerDuration] = useState<number>(360);
  const [timeLeft, setTimeLeft] = useState<number>(360);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Projection reveals
  const [revealedMarkCodes, setRevealedMarkCodes] = useState<Record<string, boolean>>({});
  const [showExaminerAnnotations, setShowExaminerAnnotations] = useState<boolean>(false);
  const [purplePenMode, setPurplePenMode] = useState<boolean>(false);
  const [coldCallStudent, setColdCallStudent] = useState<string | null>(null);
  const [isSpinningStudent, setIsSpinningStudent] = useState<boolean>(false);

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  // Reset when question changes
  useEffect(() => {
    setTimeLeft(timerDuration);
    setIsTimerRunning(false);
    setRevealedMarkCodes({});
    setShowExaminerAnnotations(false);
    setPurplePenMode(false);
    setColdCallStudent(null);
  }, [question, timerDuration]);

  const toggleMarkReveal = (code: string) => {
    setRevealedMarkCodes((prev) => ({
      ...prev,
      [code]: !prev[code],
    }));
  };

  const revealAllMarks = () => {
    const all: Record<string, boolean> = {};
    question.officialMarkScheme.forEach((m) => {
      all[m.markCode] = true;
    });
    setRevealedMarkCodes(all);
  };

  const spinColdCall = () => {
    setIsSpinningStudent(true);
    let count = 0;
    const interval = setInterval(() => {
      const randomName = CLASS_STUDENT_NAMES[Math.floor(Math.random() * CLASS_STUDENT_NAMES.length)];
      setColdCallStudent(randomName);
      count++;
      if (count > 12) {
        clearInterval(interval);
        setIsSpinningStudent(false);
      }
    }, 80);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-slate-100 flex flex-col overflow-y-auto">
      {/* Projector Header Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center justify-between shadow-lg sticky top-0 z-20">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg text-sm font-semibold tracking-wide uppercase">
            <Maximize2 className="w-4 h-4 mr-1 text-amber-400" />
            Classroom Projector Mode
          </span>
          <span className="text-slate-400 text-sm font-medium">
            Live Marking Workshop (5–7 Mins)
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            {question.examBoard} • {question.aoLevel}
          </span>
        </div>

        {/* 5-7 Min Countdown Timer Controls */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
            <span
              className={`text-2xl font-mono font-bold tracking-wider ${
                timeLeft <= 60
                  ? 'text-rose-400 animate-pulse'
                  : timeLeft <= 180
                  ? 'text-amber-400'
                  : 'text-emerald-400'
              }`}
            >
              {formatTime(timeLeft)}
            </span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-700 transition"
              title={isTimerRunning ? 'Pause timer' : 'Start 5-7 min live marking'}
            >
              {isTimerRunning ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
            </button>
            <button
              onClick={() => {
                setTimeLeft(timerDuration);
                setIsTimerRunning(false);
              }}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition"
              title="Reset timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <div className="flex space-x-1 ml-2 border-l border-slate-700 pl-2">
              {[300, 360, 420].map((durationSec) => (
                <button
                  key={durationSec}
                  onClick={() => {
                    setTimerDuration(durationSec);
                    setTimeLeft(durationSec);
                    setIsTimerRunning(false);
                  }}
                  className={`text-2xs px-1.5 py-0.5 rounded font-mono ${
                    timerDuration === durationSec
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {durationSec / 60}m
                </button>
              ))}
            </div>
          </div>

          {onNextQuestion && (
            <button
              onClick={onNextQuestion}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
            >
              Next Question
            </button>
          )}

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            title="Exit Projector"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Projector Canvas */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Question + Flawed Model Answer + Purple-pen) */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Question Banner */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                Official Exam Question ({question.totalMarks} Marks)
              </span>
              <span className="text-xs text-slate-400">{question.topic}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
              {question.questionText}
            </h2>
          </div>

          {/* Flawed Model Answer Card */}
          <div className="bg-slate-900/95 border-2 border-rose-500/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                <span className="text-sm font-bold text-rose-400 uppercase tracking-wide">
                  Student Flawed Model Answer (Act as the Examiner)
                </span>
              </div>
              <button
                onClick={() => setShowExaminerAnnotations(!showExaminerAnnotations)}
                className={`flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg transition ${
                  showExaminerAnnotations
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Eye className="w-3.5 h-3.5 mr-1.5" />
                {showExaminerAnnotations ? 'Hide Examiner Traps' : 'Reveal Examiner Flaws'}
              </button>
            </div>

            {/* Answer Display */}
            <div className="text-lg md:text-xl font-serif text-slate-200 leading-relaxed p-4 bg-slate-950/70 rounded-xl border border-slate-800/80">
              {!showExaminerAnnotations ? (
                <p>"{question.flawedAnswer}"</p>
              ) : (
                <div className="space-y-3 font-sans text-base">
                  <p className="font-serif text-lg text-slate-300 italic mb-4">
                    "{question.flawedAnswer}"
                  </p>
                  <div className="p-3 bg-rose-950/40 border border-rose-800/50 rounded-lg space-y-2">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                      Common Misconceptions & Fatal Errors:
                    </span>
                    {question.flawedAnnotations.map((anno, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm text-rose-200">
                        <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="underline text-rose-300">"{anno.phrase}"</strong> —{' '}
                          {anno.explanation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Examiner Cold-Call Box */}
            <div className="mt-5 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start space-x-3">
                <UserCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-bold text-amber-300 tracking-wider">
                    Live Cold-Call Prompt for Class
                  </div>
                  <div className="text-sm text-slate-200 font-medium">
                    {question.recommendedColdCall}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 self-end sm:self-auto">
                <button
                  onClick={spinColdCall}
                  disabled={isSpinningStudent}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition flex items-center shadow"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  {isSpinningStudent ? 'Picking...' : 'Pick Student'}
                </button>
                {coldCallStudent && (
                  <span className="px-3 py-1 rounded-lg bg-amber-400/20 text-amber-200 text-sm font-bold border border-amber-400/40">
                    {coldCallStudent}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Purple-Pen 100% Exemplar Reveal */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <PenTool className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-bold text-purple-400 uppercase tracking-wider">
                  Real-Time Purple-Pen Correction (100% Model Rewrite)
                </span>
              </div>
              <button
                onClick={() => setPurplePenMode(!purplePenMode)}
                className={`flex items-center text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                  purplePenMode
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-slate-800 text-purple-400 hover:bg-slate-700'
                }`}
              >
                {purplePenMode ? 'Hide Exemplar' : 'Project Purple-Pen Exemplar'}
              </button>
            </div>

            {purplePenMode ? (
              <div className="p-4 bg-purple-950/40 border-2 border-purple-500/60 rounded-xl space-y-4">
                <p className="text-base md:text-lg font-serif text-purple-100 leading-relaxed">
                  {question.exemplarRewrite}
                </p>
                <div className="pt-2 border-t border-purple-800/40 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                    AQA/OCR Mandatory Key Terms:
                  </span>
                  {question.keyTerms.map((term, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/40"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-400 italic">
                Click "Project Purple-Pen Exemplar" once students have completed their own annotations and rewrites.
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Official Mark Scheme Grid */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex-1 flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-white text-base uppercase tracking-wider">
                  Official Mark Scheme Grid
                </h3>
              </div>
              <button
                onClick={revealAllMarks}
                className="text-xs font-semibold text-indigo-300 hover:text-indigo-200 px-2.5 py-1 bg-indigo-500/20 rounded-lg hover:bg-indigo-500/30 transition"
              >
                Reveal All
              </button>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto">
              {question.officialMarkScheme.map((mark) => {
                const isRevealed = !!revealedMarkCodes[mark.markCode];
                return (
                  <div
                    key={mark.markCode}
                    onClick={() => toggleMarkReveal(mark.markCode)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isRevealed
                        ? 'bg-indigo-950/40 border-indigo-500/60 shadow-md'
                        : 'bg-slate-850/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`w-7 h-7 rounded-lg font-mono font-bold text-xs flex items-center justify-center ${
                            isRevealed
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {mark.markCode}
                        </span>
                        <span className="text-sm font-semibold text-slate-200">
                          Mark Scheme Criterion
                        </span>
                      </div>
                      <span className="text-xs text-indigo-400 font-medium">
                        {isRevealed ? 'Revealed' : 'Click to Reveal'}
                      </span>
                    </div>

                    {isRevealed && (
                      <div className="mt-3 pt-3 border-t border-indigo-900/50 space-y-2">
                        <p className="text-sm text-slate-200 font-medium">{mark.criteria}</p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {mark.indicativePhrases.map((phrase, pi) => (
                            <span
                              key={pi}
                              className="px-2 py-0.5 rounded text-2xs bg-indigo-900/40 text-indigo-300 font-mono"
                            >
                              ✓ {phrase}
                            </span>
                          ))}
                        </div>
                        {mark.rejectOrErrors && (
                          <div className="text-xs text-rose-300 bg-rose-950/30 p-2 rounded border border-rose-900/30">
                            <strong>Examiner Guideline:</strong> {mark.rejectOrErrors}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Verdict Box */}
            <div className="mt-5 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-slate-200 mb-1">
                <span>Examiner Actual Award:</span>
                <span className="text-rose-400 font-mono text-sm">
                  {question.examinerVerdict.marksAwarded} / {question.examinerVerdict.maxMarks} Marks
                </span>
              </div>
              <p className="text-slate-400">{question.examinerVerdict.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
