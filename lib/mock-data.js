export const categories = [
  {
    id: "cat-1",
    name: "Immunity Support",
    slug: "immunity-support",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    description: "Daily blends and botanicals that help support resilience."
  },
  {
    id: "cat-2",
    name: "Digestive Care",
    slug: "digestive-care",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    description: "Gentle essentials for balance, comfort, and clean routines."
  },
  {
    id: "cat-3",
    name: "Beauty Nutrition",
    slug: "beauty-nutrition",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    description: "Glow-focused formulas with collagen-friendly ingredients."
  },
  {
    id: "cat-4",
    name: "Everyday Wellness",
    slug: "everyday-wellness",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    description: "Foundational wellness staples for modern everyday care."
  }
];

export const products = [
  {
    id: "prd-1",
    name: "Golden Moringa Blend",
    slug: "golden-moringa-blend",
    categorySlug: "immunity-support",
    price: 899,
    offerPrice: 749,
    rating: 4.8,
    reviews: 126,
    stock: 42,
    badge: "New Arrival",
    featured: true,
    bestSeller: true,
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Turmeric, moringa, and black pepper for a bright daily ritual.",
    description:
      "A warm, earthy blend crafted to support a steady wellness routine with premium botanicals and balanced taste.",
    ingredients: ["Moringa leaf", "Turmeric", "Black pepper", "Ginger"],
    benefits: [
      "Supports natural immunity",
      "Daily anti-inflammatory support",
      "Easy to mix into warm water or smoothies"
    ],
    howToUse: "Mix one spoon into warm water, milk, or a smoothie once daily.",
    relatedSlugs: ["gut-balance-drops", "ashwagandha-calm-capsules"]
  },
  {
    id: "prd-2",
    name: "Gut Balance Drops",
    slug: "gut-balance-drops",
    categorySlug: "digestive-care",
    price: 699,
    offerPrice: 599,
    rating: 4.7,
    reviews: 92,
    stock: 18,
    badge: "Hot Product",
    featured: true,
    bestSeller: false,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Botanical digestive drops for after-meal comfort.",
    description:
      "A concentrated herbal dropper designed for mindful routines, digestive ease, and clean ingredient transparency.",
    ingredients: ["Fennel", "Mint", "Amla", "Cumin"],
    benefits: [
      "Comfort after heavier meals",
      "Supports balanced digestion",
      "Travel-friendly liquid format"
    ],
    howToUse: "Use one dropper with water after meals or as directed.",
    relatedSlugs: ["golden-moringa-blend", "probiotic-fiber-crunch"]
  },
  {
    id: "prd-3",
    name: "Botanical Glow Mix",
    slug: "botanical-glow-mix",
    categorySlug: "beauty-nutrition",
    price: 1199,
    offerPrice: 999,
    rating: 4.9,
    reviews: 203,
    stock: 35,
    badge: "Top Selling",
    featured: true,
    bestSeller: true,
    image:
      "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Rose, beetroot, and antioxidants for skin-loving hydration.",
    description:
      "This premium mix is designed for beauty-from-within rituals, blending floral and fruit ingredients with a refined finish.",
    ingredients: ["Rose petals", "Beetroot", "Acerola", "Hibiscus"],
    benefits: [
      "Antioxidant-rich daily support",
      "Beauty nutrition with clean ingredients",
      "Pairs well with water or yogurt"
    ],
    howToUse: "Add one serving to cool water or yogurt once daily.",
    relatedSlugs: ["golden-moringa-blend", "herbal-sleep-tonic"]
  },
  {
    id: "prd-4",
    name: "Ashwagandha Calm Capsules",
    slug: "ashwagandha-calm-capsules",
    categorySlug: "everyday-wellness",
    price: 799,
    offerPrice: 649,
    rating: 4.6,
    reviews: 74,
    stock: 27,
    badge: "Best Seller",
    featured: false,
    bestSeller: true,
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=900&q=80",
    shortDescription: "A grounding adaptogenic capsule for calmer daily balance.",
    description:
      "A modern wellness staple built around ashwagandha and magnesium support for smoother evenings and calmer routines.",
    ingredients: ["Ashwagandha", "Magnesium", "Tulsi"],
    benefits: [
      "Supports stress balance",
      "Simple capsule routine",
      "Designed for busy lifestyles"
    ],
    howToUse: "Take one capsule after dinner or as advised by your physician.",
    relatedSlugs: ["herbal-sleep-tonic", "golden-moringa-blend"]
  },
  {
    id: "prd-5",
    name: "Probiotic Fiber Crunch",
    slug: "probiotic-fiber-crunch",
    categorySlug: "digestive-care",
    price: 549,
    offerPrice: 479,
    rating: 4.5,
    reviews: 54,
    stock: 14,
    badge: "Trending",
    featured: false,
    bestSeller: false,
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Crunchy prebiotic bites to support happy mornings.",
    description:
      "A clean pantry-friendly snack offering gentle fiber support with a satisfying crunch and minimal processing.",
    ingredients: ["Oats", "Chia", "Flax", "Probiotic culture"],
    benefits: [
      "Supports gut diversity",
      "Portable midday snack",
      "Naturally fiber-rich"
    ],
    howToUse: "Enjoy one portion as a snack or with breakfast bowls.",
    relatedSlugs: ["gut-balance-drops", "botanical-glow-mix"]
  },
  {
    id: "prd-6",
    name: "Herbal Sleep Tonic",
    slug: "herbal-sleep-tonic",
    categorySlug: "everyday-wellness",
    price: 949,
    offerPrice: 829,
    rating: 4.8,
    reviews: 118,
    stock: 22,
    badge: "Night Ritual",
    featured: true,
    bestSeller: false,
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Chamomile and tulsi blend crafted for slower evenings.",
    description:
      "A comforting tonic for nighttime routines, blending calming botanicals with a refined, premium finish.",
    ingredients: ["Chamomile", "Tulsi", "Nutmeg", "Jatamansi"],
    benefits: [
      "Supports bedtime rituals",
      "Warming and soothing taste",
      "Easy evening preparation"
    ],
    howToUse: "Stir into warm water 30 minutes before bedtime.",
    relatedSlugs: ["ashwagandha-calm-capsules", "botanical-glow-mix"]
  }
];

