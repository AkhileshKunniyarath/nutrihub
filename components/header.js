"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/logo";

function ProfileIcon() {
  return (
    <svg aria-hidden="true" className="header-icon" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 12a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Zm0 2.5c-4.55 0-8.25 2.24-8.25 5v1h16.5v-1c0-2.76-3.7-5-8.25-5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function WishlistIcon() {
  return (
    <svg aria-hidden="true" className="header-icon" viewBox="0 0 24 24" fill="none">
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

function CartIcon() {
  return (
    <svg aria-hidden="true" className="header-icon" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.5 7.25h11.2l-1.12 6.43a1.5 1.5 0 0 1-1.48 1.24H9.2a1.5 1.5 0 0 1-1.47-1.2L6.5 7.25Zm0 0-.46-2.03A1.5 1.5 0 0 0 4.58 4H3.25M9.5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        100% Natural Products | Free Delivery on Orders Above Rs 999 | Freshly Packed
      </div>
      <header className="header">
        <div className="container">
          <div className="header-grid">
            <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
              <Logo width={165} height={66} />
            </Link>
            <nav className={`header-nav ${menuOpen ? "header-nav-open" : ""}`}>
              {siteConfig.navigation.map((item) => (
                <Link className="header-link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="header-tools">
              <Link className="search-trigger" href="/products">
                Search Products
              </Link>
              <Link aria-label="My Account" className="header-action-icon icon-button" href="/account">
                <ProfileIcon />
                <span className="sr-only">My Account</span>
              </Link>
              <Link aria-label="Wishlist" className="header-action-icon icon-button" href="/wishlist">
                <WishlistIcon />
                <span className="sr-only">Wishlist</span>
              </Link>
              <Link aria-label="Cart" className="header-action-icon header-cart-icon cta-button" href="/cart">
                <CartIcon />
                <span className="sr-only">Cart</span>
              </Link>
            </div>
            <button
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              className="icon-button mobile-menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              Menu
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
