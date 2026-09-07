export const WHATSAPP_NUMBER = "543515957014";
export const WHATSAPP_DISPLAY = "+54 351 5957014";
export const WHATSAPP_HERO_URL = `https://wa.me/5493515957014`;

export const EMAIL = "leidreitermartin@gmail.com";
export const CONTENIDO_EMAIL = "marcus.contenido@gmail.com";

export const REDES_FOOTER = [
  {
    icon: "fa-brands fa-linkedin-in",
    href: "https://www.linkedin.com/in/leidreiter/",
    label: "linkedin",
  },
  {
    icon: "fa-brands fa-behance",
    href: "https://www.behance.net/leidreiter",
    label: "behance",
  },
  {
    icon: "fa-brands fa-github",
    href: "https://github.com/Leidreiter",
    label: "github",
  },
];

const TIKTOK_BASE = "https://www.tiktok.com/@soymarcus.dev/video/";

export const POSTS = [
  { image: `/img/posts/11.png`, href: `${TIKTOK_BASE}7679082540916952328` },
  { image: `/img/posts/12.png`, href: `${TIKTOK_BASE}7679169442604911890` },
  { image: `/img/posts/13.png`, href: `${TIKTOK_BASE}7679497094545100050` },
  { image: `/img/posts/14.png`, href: `${TIKTOK_BASE}7680226189524651282` },
  { image: `/img/posts/15.png`, href: `${TIKTOK_BASE}7680299180673256712` },
  { image: `/img/posts/16.png`, href: `${TIKTOK_BASE}7680373613580668178` },
  { image: `/img/posts/17.png`, href: `${TIKTOK_BASE}7680599008313625864` },
  { image: `/img/posts/18.png`, href: `${TIKTOK_BASE}7680673110177172743` },
  { image: `/img/posts/19.png`, href: `${TIKTOK_BASE}7680740971465739528` },
  { image: `/img/posts/20.png`, href: `${TIKTOK_BASE}7681045093733764359` },
  { image: `/img/posts/21.png`, href: `${TIKTOK_BASE}7681344918345911559` },
  { image: `/img/posts/22.png`, href: `${TIKTOK_BASE}7681489877107477778` },
  { image: `/img/posts/23.png`, href: `${TIKTOK_BASE}7681717345961790738` },
  { image: `/img/posts/24.png`, href: `${TIKTOK_BASE}7681797282206895368` },
].map((post) => ({ ...post, alt: "@soymarcus.dev - Post en TikTok" }));

export const HABILIDADES_TECNICAS = [
  "fa-brands fa-html5",
  "fa-brands fa-css3-alt",
  "fa-brands fa-js",
  "fa-brands fa-php",
  "fa-brands fa-wordpress-simple",
  "fa-brands fa-figma",
];

export const HABILIDADES = [
  { nombre: "HTML/CSS", valor: 95 },
  { nombre: "JS", valor: 70 },
  { nombre: "PHP", valor: 85 },
  { nombre: "WordPress", valor: 95 },
  { nombre: "Figma", valor: 80 },
];

export const CONOCIMIENTOS = ["MySQL", "Bootstrap / Sass", "Gulp", "GITHUB"];

export const IDIOMAS_DATOS = [
  { porcentaje: 100, key: "espanol" as const },
  { porcentaje: 70, key: "ingles" as const },
];

export const NUMEROS = [
  { dataNumero: 10, labelKey: "numeros1" as const },
  { dataNumero: 50, labelKey: "numeros2" as const },
  { dataNumero: 85, labelKey: "numeros3" as const },
  { dataNumero: 20, labelKey: "numeros4" as const },
];

export const SERVICIOS = [
  { tituloKey: "servicio1Titulo" as const, descKey: "servicio1Desc" as const },
  { tituloKey: "servicio2Titulo" as const, descKey: "servicio2Desc" as const },
  { tituloKey: "servicio3Titulo" as const, descKey: "servicio3Desc" as const },
  { tituloKey: "servicio4Titulo" as const, descKey: "servicio4Desc" as const },
  { tituloKey: "servicio5Titulo" as const, descKey: "servicio5Desc" as const },
  { tituloKey: "servicio6Titulo" as const, descKey: "servicio6Desc" as const },
];

