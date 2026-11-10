import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Banknote, MapPin, Phone, Mail, User, Clock, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, subtotal, tax, deliveryFee, discountAmount, discountCode, total, clearCart } = useCart();

  const [orderType, setOrderType] = useState<'delivery' | 'pickup' | 'dinein'>('delivery');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState<{
    orderNumber: string;
    total: number;
    paymentMethod: string;
    address: string;
  } | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your full name.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) errs.phone = 'Valid phone number is required.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required.';
    if (orderType === 'delivery' && !address.trim()) errs.address = 'Delivery address is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const orderNumber = `AUR-ORD-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderConfirmation({
        orderNumber,
        total,
        paymentMethod: paymentMethod === 'cod' ? 'Pay upon Delivery / Pickup' : 'Card on File (Verified)',
        address: orderType === 'delivery' ? address : 'Aurelius Steakhouse (Curbside Concierge)',
      });
      clearCart();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090807]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[92vh] bg-[#FFFDF9] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E9E1D6] overflow-y-auto p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#77716A] hover:text-[#090807] rounded-full hover:bg-[#F0E9DE]"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {orderConfirmation ? (
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A97828]">
              Order Placed Successfully
            </span>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#090807] mt-1">
              Thank You for Dining with Aurelius
            </h3>
            <p className="text-xs text-[#77716A] mt-2 max-w-md mx-auto">
              Our kitchen team has received your order. Hand-cutting and woodfire preparation will begin promptly.
            </p>

            <div className="mt-6 bg-[#FBF8F2] p-5 rounded-2xl border border-[#E9E1D6] text-left space-y-2.5 max-w-md mx-auto text-xs">
              <div className="flex justify-between border-b border-[#E9E1D6] pb-2">
                <span className="text-[#77716A]">Order Reference:</span>
                <span className="font-mono font-bold text-[#090807]">{orderConfirmation.orderNumber}</span>
              </div>
              <div className="flex justify-between border-b border-[#E9E1D6] pb-2">
                <span className="text-[#77716A]">Estimated Timing:</span>
                <span className="font-semibold text-[#090807]">35 - 45 Minutes</span>
              </div>
              <div className="flex justify-between border-b border-[#E9E1D6] pb-2">
                <span className="text-[#77716A]">Payment Terms:</span>
                <span className="font-semibold text-[#090807]">{orderConfirmation.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#77716A]">Total Charged:</span>
                <span className="font-playfair font-bold text-base text-[#A97828]">${orderConfirmation.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] to-[#C99A42] hover:brightness-105 shadow-md"
              >
                Back to Restaurant
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#A97828]">
                Culinary Checkout
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#090807] mt-0.5">
                Complete Your Order
              </h2>
            </div>

            {/* Order Type Toggle */}
            <div className="flex rounded-xl bg-[#F0E9DE]/60 p-1 border border-[#E9E1D6]">
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  orderType === 'delivery'
                    ? 'bg-[#FFFDF9] text-[#090807] shadow-sm'
                    : 'text-[#77716A] hover:text-[#090807]'
                }`}
              >
                VIP Delivery
              </button>
              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  orderType === 'pickup'
                    ? 'bg-[#FFFDF9] text-[#090807] shadow-sm'
                    : 'text-[#77716A] hover:text-[#090807]'
                }`}
              >
                Curbside Pickup
              </button>
              <button
                type="button"
                onClick={() => setOrderType('dinein')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  orderType === 'dinein'
                    ? 'bg-[#FFFDF9] text-[#090807] shadow-sm'
                    : 'text-[#77716A] hover:text-[#090807]'
                }`}
              >
                Table Pre-Order
              </button>
            </div>

            {/* Customer Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#77716A] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Arthur Pendelton"
                  className="w-full py-2.5 px-3.5 bg-[#FBF8F2] border border-[#E9E1D6] rounded-xl text-xs text-[#090807] focus:outline-none focus:border-[#C99A42]"
                />
                {errors.name && <p className="text-red-600 text-[10px] mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#77716A] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 345-6789"
                  className="w-full py-2.5 px-3.5 bg-[#FBF8F2] border border-[#E9E1D6] rounded-xl text-xs text-[#090807] focus:outline-none focus:border-[#C99A42]"
                />
                {errors.phone && <p className="text-red-600 text-[10px] mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#77716A] mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="arthur@domain.com"
                className="w-full py-2.5 px-3.5 bg-[#FBF8F2] border border-[#E9E1D6] rounded-xl text-xs text-[#090807] focus:outline-none focus:border-[#C99A42]"
              />
              {errors.email && <p className="text-red-600 text-[10px] mt-1">{errors.email}</p>}
            </div>

            {orderType === 'delivery' && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#77716A] mb-1">
                  Delivery Destination
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street address, apartment, suite number"
                  className="w-full py-2.5 px-3.5 bg-[#FBF8F2] border border-[#E9E1D6] rounded-xl text-xs text-[#090807] focus:outline-none focus:border-[#C99A42]"
                />
                {errors.address && <p className="text-red-600 text-[10px] mt-1">{errors.address}</p>}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#77716A] mb-1">
                Special Instructions
              </label>
              <input
                type="text"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Gate code, contactless delivery, extra silverware..."
                className="w-full py-2.5 px-3.5 bg-[#FBF8F2] border border-[#E9E1D6] rounded-xl text-xs text-[#090807] focus:outline-none focus:border-[#C99A42]"
              />
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#77716A] mb-2">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-[#C99A42] bg-[#C99A42]/10 text-[#090807]'
                      : 'border-[#E9E1D6] bg-[#FBF8F2] text-[#77716A]'
                  }`}
                >
                  <Banknote className="w-5 h-5 text-[#A97828]" />
                  <div>
                    <div className="text-xs font-bold text-[#090807]">Pay on Arrival</div>
                    <div className="text-[10px] text-[#77716A]">Cash or Card upon receipt</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-[#C99A42] bg-[#C99A42]/10 text-[#090807]'
                      : 'border-[#E9E1D6] bg-[#FBF8F2] text-[#77716A]'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#A97828]" />
                  <div>
                    <div className="text-xs font-bold text-[#090807]">Credit / Debit Card</div>
                    <div className="text-[10px] text-[#77716A]">Integration-ready checkout</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Order Summary Recap */}
            <div className="p-4 bg-[#FBF8F2] rounded-xl border border-[#E9E1D6] text-xs space-y-1.5">
              <div className="flex justify-between text-[#77716A]">
                <span>Items ({items.length}):</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#A97828] font-semibold">
                  <span>Promo ({discountCode}):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#77716A]">
                <span>Tax & Service:</span>
                <span>${(tax + deliveryFee).toFixed(2)}</span>
              </div>
              <div className="pt-2 border-t border-[#E9E1D6] flex justify-between font-playfair font-bold text-base text-[#090807]">
                <span>Total Amount:</span>
                <span className="text-[#A97828]">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] to-[#C99A42] hover:brightness-105 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isSubmitting ? 'Placing Order...' : `Confirm & Place Order • $${total.toFixed(2)}`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
