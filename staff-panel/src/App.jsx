import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  CheckSquare, 
  BookOpen, 
  Upload, 
  Clock,
  CheckCircle2,
  Users,
  Bell
} from 'lucide-react';
import { mockStudents, mockTeachers } from './mockData';

export function App() {
  const [selectedClass, setSelectedClass] = useState('Class 10-A');
  const [toastMessage, setToastMessage] = useState(null);
  const [attendanceList, setAttendanceList] = useState(
    mockStudents.reduce((acc, s) => ({ ...acc, [s.id]: 'P' }), {})
  );

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const toggleAttendance = (id) => {
    setAttendanceList(prev => ({
      ...prev,
      [id]: prev[id] === 'P' ? 'A' : 'P'
    }));
  };

  const handleSaveAttendance = () => {
    showToast(`Attendance for ${selectedClass} saved & SMS sent to parents!`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-emerald-400/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-600/30">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
              Teacher & Faculty Workspace
            </h1>
            <p className="text-xs text-slate-400">Class In-charge: Dr. Shalini Mukherji • Department: Advanced Physics • Port 3002</p>
          </div>
        </div>

        <button
          onClick={() => showToast("Broadcasting new homework assignment to Class 10-A...")}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/30"
        >
          <Upload className="w-4 h-4" />
          <span>Broadcast Homework</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Quick Schedule Today */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400 block mb-1">Today's Class Schedule</span>
            <div className="text-xl font-bold text-white">4 Lectures Assigned</div>
            <p className="text-xs text-emerald-400 mt-1">Class 10-A, 11-A, 12-Science</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400 block mb-1">Pending Assignments to Grade</span>
            <div className="text-xl font-bold text-amber-300">18 Submissions</div>
            <p className="text-xs text-slate-400 mt-1">Physics Lab Report 3</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400 block mb-1">Upcoming PTM Video Slots</span>
            <div className="text-xl font-bold text-indigo-300">2 Parent Consultations</div>
            <p className="text-xs text-slate-400 mt-1">Today at 4:30 PM & 5:15 PM</p>
          </div>
        </div>

        {/* Rapid Attendance Marker */}
        <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Digital Period Attendance Taker</h3>
              <p className="text-xs text-slate-400">Click student card to toggle Present (P) or Absent (A).</p>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white"
              >
                <option value="Class 10-A">Class 10-A (Room 204)</option>
                <option value="Class 11-A">Class 11-A (Physics Lab)</option>
                <option value="Class 12-Science">Class 12-Science</option>
              </select>

              <button
                onClick={handleSaveAttendance}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Submit & Notify Parents</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {mockStudents.map((stu) => {
              const status = attendanceList[stu.id] || 'P';
              const isPresent = status === 'P';
              return (
                <div
                  key={stu.id}
                  onClick={() => toggleAttendance(stu.id)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isPresent
                      ? 'bg-emerald-950/30 border-emerald-500/40 hover:bg-emerald-950/50'
                      : 'bg-rose-950/30 border-rose-500/40 hover:bg-rose-950/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img src={stu.avatar} alt={stu.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <div className="text-xs font-bold text-white">{stu.name}</div>
                      <div className="text-[10px] text-slate-400">Roll #{stu.roll} • {stu.grade}</div>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    isPresent ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                  }`}>
                    {isPresent ? 'Present (P)' : 'Absent (A)'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

