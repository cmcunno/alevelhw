import React, { useState, useMemo, useEffect } from 'react';
import {
  Printer,
  FileCheck,
  Award,
  Layers,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Filter,
  Search,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Info
} from 'lucide-react';
import { FlawedQuestion, AqaUnit, YearGroup } from '../../types';
import {
  ALL_AQA_SUBSECTION_PACKS,
  AQA_SUBSECTIONS_METADATA,
  SubsectionInfo,
} from '../../data/subsectionPacks';
import { AQA_7401_SPECIFICATION_MAP } from '../../data/curriculumData';

interface PrintableViewProps {
  questions?: FlawedQuestion[];
  initialSpecCode?: string;
  yearGroup?: YearGroup;
}

export const PrintableView: React.FC<PrintableViewProps> = ({
  questions = [],
  initialSpecCode,
  yearGroup = 'year12',
}) => {
  const [packType, setPackType] = useState<'student_worksheet' | 'teacher_pack' | 'combined'>('student_worksheet');
  const [selectedUnit, setSelectedUnit] = useState<AqaUnit | 'all'>('all');
  const [selectedSpecCode, setSelectedSpecCode] = useState<string>(
    initialSpecCode || (yearGroup === 'year13' ? '3.5.1' : '3.1.1')
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [includeSpecBrief, setIncludeSpecBrief] = useState<boolean>(true);

  const relevantUnits: AqaUnit[] =
    yearGroup === 'year13'
      ? ['3.5', '3.6', '3.7', '3.8']
      : ['3.1', '3.2', '3.3', '3.4'];

  useEffect(() => {
    if (initialSpecCode) {
      setSelectedSpecCode(initialSpecCode);
    } else {
      setSelectedSpecCode(yearGroup === 'year13' ? '3.5.1' : '3.1.1');
    }
    setSelectedUnit('all');
  }, [initialSpecCode, yearGroup]);

  // Combine built-in subsection packs with any custom questions
  const allAvailablePacks: FlawedQuestion[] = useMemo(() => {
    const packsMap = new Map<string, FlawedQuestion>();

    ALL_AQA_SUBSECTION_PACKS.forEach((pack) => {
      packsMap.set(pack.specCode, pack);
    });

    questions.forEach((q) => {
      if (!packsMap.has(q.specCode)) {
        packsMap.set(q.specCode, q);
      }
    });

    return Array.from(packsMap.values());
  }, [questions]);

  // Filtered list of subsection metadata for navigation
  const filteredSubsections = useMemo(() => {
    return AQA_SUBSECTIONS_METADATA.filter((sub) => {
      const matchesYear = relevantUnits.includes(sub.unit);
      const matchesUnit = selectedUnit === 'all' || sub.unit === selectedUnit;
      const matchesSearch =
        searchQuery === '' ||
        sub.specCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.fullTitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesYear && matchesUnit && matchesSearch;
    });
  }, [selectedUnit, searchQuery, relevantUnits]);

  // Questions to display in printable view
  const packsToPrint: FlawedQuestion[] = useMemo(() => {
    if (selectedSpecCode === 'all') {
      if (selectedUnit === 'all') {
        return allAvailablePacks;
      }
      return allAvailablePacks.filter((p) => p.aqaUnit === selectedUnit);
    }
    const singlePack = allAvailablePacks.find((p) => p.specCode === selectedSpecCode);
    return singlePack ? [singlePack] : [allAvailablePacks[0]];
  }, [selectedSpecCode, selectedUnit, allAvailablePacks]);

  const handleTriggerPrint = () => {
    window.print();
  };

  const getTopicSpecData = (specCode: string) => {
    return AQA_7401_SPECIFICATION_MAP.find((t) => t.specCode === specCode);
  };

  return (
    <div className="space-y-6 print:space-y-0 print:p-0 print:m-0 print:bg-white">
      {/* On-Screen Control Panel (Hidden during print) */}
      <div className="no-print bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        {/* Header & Main Print Trigger */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <Printer className="w-5 h-5" />
              </span>
              <span className="px-2.5 py-0.5 rounded text-2xs font-mono font-bold uppercase bg-rose-500/20 text-rose-400 border border-rose-500/30">
                {yearGroup === 'year13' ? 'AQA Specification 7402' : 'AQA Specification 7401'}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {yearGroup === 'year13' ? 'Year 13 (A2) Biology' : 'Year 12 (AS) Biology'}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1.5">
              Printable Subsection Packs & PDF Dissemination
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Generate isolated printable packs for every single subsection (
              {yearGroup === 'year13' ? '3.5.1 through 3.8.3' : '3.1.1 through 3.4.7'}
              ) or batch print entire unit syllabus packs. Perfectly formatted for standard A4 printing and PDF export.
            </p>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={handleTriggerPrint}
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition shadow-lg shadow-emerald-600/30 active:scale-95"
            >
              <Printer className="w-4 h-4 mr-2" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>

        {/* Filters & Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Pack Type Edition Selector */}
          <div className="md:col-span-6 flex flex-col space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Pack Format Edition:</label>
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setPackType('student_worksheet')}
                className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  packType === 'student_worksheet'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Student Worksheet
              </button>
              <button
                onClick={() => setPackType('teacher_pack')}
                className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  packType === 'teacher_pack'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Teacher Mark Scheme
              </button>
              <button
                onClick={() => setPackType('combined')}
                className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  packType === 'combined'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Combined Pack
              </button>
            </div>
          </div>

          {/* Unit Scope Filter */}
          <div className="md:col-span-6 flex flex-col space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Filter by Unit Scope:</label>
            <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setSelectedUnit('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedUnit === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All {yearGroup === 'year13' ? 'Year 13' : 'Year 12'} Units ({filteredSubsections.length} Packs)
              </button>
              {relevantUnits.map((unit) => (
                <button
                  key={unit}
                  onClick={() => setSelectedUnit(unit)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    selectedUnit === unit
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Unit {unit}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Subsection Selector Bar */}
        <div className="space-y-3 pt-2 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Choose Subsection Pack to Print:
              </span>
              <span className="text-2xs font-mono text-slate-400">
                ({filteredSubsections.length} available)
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <label className="flex items-center space-x-1.5 text-xs text-slate-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeSpecBrief}
                  onChange={(e) => setIncludeSpecBrief(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-950 text-emerald-500 focus:ring-0"
                />
                <span>Include Spec Guidance & Keyword Traps</span>
              </label>

              <button
                onClick={() => setSelectedSpecCode('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition ${
                  selectedSpecCode === 'all'
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {selectedUnit === 'all'
                  ? 'Batch Print All 22 Subsections'
                  : `Batch Print All Unit ${selectedUnit} Subsections`}
              </button>
            </div>
          </div>

          {/* Search Subsections Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subsections (e.g. 3.1.1, Lipids, Co-transport, Heart, Splicing)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          {/* Subsection Chips Carousel / Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 max-h-56 overflow-y-auto pr-1">
            {filteredSubsections.map((sub) => {
              const isSelected = selectedSpecCode === sub.specCode;
              return (
                <button
                  key={sub.specCode}
                  onClick={() => setSelectedSpecCode(sub.specCode)}
                  className={`text-left p-2.5 rounded-xl border transition flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-600/20 border-emerald-500 text-white ring-1 ring-emerald-500 shadow-md'
                      : 'bg-slate-950/80 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-2xs font-extrabold px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-rose-400">
                      {sub.specCode}
                    </span>
                    <span className="text-3xs text-slate-500">Unit {sub.unit}</span>
                  </div>
                  <div className="font-semibold text-xs truncate leading-snug" title={sub.fullTitle}>
                    {sub.shortTitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Subsection Status Summary */}
        <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2 text-slate-300">
            <Info className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              Currently Printing:{' '}
              <strong className="text-white">
                {selectedSpecCode === 'all'
                  ? selectedUnit === 'all'
                    ? 'All 22 Subsections of AQA AS Biology (Units 3.1 – 3.4)'
                    : `All Subsections in Unit ${selectedUnit}`
                  : `${selectedSpecCode}: ${
                      allAvailablePacks.find((p) => p.specCode === selectedSpecCode)?.title || selectedSpecCode
                    }`}
              </strong>
            </span>
          </div>

          <div className="flex items-center space-x-2 text-slate-400">
            <span>
              Total Sheets in Queue: <strong className="text-emerald-400 font-mono">{packsToPrint.length}</strong>
            </span>
            <span>•</span>
            <span className="capitalize">{packType.replace('_', ' ')}</span>
          </div>
        </div>
      </div>

      {/* Printable Sheet Canvas */}
      <div className="space-y-12 print:space-y-0 print:p-0 print:m-0 print:bg-white print-canvas-wrapper">
        {packsToPrint.map((q, idx) => {
          const specData = getTopicSpecData(q.specCode);

          // Student Worksheet Sheet
          const renderStudentSheet = (isPageBreak: boolean, keySuffix: string) => (
            <div
              key={`${q.id || q.specCode}-${keySuffix}`}
              className={`bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto border border-slate-200 print-sheet-card flex flex-col justify-between ${
                isPageBreak ? 'print-page-break' : ''
              }`}
            >
              {/* Top Sections Wrapper */}
              <div>
                {/* Compact Header for A4 Print - Eliminates Wasted Top-Right Space */}
                <div className="border-b-2 border-slate-900 pb-2 mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="flex-1 pr-2">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="font-mono text-2xs font-extrabold uppercase tracking-wider px-1.5 py-0.5 bg-rose-700 text-white rounded">
                          {q.examBoard || 'AQA'} {q.aqaUnit.startsWith('3.5') || q.aqaUnit.startsWith('3.6') || q.aqaUnit.startsWith('3.7') || q.aqaUnit.startsWith('3.8') ? '7402' : '7401'}
                        </span>
                        <span className="font-mono text-2xs font-bold px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded">
                          Sec {q.specCode} • Unit {q.aqaUnit}
                        </span>
                        <span className="text-2xs font-bold text-slate-600 uppercase tracking-tight">
                          {q.topic}
                        </span>
                        <span className="text-2xs font-semibold text-slate-500">
                          • {q.aoLevel} • Max: {q.totalMarks} marks
                        </span>
                      </div>
                      <h1 className="text-base sm:text-lg print:text-base font-black text-slate-900 tracking-tight leading-snug">
                        {q.subject || 'AQA Biology'}: {q.specCode} Peer Mark Scheme Decoding Worksheet
                      </h1>
                    </div>

                    <div className="border border-slate-400 px-3 py-1.5 rounded-lg text-2xs font-medium grid grid-cols-3 sm:flex sm:flex-col gap-1 min-w-[220px] bg-slate-50/70 print:bg-transparent">
                      <div><span className="font-semibold text-slate-600">Name:</span> <span className="inline-block border-b border-slate-400 w-24"></span></div>
                      <div><span className="font-semibold text-slate-600">Class/Tgt:</span> <span className="inline-block border-b border-slate-400 w-20"></span></div>
                      <div><span className="font-semibold text-slate-600">Date:</span> <span className="inline-block border-b border-slate-400 w-24"></span></div>
                    </div>
                  </div>
                </div>

                {/* Optional Section: Chief Examiner Spec Guidance & Keyword Traps Header */}
                {includeSpecBrief && specData && (
                  <div className="mb-2 p-2 rounded-lg bg-slate-50 border border-slate-300 avoid-break text-2xs space-y-1 print:mb-1.5 print:p-1.5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-0.5">
                      <span className="font-bold text-slate-800 uppercase tracking-wider flex items-center">
                        <BookOpen className="w-3 h-3 mr-1 text-slate-600" />
                        Specification Guidance & Examiner Traps ({q.specCode})
                      </span>
                      <span className="font-mono text-3xs text-slate-500">AQA 7401 Reference</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-0.5">
                      <div>
                        <span className="font-bold text-slate-700 block mb-0.5">
                          Core Concepts Required:
                        </span>
                        <ul className="list-disc pl-3 space-y-0.5 text-slate-700 leading-tight">
                          {specData.keyConcepts.slice(0, 2).map((concept, ci) => (
                            <li key={ci}>{concept}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-rose-50/60 p-1 rounded border border-rose-200">
                        <span className="font-bold text-rose-800 block mb-0.5">
                          Chief Examiner Trap Warnings:
                        </span>
                        <ul className="space-y-0.5 text-rose-900 leading-tight">
                          {specData.chiefExaminerTraps.slice(0, 2).map((trap, ti) => (
                            <li key={ti} className="flex items-start space-x-1">
                              <span className="text-rose-600 font-bold">✗</span>
                              <span>{trap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 1: The Official Exam Question */}
                <div className="mb-2 avoid-break print:mb-1.5">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-2xs font-bold uppercase tracking-wider text-slate-700">
                      AQA Exam-Style Question:
                    </span>
                    <span className="text-2xs font-bold text-slate-900 font-mono">
                      [{q.totalMarks} Marks]
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-300 font-serif text-sm print:text-xs text-slate-900 leading-relaxed">
                    {q.questionText}
                  </div>
                </div>

                {/* Flawed Model Answer Box */}
                <div className="mb-2 avoid-break print:mb-1.5">
                  <span className="text-2xs font-bold uppercase tracking-wider text-rose-700 block mb-0.5">
                    Flawed Student Answer (Annotate in Margin & Circle Misconceptions):
                  </span>
                  <div className="border border-rose-400 bg-rose-50/40 p-2 rounded-lg font-serif text-sm print:text-xs text-slate-900 leading-relaxed">
                    "{q.flawedAnswer}"
                  </div>
                </div>

                {/* Task 1: Mark Award & Justification */}
                <div className="mb-2 border border-slate-300 p-2 rounded-lg avoid-break space-y-1 print:p-1.5 print:mb-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xs font-bold uppercase text-slate-900">
                      Task 1: Mark Award & Examiner Justification
                    </span>
                    <div className="flex items-center space-x-1.5 text-2xs font-bold">
                      <span>Mark:</span>
                      <span className="inline-block w-12 border-b-2 border-slate-900 text-center font-mono">
                        ___ / {q.totalMarks}
                      </span>
                    </div>
                  </div>

                  <div className="text-2xs">
                    <p className="text-3xs italic text-slate-400/70 print:text-slate-400/60 leading-tight mb-1 mt-0 select-none">
                      Why were marks withheld? Identify missing specification keywords or misconceptions:
                    </p>
                    <div className="space-y-3 pt-0.5">
                      <div className="border-b border-dashed border-slate-300 h-3.5" />
                      <div className="border-b border-dashed border-slate-300 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Task 2: 100% Exemplar Rewrite Ruled Lines with Word Bank (Flexibly expands to fill space) */}
              <div className="avoid-break flex-1 flex flex-col space-y-1 my-1 min-h-[120px] print:min-h-0">
                <div className="flex items-center justify-between">
                  <span className="text-2xs font-bold uppercase text-emerald-800">
                    Task 2: Rewrite a 100% Exemplar Answer (incorporating all keywords)
                  </span>
                </div>

                {/* Word Bank Chips */}
                <div className="p-1 bg-slate-100 rounded border border-slate-300 flex flex-wrap gap-1 items-center text-2xs font-semibold text-slate-700">
                  <span className="text-slate-500 font-bold mr-1">Word Bank:</span>
                  {q.keyTerms.map((term, i) => (
                    <span
                      key={i}
                      className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-3xs text-slate-800"
                    >
                      {term}
                    </span>
                  ))}
                </div>

                {/* Blank ruled space for handwriting in print - Fills remaining sheet height */}
                <div className="flex-1 min-h-[90px] border border-slate-300 rounded-lg print-ruled-lines p-2 font-serif text-xs leading-[21px]" />
              </div>

              {/* Purple-Pen Self-Assessment Checklist - Strictly anchored at the foot of the page */}
              <div className="mt-auto p-2 bg-slate-50 rounded-lg border border-slate-200 avoid-break text-2xs text-slate-600 flex items-center justify-between print:py-1.5">
                <span className="font-semibold text-purple-900">Purple-Pen Self-Assessment:</span>
                <div className="flex space-x-3 font-medium text-3xs sm:text-2xs">
                  <label className="flex items-center space-x-1 cursor-pointer">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-0" />
                    <span>Zero banned misconceptions</span>
                  </label>
                  <label className="flex items-center space-x-1 cursor-pointer">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-0" />
                    <span>All key terms included</span>
                  </label>
                  <label className="flex items-center space-x-1 cursor-pointer">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-0" />
                    <span>Purple-pen completed</span>
                  </label>
                </div>
              </div>
            </div>
          );

          // Teacher Master Mark Scheme Sheet
          const renderTeacherSheet = (isPageBreak: boolean, keySuffix: string) => (
            <div
              key={`${q.id || q.specCode}-${keySuffix}`}
              className={`bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto border border-slate-200 print-sheet-card flex flex-col justify-between ${
                isPageBreak ? 'print-page-break' : ''
              }`}
            >
              {/* Top Sections Wrapper */}
              <div>
                {/* Header */}
                <div className="border-b-2 border-slate-900 pb-2 mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="flex-1 pr-2">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="font-mono text-2xs font-extrabold uppercase tracking-wider px-1.5 py-0.5 bg-rose-700 text-white rounded">
                          {q.examBoard || 'AQA'} {q.aqaUnit.startsWith('3.5') || q.aqaUnit.startsWith('3.6') || q.aqaUnit.startsWith('3.7') || q.aqaUnit.startsWith('3.8') ? '7402' : '7401'}
                        </span>
                        <span className="font-mono text-2xs font-bold px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded">
                          Sec {q.specCode} • Unit {q.aqaUnit}
                        </span>
                        <span className="text-2xs font-bold text-slate-600 uppercase tracking-tight">
                          {q.topic}
                        </span>
                        <span className="text-2xs font-semibold text-slate-500">
                          • {q.aoLevel} • Max: {q.totalMarks} marks
                        </span>
                      </div>
                      <h1 className="text-base sm:text-lg print:text-base font-black text-slate-900 tracking-tight leading-snug">
                        {q.subject || 'AQA Biology'}: {q.specCode} Teacher Master Mark Scheme Pack
                      </h1>
                    </div>

                    <div className="bg-slate-100 border border-slate-300 px-2.5 py-1.5 rounded text-2xs text-slate-700 font-semibold self-start">
                      Examiner Master Copy
                    </div>
                  </div>
                </div>

                {/* Question Text */}
                <div className="mb-2 avoid-break">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-2xs font-bold uppercase tracking-wider text-slate-700">
                      AQA Exam-Style Question:
                    </span>
                    <span className="text-2xs font-bold text-slate-900 font-mono">
                      [{q.totalMarks} Marks]
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-300 font-serif text-sm print:text-xs text-slate-900 leading-relaxed">
                    {q.questionText}
                  </div>
                </div>

                {/* Flawed Answer Breakdown with Examiner Annotations */}
                <div className="mb-2 avoid-break border border-slate-300 rounded-lg p-2 bg-slate-50 text-2xs">
                  <span className="font-bold uppercase tracking-wider text-rose-700 block mb-0.5">
                    Flawed Answer Breakdown & Identified Misconceptions:
                  </span>
                  <p className="font-serif text-xs text-slate-800 italic mb-1.5">
                    "{q.flawedAnswer}"
                  </p>

                  <div className="space-y-1">
                    {q.flawedAnnotations.map((anno, i) => (
                      <div
                        key={i}
                        className="p-1 rounded bg-rose-50 border border-rose-200 text-slate-800 leading-snug text-3xs"
                      >
                        <strong className="text-rose-800">"{anno.phrase}"</strong> ({anno.issueType}):{' '}
                        {anno.explanation}
                      </div>
                    ))}
                  </div>

                  <div className="mt-1.5 text-2xs font-semibold text-slate-700">
                    Actual Mark Awarded by Chief Examiner: <strong>{q.examinerVerdict.marksAwarded} / {q.totalMarks}</strong>.
                    {' '}{q.examinerVerdict.summary}
                  </div>
                </div>

                {/* Official Mark Scheme Grid */}
                <div className="mb-2 avoid-break border border-slate-900 rounded-lg overflow-hidden">
                  <div className="bg-slate-900 text-white px-2.5 py-0.5 text-2xs font-bold uppercase tracking-wider">
                    Official AQA Examiner Mark Scheme Grid ({q.specCode})
                  </div>
                  <table className="w-full text-2xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-300 font-bold text-slate-700 text-3xs">
                        <th className="p-1 w-10">Mark</th>
                        <th className="p-1">Indicative Criteria & Key Phrasing</th>
                        <th className="p-1 w-36">Examiner Rejection / Traps</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {q.officialMarkScheme.map((mark) => (
                        <tr key={mark.markCode}>
                          <td className="p-1 font-mono font-bold align-top bg-slate-50 text-3xs">
                            {mark.markCode}
                          </td>
                          <td className="p-1 align-top text-3xs">
                            <div className="font-semibold text-slate-900 leading-tight">{mark.criteria}</div>
                            <div className="text-3xs text-slate-600 mt-0.5">
                              Creditable phrases: {mark.indicativePhrases.join('; ')}
                            </div>
                          </td>
                          <td className="p-1 align-top text-rose-700 bg-rose-50/40 text-3xs">
                            {mark.rejectOrErrors || 'None specified'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 100% Exemplar Model Answer */}
                <div className="mb-2 avoid-break border border-emerald-600 rounded-lg p-2 bg-emerald-50/30">
                  <span className="text-2xs font-bold uppercase tracking-wider text-emerald-800 block mb-0.5">
                    Exemplar 100% Model Rewrite (Full {q.totalMarks}/{q.totalMarks} Marks):
                  </span>
                  <p className="font-serif text-xs text-slate-900 leading-relaxed">
                    "{q.exemplarRewrite}"
                  </p>
                </div>
              </div>

              {/* Classroom Delivery Notes - Pinned to the foot */}
              <div className="mt-auto avoid-break p-2 bg-amber-50 border border-amber-300 rounded-lg text-2xs text-amber-900 space-y-0.5">
                <strong>Classroom Live Marking Delivery Note (5-7 Mins):</strong>
                <p className="leading-snug">{q.teacherNotes}</p>
                <p className="font-medium text-amber-800">
                  Cold-Call: {q.recommendedColdCall}
                </p>
              </div>
            </div>
          );

          if (packType === 'student_worksheet') {
            return renderStudentSheet(idx > 0, 'student');
          }

          if (packType === 'teacher_pack') {
            return renderTeacherSheet(idx > 0, 'teacher');
          }

          // Combined: Render student sheet (Page 1) followed by teacher sheet (Page 2)
          return (
            <React.Fragment key={q.id || q.specCode}>
              {renderStudentSheet(idx > 0, 'student')}
              {renderTeacherSheet(true, 'teacher')}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
