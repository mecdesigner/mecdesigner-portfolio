import { IconArrowRight } from '@tabler/icons-react'
import type { CSSProperties, ReactNode } from 'react'

type BtnSize  = 'sm' | 'md' | 'lg'
type BtnStyle = 'primary' | 'primary-1' | 'primary-2' | 'secondary' | 'ghost' | 'white'


type CTAProps = {
  href: string
  children: ReactNode
  target?: '_blank' | '_self'
  rel?: string
  size?: BtnSize
  style?: BtnStyle // note: this is NOT inline CSS; it's the variant name
  upper?: boolean
  className?: string
  dotColor?: string
  arrowSize?: number
}

export default function CTA({
  href, 
  children, 
  target, 
  rel,
  size = 'md',
  style = 'primary',
  upper = false,
  className = '',
  dotColor,
  arrowSize = 18,
}: CTAProps) {
    const sizeMap: Record<BtnSize, string> = { sm: 'btn--sm', md: 'btn--md', lg: 'btn--lg' }
    const styleMap: Record<BtnStyle, string> = {
      primary: 'btn--primary',
      'primary-1': 'btn--primary-1',
      'primary-2': 'btn--primary-2',
      secondary: 'btn--secondary',
      ghost: 'btn--ghost',
      white: 'btn--white',
    }
    const cls = [
        'btn',                 // your base theme class
        sizeMap[size],
        styleMap[style],
        'btn-cta',             // micro-interaction (dot + arrow)
        upper ? 'type--uppercase' : '',
        className,
      ].filter(Boolean).join(' ')
    
      const inlineVars: CSSProperties | undefined =
        dotColor ? ({ ['--cta-dot' as any]: dotColor }) : undefined

  return (
    <a
      className={cls} 
      href={href}
      target={target}
      rel={rel}
      style={inlineVars}
    >
      <span className="btn__dot" aria-hidden="true" />
      <span className="btn__label">{children}</span>
      <IconArrowRight className="btn__arrow" size={arrowSize} stroke={1.8} aria-hidden />
    </a>
  )
}
