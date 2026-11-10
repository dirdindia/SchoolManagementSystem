import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Cpu, 
  FlaskConical, 
  Languages, 
  Trophy, 
  GraduationCap, 
  FileText 
} from 'lucide-react';
import { AcademicsShowcase } from '../components/AcademicsShowcase';
import { useSchool } from '../context/SchoolContext';

export const AcademicsPage = () => {
  const { setIsAdmissionModalOpen, showNotification } = useSchool();

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
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>Dual CBSE & Cambridge Curriculum</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Academic Excellence & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-900 to-amber-600">
              Future-Ready Pedagogy
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            From sensory-based early learning to rigorous pre-university SAT, JEE, and Cambridge examinations, our educational framework shapes intellect, curiosity, and ethical conviction.
          </p>
        </motion.div>
      </div>

      {/* Main Interactive Academics Tabbed Showcase */}
      <AcademicsShowcase />

      {/* Deep-Dive STEM, Sciences & Co-curricular Pillars */}
      <section className="py-20 relative bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-800 block mb-2">
              Beyond Textbooks
            </span>
            <h2 className="text-3xl font-display font-extrabold text-slate-900">
              Specialized Centers of Excellence
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 font-normal">
              Every student engages with hands-on hardware, research equipment, and international cultural forums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 border border-indigo-200 flex items-center justify-center mb-6 shadow-xs">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 mb-3">
                AI, Robotics & Drone Bay
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                Students code in Python, C++, and Scratch, building humanoid bots, obstacle-avoiding rovers, and IoT environmental monitors from Grade 4 onwards.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>NASA Space Settlement Design Partner</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>3D Prototyping & Laser Cutting</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 border border-amber-200 flex items-center justify-center mb-6 shadow-xs">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 mb-3">
                Biotech & Chemical Science Labs
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                State-of-the-art laboratory benches with optical microscopes, fume chambers, and molecular modeling kits enabling real scientific inquiry.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Individual workstation per scholar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Olympiad & KVPY Mentorship</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-6 shadow-xs">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 mb-3">
                Global Diplomacy & MUN Guild
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                Active foreign language certification in French (DELF), German (Goethe-Zertifikat), and student delegations at international MUN conferences.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Oxford & Harvard Model UN Laureates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Acoustically treated language studio</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Download Curriculum Bar */}
          <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span>Complete Academic Handbook & Curriculum Guide (PDF)</span>
              </h4>
              <p className="text-xs text-slate-600 mt-1 font-medium">Detailed subject breakdown, assessment rubrics, and textbook lists for Session 2026-27.</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => showNotification("Downloading 2026-27 Academic Curriculum Guide (PDF)...")}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center gap-2 border border-slate-300 shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Download Handbook</span>
              </button>
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all cursor-pointer"
              >
                <span>Apply for Admission</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AcademicsPage;
