import React from 'react';
import { motion } from 'motion/react';
import { PATIENT_JOURNEY } from '../data/clinicData';

interface StepTheme {
  border: string;
  badgeBg: string;
  badgeText: string;
  numeralBg: string;
  dotColor: string;
}

const STEP_THEMES: Record<string, StepTheme> = {
  I: {
    border: 'border-sky-300',
    badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
    badgeText: 'text-sky-700',
    numeralBg: 'bg-sky-50 text-sky-700 border-sky-400',
    dotColor: 'bg-sky-500',
  },
  II: {
    border: 'border-emerald-300',
    badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    badgeText: 'text-emerald-700',
    numeralBg: 'bg-emerald-50 text-emerald-700 border-emerald-400',
    dotColor: 'bg-emerald-500',
  },
  III: {
    border: 'border-rose-300',
    badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
    badgeText: 'text-rose-700',
    numeralBg: 'bg-rose-50 text-rose-700 border-rose-400',
    dotColor: 'bg-rose-500',
  },
  IV: {
    border: 'border-amber-300',
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
    badgeText: 'text-amber-700',
    numeralBg: 'bg-amber-50 text-amber-700 border-amber-400',
    dotColor: 'bg-amber-500',
  },
  V: {
    border: 'border-indigo-300',
    badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    badgeText: 'text-indigo-700',
    numeralBg: 'bg-indigo-50 text-indigo-700 border-indigo-400',
    dotColor: 'bg-indigo-500',
  },
};

export const PatientJourney: React.FC = () => {
  return (
    <section
      id="journey"
      className="py-24 sm:py-36 bg-gradient-to-b from-[#F7F5F0] via-[#FAF6F0] to-[#F7F5F0] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-300 text-sky-900 text-[11px] uppercase tracking-[0.35em] font-semibold mb-3">
            ✦ YOUR VISIT, AT A GLANCE
          </span>
          <h2 className="font-editorial italic text-4xl sm:text-6xl text-[#1A1A1A] font-light">
            The Patient Trajectory
          </h2>
          <p className="text-[#1A1A1A]/80 text-sm sm:text-base mt-4 font-normal">
            From your initial appointment inquiry to lasting cutaneous vitality, every touchpoint is curated for transparency and calm.
          </p>
        </div>

        {/* Roman Numeral Timeline: I to V */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-5 relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden md:block absolute top-7 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-300 via-rose-300 to-indigo-300 z-0" />

          {PATIENT_JOURNEY.map((step, idx) => {
            const theme = STEP_THEMES[step.numeral] || STEP_THEMES['I'];

            return (
              <motion.div
                key={step.numeral}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.0,
                  delay: 0.12 * idx,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 flex flex-col bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#1A1A1A]/10 hover:shadow-lg transition-all"
              >
                {/* Roman Numeral Circle / Marker */}
                <div className="flex items-center gap-3 md:flex-col md:items-start mb-5">
                  <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center shadow-xs ${theme.numeralBg}`}>
                    <span className="font-editorial italic text-2xl font-bold">
                      {step.numeral}
                    </span>
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded border ${theme.badgeBg}`}>
                    Step 0{idx + 1}
                  </span>
                </div>

                {/* Step Title & Content */}
                <h3 className="font-editorial text-xl sm:text-2xl text-[#1A1A1A] font-medium leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/85 font-normal leading-relaxed mb-3">
                  {step.description}
                </p>
                <div className="mt-auto pt-3 border-t border-[#1A1A1A]/10">
                  <p className="text-[11px] text-[#1A1A1A]/60 italic font-serif">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
