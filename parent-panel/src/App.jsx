import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Bus, 
  CreditCard, 
  CheckCircle2, 
  MessageSquare, 
  Clock,
  MapPin,
  ShieldCheck,
  Send
} from 'lucide-react';

export function App() {
  const [selectedChild, setSelectedChild] = useState('Aarav Sharma (Grade 10-A)');
  const [chatMessage, setChatMessage] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handlePayFee = () => {
    showToast("Opening Secure Payment Gateway for Term 3 (₹38,250)...");
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatMessage) return;
    showToast(`Message delivered to Dr. Shalini: "${chatMessage}"`);
    setChatMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-rose-500 selection:text-white">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-rose-600 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-rose-400/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 to-pink-400 flex items-center justify-center shadow-lg shadow-rose-600/30">
            <HeartHandshake className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-white">
              Parent & Guardian Gateway
            </h1>
            <p className="text-xs text-slate-400">Welcome, Dr. Rajesh Sharma • Child Guardian ID: PAR-8841 • Port 3004</p>
          </div>
        </div>

        <select
          value={selectedChild}
          onChange={(e) => setSelectedChild(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-slate-900 border border-rose-500/40 text-xs font-bold text-white"
        >
          <option value="Aarav Sharma (Grade 10-A)">Aarav Sharma (Grade 10-A)</option>
          <option value="Ananya Sharma (Grade 6-B)">Ananya Sharma (Grade 6-B)</option>
        </select>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Live GPS Telematics & Attendance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Real-time Bus Telematics */}
          <div className="p-6 rounded-3xl bg-slate-900/40 border border-rose-500/30 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Live School Bus GPS Tracking</h3>
                  <p className="text-xs text-slate-400">Bus #04 • Route North Campus • Driver: Paramjit Singh</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>On Route (38 km/h)</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 mb-4">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-400">Next Designated Stop:</span>
                <span className="font-bold text-white">Green Park Main Crossing (1.4 km)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Estimated Afternoon Drop:</span>
                <span className="font-bold text-amber-300">3:42 PM (On Schedule)</span>
              </div>
            </div>

            <button
              onClick={() => showToast("Opening Fullscreen Satellite GPS Fleet Map...")}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-300 text-xs font-bold flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>Open Satellite GPS Map</span>
            </button>
          </div>

          {/* Today's Gate Attendance Alert */}
          <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-400 font-bold uppercase">Today's Check-in</span>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-emerald-400">Verified Present</div>
              <p className="text-xs text-slate-400 mt-2">
                Card scanned at Main Gate Turnstile #2 at <span className="text-white font-semibold">07:54 AM</span>.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 text-[11px] text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Biometric & RFID Confirmation Verified</span>
            </div>
          </div>

        </div>

        {/* Online Fee Pay & Teacher Messenger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Fee Payment Card */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/40 border border-white/10">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-amber-400" />
              <span>Fee Invoices & Dues</span>
            </h3>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-xs font-bold text-white">Term 3 (Winter Session 2026)</div>
                  <div className="text-[11px] text-slate-400">Tuition + Lab + Transport</div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">
                  Due 30 Nov
                </span>
              </div>
              <div className="text-3xl font-bold font-display text-white my-3">
                ₹38,250
              </div>
              <button
                onClick={handlePayFee}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <span>Pay Online (UPI / Card / NetBanking)</span>
              </button>
            </div>
          </div>

          {/* Teacher Direct Inbox */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-slate-900/40 border border-white/10">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-rose-400" />
              <span>Direct Chat with Class Teacher (Dr. Shalini Mukherji)</span>
            </h3>

            <div className="space-y-3 mb-4 max-h-48 overflow-y-auto pr-2">
              <div className="p-3 rounded-2xl bg-slate-900 border border-white/5 max-w-md">
                <span className="text-[10px] text-rose-300 block font-bold">Dr. Shalini Mukherji • 09:30 AM</span>
                <p className="text-xs text-slate-200 mt-1">
                  Good morning Mr. Sharma! Aarav showed exceptional performance in today's physics experiment. Keep encouraging him.
                </p>
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message to the class teacher..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-rose-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;

