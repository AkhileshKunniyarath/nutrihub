import { ProductCatalog } from "@/components/product-catalog";
import { products, categories } from "@/lib/mock-data";

export const metadata = {
  title: "Shop Botanical Blends | NutriFab Naturals",
  description: "Discover our complete collection of single-origin herbal mixtures, crafted to bring purity, health, and a quieter sense of luxury to your daily routines."
};

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="container animate-fade-in-up">
        <div className="page-hero" style={{ marginBottom: "2.5rem" }}>
          <div className="eyebrow">All Blends</div>
          <h1>Shop Botanical Blends</h1>
          <p className="lead" style={{ fontSize: "1.1rem" }}>
            Discover our complete collection of single-origin herbal mixtures, crafted to bring purity, health, and a quieter sense of luxury to your daily routines.
          </p>
        </div>
        
        <ProductCatalog initialProducts={products} categories={categories} />
      </div>
    </section>
  );
}
