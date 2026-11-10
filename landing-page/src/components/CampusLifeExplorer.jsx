import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Trophy, 
  BookOpen, 
  Music, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  ShieldCheck,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const facilities = [
  {
    id: 'stem',
    title: 'Atal Tinkering STEM & AI Robotics Hub',
    tabLabel: '🔬 STEM & Robotics Hub',
    badge: 'NITI Aayog Approved',
    tagline: 'Where 6th Graders Code Autonomous Drones & Quantum Algorithms',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80',
    description: 'Equipped with industrial 3D printers, laser cutters, Arduino/Raspberry Pi workbenches, and drone testing cages. Students gain hands-on prototyping skills under IIT & MIT alumni mentorship.',
    stats: [
      { label: 'Mentorship Ratio', value: '12:1' },
      { label: 'Hardware Kits', value: '150+' },
      { label: 'Patents Filed', value: '14' }
    ],
    highlights: [
      'Dual-Axis 3D Rapid Prototyping & Laser Engraving',
      'Autonomous Drone Flight & Computer Vision Testing Arena',
      'Python, ROS & C++ Embedded Systems Lab',
      'NASA Human Exploration Rover Challenge Team Partner'
    ]
  },
  {
    id: 'sports',
    title: 'Olympic-Standard Sports Arena & Aquatic Center',
    tabLabel: '🏊 Olympic Sports Complex',
    badge: 'Fit India Certified',
    tagline: '50-Acre Athletic Infrastructure with All-Weather Heated Pool',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    description: 'A 50m temperature-controlled 8-lane swimming pool, floodlit FIFA-grade natural turf, 4 Plexipave tennis courts, and indoor wooden badminton arenas with NIS-certified coaches.',
    stats: [
      { label: 'Pool Length', value: '50 Meters' },
      { label: 'NIS Coaches', value: '18 Full-Time' },
      { label: 'National Medals', value: '240+' }
    ],
    highlights: [
      '8-Lane Heated Swimming Pool with Underwater Video Stroke Analysis',
      'FIFA-Standard Cricket & Football Stadium with Floodlights',
      '4 Synthetic Acrylic Tennis Courts & 6 Indoor Wooden Badminton Courts',
      'Shooting Range (10m Air Rifle) & Taekwondo / Karate Dojos'
    ]
  },
  {
    id: 'library',
    title: 'Knowledge Sanctum & Digital Research Hub',
    tabLabel: '📚 Knowledge & E-Library',
    badge: 'JSTOR & IEEE Access',
    tagline: '35,000+ Curated Volumes with RFID Self-Checkout & Research Pods',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    description: 'A two-story sunlit architectural library housing classical Vedic texts alongside international scientific journals, digital Kindle suites, and soundproof collegiate debate booths.',
    stats: [
      { label: 'Physical Volumes', value: '35,000+' },
      { label: 'E-Journals', value: '12,000+' },
      { label: 'Daily Footfall', value: '850+' }
    ],
    highlights: [
      'Automated RFID Barcode Kiosks with 5-Second Book Returns',
      'Dedicated Junior Reader Nooks with Interactive Audio Books',
      'Subscription to JSTOR, EBSCO, IEEE & British Council Digital Library',
      'Soundproof Discussion Pods for MUN & Olympiad Peer Cohorts'
    ]
  },
  {
    id: 'arts',
    title: 'Indian Classical Music, Dance & Theatre Academy',
    tabLabel: '🎭 Classical Arts & Theatre',
    badge: 'Gandharva Mahavidyalaya',
    tagline: '800-Seater Acoustic Auditorium & Vedic Heritage Studios',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
    description: 'Nurturing Indian classical heritage through Kathak, Bharatnatyam, Sitar, Tabla, and Hindustani Vocal alongside a 60-piece Western Symphony Orchestra and theatre studios.',
    stats: [
      { label: 'Auditorium Seats', value: '800' },
      { label: 'Instruments', value: '45+ Kinds' },
      { label: 'Annual Plays', value: '12' }
    ],
    highlights: [
      'Acoustically Engineered Meyer Sound 800-Capacity Auditorium',
      'Classical Gurukul Riyaz Chambers with Hardwood Acoustic Panels',
      'Western Brass, Percussion & Strings Symphony Orchestra Room',
      'Fine Arts, Pottery, Canvas Painting & Traditional Sculpture Studios'
    ]
  }
];

export const CampusLifeExplorer = () => {
  const [activeTab, setActiveTab] = useState('stem');

  const currentFacility = facilities.find((f) => f.id === activeTab) || facilities[0];

  return (
    <section className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3 border border-indigo-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>World-Class 50-Acre Campus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            A Day in the Life of a Gurukul Scholar
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Explore our state-of-the-art facilities designed to cultivate intellectual curiosity, athletic endurance, and rich cultural heritage.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {facilities.map((fac) => {
            const isActive = activeTab === fac.id;
            return (
              <button
                key={fac.id}
                onClick={() => setActiveTab(fac.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/25 scale-[1.03]'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/90'
                }`}
              >
                <span>{fac.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Facility Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFacility.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Image with Floating Stats */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-slate-200 group">
                  <img
                    src={currentFacility.image}
                    alt={currentFacility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-extrabold text-xs shadow-md border border-white/60">
                      {currentFacility.badge}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tagline */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-amber-300">Gurukul Campus Highlight</p>
                    <h4 className="text-base sm:text-lg font-bold text-white drop-shadow-md">
                      {currentFacility.tagline}
                    </h4>
                  </div>
                </div>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {currentFacility.stats.map((st, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                      <span className="text-xs sm:text-sm font-black text-indigo-700 block">
                        {st.value}
                      </span>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Details & Checklist */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 mb-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>State-of-the-Art Infrastructure</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 mb-4 leading-tight">
                    {currentFacility.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {currentFacility.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-3 mb-8">
                    {currentFacility.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                  <Link
                    to="/campus-tour"
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-indigo-600/20 hover:scale-105 active:scale-95 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Explore 3D Virtual Tour</span>
                  </Link>
                  <Link
                    to="/admissions"
                    className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors"
                  >
                    <span>Schedule Campus Visit</span>
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default CampusLifeExplorer;

