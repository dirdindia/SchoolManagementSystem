import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Layers, 
  ShieldAlert, 
  GraduationCap, 
  BookOpen, 
  HeartHandshake, 
  CreditCard, 
  Library, 
  Bus, 
  Building, 
  FileSpreadsheet, 
  Headphones,
  ArrowRight,
  Globe,
  Sparkles,
  Palette
} from 'lucide-react';
import { panelsList } from '../data/mockData';
import { useSchool } from '../context/SchoolContext';

const iconComponents = {
  Globe: Globe,
  ShieldAlert: ShieldAlert,
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  HeartHandshake: HeartHandshake,
  CreditCard: CreditCard,
  Library: Library,
  Bus: Bus,
  Building: Building,
  FileSpreadsheet: FileSpreadsheet,
};

export const PanelPortalModal = () => {
  const { isPanelPortalOpen, setIsPanelPortalOpen, showNotification } = useSchool();

  if (!isPanelPortalOpen) return null;

  const handleSelectPanel = (panel) => {
    showNotification(`${panel.name} will adopt this unified modern light theme!`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsPanelPortalOpen(false)}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Top Shimmer */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-amber-400 to-indigo-600" />

        {/* Modal Header */}
        <div className="flex items-start justify-between mb-6 pb-4 border-b border-slate-100 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UNIFIED SCHOOL MANAGEMENT ECOSYSTEM</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
              Role-Based Panels Architecture
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              All panels will inherit this ultra-modern clean light theme, responsive layout, and typography.
            </p>
          </div>

          <button
            onClick={() => setIsPanelPortalOpen(false)}
            className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Grid of Panels */}
        <div className="overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
          {panelsList.filter(p => p.id !== 'landing').map((panel) => {
            const Icon = iconComponents[panel.icon] || Layers;

            return (
              <div
                key={panel.id}
                onClick={() => handleSelectPanel(panel)}
                className="p-4 sm:p-5 rounded-2xl text-left border border-slate-200 hover:border-indigo-400 bg-slate-50/70 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/10 transition-all flex flex-col justify-between group relative overflow-hidden cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${panel.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {panel.name}
                      </h4>
                      <span className="text-[11px] font-bold text-amber-800">
                        {panel.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {panel.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs font-bold text-indigo-600 group-hover:text-indigo-800 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5" />
                    <span>Light Theme Standard</span>
                  </span>
                  <span className="text-[11px] text-slate-400 group-hover:text-slate-600 font-semibold">Phase 2 Setup</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between shrink-0 text-xs text-slate-500 font-medium">
          <span>Currently Active: Master Landing Page (Light Mode)</span>
          <button
            onClick={() => setIsPanelPortalOpen(false)}
            className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors cursor-pointer"
          >
            Close & Continue Exploring Landing Page
          </button>
        </div>
      </motion.div>
    </div>
  );
};
