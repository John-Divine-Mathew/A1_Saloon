import { brand, hero } from '../data/content.js'
import { heroImage, heroAccentImage } from '../data/images.js'
import { IconArrowRight, IconScissors } from './icons.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <div className="hero__rating-badge hero__enter hero__enter--1">
            <span className="hero__stars">★★★★★</span>
            <span className="hero__rating-score">4.9 / 5</span>
            <span className="hero__rating-count">· 1,000+ Happy Clients</span>
          </div>

          <h1 className="hero__headline hero__enter hero__enter--2">
            Signature Style.
            <br />
            <span className="hero__headline-highlight">Hair · Beauty · You.</span>
          </h1>

          <p className="hero__supporting hero__enter hero__enter--3">{hero.supporting}</p>

          <div className="hero__actions hero__enter hero__enter--4">
            <a href="#booking" className="btn btn--primary">
              <IconScissors width={17} height={17} />
              {hero.ctaPrimary}
            </a>
            <a href="#services" className="hero__link">
              {hero.ctaSecondary}
              <IconArrowRight width={15} height={15} />
            </a>
          </div>

          <div className="hero__meta hero__enter hero__enter--4">
            <div className="hero__meta-item">
              <span className="hero__meta-dot"></span>
              <span>8+ Years of Craft</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-dot"></span>
              <span>Walk-ins Welcome</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-dot"></span>
              <span>Premium Products</span>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__media-primary">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="hero__image"
              loading="eager"
            />
          </div>
          <div className="hero__media-secondary">
            <img
              src={heroAccentImage.src}
              alt={heroAccentImage.alt}
              className="hero__image-accent"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
