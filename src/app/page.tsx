const painPoints = [
  "You got voluntold to run GameChanger and have no clue where to start.",
  "You want to score games correctly without panicking in front of other parents.",
  "You need a simple walkthrough for setup, scoring, livestreams, and game-day basics.",
];

const learnItems = [
  "Team and player setup",
  "Scorekeeping fundamentals",
  "Game-day workflow and best practices",
  "Common mistakes and how to avoid them",
  "Tips for parents, coaches, and team admins",
];

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "Sports parents, volunteer scorekeepers, team moms and dads, coaches, and team admins who want to feel confident using GameChanger.",
  },
  {
    question: "Is this only for beginners?",
    answer:
      "Mostly, yes. The focus is helping people get comfortable fast, but even regular users can pick up cleaner workflows and fewer mistakes.",
  },
  {
    question: "What will the first offer be?",
    answer:
      "We are starting with early interest for simple training, quick-start help, and future course content based on real questions from parents and scorekeepers.",
  },
  {
    question: "Is this affiliated with GameChanger?",
    answer:
      "No. This is independent training created to help families and teams use the app more confidently.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-800">
              Simple training for sports parents and scorekeepers
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Learn GameChanger
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Beginner-friendly help for sports parents, volunteer scorekeepers,
              and team admins who want to use GameChanger with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#interest"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-700"
              >
                Join the interest list
              </a>
              <a
                href="#how-it-helps"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Independent training. Not affiliated with or endorsed by
              GameChanger.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-helps" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              The problem
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Most people are figuring it out on the fly.
            </h2>
            <div className="mt-6 space-y-4">
              {painPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              What you will learn
            </p>
            <ul className="mt-6 space-y-4">
              {learnItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-emerald-50 p-5 text-sm leading-7 text-emerald-900">
              Start simple: validate demand, answer real questions, and turn the
              most common problems into practical training.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Why this works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Real help from someone who actually uses it.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              This is for parents and team helpers who do not want a technical
              tutorial. They want clear, practical guidance from someone who has
              used GameChanger a lot and can explain it in normal human language.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-950">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="interest" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Early interest
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Want help learning GameChanger?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Join the interest list to hear about beginner training, quick-start
            support, and future resources for sports parents and scorekeepers.
          </p>

          <form className="mx-auto mt-10 grid max-w-2xl gap-4 text-left md:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Role (parent, coach, team admin, scorekeeper)"
              className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none md:col-span-2"
            />
            <textarea
              placeholder="What is your biggest GameChanger frustration?"
              rows={4}
              className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none md:col-span-2"
            />
            <button
              type="submit"
              className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 md:col-span-2"
            >
              I&apos;m interested
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-400">
            For now, this form is a landing-page placeholder. We can wire it up
            to Tally, Google Forms, Formspree, or a custom backend next.
          </p>
        </div>
      </section>
    </main>
  );
}
