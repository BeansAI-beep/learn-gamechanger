import Image from "next/image";

const painPoints = [
  "VOLUNTOLD to keep score and now everyone assumes you're basically ESPN.",
  "The game is starting, the buttons are everywhere, and you're one tap away from total parent panic.",
  "You just want someone to show you the right workflow before you accidentally become the reason the stats look insane.",
];

const learnItems = [
  "How to set up teams, rosters, and game basics",
  "How scorekeeping actually works without the confusion",
  "How to keep up on game day without spiraling",
  "How to avoid the most common beginner mistakes",
  "How parents, coaches, and team admins can use the app better together",
];

const benefits = [
  "Mini-course lessons built for actual beginners",
  "Clear walkthroughs in normal human language",
  "Real-world tips from Ashley, not generic tech fluff",
  "More confidence before the next game starts",
];

const waitlistReasons = [
  "Be first to hear when the mini course launches",
  "Help shape the lessons based on real parent problems",
  "Get updates on bonus resources and quick-start help",
];

const fakeBonuses = [
  "BONUS: fewer panic taps per inning*",
  "BONUS: less fake nodding when coaches talk about the app*",
  "BONUS: increased odds of looking like you know what you're doing*",
];

const faqs = [
  {
    question: "What is GCGC?",
    answer:
      "GCGC stands for Grump City Game Changer — a slightly ridiculous, very intentional brand for beginner-friendly GameChanger help.",
  },
  {
    question: "What is the first product?",
    answer:
      "The first planned offer is a mini course that helps sports parents and scorekeepers learn GameChanger quickly and confidently.",
  },
  {
    question: "Why a waitlist first?",
    answer:
      "Because the goal right now is to validate the idea, measure interest, and learn what people actually need before building the full course.",
  },
  {
    question: "Who is Ashley?",
    answer:
      "Ashley is a real GameChanger power user who uses the app a lot and knows how to explain it in plain English to people who are overwhelmed.",
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
      <section className="border-b-4 border-black bg-[radial-gradient(circle_at_top,_#fff6a3_0%,_#ffd84d_40%,_#ff9f1c_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center md:px-10">
          <div className="inline-block rounded-full border-4 border-black bg-red-500 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[4px_4px_0_#000] md:px-5 md:text-sm md:tracking-[0.2em]">
            As seen on stressed-out sports parents everywhere
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 pt-2 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-10 md:pb-24 md:pt-6">
          <div>
            <div className="inline-block -rotate-2 border-4 border-black bg-cyan-300 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-black shadow-[6px_6px_0_#000] md:text-sm md:tracking-[0.2em]">
              GCGC • Grump City Game Changer
            </div>

            <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-black md:mt-6 md:text-7xl">
              <span className="block">Grump City</span>
              <span className="block text-red-600">Game Changer</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-bold leading-7 text-slate-900 md:text-2xl md:leading-8">
              Ashley is putting together a beginner-friendly mini course to help
              sports parents and scorekeepers learn GameChanger with less stress.
            </p>

            <div className="mt-6 inline-block rotate-1 border-4 border-black bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-[6px_6px_0_#000] md:px-5 md:text-base">
              Join the waitlist to see if this idea has legs.
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://tally.so/r/0QLDx0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border-4 border-black bg-lime-400 px-8 py-4 text-lg font-black uppercase tracking-wide text-black shadow-[6px_6px_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#000]"
              >
                Save My Spot
              </a>
              <a
                href="#how-it-helps"
                className="inline-flex items-center justify-center rounded-full border-4 border-black bg-white px-8 py-4 text-lg font-black uppercase tracking-wide text-black shadow-[6px_6px_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#000]"
              >
                Learn More
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rotate-[-3deg] border-4 border-black bg-yellow-300 px-3 py-2 text-xs font-black uppercase text-black shadow-[5px_5px_0_#000] md:px-4 md:py-3 md:text-sm">
                No tech degree required
              </div>
              <div className="rotate-[2deg] border-4 border-black bg-lime-400 px-3 py-2 text-xs font-black uppercase text-black shadow-[5px_5px_0_#000] md:px-4 md:py-3 md:text-sm">
                Mildly impressive competence
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-xs font-semibold uppercase tracking-wide text-slate-700 md:text-sm">
              Independent training. Not affiliated with or endorsed by
              GameChanger.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg">
              <div className="relative mx-auto max-w-[340px] md:max-w-md">
                <div className="absolute left-1 top-2 z-20 rotate-[-8deg] border-4 border-black bg-yellow-300 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-black shadow-[5px_5px_0_#000] md:-left-2 md:-top-6 md:px-4 md:text-sm md:tracking-[0.15em]">
                  Website Guy
                </div>
                <div className="absolute right-1 top-10 z-20 rotate-[8deg] border-4 border-black bg-pink-400 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-black shadow-[5px_5px_0_#000] md:-right-3 md:top-10 md:px-4 md:text-sm md:tracking-[0.15em]">
                  Ashley
                </div>
                <Image
                  src="/ashley/ashley-cutout.png"
                  alt="Ashley and website guy"
                  width={3024}
                  height={2529}
                  className="h-auto w-full object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.45)]"
                  priority
                />
              </div>
              <div className="mt-6 border-4 border-black bg-white p-5 shadow-[10px_10px_0_#000] md:p-6">
                <div className="border-4 border-black bg-red-600 px-4 py-2 text-center text-sm font-black uppercase tracking-[0.16em] text-white md:tracking-[0.2em]">
                  Tired of this routine?
                </div>
                <ul className="mt-5 space-y-3 md:mt-6 md:space-y-4">
                  {painPoints.map((item) => (
                    <li
                      key={item}
                      className="border-4 border-black bg-[#fff7cf] p-3 text-sm font-bold leading-6 text-slate-900 md:p-4 md:text-base md:leading-7"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-4 border-black bg-cyan-300 p-4 text-center text-base font-black uppercase text-black md:mt-6 md:text-lg">
                  Good news: Ashley can help.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-helps" className="border-b-4 border-black bg-[#fffdf4]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-4xl">
            <div className="inline-block -rotate-1 border-4 border-black bg-pink-400 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-black shadow-[5px_5px_0_#000]">
              No more guessing
            </div>
            <h2 className="mt-6 text-4xl font-black uppercase leading-tight text-black md:text-6xl">
              A mini course for parents who just want to get this right.
            </h2>
            <p className="mt-6 max-w-3xl text-xl font-bold leading-8 text-slate-800">
              GCGC is the fun wrapper. The actual offer is practical: beginner-
              friendly GameChanger training from Ashley. The first product is
              planned as a simple mini course. But first, we&apos;re building the
              waitlist to validate demand and learn what people need most.
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
                Why join the waitlist now?
              </h3>
              <div className="mt-6 grid gap-4">
                {waitlistReasons.map((item) => (
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
              <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
                <div className="relative mx-auto w-full max-w-[240px]">
                  <div className="absolute -left-3 top-3 z-20 rotate-[-8deg] border-4 border-black bg-lime-400 px-3 py-2 text-xs font-black uppercase tracking-[0.15em] text-black shadow-[4px_4px_0_#000]">
                    Coach energy
                  </div>
                  <Image
                    src="/ashley/ashley-cutout-2.png"
                    alt="Ashley standing and smiling"
                    width={1437}
                    height={2513}
                    className="relative z-10 h-auto w-full object-contain drop-shadow-[0_16px_16px_rgba(0,0,0,0.35)]"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-black uppercase leading-tight text-black">
                    Your unofficial GameChanger translator.
                  </h2>
                  <p className="mt-6 text-lg font-bold leading-8 text-slate-800">
                    Ashley uses GameChanger a lot and is the kind of person who can
                    take something that feels confusing, stressful, and chaotic and
                    explain it in a way that actually makes sense.
                  </p>
                  <p className="mt-4 text-lg font-bold leading-8 text-slate-800">
                    This isn&apos;t about pretending the app is obvious. It&apos;s about making
                    it feel manageable before the next game starts.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-4 border-black bg-[#fff7cf] p-8 shadow-[8px_8px_0_#000]">
              <h3 className="text-3xl font-black uppercase text-red-600">
                Imagine this instead...
              </h3>
              <div className="mt-6 space-y-4 text-lg font-bold leading-8 text-slate-900">
                <p>You show up to the game and actually know where to tap.</p>
                <p>You understand the basic flow instead of guessing in real time.</p>
                <p>You stop worrying about messing everything up in front of the whole team.</p>
                <p>And when someone says, “Can you handle GameChanger?” you can say, “Yep.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-black bg-[#fffdf4]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="border-4 border-black bg-lime-400 p-8 shadow-[8px_8px_0_#000] xl:col-span-1">
              <h2 className="text-4xl font-black uppercase leading-tight text-black">
                But wait... there&apos;s more.
              </h2>
              <p className="mt-5 text-lg font-bold leading-8 text-black">
                The waitlist helps us figure out whether this should become a real
                mini course, what lessons should come first, and what kinds of
                extra resources people actually want.
              </p>
              <p className="mt-4 text-lg font-bold leading-8 text-black">
                So yes, this is a course idea — but right now, the smart move is
                validating demand before building the whole thing.
              </p>
            </div>

            <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0_#000] xl:col-span-1">
              <h3 className="text-2xl font-black uppercase text-red-600">
                Why this is different
              </h3>
              <div className="mt-6 grid gap-4">
                {benefits.map((item) => (
                  <div key={item} className="border-4 border-black bg-[#fff7cf] p-4 text-lg font-black text-black">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-4 border-black bg-pink-400 p-8 shadow-[8px_8px_0_#000] xl:col-span-1">
              <h3 className="text-2xl font-black uppercase text-black">
                Special fake bonuses
              </h3>
              <div className="mt-6 grid gap-4">
                {fakeBonuses.map((item) => (
                  <div key={item} className="border-4 border-black bg-white p-4 text-lg font-black text-black">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm font-black uppercase text-black">
                *Fake marketing claims. Real educational intent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-black bg-cyan-300">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0_#000]">
              <h2 className="text-4xl font-black uppercase text-red-600">
                Before GCGC
              </h2>
              <ul className="mt-6 space-y-4 text-lg font-bold leading-8 text-slate-900">
                <li>• Random tapping</li>
                <li>• Quiet panic</li>
                <li>• Confusing menus</li>
                <li>• Hoping nobody notices</li>
              </ul>
            </div>
            <div className="border-4 border-black bg-yellow-300 p-8 shadow-[8px_8px_0_#000]">
              <h2 className="text-4xl font-black uppercase text-black">
                After GCGC
              </h2>
              <ul className="mt-6 space-y-4 text-lg font-bold leading-8 text-black">
                <li>• Better workflow</li>
                <li>• Less panic</li>
                <li>• Clearer understanding</li>
                <li>• Mildly impressive competence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf4]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="inline-block rotate-1 border-4 border-black bg-yellow-300 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-black shadow-[5px_5px_0_#000]">
            Frequently asked stuff
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
            Join now if you want first dibs when the mini course drops
          </div>
          <h2 className="mt-6 text-4xl font-black uppercase leading-tight md:text-6xl">
            Get on Ashley&apos;s waitlist.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-bold leading-7 text-slate-300 md:text-xl md:leading-8">
            Join the waitlist for beginner-friendly GameChanger training and be
            first to hear when Ashley&apos;s mini course is ready.
          </p>

          <div className="mx-auto mt-10 max-w-3xl border-4 border-white bg-white p-8 text-slate-950 shadow-[10px_10px_0_#22c55e]">
            <div className="border-4 border-black bg-yellow-300 px-4 py-3 text-center text-lg font-black uppercase text-black">
              Ready to claim your spot in Grump City?
            </div>
            <div className="mt-6 grid gap-4 text-left md:grid-cols-2">
              <div className="border-4 border-black bg-[#fff7cf] p-4 text-base font-black uppercase text-black">
                ✓ Join the waitlist
              </div>
              <div className="border-4 border-black bg-[#fff7cf] p-4 text-base font-black uppercase text-black">
                ✓ Share your biggest frustration
              </div>
              <div className="border-4 border-black bg-[#fff7cf] p-4 text-base font-black uppercase text-black">
                ✓ Help shape the mini course
              </div>
              <div className="border-4 border-black bg-[#fff7cf] p-4 text-base font-black uppercase text-black">
                ✓ Be first to hear when it launches
              </div>
            </div>

            <a
              href="https://tally.so/r/0QLDx0"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-8 inline-flex items-center justify-center rounded-full border-4 border-black bg-lime-400 px-8 py-4 text-lg font-black uppercase tracking-wide text-black shadow-[6px_6px_0_#ef4444] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#ef4444]"
            >
              Save my spot
            </a>

            <p className="mt-5 text-sm font-black uppercase tracking-wide text-slate-600">
              You&apos;ll be taken to the official GCGC waitlist form on Tally.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
