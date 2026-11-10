import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle, Sparkles, AlertCircle, Phone, Mail, User } from 'lucide-react';

interface ReservationSystemProps {
  initialGuestCount?: number;
}

export const ReservationSystem: React.FC<ReservationSystemProps> = ({ initialGuestCount = 2 }) => {
  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Tomorrow as default date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [date, setDate] = useState(defaultDateStr);
  const [selectedTime, setSelectedTime] = useState('7:00 PM');
  const [guests, setGuests] = useState(initialGuestCount);
  const [seatingPreference, setSeatingPreference] = useState('Indoor Dining');
  const [occasion, setOccasion] = useState('Dinner for Two / Romance');
  const [specialRequests, setSpecialRequests] = useState('');

  // Validation & Submission
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationData, setConfirmationData] = useState<{
    bookingRef: string;
    name: string;
    date: string;
    time: string;
    guests: number;
    seating: string;
  } | null>(null);

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const seatingOptions = [
    { id: 'Indoor Dining', name: 'Main Dining Room', desc: 'Surrounded by crystal chandeliers & ambient warmth' },
    { id: 'Window Seating', name: 'Window Seating', desc: 'Overlooking historic street architecture' },
    { id: 'Outdoor Terrace', name: 'Terrace & Firepit', desc: 'Heated open-air terrace dining' },
    { id: 'Private Dining', name: 'Private Cellar Suite', desc: 'Exclusive dining for intimate gatherings' },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Please provide a valid email address.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) errs.phone = 'Please provide a valid contact number.';
    if (!date) errs.date = 'Please select a reservation date.';
    if (!selectedTime) errs.selectedTime = 'Please select a preferred dining time.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const bookingRef = `AUR-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationData({
        bookingRef,
        name: fullName,
        date,
        time: selectedTime,
        guests,
        seating: seatingPreference,
      });
    }, 800);
  };

  const handleReset = () => {
    setConfirmationData(null);
    setSpecialRequests('');
  };

  return (
    <section id="reservations" className="w-full bg-[#171411] text-[#FFFDF9] py-16 sm:py-24 border-t border-[#302419] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C99A42]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#A97828]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#C99A42]" />
            <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#D9AD58] uppercase">
              Table Bookings & Private Dining
            </span>
            <Sparkles className="w-4 h-4 text-[#C99A42]" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-[#FFFDF9]">
            Reserve Your Experience
          </h2>
          <p className="mt-3 text-sm text-[#F0E9DE]/80">
            For prime seating, sommelier wine consultations, and personalized celebrations, secure your table in advance.
          </p>
        </div>

        {/* Confirmation Screen */}
        {confirmationData ? (
          <div className="bg-[#090807] rounded-3xl border border-[#C99A42]/50 p-8 sm:p-12 text-center shadow-2xl max-w-2xl mx-auto animate-fadeIn">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#C99A42]/20 border border-[#C99A42] flex items-center justify-center text-[#D9AD58]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9AD58]">
              Reservation Request Received
            </span>
            <h3 className="font-playfair text-3xl font-bold text-[#FFFDF9] mt-2">
              We Look Forward to Welcoming You
            </h3>

            <div className="mt-6 p-5 bg-[#171411] rounded-2xl border border-[#302419] text-left space-y-3">
              <div className="flex justify-between text-xs sm:text-sm border-b border-[#302419] pb-2">
                <span className="text-[#F0E9DE]/70">Booking Reference:</span>
                <span className="font-mono font-bold text-[#D9AD58]">{confirmationData.bookingRef}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm border-b border-[#302419] pb-2">
                <span className="text-[#F0E9DE]/70">Guest Name:</span>
                <span className="font-semibold text-[#FFFDF9]">{confirmationData.name}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm border-b border-[#302419] pb-2">
                <span className="text-[#F0E9DE]/70">Date & Time:</span>
                <span className="font-semibold text-[#FFFDF9]">{confirmationData.date} at {confirmationData.time}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm border-b border-[#302419] pb-2">
                <span className="text-[#F0E9DE]/70">Party Size:</span>
                <span className="font-semibold text-[#FFFDF9]">{confirmationData.guests} Guests</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#F0E9DE]/70">Seating Area:</span>
                <span className="font-semibold text-[#FFFDF9]">{confirmationData.seating}</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-[#F0E9DE]/70 leading-relaxed">
              * Note: Your reservation request has been submitted to the Aurelius Maître d'. You will receive an SMS and email verification shortly before your dining time.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => {
                  const icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Dinner at Aurelius Steakhouse\nDESCRIPTION:Table for ${confirmationData.guests} guests (${confirmationData.bookingRef})\nEND:VEVENT\nEND:VCALENDAR`;
                  const blob = new Blob([icsData], { type: 'text/calendar' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `aurelius-reservation-${confirmationData.bookingRef}.ics`;
                  a.click();
                }}
                className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] to-[#C99A42] hover:brightness-105"
              >
                Add to Calendar
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FFFDF9] border border-[#302419] hover:bg-[#302419]"
              >
                Book Another Table
              </button>
            </div>
          </div>
        ) : (
          /* The Reservation Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#090807]/90 rounded-3xl border border-[#302419] p-6 sm:p-10 shadow-2xl backdrop-blur-md"
          >
            {/* Step 1: Party Size & Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Guests Count */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D9AD58] mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C99A42]" />
                  Number of Guests
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 6, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                        guests === num
                          ? 'bg-[#C99A42] text-[#090807] border-[#C99A42]'
                          : 'bg-[#171411] text-[#F0E9DE] border-[#302419] hover:border-[#C99A42]/60'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D9AD58] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C99A42]" />
                  Reservation Date
                </label>
                <input
                  type="date"
                  value={date}
                  min={defaultDateStr}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#171411] border border-[#302419] text-[#FFFDF9] text-xs sm:text-sm focus:outline-none focus:border-[#C99A42]"
                />
                {errors.date && <p className="text-red-400 text-[10px] mt-1">{errors.date}</p>}
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D9AD58] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C99A42]" />
                  Preferred Dining Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#171411] border border-[#302419] text-[#FFFDF9] text-xs sm:text-sm focus:outline-none focus:border-[#C99A42]"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 2: Seating Preference */}
            <div className="mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#D9AD58] mb-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C99A42]" />
                Seating Atmosphere Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {seatingOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSeatingPreference(opt.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      seatingPreference === opt.id
                        ? 'bg-[#C99A42]/15 border-[#C99A42] text-[#FFFDF9] shadow-sm'
                        : 'bg-[#171411] border-[#302419] text-[#F0E9DE]/70 hover:border-[#C99A42]/50'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm text-[#FFFDF9]">
                      {opt.name}
                    </div>
                    <div className="text-[10px] text-[#F0E9DE]/60 mt-1 line-clamp-1">
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Guest Details (Full Name, Email, Phone) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F0E9DE]/80 mb-1.5 flex items-center gap-1">
                  <User className="w-3 h-3 text-[#C99A42]" /> Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Lord Sterling"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#171411] border border-[#302419] text-[#FFFDF9] text-xs focus:outline-none focus:border-[#C99A42]"
                />
                {errors.fullName && <p className="text-red-400 text-[10px] mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F0E9DE]/80 mb-1.5 flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#C99A42]" /> Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sterling@example.com"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#171411] border border-[#302419] text-[#FFFDF9] text-xs focus:outline-none focus:border-[#C99A42]"
                />
                {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F0E9DE]/80 mb-1.5 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#C99A42]" /> Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#171411] border border-[#302419] text-[#FFFDF9] text-xs focus:outline-none focus:border-[#C99A42]"
                />
                {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Special Occasion & Dietary notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F0E9DE]/80 mb-1.5">
                  Dining Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#171411] border border-[#302419] text-[#FFFDF9] text-xs focus:outline-none focus:border-[#C99A42]"
                >
                  <option value="Dinner for Two / Romance">Dinner for Two / Romance (Special Offer eligible)</option>
                  <option value="Anniversary Celebration">Anniversary Celebration</option>
                  <option value="Executive Business Dinner">Executive Business Dinner</option>
                  <option value="Birthday Dinner">Birthday Dinner</option>
                  <option value="Casual Fine Dining">Casual Fine Dining</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F0E9DE]/80 mb-1.5">
                  Dietary or Special Requests
                </label>
                <input
                  type="text"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Quiet booth, gluten-free diner, champagne on arrival"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#171411] border border-[#302419] text-[#FFFDF9] text-xs focus:outline-none focus:border-[#C99A42]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-[#302419] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#F0E9DE]/60">
                Instant confirmation hold · No cancellation fee up to 4 hours prior
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#090807] bg-gradient-to-r from-[#D9AD58] via-[#C99A42] to-[#B38332] hover:brightness-105 shadow-[0_4px_20px_rgba(201,154,66,0.4)] disabled:opacity-50 transition-all cursor-pointer"
              >
                {isSubmitting ? 'Securing Table...' : 'CONFIRM RESERVATION'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
