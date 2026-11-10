import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'The Grand Dining Room & Wine Cellar',
    category: 'Architecture',
    src: '/src/assets/images/restaurant_luxury_interior_1794274729258.jpg',
    alt: 'Grand dining room with crystal chandelier and illuminated glass wine cellar',
  },
  {
    id: 2,
    title: 'Prime 14oz Ribeye with Herb Butter',
    category: 'Culinary',
    src: '/src/assets/images/hero_ribeye_steak_1794274729019.jpg',
    alt: 'Ribeye steak with roasted garlic and melting herb butter',
  },
  {
    id: 3,
    title: 'Candlelit Intimate Table for Two',
    category: 'Atmosphere',
    src: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    alt: 'Candlelit dining table with wine glasses and floral arrangement',
  },
  {
    id: 4,
    title: 'Center-Cut Filet Mignon Plating',
    category: 'Culinary',
    src: '/src/assets/images/gourmet_filet_mignon_1794274731053.jpg',
    alt: 'Center cut filet mignon with green peppercorn sauce and grilled asparagus',
  },
  {
    id: 5,
    title: '45-Day Dry-Aged Tomahawk Board',
    category: 'The Chef’s Table',
    src: '/src/assets/images/chef_tomahawk_steak_1794274730973.jpg',
    alt: 'Dry aged tomahawk on rustic board with fresh herbs',
  },
  {
    id: 6,
    title: 'Private Connoisseur Dining Suite',
    category: 'Private Events',
    src: '/src/assets/images/restaurant_luxury_interior_1794274729258.jpg',
    alt: 'Private dining room with bespoke mahogany leather furnishings',
  },
];

export const RestaurantGallery: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="experience" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 mb-2">
          <div className="h-[1px] w-6 bg-[#C99A42]" />
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C99A42] uppercase">
            Atmosphere & Plating
          </span>
          <div className="h-[1px] w-6 bg-[#C99A42]" />
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#090807]">
          The Dining Experience
        </h2>
        <p className="mt-3 text-sm text-[#77716A]">
          Step inside our warm, candlelit sanctuary where classic culinary reverence meets architectural elegance.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {GALLERY_ITEMS.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E9E1D6] bg-[#171411]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Hover overlay with title & zoom icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/80 via-[#090807]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9AD58]">
                {item.category}
              </span>
              <h3 className="font-playfair text-base sm:text-lg font-bold text-[#FFFDF9] mt-0.5">
                {item.title}
              </h3>
            </div>

            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#090807]/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090807]/90 backdrop-blur-md animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Active Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-[#302419] bg-black">
              <img
                src={GALLERY_ITEMS[activeLightboxIndex].src}
                alt={GALLERY_ITEMS[activeLightboxIndex].alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Caption & Navigation Controls */}
            <div className="w-full mt-4 flex items-center justify-between text-white px-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D9AD58]">
                  {GALLERY_ITEMS[activeLightboxIndex].category}
                </span>
                <p className="font-playfair text-base sm:text-xl font-bold">
                  {GALLERY_ITEMS[activeLightboxIndex].title}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
