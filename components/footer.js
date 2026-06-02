"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/logo";

const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.instagramUrl,
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="17.1" cy="6.9" r="1.15" fill="currentColor" />
      </svg>
    )
  },
  {
    label: "Facebook",
    href: siteConfig.facebookUrl,
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M13.65 20v-6.1h2.05l.34-2.62h-2.39V9.6c0-.76.22-1.27 1.33-1.27H16.2V6.05c-.54-.08-1.18-.14-1.87-.14-2.02 0-3.4 1.22-3.4 3.46v1.91H8.8v2.62h2.13V20h2.72Z"
        />
      </svg>
    )
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${siteConfig.whatsappNumber}`,
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M12.04 3.6a8.43 8.43 0 0 0-7.28 12.67L3.5 20.5l4.33-1.13a8.45 8.45 0 1 0 4.2-15.77Zm0 15.37c-1.3 0-2.57-.35-3.68-1.02l-.27-.16-2.58.67.69-2.5-.18-.27a6.95 6.95 0 1 1 6.02 3.28Zm3.82-5.22c-.21-.1-1.24-.6-1.43-.67-.19-.07-.33-.1-.47.1-.15.21-.57.67-.7.8-.12.15-.26.16-.47.06-.21-.1-.9-.33-1.7-1.07-.63-.56-1.04-1.25-1.17-1.46-.12-.22-.01-.33.1-.43.09-.1.21-.25.31-.37.1-.12.13-.2.21-.34.07-.14.03-.27-.02-.37-.06-.1-.47-1.15-.65-1.56-.17-.42-.34-.36-.47-.36h-.4c-.14 0-.37.05-.56.26-.18.2-.72.7-.72 1.72 0 1 .74 1.97.84 2.1.1.14 1.45 2.2 3.55 3.1.5.21.89.35 1.19.45.5.16.94.14 1.29.09.4-.06 1.24-.5 1.42-.98.18-.48.18-.9.13-1-.05-.07-.18-.13-.4-.24Z"
        />
      </svg>
    )
  }
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-stack">
          <div style={{ marginBottom: "0.5rem" }}>
            <Logo width={180} height={72} />
          </div>
          <p>
            Premium natural wellness essentials with trusted ingredients, refined presentation,
            and a smooth buying experience built for modern shoppers.
          </p>
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a
                aria-label={link.label}
                className="footer-social"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
                title={link.label}
              >
                <span className="footer-social-icon">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <strong>Shop</strong>
          <Link href="/products">All Products</Link>
          <Link href="/categories">Shop by Category</Link>
          <Link href="/best-sellers">Best Sellers</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/checkout">Checkout</Link>
        </div>
        <div>
          <strong>Company</strong>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/account">My Account</Link>
          <Link href="/wishlist">Wishlist</Link>
        </div>
        <div>
          <strong>Support</strong>
          <Link href="/account/orders">My Orders</Link>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/contact">Customer Care</Link>
          <Link href="/checkout">Secure Checkout</Link>
        </div>
        <div>
          <strong>Policies</strong>
          {siteConfig.policyLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
