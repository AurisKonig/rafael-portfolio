
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Mail,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { HeroSection } from "../features/hero/HeroSection";
import { ProjectsPreview } from "../features/projects/ProjectsPreview";

const professionalFocus = [
  {
    title: "Full Stack Development",
    description: "Aplicaciones web y móviles.",
    icon: Layers3,
    color: "text-cyan-300",
    background: "bg-cyan-400/10",
    to: "/proyectos",
  },
  {
    title: "LLM-Assisted Development",
    description: "Ingeniería de software asistida por modelos de lenguaje.",
    icon: BrainCircuit,
    color: "text-violet-300",
    background: "bg-violet-400/10",
    to: "/tecnologias",
  },
  {
    title: "Software Automation",
    description: "Automatización y optimización de procesos.",
    icon: Workflow,
    color: "text-sky-300",
    background: "bg-sky-400/10",
    to: "/servicios",
  },
];

const services = [
  {
    title: "Desarrollo Full Stack",
    description:
      "Aplicaciones web, plataformas y sistemas adaptados a necesidades reales.",
    icon: Code2,
  },
  {
    title: "Backend e integraciones",
    description:
      "APIs REST, autenticación, bases de datos y conexión de servicios.",
    icon: Database,
  },
  {
    title: "Automatización",
    description:
      "Optimización de procesos y flujos de trabajo mediante Python.",
    icon: Workflow,
  },
];

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsPreview />

      <section className="border-y border-white/5 bg-[#091426] py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-9 bg-cyan-400" />
              <span className="section-eyebrow">
                ENFOQUE PROFESIONAL
              </span>
            </div>

            <h2 className="font-editorial mt-5 text-4xl leading-tight text-white sm:text-5xl">
              Ingeniería, tecnología{" "}
              <span className="gradient-text">
                e innovación.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Desarrollo soluciones digitales combinando software,
              inteligencia artificial y automatización.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {professionalFocus.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.to}
                  className="group relative flex h-full flex-col rounded-[20px] border border-white/10 bg-[#111E33] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[#15243B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex size-12 items-center justify-center rounded-xl ${item.background} ${item.color}`}
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="text-slate-500 transition-colors group-hover:text-cyan-300"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
            <Link
              to="/sobre-mi"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-white"
            >
              Conocer mi perfil profesional
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>

            <Link
              to="/tecnologias"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
            >
              Explorar stack tecnológico
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#081120] py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="section-eyebrow">
                SERVICIOS
              </span>

              <h2 className="font-editorial mt-5 text-4xl text-white sm:text-5xl">
                De la idea al{" "}
                <span className="gradient-text">
                  producto.
                </span>
              </h2>
            </div>

            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white"
            >
              Todos los servicios
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="premium-card p-7"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={23} aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="contacto"
        className="scroll-mt-28 bg-[#081120] pb-24"
      >
        <Container>
          <div className="relative overflow-hidden rounded-[28px] border border-cyan-300/15 bg-[radial-gradient(circle_at_80%_30%,rgba(71,48,153,0.2),transparent_55%),linear-gradient(135deg,#102441,#0B1529)] px-6 py-16 text-center sm:px-12">
            <span className="section-eyebrow">
              HABLEMOS
            </span>

            <h2 className="font-editorial mt-5 text-4xl text-white sm:text-6xl">
              ¿Tienes un proyecto en mente?
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
              Conversemos sobre tu idea, una solución de software
              o una oportunidad de colaboración profesional.
            </p>

            <a
              href="mailto:Raphaelauris@gmail.com"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-7 text-sm font-bold text-[#061325] hover:brightness-110"
            >
              <Mail size={18} aria-hidden="true" />
              Contactarme
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
