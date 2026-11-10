import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  Calendar, 
  Tag, 
  FileText, 
  AlertCircle, 
  ArrowRight, 
  Clock, 
  Send,
  Sparkles
} from 'lucide-react';
import { liveNotices } from '../data/mockData';
import { useSchool } from '../context/SchoolContext';

export const NoticeBoard = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const { showNotification } = useSchool();

  const categories = ['All', 'Admissions', 'Academic', 'Events', 'Sports'];

  const filteredNotices = selectedFilter === 'All'
    ? liveNotices
    : liveNotices.filter(n => n.category.toLowerCase() === selectedFilter.toLowerCase());

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscriberEmail) return;
    showNotification(`Subscribed ${subscriberEmail} to official school circular alerts!`);
    setSubscriberEmail('');
  };

  return (
    <section id="notices" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Live Countdown Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3.5 border border-indigo-200 shadow-xs">
              <Bell className="w-3.5 h-3.5 text-indigo-600" />
              <span>Real-Time Bulletin</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              Live School Circulars & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-900 to-amber-600">
                Official Announcements
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
              Stay synchronized with academic calendars, administrative circulars, and inter-school achievements.
            </p>
          </div>

          {/* Live Admissions Closing Countdown Ribbon */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-indigo-50/60 border border-amber-200 shadow-md">
            <div className="flex items-center gap-2 text-xs font-extrabold text-amber-800 mb-2">
              <Clock className="w-4 h-4 text-amber-600 animate-spin-slow" />
              <span>EARLY ADMISSION ROUND 1 DEADLINE</span>
            </div>
            <div className="text-xs text-slate-600 mb-3.5 font-medium">
              Merit assessment test for Class 1 to Class 11 registrations:
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xl font-extrabold font-display text-slate-900">14</span>
                <span className="text-[10px] text-slate-500 font-bold block">Days</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xl font-extrabold font-display text-slate-900">08</span>
                <span className="text-[10px] text-slate-500 font-bold block">Hours</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xl font-extrabold font-display text-slate-900">35</span>
                <span className="text-[10px] text-slate-500 font-bold block">Mins</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xl font-extrabold font-display text-amber-600">42</span>
                <span className="text-[10px] text-slate-500 font-bold block">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AnimatePresence>
            {filteredNotices.map((notice) => (
              <motion.div
                key={notice.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                whileHover={{ y: -4 }}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-bold border border-indigo-200">
                        {notice.category}
                      </span>
                      {notice.isUrgent && (
                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[11px] font-bold border border-rose-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                          Urgent
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {notice.date}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2 leading-snug">
                    {notice.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    {notice.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => showNotification(`Downloading official circular #${notice.id} PDF...`)}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Download Circular (PDF)</span>
                  </button>

                  <span className="text-[11px] text-slate-400 font-medium">Official Seal Verified</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* WhatsApp / Email Alerts Subscription Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Instant WhatsApp & Email Alerts for Parents</span>
            </h4>
            <p className="text-xs text-slate-600 mt-1 font-medium">Get emergency holidays, bus delay alerts, and exam schedules instantly delivered.</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto items-center gap-2">
            <input
              type="email"
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              placeholder="Enter your phone or email..."
              className="px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 w-full md:w-72 shadow-2xs"
              required
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shadow-indigo-600/20 shrink-0"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
