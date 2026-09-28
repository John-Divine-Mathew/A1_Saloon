import { about } from '../data/content.js'
import { aboutImage } from '../data/images.js'
import useReveal from './useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="about__media reveal-clip">
        <img
          src={aboutImage.src}
          alt={aboutImage.alt}
          className="about__image"
          loading="lazy"
        />
      </div>

      <div className="about__copy">
        <span className="section__kicker">ABOUT OUR LOUNGE</span>
        <h2 className="section__heading">{about.heading}</h2>
        <p className="about__body">{about.body}</p>

        <dl className="about__stats">
          {about.stats.map((stat) => (
            <div className="about__stat" key={stat.label}>
              <dt className="about__stat-value">{stat.value}</dt>
              <dd className="about__stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
