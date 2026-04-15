export interface Project {
  title: string;
  description: string;
  tech: string[];
  features?: string[];
  images?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "SAG Portal",
    description:
      "Web platform for member, event and payment management. Built for a community organization needing a unified system for administrative operations.",
    tech: ["Next.js", "Supabase", "TypeScript"],
    features: [
      "Member registration with role-based access control",
      "Event creation, scheduling, and attendance tracking",
      "Payment processing and financial report generation",
      "Admin dashboard with real-time activity overview",
      "Email notifications for events and membership updates",
    ],
    // images: ["/projects/sag-portal/1.png", "/projects/sag-portal/2.png"],
    repoUrl: "#",
  },
  {
    title: "VestShop",
    description:
      "Full-stack e-commerce platform with JWT authentication, Cloudinary image management, cart system, and a complete product catalog.",
    tech: ["React", "Node.js", "Fastify", "Prisma", "PostgreSQL"],
    features: [
      "JWT-based authentication with refresh token rotation",
      "Product catalog with categories, filters, and search",
      "Shopping cart with real-time stock validation",
      "Cloudinary integration for product image uploads",
      "Order management and purchase history dashboard",
      "RESTful API built with Fastify for high throughput",
    ],
    // images: ["/projects/vestshop/1.png", "/projects/vestshop/2.png"],
    repoUrl: "#",
  },
  {
    title: "DonaTrack",
    description:
      "Donation tracking system built with domain-driven design principles. Helps nonprofit organizations manage and report donations efficiently.",
    tech: ["Java", "Spring Boot"],
    features: [
      "Domain-modeled donation records with full audit trail",
      "Donor profiles with contribution history and analytics",
      "Campaign management with goal tracking and progress",
      "Exportable reports in multiple formats (CSV, PDF)",
      "Multi-organization support with isolated data contexts",
    ],
    // images: ["/projects/donatrack/1.png"],
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
  "Java": "bg-orange-500/10 text-orange-400 border-orange-500/25",
  "Spring Boot": "bg-lime-500/10 text-lime-400 border-lime-500/25",
};

export const fallbackTechStyle = "bg-slate-700/40 text-slate-400 border-slate-600/40";
