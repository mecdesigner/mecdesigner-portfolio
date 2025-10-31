export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer-3 text-center-xs space--xs">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img alt="Mecdesigner logo" className="logo" src="/img/logo-mecdesigner-dark.png" />
            <ul className="list-inline list--hover">
              <li className="list-inline-item"><a href="/about"><span className="type--fine-print">About</span></a></li>
              <li className="list-inline-item"><a href="mailto:info@mecdesigner.com"><span className="type--fine-print">info@mecdesigner.com</span></a></li>
            </ul>
          </div>
          <div className="col-md-6 text-right text-center-xs">
            <ul className="social-list list-inline list--hover">
              <li><a href="https://it.linkedin.com/in/mecdesigner" aria-label="LinkedIn profile"><i className="socicon socicon-linkedin icon icon--xs" aria-hidden="true"></i></a></li>
              <li><a href="https://angel.co/u/andrea-mecenero" aria-label="AngelList profile"><i className="socicon socicon-angellist icon icon--xs" aria-hidden="true"></i></a></li>
              <li data-tooltip="@andreamecenero"><a href="https://medium.com/@andreamecenero" aria-label="Medium profile"><i className="socicon socicon-medium icon icon--xs" aria-hidden="true"></i></a></li>
              <li data-tooltip="@mecdesigner"><a href="https://www.behance.net/mecdesigner" aria-label="Behance profile"><i className="socicon socicon-behance icon icon--xs" aria-hidden="true"></i></a></li>
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
