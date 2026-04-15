"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, FolderOpen, ArrowRight } from "lucide-react";
import { projects, techStyles, fallbackTechStyle, type Project } from "@/data/projects";
import ProjectModal from "@/components/ui/ProjectModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative py-32 bg-[#09090f]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-16"
          >
            <span className="font-mono text-cyan-400 text-sm select-none">02.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent max-w-sm ml-2" />
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects.map((project) => {
              const hasImages = project.images && project.images.length > 0;

              return (
                <motion.article
                  key={project.title}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex flex-col rounded-2xl bg-slate-900/50 border border-slate-800/70 hover:border-slate-700/80 hover:bg-slate-900/80 transition-colors duration-300 overflow-hidden"
                >
                  {/* Hover top accent line */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/40 transition-all duration-500 z-10" />

                  {/* Thumbnail (shown only when images exist) */}
                  {hasImages ? (
                    <div className="relative w-full h-40 overflow-hidden flex-shrink-0">
                      <Image
                        src={project.images![0]}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Gradient fade into card body */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90" />
                      {/* Image count badge */}
                      {project.images!.length > 1 && (
                        <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-white/70 bg-black/50 backdrop-blur-sm rounded-md px-2 py-0.5">
                          {project.images!.length} screenshots
                        </span>
                      )}
                    </div>
                  ) : null}

                  {/* Card body */}
                  <div className={`flex flex-col flex-1 p-6 ${hasImages ? "pt-4" : ""}`}>
                    {/* Header row (no thumbnail) or compact header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center">
                        <FolderOpen size={16} className="text-cyan-400" />
                      </div>
                      <div className="flex items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live demo"
                            onClick={(e) => e.stopPropagation()}
                            className="text-slate-500 hover:text-cyan-400 transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        {project.repoUrl && project.repoUrl !== "#" && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repo"
                            onClick={(e) => e.stopPropagation()}
                            className="text-slate-500 hover:text-cyan-400 transition-colors"
                          >
                            <Github size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title + description */}
                    <div className="flex-1 mb-5">
                      <h3 className="text-base font-semibold text-slate-100 group-hover:text-white mb-2 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full border ${
                            techStyles[tech] ?? fallbackTechStyle
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer: Details button */}
                    <div className="border-t border-slate-800/60 pt-4">
                      <button
                        onClick={() => setSelected(project)}
                        className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors group/btn"
                      >
                        <span>View details</span>
                        <ArrowRight
                          size={12}
                          className="translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-200"
                        />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Modal (rendered outside section so it can be full-screen) */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
