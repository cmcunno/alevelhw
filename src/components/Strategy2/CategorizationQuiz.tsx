import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sparkles,
  ArrowRightLeft,
  HelpCircle
} from 'lucide-react';
import { CategorizationModule } from '../../types';

interface CategorizationQuizProps {
  module: CategorizationModule;
}

export const CategorizationQuiz: React.FC<CategorizationQuizProps> = ({ module }) => {
  // item ID -> assigned category
  const [placements, setPlacements] = useState<Record<string, string>>({});
  // item ID -> boolean (is error acknowledged or revealed)
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});

  const handlePlace = (itemId: string, category: string) => {
    setPlacements((prev) => ({
      ...prev,
      [itemId]: category,
    }));
  };

  const handleReset = () => {
    setPlacements({});
    setRevealedHints({});
  };

  // Stats
  const totalItems = module.items.length;
  let correctCount = 0;
  let placedCount = 0;

  module.items.forEach((item) => {
    if (placements[item.id]) {
      placedCount++;
      if (placements[item.id] === item.correctCategory) {
        correctCount++;
      }
    }
  });

  const isComplete = placedCount === totalItems;

  return (
    <div className="space-y-6">
      {/* Instructions & Score Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-2xs font-bold uppercase tracking-wider text-teal-400">
            Categorization & Sorting Engine
          </span>
          <h3 className="text-lg font-bold text-white mt-0.5">{module.title}</h3>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl">{module.instructions}</p>
        </div>

        <div className="flex items-center space-x-3 self-end sm:self-auto">
          <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-2xs uppercase tracking-wider text-slate-400 font-bold block">
              Score
            </span>
            <span className="text-lg font-mono font-bold text-teal-300">
              {correctCount} / {totalItems}
            </span>
          </div>

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            title="Reset cards"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2-Column Category Sorting Zones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {module.categories.map((category) => {
          const itemsInCategory = module.items.filter(
            (it) => placements[it.id] === category
          );

          return (
            <div
              key={category}
              className="bg-slate-900 border-2 border-dashed border-slate-800 rounded-2xl p-5 flex flex-col min-h-[300px] shadow-sm"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <h4 className="font-bold text-white text-sm sm:text-base flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 mr-2" />
                  {category}
                </h4>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {itemsInCategory.length} items
                </span>
              </div>

              {/* Items in this category */}
              <div className="space-y-3 flex-1">
                {itemsInCategory.length === 0 ? (
                  <div className="h-36 flex items-center justify-center text-xs text-slate-500 italic border border-slate-800/40 rounded-xl">
                    Assign statements here from the unassigned bank below
                  </div>
                ) : (
                  itemsInCategory.map((item) => {
                    const isCorrect = item.correctCategory === category;

                    return (
                      <div
                        key={item.id}
                        className={`p-3.5 rounded-xl border transition-all ${
                          isCorrect
                            ? 'bg-emerald-950/40 border-emerald-500/60 shadow-sm'
                            : 'bg-rose-950/40 border-rose-500/60 shadow-sm'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs sm:text-sm font-medium text-slate-200">
                            {item.text}
                          </p>
                          <div className="flex items-center space-x-1 flex-shrink-0">
                            {isCorrect ? (
                              <span className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                                <CheckCircle2 className="w-4 h-4" />
                              </span>
                            ) : (
                              <span className="p-1 rounded-full bg-rose-500/20 text-rose-400 animate-bounce">
                                <AlertCircle className="w-4 h-4" />
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Immediate Informative Diagnostic Feedback */}
                        {!isCorrect && (
                          <div className="mt-2.5 p-2.5 rounded-lg bg-rose-900/30 border border-rose-800/40 text-xs text-rose-200 space-y-1">
                            <div className="font-bold flex items-center text-rose-300">
                              <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                              <span>Diagnostic Feedback:</span>
                            </div>
                            <p>{item.diagnosticHint}</p>
                            <div className="pt-1 flex justify-end">
                              <button
                                onClick={() =>
                                  handlePlace(
                                    item.id,
                                    module.categories.find((c) => c !== category)!
                                  )
                                }
                                className="text-2xs font-bold text-rose-300 underline hover:text-rose-100 flex items-center"
                              >
                                <ArrowRightLeft className="w-3 h-3 mr-1" />
                                Move to {module.categories.find((c) => c !== category)}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Unassigned Items Pool */}
      {module.items.filter((it) => !placements[it.id]).length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Unassigned Statements Bank ({module.items.filter((it) => !placements[it.id]).length} remaining)
            </span>
            <span className="text-2xs text-slate-500">
              Click a destination category button on each card to sort
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {module.items
              .filter((it) => !placements[it.id])
              .map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition space-y-3"
                >
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    {item.text}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                    {module.categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handlePlace(item.id, cat)}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-teal-600 hover:text-white text-slate-300 transition"
                      >
                        → {cat}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Completion Banner */}
      {isComplete && (
        <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-500/50 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-6 h-6 text-teal-400" />
            <div>
              <h4 className="font-bold text-teal-300 text-sm sm:text-base">
                Module Completed! ({correctCount}/{totalItems} correct)
              </h4>
              <p className="text-xs text-slate-300">
                All statements have been diagnosed and reviewed with instant examiner feedback.
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition shadow"
          >
            Retry Module
          </button>
        </div>
      )}
    </div>
  );
};
