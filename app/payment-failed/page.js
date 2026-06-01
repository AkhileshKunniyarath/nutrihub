import Link from "next/link";

export const metadata = {
  title: "Payment Failed",
  description: "Payment failure recovery page for NutriFab Naturals."
};

export default function PaymentFailedPage() {
  return (
    <section className="section">
      <div className="container">
        <article className="page-hero">
          <div className="eyebrow">Payment Failed</div>
          <h1>Your payment did not go through</h1>
          <p className="lead">
            The order is still recoverable. Try Razorpay again, switch to COD, or finish the order through WhatsApp.
          </p>
          <div className="action-row">
            <Link className="cta-button" href="/checkout">
              Try Again
            </Link>
            <a
              className="pill-button"
              href="https://wa.me/6282774392?text=Hi%20NutriFab%2C%20my%20payment%20failed%20and%20I%20need%20help%20placing%20the%20order."
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp Help
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
