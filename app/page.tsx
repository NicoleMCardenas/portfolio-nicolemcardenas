// app/page.tsx
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-800/20 to-black text-center px-6">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      {/* NAME */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 animate-fade-in">
        Nicole Morelos Cárdenas
      </h1>

      {/* MAIN ROLE */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-gray-400 mb-4 animate-fade-in">
        Full-Stack Developer
      </h2>

      {/* SUBROLE */}
      <p className="text-lg sm:text-xl text-zinc-400 mb-6 animate-fade-in">
        Backend Specialist | API Architecture | Marketing & Innovation Strategy
      </p>

      {/* IMAGE */}
      <div className="w-[280px] sm:w-[340px] md:w-[420px] mb-8 animate-fade-in">
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_a_good_career.jpg"
          alt="Web Developer Illustration"
          className="rounded-xl shadow-lg mx-auto"
        />
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="px-6 py-3 bg-white text-black font-medium rounded-md shadow-sm hover:bg-zinc-200 transition"
      >
         Let’s Build Something Together 🚀🚀
      </Link>
    </div>
  );
}
