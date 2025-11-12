import { TypeAnimation } from 'react-type-animation';
import Hero from '../components/Hero'
import CaseStudy from '../components/CaseStudy'
import SEO from '../components/SEO'
import HeroWide from '../components/HeroWide'
import { IconBrandLinkedin, IconBrandMedium, IconBrandBehance, IconMapWest, IconMail } from '@tabler/icons-react'

export default function Home() {
  return (
    <>
      <SEO
        title="UI UX | Andrea Mecenero: Design System Expert & Consultant"
        description="Andrea Mecenero is a freelance UI & UX, design system expert working remotely. Over 10 years of experience as consultant designing Web Apps. Available for hire."
        url="https://mecdesigner.com/"                            // your canonical
        image="https://mecdesigner.com/img/image-social.jpg"      // absolute OG image
        locale="en_US"
        siteName="Freelance UX UI Designer - Andrea Mecenero"
        twitterSite="@andreamecenero"
        gaId="G-4Y3P12BH9K"      // or GA4: 'G-XXXX' (recommended going forward)
        clarityId="td9hy31rz7"
      />
      
      <HeroWide
        bg="img/luis-de-leon-zrw1.webp"
        title={
          <>
            UI & UX Expert
            <br />
            specializing in design systems.
          </>
        }
        subtitle={
          <>
            With <strong>10+ years</strong> driving results for medium to large companies, I design intuitive, high-converting product UIs and robust <strong>design systems</strong>. Specializing in data-informed UX, I deliver <strong>accessible</strong>, fast front-ends backed by meticulous design thinking.
            <br />
            Let's have a talk about {' '}
            <span className="typed-text typed-text--cursor type--bold">
            <TypeAnimation
              sequence={[
                'user interface', 900,
                'user experience', 900,
                'design thinking', 900,
                'human-centered design', 900,
                'web technologies', 900,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              cursor={true}
            />
            </span>
          </>
        }
      />

      {/*
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
                <TypeAnimation
                  sequence={[
                    'user interface', 900,
                    'user experience', 900,
                    'design thinking', 900,
                    'human-centered design', 900,
                    'web technologies', 900,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
                </span>
              </h2>


              <ul className="social-list list-inline list--hover">
                <li data-tooltip="LinkedIn"><a href="https://it.linkedin.com/in/mecdesigner" aria-label="LinkedIn profile" target="_blank"><IconBrandLinkedin size={20} stroke={1.75} /></a></li>
                <li data-tooltip="Wellfound"><a href="https://wellfound.com/u/andrea-mecenero" aria-label="Wellfound profile" target="_blank"><IconMapWest size={20} stroke={1.75} /></a></li>
                <li data-tooltip="Medium"><a href="https://medium.com/@andreamecenero" aria-label="Medium profile" target="_blank"><IconBrandMedium size={20} stroke={1.75} /></a></li>
                <li data-tooltip="Behance"><a href="https://www.behance.net/mecdesigner" aria-label="Behance profile" target="_blank"><IconBrandBehance size={20} stroke={1.75} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section> * Intro */}

      {/* <Hero
        bg="img/rayi-christian-wicaksono-366.jpg"
        alt="My desk in black and white"
        overlay={1}
        heightClass="height-50"
        kenBurns={true}
    /> */}

      {/* Feature trio */}
      <section className="space--md">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature feature--featured boxed boxed--border">
                <h3 className="h2">UI Design</h3>
                <h4 className="mb-3"><strong>Wireframing and prototyping</strong> (Figma, Adobe XD, Axure RP).</h4>
                <h4 className="mb-3"><strong>Interaction design (IxD)</strong> and design systems.</h4>
                <h4 className="mb-3"><strong>Collaboration with front-end</strong> (Bootstrap, Material Design).</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature feature--featured boxed boxed--border">
                <h3 className="h2">UX Design &amp; Research</h3>
                <h4 className="mb-3"><strong>User-centered design</strong>, heuristic evaluations, A/B testing.</h4>
                <h4 className="mb-3"><strong>Tools:</strong> Miro, FigJam, Hotjar, Microsoft Clarity.</h4>
                <h4 className="mb-3"><strong>Translating user insights</strong> into product improvements.</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature feature--featured boxed boxed--border">
                <h3 className="h2">Web Design &amp; Dev</h3>
                <h4 className="mb-3"><strong>Responsive, WCAG-compliant layouts</strong> (HTML, CSS).</h4>
                <h4 className="mb-3"><strong>Agile management</strong> with Jira, Asana, Confluence.</h4>
                <h4 className="mb-3"><strong>Performance optimization</strong> and CRO best practices.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies heading */}
      <section className="switchable feature-large bg--secondary space--xs">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-12">
              <h3 className="h2 text-center">Discover more with these <strong>case studies</strong></h3>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies (reuse component) */}
      <CaseStudy
        img="img/bbg-gds-cover.webp"
        alt="BBG Webshops preview"
        title="BBG Global Design System"
        label="Ecommerce"
        lead="Launched in 2023, the GDS centralizes design assets for Berlin Brands Group’s 23 international e-commerce shops, reducing design-to-dev handoff by 30% and ensuring consistent brand experiences across storefronts."
        href="/globaldesignsystem"
      />
      <CaseStudy
        img="img/bbg-ux-cover.webp"
        alt="BBG UX Analysis preview"
        title="UX Analysis for BBG Webshops"
        label="Ecommerce"
        lead="In 2024, this e-commerce UX analysis boosted returning users by 5%, cut JS errors by up to 40%, improved performance scores by 10 points, and reduced dead clicks by 5%."
        href="/ux-analysis"
        reverse
      />
      <CaseStudy
        img="img/ac-lp-cover.webp"
        alt="Altroconsumo preview"
        title="Altroconsumo"
        label="Web design"
        lead="From 2014 to 2021, I helped Altroconsumo design landing pages, newsletters, and responsive tools for marketing and editorial teams—always with a mobile-first mindset."
        href="/altroconsumo"
      />
      <CaseStudy
        img="img/wheeshing-cover.webp"
        alt="Wheeshing app preview"
        title="Wheeshing"
        label="Minimalistic"
        lead="Developed as a PWA for a leading tire company in 2019, 'Wheeshing' streamlined tire selection and engagement."
        href="/wheeshing"
        reverse
      />
      <CaseStudy
        img="img/helpicam-cover.webp"
        alt="Helpicam app preview"
        title="Helpicam"
        label="Square & Flat"
        lead="Crafted in 2020, 'Helpicam' provides real-time incident reporting services."
        href="/helpicam"
      />
      <CaseStudy
        img="img/outsourcing-guide-cover.webp"
        alt="Outsourcing guide preview"
        title="Outsourcing Guide"
        label="Square & Creative"
        lead="In 2020, I designed an informative guide for Asper Brothers, empowering outsourcing strategy."
        href="/outsourcing-guide"
        reverse
      />
      <CaseStudy
        img="img/asper-cover.webp"
        alt="Asper Brothers website preview"
        title="Asper Brothers"
        label="Square & Minimalistic"
        lead="Redesign in 2019, optimizing UX and visual appeal."
        href="/asperbrothers"
      />
      <CaseStudy
        img="img/mybank-cover.webp"
        alt="MyBank app preview"
        title="MyBank"
        label="Flat"
        lead="Concept banking app (2018) for intuitive financial management."
        href="/mybank"
        reverse
      />

      {/* Design system CTA */}
      <section className="space--sm">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-9">
              <article>
                <h2 className="h3">
                  <strong>The fundamental part</strong> of your brand is the <strong className="color--primary">design system</strong>
                </h2>
                <p className="lead">
                  The <strong>design system</strong> ensures consistency and a stronger brand identity. As a consultant, I offer:
                </p>
                <ul className="bullets lead">
                  <li><strong>Analyzing existing products</strong> and refining development processes.</li>
                  <li><strong>Identifying fundamental</strong> elements to enhance.</li>
                  <li><strong>Customizing the pattern library</strong> to suit specific needs.</li>
                  <li><strong>Developing UI components</strong> for seamless integration.</li>
                </ul>
                <a className="btn btn--sm btn--primary-1 type--uppercase" href="/design-system">
                  <span className="btn__text">Read more</span>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center imagebg" data-gradient-bg="#050201,#393e40,#393e40,#050201">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
              <div className="cta">
                <h3 className="h2">Let's Work Together</h3>
                <p className="lead">Expert UI UX Designer - Available for remote &amp; in-house work.</p>
                <a className="btn btn--unfilled btn--primary type--uppercase" href="mailto:info@mecdesigner.com?subject=Work together">
                  <span className="btn__text">Contact me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="bg--white text-center">
        <div className="container">
          <div className="row"><div className="col-md-12">
            <h3 className="h2">Collaborations</h3>
            <p className="lead">&nbsp;</p>
            <ul className="list-inline list-inline--images">
              <li data-tooltip="Berlin Brands Group"><a href="https://www.berlin-brands-group.com/en" target="_blank"><img alt="Berlin Brands Group logo" src="img/berlin-brands-group-logo.webp" /></a></li>
              <li data-tooltip="Altroconsumo Edizioni"><a href="https://www.altroconsumo.it/" target="_blank"><img alt="Altroconsumo logo" src="img/altroconsumo-logo.webp" /></a></li>
              <li data-tooltip="Asper Brothers Software House"><a href="https://asperbrothers.com/" target="_blank"><img alt="Asper Brothers logo" src="img/asperbrothers-logo.webp" /></a></li>
            </ul>
          </div></div>
        </div>
      </section>
    </>
  )
}