"use client";

import { useEffect, useRef, useState } from "react";
import { CONTENIDO_EMAIL } from "@/lib/site";
import SiteGlowCursor from "@/components/reactbits/GlowCursor/SiteGlowCursor";

const SOCIALS = [
  {
    icon: "fa-brands fa-tiktok",
    href: "https://www.tiktok.com/@soymarcus.dev",
    label: "TikTok",
  },
  {
    icon: "fa-brands fa-twitch",
    href: "https://www.twitch.tv/soymarcusdev",
    label: "Twitch",
  },
  {
    icon: "fa-brands fa-youtube",
    href: "https://www.youtube.com/@soymarcusdev",
    label: "YouTube",
  },
  {
    icon: "fa-brands fa-x-twitter",
    href: "https://x.com/soymarcusdev",
    label: "X",
  },
  {
    icon: "fa-brands fa-soundcloud",
    href: "https://soundcloud.com/soymarcusdev",
    label: "SoundCloud",
  },
];

const VIDEOS = [
  { src: "https://www.youtube.com/embed/E5EK9_7MKKk", title: "YouTube video player" },
  { src: "https://www.youtube.com/embed/KXG-Ua4vqb4", title: "YouTube video player" },
];

const EVENTOS = [
  {
    name: "Nerdearla",
    url: "Tickets — la conferencia de tecnología más grande de LATAM",
    href: "https://tickets.nerdearla.com?invited_by=f2wcdr4u",
    favicon: "https://www.google.com/s2/favicons?domain=nerdearla.com&sz=64",
    alt: "Nerdearla favicon",
  },
];

