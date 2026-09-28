import { services } from '../data/content.js'
import useReveal from './useReveal.js'
import {
  IconScissors,
  IconRazor,
  IconCombo,
  IconKids,
  IconComb,
  IconCrown,
} from './icons.jsx'

const ICONS = {
  scissors: IconScissors,
  razor: IconRazor,
  combo: IconCombo,
  kids: IconKids,
  comb: IconComb,
  crown: IconCrown,
}

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" className="services section" ref={ref}>
      <div className="section__intro section__intro--center">
        <span className="section__kicker">SERVICES & PRICING</span>
        <h2 className="section__heading">{services.heading}</h2>
        <p className="section__subtext">
          Precision haircuts, beard sculpts, and bespoke grooming rituals tailored for you.
        </p>
      </div>

      <ul className="services__list">
        {services.items.map((item) => {
          const Icon = ICONS[item.icon]
          const isPopular = item.name.includes('Haircut + Beard')
          const isSignature = item.name.includes('Premium Grooming')

          return (
            <li className="services__row" key={item.name}>
              <span className="services__icon">
                <Icon width={22} height={22} />
              </span>
              <div className="services__text">
                <h3 className="services__name">
                  {item.name}
                  {isPopular && <span className="services__badge">Most Popular</span>}
                  {isSignature && <span className="services__badge">Signature</span>}
                </h3>
                <p className="services__desc">{item.description}</p>
              </div>
              <span className="services__price">{item.price}</span>
            </li>
          )
        })}
      </ul>

      <div className="services__cta">
        <a href="#booking" className="btn btn--primary">
          <IconScissors width={16} height={16} />
          {services.cta}
        </a>
      </div>
    </section>
  )
}
