// app/page.tsx
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
  { name: "GitHub", href: "https://github.com/NicoleMCardenas", external: true },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nicolemorcar", external: true }, // ← link corregido
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
      <h1 className="py-3.5 px-0.5 z-10 text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display text-center leading-tight bg-clip-text">
        👋 Welcome to my Portfolio!
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* TAGLINE */}
      <div className="my-4 text-center animate-fade-in px-6">
        <p className="text-sm sm:text-base md:text-lg text-zinc-300">
          I’m a <strong>Full-Stack Developer</strong> | <strong>Backend Specialist</strong> |{" "}
          <strong>Marketing &amp; Innovation Strategist</strong>
        </p>
      </div>

      {/* ABOUT */}
      <div className="my-6 text-center animate-fade-in max-w-3xl px-6">
        <p className="text-base text-zinc-300 leading-relaxed">
          I’m a developer who blends technical precision with strategic thinking and creative execution.<br />
          My focus is on building <strong>scalable, secure, and well-designed APIs</strong> using{" "}
          <strong>NestJS, TypeScript, and PostgreSQL</strong> — always aiming for clean architecture and maintainable systems.<br />
          Beyond code, I bring a background in <strong>marketing and innovation strategy</strong>, helping transform technical
          products into meaningful digital experiences.<br />
          For me, technology isn’t just about functionality — it’s about{" "}
          <strong>creating impact, connection, and growth</strong> through every line of code.
        </p>

        <div className="mt-7 flex items-center justify-center gap-3">
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
      </div>

      {/* Opcional: contador de visitas si tu plantilla lo trae */}
      {/* <p className="mt-2 mb-6 text-xs text-zinc-500">
        <ViewCounter slug="home" /> visitas
      </p> */}
    </div>
  );
}
