import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Printer,
  Projector,
  Cpu,
  Layers,
  FileCheck2,
  Users
} from 'lucide-react';
import { ActiveTab, YearGroup } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  yearGroup: YearGroup;
  setYearGroup: (year: YearGroup) => void;
  onOpenProjector: () => void;
  onOpenAIGenerator: () => void;
  onQuickPrint: () => void;
  questionCount: number;
  submissionCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  yearGroup,
  setYearGroup,
  onOpenProjector,
  onOpenAIGenerator,
  onQuickPrint,
  questionCount,
  submissionCount,
}) => {
  return (
    <header className="no-print bg-slate-900 text-slate-100 border-b border-slate-800 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center shadow-lg shadow-rose-500/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg text-white tracking-tight">
                  {yearGroup === 'year13' ? 'AQA A-Level Biology' : 'AQA AS Biology'}
                </span>
                <span className="px-2 py-0.5 text-xs font-mono font-bold rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                  {yearGroup === 'year13' ? 'Spec 7402 (Units 3.5–3.8)' : 'Spec 7401 (Units 3.1–3.4)'}
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Peer Mark Scheme Decoding • Live Projector • Master App ({yearGroup === 'year13' ? 'Year 13' : 'Year 12'})
              </p>
            </div>
          </div>

          {/* Year Group Toggle & Action Tools */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Year Group Segmented Control */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shadow-inner">
              <button
                onClick={() => setYearGroup('year12')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  yearGroup === 'year12'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Switch to Year 12 (AS Specification 7401, Units 3.1–3.4)"
              >
                Year 12 (AS)
              </button>
              <button
                onClick={() => setYearGroup('year13')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  yearGroup === 'year13'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Switch to Year 13 (A2 Specification 7402, Units 3.5–3.8)"
              >
                Year 13 (A2)
              </button>
            </div>

            <button
              onClick={onOpenProjector}
              className="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors shadow-sm"
              title="Launch 5-7 min Live Marking Projector Mode for class whiteboard"
            >
              <Projector className="w-4 h-4 mr-1.5" />
              <span className="hidden sm:inline">Live Projector</span>
            </button>

            <button
              onClick={onOpenAIGenerator}
              className="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-500/30 transition-colors shadow-sm"
              title="Generate new Flawed Model Answers with Gemini AI"
            >
              <Sparkles className="w-4 h-4 mr-1.5 text-indigo-400" />
              <span className="hidden md:inline">AI Question</span>
              <span className="md:hidden">AI</span>
            </button>

            <button
              onClick={onQuickPrint}
              className="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm"
              title="Print or Save as PDF for dissemination"
            >
              <Printer className="w-4 h-4 mr-1.5" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-2 border-t border-slate-800 pt-2 pb-2.5 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('spec_map')}
            className={`flex items-center px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'spec_map'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4 mr-2" />
            <span>{yearGroup === 'year13' ? 'AQA 7402 Spec Map' : 'AQA 7401 Spec Map'}</span>
            <span className="ml-2 px-1.5 py-0.5 rounded-full text-2xs bg-rose-700/60 text-rose-100">
              {yearGroup === 'year13' ? 'Units 3.5–3.8' : 'Units 3.1–3.4'}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('strategy1')}
            className={`flex items-center px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'strategy1'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileCheck2 className="w-4 h-4 mr-2" />
            <span>Strategy 1: Peer Mark Workshop</span>
            <span className="ml-2 px-1.5 py-0.5 rounded-full text-2xs bg-emerald-700/60 text-emerald-100">
              {questionCount} Qs
            </span>
          </button>

          <button
            onClick={() => setActiveTab('strategy2')}
            className={`flex items-center px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'strategy2'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4 mr-2" />
            <span>Strategy 2: Self-Marking Apps</span>
            <span className="ml-2 px-1.5 py-0.5 rounded-full text-2xs bg-teal-800/80 text-teal-200">
              Interactive
            </span>
          </button>

          <button
            onClick={() => setActiveTab('teacher_answers')}
            className={`flex items-center px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'teacher_answers'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Users className="w-4 h-4 mr-2" />
            <span>Teacher Dashboard & Answers</span>
            {submissionCount > 0 && (
              <span className="ml-2 px-1.5 py-0.5 rounded-full text-2xs bg-amber-500/30 text-amber-200">
                {submissionCount} live
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('printable_pdf')}
            className={`flex items-center px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'printable_pdf'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileCheck2 className="w-4 h-4 mr-2" />
            <span>Printable Packs & Worksheets</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
