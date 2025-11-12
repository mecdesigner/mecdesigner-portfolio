// src/components/HeroWide.tsx
import { ReactNode, CSSProperties } from 'react'
import { asset } from '../lib/asset'
import CTA from './CTA'
import {
  IconBrandLinkedin, IconBrandMedium, IconBrandBehance, IconMail,
  IconBrandFiverr, IconBrandUpwork, IconCircleLetterT
} from '@tabler/icons-react'

type Props = {
  bg: string                 // "img/hero.jpg" (from /public)
  title: ReactNode           // allow <span> accents
  subtitle?: ReactNode
  dotColor?: string          // e.g. "#e1ff00" for your neon
}

export default function HeroWide({ bg, title, subtitle, dotColor = '#e1ff00' }: Props) {
    const bgUrl = asset(bg)
    const holderStyle: CSSProperties = {
    backgroundImage: `url(${bgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <section className="hero hero--wide imagebg" data-overlay={1}>
      <div className="background-image-holder" style={holderStyle} aria-hidden="true" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10 col-lg-8">
            <h1 className="hero__title">
              {title}
            </h1>
            {subtitle && <p className="hero__subtitle">{subtitle}</p>}

            <div className="hero__ctas">
              <span>Contact me at </span>
              <CTA
                href="mailto:info@mecdesigner.com?subject=Project inquiry"
                size="lg"
                style="ghost"
                dotColor={dotColor}
              >
                info@mecdesigner.com
              </CTA>
            </div>

            <ul className="hero__socials">
              <li><a href="https://it.linkedin.com/in/mecdesigner" target="_blank" rel="noreferrer"><IconBrandLinkedin size={22} stroke={1.6} /></a></li>
              <li><a href="https://medium.com/@andreamecenero" target="_blank" rel="noreferrer"><IconBrandMedium size={22} stroke={1.6} /></a></li>
              <li><a href="https://www.behance.net/mecdesigner" target="_blank" rel="noreferrer"><IconBrandBehance size={22} stroke={1.6} /></a></li>
              <li><a href="mailto:info@mecdesigner.com" aria-label="Email"><IconMail size={22} stroke={1.6} /></a></li>
              <li><a href="https://www.fiverr.com/andreamecenero" target="_blank" rel="noreferrer"><IconBrandFiverr size={22} stroke={1.6} /></a></li>
              <li><a href="https://www.upwork.com/freelancers/~your-id" target="_blank" rel="noreferrer"><IconBrandUpwork size={22} stroke={1.6} /></a></li>
              <li><a href="https://www.toptal.com/resume/your-profile" target="_blank" rel="noreferrer"><IconCircleLetterT size={22} stroke={1.6} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
