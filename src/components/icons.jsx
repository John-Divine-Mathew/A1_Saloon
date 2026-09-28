// Minimal line-icon set, drawn as inline SVG so the project has
// zero icon-library dependency. All icons inherit color via
// currentColor and a shared stroke weight for visual consistency.

const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconScissors(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <line x1="7.8" y1="7.6" x2="20" y2="18" />
      <line x1="7.8" y1="16.4" x2="20" y2="6" />
    </svg>
  )
}

export function IconRazor(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4 L15 4 L19 8 L19 12 L5 12 Z" />
      <line x1="5" y1="12" x2="5" y2="20" />
      <line x1="9" y1="12" x2="9" y2="20" />
    </svg>
  )
}

export function IconCombo(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 16 C4 11 8 8 12 8 C16 8 20 11 20 16" />
      <line x1="7" y1="16" x2="7" y2="19" />
      <line x1="10" y1="16" x2="10" y2="19" />
      <line x1="13" y1="16" x2="13" y2="19" />
      <line x1="16" y1="16" x2="16" y2="19" />
    </svg>
  )
}

export function IconKids(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="4.2" />
      <path d="M5 20 C5 15.5 8 13.5 12 13.5 C16 13.5 19 15.5 19 20" />
    </svg>
  )
}

export function IconComb(props) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="6" y1="7" x2="6" y2="17" />
      <line x1="9.5" y1="7" x2="9.5" y2="17" />
      <line x1="13" y1="7" x2="13" y2="17" />
      <line x1="16.5" y1="7" x2="16.5" y2="17" />
      <line x1="20" y1="7" x2="20" y2="17" />
    </svg>
  )
}

export function IconCrown(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 17 L4 9 L9 13 L12 7 L15 13 L20 9 L20 17 Z" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </svg>
  )
}

export function IconExperience(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8 L12 12 L15 14" />
    </svg>
  )
}

export function IconClean(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 C15 6 18 9.5 18 13 A6 6 0 0 1 6 13 C6 9.5 9 6 12 3 Z" />
    </svg>
  )
}

export function IconAttention(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20 C5 15.8 8 13.8 12 13.8 C16 13.8 19 15.8 19 20" />
      <path d="M9 8 L11 10 L15 5.5" />
    </svg>
  )
}

export function IconPricing(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 4 L14 4 L20 10 L12 18 L4 10 Z" />
      <circle cx="9" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconWhatsapp(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 19 L7.2 15.2 A7 7 0 1 1 9.8 17.6 Z" />
      <path d="M9 9.5 C9 11.5 10.5 13.5 12.5 14.5 C13 13.7 13.5 13.2 14 13 C14.6 13.4 15.4 14 16 14.5 C15.8 15.4 15 16 14 16 C11.5 16 8 13 8 10.5 C8 9.5 8.6 8.7 9.5 8.5 C10 9.1 10.5 9.9 10.9 10.5 C10.7 11 10.2 11.4 9 9.5 Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 4 L9.5 4 L11 8 L8.7 9.5 C9.6 11.8 11.2 13.4 13.5 14.3 L15 12 L19 13.5 L19 17 C19 18.1 18.1 19 17 19 C10.9 18.6 5.4 13.1 5 7 C5 5.9 5.9 5 6 4 Z" />
    </svg>
  )
}

export function IconInstagram(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21 C12 21 18 14.6 18 10 A6 6 0 0 0 6 10 C6 14.6 12 21 12 21 Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

export function IconClock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5 L12 12 L15.2 13.8" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

export function IconClose(props) {
  return (
    <svg {...base} {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  )
}

export function IconArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <path d="M13 6 L19 12 L13 18" />
    </svg>
  )
}

export function IconExternalLink(props) {
  return (
    <svg {...base} {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export function IconGlobe(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

