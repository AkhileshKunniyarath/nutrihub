import Link from "next/link";

export const metadata = {
  title: "My Account",
  description: "Profile, wishlist, saved addresses, and order access."
};

export default function AccountPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">My Account</div>
          <h1>Profile, wishlist, and saved details</h1>
          <p className="lead">
            This account area is structured for authentication, order lookup, wishlist access, addresses, and logout.
          </p>
        </div>
        <div className="info-grid" style={{ marginTop: "1.5rem" }}>
          <article className="content-block">
            <h2>Profile</h2>
            <p>Name, email, phone, and login state will be powered by NextAuth or JWT-backed flows.</p>
          </article>
          <article className="content-block" id="wishlist">
            <h2>Wishlist</h2>
            <p>Saved products sync across devices and feed remarketing or re-engagement workflows.</p>
          </article>
          <article className="content-block">
            <h2>Saved addresses</h2>
            <p>Store default delivery addresses for a faster repeat checkout experience.</p>
          </article>
        </div>
        <div className="action-row" style={{ marginTop: "1.5rem" }}>
          <Link className="pill-button" href="/account/orders">
            View Orders
          </Link>
          <Link className="ghost-button" href="/wishlist">
            Open Wishlist
          </Link>
          <button className="ghost-button">Logout</button>
        </div>
      </div>
    </section>
  );
}
