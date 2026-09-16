import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device has coarse pointer (touch device)
    const touchCheck = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouch(touchCheck);

    if (touchCheck) return;

    document.body.classList.add('custom-cursor-enabled');

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .interactive-hover');
      setIsHovered(!!interactive);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] overflow-hidden">
      {/* Central gold dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B08D57] pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicking ? 0.6 : isHovered ? 1.4 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 450,
          mass: 0.1,
        }}
      />

      {/* Trailing fine gold ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#B08D57]/60 pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 26 : 16),
          y: mousePosition.y - (isHovered ? 26 : 16),
          width: isHovered ? 52 : 32,
          height: isHovered ? 52 : 32,
          backgroundColor: isHovered ? 'rgba(176, 141, 87, 0.08)' : 'transparent',
          borderColor: isHovered ? 'rgba(176, 141, 87, 0.9)' : 'rgba(176, 141, 87, 0.4)',
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 220,
          mass: 0.35,
        }}
      />
    </div>
  );
};
