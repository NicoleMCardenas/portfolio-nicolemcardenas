import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
  { name: "GitHub", href: "https://github.com/NicoleMCardenas", external: true },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nicolemcardenas/", external: true },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* NAV */}
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer noopener" : undefined}
              className="text-sm duration-500 text-zinc-400 hover:text-zinc-200"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* FX */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      {/* HERO */}
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Nicole Morelos Cárdenas
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="my-10 text-center animate-fade-in max-w-2xl px-6">
        <h2 className="text-base text-zinc-300 leading-relaxed">
          Backend Developer con visión full-stack. Diseño APIs escalables con{" "}
          <span className="font-semibold">NestJS + TypeScript</span> y{" "}
          <span className="font-semibold">PostgreSQL</span>: autenticación, pagos, emails transaccionales
          y tareas programadas (crons). Código limpio, seguridad y documentación clara.
        </h2>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/projects"
            className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-100 hover:bg-zinc-900/40 transition"
          >
            Ver proyectos
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition"
          >
            Contacto
          </Link>
        </div>

        {/* Contador (si existe el componente en la plantilla) */}
        {/* <p className="mt-4 text-xs text-zinc-500">
          <ViewCounter slug="home" /> visitas
        </p> */}
      </div>
    </div>
  );
}
