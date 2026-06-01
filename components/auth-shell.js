import Link from "next/link";
import { Logo } from "@/components/logo";

export function AuthShell({
  eyebrow,
  title,
  description,
  formEyebrow,
  formTitle,
  formDescription,
  footerPrompt,
  footerHref,
  footerLabel,
  features,
  stats,
  children
}) {
  return (
    <section className="section auth-section">
      <div className="container">
        <div className="auth-shell animate-fade-in-up">
          <div className="auth-panel auth-panel-brand">
            <div className="auth-orb auth-orb-gold" />
            <div className="auth-orb auth-orb-leaf" />

            <div className="auth-brand-mark">
              <span className="auth-brand-chip">NutriFab Signature Access</span>
              <Logo width={170} height={68} />
            </div>

            <div className="auth-copy">
              <div className="eyebrow">{eyebrow}</div>
              <h1>{title}</h1>
              <p className="lead">{description}</p>
            </div>

            <div className="auth-feature-list" aria-label="Member benefits">
              {features.map((feature) => (
                <article className="auth-feature-card" key={feature.title}>
                  <div className="auth-feature-icon" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div>
                    <strong>{feature.title}</strong>
                    <p>{feature.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="auth-stats-row" aria-label="Brand stats">
              {stats.map((stat) => (
                <div className="auth-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="auth-panel auth-panel-form">
            <div className="auth-panel-header">
              <span className="auth-panel-tag">{formEyebrow}</span>
              <h2>{formTitle}</h2>
              <p>{formDescription}</p>
            </div>

            {children}

            <div className="auth-footer-note">
              <span>{footerPrompt}</span>
              <Link href={footerHref}>{footerLabel}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
