import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-zinc-500">
            DATA ENGINEERING
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl md:text-6xl">
            Building reliable data pipelines and systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            I work with cloud data platforms, SQL, Python, and modern data
            engineering tools to build and maintain production data workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              View Projects
            </Link>

            <Link
              href="/writing"
              className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              Read My Writing
            </Link>
          </div>
        </div>

        <div className="mt-20 border-t border-zinc-200 pt-8">
          <p className="text-sm font-medium text-zinc-500">
            CURRENTLY FOCUSED ON
          </p>

          <p className="mt-3 text-base text-zinc-700">
            Data Engineering · Cloud · Data Platforms
          </p>
        </div>
      </section>
    </main>
  );
}