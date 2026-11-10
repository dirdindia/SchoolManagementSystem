import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Sparkles, 
  Download, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  FileText,
  Calendar
} from 'lucide-react';
import { FeeCalculator } from '../components/FeeCalculator';
import { feeCalculatorOptions } from '../data/mockData';
import { useSchool } from '../context/SchoolContext';

export const FeeStructurePage = () => {
  const { showNotification } = useSchool();

  return (
    <div className="pt-8 pb-20 relative bg-slate-50">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-4 border border-emerald-200 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Transparent Academic Investment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Fee Schedule & Live <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-indigo-700 to-amber-600">
              Interactive Estimator
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Itemized breakdown for Session 2026-27 with quarterly installment schedules, zero hidden charges, and transparent sibling concessions.
          </p>
        </motion.div>
      </div>

      {/* Interactive Live Calculator */}
      <FeeCalculator />

      {/* Grade-wise Master Matrix Table */}
      <section className="py-20 relative bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              Official Annual Tuition Schedule (2026-27)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
              Includes laboratory consumables, high-speed campus WiFi, digital library license, and smart board technology.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden mb-12">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 uppercase tracking-wider text-[11px] font-extrabold">
                <tr>
                  <th className="py-4 px-6">Academic Grade</th>
                  <th className="py-4 px-6">Annual Tuition Fee</th>
                  <th className="py-4 px-6">Quarterly Installment (x4)</th>
                  <th className="py-4 px-6">Lab & Tech Fee</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {feeCalculatorOptions.grades.map((grade) => (
                  <tr key={grade.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">{grade.name}</td>
                    <td className="py-4 px-6 font-extrabold text-indigo-900 font-display text-base">
                      ₹{grade.baseAnnual.toLocaleString('en-IN')}
                    </td>
                    <td className="py-4 px-6 text-indigo-700 font-bold">
                      ₹{Math.round(grade.baseAnnual / 4).toLocaleString('en-IN')} / Term
                    </td>
                    <td className="py-4 px-6 text-slate-500 font-medium">Included</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => showNotification(`Generating PDF fee quote for ${grade.name}...`)}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                      >
                        Download PDF Quote &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment Terms & Scholarship Notes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
              <Calendar className="w-5 h-5 text-indigo-600 mb-3" />
              <h4 className="text-sm font-bold text-slate-900 mb-2">Quarterly Payment Cycle</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Term 1: April 10 • Term 2: July 10 • Term 3: October 10 • Term 4: January 10.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 mb-3" />
              <h4 className="text-sm font-bold text-slate-900 mb-2">Sibling & Defense Concessions</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                25% concession on tuition fees for the younger sibling. 15% special concession for Armed Forces wards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
              <CreditCard className="w-5 h-5 text-amber-600 mb-3" />
              <h4 className="text-sm font-bold text-slate-900 mb-2">Cashless Payment Modes</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Online payment via UPI, NetBanking, Credit/Debit cards, or CTS Cheque at the fee counter.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FeeStructurePage;
