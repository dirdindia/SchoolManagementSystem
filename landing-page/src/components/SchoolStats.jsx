import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  GraduationCap, 
  MonitorCheck, 
  Globe, 
  Trophy 
} from 'lucide-react';
import { schoolDetails } from '../data/mockData';

const iconMap = {
  Users: Users,
  Award: Award,
  GraduationCap: GraduationCap,
  MonitorCheck: MonitorCheck,
  Globe: Globe,
  Trophy: Trophy,
};

export const SchoolStats = () => {
  return (
    <section className="relative py-16 bg-white/70 border-y border-slate-200 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-transparent to-slate-50/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 shadow-sm">
            A Legacy of Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 mt-3.5">
            Numbers That Define Our Institutional Benchmark
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Every statistic represents a child empowered, an educator inspired, and a future unlocked.
          </p>
        </div>

        {/* 6 Grid Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {schoolDetails.stats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Trophy;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white/95 backdrop-blur-sm p-5 rounded-2xl flex flex-col items-center text-center group relative overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 transition-all"
              >
                {/* Top Glowing Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-90 group-hover:opacity-100 transition-opacity`} />

                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 flex items-center justify-center text-white mb-3 shadow-md shadow-indigo-500/15 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Metric Value */}
                <div className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight mb-1">
                  {stat.value}
                </div>

                {/* Metric Label */}
                <div className="text-xs text-slate-500 font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
