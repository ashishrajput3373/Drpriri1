import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const title = "Dr. Priti Prakhar";

  useEffect(() => {
    // Lock scroll while preloader is playing
    document.body.style.overflow = 'hidden';

    // 2-second experience
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
      setTimeout(onComplete, 700);
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F7F5F0] text-[#1A1A1A] select-none"
        >
          <div className="relative flex flex-col items-center px-6 max-w-lg text-center">
            {/* Structural top label */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[11px] uppercase tracking-[0.35em] text-[#B08D57] font-medium mb-4"
            >
              Dermatology & Cosmetology
            </motion.p>

            {/* Serif italic title animating letter by letter */}
            <div className="overflow-hidden flex items-baseline justify-center mb-3">
              {title.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-editorial italic text-4xl sm:text-6xl text-[#1A1A1A] font-light tracking-tight inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>

            {/* Hindi poetic line in Devanagari serif */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="font-hindi text-xs sm:text-sm text-[#1A1A1A]/70 mb-6 italic"
            >
              त्वचा की देखभाल — विज्ञान और कला का संगम
            </motion.p>

            {/* Gold hairline expanding horizontally */}
            <div className="w-48 sm:w-64 h-[1px] bg-[#B08D57]/20 relative overflow-hidden mb-4">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-[#B08D57]"
              />
            </div>

            {/* Location indicator */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-[10px] tracking-[0.25em] uppercase text-[#1A1A1A]/60"
            >
              Purnia, Bihar · Est. 2011
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
