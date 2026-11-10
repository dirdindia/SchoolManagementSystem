import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Building
} from 'lucide-react';
import { schoolDetails } from '../data/mockData';
import { useSchool } from '../context/SchoolContext';

export const ContactPage = () => {
  const { showNotification } = useSchool();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Admissions & Enrollment',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSent(true);
    showNotification("Your message has been received by our administrative desk!");
  };

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
            <Phone className="w-3.5 h-3.5 text-indigo-600" />
            <span>Campus Directorate & Helplines</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Connect with Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-900 to-amber-600">
              Campus Administration
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            We are here to answer your queries regarding admissions, academics, campus transport, and student welfare.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-4 shadow-2xs">
                <Phone className="w-5 h-5 text-amber-600" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Admissions Helpline</h4>
              <p className="text-xs text-slate-500 mb-3 font-medium">Direct line for 2026-27 inquiries</p>
              <div className="text-sm font-extrabold text-indigo-700 font-mono">
                {schoolDetails.contact.admissionHelpline}
              </div>
            </div>
            <span className="text-[11px] text-slate-400 mt-4 block font-medium">Mon - Sat: 8:30 AM - 4:30 PM</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center mb-4 shadow-2xs">
                <Mail className="w-5 h-5 text-indigo-600" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Official Email</h4>
              <p className="text-xs text-slate-500 mb-3 font-medium">For admissions and correspondence</p>
              <div className="text-xs font-bold text-indigo-700 font-mono break-all">
                {schoolDetails.contact.email}
              </div>
            </div>
            <span className="text-[11px] text-slate-400 mt-4 block font-medium">24-hour response turnaround</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-4 shadow-2xs">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Campus Location</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3 font-medium">
                {schoolDetails.contact.address}
              </p>
            </div>
            <span className="text-[11px] text-emerald-700 block font-bold">Visitor parking available</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center mb-4 shadow-2xs">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Visiting Hours</h4>
              <p className="text-xs text-slate-500 mb-3 font-medium">Principal & Office appointments</p>
              <div className="text-xs font-bold text-purple-700">
                {schoolDetails.contact.timings}
              </div>
            </div>
            <span className="text-[11px] text-slate-400 mt-4 block font-medium">Closed on Sundays & Holidays</span>
          </div>
        </div>

        {/* Contact Form and Map Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
            <h3 className="text-xl font-display font-extrabold text-slate-900 mb-2">Send an Administrative Inquiry</h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">Fill out the details below and the designated department will reach out directly.</p>

            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Suman Sen"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="suman@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765-43210"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                    >
                      <option value="Admissions & Enrollment">Admissions & Enrollment</option>
                      <option value="Principal's Office">Principal's Office</option>
                      <option value="Accounts & Fee Office">Accounts & Fee Office</option>
                      <option value="Transport & Bus Services">Transport & Bus Services</option>
                      <option value="Hostel & Residential Boarding">Hostel & Residential Boarding</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify your query or student details..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-indigo-600/25 hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Submit Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-1">Message Sent!</h4>
                <p className="text-xs text-slate-600 font-medium">Our {formData.department} coordinator will get back to you shortly.</p>
              </div>
            )}
          </div>

          {/* Interactive Map Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <h4 className="text-base font-extrabold text-slate-900 mb-2">Campus Map & Navigation</h4>
              <p className="text-xs text-slate-500 mb-4 font-medium">Institutional Area, Sector 42, New Delhi.</p>

              <div className="rounded-2xl overflow-hidden aspect-video border border-slate-200 relative bg-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                  alt="Campus Map Coordinates"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-slate-950/25 flex items-center justify-center">
                  <button
                    onClick={() => showNotification("Opening GPS directions on Google Maps...")}
                    className="px-4 py-2.5 rounded-xl bg-white/95 text-slate-900 font-bold text-xs flex items-center gap-2 border border-slate-200 shadow-md hover:bg-white cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Get Directions on Google Maps</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-1 font-medium">
              <div>Nearest Metro: <span className="text-slate-900 font-bold">Botanical Garden Station (Line 3 & 8)</span></div>
              <div>Bus Stop: <span className="text-slate-900 font-bold">Institutional Campus Gate #1</span></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ContactPage;
