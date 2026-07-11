import './BackgroundFX.css'

/**
 * BackgroundFX — a few large, blurred, softly-colored blobs that drift
 * slowly behind all page content. Fixed position, purely decorative,
 * ignored by screen readers.
 */
export default function BackgroundFX() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <span className="bg-fx__blob bg-fx__blob--1"></span>
      <span className="bg-fx__blob bg-fx__blob--2"></span>
      <span className="bg-fx__blob bg-fx__blob--3"></span>
      <div className="bg-fx__grid"></div>
    </div>
  )
}
