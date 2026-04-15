"use client";

import { motion } from "framer-motion";
import { stackData } from "@/data/stack";
import { useLanguage } from "@/contexts/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Stack() {
  const { t } = useLanguage();

  const translateCategory = (cat: string) => {
    if (cat === "Database") return t("stack_cat_database");
    if (cat === "Tools") return t("stack_cat_tools");
    return cat;
  };

  return (
    <section id="stack" className="relative py-32 bg-slate-50 dark:bg-[#09090f]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-cyan-500 dark:text-cyan-400 text-sm select-none">03.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
            {t("stack_heading")}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent max-w-sm ml-2" />
        </motion.div>

        {/* Categories */}
        <div className="space-y-14">
          {stackData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: categoryIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-slate-400 dark:text-slate-600 text-xs uppercase tracking-[0.18em]">
                  {translateCategory(category.category)}
                </span>
                <div className="flex-1 h-px bg-slate-200/80 dark:bg-slate-800/80" />
              </div>

              {/* Icon grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3"
              >
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.07, y: -3 }}
                    transition={{ duration: 0.18 }}
                    className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/70 hover:border-slate-300/80 dark:hover:border-slate-700/80 hover:bg-white dark:hover:bg-slate-900/80 transition-colors duration-200 cursor-default shadow-sm dark:shadow-none"
                  >
                    <i
                      className={`${item.devicon} text-[1.75rem] leading-none group-hover:scale-110 transition-transform duration-200`}
                    />
                    <span className="text-slate-400 dark:text-slate-500 text-[10px] font-medium text-center leading-tight group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
