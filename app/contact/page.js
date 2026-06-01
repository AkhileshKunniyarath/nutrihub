import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: "Contact NutriFab Naturals for support, orders, and product recommendations."
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">Contact Us</div>
          <h1>Need product help or order support?</h1>
          <p className="lead">
            Reach the team by form, WhatsApp, or social. This page is ready for CRM, email, or support integrations.
          </p>
        </div>
        <div className="checkout-grid" style={{ marginTop: "1.5rem" }}>
          <div className="checkout-card" style={{ display: "grid", gap: "1rem" }}>
            <input placeholder="Your name" />
            <input placeholder="Email" />
            <input placeholder="Phone" />
            <textarea rows="5" placeholder="How can we help?" />
            <button className="cta-button">Send Message</button>
          </div>
          <div className="content-block">
            <h2>Direct channels</h2>
            <p>WhatsApp orders, curated recommendations, order updates, and quick escalation all fit here.</p>
            <a
              className="pill-button"
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              Open WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
