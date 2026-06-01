import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { buildBreadcrumbSchema, buildProductMetadata, buildProductSchema } from "@/lib/seo";
import { getProductBySlug, products } from "@/lib/mock-data";

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {};
  }

  return buildProductMetadata(product);
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => product.relatedSlugs.includes(item.slug));
  const productSchema = buildProductSchema(product);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: product.name, href: `/products/${product.slug}` }
  ]);

  return (
    <section className="section">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <div className="detail-grid">
          <div className="content-block">
            <img className="feature-image" src={product.image} alt={product.name} />
          </div>
          <div className="content-block">
            <span className="tag">{product.badge}</span>
            <h1>{product.name}</h1>
            <p className="lead">{product.description}</p>
            <div className="price-row">
              <div>
                <strong>Rs {product.offerPrice}</strong>
                <span>Rs {product.price}</span>
              </div>
              <span className="muted">{product.stock} in stock</span>
            </div>
            <div className="detail-panel">
              <span className="nav-chip">Rating {product.rating}</span>
              <span className="nav-chip">{product.reviews} reviews</span>
              <span className="nav-chip">Wishlist enabled</span>
            </div>
            <div className="filter-bar">
              <select defaultValue="1">
                <option value="1">Qty 1</option>
                <option value="2">Qty 2</option>
                <option value="3">Qty 3</option>
              </select>
              <Link className="cta-button" href="/cart">
                Add to Cart
              </Link>
              <Link className="pill-button" href="/checkout">
                Buy Now
              </Link>
              <Link className="ghost-button" href="/wishlist">
                Wishlist
              </Link>
              <a
                className="ghost-button"
                href={`https://wa.me/6282774392?text=Hi%20NutriFab%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(product.name)}.`}
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp Enquiry
              </a>
            </div>
            <div className="detail-list" style={{ marginTop: "2rem", display: "grid", gap: "1.5rem" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.45)", backdropFilter: "blur(6px)", border: "1px solid var(--border)", borderRadius: "20px", padding: "1.25rem" }}>
                <strong style={{ color: "var(--primary)", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="rgba(184,135,45,0.1)" stroke="var(--primary)" strokeWidth="1.5"/><path d="M9 12l2 2 4-4"/></svg>
                  Ingredients
                </strong>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "var(--text-soft)", lineHeight: "1.6" }}>{product.ingredients.join(", ")}</p>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.45)", backdropFilter: "blur(6px)", border: "1px solid var(--border)", borderRadius: "20px", padding: "1.25rem" }}>
                <strong style={{ color: "var(--primary)", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="rgba(184,135,45,0.1)" stroke="var(--primary)" strokeWidth="1.5"/><path d="M9 12l2 2 4-4"/></svg>
                  Benefits
                </strong>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "var(--text-soft)", lineHeight: "1.6" }}>{product.benefits.join(" • ")}</p>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.45)", backdropFilter: "blur(6px)", border: "1px solid var(--border)", borderRadius: "20px", padding: "1.25rem" }}>
                <strong style={{ color: "var(--primary)", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="rgba(184,135,45,0.1)" stroke="var(--primary)" strokeWidth="1.5"/><path d="M9 12l2 2 4-4"/></svg>
                  How to Use
                </strong>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "var(--text-soft)", lineHeight: "1.6" }}>{product.howToUse}</p>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.45)", backdropFilter: "blur(6px)", border: "1px solid var(--border)", borderRadius: "20px", padding: "1.25rem" }}>
                <strong style={{ color: "var(--primary)", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="rgba(184,135,45,0.1)" stroke="var(--primary)" strokeWidth="1.5"/><path d="M9 12l2 2 4-4"/></svg>
                  Shipping Info
                </strong>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "var(--text-soft)", lineHeight: "1.6" }}>Freshly packed and dispatched quickly with secure packaging and delivery updates.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container" style={{ padding: 0 }}>
            <div className="section-heading">
              <div>
                <div className="eyebrow">Related Products</div>
                <h2>Customers also explore</h2>
              </div>
            </div>
            <div className="product-grid">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
