import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact • My Site</title>
        <meta name="description" content="Contact us." />
      </Helmet>
      <div className="container">
        <h1>Contact</h1>
        <form className="stack" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5}></textarea>
          </label>
          <button className="btn" type="submit">Send</button>
        </form>
      </div>
    </>
  )
}
