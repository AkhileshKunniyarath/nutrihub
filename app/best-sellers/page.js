import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/mock-data";

const bestSellers = products.filter((product) => product.bestSeller);

export const metadata = {
  title: "Best Sellers",
  description: "Shop NutriFab Naturals best-selling products loved by returning customers."
};

export default function BestSellersPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">Best Sellers</div>
          <h1>Loved by our customers</h1>
          <p className="lead">
            A focused selection of top-performing products presented with a more premium, conversion-led browsing experience.
          </p>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <SectionHeading
            eyebrow="Top Picks"
            title="The products shoppers return for"
            description="This page gives best sellers a clean dedicated destination instead of burying them inside the home page."
            action={
              <Link className="pill-button" href="/products">
                Shop Full Catalog
              </Link>
            }
          />
          <div className="product-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
