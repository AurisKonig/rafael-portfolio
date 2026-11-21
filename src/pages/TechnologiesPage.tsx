
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
  Languages,
  Layers3,
  Lightbulb,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import {
  SiCss,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSelenium,
  SiSqlite,
  SiTypescript,
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

const groups: TechnologyGroup[] = [
  {
    title: "Frontend",
    description:
      "Desarrollo de interfaces modernas, accesibles y adaptables.",
    icon: <Layers3 size={24} />,
    technologies: [
      {
        name: "React",
        icon: <SiReact />,
        color: "#61DAFB",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "#60A5FA",
      },
      {
        name: "HTML5",
        icon: <SiHtml5 />,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: <SiCss />,
        color: "#60A5FA",
      },
    ],
  },
  {
    title: "Backend y programación",
    description:
      "Lenguajes, frameworks y tecnologías para desarrollar lógica de negocio y servicios.",
    icon: <Code2 size={24} />,
    technologies: [
      {
        name: "Python",
        icon: <SiPython />,
        color: "#FFD43B",
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        color: "#70B85B",
      },
      {
        name: "Java",
        icon: <Code2 />,
        color: "#F89820",
      },
      {
        name: "PHP",
        icon: <SiPhp />,
        color: "#A5A6D9",
      },
      {
        name: "Solidity",
        icon: <Braces />,
        color: "#A5B4FC",
      },
      {
        name: "Laravel",
        icon: <SiLaravel />,
        color: "#FF554B",
      },
      {
        name: "APIs REST",
        icon: <Network />,
        color: "#67E8F9",
      },
    ],
  },
  {
    title: "Bases de datos",
    description:
      "Gestión, consulta, modelado y almacenamiento de información.",
    icon: <Database size={24} />,
    technologies: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "#79B4D9",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        color: "#70B8E2",
      },
      {
        name: "SQLite",
        icon: <SiSqlite />,
        color: "#67B9E8",
      },
      {
        name: "Cloud Firestore",
        icon: <SiFirebase />,
        color: "#FFCA28",
      },
      {
        name: "SQL",
        icon: <Database />,
        color: "#A5B4FC",
      },
      {
        name: "Oracle SQL Developer",
        icon: <Database />,
        color: "#F87171",
      },
      {
        name: "DBeaver",
        icon: <Database />,
        color: "#C4A484",
      },
    ],
  },
  {
    title: "Herramientas de desarrollo",
    description:
      "Herramientas para versionar, probar, integrar y desplegar software.",
    icon: <GitBranch size={24} />,
    technologies: [
      {
        name: "Git",
        icon: <SiGit />,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: <SiGithub />,
        color: "#FFFFFF",
      },
      {
        name: "Docker",
        icon: <SiDocker />,
        color: "#2496ED",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "#FF6C37",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        color: "#FFCA28",
      },
    ],
  },
  {
    title: "Automatización y análisis",
    description:
      "Procesamiento de datos, automatización de tareas y generación de reportes.",
    icon: <Workflow size={24} />,
    technologies: [
      {
        name: "Pandas",
        icon: <SiPandas />,
        color: "#C4B5FD",
      },
      {
        name: "Selenium",
        icon: <SiSelenium />,
        color: "#43B02A",
      },
      {
        name: "RPA",
        icon: <Workflow />,
        color: "#67E8F9",
      },
      {
        name: "Power BI",
        icon: <Activity />,
        color: "#F2C811",
      },
      {
        name: "Excel avanzado",
        icon: <FileSpreadsheet />,
        color: "#34D399",
      },
    ],
  },
  {
    title: "Inteligencia artificial generativa",
    description:
      "Herramientas de inteligencia artificial aplicadas a productividad, investigación y desarrollo.",
    icon: <BrainCircuit size={24} />,
    technologies: [
      {
        name: "ChatGPT",
        icon: <Bot />,
        color: "#6EE7B7",
      },
      {
        name: "Google Gemini",
        icon: <BrainCircuit />,
        color: "#A78BFA",
      },
      {
        name: "Claude",
        icon: <Bot />,
        color: "#F4A580",
      },
    ],
  },
  {
    title: "Monitoreo y observabilidad",
    description:
      "Herramientas para supervisar aplicaciones, servicios y sistemas.",
    icon: <Activity size={24} />,
    technologies: [
      {
        name: "Dynatrace",
        icon: <Activity />,
        color: "#67E8F9",
      },
      {
        name: "Atentus",
        icon: <Globe2 />,
        color: "#A78BFA",
      },
      {
        name: "Grafana",
        icon: <SiGrafana />,
        color: "#F46800",
      },
    ],
  },
  {
    title: "Metodologías e idiomas",
    description:
      "Competencias complementarias para la colaboración y gestión de proyectos.",
    icon: <Languages size={24} />,
    technologies: [
      {
        name: "Scrum",
        icon: <Kanban />,
        color: "#67E8F9",
      },
      {
        name: "Lean Startup",
        icon: <Lightbulb />,
        color: "#FBBF24",
      },
      {
        name: "Inglés B2",
        icon: <Languages />,
        color: "#A5B4FC",
        detail: "TOEIC 940/990",
      },
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
          <span className="text-center text-[10px] font-medium text-cyan-300">
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
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
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
    <main className="min-h-screen bg-[#081120]">
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
              Lenguajes, frameworks y herramientas que forman
              parte de mi perfil técnico, desde el desarrollo
              de interfaces hasta la automatización y la
              integración de sistemas.
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
                <ShieldCheck size={22} />
                <span className="section-eyebrow">
                  TECNOLOGÍA APLICADA
                </span>
              </div>

              <h2 className="font-editorial mt-5 text-4xl text-white">
                Más allá de las herramientas.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Las tecnologías son herramientas para resolver
                problemas reales. Explora mis proyectos para
                conocer cómo las aplico en soluciones de
                software, automatización y desarrollo web.
              </p>
            </div>

            <Link
              to="/proyectos"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 text-sm font-bold text-[#061325] transition hover:brightness-110"
            >
              Explorar proyectos
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
