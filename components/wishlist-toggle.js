"use client";

import { useWishlist } from "@/components/wishlist-provider";

function HeartIcon({ filled, className }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"}>
      <path
        d="M12 20.5 4.9 13.9a4.89 4.89 0 0 1 0-6.97 4.66 4.66 0 0 1 6.84.18L12 7.4l.26-.29a4.66 4.66 0 0 1 6.84-.18 4.89 4.89 0 0 1 0 6.97L12 20.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function WishlistToggle({ productId, productName, variant = "icon" }) {
  const { hasHydrated, isWishlisted, toggleWishlist } = useWishlist();
  const saved = isWishlisted(productId);

  function handleToggle() {
    toggleWishlist(productId);
  }

  if (variant === "button") {
    return (
      <button
        aria-label={`${saved ? "Remove" : "Save"} ${productName} ${saved ? "from" : "to"} wishlist`}
        aria-pressed={saved}
        className={`detail-action-button detail-action-button-outline wishlist-toggle-button${saved ? " wishlist-toggle-button-active" : ""}`}
        onClick={handleToggle}
        type="button"
      >
        <span>{saved ? "Saved to Wishlist" : "Save to Wishlist"}</span>
        <span className="detail-action-button-icon" aria-hidden="true">
          <HeartIcon className="header-icon" filled={saved} />
        </span>
        {!hasHydrated ? <span className="sr-only">Loading wishlist status</span> : null}
      </button>
    );
  }

  return (
    <button
      aria-label={`${saved ? "Remove" : "Add"} ${productName} ${saved ? "from" : "to"} wishlist`}
      aria-pressed={saved}
      className={`wishlist-badge${saved ? " wishlist-badge-active" : ""}`}
      onClick={handleToggle}
      type="button"
    >
      <HeartIcon className="card-icon" filled={saved} />
      {!hasHydrated ? <span className="sr-only">Loading wishlist status</span> : null}
    </button>
  );
}
