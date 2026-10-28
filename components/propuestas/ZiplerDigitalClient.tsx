"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const etapas = [
  {
    semana: "Semana 01",
    titulo: "Planificación y configuración técnica",
    precio: "USD 90",
    items: [
      "Reunión inicial y levantamiento de requerimientos",
      "Configuración del entorno WordPress",
      "Estructura base y preparación técnica",
    ],
  },
  {
    semana: "Semana 02",
    titulo: "Diseño y desarrollo web",
    precio: "USD 265",
    items: [
      "Diseño e implementación de páginas principales",
      "Adaptación responsive",
      "Catálogo e identidad aplicada al sitio",
    ],
  },
  {
    semana: "Semana 03",
    titulo: "Implementación del LMS",
    precio: "USD 220",
    items: [
      "Configuración de LearnDash LMS",
      "Cursos, módulos, lecciones y permisos",
      "Avance y seguimiento de alumnos",
    ],
  },
  {
    semana: "Semana 04",
    titulo: "Ventas, pagos y membresías",
    precio: "USD 175",
    items: [
      "Configuración de WooCommerce",
      "WooCommerce Memberships y reglas de acceso",
      "Integración de pasarela de pago",
    ],
  },
  {
    semana: "Semana 05",
    titulo: "Alumnos, certificados y automatizaciones",
    precio: "USD 130",
    items: [
      "Gestión de cuentas de alumnos",
      "Certificados",
      "Preparación para clases en vivo",
    ],
  },
  {
    semana: "Semana 06",
    titulo: "Pruebas, lanzamiento y capacitación",
    precio: "USD 220",
    items: [
      "Pruebas funcionales y correcciones",
      "Publicación de la plataforma",
      "Capacitación para administración",
    ],
  },
];

const incluidos = [
  "Instalación y configuración de WordPress",
  "Páginas principales y adaptación responsive",
  "LearnDash LMS, WooCommerce y WooCommerce Memberships",
  "Sistema de venta de cursos",
  "Gestión de alumnos, accesos y certificados",
  "Pruebas, publicación y capacitación",
];

const noIncluidos = [
  "Diseño de identidad visual desde cero",
  "Producción, grabación o edición de cursos",
  "Carga masiva de contenido",
  "Desarrollo de plugins personalizados",
  "Comunidad privada avanzada",
  "Licencias, extensiones premium o costos externos",
];

const hitos = [
  { hito: "Inicio del proyecto y reserva de agenda", porcentaje: "30 %", importe: "USD 330" },
  { hito: "Aprobación del diseño y páginas principales", porcentaje: "30 %", importe: "USD 330" },
  { hito: "Entrega del sistema educativo y comercial", porcentaje: "25 %", importe: "USD 275" },
  { hito: "Aprobación final y publicación", porcentaje: "15 %", importe: "USD 165" },
];

const licencias = [
  { plugin: "LearnDash LMS", funcion: "Gestión de cursos", precio: "USD 199/año (a confirmar)" },
  { plugin: "WooCommerce Memberships", funcion: "Membresías y acceso", precio: "USD 199/año" },
  { plugin: "WooCommerce Subscriptions", funcion: "Cobros recurrentes (opcional)", precio: "USD 279/año" },
  { plugin: "WP Rocket Single", funcion: "Optimización (opcional)", precio: "EUR 49,95/año" },
];

