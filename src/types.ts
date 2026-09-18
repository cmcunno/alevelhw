export type YearGroup = 'year12' | 'year13';

export type AqaUnit = '3.1' | '3.2' | '3.3' | '3.4' | '3.5' | '3.6' | '3.7' | '3.8';

export interface AqaSpecificationTopic {
  specCode: string;
  unit: AqaUnit;
  title: string;
  keyConcepts: string[];
  chiefExaminerTraps: string[];
}

export interface MarkSchemeCriterion {
  markCode: string;
  criteria: string;
  indicativePhrases: string[];
  rejectOrErrors?: string;
}

export interface FlawedAnnotation {
  phrase: string;
  issueType: 'misconception' | 'missing_keyword' | 'poor_alignment';
  explanation: string;
  markLost: number;
  suggestedCorrection: string;
}

export interface FlawedQuestion {
  id: string;
  title: string;
  examBoard: 'AQA';
  specCode: string;
  aqaUnit: AqaUnit;
  subject: string;
  topic: string;
  aoLevel: string;
  totalMarks: number;
  questionText: string;
  contextNote?: string;
  flawedAnswer: string;
  officialMarkScheme: MarkSchemeCriterion[];
  flawedAnnotations: FlawedAnnotation[];
  examinerVerdict: {
    marksAwarded: number;
    maxMarks: number;
    summary: string;
  };
  exemplarRewrite: string;
  keyTerms: string[];
  teacherNotes: string;
  recommendedColdCall: string;
}

export interface StudentSubmission {
  id: string;
  studentName: string;
  questionId: string;
  awardedMarks: number;
  annotatedNotes: string;
  studentRewrite: string;
  submittedAt: string;
  isFlaggedForProjection?: boolean;
}

// Strategy 2 Types
export interface CategorizationItem {
  id: string;
  text: string;
  correctCategory: string;
  diagnosticHint: string;
}

export interface CategorizationModule {
  id: string;
  type: 'categorization';
  title: string;
  topic: string;
  specCode: string;
  aqaUnit: AqaUnit;
  examBoard: 'AQA';
  instructions: string;
  categories: string[];
  items: CategorizationItem[];
}

export interface DiagramHotspot {
  id: string;
  label: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  options: string[];
  correct: string;
  diagnosticHint: string;
}

export interface DiagramModule {
  id: string;
  type: 'diagram';
  title: string;
  topic: string;
  specCode: string;
  aqaUnit: AqaUnit;
  examBoard: 'AQA';
  diagramKind: 'co_transport_ileum' | 'cardiac_cycle' | 'fish_gill_exchange' | 'ultracentrifugation';
  instructions: string;
  hotspots: DiagramHotspot[];
}

export interface KeywordGap {
  id: string;
  correctTerm: string;
  clue: string;
  diagnosticHint: string;
}

export interface KeywordMatcherModule {
  id: string;
  type: 'keyword_matcher';
  title: string;
  topic: string;
  specCode: string;
  aqaUnit: AqaUnit;
  examBoard: 'AQA';
  instructions: string;
  passageParts: string[]; // text alternating with gap indices
  gapIds: string[];
  gaps: Record<string, KeywordGap>;
  termBank: string[];
}

export type InteractiveRevisionModule =
  | CategorizationModule
  | DiagramModule
  | KeywordMatcherModule;

export type ActiveTab =
  | 'spec_map'
  | 'strategy1'
  | 'strategy2'
  | 'teacher_answers'
  | 'printable_pdf';
