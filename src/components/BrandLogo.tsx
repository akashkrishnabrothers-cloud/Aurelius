import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-[#090807]' : 'text-[#FFFDF9]';
  const subtextColor = isDark ? 'text-[#77716A]' : 'text-[#D9AD58]/90';
  const lineColor = isDark ? 'border-[#C99A42]/40' : 'border-[#C99A42]/50';

  const iconSizes = {
    sm: 'w-6 h-5',
    md: 'w-8 h-6',
    lg: 'w-10 h-8',
  };

  const titleSizes = {
    sm: 'text-sm tracking-[0.25em]',
    md: 'text-base sm:text-lg tracking-[0.28em]',
    lg: 'text-xl sm:text-2xl tracking-[0.3em]',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.35em]',
    md: 'text-[10px] tracking-[0.4em]',
    lg: 'text-xs tracking-[0.45em]',
  };

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Golden Bull / Curved Horns Crest SVG */}
      <div className="relative mb-1 flex items-center justify-center">
        <svg
          viewBox="0 0 40 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${iconSizes[size]} drop-shadow-sm transition-transform duration-300 hover:scale-105`}
        >
          {/* Subtle curved horns */}
          <path
            d="M6 7C10 2 15 1.5 19 8C20 9.8 20 9.8 21 8C25 1.5 30 2 34 7C32 8.5 28 9.5 26 12C24.5 13.8 23 18 20 25C17 18 15.5 13.8 14 12C12 9.5 8 8.5 6 7Z"
            fill="url(#goldGradient)"
          />
          {/* Bull head skull crown / center gem */}
          <path
            d="M17 12L20 8L23 12L20 16L17 12Z"
            fill="#FFFDF9"
            fillOpacity="0.85"
          />
          {/* Horn tips accent */}
          <circle cx="6.5" cy="7" r="1.5" fill="#D9AD58" />
          <circle cx="33.5" cy="7" r="1.5" fill="#D9AD58" />
          <defs>
            <linearGradient id="goldGradient" x1="6" y1="2" x2="34" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F5D38A" />
              <stop offset="0.5" stopColor="#C99A42" />
              <stop offset="1" stopColor="#96671A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Title */}
      <span className={`font-playfair font-bold uppercase leading-tight ${titleSizes[size]} ${textColor}`}>
        AURELIUS
      </span>

      {/* Decorative Line & STEAKHOUSE Subtitle */}
      <div className="flex w-full items-center justify-center gap-2 mt-0.5">
        <div className={`h-[1px] w-6 sm:w-8 border-t ${lineColor}`} />
        <span className={`font-sans font-semibold uppercase ${subSizes[size]} ${subtextColor}`}>
          STEAKHOUSE
        </span>
        <div className={`h-[1px] w-6 sm:w-8 border-t ${lineColor}`} />
      </div>
    </div>
  );
};
