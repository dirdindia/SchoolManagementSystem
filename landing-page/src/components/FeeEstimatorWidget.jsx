import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Percent, 
  HelpCircle,
  FileText
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import confetti from 'canvas-confetti';

const feeData = {
  'pre-primary': { name: 'Pre-Primary (Nursery - KG)', tuition: 95000, lab: 12000 },
  'primary': { name: 'Primary Wing (Grades I - V)', tuition: 125000, lab: 18000 },
  'middle': { name: 'Middle School (Grades VI - VIII)', tuition: 145000, lab: 24000 },
  'secondary': { name: 'Secondary Wing (Grades IX - X)', tuition: 165000, lab: 28000 },
  'senior': { name: 'Senior Secondary (Grades XI - XII)', tuition: 185000, lab: 32000 }
};

const transportOptions = [
  { id: 'none', label: 'No Bus (Self Drop)', cost: 0 },
  { id: 'zone1', label: 'AC Bus (Zone 1: 0 - 5 km)', cost: 24000 },
  { id: 'zone2', label: 'AC Bus (Zone 2: 5 - 12 km)', cost: 32000 },
  { id: 'zone3', label: 'AC Bus (Zone 3: 12 - 25 km)', cost: 42000 }
];

const scholarships = [
  { id: 'none', label: 'Standard Fee', discount: 0 },
  { id: 'merit1', label: 'Academic Merit (>90% Marks)', discount: 0.15 },
  { id: 'merit2', label: 'Exemplary Scholar (>95% Marks)', discount: 0.30 },
  { id: 'sports', label: 'National Olympiad / Sports Medalist', discount: 0.50 }
];

export const FeeEstimatorWidget = () => {
  const { setIsAdmissionModalOpen, showNotification } = useSchool();
  const [selectedWing, setSelectedWing] = useState('primary');
  const [selectedTransport, setSelectedTransport] = useState('zone1');
  const [selectedScholarship, setSelectedScholarship] = useState('merit1');
  const [isCambridge, setIsCambridge] = useState(false);

  const currentWingData = feeData[selectedWing];
  const transportCost = transportOptions.find(t => t.id === selectedTransport)?.cost || 0;
  const scholarshipDiscount = scholarships.find(s => s.id === selectedScholarship)?.discount || 0;

  const cambridgeExtra = isCambridge ? 35000 : 0;
  const grossAnnualTuition = currentWingData.tuition + cambridgeExtra;
  const scholarshipSavings = Math.round(grossAnnualTuition * scholarshipDiscount);
  const netTuition = grossAnnualTuition - scholarshipSavings;
  const totalAnnual = netTuition + currentWingData.lab + transportCost;
  const quarterlyInstallment = Math.round(totalAnnual / 4);

  const handleApplyEstimate = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    setIsAdmissionModalOpen(true);
  };

  return (
    <section className="py-24 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Transparent Fee Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Interactive Fee & Scholarship Estimator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Calculate your child's complete annual tuition, AC bus commute, and instant merit scholarship eligibility with zero hidden fees.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selectors (8 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-lg space-y-7">
            
            {/* Step 1: Select Academic Wing */}
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-3">
                1. Select Academic Wing
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(feeData).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedWing(key)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      selectedWing === key
                        ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white font-medium'
                    }`}
                  >
                    <span className="text-xs">{item.name}</span>
                    {selectedWing === key && (
                      <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Board Choice & Transport */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-slate-100">
              {/* Board Toggle */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-2.5">
                  2. Curriculum Board
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsCambridge(false)}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      !isCambridge
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    CBSE Board (Delhi)
                  </button>
                  <button
                    onClick={() => setIsCambridge(true)}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isCambridge
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Cambridge Int.
                  </button>
                </div>
              </div>

              {/* Transport Selection */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-2.5">
                  3. AC Bus Transportation
                </label>
                <select
                  value={selectedTransport}
                  onChange={(e) => setSelectedTransport(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {transportOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label} {opt.cost > 0 ? `(+₹${opt.cost.toLocaleString('en-IN')})` : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Merit Scholarship Tier */}
            <div className="pt-5 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-black uppercase tracking-wider text-slate-500">
                  4. Merit Scholarship Eligibility
                </label>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  Up to 50% Tuition Waiver
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {scholarships.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedScholarship(s.id)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      selectedScholarship === s.id
                        ? 'border-amber-500 bg-amber-50/70 text-amber-950 font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white font-medium'
                    }`}
                  >
                    <span className="text-xs">{s.label}</span>
                    {s.discount > 0 && (
                      <span className="text-[11px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md shrink-0">
                        -{s.discount * 100}%
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Net Payable Breakdown (4 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-white via-indigo-50/30 to-white p-6 sm:p-8 rounded-3xl border border-indigo-200 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                  Live Fee Summary
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold border border-emerald-300">
                  Academic Year 2026-27
                </span>
              </div>

              <h3 className="font-display font-extrabold text-xl text-slate-900 mb-6">
                {currentWingData.name}
              </h3>

              {/* Itemized Line Items */}
              <div className="space-y-3 pb-6 border-b border-slate-200 text-xs font-medium text-slate-600">
                <div className="flex justify-between">
                  <span>Gross Annual Tuition:</span>
                  <span className="font-bold text-slate-800">
                    ₹{grossAnnualTuition.toLocaleString('en-IN')}
                  </span>
                </div>

                {scholarshipSavings > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Merit Scholarship Waiver:</span>
                    </span>
                    <span>-₹{scholarshipSavings.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Smart AI Classrooms & Labs:</span>
                  <span className="font-bold text-slate-800">
                    ₹{currentWingData.lab.toLocaleString('en-IN')}
                  </span>
                </div>

                {transportCost > 0 && (
                  <div className="flex justify-between">
                    <span>AC Bus Commute:</span>
                    <span className="font-bold text-slate-800">
                      ₹{transportCost.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
              </div>

              {/* Total Figures */}
              <div className="pt-6 pb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">
                    Quarterly Installment (4x/yr):
                  </span>
                  <span className="font-display font-black text-2xl text-indigo-700">
                    ₹{quarterlyInstallment.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-baseline justify-between text-xs text-slate-600">
                  <span>Net Total Annual Investment:</span>
                  <strong className="text-slate-900 font-bold">
                    ₹{totalAnnual.toLocaleString('en-IN')} / year
                  </strong>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleApplyEstimate}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Apply with this Scholarship Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => showNotification("Official Fee Schedule PDF downloaded to your device!")}
                className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>Download Official Fee Policy (PDF)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeeEstimatorWidget;

