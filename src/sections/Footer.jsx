import Reveal from '../components/Reveal'
import { MailIcon, ChatIcon } from '../components/icons'
import './footer.css'

const GMAIL_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=frida.escamilla.ol@usb.edu.mx'
const WHATSAPP_URL = 'https://wa.me/525584480887'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="contacto">
      <Reveal as="div" className="footer__inner">
        <p className="eyebrow">Hablemos</p>
        <h2 className="footer__title">contáctame</h2>
        <p className="footer__subtitle">
        prácticas profesionales, 2026.
        </p>
        <a
          className="footer__cta u-link"
          href={GMAIL_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailIcon className="icon" />
          frida.escamilla.ol@usb.edu.mx
        </a>

        <div className="footer__meta">
          <a
            className="footer__meta-link u-link"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ChatIcon className="icon" />
            55 8448 0887
          </a>
          <span>CDMX, Álvaro Obregón</span>
        </div>

        <div className="footer__bottom">
          <span>© {year} Frida Sofía Escamilla Olguín</span>
          <a className="u-link" href="#top">
            Volver arriba ↑
          </a>
        </div>
      </Reveal>
    </footer>
  )
}

export default Footer
