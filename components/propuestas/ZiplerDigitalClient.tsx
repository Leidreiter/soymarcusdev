"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const etapas = [
  {
    semana: "Semana 1",
    titulo: "Planificación y configuración técnica",
    presupuesto: "USD 90",
    items: [
      "Reunión inicial y levantamiento de requerimientos",
      "Configuración del entorno WordPress",
      "Estructura base del sitio y preparación técnica",
    ],
  },
  {
    semana: "Semana 2",
    titulo: "Diseño y desarrollo web",
    presupuesto: "USD 265",
    items: [
      "Diseño de páginas principales",
      "Desarrollo responsive",
      "Estructura institucional y catálogo",
    ],
  },
  {
    semana: "Semana 3",
    titulo: "Implementación del LMS",
    presupuesto: "USD 220",
    items: [
      "Configuración de LearnDash LMS",
      "Estructura de cursos, módulos y lecciones",
      "Permisos y avance de alumnos",
    ],
  },
  {
    semana: "Semana 4",
    titulo: "Ventas, pagos y membresías",
    presupuesto: "USD 175",
    items: [
      "Configuración de WooCommerce",
      "WooCommerce Memberships y reglas de acceso",
      "Integración de pasarela de pago",
    ],
  },
  {
    semana: "Semana 5",
    titulo: "Alumnos, certificados y automatizaciones",
    presupuesto: "USD 130",
    items: [
      "Gestión de cuentas de alumnos",
      "Certificados",
      "Preparación para clases en vivo y notificaciones básicas",
    ],
  },
  {
    semana: "Semana 6",
    titulo: "Pruebas, lanzamiento y capacitación",
    presupuesto: "USD 220",
    items: [
      "Pruebas funcionales y correcciones",
      "Publicación del sitio",
      "Capacitación para administración",
    ],
  },
];

const incluidos = [
  "Instalación y configuración de WordPress",
  "Diseño e implementación de páginas principales",
  "Adaptación responsive",
  "Configuración de LearnDash LMS, WooCommerce y WooCommerce Memberships",
  "Sistema de venta de cursos",
  "Gestión de alumnos y certificados",
  "Pruebas funcionales, publicación y capacitación",
];

const noIncluidos = [
  "Diseño de identidad visual desde cero",
  "Producción, grabación o edición de cursos",
  "Carga masiva de todo el contenido",
  "Desarrollo de plugins personalizados",
  "Comunidad privada avanzada o automatizaciones complejas",
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
        <div className="zd-hero-header">
          <div className="zd-logo-row">
            <div className="zd-logo-group">
              <Image
                src="/images/ziplertag1.png"
                alt="Logo Zipler Digital"
                width={280}
                height={90}
                className="zd-logo"
                priority
              />
              <div className="zd-divider" />
              <div className="zd-brand">
                <span className="zd-brand-label">Propuesta</span>
                <span className="zd-brand-name">@soymarcusdev</span>
              </div>
            </div>
            <span className="zd-badge">Plataforma Educativa Online</span>
          </div>
          <div className="zd-hero-title-group">
            <span className="zd-kicker">WordPress · LearnDash · WooCommerce</span>
            <h1 className="zd-hero-title">Zipler Digital</h1>
            <p className="zd-hero-subtitle">
              Propuesta para el desarrollo de una escuela online con catálogo de cursos,
              sistema de ventas, membresías, gestión de alumnos y preparación para clases en vivo.
            </p>
          </div>
        </div>
        <div className="zd-hero-grid">
          <article className="zd-hero-card">
            <span className="zd-hero-card-label">Presupuesto</span>
            <span className="zd-hero-card-value">USD 1.100</span>
          </article>
          <article className="zd-hero-card">
            <span className="zd-hero-card-label">Plazo</span>
            <span className="zd-hero-card-value">6 Semanas</span>
          </article>
          <article className="zd-hero-card">
            <span className="zd-hero-card-label">Plataforma</span>
            <span className="zd-hero-card-value">WordPress LMS</span>
          </article>
          <article className="zd-hero-card">
            <span className="zd-hero-card-label">Pagos</span>
            <span className="zd-hero-card-value">4 Hitos</span>
          </article>
        </div>
      </header>

      <section className="zd-section">
        <header className="zd-section-header">
          <span className="zd-section-kicker">Cronograma</span>
          <h2 className="zd-section-title">Desarrollo por etapas</h2>
          <p className="zd-section-lead">
            Cada semana está enfocada a un entregable concreto para mantener el proyecto
            ordenado y predecible.
          </p>
        </header>
        <div className="zd-grid">
          {etapas.map((etapa, index) => (
            <article className="zd-card" key={etapa.semana}>
              <header className="zd-card-header">
                <div>
                  <span className="zd-card-kicker">{etapa.semana}</span>
                  <h3 className="zd-card-title">{etapa.titulo}</h3>
                </div>
                <span className="zd-card-index">0{index + 1}</span>
              </header>
              <ul className="zd-list">
                {etapa.items.map((item) => (
                  <li className="zd-list-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="zd-hero-card" style={{ marginTop: "auto" }}>
                <span className="zd-hero-card-label">Presupuesto</span>
                <span className="zd-hero-card-value">{etapa.presupuesto}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="zd-section">
        <header className="zd-section-header">
          <span className="zd-section-kicker">Alcance</span>
          <h2 className="zd-section-title">Incluido vs No incluido</h2>
        </header>
        <div className="zd-split">
          <article className="zd-card">
            <header className="zd-card-header">
              <div>
                <span className="zd-card-kicker">Incluido</span>
                <h3 className="zd-card-title">En el presupuesto</h3>
              </div>
            </header>
            <ul className="zd-list">
              {incluidos.map((item) => (
                <li className="zd-list-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="zd-card">
            <header className="zd-card-header">
              <div>
                <span className="zd-card-kicker">No incluido</span>
                <h3 className="zd-card-title">Fuera del alcance</h3>
              </div>
            </header>
            <ul className="zd-list">
              {noIncluidos.map((item) => (
                <li className="zd-list-item" key={item}>
                  {item}
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
            Los USD 1.100 corresponden únicamente al desarrollo. Las licencias comerciales
            se abonan por separado según las necesidades del proyecto.
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
        <header className="zd-section-header">
          <span className="zd-section-kicker">Resultado Esperado</span>
          <h2 className="zd-section-title">Plataforma lista para lanzar</h2>
          <p className="zd-section-lead">
            Al finalizar las 6 semanas, Zipler Digital contará con una escuela online
            funcional, escalable y lista para vender sus formaciones.
          </p>
        </header>
        <div className="zd-callout-grid">
          <article className="zd-callout-card">
            <span className="zd-hero-card-label">Presupuesto Final</span>
            <span className="zd-hero-card-value">USD 1.100</span>
          </article>
          <article className="zd-callout-card">
            <span className="zd-hero-card-label">Plazo Estimado</span>
            <span className="zd-hero-card-value">6 Semanas</span>
          </article>
          <article className="zd-callout-card">
            <span className="zd-hero-card-label">Tecnología</span>
            <span className="zd-hero-card-value">WP + LearnDash</span>
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
