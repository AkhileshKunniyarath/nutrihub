import Link from "next/link";

export function CategoryCard({ category }) {
  return (
    <article className="category-card scroll-3d">
      <div className="category-image-wrap">
        <img src={category.image} alt={category.name} />
        <div className="category-image-tint" />
      </div>
      <div className="category-card-copy">
        <span className="micro-label">Signature Category</span>
        <h3>{category.name}</h3>
        <p className="meta-copy">{category.description}</p>
        <Link className="pill-button" href={`/category/${category.slug}`}>
          Explore Category
        </Link>
      </div>
    </article>
  );
}
