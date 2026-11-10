import React, { useState } from 'react';
import { Star, Plus, Check } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  item: MenuItem;
  onOpenDetails: (item: MenuItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item, onOpenDetails }) => {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(item, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const badgeColors: Record<string, string> = {
    BESTSELLER: 'bg-[#C99A42] text-[#090807]',
    "CHEF'S PICK": 'bg-[#A97828] text-[#FFFDF9]',
    POPULAR: 'bg-[#302419] text-[#D9AD58] border border-[#C99A42]/40',
    SIGNATURE: 'bg-gradient-to-r from-[#D9AD58] to-[#C99A42] text-[#090807]',
  };

  return (
    <div
      onClick={() => onOpenDetails(item)}
      className="group relative flex flex-col justify-between bg-[#FFFDF9] rounded-2xl sm:rounded-[20px] border border-[#E9E1D6] p-3 sm:p-4 shadow-[0_4px_16px_rgba(9,8,7,0.03)] hover:shadow-[0_10px_28px_rgba(9,8,7,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Top Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#171411]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Small Elegant Badge */}
        {item.badge && (
          <div className="absolute top-2.5 left-2.5">
            <span
              className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm ${
                badgeColors[item.badge] || 'bg-[#C99A42] text-[#090807]'
              }`}
            >
              {item.badge}
            </span>
          </div>
        )}

        {/* Dietary Marker */}
        {item.isVegetarian && (
          <div className="absolute top-2.5 right-2.5 bg-[#FFFDF9]/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-semibold text-emerald-800">
            Vegetarian
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 pt-3">
        {/* Dish Title */}
        <h3 className="font-playfair text-base sm:text-lg font-bold text-[#090807] leading-tight line-clamp-1 group-hover:text-[#C99A42] transition-colors">
          {item.name}
        </h3>

        {/* Short Description */}
        <p className="mt-1 text-xs text-[#77716A] line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Rating and Reviews */}
        <div className="mt-2.5 flex items-center gap-1.5 text-xs text-[#292521]">
          <Star className="w-3.5 h-3.5 fill-[#C99A42] text-[#C99A42]" />
          <span className="font-semibold">{item.rating}</span>
          <span className="text-[#77716A]">
            ({item.reviewsCount > 999 ? `${(item.reviewsCount / 1000).toFixed(1)}k+` : item.reviewsCount})
          </span>
        </div>

        {/* Price & Add to Cart Row */}
        <div className="mt-3.5 pt-2.5 border-t border-[#E9E1D6]/70 flex items-center justify-between">
          <div>
            <span className="text-xs text-[#77716A] font-sans">Price</span>
            <div className="font-playfair text-lg sm:text-xl font-bold text-[#090807]">
              ${item.price.toFixed(2)}
            </div>
          </div>

          {/* Circular Gold Add Button */}
          <button
            type="button"
            onClick={handleQuickAdd}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 shadow-sm ${
              justAdded
                ? 'bg-emerald-600 text-white scale-105'
                : 'bg-gradient-to-tr from-[#D9AD58] to-[#C99A42] text-[#090807] hover:brightness-105 hover:shadow-[0_2px_12px_rgba(201,154,66,0.4)]'
            }`}
            aria-label={`Add ${item.name} to cart`}
            title="Add to Cart"
          >
            {justAdded ? (
              <Check className="w-4 h-4 stroke-[2.5]" />
            ) : (
              <Plus className="w-5 h-5 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