export const reviews = [
  {
    id: "rvw-1",
    name: "Mira S.",
    location: "Bengaluru",
    title: "Finally feels premium and trustworthy",
    body:
      "The texture, packaging, and ingredient clarity all feel elevated. It’s rare to find natural products that feel this polished.",
    rating: 5
  },
  {
    id: "rvw-2",
    name: "Arjun P.",
    location: "Mumbai",
    title: "Fast routine, noticeable comfort",
    body:
      "Gut Balance Drops have become my post-lunch essential. The buying flow is clean and easy too.",
    rating: 5
  },
  {
    id: "rvw-3",
    name: "Naina R.",
    location: "Hyderabad",
    title: "Beautiful design, useful details",
    body:
      "I appreciate the benefits and ingredient breakdowns. It helps me shop with more confidence.",
    rating: 4
  }
];

export const homepageCollections = [
  {
    title: "Buying Intent Collection",
    subtitle: "Start with the concern you want to solve.",
    items: [
      "Shop for digestion support",
      "Shop for daily immunity",
      "Shop for glow and hydration",
      "Shop for calmer evenings"
    ]
  }
];

export const adminStats = [
  { label: "Total Orders", value: "1,284", detail: "+12.4% this month" },
  { label: "Total Revenue", value: "Rs 8.7L", detail: "AOV Rs 1,246" },
  { label: "Pending Orders", value: "46", detail: "11 need fulfillment today" },
  { label: "Low Stock", value: "7", detail: "2 critical SKUs" }
];

export const recentOrders = [
  {
    id: "ORD-10091",
    customer: "Riya Sharma",
    total: "Rs 1,598",
    payment: "Paid",
    status: "Packed"
  },
  {
    id: "ORD-10092",
    customer: "Farhan Ali",
    total: "Rs 649",
    payment: "COD",
    status: "Pending"
  },
  {
    id: "ORD-10093",
    customer: "Keerthi Rao",
    total: "Rs 2,227",
    payment: "Paid",
    status: "Shipped"
  }
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug) {
  return products.filter((product) => product.categorySlug === slug);
}
