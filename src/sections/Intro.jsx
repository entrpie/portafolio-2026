import avatar from '../assets/avatar.webp'
import avatarFrame from '../assets/intro-avatar-frame.png'
import headingSobreMi from '../assets/intro-heading-sobremi.jpg'
import Reveal from '../components/Reveal'
import { MailIcon, ChatIcon } from '../components/icons'
import './intro.css'

// Reemplaza '#' con el enlace real al PDF del currículum (ej. subido a /public/cv.pdf).
const CV_URL = 'https://drive.google.com/file/d/18FUFsMkA4GVnRlE_gHG6VTj-0qZdJshf/view?usp=sharing'
const GMAIL_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=frida.escamilla.ol@usb.edu.mx'
const WHATSAPP_URL = 'https://wa.me/525584480887'

function Intro() {
  return (
    <section className="intro" id="sobre-mi">
      <Reveal as="div" className="intro__intro">
        <p className="eyebrow">Introducción</p>
        <img
          className="intro__heading"
          src={headingSobreMi}
          alt="Sobre mí"
          width={544}
          height={168}
          loading="lazy"
          decoding="async"
        />
      </Reveal>

      <Reveal as="div" className="intro__panel">
        <div className="intro__photo-row">
          <div className="intro__avatar-wrap">
            <img
              className="intro__avatar"
              src={avatar}
              alt="Frida Sofía Escamilla Olguín"
              width={376}
              height={500}
              loading="lazy"
              decoding="async"
            />
            <img
              className="intro__avatar-frame"
              src={avatarFrame}
              alt=""
              aria-hidden="true"
              width={891}
              height={1148}
              loading="lazy"
              decoding="async"
            />
          </div>

          <dl className="intro__rows">
            <div className="intro__row">
              <dt>Nombre</dt>
              <dd>Frida Sofía Escamilla Olguín</dd>
            </div>
            <div className="intro__row">
              <dt>Educación</dt>
              <dd>
                Tecnologías de la Información en los Negocios 
                <br />
                Universidad Simón Bolívar
                (2024–2027)
              </dd>
            </div>
            <div className="intro__row">
              <dt>Idiomas</dt>
              <dd>Español (nativo), Inglés (C1)</dd>
            </div>
            <div className="intro__row">
              <dt>Ubicación</dt>
              <dd>CDMX, México</dd>
            </div>
            <div className="intro__row">
              <dt>Contacto</dt>
              <dd className="intro__contact-links">
                <a
                  className="u-link intro__contact-link"
                  href={GMAIL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailIcon className="icon" />
                  frida.escamilla.ol@usb.edu.mx
                </a>
                <a
                  className="u-link intro__contact-link"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChatIcon className="icon" />
                  55 8448 0887
                </a>
              </dd>
            </div>
            <div className="intro__row">
              <dt>¿Quién soy?</dt>
              <dd>
                Soy estudiante de Tecnologías de la Información en los Negocios y me apasiona el desarrollo fullstack y el diseño UX/UI porque creo en la conexión de la tecnología con las personas a través de interfaces funcionales y atractivas para la creacion de espacios y experiencias únicas. 

Cuento con una fuerte criterio visual, pero mi formación me da la flexibilidad para adaptarme a diferentes rubros de mi carrera, como el análisis de datos, programación y estrategias de negocios. Busco encontar soluciones desde la intersección de la lógica, la practicidad y la estética. 
              </dd>
            </div>
          </dl>
        </div>

        <a className="intro__cv-button" href={CV_URL} target="_blank" rel="noopener noreferrer">
          Ver currículum ↗
        </a>
      </Reveal>
    </section>
  )
}

export default Intro
