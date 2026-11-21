
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChessKnight,
  Music2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { projects, type Project } from "../../data/projects";

function ProjectVisual({ project }: { project: Project }) {
  if (project.imageUrl) {
    return (
      <img
        src={project.imageUrl}
        alt={`Vista previa de ${project.name}`}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }

  if (project.slug === "chess-study") {
    const pieces = [
      "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
      "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
      "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "",
      "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
      "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖",
    ];

    return (
      <div
        aria-label="Ilustración decorativa de un tablero de ajedrez"
        className="relative flex h-full min-h-[240px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#17406B,#091526_75%)] p-7"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(139,92,246,0.15))]" />
        <div className="relative aspect-square w-[min(100%,285px)] rotate-[-8deg] overflow-hidden rounded-lg border-[7px] border-[#17243B] shadow-[0_22px_70px_rgba(0,0,0,0.6)]">
          <div className="grid h-full grid-cols-8">
            {pieces.map((piece, index) => {
              const row = Math.floor(index / 8);
              const col = index % 8;
              const dark = (row + col) % 2 === 1;

              return (
                <div
                  key={index}
                  className={`flex items-center justify-center text-[clamp(12px,1.65vw,23px)] ${
                    dark ? "bg-[#427D9B]" : "bg-[#D6E8ED]"
                  }`}
                >
                  <span
                    className={
                      row < 2
                        ? "text-[#14233A]"
                        : "text-[#F9FAFB] drop-shadow-[0_1px_1px_#14233A]"
                    }
                  >
                    {piece}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const Icon = project.slug === "universopiano" ? Music2 : Building2;

  return (
    <div className="relative flex h-full min-h-[170px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_60%_35%,#263D70,#111B34_70%)]">
      <div className="absolute inset-6 rounded-2xl border border-cyan-300/10" />
      <div className="absolute size-40 rounded-full bg-violet-500/10 blur-3xl" />
      <Icon
        size={88}
        strokeWidth={0.8}
        className="relative text-cyan-300/65"
        aria-hidden="true"
      />
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-cyan-300/15 bg-[linear-gradient(135deg,#12213A,#0C1629)] transition-colors hover:border-cyan-300/35">
      <div className="grid h-full md:grid-cols-[1fr_0.9fr]">
        <div className="relative z-10 flex flex-col p-7 sm:p-9">
          <div className="flex size-12 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/10 text-cyan-300">
            <ChessKnight size={25} />
          </div>

          <h3 className="font-editorial mt-7 text-4xl text-white">
            {project.name}
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <span key={technology} className="tech-chip">
                {technology}
              </span>
            ))}
          </div>

          <Link
            to={`/proyectos/${project.slug}`}
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-white md:mt-auto md:pt-8"
          >
            Explorar proyecto
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="min-h-[240px] md:min-h-[340px]">
          <ProjectVisual project={project} />
        </div>
      </div>
    </article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#101B31] transition-colors hover:border-cyan-300/30">
      <div className="h-[165px] overflow-hidden">
        <ProjectVisual project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-cyan-300">
            {project.category}
          </span>
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-300">
            {project.status}
          </span>
        </div>

        <h3 className="font-editorial mt-4 text-[29px] text-white">
          {project.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">
          {project.summary}
        </p>

        <Link
          to={`/proyectos/${project.slug}`}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white"
        >
          Ver detalle
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}

export function ProjectsPreview() {
  const featured = projects.find((project) => project.slug === "chess-study");
  const secondary = projects.filter(
    (project) =>
      project.featured && project.slug !== "chess-study",
  );

  return (
    <section
      id="proyectos"
      className="relative scroll-mt-28 border-t border-white/5 bg-[#081120] pt-12 pb-24"
    >
      <Container>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="section-eyebrow">
              PROYECTOS DESTACADOS
            </span>
            <h2 className="font-editorial mt-4 max-w-[740px] text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-white">
              Proyectos que resuelven problemas reales.
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

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.45fr_1fr]">
          {featured && <FeaturedCard project={featured} />}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {secondary.map((project) => (
              <CompactCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
