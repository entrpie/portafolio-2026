import bloomCover from '../assets/bloom-cover.webp'
import higo from '../assets/higo.webp'
import limon from '../assets/limon.webp'
import bloomPreview from '../assets/bloom-preview.webp'
import superClasificadorCover from '../assets/super-clasificador-confeti.webp'
import clasificadorNino from '../assets/clasificador-nino-pasto.webp'
import clasificadorAbstracto from '../assets/clasificador-abstracto.webp'
import clasificadorAvion from '../assets/clasificador-avion-papel.webp'
import techworkCover from '../assets/techwork-cover-sala.webp'
import techworkEsfera from '../assets/techwork-esfera.webp'
import techworkEsc from '../assets/techwork-esc.webp'
import techworkColina from '../assets/techwork-colina.webp'
import nodoCover from '../assets/nodo-camisas.webp'
import nodoSueter from '../assets/nodo-sueter.jpg'
import nodoPatchwork from '../assets/nodo-patchwork.webp'
import nodoTijeras from '../assets/nodo-tijeras.webp'
import Reveal from '../components/Reveal'
import FlipCard from '../components/FlipCard'
import './projects.css'

const LINKS = {
  bloom: { code: 'https://github.com/entrpie/bloomeur', preview: 'https://entrpie.github.io/bloomeur/' },
  clasificador: { code: 'https://github.com/entrpie/super-clasificador.git', preview: 'https://final-basura.tiiny.site/' },
  techwork: { code: 'https://github.com/entrpie/techwork', preview: 'https://entrpie.github.io/techwork/' },
  nodo: { code: 'https://github.com/entrpie/nodo.git', preview: 'https://drive.google.com/file/d/1BNVixehRKZzAhGPGzNMqNfOZJY8w-BS4/view?usp=sharing' },
}

