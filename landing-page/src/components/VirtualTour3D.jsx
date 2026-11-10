import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  Eye, 
  MapPin, 
  Layers, 
  Calendar, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { virtualTourHotspots } from '../data/mockData';
import { useSchool } from '../context/SchoolContext';

export const VirtualTour3D = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentTour = virtualTourHotspots[selectedIndex];
  const { setIsAdmissionModalOpen } = useSchool();

  return (
    <section id="tour" className="py-24 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-3.5 border border-amber-200 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Virtual Campus Walkthrough</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Explore Our 50-Acre <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-900 to-amber-700">
              World-Class Infrastructure
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Designed to stimulate innovation, creativity, athletic excellence, and intellectual discovery.
          </p>
        </div>

        {/* 3D Visual Experience Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Visual Display (Large Showcase Card) */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTour.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45 }}
                className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl group h-[420px] sm:h-[480px]"
              >
                {/* Background Image with Cinematic Overlay */}
                <img
                  src={currentTour.image}
                  alt={currentTour.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-900 flex items-center gap-2 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>{currentTour.category}</span>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full bg-indigo-600/95 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Live 360° View Ready</span>
                  </div>
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
                    Featured Facility
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2 drop-shadow-sm">
                    {currentTour.name}
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm max-w-xl mb-4 leading-relaxed drop-shadow-xs font-medium">
                    {currentTour.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <span>{currentTour.stats}</span>
                    </div>

                    <button
                      onClick={() => setIsAdmissionModalOpen(true)}
                      className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 border border-white/30 transition-all shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5 text-amber-300" />
                      <span>Book On-Campus Tour</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Selector List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 px-1">
              Select Campus Zone ({virtualTourHotspots.length} Zones)
            </div>

            {virtualTourHotspots.map((spot, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={spot.name}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full p-4 rounded-2xl text-left transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white border-indigo-600 shadow-md shadow-indigo-500/10 ring-2 ring-indigo-500/10'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                      isSelected
                        ? 'bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white shadow-md'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${
                        isSelected ? 'text-indigo-950 font-extrabold' : 'text-slate-800'
                      }`}>
                        {spot.name}
                      </h4>
                      <span className="text-xs text-slate-500 font-medium">
                        {spot.category}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-indigo-600 translate-x-1' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}

            {/* Quick Tour Notice */}
            <div className="mt-2 p-4 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-xs text-indigo-900 flex items-start gap-2.5 font-medium shadow-xs">
              <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span>
                Physical tours are conducted every Saturday between 9:00 AM and 2:00 PM with campus directors.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
