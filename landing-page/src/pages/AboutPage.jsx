import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Target, 
  Heart,
  Globe
} from 'lucide-react';
import { PrincipalMessage } from '../components/PrincipalMessage';
import { schoolDetails } from '../data/mockData';

export const AboutPage = () => {
  const milestones = [
    { year: "1998", title: "Inaugural Foundation", desc: "Established with 120 scholars and a vision to redefine progressive learning in India." },
    { year: "2006", title: "Cambridge International Accreditation", desc: "Introduced IGCSE and A-Levels curriculum alongside CBSE board standards." },
    { year: "2015", title: "Olympic Sports Complex Opening", desc: "Inaugurated 50m heated pool, FIFA turf arena, and indoor sports stadium." },
    { year: "2022", title: "AI Super-Lab & Robotics Bay", desc: "Launched 3D prototyping, IoT clusters, and humanoid programming bays." },
    { year: "2026", title: "National Rank #1 Innovation School", desc: "Celebrated 3,450+ scholars, 100% smart classrooms, and 99.2% university placement." }
  ];

  return (
    <div className="pt-8 pb-20 relative bg-slate-50">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-4 border border-indigo-200 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
            <span>28+ Years of Institutional Distinction • Estd. 1998</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Nurturing Leaders Who <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-900 to-amber-600">
              Transform the World
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Delhi Heritage Public School stands at the intersection of timeless Indian values, cutting-edge science, and global ambition.
          </p>
        </motion.div>
      </div>

      {/* Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center mb-6 shadow-xs">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              To be an internationally revered center of learning that cultivates morally grounded, intellectually fearless, and socially empathetic leaders equipped to solve humanity's greatest challenges.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-6 shadow-xs">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              To provide an experiential, inquiry-based curriculum that balances rigorous STEM innovation, creative arts, athletic fortitude, and inclusive ethical character in every student.
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Note */}
      <PrincipalMessage />

      {/* Historical Milestones */}
      <section className="py-20 relative bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-700 block mb-2">
              Our Journey
            </span>
            <h2 className="text-3xl font-display font-extrabold text-slate-900">
              Twenty-Eight Years of Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="bg-slate-50 p-6 rounded-3xl border border-slate-200/90 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
                <div>
                  <div className="text-2xl font-black font-display text-indigo-700 mb-2">
                    {m.year}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{m.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
