# GENT'S CRAFT — Demo Website

A demo website built for a fictional local barber shop, "GENT'S CRAFT."
Built with React + Vite. All content is placeholder/demo content, structured
so it's fast to swap in the real client's details later.

## Running it

```bash
npm install
npm run dev        # local dev server
npm run build       # production build -> /dist
npm run preview     # preview the production build
```

Requires Node.js 18+.

## Project structure

```
src/
  data/
    content.js     ← ALL text content: brand, nav, hours, services,
                      reviews, contact details, etc. Edit this file
                      first when real client info is ready.
    images.js       ← Labels for every image placeholder, describing
                      what each photo should show.
  components/
    Placeholder.jsx ← The stand-in "image" component. Swap for a real
                      <img src="..." alt="..." /> once photography
                      is available — see note below.
    icons.jsx        ← Hand-drawn inline SVG icon set (no external
                      icon library dependency).
    Navbar.jsx, Hero.jsx, About.jsx, Services.jsx, WhyChooseUs.jsx,
    Gallery.jsx, Reviews.jsx, Booking.jsx, Location.jsx, Footer.jsx,
    MobileStickyCTA.jsx
                    ← One component per section, matching the page
                      top-to-bottom.
  index.css         ← Design tokens (colors, type, spacing), reset,
                      buttons, shared animation classes.
  App.css            ← Section-by-section layout and styling.
```

## Replacing demo content with real client data

1. **Text & business details** — edit `src/data/content.js`:
   - `contact.whatsappNumber` — replace with the real WhatsApp number
     (digits only, with country code, e.g. `919876543210`).
   - `contact.phoneDisplay` / `phoneHref`, `addressLines`,
     `instagramHandle` / `instagramHref`.
   - `hours` — real opening hours.
   - `services.items`, `reviews.items`, `about.stats` — swap in the
     real service list, pricing, testimonials and stats.

2. **Images** — every photo on the site is currently a labelled
   placeholder (`<Placeholder label="..." />`) so it's obvious what
   real photography needs to go where. To replace one:
   - Drop the real image into `src/assets/`.
   - In the relevant component, replace
     `<Placeholder label="..." className="x" />` with
     `<img src={realImage} alt="..." className="x" />`.
   - No layout or CSS changes are needed — placeholders fill their
     parent container exactly like a real image would.

3. **Map** — `Location.jsx` has a placeholder in place of an embedded
   map. Replace with a Google Maps embed `<iframe>` once the real
   address is set.

4. **SEO / Open Graph** — update the `<title>`, meta description and
   `og:` tags in `index.html` once final copy is approved, and add a
   real `og-image.jpg` to `public/`.

## Design notes

- Palette: warm ivory background, charcoal ink, a single warm-brown
  accent for actions, muted gold used sparingly for small marks and
  dividers.
- Type: **Fraunces** (display serif) for headings, **Work Sans**
  (humanist sans) for body and UI text.
- Motion is intentionally restrained: one staggered entrance on the
  hero, a single fade/rise reveal reused as each section enters
  view, and small hover transitions — nothing else animates.
