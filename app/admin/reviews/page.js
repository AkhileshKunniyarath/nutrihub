import { AdminTable } from "@/components/admin-table";
import { reviews } from "@/lib/mock-data";

export default function AdminReviewsPage() {
  const rows = reviews.map((review) => ({
    name: review.name,
    location: review.location,
    title: review.title,
    rating: `${review.rating}/5`
  }));

  return (
    <section className="admin-page">
      <div className="eyebrow">Review Management</div>
      <h1>Moderate testimonials and trust signals</h1>
      <AdminTable
        columns={[
          { key: "name", label: "Customer" },
          { key: "location", label: "Location" },
          { key: "title", label: "Review Title" },
          { key: "rating", label: "Rating" }
        ]}
        rows={rows}
      />
    </section>
  );
}
