"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteShell } from "@/components/site-shell";
import { WishlistProvider } from "@/components/wishlist-provider";

export function RootFrame({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return children;
  }

  return (
    <WishlistProvider>
      <SiteShell>
        <Header />
        <main>{children}</main>
        <Footer />
      </SiteShell>
    </WishlistProvider>
  );
}
