// src/components/HeroWide.tsx
import { ReactNode, CSSProperties } from 'react'
import { asset } from '../lib/asset'
import CTA from './CTA'
import { IconBrandLinkedin, IconBrandMedium, IconBrandBehance, IconMail, IconMapWest, IconBrandFiverr, IconBrandUpwork, IconCircleLetterT } from '@tabler/icons-react'

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
    opacity: .25,
  }

  // spacing in em only
  const sectionPad: CSSProperties = { paddingTop: '6em', paddingBottom: '4em' }
  const stackEm: CSSProperties = { marginTop: '1.5em', marginBottom: '1.5em' }
  const ctasStyle: CSSProperties = { display: 'inline-flex', gap: '0.8em', flexWrap: 'wrap', alignItems: 'center' }
  const socialGap: CSSProperties = { marginTop: '3em', display: 'block' }

  return (
    <section className="imagebg image--light" data-overlay={1} style={sectionPad}>
      <div className="background-image-holder" style={holderStyle} aria-hidden="true" />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-10 text-center">
            {/* Use your site’s typography classes */}
            <h1 className="h1" style={{ marginBottom: '0.5em' }}>{title}</h1>

            {subtitle && (
              <h2 className="h3" style={stackEm}>
                {subtitle}
              </h2>
            )}

            <div style={ctasStyle}>
              <span>Contact me at</span>
              <CTA
                href="mailto:info@mecdesigner.com?subject=Project%20inquiry"
                size="sm"
                style="ghost"
                dotColor={dotColor}
              >
                info@mecdesigner.com
              </CTA>
            </div>

            {/* Socials */}
            <ul className="list-inline social-list list--hover" style={socialGap}>
                <li className="list-inline-item" data-tooltip="LinkedIn">
                    <a href="https://it.linkedin.com/in/mecdesigner" aria-label="LinkedIn profile" target="_blank" rel="noreferrer">
                    <IconBrandLinkedin size={25} stroke={1.75} />
                    </a>
                </li>

                <li className="list-inline-item" data-tooltip="Wellfound">
                    <a href="https://wellfound.com/u/andrea-mecenero" aria-label="Wellfound profile" target="_blank" rel="noreferrer">
                    <IconMapWest size={25} stroke={1.75} />
                    </a>
                </li>

                <li className="list-inline-item" data-tooltip="Medium">
                    <a href="https://medium.com/@andreamecenero" aria-label="Medium profile" target="_blank" rel="noreferrer">
                    <IconBrandMedium size={25} stroke={1.75} />
                    </a>
                </li>

                <li className="list-inline-item" data-tooltip="Behance">
                    <a href="https://www.behance.net/mecdesigner" aria-label="Behance profile" target="_blank" rel="noreferrer">
                    <IconBrandBehance size={25} stroke={1.75} />
                    </a>
                </li>

                <li className="list-inline-item" data-tooltip="Email">
                    <a href="mailto:info@mecdesigner.com" aria-label="Email link">
                    <IconMail size={25} stroke={1.75} />
                    </a>
                </li>

                <li className="list-inline-item" data-tooltip="Upwork">
                    <a href="https://www.upwork.com/freelancers/~011d35bf594a0aaef9?mp_source=share" aria-label="Upwork profile" target="_blank" rel="noreferrer">
                    <IconBrandUpwork size={25} stroke={1.75} />
                    </a>
                </li>

                <li className="list-inline-item" data-tooltip="Fiverr">
                    <a href="https://www.fiverr.com/s/rE8jdXb" aria-label="Fiverr profile" target="_blank" rel="noreferrer">
                    <IconBrandFiverr size={25} stroke={1.75} />
                    </a>
                </li>

                <li className="list-inline-item" data-tooltip="Toptal">
                    <a href="#" aria-label="Toptal profile" target="_blank" rel="noreferrer">
                    <IconCircleLetterT size={25} stroke={1.75} />
                    </a>
                </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}
