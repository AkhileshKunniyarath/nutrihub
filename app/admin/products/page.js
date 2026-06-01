import { AdminTable } from "@/components/admin-table";
import { products } from "@/lib/mock-data";

export default function AdminProductsPage() {
  const rows = products.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.categorySlug,
    price: `Rs ${product.offerPrice}`,
    stock: product.stock
  }));

  return (
    <section className="admin-page">
      <div className="eyebrow">Product Management</div>
      <h1>Products, pricing, stock, and SEO</h1>
      <div className="admin-toolbar">
        <button className="cta-button">Add Product</button>
        <button className="ghost-button">Bulk Upload Images</button>
        <button className="ghost-button">Export SKU List</button>
      </div>
      <AdminTable
        columns={[
          { key: "id", label: "ID" },
          { key: "name", label: "Product" },
          { key: "category", label: "Category" },
          { key: "price", label: "Offer Price" },
          { key: "stock", label: "Stock" }
        ]}
        rows={rows}
      />
    </section>
  );
}
