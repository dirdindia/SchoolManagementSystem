import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, Sparkles, Download, Clock } from 'lucide-react';
import { NoticeBoard } from '../components/NoticeBoard';
import { useSchool } from '../context/SchoolContext';

export const NoticesPage = () => {
  const { showNotification } = useSchool();

  const upcomingEvents = [
    { title: "Annual Global Science & Innovation Expo", date: "Nov 25, 2026", time: "09:30 AM", venue: "AI Super-Lab & Main Quad", badge: "Flagship Event" },
    { title: "CBSE & Cambridge Regional Basketball Tournament", date: "Dec 02, 2026", time: "08:00 AM", venue: "Olympic Indoor Stadium", badge: "Sports" },
    { title: "Pre-Board Examinations (Grades X & XII)", date: "Dec 12, 2026", time: "10:00 AM", venue: "Examination Halls", badge: "Academic" },
    { title: "Winter Carnival & Alumni Homecoming", date: "Dec 22, 2026", time: "11:00 AM", venue: "Main Amphitheater", badge: "Cultural" }
  ];

  return (
    <div className="pt-8 pb-20 relative bg-slate-50">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-4 border border-amber-200 shadow-xs">
            <Bell className="w-3.5 h-3.5 text-amber-600" />
            <span>Real-Time Bulletin & Calendar</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            School Circulars, Notices & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-900 to-amber-600">
              Upcoming Events Calendar
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Stay synchronized with board circulars, examination schedules, athletic championships, and academic milestones.
          </p>
        </motion.div>
      </div>

      {/* Main Notice Board Component */}
      <NoticeBoard />

      {/* Upcoming Events Calendar */}
      <section className="py-20 relative bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              Calendar of Major Institutional Events (Winter Term)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
              Mark your calendars for inter-school competitions, parent-teacher conventions, and cultural exhibitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((evt, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold">
                      {evt.badge}
                    </span>
                    <span className="text-xs text-amber-800 font-bold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      {evt.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{evt.title}</h3>
                  <div className="text-xs text-slate-600 space-y-1 font-medium">
                    <div>Time: <span className="text-slate-800 font-semibold">{evt.time}</span></div>
                    <div>Venue: <span className="text-slate-800 font-semibold">{evt.venue}</span></div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <button
                    onClick={() => showNotification(`Added "${evt.title}" to Google Calendar!`)}
                    className="text-indigo-600 hover:text-indigo-800 font-bold cursor-pointer"
                  >
                    + Add to Google Calendar
                  </button>
                  <span className="text-slate-400 font-medium">Live Campus Event</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default NoticesPage;
