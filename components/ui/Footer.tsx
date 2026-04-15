"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
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
];

export default function Footer() {
  return (
    <footer id="contact" className="relative py-20 bg-[#09090f]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(34,211,238,0.04),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-cyan-400 text-sm mb-3 tracking-wider">04. Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-slate-500 text-base max-w-sm mx-auto mb-10 leading-relaxed">
            Have a project in mind or want to chat? I&apos;m always open to
            interesting conversations and new opportunities.
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-3 mb-14">
            {socials.map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={label}
                className="group p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-slate-500 hover:text-white hover:border-slate-700 transition-all duration-200 hover:scale-105"
              >
                <Icon
                  size={19}
                  className="group-hover:scale-105 transition-transform"
                />
              </a>
            ))}
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-800/50 pt-8">
            <p className="text-slate-700 text-xs font-mono">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
            <p className="text-slate-800 text-xs mt-1.5">
              © 2026 Bruno Liserre
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
