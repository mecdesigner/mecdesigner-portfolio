// src/components/Hero.tsx
import { ReactNode, CSSProperties } from 'react'
import { asset } from '../lib/asset'

type HeroProps = {
  bg: string               // e.g. "img/rayi-christian-wicaksono-366.jpg"
  alt: string
  overlay?: number | string
  heightClass?: "height-50" | "height-60" | "height-70" | "height-80" | "height-100" | "auto";
  kenBurns?: boolean;
  className?: string
  children?: ReactNode
}

export default function Hero({ bg, alt, overlay = 0, kenBurns, className = '', children }: HeroProps) {
  const bgUrl = asset(bg)
  const holderStyle: CSSProperties = {
    backgroundImage: `url(${bgUrl})`,
    opacity: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <section className={`imagebg ${className}`} {...(overlay ? { 'data-overlay': overlay } : {})}>
      <div className="background-image-holder" style={holderStyle} aria-label={alt} role="img">
        <img src={asset(bg)} alt={alt} />
      </div>
      {children && <div className="container">{children}</div>}
    </section>
  )
}
