"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#09090f]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(148,163,184,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(34,211,238,0.07),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_70%,rgba(139,92,246,0.06),transparent)]" />

      {/* Animated blob accents */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.06] blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-violet-500/[0.06] blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={item}
            className="font-mono text-slate-500 text-base mb-2 tracking-wider"
          >
            Hey, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-[5.5rem] sm:text-[7rem] lg:text-[9rem] font-black leading-[0.9] mb-6 bg-gradient-to-br from-white via-cyan-200 to-violet-400 bg-clip-text text-transparent"
          >
            Bruno.
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={item}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-5 tracking-tight"
          >
            Full Stack Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-slate-500 text-base sm:text-lg max-w-md mx-auto mb-12 leading-relaxed"
          >
            Building modern web experiences from Argentina.
            <br className="hidden sm:block" />
            Clean code, scalable systems, shipped products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {[
              {
                href: "https://github.com",
                icon: Github,
                label: "GitHub",
                external: true,
              },
              {
                href: "https://linkedin.com",
                icon: Linkedin,
                label: "LinkedIn",
                external: true,
              },
              {
                href: "mailto:brunoliserre@gmail.com",
                icon: Mail,
                label: "Email",
                external: false,
              },
            ].map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-slate-800/80 hover:border-slate-700 transition-all duration-200 text-sm font-medium"
              >
                <Icon
                  size={15}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                {label}
              </a>
            ))}

            <a
              href="/cv.pdf"
              download
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-medium transition-all duration-200 text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.03]"
            >
              <Download
                size={15}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-slate-600 text-[10px] tracking-[0.2em] uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
