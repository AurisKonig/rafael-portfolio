
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Globe2,
  Layers3,
  Mail,
  Settings2,
  Workflow,
} from "lucide-react";
import { Container } from "../components/ui/Container";
import { services } from "../data/services";

const icons = [
  Globe2,
  Layers3,
  Code2,
  Workflow,
  Database,
  Settings2,
];

export function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#081120]">
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
        <div className="pointer-events-none absolute -top-32 right-0 size-[650px] rounded-full bg-violet-600/10 blur-[130px]" />

        <Container className="relative">
          <div className="max-w-[850px]">
            <div className="flex items-center gap-4">
              <span className="h-px w-9 bg-cyan-400" />
              <span className="section-eyebrow">
                SERVICIOS DE DESARROLLO
              </span>
            </div>

            <h1 className="font-editorial mt-7 text-[clamp(3.5rem,6vw,6rem)] leading-[1.04] tracking-[-0.04em] text-white">
              Soluciones digitales
              <br />
              <span className="gradient-text">
                a tu medida.
              </span>
            </h1>

            <p className="mt-7 max-w-[680px] text-base leading-8 text-slate-300 sm:text-lg">
              Desarrollo sitios web, aplicaciones, integraciones
              y automatizaciones para transformar ideas y
              necesidades de negocio en soluciones tecnológicas.
            </p>

            <a
              href="#contacto-servicios"
              className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 text-sm font-bold text-[#061325] transition hover:brightness-110"
            >
              Conversemos sobre tu proyecto
              <ArrowRight size={18} />
            </a>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="mb-10">
            <span className="section-eyebrow">
              QUÉ PUEDO DESARROLLAR
            </span>
            <h2 className="font-editorial mt-4 text-4xl text-white sm:text-5xl">
              Servicios especializados.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index];

              return (
                <article
                  key={service.id}
                  className="group flex h-full flex-col rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,#13223A,#0D1729)] p-7 transition-colors hover:border-cyan-300/35 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
                      <Icon size={27} strokeWidth={1.7} />
                    </div>

                    <span className="font-editorial text-3xl text-slate-600">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-editorial mt-8 text-[29px] leading-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {service.description}
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                      Soluciones
                    </p>

                    <ul className="mt-4 space-y-3">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-cyan-400"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="tech-chip"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`mailto:Raphaelauris@gmail.com?subject=${encodeURIComponent(`Consulta: ${service.title}`)}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-white"
                  >
                    Consultar servicio
                    <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="contacto-servicios"
        className="scroll-mt-28 pb-24"
      >
        <Container>
          <div className="relative overflow-hidden rounded-[28px] border border-cyan-300/15 bg-[radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.18),transparent_55%),linear-gradient(135deg,#132744,#0B1529)] px-7 py-16 sm:px-12">
            <div className="relative max-w-2xl">
              <span className="section-eyebrow">
                TU PRÓXIMO PROYECTO
              </span>

              <h2 className="font-editorial mt-5 text-4xl leading-tight text-white sm:text-5xl">
                Construyamos algo
                <span className="gradient-text">
                  {" "}que funcione.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Cuéntame qué necesitas desarrollar. Podemos
                conversar sobre los objetivos, el alcance
                técnico y las alternativas para implementarlo.
              </p>

              <a
                href="mailto:Raphaelauris@gmail.com?subject=Consulta%20de%20desarrollo%20de%20software"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-xl bg-cyan-400 px-6 text-sm font-bold text-[#061325] hover:bg-cyan-300"
              >
                <Mail size={18} />
                Solicitar información
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
