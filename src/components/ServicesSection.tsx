import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST } from '../data/clinicData';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

const serviceColorMap: Record<string, {
  accentText: string;
  badgeBg: string;
  activeRowBg: string;
  dotBg: string;
  btnBg: string;
  tagBg: string;
}> = {
  '01': {
    accentText: 'text-sky-600',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
    activeRowBg: 'bg-sky-50/60',
    dotBg: 'bg-sky-500',
    btnBg: 'bg-sky-800 hover:bg-sky-700 text-white',
    tagBg: 'bg-sky-600',
  },
  '02': {
    accentText: 'text-rose-600',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
    activeRowBg: 'bg-rose-50/60',
    dotBg: 'bg-rose-500',
    btnBg: 'bg-rose-800 hover:bg-rose-700 text-white',
    tagBg: 'bg-rose-600',
  },
  '03': {
    accentText: 'text-emerald-600',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    activeRowBg: 'bg-emerald-50/60',
    dotBg: 'bg-emerald-500',
    btnBg: 'bg-emerald-800 hover:bg-emerald-700 text-white',
    tagBg: 'bg-emerald-600',
  },
  '04': {
    accentText: 'text-amber-600',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    activeRowBg: 'bg-amber-50/60',
    dotBg: 'bg-amber-500',
    btnBg: 'bg-amber-800 hover:bg-amber-700 text-white',
    tagBg: 'bg-amber-600',
  },
  '05': {
    accentText: 'text-indigo-600',
    badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    activeRowBg: 'bg-indigo-50/60',
    dotBg: 'bg-indigo-500',
    btnBg: 'bg-indigo-800 hover:bg-indigo-700 text-white',
    tagBg: 'bg-indigo-600',
  },
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeId, setActiveId] = useState<string | null>('general-dermatology');

  return (
    <section
      id="services"
      className="py-24 sm:py-36 bg-gradient-to-b from-[#F7F5F0] via-[#FAF5EE] to-[#F7F5F0] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1A1A1A]/10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] uppercase tracking-[0.35em] font-semibold mb-3">
              ✦ CLINICAL DISCIPLINES
            </span>
            <h2 className="font-editorial italic text-4xl sm:text-6xl text-[#1A1A1A] font-light">
              Clinical & Aesthetic Services
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/60 mt-4 md:mt-0 font-medium">
            Explore comprehensive skin & hair protocols
          </p>
        </div>

        {/* Hover-to-Discover Service Accordion / Table */}
        <div className="border-t border-[#1A1A1A]/10">
          {SERVICES_LIST.map((service) => {
            const isOpen = activeId === service.id;
            const theme = serviceColorMap[service.number] || serviceColorMap['01'];

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(isOpen ? null : service.id)}
                className={`group border-b border-[#1A1A1A]/15 transition-all duration-300 cursor-pointer ${
                  isOpen ? theme.activeRowBg : 'hover:bg-white/70'
                }`}
              >
                {/* Header Row: Number + Title */}
                <div className="py-8 sm:py-10 px-4 sm:px-6 flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-6 sm:gap-12">
                    <span className={`font-sans text-xs sm:text-sm font-bold tracking-widest ${theme.accentText}`}>
                      {service.number}
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-light group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`hidden sm:inline-block text-[11px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${theme.badgeBg}`}>
                      {isOpen ? 'Viewing' : 'Explore'}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-9 h-9 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A] group-hover:border-[#B08D57] group-hover:text-[#B08D57] bg-white"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Content with Description + Desaturated Thumbnail */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-10 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-[#1A1A1A]/5">
                        {/* Description & Indications */}
                        <div className="lg:col-span-7 space-y-5">
                          <p className="text-[#1A1A1A]/85 text-base sm:text-lg font-normal leading-relaxed">
                            {service.summary}
                          </p>

                          <div className="pt-3">
                            <p className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold mb-3">
                              Clinical Indications & Protocols
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {service.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1A1A1A]/80 font-medium">
                                  <span className={`w-2 h-2 rounded-full ${theme.dotBg}`} />
                                  <span>{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 flex flex-wrap items-center gap-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectServiceForBooking(service.title);
                              }}
                              className={`inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-lg shadow-sm transition-all cursor-pointer ${theme.btnBg}`}
                            >
                              <span>Book Consultation for {service.title.split(' ')[0]}</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </button>

                            {service.id === 'hair-scalp' && (
                              <a
                                href="#hair-treatment"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-bold rounded-lg border-2 border-emerald-600 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors shadow-xs"
                              >
                                <span>Detailed Hair & PRP Protocols</span>
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Desaturated Thumbnail sliding in from the right */}
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                          className="lg:col-span-5"
                        >
                          <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xl border border-[#1A1A1A]/10 bg-[#E8E4DA] shadow-lg relative group/img">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className={`absolute bottom-3 left-3 text-[10px] uppercase tracking-wider text-white px-3 py-1 rounded-md shadow-md font-semibold ${theme.tagBg}`}>
                              Case {service.number} · {service.title}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
