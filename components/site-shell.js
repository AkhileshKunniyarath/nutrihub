"use client";

import { siteConfig } from "@/lib/site";

export function SiteShell({ children }) {
  return (
    <div className="site-shell">
      {children}
      <a
        className="cta-button wa-float"
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20NutriFab%2C%20I%20need%20help%20with%20a%20product.`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Us
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
