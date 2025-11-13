import { useRef, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconMenu2, IconX, IconChevronDown } from '@tabler/icons-react'
import CTA from '../components/CTA'
import { useMegaPosition } from '../lib/useMegaPosition'

const base = import.meta.env.BASE_URL
const href = (p: string) => `${base}${p.replace(/^\/+/, '')}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false) // desktop-only sticky after 200px

  const csRef = useRef<HTMLDivElement>(null)
  const crRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  useMegaPosition(csRef)
  useMegaPosition(crRef)

  // Desktop-only sticky toggle
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 991px)')
    const onScroll = () => { setStuck(mq.matches && window.scrollY > 200) }
    onScroll()
    mq.addEventListener?.('change', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      mq.removeEventListener?.('change', onScroll)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // toggle helper for legacy class
  const toggleMobile = () => {
    setOpen(v => {
      const next = !v
      const menu = menuRef.current
      if (menu) {
        if (next) menu.classList.add('toggled-class')
        else menu.classList.remove('toggled-class')
      }
      return next
    })
  }

  const closeMobile = () => {
    const menu = menuRef.current
    if (menu) menu.classList.remove('toggled-class')
    setOpen(false)
  }

  return (
    <header className="nav-container">
      {/* Mobile top row: logo + hamburger inline */}
      <div className="bar bar--sm original--bg d-lg-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-9">
              <Link to="/" aria-label="Home">
                <img className="logo logo-dark" alt="Mecdesigner logo dark" src="img/logo-mecdesigner-dark.png" />
                <img className="logo logo-light" alt="Mecdesigner logo light" src="img/logo-mecdesigner-light.png" />
              </Link>
            </div>
            <div className="col-3 text-right">
              <a
                href="#menu1"
                className="hamburger-toggle toggled-class"
                aria-label="Toggle navigation"
                aria-controls="primary-menu"
                aria-expanded={open}
                onClick={(e) => { e.preventDefault(); setOpen(v => !v) }}
              >
                {open ? <IconX size={30} stroke={1.8} /> : <IconMenu2 size={30} stroke={1.8} />}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar: relative initially; fixed on desktop when stuck */}
      <nav
        id="menu1"
        className={`bar bar--sm bar-1 original--bg ${stuck ? 'pos-fixed' : ''}`}
        aria-label="Main"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Desktop logo */}
            <div className="col-lg-2 d-none d-lg-block">
              <div className="bar__module">
                <Link to="/" aria-label="Home">
                  <img className="logo logo-dark" alt="Mecdesigner logo dark" src="img/logo-mecdesigner-dark.png" />
                  <img className="logo logo-light" alt="Mecdesigner logo light" src="img/logo-mecdesigner-light.png" />
                </Link>
              </div>
            </div>

            {/* Menu + CTA share the SAME column (desktop inline; mobile collapsible) */}
            <div className="col-lg-10 col-md-12">
              <div id="primary-menu" ref={menuRef}
                className="bar__module nav-menu-module d-lg-flex">
                {/* horizontal menu */}
                <ul className="menu-horizontal text-left">
                  <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
                  <li><a href={href('design-system/')} onClick={() => setOpen(false)}>Design system</a></li>

                  {/* CASE STUDIES */}
                  <li className="dropdown dropdown--hover">
                    <span className="dropdown__trigger" tabIndex={0}>
                      Case studies <IconChevronDown size={16} stroke={1.75} aria-hidden style={{ marginLeft: 6 }} />
                    </span>
                    <div className="dropdown__container" ref={csRef}>
                      <div className="container">
                        <div className="row">
                          <div className="dropdown__content row w-100">
                            <div className="col-md-4 col-sm-12">
                              <h5>UI &amp; Web Design</h5>
                              <ul className="menu-vertical">
                                <li><NavLink to="/globaldesignsystem" onClick={() => setOpen(false)}>🧙 BBG Global Design System</NavLink></li>
                                <li><NavLink to="/altroconsumo" onClick={() => setOpen(false)}>📬 Altroconsumo</NavLink></li>
                                <li><NavLink to="/asperbrothers" onClick={() => setOpen(false)}>💻 Asper Brothers</NavLink></li>
                              </ul>
                            </div>
                            <div className="col-md-4 col-sm-12">
                              <h5>UX &amp; Research</h5>
                              <ul className="menu-vertical">
                                <li><NavLink to="/ux-analysis" onClick={() => setOpen(false)}>🔎 BBG UX Analysis</NavLink></li>
                                <li><NavLink to="/wheeshing" onClick={() => setOpen(false)}>🚻 Wheeshing</NavLink></li>
                                <li><NavLink to="/helpicam" onClick={() => setOpen(false)}>📷 Helpicam</NavLink></li>
                              </ul>
                            </div>
                            <div className="col-md-4 col-sm-12">
                              <h5>Other</h5>
                              <ul className="menu-vertical">
                                <li><NavLink to="/outsourcing-guide" onClick={() => setOpen(false)}>💡 Outsourcing Guide</NavLink></li>
                                <li><NavLink to="/mybank" onClick={() => setOpen(false)}>🏠 MyBank</NavLink></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* CREDENTIALS */}
                  <li className="dropdown dropdown--hover">
                    <span className="dropdown__trigger" tabIndex={0}>
                      Credentials <IconChevronDown size={16} stroke={1.75} aria-hidden style={{ marginLeft: 6 }} />
                    </span>
                    <div className="dropdown__container" ref={crRef}>
                      <div className="container">
                        <div className="row">
                          <div className="dropdown__content row w-100">
                            <div className="col-md-6 col-sm-12">
                              <h5>Articles</h5>
                              <ul className="menu-vertical">
                                <li><a href="https://medium.com/@andreamecenero/a-story-about-ux-analysis-4dd019f557c9" target="_blank" rel="noreferrer">📖 A story about UX Analysis</a></li>
                                <li><a href="https://medium.com/@andreamecenero/a-story-about-ux-scenario-5133b008f989" target="_blank" rel="noreferrer">📖 A story about UX scenario</a></li>
                                <li><a href="https://medium.com/@andreamecenero/how-i-went-from-web-design-to-ui-ux-and-why-you-should-too-caebf257109a" target="_blank" rel="noreferrer">📖 How I Went from Web Design to UI/UX</a></li>
                                <li><a href="https://medium.com/@andreamecenero/how-a-graphic-designer-can-become-a-web-expert-c283e48381bf" target="_blank" rel="noreferrer">📖 From Graphic to Web Design</a></li>
                                <li><a href="https://asperbrothers.com/blog/design-system-in-figma/" target="_blank" rel="noreferrer">📰 Design System in Figma</a></li>
                              </ul>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <h5>Social</h5>
                              <ul className="menu-vertical">
                                <li><a href="https://www.linkedin.com/in/mecdesigner/" target="_blank" rel="noreferrer">🔗 LinkedIn</a></li>
                                <li><a href="https://www.upwork.com/freelancers/~011d35bf594a0aaef9?mp_source=share" target="_blank" rel="noreferrer">🧰 Upwork</a></li>
                                <li><a href="https://www.fiverr.com/s/rE8jdXb" target="_blank" rel="noreferrer">🧩 Fiverr</a></li>
                                <li><a href="#" target="_blank" rel="noreferrer">🅣 Toptal</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                {/* CTA INSIDE THE SAME COLUMN/MODULE */}
                <div className="ml-auto mt--xs mt--0-lg">
                  <CTA href="https://calendly.com/andreamecenero/intro-call" style="primary-1" size="lg" upper>
                    Free consultation
                  </CTA>
                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
