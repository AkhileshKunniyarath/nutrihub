import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { ReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Scroll3D } from "@/components/scroll-3d";
import { categories, homepageCollections, products, reviews } from "@/lib/mock-data";

const featuredProducts = products.filter((product) => product.featured);
const bestSellers = products.filter((product) => product.bestSeller);
const instagramImages = products.slice(0, 4);
const trustPoints = [
  {
    title: "100% Natural",
    text: "Ingredient-first blends with clean sourcing and wellness-forward presentation."
  },
  {
    title: "Freshly Packed",
    text: "Packed with care to preserve quality, freshness, and everyday confidence."
  },
  {
    title: "Premium Quality",
    text: "A richer, more elevated brand feel than typical commodity wellness stores."
  },
  {
    title: "Secure Checkout",
    text: "Razorpay, COD, WhatsApp support, and trust-led buying journeys."
  }
];

const trustIcons = {
  "100% Natural": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
      <path d="M12 22C12 22 20 18 20 12C20 6 16 4 12 2C8 4 4 6 4 12C4 18 12 22 12 22Z" fill="rgba(184, 135, 45, 0.12)" />
      <path d="M12 2V22" />
      <path d="M12 8C14 9 17 9 17 9" />
      <path d="M12 12C10 13 7 13 7 13" />
    </svg>
  ),
  "Freshly Packed": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="rgba(184, 135, 45, 0.12)" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  ),
  "Premium Quality": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" fill="rgba(184, 135, 45, 0.12)" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  ),
  "Secure Checkout": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="rgba(184, 135, 45, 0.12)" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
};

const benefitStrip = [
  "No Artificial Additives",
  "Rich in Nutrients",
  "Hygienically Packed",
  "Quality Checked"
];

const heroHighlights = [
  "Single-origin ingredient sourcing",
  "Premium packaging and presentation",
  "Designed for repeat purchase confidence"
];

