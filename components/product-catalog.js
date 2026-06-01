"use client";

import React, { useState, useMemo } from "react";
import { ProductCard } from "./product-card";

export function ProductCatalog({ initialProducts = [], categories = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [maxPrice, setMaxPrice] = useState("");

  // Live filter logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.categorySlug === selectedCategory;
      const matchesPrice = !maxPrice || product.offerPrice <= Number(maxPrice);
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [initialProducts, searchQuery, selectedCategory, maxPrice]);

  // Sorting logic
  const sortedProducts = useMemo(() => {
    const productsCopy = [...filteredProducts];
    if (sortBy === "price-low") {
      return productsCopy.sort((a, b) => a.offerPrice - b.offerPrice);
    }
    if (sortBy === "price-high") {
      return productsCopy.sort((a, b) => b.offerPrice - a.offerPrice);
    }
    if (sortBy === "popularity") {
      return productsCopy.sort((a, b) => b.reviews - a.reviews);
    }
    return productsCopy; // "latest" - default order
  }, [filteredProducts, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("latest");
    setMaxPrice("");
  };

  return (
    <div>
      {/* Category Navigation Pills */}
      <div 
        className="category-pill-nav"
        style={{ 
          display: "flex", 
          gap: "0.75rem", 
          flexWrap: "wrap", 
          justifyContent: "center",
          marginBottom: "2.5rem"
        }}
      >
        <button
          onClick={() => setSelectedCategory("all")}
          className={`nav-chip ${selectedCategory === "all" ? "cta-button" : "ghost-button"}`}
          style={{ 
            padding: "0.7rem 1.4rem", 
            border: selectedCategory === "all" ? "none" : "1px solid var(--border)",
            background: selectedCategory === "all" ? "var(--gold-gradient)" : "rgba(255,255,255,0.45)",
            color: selectedCategory === "all" ? "#ffffff" : "var(--text)"
          }}
        >
          All Blends
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setSelectedCategory(cat.slug)}
            className={`nav-chip ${selectedCategory === cat.slug ? "cta-button" : "ghost-button"}`}
            style={{ 
              padding: "0.7rem 1.4rem",
              border: selectedCategory === cat.slug ? "none" : "1px solid var(--border)",
              background: selectedCategory === cat.slug ? "var(--gold-gradient)" : "rgba(255,255,255,0.45)",
              color: selectedCategory === cat.slug ? "#ffffff" : "var(--text)"
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Filter and Search Bar */}
      <div className="catalog-filter-bar">
        {/* Search Input with Icon */}
        <div style={{ position: "relative", width: "100%" }}>
          <span 
            style={{ 
              position: "absolute", 
              left: "1rem", 
              top: "50%", 
              transform: "translateY(-50%)", 
              color: "var(--primary)",
              display: "flex",
              alignItems: "center"
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search botanical blends..."
            style={{
              width: "100%",
              padding: "0.8rem 1rem 0.8rem 2.8rem",
              borderRadius: "16px",
              border: "1px solid var(--border)",
              background: "#ffffff",
              fontSize: "0.95rem"
            }}
          />
        </div>

        {/* Max Price Filter */}
        <div style={{ position: "relative", minWidth: "150px" }}>
          <span 
            style={{ 
              position: "absolute", 
              left: "1rem", 
              top: "50%", 
              transform: "translateY(-50%)", 
              color: "var(--text-soft)", 
              fontSize: "0.9rem",
              fontWeight: "600"
            }}
          >
            Rs
          </span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max price"
            style={{
              width: "100%",
              padding: "0.8rem 1rem 0.8rem 2.5rem",
              borderRadius: "16px",
              border: "1px solid var(--border)",
              background: "#ffffff",
              fontSize: "0.95rem"
            }}
          />
        </div>

        {/* Sort Dropdown */}
        <div style={{ minWidth: "180px" }}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              width: "100%",
              padding: "0.8rem 1rem",
              borderRadius: "16px",
              border: "1px solid var(--border)",
              background: "#ffffff",
              fontSize: "0.95rem",
              cursor: "pointer"
            }}
          >
            <option value="latest">Sort: Latest Arrivals</option>
            <option value="price-low">Sort: Price Low to High</option>
            <option value="price-high">Sort: Price High to Low</option>
            <option value="popularity">Sort: Most Reviews</option>
          </select>
        </div>

        {/* Reset Button */}
        {(searchQuery || selectedCategory !== "all" || maxPrice || sortBy !== "latest") && (
          <button
            onClick={handleResetFilters}
            className="ghost-button"
            style={{ 
              padding: "0.8rem 1.25rem",
              borderRadius: "16px",
              minHeight: "auto",
              fontSize: "0.9rem"
            }}
          >
            Reset
          </button>
        )}
      </div>

      {/* Product Grid section */}
      {sortedProducts.length > 0 ? (
        <div className="product-grid animate-fade-in-up">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div 
          style={{ 
            textAlign: "center", 
            padding: "4.5rem 2rem",
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(8px)",
            border: "1px solid var(--border)",
            borderRadius: "28px",
            maxWidth: "600px",
            margin: "0 auto"
          }}
        >
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--primary)" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ marginBottom: "1rem", color: "var(--primary)" }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>No blends found</h2>
          <p className="meta-copy" style={{ fontSize: "1.05rem", marginBottom: "1.5rem" }}>
            We couldn't find any botanical products matching your current search or filter criteria.
          </p>
          <button onClick={handleResetFilters} className="cta-button" style={{ padding: "0.75rem 1.5rem" }}>
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
