
import type { ReactNode } from "react";
import {
  Activity,
  ArrowUpRight,
  Bot,
  Braces,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  FileSpreadsheet,
  GitBranch,
  Globe2,
  Kanban,
  KeyRound,
  Languages,
  Layers3,
  Lightbulb,
  LockKeyhole,
  Monitor,
  Network,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import {
  SiCloudflare,
  SiCss,
  SiDocker,
  SiExpo,
  SiFastify,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPhp,
  SiPnpm,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiSelenium,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";

interface Technology {
  name: string;
  icon: ReactNode;
  color: string;
  detail?: string;
}

interface TechnologyGroup {
  title: string;
  description: string;
  icon: ReactNode;
  technologies: Technology[];
}

function tech(
  name: string,
  icon: ReactNode,
  color: string,
  detail?: string,
): Technology {
  return {
    name,
    icon,
    color,
    detail,
  };
}

const groups: TechnologyGroup[] = [
  {
    title: "Frontend",
    description:
      "Desarrollo de interfaces modernas, accesibles y adaptables a diferentes dispositivos.",
    icon: <Layers3 size={24} />,
    technologies: [
      tech("React", <SiReact />, "#61DAFB"),
      tech("Next.js", <SiNextdotjs />, "#FFFFFF"),
      tech("JavaScript", <SiJavascript />, "#F7DF1E"),
      tech("TypeScript", <SiTypescript />, "#60A5FA"),
      tech("HTML5", <SiHtml5 />, "#E34F26"),
      tech("CSS3", <SiCss />, "#60A5FA"),
      tech("Tailwind CSS", <SiTailwindcss />, "#38BDF8"),
    ],
  },
  {
    title: "Desarrollo multiplataforma",
    description:
      "Desarrollo de aplicaciones móviles y distribución de software para diferentes entornos.",
    icon: <Smartphone size={24} />,
    technologies: [
      tech("React Native", <SiReact />, "#61DAFB"),
      tech("Expo", <SiExpo />, "#FFFFFF"),
      tech(
        "Windows x64",
        <Monitor />,
        "#60A5FA",
        "Distribución de software",
      ),
    ],
  },
  {
    title: "Backend y programación",
    description:
      "Lenguajes, entornos de ejecución y frameworks para implementar servicios y lógica de negocio.",
    icon: <Code2 size={24} />,
    technologies: [
      tech("Python", <SiPython />, "#FFD43B"),
      tech("Node.js", <SiNodedotjs />, "#70B85B"),
      tech("Fastify", <SiFastify />, "#FFFFFF"),
      tech("Java", <Code2 />, "#F89820"),
      tech("PHP", <SiPhp />, "#A5A6D9"),
      tech("Laravel", <SiLaravel />, "#FF554B"),
      tech("Solidity", <Braces />, "#A5B4FC"),
    ],
  },
  {
    title: "APIs, comunicación y validación",
    description:
      "Integración de sistemas, comunicación en tiempo real y validación estructurada de información.",
    icon: <Network size={24} />,
    technologies: [
      tech(
        "APIs REST",
        <Network />,
        "#67E8F9",
      ),
      tech(
        "WebSocket",
        <Workflow />,
        "#A78BFA",
        "Tiempo real",
      ),
      tech(
        "Zod",
        <SiZod />,
        "#60A5FA",
        "Validación de datos",
      ),
    ],
  },
  {
    title: "Bases de datos y ORM",
    description:
      "Modelado, gestión, consulta y persistencia de información en aplicaciones y sistemas.",
    icon: <Database size={24} />,
    technologies: [
      tech("PostgreSQL", <SiPostgresql />, "#79B4D9"),
      tech("MySQL", <SiMysql />, "#70B8E2"),
      tech("SQLite", <SiSqlite />, "#67B9E8"),
      tech("Cloud Firestore", <SiFirebase />, "#FFCA28"),
      tech("Prisma ORM", <SiPrisma />, "#A5B4FC"),
      tech("SQL", <Database />, "#A5B4FC"),
      tech(
        "Oracle SQL Developer",
        <Database />,
        "#F87171",
      ),
      tech("DBeaver", <Database />, "#C4A484"),
    ],
  },
  {
    title: "Seguridad de software",
    description:
      "Autenticación, autorización, protección de credenciales y gestión de accesos.",
    icon: <ShieldCheck size={24} />,
    technologies: [
      tech(
        "JWT",
        <KeyRound />,
        "#F472B6",
        "Tokens",
      ),
      tech(
        "Argon2id",
        <LockKeyhole />,
        "#34D399",
        "Hashing de contraseñas",
      ),
      tech(
        "RBAC",
        <ShieldCheck />,
        "#67E8F9",
        "Control de acceso",
      ),
      tech(
        "LDAP",
        <Network />,
        "#A78BFA",
        "Servicios de directorio",
      ),
    ],
  },
  {
    title: "Herramientas y arquitectura",
    description:
      "Control de versiones, gestión de dependencias, pruebas y organización de proyectos de software.",
    icon: <GitBranch size={24} />,
    technologies: [
      tech("Git", <SiGit />, "#F05032"),
      tech("GitHub", <SiGithub />, "#FFFFFF"),
      tech("Docker", <SiDocker />, "#2496ED"),
      tech("Postman", <SiPostman />, "#FF6C37"),
      tech("pnpm", <SiPnpm />, "#F9AD00"),
      tech(
        "Monorepo",
        <Layers3 />,
        "#A78BFA",
      ),
    ],
  },
  {
    title: "Cloud y despliegue",
    description:
      "Publicación de aplicaciones, servicios en la nube y generación de sitios estáticos.",
    icon: <Cloud size={24} />,
    technologies: [
      tech(
        "Cloudflare Workers",
        <SiCloudflare />,
        "#F48120",
      ),
      tech("Firebase", <SiFirebase />, "#FFCA28"),
      tech(
        "Wrangler",
        <Code2 />,
        "#FBBF24",
        "Cloudflare CLI",
      ),
      tech(
        "Static Site Generation",
        <Globe2 />,
        "#67E8F9",
        "SSG",
      ),
    ],
  },
  {
    title: "Automatización y análisis",
    description:
      "Procesamiento de datos, automatización de tareas y generación de reportes e indicadores.",
    icon: <Workflow size={24} />,
    technologies: [
      tech("Pandas", <SiPandas />, "#C4B5FD"),
      tech("Selenium", <SiSelenium />, "#43B02A"),
      tech("RPA", <Workflow />, "#67E8F9"),
      tech("Power BI", <Activity />, "#F2C811"),
      tech(
        "Excel avanzado",
        <FileSpreadsheet />,
        "#34D399",
      ),
    ],
  },
  {
    title: "LLM-Assisted Development",
    description:
      "Modelos de lenguaje aplicados al desarrollo de software, investigación técnica, documentación y revisión de código.",
    icon: <BrainCircuit size={24} />,
    technologies: [
      tech("ChatGPT / GPT", <Bot />, "#6EE7B7"),
      tech(
        "Google Gemini",
        <BrainCircuit />,
        "#A78BFA",
      ),
      tech("Claude", <Bot />, "#F4A580"),
      tech(
        "Prompt Engineering",
        <Braces />,
        "#67E8F9",
      ),
      tech(
        "Context Engineering",
        <Layers3 />,
        "#C4B5FD",
      ),
      tech(
        "AI-Assisted Coding",
        <Code2 />,
        "#60A5FA",
      ),
    ],
  },
  {
    title: "Monitoreo y observabilidad",
    description:
      "Supervisión de aplicaciones, disponibilidad de servicios y detección de incidentes tecnológicos.",
    icon: <Activity size={24} />,
    technologies: [
      tech("Dynatrace", <Activity />, "#67E8F9"),
      tech("Atentus", <Globe2 />, "#A78BFA"),
      tech("Grafana", <SiGrafana />, "#F46800"),
    ],
  },
  {
    title: "Metodologías e idiomas",
    description:
      "Competencias complementarias para la colaboración, comunicación y gestión de proyectos.",
    icon: <Languages size={24} />,
    technologies: [
      tech("Scrum", <Kanban />, "#67E8F9"),
      tech("Lean Startup", <Lightbulb />, "#FBBF24"),
      tech(
        "Inglés B2",
        <Languages />,
        "#A5B4FC",
        "TOEIC 940/990",
      ),
    ],
  },
];

function TechnologyCard({
  technology,
}: {
  technology: Technology;
}) {
  return (
    <div
      title={technology.detail
        ? `${technology.name} — ${technology.detail}`
        : technology.name}
      className="group/tech flex min-h-[122px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.08] bg-[#152238]/80 px-2 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-[#1A2D49] hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] motion-reduce:transform-none motion-reduce:transition-none"
    >
      <span
        className="flex h-11 items-center justify-center text-[37px] leading-none transition-transform duration-300 group-hover/tech:scale-110 motion-reduce:transform-none motion-reduce:transition-none [&>svg]:h-[37px] [&>svg]:w-[37px]"
        style={{ color: technology.color }}
        aria-hidden="true"
      >
        {technology.icon}
      </span>

      <div className="flex flex-col items-center gap-1">
        <span className="max-w-full text-center text-xs font-semibold leading-snug text-slate-200 transition-colors group-hover/tech:text-white sm:text-[13px]">
          {technology.name}
        </span>

        {technology.detail && (
          <span className="text-center text-[10px] font-medium leading-4 text-cyan-300">
            {technology.detail}
          </span>
        )}
      </div>
    </div>
  );
}

function TechnologyCategory({
  group,
}: {
  group: TechnologyGroup;
}) {
  return (
    <section
      aria-label={group.title}
      className="flex h-full flex-col rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,#13223A,#0D1729)] p-5 transition-colors duration-300 hover:border-cyan-300/25 sm:p-7"
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300"
        >
          {group.icon}
        </div>

        <div className="min-w-0">
          <h2 className="font-editorial text-[27px] leading-tight text-white sm:text-[29px]">
            {group.title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {group.description}
          </p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 min-[390px]:grid-cols-3">
        {group.technologies.map((technology) => (
          <TechnologyCard
            key={technology.name}
            technology={technology}
          />
        ))}
      </div>
    </section>
  );
}

export function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-[#081120]">
      <section className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div className="pointer-events-none absolute -top-32 right-0 size-[600px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <Container className="relative">
          <div className="max-w-[830px]">
            <div className="flex items-center gap-4">
              <span className="h-px w-9 bg-cyan-400" />

              <span className="section-eyebrow">
                STACK TECNOLÓGICO
              </span>
            </div>

            <h1 className="font-editorial mt-7 text-[clamp(3.5rem,6vw,6rem)] leading-[1.04] tracking-[-0.04em] text-white">
              Tecnología para
              <br />
              <span className="gradient-text">
                crear soluciones.
              </span>
            </h1>

            <p className="mt-7 max-w-[680px] text-base leading-8 text-slate-300 sm:text-lg">
              Lenguajes, frameworks y herramientas aplicados al
              desarrollo Full Stack, aplicaciones multiplataforma,
              automatización, seguridad e inteligencia artificial.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid items-stretch gap-5 lg:grid-cols-2">
            {groups.map((group) => (
              <TechnologyCategory
                key={group.title}
                group={group}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-[#0B172A] py-20">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-3 text-cyan-300">
                <ShieldCheck
                  size={22}
                  aria-hidden="true"
                />

                <span className="section-eyebrow">
                  TECNOLOGÍA APLICADA
                </span>
              </div>

              <h2 className="font-editorial mt-5 text-4xl text-white">
                Más allá de las herramientas.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Explora mis proyectos para conocer cómo aplico
                estas tecnologías en el desarrollo de aplicaciones,
                integraciones, automatizaciones y productos digitales.
              </p>
            </div>

            <Link
              to="/proyectos"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 text-sm font-bold text-[#061325] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              Explorar proyectos
              <ArrowUpRight
                size={18}
                aria-hidden="true"
              />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
