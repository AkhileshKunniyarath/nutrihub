export const metadata = {
  title: "Checkout",
  description: "Guest or logged-in checkout with address, delivery, payment, and order summary."
};

export default function CheckoutPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">Checkout</div>
          <h1>Fast checkout built for conversion</h1>
          <p className="lead">
            Guest checkout, address capture, delivery preferences, Razorpay or COD, and a clean summary panel.
          </p>
        </div>
        <div className="checkout-grid" style={{ marginTop: "1.5rem" }}>
          <div className="checkout-card" style={{ display: "grid", gap: "1rem" }}>
            <input placeholder="Full name" />
            <input placeholder="Email address" />
            <input placeholder="Phone number" />
            <textarea placeholder="Delivery address" rows="4" />
            <div className="action-row">
              <select defaultValue="standard">
                <option value="standard">Standard Delivery</option>
                <option value="express">Express Delivery</option>
              </select>
              <select defaultValue="razorpay">
                <option value="razorpay">Razorpay</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>
          </div>
          <div className="content-block">
            <h2>Order summary</h2>
            <div className="detail-list">
              <div className="price-row">
                <span>Golden Moringa Blend</span>
                <strong>Rs 749</strong>
              </div>
              <div className="price-row">
                <span>Shipping</span>
                <strong>Free</strong>
              </div>
              <div className="price-row">
                <span>Total payable</span>
                <strong>Rs 749</strong>
              </div>
            </div>
            <button className="cta-button" style={{ width: "100%", padding: "1rem", fontSize: "1.05rem" }}>
              Pay Securely with Razorpay
            </button>
            <button className="ghost-button" style={{ width: "100%", marginTop: "0.75rem", padding: "1rem", fontSize: "1.05rem" }}>
              Confirm Cash on Delivery
            </button>
            <a
              className="pill-button"
              href="https://wa.me/6282774392?text=Hi%20NutriFab%2C%20I%20want%20to%20place%20an%20order%20via%20WhatsApp."
              rel="noreferrer"
              style={{ width: "100%", marginTop: "0.75rem", padding: "1rem", fontSize: "1.05rem" }}
              target="_blank"
            >
              Order via WhatsApp
            </a>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem", color: "var(--text-soft)", fontSize: "0.85rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--leaf)" }}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="rgba(99, 124, 98, 0.1)" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>SSL Secure 256-Bit checkout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
