import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CLINIC_INFO } from '../data/clinicData';

export const TheBrand: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const macroDrift = useTransform(scrollYProgress, [0.05, 0.35], [-30, 40]);

  return (
    <section
      id="brand"
      className="relative py-10 sm:py-16 overflow-hidden bg-gradient-to-b from-[#F7F5F0] via-[#FCF8F2] to-[#F7F5F0] scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background skin macro with warm rosy glow */}
      <motion.div
        style={{ y: macroDrift }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <img
          src="/src/assets/images/skin_macro_1789255214888.jpg"
          alt="Skin macro cellular texture"
          className="w-full h-full object-cover scale-110 blur-[1px] opacity-35"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Soft champagne & peach gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#F7F5F0]/90 via-[#FAF3EC]/85 to-[#F7F5F0]/90" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Animated Gold Hairline Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Clinical Mastery Badge Column */}
          <div className="lg:col-span-3">
            <div className="p-5 rounded-2xl bg-white/80 border border-amber-200/80 shadow-xs backdrop-blur-sm">
              <span className="font-editorial italic text-4xl sm:text-5xl text-amber-800 font-semibold block leading-none">
                VI+
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/70 mt-2 block font-semibold">
                6+ Years of Clinical Practice
              </span>
            </div>
          </div>

          {/* Core Brand Narrative Column */}
          <div className="lg:col-span-9">
            {/* Huge serif italic statement */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial italic text-3xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-light leading-[1.18] mb-8"
            >
              "The Art & Science of Skin"
            </motion.h2>

            {/* Editorial body copy */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#1A1A1A]/85 font-normal leading-[1.75] text-base sm:text-lg"
            >
              <p>
                Founded by <strong className="font-semibold text-[#1A1A1A]">Dr. Priti Prakhar</strong>, our clinic was conceived not as a standard, rushed outpatient room, but as an unhurried clinical atelier in Purnia. For over twelve years, we have approached human skin as both a complex biological organ and an intimate canvas of identity.
              </p>
              <p>
                Every protocol is made-to-measure. Rejecting aggressive, one-size-fits-all treatments, our methodology marries rigorous clinical diagnosis with subtle, restorative cosmetology—ensuring lasting cutaneous health that looks effortlessly radiant.
              </p>
            </motion.div>

            {/* Colorful clinical pillars */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="px-3.5 py-1.5 rounded-lg bg-rose-50 text-rose-800 text-xs font-medium border border-rose-200">
                🌿 Tailored Botanical & Medical Protocols
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200">
                🔬 Advanced Dermoscopy & Micro-Peels
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-sky-50 text-sky-800 text-xs font-medium border border-sky-200">
                ⭐ 100% Doctor Direct Consultation
              </span>
            </div>

            {/* Micro stats banner with vivid soft color card containers */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-6 pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
            >
              <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/70 shadow-xs hover:shadow-md transition-shadow">
                <p className="font-editorial italic text-2xl sm:text-3xl text-rose-900 font-semibold">
                  12,000+
                </p>
                <p className="text-[11px] uppercase tracking-wider text-rose-700/80 mt-1 font-medium">
                  Patients Treated
                </p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 shadow-xs hover:shadow-md transition-shadow">
                <p className="font-editorial italic text-2xl sm:text-3xl text-amber-900 font-semibold">
                  ₹500
                </p>
                <p className="text-[11px] uppercase tracking-wider text-amber-700/80 mt-1 font-medium">
                  Evaluation Fee
                </p>
              </div>
              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200/70 shadow-xs hover:shadow-md transition-shadow">
                <p className="font-editorial italic text-2xl sm:text-3xl text-indigo-900 font-semibold">
                  2011
                </p>
                <p className="text-[11px] uppercase tracking-wider text-indigo-700/80 mt-1 font-medium">
                  MBBS Qualified
                </p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/70 shadow-xs hover:shadow-md transition-shadow">
                <p className="font-editorial italic text-2xl sm:text-3xl text-emerald-900 font-semibold">
                  100%
                </p>
                <p className="text-[11px] uppercase tracking-wider text-emerald-700/80 mt-1 font-medium">
                  Doctor-Led Care
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
