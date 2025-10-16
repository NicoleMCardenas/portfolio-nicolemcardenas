// app/page.tsx
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

export default function Home() {
  // Tech icons (Devicon CDN)
  const tech = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg", label: "NestJS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", label: "PostgreSQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg", label: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg", label: "Swagger" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg", label: "Docker" },
  ];

  return (
    <>
      {/* HERO pantalla completa */}
      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-800/20 to-black px-6">

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

        {/* Contenido del hero */}
        <div className="relative z-10 grid items-center gap-10 text-center md:text-left md:grid-cols-2 max-w-6xl w-full">
          {/* Texto */}
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

            {/* CTA debajo del subrol */}
            <div className="mt-5 flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md shadow-sm hover:bg-zinc-200 transition"
              >
                Let’s Build Something Together 🚀
              </Link>

              <a
                href="#about"
                className="inline-block px-4 py-3 border border-zinc-700 text-zinc-200 rounded-md hover:bg-zinc-900/40 transition"
              >
                Learn more ↓
              </a>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              alt="Web development — dark workspace"
              className="w-[300px] sm:w-[380px] md:w-[460px] rounded-xl shadow-lg border border-white/10 object-cover"
            />
          </div>
        </div>
      </div>

      {/* ABOUT con foto + texto + CTA */}
      <section id="about" className="relative z-10 w-full bg-black/60 backdrop-blur-sm border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Foto (sube tu imagen a /public/me.jpg) */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/me.jpg"
              alt="Nicole Morelos Cárdenas"
              className="w-[240px] sm:w-[280px] md:w-[320px] rounded-2xl shadow-xl object-cover border border-white/10"
            />
          </div>

          {/* Texto About */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">About Me</h3>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-justify">
              I’m a developer who blends technical precision with strategic thinking and creative execution.<br />
              My focus is on building <strong>scalable, secure, and well-designed APIs</strong> using{" "}
              <strong>NestJS, TypeScript, and PostgreSQL</strong> — always aiming for clean architecture and maintainable systems.<br />
              Beyond code, I bring a background in <strong>marketing and innovation strategy</strong>, helping transform technical
              products into meaningful digital experiences.<br />
              For me, technology isn’t just about functionality — it’s about{" "}
              <strong>creating impact, connection, and growth</strong> through every line of code.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 border border-zinc-700 text-zinc-200 rounded-md hover:bg-zinc-900/40 transition"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>

        {/* Tech icons */}
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <h4 className="text-center text-lg text-zinc-400 mb-6">Tech I work with</h4>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {tech.map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2">
                <img
                  src={t.src}
                  alt={t.label}
                  className="h-10 w-10 md:h-12 md:w-12 opacity-80 hover:opacity-100 transition duration-300 filter grayscale hover:grayscale-0"
                />
                <span className="text-xs text-zinc-400">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
