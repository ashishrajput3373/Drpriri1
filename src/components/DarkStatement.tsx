import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const DarkStatement: React.FC = () => {
  return (
    <section
      id="statement"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#14161D] text-[#F7F5F0] overflow-hidden py-32 sm:py-40 select-none"
    >
      {/* Colorful luminous ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] rounded-full bg-amber-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-rose-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] rounded-full bg-emerald-600/15 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10 text-center flex flex-col items-center">
        {/* Colorful hairline indicator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-32 h-[2px] bg-gradient-to-r from-amber-400 via-rose-400 to-amber-400 mb-12"
        />

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] uppercase tracking-[0.4em] font-semibold mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>CLINICAL DEDICATION</span>
          <Sparkles className="w-3.5 h-3.5 text-rose-300" />
        </motion.span>

        {/* Line-by-line fading huge ivory serif headline */}
        <div className="space-y-4 sm:space-y-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light leading-[1.08] tracking-tight"
          >
            We love your skin.
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-100 font-light leading-[1.08] tracking-tight"
          >
            Let us help you love it even more.
          </motion.h2>
        </div>

        {/* Hindi poetic line in Devanagari */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-hindi text-base sm:text-2xl text-amber-200/90 italic mb-10 max-w-lg font-medium"
        >
          "स्वास्थ्य ही वास्तविक सौंदर्य का आधार है।"
        </motion.p>

        {/* Signature representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.8 }}
          className="flex flex-col items-center border-t border-amber-400/20 pt-8"
        >
          <span className="font-editorial italic text-3xl sm:text-4xl text-amber-300 font-medium tracking-wide">
            — Dr. Priti Prakhar
          </span>
          <span className="text-[11px] uppercase tracking-[0.25em] text-white/70 mt-2 font-semibold">
            MBBS · Lead Dermatologist & Aesthetician · Line Bazar, Purnia
          </span>
        </motion.div>
      </div>
    </section>
  );
};
