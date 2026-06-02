function StarIcon({ className }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="m12 2.75 2.86 5.79 6.39.93-4.62 4.5 1.09 6.36L12 17.32 6.28 20.33l1.09-6.36-4.62-4.5 6.39-.93L12 2.75Z" />
    </svg>
  );
}

function StarRow({ className }) {
  return Array.from({ length: 5 }).map((_, index) => (
    <StarIcon className={className} key={index} />
  ));
}

export function StarRating({ value, reviewCount, size = "md", showValue = true }) {
  const safeValue = Number.isFinite(value) ? Math.max(0, Math.min(5, value)) : 0;
  const fillWidth = `${(safeValue / 5) * 100}%`;
  const label = reviewCount
    ? `${safeValue.toFixed(1)} out of 5 stars from ${reviewCount} reviews`
    : `${safeValue.toFixed(1)} out of 5 stars`;

  return (
    <div aria-label={label} className={`star-rating star-rating-${size}`} role="img">
      <div className="star-rating-stars">
        <div className="star-rating-base">
          <StarRow className="star-rating-star" />
        </div>
        <div className="star-rating-fill" style={{ width: fillWidth }}>
          <StarRow className="star-rating-star" />
        </div>
      </div>
      {showValue ? <span className="star-rating-value">{safeValue.toFixed(1)}</span> : null}
      {reviewCount ? <span className="star-rating-count">({reviewCount})</span> : null}
    </div>
  );
}
