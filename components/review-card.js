import { StarRating } from "@/components/star-rating";

export function ReviewCard({ review }) {
  return (
    <article className="review-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <div className="meta-row" style={{ justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
          <span className="tag tag-green">{review.location}</span>
          <span style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", color: "var(--primary)", lineHeight: 0.1, marginTop: "1rem" }}>“</span>
        </div>
        <h3 style={{ fontSize: "1.3rem", fontWeight: "600", fontFamily: "var(--font-heading)", color: "var(--text)" }}>{review.title}</h3>
        <p className="meta-copy" style={{ fontSize: "0.95rem", fontStyle: "italic", lineHeight: "1.6" }}>{review.body}</p>
      </div>
      <div>
        <div className="product-card-divider" />
        <div className="review-footer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <strong style={{ color: "var(--text-soft)" }}>{review.name}</strong>
          <StarRating showValue={false} size="sm" value={review.rating} />
        </div>
      </div>
    </article>
  );
}
