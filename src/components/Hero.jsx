import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true"></div>

      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">AI &amp; Machine Learning Engineer</p>
          <h1 className="hero__title">
            Gohar <span className="hero__title-accent">Fatima</span>
          </h1>
          <p className="hero__subtitle">
            Computer Science Graduate — building intelligent systems where
            <span className="hero__highlight"> neural networks </span>
            meet real-world problems, from crop disease detection to
            full-stack web platforms.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">View Projects</a>
            <a href="#contact" className="btn btn--ghost">Get in Touch</a>
          </div>

          <div className="hero__meta">
            <span>The Islamia University of Bahawalpur</span>
            <span className="hero__meta-sep">•</span>
            <span>BSCS, 2022–2026</span>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <svg viewBox="0 0 400 460" className="hero__svg">
            {/* Leaf outline — draws itself in on load */}
            <path
              className="hero__outline"
              d="M200 30 C 110 90, 70 190, 130 300 C 160 355, 180 400, 200 430 C 220 400, 240 355, 270 300 C 330 190, 290 90, 200 30 Z"
              fill="none"
            />
            {/* Central vein */}
            <path className="hero__vein hero__vein--main" d="M200 60 L200 415" fill="none" />
            {/* Side veins, styled like circuit traces */}
            <path className="hero__vein hero__vein--branch d1" d="M200 120 L150 160 L150 200" fill="none" />
            <path className="hero__vein hero__vein--branch d2" d="M200 120 L250 160 L250 200" fill="none" />
            <path className="hero__vein hero__vein--branch d3" d="M200 200 L145 250" fill="none" />
            <path className="hero__vein hero__vein--branch d4" d="M200 200 L255 250" fill="none" />
            <path className="hero__vein hero__vein--branch d5" d="M200 280 L160 320" fill="none" />
            <path className="hero__vein hero__vein--branch d6" d="M200 280 L240 320" fill="none" />

            {/* Nodes — pulse like activated neurons */}
            {[
              [200, 60, 0], [150, 160, 0.2], [250, 160, 0.3], [150, 200, 0.5],
              [250, 200, 0.6], [145, 250, 0.8], [255, 250, 0.9], [200, 200, 0.4],
              [200, 280, 1.0], [160, 320, 1.2], [240, 320, 1.3], [200, 380, 1.4],
            ].map(([cx, cy, delay], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="4.5"
                className="hero__node"
                style={{ animationDelay: `${1.1 + delay * 0.35}s` }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span></span>
      </div>
    </section>
  )
}
