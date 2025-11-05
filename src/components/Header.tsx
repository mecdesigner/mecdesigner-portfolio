import { Link, NavLink } from 'react-router-dom'
import { asset } from '../lib/asset'


export default function Header() {
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
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><a href="/design-system/">Design system</a></li>
                  <li><NavLink to="/globaldesignsystem">Case studies</NavLink></li>
                  {/* You can reintroduce full dropdown markup later if needed */}
                </ul>
              </div>
              <div className="bar__module">
                <a className="btn btn--sm btn--primary type--uppercase" href="mailto:info@mecdesigner.com?subject=Hello I want a free consultation">
                  <span className="btn__text">Contact me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
