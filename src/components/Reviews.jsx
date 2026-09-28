import { reviews } from '../data/content.js'
import useReveal from './useReveal.js'

export default function Reviews() {
  const ref = useReveal()
  // Duplicate the reviews array for seamless infinite looping
  const marqueeReviews = [...reviews.items, ...reviews.items]

  return (
    <section id="reviews" className="reviews section" ref={ref}>
      <div className="section__intro section__intro--center">
        <span className="section__kicker">CLIENT REVIEWS</span>
        <h2 className="section__heading reviews__heading">{reviews.heading}</h2>
        <p className="section__subtext">
          Rated 4.9/5 by gentlemen across the region. Here is what they have to say.
        </p>
      </div>

      <div className="reviews__marquee" tabIndex={0} aria-label="Customer feedback auto scrolling">
        <div className="reviews__track">
          {marqueeReviews.map((item, index) => {
            const initials = item.name.slice(0, 2).trim()
            return (
              <article className="reviews__card" key={`${item.name}-${index}`}>
                <div className="reviews__stars">★★★★★</div>
                <p className="reviews__quote">“{item.quote}”</p>
                <div className="reviews__author">
                  <div className="reviews__avatar">{initials}</div>
                  <div>
                    <div className="reviews__name">{item.name}</div>
                    <div className="reviews__badge">Verified Client · Arunthavampulam</div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
