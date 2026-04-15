export interface Project {
  title: string;
  description: { en: string; es: string };
  tech: string[];
  features?: { en: string[]; es: string[] };
  images?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "SAG Portal",
    description: {
      en: "Web platform for member, event and payment management. Built for a community organization needing a unified system for administrative operations.",
      es: "Plataforma web para gestión de socios, eventos y pagos. Desarrollada para una organización comunitaria que necesitaba un sistema unificado para operaciones administrativas.",
    },
    tech: ["Next.js", "TypeScript", "React", "PostgreSQL", "Tailwind CSS"],
    features: {
      en: [
        "Member registration with role-based access control",
        "Event creation, scheduling, and attendance tracking",
        "Payment processing and financial report generation",
        "Admin dashboard with real-time activity overview",
        "Email notifications for events and membership updates",
      ],
      es: [
        "Registro de socios con control de acceso basado en roles",
        "Creación y gestión de eventos con seguimiento de asistencia",
        "Procesamiento de pagos y generación de reportes financieros",
        "Panel de administración con resumen de actividad en tiempo real",
        "Notificaciones por email para eventos y actualizaciones de membresía",
      ],
    },
    // images: ["/projects/sag-portal/1.png", "/projects/sag-portal/2.png"],
    repoUrl: "#",
  },
  {
    title: "VES Propiedades",
    description: {
      en: "Real-world full-stack e-commerce platform developed for a client. Features JWT authentication, Cloudinary image management, cart system, and a complete product catalog.",
      es: "Plataforma e-commerce full-stack desarrollada para un cliente real. Incluye autenticación JWT, gestión de imágenes con Cloudinary, carrito de compras y catálogo completo de productos.",
    },
    tech: ["Next.js", "TypeScript", "React", "PostgreSQL", "Tailwind CSS"],
    features: {
      en: [
        "JWT-based authentication with refresh token rotation",
        "Product catalog with categories, filters, and search",
        "Shopping cart with real-time stock validation",
        "Cloudinary integration for product image uploads",
        "Order management and purchase history dashboard",
        "RESTful API built with Fastify for high throughput",
      ],
      es: [
        "Autenticación JWT con rotación de refresh tokens",
        "Catálogo de productos con categorías, filtros y búsqueda",
        "Carrito de compras con validación de stock en tiempo real",
        "Integración con Cloudinary para carga de imágenes de productos",
        "Gestión de órdenes e historial de compras del usuario",
        "API RESTful con Fastify para alto rendimiento",
      ],
    },
    // images: ["/projects/ves-propiedades/1.png", "/projects/ves-propiedades/2.png"],
    repoUrl: "#",
  },
  {
    title: "GAB",
    description: {
      en: "Production donation tracking system built for a real nonprofit organization, following domain-driven design principles to manage and report donations efficiently.",
      es: "Sistema de seguimiento de donaciones en producción para una organización sin fines de lucro real, siguiendo principios de diseño orientado al dominio.",
    },
    tech: ["Next.js", "TypeScript", "React", "PostgreSQL", "Tailwind CSS"],
    features: {
      en: [
        "Domain-modeled donation records with full audit trail",
        "Donor profiles with contribution history and analytics",
        "Campaign management with goal tracking and progress",
        "Exportable reports in multiple formats (CSV, PDF)",
        "Multi-organization support with isolated data contexts",
      ],
      es: [
        "Registros de donaciones modelados por dominio con auditoría completa",
        "Perfiles de donantes con historial de contribuciones y analíticas",
        "Gestión de campañas con seguimiento de metas y progreso",
        "Reportes exportables en múltiples formatos (CSV, PDF)",
        "Soporte multi-organización con contextos de datos aislados",
      ],
    },
    // images: ["/projects/gab/1.png"],
    repoUrl: "#",
  },
];

export const techStyles: Record<string, string> = {
  "Next.js": "bg-slate-700/40 text-slate-200 border-slate-600/40",
  "Supabase": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  "TypeScript": "bg-blue-500/10 text-blue-400 border-blue-500/25",
  "React": "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/25",
  "Fastify": "bg-slate-700/40 text-slate-300 border-slate-600/40",
  "Prisma": "bg-indigo-500/10 text-indigo-400 border-indigo-500/25",
  "PostgreSQL": "bg-sky-600/10 text-sky-400 border-sky-500/25",
  "Tailwind CSS": "bg-teal-500/10 text-teal-400 border-teal-500/25",
  "Java": "bg-orange-500/10 text-orange-400 border-orange-500/25",
  "Spring Boot": "bg-lime-500/10 text-lime-400 border-lime-500/25",
};

export const fallbackTechStyle = "bg-slate-700/40 text-slate-400 border-slate-600/40";
