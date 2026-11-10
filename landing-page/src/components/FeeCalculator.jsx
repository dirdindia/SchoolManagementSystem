import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Download, 
  ShieldCheck,
  CreditCard,
  HelpCircle
} from 'lucide-react';
import { feeCalculatorOptions } from '../data/mockData';
import { useSchool } from '../context/SchoolContext';

export const FeeCalculator = () => {
  const { setIsAdmissionModalOpen, showNotification } = useSchool();
  const [selectedGradeId, setSelectedGradeId] = useState(feeCalculatorOptions.grades[1].id);
  const [selectedTransportId, setSelectedTransportId] = useState(feeCalculatorOptions.transportZones[1].id);
  const [selectedBoardingId, setSelectedBoardingId] = useState(feeCalculatorOptions.hostelDayOptions[0].id);
  const [selectedClubs, setSelectedClubs] = useState(["robotics"]);

  const selectedGrade = feeCalculatorOptions.grades.find(g => g.id === selectedGradeId) || feeCalculatorOptions.grades[0];
  const selectedTransport = feeCalculatorOptions.transportZones.find(t => t.id === selectedTransportId) || feeCalculatorOptions.transportZones[0];
  const selectedBoarding = feeCalculatorOptions.hostelDayOptions.find(b => b.id === selectedBoardingId) || feeCalculatorOptions.hostelDayOptions[0];

  const clubsCost = selectedClubs.reduce((acc, clubId) => {
    const club = feeCalculatorOptions.optionalClubs.find(c => c.id === clubId);
    return acc + (club ? club.cost : 0);
  }, 0);

  const totalAnnual = selectedGrade.baseAnnual + selectedTransport.cost + selectedBoarding.cost + clubsCost;
  const quarterlyInstallment = Math.round(totalAnnual / 4);

  const toggleClub = (clubId) => {
    if (selectedClubs.includes(clubId)) {
      setSelectedClubs(selectedClubs.filter(id => id !== clubId));
    } else {
      setSelectedClubs([...selectedClubs, clubId]);
    }
  };

  const handleDownloadEstimate = () => {
    showNotification('Official Fee Structure Breakdown (PDF) downloaded successfully!');
  };

  return (
    <section id="fee-calculator" className="py-24 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3.5 border border-emerald-200 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Transparent Investment in Your Child</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Interactive Fee <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-indigo-700 to-amber-600">
              Estimator & Structure
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 font-normal">
            Choose your child's academic grade, commute preference, and enrichment clubs to get an instant, fully itemized annual breakdown.
          </p>
        </div>

        {/* Two-Column Calculator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configurator Options */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Step 1: Grade Selection */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm">
              <label className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3.5 block">
                1. Select Academic Grade
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {feeCalculatorOptions.grades.map((grade) => {
                  const isChecked = grade.id === selectedGradeId;
                  return (
                    <button
                      key={grade.id}
                      onClick={() => setSelectedGradeId(grade.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all text-xs font-semibold flex items-center justify-between ${
                        isChecked
                          ? 'bg-indigo-50 border-indigo-600 text-indigo-950 shadow-xs ring-1 ring-indigo-500/20'
                          : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <span>{grade.name}</span>
                      {isChecked && <Check className="w-4 h-4 text-indigo-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Commute & Transport */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm">
              <label className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3.5 block">
                2. School Transport & Commute
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {feeCalculatorOptions.transportZones.map((zone) => {
                  const isChecked = zone.id === selectedTransportId;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedTransportId(zone.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all text-xs font-semibold flex items-center justify-between ${
                        isChecked
                          ? 'bg-indigo-50 border-indigo-600 text-indigo-950 shadow-xs ring-1 ring-indigo-500/20'
                          : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-slate-900">{zone.name}</div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {zone.cost === 0 ? "No Transport Fee" : `+ ₹${zone.cost.toLocaleString('en-IN')}/yr`}
                        </div>
                      </div>
                      {isChecked && <Check className="w-4 h-4 text-indigo-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Boarding / Day Care */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm">
              <label className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3.5 block">
                3. Boarding & Day Care Preference
              </label>
              <div className="flex flex-col gap-2.5">
                {feeCalculatorOptions.hostelDayOptions.map((opt) => {
                  const isChecked = opt.id === selectedBoardingId;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedBoardingId(opt.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all text-xs font-semibold flex items-center justify-between ${
                        isChecked
                          ? 'bg-amber-50 border-amber-600 text-amber-950 shadow-xs ring-1 ring-amber-500/20'
                          : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-slate-900">{opt.name}</div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {opt.cost === 0 ? "Standard Day Scholar" : `+ ₹${opt.cost.toLocaleString('en-IN')}/yr`}
                        </div>
                      </div>
                      {isChecked && <Check className="w-4 h-4 text-amber-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Optional Enrichment Academies */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm">
              <label className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3.5 block">
                4. Optional Enrichment Academies (Select Multiple)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {feeCalculatorOptions.optionalClubs.map((club) => {
                  const isChecked = selectedClubs.includes(club.id);
                  return (
                    <button
                      key={club.id}
                      onClick={() => toggleClub(club.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all text-xs font-semibold flex items-center justify-between ${
                        isChecked
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950 ring-1 ring-emerald-500/20'
                          : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-slate-900">{club.name}</div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          + ₹{club.cost.toLocaleString('en-IN')}/yr
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                        isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Computed Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              layout
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/60 relative overflow-hidden"
            >
              {/* Top Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-indigo-600 to-amber-500" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Estimated Annual Investment
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900">Fee Breakdown (2026-27)</h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-700 border border-indigo-200">
                  <CreditCard className="w-5 h-5" />
                </div>
              </div>

              {/* Itemized Line Items */}
              <div className="flex flex-col gap-3.5 text-xs mb-6">
                <div className="flex justify-between items-center text-slate-600">
                  <span>Tuition & Core Academics ({selectedGrade.name.split('(')[0]}):</span>
                  <span className="font-bold text-slate-900">₹{selectedGrade.baseAnnual.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between items-center text-slate-600">
                  <span>Transport Service:</span>
                  <span className="font-bold text-slate-900">
                    {selectedTransport.cost === 0 ? "Included / Nil" : `₹${selectedTransport.cost.toLocaleString('en-IN')}`}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-600">
                  <span>Day Care / Boarding:</span>
                  <span className="font-bold text-slate-900">
                    {selectedBoarding.cost === 0 ? "Standard Day Scholar" : `₹${selectedBoarding.cost.toLocaleString('en-IN')}`}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-600">
                  <span>Enrichment Clubs ({selectedClubs.length}):</span>
                  <span className="font-bold text-slate-900">
                    {clubsCost === 0 ? "None" : `₹${clubsCost.toLocaleString('en-IN')}`}
                  </span>
                </div>
              </div>

              {/* Total Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs text-slate-600 font-bold">Total Annual Fee:</span>
                  <span className="text-3xl font-display font-extrabold text-indigo-900">
                    ₹{totalAnnual.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-500 pt-2.5 border-t border-slate-200">
                  <span className="font-medium">Payable in 4 Quarterly Terms:</span>
                  <span className="font-extrabold text-indigo-700">
                    ~ ₹{quarterlyInstallment.toLocaleString('en-IN')} / Term
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setIsAdmissionModalOpen(true)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply for Admission with this Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleDownloadEstimate}
                  className="w-full py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300/80 transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-indigo-700" />
                  <span>Download Official Fee PDF</span>
                </button>
              </div>

              {/* Trust Disclaimer */}
              <div className="mt-5 flex items-start gap-2 text-[11px] text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>No hidden charges. Tuition includes laboratory consumables, high-speed WiFi, library archives, and sports gear.</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
