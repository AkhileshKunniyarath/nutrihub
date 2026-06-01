import { AdminTable } from "@/components/admin-table";

const coupons = [
  { code: "WELCOME10", type: "Percentage", value: "10%", status: "Active" },
  { code: "NATURAL150", type: "Flat", value: "Rs 150", status: "Active" }
];

export default function AdminCouponsPage() {
  return (
    <section className="admin-page">
      <div className="eyebrow">Coupon Management</div>
      <h1>Offers, incentives, and cart-conversion tools</h1>
      <div className="admin-toolbar">
        <button className="cta-button">Create Coupon</button>
      </div>
      <AdminTable
        columns={[
          { key: "code", label: "Code" },
          { key: "type", label: "Type" },
          { key: "value", label: "Value" },
          { key: "status", label: "Status" }
        ]}
        rows={coupons}
      />
    </section>
  );
}
