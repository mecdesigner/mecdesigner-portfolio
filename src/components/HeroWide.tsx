// src/components/HeroWide.tsx
import { ReactNode, CSSProperties } from 'react'
import { asset } from '../lib/asset'
import CTA from './CTA'
import {
  IconBrandLinkedin, IconBrandMedium, IconBrandBehance, IconMail,
  IconBrandFiverr, IconBrandUpwork, IconCircleLetterT
} from '@tabler/icons-react'

type Props = {
  bg: string
  title: ReactNode
  subtitle?: ReactNode
  dotColor?: string // HEX, e.g. "#e1ff00"
}

export default function HeroWide({ bg, title, subtitle, dotColor = '#e1ff00' }: Props) {
  const bgUrl = asset(bg)
  const holderStyle: CSSProperties = {
    backgroundImage: `url(${bgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  // spacing in em only
  const sectionPad: CSSProperties = { paddingTop: '6em', paddingBottom: '4em' }
  const stackEm: CSSProperties = { marginTop: '1.5em', marginBottom: '1.5em' }
  const ctasStyle: CSSProperties = { display: 'inline-flex', gap: '0.8em', flexWrap: 'wrap', alignItems: 'center' }
  const socialGap: CSSProperties = { marginTop: '1em' }

  return (
    <section className="imagebg" data-overlay={1} style={sectionPad}>
      <div className="background-image-holder" style={holderStyle} aria-hidden="true" />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-10 text-center">
            {/* Use your site’s typography classes */}
            <h1 className="h1" style={{ marginBottom: '0.5em' }}>{title}</h1>

            {subtitle && (
              <p className="lead" style={stackEm}>
                {subtitle}
              </p>
            )}

            <div style={ctasStyle}>
              <span style={{ color: '#FFFFFF' }}>Contact me at</span>
              <CTA
                href="mailto:info@mecdesigner.com?subject=Project%20inquiry"
                size="lg"
                style="ghost"
                dotColor={dotColor}
              >
                info@mecdesigner.com
              </CTA>
            </div>

            {/* Socials */}
            <ul className="list-inline" style={socialGap}>
              <li className="list-inline-item">
                <a href="https://it.linkedin.com/in/mecdesigner" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: '#FFFFFF' }}>
                  <IconBrandLinkedin size={22} stroke={1.6} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://medium.com/@andreamecenero" target="_blank" rel="noreferrer" aria-label="Medium" style={{ color: '#FFFFFF' }}>
                  <IconBrandMedium size={22} stroke={1.6} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.behance.net/mecdesigner" target="_blank" rel="noreferrer" aria-label="Behance" style={{ color: '#FFFFFF' }}>
                  <IconBrandBehance size={22} stroke={1.6} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:info@mecdesigner.com" aria-label="Email" style={{ color: '#FFFFFF' }}>
                  <IconMail size={22} stroke={1.6} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.fiverr.com/andreamecenero" target="_blank" rel="noreferrer" aria-label="Fiverr" style={{ color: '#FFFFFF' }}>
                  <IconBrandFiverr size={22} stroke={1.6} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.upwork.com/freelancers/~your-id" target="_blank" rel="noreferrer" aria-label="Upwork" style={{ color: '#FFFFFF' }}>
                  <IconBrandUpwork size={22} stroke={1.6} />
                </a>
              </li>
              <li className="list-inline-item">
                {/* Tabler has no Toptal brand; letter T is a clean fallback */}
                <a href="https://www.toptal.com/resume/your-profile" target="_blank" rel="noreferrer" aria-label="Toptal" style={{ color: '#FFFFFF' }}>
                  <IconCircleLetterT size={22} stroke={1.6} />
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}
