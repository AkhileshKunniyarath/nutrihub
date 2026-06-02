import Link from "next/link";
import { WishlistGrid } from "@/components/wishlist-grid";
import { products } from "@/lib/mock-data";

export const metadata = {
  title: "Wishlist",
  description: "Saved products for return shoppers."
};

export default function WishlistPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">Wishlist</div>
          <h1>Saved for your next wellness restock</h1>
          <p className="lead">
            Keep a shortlist of products and return when you’re ready to check out.
          </p>
          <Link className="ghost-button" href="/account">
            Back to Account
          </Link>
        </div>
        <WishlistGrid products={products} />
      </div>
    </section>
  );
}
