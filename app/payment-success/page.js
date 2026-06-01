import Link from "next/link";

export const metadata = {
  title: "Payment Success",
  description: "Payment success confirmation for NutriFab Naturals."
};

export default function PaymentSuccessPage() {
  return (
    <section className="section">
      <div className="container">
        <article className="page-hero">
          <div className="eyebrow">Payment Success</div>
          <h1>Your order is confirmed</h1>
          <p className="lead">
            Payment was successful. We’ll send order updates, delivery details, and support options next.
          </p>
          <div className="action-row">
            <Link className="cta-button" href="/account/orders">
              View My Orders
            </Link>
            <Link className="ghost-button" href="/products">
              Continue Shopping
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
