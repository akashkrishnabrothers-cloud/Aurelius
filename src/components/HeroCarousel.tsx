import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { HERO_SLIDES, HeroSlide } from '../data/restaurantData';

interface HeroCarouselProps {
  onReserveClick: () => void;
  onExploreMenuClick: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onReserveClick,
  onExploreMenuClick,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const slide: HeroSlide = HERO_SLIDES[currentSlideIndex];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cinematic Rounded Black Banner (Faithful to the reference image) */}
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#090807] via-[#171411] to-[#090807] border border-[#302419] shadow-[0_20px_50px_rgba(9,8,7,0.35)] min-h-[480px] sm:min-h-[520px] lg:min-h-[540px] flex items-center">
        {/* Subtle Ambient Gold Glow & Vignette */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C99A42]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#A97828]/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Slide Content Grid: Split Screen on Tablet/Desktop, Stacked on Mobile */}
        <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-12 items-center p-6 sm:p-10 lg:p-14 gap-8 z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
            {/* Elegant Accent Tagline in Gold Script / Serif */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="font-script text-2xl sm:text-3xl text-[#D9AD58] drop-shadow-sm">
                {slide.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFDF9] leading-[1.15] drop-shadow-md">
              {slide.headline}
              <br />
              <span className="bg-gradient-to-r from-[#F5D38A] via-[#C99A42] to-[#D9AD58] bg-clip-text text-transparent">
                {slide.highlight}
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-3 sm:mt-5 text-sm sm:text-base text-[#F0E9DE]/85 font-sans leading-relaxed max-w-xl">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onReserveClick}
                className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] via-[#C99A42] to-[#B38332] shadow-[0_4px_20px_rgba(201,154,66,0.4)] hover:shadow-[0_6px_25px_rgba(201,154,66,0.6)] hover:brightness-105 active:scale-[0.98] transition-all duration-200"
              >
                <span>{slide.primaryCta}</span>
                <span className="w-6 h-6 rounded-full bg-[#090807] text-[#D9AD58] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                type="button"
                onClick={onExploreMenuClick}
                className="inline-flex items-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FFFDF9] border border-[#C99A42]/50 hover:border-[#D9AD58] hover:bg-[#C99A42]/10 transition-all duration-200"
              >
                {slide.secondaryCta}
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none aspect-[4/3] sm:aspect-[16/11] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-[#302419] group">
              <img
                src={slide.image}
                alt={slide.altText}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />
              {/* Subtle inner shadow rim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/60 via-transparent to-transparent pointer-events-none" />

              {/* Michelin recommendation badge overlay */}
              <div className="absolute bottom-3 left-3 bg-[#090807]/80 backdrop-blur-md border border-[#C99A42]/40 rounded-full px-3 py-1 flex items-center gap-1.5 text-[11px] text-[#D9AD58] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#C99A42]" />
                <span>Woodfire Searing · 1200°F</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrow Controls (Desktop) */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#090807]/60 hover:bg-[#C99A42] text-[#FFFDF9] hover:text-[#090807] border border-[#302419] items-center justify-center transition-all z-20"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#090807]/60 hover:bg-[#C99A42] text-[#FFFDF9] hover:text-[#090807] border border-[#302419] items-center justify-center transition-all z-20"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlideIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentSlideIndex === index
                  ? 'w-7 bg-[#C99A42]'
                  : 'w-2 bg-[#FFFDF9]/30 hover:bg-[#FFFDF9]/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
