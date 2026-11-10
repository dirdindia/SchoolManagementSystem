import React from 'react';
import { motion } from 'framer-motion';
import { 
  Quote, 
  Sparkles, 
  Award, 
  Play, 
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const PrincipalMessage = () => {
  const { showNotification } = useSchool();

  return (
    <section id="principal" className="py-24 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Principal Portrait & Prestige Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl p-2 bg-gradient-to-b from-indigo-100/60 via-white to-amber-100/50">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Principal Dr. Shalini Mukherji"
                  className="w-full h-full object-cover object-top filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Video Play Button Simulation */}
                <button
                  onClick={() => showNotification("Playing Principal's Welcome Address (2026-27 Orientation)...")}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-indigo-600/90 hover:bg-indigo-700 text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-all hover:scale-110 group cursor-pointer"
                  title="Watch Principal's Video Address"
                >
                  <Play className="w-6 h-6 fill-current ml-1" />
                </button>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">Dr. Shalini Mukherji</h4>
                      <p className="text-[11px] text-indigo-700 font-semibold">Ph.D. Education (Oxford) • National Awardee</p>
                    </div>
                    <Award className="w-5 h-5 text-amber-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accredited Badge */}
            <div className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center gap-3 backdrop-blur-xl">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <span className="text-xs font-extrabold text-slate-900 block">28+ Years Leadership</span>
                <span className="text-[10px] text-slate-500 font-medium">CBSE & Cambridge Board Mentor</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inspiring Leadership Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-100/70 border border-amber-300 flex items-center justify-center text-amber-700 mb-6 shadow-xs">
              <Quote className="w-6 h-6" />
            </div>

            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-700 mb-2">
              From the Desk of the Principal
            </span>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              "We Don't Just Prepare Students for Exams; We Prepare Them to Lead the World."
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              At Gurukul International School (Powered by DIRD), every child is recognized as an unrepeatable miracle of curiosity and human potential. 
              Our vision unites rigorous CBSE academics with timeless Indian values: empathy, resilience, ethical courage, and collaborative innovation.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8 font-normal">
              Through our AI-integrated smart classrooms and bespoke teacher-student mentorship, we ensure no dream is too grand and no challenge too steep. 
              We invite you to step into a school community that celebrates your child every single day.
            </p>

            {/* Core Values Ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-slate-200 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Ethical Character</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">STEM Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Global Perspective</span>
              </div>
            </div>

            {/* Signature & Seal */}
            <div className="flex items-center gap-6">
              <div>
                <div className="font-serif italic text-2xl text-slate-900 font-bold tracking-wide">
                  Dr. Shalini Mukherji
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Director & Principal, Gurukul International School, New Delhi • Powered by DIRD
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
