import { Helmet } from 'react-helmet-async'
import Typed from 'react-typed'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Helmet>
      <title>UI UX | Andrea Mecenero: Design System Expert & Consultant</title>
        <link rel="canonical" href="https://mecdesigner.com/" />
        <meta
          name="description"
          content="Andrea Mecenero is a freelance UI & UX, design system expert working remotely. Over 10 years of experience as consultant designing Web Apps. Available for hire."
        />
        {/* OG/Twitter tags can be added here too */}
      </Helmet>

      <Hero
        bg="/img/rayi-christian-wicaksono-366.jpg"
        alt="My desk in black and white"
        overlay={1}
        heightClass="height-50"
        kenBurns
      />
      
      {/* Intro */}
      <section className="space--sm">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-9">
              <h1 className="h2">UI &amp; UX Expert specializing in design systems.</h1>
              <h2 className="h3">
                With over <strong>10 years of experience</strong>, I specialize in designing intuitive interfaces and optimizing design systems for medium to large companies. Leveraging AI and design thinking, I ensure every project reflects <strong>user-centric design</strong> and meticulous attention to <strong>detail</strong>.
                <br />As a UI/UX design strategist and consultant, I'm passionate about pushing the boundaries of design and technology.
                <br />Let's have a talk about{' '}
                <span className="typed-text typed-text--cursor type--bold">
                  <Typed
                    strings={[
                      'user interface',
                      'user experience',
                      'design thinking',
                      'human-centered design',
                      'human-computer interaction',
                      'web technologies',
                      'graphic design',
                      'art',
                      'architecture',
                    ]}
                    typeSpeed={35}
                    backSpeed={15}
                    smartBackspace
                    backDelay={900}
                    loop
                  />
                </span>
              </h2>

              {/* Social */}
              <ul className="social-list list-inline list--hover">
                <li><a href="https://it.linkedin.com/in/mecdesigner" aria-label="LinkedIn profile" target="_blank"><i className="socicon socicon-linkedin icon icon--xs" aria-hidden="true"></i></a></li>
                <li><a href="https://angel.co/u/andrea-mecenero" aria-label="AngelList profile" target="_blank"><i className="socicon socicon-angellist icon icon--xs" aria-hidden="true"></i></a></li>
                <li data-tooltip="@andreamecenero"><a href="https://medium.com/@andreamecenero" aria-label="Medium profile" target="_blank"><i className="socicon socicon-medium icon icon--xs" aria-hidden="true"></i></a></li>
                <li data-tooltip="@mecdesigner"><a href="https://www.behance.net/mecdesigner" aria-label="Behance profile" target="_blank"><i className="socicon socicon-behance icon icon--xs" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
