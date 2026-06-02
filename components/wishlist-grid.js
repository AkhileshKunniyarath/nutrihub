"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { useWishlist } from "@/components/wishlist-provider";

export function WishlistGrid({ products }) {
  const { hasHydrated, wishlistIds } = useWishlist();
  const wishlistProducts = products.filter((product) => wishlistIds.includes(product.id));

  if (!hasHydrated) {
    return (
      <div className="content-block" style={{ marginTop: "1.5rem" }}>
        <p className="meta-copy" style={{ margin: 0 }}>Loading your saved products...</p>
      </div>
    );
  }

  if (!wishlistProducts.length) {
    return (
      <div className="content-block" style={{ marginTop: "1.5rem" }}>
        <h2 style={{ marginTop: 0 }}>Your wishlist is empty</h2>
        <p className="meta-copy">
          Tap the heart icon on any product card and your saved blends will show up here.
        </p>
        <Link className="ghost-button" href="/products">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {wishlistProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
