import React, { useState } from 'react';
import { Library, Barcode, CheckCircle2 } from 'lucide-react';

export function App() {
  const [isbn, setIsbn] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleScan = (e) => {
    e.preventDefault();
    if (!isbn) return;
    showToast(`Book with ISBN ${isbn} scanned into lending system!`);
    setIsbn('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-purple-500 selection:text-white">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-purple-600 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-purple-400/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-600/30">
            <Library className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-white">
              Central Library & E-Archives Desk
            </h1>
            <p className="text-xs text-slate-400">Inventory: 35,420 Volumes • Barcode ISBN Scanner Active • Port 3006</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Volumes Cataloged</span>
            <div className="text-3xl font-bold font-display text-white mt-1">35,420</div>
            <span className="text-[11px] text-emerald-400">100% Barcoded</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Issued Books</span>
            <div className="text-3xl font-bold font-display text-indigo-300 mt-1">1,248</div>
            <span className="text-[11px] text-slate-400">Circulation Active</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Overdue Returns</span>
            <div className="text-3xl font-bold font-display text-rose-400 mt-1">29 Books</div>
            <span className="text-[11px] text-rose-300">Auto SMS Reminders</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">JSTOR Subscriptions</span>
            <div className="text-3xl font-bold font-display text-purple-300 mt-1">2.4M Papers</div>
            <span className="text-[11px] text-emerald-400">Active Campus License</span>
          </div>
        </div>

        {/* ISBN Scanner Station */}
        <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10">
          <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
            <Barcode className="w-5 h-5 text-purple-400" />
            <span>Barcode & RFID Issue / Return Station</span>
          </h3>
          <p className="text-xs text-slate-400 mb-6">Scan book barcode or student RFID card to execute instant checkout or calculate late fine.</p>

          <form onSubmit={handleScan} className="flex gap-3 max-w-lg">
            <input
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              placeholder="Scan or enter ISBN (e.g. 978-0131103627)..."
              className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-md"
            >
              Scan & Issue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

