import { categories, products } from "@/lib/mock-data";
import { siteConfig } from "@/lib/site";

export function buildProductMetadata(product) {
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: {
      canonical: `/products/${product.slug}`
    },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      type: "website",
      url: `${siteConfig.siteUrl}/products/${product.slug}`
    }
  };
}

export function buildCategoryMetadata(category) {
  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `/category/${category.slug}`
    },
    openGraph: {
      title: `${category.name} | NutriFab Naturals`,
      description: category.description,
      type: "website",
      url: `${siteConfig.siteUrl}/category/${category.slug}`
    }
  };
}

export function buildProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: [product.image],
    brand: {
      "@type": "Brand",
      name: "NutriFab Naturals"
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.offerPrice,
      availability:
        product.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews
    }
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.href}`
    }))
  };
}

export function getSitemapEntries() {
  const staticRoutes = [
    "",
    "/categories",
    "/best-sellers",
    "/products",
    "/cart",
    "/checkout",
    "/payment-success",
    "/payment-failed",
    "/account",
    "/account/orders",
    "/login",
    "/register",
    "/wishlist",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/shipping-policy",
    "/admin",
    "/admin/login",
    "/admin/products",
    "/admin/orders",
    "/admin/categories",
    "/admin/customers",
    "/admin/coupons",
    "/admin/banners",
    "/admin/reviews",
    "/admin/homepage",
    "/admin/seo",
    "/admin/settings"
  ];

  return [
    ...staticRoutes.map((path) => ({ url: `${siteConfig.siteUrl}${path}` })),
    ...products.map((product) => ({
      url: `${siteConfig.siteUrl}/products/${product.slug}`
    })),
    ...categories.map((category) => ({
      url: `${siteConfig.siteUrl}/category/${category.slug}`
    }))
  ];
}
