import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About • My Site</title>
        <meta name="description" content="About this site." />
      </Helmet>
      <div className="container">
        <h1>About</h1>
        <p>This text lives in a route component and still inherits the global layout.</p>
      </div>
    </>
  )
}
