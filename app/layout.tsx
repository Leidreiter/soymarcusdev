import type { Metadata, Viewport } from "next";
import { Montserrat, Inter, Unbounded, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./providers/language";
import { ThemeProvider } from "./providers/theme";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soymarcus.dev"),
  title: "Martin Leidreiter / @soymarcusdev | Diseñador, UX/UI & Web Developer",
  description:
    "@soymarcusdev: diseñador, UX/UI y web developer. Diseño webs que no solo se ven bien, sino que funcionan. Mirá mis proyectos, servicios y lo que puedo crear para tu marca.",
  icons: {
    icon: "/images/favicon.svg",
  },
  openGraph: {
    title: "@soymarcusdev | Diseñador, UX/UI & Web Developer",
    description:
      "Diseño webs que no solo se ven bien, sino que funcionan. Mirá mis proyectos, servicios y portfolio.",
    type: "website",
    url: "https://soymarcus.dev/",
    images: ["/images/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "@soymarcusdev | Diseñador, UX/UI & Web Developer",
    description:
      "Diseño webs que no solo se ven bien, sino que funcionan. Mirá mis proyectos, servicios y portfolio.",
    images: ["/images/preview.jpg"],
  },
  other: {
    "google-site-verification": "09h9pW6e9_q5LOTClQ3j9My9ZpT5uc0nYgbJDqczwPI",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable} ${unbounded.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Martin H. Leidreiter",
              alternateName: "@soymarcusdev",
              url: "https://soymarcus.dev/",
              email: "mailto:leidreitermartin@gmail.com",
              image: "https://soymarcus.dev/images/preview.jpg",
              jobTitle: "Web Developer, UX/UI & Diseñador Gráfico",
              nationality: "Argentina",
              sameAs: [
                "https://www.linkedin.com/in/leidreiter/",
                "https://www.behance.net/leidreiter",
                "https://github.com/Leidreiter",
                "https://www.tiktok.com/@soymarcus.dev",
                "https://www.twitch.tv/soymarcusdev",
                "https://www.youtube.com/@soymarcusdev",
                "https://x.com/soymarcusdev",
                "https://soundcloud.com/soymarcusdev",
              ],
              knowsAbout: [
                "Diseño Web",
                "UX/UI Design",
                "Desarrollo Web",
                "WordPress",
                "Ecommerce",
                "Diseño Gráfico",
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function apply(){try{var isDark;var s=localStorage.getItem('theme');var h=new Date().getHours();if(s){isDark=s==='dark';}else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches){isDark=true;}else{isDark=h>=20||h<7;}var b=document.body;if(b){if(!isDark&&location.pathname==='/')b.classList.add('light-mode');else{b.classList.remove('light-mode');}}else{requestAnimationFrame(apply);}}catch(e){}}apply();})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}