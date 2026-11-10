import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import { MENU_ITEMS, MenuItem } from './data/restaurantData';
import { Header } from './components/Header';
import { SearchBar, FilterState } from './components/SearchBar';
import { HeroCarousel } from './components/HeroCarousel';
import { CategoryNavigation } from './components/CategoryNavigation';
import { PopularDishes } from './components/PopularDishes';
import { PromotionalBanner } from './components/PromotionalBanner';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ChefSpecial } from './components/ChefSpecial';
import { RestaurantGallery } from './components/RestaurantGallery';
import { ReservationSystem } from './components/ReservationSystem';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { MoreMenuDrawer } from './components/MoreMenuDrawer';

export default function App() {
  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'all',
    maxPrice: 100,
    vegetarianOnly: false,
    chefPickOnly: false,
    sortBy: 'featured',
  });

  // Modal & Drawer states
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [mobileActiveTab, setMobileActiveTab] = useState<'home' | 'menu' | 'order' | 'reservations' | 'more'>('home');

  // Filtered dishes calculation
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (filters.category !== 'all' && item.category !== filters.category) {
        return false;
      }
      // Search query filter
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIngredients = item.ingredients.some((ing) => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesIngredients) return false;
      }
      // Price filter
      if (item.price > filters.maxPrice) {
        return false;
      }
      // Vegetarian filter
      if (filters.vegetarianOnly && !item.isVegetarian) {
        return false;
      }
      // Chef's Pick filter
      if (filters.chefPickOnly && item.badge !== "CHEF'S PICK" && item.badge !== 'SIGNATURE') {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (filters.sortBy === 'price-asc') {
        return a.price - b.price;
      }
      if (filters.sortBy === 'price-desc') {
        return b.price - a.price;
      }
      return 0; // featured default order
    });
  }, [filters]);

  // Featured Popular Dishes (first 4 items that match criteria or fallback to top signature cuts)
  const popularDishes = useMemo(() => {
    return MENU_ITEMS.filter((item) => item.badge || item.category === 'steaks').slice(0, 4);
  }, []);

  const handleSelectCategory = (catId: string) => {
    setFilters((prev) => ({ ...prev, category: catId }));
    const menuSection = document.getElementById('menu');
    if (menuSection && catId !== 'all') {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToReservation = () => {
    const el = document.getElementById('reservations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const focusSearch = () => {
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FBF8F2] text-[#292521] flex flex-col font-sans selection:bg-[#C99A42]/20">
        {/* Sticky Luxury Header */}
        <Header
          onOpenSearch={focusSearch}
          onOpenReservation={scrollToReservation}
        />

        {/* Search & Filter Bar - Positioned below header inspired by reference design */}
        <div className="pt-4 pb-2">
          <SearchBar
            filters={filters}
            onChangeFilters={setFilters}
            resultsCount={filteredDishes.length}
          />
        </div>

        {/* Hero Section Carousel */}
        <HeroCarousel
          onReserveClick={scrollToReservation}
          onExploreMenuClick={scrollToMenu}
        />

        {/* Food Category Circular Navigation */}
        <div className="py-4">
          <CategoryNavigation
            activeCategory={filters.category}
            onSelectCategory={handleSelectCategory}
          />
        </div>

        {/* Popular Dishes Section */}
        <PopularDishes
          dishes={popularDishes}
          onOpenDetails={setSelectedDish}
          onViewAllClick={scrollToMenu}
        />

        {/* Special Offer Promotional Banner ("Dinner for Two - 20% OFF") */}
        <PromotionalBanner onReserveClick={scrollToReservation} />

        {/* Complete Restaurant Menu Section */}
        <MenuSection
          items={filteredDishes}
          activeCategory={filters.category}
          onSelectCategory={handleSelectCategory}
          onOpenDetails={setSelectedDish}
        />

        {/* About Us / Restaurant Heritage Story */}
        <AboutSection onReserveClick={scrollToReservation} />

        {/* Why Choose Our Steakhouse Pillars */}
        <WhyChooseUs />

        {/* Chef's Special / Tomahawk Showcase */}
        <ChefSpecial onOpenDetails={setSelectedDish} />

        {/* Restaurant Experience / Interior Gallery */}
        <RestaurantGallery />

        {/* Reservation System Form & Confirmation */}
        <ReservationSystem />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* VIP Newsletter Subscription */}
        <Newsletter />

        {/* Contact, Hours & Directions */}
        <ContactSection />

        {/* Full Charcoal Footer */}
        <Footer
          onOpenReservation={scrollToReservation}
          onOpenCart={() => {}}
        />

        {/* Mobile Fixed Bottom Navigation (5 items with center elevated gold button) */}
        <MobileBottomNav
          activeTab={mobileActiveTab}
          onSelectTab={setMobileActiveTab}
          onOpenMoreMenu={() => setIsMoreMenuOpen(true)}
        />

        {/* Product Details Modal */}
        <ProductModal
          item={selectedDish}
          onClose={() => setSelectedDish(null)}
        />

        {/* Slide-In Cart Drawer */}
        <CartDrawer
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Checkout Modal */}
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />

        {/* Mobile Concierge / More Menu Drawer */}
        <MoreMenuDrawer
          isOpen={isMoreMenuOpen}
          onClose={() => setIsMoreMenuOpen(false)}
          onOpenReservation={scrollToReservation}
        />
      </div>
    </CartProvider>
  );
}
