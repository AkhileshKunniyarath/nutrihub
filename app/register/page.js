import Link from "next/link";
import { AuthShell } from "@/components/auth-shell";

export const metadata = {
  title: "Register",
  description: "Customer registration for NutriFab Naturals."
};

const features = [
  {
    title: "Save your rituals",
    text: "Build a personal space for the products, bundles, and routines you want to revisit quickly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M3 12h18" />
      </svg>
    )
  },
  {
    title: "Faster future orders",
    text: "Store account details once and make repeat purchasing feel smoother and more premium every time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h13" />
        <path d="M3 12h18" />
        <path d="M3 17h10" />
      </svg>
    )
  },
  {
    title: "Trusted account access",
    text: "Keep your preferences, saved items, and order updates together in one secure member area.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9.5 12 1.7 1.7 3.8-4.2" />
      </svg>
    )
  }
];

const stats = [
  { value: "3 steps", label: "quick setup" },
  { value: "24/7", label: "account access" },
  { value: "0 clutter", label: "clean experience" }
];

export default function RegisterPage() {
  return (
    <AuthShell
      eyebrow="Create Account"
      title="Join NutriFab with a lighter, glass-finished onboarding flow."
      description="Create an account to save delivery details, keep a curated wishlist, and make every future purchase feel simpler."
      formEyebrow="New Member"
      formTitle="Create your premium account"
      formDescription="Set up your details once and unlock a smoother shopping, tracking, and reorder experience."
      footerPrompt="Already have an account?"
      footerHref="/login"
      footerLabel="Login here"
      features={features}
      stats={stats}
    >
      <form className="auth-form">
        <label className="auth-field">
          <span>Full name</span>
          <input placeholder="Your full name" />
        </label>

        <label className="auth-field">
          <span>Email address</span>
          <input placeholder="you@example.com" type="email" />
        </label>

        <label className="auth-field">
          <span>Password</span>
          <input placeholder="Create a password" type="password" />
        </label>

        <label className="auth-check auth-check-stacked">
          <input type="checkbox" />
          <span>I agree to receive order updates and account-related communication from NutriFab.</span>
        </label>

        <button className="cta-button auth-submit" type="submit">
          Register
        </button>

        <div className="auth-divider">
          <span>Private account setup with secure access to your saved details</span>
        </div>

        <Link className="ghost-button auth-secondary-action" href="/login">
          Already have an account?
        </Link>
      </form>
    </AuthShell>
  );
}
