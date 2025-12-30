import Link from "next/link";
import Image from "next/image";
import Particles from "./components/particles";
import {
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiStripe,
  SiSendgrid,
  SiSwagger,
  SiJsonwebtokens,
  SiRailway,
  SiVercel,
  SiGooglemaps,
  SiRender,
} from "react-icons/si";

type HomeProps = {
  searchParams?: { lang?: string };
};

function t(lang: "en" | "es") {
  const isEs = lang === "es";
  return {
    // nav
    linkedin: "LinkedIn",
    github: "GitHub",
    projects: isEs ? "Proyectos" : "Projects",

    // hero
    role: isEs ? "Desarrolladora Full-Stack" : "Full-Stack Developer",
    subtitle: isEs
      ? "Especialista Backend · Arquitectura de APIs · Marketing & Diseño Estratégico e Innovación"
      : "Backend Specialist · API Architecture · Marketing & Strategic Design & Innovation",
    cta: isEs ? "Construyamos algo juntos 🚀" : "Let’s Build Something Together 🚀",
    learnMore: isEs ? "Descubrir más ↓" : "Learn more ↓",

    // sections
    aboutTitle: isEs ? "Sobre mí" : "About Me",
    aboutBody: isEs ? (
      <>
        Soy una desarrolladora que combina precisión técnica con pensamiento estratégico y ejecución creativa.
        <br />
        <br />
        Me enfoco en construir <strong>APIs escalables, seguras y bien diseñadas</strong> con{" "}
        <strong>NestJS, TypeScript y PostgreSQL</strong>, cuidando la arquitectura limpia y la mantenibilidad.
        <br />
        <br />
        Además, tengo experiencia en{" "}
        <strong>marketing (licenciatura) y diseño estratégico e innovación (maestría)</strong>, conectando lo
        técnico con productos digitales que generan valor real y holístico.
        <br />
        <br />
        Para mí, la tecnología no es solo funcionalidad: es{" "}
        <strong>impacto, conexión y crecimiento</strong> en cada línea de código.
      </>
    ) : (
      <>
        I’m a developer who blends technical precision with strategic thinking and creative execution.
        <br />
        <br />
        My focus is on building <strong>scalable, secure, and well-designed APIs</strong> using{" "}
        <strong>NestJS, TypeScript, and PostgreSQL</strong> — always aiming for clean architecture and
        maintainable systems.
        <br />
        <br />
        Beyond code, I bring a background in <strong>marketing</strong> (bachelor's degree) and{" "}
        <strong>strategic design & innovation</strong> (master's degree), helping transform technical products
        into holistic and meaningful digital experiences.
        <br />
        <br />
        For me, technology isn’t just about functionality — it’s about{" "}
        <strong>creating impact, connection, and growth</strong> through every line of code.
      </>
    ),

    contactMe: isEs ? "Contáctame →" : "Contact me →",
    stackBtn: isEs ? "Tecnologías →" : "Stack →",

    stackTitle: isEs ? "TECNOLOGÍAS" : "TECH STACK",
    stackSubtitle: isEs ? "Tecnologías con las que trabajo" : "Technologies I work with",

    // language toggle label
    toggleLabel: isEs ? "English" : "Español",
  };
}

function TechIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition">
      <div className="text-3xl">{icon}</div>
      <span className="text-xs text-zinc-400">{label}</span>
    </div>
  );
}

export default function HomePage({ searchParams }: HomeProps) {
  const lang: "en" | "es" = searchParams?.lang === "es" ? "es" : "en";
  const copy = t(lang);

  // toggle lang preserving route (home)
  const toggleHref = lang === "es" ? "/?lang=en" : "/?lang=es";

  return (
    <>
      {/* HERO */}
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-tl from-black via-zinc-800/20 to-black px-6">
        {/* NAV */}
        <nav className="absolute top-6 left-6 z-20 flex items-center gap-5 text-sm text-zinc-400">
          <Link
            href="https://www.linkedin.com/in/nicolemcardenas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            {copy.linkedin}
          </Link>
          <Link
            href="https://github.com/NicoleMCardenas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            {copy.github}
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            {copy.projects}
          </Link>
        </nav>

        {/* Language toggle (top-right) */}
        <div className="absolute top-5 right-6 z-20">
          <Link href={toggleHref} className="btn-ghost inline-flex items-center gap-2 px-4 py-2">
            {copy.toggleLabel}
          </Link>
        </div>

        {/* PARTICLES */}
        <div className="absolute inset-0 -z-10">
          <Particles className="absolute inset-0" quantity={140} />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 pt-32 pb-20 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-tight text-white">
              <span className="block animate-name">Nicole Morelos</span>
              <span className="block animate-name animate-name-delay">Cárdenas</span>
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-white">{copy.role}</h2>

            <p className="mt-2 text-sm text-zinc-400 max-w-xl">{copy.subtitle}</p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                {copy.cta}
              </Link>

              <a href="#about" className="btn-ghost">
                {copy.learnMore}
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="w-[320px] sm:w-[420px] md:w-[520px] rounded-2xl border border-white/10 bg-white/5 p-3 shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80"
                  alt="Web development workspace"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 420px, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section
        id="about"
        className="relative w-full bg-black/60 backdrop-blur-sm border-t border-white/5"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/profile.jpg"
              alt="Nicole Morelos Cárdenas"
              width={520}
              height={680}
              className="w-[240px] sm:w-[280px] md:w-[320px] rounded-2xl shadow-xl object-cover border border-white/10"
              priority={false}
            />
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{copy.aboutTitle}</h3>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-justify">
              {copy.aboutBody}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-ghost">
                {copy.contactMe}
              </Link>

              <a href="#stack" className="btn-ghost">
                {copy.stackBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
        <h3 className="mb-4 text-center text-sm tracking-widest text-zinc-400">{copy.stackTitle}</h3>
        <p className="mb-10 text-center text-zinc-500 text-sm">{copy.stackSubtitle}</p>

        <div className="grid grid-cols-3 gap-y-10 sm:grid-cols-4 md:grid-cols-6 justify-items-center">
          <TechIcon icon={<SiNestjs />} label="NestJS" />
          <TechIcon icon={<SiNodedotjs />} label="Node.js" />
          <TechIcon icon={<SiExpress />} label="Express" />
          <TechIcon icon={<SiTypescript />} label="TypeScript" />
          <TechIcon icon={<SiJavascript />} label="JavaScript" />
          <TechIcon icon={<SiPostgresql />} label="PostgreSQL" />

          <TechIcon icon={<SiReact />} label="React" />
          <TechIcon icon={<SiNextdotjs />} label="Next.js" />
          <TechIcon icon={<SiTailwindcss />} label="TailwindCSS" />

          <TechIcon icon={<SiDocker />} label="Docker" />
          <TechIcon icon={<SiGit />} label="Git" />

          <TechIcon icon={<SiSwagger />} label="Swagger" />
          <TechIcon icon={<SiJsonwebtokens />} label="JWT" />
          <TechIcon icon={<SiSendgrid />} label="SendGrid" />
          <TechIcon icon={<SiStripe />} label="Stripe" />

          <TechIcon icon={<span className="text-xl font-semibold">MP</span>} label="MercadoPago" />
          <TechIcon icon={<SiGooglemaps />} label="Google Maps API" />

          <TechIcon icon={<span className="text-xl font-semibold">NEON</span>} label="Neon DB" />
          <TechIcon icon={<SiRailway />} label="Railway" />
          <TechIcon icon={<SiVercel />} label="Vercel" />
          <TechIcon icon={<SiRender />} label="Render" />
        </div>
      </section>
    </>
  );
}
