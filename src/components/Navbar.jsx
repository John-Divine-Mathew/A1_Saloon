import { useEffect, useState } from 'react'
import { brand, nav } from '../data/content.js'
import { IconMenu, IconClose } from './icons.jsx'
import a1Logo from '../assets/images/a1-salon-logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--compact' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={handleLinkClick}>
          <img
            src={a1Logo}
            alt="A1 SALON Logo"
            className="nav__brand-logo"
            width={40}
            height={40}
          />
          <span className="nav__brand-name">{brand.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#booking" className="nav__cta">
          Book Appointment
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <div id="mobile-menu" className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="nav__mobile-link" onClick={handleLinkClick}>
            {item.label}
          </a>
        ))}
        <a href="#booking" className="nav__mobile-cta" onClick={handleLinkClick}>
          Book Appointment
        </a>
      </div>
    </header>
  )
}
