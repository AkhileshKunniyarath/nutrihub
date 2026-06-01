export const siteConfig = {
  name: "NutriFab Naturals",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Premium natural-product e-commerce platform focused on clean ingredients, trusted wellness, and elegant shopping journeys.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/nutrifabnaturals",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  accountLinks: [
    { label: "My Account", href: "/account" },
    { label: "Orders", href: "/account/orders" },
    { label: "Wishlist", href: "/account#wishlist" }
  ],
  policyLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Shipping Policy", href: "/shipping-policy" }
  ]
};
