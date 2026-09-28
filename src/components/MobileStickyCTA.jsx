import { contact } from '../data/content.js'
import { IconPhone, IconPin } from './icons.jsx'

export default function MobileStickyCTA() {
  return (
    <div className="mobile-cta-bar">
      <a
        href={contact.phoneHref}
        className="mobile-cta mobile-cta--call"
        title={`Call ${contact.phoneDisplay}`}
      >
        <IconPhone width={17} height={17} />
        <span>Call Now</span>
      </a>
      <a
        href={contact.googleMapsHref}
        className="mobile-cta mobile-cta--location"
        target="_blank"
        rel="noopener noreferrer"
        title="Open Shop Location in Google Maps"
      >
        <IconPin width={17} height={17} />
        <span>Location</span>
      </a>
    </div>
  )
}
