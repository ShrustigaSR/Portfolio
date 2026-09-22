export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Data Engineering Portfolio",
    description:
      "A personal portfolio focused on data engineering projects, learning notes, and practical work with modern data platforms.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/ShrustigaSR/Portfolio",
    featured: true,
  },
];