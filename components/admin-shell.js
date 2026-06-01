import Link from "next/link";

const adminLinks = [
  { label: "Dashboard", href: "/admin" },
  { label: "Products", href: "/admin/products" },
  { label: "Orders", href: "/admin/orders" },
  { label: "Categories", href: "/admin/categories" },
  { label: "Customers", href: "/admin/customers" },
  { label: "Coupons", href: "/admin/coupons" },
  { label: "Banners", href: "/admin/banners" },
  { label: "Reviews", href: "/admin/reviews" },
  { label: "Homepage", href: "/admin/homepage" },
  { label: "SEO", href: "/admin/seo" },
  { label: "Settings", href: "/admin/settings" }
];

export function AdminShell({ children }) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="brand-mark" style={{ marginBottom: "2rem" }}>
          <div className="brand-mark-badge">NF</div>
          <div className="brand-mark-copy">
            <strong>NutriFab Admin</strong>
            <span>Control Center</span>
          </div>
        </div>
        <p className="meta-copy" style={{ marginBottom: "1.5rem" }}>
          Light, fast dashboard tools for products, orders, customers, promotions, and SEO.
        </p>
        <nav>
          {adminLinks.map((link) => (
            <Link className="nav-chip" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="ghost-button" href="/">
            Back to Storefront
          </Link>
        </nav>
      </aside>
      <div>{children}</div>
    </div>
  );
}
