// app/page.tsx
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
  SiSwagger,
  SiJsonwebtokens,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiRailway,
  SiVercel,
  SiDocker,
  SiGit,
  SiStripe,
  SiSendgrid,
  SiGooglemaps,
  SiRender,
  SiNeon,
} from "react-icons/si";

// Un item de icono reutilizable
function TechIcon({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl text-zinc-200">{children}</div>
      <span className="text-xs text-zinc-400">{label}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 -z-10">
        <Particles className="absolute inset-0" quantity={120} />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      {/* Top links */}
      <header className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
        <nav className="flex items-center gap-6 text-sm text-zinc-300">
          <Link
            href="https://www.linkedin.com/in/nicolemcardenas/"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/NicoleMCardenas"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Projects
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-20 pb-28 lg:px-8">
        {/* HERO */}
        <section className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight">
              <span className="block animate-name">Nicole Morelos</span>
              <span className="block animate-name animate-name-delay">
                Cárdenas
              </span>
            </h1>

            <p className="mt-6 text-xl font-semibold">Full-Stack Developer</p>

            <p className="mt-2 max-w-xl text-sm text-zinc-400">
              Backend Specialist · API Architecture · Marketing & Innovation
              Strategy
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-100 transition"
              >
                Let’s Build Something Together 🚀
              </Link>

              <Link
                href="/projects"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                Discover more ↓
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Nicole M. Cárdenas"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK (con iconos) */}
        <section className="mt-24 space-y-16 text-center">
          {/* BACKEND */}
          <div>
            <h3 className="text-sm tracking-widest text-zinc-400">
              BACKEND & CORE
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-8">
              <TechIcon label="NestJS">
                <SiNestjs />
              </TechIcon>
              <TechIcon label="Node.js">
                <SiNodedotjs />
              </TechIcon>
              <TechIcon label="Express.js">
                <SiExpress />
              </TechIcon>
              <TechIcon label="TypeScript">
                <SiTypescript />
              </TechIcon>
              <TechIcon label="JavaScript">
                <SiJavascript />
              </TechIcon>
              <TechIcon label="Swagger">
                <SiSwagger />
              </TechIcon>
              <TechIcon label="JWT">
                <SiJsonwebtokens />
              </TechIcon>
            </div>
          </div>

          {/* DATABASES */}
          <div>
            <h3 className="text-sm tracking-widest text-zinc-400">DATABASES</h3>
            <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-8">
              <TechIcon label="PostgreSQL">
                <SiPostgresql />
              </TechIcon>
              <TechIcon label="Neon">
                <SiNeon />
              </TechIcon>
              <TechIcon label="Railway DB">
                <SiRailway />
              </TechIcon>
            </div>
          </div>

          {/* FRONTEND */}
          <div>
            <h3 className="text-sm tracking-widest text-zinc-400">
              FRONTEND & UI
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-8">
              <TechIcon label="React">
                <SiReact />
              </TechIcon>
              <TechIcon label="Next.js">
                <SiNextdotjs />
              </TechIcon>
              <TechIcon label="HTML5">
                <SiHtml5 />
              </TechIcon>
              <TechIcon label="Tailwind CSS">
                <SiTailwindcss />
              </TechIcon>
            </div>
          </div>

          {/* INFRA */}
          <div>
            <h3 className="text-sm tracking-widest text-zinc-400">
              INFRA & DEVOPS
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-8">
              <TechIcon label="Railway">
                <SiRailway />
              </TechIcon>
              <TechIcon label="Vercel">
                <SiVercel />
              </TechIcon>
              <TechIcon label="Render">
                <SiRender />
              </TechIcon>
              <TechIcon label="Docker">
                <SiDocker />
              </TechIcon>
              <TechIcon label="Git">
                <SiGit />
              </TechIcon>
              <TechIcon label="SendGrid">
                <SiSendgrid />
              </TechIcon>
              <TechIcon label="Stripe">
                <SiStripe />
              </TechIcon>
              <TechIcon label="Google Maps API">
                <SiGooglemaps />
              </TechIcon>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
