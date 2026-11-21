
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#081120] py-9">
      <Container className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <Link to="/" className="text-base font-bold text-white">
            RAFAEL<span className="text-cyan-400">.DEV</span>
          </Link>
          <p className="mt-2 text-xs text-slate-400">
            © {new Date().getFullYear()} Rafael Ancalipe
          </p>
        </div>

        <nav aria-label="Redes y contacto" className="flex items-center gap-5">
          <a
            href="https://github.com/AurisKonig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Rafael Ancalipe"
            className="text-slate-400 transition-colors hover:text-cyan-400"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rafaelancalipe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Rafael Ancalipe"
            className="text-slate-400 transition-colors hover:text-cyan-400"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:Raphaelauris@gmail.com"
            aria-label="Enviar correo electrónico"
            className="text-slate-400 transition-colors hover:text-cyan-400"
          >
            <Mail size={20} />
          </a>
        </nav>
      </Container>
    </footer>
  );
}
