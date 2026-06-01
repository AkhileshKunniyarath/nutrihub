import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { SectionHeading } from "@/components/section-heading";
import { categories } from "@/lib/mock-data";

export const metadata = {
  title: "Categories",
  description: "Explore NutriFab Naturals categories in a premium, easy-to-browse collection."
};

export default function CategoriesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">Categories</div>
          <h1>Shop wellness by category</h1>
          <p className="lead">
            Discover the full NutriFab assortment through calm, premium collection browsing built for clarity and faster discovery.
          </p>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <SectionHeading
            eyebrow="Curated Collections"
            title="Find the right category for your routine"
            description="Each collection is designed as a clean entry point into a specific wellness need."
            action={
              <Link className="ghost-button" href="/products">
                View All Products
              </Link>
            }
          />
          <div className="category-grid">
            {categories.map((category) => (
              <CategoryCard category={category} key={category.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
