import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  BookOpen, 
  Compass, 
  Calculator, 
  Bell, 
  Phone, 
  GraduationCap, 
  FileText,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const CommandPaletteModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { setIsAdmissionModalOpen } = useSchool();
  const [query, setQuery] = useState('');

  const searchableItems = [
    { title: "Home Page", category: "Navigation", path: "/", icon: Sparkles, desc: "Main landing & 3D hero experience" },
    { title: "Academic Programs", category: "Academics", path: "/academics", icon: BookOpen, desc: "Pre-K to Grade 12 STEM & Humanities" },
    { title: "Online Admissions 2026-27", category: "Admissions", path: "/admissions", icon: GraduationCap, desc: "Eligibility, checklist & registration form" },
    { title: "3D Virtual Campus Tour", category: "Campus", path: "/campus-tour", icon: Compass, desc: "Interactive 50-acre laboratories & sports tour" },
    { title: "Interactive Fee Estimator", category: "Finance", path: "/fees", icon: Calculator, desc: "Calculate tuition, bus & club charges" },
    { title: "School Circulars & Notices", category: "Bulletin", path: "/notices", icon: Bell, desc: "Board notices, exam dates & events" },
    { title: "About Institutional Legacy", category: "About", path: "/about", icon: GraduationCap, desc: "28 years of excellence since 1998" },
    { title: "Campus Contact & Helplines", category: "Contact", path: "/contact", icon: Phone, desc: "Department directory, map & visiting hours" },
    { title: "AI & Robotics Super-Lab", category: "Academics", path: "/academics", icon: BookOpen, desc: "Python, drone bays, and 3D printers" },
    { title: "Olympic Standard Sports Complex", category: "Campus", path: "/campus-tour", icon: Compass, desc: "50m heated pool & FIFA turf" },
    { title: "Early Bird Scholarship Application", category: "Admissions", path: "/admissions", icon: GraduationCap, desc: "Up to 100% merit tuition waiver" },
  ];

  const filteredItems = searchableItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (item) => {
    navigate(item.path);
    onClose();
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
      />

      {/* Palette Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -10 }}
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl z-10 overflow-hidden"
      >
        {/* Search Bar Input */}
        <div className="flex items-center px-6 py-4 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-indigo-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, admissions, curriculum, fees, or circulars... (ESC to close)"
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-mono font-bold bg-slate-100 text-slate-600 rounded-md border border-slate-200">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(item)}
                  className="p-3.5 rounded-2xl hover:bg-slate-50 cursor-pointer transition-all flex items-center justify-between group border border-transparent hover:border-slate-200"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-bold">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 font-normal">{item.desc}</p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </div>
              );
            })
          ) : (
            <div className="py-10 text-center text-slate-500 text-xs font-medium">
              No matching pages or circulars found for "{query}".
            </div>
          )}
        </div>

        {/* Bottom Help Ribbon */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
          <span>Quick tip: Type "fee" or "admission" for instant access</span>
          <button
            onClick={() => { onClose(); setIsAdmissionModalOpen(true); }}
            className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors cursor-pointer"
          >
            Apply Online &rarr;
          </button>
        </div>
      </motion.div>
    </div>
  );
};
