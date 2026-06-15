"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socials = [
  {
    href: "https://github.com/Brunoliserre",
    icon: Github,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/bruno-liserre/",
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
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative py-20 bg-slate-50 dark:bg-[#09090f]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(34,211,238,0.04),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-cyan-500 dark:text-cyan-400 text-sm mb-3 tracking-wider">
            {t("footer_label")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {t("footer_heading")}
          </h2>
          <p className="text-slate-500 text-base max-w-sm mx-auto mb-10 leading-relaxed">
            {t("footer_sub")}
          </p>

          {/* Primary email CTA */}
          <a
            href="mailto:brunoliserre@gmail.com?subject=Hola%20Bruno"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 mb-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.03]"
          >
            <Mail size={18} />
            {t("footer_cta")}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>

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
                className="group p-3.5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 hover:scale-105 shadow-sm dark:shadow-none"
              >
                <Icon
                  size={19}
                  className="group-hover:scale-105 transition-transform"
                />
              </a>
            ))}
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-8">
            <p className="text-slate-400 dark:text-slate-700 text-xs font-mono">
              {t("footer_built")}
            </p>
            <p className="text-slate-300 dark:text-slate-800 text-xs mt-1.5">
              {t("footer_rights")}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
