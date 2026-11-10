import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';
import { ProductCard } from './ProductCard';

interface PopularDishesProps {
  dishes: MenuItem[];
  onOpenDetails: (item: MenuItem) => void;
  onViewAllClick: () => void;
}

export const PopularDishes: React.FC<PopularDishesProps> = ({
  dishes,
  onOpenDetails,
  onViewAllClick,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div>
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090807]">
            Popular Dishes
          </h2>
          <p className="text-xs sm:text-sm text-[#77716A] mt-1">
            Our most celebrated prime cuts and signature preparations
          </p>
        </div>

        {/* View All Button */}
        <button
          type="button"
          onClick={onViewAllClick}
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#A97828] hover:text-[#090807] transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Grid of Dishes: 2 cols on mobile/small, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {dishes.map((dish) => (
          <ProductCard
            key={dish.id}
            item={dish}
            onOpenDetails={onOpenDetails}
          />
        ))}
      </div>
    </section>
  );
};
