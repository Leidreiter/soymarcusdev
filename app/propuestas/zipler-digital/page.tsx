import type { Metadata } from "next";
import ZiplerDigitalClient from "@/components/propuestas/ZiplerDigitalClient";
import "./zipler-digital.css";

export const metadata: Metadata = {
  title: "Propuesta | Zipler Digital",
  description:
    "Propuesta de desarrollo para Zipler Digital: Cronograma, presupuesto USD 1.100, desarrollo en WordPress + LearnDash LMS + WooCommerce.",
  alternates: {
    canonical: "https://soymarcus.dev/propuestas/zipler-digital",
  },
  openGraph: {
    title: "Propuesta | Zipler Digital",
    description:
      "Propuesta de desarrollo para Zipler Digital: Cronograma, presupuesto USD 1.100, desarrollo en WordPress + LearnDash LMS + WooCommerce.",
    type: "website",
    url: "https://soymarcus.dev/propuestas/zipler-digital",
    images: ["/images/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta | Zipler Digital",
    description:
      "Propuesta de desarrollo para Zipler Digital: Cronograma, presupuesto USD 1.100.",
    images: ["/images/preview.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ZiplerDigitalPage() {
  return <ZiplerDigitalClient />;
}
