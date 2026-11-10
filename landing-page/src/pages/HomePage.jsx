import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Calculator, 
  Bell, 
  Award, 
  ShieldCheck, 
  CheckCircle2,
  Calendar,
  Users
} from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { AccreditationsMarquee } from '../components/AccreditationsMarquee';
import { SchoolStats } from '../components/SchoolStats';
import { PrincipalMessage } from '../components/PrincipalMessage';
import { HallOfFame } from '../components/HallOfFame';
import { CampusLifeExplorer } from '../components/CampusLifeExplorer';
import { FeeEstimatorWidget } from '../components/FeeEstimatorWidget';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { academicPrograms, liveNotices } from '../data/mockData';
import { useSchool } from '../context/SchoolContext';

export const HomePage = () => {
  const { setIsAdmissionModalOpen } = useSchool();

  return (
    <div className="relative overflow-hidden bg-slate-50">
      {/* 3D Interactive Hero with Real Campus Photos */}
      <HeroSection />

      {/* National Accreditations & Recognitions Ribbon */}
      <AccreditationsMarquee />

      {/* Real-time Institutional Key Metrics */}
      <SchoolStats />

      {/* Principal & Leadership Welcome Address */}
      <PrincipalMessage />

      {/* CBSE Toppers & All-India Competitive Achievers Hall of Fame */}
      <HallOfFame />

      {/* A Day in the Life: Interactive Campus Life Explorer */}
      <CampusLifeExplorer />

      {/* Academic Highlights Section */}
      <section className="py-24 relative bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3.5 border border-indigo-200 shadow-xs">
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                <span>Academic Wings</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                Holistic Pedagogy from <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-900 to-amber-600">
                  Kindergarten to Pre-University
                </span>
              </h2>
            </div>
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <span>Explore All Academic Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicPrograms.map((prog) => (
              <motion.div
                key={prog.id}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 flex flex-col justify-between transition-all"
              >
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 mb-4 inline-block">
                    {prog.badge}
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">
                    {prog.title.split('(')[0]}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    {prog.description.substring(0, 110)}...
                  </p>
                </div>

                <Link
                  to="/academics"
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 pt-4 border-t border-slate-100"
                >
                  <span>Curriculum & Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Fee Structure & Scholarship Estimator */}
      <FeeEstimatorWidget />

      {/* Latest Notice Ticker */}
      <section className="py-20 relative bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Latest Announcements */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-indigo-600" />
                  <h3 className="font-display font-extrabold text-lg text-slate-900">Latest Institutional Circulars</h3>
                </div>
                <Link to="/notices" className="text-xs font-bold text-indigo-600 hover:text-indigo-800">
                  View All &rarr;
                </Link>
              </div>

              <div className="space-y-4">
                {liveNotices.slice(0, 2).map((notice) => (
                  <div key={notice.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center justify-between text-[11px] mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
                        {notice.category}
                      </span>
                      <span className="text-slate-500 font-medium">{notice.date}</span>
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900 mb-1">{notice.title}</h4>
                    <p className="text-xs text-slate-600 font-normal">{notice.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D Campus Tour Teaser */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 mb-2">
                  <Compass className="w-4 h-4" />
                  <span>CAMPUS EXPERIENCE</span>
                </div>
                <h3 className="font-display font-extrabold text-xl text-slate-900 mb-2">
                  Take a 3D Virtual Walkthrough
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  Explore high-resolution 360° views of our Atal Tinkering Lab, Olympic Swimming Pool, Smart Auditoriums, and Science Wings from anywhere.
                </p>
                <div className="rounded-2xl overflow-hidden aspect-video relative border border-slate-200 mb-4 group">
                  <img
                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80"
                    alt="Campus Virtual Tour"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-xs font-bold text-slate-900 shadow-md">
                      Interactive 360° View
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/campus-tour"
                className="w-full py-3.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-indigo-200 transition-all shadow-2xs"
              >
                <span>Launch Interactive Campus Tour</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <TestimonialsSection />

      {/* Bottom CTA Banner */}
      <section className="py-16 relative bg-gradient-to-r from-indigo-50 via-white to-amber-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mb-4">
            Admissions Open for Academic Session 2026-27
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-8 font-normal">
            Limited seats across Nursery to Grade XI. Take the first step towards an extraordinary future for your child.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Apply Online for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/admissions"
              className="px-8 py-4 rounded-2xl bg-white border border-slate-300 text-slate-800 hover:text-slate-900 text-sm font-bold hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <span>View Admission Process & Criteria</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
