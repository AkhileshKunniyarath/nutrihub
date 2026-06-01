import Link from "next/link";

function HeartIcon() {
  return (
    <svg aria-hidden="true" className="card-icon" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20.5 4.9 13.9a4.89 4.89 0 0 1 0-6.97 4.66 4.66 0 0 1 6.84.18L12 7.4l.26-.29a4.66 4.66 0 0 1 6.84-.18 4.89 4.89 0 0 1 0 6.97L12 20.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

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
          <Link aria-label="Add to wishlist" className="wishlist-badge" href="/wishlist">
            <HeartIcon />
          </Link>
          <div className="product-card-overlay">
            <Link className="ghost-button" href={`/products/${product.slug}`} style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
              Quick View
            </Link>
          </div>
        </div>
        <div className="product-card-copy">
          <div className="meta-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <span className="micro-label" style={{ color: "var(--primary)", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.08em" }}>
              {product.categorySlug.replaceAll("-", " ")}
            </span>
            <span className="rating-inline" style={{ color: "#D4AF37", fontSize: "0.85rem" }}>
              {"★".repeat(Math.round(product.rating))}
            </span>
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
            <span style={{ fontSize: "0.9rem", textDecoration: "line-through", color: "var(--text-muted)", marginLeft: "0.5rem" }}>
              Rs {product.price}
            </span>
          </div>
          <span className="muted" style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            {product.reviews} reviews
          </span>
        </div>
        <div style={{ marginTop: "1.1rem" }}>
          <Link 
            className="cta-button" 
            href={`/products/${product.slug}`} 
            style={{ 
              width: "100%", 
              justifyContent: "center", 
              display: "flex", 
              padding: "0.75rem 1rem", 
              fontSize: "0.95rem",
              borderRadius: "999px"
            }}
          >
            Shop Blend
          </Link>
        </div>
      </div>
    </article>
  );
}
