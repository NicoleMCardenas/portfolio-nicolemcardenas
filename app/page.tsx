import Link from "next/link";
import React from "react";
import { Navigation } from "./components/nav";

export const revalidate = 60;

export default function HomePage() {
  return (
    <div className="relative pb-16">
      <Navigation />

      <div className="px-6 pt-20 mx-auto space-y-10 max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl font-display">
            Nicole M. Cárdenas
          </h1>
          <p className="mt-4 text-zinc-400">
            Full-Stack Developer specialized in NestJS, TypeScript, and
            PostgreSQL — blending technology, design, and innovation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/15"
            >
              View Projects →
            </Link>

            <Link
              href="/contact"
              className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/15"
            >
              Contact →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
