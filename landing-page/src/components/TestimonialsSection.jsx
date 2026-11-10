import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import { testimonials } from '../data/mockData';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      {/* Subtle Glow Orbs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-3.5 border border-amber-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Voice of Our Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Trusted by Parents, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-indigo-700 to-indigo-900">
              Celebrated by Alumni Worldwide
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 font-normal">
            Real stories of transformation, academic milestones, and lifelong character building.
          </p>
        </div>

        {/* 3D Testimonial Spotlight Card */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/60 relative overflow-hidden"
            >
              {/* Subtle Decorative Background Quote Icon */}
              <Quote className="absolute top-6 right-8 w-24 h-24 text-slate-100 pointer-events-none" />

              {/* 5-Star Rating Row */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-amber-800 ml-2">5.0 Star Institutional Review</span>
              </div>

              {/* Testimonial Quote Text */}
              <p className="text-lg sm:text-2xl font-serif italic text-slate-800 leading-relaxed mb-8 font-normal">
                "{current.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-indigo-200 shadow-sm"
                  />
                  <div>
                    <h4 className="font-display font-extrabold text-base sm:text-lg text-slate-900">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-indigo-700 font-semibold">
                      {current.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Community Member
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all hover:scale-105 shadow-xs"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-8 bg-indigo-600'
                      : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all hover:scale-105 shadow-xs"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
