"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  Github,
  ExternalLink,
  Lock,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { techStyles, fallbackTechStyle } from "@/data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const slideVariants = {
  enter: (d: number) => ({
    x: d > 0 ? "55%" : "-55%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({
    x: d > 0 ? "-55%" : "55%",
    opacity: 0,
  }),
};

export default function ProjectModal({ project, onClose }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);

  const images = project?.images ?? [];
  const hasImages = images.length > 0;

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Reset on project change
  useEffect(() => {
    setCurrentImage(0);
    setDirection(1);
  }, [project?.title]);

  // ESC + arrow keys + scroll lock
  useEffect(() => {
    if (!project) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose, goNext, goPrev]);

  const isInternal =
    !project?.liveUrl && (!project?.repoUrl || project.repoUrl === "#");

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0f1522] border border-slate-800/80 shadow-2xl shadow-black/60 pointer-events-auto"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                aria-label="Close modal"
              >
                <X size={15} />
              </button>

              {/* ── Image gallery ───────────────────────────────────── */}
              {hasImages && (
                <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl bg-slate-950">
                  <AnimatePresence custom={direction} mode="popLayout">
                    <motion.div
                      key={currentImage}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[currentImage]}
                        alt={`${project.title} screenshot ${currentImage + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 672px) 100vw, 672px"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Bottom gradient so text stays readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1522]/50 via-transparent to-transparent pointer-events-none" />

                  {/* Navigation arrows (only if multiple images) */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={goPrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={goNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm"
                        aria-label="Next image"
                      >
                        <ChevronRight size={16} />
                      </button>

                      {/* Dot / pill indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setDirection(i > currentImage ? 1 : -1);
                              setCurrentImage(i);
                            }}
                            aria-label={`Go to image ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              i === currentImage
                                ? "w-5 bg-white"
                                : "w-1.5 bg-white/35 hover:bg-white/60"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Counter */}
                      <span className="absolute top-3 left-3 text-[10px] font-mono text-white/60 bg-black/40 backdrop-blur-sm rounded-md px-2 py-0.5">
                        {currentImage + 1} / {images.length}
                      </span>
                    </>
                  )}
                </div>
              )}

              {/* ── Body ─────────────────────────────────────────────── */}
              <div className="p-6 sm:p-7">
                {/* Title + description */}
                <h3 className="text-lg font-bold text-slate-100 mb-1.5 pr-8">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-7">
                  {project.description}
                </p>

                <div className="grid sm:grid-cols-[1fr_180px] gap-8">
                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div>
                      <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.18em] mb-4">
                        Features
                      </p>
                      <ul className="space-y-2.5">
                        {project.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center">
                              <Check size={9} className="text-cyan-400" />
                            </span>
                            <span className="text-slate-300 text-sm leading-snug">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Stack + links */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.18em] mb-3">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full border ${
                              techStyles[t] ?? fallbackTechStyle
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.18em] mb-3">
                        Links
                      </p>
                      <div className="flex flex-col gap-2.5">
                        {project.repoUrl && project.repoUrl !== "#" && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            <Github size={14} />
                            Repository
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            <ExternalLink size={14} />
                            Live demo
                          </a>
                        )}
                        {isInternal && (
                          <span className="flex items-center gap-2 text-xs text-slate-600">
                            <Lock size={12} />
                            Internal project
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
