import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <article className="page-hero">
          <div className="eyebrow">404</div>
          <h1>Page not found</h1>
          <p className="lead">That path does not exist in the current NutriFab storefront scaffold.</p>
          <Link className="cta-button" href="/">
            Return Home
          </Link>
        </article>
      </div>
    </section>
  );
}
