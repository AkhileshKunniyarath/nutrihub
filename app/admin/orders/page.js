import { AdminTable } from "@/components/admin-table";
import { recentOrders } from "@/lib/mock-data";

export default function AdminOrdersPage() {
  return (
    <section className="admin-page">
      <div className="eyebrow">Order Management</div>
      <h1>Track fulfillment, payment, and support</h1>
      <div className="admin-toolbar">
        <button className="ghost-button">Filter Pending</button>
        <button className="ghost-button">Filter COD</button>
        <button className="cta-button">Update Status</button>
      </div>
      <AdminTable
        columns={[
          { key: "id", label: "Order ID" },
          { key: "customer", label: "Customer" },
          { key: "payment", label: "Payment" },
          { key: "status", label: "Delivery" },
          { key: "total", label: "Amount" }
        ]}
        rows={recentOrders}
      />
    </section>
  );
}