export default function ZiplerDigitalClient() {
  useEffect(() => {
    document.documentElement.classList.add("zd-html");
    document.body.classList.add("zd-body");
    return () => {
      document.documentElement.classList.remove("zd-html");
      document.body.classList.remove("zd-body");
    };
  }, []);

  return (
    <main className="zd-main">
      <header className="zd-hero">
        <div className="zd-hero-top">
          <div className="zd-logos">
            <Image
              src="/images/ziplertag1.png"
              alt="Logo Zipler Digital"
              width={320}
              height={100}
              className="zd-logo-client"
              priority
            />
            <div className="zd-logo-divider" />
            <Image
              src="/images/logomarcasvg.svg"
              alt="@soymarcusdev"
              width={180}
              height={40}
            />
          </div>
          <div className="zd-hero-meta">
            <span className="zd-meta-pill">Propuesta confidencial</span>
            <span className="zd-meta-pill">WordPress + LearnDash + WooCommerce</span>
          </div>
        </div>
        <div className="zd-hero-content">
          <span className="zd-hero-kicker">Escuela online · Plataforma educativa</span>
          <h1 className="zd-hero-title">Zipler Digital</h1>
          <p className="zd-hero-subtitle">
            Desarrollo de una plataforma educativa con catálogo de cursos, sistema de
            ventas, membresías, gestión de alumnos, certificados y estructura preparada
            para clases en vivo.
          </p>
        </div>
        <div className="zd-hero-stats">
          <article className="zd-stat">
            <span className="zd-stat-label">Presupuesto</span>
            <span className="zd-stat-value">USD 1.100</span>
          </article>
          <article className="zd-stat">
            <span className="zd-stat-label">Plazo estimado</span>
            <span className="zd-stat-value">6 semanas</span>
          </article>
          <article className="zd-stat">
            <span className="zd-stat-label">Pagos</span>
            <span className="zd-stat-value">4 hitos</span>
          </article>
          <article className="zd-stat">
            <span className="zd-stat-label">Infraestructura</span>
            <span className="zd-stat-value">Dominio/Hosting existentes</span>
          </article>
        </div>
      </header>

      <section className="zd-section">
        <header className="zd-section-header">
          <span className="zd-section-kicker">Cronograma</span>
          <h2 className="zd-section-title">Desarrollo por etapas</h2>
          <p className="zd-section-lead">
            Avance estructurado semana a semana con entregables verificables.
          </p>
        </header>
        <div className="zd-timeline">
          {etapas.map((etapa) => (
            <article className="zd-timeline-item" key={etapa.semana}>
              <div className="zd-timeline-meta">
                <span className="zd-timeline-week">{etapa.semana}</span>
                <span className="zd-timeline-price">{etapa.precio}</span>
              </div>
              <div className="zd-timeline-content">
                <h3 className="zd-timeline-title">{etapa.titulo}</h3>
                <ul className="zd-list">
                  {etapa.items.map((item) => (
                    <li className="zd-list-item" key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="zd-section">
        <header className="zd-section-header">
          <span className="zd-section-kicker">Alcance</span>
          <h2 className="zd-section-title">Incluido y no incluido</h2>
        </header>
        <div className="zd-grid-two">
          <article className="zd-card">
            <header className="zd-card-header">
              <span className="zd-card-kicker">Incluido</span>
              <h3 className="zd-card-title">Dentro del presupuesto</h3>
            </header>
            <ul className="zd-list">
              {incluidos.map((item) => (
                <li className="zd-list-item" key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="zd-card">
            <header className="zd-card-header">
              <span className="zd-card-kicker">No incluido</span>
              <h3 className="zd-card-title">Fuera del alcance</h3>
            </header>
            <ul className="zd-list">
              {noIncluidos.map((item) => (
                <li className="zd-list-item" key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="zd-section">
        <header className="zd-section-header">
          <span className="zd-section-kicker">Pagos</span>
          <h2 className="zd-section-title">Propuesta de pagos</h2>
        </header>
        <div className="zd-table-wrap">
          <table className="zd-table">
            <thead>
              <tr>
                <th>Hito</th>
                <th>Porcentaje</th>
                <th>Importe</th>
              </tr>
            </thead>
            <tbody>
              {hitos.map((row) => (
                <tr key={row.hito}>
                  <td>{row.hito}</td>
                  <td>{row.porcentaje}</td>
                  <td>{row.importe}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td>100 %</td>
                <td>USD 1.100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="zd-section">
        <header className="zd-section-header">
          <span className="zd-section-kicker">Licencias</span>
          <h2 className="zd-section-title">Costos externos</h2>
          <p className="zd-section-lead">
            Las licencias comerciales, renovaciones y comisiones quedan a cargo del
            cliente. Se recomienda confirmar precios vigentes al momento de contratación.
          </p>
        </header>
        <div className="zd-table-wrap">
          <table className="zd-table">
            <thead>
              <tr>
                <th>Plugin</th>
                <th>Función</th>
                <th>Precio publicado</th>
              </tr>
            </thead>
            <tbody>
              {licencias.map((row) => (
                <tr key={row.plugin}>
                  <td>{row.plugin}</td>
                  <td>{row.funcion}</td>
                  <td>{row.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="zd-callout">
        <div className="zd-callout-main">
          <header className="zd-section-header">
            <span className="zd-section-kicker">Resultado esperado</span>
            <h2 className="zd-section-title">Plataforma lista para lanzar</h2>
            <p className="zd-section-lead">
              Al finalizar las 6 semanas, Zipler Digital dispondrá de una escuela online
              profesional, adaptable a dispositivos móviles, con sistema comercial,
              membresías y estructura ampliable para futuras especializaciones.
            </p>
          </header>
        </div>
        <div className="zd-callout-stats">
          <article className="zd-callout-stat">
            <span className="zd-stat-label">Presupuesto final</span>
            <span className="zd-stat-value">USD 1.100</span>
          </article>
          <article className="zd-callout-stat">
            <span className="zd-stat-label">Plazo estimado</span>
            <span className="zd-stat-value">6 semanas</span>
          </article>
          <article className="zd-callout-stat">
            <span className="zd-stat-label">Stack</span>
            <span className="zd-stat-value">WordPress · LearnDash</span>
          </article>
        </div>
      </section>

      <footer className="zd-footer">
        <span className="zd-footer-brand">@soymarcusdev</span>
        <Link className="zd-footer-link" href="https://soymarcus.dev">
          soymarcus.dev
        </Link>
        <span>Propuesta confidencial · Zipler Digital</span>
      </footer>
    </main>
  );
}
EOF
echo "done"
