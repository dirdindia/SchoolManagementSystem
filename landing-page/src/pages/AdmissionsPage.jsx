import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  FileCheck, 
  Award, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  User, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSchool } from '../context/SchoolContext';
import { schoolDetails } from '../data/mockData';

export const AdmissionsPage = () => {
  const { showNotification } = useSchool();
  const [openFaq, setOpenFaq] = useState(0);

  // Form State
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
      const randomId = `ADM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setAppId(randomId);
      setIsSubmitted(true);

      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#f59e0b', '#10b981', '#ec4899', '#38bdf8']
      });

      showNotification(`Application ${randomId} submitted successfully!`);
    }
  };

  const admissionSteps = [
    { num: "01", title: "Online Registration", desc: "Submit student details, previous academic records, and preferred grade." },
    { num: "02", title: "Aptitude Assessment", desc: "Friendly diagnostic check assessing language, math, and general logic." },
    { num: "03", title: "Principal Interaction", desc: "Collaborative discussion with parents to align educational values and vision." },
    { num: "04", title: "Admission Confirmation", desc: "Document verification, fee settlement, and welcome orientation kit." }
  ];

  const faqs = [
    {
      q: "What is the age criteria for Nursery & Grade 1 for 2026-27?",
      a: "For Nursery, the child must be 3+ years as of March 31, 2026. For Grade 1, the child must be 6+ years as of March 31, 2026."
    },
    {
      q: "Does the school provide air-conditioned GPS-tracked transport?",
      a: "Yes, our fleet of 28 modern air-conditioned buses covers all major residential zones within a 25 km radius with real-time speed monitoring and CCTV surveillance."
    },
    {
      q: "What is the teacher-student ratio maintained across classrooms?",
      a: "We maintain a strict 1:12 faculty-to-student ratio in pre-primary and 1:20 in middle and senior grades to ensure personalized academic attention."
    },
    {
      q: "Are merit scholarships available for sports and academic achievers?",
      a: "Yes! We offer up to 100% tuition scholarships for national Olympiad winners and state/national sports champions."
    }
  ];

  return (
    <div className="pt-8 pb-20 relative bg-slate-50">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-4 border border-emerald-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span>Admissions Open for Session 2026-27</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Begin Your Child's Journey to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-indigo-700 to-amber-600">
              Lifelong Distinction
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Transparent, merit-based, and student-first admissions process for Nursery through Grade XI.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 4-Step Roadmap */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-700 block mb-2">
              Simple 4-Phase Pathway
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              How the Admission Process Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((st) => (
              <div key={st.num} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative">
                <div className="text-3xl font-display font-black text-indigo-600 mb-3 opacity-80">
                  {st.num}
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-2">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form and Documents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Embedded Application Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
            {!isSubmitted ? (
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ONLINE ADMISSION PORTAL</span>
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-slate-900">
                    Submit Admission Application
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Step {step} of 3 • Instant slot booking for diagnostic assessment
                  </p>
                </div>

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

                <form onSubmit={handleNext} className="space-y-4">
                  {step === 1 && (
                    <div className="space-y-4">
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
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
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
                            className="w-full px-3 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
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
                            <option value="Grade 11 - Science">Grade 11 - Science</option>
                            <option value="Grade 11 - Commerce">Grade 11 - Commerce</option>
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
                            className="w-full px-3 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
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
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
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
                              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
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
                              placeholder="parent@example.com"
                              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          AC Bus Transport Required?
                        </label>
                        <select
                          name="transportRequired"
                          value={formData.transportRequired}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                        >
                          <option value="yes">Yes, GPS-tracked AC bus required</option>
                          <option value="no">No, Self-commute</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Primary Co-Curricular Interest
                        </label>
                        <select
                          name="specialInterest"
                          value={formData.specialInterest}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-2xs font-medium"
                        >
                          <option value="Robotics & Coding">Robotics & Coding</option>
                          <option value="Olympic Swimming & Sports">Olympic Swimming & Sports</option>
                          <option value="Music & Theater">Music & Performing Arts</option>
                          <option value="Mathematics Olympiad">Mathematics Olympiads</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                      >
                        Back
                      </button>
                    ) : <div />}

                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-indigo-600/25 hover:bg-indigo-700 cursor-pointer"
                    >
                      <span>{step === 3 ? "Submit Application" : "Continue"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-2">Application Submitted!</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 font-medium">
                  Reference ID: <span className="text-indigo-700 font-mono font-extrabold">{appId}</span>. Our admissions coordinator will connect within 24 hours.
                </p>
                <button
                  onClick={() => { setStep(1); setIsSubmitted(false); }}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Documentation Checklist & Helpline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-indigo-600" />
                <span>Documents Required at Interaction</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-600 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Original & photocopy of Child’s Birth Certificate</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Previous 2 years' verified report cards (for Grade 2 & above)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Original Transfer Certificate (counter-signed by board)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>4 passport-sized photographs of child and parents</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Proof of Residence & Immunization Record</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-200">
              <h4 className="text-sm font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-indigo-600" />
                <span>Admission Helpline Desk</span>
              </h4>
              <p className="text-xs text-slate-600 mb-3 font-medium">Speak directly with our Chief Admissions Officer:</p>
              <div className="text-base font-extrabold text-indigo-700 font-mono mb-1">
                {schoolDetails.contact.admissionHelpline}
              </div>
              <span className="text-[11px] text-slate-500 font-medium">Available Mon - Sat (8:30 AM to 4:30 PM)</span>
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-display font-extrabold text-slate-900">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Clear answers to help you make an informed decision.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white shadow-2xs overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-indigo-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/60 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default AdmissionsPage;
