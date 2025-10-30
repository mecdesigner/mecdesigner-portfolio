interface CaseStudyProps {
    img: string
    alt: string
    title: string
    label: string
    lead: string
    href: string
    reverse?: boolean
  }
  export default function CaseStudy({
    img, alt, title, label, lead, href, reverse
  }: CaseStudyProps) {
    return (
      <section className="switchable feature-large bg--secondary">
        <div className="container">
          <div className={`row justify-content-around ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className="col-md-6">
              <img alt={alt} className="border--round" src={img} />
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="switchable__text">
                <h2>{title}</h2><span className="label">{label}</span>
                <p className="lead">{lead}</p>
                <a className="btn btn--sm btn--primary" href={href}>
                  <span className="btn__text type--uppercase">View case study</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  