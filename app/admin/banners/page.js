export default function AdminBannersPage() {
  return (
    <section className="admin-page">
      <div className="eyebrow">Banner Management</div>
      <h1>Hero banners, offer strips, and campaign blocks</h1>
      <div className="info-grid" style={{ marginTop: "1.5rem" }}>
        <article className="admin-card">
          <h2>Top offer bar</h2>
          <p className="meta-copy">Update promotional copy and seasonal announcements.</p>
        </article>
        <article className="admin-card">
          <h2>Homepage hero</h2>
          <p className="meta-copy">Manage lifestyle imagery, CTA links, and premium launch banners.</p>
        </article>
        <article className="admin-card">
          <h2>Offer campaigns</h2>
          <p className="meta-copy">Create limited-time conversion moments without changing code.</p>
        </article>
      </div>
    </section>
  );
}
