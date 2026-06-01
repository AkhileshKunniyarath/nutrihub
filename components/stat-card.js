export function StatCard({ label, value, detail }) {
  return (
    <article className="stat-card">
      <span className="muted">{label}</span>
      <strong>{value}</strong>
      <p className="meta-copy">{detail}</p>
    </article>
  );
}