function Projects() {
  return (
    <section className="projects" id="proyectos">
      <Reveal as="div" className="projects__intro">
        <p className="eyebrow">explora</p>
        <h2 className="projects__heading">mis proyectos...</h2>
      </Reveal>

      {/* bloomeur.mx */}
      <Reveal as="article" className="project project--bloom" id="bloomeur">
        <p className="project__number">01</p>
        <div className="project__cover">
          <img
            src={bloomCover}
            alt="Portada del proyecto bloomeur.mx"
            width={1610}
            height={906}
            loading="lazy"
            decoding="async"
          />
          <div className="project__scrim" aria-hidden="true" />
          <h3 className="project__title project__title--display">
            bloomeur
            <br />
            .mx
          </h3>
        </div>
        <div className="project__gallery">
          <a
            className="project__gallery-item"
            href={LINKS.bloom.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={higo}
              alt="Fotografía de producto — higo, bloomeur.mx"
              loading="lazy"
              decoding="async"
            />
            <span className="u-link">código ↗</span>
          </a>
          <a
            className="project__gallery-item"
            href={LINKS.bloom.preview}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={limon}
              alt="Fotografía de producto — limón, bloomeur.mx"
              loading="lazy"
              decoding="async"
            />
            <span className="u-link">preview ↗</span>
          </a>
          <FlipCard
            image={bloomPreview}
            alt="Fotografía de campaña — bloomeur.mx"
            label="frontend + backend"
            summary="Realicé la investigación de usuarios, el diseño de la identidad de marca y el prototipado de alta fidelidad en Figma, y desarrollé el frontend completo en React, HTML5 y CSS3 con componentes reutilizables y responsivos. Estructuré el catálogo de productos y el flujo de navegación para optimizar la experiencia de compra, y gestioné el control de versiones y el despliegue del proyecto en GitHub."
          />
        </div>
      </Reveal>

      {/* Súper Clasificador */}
      <Reveal as="article" className="project project--clasificador" id="super-clasificador">
        <p className="project__number">02</p>
        <div className="project__cover">
          <img
            src={superClasificadorCover}
            alt="Portada del proyecto Súper Clasificador"
            width={1200}
            height={803}
            loading="lazy"
            decoding="async"
          />
          <h3 className="project__title project__title--display">
            ¡súper
            <br />
            clasificador!
          </h3>
        </div>
        <div className="project__gallery">
          <a
            className="project__gallery-item"
            href={LINKS.clasificador.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={clasificadorNino}
              alt="Fotografía — Súper Clasificador"
              loading="lazy"
              decoding="async"
            />
            <span className="u-link">código ↗</span>
          </a>
          <a
            className="project__gallery-item"
            href={LINKS.clasificador.preview}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={clasificadorAbstracto}
              alt="Fotografía — Súper Clasificador"
              loading="lazy"
              decoding="async"
            />
            <span className="u-link">preview ↗</span>
          </a>
          <FlipCard
            image={clasificadorAvion}
            alt="Fotografía — Súper Clasificador"
            label="project management + backend"
            summary="Propuse la idea original de este proyecto y su enfoque de impacto social, dirigido a enseñar a niños a clasificar residuos reciclables. Co-desarrollé el sistema de visión por computadora, entrenando una red neuronal ResNet50V2 con TensorFlow, diseñé la interfaz priorizando claridad y accesibilidad para público infantil, y realicé el despliegue del modelo integrando el backend de inferencia con el frontend."
          />
        </div>
      </Reveal>

      {/* Cursos Techwork */}
      <Reveal as="article" className="project project--techwork" id="techwork">
        <p className="project__number">03</p>
        <div className="project__cover">
          <img
            src={techworkCover}
            alt="Portada del proyecto Cursos Techwork"
            width={1199}
            height={1481}
            loading="lazy"
            decoding="async"
          />
          <h3 className="project__title project__title--display">
            cursos
            <br />
            techwork
          </h3>
        </div>
        <div className="project__gallery">
          <a
            className="project__gallery-item"
            href={LINKS.techwork.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={techworkEsfera}
              alt="Fotografía — Cursos Techwork"
              loading="lazy"
              decoding="async"
            />
            <span className="u-link">código ↗</span>
          </a>
          <a
            className="project__gallery-item"
            href={LINKS.techwork.preview}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={techworkEsc}
              alt="Fotografía — Cursos Techwork"
              loading="lazy"
              decoding="async"
            />
            <span className="u-link">preview ↗</span>
          </a>
          <FlipCard
            image={techworkColina}
            alt="Fotografía — Cursos Techwork"
            label="frontend + backend"
            summary="Realicé el diseño completo de identidad visual e interacción de usuario de esta plataforma, desde wireframes hasta el prototipo de alta fidelidad en Figma, y estructuré la experiencia de navegación entre los roles de administrador, profesor y cliente. Traduje el diseño a una interfaz funcional con HTML5, CSS3 y JavaScript, dejando la base modular lista para su integración con el backend."
          />
        </div>
      </Reveal>

      {/* NODO */}
      <Reveal as="article" className="project project--nodo" id="nodo">
        <p className="project__number">04</p>
        <div className="project__cover">
          <img
            src={nodoCover}
            alt="Portada del proyecto nodo"
            width={1080}
            height={1350}
            loading="lazy"
            decoding="async"
          />
          <h3 className="project__title project__title--hand">nodo</h3>
        </div>
        <div className="project__gallery">
          <a
            className="project__gallery-item"
            href={LINKS.nodo.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={nodoSueter}
              alt="Fotografía — nodo"
              loading="lazy"
              decoding="async"
            />
            <span className="u-link">código ↗</span>
          </a>
          <a
            className="project__gallery-item"
            href={LINKS.nodo.preview}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={nodoPatchwork}
              alt="Fotografía — nodo"
              loading="lazy"
              decoding="async"
            />
            <span className="u-link">preview ↗</span>
          </a>
          <FlipCard
            image={nodoTijeras}
            alt="Fotografía — nodo"
            label="frontend + backend"
            summary="Realicé el diseño del login y del frontend completo de este ERP, priorizando usabilidad y consistencia visual, y desarrollé un dashboard de inteligencia de negocios con KPIs en tiempo real. Construí el backend con FastAPI y PostgreSQL, y colaboré en el diseño del modelo relacional de la base de datos para garantizar consistencia entre frontend, backend y visualización."
          />
        </div>
      </Reveal>
    </section>
  )
}

export default Projects
