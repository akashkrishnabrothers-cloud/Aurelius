import React, { useState } from 'react';
import { X, Star, Plus, Minus, Clock, Wine, AlertCircle, Sparkles, Check } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [temperature, setTemperature] = useState<string>('Medium Rare');
  const [specialNote, setSpecialNote] = useState('');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const temperatures = ['Rare', 'Medium Rare', 'Medium', 'Medium Well', 'Well Done'];
  const isSteak = item.category === 'steaks';

  const handleAddToCart = () => {
    addItem(item, quantity, isSteak ? temperature : undefined, specialNote.trim() || undefined);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 700);
  };

  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090807]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#FFFDF9] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E9E1D6] overflow-y-auto flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#090807]/60 text-white hover:bg-[#090807] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative w-full h-56 sm:h-72 bg-[#171411] flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/80 via-transparent to-black/30" />

          {/* Badge & Category overlay */}
          <div className="absolute bottom-4 left-4 sm:left-6 flex items-center gap-2">
            {item.badge && (
              <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#D9AD58] to-[#C99A42] text-[#090807] rounded-md shadow-sm">
                {item.badge}
              </span>
            )}
            <span className="px-3 py-1 text-[11px] font-medium uppercase tracking-wider bg-[#FFFDF9]/90 text-[#090807] rounded-md">
              {item.category}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-5">
          {/* Title & Rating */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#090807]">
                {item.name}
              </h2>
              <span className="font-playfair text-2xl font-bold text-[#C99A42]">
                ${item.price.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center gap-4 mt-2 text-xs text-[#77716A]">
              <div className="flex items-center gap-1 text-[#090807] font-semibold">
                <Star className="w-4 h-4 fill-[#C99A42] text-[#C99A42]" />
                <span>{item.rating}</span>
                <span className="text-[#77716A] font-normal">({item.reviewsCount} reviews)</span>
              </div>
              {item.preparationTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C99A42]" />
                  <span>{item.preparationTime}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[#292521] leading-relaxed">
            {item.description}
          </p>

          {/* Wine Pairing */}
          {item.pairing && (
            <div className="flex items-start gap-2.5 p-3.5 bg-[#FBF8F2] rounded-xl border border-[#E9E1D6]">
              <Wine className="w-4 h-4 text-[#C99A42] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#090807]">
                  Sommelier Pairing Suggestion:
                </span>
                <p className="text-xs text-[#77716A] mt-0.5">{item.pairing}</p>
              </div>
            </div>
          )}

          {/* Ingredients list */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#77716A] block mb-2">
              Ingredients & Plating
            </span>
            <div className="flex flex-wrap gap-1.5">
              {item.ingredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs bg-[#F0E9DE]/60 text-[#292521] rounded-lg border border-[#E9E1D6]"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Allergens note */}
          {item.allergens && item.allergens.length > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-[#77716A]">
              <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Contains: {item.allergens.join(', ')}</span>
            </div>
          )}

          {/* Steak Temperature Selection */}
          {isSteak && (
            <div className="pt-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#090807] block mb-2">
                Steak Temperature
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {temperatures.map((temp) => (
                  <button
                    key={temp}
                    type="button"
                    onClick={() => setTemperature(temp)}
                    className={`py-2 px-1 text-xs font-medium rounded-lg border text-center transition-all ${
                      temperature === temp
                        ? 'bg-[#090807] text-[#D9AD58] border-[#090807] shadow-sm'
                        : 'bg-[#FFFDF9] text-[#77716A] border-[#E9E1D6] hover:border-[#C99A42]'
                    }`}
                  >
                    {temp}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Special Requests */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#77716A] block mb-1.5">
              Special Instructions
            </label>
            <input
              type="text"
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              placeholder="e.g. Extra sauce on side, allergy note, butter on side..."
              className="w-full py-2.5 px-3.5 text-xs bg-[#FBF8F2] border border-[#E9E1D6] rounded-xl text-[#090807] focus:outline-none focus:border-[#C99A42]"
            />
          </div>

          {/* Quantity and Add to Cart Button */}
          <div className="pt-4 border-t border-[#E9E1D6] flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Stepper */}
            <div className="flex items-center border border-[#E9E1D6] rounded-full bg-[#FBF8F2] p-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-[#FFFDF9] flex items-center justify-center text-[#292521] hover:bg-[#E9E1D6] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-12 text-center text-sm font-bold text-[#090807]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-[#FFFDF9] flex items-center justify-center text-[#292521] hover:bg-[#E9E1D6] transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`w-full sm:w-auto flex-1 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                addedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-[#D9AD58] to-[#C99A42] text-[#090807] hover:brightness-105 shadow-md'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Order</span>
                </>
              ) : (
                <>
                  <span>Add to Order</span>
                  <span>•</span>
                  <span>${totalPrice}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
