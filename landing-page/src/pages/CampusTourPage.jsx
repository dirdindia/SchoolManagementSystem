import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Users, 
  Send,
  ShieldCheck 
} from 'lucide-react';
import { VirtualTour3D } from '../components/VirtualTour3D';
import { useSchool } from '../context/SchoolContext';

export const CampusTourPage = () => {
  const { showNotification } = useSchool();
  const [visitorName, setVisitorName] = useState('');
  const [phone, setPhone] = useState('');
  const [tourDate, setTourDate] = useState('');

  const handleBookTour = (e) => {
    e.preventDefault();
    if (!visitorName || !phone || !tourDate) return;
    showNotification(`Guided Saturday Tour pass booked for ${visitorName} on ${tourDate}!`);
    setVisitorName('');
    setPhone('');
    setTourDate('');
  };

  return (
    <div className="pt-8 pb-20 relative bg-slate-50">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-4 border border-amber-200 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>50-Acre Architectural Masterpiece</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Interactive 3D Virtual & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-indigo-700 to-indigo-900">
              On-Campus Experience
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Immerse yourself in our research laboratories, athletic stadiums, acoustic auditoriums, and open-air botanical learning quads.
          </p>
        </motion.div>
      </div>

      {/* Main 3D Campus Tour Component */}
      <VirtualTour3D />

      {/* Campus Guided Visit Scheduler Form */}
      <section className="py-20 relative bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl max-w-4xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-700 block mb-2">
                Join Us This Saturday
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                Book a Personalized Campus Guided Visit
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
                Guided walking tours led by our Dean of Academics every Saturday between 9:00 AM and 1:30 PM.
              </p>
            </div>

            <form onSubmit={handleBookTour} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Parent Full Name *</label>
                <input
                  type="text"
                  required
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="e.g. Vikram Mehra"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765-43210"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Saturday *</label>
                <input
                  type="date"
                  required
                  value={tourDate}
                  onChange={(e) => setTourDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                />
              </div>

              <div className="sm:col-span-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 hover:bg-indigo-700 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Guided Tour Slot</span>
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-6 text-xs text-slate-600 font-medium pt-4 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Complimentary Valet Parking
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Principal Q&A Session Included
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CampusTourPage;
