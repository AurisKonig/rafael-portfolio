
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Mail,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { HeroSection } from "../features/hero/HeroSection";
import { ProjectsPreview } from "../features/projects/ProjectsPreview";

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

      <section className="border-t border-white/5 bg-[#091426] py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <span className="section-eyebrow">
                EXPERIENCIA PROFESIONAL
              </span>
              <h2 className="font-editorial mt-5 text-4xl leading-tight text-white sm:text-5xl">
                Ingeniería con
                <br />
                <span className="gradient-text">
                  impacto real.
                </span>
              </h2>
              <p className="mt-6 max-w-lg leading-8 text-slate-300">
                He trabajado en desarrollo de software,
                automatización y operaciones tecnológicas,
                participando en proyectos y equipos de
                organizaciones como Walmart, Banco de Chile y PwC.
              </p>

              <Link
                to="/sobre-mi"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white"
              >
                Conocer mi trayectoria
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="premium-card p-7">
                <span className="font-editorial text-5xl text-cyan-300">
                  60–70 %
                </span>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Reducción del tiempo de reporting mediante
                  automatización con Python en Banco de Chile.
                </p>
              </div>

              <div className="premium-card p-7">
                <span className="font-editorial text-5xl text-violet-300">
                  67 %
                </span>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Reducción del tiempo de procesamiento de pedidos
                  mediante automatización en Walmart Chile.
                </p>
              </div>
            </div>
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
                    <Icon size={23} />
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
              <Mail size={18} />
              Contactarme
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
