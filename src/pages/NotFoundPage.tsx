
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";

export function NotFoundPage() {
  return (
    <section className="flex min-h-screen items-center bg-[#081120] pt-24">
      <Container className="text-center">
        <span className="section-eyebrow">ERROR 404</span>
        <h1 className="font-editorial mt-5 text-5xl text-white sm:text-7xl">
          Página no encontrada.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-slate-300">
          La dirección solicitada no existe o ya no está disponible.
        </p>
        <Link to="/" className="primary-button mt-8">
          <ArrowLeft size={17} />
          Volver al inicio
        </Link>
      </Container>
    </section>
  );
}
