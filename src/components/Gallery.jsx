import { gallery } from '../data/content.js'
import { galleryImages } from '../data/images.js'
import useReveal from './useReveal.js'

export default function Gallery() {
  const ref = useReveal()

  return (
    <section id="gallery" className="gallery section" ref={ref}>
      <div className="section__intro section__intro--center">
        <span className="section__kicker">VISUAL SHOWCASE</span>
        <h2 className="section__heading">{gallery.heading}</h2>
        <p className="section__subtext">
          A glimpse into our daily cuts, beard work, artisanal tools, and shop atmosphere.
        </p>
      </div>

      <div className="gallery__masonry">
        {galleryImages.map((img, i) => (
          <figure
            className={`gallery__item gallery__item--${img.ratio}`}
            key={img.label}
            style={{ transitionDelay: `${(i % 6) * 60}ms` }}
          >
            <div className="gallery__frame reveal-clip">
              <img
                src={img.src}
                alt={img.alt || img.label}
                className="gallery__image"
                loading="lazy"
              />
              <div className="gallery__overlay">
                {img.category && <span className="gallery__tag">{img.category}</span>}
                <span className="gallery__caption-text">{img.label}</span>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