const editorialNotes = [
  {
    title: "Everyday rituals",
    text: "Built for routines that feel calm, premium, and easy to repeat."
  },
  {
    title: "Ingredient clarity",
    text: "Benefits, ingredients, and usage are merchandised with more elegance and trust."
  }
];

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <Scroll3D />
      <section className="hero">
        <div className="container hero-shell animate-fade-in-up">
          <div className="hero-grid">
            <div className="hero-copy" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="hero-kicker-row" style={{ marginBottom: "1rem" }}>
                  <div className="eyebrow" style={{ letterSpacing: "0.15em" }}>Premium Natural Wellness</div>
                  <span className="hero-kicker-line" />
                  <span className="micro-label" style={{ letterSpacing: "0.1em" }}>NutriFab Signature</span>
                </div>
                <h1 style={{ lineHeight: "1.1", marginBottom: "1.5rem" }}>
                  Wellness designed with a quieter sense of <span className="text-gradient-gold">luxury</span>.
                </h1>
                <p className="lead" style={{ fontSize: "1.15rem", marginBottom: "2rem" }}>
                  NutriFab Naturals brings together clean ingredients, elevated presentation,
                  and thoughtful product storytelling so every purchase feels more refined,
                  trustworthy, and gift-worthy.
                </p>
                <div className="action-row hero-actions" style={{ marginBottom: "2rem" }}>
                  <Link className="cta-button" href="/products" style={{ padding: "0.95rem 2rem", fontSize: "1.05rem" }}>
                    Shop Signature Picks
                  </Link>
                  <Link className="ghost-button" href="/best-sellers" style={{ padding: "0.95rem 2rem", fontSize: "1.05rem" }}>
                    Discover Best Sellers
                  </Link>
                </div>
              </div>

              <div>
                <div className="hero-proof-list" style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", marginBottom: "2rem" }}>
                  {heroHighlights.map((item) => (
                    <div className="hero-proof-item" key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <path d="M12 22C12 22 20 18 20 12C20 6 16 4 12 2C8 4 4 6 4 12C4 18 12 22 12 22Z" fill="rgba(184, 135, 45, 0.1)" strokeWidth="1.5" />
                        <path d="M12 2V22" strokeWidth="1.5" />
                        <path d="M12 8C14 9 17 9 17 9" strokeWidth="1" />
                        <path d="M12 12C10 13 7 13 7 13" strokeWidth="1" />
                        <path d="M12 16C14 17 17 17 17 17" strokeWidth="1" />
                      </svg>
                      <span style={{ fontWeight: "500", color: "var(--text-soft)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="hero-stats" style={{ gridGap: "1.5rem" }}>
                  <div className="metric" style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(10px)", border: "1px solid var(--border)" }}>
                    <strong style={{ fontSize: "1.8rem" }}>24h</strong>
                    <span className="muted" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>fresh dispatch rhythm</span>
                  </div>
                  <div className="metric" style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(10px)", border: "1px solid var(--border)" }}>
                    <strong style={{ fontSize: "1.8rem" }}>98%</strong>
                    <span className="muted" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>repeat order confidence</span>
                  </div>
                  <div className="metric" style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(10px)", border: "1px solid var(--border)" }}>
                    <strong style={{ fontSize: "1.8rem" }}>4.8/5</strong>
                    <span className="muted" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>customer rating</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-panel" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="hero-visual scroll-3d-container" style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.85), rgba(242,234,225,0.85))", border: "1px solid var(--border)", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="hero-orb hero-orb-top" style={{ filter: "blur(20px)", opacity: 0.7 }} />
                <div className="hero-orb hero-orb-bottom" style={{ filter: "blur(20px)", opacity: 0.7 }} />
                
                {/* Main Product Display Card */}
                <div className="scroll-3d" style={{ zIndex: 5 }}>
                  <div className="hero-product hero-product-main animate-float" style={{ border: "1px solid rgba(184, 135, 45, 0.25)", background: "#ffffff", padding: "1.25rem", borderRadius: "28px", boxShadow: "var(--shadow-strong)", position: "relative", maxWidth: "340px" }}>
                    <img src={featuredProducts[0].image} alt={featuredProducts[0].name} style={{ borderRadius: "20px", marginBottom: "1rem" }} />
                    <span className="tag tag-green" style={{ marginBottom: "0.5rem" }}>Featured Release</span>
                    <h3 style={{ fontSize: "1.4rem", margin: "0.25rem 0 0.5rem" }}>{featuredProducts[0].name}</h3>
                    <p className="meta-copy" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>{featuredProducts[0].shortDescription}</p>
                    <div className="price-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <strong style={{ fontSize: "1.3rem", color: "var(--primary)" }}>Rs {featuredProducts[0].offerPrice}</strong>
                        <span style={{ fontSize: "0.95rem", textDecoration: "line-through", marginLeft: "0.5rem", color: "var(--text-muted)" }}>Rs {featuredProducts[0].price}</span>
                      </div>
                      <Link href={`/products/${featuredProducts[0].slug}`} className="cta-button" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem", minHeight: "36px" }}>
                        Shop
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="floating-card floating-card-left" style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)", border: "1px solid var(--border)", zIndex: 10 }}>
                  <span className="tag tag-green">Freshly Packed</span>
                  <strong>Daily Nourishment</strong>
                </div>
                <div className="floating-card floating-card-right" style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)", border: "1px solid var(--border)", zIndex: 10 }}>
                  <span className="tag">Premium Pick</span>
                  <strong>Natural Ingredients</strong>
                </div>
              </div>
              <div className="editorial-note-grid" style={{ gridGap: "1.5rem" }}>
                {editorialNotes.map((note) => (
                  <article className="editorial-note" key={note.title} style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(8px)", border: "1px solid var(--border)", borderRadius: "22px", padding: "1.4rem" }}>
                    <span className="micro-label" style={{ color: "var(--primary)", letterSpacing: "0.15em", display: "block", marginBottom: "0.5rem" }}>{note.title}</span>
                    <p className="meta-copy" style={{ fontSize: "0.95rem", margin: 0, lineHeight: "1.6" }}>{note.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-below-strip" style={{ marginTop: "2rem", gridGap: "1.5rem" }}>
            <div className="hero-below-card" style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(6px)", border: "1px solid var(--border)", borderRadius: "24px" }}>
              <span className="micro-label" style={{ color: "var(--primary)", letterSpacing: "0.1em" }}>Elevated Shopping</span>
              <p className="meta-copy" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>From category discovery to checkout, the experience is built to feel quieter, warmer, and more premium.</p>
            </div>
            <div className="hero-below-card" style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(6px)", border: "1px solid var(--border)", borderRadius: "24px" }}>
              <span className="micro-label" style={{ color: "var(--primary)", letterSpacing: "0.1em" }}>Natural Trust Signals</span>
              <p className="meta-copy" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>Benefits, sourcing cues, and supportive content help the site sell with confidence instead of clutter.</p>
            </div>
            <div className="hero-below-card" style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(6px)", border: "1px solid var(--border)", borderRadius: "24px" }}>
              <span className="micro-label" style={{ color: "var(--primary)", letterSpacing: "0.1em" }}>Made for Instagram Traffic</span>
              <p className="meta-copy" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>Mobile-first visual hierarchy keeps the storefront elegant while still converting social traffic efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-shell reveal" id="categories">
        <div className="container">
          <SectionHeading
            eyebrow="Curated Collections"
            title="Explore our curated wellness worlds"
            description="Mindfully crafted categories designed to target your specific wellness goals with raw botanical purity."
            action={
              <Link className="ghost-button" href="/products">
                View Catalog
              </Link>
            }
          />
          <div className="category-grid scroll-3d-container">
            {categories.map((category) => (
              <CategoryCard category={category} key={category.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell-tinted reveal">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Natural Picks"
            title="Sourced mindfully, presented with care"
            description="Discover our signature botanical blends, crafted to elevate your daily self-care and nourishment rituals."
          />
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose NutriFab"
            title="Purity and transparency in every blend"
            description="We curate single-origin ingredients to elevate your daily routines with premium, tested quality."
          />
          <div className="trust-grid">
            {trustPoints.map((point) => (
              <article className="trust-card" key={point.title} style={{ display: "flex", flexDirection: "column", gap: "1rem", borderRadius: "24px", border: "1px solid var(--border)", background: "rgba(255, 255, 255, 0.65)" }}>
                <div style={{ display: "inline-flex", width: "48px", height: "48px", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "rgba(184, 135, 45, 0.08)", color: "var(--primary)" }}>
                  {trustIcons[point.title]}
                </div>
                <h3 style={{ fontSize: "1.35rem", margin: "0.2rem 0 0" }}>{point.title}</h3>
                <p className="meta-copy" style={{ fontSize: "0.95rem", margin: 0 }}>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell-dark reveal" id="best-sellers">
        <div className="container">
          <SectionHeading
            eyebrow="Loved by Our Customers"
            title="Best sellers for your daily wellness"
            description="A handpicked collection of our most popular natural blends, trusted for consistent results and quality."
          />
          <div className="product-slider">
            {bestSellers.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          {homepageCollections.map((collection) => (
            <article className="content-block collection-banner" key={collection.title} style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(242,234,225,0.7))", border: "1px solid var(--border)", borderRadius: "28px", padding: "2.5rem" }}>
              <div>
                <span className="tag" style={{ marginBottom: "0.75rem" }}>Rituals By Concern</span>
                <h2 style={{ fontSize: "2.2rem", margin: "0 0 0.5rem" }}>Shop by Wellness Need</h2>
                <p style={{ fontSize: "1.05rem", color: "var(--text-soft)" }}>Begin your journey by selecting the benefit your body needs most.</p>
              </div>
              <div className="collection-chip-row" style={{ marginTop: "1.5rem" }}>
                {collection.items.map((item) => (
                  <span className="nav-chip" key={item} style={{ background: "#ffffff", border: "1px solid var(--border)" }}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell reveal">
        <div className="container brand-story-grid">
          <div className="content-block brand-story-image" style={{ borderRadius: "28px", overflow: "hidden", border: "1px solid var(--border)" }}>
            <img src={products[2].image} alt="NutriFab natural lifestyle" className="feature-image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <article className="content-block brand-story-copy" style={{ background: "rgba(255,255,255,0.65)", border: "1px solid var(--border)", borderRadius: "28px", padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span className="tag" style={{ alignSelf: "flex-start", marginBottom: "1rem" }}>Brand Story</span>
            <h2 style={{ fontSize: "2.6rem", lineHeight: "1.1", margin: "0 0 1rem" }}>Rooted in Nature, Crafted for Wellness</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--text-soft)", marginBottom: "2rem" }}>
              NutriFab Naturals brings you carefully selected natural products made for
              everyday health, purity, and taste. The new direction leans into soft contrast,
              generous breathing room, and a more boutique-style approach to wellness retail.
            </p>
            <Link className="pill-button" href="/about" style={{ alignSelf: "flex-start" }}>
              Know Our Story
            </Link>
          </article>
        </div>
      </section>

      <section className="section benefits-strip-section reveal" style={{ background: "rgba(184, 135, 45, 0.04)", borderTop: "1px solid rgba(184, 135, 45, 0.15)", borderBottom: "1px solid rgba(184, 135, 45, 0.15)", padding: "2.2rem 0" }}>
        <div className="container benefit-strip">
          {benefitStrip.map((item) => (
            <div className="benefit-pill" key={item}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DFBA73" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M12 22C12 22 20 18 20 12C20 6 16 4 12 2C8 4 4 6 4 12C4 18 12 22 12 22Z" fill="rgba(223, 186, 115, 0.15)" strokeWidth="1.5" />
                <path d="M9 12l2 2 4-4" strokeWidth="2.5" />
              </svg>
              <strong style={{ fontSize: "0.95rem", fontWeight: "600" }}>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-shell-tinted reveal">
        <div className="container">
          <SectionHeading
            eyebrow="Reviews"
            title="A premium wellness experience, loved by customers"
            description="Read stories of how our single-origin blends fit beautifully into daily self-care routines."
          />
          <div className="product-grid">
            {reviews.map((review) => (
              <ReviewCard review={review} key={review.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container instagram-block">
          <article className="content-block instagram-copy" style={{ background: "rgba(255,255,255,0.65)", border: "1px solid var(--border)", borderRadius: "28px", padding: "3.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span className="tag" style={{ alignSelf: "flex-start", marginBottom: "1rem" }}>Instagram</span>
            <h2 style={{ fontSize: "2.6rem", lineHeight: "1.15", margin: "0 0 1rem" }}>Follow our wellness journey</h2>
            <p className="meta-copy" style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-soft)", marginBottom: "2rem" }}>
              Explore our collection of natural wellness tips, ritual inspiration, and a quieter sense of everyday luxury on social media.
            </p>
            <a
              className="cta-button"
              href="https://www.instagram.com/nutrifab_naturals"
              rel="noreferrer"
              target="_blank"
              style={{ alignSelf: "flex-start" }}
            >
              Follow @nutrifab_naturals
            </a>
          </article>
          <div className="instagram-grid">
            {instagramImages.map((product) => (
              <article className="instagram-tile" key={product.id}>
                <img src={product.image} alt={product.name} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell reveal">
        <div className="container info-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <article className="content-block" style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="tag" style={{ marginBottom: "0.5rem" }}>Newsletter</span>
              <h2>Join our thoughtful brand rhythm</h2>
              <p className="meta-copy" style={{ fontSize: "0.95rem" }}>Subscribe to receive wellness rituals, single-origin sourcing updates, and exclusive signature collection previews.</p>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.5rem" }}>
              <input
                placeholder="Enter your email address"
                style={{
                  flex: "1",
                  border: "1px solid var(--border)",
                  borderRadius: "999px",
                  padding: "0.8rem 1.5rem",
                  background: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.95rem"
                }}
              />
              <button className="cta-button" style={{ padding: "0.8rem 1.8rem" }}>Subscribe</button>
            </div>
          </article>
          <article className="content-block" style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <span className="tag" style={{ marginBottom: "0.5rem" }}>Support</span>
              <h2>Need help choosing?</h2>
              <p className="meta-copy" style={{ fontSize: "0.95rem" }}>
                Our wellness experts are ready to guide you in choosing the perfect natural blends for your daily wellness ritual.
              </p>
            </div>
            <Link className="pill-button" href="/contact" style={{ marginTop: "1.5rem" }}>
              Contact NutriFab Experts
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
