import Reveal from './Reveal'
import './Contact.css'

const CHANNELS = [
  {
    label: 'Email',
    value: 'goharfatima798@gmail.com',
    href: 'mailto:goharfatima798@gmail.com',
    icon: '📧',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gohar-fatima-4b2a06284',
    href: 'https://linkedin.com/in/gohar-fatima-4b2a06284',
    icon: '💼',
  },
  {
    label: 'GitHub',
    value: 'github.com/GoharCh453',
    href: 'https://github.com/GoharCh453',
    icon: '💻',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="vein-track"></div>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let's build something intelligent together.</h2>
          <p className="contact__intro">
            Open to opportunities in AI/ML engineering, computer vision, and full-stack
            development. Reach out through any of the channels below.
          </p>
        </Reveal>

        <div className="contact__grid">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.label} delay={(i % 4) + 1} as="div">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__card"
              >
                <span className="contact__card-icon">{c.icon}</span>
                <span className="contact__card-label">{c.label}</span>
                <span className="contact__card-value">{c.value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
