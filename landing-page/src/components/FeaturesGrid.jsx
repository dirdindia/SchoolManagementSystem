import React from 'react';
import { motion } from 'framer-motion';
import { 
  ScanFace, 
  CreditCard, 
  Bus, 
  FileSpreadsheet, 
  MessageSquareCheck, 
  BookMarked, 
  Library, 
  ShieldAlert,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const FeaturesGrid = () => {
  const { setIsPanelPortalOpen } = useSchool();

  const features = [
    {
      icon: ScanFace,
      title: "AI Attendance & Biometric Gates",
      desc: "Instant facial recognition & RFID student badges. Auto SMS/WhatsApp alerts sent to parents within 10 seconds of campus entry.",
      badge: "Zero Proxy",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: CreditCard,
      title: "Cashless Digital Fee Portal",
      desc: "UPI, Net Banking & Credit Card payment gateway with instant GST receipts, split installments, and automated fee reminder SMS.",
      badge: "Instant Receipts",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Bus,
      title: "Live GPS Bus Fleet Telematics",
      desc: "Real-time location, speed alerts, geo-fencing, and estimated arrival times for parents on mobile with student boarding verification.",
      badge: "Child Safety",
      color: "from-emerald-600 to-teal-700"
    },
    {
      icon: FileSpreadsheet,
      title: "Automated Gradebook & Report Cards",
      desc: "CBSE, ICSE & Cambridge grading matrices. Auto-generates high-resolution graphical report cards with percentile rankings.",
      badge: "1-Click Publish",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: MessageSquareCheck,
      title: "Parent-Educator Communication",
      desc: "Encrypted direct messaging between parents and subject teachers, digital circulars, and scheduled video PTM meetings.",
      badge: "24/7 Connect",
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: BookMarked,
      title: "Digital Homework & LMS Submissions",
      desc: "Teachers upload assignments with rubrics. Students submit PDFs or work directly online with automatic deadlines.",
      badge: "Paperless",
      color: "from-rose-500 to-red-600"
    },
    {
      icon: Library,
      title: "35,000+ Volume E-Library & Barcodes",
      desc: "Barcode & ISBN scanner for instant checkout/returns, automated overdue fine calculation, and JSTOR academic e-books.",
      badge: "Smart Inventory",
      color: "from-violet-600 to-purple-600"
    },
    {
      icon: ShieldAlert,
      title: "Campus Security & Hostel Gate Passes",
      desc: "Digital visitor authorization with photo capture, student night roll calls, and medical clinic infirmary records.",
      badge: "360° Protection",
      color: "from-amber-600 to-orange-700"
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3.5 border border-indigo-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Complete School ERP Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Engineered for Flawless <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-900 to-amber-600">
              Institutional Administration
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Every department, from admissions and academics to transport and finances, interconnected seamlessly in one unified cloud system.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 transition-all"
              >
                {/* Glowing Top Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full group-hover:bg-indigo-100/50 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.color} p-2.5 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-bold text-indigo-600 group-hover:text-indigo-800 transition-colors">
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-50 via-slate-50 to-amber-50/70 border border-indigo-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-700 shrink-0 shadow-xs">
              <Sparkles className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h4 className="text-lg font-extrabold text-slate-900">Experience All 10 Administrative Panels</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Preview Super Admin, Teacher, Student, Parent, Accounts, and Transport dashboards with 1 click.</p>
            </div>
          </div>

          <button
            onClick={() => setIsPanelPortalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all"
          >
            Launch All Panels Portal
          </button>
        </div>

      </div>
    </section>
  );
};
