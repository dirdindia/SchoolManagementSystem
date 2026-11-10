import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Users, 
  GraduationCap, 
  CreditCard, 
  FileText, 
  Settings, 
  Search, 
  Plus, 
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Download,
  Bell,
  LogOut,
  ExternalLink
} from 'lucide-react';
import { mockStudents, mockTeachers, schoolDetails } from './mockData';

export function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('students');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const filteredStudents = mockStudents.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-indigo-400/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-amber-400 flex items-center justify-center shadow-lg shadow-indigo-600/30">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Super Admin & Principal Command Center
              </h1>
            </div>
            <p className="text-xs text-slate-400">EduPrime World School • Central ERP Node (Port 3001)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast('Exporting institutional MIS report (PDF)...')}
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export Roster (PDF)</span>
          </button>
          <button
            onClick={() => showToast('Opening New Admission & Staff Onboarding Form...')}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-transform active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>New Admission / Staff</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* KPI Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-slate-400 font-medium">Total Enrollment</span>
              <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black font-display text-white">3,450</div>
            <span className="text-[11px] text-emerald-400 font-semibold">+184 New Admissions</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-slate-400 font-medium">Daily Attendance Rate</span>
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black font-display text-emerald-400">96.8%</div>
            <span className="text-[11px] text-slate-400">Biometric & RFID Verified</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-slate-400 font-medium">Month Fee Recovery</span>
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <CreditCard className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black font-display text-amber-300">₹4.82 Cr</div>
            <span className="text-[11px] text-emerald-400 font-semibold">91.4% Target Met</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-slate-400 font-medium">Faculty Strength</span>
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                <GraduationCap className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black font-display text-purple-300">182 Teachers</div>
            <span className="text-[11px] text-indigo-300 font-semibold">1:12 Ratio Maintained</span>
          </div>
        </div>

        {/* Tab Switcher & Search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('students')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'students' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white bg-slate-900'
              }`}
            >
              Student Roster ({mockStudents.length})
            </button>
            <button
              onClick={() => setActiveTab('teachers')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'teachers' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white bg-slate-900'
              }`}
            >
              Faculty & Staff ({mockTeachers.length})
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, roll, or grade..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Students Table */}
        {activeTab === 'students' && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900 text-slate-400 border-b border-white/10 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Student</th>
                  <th className="py-3.5 px-4">Grade</th>
                  <th className="py-3.5 px-4">Roll No</th>
                  <th className="py-3.5 px-4">Attendance</th>
                  <th className="py-3.5 px-4">GPA Score</th>
                  <th className="py-3.5 px-4">Fee Clearance</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredStudents.map((stu) => (
                  <tr key={stu.id} className="hover:bg-slate-900/60 transition-colors">
                    <td className="py-3 px-4 flex items-center gap-3">
                      <img src={stu.avatar} alt={stu.name} className="w-8 h-8 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="font-bold text-white">{stu.name}</div>
                        <div className="text-[10px] text-slate-500">{stu.id} • {stu.parent}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold text-white">{stu.grade}</td>
                    <td className="py-3 px-4">#{stu.roll}</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">{stu.attendance}</td>
                    <td className="py-3 px-4 text-amber-300 font-bold">{stu.gpa}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        stu.fees === 'Paid' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                      }`}>
                        {stu.fees}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => showToast(`Opening comprehensive dossier for ${stu.name}`)}
                        className="text-indigo-400 hover:text-white font-semibold"
                      >
                        Manage &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Teachers Table */}
        {activeTab === 'teachers' && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900 text-slate-400 border-b border-white/10 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Faculty Member</th>
                  <th className="py-3.5 px-4">Subject</th>
                  <th className="py-3.5 px-4">Assigned Classes</th>
                  <th className="py-3.5 px-4">Experience</th>
                  <th className="py-3.5 px-4">Student Rating</th>
                  <th className="py-3.5 px-4">Current Status</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockTeachers.map((tch) => (
                  <tr key={tch.id} className="hover:bg-slate-900/60 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">{tch.name}</td>
                    <td className="py-3 px-4 text-indigo-300">{tch.subject}</td>
                    <td className="py-3 px-4">{tch.classes}</td>
                    <td className="py-3 px-4">{tch.experience}</td>
                    <td className="py-3 px-4 text-amber-300 font-bold">{tch.rating}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px]">
                        {tch.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => showToast(`Viewing lecture schedule for ${tch.name}`)}
                        className="text-indigo-400 hover:text-white font-semibold"
                      >
                        Timetable &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

