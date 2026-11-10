import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Check, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartDrawerProps {
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOpenCheckout }) => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
    tax,
    deliveryFee,
    discountCode,
    discountAmount,
    total,
    applyDiscount,
    removeDiscount,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyDiscount(promoInput);
    setPromoMessage({
      type: res.success ? 'success' : 'error',
      text: res.message,
    });
  };

  const generateWhatsAppUrl = () => {
    let text = `*New Order - ${RESTAURANT_INFO.name}*\n\n`;
    items.forEach((entry, idx) => {
      text += `${idx + 1}. ${entry.item.name} x${entry.quantity} - $${(entry.item.price * entry.quantity).toFixed(2)}\n`;
      if (entry.temperature) text += `   _Temp:_ ${entry.temperature}\n`;
      if (entry.specialNote) text += `   _Note:_ ${entry.specialNote}\n`;
    });
    text += `\n*Subtotal:* $${subtotal.toFixed(2)}`;
    if (discountAmount > 0) text += `\n*Discount (${discountCode}):* -$${discountAmount.toFixed(2)}`;
    text += `\n*Tax:* $${tax.toFixed(2)}`;
    text += `\n*Delivery/Service:* $${deliveryFee.toFixed(2)}`;
    text += `\n*Total:* $${total.toFixed(2)}\n\n_Sent via Aurelius Web Ordering_`;

    return `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#090807]/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] border-l border-[#E9E1D6] shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 border-b border-[#E9E1D6] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C99A42]" />
              <h2 className="font-playfair text-xl font-bold text-[#090807]">
                Your Order ({itemCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#77716A] hover:text-[#090807] rounded-full hover:bg-[#F0E9DE] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Items Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F0E9DE] flex items-center justify-center text-[#77716A]">
                  <ShoppingBag className="w-8 h-8 opacity-40" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#090807]">
                  Your cart is empty
                </h3>
                <p className="text-xs text-[#77716A] mt-1 max-w-xs mx-auto">
                  Explore our selection of prime dry-aged steaks, seafood, and artisanal sides to begin your order.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-5 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#090807] bg-[#C99A42] hover:brightness-105 transition-all"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              items.map((entry) => (
                <div
                  key={entry.item.id}
                  className="flex gap-3 p-3 bg-[#FBF8F2] rounded-xl border border-[#E9E1D6] items-center"
                >
                  {/* Thumbnail */}
                  <img
                    src={entry.item.image}
                    alt={entry.item.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0 bg-[#171411]"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-playfair text-sm font-bold text-[#090807] truncate">
                      {entry.item.name}
                    </h4>
                    {entry.temperature && (
                      <span className="text-[10px] text-[#A97828] font-medium block">
                        Temp: {entry.temperature}
                      </span>
                    )}
                    <span className="text-xs font-bold text-[#090807] mt-0.5 block">
                      ${(entry.item.price * entry.quantity).toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity Stepper & Remove */}
                  <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => removeItem(entry.item.id)}
                      className="text-[#77716A] hover:text-red-700 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center border border-[#E9E1D6] rounded-full bg-[#FFFDF9] px-1 py-0.5">
                      <button
                        onClick={() => updateQuantity(entry.item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center text-[#77716A] hover:text-[#090807]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-semibold text-[#090807]">
                        {entry.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(entry.item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center text-[#77716A] hover:text-[#090807]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer Calculations & Action */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-[#E9E1D6] bg-[#FFFDF9] space-y-4">
              {/* Promo Code Form */}
              <div>
                {discountCode ? (
                  <div className="flex items-center justify-between p-2.5 bg-[#C99A42]/10 border border-[#C99A42]/40 rounded-xl text-xs">
                    <div className="flex items-center gap-1.5 text-[#A97828] font-semibold">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Code "{discountCode}" active (-20%)</span>
                    </div>
                    <button
                      onClick={removeDiscount}
                      className="text-xs text-[#77716A] hover:text-red-600 underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Promo code (try STEAK20)"
                      className="flex-1 py-2 px-3 text-xs bg-[#FBF8F2] border border-[#E9E1D6] rounded-xl text-[#090807] uppercase focus:outline-none focus:border-[#C99A42]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#090807] bg-[#F0E9DE] hover:bg-[#C99A42] rounded-xl transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoMessage && (
                  <p
                    className={`text-[10px] mt-1 ${
                      promoMessage.type === 'success' ? 'text-emerald-700' : 'text-red-600'
                    }`}
                  >
                    {promoMessage.text}
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#77716A]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#090807] font-medium">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#A97828] font-semibold">
                    <span>Discount Savings</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>State & Hospitality Tax (8.25%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery / Dining Packaging</span>
                  <span>{deliveryFee === 0 ? 'Complimentary (over $60)' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="pt-2 border-t border-[#E9E1D6] flex justify-between text-base font-playfair font-bold text-[#090807]">
                  <span>Total Due</span>
                  <span className="text-[#A97828]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons: Standard Checkout + WhatsApp */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsCartOpen(false);
                    onOpenCheckout();
                  }}
                  className="w-full py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] to-[#C99A42] hover:brightness-105 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Order Directly via WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
