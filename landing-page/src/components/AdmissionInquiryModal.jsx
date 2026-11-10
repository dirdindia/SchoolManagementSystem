import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen, 
  ShieldCheck,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSchool } from '../context/SchoolContext';

export const AdmissionInquiryModal = () => {
  const { isAdmissionModalOpen, setIsAdmissionModalOpen, showNotification } = useSchool();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  const [formData, setFormData] = useState({
    studentName: '',
    grade: 'Grade 1',
    dob: '',
    parentName: '',
    email: '',
    phone: '',
    city: 'New Delhi',
    transportRequired: 'yes',
    specialInterest: 'Robotics & STEM'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final Submit
      const randomId = `ADM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setAppId(randomId);
      setIsSubmitted(true);

      // Trigger Confetti Celebration!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#f59e0b', '#10b981', '#ec4899', '#38bdf8']
      });

      showNotification(`Application ${randomId} submitted successfully!`);
    }
  };

  const handleClose = () => {
    setIsAdmissionModalOpen(false);
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
    }, 400);
  };

  if (!isAdmissionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
      />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
      >
        {/* Top Gradient Shimmer */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-amber-400 to-indigo-600" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ONLINE ADMISSION PORTAL (SESSION 2026-27)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                Register Your Child’s Application
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Step {step} of 3 • Direct Admission Assessment & Campus Tour Booking
              </p>
            </div>

            {/* Stepper Dots */}
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    num <= step ? 'bg-indigo-600' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleNext} className="space-y-4">
              
              {/* STEP 1: Student Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Student's Full Legal Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="studentName"
                        required
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Grade Applying For *
                      </label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full px-3 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs"
                      >
                        <option value="Pre-K / Nursery">Pre-K / Nursery (Age 3+)</option>
                        <option value="Kindergarten">Kindergarten / KG</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6 (Middle School)</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9 (Secondary)</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11 - Science">Grade 11 - Science (PCM / PCB)</option>
                        <option value="Grade 11 - Commerce">Grade 11 - Commerce & FinTech</option>
                        <option value="Grade 11 - Humanities">Grade 11 - Humanities</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dob"
                        required
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-3 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Parent / Guardian Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Parent / Guardian Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rajesh.sharma@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765-43210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        City / Location
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="New Delhi"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Campus Logistics & Interests */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      School AC Bus Transport Needed?
                    </label>
                    <select
                      name="transportRequired"
                      value={formData.transportRequired}
                      onChange={handleChange}
                      className="w-full px-3 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs"
                    >
                      <option value="yes">Yes, GPS-tracked AC Bus Service Required</option>
                      <option value="no">No, Self-Commute / Private Vehicle</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Child's Primary Special Interest
                    </label>
                    <select
                      name="specialInterest"
                      value={formData.specialInterest}
                      onChange={handleChange}
                      className="w-full px-3 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs"
                    >
                      <option value="Robotics & STEM">Robotics, Coding & STEM Innovation</option>
                      <option value="Olympic Athletics & Swimming">Olympic Athletics & Swimming</option>
                      <option value="Music, Performing Arts & Debating">Music, Performing Arts & Debating</option>
                      <option value="Pure Mathematical Olympiads">Pure Mathematical Olympiads</option>
                    </select>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 flex items-start gap-2 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Our admissions cell will immediately send the official syllabus for assessment and scheduled slot via WhatsApp and email.
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>{step === 3 ? "Submit Application" : "Continue"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-2">
              Application Registered!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
              Thank you, {formData.parentName || 'Parent'}. Your application for <span className="text-slate-900 font-bold">{formData.studentName || 'Student'}</span> has been submitted to the Admissions Directorate.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-xs mx-auto mb-6">
              <span className="text-[11px] text-slate-500 block uppercase font-bold">
                Application Reference ID
              </span>
              <span className="text-lg font-mono font-extrabold text-indigo-700">
                {appId}
              </span>
            </div>

            <div className="text-xs text-slate-500 mb-6 font-medium">
              A confirmation PDF syllabus and entrance date will be messaged to <span className="text-slate-900 font-bold">{formData.phone || '+91-XXXXXXXXXX'}</span>.
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              Done & Return to Campus Portal
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
