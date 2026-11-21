
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { ArchitectureVisual } from "./ArchitectureVisual";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", icon: SiPython, color: "#F7C843" },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-premium relative isolate overflow-hidden pt-[132px] pb-8 sm:pt-[145px] lg:pt-[132px] lg:pb-9"
    >
      <div className="hero-ambient pointer-events-none absolute inset-0" />
      <div className="hero-shape pointer-events-none absolute inset-x-0 bottom-0 h-[42%]" />

      <Container className="relative z-10 grid items-center gap-6 lg:grid-cols-[1fr_1.08fr] lg:gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 max-w-[590px]"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-9 bg-cyan-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-400">
              Rafael Ancalipe · Full Stack Developer
            </span>
          </div>

          <h1 className="font-editorial text-[clamp(3.5rem,5.5vw,5.5rem)] leading-[1.01] tracking-[-0.045em] text-white">
            Construyo
            <br />
            soluciones de
            <br />
            <span className="gradient-text">software.</span>
          </h1>

          <p className="mt-6 max-w-[535px] text-[15px] leading-[1.75] text-slate-300 sm:text-[16px]">
            Ingeniero en Informática especializado en desarrollo web,
            automatización e integración de sistemas. Transformo
            necesidades reales en soluciones digitales funcionales,
            escalables y bien diseñadas.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <span
                  key={technology.name}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.06] px-3.5 py-2.5 text-xs font-medium text-white"
                >
                  <Icon
                    size={18}
                    style={{ color: technology.color }}
                    aria-hidden="true"
                  />
                  {technology.name}
                </span>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/proyectos"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 text-sm font-bold text-[#061325] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Ver proyectos
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/servicios"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-600/70 bg-[#0B1526]/50 px-6 text-sm font-semibold text-white transition-colors hover:border-cyan-400/50"
            >
              Mis servicios
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <Link
            to="/sobre-mi#curriculum"
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-cyan-300"
          >
            <Download size={15} />
            Consultar mi currículum
          </Link>
        </motion.div>

        <div className="relative -mx-3 sm:mx-0 lg:-mr-10">
          <ArchitectureVisual />
        </div>
      </Container>
    </section>
  );
}
