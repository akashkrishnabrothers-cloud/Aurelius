import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User, Search, Calendar, Phone, MapPin, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: "Chef's Table", href: '#chef-special' },
    { label: 'Experience', href: '#experience' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(9,8,7,0.06)] border-b border-[#E9E1D6]'
            : 'bg-[#FFFDF9] border-b border-[#E9E1D6]/60'
        }`}
      >
        {/* Desktop Top Strip (Optional VIP announcement) */}
        <div className="hidden lg:flex items-center justify-between px-8 py-1.5 bg-[#090807] text-[#D9AD58] text-[11px] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#C99A42]" />
            <span>Michelin Recommended 2026 · 45-Day Dry-Aged Reserve Cuts</span>
          </div>
          <div className="flex items-center gap-6 text-[#F0E9DE]/80">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#C99A42]" /> 450 Grand Avenue, Financial District
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#C99A42]" /> +1 (555) 789-2873
            </span>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Left: Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 text-[#090807] hover:text-[#C99A42] transition-colors focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6 stroke-[1.75]" />
              </button>
            </div>

            {/* Brand Logo - Left on Desktop, Centered on Mobile */}
            <div className="flex-1 lg:flex-initial flex justify-center lg:justify-start">
              <a href="#" className="flex items-center group">
                <BrandLogo variant="dark" size="md" />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13px] uppercase tracking-wider font-medium text-[#292521]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative py-1 text-[#292521] hover:text-[#C99A42] transition-colors duration-200 group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C99A42] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Icons & Primary CTA */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search Icon */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 text-[#292521] hover:text-[#C99A42] hover:bg-[#F0E9DE]/60 rounded-full transition-colors focus:outline-none"
                aria-label="Search Dishes"
                title="Search Dishes"
              >
                <Search className="w-5 h-5 stroke-[1.75]" />
              </button>

              {/* Account / VIP Profile Icon */}
              <button
                type="button"
                onClick={() => setIsAccountModalOpen(true)}
                className="p-2 text-[#292521] hover:text-[#C99A42] hover:bg-[#F0E9DE]/60 rounded-full transition-colors focus:outline-none"
                aria-label="Guest Account"
                title="Guest Account"
              >
                <User className="w-5 h-5 stroke-[1.75]" />
              </button>

              {/* Shopping Bag / Cart Icon with Gold Badge */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#292521] hover:text-[#C99A42] hover:bg-[#F0E9DE]/60 rounded-full transition-colors focus:outline-none"
                aria-label={`Shopping Bag, ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
                {itemCount > 0 && (
                  <span className="absolute 1 top-0.5 right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[10px] font-bold text-[#090807] bg-gradient-to-r from-[#D9AD58] to-[#C99A42] rounded-full shadow-sm">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Desktop Reserve Button CTA */}
              <button
                type="button"
                onClick={onOpenReservation}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] via-[#C99A42] to-[#B38332] shadow-[0_2px_12px_rgba(201,154,66,0.3)] hover:shadow-[0_4px_20px_rgba(201,154,66,0.45)] hover:brightness-105 active:scale-[0.98] transition-all duration-200"
              >
                <Calendar className="w-3.5 h-3.5 text-[#090807]" />
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#090807]/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#FFFDF9] shadow-2xl flex flex-col justify-between p-6 z-10 border-r border-[#E9E1D6]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E9E1D6]">
                <BrandLogo variant="dark" size="sm" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#77716A] hover:text-[#090807] rounded-full hover:bg-[#F0E9DE]/60 transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 text-base font-serif text-[#292521] hover:text-[#C99A42] hover:bg-[#FBF8F2] rounded-lg transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#C99A42]">→</span>
                  </a>
                ))}
              </nav>

              {/* Quick Actions in Mobile Menu */}
              <div className="mt-8 pt-6 border-t border-[#E9E1D6] space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] to-[#C99A42] shadow-md hover:brightness-105"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Table</span>
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-[#292521] border border-[#E9E1D6] bg-[#FBF8F2] hover:bg-[#F0E9DE]"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C99A42]" />
                  <span>View Cart ({itemCount})</span>
                </button>
              </div>
            </div>

            {/* Drawer Footer Info */}
            <div className="pt-6 border-t border-[#E9E1D6] text-xs text-[#77716A]">
              <p className="font-serif font-semibold text-[#090807]">Aurelius Steakhouse</p>
              <p className="mt-1">450 Grand Avenue, Financial District</p>
              <p className="mt-0.5 text-[#C99A42]">+1 (555) 789-2873</p>
            </div>
          </div>
        </div>
      )}

      {/* Guest VIP Account Modal */}
      {isAccountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090807]/75 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#FFFDF9] rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#E9E1D6]">
            <button
              onClick={() => setIsAccountModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#77716A] hover:text-[#090807] rounded-full hover:bg-[#F0E9DE]/60"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-[#C99A42]/20 to-[#D9AD58]/40 flex items-center justify-center border border-[#C99A42]/40">
                <User className="w-8 h-8 text-[#C99A42]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C99A42] bg-[#C99A42]/10 px-3 py-1 rounded-full">
                Reserve Connoisseur Tier
              </span>
              <h3 className="font-playfair text-2xl font-bold text-[#090807] mt-3">
                Guest Experience Portal
              </h3>
              <p className="text-sm text-[#77716A] mt-1">
                Access your priority reservations, private dining records, and sommelier cellar pairings.
              </p>
            </div>

            <div className="mt-6 bg-[#FBF8F2] p-4 rounded-xl border border-[#E9E1D6] space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#77716A]">Member Status</span>
                <span className="font-semibold text-[#090807]">Gold Reserve Patron</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#77716A]">Dining Points</span>
                <span className="font-bold text-[#C99A42]">1,450 Aurelius Points</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#77716A]">Preferred Seating</span>
                <span className="font-semibold text-[#090807]">Window / Mahogany Booth</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => {
                  setIsAccountModalOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] to-[#C99A42] shadow-md hover:brightness-105"
              >
                Book Priority Table
              </button>
              <button
                onClick={() => setIsAccountModalOpen(false)}
                className="w-full py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#77716A] hover:text-[#090807]"
              >
                Close Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
