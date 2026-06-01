import { AdminShell } from "@/components/admin-shell";

export const metadata = {
  title: "Admin",
  description: "NutriFab Naturals admin dashboard and management panels."
};

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
