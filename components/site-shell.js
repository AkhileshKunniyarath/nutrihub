"use client";

import { siteConfig } from "@/lib/site";

export function SiteShell({ children }) {
  return (
    <div className="site-shell">
      {children}
      <a
        aria-label="Chat with NutriFab on WhatsApp"
        className="wa-float"
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20NutriFab%2C%20I%20need%20help%20with%20a%20product.`}
        target="_blank"
        rel="noreferrer"
      >
        <svg
          aria-hidden="true"
          className="wa-float-icon"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M27.2 4.7A15.32 15.32 0 0 0 3.8 24.2L2 30l6-1.7a15.32 15.32 0 0 0 7.3 1.9h.01c8.46 0 15.35-6.88 15.35-15.34A15.22 15.22 0 0 0 27.2 4.7Z"
            fill="#25D366"
          />
          <path
            d="M15.34 27.57a12.6 12.6 0 0 1-6.42-1.76l-.46-.28-3.57 1.02.95-3.48-.3-.5a12.64 12.64 0 1 1 9.8 5Zm6.93-9.46c-.38-.2-2.22-1.1-2.57-1.22-.34-.13-.59-.2-.85.2-.25.38-.97 1.22-1.18 1.48-.22.25-.43.29-.8.1-.38-.2-1.58-.58-3-1.86-1.11-1-1.87-2.23-2.08-2.6-.22-.38-.02-.58.16-.76.17-.17.38-.44.58-.66.18-.22.25-.38.38-.63.12-.25.06-.47-.03-.66-.1-.2-.85-2.05-1.16-2.8-.3-.74-.61-.64-.85-.65h-.72c-.26 0-.66.1-1 .47-.34.38-1.32 1.3-1.32 3.15 0 1.86 1.35 3.65 1.53 3.9.2.25 2.64 4.03 6.53 5.5.92.4 1.64.64 2.2.82.92.3 1.75.26 2.4.16.73-.12 2.22-.91 2.54-1.79.3-.88.3-1.63.22-1.8-.1-.16-.35-.25-.73-.44Z"
            fill="#fff"
          />
        </svg>
        <span className="wa-float-label">WhatsApp</span>
      </a>
      <div className="mobile-cart-bar">
        <a className="ghost-button" href="/wishlist">
          Wishlist
        </a>
        <a className="cta-button" href="/cart">
          View Cart
        </a>
      </div>
    </div>
  );
}
