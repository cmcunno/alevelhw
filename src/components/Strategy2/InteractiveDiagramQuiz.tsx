import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sparkles,
  Info,
  HelpCircle
} from 'lucide-react';
import { DiagramModule } from '../../types';

interface InteractiveDiagramQuizProps {
  module: DiagramModule;
}

export const InteractiveDiagramQuiz: React.FC<InteractiveDiagramQuizProps> = ({ module }) => {
  // hotspot ID -> student's selected answer
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(
    module.hotspots[0]?.id || null
  );

  const handleSelectAnswer = (hotspotId: string, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [hotspotId]: answer,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setActiveHotspotId(module.hotspots[0]?.id || null);
  };

  const activeHotspot = module.hotspots.find((h) => h.id === activeHotspotId) || module.hotspots[0];

  // Stats
  const totalHotspots = module.hotspots.length;
  let correctCount = 0;
  let answeredCount = 0;

  module.hotspots.forEach((hs) => {
    if (selectedAnswers[hs.id]) {
      answeredCount++;
      if (selectedAnswers[hs.id] === hs.correct) {
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
            Interactive Diagram Lab (Auto-Validation)
          </span>
          <h3 className="text-lg font-bold text-white mt-0.5">{module.title}</h3>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl">{module.instructions}</p>
        </div>

        <div className="flex items-center space-x-3 self-end sm:self-auto">
          <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-2xs uppercase tracking-wider text-slate-400 font-bold block">
              Accuracy
            </span>
            <span className="text-lg font-mono font-bold text-teal-300">
              {correctCount} / {totalHotspots}
            </span>
          </div>

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            title="Reset diagram selections"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Interactive Diagram Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Diagram Canvas (Left 7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[380px] shadow-sm">
          {/* Custom SVG Rendering depending on diagramKind */}
          {module.diagramKind === 'calvin_cycle' && (
            <div className="w-full max-w-lg aspect-square relative flex items-center justify-center">
              {/* Circular Calvin cycle track */}
              <svg viewBox="0 0 400 400" className="w-full h-full text-slate-700">
                <circle
                  cx="200"
                  cy="200"
                  r="130"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="8"
                  strokeDasharray="8 6"
                />
                {/* Arrow markers for cycle flow */}
                <path
                  d="M 330 200 A 130 130 0 0 1 200 330"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="5"
                />
                <path
                  d="M 200 330 A 130 130 0 0 1 70 200"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="5"
                />
                <path
                  d="M 70 200 A 130 130 0 0 1 200 70"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="5"
                />
                <path
                  d="M 200 70 A 130 130 0 0 1 330 200"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="5"
                />

                {/* Center Label */}
                <text
                  x="200"
                  y="190"
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="16"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  CALVIN CYCLE
                </text>
                <text
                  x="200"
                  y="215"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="12"
                  fontFamily="sans-serif"
                >
                  (Chloroplast Stroma)
                </text>
              </svg>

              {/* Hotspot Markers placed absolutely */}
              {module.hotspots.map((hs, idx) => {
                const currentAns = selectedAnswers[hs.id];
                const isSelected = activeHotspotId === hs.id;
                const isAnswered = !!currentAns;
                const isCorrect = currentAns === hs.correct;

                return (
                  <button
                    key={hs.id}
                    onClick={() => setActiveHotspotId(hs.id)}
                    style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl transition-all shadow-lg flex items-center space-x-1.5 ${
                      isSelected
                        ? 'ring-4 ring-teal-400/50 scale-110 z-20'
                        : 'hover:scale-105 z-10'
                    } ${
                      !isAnswered
                        ? 'bg-slate-800 border-2 border-slate-600 text-slate-200'
                        : isCorrect
                        ? 'bg-emerald-600 border-2 border-emerald-400 text-white shadow-emerald-500/20'
                        : 'bg-rose-600 border-2 border-rose-400 text-white shadow-rose-500/20 animate-pulse'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-black/30 text-2xs font-bold font-mono flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-2xs font-bold max-w-[90px] truncate hidden sm:inline">
                      {isAnswered ? (isCorrect ? '✓ Correct' : '✗ Review') : hs.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Action Potential Voltage Trace SVG */}
          {module.diagramKind === 'action_potential' && (
            <div className="w-full max-w-lg aspect-[4/3] relative flex items-center justify-center">
              <svg viewBox="0 0 500 320" className="w-full h-full text-slate-700">
                {/* Axes */}
                <line x1="60" y1="20" x2="60" y2="280" stroke="#475569" strokeWidth="2" />
                <line x1="60" y1="280" x2="480" y2="280" stroke="#475569" strokeWidth="2" />

                {/* Voltage reference lines */}
                <line x1="55" y1="50" x2="480" y2="50" stroke="#334155" strokeDasharray="4 4" />
                <text x="50" y="55" textAnchor="end" fill="#94a3b8" fontSize="11" fontFamily="mono">
                  +40mV
                </text>

                <line x1="55" y1="170" x2="480" y2="170" stroke="#334155" strokeDasharray="4 4" />
                <text x="50" y="175" textAnchor="end" fill="#94a3b8" fontSize="11" fontFamily="mono">
                  -55mV
                </text>

                <line x1="55" y1="210" x2="480" y2="210" stroke="#334155" strokeDasharray="4 4" />
                <text x="50" y="215" textAnchor="end" fill="#94a3b8" fontSize="11" fontFamily="mono">
                  -70mV
                </text>

                <line x1="55" y1="250" x2="480" y2="250" stroke="#334155" strokeDasharray="4 4" />
                <text x="50" y="255" textAnchor="end" fill="#94a3b8" fontSize="11" fontFamily="mono">
                  -80mV
                </text>

                {/* Action Potential Curve */}
                <path
                  d="M 60 210 L 130 210 Q 160 210 180 170 Q 210 110 240 50 Q 255 50 270 120 Q 300 230 330 250 Q 370 250 400 210 L 480 210"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Axis Titles */}
                <text x="270" y="310" textAnchor="middle" fill="#64748b" fontSize="12">
                  Time (milliseconds)
                </text>
                <text
                  x="20"
                  y="150"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="12"
                  transform="rotate(-90 20 150)"
                >
                  Membrane Potential (mV)
                </text>
              </svg>

              {/* Hotspot Markers on AP Graph */}
              {module.hotspots.map((hs, idx) => {
                const currentAns = selectedAnswers[hs.id];
                const isSelected = activeHotspotId === hs.id;
                const isAnswered = !!currentAns;
                const isCorrect = currentAns === hs.correct;

                return (
                  <button
                    key={hs.id}
                    onClick={() => setActiveHotspotId(hs.id)}
                    style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl transition-all shadow-lg flex items-center space-x-1.5 ${
                      isSelected
                        ? 'ring-4 ring-sky-400/50 scale-110 z-20'
                        : 'hover:scale-105 z-10'
                    } ${
                      !isAnswered
                        ? 'bg-slate-800 border-2 border-slate-600 text-slate-200'
                        : isCorrect
                        ? 'bg-emerald-600 border-2 border-emerald-400 text-white shadow-emerald-500/20'
                        : 'bg-rose-600 border-2 border-rose-400 text-white shadow-rose-500/20 animate-pulse'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-black/30 text-2xs font-bold font-mono flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-2xs font-bold max-w-[80px] truncate hidden sm:inline">
                      {isAnswered ? (isCorrect ? '✓ Valid' : '✗ Check') : hs.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          <div className="absolute bottom-3 left-4 text-2xs text-slate-500">
            Click any numbered node on the diagram to inspect and label.
          </div>
        </div>

        {/* Hotspot Validation & Options Panel (Right 5 Cols) */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Node Validation: {activeHotspot.label}
              </span>
              <span className="text-xs text-slate-400">
                Node {module.hotspots.findIndex((h) => h.id === activeHotspot.id) + 1} of {totalHotspots}
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-4">
              Select the scientifically accurate specification label for this stage/structure:
            </p>

            {/* Options List */}
            <div className="space-y-2.5">
              {activeHotspot.options.map((option) => {
                const isSelected = selectedAnswers[activeHotspot.id] === option;
                const isCorrect = option === activeHotspot.correct;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSelectAnswer(activeHotspot.id, option)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      isSelected
                        ? isCorrect
                          ? 'bg-emerald-950/50 border-emerald-500 text-emerald-100 shadow-sm ring-1 ring-emerald-500'
                          : 'bg-rose-950/50 border-rose-500 text-rose-100 shadow-sm ring-1 ring-rose-500'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span>{option}</span>
                      {isSelected && (
                        <span className="flex-shrink-0 mt-0.5">
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-rose-400" />
                          )}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Informative Diagnostic Feedback Loop */}
            {selectedAnswers[activeHotspot.id] &&
              selectedAnswers[activeHotspot.id] !== activeHotspot.correct && (
                <div className="mt-4 p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs text-rose-200 space-y-1.5 animate-fadeIn">
                  <div className="flex items-center font-bold text-rose-300">
                    <AlertCircle className="w-4 h-4 mr-1.5 flex-shrink-0 text-rose-400" />
                    <span>Informative Feedback Loop:</span>
                  </div>
                  <p className="leading-relaxed">{activeHotspot.diagnosticHint}</p>
                </div>
              )}

            {selectedAnswers[activeHotspot.id] === activeHotspot.correct && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-200 space-y-1">
                <div className="flex items-center font-bold text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-400" />
                  <span>100% Correct Specification Phrasing!</span>
                </div>
                <p className="text-slate-300">
                  This terminology aligns with chief examiner mark schemes.
                </p>
              </div>
            )}
          </div>

          {/* Bottom Next/Prev Hotspot Controls */}
          <div className="pt-5 mt-6 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                const curIdx = module.hotspots.findIndex((h) => h.id === activeHotspot.id);
                if (curIdx > 0) setActiveHotspotId(module.hotspots[curIdx - 1].id);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              disabled={module.hotspots.findIndex((h) => h.id === activeHotspot.id) === 0}
            >
              ← Previous Node
            </button>

            <button
              onClick={() => {
                const curIdx = module.hotspots.findIndex((h) => h.id === activeHotspot.id);
                if (curIdx < module.hotspots.length - 1)
                  setActiveHotspotId(module.hotspots[curIdx + 1].id);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white transition shadow"
              disabled={
                module.hotspots.findIndex((h) => h.id === activeHotspot.id) ===
                module.hotspots.length - 1
              }
            >
              Next Node →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
