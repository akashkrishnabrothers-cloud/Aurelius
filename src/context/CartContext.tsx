import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '../data/restaurantData';

export interface CartEntry {
  item: MenuItem;
  quantity: number;
  temperature?: string;
  specialNote?: string;
}

interface CartContextType {
  items: CartEntry[];
  addItem: (item: MenuItem, quantity?: number, temperature?: string, specialNote?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  discountCode: string;
  discountPercent: number;
  discountAmount: number;
  total: number;
  applyDiscount: (code: string) => { success: boolean; message: string };
  removeDiscount: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'aurelius_steakhouse_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = (item: MenuItem, quantity = 1, temperature?: string, specialNote?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((entry) => entry.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (temperature) updated[existingIndex].temperature = temperature;
        if (specialNote) updated[existingIndex].specialNote = specialNote;
        return updated;
      }
      return [...prev, { item, quantity, temperature, specialNote }];
    });
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((entry) => entry.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((entry) => {
          if (entry.item.id === itemId) {
            const newQty = entry.quantity + delta;
            return newQty > 0 ? { ...entry, quantity: newQty } : null;
          }
          return entry;
        })
        .filter((entry): entry is CartEntry => entry !== null)
    );
  };

  const clearCart = () => {
    setItems([]);
    setDiscountCode('');
    setDiscountPercent(0);
  };

  const applyDiscount = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'STEAK20' || clean === 'AURELIUS20') {
      setDiscountCode(clean);
      setDiscountPercent(20);
      return { success: true, message: '20% off discount code applied successfully!' };
    }
    if (clean === 'VIP10') {
      setDiscountCode(clean);
      setDiscountPercent(10);
      return { success: true, message: '10% VIP discount applied!' };
    }
    return { success: false, message: 'Invalid promo code. Try "STEAK20" for 20% off.' };
  };

  const removeDiscount = () => {
    setDiscountCode('');
    setDiscountPercent(0);
  };

  const itemCount = items.reduce((sum, entry) => sum + entry.quantity, 0);
  const subtotal = items.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  const discountAmount = subtotal * (discountPercent / 100);
  const discountedSubtotal = Math.max(0, subtotal - discountAmount);
  const tax = discountedSubtotal * 0.0825; // 8.25% restaurant tax
  const deliveryFee = subtotal > 0 ? (subtotal > 60 ? 0 : 4.5) : 0;
  const total = discountedSubtotal + tax + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        tax,
        deliveryFee,
        discountCode,
        discountPercent,
        discountAmount,
        total,
        applyDiscount,
        removeDiscount,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
