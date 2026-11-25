
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Layers3,
  Code2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { projects, type Project } from "../../data/projects";

function ProjectVisual({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  if (project.imageUrl && !failed) {
    return (
      <img
        src={project.imageUrl}
        alt={`Vista previa de ${project.name}`}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="h-full w-full object-contain"
      />
    );
  }

  return (
    <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-5 bg-[radial-gradient(circle_at_center,#203C61,#0B1528_75%)] p-8">
      <Layers3
        size={72}
        strokeWidth={1}
        className="text-cyan-300/70"
        aria-hidden="true"
      />
      <span className="font-editorial text-3xl text-white">
        {project.name}
      </span>
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-cyan-300/20 bg-[linear-gradient(145deg,#13233C,#0B1528)] transition-colors hover:border-cyan-300/40">
      <div className="grid lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col p-7 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-300">
              Proyecto principal
            </span>

            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              {project.status}
            </span>
          </div>

          <h3 className="font-editorial mt-7 text-5xl leading-tight text-white sm:text-6xl">
            {project.name}
          </h3>

          {project.subtitle && (
            <p className="mt-3 text-sm font-medium text-cyan-300">
              {project.subtitle}
            </p>
          )}

          <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
            {project.summary}
          </p>

          {project.metrics && (
            <div className="mt-8 grid grid-cols-2 gap-3">
              {project.metrics.map((metric) => (
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

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.slice(0, 8).map((technology) => (
              <span key={technology} className="tech-chip">
                {technology}
              </span>
            ))}
          </div>

          <Link
            to={`/proyectos/${project.slug}`}
            className="mt-9 inline-flex min-h-12 w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 text-sm font-bold text-[#061325] transition hover:brightness-110"
          >
            Explorar caso de estudio
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="flex min-h-[280px] items-center justify-center overflow-hidden bg-[#091426] p-4 sm:p-7">
          <ProjectVisual project={project} />
        </div>
      </div>
    </article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#101B31] transition-colors hover:border-cyan-300/30">
      <div className="aspect-video overflow-hidden bg-[#091426]">
        <ProjectVisual project={project} />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold text-cyan-300">
            {project.category}
          </span>
          <span className="text-xs text-slate-400">
            {project.status}
          </span>
        </div>

        <h3 className="font-editorial mt-5 text-3xl text-white">
          {project.name}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span key={technology} className="tech-chip">
              {technology}
            </span>
          ))}
        </div>

        <Link
          to={`/proyectos/${project.slug}`}
          className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white"
        >
          Ver proyecto
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}

export function ProjectsPreview() {
  const featuredProjects = projects.filter(
    (project) => project.featured && project.documentationReady,
  );

  const [primary, ...secondary] = featuredProjects;

  if (!primary) return null;

  return (
    <section
      id="proyectos"
      className="scroll-mt-28 border-t border-white/5 bg-[#081120] pt-12 pb-24"
    >
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="flex items-center gap-3 text-cyan-300">
              <Code2 size={20} />
              <span className="section-eyebrow">
                PROYECTOS DESTACADOS
              </span>
            </div>

            <h2 className="font-editorial mt-5 max-w-3xl text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-white">
              Ingeniería aplicada a problemas reales.
            </h2>
          </div>

          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white"
          >
            Ver todos los proyectos
            <ArrowRight size={17} />
          </Link>
        </div>

        <FeaturedCard project={primary} />

        {secondary.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {secondary.map((project) => (
              <CompactCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
