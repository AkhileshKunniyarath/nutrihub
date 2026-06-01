# NutriFab Naturals

Premium natural-product e-commerce scaffold built with Next.js App Router, Mongo-ready models, admin screens, SEO helpers, and Razorpay/NextAuth integration placeholders.

## Included

- Storefront pages for home, products, categories, PDP, cart, checkout, account, and policy pages
- Admin shell for dashboard, products, orders, categories, homepage CMS, and SEO management
- MongoDB connection helper plus schemas for users, products, categories, orders, wishlist, cart, coupons, banners, settings, SEO pages, and payments
- Dynamic metadata helpers, product schema, breadcrumb schema, `sitemap.xml`, and `robots.txt`
- Analytics hooks for GA4 and GTM
- WhatsApp CTA and premium NutriFab gold/ivory/green design system

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment values from `.env.example` into `.env`.

3. Start the development server:

```bash
npm run dev
```

## Next integration steps

1. Replace mock catalog data in [lib/mock-data.js](/Users/aneesh/Desktop/touchpoint/nutriifab/lib/mock-data.js) with Mongo-backed queries.
2. Wire [app/api/payments/razorpay-order/route.js](/Users/aneesh/Desktop/touchpoint/nutriifab/app/api/payments/razorpay-order/route.js) to the Razorpay SDK and signature verification flow.
3. Replace the demo credentials flow in [lib/auth.js](/Users/aneesh/Desktop/touchpoint/nutriifab/lib/auth.js) with hashed password verification or social login providers.
4. Connect homepage CMS sections and admin tables to database-backed actions.
