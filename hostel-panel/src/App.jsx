import React, { useState } from 'react';
import { Building, Bed, Utensils, ShieldCheck } from 'lucide-react';

export function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-teal-500 selection:text-white">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-teal-600 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-teal-400/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center shadow-lg shadow-teal-600/30">
            <Building className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-white">
              Hostel & Residential Boarding Desk
            </h1>
            <p className="text-xs text-slate-400">Chief Warden: Col. R.K. Joshi • 3 Dormitory Blocks (A, B, C) • Port 3008</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Residential Scholars</span>
            <div className="text-3xl font-bold font-display text-white mt-1">420</div>
            <span className="text-[11px] text-emerald-400">92% Occupancy</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Available Beds</span>
            <div className="text-3xl font-bold font-display text-amber-300 mt-1">36 Beds</div>
            <span className="text-[11px] text-slate-400">Block B & C</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Gate Passes Approved</span>
            <div className="text-3xl font-bold font-display text-teal-300 mt-1">8 Scholars</div>
            <span className="text-[11px] text-teal-400">Parent Verified</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Today's Dinner</span>
            <div className="text-xl font-bold font-display text-emerald-400 mt-2">Paneer & Naan</div>
            <span className="text-[11px] text-slate-400">Organic Mess</span>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10">
          <h3 className="text-base font-bold text-white mb-4">Dormitory Block Capacity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/5">
              <h4 className="font-bold text-white text-sm mb-1">Block A - Senior Boys (Grades 10-12)</h4>
              <p className="text-xs text-slate-400 mb-3">150 Beds • Warden: Mr. Deepak Rawat</p>
              <div className="text-xs text-emerald-400 font-bold">148 / 150 Occupied</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/5">
              <h4 className="font-bold text-white text-sm mb-1">Block B - Senior Girls (Grades 10-12)</h4>
              <p className="text-xs text-slate-400 mb-3">150 Beds • Warden: Mrs. Sunita Pillai</p>
              <div className="text-xs text-emerald-400 font-bold">142 / 150 Occupied</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/5">
              <h4 className="font-bold text-white text-sm mb-1">Block C - Junior Wing (Grades 6-9)</h4>
              <p className="text-xs text-slate-400 mb-3">120 Beds • Warden: Mr. Amit Sen</p>
              <div className="text-xs text-amber-300 font-bold">94 / 120 Occupied</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

