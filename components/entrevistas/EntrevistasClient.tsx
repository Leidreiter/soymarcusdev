"use client";

import { useEffect, useState } from "react";
import SiteGlowCursor from "@/components/reactbits/GlowCursor/SiteGlowCursor";

const BLOCKS = [
  {
    num: "01 · 5 min",
    name: "El gancho — los primeros 5 min",
    time: "3 preguntas",
    icon: "🎯",
    qs: [
      { n: "01", t: "Si tuvieras que explicarle a alguien de 70 años lo que hacés en una sola frase, ¿qué le dirías?", tags: ["viral"] },
      { n: "02", t: "¿Hubo un momento exacto en tu vida donde dijiste: esto es lo mío? ¿Qué pasó ese día?", tags: [] },
      { n: "03", t: "¿Cuál es la cosa más rara o inesperada de tu trabajo que nadie imaginaría desde afuera?", tags: ["viral"] },
    ],
  },
  {
    num: "02 · 8–10 min",
    name: "Quién sos — origen e historia",
    time: "5 preguntas",
    icon: "🌱",
    qs: [
      { n: "04", t: "¿De dónde venís? ¿Creciste rodeado de tecnología o fue algo que llegó después?", tags: [] },
      { n: "05", t: "¿Qué estudiaste y en qué punto sentiste que lo que te enseñaban no alcanzaba para lo que el mundo pedía?", tags: ["debate"] },
      { n: "06", t: "¿Hay algo que aprendiste solo, sin ningún curso ni universidad, que hoy usás todo el tiempo?", tags: [] },
      { n: "07", t: "¿Cuál fue tu primer proyecto o trabajo real? ¿Qué tan mal salió?", tags: ["fire"] },
      { n: "08", t: "¿Alguna vez dudaste de si ibas por el camino correcto? ¿Qué te frenaba?", tags: ["deep"] },
    ],
  },
  {
    num: "03 · 10–12 min",
    name: "La carrera — el camino real",
    time: "7 preguntas",
    icon: "🛤️",
    qs: [
      { n: "09", t: "¿Trabajaste para empresa o siempre freelance? ¿Cuál de los dos te rompió más los nervios?", tags: ["viral"] },
      { n: "10", t: "¿Tuviste algún jefe o cliente del que aprendiste lo que NO se debe hacer?", tags: [] },
      { n: "11", t: "Contame de ese proyecto que parecía imposible y lo sacaste adelante igual. ¿Cómo fue?", tags: ["deep"] },
      { n: "12", t: "¿Hubo algún momento donde casi lo dejás todo? ¿Qué te hizo seguir?", tags: ["deep"] },
      { n: "13", t: "¿Cuánto le importa la experiencia laboral vs el portfolio a la hora de contratar gente?", tags: ["debate"] },
      { n: "14", t: "Si tuvieras que hacer tu carrera de nuevo desde cero hoy, ¿cambiarías algo?", tags: [] },
      { n: "15", t: "¿Pasaste por la famosa experiencia de 'te piden 5 años de experiencia en una tecnología que tiene 2?'", tags: ["fire"] },
    ],
  },
  {
    num: "04 · 7–8 min",
    name: "Anécdotas y momentos épicos",
    time: "5 preguntas",
    icon: "💥",
    qs: [
      { n: "16", t: "¿Cuál fue el error más épico que cometiste en un proyecto? Vendelo bien, que la gente lo disfrute.", tags: ["fire", "viral"] },
      { n: "17", t: "¿Alguna vez mandaste un mensaje comprometedor al canal equivocado, o algo por el estilo?", tags: [] },
      { n: "18", t: "¿Tuviste alguna reunión o entrevista de trabajo que fue un desastre total?", tags: [] },
      { n: "19", t: "¿Hubo algo que te prometieron en un laburo que nunca llegó?", tags: [] },
      { n: "20", t: "La historia que contás siempre en reuniones con amigos de tecnología. Esa.", tags: ["viral"] },
    ],
  },
  {
    num: "05 · 5–7 min",
    name: "Proyectos actuales",
    time: "4 preguntas",
    icon: "🚀",
    qs: [
      { n: "21", t: "¿En qué estás metido ahora mismo que te tiene más emocionado?", tags: [] },
      { n: "22", t: "¿Tenés algún proyecto personal que nadie sabe todavía o que estás cocinando a fuego lento?", tags: [] },
      { n: "23", t: "¿Cuál es el mayor problema que estás tratando de resolver hoy, sea personal o profesional?", tags: ["deep"] },
      { n: "24", t: "¿Hacia dónde querés llevar tu carrera en los próximos 3 años?", tags: [] },
    ],
  },
  {
    num: "06 · 10–12 min",
    name: "IA y el futuro del trabajo",
    time: "8 preguntas",
    icon: "🤖",
    qs: [
      { n: "25", t: "Seamos honestos: ¿la IA te quitó trabajo o te generó más trabajo?", tags: ["fire", "debate"] },
      { n: "26", t: "¿Usás IA en tu día a día o creés que está sobrevalorada para tu área?", tags: ["debate"] },
      { n: "27", t: "¿Contratarías a alguien que dice que no usa IA en su trabajo? ¿Por qué sí o no?", tags: ["fire"] },
      { n: "28", t: "¿Hay alguna parte de tu trabajo que creas que la IA nunca va a poder reemplazar? Defenderla.", tags: ["debate"] },
      { n: "29", t: "¿Se viene una burbuja tech o el mercado laboral tech va a explotar para bien?", tags: ["viral", "debate"] },
      { n: "30", t: "¿Qué le dirías hoy a alguien que está empezando a estudiar programación / diseño / data con tanto ruido de IA?", tags: [] },
      { n: "31", t: "Si pudieras ponerle un límite a la IA en tu campo, ¿qué no le dejarías hacer?", tags: ["deep"] },
      { n: "32", t: "¿La gente junior de hoy tiene más o menos chances que las que tuviste vos al arrancar?", tags: ["debate", "viral"] },
    ],
  },
  {
    num: "07 · 5 min",
    name: "El cierre — rápido y directo",
    time: "6 preguntas",
    icon: "⚡",
    qs: [
      { n: "33", t: "Tres herramientas sin las que no podés vivir. Sin pensar mucho.", tags: [] },
      { n: "34", t: "¿Tech overrated vs tech underrated? Nombrá una de cada una.", tags: ["viral"] },
      { n: "35", t: "¿Cuál es el consejo que más repetís pero que más te cuesta seguir a vos mismo?", tags: ["deep"] },
      { n: "36", t: "Un libro, podcast o recurso que cambió cómo pensás.", tags: [] },
      { n: "37", t: "¿Qué pregunta esperabas que te hiciera hoy y no te hice?", tags: ["viral"] },
      { n: "38", t: "¿Dónde te puede seguir la gente que quiere ver más de lo que hacés?", tags: [] },
    ],
  },
];

