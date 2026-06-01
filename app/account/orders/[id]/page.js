import Link from "next/link";

export async function generateMetadata({ params }) {
  return {
    title: `Order ${params.id}`,
    description: `Details for NutriFab order ${params.id}.`
  };
}

export default function OrderDetailsPage({ params }) {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">Order Details</div>
          <h1>{params.id}</h1>
          <p className="lead">
            This detail view is ready for live fulfillment status, payment updates, delivery tracking, and invoice download.
          </p>
          <div className="detail-panel">
            <span className="nav-chip">Packed</span>
            <span className="nav-chip">Paid</span>
            <span className="nav-chip">Delivery in 2 days</span>
          </div>
        </div>
        <div className="checkout-grid" style={{ marginTop: "1.5rem" }}>
          <article className="content-block">
            <h2>Products</h2>
            <div className="detail-list">
              <div>
                <strong>Golden Moringa Blend x1</strong>
                <p>Premium natural wellness blend, freshly packed.</p>
              </div>
              <div>
                <strong>Payment status</strong>
                <p>Paid through Razorpay</p>
              </div>
              <div>
                <strong>Delivery details</strong>
                <p>Bengaluru, Karnataka | Dispatch confirmed | Tracking integration ready</p>
              </div>
            </div>
          </article>
          <article className="content-block">
            <h2>Order summary</h2>
            <div className="detail-list">
              <div className="price-row">
                <span>Subtotal</span>
                <strong>Rs 749</strong>
              </div>
              <div className="price-row">
                <span>Shipping</span>
                <strong>Free</strong>
              </div>
              <div className="price-row">
                <span>Total</span>
                <strong>Rs 749</strong>
              </div>
            </div>
            <div className="action-row" style={{ marginTop: "1rem" }}>
              <button className="cta-button">Download Invoice</button>
              <Link className="ghost-button" href="/account/orders">
                Back to Orders
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
