export default function AdminHomepagePage() {
  return (
    <section className="admin-page">
      <div className="eyebrow">Homepage CMS</div>
      <h1>Control banners, featured products, reviews, and Instagram blocks</h1>
      <div className="info-grid" style={{ marginTop: "1.5rem" }}>
        <article className="admin-card">
          <h2>Hero banners</h2>
          <p className="meta-copy">Schedule seasonal offers, product launches, and CTA destination links.</p>
        </article>
        <article className="admin-card">
          <h2>Featured products</h2>
          <p className="meta-copy">Pin hero SKUs, best sellers, and promotional collections.</p>
        </article>
        <article className="admin-card">
          <h2>Testimonials</h2>
          <p className="meta-copy">Approve reviews and surface trust-building highlights on the home page.</p>
        </article>
      </div>
    </section>
  );
}
