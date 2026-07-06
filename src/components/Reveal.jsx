import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const [ref, visible] = useReveal()
  const delayClass = delay ? `reveal-delay-${delay}` : ''
  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
