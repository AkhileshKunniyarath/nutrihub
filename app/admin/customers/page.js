import { AdminTable } from "@/components/admin-table";

const customers = [
  { name: "Riya Sharma", email: "riya@example.com", orders: "7", status: "Active" },
  { name: "Farhan Ali", email: "farhan@example.com", orders: "3", status: "Returning" },
  { name: "Naina R", email: "naina@example.com", orders: "1", status: "New" }
];

export default function AdminCustomersPage() {
  return (
    <section className="admin-page">
      <div className="eyebrow">Customer Management</div>
      <h1>Customers, order history, and retention signals</h1>
      <AdminTable
        columns={[
          { key: "name", label: "Customer" },
          { key: "email", label: "Email" },
          { key: "orders", label: "Orders" },
          { key: "status", label: "Status" }
        ]}
        rows={customers}
      />
    </section>
  );
}
