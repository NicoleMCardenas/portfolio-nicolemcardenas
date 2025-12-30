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

function TechIcon({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition">
      <div className="text-3xl">{icon}</div>
      <span className="text-xs text-zinc-400">{label}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Particles className="absolute inset-0" quantity={140} />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        {/* NAV */}
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

        {/* HERO CONTENT */}
        <main className="mx-auto max-w-7xl px-6 pt-20 pb-28 lg:px-8">
          <section className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left */}
            <div className="max-w-2xl">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white">
                <span className="block animate-name">Nicole Morelos</span>
                <span className="block animate-name animate-name-delay">
                  Cárdenas
                </span>
              </h1>

              <p className="mt-6 text-xl font-semibold text-white">
                Full-Stack Developer
              </p>

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

                <a
                  href="#about"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  About me ↓
                </a>
              </div>
            </div>

            {/* Right: Laptop image */}
            <div className="relative flex justify-center">
              <div className="w-[320px] sm:w-[420px] md:w-[520px] rounded-2xl border border-white/10 bg-white/5 p-3 shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80"
                    alt="Web development workspace"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 w-full bg-black/60 backdrop-blur-sm border-t border-white/5"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/profile.jpg"
              alt="Nicole Morelos Cárdenas"
              width={320}
              height={420}
              className="w-[240px] sm:w-[280px] md:w-[320px] rounded-2xl shadow-xl object-cover border border-white/10"
              priority
            />
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              About Me
            </h3>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-justify">
              I’m a developer who blends technical precision with strategic
              thinking and creative execution.
              <br />
              <br />
              My focus is on building{" "}
              <strong>scalable, secure, and well-designed APIs</strong> using{" "}
              <strong>NestJS, TypeScript, and PostgreSQL</strong> — always aiming
              for clean architecture and maintainable systems.
              <br />
              <br />
              Beyond code, I bring a background in{" "}
              <strong>marketing and innovation strategy</strong>, helping
              transform technical products into meaningful digital experiences.
              <br />
              <br />
              For me, technology isn’t just about functionality — it’s about{" "}
              <strong>creating impact, connection, and growth</strong> through
              every line of code.
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
      </section>

      {/* TECH STACK */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h3 className="mb-10 text-center text-sm tracking-widest text-zinc-400">
          TECHNOLOGIES I WORK WITH
        </h3>

        <div className="grid grid-cols-3 gap-y-10 sm:grid-cols-4 md:grid-cols-6 justify-items-center">
          <TechIcon icon={<SiNestjs />} label="NestJS" />
          <TechIcon icon={<SiNodedotjs />} label="Node.js" />
          <TechIcon icon={<SiExpress />} label="Express" />
          <TechIcon icon={<SiTypescript />} label="TypeScript" />
          <TechIcon icon={<SiJavascript />} label="JavaScript" />
          <TechIcon icon={<SiPostgresql />} label="PostgreSQL" />

          {/* Neon: texto para evitar fallo de icon */}
          <TechIcon icon={<span className="text-xl font-semibold">NEON</span>} label="Neon DB" />

          <TechIcon icon={<SiRailway />} label="Railway" />
          <TechIcon icon={<SiReact />} label="React" />
          <TechIcon icon={<SiNextdotjs />} label="Next.js" />
          <TechIcon icon={<SiTailwindcss />} label="Tailwind" />
          <TechIcon icon={<SiDocker />} label="Docker" />
          <TechIcon icon={<SiGit />} label="Git" />
          <TechIcon icon={<SiSwagger />} label="Swagger" />
          <TechIcon icon={<SiJsonwebtokens />} label="JWT" />
          <TechIcon icon={<SiSendgrid />} label="SendGrid" />
          <TechIcon icon={<SiStripe />} label="Stripe" />

          {/* MercadoPago: texto simple */}
          <TechIcon icon={<span className="text-xl font-semibold">MP</span>} label="MercadoPago" />

          <TechIcon icon={<SiGooglemaps />} label="Google Maps API" />
          <TechIcon icon={<SiVercel />} label="Vercel" />
          <TechIcon icon={<SiRender />} label="Render" />
        </div>
      </section>
    </>
  );
}

