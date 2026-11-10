import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AdmissionInquiryModal } from './components/AdmissionInquiryModal';
import { PanelPortalModal } from './components/PanelPortalModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { ApplicationTrackerModal } from './components/ApplicationTrackerModal';
import { QuickInquiryDrawer } from './components/QuickInquiryDrawer';

// Dedicated Routed Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { CampusTourPage } from './pages/CampusTourPage';
import { FeeStructurePage } from './pages/FeeStructurePage';
import { NoticesPage } from './pages/NoticesPage';
import { ContactPage } from './pages/ContactPage';

const AppLayout = () => {
  const { notification } = useSchool();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-indigo-600 selection:text-white relative overflow-x-hidden flex flex-col justify-between">
      {/* Smooth Automatic Scroll to Top on Page Switch */}
      <ScrollToTop />

      {/* Interactive Custom Mouse Cursor */}
      <CustomCursor />

      {/* Floating Dynamic Notification Banner */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-indigo-500/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* Top Navbar Header */}
      <Navbar />

      {/* Main Page Router View */}
      <main className="flex-1 bg-slate-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/campus-tour" element={<CampusTourPage />} />
          <Route path="/fees" element={<FeeStructurePage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Bottom Institutional Footer */}
      <Footer />

      {/* Floating Speed Dial & Instant Callback Widget */}
      <QuickInquiryDrawer onOpenTracker={() => setIsTrackerOpen(true)} />

      {/* Global Interactive Modals */}
      <AdmissionInquiryModal />
      <PanelPortalModal />
      <CommandPaletteModal isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} />
      <ApplicationTrackerModal isOpen={isTrackerOpen} onClose={() => setIsTrackerOpen(false)} />
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <SchoolProvider>
        <AppLayout />
      </SchoolProvider>
    </BrowserRouter>
  );
}

export default App;
