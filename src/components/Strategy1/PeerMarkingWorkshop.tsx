import React, { useState } from 'react';
import {
  HelpCircle,
  Award,
  BookOpen,
  PenTool,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Projector
} from 'lucide-react';
import { FlawedQuestion, StudentSubmission, AqaUnit, YearGroup } from '../../types';
import { StudentExaminerMode } from './StudentExaminerMode';

interface PeerMarkingWorkshopProps {
  questions: FlawedQuestion[];
  selectedQuestionId: string;
  yearGroup?: YearGroup;
  onSelectQuestion: (id: string) => void;
  onSubmitStudentWork: (submission: Omit<StudentSubmission, 'id' | 'submittedAt'>) => void;
  onOpenProjector: () => void;
}

export const PeerMarkingWorkshop: React.FC<PeerMarkingWorkshopProps> = ({
  questions,
  selectedQuestionId,
  yearGroup = 'year12',
  onSelectQuestion,
  onSubmitStudentWork,
  onOpenProjector,
}) => {
  const [subView, setSubView] = useState<'student_workspace' | 'official_scheme'>('student_workspace');
  const [unitFilter, setUnitFilter] = useState<'all' | AqaUnit>('all');

  const relevantUnits: AqaUnit[] =
    yearGroup === 'year13'
      ? ['3.5', '3.6', '3.7', '3.8']
      : ['3.1', '3.2', '3.3', '3.4'];

  const yearScopedQuestions = questions.filter((q) =>
    relevantUnits.includes(q.aqaUnit)
  );

  const filteredQuestions =
    unitFilter === 'all'
      ? yearScopedQuestions
      : yearScopedQuestions.filter((q) => q.aqaUnit === unitFilter);

  const currentQuestion =
    filteredQuestions.find((q) => q.id === selectedQuestionId) ||
    filteredQuestions[0] ||
    yearScopedQuestions[0] ||
    questions[0];

  return (
    <div className="space-y-6">
      {/* Strategy 1 Header & Concept Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 uppercase tracking-wider">
                {yearGroup === 'year13' ? 'AQA 7402 Strategy 1' : 'AQA 7401 Strategy 1'}
              </span>
              <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Peer Mark Scheme Decoding Workshop ({yearGroup === 'year13' ? 'Year 13' : 'Year 12'})
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
              Instead of setting full long-answer questions for homework, set "Flawed Model Answers".
              Students act as the AQA Senior Examiner: annotating common specification misconceptions, awarding marks, and rewriting a 100% correct response using specific AQA {yearGroup === 'year13' ? '7402' : '7401'} mark scheme criteria.
            </p>
          </div>

          <button
            onClick={onOpenProjector}
            className="inline-flex items-center px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 flex-shrink-0"
          >
            <Projector className="w-4 h-4 mr-2" />
            <span>Launch Live Projector (5–7 Mins)</span>
          </button>
        </div>

        {/* Unit Filter Bar */}
        <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wide">
            Filter by Unit:
          </span>
          <button
            onClick={() => setUnitFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              unitFilter === 'all'
                ? 'bg-rose-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All {yearGroup === 'year13' ? 'Year 13' : 'Year 12'} Units ({yearScopedQuestions.length})
          </button>
          {relevantUnits.map((u) => {
            const count = yearScopedQuestions.filter((q) => q.aqaUnit === u).length;
            return (
              <button
                key={u}
                onClick={() => setUnitFilter(u)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  unitFilter === u
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Unit {u} ({count})
              </button>
            );
          })}
        </div>

        {/* Question Selector Tabs */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {filteredQuestions.map((q, idx) => {
            const isSelected = q.id === currentQuestion.id;
            return (
              <button
                key={q.id}
                onClick={() => onSelectQuestion(q.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span className="font-mono text-2xs px-1.5 py-0.5 rounded bg-black/40 text-emerald-300">
                  {q.specCode}
                </span>
                <span>{q.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Context Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2 max-w-4xl">
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-bold text-emerald-400 uppercase tracking-wide">
                {currentQuestion.topic}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{currentQuestion.aoLevel}</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-amber-400 font-bold">
                {currentQuestion.totalMarks} Marks
              </span>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-white leading-relaxed">
              {currentQuestion.questionText}
            </h2>
            {currentQuestion.contextNote && (
              <p className="text-xs text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                💡 <strong>Examiner Context:</strong> {currentQuestion.contextNote}
              </p>
            )}
          </div>

          {/* Sub-view Switcher */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 flex-shrink-0 self-start">
            <button
              onClick={() => setSubView('student_workspace')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                subView === 'student_workspace'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Student Examiner Mode
            </button>
            <button
              onClick={() => setSubView('official_scheme')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                subView === 'official_scheme'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Official Mark Scheme
            </button>
          </div>
        </div>
      </div>

      {/* Main Mode Rendering */}
      {subView === 'student_workspace' ? (
        <StudentExaminerMode
          question={currentQuestion}
          onSubmit={onSubmitStudentWork}
        />
      ) : (
        /* Teacher / Examiner Official Scheme View */
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 pb-3 border-b border-slate-800">
              <Award className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-white text-base uppercase tracking-wider">
                Official {currentQuestion.examBoard} Mark Scheme Grid
              </h3>
            </div>

            <div className="divide-y divide-slate-800">
              {currentQuestion.officialMarkScheme.map((mark) => (
                <div key={mark.markCode} className="py-4 space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="px-2 py-0.5 rounded bg-indigo-900/50 text-indigo-300 font-mono font-bold text-xs">
                      {mark.markCode}
                    </span>
                    <p className="text-sm font-semibold text-slate-100">{mark.criteria}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pl-9">
                    {mark.indicativePhrases.map((phrase, pi) => (
                      <span
                        key={pi}
                        className="px-2 py-0.5 rounded text-2xs bg-slate-800 text-emerald-300 font-mono"
                      >
                        ✓ {phrase}
                      </span>
                    ))}
                  </div>
                  {mark.rejectOrErrors && (
                    <div className="ml-9 text-xs text-rose-300 bg-rose-950/20 p-2 rounded border border-rose-900/30">
                      <strong>Examiner Guideline:</strong> {mark.rejectOrErrors}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Exemplar 100% Rewrite */}
          <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-6 shadow-sm space-y-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-emerald-400 text-base uppercase tracking-wider">
                Exemplar 100% Model Rewrite (Grade A* Standard)
              </h3>
            </div>
            <p className="text-slate-200 font-serif leading-relaxed text-base bg-slate-950 p-4 rounded-xl border border-slate-800">
              "{currentQuestion.exemplarRewrite}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