export const PAQUETES = [
  {
    iconoClase: "paq1",
    nombreKey: "paquete1Nombre" as const,
    ribbon: null,
    itemsKeys: [
      "paquete1Item1",
      "paquete1Item2",
      "paquete1Item3",
      "paquete1Item4",
      "paquete1Item5",
      "paquete1Item6",
    ] as const,
  },
  {
    iconoClase: "paq2",
    nombreKey: "paquete2Nombre" as const,
    ribbonKey: "paquete2Ribbon" as const,
    itemsKeys: [
      "paquete2Item1",
      "paquete2Item2",
      "paquete2Item3",
      "paquete2Item4",
      "paquete2Item5",
      "paquete2Item6",
    ] as const,
  },
  {
    iconoClase: "paq3",
    nombreKey: "paquete3Nombre" as const,
    ribbon: null,
    itemsKeys: [
      "paquete3Item1",
      "paquete3Item2",
      "paquete3Item3",
      "paquete3Item4",
      "paquete3Item5",
      "paquete3Item6",
    ] as const,
  },
];

export const TESTIMONIOS = [
  {
    imagen: "/img/testimoniales/constanza.jpeg",
    estrella: "★★★★★",
    nombreKey: "testimonial1Nombre" as const,
    puestoKey: "testimonial1Puesto" as const,
    textoKey: "testimonial1Texto" as const,
  },
  {
    imagen: "/img/testimoniales/daniel.jpg",
    estrella: "★★★★☆",
    nombreKey: "testimonial2Nombre" as const,
    puestoKey: "testimonial2Puesto" as const,
    textoKey: "testimonial2Texto" as const,
  },
  {
    imagen: "/img/testimoniales/guadalupe.jpg",
    estrella: "★★★★★",
    nombreKey: "testimonial3Nombre" as const,
    puestoKey: "testimonial3Puesto" as const,
    textoKey: "testimonial3Texto" as const,
  },
  {
    imagen: "/img/testimoniales/matias.jpeg",
    estrella: "★★★★★",
    nombreKey: "testimonial4Nombre" as const,
    puestoKey: "testimonial4Puesto" as const,
    textoKey: "testimonial4Texto" as const,
  },
  {
    imagen: "/img/testimoniales/eyal.jpg",
    estrella: "★★★★★",
    nombreKey: "testimonial5Nombre" as const,
    puestoKey: "testimonial5Puesto" as const,
    textoKey: "testimonial5Texto" as const,
  },
  {
    imagen: "/img/testimoniales/aldana.jpg",
    estrella: "★★★★☆",
    nombreKey: "testimonial6Nombre" as const,
    puestoKey: "testimonial6Puesto" as const,
    textoKey: "testimonial6Texto" as const,
  },
];

