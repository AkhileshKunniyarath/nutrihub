"use client";

import { createContext, useContext, useEffect, useState } from "react";

const WISHLIST_STORAGE_KEY = "nutrifab:wishlist";

const WishlistContext = createContext(null);

function readStoredWishlist() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedValue = window.localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (!storedValue) {
      return [];
    }

    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }) {
  const [wishlistIds, setWishlistIds] = useState([]);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setWishlistIds(readStoredWishlist());
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    function syncWishlistFromStorage(event) {
      if (event.key === WISHLIST_STORAGE_KEY) {
        setWishlistIds(readStoredWishlist());
      }
    }

    window.addEventListener("storage", syncWishlistFromStorage);
    return () => window.removeEventListener("storage", syncWishlistFromStorage);
  }, []);

  function toggleWishlist(productId) {
    setWishlistIds((currentWishlistIds) => {
      const nextWishlistIds = currentWishlistIds.includes(productId)
        ? currentWishlistIds.filter((id) => id !== productId)
        : [...currentWishlistIds, productId];

      try {
        window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(nextWishlistIds));
      } catch {
        return currentWishlistIds;
      }

      return nextWishlistIds;
    });
  }

  function isWishlisted(productId) {
    return wishlistIds.includes(productId);
  }

  return (
    <WishlistContext.Provider
      value={{
        hasHydrated,
        isWishlisted,
        toggleWishlist,
        wishlistCount: wishlistIds.length,
        wishlistIds
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }

  return context;
}
