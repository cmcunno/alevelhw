import React, { useState } from 'react';
import {
  CheckCircle,
  AlertCircle,
  PenTool,
  Send,
  Award,
  BookOpen,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { FlawedQuestion, StudentSubmission } from '../../types';

interface StudentExaminerModeProps {
  question: FlawedQuestion;
  onSubmit: (submission: Omit<StudentSubmission, 'id' | 'submittedAt'>) => void;
  hasSubmitted?: boolean;
}

export const StudentExaminerMode: React.FC<StudentExaminerModeProps> = ({
  question,
  onSubmit,
  hasSubmitted = false,
}) => {
  const [studentName, setStudentName] = useState<string>('');
  const [awardedMarks, setAwardedMarks] = useState<number>(0);
  const [annotationNotes, setAnnotationNotes] = useState<string>('');
  const [studentRewrite, setStudentRewrite] = useState<string>('');
  const [selectedIssueTags, setSelectedIssueTags] = useState<Record<string, string>>({});
  const [submittedLocal, setSubmittedLocal] = useState<boolean>(hasSubmitted);

  const handleTagToggle = (phrase: string, issue: string) => {
    setSelectedIssueTags((prev) => {
      const next = { ...prev };
      if (next[phrase] === issue) {
        delete next[phrase];
      } else {
        next[phrase] = issue;
      }
      return next;
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      alert('Please enter your name before submitting.');
      return;
    }
    if (!studentRewrite.trim()) {
      alert('Please write your 100% exemplar rewrite before submitting.');
      return;
    }

    const annotatedSummary = Object.entries(selectedIssueTags)
      .map(([phrase, issue]) => `[${issue}]: "${phrase}"`)
      .concat(annotationNotes ? [`Note: ${annotationNotes}`] : [])
      .join('; ');

    onSubmit({
      studentName: studentName.trim(),
      questionId: question.id,
      awardedMarks,
      annotatedNotes: annotatedSummary || 'No specific phrase tags selected.',
      studentRewrite: studentRewrite.trim(),
    });

    setSubmittedLocal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header instructions banner */}
      <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-2xl p-5 shadow-sm">
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 mt-0.5">
            <PenTool className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-emerald-300 text-base sm:text-lg">
              Student Task: You are the Senior Examiner
            </h3>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              1. Read the flawed model answer below and annotate common misconceptions.
              <br />
              2. Award a mark based on the official mark scheme.
              <br />
              3. Rewrite a 100% correct response using the required {question.examBoard} keywords.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Name input */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <label className="text-sm font-semibold text-slate-200 flex items-center">
            <span>Student Name / Initials:</span>
          </label>
          <input
            type="text"
            required
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="e.g. Maya Patel"
            className="px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 max-w-sm w-full"
          />
        </div>

        {/* Step 1: Flawed Answer & Annotation Zone */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1.5" />
              Step 1: Annotate Flawed Model Answer
            </span>
            <span className="text-xs text-slate-400">Click suspicious phrases to tag errors</span>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-base sm:text-lg font-serif leading-relaxed">
            "{question.flawedAnswer}"
          </div>

          {/* Interactive Flaw Detection Palette */}
          <div className="mt-4 space-y-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide block">
              Examiner Sins Identified in this Answer:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {question.flawedAnnotations.map((anno, idx) => {
                const currentTag = selectedIssueTags[anno.phrase];
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-sm transition-all ${
                      currentTag
                        ? 'bg-rose-950/40 border-rose-500/60 shadow-sm'
                        : 'bg-slate-850/50 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-mono text-xs text-rose-300 font-semibold">
                        "{anno.phrase}"
                      </p>
                      <span className="text-2xs uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 flex-shrink-0">
                        -{anno.markLost} Mark
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{anno.explanation}</p>

                    <div className="mt-2.5 flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {(['Misconception', 'Missing Keyword', 'Poor Mark Alignment'] as const).map(
                        (tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => handleTagToggle(anno.phrase, tag)}
                            className={`text-2xs px-2 py-0.5 rounded-md font-medium transition ${
                              currentTag === tag
                                ? 'bg-rose-600 text-white font-bold'
                                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {currentTag === tag ? `✓ ${tag}` : `+ ${tag}`}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-3">
              <label className="text-xs font-medium text-slate-400 block mb-1">
                Additional Examiner Annotation Notes:
              </label>
              <textarea
                value={annotationNotes}
                onChange={(e) => setAnnotationNotes(e.target.value)}
                placeholder="Write specific reasons why the student lost marks on particular criteria..."
                rows={2}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Mark Awarding Checklist */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center">
              <Award className="w-4 h-4 mr-1.5" />
              Step 2: Award a Mark (Out of {question.totalMarks})
            </span>
            <span className="text-xs text-slate-400">Consult the mark scheme criteria below</span>
          </div>

          <div className="space-y-2 mb-5">
            {question.officialMarkScheme.map((mark) => (
              <div
                key={mark.markCode}
                className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs flex items-start space-x-3"
              >
                <span className="px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-300 font-mono font-bold">
                  {mark.markCode}
                </span>
                <div className="flex-1">
                  <div className="text-slate-200 font-medium">{mark.criteria}</div>
                  {mark.rejectOrErrors && (
                    <div className="text-rose-400 mt-0.5">{mark.rejectOrErrors}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-3 p-4 bg-slate-950 rounded-xl border border-slate-800">
            <span className="text-sm font-semibold text-slate-300">Your Examiner Verdict:</span>
            <div className="flex items-center space-x-2">
              {Array.from({ length: question.totalMarks + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setAwardedMarks(i)}
                  className={`w-10 h-10 rounded-xl font-mono text-sm font-bold transition-all ${
                    awardedMarks === i
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
            <span className="text-xs text-slate-400">/ {question.totalMarks} Marks</span>
          </div>
        </div>

        {/* Step 3: 100% Rewrite with Keyword Bank */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center">
              <BookOpen className="w-4 h-4 mr-1.5" />
              Step 3: Rewrite a 100% Correct Response
            </span>
            <span className="text-xs text-slate-400">Aim to incorporate every key term</span>
          </div>

          {/* Keyword Bank */}
          <div className="p-3 mb-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
            <span className="text-2xs uppercase tracking-wider font-bold text-emerald-400 block mb-2">
              Mandatory Specification Keyword Word Bank:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {question.keyTerms.map((term, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setStudentRewrite((prev) => (prev ? `${prev} ${term}` : term));
                  }}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                  title="Click to insert into rewrite"
                >
                  + {term}
                </button>
              ))}
            </div>
          </div>

          <textarea
            required
            rows={5}
            value={studentRewrite}
            onChange={(e) => setStudentRewrite(e.target.value)}
            placeholder="Write your textbook 100% answer here using the keywords above..."
            className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Word count: {studentRewrite.trim().split(/\s+/).filter(Boolean).length} words
            </span>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-lg shadow-emerald-600/30"
            >
              <Send className="w-4 h-4 mr-2" />
              <span>Submit to Teacher Dashboard</span>
            </button>
          </div>

          {submittedLocal && (
            <div className="mt-4 p-3 rounded-lg bg-emerald-900/40 border border-emerald-600 text-emerald-200 text-xs flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-emerald-400 flex-shrink-0" />
              <span>
                Your answer has been submitted! Your teacher can view and project your decoding on the classroom board.
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
