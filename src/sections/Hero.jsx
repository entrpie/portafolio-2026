import heroPhoto from '../assets/hero-blur.webp'
import './hero.css'

function Hero() {
  return (
    <header className="hero" id="top">
      <img
        className="hero__photo"
        src={heroPhoto}
        alt="Frida Sofía Escamilla Olguín"
        width={855}
        height={675}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      <div className="hero__copy">
        <h1 className="hero__title">portafolio</h1>
        <p className="hero__subtitle">prácticas profesionales, 2026</p>
      </div>
    </header>
  )
}

export default Hero
