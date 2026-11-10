import React, { useState } from 'react';
import { CreditCard, Plus, Download, DollarSign, CheckCircle2 } from 'lucide-react';
import { mockStudents } from './mockData';

export function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-amber-500 selection:text-white">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-amber-600 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-amber-400/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
            <CreditCard className="w-6 h-6 text-slate-950 font-bold" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-white">
              Accounts & Fee Directorate
            </h1>
            <p className="text-xs text-slate-400">Cashless Fee Counter • Invoicing & Payroll Ledger • Port 3005</p>
          </div>
        </div>

        <button
          onClick={() => showToast("Opening Quick Cash / Cheque / UPI Fee Collection Modal...")}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-lg shadow-amber-500/20"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Collect Offline Fee</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Collected Today</span>
            <div className="text-3xl font-bold font-display text-emerald-400 mt-1">₹4,85,000</div>
            <span className="text-[11px] text-slate-500">22 Transactions Cleared</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">November Collections</span>
            <div className="text-3xl font-bold font-display text-white mt-1">₹1.84 Cr</div>
            <span className="text-[11px] text-emerald-400">88% of target</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Pending Arrears</span>
            <div className="text-3xl font-bold font-display text-rose-400 mt-1">₹24.5 L</div>
            <span className="text-[11px] text-rose-300">42 Defaulters flagged</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
            <span className="text-xs text-slate-400">Staff Payroll Status</span>
            <div className="text-3xl font-bold font-display text-indigo-300 mt-1">100% Paid</div>
            <span className="text-[11px] text-slate-500">182 Staff Slips Sent</span>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10">
          <h3 className="text-base font-bold text-white mb-4">Recent Fee Collections & Digital Receipts</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900 text-slate-400 uppercase text-[11px] border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Receipt #</th>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Grade</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Payment Mode</th>
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-slate-900/50">
                  <td className="py-3 px-4 font-mono font-bold text-amber-300">REC-2026-8941</td>
                  <td className="py-3 px-4 font-bold text-white">Aarav Sharma</td>
                  <td className="py-3 px-4">Class 10-A</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">₹38,250</td>
                  <td className="py-3 px-4">UPI (Razorpay)</td>
                  <td className="py-3 px-4">10 Nov 2026, 09:12 AM</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => showToast("Printing Official GST Tax Invoice...")}
                      className="text-amber-400 hover:text-white font-semibold"
                    >
                      Print Receipt &rarr;
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

