import React, { useState } from 'react';
import {
  Users,
  Award,
  CheckCircle2,
  AlertTriangle,
  Projector,
  Search,
  Filter,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { FlawedQuestion, StudentSubmission } from '../../types';

interface ClassSubmissionsBoardProps {
  questions: FlawedQuestion[];
  submissions: StudentSubmission[];
  onProjectSubmission: (submission: StudentSubmission) => void;
  onSelectQuestion: (questionId: string) => void;
}

export const ClassSubmissionsBoard: React.FC<ClassSubmissionsBoardProps> = ({
  questions,
  submissions,
  onProjectSubmission,
  onSelectQuestion,
}) => {
  const [filterQuestionId, setFilterQuestionId] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filtered = submissions.filter((sub) => {
    const matchesQ = filterQuestionId === 'all' || sub.questionId === filterQuestionId;
    const matchesSearch =
      sub.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.studentRewrite.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesQ && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Dashboard Top Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <Users className="w-5 h-5" />
              </span>
              <h2 className="text-xl font-bold text-white">Teacher Dashboard: Live Student Answers</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Review live student mark awards, identified misconceptions, and exemplar rewrites in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Question Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={filterQuestionId}
                onChange={(e) => setFilterQuestionId(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="all">All Exam Questions ({submissions.length})</option>
                {questions.map((q) => (
                  <option key={q.id} value={q.id}>
                    {q.title} ({q.examBoard})
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Search student or answer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
              </input>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-2xs uppercase tracking-wider text-slate-400 font-bold block">
              Submissions Received
            </span>
            <span className="text-2xl font-bold font-mono text-white mt-1 block">
              {submissions.length}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-2xs uppercase tracking-wider text-slate-400 font-bold block">
              Accurate 0/4 Marks Awarded
            </span>
            <span className="text-2xl font-bold font-mono text-emerald-400 mt-1 block">
              {submissions.filter((s) => s.awardedMarks === 0).length}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-2xs uppercase tracking-wider text-slate-400 font-bold block">
              Misconceptions Spotted
            </span>
            <span className="text-2xl font-bold font-mono text-amber-400 mt-1 block">
              {submissions.filter((s) => s.annotatedNotes.includes('Misconception') || s.annotatedNotes.includes('killed')).length}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-2xs uppercase tracking-wider text-slate-400 font-bold block">
              Flagged for Projector
            </span>
            <span className="text-2xl font-bold font-mono text-indigo-400 mt-1 block">
              {submissions.filter((s) => s.isFlaggedForProjection).length}
            </span>
          </div>
        </div>
      </div>

      {/* Submissions List */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-2xl text-slate-400">
            No submissions found matching the criteria.
          </div>
        ) : (
          filtered.map((sub) => {
            const question = questions.find((q) => q.id === sub.questionId) || questions[0];
            const isExaminerExact = sub.awardedMarks === question.examinerVerdict.marksAwarded;

            return (
              <div
                key={sub.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm hover:border-slate-700 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-slate-800 gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 rounded-full bg-slate-800 font-bold text-xs flex items-center justify-center text-slate-200 border border-slate-700">
                      {sub.studentName.charAt(0)}
                    </span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-white text-base">{sub.studentName}</h4>
                        {sub.isFlaggedForProjection && (
                          <span className="px-2 py-0.5 rounded-full text-2xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Cold-Call Ready
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-400">
                        Submitted at {sub.submittedAt} • Question:{' '}
                        <strong className="text-slate-300">{question.title}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <span className="text-2xs uppercase tracking-wider text-slate-400 block font-semibold">
                        Student Awarded:
                      </span>
                      <span
                        className={`text-base font-mono font-bold ${
                          isExaminerExact ? 'text-emerald-400' : 'text-amber-400'
                        }`}
                      >
                        {sub.awardedMarks} / {question.totalMarks} Marks
                      </span>
                    </div>

                    <button
                      onClick={() => onProjectSubmission(sub)}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600/30 text-indigo-200 hover:bg-indigo-600/50 border border-indigo-500/40 transition"
                      title="Project this student answer onto the whiteboard for peer critique"
                    >
                      <Projector className="w-3.5 h-3.5 mr-1.5" />
                      <span>Project Answer</span>
                    </button>
                  </div>
                </div>

                {/* Sub-body: Annotations & 100% Rewrite */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
                  <div className="lg:col-span-5 p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Student Annotations & Traps Identified:
                    </span>
                    <p className="text-slate-300 leading-relaxed italic">
                      {sub.annotatedNotes || 'No specific annotation notes entered.'}
                    </p>
                  </div>

                  <div className="lg:col-span-7 p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold uppercase tracking-wider text-emerald-400">
                        Student 100% Exemplar Rewrite:
                      </span>
                      <span className="text-2xs text-slate-400">
                        Keywords match standard
                      </span>
                    </div>
                    <p className="text-slate-200 font-serif leading-relaxed text-sm">
                      "{sub.studentRewrite}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
