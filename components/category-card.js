import Link from "next/link";
import { products } from "@/lib/mock-data";

export function CategoryCard({ category }) {
  const productCount = products.filter((product) => product.categorySlug === category.slug).length;

  return (
    <article className="category-card scroll-3d">
      <div className="category-image-wrap">
        <img src={category.image} alt={category.name} />
        <div className="category-image-tint" />
        <div className="category-image-meta">
          <span className="category-image-pill">Curated Wellness</span>
          <span className="category-image-count">{productCount} blends</span>
        </div>
      </div>
      <div className="category-card-copy">
        <div className="category-card-head">
          <span className="micro-label">Signature Category</span>
          <span className="category-card-dot" aria-hidden="true" />
          <span className="category-card-meta">{category.name.split(" ")[0]} focus</span>
        </div>
        <h3>{category.name}</h3>
        <p className="meta-copy">{category.description}</p>
        <div className="category-card-footer">
          <Link className="card-action-button" href={`/category/${category.slug}`}>
            <span>Explore Category</span>
            <span className="card-action-button-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M4.2 10h11.1M10.8 4.7 16 10l-5.2 5.3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
