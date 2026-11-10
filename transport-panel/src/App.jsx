import React, { useState } from 'react';
import { Bus, MapPin, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';

export function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const fleets = [
    { id: "Bus-01", route: "Route 1: South Extension & Greater Kailash", driver: "Balvinder Singh", phone: "+91 98111-22331", students: 48, status: "On Route (42 km/h)" },
    { id: "Bus-04", route: "Route 4: North Campus & Civil Lines", driver: "Paramjit Singh", phone: "+91 98111-22334", students: 52, status: "On Route (38 km/h)" },
    { id: "Bus-09", route: "Route 9: Vasant Kunj & Dwarka Express", driver: "Rameshwar Yadav", phone: "+91 98111-22339", students: 45, status: "Arrived at Campus" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-yellow-500 selection:text-white">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-yellow-600 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-yellow-400/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-500 to-amber-500 flex items-center justify-center shadow-lg shadow-yellow-500/30">
            <Bus className="w-6 h-6 text-slate-950 font-bold" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-white">
              Transport Fleet & Telematics Control
            </h1>
            <p className="text-xs text-slate-400">28 AC GPS Fleets • Speed Governors & Geo-fencing Active • Port 3007</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Active Fleets</span>
            <div className="text-3xl font-bold font-display text-white mt-1">28 Buses</div>
            <span className="text-[11px] text-emerald-400">100% CCTV & GPS Fitted</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Students Commuting</span>
            <div className="text-3xl font-bold font-display text-amber-300 mt-1">1,380</div>
            <span className="text-[11px] text-slate-400">Boarding Confirmed</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Speed Violations</span>
            <div className="text-3xl font-bold font-display text-emerald-400 mt-1">0 Violations</div>
            <span className="text-[11px] text-emerald-400">Speed Governor Capped (45 km/h)</span>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10">
          <h3 className="text-base font-bold text-white mb-4">Live Fleet Telematics Roster</h3>
          <div className="space-y-4">
            {fleets.map((bus) => (
              <div key={bus.id} className="p-4 rounded-2xl bg-slate-900 border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold text-sm">
                    {bus.id}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{bus.route}</h4>
                    <p className="text-xs text-slate-400">Driver: {bus.driver} • {bus.phone} • {bus.students} Students</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    {bus.status}
                  </span>
                  <button
                    onClick={() => showToast(`Tracking ${bus.id} on GPS satellite map...`)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
                  >
                    Track GPS &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

