import React, { useState } from 'react';
import { Sparkles, Star, Plus, Check, Flame, Award, Clock } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface ChefSpecialProps {
  onOpenDetails: (item: MenuItem) => void;
}

export const ChefSpecial: React.FC<ChefSpecialProps> = ({ onOpenDetails }) => {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  // Featured Tomahawk
  const tomahawk = MENU_ITEMS.find((item) => item.id === 'tomahawk-steak') || MENU_ITEMS[2];

  const handleQuickAdd = () => {
    addItem(tomahawk, 1, 'Medium Rare');
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <section id="chef-special" className="w-full bg-[#090807] py-16 sm:py-24 border-y border-[#302419] relative overflow-hidden">
      {/* Warm Golden Glow Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C99A42]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#C99A42]" />
            <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#D9AD58] uppercase">
              Exclusive Reserve Showcase
            </span>
            <Sparkles className="w-4 h-4 text-[#C99A42]" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-[#FFFDF9] tracking-tight">
            From Our Chef's Table
          </h2>
          <p className="mt-3 text-sm text-[#F0E9DE]/80">
            Hand-selected, Himalayan salt-cave dry-aged for 45 days, and fire-carved for the ultimate steak connoisseur.
          </p>
        </div>

        {/* Feature Showcase Card */}
        <div className="bg-gradient-to-br from-[#171411] to-[#090807] rounded-3xl border border-[#302419] p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Large Left Photography */}
          <div className="lg:col-span-7 relative group cursor-pointer" onClick={() => onOpenDetails(tomahawk)}>
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#302419] shadow-2xl">
              <img
                src={tomahawk.image}
                alt={tomahawk.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D9AD58] to-[#C99A42] text-[#090807] rounded-md shadow-md">
                  CHEF'S MASTERPIECE
                </span>
                <span className="px-2.5 py-1 text-xs font-semibold bg-[#090807]/80 backdrop-blur-sm text-[#F0E9DE] rounded-md border border-[#302419]">
                  Tableside Carving
                </span>
              </div>
            </div>
          </div>

          {/* Right Detailed Copy & Action */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
            <div className="flex items-center gap-2 text-xs text-[#D9AD58]">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-[#C99A42] text-[#C99A42]" />
                <span className="font-bold text-[#FFFDF9]">4.9 / 5.0</span>
              </div>
              <span>·</span>
              <span className="text-[#F0E9DE]/70">Over 580 Verified Connoisseurs</span>
            </div>

            <h3 className="font-playfair text-2xl sm:text-4xl font-bold text-[#FFFDF9] leading-tight">
              {tomahawk.name}
            </h3>

            <p className="text-sm text-[#F0E9DE]/80 leading-relaxed font-sans">
              {tomahawk.description} Enhanced with roasted garlic marrow butter, coarse Maldon salt flakes, and finished with fresh rosemary smoke.
            </p>

            {/* Highlights Strip */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#302419] text-xs">
              <div className="flex items-center gap-2 text-[#F0E9DE]/90">
                <Flame className="w-4 h-4 text-[#C99A42]" />
                <span>Open Oak Woodfire</span>
              </div>
              <div className="flex items-center gap-2 text-[#F0E9DE]/90">
                <Award className="w-4 h-4 text-[#C99A42]" />
                <span>Prime Black Angus</span>
              </div>
              <div className="flex items-center gap-2 text-[#F0E9DE]/90">
                <Clock className="w-4 h-4 text-[#C99A42]" />
                <span>25-30 Min Preparation</span>
              </div>
              <div className="flex items-center gap-2 text-[#F0E9DE]/90">
                <Sparkles className="w-4 h-4 text-[#C99A42]" />
                <span>Serves 2-3 Guests</span>
              </div>
            </div>

            {/* Price & Add to Cart */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-[11px] text-[#F0E9DE]/60 uppercase tracking-widest block">
                  Reserve Price
                </span>
                <span className="font-playfair text-3xl font-bold text-[#C99A42]">
                  ${tomahawk.price.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenDetails(tomahawk)}
                  className="px-4 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#F0E9DE] border border-[#302419] hover:border-[#C99A42]"
                >
                  Details
                </button>

                <button
                  type="button"
                  onClick={handleQuickAdd}
                  className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 ${
                    justAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gradient-to-r from-[#D9AD58] to-[#C99A42] text-[#090807] hover:brightness-105 shadow-md active:scale-95'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Order</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
