export default function AdminSeoPage() {
  return (
    <section className="admin-page">
      <div className="eyebrow">SEO Management</div>
      <h1>Metadata, schema, canonical tags, and content controls</h1>
      <div className="checkout-card" style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
        <input defaultValue="NutriFab Naturals | Premium Wellness Essentials" />
        <textarea
          defaultValue="Premium natural wellness products with clean ingredients, strong SEO, and polished shopping journeys."
          rows="4"
        />
        <input defaultValue="natural products, premium wellness, NutriFab Naturals" />
        <input defaultValue="https://example.com/og/nutrifab-home.jpg" />
      </div>
    </section>
  );
}
