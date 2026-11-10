import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Search, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  User, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const ApplicationTrackerModal = ({ isOpen, onClose }) => {
  const { showNotification } = useSchool();
  const [appId, setAppId] = useState('ADM-2026-8941');
  const [statusResult, setStatusResult] = useState({
    id: "ADM-2026-8941",
    studentName: "Aarav Sharma",
    grade: "Grade 10 (Senior Secondary)",
    submittedOn: "November 10, 2026",
    status: "Assessment Scheduled",
    slotDate: "Saturday, 21 November 2026 at 10:00 AM",
    venue: "Main Campus, Academic Block A, Room 104",
    steps: [
      { name: "Online Registration & Document Screening", status: "completed", date: "10 Nov 2026" },
      { name: "Diagnostic Aptitude & STEM Assessment", status: "active", date: "21 Nov 2026 (10:00 AM)" },
      { name: "Principal & Family Interactive Dialogue", status: "pending", date: "Post Assessment" },
      { name: "Admission Offer & Official Welcome Pack", status: "pending", date: "Pending" }
    ]
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (!appId.trim()) return;

    // Simulate lookup
    setStatusResult({
      id: appId.toUpperCase(),
      studentName: "Verified Applicant",
      grade: "Grade Selected",
      submittedOn: "Active Session 2026-27",
      status: "Assessment Scheduled",
      slotDate: "Saturday, 21 November 2026 at 10:00 AM",
      venue: "Main Campus, Academic Block A, Room 104",
      steps: [
        { name: "Online Registration & Document Screening", status: "completed", date: "10 Nov 2026" },
        { name: "Diagnostic Aptitude & STEM Assessment", status: "active", date: "21 Nov 2026 (10:00 AM)" },
        { name: "Principal & Family Interactive Dialogue", status: "pending", date: "Post Assessment" },
        { name: "Admission Offer & Official Welcome Pack", status: "pending", date: "Pending" }
      ]
    });
    showNotification(`Found application status for ${appId.toUpperCase()}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
      >
        {/* Top Shimmer */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-amber-400 to-indigo-600" />

        <div className="flex items-start justify-between mb-6 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
              Live Application Tracker
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
              Track Admission Status
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search ID Form */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              placeholder="Enter Application Ref ID (e.g. ADM-2026-8941)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 font-mono uppercase shadow-2xs font-semibold"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors shadow-md shadow-indigo-600/20 shrink-0 cursor-pointer"
          >
            Track Status
          </button>
        </form>

        {/* Status Result Card */}
        {statusResult && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-500 block uppercase font-bold">Candidate Dossier</span>
                <div className="font-extrabold text-slate-900 text-base">{statusResult.studentName}</div>
                <div className="text-xs text-indigo-700 font-semibold">{statusResult.grade} • ID: {statusResult.id}</div>
              </div>

              <div className="text-right">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 inline-block shadow-2xs">
                  {statusResult.status}
                </span>
                <div className="text-[10px] text-slate-500 mt-1 font-medium">Submitted: {statusResult.submittedOn}</div>
              </div>
            </div>

            {/* Assessment Slot Notice */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-slate-700">
              <div className="font-extrabold text-amber-900 flex items-center gap-1.5 mb-1">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>Next Scheduled Milestone:</span>
              </div>
              <div className="font-bold text-slate-900">{statusResult.slotDate}</div>
              <div className="text-[11px] text-slate-600 mt-0.5 font-medium">{statusResult.venue}</div>
            </div>

            {/* Timeline Stepper */}
            <div className="space-y-2.5 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Application Progression Timeline
              </span>
              {statusResult.steps.map((st, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold ${
                      st.status === 'completed'
                        ? 'bg-emerald-600 text-white'
                        : st.status === 'active'
                        ? 'bg-amber-500 text-white animate-pulse'
                        : 'bg-slate-200 text-slate-500'
                    }`}>
                      {st.status === 'completed' ? '✓' : i + 1}
                    </div>
                    <span className={`font-semibold ${st.status === 'active' ? 'text-amber-900 font-bold' : st.status === 'completed' ? 'text-slate-900' : 'text-slate-400'}`}>
                      {st.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">{st.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Need help? Call +91 98765-43210</span>
          <button onClick={onClose} className="text-indigo-600 hover:text-indigo-800 font-bold cursor-pointer">
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
