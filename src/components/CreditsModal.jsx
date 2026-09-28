import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { User, Briefcase, Code2, Phone, ExternalLink, X } from 'lucide-react'

export default function CreditsModal({ isOpen, onClose }) {
  // Background scroll lock & keyboard accessibility
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight
    const originalHtmlOverflow = document.documentElement.style.overflow

    // Prevent layout shift when scrollbar disappears
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    // Lock scrolling on both body and html
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
      document.documentElement.style.overflow = originalHtmlOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const modalContent = (
    <div
      className="credits-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="credits-modal-title"
    >
      <div className="credits-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="credits-modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={17} />
        </button>

        {/* Clean Header */}
        <div className="credits-modal-header">
          <span className="credits-modal-kicker">DEVELOPER &amp; TECHNICAL SUPPORT</span>
          <h3 id="credits-modal-title" className="credits-modal-title">
            Efron Web Services Hub
          </h3>
          <p className="credits-modal-tagline">
            Professional Web Architecture &amp; Digital Solutions
          </p>
        </div>

        {/* Team Members */}
        <div className="credits-team-grid">
          {/* Maria Efron */}
          <div className="credits-person-card">
            <div className="credits-person-avatar credits-person-avatar--human" aria-hidden="true">
              <User size={18} />
            </div>
            <div className="credits-person-info">
              <h4 className="credits-person-name" title="Maria Efron">
                Maria Efron
              </h4>
              <div className="credits-person-designation">
                <Briefcase size={12} className="credits-designation-icon" />
                <span>CEO of EWS Hub</span>
              </div>
              <div className="credits-person-contact-row">
                <a href="tel:+918122642246" className="credits-person-phone-link">
                  <Phone size={12} />
                  <span>+91 81226 42246</span>
                </a>
              </div>
            </div>
          </div>

          {/* John Divine Mathew J */}
          <div className="credits-person-card">
            <div className="credits-person-avatar credits-person-avatar--human" aria-hidden="true">
              <User size={18} />
            </div>
            <div className="credits-person-info">
              <h4 className="credits-person-name" title="John Divine Mathew J">
                John Divine Mathew J
              </h4>
              <div className="credits-person-designation">
                <Code2 size={12} className="credits-designation-icon" />
                <span>Senior Software Engineer</span>
              </div>
              <div className="credits-person-contact-row">
                <a href="tel:+919626749641" className="credits-person-phone-link">
                  <Phone size={12} />
                  <span>+91 96267 49641</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Business Website Portal */}
        <div className="credits-modal-footer">
          <div className="credits-site-card">
            <div className="credits-site-meta">
              <div className="credits-site-badge">
                <span className="credits-status-dot" aria-hidden="true" />
                <span>OFFICIAL AGENCY PORTAL</span>
              </div>
              <div className="credits-site-url">ewshub.vercel.app</div>
            </div>
            <a
              href="https://ewshub.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="credits-site-btn"
            >
              <span>Visit Official Website</span>
              <ExternalLink size={13} />
            </a>
          </div>
          <p className="credits-support-hint">
            Available 24/7 for website maintenance, custom features &amp; digital inquiries
          </p>
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