export const PORTFOLIO = [
  {
    png: "/img/portfolio/la-veneciana.png",
    webp: "/img/portfolio/la-veneciana.webp",
    url: "https://laveneciana.com.ar/",
    tituloKey: "portfolio1Titulo" as const,
    descKey: "portfolio1Desc" as const,
    alt: "La Veneciana – Helados + Café + Delikatessen",
  },
  {
    png: "/img/portfolio/margaret.png",
    webp: "/img/portfolio/margaret.webp",
    url: "https://margaretautomotores.com/",
    tituloKey: "portfolio2Titulo" as const,
    descKey: "portfolio2Desc" as const,
    alt: "Margaret automotores - Vehículos usados seleccionados en Sierras Chicas",
  },
  {
    png: "/img/portfolio/vida-freelance.png",
    webp: "/img/portfolio/vida-freelance.webp",
    url: "https://vidafreelance.live",
    tituloKey: "portfolio3Titulo" as const,
    descKey: "portfolio3Desc" as const,
    alt: "Vida Freelance",
  },
  {
    png: "/img/portfolio/simonetta.png",
    webp: "/img/portfolio/simonetta.webp",
    url: "https://rsai.com.ar/",
    tituloKey: "portfolio4Titulo" as const,
    descKey: "portfolio4Desc" as const,
    alt: "Simonetta",
  },
  {
    png: "/img/portfolio/hola-mundo-store.png",
    webp: "/img/portfolio/hola-mundo-store.webp",
    url: "https://holamundo.store/",
    tituloKey: "portfolio5Titulo" as const,
    descKey: "portfolio5Desc" as const,
    alt: "Hola Mundo - tienda online de merchandising para developers",
  },
  {
    png: "/img/portfolio/tecnocell.png",
    webp: "/img/portfolio/tecnocell.webp",
    url: "https://tecnocellcompany.com/",
    tituloKey: "portfolio6Titulo" as const,
    descKey: "portfolio6Desc" as const,
    alt: "Tecnocell Company",
  },
  {
    png: "/img/portfolio/coti-estevan.png",
    webp: "/img/portfolio/coti-estevan.webp",
    url: "https://constanzaestevan.com/",
    tituloKey: "portfolio7Titulo" as const,
    descKey: "portfolio7Desc" as const,
    alt: "Constanza Estevan",
  },
  {
    png: "/img/portfolio/aural.png",
    webp: "/img/portfolio/aural.webp",
    url: "https://aural-sounds.com/",
    tituloKey: "portfolio8Titulo" as const,
    descKey: "portfolio8Desc" as const,
    alt: "Aural Sounds",
  },
  {
    png: "/img/portfolio/qunan.png",
    webp: "/img/portfolio/qunan.webp",
    url: "https://qunanarquitectos.com/",
    tituloKey: "portfolio9Titulo" as const,
    descKey: "portfolio9Desc" as const,
    alt: "Qunan Arquitectos",
  },
  {
    png: "/img/portfolio/eden.png",
    webp: "/img/portfolio/eden.webp",
    url: "https://www.edenagua.com/",
    tituloKey: "portfolio10Titulo" as const,
    descKey: "portfolio10Desc" as const,
    alt: "Eden Agua",
  },
  {
    png: "/img/portfolio/kalcker-institute.png",
    webp: "/img/portfolio/kalcker-institute.webp",
    url: "https://es.kalckerinstitute.com/",
    tituloKey: "portfolio11Titulo" as const,
    descKey: "portfolio11Desc" as const,
    alt: "Kalcker Institute",
  },
  {
    png: "/img/portfolio/voedia.png",
    webp: "/img/portfolio/voedia.webp",
    url: "https://voedia.es/",
    tituloKey: "portfolio12Titulo" as const,
    descKey: "portfolio12Desc" as const,
    alt: "Voedia",
  },
  {
    png: "/img/portfolio/maquinarias-pesadas.png",
    webp: "/img/portfolio/maquinarias-pesadas.webp",
    url: "https://maquinarias.pe/",
    tituloKey: "portfolio13Titulo" as const,
    descKey: "portfolio13Desc" as const,
    alt: "Maquinarias | Autos, Equipos, Repuestos y Servicio Técnico",
  },
  {
    png: "/img/portfolio/marcelo-jaime.png",
    webp: "/img/portfolio/marcelo-jaime.webp",
    url: "https://marcelojaime.com/",
    tituloKey: "portfolio14Titulo" as const,
    descKey: "portfolio14Desc" as const,
    alt: "Marcelo Jaime",
  },
  {
    png: "/img/portfolio/cm-powertech.png",
    webp: "/img/portfolio/cm-powertech.webp",
    url: "https://www.cmpowertech.com/es/",
    tituloKey: "portfolio15Titulo" as const,
    descKey: "portfolio15Desc" as const,
    alt: "CMPowerTech",
  },
];

