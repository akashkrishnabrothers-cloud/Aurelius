import React from 'react';
import { ShieldCheck, Flame, Sparkles, Award } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/restaurantData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C99A42]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#C99A42]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C99A42]" />;
      case 'Award':
      default:
        return <Award className="w-6 h-6 text-[#C99A42]" />;
    }
  };

  return (
    <section className="w-full bg-[#FFFDF9] py-14 sm:py-20 border-y border-[#E9E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="h-[1px] w-6 bg-[#C99A42]" />
            <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C99A42] uppercase">
              The Aurelius Standard
            </span>
            <div className="h-[1px] w-6 bg-[#C99A42]" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#090807]">
            Why Connoisseurs Choose Aurelius
          </h2>
          <p className="mt-2 text-sm text-[#77716A]">
            Precision craft, ancient dry-aging techniques, and hospitality refined to an art form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-[#FBF8F2] border border-[#E9E1D6] hover:border-[#C99A42]/60 hover:shadow-[0_8px_24px_rgba(201,154,66,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFFDF9] border border-[#E9E1D6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#090807] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#77716A] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E9E1D6]/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#A97828] uppercase tracking-wider">
                <span>The Standard</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
