import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  Cpu, 
  Globe, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { accreditationBadges } from '../data/mockData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Award: Award,
  Cpu: Cpu,
  Globe: Globe,
  Sparkles: Sparkles,
  CheckCircle2: CheckCircle2
};

export const AccreditationsMarquee = () => {
  return (
    <section className="relative py-8 bg-white border-y border-slate-200/90 shadow-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Label Header */}
          <div className="shrink-0 flex items-center gap-3 pr-6 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
                Accreditations & Honors
              </p>
              <h4 className="text-sm font-black text-slate-900 tracking-tight">
                National Recognitions
              </h4>
            </div>
          </div>

          {/* Recognition Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 flex-1">
            {accreditationBadges.map((badge) => {
              const IconComponent = iconMap[badge.icon] || ShieldCheck;
              return (
                <motion.div
                  key={badge.id}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                      {badge.tag}
                    </span>
                    <IconComponent className="w-3.5 h-3.5 text-amber-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 leading-tight">
                      {badge.title}
                    </h5>
                    <p className="text-[10px] text-slate-500 font-medium leading-tight truncate mt-0.5">
                      {badge.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AccreditationsMarquee;