export const DIAGNOSTICO = [
  { tituloKey: "problema1Titulo" as const, descKey: "problema1Desc" as const },
  { tituloKey: "problema2Titulo" as const, descKey: "problema2Desc" as const },
  { tituloKey: "problema3Titulo" as const, descKey: "problema3Desc" as const },
  { tituloKey: "problema4Titulo" as const, descKey: "problema4Desc" as const },
  { tituloKey: "problema5Titulo" as const, descKey: "problema5Desc" as const },
  { tituloKey: "problema6Titulo" as const, descKey: "problema6Desc" as const },
];

export const SOLUCIONES = [
  { tituloKey: "solucion1Titulo" as const, descKey: "solucion1Desc" as const },
  { tituloKey: "solucion2Titulo" as const, descKey: "solucion2Desc" as const },
  { tituloKey: "solucion3Titulo" as const, descKey: "solucion3Desc" as const },
  { tituloKey: "solucion4Titulo" as const, descKey: "solucion4Desc" as const },
  { tituloKey: "solucion5Titulo" as const, descKey: "solucion5Desc" as const },
  { tituloKey: "solucion6Titulo" as const, descKey: "solucion6Desc" as const },
];

export const CONTACTO_INFO = [
  {
    labelKey: "whatsapp" as const,
    value: WHATSAPP_DISPLAY,
    href: null,
  },
  {
    labelKey: "telegram" as const,
    value: "@martinleidreiter",
    href: "https://t.me/martinleidreiter",
  },
  {
    labelKey: "email" as const,
    value: EMAIL,
    href: null,
  },
  {
    labelKey: "linkedin" as const,
    value: "/in/leidreiter",
    href: "https://www.linkedin.com/in/leidreiter/",
  },
  {
    labelKey: "behance" as const,
    value: "/leidreiter",
    href: "https://www.behance.net/leidreiter",
  },
  {
    labelKey: "github" as const,
    value: "/leidreiter",
    href: "https://github.com/Leidreiter",
  },
];

export const PROYECTOS_PROPIOS = [
  {
    img: "/img/proyectos/soymarcus.svg",
    alt: "@soymarcusdev web oficial",
    tooltip: "@soymarcusdev",
    href: "https://soymarcus.dev",
    target: undefined as string | undefined,
  },
  {
    img: "/img/proyectos/lemora.svg",
    alt: "Lemora - Mi startup ecommerce",
    tooltip: "Lemora",
    href: "https://lemora.lat",
    target: "_blank",
  },
  {
    img: "/img/proyectos/holamundostore.svg",
    alt: "Hola Mundo Store - Mi tienda online",
    tooltip: "Hola Mundo Store",
    href: "https://holamundo.store",
    target: "_blank",
  },
  {
    img: "/img/proyectos/vidafreelance.svg",
    alt: "Vida freelance - Mi podcast en youtube",
    tooltip: "Vida Freelance",
    href: "https://vidafreelance.live",
    target: "_blank",
  },
  {
    img: "/img/proyectos/codeinjection.svg",
    alt: "Code injection - Música IA para devs",
    tooltip: "Code Injection",
    href: "https://www.codeinjection.site/",
    target: "_blank",
  },
  {
    img: "/img/proyectos/awp.svg",
    alt: "Academia WP - Academia de cursos online de WordPress",
    tooltip: "Academia WP",
    href: null as string | null,
    target: undefined as string | undefined,
  },
];

export const MENU_ITEMS = [
  { labelKey: "menuInicio" as const, href: "#home" },
  { labelKey: "menuServicios" as const, href: "#servicios" },
  { labelKey: "menuPortfolio" as const, href: "#portfolio" },
  { labelKey: "menuContacto" as const, href: "#contacto" },
  {
    labelKey: "menuTools" as const,
    href: "https://apps.soymarcus.dev/",
    target: "_blank",
  },
  { labelKey: "menuLinks" as const, href: "/links", color: true },
];