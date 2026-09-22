import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-zinc-500">
            SELECTED WORK
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Projects
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            A collection of data engineering projects covering pipelines,
            cloud platforms, data processing, and analytics.
          </p>
        </div>

        <div className="mt-16">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}