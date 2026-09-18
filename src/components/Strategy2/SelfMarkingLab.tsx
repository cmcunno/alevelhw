import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  Activity,
  FileText,
  Sparkles,
  Download,
  Info
} from 'lucide-react';
import { InteractiveRevisionModule, AqaUnit, YearGroup } from '../../types';
import { CategorizationQuiz } from './CategorizationQuiz';
import { InteractiveDiagramQuiz } from './InteractiveDiagramQuiz';
import { KeywordMatcherQuiz } from './KeywordMatcherQuiz';
import { SingleFileExporter } from './SingleFileExporter';

interface SelfMarkingLabProps {
  modules: InteractiveRevisionModule[];
  yearGroup?: YearGroup;
}

export const SelfMarkingLab: React.FC<SelfMarkingLabProps> = ({
  modules,
  yearGroup = 'year12',
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(modules[0]?.id || '');
  const [unitFilter, setUnitFilter] = useState<'all' | AqaUnit>('all');

  const relevantUnits: AqaUnit[] =
    yearGroup === 'year13'
      ? ['3.5', '3.6', '3.7', '3.8']
      : ['3.1', '3.2', '3.3', '3.4'];

  const yearScopedModules = modules.filter((m) =>
    relevantUnits.includes(m.aqaUnit)
  );

  // If no year 13 modules yet, fallback gracefully to all modules
  const activeModulePool = yearScopedModules.length > 0 ? yearScopedModules : modules;

  const filteredModules =
    unitFilter === 'all'
      ? activeModulePool
      : activeModulePool.filter((m) => m.aqaUnit === unitFilter);

  const currentModule =
    filteredModules.find((m) => m.id === selectedModuleId) ||
    filteredModules[0] ||
    activeModulePool[0] ||
    modules[0];

  return (
    <div className="space-y-6">
      {/* Strategy 2 Concept Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-teal-500/20 text-teal-400 border border-teal-500/30 uppercase tracking-wider">
                {yearGroup === 'year13' ? 'AQA 7402 Strategy 2' : 'AQA 7401 Strategy 2'}
              </span>
              <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Self-Marking Revision Lab ({yearGroup === 'year13' ? 'Year 13' : 'Year 12'})
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
              Create custom, single-file HTML/JavaScript interactive revision apps that provide instant, diagnostic feedback aligned with AQA {yearGroup === 'year13' ? '7402' : '7401'}.
              Students open them directly in any browser (no login needed). Features categorization sorting, auto-validated diagrams, and technical keyword matchers.
            </p>
          </div>
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
                ? 'bg-teal-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Units ({activeModulePool.length})
          </button>
          {relevantUnits.map((u) => {
            const count = activeModulePool.filter((m) => m.aqaUnit === u).length;
            return (
              <button
                key={u}
                onClick={() => setUnitFilter(u)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  unitFilter === u
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Unit {u} ({count})
              </button>
            );
          })}
        </div>

        {/* Module Picker Bar */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {filteredModules.map((mod) => {
            const isSelected = mod.id === currentModule.id;
            return (
              <button
                key={mod.id}
                onClick={() => setSelectedModuleId(mod.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span className="font-mono text-2xs px-1.5 py-0.5 rounded bg-black/40 text-teal-300">
                  {mod.specCode}
                </span>
                {mod.type === 'categorization' && <Layers className="w-4 h-4 mr-1 text-teal-300" />}
                {mod.type === 'diagram' && <Activity className="w-4 h-4 mr-1 text-teal-300" />}
                {mod.type === 'keyword_matcher' && <FileText className="w-4 h-4 mr-1 text-teal-300" />}
                <span className="max-w-[200px] truncate">{mod.title.split(':')[1] || mod.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Active Quiz Type */}
      {currentModule.type === 'categorization' && (
        <CategorizationQuiz module={currentModule} />
      )}

      {currentModule.type === 'diagram' && (
        <InteractiveDiagramQuiz module={currentModule} />
      )}

      {currentModule.type === 'keyword_matcher' && (
        <KeywordMatcherQuiz module={currentModule} />
      )}

      {/* Single-File Web App HTML Exporter for Dissemination */}
      <SingleFileExporter currentModule={currentModule} />
    </div>
  );
};
