import { contact, hours } from '../data/content.js'
import useReveal from './useReveal.js'
import { IconPin, IconPhone, IconWhatsapp, IconInstagram, IconClock, IconArrowRight } from './icons.jsx'
import { getWhatsappHref } from '../data/content.js'
import storefrontImg from '../assets/images/gallery-storefront.jpg'

export default function Location() {
  const ref = useReveal()
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('VEDHA MEDICAL ARUNTHAVAMBULAM, Ecr, East Coast Rd, Arunthavampulam, Sanganthi, Tamil Nadu 614702')}`

  return (
    <section id="contact" className="location section" ref={ref}>
      <div className="location__hours">
        <div>
          <span className="section__kicker">FIND OUR SHOP</span>
          <h2 className="section__heading">Visit Us</h2>

          <ul className="location__contact-list">
            <li>
              <IconPin width={18} height={18} />
              <span>
                <strong style={{ display: 'block', color: 'var(--color-ink)' }}>
                  1st Floor, Above Vedha Medical
                </strong>
                ECR (East Coast Road), Arunthavampulam
                <br />
                Sanganthi, Tamil Nadu 614702
              </span>
            </li>
            <li>
              <IconPhone width={18} height={18} />
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <IconWhatsapp width={18} height={18} />
              <a href={getWhatsappHref()} target="_blank" rel="noopener noreferrer">
                {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <IconInstagram width={18} height={18} />
              <a href={contact.instagramHref} target="_blank" rel="noopener noreferrer">
                {contact.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <div className="location__hours-table">
          <h3 className="location__hours-heading">
            <IconClock width={16} height={16} />
            Opening Hours
          </h3>
          <table>
            <tbody>
              {hours.map((row) => (
                <tr key={row.day}>
                  <td>{row.day}</td>
                  <td>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="location__map-card reveal-clip">
        <div className="location__map-frame">
          <img
            src={storefrontImg}
            alt="A1 SALON Above Vedha Medical, Arunthavampulam"
            className="location__map-img"
            loading="lazy"
          />
          <div className="location__map-badge">
            <IconPin width={14} height={14} />
            <span>ECR, Arunthavampulam</span>
          </div>
        </div>
        <div className="location__map-footer">
          <div className="location__map-details">
            <strong>A1 SALON</strong>
            <span>1st Floor, Above Vedha Medical · ECR</span>
          </div>
          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ minHeight: '38px', padding: '8px 18px', fontSize: '13px' }}
          >
            Get Directions
            <IconArrowRight width={14} height={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
