// app/projects/page.tsx
import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();
export const revalidate = 60;

export default async function ProjectsPage() {
  // 🔹 Get project views from Upstash Redis
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  // 🔹 Prioritize your own featured projects
  const myPriority = ["trainup", "portfolio", "madre-aroma"];

  // 🔹 Only published projects
  const published = allProjects.filter((p) => p.published);

  // 🔹 Sort by date (newest first)
  const ordered = [...published].sort(
    (a, b) =>
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
  );

  // 🔹 Featured project (TrainUp if found)
  const featured =
    ordered.find((p) => myPriority.includes(p.slug)) ?? ordered[0];

  // 🔹 Next two projects
  const top2 = ordered.find((p) => p.slug !== featured?.slug);
  const top3 = ordered.find(
    (p) => p.slug !== featured?.slug && p.slug !== top2?.slug
  );

  // 🔹 Remaining projects for the grid
  const sorted = ordered.filter(
    (p) => p.slug !== featured?.slug && p.slug !== top2?.slug && p.slug !== top3?.slug
  );

  return (
    <div className="relative pb-16">
      <Navigation />

      {/* Header */}
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            A selection of applications I’ve built — full-stack projects using
            NestJS, PostgreSQL, and Next.js.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* Featured + Top 2 */}
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {featured && (
            <Card>
              <Link href={`/projects/${featured.slug}`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      {featured.date ? (
                        <time dateTime={new Date(featured.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(featured.date))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Eye className="w-4 h-4" />{" "}
                      {Intl.NumberFormat("en-US", {
                        notation: "compact",
                      }).format(views[featured.slug] ?? 0)}
                    </span>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {featured.title}
                  </h2>

                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {featured.summary ?? featured.description}
                  </p>

                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
          )}

          {/* Top 2 & 3 */}
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].filter(Boolean).map((project) => (
              <Card key={(project as any).slug}>
                <Article
                  project={project as any}
                  views={views[(project as any).slug] ?? 0}
                />
              </Card>
            ))}
          </div>
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        {/* Remaining projects */}
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article
                    project={project}
                    views={views[project.slug] ?? 0}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article
                    project={project}
                    views={views[project.slug] ?? 0}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article
                    project={project}
                    views={views[project.slug] ?? 0}
                  />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
