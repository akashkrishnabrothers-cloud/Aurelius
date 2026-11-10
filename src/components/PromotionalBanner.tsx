import React from 'react';
import { ArrowRight, Sparkles, Clock, Wine } from 'lucide-react';

interface PromotionalBannerProps {
  onReserveClick: () => void;
}

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ onReserveClick }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-gradient-to-r from-[#090807] via-[#171411] to-[#090807] border border-[#302419] shadow-[0_16px_40px_rgba(9,8,7,0.25)]">
        {/* Ambient Gold Bloom */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#C99A42]/15 rounded-full blur-[70px] pointer-events-none" />

        <div className="relative grid grid-cols-1 md:grid-cols-12 items-center min-h-[260px] sm:min-h-[300px]">
          {/* Left Promotional Typography */}
          <div className="md:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center z-10">
            {/* Small Gold Tag */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#D9AD58] uppercase">
                SPECIAL OFFER
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A42]" />
              <span className="text-[11px] text-[#F0E9DE]/70 uppercase tracking-wider hidden sm:inline">
                Limited Seating Daily
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FFFDF9] leading-tight">
              Dinner for Two
            </h2>

            {/* Discount Callout */}
            <div className="mt-1 sm:mt-2 flex items-baseline gap-3">
              <span className="font-playfair text-3xl sm:text-4xl font-extrabold text-[#C99A42]">
                20% OFF
              </span>
              <span className="text-xs sm:text-sm text-[#F0E9DE]/80 font-sans">
                Full 4-Course Chef Pairing Menu
              </span>
            </div>

            {/* Supporting Text */}
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#F0E9DE]/80 max-w-md leading-relaxed font-sans">
              Make your evening unforgettable with an exclusive dining experience. Includes two prime cuts, paired sides, and sommelier reserve selections.
            </p>

            {/* CTA Button */}
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={onReserveClick}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] to-[#C99A42] hover:brightness-105 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(201,154,66,0.35)]"
              >
                <span>RESERVE NOW</span>
                <span className="w-5 h-5 rounded-full bg-[#090807] text-[#D9AD58] flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Restaurant Interior Visual */}
          <div className="md:col-span-5 h-48 md:h-full relative overflow-hidden">
            <img
              src="/src/assets/images/dining_special_offer_1794274729254.jpg"
              alt="Romantic candlelit steakhouse table set for two"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Subtle Gradient Blend into the left black card */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#171411] via-[#171411]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