const TAG_LABELS: Record<string, string> = {
  fire: "bomba",
  debate: "debatible",
  viral: "viral",
  deep: "profunda",
};

const TICKER_ITEMS = [
  "Tu historia",
  "Carrera real",
  "Anécdotas épicas",
  "IA y futuro del trabajo",
  "Preguntas sin filtro",
  "Opiniones de verdad",
];

const TIPS = [
  { icon: "🎙️", title: "Contá la historia fea también", body: "Los errores, las dudas y los fracasos conectan más con la audiencia que los logros. No hay que disimularlos." },
  { icon: "🔥", title: "Las opiniones polémicas están bien", body: "Si pensás que la IA va a matar ciertos trabajos, decilo. Si creés que la universidad no sirve para nada, decilo. La honestidad es lo que hace viral un clip." },
  { icon: "⏸️", title: "No hace falta responder rápido", body: "El silencio antes de una buena respuesta vale oro en cámara. Pensá antes de hablar, se ve bien." },
  { icon: "📖", title: "Llegá con una historia en mente", body: "Esa anécdota de cuando todo salió mal en un proyecto. La del cliente imposible. La del momento que casi dejás todo. Tenerla lista hace que fluya sola." },
  { icon: "🚫", title: "Sin respuestas de LinkedIn", body: "Nada de \"aprendí mucho de esa experiencia\" o \"fue un proceso de crecimiento personal\". Todo eso se corta en edición igual." },
  { icon: "💬", title: "Hablá como con un amigo", body: "El formato es conversacional. Si quisiéramos respuestas corporativas, entrevistábamos a un comunicado de prensa." },
];

