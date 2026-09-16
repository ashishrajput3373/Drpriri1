import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheBrand } from './components/TheBrand';
import { DoctorSection } from './components/DoctorSection';
import { Philosophy } from './components/Philosophy';
import { ServicesSection } from './components/ServicesSection';
import { HairTreatmentSection } from './components/HairTreatmentSection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { PatientJourney } from './components/PatientJourney';
import { DarkStatement } from './components/DarkStatement';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('General Dermatology');

  // Initialize smooth luxury scrolling via Lenis
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      let animationFrameId: number;

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };

      animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
      };
    } catch (err) {
      console.warn('Lenis smooth scroll initialization skipped', err);
    }
  }, []);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#F7F5F0] text-[#1A1A1A] selection:bg-[#B08D57]/20 selection:text-[#1A1A1A]">
      {/* 2-second Ivory Preloader with letter-by-letter fade in & gold hairline wipe */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* Subtle film grain overlay (3-5% opacity) */}
      <div className="film-grain" aria-hidden="true" />

      {/* Luxury Gold Dot & Trailing Ring Custom Cursor (disabled on touch) */}
      <CustomCursor />

      {/* Fixed Minimal Header / Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. HERO (full viewport, kinetic typography, B&W portrait parallax) */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. THE BRAND (macro skin background drift, 85% ivory overlay) */}
        <TheBrand />

        {/* 3. MEET DR. PRITY PRAKHAR (split gallery plaque layout, credentials) */}
        <DoctorSection />

        {/* 4. OUR PHILOSOPHY ("Beautiful skin is achieved through discipline and science") */}
        <Philosophy />

        {/* 5. SERVICES (hover-to-discover numbered index 01–06) */}
        <ServicesSection onSelectServiceForBooking={(srv) => handleOpenBooking(srv)} />

        {/* 5B. HAIR TREATMENT & TRICHOLOGY SPOTLIGHT (PRP, Hair Loss, Scalp Science) */}
        <HairTreatmentSection onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* 6. BEFORE / AFTER RESULTS (REF 4 monochrome split comparison) */}
        <BeforeAfterGallery />

        {/* 7. PATIENT JOURNEY (Roman numeral timeline I–V) */}
        <PatientJourney />

        {/* 8. DARK STATEMENT SECTION (inverted charcoal background, emotional peak) */}
        <DarkStatement />

        {/* 9. VISIT US (REF 3 clinic interior, editorial details, desaturated map) */}
        <VisitUs onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 10. FOOTER ("We love your skin", gold hairline, copyright) */}
      <Footer />

      {/* Mobile Sticky Bar: Quick Call + WhatsApp + Book */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Consultation Booking Drawer / Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
