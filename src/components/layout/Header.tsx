
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Code2, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Container } from "../ui/Container";

const navigation = [
  { label: "Inicio", to: "/", end: true },
  { label: "Proyectos", to: "/proyectos", end: false },
  { label: "Servicios", to: "/servicios", end: true },
  { label: "Sobre mí", to: "/sobre-mi", end: true },
  { label: "Stack", to: "/tecnologias", end: true },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:pt-4">
      <Container className="!px-0">
        <div
          className={`relative flex h-[70px] items-center justify-between rounded-[20px] border px-5 transition-all duration-300 sm:px-7 lg:px-9 ${
            scrolled
              ? "border-white/[0.13] bg-[#091222]/95 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
              : "border-white/[0.09] bg-[#0b1629]/75 backdrop-blur-xl"
          }`}
        >
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="Rafael.dev, volver al inicio"
          >
            <Code2
              size={30}
              strokeWidth={2.4}
              className="text-cyan-400"
            />
            <span className="text-[17px] font-bold tracking-[0.015em] text-white">
              RAFAEL.DEV
            </span>
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden h-full items-center gap-8 xl:flex"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative flex h-full items-center text-[13px] font-semibold transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="active-navigation"
                        className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/#contacto"
            className="hidden min-h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-violet-600 px-5 text-[13px] font-semibold text-white transition-all hover:brightness-110 lg:inline-flex"
          >
            Hablemos de tu proyecto
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="portfolio-mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex size-10 items-center justify-center rounded-xl border border-white/10 text-white xl:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="portfolio-mobile-menu"
                aria-label="Navegación móvil"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute top-[78px] right-0 left-0 rounded-2xl border border-white/10 bg-[#0b1629] p-3 shadow-2xl xl:hidden"
              >
                {navigation.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium ${
                        isActive
                          ? "bg-cyan-400/10 text-cyan-300"
                          : "text-slate-200 hover:bg-white/5"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <Link
                  to="/#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  Hablemos de tu proyecto
                  <ArrowUpRight size={16} />
                </Link>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}
