import Reveal from './Reveal'
import './Education.css'

export default function Education() {
  return (
    <section id="education">
      <div className="vein-track"></div>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Academic foundation.</h2>
        </Reveal>

        <Reveal delay={1} as="div" className="edu-card">
          <div className="edu-card__node" aria-hidden="true"></div>
          <div className="edu-card__body">
            <h3 className="edu-card__degree">Bachelor of Science in Computer Science (BSCS)</h3>
            <p className="edu-card__school">The Islamia University of Bahawalpur</p>
            <p className="edu-card__years">2022 — 2026</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
