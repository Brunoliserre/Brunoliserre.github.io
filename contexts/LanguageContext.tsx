"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "es" | "en";

const translations: Record<Lang, Record<string, string>> = {
  es: {
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_stack: "Stack",
    nav_contact: "Contacto",

    hero_available: "Disponible para oportunidades",
    hero_greeting: "Hola, soy",
    hero_tagline1: "Construyendo experiencias web modernas desde Argentina.",
    hero_tagline2: "Código limpio, sistemas escalables, productos reales.",
    hero_download_cv: "Descargar CV",
    hero_scroll: "scroll",

    about_heading: "Sobre mí",
    about_p1a: "Soy desarrollador full-stack enfocado en construir aplicaciones web",
    about_p1_hl: "limpias, performantes y centradas en el usuario",
    about_p1b: ". Disfruto trabajar en toda la stack — desde interfaces pixel-perfect hasta sistemas backend bien estructurados y esquemas de base de datos eficientes.",
    about_p2_prefix: "Actualmente cursando Ingeniería en Sistemas en ",
    about_p2_uni: "UTN — Universidad Tecnológica Nacional",
    about_p2_suffix: " de Argentina, lo que me dio una base sólida en diseño de software, algoritmos y arquitectura de sistemas.",
    about_p3: "Me impulsa el desafío de convertir problemas complejos en soluciones simples y elegantes. Ya sea un nuevo framework, un bug difícil o una idea de proyecto ambiciosa — siempre estoy listo para sumergirme y construir.",
    about_card0_title: "Ingeniería en Sistemas",
    about_card0_sub: "Universidad Tecnológica Nacional (UTN)",
    about_card0_detail: "Cursando actualmente · Argentina",
    about_card1_title: "Radicado en Argentina",
    about_card1_sub: "Abierto a oportunidades remotas globales",
    about_card2_title: "Enfoque Full Stack",
    about_card2_sub: "React / Next.js · Node.js · Spring Boot",

    projects_heading: "Proyectos",
    projects_view_details: "Ver detalles",
    projects_screenshots: "capturas",

    modal_features: "Características",
    modal_stack: "Stack",
    modal_links: "Enlaces",
    modal_repo: "Repositorio",
    modal_live: "Demo en vivo",
    modal_internal: "Proyecto interno",

    stack_heading: "Stack tecnológico",
    stack_cat_database: "Base de Datos",
    stack_cat_tools: "Herramientas",

    footer_label: "04. Contacto",
    footer_heading: "Trabajemos juntos",
    footer_sub: "¿Tenés un proyecto en mente o querés charlar? Siempre estoy abierto a conversaciones interesantes y nuevas oportunidades.",
    footer_cta: "Escribime un email",
    footer_built: "Construido con Next.js, TypeScript & Tailwind CSS",
    footer_rights: "© 2026 Bruno Liserre",
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_stack: "Stack",
    nav_contact: "Contact",

    hero_available: "Available for opportunities",
    hero_greeting: "Hey, I'm",
    hero_tagline1: "Building modern web experiences from Argentina.",
    hero_tagline2: "Clean code, scalable systems, shipped products.",
    hero_download_cv: "Download CV",
    hero_scroll: "scroll",

    about_heading: "About me",
    about_p1a: "I'm a full-stack developer focused on building",
    about_p1_hl: "clean, performant, and user-centric",
    about_p1b: " web applications. I enjoy working across the entire stack — from pixel-perfect interfaces to well-structured backend systems and efficient database schemas.",
    about_p2_prefix: "Currently studying Systems Engineering at ",
    about_p2_uni: "UTN — Universidad Tecnológica Nacional",
    about_p2_suffix: " in Argentina, which has given me a strong foundation in software design, algorithms, and system architecture.",
    about_p3: "I'm driven by the challenge of turning complex problems into simple, elegant solutions. Whether it's a new framework, a tricky bug, or an ambitious project idea — I'm always ready to dive in and build.",
    about_card0_title: "Systems Engineering",
    about_card0_sub: "Universidad Tecnológica Nacional (UTN)",
    about_card0_detail: "Currently enrolled · Argentina",
    about_card1_title: "Based in Argentina",
    about_card1_sub: "Open to remote opportunities worldwide",
    about_card2_title: "Full Stack Focus",
    about_card2_sub: "React / Next.js · Node.js · Spring Boot",

    projects_heading: "Projects",
    projects_view_details: "View details",
    projects_screenshots: "screenshots",

    modal_features: "Features",
    modal_stack: "Stack",
    modal_links: "Links",
    modal_repo: "Repository",
    modal_live: "Live demo",
    modal_internal: "Internal project",

    stack_heading: "Tech Stack",
    stack_cat_database: "Database",
    stack_cat_tools: "Tools",

    footer_label: "04. Contact",
    footer_heading: "Let's work together",
    footer_sub: "Have a project in mind or want to chat? I'm always open to interesting conversations and new opportunities.",
    footer_cta: "Send me an email",
    footer_built: "Built with Next.js, TypeScript & Tailwind CSS",
    footer_rights: "© 2026 Bruno Liserre",
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "es" || saved === "en") {
      setLangState(saved);
      document.documentElement.setAttribute("lang", saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.setAttribute("lang", l);
  };

  const t = (key: string) => translations[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
