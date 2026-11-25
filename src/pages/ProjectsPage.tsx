
import { useState } from "react";
import {
  ArrowUpRight,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import {
  projects,
  projectCategories,
  type Project,
} from "../data/projects";

function ProjectCard({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  const statusColor =
    project.status === "Finalizado"
      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
      : project.status === "MVP funcional"
        ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
        : "border-amber-400/20 bg-amber-400/10 text-amber-300";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,#13223A,#0D1729)] transition-colors hover:border-cyan-300/35">
      <div className="aspect-video overflow-hidden border-b border-white/5 bg-[#091426]">
        {project.imageUrl && !failed ? (
          <img
            src={project.imageUrl}
            alt={`Vista previa de ${project.name}`}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_center,#203C61,#0B1528_75%)]">
            <Layers3
              size={64}
              strokeWidth={1}
              className="text-cyan-300/60"
              aria-hidden="true"
            />
            <span className="font-editorial text-2xl text-white">
              {project.name}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
            {project.category}
          </span>

          <span
            className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold ${statusColor}`}
          >
            {project.status}
          </span>
        </div>

        <h2 className="font-editorial mt-5 text-4xl text-white">
          {project.name}
        </h2>

        {project.subtitle && (
          <p className="mt-2 text-sm text-cyan-300">
            {project.subtitle}
          </p>
        )}

        <p className="mt-5 text-sm leading-7 text-slate-300">
          {project.summary}
        </p>

        {project.metrics && (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {project.metrics.slice(0, 2).map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="font-editorial text-3xl text-cyan-300">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 8).map((technology) => (
            <span key={technology} className="tech-chip">
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <Link
            to={`/proyectos/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-white"
          >
            {project.documentationReady
              ? "Explorar caso de estudio"
              : "Ver proyecto"}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProjectsPage() {
  const [category, setCategory] = useState("Todos");

  const filtered = projects.filter(
    (project) =>
      category === "Todos" || project.category === category,
  );

  return (
    <section className="min-h-screen bg-[#081120] pt-36 pb-24 sm:pt-44">
      <Container>
        <span className="section-eyebrow">
          PORTAFOLIO DE INGENIERÍA
        </span>

        <h1 className="font-editorial mt-5 text-5xl text-white sm:text-7xl">
          Mis <span className="gradient-text">proyectos.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Productos digitales y soluciones de software que reflejan
          mi experiencia en desarrollo Full Stack, arquitectura,
          automatización y construcción de aplicaciones.
        </p>

        <div
          role="group"
          aria-label="Filtrar proyectos por categoría"
          className="mt-10 flex flex-wrap gap-3"
        >
          {projectCategories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
                category === item
                  ? "border-cyan-400 bg-cyan-400/15 text-cyan-300"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/30"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
