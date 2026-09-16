import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MagneticButton } from './MagneticButton';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { scrollY } = useScroll();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Parallax transforms for image vs text
  const imageY = useTransform(scrollY, [0, 800], [0, 140]);
  const textY = useTransform(scrollY, [0, 800], [0, -60]);
  const imageScale = useTransform(scrollY, [0, 800], [1, 1.05]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const headlineWords = [
    { text: 'Entrust', delay: 0.1, offsetX: -25, offsetY: 15 },
    { text: 'your', delay: 0.2, offsetX: 15, offsetY: -20 },
    { text: 'skin', delay: 0.3, offsetX: -10, offsetY: 25, isAccent: true },
    { text: 'to', delay: 0.4, offsetX: 20, offsetY: 10 },
    { text: 'a', delay: 0.45, offsetX: -15, offsetY: -15 },
    { text: 'specialist', delay: 0.55, offsetX: 30, offsetY: 20 },
    { text: 'in', delay: 0.65, offsetX: -20, offsetY: 15 },
    { text: 'Purnia.', delay: 0.75, offsetX: 10, offsetY: -25 },
  ];

  const floatingWords = ['Skin', 'healthy', 'radiant', 'yours'];

  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12"
    >
      {/* Warm colorful ambient background lighting (Rose, Peach, Amber, Botanical Mint) */}
      <div className="absolute top-1/4 -left-24 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full bg-gradient-to-tr from-[#FED7AA]/50 via-[#FDE68A]/40 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 right-0 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-gradient-to-bl from-[#FECDD3]/45 via-[#FCE7F3]/30 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-72 sm:w-[400px] h-72 sm:h-[400px] rounded-full bg-gradient-to-r from-[#D1FAE5]/40 via-[#CFFAFE]/25 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Subtle architectural ambient background grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 border-x border-[#B08D57]/30">
          <div className="border-r border-[#B08D57]/20 hidden lg:block col-span-3" />
          <div className="border-r border-[#B08D57]/20 col-span-4 lg:col-span-6" />
          <div className="border-r border-[#B08D57]/20 hidden lg:block col-span-3" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Kinetic Typography & Copy */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Top Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#B08D57] font-semibold">
                Dr. Priti Prakhar · Dermatology & Hair Restoration (Trichology)
              </span>
            </motion.div>

            {/* Kinetic Typography Headline: scattered words assemble into place */}
            <h1
              id="hero-kinetic-headline"
              className="font-editorial text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-[#1A1A1A] leading-[1.08] mb-6"
            >
              {headlineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: word.offsetX,
                    y: word.offsetY,
                    filter: 'blur(8px)',
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + word.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block mr-2.5 sm:mr-3.5 ${
                    word.isAccent
                      ? 'italic font-normal text-[#1A1A1A] underline decoration-[#B08D57]/40 decoration-1 underline-offset-8'
                      : ''
                  }`}
                >
                  {word.text}
                </motion.span>
              ))}
            </h1>

            {/* Sub-line (italic gold) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial italic text-2xl sm:text-3xl text-[#B08D57] font-light mb-4"
            >
              Dermatology, as an art.
            </motion.p>

            {/* Hindi serif microcopy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1.0, delay: 1.3 }}
              className="font-hindi text-sm sm:text-base text-[#1A1A1A]/70 mb-8 italic"
            >
              {CLINIC_INFO.hindiTagline}
            </motion.p>

            {/* Colorful clinical focus pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap items-center gap-2 text-xs tracking-wider uppercase font-medium mb-8 sm:mb-10"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/80 shadow-xs"
              >
                ✦ Radiant Skin
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-xs"
              >
                ✦ Clinical Science
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 shadow-xs"
              >
                ✦ Acne & Pigmentation
              </motion.span>
              <motion.a
                href="#hair-treatment"
                whileHover={{ scale: 1.05 }}
                className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-semibold shadow-xs flex items-center gap-1 hover:bg-emerald-200 transition-colors"
              >
                <span>✦ Hair PRP & Regrowth</span>
                <span className="text-[10px] bg-emerald-700 text-white px-1.5 py-0.2 rounded-full">New</span>
              </motion.a>
            </motion.div>

            {/* Actions: Magnetic CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center"
            >
              <MagneticButton
                id="hero-book-consultation-button"
                onClick={onOpenBooking}
                variant="primary"
                className="group"
              >
                <span>Book a Consultation</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] group-hover:scale-150 transition-transform" />
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Column: B&W Editorial Portrait of Dr. Prity with Parallax */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center w-full"
          >
            {/* Inner mouse-offset tilt container separating scroll and mouse axes */}
            <motion.div
              animate={{
                x: mouseOffset.x * 0.5,
                y: mouseOffset.y * 0.5,
              }}
              transition={{ type: 'spring', damping: 30, stiffness: 100 }}
              className="relative w-full max-w-md"
            >
              {/* Subtle architectural gold corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-[#B08D57]/60 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-[#B08D57]/60 z-20 pointer-events-none" />

              {/* Main Portrait Artwork Container with warm glowing aura */}
              <div className="relative bg-gradient-to-br from-[#FFF5F0] via-[#FAF0E6] to-[#F5EBE6] p-2 shadow-2xl overflow-hidden aspect-[3/4] border border-[#B08D57]/30 ring-1 ring-[#B08D57]/20">
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src="/src/assets/images/dr_priti_portrait_1789258756465.jpg"
                    alt="Dr. Priti Prakhar - Dermatologist & Hair Specialist in Purnia"
                    className="w-full h-full object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </div>

                {/* Museum Exhibition Tag Overlay */}
                <div className="absolute bottom-2 left-2 right-2 p-4 sm:p-5 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/60 to-transparent text-[#F7F5F0]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#FDE68A] font-semibold">
                      Practicing Specialist · Purnia
                    </p>
                  </div>
                  <p className="font-editorial italic text-2xl sm:text-3xl text-white">
                    Dr. Priti Prakhar
                  </p>
                  <p className="text-[11px] text-[#F7F5F0]/90 font-light mt-0.5">
                    MBBS · 6+ Years Dermatological Practice
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
