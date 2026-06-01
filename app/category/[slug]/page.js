import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { buildBreadcrumbSchema, buildCategoryMetadata } from "@/lib/seo";
import { categories, getCategoryBySlug, getProductsByCategory } from "@/lib/mock-data";

export async function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return {};
  }

  return buildCategoryMetadata(category);
}

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default function CategoryPage({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(params.slug);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: category.name, href: `/category/${category.slug}` }
  ]);

  return (
    <section className="section">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <div className="page-hero">
          <div className="detail-grid">
            <img className="feature-image" src={category.image} alt={category.name} />
            <div>
              <div className="eyebrow">Category Page</div>
              <h1>{category.name}</h1>
              <p className="lead">{category.description}</p>
              <div className="detail-panel">
                <span className="nav-chip">{categoryProducts.length} products</span>
                <span className="nav-chip">SEO content ready</span>
                <span className="nav-chip">Filterable grid</span>
              </div>
            </div>
          </div>
        </div>
        <div className="product-grid" style={{ marginTop: "1.5rem" }}>
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <article className="content-block" style={{ marginTop: "1.5rem" }}>
          <span className="tag">SEO Section</span>
          <h2>Search-friendly category storytelling</h2>
          <p>
            This block is reserved for keyword-aware category copy, FAQs, and internal links so
            each collection page can rank beyond pure product listings.
          </p>
        </article>
      </div>
    </section>
  );
}
