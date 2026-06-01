import { AdminTable } from "@/components/admin-table";
import { categories } from "@/lib/mock-data";

export default function AdminCategoriesPage() {
  return (
    <section className="admin-page">
      <div className="eyebrow">Category Management</div>
      <h1>Manage category imagery and SEO content</h1>
      <div className="admin-toolbar">
        <button className="cta-button">Add Category</button>
        <button className="ghost-button">Edit SEO Content</button>
      </div>
      <AdminTable
        columns={[
          { key: "name", label: "Category" },
          { key: "slug", label: "Slug" },
          { key: "description", label: "Description" }
        ]}
        rows={categories}
      />
    </section>
  );
}
