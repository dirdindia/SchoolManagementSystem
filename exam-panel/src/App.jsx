import React, { useState } from 'react';
import { FileSpreadsheet, Calendar, Award, CheckCircle2, Download } from 'lucide-react';

export function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-violet-500 selection:text-white">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-violet-600 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-violet-400/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-400 flex items-center justify-center shadow-lg shadow-violet-600/30">
            <FileSpreadsheet className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-white">
              Examination & Results Cell
            </h1>
            <p className="text-xs text-slate-400">Controller of Examinations • CBSE / Cambridge Automated Grading • Port 3009</p>
          </div>
        </div>

        <button
          onClick={() => showToast("Generating automated seating charts & batch hall tickets...")}
          className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-violet-600/30"
        >
          <Calendar className="w-4 h-4" />
          <span>Generate Hall Tickets</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Upcoming Midterm Exam</span>
            <div className="text-2xl font-bold font-display text-white mt-1">Starts Dec 05, 2026</div>
            <span className="text-[11px] text-amber-300">Date Sheet Published</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Eligible Candidates</span>
            <div className="text-3xl font-bold font-display text-emerald-400 mt-1">3,412</div>
            <span className="text-[11px] text-slate-400">Attendance &gt; 75% Cleared</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Report Card Standard</span>
            <div className="text-2xl font-bold font-display text-violet-300 mt-1">CBSE 10-Point Scale</div>
            <span className="text-[11px] text-violet-400">QR Code Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

