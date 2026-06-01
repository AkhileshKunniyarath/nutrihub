import Link from "next/link";
import { AuthShell } from "@/components/auth-shell";

export const metadata = {
  title: "Login",
  description: "Customer login for NutriFab Naturals."
};

const features = [
  {
    title: "Fast repeat checkout",
    text: "Keep delivery details and previous order context close at hand for smoother repeat purchases.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    )
  },
  {
    title: "Wishlist synced",
    text: "Save premium wellness picks and come back to them from any device without losing momentum.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-6.7-4.35-9-8.28C1.02 9.34 2.64 5 7 5c2.17 0 3.36 1.13 5 3 1.64-1.87 2.83-3 5-3 4.36 0 5.98 4.34 4 7.72C18.7 16.65 12 21 12 21Z" />
      </svg>
    )
  },
  {
    title: "Order visibility",
    text: "Track shipments, review previous buys, and stay connected to your account in one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M7 8h10" />
        <path d="M7 12h7" />
      </svg>
    )
  }
];

const stats = [
  { value: "24h", label: "dispatch rhythm" },
  { value: "4.8/5", label: "customer trust" },
  { value: "100%", label: "secure access" }
];

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Member Login"
      title="Welcome back to a calmer, more premium wellness experience."
      description="Sign in to continue with saved favorites, faster checkout, and a polished account space built for easy repeat orders."
      formEyebrow="Secure Sign In"
      formTitle="Access your NutriFab account"
      formDescription="Use your email and password to continue to your saved products, orders, and account details."
      footerPrompt="New to NutriFab?"
      footerHref="/register"
      footerLabel="Create an account"
      features={features}
      stats={stats}
    >
      <form className="auth-form">
        <label className="auth-field">
          <span>Email address</span>
          <input placeholder="you@example.com" type="email" />
        </label>

        <label className="auth-field">
          <span>Password</span>
          <input placeholder="Enter your password" type="password" />
        </label>

        <div className="auth-inline-row">
          <label className="auth-check">
            <input type="checkbox" />
            <span>Keep me signed in</span>
          </label>
          <Link className="auth-inline-link" href="/contact">
            Need help?
          </Link>
        </div>

        <button className="cta-button auth-submit" type="submit">
          Login
        </button>

        <div className="auth-divider">
          <span>Protected checkout, wishlist sync, and order tracking</span>
        </div>

        <Link className="ghost-button auth-secondary-action" href="/register">
          Create an account
        </Link>
      </form>
    </AuthShell>
  );
}
