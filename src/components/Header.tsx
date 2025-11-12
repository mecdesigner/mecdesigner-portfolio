import { useRef } from 'react'
import { useMegaPosition } from '../lib/useMegaPosition'
import { Link, NavLink } from 'react-router-dom'
import { IconChevronDown } from '@tabler/icons-react'
import { asset } from '../lib/asset'
import CTA from '../components/CTA'

const base = import.meta.env.BASE_URL
const href = (p: string) => `${base}${p.replace(/^\/+/, '')}`

export default function Header() {
  // refs for the two mega menus
  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const credentialsRef  = useRef<HTMLDivElement>(null)
  useMegaPosition(caseStudiesRef)
  useMegaPosition(credentialsRef)
  return (
    <header className="nav-container">
      <nav id="menu1" className="bar bar--sm bar-1 pos-fixed original--bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <div className="bar__module">
                <Link to="/">
                  <img className="logo logo-dark" alt="Mecdesigner logo dark" src="img/logo-mecdesigner-dark.png" />
                  <img className="logo logo-light" alt="Mecdesigner logo light" src="img/logo-mecdesigner-light.png" />
                </Link>
              </div>
            </div>
            <div className="col-lg-10 col-md-12 text-right text-left-xs text-left-sm">
              <div className="bar__module">

                <ul className="menu-horizontal text-left">
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>

                  <li>
                    {/* If this is a static subfolder in /public/design-system, use href(); 
                      if it's a React route, replace with <NavLink to="/design-system">…</NavLink> */}
                    <a href={href('design-system/')}>Design system</a>
                  </li>

                  {/* CASE STUDIES (mega dropdown) */}
                  <li className="dropdown dropdown--hover">
                    <span className="dropdown__trigger" tabIndex={0}>
                      Case studies
                      <IconChevronDown size={16} stroke={1.75} aria-hidden="true" style={{ marginLeft: 6 }} />
                    </span>

                    <div className="dropdown__container" ref={caseStudiesRef}>
                      <div className="container">
                        <div className="row">
                          <div className="dropdown__content row w-100">
                            <div className="col-md-4 col-sm-12">
                              <h5>UI &amp; Web Design</h5>
                              <ul className="menu-vertical">
                                <li><NavLink to="/globaldesignsystem">&#129513; BBG Global Design System</NavLink></li>
                                <li><NavLink to="/altroconsumo">&#128236; Altroconsumo</NavLink></li>
                                <li><NavLink to="/asperbrothers">&#128187; Asper Brothers</NavLink></li>
                              </ul>
                            </div>

                            <div className="col-md-4 col-sm-12">
                              <h5>UX &amp; Research</h5>
                              <ul className="menu-vertical">
                                <li><NavLink to="/ux-analysis">&#128270; BBG UX Analysis</NavLink></li>
                                <li><NavLink to="/wheeshing">&#128734; Wheeshing</NavLink></li>
                                <li><NavLink to="/helpicam">&#128247; Helpicam</NavLink></li>
                              </ul>
                            </div>

                            <div className="col-md-4 col-sm-12">
                              <h5>Other</h5>
                              <ul className="menu-vertical">
                                <li><NavLink to="/outsourcing-guide">&#128161; Outsourcing Guide</NavLink></li>
                                <li><NavLink to="/mybank">&#127974; MyBank</NavLink></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* CREDENTIALS (dropdown with external links) */}
                  <li className="dropdown dropdown--hover">
                    <span className="dropdown__trigger" tabIndex={0}>
                      Credentials
                      <IconChevronDown size={16} stroke={1.75} aria-hidden="true" style={{ marginLeft: 6 }} />
                    </span>

                    <div className="dropdown__container" ref={credentialsRef}>
                      <div className="container">
                        <div className="row">
                          <div className="dropdown__content row w-100">
                            <div className="col-md-6 col-sm-12">
                              <h5>Articles</h5>
                              <ul className="menu-vertical">
                                <li><a href="https://medium.com/@andreamecenero/a-story-about-ux-analysis-4dd019f557c9" target="_blank" rel="noreferrer">&#128210; A story about UX Analysis</a></li>
                                <li><a href="https://medium.com/@andreamecenero/a-story-about-ux-scenario-5133b008f989" target="_blank" rel="noreferrer">&#128210; A story about UX scenario</a></li>
                                <li><a href="https://medium.com/@andreamecenero/how-i-went-from-web-design-to-ui-ux-and-why-you-should-too-caebf257109a" target="_blank" rel="noreferrer">&#128210; How I Went from Web Design to UI/UX</a></li>
                                <li><a href="https://medium.com/@andreamecenero/how-a-graphic-designer-can-become-a-web-expert-c283e48381bf" target="_blank" rel="noreferrer">&#128210; How I Transitioned from Graphic Design to Web Design</a></li>
                                <li><a href="https://asperbrothers.com/blog/design-system-in-figma/" target="_blank" rel="noreferrer">&#128240; Design System in Figma</a></li>
                              </ul>
                            </div>

                            <div className="col-md-3 col-sm-12">
                              <h5>Certificates</h5>
                              <ul className="menu-vertical">
                                <li><a href="https://www.credly.com/users/andrea-mecenero" target="_blank" rel="noreferrer">&#128220; Credly Dashboard</a></li>
                              </ul>
                            </div>

                            <div className="col-md-3 col-sm-12">
                              <h5>Social</h5>
                              <ul className="menu-vertical">
                                <li><a href="https://www.linkedin.com/in/mecdesigner/" target="_blank" rel="noreferrer">&#128220; LinkedIn</a></li>
                                <li><a href="https://www.upwork.com/freelancers/~011d35bf594a0aaef9?mp_source=share" target="_blank" rel="noreferrer">&#128220; UpWork</a></li>
                                <li><a href="https://www.fiverr.com/s/rE8jdXb" target="_blank" rel="noreferrer">&#128220; Fiverr</a></li>
                                <li><a href="#" target="_blank" rel="noreferrer">&#128220; Toptal</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

              </div>
              <CTA
                href="https://calendly.com/andreamecenero/intro-call"
                style="primary-1"
                size="lg"
                upper>
                Free consultation
              </CTA>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
