import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  Building,
  GraduationCap,
  Calendar,
  Layers
} from 'lucide-react';
import { Hero3DCanvas } from './3d/Hero3DCanvas';
import { useSchool } from '../context/SchoolContext';
import { schoolDetails, heroCampusGallery } from '../data/mockData';

export const HeroSection = () => {
  const { setIsAdmissionModalOpen } = useSchool();
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Auto-cycle through the 4 school campus pictures
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % heroCampusGallery.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to +10 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20; // -10 to +10 deg
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const currentPhoto = heroCampusGallery[activePhotoIndex];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-10 lg:py-16 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-slate-50">
      {/* Three.js 3D Celestial Gyroscopic Canvas Layer in Background */}
      {/* <Hero3DCanvas /> */}

      {/* Atmospheric Soft Light Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Prestigious Recognition Pill */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300 shadow-sm mb-5 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-bold text-amber-900">
                Ranked #1 CBSE Senior Secondary & STEM Innovation School in New Delhi
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-950 leading-[1.15] mb-5">
              Empowering Minds, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-600 to-amber-600">
                Inspiring Genius,
              </span> <br />
              Shaping Tomorrow.
            </h1>

            {/* Sanskrit Motto Badge */}
            <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800">
              <span className="font-serif italic">सा विद्या या विमुक्तये</span>
              <span className="text-amber-500">•</span>
              <span className="font-sans font-normal text-slate-600">Knowledge Bestows Liberation</span>
            </div>

            {/* Sub-description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mb-7 leading-relaxed font-normal">
              Delhi Heritage Public School merges 28 years of academic distinction with state-of-the-art 
              AI smart classrooms, Atal Tinkering robotics laboratories, Olympic athletic grounds, and CBSE-Cambridge 
              accredited holistic education from Pre-Primary through Grade XII.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="relative group overflow-hidden px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-amber-600 shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Apply for Admission (2026-27)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/campus-tour"
                className="px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm backdrop-blur-md transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Compass className="w-4 h-4 text-indigo-600 group-hover:rotate-45 transition-transform" />
                <span>3D Virtual Campus Tour</span>
              </Link>
            </div>

            {/* Micro-Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-5 border-t border-slate-200 w-full max-w-xl text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Smart Classrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1:12 Faculty Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>IIT / AIIMS Mentorship</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Animated School Pictures Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* 3D Perspective Stage Container */}
            <div 
              className="w-full max-w-lg perspective-[1200px]"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                animate={{
                  rotateY: mousePosition.x,
                  rotateX: mousePosition.y,
                }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                className="relative rounded-3xl overflow-hidden border-2 border-white shadow-2xl shadow-indigo-900/15 bg-white aspect-[4/3] group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Active Photo with Smooth Transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhoto.id}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.55 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={currentPhoto.image}
                      alt={currentPhoto.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-95"
                    />

                    {/* Subtle Cinematic Bottom Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                    {/* Top Floating 3D Badges */}
                    <div 
                      className="absolute top-4 left-4 right-4 flex items-center justify-between"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 border border-slate-200 shadow-md flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>{currentPhoto.tag}</span>
                      </span>

                      <span className="px-3 py-1 rounded-full bg-indigo-600/90 backdrop-blur-md text-white text-xs font-bold shadow-md flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Live 3D View</span>
                      </span>
                    </div>

                    {/* Bottom Floating Caption Card in 3D Depth */}
                    <div 
                      className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl"
                      style={{ transform: "translateZ(45px)" }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
                          {currentPhoto.badge} • Photo 0{activePhotoIndex + 1} of 0{heroCampusGallery.length}
                        </span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                          {currentPhoto.stats}
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
                        {currentPhoto.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-1 font-medium">
                        {currentPhoto.subtitle}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left & Right Manual 3D Nav Controls */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) => (prev === 0 ? heroCampusGallery.length - 1 : prev - 1));
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg border border-slate-200 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer z-20"
                  aria-label="Previous Campus Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) => (prev + 1) % heroCampusGallery.length);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg border border-slate-200 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer z-20"
                  aria-label="Next Campus Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            {/* 4 Interactive Thumbnail Pills with Progress Bar */}
            <div className="grid grid-cols-4 gap-2.5 w-full max-w-lg mt-4">
              {heroCampusGallery.map((photo, idx) => {
                const isActive = idx === activePhotoIndex;
                return (
                  <button
                    key={photo.id}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`p-2 rounded-2xl text-left border transition-all relative overflow-hidden group cursor-pointer ${
                      isActive
                        ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-500/20'
                        : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="aspect-[16/10] rounded-xl overflow-hidden mb-1.5 relative">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-indigo-600/15" />
                      )}
                    </div>
                    <div className="text-[10px] font-bold text-slate-800 truncate block">
                      {photo.title.split(' ')[0]} {photo.title.split(' ')[1]}
                    </div>
                    {/* Animated Active indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activePillIndicator"
                        className="h-1 bg-gradient-to-r from-indigo-600 to-amber-500 rounded-full mt-1"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
