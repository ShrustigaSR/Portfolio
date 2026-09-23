export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-zinc-500">
            ABOUT
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Data Engineer building with curiosity and purpose.
          </h1>

          <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              I&apos;m a data engineer interested in building reliable data
              pipelines, working with cloud platforms, and understanding how
              data systems work end to end.
            </p>

            <p>
              This portfolio is where I document projects, technical
              learnings, and the things I&apos;m exploring as I continue
              growing as a data engineer.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-zinc-200 pt-10 md:grid-cols-2">
          <section>
            <h2 className="text-sm font-medium text-zinc-500">
              TECHNOLOGIES
            </h2>

            <p className="mt-4 leading-7 text-zinc-700">
              Python · SQL · AWS · Snowflake · Docker · Git · Data Pipelines
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium text-zinc-500">
              CURRENTLY LEARNING
            </h2>

            <p className="mt-4 leading-7 text-zinc-700">
              Advanced data engineering patterns, distributed data processing,
              and building robust data platforms.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}