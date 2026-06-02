import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { StarRating } from "@/components/star-rating";
import { WishlistToggle } from "@/components/wishlist-toggle";
import { buildBreadcrumbSchema, buildProductMetadata, buildProductSchema } from "@/lib/seo";
import { categories, getProductBySlug, products } from "@/lib/mock-data";

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
  const category = categories.find((item) => item.slug === product.categorySlug);
  const galleryImages = [
    {
      src: product.image,
      alt: `${product.name} signature product image`,
      label: "Signature view"
    },
    category
      ? {
          src: category.image,
          alt: `${category.name} lifestyle image`,
          label: `${category.name} ritual`
        }
      : null,
    ...relatedProducts.slice(0, 2).map((item, index) => ({
      src: item.image,
      alt: `${item.name} complementary product image`,
      label: index === 0 ? "Pairs well with" : "Customer favorite"
    }))
  ]
    .filter(Boolean)
    .filter((image, index, items) => items.findIndex((item) => item.src === image.src) === index);
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
            <div className="detail-media-panel">
              <img className="feature-image detail-feature-image" src={product.image} alt={product.name} />
              <div className="detail-gallery">
                <div className="detail-gallery-head">
                  <span className="micro-label">More Product Views</span>
                  <span className="detail-gallery-note">{Math.max(galleryImages.length - 1, 0)} additional images</span>
                </div>
                <div className="detail-gallery-grid">
                  {galleryImages.slice(1).map((image) => (
                    <figure className="detail-gallery-card" key={image.src}>
                      <img className="detail-gallery-image" src={image.src} alt={image.alt} />
                      <figcaption className="detail-gallery-caption">
                        <span className="detail-gallery-caption-kicker">More to Explore</span>
                        <strong>{image.label}</strong>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="content-block">
            <span className="tag">{product.badge}</span>
            <h1>{product.name}</h1>
            <p className="lead">{product.description}</p>
            <div className="price-row">
              <div>
                <strong>Rs {product.offerPrice}</strong>
                <span className="price-compare">Rs {product.price}</span>
              </div>
              <span className="muted">{product.stock} in stock</span>
            </div>
            <div className="detail-panel detail-rating-panel">
              <div className="detail-rating-card">
                <StarRating reviewCount={product.reviews} size="lg" value={product.rating} />
                <span className="detail-rating-copy">Verified customer rating</span>
              </div>
              <span className="nav-chip">Customer favorite</span>
              <span className="nav-chip">Wishlist enabled</span>
            </div>
            <div className="filter-bar">
              <select defaultValue="1">
                <option value="1">Qty 1</option>
                <option value="2">Qty 2</option>
                <option value="3">Qty 3</option>
              </select>
              <Link className="detail-action-button detail-action-button-primary" href="/cart">
                <span>Add to Cart</span>
                <span className="detail-action-button-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M3.8 5.6h11.3l-1.05 5.66a1.2 1.2 0 0 1-1.18.98H7.42a1.2 1.2 0 0 1-1.18-.96L5.15 5.6Zm0 0-.37-1.64A1.2 1.2 0 0 0 2.24 3H1.2M7.8 16.2a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm5.1 0a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                  </svg>
                </span>
              </Link>
              <Link className="detail-action-button detail-action-button-success" href="/checkout">
                <span>Buy Now</span>
                <span className="detail-action-button-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M4.2 10h11.1M10.8 4.7 16 10l-5.2 5.3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                  </svg>
                </span>
              </Link>
              <WishlistToggle productId={product.id} productName={product.name} variant="button" />
              <a
                className="detail-action-button detail-action-button-light"
                href={`https://wa.me/6282774392?text=Hi%20NutriFab%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(product.name)}.`}
                rel="noreferrer"
                target="_blank"
              >
                <span>WhatsApp Enquiry</span>
                <span className="detail-action-button-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.96 3.2a6.8 6.8 0 0 0-5.88 10.2L3.06 16.8l3.5-.91a6.82 6.82 0 1 0 3.4-12.69Zm0 12.42a5.56 5.56 0 0 1-2.98-.86l-.22-.13-1.8.47.48-1.74-.14-.21a5.62 5.62 0 1 1 4.66 2.47Zm3-3.82c-.17-.08-.98-.47-1.13-.53-.15-.05-.25-.08-.37.08-.1.16-.43.53-.53.63-.1.12-.2.13-.36.05-.17-.08-.71-.26-1.34-.84-.5-.45-.82-.99-.92-1.16-.1-.17-.01-.25.07-.34.08-.07.16-.18.24-.27.08-.1.1-.16.15-.27.06-.1.03-.21-.01-.29-.04-.08-.37-.9-.5-1.22-.14-.32-.28-.28-.38-.28h-.31c-.12 0-.29.04-.44.2-.14.16-.56.55-.56 1.36 0 .8.57 1.56.65 1.66.08.11 1.12 1.72 2.77 2.42.39.17.7.28.94.36.4.12.75.11 1.02.07.32-.05.98-.4 1.12-.78.14-.37.14-.7.1-.78-.03-.06-.14-.1-.31-.18Z" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="detail-list detail-list-compact" style={{ marginTop: "1.35rem" }}>
              <div className="detail-info-card">
                <strong className="detail-info-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="rgba(184,135,45,0.1)" stroke="var(--primary)" strokeWidth="1.5"/><path d="M9 12l2 2 4-4"/></svg>
                  Ingredients
                </strong>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "var(--text-soft)", lineHeight: "1.6" }}>{product.ingredients.join(", ")}</p>
              </div>
              <div className="detail-info-card">
                <strong className="detail-info-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="rgba(184,135,45,0.1)" stroke="var(--primary)" strokeWidth="1.5"/><path d="M9 12l2 2 4-4"/></svg>
                  Benefits
                </strong>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "var(--text-soft)", lineHeight: "1.6" }}>{product.benefits.join(" • ")}</p>
              </div>
              <div className="detail-info-card">
                <strong className="detail-info-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="rgba(184,135,45,0.1)" stroke="var(--primary)" strokeWidth="1.5"/><path d="M9 12l2 2 4-4"/></svg>
                  How to Use
                </strong>
                <p style={{ margin: 0, fontSize: "0.98rem", color: "var(--text-soft)", lineHeight: "1.6" }}>{product.howToUse}</p>
              </div>
              <div className="detail-info-card">
                <strong className="detail-info-title">
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
