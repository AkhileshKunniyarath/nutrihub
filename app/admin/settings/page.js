export default function AdminSettingsPage() {
  return (
    <section className="admin-page">
      <div className="eyebrow">Website Settings</div>
      <h1>Brand-level controls and global store preferences</h1>
      <div className="checkout-card" style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
        <input defaultValue="NutriFab Naturals" />
        <input defaultValue="support@nutrifabnaturals.com" />
        <input defaultValue="6282774392" />
        <input defaultValue="https://www.instagram.com/nutrifab_naturals" />
      </div>
    </section>
  );
}
