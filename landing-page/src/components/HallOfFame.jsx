import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  Star, 
  GraduationCap, 
  BookOpen, 
  ChevronRight,
  TrendingUp,
  Quote
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { topperStudents } from '../data/mockData';

export const HallOfFame = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#6366f1', '#10b981', '#ec4899', '#3b82f6']
    });
  };

  const categories = [
    { id: 'all', label: 'All Achievers' },
    { id: 'science', label: 'Science & JEE (IIT)' },
    { id: 'commerce', label: 'Commerce & Economics' },
    { id: 'humanities', label: 'Humanities & Global' },
    { id: 'class10', label: 'Class X All-India' }
  ];

  const filteredToppers = topperStudents.filter((student) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'science') return student.stream.toLowerCase().includes('science');
    if (selectedCategory === 'commerce') return student.stream.toLowerCase().includes('commerce');
    if (selectedCategory === 'humanities') return student.stream.toLowerCase().includes('humanities');
    if (selectedCategory === 'class10') return student.stream.toLowerCase().includes('class x');
    return true;
  });

  return (
    <section className="py-24 relative bg-gradient-to-b from-slate-50 via-amber-50/25 to-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold mb-3 border border-amber-300/80 shadow-xs">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>प्रतिभा सम्मान • Hall of Academic Fame</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Honoring Our CBSE Board Toppers & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-indigo-600 to-indigo-800">
                All-India Competitive Exam Achievers
              </span>
            </h2>
          </div>

          {/* Quick Confetti & Aggregate Metric */}
          <div className="flex items-center gap-3">
            <button
              onClick={triggerCelebration}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-amber-50 text-amber-800 border border-amber-300 shadow-sm text-xs font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Celebrate Scholars 🎉</span>
            </button>
            <div className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white shadow-md text-xs font-bold hidden sm:flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-amber-300" />
              <span>42 Scholars @ 95%+</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Toppers Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredToppers.map((student) => (
              <motion.div
                key={student.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-300 transition-all flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Gold Crest Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-indigo-600" />

                <div>
                  {/* Photo & Score Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md">
                        <img 
                          src={student.avatar} 
                          alt={student.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs border-2 border-white">
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>

                    {/* Percentage Score Pill */}
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black text-sm shadow-sm">
                        <span>{student.score}</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold block mt-1 uppercase tracking-wider">
                        CBSE Board
                      </span>
                    </div>
                  </div>

                  {/* Student Name & Stream */}
                  <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {student.name}
                  </h3>
                  <p className="text-xs text-indigo-700 font-semibold mb-3">
                    {student.stream}
                  </p>

                  {/* Major Achievement Pill */}
                  <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/70 text-[11px] font-bold text-amber-900 mb-4 leading-snug flex items-start gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{student.achievement}</span>
                  </div>

                  {/* Student Quote */}
                  <p className="text-xs text-slate-600 italic font-normal leading-relaxed mb-4 pl-3 border-l-2 border-indigo-200">
                    "{student.quote}"
                  </p>
                </div>

                {/* Card Footer Tag */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-500 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Gurukul Alumnus</span>
                  </span>
                  <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    {student.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Proof Strip */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">
                100% CBSE Pass Rate for 28 Consecutive Years
              </h4>
              <p className="text-xs text-slate-600 font-normal">
                Average school aggregate in Class XII: <strong>98.6%</strong> • 18 Scholars admitted to IITs, AIIMS & Top 50 Global Universities in 2025.
              </p>
            </div>
          </div>

          <a
            href="/academics"
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all shrink-0 flex items-center gap-1.5"
          >
            <span>View Full Merit Roster</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HallOfFame;

