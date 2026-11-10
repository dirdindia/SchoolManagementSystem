import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { schoolDetails } from '../data/mockData';
import { SchoolLogo } from './SchoolLogo';

export const Navbar = () => {
  const { setIsAdmissionModalOpen } = useSchool();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Campus Tour", path: "/campus-tour" },
    { name: "Fee Structure", path: "/fees" },
    { name: "Notice Board", path: "/notices" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-100/90 border-b border-slate-200 text-xs py-2 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-40 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
              ADMISSIONS 2026-27 OPEN
            </span>
            <span className="text-slate-600 font-medium truncate">
              Registrations active for Nursery to Grade XI • CBSE Board • Merit Scholarships Available
            </span>
          </div>
          <div className="flex items-center gap-5 text-slate-600 shrink-0 pr-2 sm:pr-4">
            <a href={`tel:${schoolDetails.contact.admissionHelpline}`} className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
              <span>Helpline: <strong className="text-slate-900">{schoolDetails.contact.admissionHelpline}</strong></span>
            </a>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1 text-slate-600 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>CBSE Affiliation No: 2130849</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Frosted Glass Navbar for Light Mode */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-md py-2.5'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex items-center justify-between gap-3 lg:gap-4 xl:gap-6">
            
            {/* Indian School Brand / Crest with 2-line centered School name */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            >
              <SchoolLogo className="w-11 h-11 sm:w-12 sm:h-12" />

              {/* School Name Text: Line 1 Brand, Line 2 'School' Centered */}
              <div className="flex flex-col min-w-0 items-center text-center">
                <span className="font-display font-black text-sm sm:text-base lg:text-[15px] xl:text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight text-center block whitespace-nowrap">
                  Gurukul International
                </span>
                <span className="font-display font-bold text-xs sm:text-[13px] tracking-widest text-indigo-700 group-hover:text-indigo-600 transition-colors leading-tight text-center block uppercase mt-0.5">
                  School
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-3 2xl:gap-5 shrink">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs xl:text-[13px] font-bold transition-all relative py-1 px-1.5 xl:px-2 whitespace-nowrap ${
                      isActive
                        ? 'text-indigo-600 font-extrabold'
                        : 'text-slate-600 hover:text-slate-950'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicatorLight"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 via-amber-500 to-indigo-600 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Clean Action Buttons with Right-Side Breathing Room / Gap */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0 mr-1 sm:mr-3 lg:mr-5">
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="relative group overflow-hidden px-4 xl:px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-amber-600 shadow-md shadow-indigo-600/25 hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Button with Right-Side Gap */}
            <div className="lg:hidden flex items-center gap-2 shrink-0 mr-1 sm:mr-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Flyout Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/98 border-b border-slate-200 backdrop-blur-2xl px-6 py-6 shadow-xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-bold py-2.5 px-3 rounded-xl transition-colors ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                
                <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                  <a
                    href={`tel:${schoolDetails.contact.admissionHelpline}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold"
                  >
                    <PhoneCall className="w-4 h-4 text-indigo-600" />
                    <span>Helpline: {schoolDetails.contact.admissionHelpline}</span>
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsAdmissionModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold text-xs shadow-md cursor-pointer"
                  >
                    <span>Apply for Admission 2026-27</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
