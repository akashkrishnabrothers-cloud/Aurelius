import React from 'react';
import { CATEGORIES } from '../data/restaurantData';

interface CategoryNavigationProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  // Render custom luxury outline SVG icons for each food category
  const renderCategoryIcon = (id: string, isActive: boolean) => {
    const strokeColor = isActive ? '#090807' : '#292521';

    switch (id) {
      case 'steaks':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Steak cut shape with bone & marbling */}
            <path d="M19.5 8.5C20.5 12 18 16 15 18C12 20 7 19.5 4.5 16C2 12.5 3 7.5 7.5 5.5C12 3.5 18.5 5 19.5 8.5Z" />
            <path d="M9 10C10.5 11 12 11 13.5 10" strokeWidth="1.4" />
            <path d="M11 14C12 14.5 13 14.5 14 14" strokeWidth="1.4" />
          </svg>
        );
      case 'seafood':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Fish icon */}
            <path d="M2 16C6 19 12 18 18 12C12 6 6 5 2 8C5 11 5 13 2 16Z" />
            <path d="M18 12L22 15V9L18 12Z" />
            <circle cx="7" cy="11" r="1" fill={strokeColor} />
          </svg>
        );
      case 'burgers':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Burger icon */}
            <path d="M4 11C4 7 7 4 12 4C17 4 20 7 20 11H4Z" />
            <rect x="3" y="13" width="18" height="2" rx="1" />
            <path d="M4 17C4 18.7 5.3 20 7 20H17C18.7 20 20 18.7 20 17H4Z" />
            <path d="M7 8H7.01M12 7H12.01M17 8H17.01" strokeWidth="2" />
          </svg>
        );
      case 'sides':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Side dish / salad leaves icon */}
            <path d="M4 12C4 16.4 7.6 20 12 20C16.4 20 20 16.4 20 12H4Z" />
            <path d="M8 12C8 9 9.5 7 12 7C14.5 7 16 9 16 12" />
            <path d="M12 7V4M10 5L12 4L14 5" />
          </svg>
        );
      case 'drinks':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Tumbler glass / carafe icon */}
            <path d="M6 3H18L16 21H8L6 3Z" />
            <line x1="7" y1="8" x2="17" y2="8" strokeDasharray="1 1" />
            <path d="M10 13L13 15" strokeWidth="1.4" />
          </svg>
        );
      case 'desserts':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Dessert swirl icon */}
            <path d="M5 14H19L17 21H7L5 14Z" />
            <path d="M8 14C8 10 10 9 12 6C14 9 16 10 16 14" />
            <circle cx="12" cy="4" r="1.5" fill={strokeColor} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      {/* Scrollable container on mobile, centered grid on desktop */}
      <div className="flex items-center justify-start md:justify-center gap-4 sm:gap-8 overflow-x-auto py-2 px-1 scrollbar-none no-scrollbar">
        {/* All Categories Option */}
        <button
          type="button"
          onClick={() => onSelectCategory('all')}
          className="flex flex-col items-center flex-shrink-0 group focus:outline-none transition-transform active:scale-95"
        >
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border transition-all duration-300 shadow-sm ${
              activeCategory === 'all'
                ? 'bg-gradient-to-tr from-[#D9AD58] to-[#C99A42] border-[#C99A42] shadow-[0_4px_16px_rgba(201,154,66,0.35)] scale-105'
                : 'bg-[#FFFDF9] border-[#E9E1D6] hover:border-[#C99A42]/60 hover:bg-[#F0E9DE]/40'
            }`}
          >
            <span
              className={`text-xs font-serif font-bold uppercase ${
                activeCategory === 'all' ? 'text-[#090807]' : 'text-[#292521]'
              }`}
            >
              All
            </span>
          </div>
          <span
            className={`mt-2 text-xs font-medium tracking-wide transition-colors ${
              activeCategory === 'all' ? 'text-[#090807] font-semibold' : 'text-[#77716A] group-hover:text-[#292521]'
            }`}
          >
            All Dishes
          </span>
        </button>

        {/* Dynamic Category Buttons */}
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className="flex flex-col items-center flex-shrink-0 group focus:outline-none transition-transform active:scale-95"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border transition-all duration-300 shadow-sm ${
                  isActive
                    ? 'bg-gradient-to-tr from-[#D9AD58] to-[#C99A42] border-[#C99A42] shadow-[0_4px_16px_rgba(201,154,66,0.35)] scale-105'
                    : 'bg-[#FFFDF9] border-[#E9E1D6] hover:border-[#C99A42]/60 hover:bg-[#F0E9DE]/40'
                }`}
              >
                {renderCategoryIcon(category.id, isActive)}
              </div>
              <span
                className={`mt-2 text-xs font-medium tracking-wide transition-colors ${
                  isActive ? 'text-[#090807] font-semibold' : 'text-[#77716A] group-hover:text-[#292521]'
                }`}
              >
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