const RECURSOS = [
  {
    name: "Project Stitch",
    url: "Genera imágenes con IA privado y en tu dispositivo",
    href: "https://stitch.withgoogle.com/",
    favicon: "https://www.google.com/s2/favicons?domain=withgoogle.com&sz=64",
    alt: "Stitch Google favicon",
  },
  {
    name: "Suno",
    url: "Crea música y canciones completas con IA",
    href: "https://suno.com/",
    favicon: "https://www.google.com/s2/favicons?domain=suno.com&sz=64",
    alt: "Suno favicon",
  },
  {
    name: "Shots",
    url: "Mockups gratis y animados para tus diseños",
    href: "https://shots.so/",
    favicon: "https://www.google.com/s2/favicons?domain=shots.so&sz=64",
    alt: "Shots favicon",
  },
  {
    name: "Figma",
    url: "Extensión de Figma para Chrome",
    href: "https://chromewebstore.google.com/detail/figma/fkmaohpngenfoccdgceedjkfhkdcohmg?hl=es",
    favicon: "https://www.google.com/s2/favicons?domain=figma.com&sz=64",
    alt: "Figma favicon",
  },
  {
    name: "WebsitePrompts",
    url: "Prompts para crear websites con IA",
    href: "https://websiteprompts.ai/",
    favicon: "https://www.google.com/s2/favicons?domain=websiteprompts.ai&sz=64",
    alt: "WebsitePrompts favicon",
  },
  {
    name: "Pomelli",
    url: "Crea música con IA usando Google Labs",
    href: "https://labs.google.com/pomelli/about/",
    favicon: "https://www.google.com/s2/favicons?domain=labs.google.com&sz=64",
    alt: "Pomelli favicon",
  },
  {
    name: "TerrainK",
    url: "Generador de terrenos con IA",
    href: "https://terraink.app/",
    favicon: "https://www.google.com/s2/favicons?domain=terraink.app&sz=64",
    alt: "TerrainK favicon",
  },
  {
    name: "Magnific",
    url: "Upscaling y mejora de imágenes con IA",
    href: "https://www.magnific.com/es",
    favicon: "https://www.google.com/s2/favicons?domain=magnific.com&sz=64",
    alt: "Magnific favicon",
  },
  {
    name: "Recent Design",
    url: "Inspiración de diseño recientes de la web",
    href: "https://recent.design/",
    favicon: "https://www.google.com/s2/favicons?domain=recent.design&sz=64",
    alt: "Recent Design favicon",
  },
  {
    name: "OpenDesign",
    url: "Herramienta de diseño con IA",
    href: "https://open-design.ai/es/",
    favicon: "https://www.google.com/s2/favicons?domain=open-design.ai&sz=64",
    alt: "OpenDesign favicon",
  },
  {
    name: "CS50 en Español",
    url: "Curso completo Universidad de Harvard en Español",
    href: "https://www.youtube.com/watch?v=MU_Q6fNZUK8&list=PLXOJEg4xbr50",
    favicon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
    alt: "CS50 YouTube favicon",
  },
  {
    name: "CS50 en edX",
    url: "Curso completo Universidad de Harvard en inglés, con certificado de pago",
    href: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science",
    favicon: "https://www.google.com/s2/favicons?domain=edx.org&sz=64",
    alt: "CS50 edX favicon",
  },
  {
    name: "HyperFrames",
    url: "Escribí HTML, renderizá video MP4 (HeyGen, open-source)",
    href: "https://github.com/heygen-com/hyperframes",
    favicon: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
    alt: "HyperFrames favicon",
  },
  {
    name: "Claude Code in Action",
    url: "Curso oficial de Anthropic para dominar Claude Code",
    href: "https://anthropic.skilljar.com/claude-code-in-action",
    favicon: "https://www.google.com/s2/favicons?domain=anthropic.skilljar.com&sz=64",
    alt: "Claude Code in Action favicon",
  },
  {
    name: "OmniRoute",
    url: "Gateway IA gratuito — 271+ proveedores, 90+ gratis",
    href: "https://github.com/diegosouzapw/OmniRoute",
    favicon: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
    alt: "OmniRoute favicon",
  },
  {
    name: "OpenShip",
    url: "Plataforma de despliegue self-hosted con CI/CD incluido",
    href: "https://github.com/oblien/openship",
    favicon: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
    alt: "OpenShip favicon",
  },
  {
    name: "WorldVectorLogo",
    url: "Logos vectoriales gratis",
    href: "https://worldvectorlogo.com/es",
    favicon: "https://www.google.com/s2/favicons?domain=worldvectorlogo.com&sz=64",
    alt: "WorldVectorLogo favicon",
  },
  {
    name: "SeekLogo",
    url: "Logos vectoriales gratis",
    href: "https://seeklogo.com/",
    favicon: "https://www.google.com/s2/favicons?domain=seeklogo.com&sz=64",
    alt: "SeekLogo favicon",
  },
];

const APPS = [
  { emoji: "🧮", name: "CalculadHora", url: "Gratis y sin cuentas", href: "https://calculadhora.soymarcus.dev/" },
  { emoji: "🤳", name: "SocialDeck", url: "Planner para redes sociales", href: "https://socialdeck.soymarcus.dev/" },
];

const PROYECTOS_2026 = [
  {
    img: "/img/proyectos/soymarcus.svg",
    alt: "soymarcus.dev favicon",
    name: "Mi web oficial",
    url: "soymarcus.dev",
    href: "https://www.soymarcus.dev/",
  },
  {
    img: "/img/proyectos/lemora.svg",
    alt: "lemora.lat favicon",
    name: "Mi startup Lemora",
    url: "lemora.lat",
    href: "https://www.lemora.lat/",
  },
  {
    icon: true,
    name: "Intento de Streamer",
    url: "Estoy en Twitch",
    href: "https://www.twitch.tv/soymarcusdev",
  },
  {
    img: "/img/proyectos/holamundostore.svg",
    alt: "holamundo.store favicon",
    name: "Mi tienda online",
    url: "holamundo.store",
    href: "https://www.holamundo.store/",
  },
  {
    img: "/img/proyectos/vidafreelance.svg",
    alt: "vidafreelance.live favicon",
    name: "Mi podcast en Youtube",
    url: "vidafreelance.live",
    href: "https://www.vidafreelance.live/",
  },
  {
    img: "/img/proyectos/codeinjection.svg",
    alt: "",
    name: "Code Injection",
    url: "Mi música (Inteligencia Artificial)",
    href: "https://www.codeinjection.site/",
  },
  {
    img: "/img/proyectos/awp.svg",
    alt: "",
    name: "Academia WP",
    url: "Cursos online · Próximamente",
    href: "#",
    comingSoon: true,
  },
];

