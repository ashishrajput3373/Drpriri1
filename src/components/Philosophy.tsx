import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const Philosophy: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const frag1Y = useTransform(scrollYProgress, [0.2, 0.5], [-20, 30]);
  const frag2Y = useTransform(scrollYProgress, [0.2, 0.5], [30, -25]);

  return (
    <section
      id="philosophy"
      className="py-28 sm:py-40 bg-gradient-to-b from-[#F7F5F0] via-[#FAF3EC] to-[#F7F5F0] relative overflow-hidden text-center scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Colorful ambient warm glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-rose-200/35 via-amber-200/30 to-emerald-200/25 blur-3xl pointer-events-none -z-0" />

      {/* Parallax skin texture fragments floating gently behind text */}
      <motion.div
        style={{ y: frag1Y }}
        className="absolute top-12 left-[8%] w-44 sm:w-64 aspect-square rounded-full overflow-hidden opacity-40 pointer-events-none blur-[0.5px] border border-amber-300/40 shadow-lg"
      >
        <img
          src="/src/assets/images/skin_macro_1789255214888.jpg"
          alt="Skin micro fragment"
          className="w-full h-full object-cover scale-150 clinical-monochrome"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        style={{ y: frag2Y }}
        className="absolute bottom-12 right-[8%] w-52 sm:w-72 aspect-[4/3] rounded-3xl overflow-hidden opacity-35 pointer-events-none blur-[1px] border border-rose-300/40 shadow-lg"
      >
        <img
          src="/src/assets/images/skin_macro_1789255214888.jpg"
          alt="Skin texture macro"
          className="w-full h-full object-cover scale-125 clinical-monochrome"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] uppercase tracking-[0.35em] font-semibold mb-8 shadow-xs"
        >
          ✦ OUR PHILOSOPHY
        </motion.span>

        {/* Centered italic serif statement with colourful word highlights */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial italic text-3xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-light leading-[1.25] mb-8"
        >
          "Beautiful skin is achieved through a thoughtful combination of{' '}
          <span className="text-amber-800 font-normal not-italic tracking-wide underline decoration-amber-300 underline-offset-8">
            discipline
          </span>{' '}
          and{' '}
          <span className="text-emerald-700 font-normal not-italic tracking-wide underline decoration-emerald-300 underline-offset-8">
            science
          </span>."
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-24 h-[2px] bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 mx-auto my-8 rounded-full"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="inline-block p-4 sm:p-5 rounded-2xl bg-white/75 backdrop-blur-xs border border-amber-200/80 shadow-xs max-w-xl mx-auto"
        >
          <p className="font-hindi text-base sm:text-lg text-amber-950 italic">
            विज्ञान की सटीकता और सौंदर्य की संवेदनशीलता — पूर्णिया में एक समर्पित चिकित्सा अनुभव।
          </p>
        </motion.div>
      </div>
    </section>
  );
};
