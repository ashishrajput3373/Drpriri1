import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  id?: string;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  id,
  variant = 'primary',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Subtle magnetic strength
    setPosition({ x: x * 0.28, y: y * 0.28 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return 'bg-[#B08D57] text-[#F7F5F0] hover:bg-[#99743E] border border-[#B08D57]';
      case 'secondary':
        return 'bg-transparent text-[#1A1A1A] border border-[#1A1A1A]/30 hover:border-[#B08D57] hover:text-[#B08D57]';
      case 'outline':
        return 'bg-transparent text-[#F7F5F0] border border-[#F7F5F0]/30 hover:border-[#B08D57] hover:text-[#B08D57]';
      case 'primary':
      default:
        return 'bg-[#1A1A1A] text-[#F7F5F0] border border-[#1A1A1A] hover:border-[#B08D57] hover:bg-[#1A1A1A]/95';
    }
  };

  const buttonContent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 160, mass: 0.2 }}
      className="inline-block relative group"
    >
      <div
        id={id}
        className={`relative inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 rounded-none cursor-pointer whitespace-nowrap overflow-hidden ${getVariantStyles()} ${className}`}
      >
        {/* Subtle hover accent sheen */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" onClick={onClick}>
        {buttonContent}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="inline-block">
      {buttonContent}
    </div>
  );
};
