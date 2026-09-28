import { brand, nav, footer, contact, getWhatsappHref } from '../data/content.js'
import a1Logo from '../assets/images/a1-salon-logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-header">
            <img
              src={a1Logo}
              alt="A1 SALON"
              className="footer__logo"
              width={56}
              height={56}
            />
            <div>
              <p className="footer__name">{brand.name}</p>
              <p className="footer__tagline">HAIR • BEAUTY • YOU</p>
            </div>
          </div>
          <p style={{ marginTop: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
            1st Floor, Above Vedha Medical, ECR, Arunthavampulam · Open 7 Days
          </p>
        </div>

        <div className="footer__nav-cols">
          <nav className="footer__links" aria-label="Footer">
            <strong style={{ color: '#ffffff', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Navigation
            </strong>
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__contact">
            <strong style={{ color: '#ffffff', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Connect
            </strong>
            <a href={getWhatsappHref()} target="_blank" rel="noopener noreferrer">
              WhatsApp Booking
            </a>
            <a href={contact.instagramHref} target="_blank" rel="noopener noreferrer">
              {contact.instagramHandle}
            </a>
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <span>{footer.copyright}</span>
        <span>Crafted for Modern Gentlemen · Arunthavampulam</span>
      </div>
    </footer>
  )
}
