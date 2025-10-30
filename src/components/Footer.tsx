export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <small>© {year} My Site. All rights reserved.</small>
      </div>
    </footer>
  )
}
