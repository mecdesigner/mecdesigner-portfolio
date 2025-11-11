import { IconArrowRight } from '@tabler/icons-react'

type CTAProps = {
  href: string
  children: React.ReactNode
  target?: '_blank' | '_self'
  rel?: string
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'lg'
  upper?: boolean        // use your type--uppercase helper
}

export default function CTA({
  href, children, target, rel,
  variant = 'primary',
  size = 'md',
  upper = false,
}: CTAProps) {
  const variantClass = variant === 'primary' ? 'btn--primary' : 'btn--ghost'
  const sizeClass = size === 'lg' ? 'btn--lg' : 'btn--md'
  const upperClass = upper ? 'type--uppercase' : ''

  return (
    <a
      className={`btn ${sizeClass} ${variantClass} ${upperClass} btn-cta`}
      href={href}
      target={target}
      rel={rel}
    >
      <span className="btn__dot" aria-hidden="true" />
      <span className="btn__label">{children}</span>
      <IconArrowRight className="btn__arrow" size={18} stroke={1.8} aria-hidden />
    </a>
  )
}
