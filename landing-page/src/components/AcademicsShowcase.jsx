import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  FlaskConical, 
  Languages, 
  Trophy,
  Compass
} from 'lucide-react';
import { academicPrograms } from '../data/mockData';
import { useSchool } from '../context/SchoolContext';

export const AcademicsShowcase = () => {
  const [activeTab, setActiveTab] = useState(academicPrograms[0].id);
  const { setIsAdmissionModalOpen } = useSchool();

  const selectedProgram = academicPrograms.find((p) => p.id === activeTab) || academicPrograms[0];

  return (
    <section id="academics" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3.5 border border-indigo-200 shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <span>Progressive Pedagogy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Curating Brilliance Across <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-800 to-amber-600">
                Every Educational Phase
              </span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
            Our dual-accredited CBSE and Cambridge International curriculum fosters critical reasoning, emotional intelligence, and technological mastery from nursery to pre-university.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-10">
          {academicPrograms.map((prog) => {
            const isActive = prog.id === activeTab;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden ${
                  isActive
                    ? 'bg-white border-indigo-600 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/20'
                    : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-amber-500/5 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-indigo-100 text-indigo-800 border border-indigo-300/60' 
                      : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    {prog.badge}
                  </span>
                </div>
                <div className={`font-display font-bold text-sm sm:text-base ${
                  isActive ? 'text-indigo-950 font-extrabold' : 'text-slate-700'
                }`}>
                  {prog.title.split('(')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Program Detailed Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden"
          >
            {/* Top Accent Gradient Ribbon */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${selectedProgram.accent}`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200 shadow-sm">
                    {selectedProgram.badge}
                  </span>
                  <span className="text-slate-500 text-xs font-medium">Autonomous Comprehensive Stream</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                  {selectedProgram.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  {selectedProgram.description}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedProgram.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.99] transition-all"
                  >
                    <span>Apply for this Grade</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    to="/campus-tour"
                    className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors border border-slate-200 shadow-xs"
                  >
                    <Compass className="w-4 h-4 text-indigo-600" />
                    <span>View Classrooms in 3D</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Feature Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200/70 flex flex-col justify-between h-44 shadow-xs">
                  <Cpu className="w-8 h-8 text-indigo-600 mb-2" />
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">Robotics & AI Curriculum</h5>
                    <p className="text-xs text-slate-600 mt-1 font-medium">Python, Scratch, and Hardware kits provided.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 flex flex-col justify-between h-44 shadow-xs">
                  <FlaskConical className="w-8 h-8 text-amber-600 mb-2" />
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">Experimental Sciences</h5>
                    <p className="text-xs text-slate-600 mt-1 font-medium">3D simulated & physical chemical apparatus.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 flex flex-col justify-between h-44 shadow-xs">
                  <Languages className="w-8 h-8 text-emerald-600 mb-2" />
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">Global Linguistics</h5>
                    <p className="text-xs text-slate-600 mt-1 font-medium">French, German, Spanish & Sanskrit labs.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200/70 flex flex-col justify-between h-44 shadow-xs">
                  <Trophy className="w-8 h-8 text-purple-600 mb-2" />
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">Inter-School Sports</h5>
                    <p className="text-xs text-slate-600 mt-1 font-medium">Olympic swimming, football & synthetic tennis.</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
