// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import Particles from "./components/particles";

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
            Linkedin
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
                Learn more ↓
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

        {/* TECH STACK */}
        <section className="mt-24 space-y-16 text-center">
          {[
            {
              title: "BACKEND & CORE",
              items: [
                "NestJS",
                "Node.js",
                "Express.js",
                "TypeORM",
                "TypeScript",
                "JWT",
                "Swagger",
              ],
            },
            {
              title: "DATABASES",
              items: ["PostgreSQL", "Neon", "Railway DB"],
            },
            {
              title: "FRONTEND & UI",
              items: ["React", "Next.js", "HTML5", "Tailwind CSS"],
            },
            {
              title: "INFRA & DEVOPS",
              items: [
                "Railway",
                "Vercel",
                "Docker",
                "Git",
                "Stripe",
                "MercadoPago",
                "SendGrid",
              ],
            },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="text-sm tracking-widest text-zinc-400">
                {group.title}
              </h3>
              <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-zinc-300">
                {group.items.map((item) => (
                  <span key={item} className="hover:text-white transition">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
