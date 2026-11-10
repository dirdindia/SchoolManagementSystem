import React, { useState } from 'react';
import { Headphones, Plus, User, Phone, CheckCircle2 } from 'lucide-react';

export function App() {
  const [visitorName, setVisitorName] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleCreatePass = (e) => {
    e.preventDefault();
    if (!visitorName) return;
    showToast(`Digital Visitor Gate Pass issued for ${visitorName}!`);
    setVisitorName('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-pink-500 selection:text-white">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-pink-600 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-pink-400/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-600 to-rose-400 flex items-center justify-center shadow-lg shadow-pink-600/30">
            <Headphones className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-white">
              Front Desk & Admission Reception Desk
            </h1>
            <p className="text-xs text-slate-400">Visitor Passes • Admission Walk-ins • Call Logs • Port 3010</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10">
          <h3 className="text-base font-bold text-white mb-2">Issue Digital Visitor Gate Pass</h3>
          <p className="text-xs text-slate-400 mb-6">Create instant QR authorization slip for parents, vendors, or campus inspectors.</p>

          <form onSubmit={handleCreatePass} className="flex gap-3 max-w-lg">
            <input
              type="text"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              placeholder="Enter Visitor Full Name..."
              className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-pink-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs sm:text-sm shadow-md"
            >
              Issue Pass
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

