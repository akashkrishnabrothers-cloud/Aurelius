import React, { useState } from 'react';
import { Sparkles, Utensils, Star, Plus, Check } from 'lucide-react';
import { MenuItem, CATEGORIES } from '../data/restaurantData';
import { ProductCard } from './ProductCard';

interface MenuSectionProps {
  items: MenuItem[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenDetails: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  activeCategory,
  onSelectCategory,
  onOpenDetails,
}) => {
  return (
    <section id="menu" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Title and Decorative Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 mb-2">
          <div className="h-[1px] w-8 bg-[#C99A42]" />
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C99A42] uppercase">
            Culinary Offerings
          </span>
          <div className="h-[1px] w-8 bg-[#C99A42]" />
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#090807] leading-tight">
          The Full Restaurant Menu
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#77716A] leading-relaxed">
          From masterfully aged prime beef to delicate wild-caught seafood and house-crafted pastry creations, explore our complete seasonal menu.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
        <button
          type="button"
          onClick={() => onSelectCategory('all')}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-[#090807] text-[#D9AD58] shadow-md'
              : 'bg-[#FFFDF9] text-[#77716A] border border-[#E9E1D6] hover:border-[#C99A42] hover:text-[#090807]'
          }`}
        >
          All Dishes ({items.length})
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === cat.id
                ? 'bg-[#090807] text-[#D9AD58] shadow-md'
                : 'bg-[#FFFDF9] text-[#77716A] border border-[#E9E1D6] hover:border-[#C99A42] hover:text-[#090807]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Dishes Grid */}
      {items.length === 0 ? (
        <div className="text-center py-16 bg-[#FFFDF9] rounded-2xl border border-[#E9E1D6] max-w-lg mx-auto p-8">
          <Utensils className="w-10 h-10 text-[#C99A42] mx-auto mb-3 opacity-60" />
          <h3 className="font-playfair text-xl font-bold text-[#090807]">
            No dishes found
          </h3>
          <p className="text-xs text-[#77716A] mt-1">
            Try adjusting your search terms, price limits, or dietary filters to view our full menu.
          </p>
          <button
            type="button"
            onClick={() => onSelectCategory('all')}
            className="mt-4 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#090807] bg-[#C99A42] rounded-full hover:brightness-105"
          >
            Show All Dishes
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {items.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
};
