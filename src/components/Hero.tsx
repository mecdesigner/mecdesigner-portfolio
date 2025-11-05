// src/components/Hero.tsx
import { ReactNode } from 'react'
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

export default function Hero({ bg, alt, overlay = 0, kenBurns = true, className = '', children }: HeroProps) {
  return (
    <section className={`imagebg ${className}`} {...(overlay ? { 'data-overlay': overlay } : {})}>
      <div className="background-image-holder">
        <img src={asset(bg)} alt={alt} />
      </div>
      {children && <div className="container">{children}</div>}
    </section>
  )
}
