import React, { useState } from 'react';
import {
  Lock,
  KeyRound,
  Eye,
  EyeOff,
  GraduationCap,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { verifyPasscode, setTeacherAuthenticated } from '../../services/authService';

interface TeacherAuthGateProps {
  onAuthenticated: () => void;
}

export const TeacherAuthGate: React.FC<TeacherAuthGateProps> = ({ onAuthenticated }) => {
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setError('Please enter the department passcode.');
      return;
    }

    setIsVerifying(true);
    setError(null);

    const isValid = await verifyPasscode(passcode);
    setIsVerifying(false);

    if (isValid) {
      setTeacherAuthenticated(rememberDevice);
      onAuthenticated();
    } else {
      setError('Incorrect passcode. Please check with your Head of Biology or department coordinator.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-rose-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Lock Card */}
      <div
        className={`w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative z-10 transition-transform ${
          shake ? 'animate-shake' : ''
        }`}
      >
        {/* Department Badge Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 text-white shadow-xl shadow-rose-600/25 mb-4">
            <Lock className="w-8 h-8" />
          </div>
          
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30 text-xs font-semibold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Faculty & Teacher Portal</span>
          </div>

          <h1 className="text-2xl font-bold text-white tracking-tight">
            AQA Biology 7401 / 7402
          </h1>
          <p className="text-sm text-slate-400 mt-1.5">
            Mark Scheme Decoder & Self-Marking Laboratory
          </p>
        </div>

        {/* Security Notice */}
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5 mb-6 text-xs text-slate-300 flex items-start space-x-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
          <span>
            This tool contains official mark schemes, examiner guidance notes, and student flawed model answers for teacher-led classroom instruction.
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Department Passcode
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Enter passcode..."
                autoFocus
                className="w-full pl-10 pr-10 py-3 bg-slate-950/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30 transition shadow-inner font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition"
                title={showPassword ? 'Hide passcode' : 'Show passcode'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Remember this browser checkbox */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center space-x-2 cursor-pointer text-slate-300 select-none">
              <input
                type="checkbox"
                checked={rememberDevice}
                onChange={(e) => setRememberDevice(e.target.checked)}
                className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-rose-600 focus:ring-rose-500 focus:ring-offset-slate-900 transition cursor-pointer"
              />
              <span>Remember this browser</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isVerifying}
            className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-rose-600/30 flex items-center justify-center space-x-2 transition transform active:scale-98 disabled:opacity-50"
          >
            {isVerifying ? (
              <span>Verifying Passcode...</span>
            ) : (
              <>
                <span>Access Teacher Lab</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          <div className="flex items-center justify-center space-x-1.5">
            <BookOpen className="w-3.5 h-3.5 text-slate-500" />
            <span>Specifications 7401 & 7402 (AS / A-Level Biology)</span>
          </div>
          <p className="mt-1 text-2xs text-slate-600">
            For use by verified teaching staff and exam invigilators.
          </p>
        </div>
      </div>
    </div>
  );
};
