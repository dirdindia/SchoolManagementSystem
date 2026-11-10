import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUp, 
  Layers
} from 'lucide-react';
import { schoolDetails } from '../data/mockData';
import { useSchool } from '../context/SchoolContext';
import { SchoolLogo } from './SchoolLogo';

export const Footer = () => {
  const { setIsPanelPortalOpen, setIsAdmissionModalOpen } = useSchool();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100/80 border-t border-slate-200 relative overflow-hidden">
      {/* Glow Ambient */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-100/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: School Identity & Accreditations (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <SchoolLogo className="w-14 h-14" />
              <div>
                <span className="font-display font-black text-2xl tracking-tight text-slate-900 block group-hover:text-indigo-600 transition-colors">
                  Gurukul International School
                </span>
                <span className="text-xs text-indigo-700 font-bold tracking-wider uppercase block mt-0.5">
                  CBSE Affiliated • Vasant Kunj, New Delhi
                </span>
                <div className="inline-flex items-center gap-1.5 mt-1.5 text-[11px] font-bold text-slate-700 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                  <span className="text-slate-500 font-normal">Powered by</span>
                  <strong className="text-indigo-700 font-black tracking-wide">DIRD</strong>
                </div>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mt-2 font-normal">
              Cultivating intellect, leadership, and timeless Indian values for over 28 years. 
              Equipped with smart digital classrooms, Atal Tinkering robotics lab, and Olympic standard sports arenas.
            </p>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 text-xs text-slate-700 flex items-center gap-2 max-w-sm shadow-xs font-medium">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Affiliated to CBSE, New Delhi (Affiliation No: 2130849) • Estd. 1998</span>
            </div>
          </div>

          {/* Column 2: Quick Page Navigation */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-4">
              Explore School
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><Link to="/about" className="hover:text-indigo-600 transition-colors">About Our Legacy</Link></li>
              <li><Link to="/academics" className="hover:text-indigo-600 transition-colors">Academic Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-indigo-600 transition-colors">Admissions 2026-27</Link></li>
              <li><Link to="/campus-tour" className="hover:text-indigo-600 transition-colors">3D Campus Tour</Link></li>
              <li><Link to="/fees" className="hover:text-indigo-600 transition-colors">Fee Structure</Link></li>
              <li><Link to="/notices" className="hover:text-indigo-600 transition-colors">Notice Board & Events</Link></li>
            </ul>
          </div>

          {/* Column 3: Academic Wings */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-4">
              Academic Wings
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link to="/academics" className="hover:text-indigo-600 transition-colors text-left">
                  Pre-Primary & Kindergarten
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-indigo-600 transition-colors text-left">
                  Primary Wing (Grades 1-5)
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-indigo-600 transition-colors text-left">
                  Middle Wing (Grades 6-8)
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-indigo-600 transition-colors text-left">
                  Senior Secondary (Science/Comm/Arts)
                </Link>
              </li>
              <li>
                <Link to="/campus-tour" className="hover:text-indigo-600 transition-colors text-left">
                  Atal Tinkering Robotics Lab
                </Link>
              </li>
              <li>
                <Link to="/campus-tour" className="hover:text-indigo-600 transition-colors text-left">
                  Olympic Sports Complex
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Helpline */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-4">
              Campus Helpline
            </h4>
            <div className="space-y-3 text-xs text-slate-600 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{schoolDetails.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Helpline: {schoolDetails.contact.admissionHelpline}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{schoolDetails.contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{schoolDetails.contact.timings}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span>
              © {new Date().getFullYear()} {schoolDetails.name}. All institutional rights reserved.
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 font-bold text-[11px] shadow-2xs">
              <span className="text-slate-500 font-medium">Powered by</span>
              <strong className="text-indigo-900 font-black tracking-wider">DIRD</strong>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-600 font-semibold">
              CBSE Affiliation No: 2130849 • School Code: 25104
            </span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs transition-colors flex items-center gap-1 font-semibold cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
