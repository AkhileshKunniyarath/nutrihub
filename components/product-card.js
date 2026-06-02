"use client";

import Link from "next/link";
import { StarRating } from "@/components/star-rating";
import { WishlistToggle } from "@/components/wishlist-toggle";

export function ProductCard({ product }) {
  return (
    <article className="product-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <div>
        <div className="product-card-media" style={{ overflow: "hidden", borderRadius: "20px" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          <div className="product-card-badges">
            <span className="tag tag-green">Natural</span>
            <span className="tag">{product.badge}</span>
          </div>
          <WishlistToggle productId={product.id} productName={product.name} />
          <div className="product-card-overlay">
            <Link className="card-action-button card-action-button-light card-action-button-compact" href={`/products/${product.slug}`}>
              <span>Quick View</span>
              <span className="card-action-button-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M4.2 10h11.1M10.8 4.7 16 10l-5.2 5.3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="product-card-copy">
          <div className="meta-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <span className="micro-label" style={{ color: "var(--primary)", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.08em" }}>
              {product.categorySlug.replaceAll("-", " ")}
            </span>
            <StarRating size="sm" value={product.rating} />
          </div>
          <Link href={`/products/${product.slug}`}>
            <h3 style={{ fontSize: "1.35rem", fontWeight: "600", margin: "0 0 0.5rem", color: "var(--text)", cursor: "pointer" }}>
              {product.name}
            </h3>
          </Link>
          <p className="meta-copy" style={{ fontSize: "0.9rem", color: "var(--text-soft)", margin: "0 0 1rem", lineHeight: "1.5" }}>
            {product.shortDescription}
          </p>
        </div>
      </div>
      <div>
        <div className="price-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
          <div>
            <strong style={{ fontSize: "1.2rem", color: "var(--text)" }}>Rs {product.offerPrice}</strong>
            <span className="price-compare" style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginLeft: "0.5rem" }}>
              Rs {product.price}
            </span>
          </div>
          <span className="review-count muted" style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            {product.reviews} reviews
          </span>
        </div>
        <div style={{ marginTop: "1.1rem" }}>
          <Link className="card-action-button" href={`/products/${product.slug}`}>
            <span>Shop Blend</span>
            <span className="card-action-button-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M4.2 10h11.1M10.8 4.7 16 10l-5.2 5.3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
