// app/page.tsx
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-between w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-800/20 to-black px-6">

      {/* NAV superior izquierda */}
      <nav className="absolute top-6 left-6 flex items-center gap-5 text-zinc-400 text-sm">
        <Link
          href="https://www.linkedin.com/in/nicolemorcar"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/NicoleMCardenas"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </Link>
        <Link href="/projects" className="hover:text-white transition">
          Projects
        </Link>
      </nav>

      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 grid items-center gap-10 text-center md:text-left md:grid-cols-2 max-w-6xl w-full flex-grow">
        {/* Texto principal */}
        <div className="order-2 md:order-1">
          {/* Nombre con efecto original */}
          <h1 className="py-3.5 px-0.5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display leading-tight bg-clip-text">
            Nicole Morelos Cárdenas
          </h1>

          {/* Rol principal */}
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-gray-400">
            Full-Stack Developer
          </h2>

          {/* Subrol */}
          <p className="mt-2 text-base sm:text-lg text-zinc-400">
            Backend Specialist · API Architecture · Marketing & Innovation Strategy
          </p>

          {/* CTA */}
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md shadow-sm hover:bg-zinc-200 transition"
            >
              Let’s Build Something Together 🚀
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
            alt="Web development — dark workspace"
            className="w-[300px] sm:w-[380px] md:w-[460px] rounded-xl shadow-lg border border-white/10 object-cover"
          />
        </div>
      </div>

      {/* Párrafo centrado y justificado al final */}
      <div className="relative z-10 max-w-4xl pb-10">
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-justify text-center">
          I’m a developer who blends technical precision with strategic thinking and creative execution.<br />
          My focus is on building <strong>scalable, secure, and well-designed APIs</strong> using{" "}
          <strong>NestJS, TypeScript, and PostgreSQL</strong> — always aiming for clean architecture and maintainable systems.<br />
          Beyond code, I bring a background in <strong>marketing and innovation strategy</strong>, helping transform technical
          products into meaningful digital experiences.<br />
          For me, technology isn’t just about functionality — it’s about{" "}
          <strong>creating impact, connection, and growth</strong> through every line of code.
        </p>
      </div>
    </div>
  );
}
