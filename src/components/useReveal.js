import { useEffect, useRef } from 'react'

// One consistent, restrained reveal treatment reused across
// sections: elements fade and rise slightly into place the
// first time they enter the viewport. Respects prefers-reduced-motion.
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Immediately mark visible if already in or near viewport upon load
    const rect = node.getBoundingClientRect()
    if (rect.top <= window.innerHeight * 1.15) {
      node.classList.add('is-visible')
    }

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.08, rootMargin: '120px 0px -30px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
