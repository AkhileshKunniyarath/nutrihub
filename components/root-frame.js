"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteShell } from "@/components/site-shell";

export function RootFrame({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return children;
  }

  return (
    <SiteShell>
      <Header />
      <main>{children}</main>
      <Footer />
    </SiteShell>
  );
}
