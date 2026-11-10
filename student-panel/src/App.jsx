import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Award, 
  FileText, 
  CheckCircle2, 
  Download,
  Library,
  Upload
} from 'lucide-react';

export function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-cyan-500 selection:text-white">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-cyan-600 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-cyan-400/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"
            alt="Aarav Sharma"
            className="w-14 h-14 rounded-2xl object-cover border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Aarav Sharma's Learning Desk
            </h1>
            <p className="text-xs text-slate-400">Class 10-A • Roll No: 12 • Scholar ID: STU-1001 • Port 3003</p>
          </div>
        </div>

        <button
          onClick={() => showToast("Downloading Term-1 Verified Report Card (PDF)...")}
          className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-cyan-600/30"
        >
          <Download className="w-4 h-4" />
          <span>Download Report Card</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* KPI Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Attendance</span>
            <div className="text-3xl font-bold font-display text-emerald-400 mt-1">96.4%</div>
            <span className="text-[11px] text-slate-500">182 of 188 Days Present</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Current GPA Score</span>
            <div className="text-3xl font-bold font-display text-amber-300 mt-1">3.92 / 4.0</div>
            <span className="text-[11px] text-amber-400/80">Class Rank: 2nd</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Homework Due</span>
            <div className="text-3xl font-bold font-display text-cyan-300 mt-1">2 Pending</div>
            <span className="text-[11px] text-cyan-400">Due in 24 Hours</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Library Books</span>
            <div className="text-3xl font-bold font-display text-purple-300 mt-1">3 Borrowed</div>
            <span className="text-[11px] text-slate-500">Next Due: 24 Nov</span>
          </div>
        </div>

        {/* Timetable & Assignments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Today's Timetable */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-slate-900/40 border border-white/10">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Today's Lecture Schedule (Tuesday)</span>
            </h3>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">Period 1: Advanced Mathematics</span>
                  <span className="text-[11px] text-slate-400">Mrs. Meenakshi Raman • Room 204</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">Completed</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-cyan-500/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">Period 2: Physics Practical Lab</span>
                  <span className="text-[11px] text-slate-400">Dr. Shalini Mukherji • Lab 2</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold animate-pulse">In Progress</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">Period 3: World Literature</span>
                  <span className="text-[11px] text-slate-400">Prof. Christopher Vance • Room 108</span>
                </div>
                <span className="text-xs text-slate-400">1:00 PM - 1:45 PM</span>
              </div>
            </div>
          </div>

          {/* Pending Assignments */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/40 border border-white/10">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Assignments & Submissions</span>
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-white">Calculus Problem Set 4</span>
                  <span className="text-[10px] text-rose-400 font-bold bg-rose-500/10 px-2 py-0.5 rounded">Due Tomorrow</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">Solve integration questions 1 to 25 from Chapter 8.</p>
                <button
                  onClick={() => showToast("Assignment uploaded successfully!")}
                  className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Submit Assignment PDF</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

