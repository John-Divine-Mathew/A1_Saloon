import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Gallery from './components/Gallery.jsx'
import Reviews from './components/Reviews.jsx'
import Booking from './components/Booking.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'
import MobileStickyCTA from './components/MobileStickyCTA.jsx'
import CreditsModal from './components/CreditsModal.jsx'

export default function App() {
  const [isCreditsOpen, setIsCreditsOpen] = useState(false)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Booking />
        <Location />
      </main>
      <Footer onOpenCredits={() => setIsCreditsOpen(true)} />
      <MobileStickyCTA />
      <CreditsModal
        isOpen={isCreditsOpen}
        onClose={() => setIsCreditsOpen(false)}
      />
    </>
  )
}
