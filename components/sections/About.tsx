"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const colorMap: Record<string, string> = {
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-500 dark:text-cyan-400",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-500 dark:text-violet-400",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 dark:text-emerald-400",
};

export default function About() {
  const { t } = useLanguage();

  const infoCards = [
    {
      icon: GraduationCap,
      color: "cyan",
      title: t("about_card0_title"),
      sub: t("about_card0_sub"),
      detail: t("about_card0_detail"),
    },
    {
      icon: MapPin,
      color: "violet",
      title: t("about_card1_title"),
      sub: t("about_card1_sub"),
      detail: undefined,
    },
    {
      icon: Layers,
      color: "emerald",
      title: t("about_card2_title"),
      sub: t("about_card2_sub"),
      detail: undefined,
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-slate-50 dark:bg-[#09090f]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-cyan-500 dark:text-cyan-400 text-sm select-none">01.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
            {t("about_heading")}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent max-w-sm ml-2" />
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
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              {t("about_p1a")}{" "}
              <span className="text-cyan-500 dark:text-cyan-400 font-medium">
                {t("about_p1_hl")}
              </span>
              {t("about_p1b")}
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              {t("about_p2_prefix")}
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                {t("about_p2_uni")}
              </span>
              {t("about_p2_suffix")}
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              {t("about_p3")}
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
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/70 hover:border-slate-300/70 dark:hover:border-slate-700/70 transition-colors duration-200"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center ${colorMap[color]}`}
                >
                  <Icon size={17} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-800 dark:text-slate-200 font-medium text-sm">{title}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5 leading-snug">{sub}</p>
                  {detail && (
                    <p className="text-slate-400 dark:text-slate-600 text-xs mt-1">{detail}</p>
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
