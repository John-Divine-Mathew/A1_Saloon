/**
 * ─────────────────────────────────────────────────────────────
 *  DEMO CONTENT — GENT'S CRAFT
 * ─────────────────────────────────────────────────────────────
 *  Everything text-based lives here so the real client's
 *  business details can be dropped in later without touching
 *  any component code. Image placeholders are listed in
 *  /src/data/images.js.
 * ───────────────────────────────────────────────────────────── */

export const brand = {
  name: 'A1 SALON',
  fullName: 'A1 SALON & GROOMING LOUNGE',
  tagline: 'HAIR • BEAUTY • YOU',
  shortTagline: 'HAIR • BEAUTY • YOU',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export const contact = {
  phoneDisplay: '+91 85259 45357',
  phoneHref: 'tel:+918525945357',
  rawPhone: '8525945357',
  whatsappDisplay: '+91 85259 45357',
  whatsappNumber: '918525945357',
  whatsappMessage: "Hi A1 SALON, I'd like to book an appointment.",
  instagramHandle: '@a1_salon_8525',
  instagramHref: 'https://instagram.com/a1_salon_8525',
  addressLines: [
    '1st Floor, Above Vedha Medical',
    'ECR (East Coast Rd), Arunthavampulam, Tamil Nadu 614702',
  ],
  landmark: 'Above Vedha Medical',
  area: 'Arunthavampulam, ECR',
  googleMapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('VEDHA MEDICAL ARUNTHAVAMBULAM, Ecr, East Coast Rd, Arunthavampulam, Sanganthi, Tamil Nadu 614702')}`,
}

export const getWhatsappHref = () =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`

export const hero = {
  eyebrowDetail: 'Walk-ins & Appointments Welcome',
  supporting:
    'Modern styling, classic cuts and luxury beauty care tailored to your personality.',
  ctaPrimary: 'Book on WhatsApp',
  ctaSecondary: 'View Services',
}

export const about = {
  heading: 'More Than Just a Haircut.',
  body: 'A1 SALON brings premium hair styling, facial grooming and personal beauty care together in a stylish, hygienic and relaxing atmosphere. Every cut is shaped with precision around your individual look.',
  stats: [
    { value: '5★', label: 'Client Rating' },
    { value: '1000+', label: 'Happy Clients' },
    { value: '6+', label: 'Expert Services' },
  ],
}

export const services = {
  heading: 'Services Made for Your Style',
  cta: 'Book Your Cut',
  items: [
    {
      name: 'Classic Haircut',
      description: 'A precise, timeless cut tailored to your face and style.',
      price: '₹150',
      icon: 'scissors',
    },
    {
      name: 'Beard Trim',
      description: 'Sharp lines and a clean shape for a well-groomed beard.',
      price: '₹100',
      icon: 'razor',
    },
    {
      name: 'Haircut + Beard',
      description: 'The complete package — hair and beard, perfected together.',
      price: '₹220',
      icon: 'combo',
    },
    {
      name: 'Kids Haircut',
      description: 'Patient, friendly cuts for the younger gents.',
      price: '₹120',
      icon: 'kids',
    },
    {
      name: 'Hair Styling',
      description: 'Finished styling for events, work or everyday polish.',
      price: '₹200',
      icon: 'comb',
    },
    {
      name: 'Premium Grooming',
      description: 'Full grooming session — cut, beard, wash and styling.',
      price: '₹350',
      icon: 'crown',
    },
  ],
}

export const whyChooseUs = {
  heading: 'Why A1 SALON?',
  items: [
    {
      icon: 'experience',
      title: 'Skilled Stylists',
      text: 'Precision cuts and dedicated artistry for hair and beard.',
    },
    {
      icon: 'clean',
      title: 'Clean & Comfortable',
      text: 'A neat, sanitized and welcoming lounge ambiance.',
    },
    {
      icon: 'attention',
      title: 'Personal Attention',
      text: 'Every style is customized to your face shape and preference.',
    },
    {
      icon: 'pricing',
      title: 'Honest Pricing',
      text: 'Luxury salon experience without unreasonable prices.',
    },
  ],
}

export const gallery = {
  heading: 'Signature Styles. Real Results.',
}

export const reviews = {
  heading: 'What Our Clients Say',
  items: [
    {
      quote:
        'Great haircut and very friendly service. The attention to detail was exceptional.',
      name: 'Rahul M.',
    },
    {
      quote:
        'Clean salon, great ambiance and exactly the fade and beard trim I wanted.',
      name: 'Karthik S.',
    },
    {
      quote: 'One of the best salon experiences in Arunthavampulam. Highly recommended!',
      name: 'Arun P.',
    },
    {
      quote: 'Booked directly via WhatsApp, reached there and was attended immediately. Excellent staff.',
      name: 'Vishnu R.',
    },
  ],
}

export const booking = {
  heading: 'Ready for a Fresh Look?',
  supporting:
    "Book your appointment or drop by directly. We are located on the 1st Floor, Above Vedha Medical, Arunthavampulam.",
  ctaWhatsapp: 'Book on WhatsApp',
  ctaCall: 'Call 85259 45357',
}

export const hours = [
  { day: 'Monday', time: '9:00 AM – 9:30 PM' },
  { day: 'Tuesday', time: '9:00 AM – 9:30 PM' },
  { day: 'Wednesday', time: '9:00 AM – 9:30 PM' },
  { day: 'Thursday', time: '9:00 AM – 9:30 PM' },
  { day: 'Friday', time: '9:00 AM – 9:30 PM' },
  { day: 'Saturday', time: '9:00 AM – 9:30 PM' },
  { day: 'Sunday', time: '9:00 AM – 9:00 PM' },
]

export const footer = {
  copyright: `© ${new Date().getFullYear()} A1 SALON. All rights reserved.`,
}
