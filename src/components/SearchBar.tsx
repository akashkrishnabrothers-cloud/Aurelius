import React, { useState } from 'react';
import { Search, SlidersHorizontal, X, Check, ArrowUpDown } from 'lucide-react';
import { CATEGORIES } from '../data/restaurantData';

export interface FilterState {
  searchQuery: string;
  category: string;
  maxPrice: number;
  vegetarianOnly: boolean;
  chefPickOnly: boolean;
  sortBy: 'featured' | 'rating' | 'price-asc' | 'price-desc';
}

interface SearchBarProps {
  filters: FilterState;
  onChangeFilters: (newFilters: FilterState) => void;
  resultsCount: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  filters,
  onChangeFilters,
  resultsCount,
}) => {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFilters({ ...filters, searchQuery: e.target.value });
  };

  const handleClearQuery = () => {
    onChangeFilters({ ...filters, searchQuery: '' });
  };

  const resetAllFilters = () => {
    onChangeFilters({
      searchQuery: '',
      category: 'all',
      maxPrice: 100,
      vegetarianOnly: false,
      chefPickOnly: false,
      sortBy: 'featured',
    });
  };

  const activeFilterCount =
    (filters.category !== 'all' ? 1 : 0) +
    (filters.maxPrice < 100 ? 1 : 0) +
    (filters.vegetarianOnly ? 1 : 0) +
    (filters.chefPickOnly ? 1 : 0) +
    (filters.sortBy !== 'featured' ? 1 : 0);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      {/* Search Input Bar (Inspired by the reference image) */}
      <div className="relative flex items-center gap-2 sm:gap-3">
        <div className="relative flex-1 flex items-center bg-[#FFFDF9] rounded-full border border-[#E9E1D6] shadow-[0_2px_10px_rgba(9,8,7,0.03)] focus-within:border-[#C99A42] focus-within:ring-2 focus-within:ring-[#C99A42]/20 transition-all duration-200">
          <div className="pl-4 sm:pl-5 pr-2 text-[#77716A]">
            <Search className="w-5 h-5 text-[#77716A]" />
          </div>
          <input
            type="text"
            value={filters.searchQuery}
            onChange={handleQueryChange}
            placeholder="Search menu, steaks, ingredients..."
            className="w-full py-3.5 pr-10 text-sm sm:text-base text-[#090807] placeholder-[#77716A]/70 bg-transparent focus:outline-none"
          />
          {filters.searchQuery && (
            <button
              onClick={handleClearQuery}
              className="absolute right-4 p-1 text-[#77716A] hover:text-[#090807] rounded-full hover:bg-[#F0E9DE]"
              aria-label="Clear Search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Trigger Button */}
        <button
          type="button"
          onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
          className={`relative p-3.5 rounded-full border transition-all duration-200 flex items-center justify-center ${
            isFilterPanelOpen || activeFilterCount > 0
              ? 'bg-[#C99A42] text-[#090807] border-[#C99A42] shadow-[0_2px_10px_rgba(201,154,66,0.35)]'
              : 'bg-[#FFFDF9] text-[#292521] border-[#E9E1D6] hover:border-[#C99A42] hover:text-[#C99A42]'
          }`}
          aria-label="Open filter options"
          title="Filter Menu"
        >
          <SlidersHorizontal className="w-5 h-5" />
          {activeFilterCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#090807] text-[#D9AD58] text-[9px] font-bold rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Expandable Filter Panel */}
      {isFilterPanelOpen && (
        <div className="mt-3 p-5 sm:p-6 bg-[#FFFDF9] border border-[#E9E1D6] rounded-2xl shadow-lg transition-all animate-fadeIn">
          <div className="flex items-center justify-between pb-4 border-b border-[#E9E1D6]">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#C99A42]" />
              <span className="font-playfair text-base font-bold text-[#090807]">Refine Menu</span>
              <span className="text-xs text-[#77716A] font-sans">({resultsCount} dishes found)</span>
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={resetAllFilters}
                className="text-xs font-semibold text-[#A97828] hover:text-[#090807] hover:underline"
              >
                Reset All
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Sort Options */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#77716A] mb-2">
                Sort By
              </label>
              <div className="relative">
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    onChangeFilters({
                      ...filters,
                      sortBy: e.target.value as FilterState['sortBy'],
                    })
                  }
                  className="w-full py-2.5 px-3 text-xs sm:text-sm bg-[#FBF8F2] border border-[#E9E1D6] rounded-xl text-[#090807] focus:outline-none focus:border-[#C99A42]"
                >
                  <option value="featured">Featured & Curated</option>
                  <option value="rating">Highest Rated (★ 4.9+)</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Price Filter Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#77716A]">
                  Max Price
                </label>
                <span className="text-xs font-bold text-[#C99A42]">Up to ${filters.maxPrice}</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={filters.maxPrice}
                onChange={(e) =>
                  onChangeFilters({ ...filters, maxPrice: Number(e.target.value) })
                }
                className="w-full accent-[#C99A42] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#77716A] mt-1">
                <span>$10</span>
                <span>$50</span>
                <span>$100+</span>
              </div>
            </div>

            {/* Dietary & Chef Toggles */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#77716A] mb-2">
                Preferences
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-[#292521]">
                  <input
                    type="checkbox"
                    checked={filters.vegetarianOnly}
                    onChange={(e) =>
                      onChangeFilters({ ...filters, vegetarianOnly: e.target.checked })
                    }
                    className="rounded border-[#E9E1D6] text-[#C99A42] focus:ring-[#C99A42]"
                  />
                  <span>Vegetarian Only</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs text-[#292521]">
                  <input
                    type="checkbox"
                    checked={filters.chefPickOnly}
                    onChange={(e) =>
                      onChangeFilters({ ...filters, chefPickOnly: e.target.checked })
                    }
                    className="rounded border-[#E9E1D6] text-[#C99A42] focus:ring-[#C99A42]"
                  />
                  <span>Chef's Signature / Pick Only</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
