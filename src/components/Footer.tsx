import React from 'react';
import { BrandLogo } from './BrandLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenCart }) => {
  return (
    <footer className="w-full bg-[#090807] text-[#FFFDF9] border-t border-[#302419] pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#302419]">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="lg" className="!items-start" />
            <p className="text-xs text-[#F0E9DE]/70 leading-relaxed max-w-sm font-sans pt-2">
              Aurelius Steakhouse honors the time-tested rituals of open-flame searing, 45-day Himalayan salt dry-aging, and Michelin-worthy hospitality.
            </p>
            <div className="pt-2 text-xs text-[#D9AD58]">
              <span className="font-serif italic text-base">"The Art of Fine Cuts & Embers"</span>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#D9AD58] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#F0E9DE]/80">
              <li>
                <a href="#" className="hover:text-[#C99A42] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C99A42] transition-colors">
                  Seasonal Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#C99A42] transition-colors">
                  Our Story & Heritage
                </a>
              </li>
              <li>
                <a href="#chef-special" className="hover:text-[#C99A42] transition-colors">
                  Chef's Table Showcase
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#C99A42] transition-colors">
                  Interior & Plating Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Dining & Reservations */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#D9AD58] mb-4">
              Dining
            </h4>
            <ul className="space-y-2 text-xs text-[#F0E9DE]/80">
              <li>
                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="hover:text-[#C99A42] transition-colors text-left"
                >
                  Table Reservations
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="hover:text-[#C99A42] transition-colors text-left"
                >
                  Private Dining Salon
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCart}
                  className="hover:text-[#C99A42] transition-colors text-left"
                >
                  Online Ordering
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C99A42] transition-colors">
                  Sommelier Cellar List
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C99A42] transition-colors">
                  Gift Cards & Connoisseur Perks
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#D9AD58] mb-4">
              The Restaurant
            </h4>
            <div className="space-y-2 text-xs text-[#F0E9DE]/80">
              <p>{RESTAURANT_INFO.address}</p>
              <p>{RESTAURANT_INFO.city}</p>
              <p className="text-[#D9AD58] font-semibold">{RESTAURANT_INFO.phone}</p>
              <p className="text-[#F0E9DE]/60 pt-1">{RESTAURANT_INFO.hours.weekdays}</p>
              <p className="text-[#F0E9DE]/60">{RESTAURANT_INFO.hours.weekend}</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F0E9DE]/50 gap-4">
          <p>© 2026 Aurelius Steakhouse. All rights reserved. Hostinger & Production Ready.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C99A42] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#C99A42] transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#C99A42] transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
