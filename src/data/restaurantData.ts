export interface MenuItem {
  id: string;
  name: string;
  category: 'steaks' | 'seafood' | 'burgers' | 'sides' | 'drinks' | 'desserts';
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  badge?: 'BESTSELLER' | "CHEF'S PICK" | 'POPULAR' | 'SIGNATURE';
  image: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  ingredients: string[];
  allergens?: string[];
  preparationTime?: string;
  pairing?: string;
}

export interface CategoryInfo {
  id: 'steaks' | 'seafood' | 'burgers' | 'sides' | 'drinks' | 'desserts';
  name: string;
  iconName: string;
  itemCount: number;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'steaks', name: 'Steaks', iconName: 'Beef', itemCount: 6 },
  { id: 'seafood', name: 'Seafood', iconName: 'Fish', itemCount: 4 },
  { id: 'burgers', name: 'Burgers', iconName: 'UtensilsCrossed', itemCount: 3 },
  { id: 'sides', name: 'Sides', iconName: 'Salad', itemCount: 5 },
  { id: 'drinks', name: 'Drinks', iconName: 'Wine', itemCount: 5 },
  { id: 'desserts', name: 'Desserts', iconName: 'Cake', itemCount: 4 },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'ribeye-steak',
    name: 'Prime Ribeye Steak',
    category: 'steaks',
    description: '14oz Prime Black Angus ribeye, served with creamy mashed potatoes, grilled broccolini, and garlic herb butter.',
    price: 28.99,
    rating: 4.8,
    reviewsCount: 1240,
    badge: 'BESTSELLER',
    image: '/src/assets/images/hero_ribeye_steak_1794274729019.jpg',
    ingredients: ['14oz Prime Angus Ribeye', 'Roasted Garlic Compound Butter', 'Maldon Flake Salt', 'Fresh Rosemary', 'Fingerling Mash'],
    allergens: ['Dairy'],
    preparationTime: '15-20 min',
    pairing: 'Napa Valley Cabernet Sauvignon 2019'
  },
  {
    id: 'filet-mignon',
    name: 'Center-Cut Filet Mignon',
    category: 'steaks',
    description: '8oz tender center-cut beef tenderloin topped with rich green peppercorn demi-glace and grilled jumbo asparagus.',
    price: 32.99,
    rating: 4.9,
    reviewsCount: 967,
    badge: "CHEF'S PICK",
    image: '/src/assets/images/gourmet_filet_mignon_1794274731053.jpg',
    ingredients: ['8oz Tenderloin', 'Green Peppercorn Demi-Glace', 'Charred Asparagus', 'Shallot Truffle Puree'],
    allergens: ['Dairy'],
    preparationTime: '15-18 min',
    pairing: 'Bordeaux Grand Cru 2018'
  },
  {
    id: 'tomahawk-steak',
    name: 'Dry-Aged Tomahawk 42oz',
    category: 'steaks',
    description: '45-day dry-aged bone-in ribeye carved tableside with roasted bone marrow butter and sea salt crystals.',
    price: 78.99,
    rating: 4.9,
    reviewsCount: 580,
    badge: 'SIGNATURE',
    image: '/src/assets/images/chef_tomahawk_steak_1794274730973.jpg',
    ingredients: ['42oz Bone-in Prime Ribeye', 'Roasted Bone Marrow Butter', 'Chimichurri Glaze', 'Smoked Sea Salt'],
    allergens: ['Dairy'],
    preparationTime: '25-30 min',
    pairing: 'Barolo DOCG 2017'
  },
  {
    id: 'grilled-salmon',
    name: 'Crisp Atlantic Salmon',
    category: 'seafood',
    description: 'Pan-seared Atlantic salmon fillet with Meyer lemon caper emulsion, herb-scented wild rice, and seasonal greens.',
    price: 24.99,
    rating: 4.7,
    reviewsCount: 743,
    badge: 'POPULAR',
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    ingredients: ['Wild Atlantic Salmon', 'Meyer Lemon Butter', 'Baby Capers', 'Fresh Dill', 'Wild Rice'],
    allergens: ['Fish', 'Dairy'],
    preparationTime: '14-16 min',
    pairing: 'Chablis Premier Cru 2021'
  },
  {
    id: 'ny-strip',
    name: 'New York Strip Reserve',
    category: 'steaks',
    description: '12oz hand-cut USDA Prime striploin aged 35 days, finished with smoked sea salt and chimichurri butter.',
    price: 34.50,
    rating: 4.8,
    reviewsCount: 412,
    badge: 'POPULAR',
    image: '/src/assets/images/hero_ribeye_steak_1794274729019.jpg',
    ingredients: ['USDA Prime Striploin', 'House Herb Crust', 'Smoked Sea Salt', 'Charred Shallots'],
    preparationTime: '15-20 min',
    pairing: 'Sonoma Coast Pinot Noir'
  },
  {
    id: 't-bone-steak',
    name: 'Florentine T-Bone 24oz',
    category: 'steaks',
    description: 'The best of both worlds: robust strip steak and delicate tenderloin, seared over blazing white oak coals.',
    price: 44.00,
    rating: 4.8,
    reviewsCount: 318,
    image: '/src/assets/images/chef_tomahawk_steak_1794274730973.jpg',
    ingredients: ['24oz T-Bone Cut', 'Tuscan Olive Oil', 'Cracked Black Pepper', 'Rosemary Bunch'],
    preparationTime: '20-25 min',
    pairing: 'Brunello di Montalcino'
  },
  {
    id: 'garlic-butter-prawns',
    name: 'Garlic Butter King Prawns',
    category: 'seafood',
    description: 'Colossal jumbo tiger prawns sautéed in garlic confit butter, white wine, chili flakes, and toasted rustic ciabatta.',
    price: 29.50,
    rating: 4.8,
    reviewsCount: 490,
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    ingredients: ['Wild Jumbo King Prawns', 'Confit Garlic Butter', 'Pinot Grigio', 'Red Chili', 'Artisan Ciabatta'],
    allergens: ['Shellfish', 'Dairy', 'Gluten'],
    preparationTime: '12-14 min',
    pairing: 'Sancerre Sauvignon Blanc'
  },
  {
    id: 'grilled-lobster',
    name: 'Wood-Fired Lobster Tail',
    category: 'seafood',
    description: 'Twin 8oz Maine cold-water lobster tails basted with tarragon drawn butter and charred lemon.',
    price: 48.00,
    rating: 4.9,
    reviewsCount: 360,
    badge: "CHEF'S PICK",
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    ingredients: ['Maine Lobster Tails', 'Clarified Tarragon Butter', 'Smoked Paprika', 'Charred Citrus'],
    allergens: ['Shellfish', 'Dairy'],
    preparationTime: '16-18 min',
    pairing: 'Vintage Champagne Brut'
  },
  {
    id: 'seafood-platter',
    name: 'Imperial Seafood Platter',
    category: 'seafood',
    description: 'Oysters on the half shell, chilled king crab legs, poached prawns, and tuna tartare with signature sauces.',
    price: 64.00,
    rating: 4.9,
    reviewsCount: 215,
    badge: 'SIGNATURE',
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    ingredients: ['Kumamoto Oysters', 'Alaskan King Crab', 'Tiger Prawns', 'Yellowfin Tuna', 'Mignonette'],
    allergens: ['Shellfish', 'Fish'],
    preparationTime: '15 min',
    pairing: 'Champagne Blanc de Blancs'
  },
  {
    id: 'wagyu-burger',
    name: 'Prime Wagyu Truffle Burger',
    category: 'burgers',
    description: '8oz American Wagyu beef patty, black truffle aioli, aged cave cheddar, caramelized sweet onions on a brioche bun.',
    price: 22.50,
    rating: 4.8,
    reviewsCount: 620,
    badge: 'BESTSELLER',
    image: '/src/assets/images/gourmet_filet_mignon_1794274731053.jpg',
    ingredients: ['Wagyu Beef Patty', 'Truffle Mayo', 'Cave-Aged Cheddar', 'Crispy Prosciutto', 'Toasted Brioche'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    preparationTime: '12-15 min',
    pairing: 'Belgian Dark Ale'
  },
  {
    id: 'classic-burger',
    name: 'Classic Steakhouse Burger',
    category: 'burgers',
    description: 'House-ground dry-aged beef blend, thick-cut maple bacon, butter lettuce, heirloom tomato, and secret burger glaze.',
    price: 18.99,
    rating: 4.7,
    reviewsCount: 540,
    image: '/src/assets/images/gourmet_filet_mignon_1794274731053.jpg',
    ingredients: ['Dry-Aged Beef Blend', 'Thick Cut Bacon', 'Sharp White Cheddar', 'Brioche Bun'],
    allergens: ['Dairy', 'Gluten'],
    preparationTime: '12-15 min',
    pairing: 'Draft IPA or Amber Lager'
  },
  {
    id: 'double-cheese-burger',
    name: 'Smoked Double Cheese Burger',
    category: 'burgers',
    description: 'Two 4oz smashed patties, double fontina & smoked gouda cheese, house pickles, and chipotle aioli.',
    price: 19.50,
    rating: 4.6,
    reviewsCount: 390,
    image: '/src/assets/images/gourmet_filet_mignon_1794274731053.jpg',
    ingredients: ['Dual Beef Patties', 'Smoked Gouda', 'Fontina', 'Dill Pickles', 'Potato Bun'],
    allergens: ['Dairy', 'Gluten'],
    preparationTime: '10-12 min',
    pairing: 'Craft Pilsner'
  },
  {
    id: 'truffle-fries',
    name: 'Truffle Parmesan Hand-Cut Fries',
    category: 'sides',
    description: 'Crispy double-cooked russet potatoes tossed in black winter truffle oil, aged 24-month Parmigiano-Reggiano, and fresh parsley.',
    price: 9.50,
    rating: 4.9,
    reviewsCount: 810,
    badge: 'BESTSELLER',
    isVegetarian: true,
    image: '/src/assets/images/gourmet_filet_mignon_1794274731053.jpg',
    ingredients: ['Idaho Russet Potatoes', 'Black Truffle Oil', 'Parmigiano-Reggiano', 'Flat Leaf Parsley'],
    allergens: ['Dairy'],
    preparationTime: '8 min'
  },
  {
    id: 'mashed-potatoes',
    name: 'Roasted Garlic Mashed Potatoes',
    category: 'sides',
    description: 'Yukon Gold potatoes whipped with French butter, roasted garlic puree, and crème fraîche.',
    price: 8.50,
    rating: 4.8,
    reviewsCount: 670,
    isVegetarian: true,
    image: '/src/assets/images/gourmet_filet_mignon_1794274731053.jpg',
    ingredients: ['Yukon Gold Potatoes', 'Isigny Butter', 'Roasted Garlic', 'Heavy Cream'],
    allergens: ['Dairy'],
    preparationTime: '6 min'
  },
  {
    id: 'grilled-asparagus',
    name: 'Charred Jumbo Asparagus',
    category: 'sides',
    description: 'Wood-fired tender green asparagus spears with Meyer lemon zest and shaved pecorino cheese.',
    price: 9.00,
    rating: 4.7,
    reviewsCount: 430,
    isVegetarian: true,
    isGlutenFree: true,
    image: '/src/assets/images/gourmet_filet_mignon_1794274731053.jpg',
    ingredients: ['Jumbo Asparagus', 'Extra Virgin Olive Oil', 'Meyer Lemon', 'Aged Pecorino'],
    allergens: ['Dairy'],
    preparationTime: '8 min'
  },
  {
    id: 'creamed-spinach',
    name: 'Black Truffle Creamed Spinach',
    category: 'sides',
    description: 'Baby leaf spinach simmered in nutmeg-infused cream sauce with gruyère and grated truffle.',
    price: 10.50,
    rating: 4.8,
    reviewsCount: 380,
    isVegetarian: true,
    image: '/src/assets/images/gourmet_filet_mignon_1794274731053.jpg',
    ingredients: ['Baby Spinach', 'Gruyère Cheese', 'Nutmeg', 'Shallots', 'Heavy Cream'],
    allergens: ['Dairy'],
    preparationTime: '8 min'
  },
  {
    id: 'onion-rings',
    name: 'Crispy Beer-Battered Onion Rings',
    category: 'sides',
    description: 'Colossal sweet Vidalia onion rings fried golden in stout beer batter, served with spicy remoulade.',
    price: 8.00,
    rating: 4.6,
    reviewsCount: 310,
    isVegetarian: true,
    image: '/src/assets/images/gourmet_filet_mignon_1794274731053.jpg',
    ingredients: ['Vidalia Onions', 'Stout Beer Batter', 'Smoked Paprika', 'Cajun Remoulade'],
    allergens: ['Gluten', 'Eggs'],
    preparationTime: '8 min'
  },
  {
    id: 'smoked-old-fashioned',
    name: 'The Aurelius Smoked Old Fashioned',
    category: 'drinks',
    description: 'Kentucky small-batch bourbon, demerara syrup, Angostura & orange bitters, smoked with cherrywood tableside.',
    price: 16.00,
    rating: 4.9,
    reviewsCount: 530,
    badge: 'SIGNATURE',
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    ingredients: ['Woodford Reserve Bourbon', 'Demerara Syrup', 'Angostura Bitters', 'Cherrywood Smoke'],
    preparationTime: '5 min'
  },
  {
    id: 'thyme-mocktail',
    name: 'Blackberry Thyme Botanical Mocktail',
    category: 'drinks',
    description: 'Muddled wild blackberries, fresh garden thyme, pressed lime juice, topped with artisanal ginger beer.',
    price: 9.50,
    rating: 4.8,
    reviewsCount: 340,
    isVegetarian: true,
    isGlutenFree: true,
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    ingredients: ['Fresh Blackberries', 'Garden Thyme', 'Key Lime Juice', 'Spiced Ginger Beer'],
    preparationTime: '4 min'
  },
  {
    id: 'cabernet-sauvignon',
    name: 'Reserve Cabernet Sauvignon (Glass)',
    category: 'drinks',
    description: 'Deep ruby notes of cassis, cedar box, and dark blackberry preserves with velvety tannins.',
    price: 18.00,
    rating: 4.9,
    reviewsCount: 410,
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    ingredients: ['100% Napa Valley Cabernet Sauvignon', 'Aged 22 Months French Oak'],
    preparationTime: '2 min'
  },
  {
    id: 'mint-lemonade',
    name: 'Cold-Pressed Mint Citrus Soda',
    category: 'drinks',
    description: 'Freshly squeezed Eureka lemons, crushed garden spearmint, organic agave, and sparkling mountain water.',
    price: 7.50,
    rating: 4.7,
    reviewsCount: 290,
    isVegetarian: true,
    isGlutenFree: true,
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    ingredients: ['Eureka Lemons', 'Spearmint Leaves', 'Organic Agave', 'Sparkling Spring Water'],
    preparationTime: '3 min'
  },
  {
    id: 'chocolate-lava-cake',
    name: 'Molten Valrhona Chocolate Lava Cake',
    category: 'desserts',
    description: 'Warm 70% dark Valrhona chocolate cake with an oozing liquid ganache core, Madagascar bourbon vanilla gelato, and raspberry coulis.',
    price: 12.50,
    rating: 4.9,
    reviewsCount: 780,
    badge: 'BESTSELLER',
    isVegetarian: true,
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    ingredients: ['70% Valrhona Guanaja Chocolate', 'Madagascar Vanilla Bean Gelato', 'Wild Berry Coulis', 'Gold Leaf'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    preparationTime: '12 min',
    pairing: 'Taylor Fladgate 20-Year Tawny Port'
  },
  {
    id: 'classic-cheesecake',
    name: 'Classic New York Vanilla Cheesecake',
    category: 'desserts',
    description: 'Velvety Philadelphia cream cheese on a spiced graham cracker crust, topped with macerated wild strawberries.',
    price: 11.00,
    rating: 4.8,
    reviewsCount: 620,
    isVegetarian: true,
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    ingredients: ['Cream Cheese', 'Tahitian Vanilla', 'Graham Crust', 'Organic Strawberries'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    preparationTime: '5 min'
  },
  {
    id: 'espresso-tiramisu',
    name: 'Reserve Espresso Tiramisu',
    category: 'desserts',
    description: 'Layers of espresso-soaked savoiardi ladyfingers and whipped mascarpone cream dusted with Dutch cocoa.',
    price: 11.50,
    rating: 4.8,
    reviewsCount: 430,
    isVegetarian: true,
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    ingredients: ['Italian Mascarpone', 'Savoiardi Ladyfingers', 'Illy Dark Espresso', 'Marsala Wine'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    preparationTime: '5 min'
  }
];

export interface HeroSlide {
  id: number;
  badge: string;
  headline: string;
  highlight: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
  altText: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: 'The Art of Fine Dining',
    headline: 'EXCEPTIONAL STEAKS.',
    highlight: 'PERFECTED.',
    description: 'Hand-selected prime cuts, dry-aged for 45 days and expertly grilled over blazing open white-oak coals for transcendent depth of flavor.',
    primaryCta: 'RESERVE A TABLE',
    secondaryCta: 'EXPLORE MENU',
    image: '/src/assets/images/hero_ribeye_steak_1794274729019.jpg',
    altText: 'Prime seared ribeye steak with herb butter and roasted garlic on cast ceramic plate'
  },
  {
    id: 2,
    badge: 'Unrivaled Atmosphere',
    headline: 'ELEGANT DINING.',
    highlight: 'ELEVATED.',
    description: 'An intimate, dimly lit sanctuary adorned with crystal chandeliers, bespoke mahogany finishes, and an architectural glass wine room.',
    primaryCta: 'VIEW ATMOSPHERE',
    secondaryCta: 'EXPERIENCE AURELIUS',
    image: '/src/assets/images/restaurant_luxury_interior_1794274729258.jpg',
    altText: 'Opulent steakhouse dining room with chandelier and wine cellar'
  },
  {
    id: 3,
    badge: "Master Butcher's Choice",
    headline: 'THE 42oz TOMAHAWK.',
    highlight: 'UNRIVALED.',
    description: 'Our iconic bone-in cut, masterfully carved tableside with roasted marrow butter and aromatic rosemary smoke for true connoisseurs.',
    primaryCta: 'CHEF’S SPECIALS',
    secondaryCta: 'ORDER ONLINE',
    image: '/src/assets/images/chef_tomahawk_steak_1794274730973.jpg',
    altText: 'Dry aged tomahawk steak with sea salt flakes and rosemary on rustic board'
  },
  {
    id: 4,
    badge: 'Romantic Celebrations',
    headline: 'EXCLUSIVE EVENINGS.',
    highlight: 'FOR TWO.',
    description: 'Candlelit tables, sommelier-curated grand cru pairings, and intimate multi-course culinary journeys crafted for memorable milestones.',
    primaryCta: 'BOOK SPECIAL OFFER',
    secondaryCta: 'EXPLORE WINES',
    image: '/src/assets/images/dining_special_offer_1794274729254.jpg',
    altText: 'Candlelit dinner for two table setting with crystal wine glasses'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Julian Montgomery',
    title: 'Food Critic & Culinary Columnist',
    rating: 5,
    quote: 'The 45-day dry-aged tomahawk at Aurelius is arguably the finest cut in the city. The sear is sensational, locking in unrivaled tenderness and buttery complexity.',
    avatar: 'JM',
    verified: true,
    date: 'October 2026'
  },
  {
    id: 2,
    name: 'Eleanor & Marcus Vance',
    title: 'Anniversary Celebration',
    rating: 5,
    quote: 'From the warm champagne greeting to the sommelier’s spot-on Bordeaux recommendation, our table for two was magical. Truly the gold standard of luxury hospitality.',
    avatar: 'EV',
    verified: true,
    date: 'November 2026'
  },
  {
    id: 3,
    name: 'Chef David Lin',
    title: 'Restaurateur & Sommelier',
    rating: 5,
    quote: 'The precision of their woodfire grill masters is remarkable. The ribeye had the most immaculate cross-hatch char and rich marbling I have tasted this year.',
    avatar: 'DL',
    verified: true,
    date: 'September 2026'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    title: 'Prime Hand-Cut Meats',
    description: 'Every cut is personally inspected, USDA Prime and American Wagyu, dry-aged on site in our humidity-controlled Himalayan salt chamber.',
    iconName: 'ShieldCheck'
  },
  {
    id: 2,
    title: 'White-Oak Fire Grilling',
    description: 'We sear over 1,200°F live white-oak and fruitwood embers to produce intense caramelization while locking in juices.',
    iconName: 'Flame'
  },
  {
    id: 3,
    title: 'Farm-to-Table Freshness',
    description: 'Daily deliveries of organic farm herbs, heirloom produce, and wild-caught cold water seafood ensure peak seasonal purity.',
    iconName: 'Sparkles'
  },
  {
    id: 4,
    title: 'White-Glove Hospitality',
    description: 'Our attentive waitstaff and resident master sommeliers anticipate every need with gracious, unobtrusive warmth.',
    iconName: 'Award'
  }
];

export const RESTAURANT_INFO = {
  name: 'Aurelius Steakhouse',
  tagline: 'The Art of Fine Cuts & Embers',
  established: '2018',
  address: '450 Grand Avenue, Financial District, Suite 100',
  city: 'Metropolitan City, NY 10005',
  phone: '+1 (555) 789-2873',
  whatsapp: '+15557892873',
  email: 'reservations@aureliussteakhouse.com',
  hours: {
    weekdays: 'Monday – Thursday: 5:00 PM – 10:30 PM',
    weekend: 'Friday – Saturday: 4:30 PM – 11:30 PM',
    sunday: 'Sunday: 4:30 PM – 10:00 PM'
  },
  dressCode: 'Smart Casual & Business Attire',
  valetParking: 'Complimentary Valet Parking Available'
};