export default function EntrevistasClient() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  const showBlock = (idx: number) => {
    if (activeIdx === idx) {
      setActiveIdx(null);
      return;
    }
    setActiveIdx(idx);
    setTimeout(() => {
      const panel = document.getElementById("questionsPanel");
      if (panel) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  const activeBlock = activeIdx !== null ? BLOCKS[activeIdx] : null;

  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-label">Entrevistas Tech · Guía para invitados</div>
            <h1 className="hero-title">
              Hablemos
              <br />
              <em>sin filtros.</em>
            </h1>
            <p className="hero-desc">
              Una charla de 45–60 minutos sobre tu carrera, tus proyectos, tus errores y tus opiniones sobre el mundo tech. Nada formal, todo real.
            </p>
            <div className="hero-meta">
              <div className="hero-pill">
                <div className="dot"></div> <span>45–60 min</span> · YouTube
              </div>
              <div className="hero-pill">
                <div className="dot" style={{ background: "var(--accent3)" }}></div> <span>7 bloques</span> de conversación
              </div>
              <div className="hero-pill">
                <div className="dot" style={{ background: "var(--accent2)" }}></div> Estilo <span>charla entre amigos</span>
              </div>
            </div>
            <div className="scroll-hint">
              <div className="scroll-line"></div>
              Explorá la guía
            </div>
          </div>
          <div className="hero-image">
            <img src="/img/podcast.png" alt="Vida Freelance Podcast" />
          </div>
        </div>
      </section>

      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className="ticker-item" key={i}>
              {item} <span className="sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section reveal">
        <div className="section-label" data-num="01 ·">Sobre el formato</div>
        <h2 className="section-title">
          ¿Cómo va a ser
          <br />
          la charla?
        </h2>
        <p className="section-sub">
          Sin libreto rígido. Con preguntas preparadas pero siguiendo la conversación hacia donde vaya.
        </p>

        <div className="format-grid">
          <div className="format-card featured">
            <div className="format-card-label">La idea</div>
            <div className="format-card-value">Tech sin corbata</div>
            <div className="format-card-desc">
              Una entrevista al estilo de una conversación real entre personas que laburan en tech. La idea es que quien te vea sienta que está escuchando la charla de pasillo que siempre quiso escuchar. Contás tu historia, tus tropiezos, tus opiniones, lo que aprendiste y lo que todavía te genera dudas.
            </div>
          </div>
          <div className="format-card">
            <div className="format-card-label">Duración</div>
            <div className="format-card-value">45–60′</div>
            <div className="format-card-desc">Tiempo justo para una charla profunda sin que se sienta larga. Nada se corta a la mitad.</div>
          </div>
          <div className="format-card">
            <div className="format-card-label">Plataforma</div>
            <div className="format-card-value">YouTube</div>
            <div className="format-card-desc">Video completo en YouTube + clips cortos para Reels y Shorts con los momentos más destacados.</div>
          </div>
          <div className="format-card">
            <div className="format-card-label">Preguntas</div>
            <div className="format-card-value">~38</div>
            <div className="format-card-desc">Distribuidas en 7 bloques temáticos. No se hacen todas siempre — la charla manda.</div>
          </div>
          <div className="format-card">
            <div className="format-card-label">Tono</div>
            <div className="format-card-value">Real</div>
            <div className="format-card-desc">Sin respuestas corporativas. Se valoran las opiniones honestas, las anécdotas y los momentos de vulnerabilidad.</div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section reveal">
        <div className="section-label" data-num="02 ·">Los bloques</div>
        <h2 className="section-title">
          De qué vamos
          <br />
          a hablar
        </h2>
        <p className="section-sub">Hacé click en cada bloque para ver las preguntas. Es una guía, no un examen — no hay respuestas correctas.</p>

        <div className="legend">
          <div className="legend-item"><span className="tag tag-fire">bomba</span> Pregunta intensa</div>
          <div className="legend-item"><span className="tag tag-debate">debatible</span> Genera debate</div>
          <div className="legend-item"><span className="tag tag-viral">viral</span> Potencial clip</div>
          <div className="legend-item"><span className="tag tag-deep">profunda</span> Para pensar</div>
        </div>

        <div className="blocks-grid" id="blocksGrid">
          {BLOCKS.map((block, idx) => (
            <div
              className={`block-card ${activeIdx === idx ? "active" : ""}`}
              key={block.name}
              onClick={() => showBlock(idx)}
              data-idx={idx}
            >
              <div className="block-num">{block.num}</div>
              <div className="block-name">{block.name}</div>
              <div className="block-time">{block.time}</div>
              <div className="block-icon">{block.icon}</div>
            </div>
          ))}
        </div>

        <div className={`questions-panel ${activeBlock ? "open" : ""}`} id="questionsPanel">
          <div className="panel-header">
            <span className="panel-title" id="panelTitle">
              {activeBlock ? activeBlock.name : "Bloque 1"}
            </span>
            <span className="panel-count">
              {activeBlock ? `${activeBlock.qs.length} preguntas` : ""}
            </span>
          </div>
          <ul className="q-list" id="qList">
            {activeBlock
              ? activeBlock.qs.map((q) => (
                  <li className="q-item" key={q.n}>
                    <span className="q-num">{q.n}</span>
                    <div>
                      <span className="q-text">{q.t}</span>
                      {q.tags.length ? (
                        <div className="q-tags">
                          {q.tags.map((tag) => (
                            <span className={`tag tag-${tag}`} key={tag}>
                              {TAG_LABELS[tag]}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section reveal">
        <div className="section-label" data-num="03 ·">Para el entrevistado</div>
        <h2 className="section-title">
          Lo que hace una
          <br />
          buena entrevista
        </h2>
        <p className="section-sub">No hay forma de prepararse mal. Pero estas cosas suelen hacer la diferencia.</p>

        <div className="tips-grid">
          {TIPS.map((tip) => (
            <div className="tip-card" key={tip.title}>
              <div className="tip-icon">{tip.icon}</div>
              <div className="tip-title">{tip.title}</div>
              <div className="tip-body">{tip.body}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          Entrevistas<em>Tech</em>
        </div>
        <div className="footer-note">Guía para invitados · Confidencial</div>
      </footer>

      <SiteGlowCursor />
    </>
  );
}