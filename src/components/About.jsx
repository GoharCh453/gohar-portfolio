import Reveal from './Reveal'
import './About.css'

const HIGHLIGHTS = [
  { value: '4+', label: 'Applied AI/ML projects shipped' },
  { value: '2022–26', label: 'BSCS, Islamia University Bahawalpur' },
  { value: 'CNN → Web', label: 'From model training to deployed UI' },
]

export default function About() {
  return (
    <section id="about">
      <div className="vein-track"></div>
      <div className="container">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={1} as="div" className="about__text">
            <h2 className="section-title">
              Turning research-grade models into tools people can actually use.
            </h2>
            <p className="about__body">
              I'm a Computer Science graduate from The Islamia University of Bahawalpur with a
              passion for Artificial Intelligence, Machine Learning, and full-stack web
              development. I enjoy building intelligent applications that solve real-world
              problems using modern technologies — the kind that go from a trained model in a
              notebook to a working interface someone can actually open and use.
            </p>
            <p className="about__body">
              I'm continuously learning new tools and techniques to develop innovative,
              reliable, and user-friendly software solutions — currently exploring deeper
              computer vision architectures and full-stack frameworks.
            </p>
          </Reveal>

          <Reveal delay={2} as="div" className="about__stats">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="about__stat">
                <span className="about__stat-value">{h.value}</span>
                <span className="about__stat-label">{h.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
