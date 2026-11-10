import React from 'react';
import { X, Wine, Gift, Calendar, Phone, MapPin, Shield, Info, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MoreMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const MoreMenuDrawer: React.FC<MoreMenuDrawerProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#090807]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xs bg-[#FFFDF9] border-l border-[#E9E1D6] shadow-2xl flex flex-col justify-between p-6">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#E9E1D6]">
              <span className="font-playfair text-lg font-bold text-[#090807]">
                Concierge & More
              </span>
              <button
                onClick={onClose}
                className="p-1.5 text-[#77716A] hover:text-[#090807] rounded-full hover:bg-[#F0E9DE]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#FBF8F2] text-left text-xs font-semibold text-[#090807] border border-transparent hover:border-[#E9E1D6] transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#C99A42]" />
                <span>Reserve a Table</span>
              </button>

              <a
                href="#story"
                onClick={onClose}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#FBF8F2] text-left text-xs font-semibold text-[#090807] border border-transparent hover:border-[#E9E1D6] transition-colors"
              >
                <Info className="w-4 h-4 text-[#C99A42]" />
                <span>Our Story & Dry-Aging Heritage</span>
              </a>

              <a
                href="#experience"
                onClick={onClose}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#FBF8F2] text-left text-xs font-semibold text-[#090807] border border-transparent hover:border-[#E9E1D6] transition-colors"
              >
                <Wine className="w-4 h-4 text-[#C99A42]" />
                <span>Sommelier Wine Cellar</span>
              </a>

              <a
                href="#contact"
                onClick={onClose}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#FBF8F2] text-left text-xs font-semibold text-[#090807] border border-transparent hover:border-[#E9E1D6] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C99A42]" />
                <span>Valet & Directions</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#FBF8F2] text-left text-xs font-semibold text-[#090807] border border-transparent hover:border-[#E9E1D6] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C99A42]" />
                <span>Call Maître d'</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-[#FBF8F2] rounded-2xl border border-[#E9E1D6] text-xs">
              <span className="font-semibold text-[#090807] block mb-1">Dress Code</span>
              <p className="text-[11px] text-[#77716A]">
                Smart casual or business attire is requested. Athletic wear is politely discouraged.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E9E1D6] text-[11px] text-[#77716A]">
            <p className="font-semibold text-[#090807]">{RESTAURANT_INFO.name}</p>
            <p className="text-[#C99A42]">{RESTAURANT_INFO.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
