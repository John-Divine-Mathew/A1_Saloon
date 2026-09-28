import { whyChooseUs } from '../data/content.js'
import useReveal from './useReveal.js'
import { IconExperience, IconClean, IconAttention, IconPricing } from './icons.jsx'

const ICONS = {
  experience: IconExperience,
  clean: IconClean,
  attention: IconAttention,
  pricing: IconPricing,
}

export default function WhyChooseUs() {
  const ref = useReveal()

  return (
    <section className="why section" ref={ref}>
      <div className="section__intro section__intro--center">
        <span className="section__kicker">THE GENT'S STANDARD</span>
        <h2 className="section__heading why__heading">{whyChooseUs.heading}</h2>
        <p className="section__subtext">
          Craftsmanship, hygiene, and individualized care in a welcoming atmosphere.
        </p>
      </div>

      <div className="why__grid">
        {whyChooseUs.items.map((item) => {
          const Icon = ICONS[item.icon]
          return (
            <div className="why__item" key={item.title}>
              <span className="why__icon">
                <Icon width={22} height={22} />
              </span>
              <h3 className="why__title">{item.title}</h3>
              <p className="why__text">{item.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
