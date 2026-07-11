import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

/**
 * TiltCard — combines the scroll-reveal entrance animation with a subtle
 * 3D mouse-tilt effect (rotates toward the cursor, plus a moving highlight
 * position used by the CSS shine-sweep in Projects.css).
 */
export default function TiltCard({ children, delay = 0, className = '' }) {
  const [revealRef, visible] = useReveal()
  const cardRef = useRef(null)

  const setRefs = (node) => {
    cardRef.current = node
    revealRef.current = node
  }

  const handleMouseMove = (e) => {
    const node = cardRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height

    const rotateX = (0.5 - py) * 10
    const rotateY = (px - 0.5) * 10

    node.style.setProperty('--tilt-x', `${rotateX}deg`)
    node.style.setProperty('--tilt-y', `${rotateY}deg`)
    node.style.setProperty('--shine-x', `${px * 100}%`)
    node.style.setProperty('--shine-y', `${py * 100}%`)
  }

  const handleMouseLeave = () => {
    const node = cardRef.current
    if (!node) return
    node.style.setProperty('--tilt-x', '0deg')
    node.style.setProperty('--tilt-y', '0deg')
  }

  const delayClass = delay ? `reveal-delay-${delay}` : ''

  return (
    <article
      ref={setRefs}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`reveal ${delayClass} ${visible ? 'visible' : ''} tilt-card ${className}`}
    >
      {children}
    </article>
  )
}
