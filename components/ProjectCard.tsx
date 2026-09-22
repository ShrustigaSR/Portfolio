import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border-t border-zinc-200 py-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
            {project.title}
          </h2>

          <p className="mt-3 leading-7 text-zinc-600">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="text-sm text-zinc-500">
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600"
          >
            GitHub →
          </Link>
        </div>
      </div>
    </article>
  );
}