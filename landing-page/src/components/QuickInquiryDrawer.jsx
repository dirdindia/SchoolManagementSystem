import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneCall, 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Search,
  Clock
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const QuickInquiryDrawer = ({ onOpenTracker }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { showNotification } = useSchool();

  const handleRequestCallback = (e) => {
    e.preventDefault();
    if (!phone) return;
    setIsSuccess(true);
    showNotification(`Callback scheduled for ${phone}! Our counselor will call shortly.`);
    setTimeout(() => {
      setIsSuccess(false);
      setIsOpen(false);
      setParentName('');
      setPhone('');
    }, 3000);
  };

  return (
    <>
      {/* Floating Trigger Button on Bottom Right */}
      <div className="fixed bottom-4 right-4 sm:right-6 z-40 flex flex-col items-end gap-2">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex items-center gap-2"
            >
              {/* Direct WhatsApp Chat Pill */}
              <a
                href="https://wa.me/919876543210?text=Hello%20Gurukul%20International%20School,%20I%20would%20like%20to%20inquire%20about%202026-27%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">WhatsApp Help</span>
              </a>

              <button
                onClick={() => onOpenTracker()}
                className="px-3.5 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-200/90 shadow-lg shadow-slate-200/50 flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer hidden md:flex"
              >
                <Search className="w-3.5 h-3.5 text-indigo-600" />
                <span>Track Admission</span>
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 animate-bounce" />
                <span>Instant Callback</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Popup Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-88 sm:w-96 bg-white p-6 rounded-3xl border border-slate-200 shadow-2xl"
          >
            {/* Top Close */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                <Sparkles className="w-4 h-4" />
                <span>ADMISSION HELPLINE DIRECT</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h4 className="text-base font-extrabold text-slate-900 mb-1">
              Request a 10-Minute Callback
            </h4>
            <p className="text-xs text-slate-600 mb-4 font-normal">
              Our Senior Academic Counselor will phone you to explain syllabus, scholarships, and campus facilities.
            </p>

            {!isSuccess ? (
              <form onSubmit={handleRequestCallback} className="space-y-3">
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="Your Name (Optional)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile / WhatsApp Number *"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/25 hover:bg-indigo-700 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Call Me Back</span>
                </button>

                <div className="relative my-2 text-center">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                  <span className="relative px-2 bg-white text-[10px] text-slate-400 uppercase font-bold">Or Instant Chat</span>
                </div>

                <a
                  href="https://wa.me/919876543210?text=Hello%20Gurukul%20International%20School,%20I%20would%20like%20to%20inquire%20about%202026-27%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </form>
            ) : (
              <div className="text-center py-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h5 className="text-sm font-bold text-slate-900">Callback Request Queued!</h5>
                <p className="text-xs text-slate-600 mt-1 font-medium">Our officer will phone {phone} in the next 10 minutes.</p>
              </div>
            )}

            {/* Quick Actions at bottom */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                onClick={() => { setIsOpen(false); onOpenTracker(); }}
                className="text-amber-800 hover:text-amber-900 flex items-center gap-1 font-bold cursor-pointer"
              >
                <Search className="w-3 h-3" />
                <span>Track Application</span>
              </button>
              <a
                href="tel:+919876543210"
                className="text-indigo-600 hover:text-indigo-800 font-bold"
              >
                Direct Call &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
