import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 mb-2">
          <div className="h-[1px] w-6 bg-[#C99A42]" />
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C99A42] uppercase">
            Guest Reflections
          </span>
          <div className="h-[1px] w-6 bg-[#C99A42]" />
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#090807]">
          Experiences Worth Sharing
        </h2>
        <p className="mt-2 text-sm text-[#77716A]">
          Words from food critics, sommeliers, and devoted patrons who have graced our tables.
        </p>
      </div>

      {/* Testimonials Display (Grid on Desktop, Carousel on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS.map((t, index) => (
          <div
            key={t.id}
            className={`p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] border border-[#E9E1D6] shadow-[0_4px_20px_rgba(9,8,7,0.03)] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              index !== currentIndex ? 'hidden md:flex' : 'flex'
            }`}
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C99A42] text-[#C99A42]" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-playfair text-base sm:text-lg italic text-[#292521] leading-relaxed mb-6">
                "{t.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="pt-4 border-t border-[#E9E1D6] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C99A42] to-[#D9AD58] text-[#090807] font-bold text-xs flex items-center justify-center font-serif shadow-sm">
                {t.avatar}
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#090807]">{t.name}</h4>
                <p className="text-[11px] text-[#77716A]">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Pagination Controls */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="w-9 h-9 rounded-full bg-[#FFFDF9] border border-[#E9E1D6] flex items-center justify-center text-[#292521] hover:bg-[#F0E9DE]"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {TESTIMONIALS.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all ${
                currentIndex === idx ? 'w-5 bg-[#C99A42]' : 'w-1.5 bg-[#E9E1D6]'
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="w-9 h-9 rounded-full bg-[#FFFDF9] border border-[#E9E1D6] flex items-center justify-center text-[#292521] hover:bg-[#F0E9DE]"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
