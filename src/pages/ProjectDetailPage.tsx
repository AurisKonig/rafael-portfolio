import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code2,
  Layers3,
  X,
  ZoomIn,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { projects, type ProjectImage } from "../data/projects";

function DetailSection({ eyebrow, title, children }: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-20 border-t border-white/10 pt-12">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="font-editorial mt-4 text-4xl leading-tight text-white sm:text-5xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function GalleryImage({ image, onOpen }: {
  image: ProjectImage;
  onOpen: () => void;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ampliar ${image.caption}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101B31] text-left transition-colors hover:border-cyan-300/40 focus-visible:outline-2 focus-visible:outline-cyan-400"
    >
      <div className="relative aspect-video overflow-hidden bg-[#091426]">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none"
        />
        <span className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-lg border border-white/15 bg-[#081120]/90 text-white">
          <ZoomIn size={18} aria-hidden="true" />
        </span>
      </div>
      <p className="p-4 text-sm font-medium text-slate-200">{image.caption}</p>
    </button>
  );
}

function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  const move = (direction: number) => {
    setActive((current) => current === null ? null : (current + direction + images.length) % images.length);
  };
  const current = active === null ? null : images[active];

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {images.map((image, index) => (
          <GalleryImage key={image.src} image={image} onOpen={() => setActive(index)} />
        ))}
      </div>
      <dialog
        ref={dialogRef}
        aria-label="Galería del proyecto"
        onClose={() => setActive(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}
        className="fixed inset-0 m-auto max-h-[95vh] w-[94vw] max-w-6xl overflow-auto rounded-2xl border border-white/15 bg-[#081120] p-4 text-white backdrop:bg-black/90 sm:p-6"
      >
        {current && (
          <>
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold">{current.caption}</p>
              <button
                type="button"
                autoFocus
                aria-label="Cerrar galería"
                onClick={() => setActive(null)}
                className="flex size-10 items-center justify-center rounded-xl border border-white/10 hover:bg-white/10"
              >
                <X size={22} />
              </button>
            </div>
            <img src={current.src} alt={current.alt} className="mx-auto max-h-[72vh] w-full object-contain" />
            <div className="mt-5 flex items-center justify-between">
              <button type="button" aria-label="Imagen anterior" onClick={() => move(-1)} className="flex size-11 items-center justify-center rounded-xl border border-white/10 hover:bg-white/10">
                <ChevronLeft size={23} />
              </button>
              <span className="text-sm text-slate-400">{(active ?? 0) + 1} / {images.length}</span>
              <button type="button" aria-label="Imagen siguiente" onClick={() => move(1)} className="flex size-11 items-center justify-center rounded-xl border border-white/10 hover:bg-white/10">
                <ChevronRight size={23} />
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}

function ProjectCover({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <div className="mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-[#0D192D]">
      <img src={src} alt={`Portada de ${name}`} decoding="async" className="max-h-[680px] w-full object-contain" onError={() => setFailed(true)} />
    </div>
  );
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen pt-40 pb-24">
        <Container>
          <h1 className="font-editorial text-4xl text-white">Proyecto no encontrado</h1>
          <Link to="/proyectos" className="mt-6 inline-flex items-center gap-2 text-cyan-300">
            <ArrowLeft size={18} /> Volver a proyectos
          </Link>
        </Container>
      </section>
    );
  }

  const totalTests = project.tests?.reduce((total, test) => total + test.passed, 0) ?? 0;
  const maxTests = Math.max(1, ...(project.tests?.map((test) => test.passed) ?? []));
  const caseStudy = project.caseStudy;

  return (
    <div key={project.slug} className="min-h-screen bg-[#081120] pt-36 pb-24 sm:pt-44">
      <Container>
        <Link to="/proyectos" className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
          <ArrowLeft size={18} /> Todos los proyectos
        </Link>
        <div className="mt-10 max-w-5xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="section-eyebrow">{project.category}</span>
            <span className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${project.status === "Finalizado" ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300" : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"}`}>
              {project.status}
            </span>
          </div>
          <h1 className="font-editorial mt-6 text-[clamp(3.5rem,7vw,7rem)] leading-none tracking-tight text-white">{project.name}</h1>
          {project.subtitle && <p className="mt-5 text-xl font-medium text-cyan-300">{project.subtitle}</p>}
          {project.role && <p className="mt-5 text-sm font-semibold text-violet-300">{project.role}</p>}
          <p className="mt-7 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <span key={technology} className="tech-chip">{technology}</span>)}
          </div>
          {(project.repositoryUrl || project.liveUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.repositoryUrl && (
                <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="secondary-button">
                  <FaGithub size={18} /> Repositorio <ArrowUpRight size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="primary-button">
                  Visitar proyecto <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          )}
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="premium-card p-6 sm:p-8">
                <p className="font-editorial text-4xl text-cyan-300 sm:text-5xl">{metric.value}</p>
                <p className="mt-3 text-sm text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
        {project.imageUrl && <ProjectCover src={project.imageUrl} name={project.name} />}

        {caseStudy && (
          <DetailSection eyebrow="CASO DE ESTUDIO" title="Del problema a la solución.">
            <p className="mb-8 max-w-4xl leading-8 text-slate-300">{caseStudy.context}</p>
            <div className="grid gap-5 md:grid-cols-2">
              {[{ title: "Problemática", text: caseStudy.problem }, { title: "Propuesta de solución", text: caseStudy.solution }].map((item) => (
                <article key={item.title} className="premium-card p-7">
                  <h3 className="font-editorial text-2xl text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
            {caseStudy.objectives.length > 0 && (
              <article className="premium-card mt-5 p-7">
                <h3 className="font-editorial text-2xl text-white">Objetivos del proyecto</h3>
                <ul className="mt-5 grid gap-4 md:grid-cols-2">
                  {caseStudy.objectives.map((objective) => (
                    <li key={objective} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                      {objective}
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </DetailSection>
        )}

        {project.features.length > 0 && (
          <DetailSection eyebrow="ALCANCE FUNCIONAL" title="Funcionalidades.">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#101B31] p-5">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-200">{feature}</p>
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        {project.architecture && project.architecture.length > 0 && (
          <DetailSection eyebrow="SOFTWARE ARCHITECTURE" title="Arquitectura tecnológica.">
            <p className="mb-8 max-w-3xl leading-7 text-slate-400">Organización conceptual de las capas y tecnologías que componen la solución.</p>
            <div className="grid gap-5 md:grid-cols-2">
              {project.architecture.map((layer) => (
                <article key={layer.layer} className="premium-card p-7">
                  <div className="flex items-center gap-3">
                    <Layers3 size={23} className="shrink-0 text-cyan-300" />
                    <h3 className="font-editorial text-2xl text-white">{layer.layer}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{layer.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {layer.technologies.map((technology) => <span key={technology} className="tech-chip">{technology}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </DetailSection>
        )}

        {caseStudy?.methodology && (
          <DetailSection eyebrow="METODOLOGÍA DE DESARROLLO" title="Planificación y trabajo colaborativo.">
            <article className="premium-card p-7 sm:p-9">
              <p className="max-w-4xl leading-8 text-slate-300">{caseStudy.methodology}</p>
            </article>
          </DetailSection>
        )}

        {project.tests && project.tests.length > 0 && (
          <DetailSection eyebrow="SOFTWARE QUALITY" title="Ingeniería respaldada por pruebas.">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="premium-card flex flex-col justify-center p-8 sm:p-10">
                <span className="font-editorial text-7xl text-cyan-300">{totalTests}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">Pruebas automatizadas aprobadas</h3>
                <p className="mt-5 text-sm leading-7 text-slate-400">Resultados documentados de las suites de pruebas de los diferentes componentes del sistema. No representan un porcentaje de cobertura ni una certificación de seguridad.</p>
              </div>
              <div className="premium-card space-y-6 p-7 sm:p-9">
                {project.tests.map((test) => (
                  <div key={test.component}>
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="text-sm text-slate-300">{test.component}</span>
                      <span className="text-sm font-semibold tabular-nums text-white">{test.passed}</span>
                    </div>
                    <div role="meter" aria-label={`Pruebas de ${test.component}`} aria-valuemin={0} aria-valuemax={maxTests} aria-valuenow={test.passed} className="h-2.5 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${(test.passed / maxTests) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DetailSection>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <DetailSection eyebrow="PRODUCT SHOWCASE" title={caseStudy ? "Evidencias gráficas del desarrollo." : "El producto en funcionamiento."}>
            <ProjectGallery images={project.gallery} />
          </DetailSection>
        )}

        {project.validations && project.validations.length > 0 && (
          <DetailSection eyebrow={caseStudy ? "EVIDENCIA DOCUMENTAL" : "VALIDACIÓN DEL PRODUCTO"} title={caseStudy ? "Alcance respaldado por evidencias." : "Resultados verificados."}>
            <div className="grid gap-4 md:grid-cols-2">
              {project.validations.map((validation) => (
                <div key={validation} className={caseStudy ? "flex items-start gap-3 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5" : "flex items-start gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-5"}>
                  {caseStudy ? <Layers3 size={21} className="shrink-0 text-cyan-300" /> : <CheckCircle2 size={21} className="shrink-0 text-emerald-300" />}
                  <p className="text-sm leading-6 text-slate-200">{validation}</p>
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        {caseStudy?.quality && caseStudy.quality.length > 0 && (
          <DetailSection eyebrow="CALIDAD Y VALIDACIÓN" title="Proyecto finalizado.">
            <div className="grid gap-4 md:grid-cols-2">
              {caseStudy.quality.map((item) => (
                <article key={item} className="premium-card flex items-start gap-3 p-6">
                  <CheckCircle2 size={21} className="mt-0.5 shrink-0 text-cyan-300" aria-hidden="true" />
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              La integración del LLM y las actividades de validación adicionales fueron confirmadas por el autor. Los informes y resultados cuantitativos de esas actividades no forman parte de la documentación pública compartida.
            </p>
          </DetailSection>
        )}

        {project.competencies && project.competencies.length > 0 && (
          <DetailSection eyebrow="ENGINEERING SKILLS" title="Competencias demostradas.">
            <div className="flex flex-wrap gap-3">
              {project.competencies.map((competency) => (
                <span key={competency} className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/15 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">
                  <Code2 size={17} className="text-cyan-300" /> {competency}
                </span>
              ))}
            </div>
          </DetailSection>
        )}

        {project.nextSteps && project.nextSteps.length > 0 && (
          <DetailSection eyebrow="PRODUCT ROADMAP" title="Evolución del producto.">
            <p className="mb-7 max-w-3xl leading-7 text-slate-400">
              {caseStudy ? "Las siguientes etapas son propuestas de validación y evolución del MVP; no representan funcionalidades ya entregadas." : "El alcance desarrollado está finalizado. Las siguientes etapas corresponden a su integración, validación externa y evolución comercial."}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {project.nextSteps.map((step) => (
                <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#101B31] p-5">
                  <Clock size={20} className="shrink-0 text-violet-300" />
                  <p className="text-sm leading-6 text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        <section className="mt-20 rounded-[28px] border border-cyan-300/15 bg-[linear-gradient(135deg,#132744,#0B1529)] p-8 sm:p-12">
          <span className="section-eyebrow">FULL STACK DEVELOPMENT</span>
          <h2 className="font-editorial mt-5 text-4xl text-white">Construyendo soluciones reales.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">Explora otros proyectos y conoce mi enfoque de desarrollo, arquitectura y resolución de problemas mediante software.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/proyectos" className="primary-button">Más proyectos <ArrowUpRight size={17} /></Link>
            <Link to="/#contacto" className="secondary-button">Contacto <ArrowUpRight size={17} /></Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
