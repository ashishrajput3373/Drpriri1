import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Microscope, 
  Activity, 
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { HAIR_PROTOCOLS_DATA, CLINIC_INFO } from '../data/clinicData';

interface HairTreatmentSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const HairTreatmentSection: React.FC<HairTreatmentSectionProps> = ({ onOpenBooking }) => {
  const [activeProtocolId, setActiveProtocolId] = useState<string>(HAIR_PROTOCOLS_DATA[0].id);

  const currentProtocol = HAIR_PROTOCOLS_DATA.find((p) => p.id === activeProtocolId) || HAIR_PROTOCOLS_DATA[0];

  return (
    <section
      id="hair-treatment"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#F7F5F0] via-[#FDFBF7] to-[#F7F5F0] relative overflow-hidden scroll-mt-20 sm:scroll-mt-24 border-t border-amber-200/50"
    >
      {/* Warm ambient background lights */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-200/35 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-sky-200/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-[#1A1A1A]/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-[11px] uppercase tracking-[0.25em] font-bold mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Specialized Trichology Wing · Hair Restoration</span>
            </div>
            <h2 className="font-editorial italic text-3xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-light tracking-tight">
              Hair Loss & Scalp Science
            </h2>
            <p className="font-hindi text-sm sm:text-base text-amber-950/80 mt-2 italic font-medium">
              बालों का झड़ना, डैंड्रफ और गंजापन — वैज्ञानिक निदान एवं पीआरपी (PRP) थेरेपी
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="book-hair-consultation-top-btn"
              onClick={() => onOpenBooking('Hair & Scalp Care (Trichology)')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 hover:from-emerald-800 hover:to-teal-800 text-white text-xs uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Hair Consultation</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="p-3 rounded-xl bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-50 transition-colors shadow-xs"
              title="Call Clinic Reception"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature Banner: Clinical photo + High-Level Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 bg-white/80 rounded-2xl p-6 sm:p-8 border border-emerald-200/80 shadow-sm backdrop-blur-xs">
          {/* Realistic Clinical Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-amber-200/80">
              <img
                src="/src/assets/images/hair_restoration_clinic_1789258769421.jpg"
                alt="Clinical Hair & Scalp Trichoscopy Examination by Dr. Priti Prakhar"
                className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Polarized Trichoscopy in Clinic</span>
              </div>
            </div>
            <p className="text-[11px] text-[#1A1A1A]/70 mt-2.5 italic text-center">
              Targeted scalp dermoscopy & biological growth factor stimulation at Maa Hospital, Line Bazar, Purnia.
            </p>
          </div>

          {/* Key Pillars */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Evidence-Based Medical Protocol · No Guesswork</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1A1A] font-light leading-snug">
              Stop Hair Fall at the Follicular Root with Individualized Medical Therapeutics
            </h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed">
              Hair thinning and sudden shedding often stem from combined biological factors: <strong>DHT hormonal sensitivity</strong>, <strong>micro-vascular constriction</strong>, <strong>nutritional deficiencies</strong> (Ferritin, Vitamin D3, B12), or <strong>post-viral telogen effluvium</strong>. Dr. Priti Prakhar uses clinical trichoscopy to pinpoint your exact root status before prescribing tailored therapy.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-center">
                <p className="font-editorial italic text-2xl text-emerald-900 font-bold leading-none">85%+</p>
                <p className="text-[10px] uppercase tracking-wider text-emerald-800 font-semibold mt-1">Shedding Halted</p>
                <p className="text-[9px] text-[#1A1A1A]/60">Within 30–45 Days</p>
              </div>
              <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-200 text-center">
                <p className="font-editorial italic text-2xl text-sky-900 font-bold leading-none">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-sky-800 font-semibold mt-1">Autologous PRP</p>
                <p className="text-[9px] text-[#1A1A1A]/60">Zero Synthetic Risk</p>
              </div>
              <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-center">
                <p className="font-editorial italic text-2xl text-amber-900 font-bold leading-none">4–6</p>
                <p className="text-[10px] uppercase tracking-wider text-amber-800 font-semibold mt-1">Sessions Plan</p>
                <p className="text-[9px] text-[#1A1A1A]/60">Proven Regrowth Cycle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Treatment Protocols Tabs */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-emerald-900 font-bold flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-700" />
              <span>Select Treatment Protocol to View Clinical Details</span>
            </h4>
            <span className="text-[11px] text-[#1A1A1A]/60 hidden sm:block">Click any protocol tab</span>
          </div>

          {/* Tab Navigation Chips */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
            {HAIR_PROTOCOLS_DATA.map((protocol) => {
              const isSelected = protocol.id === activeProtocolId;
              return (
                <button
                  key={protocol.id}
                  id={`hair-tab-${protocol.id}`}
                  onClick={() => setActiveProtocolId(protocol.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-emerald-800 text-white shadow-md ring-2 ring-emerald-600/30 scale-[1.02]'
                      : 'bg-white hover:bg-emerald-50 text-[#1A1A1A]/80 border border-amber-200/80 hover:border-emerald-300'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-300' : 'bg-emerald-600'}`} />
                  <span>{protocol.title.split('(')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Active Protocol Expanded Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProtocol.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`p-6 sm:p-8 rounded-2xl bg-white border-2 ${currentProtocol.color.border} shadow-lg relative overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-[#1A1A1A]/10">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold mb-2 ${currentProtocol.color.badgeBg} ${currentProtocol.color.badgeText}`}>
                    ✦ {currentProtocol.tag}
                  </span>
                  <h3 className="font-editorial italic text-2xl sm:text-4xl text-[#1A1A1A] font-normal">
                    {currentProtocol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-medium mt-1">
                    {currentProtocol.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-200/80">
                  <Clock className="w-4 h-4 text-amber-700" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider text-amber-800 font-bold">Timeline & Sessions</p>
                    <p className="text-xs text-[#1A1A1A] font-medium">{currentProtocol.timeline.split(';')[0]}</p>
                  </div>
                </div>
              </div>

              {/* Indication & Procedure */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-amber-200/60">
                  <h5 className="text-[11px] uppercase tracking-wider text-amber-900 font-bold mb-1.5 flex items-center gap-1.5">
                    <Microscope className="w-3.5 h-3.5 text-amber-700" />
                    <span>Who is this for (Clinical Indications)</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-light">
                    {currentProtocol.indication}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-amber-200/60">
                  <h5 className="text-[11px] uppercase tracking-wider text-emerald-900 font-bold mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>How the Procedure is Performed</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-light">
                    {currentProtocol.procedure}
                  </p>
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="mb-6">
                <h5 className="text-[11px] uppercase tracking-wider text-[#1A1A1A]/70 font-bold mb-3">
                  Key Expected Clinical Outcomes:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProtocol.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200/60 text-xs text-[#1A1A1A]/85"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action bar inside detail card */}
              <div className="pt-4 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#1A1A1A]/60">
                  Consultation includes digital trichoscopic root check at Maa Hospital, Line Bazar.
                </p>
                <button
                  id={`book-hair-cta-${currentProtocol.id}`}
                  onClick={() => onOpenBooking(`Hair Treatment: ${currentProtocol.title}`)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white text-xs uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Consultation for this Protocol</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
