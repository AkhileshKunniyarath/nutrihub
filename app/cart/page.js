import Link from "next/link";
import { products } from "@/lib/mock-data";

const cartItems = products.slice(0, 2);
const subtotal = cartItems.reduce((sum, item) => sum + item.offerPrice, 0);

export const metadata = {
  title: "Cart",
  description: "Cart summary with quantity updates, coupon entry, and checkout CTA."
};

export default function CartPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">Cart</div>
          <h1>Your cart</h1>
          <p className="lead">
            Quantity controls, remove actions, coupon support, price summary, and a clear next step to checkout.
          </p>
        </div>
        <div className="checkout-grid" style={{ marginTop: "1.5rem" }}>
          <div className="content-block">
            <div className="cart-stack">
              {cartItems.map((item) => (
                <div className="cart-row" key={item.id}>
                  <div>
                    <span className="micro-label">Premium Cart Item</span>
                    <strong>{item.name}</strong>
                    <p className="meta-copy">{item.shortDescription}</p>
                  </div>
                  <div className="action-row">
                    <select className="cart-qty-select" defaultValue="1">
                      <option value="1">Qty 1</option>
                      <option value="2">Qty 2</option>
                      <option value="3">Qty 3</option>
                    </select>
                    <strong>Rs {item.offerPrice}</strong>
                    <button className="ghost-button">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="content-block">
            <h2>Order summary</h2>
            <div className="detail-list">
              <div className="price-row">
                <span>Subtotal</span>
                <strong>Rs {subtotal}</strong>
              </div>
              <div className="price-row">
                <span>Discount</span>
                <strong>Rs 150</strong>
              </div>
              <div className="price-row">
                <span>Shipping</span>
                <strong>Free</strong>
              </div>
              <div className="filter-bar">
                <input placeholder="Coupon code" />
                <button className="ghost-button">Apply</button>
              </div>
              <div className="price-row">
                <span>Total</span>
                <strong>Rs {subtotal - 150}</strong>
              </div>
            </div>
            <Link className="cta-button" href="/checkout" style={{ width: "100%", padding: "1rem", fontSize: "1.05rem" }}>
              Proceed to Secure Checkout
            </Link>
            <a
              className="pill-button"
              href="https://wa.me/6282774392?text=Hi%20NutriFab%2C%20I%20would%20like%20to%20place%20my%20cart%20order%20via%20WhatsApp."
              rel="noreferrer"
              style={{ display: "inline-flex", width: "100%", marginTop: "0.75rem", padding: "1rem", fontSize: "1.05rem" }}
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
