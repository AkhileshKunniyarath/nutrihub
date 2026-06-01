export const metadata = {
  title: "Admin Login",
  description: "Admin login for the NutriFab control center."
};

export default function AdminLoginPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="checkout-grid">
          <article className="page-hero">
            <div className="eyebrow">Admin Login</div>
            <h1>Access the NutriFab control center</h1>
            <p className="lead">Manage products, orders, content, customers, and SEO from one place.</p>
          </article>
          <form className="checkout-card" style={{ display: "grid", gap: "1rem" }}>
            <input placeholder="Admin email" type="email" />
            <input placeholder="Password" type="password" />
            <button className="cta-button" type="submit">
              Login to Admin
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
