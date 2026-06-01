import { AdminTable } from "@/components/admin-table";
import { StatCard } from "@/components/stat-card";
import { adminStats, recentOrders } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  return (
    <section className="admin-page">
      <div className="eyebrow">Admin Dashboard</div>
      <h1>Store performance at a glance</h1>
      <p className="lead">
        Dashboard modules for orders, revenue, stock alerts, and recent customer activity.
      </p>
      <div className="admin-grid" style={{ marginTop: "1.5rem" }}>
        {adminStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <AdminTable
          columns={[
            { key: "id", label: "Order ID" },
            { key: "customer", label: "Customer" },
            { key: "total", label: "Total" },
            { key: "payment", label: "Payment" },
            { key: "status", label: "Status" }
          ]}
          rows={recentOrders}
        />
      </div>
    </section>
  );
}
