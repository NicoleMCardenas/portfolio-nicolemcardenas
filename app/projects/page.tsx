// app/projects/page.tsx
import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;

export default async function ProjectsPage() {
  const published = allProjects
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? 0).getTime() -
        new Date(a.date ?? 0).getTime()
    );

  // 🔥 Tus proyectos prioritarios
  const featured =
    published.find((p) => p.slug === "trainup") ?? published[0];
  const top2 =
    published.find((p) => p.slug === "portfolio") ??
    published.find((p) => p.slug === "planetfall") ??
    published[1];
  const top3 =
    published.find((p) => p.slug === "madre-aroma") ??
    published.find((p) => p.slug === "highstorm") ??
    published[2];

  const rest = published.filter(
    (p) =>
      p.slug !== featured?.slug &&
      p.slug !== top2?.slug &&
      p.slug !== top3?.slug
  );

  return (
    <div className="relative pb-16">
      <Navigation />

      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featured && (
            <Card>
              <Link href={`/projects/${featured.slug}`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="text-xs text-zinc-100">
                    {featured.date && (
                      <time dateTime={featured.date}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    )}
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-zinc-100 sm:text-4xl font-display">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-8 text-zinc-400">
                    {featured.description}
                  </p>

                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 lg:block">
                      Read more →
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
          )}

          <div className="flex flex-col gap-8">
            {[top2, top3].filter(Boolean).map((project) => (
              <Card key={project.slug}>
                <Article project={project} />
              </Card>
            ))}
          </div>
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[0, 1, 2].map((col) => (
            <div key={col} className="grid gap-4">
              {rest
                .filter((_, i) => i % 3 === col)
                .map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} />
                  </Card>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
