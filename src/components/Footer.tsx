import { IconBrandLinkedin, IconBrandMedium, IconBrandBehance, IconMapWest, IconMail } from '@tabler/icons-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer-3 text-center-xs space--xs">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="logo logo-dark" alt="Mecdesigner logo dark" src="img/logo-mecdesigner-dark.png" />
            <img className="logo logo-light" alt="Mecdesigner logo light" src="img/logo-mecdesigner-light.png" />
            <ul className="list-inline list--hover">
              <li className="list-inline-item"><a href="/about"><span className="type--fine-print">About</span></a></li>
              <li className="list-inline-item"><a href="mailto:info@mecdesigner.com"><span className="type--fine-print">info@mecdesigner.com</span></a></li>
            </ul>
          </div>
          <div className="col-md-6 text-right text-center-xs">
            <ul className="social-list list-inline list--hover">
              <li data-tooltip="LinkedIn"><a href="https://it.linkedin.com/in/mecdesigner" aria-label="LinkedIn profile"><IconBrandLinkedin size={20} stroke={1.75} /></a></li>
              <li data-tooltip="Wellfound"><a href="https://wellfound.com/u/andrea-mecenero" aria-label="Wellfound profile"><IconMapWest size={20} stroke={1.75} /></a></li>
              <li data-tooltip="Medium"><a href="https://medium.com/@andreamecenero" aria-label="Medium profile"><IconBrandMedium size={20} stroke={1.75} /></a></li>
              <li data-tooltip="Behance"><a href="https://www.behance.net/mecdesigner" aria-label="Behance profile"><IconBrandBehance size={20} stroke={1.75} /></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"><p className="type--fine-print">Good design is more than just opinion.</p></div>
          <div className="col-md-6 text-right text-center-xs">
            <span className="type--fine-print">© {year} Mecdesigner</span>
            <a className="type--fine-print" href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
