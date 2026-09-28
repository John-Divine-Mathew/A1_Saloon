import heroMainSrc from '../assets/images/hero-main.jpg'
import heroAccentSrc from '../assets/images/hero-accent.jpg'
import aboutInteriorSrc from '../assets/images/about-interior.jpg'
import galleryFadeSrc from '../assets/images/gallery-fade.jpg'
import galleryBeardSrc from '../assets/images/gallery-beard.jpg'
import galleryToolsSrc from '../assets/images/gallery-tools.jpg'
import galleryShaveSrc from '../assets/images/gallery-shave.jpg'
import galleryStylingSrc from '../assets/images/gallery-styling.jpg'
import galleryStorefrontSrc from '../assets/images/gallery-storefront.jpg'

export const heroImage = {
  src: heroMainSrc,
  alt: 'Master Barber at work crafting signature gentleman cut',
  label: 'Signature Barber Styling',
}

export const heroAccentImage = {
  src: heroAccentSrc,
  alt: 'Detail finishing touches with shears and comb',
  label: 'Precision Handcraft Detailing',
}

export const aboutImage = {
  src: aboutInteriorSrc,
  alt: 'Interior luxury barbershop lounge atmosphere',
  label: 'Interior Boutique Grooming Lounge',
}

export const galleryImages = [
  {
    src: galleryFadeSrc,
    alt: 'Classic skin fade haircut',
    label: 'Classic Skin Fade',
    category: 'Haircut',
    ratio: 'portrait',
  },
  {
    src: galleryBeardSrc,
    alt: 'Precision beard grooming and straight razor lineup',
    label: 'Beard Sculpting & Lineup',
    category: 'Beard',
    ratio: 'square',
  },
  {
    src: galleryStorefrontSrc,
    alt: 'Charming boutique storefront with warm golden glow',
    label: 'Boutique Shopfront',
    category: 'Shop',
    ratio: 'portrait',
  },
  {
    src: galleryToolsSrc,
    alt: 'Handcrafted barber scissors and wooden comb',
    label: 'Artisanal Craft Tools',
    category: 'Tools',
    ratio: 'square',
  },
  {
    src: galleryShaveSrc,
    alt: 'Relaxing luxury hot towel facial treatment',
    label: 'Luxury Hot Towel Shave',
    category: 'Grooming',
    ratio: 'square',
  },
  {
    src: galleryStylingSrc,
    alt: 'Finished gentleman styling in front of mirror',
    label: 'Dapper Finished Styling',
    category: 'Styling',
    ratio: 'landscape',
  },
]
