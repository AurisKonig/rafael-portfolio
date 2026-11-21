
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, FolderCode } from "lucide-react";
import { Container } from "../components/ui/Container";
import {
  projectCategories,
  projects,
} from "../data/projects";

type Category = (typeof projectCategories)[number];

export function ProjectsPage() {
  const [category, setCategory] = useState<Category>("Todos");

  const filtered = projects.filter(
    (project) =>
      category === "Todos" || project.category === category,
  );

  return (
    <section className="min-h-screen bg-[#081120] pt-40 pb-24">
      <Container>
        <span className="section-eyebrow">PORTAFOLIO</span>
        <h1 className="font-editorial mt-5 text-5xl text-white sm:text-7xl">
          Mis <span className="gradient-text">proyectos.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Una selección de aplicaciones y soluciones de software,
          organizadas por especialidad.
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

        {filtered.length === 0 ? (
          <div className="premium-card mt-10 p-12 text-center">
            <FolderCode size={32} className="mx-auto text-cyan-400" />
            <h2 className="mt-4 text-xl font-semibold text-white">
              Próximamente
            </h2>
            <p className="mt-3 text-slate-400">
              Aún no hay proyectos publicados en esta categoría.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {filtered.map((project) => (
              <article key={project.slug} className="premium-card p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  {project.category}
                </span>
                <h2 className="font-editorial mt-5 text-3xl text-white">
                  {project.name}
                </h2>
                <p className="mt-4 leading-7 text-slate-300">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="tech-chip">
                      {technology}
                    </span>
                  ))}
                  <span className="tech-chip">{project.status}</span>
                </div>
                <Link
                  to={`/proyectos/${project.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-white"
                >
                  Ver detalles
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
