import { useState } from 'react'
import { booking, contact, getWhatsappHref } from '../data/content.js'
import { IconWhatsapp, IconPhone } from './icons.jsx'
import useReveal from './useReveal.js'

export default function Booking() {
  const [copied, setCopied] = useState(false)
  const ref = useReveal()

  const handleCallClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contact.rawPhone).catch(() => {})
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <section id="booking" className="booking" ref={ref}>
      <div className="booking__inner">
        <h2 className="booking__heading">{booking.heading}</h2>
        <p className="booking__supporting">{booking.supporting}</p>

        <div className="booking__actions">
          <a
            href={getWhatsappHref()}
            className="btn btn--light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsapp width={18} height={18} />
            {booking.ctaWhatsapp}
          </a>
          <a
            href={contact.phoneHref}
            className="btn btn--outline-light"
            onClick={handleCallClick}
            title={`Call ${contact.phoneDisplay}`}
          >
            <IconPhone width={18} height={18} />
            {copied ? `Copied: ${contact.phoneDisplay}` : `Call: ${contact.phoneDisplay}`}
          </a>
        </div>
      </div>
    </section>
  )
}