export default function LinksClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const swipeRef = useRef({ startX: 0, isDragging: false });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      container.querySelectorAll(".animate-in").forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }

    container.querySelectorAll(".animate-in").forEach((el) => el.classList.add("visible"));
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `@keyframes ripple-effect{to{transform:scale(2.5);opacity:0;}}`;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ripple = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget.closest(
      ".social-icon, .resource-card"
    ) as HTMLElement | null;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const span = document.createElement("span");
    span.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${x}px;top:${y}px;border-radius:50%;background:rgba(139,92,246,0.25);transform:scale(0);animation:ripple-effect 0.5s ease-out;pointer-events:none;z-index:0;`;
    el.appendChild(span);
    span.addEventListener("animationend", () => span.remove());
  };

  const goToSlide = (index: number) => {
    const next = index < 0 ? VIDEOS.length - 1 : index >= VIDEOS.length ? 0 : index;
    setCarouselIndex(next);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.style.transform = `translateX(-${carouselIndex * 100}%)`;
    }
  }, [carouselIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    swipeRef.current = { startX: e.touches[0].clientX, isDragging: true };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const st = swipeRef.current;
    if (!st.isDragging) return;
    st.isDragging = false;
    const diff = st.startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goToSlide(diff > 0 ? carouselIndex + 1 : carouselIndex - 1);
    }
  };

  return (
    <div ref={containerRef}>
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>

      <main className="container">
        <section className="hero animate-in" aria-label="Perfil">
          <div className="profile-photo">
            <img src="/img/perfil.svg" alt="perfil @soymarcusdev" className="profile-img" />
            <span className="pulseOnline" aria-label="En línea"></span>
          </div>
          <h1 className="profile-name">@soymarcusdev</h1>
          <p className="profile-tagline">
            👨🏻‍💻 Tecnología, Diseño y Programación
            <br />
            Si lo viste en mis videos, está acá 👌
          </p>

          <div className="contact-box">
            <p>Para colaboraciones, envíame un correo a:</p>
            <a
              href={`mailto:${CONTENIDO_EMAIL}`}
              className="email-link"
              aria-label={`Enviar correo a ${CONTENIDO_EMAIL}`}
            >
              📧 {CONTENIDO_EMAIL}
            </a>
          </div>
        </section>

        <section className="section animate-in" aria-label="Redes sociales">
          <h2 className="section-title">Mis redes sociales</h2>
          <div className="social-icons">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={`${social.label} de soymarcusdev`}
                onClick={ripple}
              >
                <i className={social.icon}></i>
                <span className="tooltip">{social.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section animate-in" aria-label="Eventos">
          <h2 className="section-title">Eventos</h2>
          <div className="links-grid">
            {EVENTOS.map((evento) => (
              <a
                key={evento.name}
                href={evento.href}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
                aria-label={evento.name}
                onClick={ripple}
              >
                <img
                  src={evento.favicon}
                  alt={evento.alt}
                  className="resource-favicon"
                  width={32}
                  height={32}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="resource-info">
                  <span className="resource-name">{evento.name}</span>
                  <span className="resource-url">{evento.url}</span>
                </div>
                <span className="link-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="section animate-in" aria-label="Videos destacados">
          <h2 className="section-title">Últimos videos</h2>
          <div className="video-carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div className="video-carousel-track" ref={trackRef}>
              {VIDEOS.map((video, i) => (
                <div className={`video-carousel-slide ${i === carouselIndex ? "active" : ""}`} key={video.src}>
                  <div className="video-wrapper">
                    <iframe
                      src={video.src}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              <button
                className="carousel-btn carousel-btn-prev"
                aria-label="Video anterior"
                onClick={() => goToSlide(carouselIndex - 1)}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <div className="carousel-dots">
                {VIDEOS.map((video, i) => (
                  <button
                    key={video.src}
                    className={`carousel-dot ${i === carouselIndex ? "active" : ""}`}
                    aria-label={`Video ${i + 1}`}
                    onClick={() => goToSlide(i)}
                  ></button>
                ))}
              </div>
              <button
                className="carousel-btn carousel-btn-next"
                aria-label="Siguiente video"
                onClick={() => goToSlide(carouselIndex + 1)}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>

        <section className="section animate-in" aria-label="Freebies">
          <h2 className="section-title">Freebies</h2>
          <div className="links-grid">
            <a
              href="/recursos/Guia_Claude_Opus_5.pdf"
              target="_blank"
              className="freebie-card resource-card"
              aria-label="Descargar Guía Claude Opus 5"
              onClick={ripple}
            >
              <img src="/img/guias/guia_claude_opus5.png" alt="Guía Claude Opus 5 — Portada" className="freebie-img" loading="lazy" />
              <div className="freebie-info">
                <span className="freebie-name">Guía Claude Opus 5</span>
                <span className="freebie-desc">
                  Aprende a sacar el máximo provecho de Claude Opus 5 con prompts efectivos, flujos de trabajo y mejores prácticas para potenciar tu productividad con IA.
                </span>
                <span className="freebie-action">
                  <i className="fa-solid fa-download"></i> Descargar gratis
                </span>
              </div>
            </a>
          </div>
        </section>

        <section className="section animate-in" aria-label="Recursos recomendados">
          <h2 className="section-title">Recursos que recomiendo</h2>
          <div className="links-grid">
            {RECURSOS.map((recurso) => (
              <a
                key={recurso.name}
                href={recurso.href}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
                aria-label={recurso.name}
                onClick={ripple}
              >
                <img
                  src={recurso.favicon}
                  alt={recurso.alt}
                  className="resource-favicon"
                  width={32}
                  height={32}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="resource-info">
                  <span className="resource-name">{recurso.name}</span>
                  <span className="resource-url">{recurso.url}</span>
                </div>
                <span className="link-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="section animate-in" aria-label="Mis aplicaciones">
          <h2 className="section-title">Mis aplicaciones</h2>
          <div className="links-grid">
            {APPS.map((app) => (
              <a
                key={app.name}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
                aria-label={app.name}
                onClick={ripple}
              >
                <span className="resource-emoji">{app.emoji}</span>
                <div className="resource-info">
                  <span className="resource-name">{app.name}</span>
                  <span className="resource-url">{app.url}</span>
                </div>
                <span className="link-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="section animate-in" aria-label="Mis Proyectos 2026">
          <h2 className="section-title">Mis Proyectos 2026</h2>
          <div className="links-grid">
            {PROYECTOS_2026.map((proyecto) => (
              <a
                key={proyecto.name}
                href={proyecto.href}
                target={proyecto.href === "#" ? undefined : "_blank"}
                rel={proyecto.href === "#" ? undefined : "noopener noreferrer"}
                className={`resource-card ${proyecto.comingSoon ? "resource-card--coming-soon" : ""}`}
                aria-label={proyecto.name}
                onClick={ripple}
              >
                {proyecto.icon ? (
                  <i className="fa-brands fa-twitch icoProyectos"></i>
                ) : (
                  <img
                    src={proyecto.img}
                    alt={proyecto.alt}
                    className="resource-links"
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                )}
                <div className="resource-info">
                  <span className="resource-name">{proyecto.name}</span>
                  <span className="resource-url">{proyecto.url}</span>
                  {proyecto.comingSoon ? <span className="coming-badge">Próximamente</span> : null}
                </div>
                <span className="link-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer animate-in">
          <p>Gracias por pasarte por acá 🫂</p>
          <p>No olvides seguirme en mis otras redes.</p>
        </footer>
      </main>

      <button
        id="back-to-top"
        className={showTop ? "visible" : undefined}
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <SiteGlowCursor />
    </div>
  );
}