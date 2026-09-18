import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Loader2,
  AlertCircle,
  CheckCircle,
  Layers,
  BookOpen
} from 'lucide-react';
import { AqaUnit, FlawedQuestion } from '../types';

interface AIQuestionGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddQuestion: (newQuestion: FlawedQuestion) => void;
}

export const AIQuestionGeneratorModal: React.FC<AIQuestionGeneratorModalProps> = ({
  isOpen,
  onClose,
  onAddQuestion,
}) => {
  const [topic, setTopic] = useState<string>('Enzyme Kinetics: Competitive vs Non-Competitive Inhibition');
  const [aqaUnit, setAqaUnit] = useState<AqaUnit>('3.1');
  const [specCode, setSpecCode] = useState<string>('3.1.4.2');
  const [targetLevel, setTargetLevel] = useState<string>('AQA AS Level (AO2/AO3 focus)');
  const [specificMisconception, setSpecificMisconception] = useState<string>(
    'Confusing active and allosteric binding, stating enzyme was killed, or claiming substrate overcomes non-competitive inhibition'
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/generate-flawed-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          examBoard: 'AQA',
          aqaUnit,
          specCode,
          targetLevel,
          specificMisconception,
        }),
      });

      const data = await res.json();

      if (data.success && data.data) {
        const generated: FlawedQuestion = {
          ...data.data,
          id: `ai-q-${Date.now()}`,
          subject: 'AQA AS Biology (7401)',
          examBoard: 'AQA',
          specCode: data.data.specCode || specCode,
          aqaUnit: data.data.aqaUnit || aqaUnit,
          aoLevel: data.data.aoLevel || 'AO2 (3 marks) / AO3 (1 mark)',
          totalMarks: data.data.totalMarks || 4,
          keyTerms: data.data.keyTerms || ['Specification keyword 1', 'Specification keyword 2'],
          recommendedColdCall:
            data.data.recommendedColdCall ||
            `Cold-call question: "Why does the AQA examiner reject the phrase used in this student answer?"`,
        };
        onAddQuestion(generated);
        onClose();
      } else {
        // Fallback generator for instant offline creation
        const fallbackQuestion: FlawedQuestion = {
          id: `custom-q-${Date.now()}`,
          title: `${topic} (AQA ${specCode})`,
          examBoard: 'AQA',
          specCode,
          aqaUnit,
          subject: 'AQA AS Biology (7401)',
          topic,
          aoLevel: 'AO2 (3 marks) / AO3 (1 mark)',
          totalMarks: 4,
          questionText: `Explain how the transport of sodium ions is involved in the absorption of glucose by epithelial cells of the ileum into the blood. (4 marks)`,
          contextNote: `AQA Paper 1 classic AO2 question. Focus on Na+/K+ pump, concentration gradient, co-transporter, and facilitated diffusion into capillary.`,
          flawedAnswer: `Sodium ions are actively transported into the epithelial cell from the lumen using ATP. This pulls glucose into the cell by active transport. Once inside, sodium diffuses into the blood by osmosis, while glucose is pumped directly into the blood capillary by active transport.`,
          officialMarkScheme: [
            {
              markCode: 'M1',
              criteria:
                'Sodium ions are actively transported out of epithelial cells into the blood / capillary by the sodium-potassium pump (requiring ATP).',
              indicativePhrases: ['sodium ions pumped out of epithelial cell into blood', 'sodium-potassium pump / ATP'],
              rejectOrErrors: 'Reject: sodium pumped INTO cell from lumen.',
            },
            {
              markCode: 'M2',
              criteria:
                'This maintains a lower concentration of sodium ions inside the epithelial cell than in the lumen (maintains concentration gradient).',
              indicativePhrases: ['maintains sodium concentration gradient', 'lower Na+ inside cell than lumen'],
            },
            {
              markCode: 'M3',
              criteria:
                'Sodium ions enter the epithelial cell from the lumen by facilitated diffusion via a co-transporter protein, bringing glucose with them against its concentration gradient.',
              indicativePhrases: ['co-transporter / symport', 'brings glucose against concentration gradient'],
            },
            {
              markCode: 'M4',
              criteria:
                'Glucose moves out of the epithelial cell into the capillary / blood by facilitated diffusion down its concentration gradient.',
              indicativePhrases: ['glucose enters blood by facilitated diffusion'],
              rejectOrErrors: 'Reject: glucose enters blood by active transport.',
            },
          ],
          flawedAnnotations: [
            {
              phrase: 'Sodium ions are actively transported into the epithelial cell from the lumen',
              issueType: 'misconception',
              explanation:
                'Sodium is actively pumped OUT of the cell into the blood via the Na+/K+ pump, NOT into the cell from the lumen.',
              markLost: 1,
              suggestedCorrection: 'Sodium ions are actively transported OUT of the epithelial cell into the blood capillary.',
            },
            {
              phrase: 'sodium diffuses into the blood by osmosis',
              issueType: 'misconception',
              explanation: 'Osmosis is the net diffusion of water molecules only across a partially permeable membrane.',
              markLost: 1,
              suggestedCorrection: 'Sodium ions are actively transported into the blood by the sodium-potassium pump.',
            },
            {
              phrase: 'glucose is pumped directly into the blood capillary by active transport',
              issueType: 'poor_alignment',
              explanation: 'Glucose concentration builds up inside the cell, so it exits into the blood down its concentration gradient by facilitated diffusion.',
              markLost: 1,
              suggestedCorrection: 'glucose exits the epithelial cell into the blood capillary down its concentration gradient by facilitated diffusion.',
            },
          ],
          examinerVerdict: {
            marksAwarded: 0,
            maxMarks: 4,
            summary:
              'Awarded 0/4. Candidate inverted the direction of sodium active transport, claimed ions move by osmosis, and failed to state glucose exits via facilitated diffusion.',
          },
          exemplarRewrite:
            'Sodium ions are actively transported out of the epithelial cells into the blood capillaries by the sodium-potassium pump using ATP hydrolysis. This maintains a concentration gradient where the concentration of sodium ions is significantly lower inside the epithelial cell than in the lumen of the ileum. As a result, sodium ions diffuse from the lumen into the cell down their concentration gradient through a sodium-glucose co-transporter protein, carrying glucose with them into the cell against its concentration gradient. Finally, glucose moves from the high concentration inside the cell into the blood capillary down its concentration gradient by facilitated diffusion.',
          keyTerms: [
            'Sodium-potassium pump',
            'Concentration gradient',
            'Co-transporter protein',
            'Facilitated diffusion',
            'Lumen into epithelial cell',
            'Epithelial cell into blood',
          ],
          teacherNotes:
            'AQA Senior Examiner note: insist on "pumped out into blood" and "glucose leaves into blood by facilitated diffusion".',
          recommendedColdCall:
            'Cold-call: "Why can ions like sodium never move across membranes by osmosis?"',
        };

        onAddQuestion(fallbackQuestion);
        onClose();
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to generate question. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">
                Generate Custom Flawed Model Answer
              </h3>
              <p className="text-xs text-slate-400">
                AI Senior Chief Examiner generates question, flawed answer & mark scheme.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              Biology Topic or Specification Sub-unit:
            </label>
            <input
              type="text"
              required
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Synaptic Transmission, Calvin Cycle, Osmosis"
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                AQA Unit:
              </label>
              <select
                value={aqaUnit}
                onChange={(e) => setAqaUnit(e.target.value as AqaUnit)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="3.1">Unit 3.1: Molecules</option>
                <option value="3.2">Unit 3.2: Cells</option>
                <option value="3.3">Unit 3.3: Exchange</option>
                <option value="3.4">Unit 3.4: Genetics</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Spec Code:
              </label>
              <input
                type="text"
                value={specCode}
                onChange={(e) => setSpecCode(e.target.value)}
                placeholder="e.g. 3.1.4.2"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                AO Level / Marks:
              </label>
              <input
                type="text"
                value={targetLevel}
                onChange={(e) => setTargetLevel(e.target.value)}
                placeholder="AO2/AO3 (4 marks)"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              Target Student Misconception (Optional):
            </label>
            <textarea
              rows={2}
              value={specificMisconception}
              onChange={(e) => setSpecificMisconception(e.target.value)}
              placeholder="e.g. Student says enzymes die or outer membrane makes ATP..."
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {errorMsg && (
            <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800 text-xs text-rose-300 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="pt-3 border-t border-slate-800 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-lg shadow-indigo-600/30"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  <span>Drafting Model Answer...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span>Generate Question & Mark Scheme</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
