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
  SiPostman,
  SiVite,
  SiTypeorm,
  SiCloudinary,
  SiGooglecalendar,
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
        Beyond code, I bring a background in <strong>marketing</strong> (bachelor&apos;s degree) and{" "}
        <strong>strategic design & innovation</strong> (master&apos;s degree), helping transform technical products
        into holistic and meaningful digital experiences.
        <br />
        <br />
        For me, technology isn&apos;t just about functionality — it&apos;s about{" "}
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

function TechIcon({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
}) {
  return (
    <div className="group flex flex-col items-center gap-2 transition">
      <div className={`text-3xl text-zinc-300 transition-colors duration-300 ${color}`}>
        {icon}
      </div>
      <span className="text-xs text-zinc-400 text-center">{label}</span>
    </div>
  );
}

export default function HomePage({ searchParams }: HomeProps) {
  const lang: "en" | "es" = searchParams?.lang === "es" ? "es" : "en";
  const copy = t(lang);

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

        {/* Language toggle */}
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

        <div className="grid grid-cols-3 gap-y-12 sm:grid-cols-4 md:grid-cols-6 justify-items-center">
          {/* BACKEND */}
          <TechIcon icon={<SiNestjs />} label="NestJS" color="group-hover:text-cyan-400" />
          <TechIcon icon={<SiNodedotjs />} label="Node.js" color="group-hover:text-cyan-400" />
          <TechIcon icon={<SiExpress />} label="Express.js" color="group-hover:text-cyan-400" />
          <TechIcon icon={<SiTypescript />} label="TypeScript" color="group-hover:text-cyan-400" />
          <TechIcon icon={<SiJavascript />} label="JavaScript" color="group-hover:text-cyan-400" />
          <TechIcon icon={<SiPostgresql />} label="PostgreSQL" color="group-hover:text-cyan-400" />
          <TechIcon icon={<SiTypeorm />} label="TypeORM" color="group-hover:text-cyan-400" />

          {/* APIs & TOOLS */}
          <TechIcon icon={<SiPostman />} label="Postman" color="group-hover:text-violet-400" />
          <TechIcon icon={<SiSwagger />} label="Swagger / OpenAPI" color="group-hover:text-violet-400" />
          <TechIcon icon={<SiJsonwebtokens />} label="JWT" color="group-hover:text-violet-400" />

          {/* FRONTEND */}
          <TechIcon icon={<SiReact />} label="React" color="group-hover:text-sky-400" />
          <TechIcon icon={<SiNextdotjs />} label="Next.js" color="group-hover:text-sky-400" />
          <TechIcon icon={<SiVite />} label="Vite" color="group-hover:text-sky-400" />
          <TechIcon icon={<SiTailwindcss />} label="Tailwind CSS" color="group-hover:text-sky-400" />

          {/* DEVOPS */}
          <TechIcon icon={<SiDocker />} label="Docker" color="group-hover:text-blue-400" />
          <TechIcon icon={<SiGit />} label="Git" color="group-hover:text-blue-400" />

          {/* PAYMENTS & EMAIL */}
          <TechIcon icon={<SiStripe />} label="Stripe" color="group-hover:text-emerald-400" />
          <TechIcon
            icon={<span className="text-xl font-semibold text-zinc-300 group-hover:text-emerald-400 transition-colors duration-300">MP</span>}
            label="MercadoPago"
            color=""
          />
          <TechIcon icon={<SiSendgrid />} label="SendGrid" color="group-hover:text-emerald-400" />

          {/* GOOGLE */}
          <TechIcon icon={<SiGooglemaps />} label="Google Maps API" color="group-hover:text-amber-400" />
          <TechIcon icon={<SiGooglecalendar />} label="Google Calendar API" color="group-hover:text-amber-400" />

          {/* CLOUD / DB */}
          <TechIcon icon={<SiCloudinary />} label="Cloudinary" color="group-hover:text-fuchsia-400" />
          <TechIcon
            icon={<span className="text-xl font-bold tracking-wide text-zinc-300 group-hover:text-fuchsia-400 transition-colors duration-300">NEON</span>}
            label="Neon DB"
            color=""
          />

          {/* DEPLOY */}
          <TechIcon icon={<SiRailway />} label="Railway" color="group-hover:text-lime-400" />
          <TechIcon icon={<SiRender />} label="Render" color="group-hover:text-lime-400" />
          <TechIcon icon={<SiVercel />} label="Vercel" color="group-hover:text-lime-400" />
        </div>

        {/* BADGES */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {[
            "RESTful APIs",
            "JWT Authentication",
            "Role-based access control (RBAC)",
            "CRON jobs",
            "SMTP / Email services",
            "Payment integrations",
            "Database modeling",
            "Entity relationships (1-N, N-N)",
            "Migrations",
            "API consumption",
            "JSX / TSX",
            "Environment variables (.env)",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300 backdrop-blur-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

