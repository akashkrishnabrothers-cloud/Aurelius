import React from 'react';
import { Award, Flame, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AboutSectionProps {
  onReserveClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onReserveClick }) => {
  return (
    <section id="story" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-t border-[#E9E1D6]/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Asymmetric Luxury Image Collage */}
        <div className="lg:col-span-6 relative">
          <div className="relative z-10 w-4/5 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#E9E1D6]">
            <img
              src="/src/assets/images/restaurant_luxury_interior_1794274729258.jpg"
              alt="Aurelius Steakhouse luxury interior and dining room"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Overlapping Secondary Card with Steak Image */}
          <div className="absolute -bottom-6 -right-2 sm:-right-4 w-3/5 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFDF9] z-20">
            <img
              src="/src/assets/images/chef_tomahawk_steak_1794274730973.jpg"
              alt="Dry aged tomahawk on carving board"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Subtle Decorative Golden Accent Badge */}
          <div className="absolute -top-4 -left-3 bg-[#090807] text-[#D9AD58] border border-[#C99A42]/50 rounded-2xl p-4 shadow-xl z-30 hidden sm:flex flex-col items-center justify-center text-center">
            <Award className="w-6 h-6 text-[#C99A42] mb-1" />
            <span className="font-playfair text-xl font-bold">45</span>
            <span className="text-[10px] uppercase tracking-wider text-[#F0E9DE]/80">Days Dry Aged</span>
          </div>
        </div>

        {/* Right Column: Story Copywriting */}
        <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
          <div className="inline-flex items-center gap-2">
            <div className="h-[1px] w-6 bg-[#C99A42]" />
            <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C99A42] uppercase">
              Our Heritage & Craft
            </span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#090807] leading-[1.15]">
            Crafted with Passion.
            <br />
            <span className="text-[#A97828]">Served with Pride.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#292521] leading-relaxed font-sans">
            At Aurelius Steakhouse, exceptional dining begins with uncompromising reverence for ingredients. Founded with a vision to redefine the modern American steakhouse, we source only top-tier USDA Prime cuts from sustainable family ranches.
          </p>

          <p className="text-sm text-[#77716A] leading-relaxed font-sans">
            Each steak rests in our custom Himalayan salt dry-aging chamber for up to 45 days, concentrating natural umami before meeting blazing 1,200°F live white-oak embers. Paired with an internationally recognized wine cellar of over 850 labels, every evening here is an unforgettable ritual.
          </p>

          {/* Pillar Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E9E1D6]">
            <div>
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-[#090807]">
                1,200°F
              </div>
              <span className="text-xs text-[#77716A] uppercase tracking-wide">
                Live Wood Embers
              </span>
            </div>
            <div>
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-[#090807]">
                850+
              </div>
              <span className="text-xs text-[#77716A] uppercase tracking-wide">
                Reserve Wines
              </span>
            </div>
            <div>
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-[#090807]">
                45 Days
              </div>
              <span className="text-xs text-[#77716A] uppercase tracking-wide">
                Himalayan Salt Dry-Aging
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onReserveClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] to-[#C99A42] hover:brightness-105 transition-all shadow-md"
            >
              <span>DISCOVER OUR STORY & RESERVE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
