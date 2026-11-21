import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { projects } from "../data/projects";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen pt-40 pb-24">
        <Container>
          <h1 className="text-4xl font-semibold text-white">
            Proyecto no encontrado
          </h1>
          <Link
            to="/proyectos"
            className="mt-6 inline-flex items-center gap-2 text-cyan-400"
          >
            <ArrowLeft size={18} />
            Volver a proyectos
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#081120] pt-36 pb-24">
      <Container>
        <Link
          to="/proyectos"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
        >
          <ArrowLeft size={17} />
          Todos los proyectos
        </Link>

        <div className="mt-12 max-w-4xl">
          <span className="section-eyebrow">{project.category}</span>
          <h1 className="font-editorial mt-5 text-5xl text-white sm:text-7xl">
            {project.name}
          </h1>
          <p className="mt-7 text-lg leading-8 text-slate-300">
            {project.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="tech-chip">{project.status}</span>
            {project.technologies.map((technology) => (
              <span key={technology} className="tech-chip">
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <FaGithub size={17} />
                Repositorio
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Visitar proyecto
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>

        {project.features.length > 0 && (
          <div className="premium-card mt-16 max-w-4xl p-8 sm:p-10">
            <h2 className="font-editorial text-3xl text-white">
              Funcionalidades
            </h2>
            <ul className="mt-6 grid gap-4 text-slate-300 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.status === "En desarrollo" && (
          <p className="mt-12 max-w-3xl text-slate-400">
            Este proyecto está en desarrollo. Se incorporarán capturas,
            funcionalidades y documentación a medida que estén disponibles.
          </p>
        )}
      </Container>
    </section>
  );
}
