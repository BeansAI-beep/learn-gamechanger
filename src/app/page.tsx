const painPoints = [
  "VOLUNTOLD to keep score and now everyone thinks you know what you're doing.",
  "Buttons everywhere. Parents watching. Game starting. Mild panic setting in.",
  "You just want somebody to show you the right workflow before you accidentally ruin the stats.",
];

const learnItems = [
  "How to set up teams, rosters, and game basics",
  "How scorekeeping actually works without the confusion",
  "How to stay calm and keep up on game day",
  "How to avoid the most common beginner mistakes",
  "How parents, coaches, and team admins can use the app better together",
];

const benefits = [
  "Easy-to-follow walkthroughs",
  "Real-world tips from an experienced user",
  "Built for busy parents, not tech nerds",
  "Fast confidence before the next game starts",
];

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "Sports parents, volunteer scorekeepers, team moms and dads, coaches, and team admins who want to stop guessing and start feeling confident.",
  },
  {
    question: "Who is Ashley?",
    answer:
      "Ashley is a real GameChanger power user who uses the app a lot and knows how to explain it in plain English to people who are overwhelmed.",
  },
  {
    question: "Is this only for beginners?",
    answer:
      "Mostly yes. The sweet spot is helping people get comfortable fast, but even regular users can learn cleaner, easier workflows.",
  },
  {
    question: "Is this affiliated with GameChanger?",
    answer:
      "Nope. This is independent training and is not affiliated with or endorsed by GameChanger.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff7cf] text-slate-900">
      <section className="border-b-4 border-black bg-[radial-gradient(circle_at_top,_#fff6a3_0%,_#ffd84d_45%,_#ff9f1c_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center md:px-10">
          <div className="inline-block rounded-full border-4 border-black bg-red-500 px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[4px_4px_0_#000]">
            As seen on stressed-out sports parents
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-4 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pb-24 md:pt-6">
          <div>
            <div className="inline-block -rotate-2 border-4 border-black bg-cyan-300 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-black shadow-[6px_6px_0_#000]">
              Simple training for sports parents and scorekeepers
            </div>

            <h1 className="mt-6 text-5xl font-black uppercase leading-none tracking-tight text-black md:text-7xl">
              Learn
              <span className="block text-red-600">GameChanger</span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl font-bold leading-8 text-slate-900 md:text-2xl">
              The beginner-friendly guide for parents, volunteers, and team
              admins who want to use GameChanger without freaking out on game
              day.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#interest"
                className="inline-flex items-center justify-center rounded-full border-4 border-black bg-lime-400 px-8 py-4 text-lg font-black uppercase tracking-wide text-black shadow-[6px_6px_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#000]"
              >
                Yes, I need this
              </a>
              <a
                href="#how-it-helps"
                className="inline-flex items-center justify-center rounded-full border-4 border-black bg-white px-8 py-4 text-lg font-black uppercase tracking-wide text-black shadow-[6px_6px_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#000]"
              >
                Show me more
              </a>
            </div>

            <div className="mt-8 inline-block rotate-1 border-4 border-black bg-white px-5 py-3 text-base font-bold text-slate-900 shadow-[6px_6px_0_#000]">
              Hosted by <span className="text-red-600">Ashley</span>, a real
              GameChanger power user who actually knows what she&apos;s doing.
            </div>

            <p className="mt-5 max-w-2xl text-sm font-semibold uppercase tracking-wide text-slate-700">
              Independent training. Not affiliated with or endorsed by
              GameChanger.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rotate-2 border-4 border-black bg-white p-6 shadow-[10px_10px_0_#000]">
              <div className="border-4 border-black bg-red-600 px-4 py-2 text-center text-sm font-black uppercase tracking-[0.2em] text-white">
                Wait... does this sound familiar?
              </div>
              <ul className="mt-6 space-y-4">
                {painPoints.map((item) => (
                  <li
                    key={item}
                    className="border-4 border-black bg-[#fff7cf] p-4 text-base font-bold leading-7 text-slate-900"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-4 border-black bg-cyan-300 p-4 text-center text-lg font-black uppercase text-black">
                Good news: Ashley can help.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-helps" className="border-b-4 border-black bg-[#fffdf4]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-4xl">
            <div className="inline-block -rotate-1 border-4 border-black bg-pink-400 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-black shadow-[5px_5px_0_#000]">
              Stop winging it
            </div>
            <h2 className="mt-6 text-4xl font-black uppercase leading-tight text-black md:text-6xl">
              Learn the app before the pressure is on.
            </h2>
            <p className="mt-6 max-w-3xl text-xl font-bold leading-8 text-slate-800">
              This is practical, no-jargon help for people who got thrown into
              scorekeeping, team setup, or game-day app duties and just want the
              easiest path to competence.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0_#000]">
              <h3 className="text-2xl font-black uppercase text-red-600">
                What Ashley will teach
              </h3>
              <ul className="mt-6 space-y-4">
                {learnItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg font-bold text-slate-900">
                    <span className="mt-2 inline-block h-3.5 w-3.5 shrink-0 rounded-full border-2 border-black bg-lime-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-4 border-black bg-cyan-300 p-8 shadow-[8px_8px_0_#000]">
              <h3 className="text-2xl font-black uppercase text-black">
                Why this is different
              </h3>
              <div className="mt-6 grid gap-4">
                {benefits.map((item) => (
                  <div key={item} className="border-4 border-black bg-white p-4 text-lg font-black text-black">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-black bg-[linear-gradient(135deg,_#ff4d6d_0%,_#ff9f1c_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0_#000]">
              <div className="inline-block border-4 border-black bg-yellow-300 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-black">
                Meet Ashley
              </div>
              <h2 className="mt-6 text-4xl font-black uppercase leading-tight text-black">
                Your unofficial GameChanger translator.
              </h2>
              <p className="mt-6 text-lg font-bold leading-8 text-slate-800">
                Ashley uses GameChanger a lot and is the kind of person who can
                take something that feels confusing, stressful, and chaotic and
                explain it in a way that actually makes sense.
              </p>
              <p className="mt-4 text-lg font-bold leading-8 text-slate-800">
                If you&apos;re a parent or volunteer thinking, “I should probably know
                this already,” this is for you.
              </p>
            </div>

            <div className="border-4 border-black bg-[#fff7cf] p-8 shadow-[8px_8px_0_#000]">
              <h3 className="text-3xl font-black uppercase text-red-600">
                Imagine this instead...
              </h3>
              <div className="mt-6 space-y-4 text-lg font-bold leading-8 text-slate-900">
                <p>
                  You show up to the game and actually know where to tap.
                </p>
                <p>
                  You understand the basic flow instead of guessing in real time.
                </p>
                <p>
                  You stop worrying about messing everything up in front of the
                  whole team.
                </p>
                <p>
                  And when someone says, “Can you handle GameChanger?” you can say,
                  “Yep.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf4]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="inline-block rotate-1 border-4 border-black bg-lime-400 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-black shadow-[5px_5px_0_#000]">
            Frequently asked stuff
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-4 border-black bg-white p-7 shadow-[8px_8px_0_#000]"
              >
                <h3 className="text-2xl font-black uppercase text-black">{faq.question}</h3>
                <p className="mt-4 text-lg font-bold leading-8 text-slate-800">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="interest" className="border-t-4 border-black bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:px-10">
          <div className="inline-block -rotate-1 border-4 border-white bg-red-600 px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[5px_5px_0_#22c55e]">
            Don&apos;t wait for the next game-day panic spiral
          </div>
          <h2 className="mt-6 text-4xl font-black uppercase leading-tight md:text-6xl">
            Get on Ashley&apos;s list.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-bold leading-8 text-slate-300">
            Join the interest list for beginner training, quick-start help, and
            future GameChanger resources built for real sports parents and
            scorekeepers.
          </p>

          <form className="mx-auto mt-10 grid max-w-3xl gap-4 text-left md:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border-4 border-white bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-yellow-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-2xl border-4 border-white bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-yellow-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Role (parent, coach, team admin, scorekeeper)"
              className="rounded-2xl border-4 border-white bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-yellow-300 focus:outline-none md:col-span-2"
            />
            <textarea
              placeholder="What is your biggest GameChanger frustration?"
              rows={4}
              className="rounded-2xl border-4 border-white bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-yellow-300 focus:outline-none md:col-span-2"
            />
            <button
              type="submit"
              className="rounded-full border-4 border-white bg-lime-400 px-6 py-4 text-lg font-black uppercase tracking-wide text-black shadow-[6px_6px_0_#ef4444] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#ef4444] md:col-span-2"
            >
              I&apos;m interested
            </button>
          </form>

          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Placeholder form for now — next we can connect this to Tally,
            Formspree, Google Forms, or a custom form backend.
          </p>
        </div>
      </section>
    </main>
  );
}
