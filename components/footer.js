"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/logo";

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
            <a className="footer-social" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a
              className="footer-social"
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
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
