import { useRef, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconMenu2, IconX, IconChevronDown } from '@tabler/icons-react'
import CTA from '../components/CTA'

const base = import.meta.env.BASE_URL
const href = (p: string) => `${base}${p.replace(/^\/+/, '')}`

export default function Header() {
  
  return (
    <div className="nav-container">
      <div>
          <div className="bar bar--sm visible-xs original--bg">
              <div className="container">
                  <div className="row">
                      <div className="col-9 col-md-2">
                      <Link to="/" aria-label="Home">
  <img className="logo logo-dark" alt="Mecdesigner logo dark" src="img/logo-mecdesigner-dark.png" />
  <img className="logo logo-light" alt="Mecdesigner logo light" src="img/logo-mecdesigner-light.png" />
</Link>
                      </div>
                      <div className="col-3 col-md-10 text-right">
                      <a href="#" className="hamburger-toggle" data-toggle-class="#menu1;hidden-xs hidden-sm" aria-label="Toggle menu"> 
                                    <i className="icon icon--sm stack-interface stack-menu" aria-hidden="true"></i> 
                                </a>
                      </div>
                  </div>
              </div>
          </div>
          <nav id="menu1" className="bar bar--sm bar-1 hidden-xs pos-fixed original--bg" data-scroll-class="200px:pos-fixed">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-2 col-md-2 hidden-xs">
                          <div className="bar__module">
                          <Link to="/" aria-label="Home">
  <img className="logo logo-dark" alt="Mecdesigner logo dark" src="img/logo-mecdesigner-dark.png" />
  <img className="logo logo-light" alt="Mecdesigner logo light" src="img/logo-mecdesigner-light.png" />
</Link>
                          </div>
                      </div>
                      <div className="col-lg-10 col-md-12 text-right text-left-xs text-left-sm">
                          <div className="bar__module">
                              <ul className="menu-horizontal text-left">
                                  <li> 
                                      <a href="about">
                                      About
                                      </a> 
                                  </li>
                                  <li> 
                                      <a href="/design-system/">
                                      Design system
                                      </a> 
                                  </li>
                                  <li className="dropdown dropdown--hover"> 
                                      <span className="dropdown__trigger">
                                      Case studies
                                      </span>
                                      <div className="dropdown__container">
                                          <div className="container">
                                              <div className="row">
                                                  <div className="dropdown__content row w-100">
                                                      <div className="col-md-4 col-sm-12">
                                                          <h5>UI &amp; Web Design</h5>
                                                          <ul className="menu-vertical">
                                                              <li> 
                                                                  <a href="globaldesignsystem">&#129513; BBG Global Design System</a> 
                                                              </li>
                                                              <li> 
                                                                  <a href="altroconsumo">&#128236; Altroconsumo</a> 
                                                              </li>
                                                              <li> 
                                                                  <a href="asperbrothers">&#128187; Asper Brothers</a> 
                                                              </li>
                                                          </ul>
                                                      </div>
                                                      <div className="col-md-4 col-sm-12">
                                                          <h5>UX &amp; Research</h5>
                                                          <ul className="menu-vertical">
                                                              <li> 
                                                                  <a href="ux-analysis">&#128270; BBG UX Analysis</a> 
                                                              </li>
                                                              <li> 
                                                                  <a href="wheeshing">&#128734; Wheeshing</a> 
                                                              </li>
                                                              <li> 
                                                                  <a href="helpicam">&#128247; Helpicam</a> 
                                                              </li>
                                                          </ul>
                                                      </div>
                                                      <div className="col-md-4 col-sm-12">
                                                          <h5>Other</h5>
                                                          <ul className="menu-vertical">
                                                              <li> 
                                                                  <a href="outsourcing-guide">&#128161; Outsourcing Guide</a> 
                                                              </li>
                                                              <li> 
                                                                  <a href="mybank">&#127974; MyBank</a> 
                                                              </li>
                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="dropdown dropdown--hover"> 
                                      <span className="dropdown__trigger">
                                      Credentials
                                      </span>
                                      <div className="dropdown__container">
                                          <div className="container">
                                              <div className="row">
                                                  <div className="dropdown__content row w-100">
                                                      <div className="col-md-6 col-sm-12">
                                                          <h5>Articles</h5>
                                                          <ul className="menu-vertical">
                                                              <li> 
                                                                  <a href="https://medium.com/@andreamecenero/a-story-about-ux-analysis-4dd019f557c9" target="_blank">&#128210; A story about UX Analysis</a> 
                                                              </li>
                                                              <li> 
                                                                  <a href="https://medium.com/@andreamecenero/a-story-about-ux-scenario-5133b008f989" target="_blank">&#128210; A story about UX scenario</a> 
                                                              </li>
                                                              <li> 
                                                                  <a href="https://medium.com/@andreamecenero/how-i-went-from-web-design-to-ui-ux-and-why-you-should-too-caebf257109a" target="_blank">&#128210; How I Went from Web Design to UI/UX</a> 
                                                              </li>
                                                              <li> 
                                                                  <a href="https://medium.com/@andreamecenero/how-a-graphic-designer-can-become-a-web-expert-c283e48381bf" target="_blank">&#128210; How I Transitioned from Graphic Design to Web Design</a> 
                                                              </li>
                                                              <li> 
                                                                  <a href="https://asperbrothers.com/blog/design-system-in-figma/" target="_blank">&#128240; Design System in Figma</a> 
                                                              </li>
                                                          </ul>
                                                      </div>
                                                      <div className="col-md-6 col-sm-12">
                                                          <h5>Certificates</h5>
                                                          <ul className="menu-vertical">
                                                              <li> 
                                                                  <a href="https://www.credly.com/users/andrea-mecenero" target="_blank">&#128220; Credly Dashboard</a> 
                                                              </li>
                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                                  
                              </ul>
                          </div>
                          <div className="bar__module">
                              <a className="btn btn--sm btn--primary type--uppercase" href="mailto:info@mecdesigner.com?subject=Hello I want a free consultation"> 
                                  <span className="btn__text">
                                  Contact me
                                  </span>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
  </div>



  )
}
