"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Layers } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const infoCards = [
  {
    icon: GraduationCap,
    color: "cyan",
    title: "Systems Engineering",
    sub: "Universidad Tecnológica Nacional (UTN)",
    detail: "Currently enrolled · Argentina",
  },
  {
    icon: MapPin,
    color: "violet",
    title: "Based in Argentina",
    sub: "Open to remote opportunities worldwide",
    detail: undefined,
  },
  {
    icon: Layers,
    color: "emerald",
    title: "Full Stack Focus",
    sub: "React / Next.js · Node.js · Spring Boot",
    detail: undefined,
  },
];

const colorMap: Record<string, string> = {
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
};

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-[#09090f]">
      {/* Separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-cyan-400 text-sm select-none">01.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">About me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent max-w-sm ml-2" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-14 items-start">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m a full-stack developer focused on building{" "}
              <span className="text-cyan-400 font-medium">
                clean, performant, and user-centric
              </span>{" "}
              web applications. I enjoy working across the entire stack — from
              pixel-perfect interfaces to well-structured backend systems and
              efficient database schemas.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Currently studying Systems Engineering at{" "}
              <span className="text-slate-200 font-medium">
                UTN — Universidad Tecnológica Nacional
              </span>{" "}
              in Argentina, which has given me a strong foundation in software
              design, algorithms, and system architecture.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m driven by the challenge of turning complex problems into
              simple, elegant solutions. Whether it&apos;s a new framework, a
              tricky bug, or an ambitious project idea — I&apos;m always ready
              to dive in and build.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-3"
          >
            {infoCards.map(({ icon: Icon, color, title, sub, detail }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/70 hover:border-slate-700/70 transition-colors duration-200"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center ${colorMap[color]}`}
                >
                  <Icon size={17} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-200 font-medium text-sm">{title}</p>
                  <p className="text-slate-400 text-sm mt-0.5 leading-snug">{sub}</p>
                  {detail && (
                    <p className="text-slate-600 text-xs mt-1">{detail}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
