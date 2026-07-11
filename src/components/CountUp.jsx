import { useEffect, useRef, useState } from 'react'

/**
 * CountUp — animates from 0 up to the numeric portion of `value` once the
 * element becomes visible, keeping any non-numeric prefix/suffix intact
 * (e.g. "5+", "2022–26", "CNN → Web" — the last two have no leading number
 * so they simply fade in as-is).
 */
export default function CountUp({ value, visible, duration = 1100 }) {
  const match = String(value).match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''

  const [display, setDisplay] = useState(target === null ? value : '0' + suffix)
  const started = useRef(false)

  useEffect(() => {
    if (!visible || started.current || target === null) return
    started.current = true

    const startTime = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const current = Math.round(eased * target)
      setDisplay(current + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [visible, target, suffix, duration])

  return <>{display}</>
}
