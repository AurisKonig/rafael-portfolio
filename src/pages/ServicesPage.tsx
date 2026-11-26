
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Copy,
  Database,
  Globe2,
  Layers3,
  Mail,
  Settings2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "../components/ui/Container";
import { services } from "../data/services";

const contactEmail = "Raphaelauris@gmail.com";

const serviceIcons: Record<string, LucideIcon> = {
  "desarrollo-web": Globe2,
  "full-stack": Layers3,
  backend: Code2,
  automatizacion: Workflow,
  "bases-de-datos": Database,
  mejoras: Settings2,
};

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  const contactRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const currentService = services.find(
    (service) => service.id === selectedService,
  );

  const subject = currentService
    ? `Consulta de servicio: ${currentService.title}`
    : "Consulta de desarrollo de software";

  const message = [
    "Hola Rafael,",
    "",
    currentService
      ? `Me interesa conocer más sobre tu servicio de ${currentService.title}.`
      : "Me interesa conversar sobre un proyecto de desarrollo de software.",
    "",
    "Descripción del proyecto:",
    "",
    "Saludos.",
  ].join("\n");

  const gmailParams = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: contactEmail,
    su: subject,
    body: message,
  });

  const gmailUrl = `https://mail.google.com/mail/?${gmailParams.toString()}`;

  const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  function goToContact(serviceId = "") {
    setSelectedService(serviceId);
    setCopyStatus("");

    headingRef.current?.focus({
      preventScroll: true,
    });

    contactRef.current?.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyStatus("Correo copiado correctamente.");
    } catch {
      setCopyStatus(
        "No se pudo copiar automáticamente. Puedes seleccionar y copiar el correo mostrado.",
      );
    }
  }

  return (
    <div className="min-h-screen bg-[#081120]">
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
              Desarrollo sitios web, aplicaciones web y móviles,
              integraciones y automatizaciones para transformar
              ideas en soluciones tecnológicas funcionales.
            </p>

            <button
              type="button"
              onClick={() => goToContact()}
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 text-sm font-bold text-[#061325] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              Conversemos sobre tu proyecto
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
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
            {services.map((service) => {
              const Icon =
                serviceIcons[service.id] ?? Code2;

              return (
                <article
                  key={service.id}
                  className="group flex h-full flex-col rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,#13223A,#0D1729)] p-7 transition-colors hover:border-cyan-300/35 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
                      <Icon
                        size={27}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="font-editorial text-3xl text-slate-500">
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
                          className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                        >
                          <Check
                            size={16}
                            aria-hidden="true"
                            className="mt-1 shrink-0 text-cyan-400"
                          />

                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      Tecnologías
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="tech-chip"
                          >
                            {technology}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => goToContact(service.id)}
                    aria-label={`Consultar servicio: ${service.title}`}
                    className="mt-7 inline-flex w-fit items-center gap-2 text-left text-sm font-semibold text-cyan-300 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                  >
                    Consultar servicio
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                    />
                  </button>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-[24px] border border-violet-400/20 bg-[linear-gradient(135deg,#171D36,#10192D)] p-6 sm:p-8">
            <div className="flex flex-col items-start gap-5 sm:flex-row">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/10 text-violet-300">
                <BrainCircuit
                  size={28}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
                  MODERN SOFTWARE ENGINEERING
                </span>

                <h3 className="font-editorial mt-3 text-3xl text-white">
                  LLM-Assisted Development
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                  Desarrollo de software asistido por modelos de lenguaje,
                  optimizando los procesos de programación, análisis,
                  documentación y revisión de código.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "GPT",
                    "Claude",
                    "Gemini",
                    "Prompt Engineering",
                    "Context Engineering",
                    "AI-Assisted Coding",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-violet-400/15 bg-violet-400/[0.06] px-3 py-1.5 text-xs font-medium text-violet-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        ref={contactRef}
        id="contacto-servicios"
        aria-labelledby="contacto-servicios-title"
        className="scroll-mt-28 pb-24"
      >
        <Container>
          <div className="relative overflow-hidden rounded-[28px] border border-cyan-300/15 bg-[radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.18),transparent_55%),linear-gradient(135deg,#132744,#0B1529)] px-6 py-12 sm:px-12 sm:py-16">
            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <span className="section-eyebrow">
                  TU PRÓXIMO PROYECTO
                </span>

                <h2
                  ref={headingRef}
                  id="contacto-servicios-title"
                  tabIndex={-1}
                  className="font-editorial mt-5 text-4xl leading-tight text-white outline-none sm:text-5xl"
                >
                  Construyamos algo{" "}
                  <span className="gradient-text">
                    que funcione.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-slate-300">
                  Cuéntame qué necesitas desarrollar.
                  Conversemos sobre tus objetivos y las
                  alternativas tecnológicas para convertir
                  tu idea en una solución funcional.
                </p>

                <div className="mt-7 flex items-center gap-3 text-sm text-slate-300">
                  <Mail
                    size={19}
                    className="shrink-0 text-cyan-300"
                    aria-hidden="true"
                  />

                  <span className="min-w-0 break-all select-all">
                    {contactEmail}
                  </span>
                </div>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-[#091426]/80 p-6 sm:p-8">
                <h3 className="font-editorial text-2xl text-white">
                  Hablemos de tu proyecto
                </h3>

                <div className="mt-6">
                  <label
                    htmlFor="service-interest"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Servicio de interés
                  </label>

                  <select
                    id="service-interest"
                    value={selectedService}
                    onChange={(event) => {
                      setSelectedService(event.target.value);
                      setCopyStatus("");
                    }}
                    className="mt-3 min-h-12 w-full cursor-pointer rounded-xl border border-white/15 bg-[#111E33] px-4 py-3 text-sm text-white outline-none transition-colors [color-scheme:dark] focus:border-cyan-400"
                  >
                    <option value="">
                      Consulta general
                    </option>

                    {services.map((service) => (
                      <option
                        key={service.id}
                        value={service.id}
                      >
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <p className="mt-4 text-xs leading-6 text-slate-400">
                  Se abrirá un correo con el asunto y un
                  mensaje inicial preparados según el
                  servicio seleccionado.
                </p>

                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-3 text-center text-sm font-bold text-[#061325] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                  <Mail
                    size={18}
                    className="shrink-0"
                    aria-hidden="true"
                  />

                  Solicitar información por Gmail

                  <ArrowUpRight
                    size={16}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                </a>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a
                    href={mailtoUrl}
                    className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-300/30 hover:text-white"
                  >
                    <Mail
                      size={15}
                      aria-hidden="true"
                    />

                    Otra aplicación de correo
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-300/30 hover:text-white"
                  >
                    <Copy
                      size={15}
                      aria-hidden="true"
                    />

                    Copiar correo
                  </button>
                </div>

                {copyStatus && (
                  <p
                    role="status"
                    className="mt-4 text-xs leading-5 text-cyan-300"
                  >
                    {copyStatus}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
