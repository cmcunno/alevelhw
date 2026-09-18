import React, { useState } from 'react';
import {
  INITIAL_FLAWED_QUESTIONS,
  INITIAL_INTERACTIVE_MODULES,
  INITIAL_STUDENT_SUBMISSIONS,
  AQA_7401_SPECIFICATION_MAP,
} from './data/curriculumData';
import { ALL_AQA_SUBSECTION_PACKS } from './data/subsectionPacks';
import {
  ActiveTab,
  AqaUnit,
  FlawedQuestion,
  InteractiveRevisionModule,
  StudentSubmission,
  YearGroup,
} from './types';
import { Header } from './components/Header';
import { AqaSpecificationBrowser } from './components/SpecificationMap/AqaSpecificationBrowser';
import { PeerMarkingWorkshop } from './components/Strategy1/PeerMarkingWorkshop';
import { LiveProjectorMode } from './components/Strategy1/LiveProjectorMode';
import { ClassSubmissionsBoard } from './components/Strategy1/ClassSubmissionsBoard';
import { SelfMarkingLab } from './components/Strategy2/SelfMarkingLab';
import { PrintableView } from './components/Print/PrintableView';
import { AIQuestionGeneratorModal } from './components/AIQuestionGeneratorModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('spec_map');
  const [yearGroup, setYearGroup] = useState<YearGroup>('year12');
  const [questions, setQuestions] = useState<FlawedQuestion[]>(ALL_AQA_SUBSECTION_PACKS);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(
    ALL_AQA_SUBSECTION_PACKS[0].id
  );
  const [printSpecCode, setPrintSpecCode] = useState<string>('3.1.1');
  const [submissions, setSubmissions] = useState<StudentSubmission[]>(
    INITIAL_STUDENT_SUBMISSIONS
  );
  const [interactiveModules] = useState<InteractiveRevisionModule[]>(
    INITIAL_INTERACTIVE_MODULES
  );

  // Modals & Projector
  const [isProjectorOpen, setIsProjectorOpen] = useState<boolean>(false);
  const [isAIGeneratorOpen, setIsAIGeneratorOpen] = useState<boolean>(false);

  // Handlers
  const handleStudentSubmit = (
    submission: Omit<StudentSubmission, 'id' | 'submittedAt'>
  ) => {
    const newSub: StudentSubmission = {
      ...submission,
      id: `sub-${Date.now()}`,
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isFlaggedForProjection: true,
    };
    setSubmissions((prev) => [newSub, ...prev]);
  };

  const handleAddQuestion = (newQ: FlawedQuestion) => {
    setQuestions((prev) => [newQ, ...prev]);
    setSelectedQuestionId(newQ.id);
  };

  const handleProjectSubmission = (sub: StudentSubmission) => {
    setSelectedQuestionId(sub.questionId);
    setIsProjectorOpen(true);
  };

  const handleSelectUnitQuestion = (unit: AqaUnit, specCode: string) => {
    // Find question matching this specCode or unit
    const matchingQ =
      questions.find((q) => q.specCode.startsWith(specCode)) ||
      questions.find((q) => q.aqaUnit === unit) ||
      questions[0];
    setSelectedQuestionId(matchingQ.id);
    setActiveTab('strategy1');
  };

  const handleOpenRevisionModule = (specCode: string) => {
    setActiveTab('strategy2');
  };

  const handleOpenAIGeneratorForTopic = (topicTitle: string, specCode: string) => {
    setIsAIGeneratorOpen(true);
  };

  const handleOpenPrintPack = (specCode: string) => {
    setPrintSpecCode(specCode);
    setActiveTab('printable_pdf');
  };

  const handleYearGroupChange = (newYear: YearGroup) => {
    setYearGroup(newYear);
    if (newYear === 'year13') {
      const firstY13 = questions.find((q) =>
        q.aqaUnit === '3.5' || q.aqaUnit === '3.6' || q.aqaUnit === '3.7' || q.aqaUnit === '3.8'
      );
      if (firstY13) {
        setSelectedQuestionId(firstY13.id);
        setPrintSpecCode(firstY13.specCode);
      } else {
        setPrintSpecCode('3.5.1');
      }
    } else {
      const firstY12 = questions.find((q) =>
        q.aqaUnit === '3.1' || q.aqaUnit === '3.2' || q.aqaUnit === '3.3' || q.aqaUnit === '3.4'
      );
      if (firstY12) {
        setSelectedQuestionId(firstY12.id);
        setPrintSpecCode(firstY12.specCode);
      } else {
        setPrintSpecCode('3.1.1');
      }
    }
  };

  const currentQuestion =
    questions.find((q) => q.id === selectedQuestionId) || questions[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white print:bg-white print:text-black print:min-h-0 print:p-0 print:m-0">
      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        yearGroup={yearGroup}
        setYearGroup={handleYearGroupChange}
        onOpenProjector={() => setIsProjectorOpen(true)}
        onOpenAIGenerator={() => setIsAIGeneratorOpen(true)}
        onQuickPrint={() => setActiveTab('printable_pdf')}
        questionCount={questions.length}
        submissionCount={submissions.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 print:p-0 print:m-0 print:max-w-none print:w-full print:bg-white">
        {activeTab === 'spec_map' && (
          <AqaSpecificationBrowser
            specTopics={AQA_7401_SPECIFICATION_MAP}
            yearGroup={yearGroup}
            onSelectUnitQuestion={handleSelectUnitQuestion}
            onOpenRevisionModule={handleOpenRevisionModule}
            onOpenAIGenerator={handleOpenAIGeneratorForTopic}
            onOpenPrintPack={handleOpenPrintPack}
          />
        )}

        {activeTab === 'strategy1' && (
          <PeerMarkingWorkshop
            questions={questions}
            selectedQuestionId={selectedQuestionId}
            yearGroup={yearGroup}
            onSelectQuestion={setSelectedQuestionId}
            onSubmitStudentWork={handleStudentSubmit}
            onOpenProjector={() => setIsProjectorOpen(true)}
          />
        )}

        {activeTab === 'strategy2' && (
          <SelfMarkingLab modules={interactiveModules} yearGroup={yearGroup} />
        )}

        {activeTab === 'teacher_answers' && (
          <ClassSubmissionsBoard
            questions={questions}
            submissions={submissions}
            onProjectSubmission={handleProjectSubmission}
            onSelectQuestion={setSelectedQuestionId}
          />
        )}

        {activeTab === 'printable_pdf' && (
          <PrintableView
            questions={questions}
            initialSpecCode={printSpecCode}
            yearGroup={yearGroup}
          />
        )}
      </main>

      {/* Classroom Projector Mode (5-7 Mins Live Marking) */}
      {isProjectorOpen && (
        <LiveProjectorMode
          question={currentQuestion}
          onClose={() => setIsProjectorOpen(false)}
          onNextQuestion={() => {
            const curIdx = questions.findIndex((q) => q.id === selectedQuestionId);
            const nextIdx = (curIdx + 1) % questions.length;
            setSelectedQuestionId(questions[nextIdx].id);
          }}
        />
      )}

      {/* AI Question & Flawed Answer Generator Modal */}
      <AIQuestionGeneratorModal
        isOpen={isAIGeneratorOpen}
        onClose={() => setIsAIGeneratorOpen(false)}
        onAddQuestion={handleAddQuestion}
      />
    </div>
  );
}
