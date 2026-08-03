import { useEffect, useState } from 'react'

const AUTO_CLOSE_MS = 60_000

function FlipCard({ image, alt, label, summary }) {
  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((v) => !v)

  useEffect(() => {
    if (!flipped) return
    const timer = setTimeout(() => setFlipped(false), AUTO_CLOSE_MS)
    return () => clearTimeout(timer)
  }, [flipped])

  return (
    <div
      className={`project__gallery-item project__flip ${flipped ? 'is-flipped' : ''}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={flipped ? `Ocultar resumen — ${alt}` : `Ver resumen — ${alt}`}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggle()
        }
      }}
    >
      <div className="project__flip-inner">
        <div className="project__flip-face project__flip-face--front">
          <img src={image} alt={alt} loading="lazy" decoding="async" />
        </div>
        <div
          className="project__flip-face project__flip-face--back"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="project__flip-glass">
            <p className="project__flip-label">{label}</p>
            <p className="project__flip-text">{summary}</p>
          </div>
        </div>
      </div>
      <span className="u-link">{flipped ? 'cerrar' : 'info ↗'}</span>
    </div>
  )
}

export default FlipCard
