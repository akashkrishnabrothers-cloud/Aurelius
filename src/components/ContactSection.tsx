import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 mb-2">
          <div className="h-[1px] w-6 bg-[#C99A42]" />
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C99A42] uppercase">
            Location & Hours
          </span>
          <div className="h-[1px] w-6 bg-[#C99A42]" />
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#090807]">
          Visit Aurelius Steakhouse
        </h2>
        <p className="mt-2 text-sm text-[#77716A]">
          Situated in the heart of the historic financial district, offering valet arrival and private porte-cochère.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Contact Information Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Address Card */}
          <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E9E1D6] shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F0E9DE] text-[#A97828] flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-playfair text-base font-bold text-[#090807]">Our Location</h3>
              <p className="text-xs text-[#77716A] mt-1 leading-relaxed">
                {RESTAURANT_INFO.address}
                <br />
                {RESTAURANT_INFO.city}
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#A97828]">
                <span>Valet Parking at Front</span>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E9E1D6] shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F0E9DE] text-[#A97828] flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-playfair text-base font-bold text-[#090807]">Dining Hours</h3>
              <div className="text-xs text-[#77716A] mt-1 space-y-1">
                <p>{RESTAURANT_INFO.hours.weekdays}</p>
                <p>{RESTAURANT_INFO.hours.weekend}</p>
                <p>{RESTAURANT_INFO.hours.sunday}</p>
              </div>
            </div>
          </div>

          {/* Direct Line & WhatsApp Card */}
          <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E9E1D6] shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F0E9DE] text-[#A97828] flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-playfair text-base font-bold text-[#090807]">Direct Contact</h3>
              <p className="text-xs text-[#77716A] mt-0.5">
                Telephone: {RESTAURANT_INFO.phone}
              </p>
              <p className="text-xs text-[#77716A]">
                Email: {RESTAURANT_INFO.email}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F0E9DE] text-[#090807] text-xs font-semibold hover:bg-[#C99A42] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Maître d'</span>
                </a>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Aurelius%20Steakhouse,%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Visual / Directions Showcase (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E9E1D6] shadow-sm bg-[#171411] relative min-h-[320px] flex flex-col justify-between p-6 sm:p-8">
          {/* Subtle stylized map background graphic */}
          <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
            <img
              src="/src/assets/images/restaurant_luxury_interior_1794274729258.jpg"
              alt="Restaurant location atmosphere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-[#090807]/70 to-[#090807]/50" />
          </div>

          {/* Map Header */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="bg-[#090807]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C99A42]/40 text-xs text-[#D9AD58] font-semibold flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5" />
              <span>Interactive Location & Porte-Cochère</span>
            </div>
          </div>

          {/* Map Center Pin Callout */}
          <div className="relative z-10 my-auto text-center py-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#C99A42] text-[#090807] flex items-center justify-center shadow-xl animate-bounce">
              <MapPin className="w-7 h-7" />
            </div>
            <h4 className="font-playfair text-xl font-bold text-[#FFFDF9] mt-3">
              Aurelius Steakhouse
            </h4>
            <p className="text-xs text-[#F0E9DE]/80 mt-1">
              450 Grand Avenue, Financial District, Suite 100
            </p>
          </div>

          {/* Map Bottom Action */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#302419]">
            <span className="text-xs text-[#F0E9DE]/70">
              Dress Code: Smart Casual & Formal Attire Required
            </span>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] to-[#C99A42] hover:brightness-105 transition-all shadow-sm"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
