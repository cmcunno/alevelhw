import React, { useState } from 'react';
import {
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Search,
  Filter,
  Layers,
  Sparkles,
  ChevronRight,
  HelpCircle,
  FileCheck,
  Printer
} from 'lucide-react';
import { AqaSpecificationTopic, AqaUnit, YearGroup } from '../../types';

interface AqaSpecificationBrowserProps {
  specTopics: AqaSpecificationTopic[];
  yearGroup?: YearGroup;
  onSelectUnitQuestion: (unit: AqaUnit, specCode: string) => void;
  onOpenRevisionModule: (specCode: string) => void;
  onOpenAIGenerator: (topicTitle: string, specCode: string) => void;
  onOpenPrintPack?: (specCode: string) => void;
}

export const AqaSpecificationBrowser: React.FC<AqaSpecificationBrowserProps> = ({
  specTopics,
  yearGroup = 'year12',
  onSelectUnitQuestion,
  onOpenRevisionModule,
  onOpenAIGenerator,
  onOpenPrintPack,
}) => {
  const [selectedUnit, setSelectedUnit] = useState<AqaUnit | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const unitMetadata: Record<
    AqaUnit,
    { title: string; subtitle: string; color: string; examPaper: string }
  > = {
    '3.1': {
      title: 'Unit 3.1: Biological Molecules',
      subtitle: 'Carbohydrates, Lipids, Proteins & Enzymes, DNA/RNA, ATP, Water, Inorganic Ions',
      color: 'from-blue-600/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400',
      examPaper: 'AS Paper 1 & Paper 2',
    },
    '3.2': {
      title: 'Unit 3.2: Cells',
      subtitle: 'Cell Structure, Ultracentrifugation, Mitosis, Membrane Co-Transport, Immunology & Vaccines',
      color: 'from-emerald-600/20 to-teal-600/10 border-emerald-500/30 text-emerald-400',
      examPaper: 'AS Paper 1 & Paper 2',
    },
    '3.3': {
      title: 'Unit 3.3: Organisms Exchange Substances',
      subtitle: 'SA:V Ratio, Gas Exchange (Fish/Insects/Lungs), Digestion, Heart & Bohr Effect, Cohesion-Tension & Mass Flow',
      color: 'from-amber-600/20 to-orange-600/10 border-amber-500/30 text-amber-400',
      examPaper: 'AS Paper 1 & Paper 2',
    },
    '3.4': {
      title: 'Unit 3.4: Genetic Information & Variation',
      subtitle: 'DNA Triplet Code, Transcription & Splicing, Translation, Meiosis, Natural Selection, Index of Diversity',
      color: 'from-indigo-600/20 to-purple-600/10 border-indigo-500/30 text-indigo-400',
      examPaper: 'AS Paper 1 & Paper 2',
    },
    '3.5': {
      title: 'Unit 3.5: Energy Transfers in & Between Organisms',
      subtitle: 'Photosynthesis (LDR/LIR), Respiration (Glycolysis, Krebs, Oxidative Phosphorylation), Energy & Ecosystems, Nutrient Cycles',
      color: 'from-amber-500/20 to-yellow-600/10 border-amber-400/30 text-amber-300',
      examPaper: 'A-Level Paper 1, 2 & 3',
    },
    '3.6': {
      title: 'Unit 3.6: Organisms Respond to Changes in Environments',
      subtitle: 'Pacinian Corpuscle, Rods & Cones, Nervous Coordination & Action Potentials, Muscle Contraction, Homeostasis & Kidney',
      color: 'from-violet-600/20 to-fuchsia-600/10 border-violet-500/30 text-violet-400',
      examPaper: 'A-Level Paper 1, 2 & 3',
    },
    '3.7': {
      title: 'Unit 3.7: Genetics, Populations, Evolution & Ecosystems',
      subtitle: 'Dihybrid Crosses, Autosomal Linkage & Epistasis, Hardy-Weinberg, Speciation (Allopatric/Sympatric)',
      color: 'from-teal-600/20 to-emerald-600/10 border-teal-500/30 text-teal-400',
      examPaper: 'A-Level Paper 1, 2 & 3',
    },
    '3.8': {
      title: 'Unit 3.8: The Control of Gene Expression',
      subtitle: 'Frameshift Mutations, Totipotent/Pluripotent Stem Cells, Epigenetics & Cancer, PCR & Gene Technologies',
      color: 'from-pink-600/20 to-rose-600/10 border-pink-500/30 text-pink-400',
      examPaper: 'A-Level Paper 1, 2 & 3',
    },
  };

  const relevantUnits: AqaUnit[] =
    yearGroup === 'year13'
      ? ['3.5', '3.6', '3.7', '3.8']
      : ['3.1', '3.2', '3.3', '3.4'];

  const filteredTopics = specTopics.filter((topic) => {
    const matchesYearGroup = relevantUnits.includes(topic.unit);
    const matchesUnit = selectedUnit === 'all' || topic.unit === selectedUnit;
    const matchesSearch =
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.specCode.includes(searchTerm) ||
      topic.keyConcepts.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
      topic.chiefExaminerTraps.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesYearGroup && matchesUnit && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 uppercase tracking-wider">
                {yearGroup === 'year13' ? 'AQA Specification 7402' : 'AQA Specification 7401'}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {yearGroup === 'year13' ? 'A2 Level Biology (Units 3.5 – 3.8)' : 'AS Level Biology (Units 3.1 – 3.4)'}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
              {yearGroup === 'year13'
                ? 'Full AQA Year 13 (A2) Specification Map & Examiner Trap Directory'
                : 'Full AQA Year 12 (AS) Specification Map & Examiner Trap Directory'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              {yearGroup === 'year13'
                ? 'Every topic from the AQA 7402 Year 13 syllabus mapped out with core learning criteria, official Chief Examiner report traps, and direct links to peer mark scheme decoding workshops.'
                : 'Every topic from the AQA 7401 syllabus mapped out with core learning criteria, official Chief Examiner report traps, and direct links to peer mark scheme decoding workshops and self-marking interactive revision labs.'}
            </p>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center">
              <span className="text-2xs uppercase tracking-wider text-slate-400 font-bold block">
                {yearGroup === 'year13' ? 'Total A2 Topics' : 'Total AS Topics'}
              </span>
              <span className="text-xl font-bold font-mono text-emerald-400">
                {filteredTopics.length} Units
              </span>
            </div>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center">
              <span className="text-2xs uppercase tracking-wider text-slate-400 font-bold block">
                Target Exams
              </span>
              <span className="text-sm font-bold text-white font-mono">
                {yearGroup === 'year13' ? 'Papers 1, 2 & 3' : 'Papers 1 & 2'}
              </span>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Unit Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedUnit('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedUnit === 'all'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {yearGroup === 'year13' ? 'All 4 A2 Units' : 'All 4 AS Units'}
            </button>
            {relevantUnits.map((u) => (
              <button
                key={u}
                onClick={() => setSelectedUnit(u)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1 ${
                  selectedUnit === u
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>Unit {u}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search syllabus term or trap..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
            />
          </div>
        </div>
      </div>

      {/* Unit Overview Header Cards (when specific unit selected) */}
      {selectedUnit !== 'all' && (
        <div className={`p-4 rounded-2xl border bg-gradient-to-r ${unitMetadata[selectedUnit].color}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-black text-white">{unitMetadata[selectedUnit].title}</h2>
              <p className="text-xs text-slate-200 mt-0.5">{unitMetadata[selectedUnit].subtitle}</p>
            </div>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-black/40 text-slate-200 self-start sm:self-auto">
              {unitMetadata[selectedUnit].examPaper}
            </span>
          </div>
        </div>
      )}

      {/* Topics List Grid */}
      <div className="space-y-4">
        {filteredTopics.map((topic) => (
          <div
            key={topic.specCode}
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 sm:p-6 transition shadow-sm space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-start space-x-3">
                <span className="px-2 py-1 rounded-lg bg-slate-800 font-mono text-xs font-extrabold text-rose-400 border border-slate-700">
                  {topic.specCode}
                </span>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-white text-base sm:text-lg">{topic.title}</h3>
                    <span className="text-2xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      Unit {topic.unit}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">AQA Specification 7401 Required Content</span>
                </div>
              </div>

              {/* Quick Launch Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => onSelectUnitQuestion(topic.unit, topic.specCode)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center transition"
                  title="Open exam question in Strategy 1"
                >
                  <FileCheck className="w-3.5 h-3.5 mr-1.5" />
                  <span>Workshop Q</span>
                </button>

                <button
                  onClick={() => onOpenRevisionModule(topic.specCode)}
                  className="px-3 py-1.5 rounded-lg bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 border border-teal-500/30 text-xs font-semibold flex items-center transition"
                  title="Launch Strategy 2 Interactive Revision"
                >
                  <Layers className="w-3.5 h-3.5 mr-1.5" />
                  <span>Self-Mark Lab</span>
                </button>

                <button
                  onClick={() => onOpenAIGenerator(topic.title, topic.specCode)}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold flex items-center transition"
                  title="Generate new AI flawed model answer for this exact topic"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  <span>AI Generator</span>
                </button>

                {onOpenPrintPack && (
                  <button
                    onClick={() => onOpenPrintPack(topic.specCode)}
                    className="px-3 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center transition"
                    title={`Generate printable pack for ${topic.specCode}`}
                  >
                    <Printer className="w-3.5 h-3.5 mr-1.5" />
                    <span>Print Pack</span>
                  </button>
                )}
              </div>
            </div>

            {/* Core Concepts & Examiner Traps side-by-side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
              {/* Core Concepts */}
              <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-slate-300 uppercase tracking-wider flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-400" />
                  Core Specification Concepts (AQA 7401):
                </span>
                <ul className="space-y-1.5 pl-1 text-slate-300 leading-relaxed">
                  {topic.keyConcepts.map((concept, ci) => (
                    <li key={ci} className="flex items-start space-x-2">
                      <span className="text-slate-500 mt-1">•</span>
                      <span>{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chief Examiner Traps */}
              <div className="lg:col-span-5 bg-rose-950/20 p-4 rounded-xl border border-rose-900/40 space-y-2">
                <span className="font-bold text-rose-300 uppercase tracking-wider flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-1.5 text-rose-400" />
                  Chief Examiner Traps & Banned Phrases:
                </span>
                <ul className="space-y-1.5 pl-1 text-rose-200 leading-relaxed">
                  {topic.chiefExaminerTraps.map((trap, ti) => (
                    <li key={ti} className="flex items-start space-x-2">
                      <span className="text-rose-400 mt-0.5 font-bold">✗</span>
                      <span>{trap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
