import React from 'react';
import { Home, BookOpen, ShoppingBag, Calendar, MoreHorizontal } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface MobileBottomNavProps {
  activeTab: 'home' | 'menu' | 'order' | 'reservations' | 'more';
  onSelectTab: (tab: 'home' | 'menu' | 'order' | 'reservations' | 'more') => void;
  onOpenMoreMenu: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onSelectTab,
  onOpenMoreMenu,
}) => {
  const { itemCount, setIsCartOpen } = useCart();

  const handleTabClick = (tab: 'home' | 'menu' | 'order' | 'reservations' | 'more') => {
    onSelectTab(tab);
    if (tab === 'order') {
      setIsCartOpen(true);
    } else if (tab === 'more') {
      onOpenMoreMenu();
    } else if (tab === 'menu') {
      const menuEl = document.getElementById('menu');
      if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'reservations') {
      const resEl = document.getElementById('reservations');
      if (resEl) resEl.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#E9E1D6] shadow-[0_-4px_20px_rgba(9,8,7,0.06)] pb-safe">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
        {/* 1. Home */}
        <button
          type="button"
          onClick={() => handleTabClick('home')}
          className="flex flex-col items-center justify-center flex-1 py-1 focus:outline-none"
        >
          <Home
            className={`w-5 h-5 transition-colors ${
              activeTab === 'home' ? 'text-[#C99A42]' : 'text-[#77716A]'
            }`}
          />
          <span
            className={`text-[10px] mt-1 font-medium transition-colors ${
              activeTab === 'home' ? 'text-[#090807] font-bold' : 'text-[#77716A]'
            }`}
          >
            Home
          </span>
        </button>

        {/* 2. Menu */}
        <button
          type="button"
          onClick={() => handleTabClick('menu')}
          className="flex flex-col items-center justify-center flex-1 py-1 focus:outline-none"
        >
          <BookOpen
            className={`w-5 h-5 transition-colors ${
              activeTab === 'menu' ? 'text-[#C99A42]' : 'text-[#77716A]'
            }`}
          />
          <span
            className={`text-[10px] mt-1 font-medium transition-colors ${
              activeTab === 'menu' ? 'text-[#090807] font-bold' : 'text-[#77716A]'
            }`}
          >
            Menu
          </span>
        </button>

        {/* 3. Center Order (Emphasized Golden Circle as in reference image) */}
        <div className="flex flex-col items-center justify-center -mt-5 flex-1">
          <button
            type="button"
            onClick={() => handleTabClick('order')}
            className="relative w-13 h-13 rounded-full bg-gradient-to-tr from-[#D9AD58] to-[#C99A42] text-[#090807] flex items-center justify-center shadow-[0_4px_16px_rgba(201,154,66,0.5)] border-2 border-[#FFFDF9] active:scale-95 transition-transform"
            aria-label="Order Cart"
          >
            <ShoppingBag className="w-6 h-6 stroke-[2]" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#090807] text-[#D9AD58] rounded-full text-[10px] font-bold flex items-center justify-center border border-[#FFFDF9]">
                {itemCount}
              </span>
            )}
          </button>
          <span className="text-[10px] mt-0.5 font-bold text-[#A97828]">
            Order
          </span>
        </div>

        {/* 4. Reservations */}
        <button
          type="button"
          onClick={() => handleTabClick('reservations')}
          className="flex flex-col items-center justify-center flex-1 py-1 focus:outline-none"
        >
          <Calendar
            className={`w-5 h-5 transition-colors ${
              activeTab === 'reservations' ? 'text-[#C99A42]' : 'text-[#77716A]'
            }`}
          />
          <span
            className={`text-[10px] mt-1 font-medium transition-colors ${
              activeTab === 'reservations' ? 'text-[#090807] font-bold' : 'text-[#77716A]'
            }`}
          >
            Reservations
          </span>
        </button>

        {/* 5. More */}
        <button
          type="button"
          onClick={() => handleTabClick('more')}
          className="flex flex-col items-center justify-center flex-1 py-1 focus:outline-none"
        >
          <MoreHorizontal
            className={`w-5 h-5 transition-colors ${
              activeTab === 'more' ? 'text-[#C99A42]' : 'text-[#77716A]'
            }`}
          />
          <span
            className={`text-[10px] mt-1 font-medium transition-colors ${
              activeTab === 'more' ? 'text-[#090807] font-bold' : 'text-[#77716A]'
            }`}
          >
            More
          </span>
        </button>
      </div>
    </div>
  );
};
