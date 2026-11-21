
import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  GraduationCap,
  MapPin,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Container } from "../components/ui/Container";
import {
  certifications,
  education,
  professionalExperience,
} from "../data/experience";

const cvUrl = "/cv/rafael-ancalipe.pdf";
const profileUrl = "/images/profile/rafael.webp";

export function AboutPage() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div className="min-h-screen bg-[#081120]">
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
        <div className="pointer-events-none absolute top-20 right-0 size-[520px] rounded-full bg-violet-600/10 blur-[110px]" />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-cyan-400" />
                <span className="section-eyebrow">
                  PERFIL PROFESIONAL
                </span>
              </div>

              <h1 className="font-editorial mt-7 text-[clamp(3.5rem,6vw,6rem)] leading-[1.02] tracking-[-0.04em] text-white">
                Hola, soy
                <br />
                <span className="gradient-text">
                  Rafael Ancalipe.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Ingeniero en Informática y Analista Programador,
                enfocado en desarrollo de software, automatización
                de procesos e integración de sistemas.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                Me interesa construir productos digitales que
                combinen ingeniería, experiencia de usuario y
                soluciones prácticas para problemas reales.
              </p>

              <div className="mt-7 flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={17} className="text-cyan-400" />
                  Santiago, Chile
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap
                    size={17}
                    className="text-cyan-400"
                  />
                  Duoc UC
                </span>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={cvUrl}
                  download="Rafael_Ancalipe_CV.pdf"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 text-sm font-bold text-[#061325] hover:brightness-110"
                >
                  <ArrowDownToLine size={18} />
                  Descargar CV
                </a>

                <a
                  href="https://www.linkedin.com/in/rafaelancalipe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:border-cyan-400/40"
                >
                  Ver LinkedIn
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[410px]">
              <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-cyan-500/15 via-transparent to-violet-600/20 blur-2xl" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/15 bg-[linear-gradient(145deg,#163452,#101B32_55%,#25194A)]">
                {!photoFailed ? (
                  <img
                    src={profileUrl}
                    alt="Fotografía profesional de Rafael Ancalipe"
                    onError={() => setPhotoFailed(true)}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-5">
                    <div className="flex size-28 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10">
                      <UserRound
                        size={57}
                        strokeWidth={1.2}
                        className="text-cyan-300"
                      />
                    </div>
                    <span className="font-editorial text-4xl text-white">
                      RAFAEL.DEV
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                      Full Stack Developer
                    </span>
                  </div>
                )}
              </div>

              <div className="absolute -right-3 bottom-8 rounded-xl border border-white/15 bg-[#101B30]/95 px-5 py-3 shadow-xl backdrop-blur-xl sm:-right-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  Ingeniería
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Software & Automatización
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-[#0B172A] py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="premium-card p-7">
              <p className="font-editorial text-5xl text-cyan-300">
                60–70 %
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Reducción del tiempo de reporting mediante
                automatización en Banco de Chile.
              </p>
            </div>

            <div className="premium-card p-7">
              <p className="font-editorial text-5xl text-violet-300">
                67 %
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Reducción del tiempo de procesamiento de pedidos
                mediante Python y Selenium en Walmart Chile.
              </p>
            </div>

            <div className="premium-card p-7">
              <p className="font-editorial text-5xl text-sky-300">
                940/990
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Puntuación TOEIC de inglés avanzado.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <span className="section-eyebrow">
            EXPERIENCIA PROFESIONAL
          </span>

          <h2 className="font-editorial mt-5 text-4xl text-white sm:text-5xl">
            Mi <span className="gradient-text">trayectoria.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Experiencia en desarrollo backend, automatización,
            seguridad de la información y operaciones tecnológicas.
          </p>

          <div className="relative mt-12 space-y-5">
            {professionalExperience.map((experience) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="premium-card p-7 sm:p-9"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <BriefcaseBusiness size={21} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {experience.company}
                      </h3>
                      <p className="mt-1 text-sm text-cyan-300">
                        {experience.role}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-6 leading-7 text-slate-300">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                    >
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span key={technology} className="tech-chip">
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-[#0B172A] py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 text-cyan-300">
                <GraduationCap size={24} />
                <span className="section-eyebrow">FORMACIÓN</span>
              </div>

              <h2 className="font-editorial mt-5 text-4xl text-white">
                Formación académica.
              </h2>

              <div className="mt-8 space-y-4">
                {education.map((item) => (
                  <div
                    key={item.title}
                    className="premium-card p-6"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                      {item.institution}
                    </p>
                    <p className="mt-2 text-xs text-cyan-300">
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 text-cyan-300">
                <ShieldCheck size={24} />
                <span className="section-eyebrow">
                  APRENDIZAJE CONTINUO
                </span>
              </div>

              <h2 className="font-editorial mt-5 text-4xl text-white">
                Certificaciones.
              </h2>

              <div className="premium-card mt-8 p-7">
                <ul className="space-y-5">
                  {certifications.map((certificate) => (
                    <li
                      key={certificate}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                    >
                      <ShieldCheck
                        size={18}
                        className="mt-1 shrink-0 text-cyan-400"
                      />
                      {certificate}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="curriculum"
        className="scroll-mt-28 py-24"
      >
        <Container>
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="section-eyebrow">
                CURRÍCULUM VITAE
              </span>

              <h2 className="font-editorial mt-5 text-4xl text-white sm:text-5xl">
                Mi CV <span className="gradient-text">profesional.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                Puedes revisar mi currículum directamente aquí
                o descargar una copia en PDF.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-cyan-400/40"
              >
                <ExternalLink size={17} />
                Abrir PDF
              </a>

              <a
                href={cvUrl}
                download="Rafael_Ancalipe_CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-[#061325] hover:bg-cyan-300"
              >
                <ArrowDownToLine size={17} />
                Descargar CV
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/15 bg-[#101B31]">
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <FileText size={19} className="text-cyan-300" />
              <span className="text-sm font-medium text-slate-200">
                Rafael_Ancalipe_CV.pdf
              </span>
            </div>

            <object
              data={`${cvUrl}#toolbar=1&navpanes=0`}
              type="application/pdf"
              aria-label="Visualizador del currículum de Rafael Ancalipe"
              className="h-[680px] w-full bg-white sm:h-[850px]"
            >
              <div className="p-8 text-center">
                <p className="text-slate-300">
                  El navegador no admite la visualización integrada
                  de este PDF.
                </p>
                <a
                  href={cvUrl}
                  className="mt-4 inline-flex items-center gap-2 text-cyan-300"
                >
                  <FileText size={17} />
                  Abrir currículum
                </a>
              </div>
            </object>
          </div>
        </Container>
      </section>
    </div>
  );
}
