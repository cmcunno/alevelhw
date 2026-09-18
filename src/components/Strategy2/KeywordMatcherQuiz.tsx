import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sparkles,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { KeywordMatcherModule } from '../../types';

interface KeywordMatcherQuizProps {
  module: KeywordMatcherModule;
}

export const KeywordMatcherQuiz: React.FC<KeywordMatcherQuizProps> = ({ module }) => {
  // gap ID -> assigned term
  const [filledGaps, setFilledGaps] = useState<Record<string, string>>({});
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const handleSelectGap = (gapId: string) => {
    if (selectedTerm) {
      setFilledGaps((prev) => ({
        ...prev,
        [gapId]: selectedTerm,
      }));
      setSelectedTerm(null);
    } else if (filledGaps[gapId]) {
      // Clear this gap
      setFilledGaps((prev) => {
        const next = { ...prev };
        delete next[gapId];
        return next;
      });
    }
  };

  const handleReset = () => {
    setFilledGaps({});
    setSelectedTerm(null);
  };

  const totalGaps = module.gapIds.length;
  let correctCount = 0;
  let filledCount = 0;

  module.gapIds.forEach((gapId) => {
    const assigned = filledGaps[gapId];
    if (assigned) {
      filledCount++;
      if (assigned === module.gaps[gapId].correctTerm) {
        correctCount++;
      }
    }
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-2xs font-bold uppercase tracking-wider text-teal-400">
            Keyword Precision Matcher
          </span>
          <h3 className="text-lg font-bold text-white mt-0.5">{module.title}</h3>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl">{module.instructions}</p>
        </div>

        <div className="flex items-center space-x-3 self-end sm:self-auto">
          <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-2xs uppercase tracking-wider text-slate-400 font-bold block">
              Terms Matched
            </span>
            <span className="text-lg font-mono font-bold text-teal-300">
              {correctCount} / {totalGaps}
            </span>
          </div>

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            title="Clear all blanks"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Term Bank Palette */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center">
            <BookOpen className="w-4 h-4 mr-1.5" />
            Examiner Specification Term Bank:
          </span>
          <span className="text-2xs text-slate-400">
            Click a keyword below, then click any blank in the paragraph
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {module.termBank.map((term) => {
            const isAssigned = Object.values(filledGaps).includes(term);
            const isSelected = selectedTerm === term;

            return (
              <button
                key={term}
                type="button"
                onClick={() => setSelectedTerm(isSelected ? null : term)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                  isSelected
                    ? 'bg-teal-500 text-slate-950 ring-2 ring-white scale-105'
                    : isAssigned
                    ? 'bg-slate-800 text-slate-500 border border-slate-700/50 line-through'
                    : 'bg-slate-800 text-teal-300 border border-teal-500/30 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {term}
              </button>
            );
          })}
        </div>
      </div>

      {/* Exam Paragraph with Interactive Fill Blanks */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="text-base sm:text-lg text-slate-200 font-serif leading-loose">
          {module.passageParts.map((part, i) => {
            const gapId = module.gapIds[i];
            const currentAnswer = gapId ? filledGaps[gapId] : null;
            const gapData = gapId ? module.gaps[gapId] : null;
            const isCorrect = gapData && currentAnswer === gapData.correctTerm;

            return (
              <React.Fragment key={i}>
                <span>{part}</span>
                {gapId && gapData && (
                  <span
                    onClick={() => handleSelectGap(gapId)}
                    className={`inline-flex items-center mx-1 px-3 py-1 rounded-xl text-xs sm:text-sm font-sans font-bold cursor-pointer transition-all border-2 align-middle ${
                      !currentAnswer
                        ? selectedTerm
                          ? 'border-dashed border-teal-400 bg-teal-950/30 text-teal-300 animate-pulse'
                          : 'border-dashed border-slate-600 bg-slate-950 text-slate-500'
                        : isCorrect
                        ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-sm'
                        : 'bg-rose-950/60 border-rose-500 text-rose-300 shadow-sm'
                    }`}
                    title={gapData.clue}
                  >
                    {currentAnswer || `[Blank ${i + 1}]`}
                    {currentAnswer && (
                      <span className="ml-1.5 flex-shrink-0">
                        {isCorrect ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
                        ) : (
                          <AlertCircle className="w-3.5 h-3.5 text-rose-400 inline" />
                        )}
                      </span>
                    )}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Diagnostic Hints Panel for any Incorrect Gaps */}
      {Object.entries(filledGaps).some(([gId, val]) => val !== module.gaps[gId]?.correctTerm) && (
        <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-800/60 space-y-2">
          <div className="flex items-center text-xs font-bold text-rose-400 uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 mr-1.5 text-rose-400" />
            <span>Immediate Diagnostic Feedback on Blanks:</span>
          </div>

          <div className="space-y-1.5">
            {Object.entries(filledGaps).map(([gapId, val]) => {
              const gap = module.gaps[gapId];
              if (gap && val !== gap.correctTerm) {
                return (
                  <div key={gapId} className="text-xs text-rose-200">
                    <strong className="text-rose-300">Your choice "{val}":</strong>{' '}
                    {gap.diagnosticHint}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
