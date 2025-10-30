interface HeroProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}

export default function Hero({ title, subtitle, ctaText, ctaHref = '#' }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p className="lead">{subtitle}</p>}
        {ctaText && (
          <p>
            <a className="btn" href={ctaHref}>{ctaText}</a>
          </p>
        )}
      </div>
    </section>
  )
}
