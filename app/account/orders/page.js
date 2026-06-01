import Link from "next/link";

export const metadata = {
  title: "My Orders",
  description: "Order history, status, payment state, delivery tracking, and invoice access."
};

const orders = [
  {
    id: "ORD-10091",
    status: "Packed",
    paymentStatus: "Paid",
    delivery: "Expected in 2 days",
    items: "Golden Moringa Blend x1"
  },
  {
    id: "ORD-10063",
    status: "Delivered",
    paymentStatus: "Paid",
    delivery: "Delivered on May 18",
    items: "Botanical Glow Mix x1"
  }
];

export default function OrdersPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">Orders</div>
          <h1>Track every order in one place</h1>
          <p className="lead">
            Dedicated order-detail support for status, payment, delivery, product summary, and invoice download.
          </p>
        </div>
        <div className="content-block" style={{ marginTop: "1.5rem" }}>
          {orders.map((order) => (
            <div className="account-row" key={order.id}>
              <div>
                <strong>{order.id}</strong>
                <p className="meta-copy">{order.items}</p>
              </div>
              <div className="action-row">
                <span className="nav-chip">{order.status}</span>
                <span className="nav-chip">{order.paymentStatus}</span>
                <span className="muted">{order.delivery}</span>
                <Link className="ghost-button" href={`/account/orders/${order.id}`}>
                  Details
                </Link>
                <button className="ghost-button">Invoice</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
