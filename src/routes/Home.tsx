import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home • My Site</title>
        <meta name="description" content="Welcome to my React site." />
      </Helmet>
      <Hero title="Welcome" subtitle="This page uses shared layout, header, and footer." ctaText="Get Started" ctaHref="#get-started" />
      <div className="container">
        <h2 id="get-started">Reusable blocks</h2>
        <p>Build UI once as a component, reuse it on any page.</p>
      </div>
    </>
  )
}
