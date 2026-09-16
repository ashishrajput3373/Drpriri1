import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageSquare, IndianRupee, Calendar } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { CLINIC_INFO } from '../data/clinicData';

interface VisitUsProps {
  onOpenBooking: () => void;
}

export const VisitUs: React.FC<VisitUsProps> = ({ onOpenBooking }) => {
  const [mapInteractive, setMapInteractive] = React.useState(false);
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Dr. Priti Prakhar's Clinic, I would like to schedule a dermatology consultation at Maa Hospital, Line Bazar, Purnia.`
  )}`;

  return (
    <section
      id="visit"
      className="relative py-24 sm:py-36 bg-gradient-to-b from-[#F7F5F0] via-[#FAF4ED] to-[#F7F5F0] overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Background clinic interior photograph with warm champagne overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/src/assets/images/clinic_interior_1789255229158.jpg"
          alt="Dr. Priti Prakhar's clinic interior at Maa Hospital, Purnia"
          className="w-full h-full object-cover clinical-monochrome opacity-30"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F0]/95 via-[#FAF4ED]/90 to-[#F7F5F0]/95" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] uppercase tracking-[0.35em] font-semibold mb-3">
            ✦ VISIT US · CLINIC SANCTUARY
          </span>
          <h2 className="font-editorial italic text-4xl sm:text-6xl text-[#1A1A1A] font-light">
            Sanctuary in Line Bazar
          </h2>
          <p className="font-hindi text-sm sm:text-base text-amber-950/80 mt-1 italic font-medium">
            माँ हॉस्पिटल, शशि कॉम्प्लेक्स, कुंडी पुल के पास, लाइन बाजार, पूर्णिया
          </p>
        </div>

        {/* Editorial Two-Column Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Editorial Details Plaque with rich warm card styling */}
          <div className="lg:col-span-6 bg-white/90 backdrop-blur-md border border-amber-300/80 p-8 sm:p-12 flex flex-col justify-between shadow-2xl rounded-2xl relative ring-1 ring-amber-100">
            {/* Architectural corner marks */}
            <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-500 rounded-tl" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-500 rounded-tr" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-500 rounded-bl" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-500 rounded-br" />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-800 font-bold">
                  CONSULTATION CLINIC · PURNIA
                </p>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1A1A1A] font-medium mb-6">
                Dr. Priti Prakhar's Skin Care Clinic
              </h3>

              <div className="space-y-6 text-[#1A1A1A]/85 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">Maa Hospital, Shashi Complex</p>
                    <p className="font-normal text-[#1A1A1A]/75">Near Kundi Pul, Line Bazar</p>
                    <p className="font-normal text-[#1A1A1A]/75">Purnia, Bihar 854301</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-800 shrink-0 mt-0.5 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">Direct Clinic Helpline</p>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="text-lg font-editorial italic font-semibold text-[#1A1A1A] hover:text-amber-700 transition-colors underline decoration-amber-400 decoration-1 underline-offset-4"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Fee */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5 shadow-xs">
                    <IndianRupee className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">Consultation Honorarium</p>
                    <p className="font-editorial italic font-semibold text-xl text-emerald-900">
                      {CLINIC_INFO.consultationFee} <span className="text-xs text-[#1A1A1A]/60 not-italic font-sans font-normal">(private evaluation session)</span>
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5 border-t border-amber-200/60 pt-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-800 shrink-0 mt-0.5 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">Consultation Hours</p>
                    <p className="text-sm font-medium text-[#1A1A1A]">
                      Mon–Sat: 11:00 AM – 2:30 PM & 3:15 PM – 5:00 PM
                    </p>
                    <p className="text-xs text-amber-800 mt-1 font-medium bg-amber-50 px-2 py-0.5 rounded inline-block">
                      "{CLINIC_INFO.timingNote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vibrant Action Buttons */}
            <div className="mt-10 pt-6 border-t border-amber-200/60 flex flex-wrap gap-3">
              <a
                id="visit-call-btn"
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-800 hover:bg-sky-900 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4 text-sky-200" />
                <span>Call Now</span>
              </a>

              <a
                id="visit-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-emerald-200" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
              >
                <Calendar className="w-4 h-4 text-rose-200" />
                <span>Reserve Online</span>
              </button>
            </div>
          </div>

          {/* Right: Embedded Google Map Styled */}
          <div className="lg:col-span-6 flex flex-col">
            <div
              className="relative flex-1 min-h-[360px] border border-amber-200 rounded-2xl overflow-hidden shadow-xl bg-[#EAE6DD]"
              onMouseLeave={() => setMapInteractive(false)}
            >
              {/* Google Maps iframe */}
              <iframe
                title="Dr. Priti Prakhar's Skin Care Clinic Location at Maa Hospital, Line Bazar, Purnia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.6397228800164!2d87.47285627581177!3d25.777123977341818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f28325a7bc521d%3A0xe54e601c06dcb35f!2sMaa%20Hospital%20Line%20Bazar%20Purnia!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className={`w-full h-full min-h-[380px] desaturated-map border-0 transition-opacity ${
                  mapInteractive ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Interactivity Overlay */}
              {!mapInteractive && (
                <div
                  onClick={() => setMapInteractive(true)}
                  className="absolute inset-0 bg-black/5 hover:bg-transparent flex items-end justify-center pb-6 cursor-pointer group transition-colors"
                >
                  <button
                    type="button"
                    className="bg-white/95 backdrop-blur-md border border-amber-400 text-amber-900 text-xs font-semibold px-4 py-2 uppercase tracking-widest shadow-md group-hover:bg-amber-600 group-hover:text-white rounded-lg transition-colors"
                  >
                    Tap to interact with map
                  </button>
                </div>
              )}

              {/* Map Floating Location Pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-amber-300 px-4 py-2 rounded-full text-xs shadow-md flex items-center gap-2 pointer-events-none z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-editorial italic font-semibold text-sm text-[#1A1A1A]">
                  Line Bazar, Purnia
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-[#1A1A1A]/60 px-1 font-medium">
              <span>Landmark: Near Kundi Pul, Shashi Complex</span>
              <a
                href="https://maps.google.com/?q=Maa+Hospital+Line+Bazar+Purnia"
                target="_blank"
                rel="noreferrer"
                className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-400"
              >
                Get Google Maps Directions ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
