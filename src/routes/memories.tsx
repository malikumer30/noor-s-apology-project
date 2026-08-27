import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import img365 from "../assets/IMG_1034.png.asset.json";
import img200 from "../assets/IMG_3855.png.asset.json";
import img500 from "../assets/IMG_4326.jpeg.asset.json";
import img600 from "../assets/IMG_4445.jpeg.asset.json";

export const Route = createFileRoute("/memories")({
  head: () => ({
    meta: [
      { title: "Our Memories — Moments With Noor" },
      {
        name: "description",
        content:
          "A timeline of our favourite moments together — streaks, milestones, and the little days that meant everything.",
      },
      { property: "og:title", content: "Our Memories — Moments With Noor" },
      {
        property: "og:description",
        content:
          "A timeline of our favourite moments together — streaks, milestones, and the little days that meant everything.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MemoriesPage,
});

const MOMENTS = [
  {
    src: img200.url,
    title: "200 days",
    caption:
      "Two hundred days in and you were already my favourite part of every single one.",
    alt: "Snapchat streak of 200 days with Noor",
  },
  {
    src: img365.url,
    title: "365 days",
    caption:
      "A whole year of you. Best friends, every single day, without missing one.",
    alt: "Snapchat streak of 365 days with Noor",
  },
  {
    src: img500.url,
    title: "500 days, my love",
    caption:
      "The most beautiful days of my life — we fought, we faced bad times, and we still stayed together.",
    alt: "Message celebrating 500 days together with Noor",
  },
  {
    src: img600.url,
    title: "600 days",
    caption:
      "Six hundred days of us. I'm not ready to let that story end here.",
    alt: "Snapchat streak of 600 days with Noor",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = Array.from(
      root.querySelectorAll<HTMLElement>(".apology-reveal"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}

function MemoriesPage() {
  const ref = useReveal();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-apology-cream px-6 py-16 text-apology-ink sm:px-8 lg:px-12">
      <div className="apology-glow" />

      <div ref={ref} className="relative mx-auto max-w-md">
        <header className="text-center">
          <span className="apology-reveal block font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-apology-rose/80">
            Everything we built
          </span>
          <h1 className="apology-reveal mt-3 font-serif text-5xl font-medium italic leading-tight">
            Our memories
          </h1>
          <div className="apology-rule mx-auto mt-6 h-px w-12 bg-apology-rose/30" />
          <p className="apology-reveal mt-6 text-base leading-loose text-apology-ink/85">
            Some of my favourite moments with you, Noor. Look how far we came
            together.
          </p>
        </header>

        <ol className="relative mt-14 space-y-14 border-l border-apology-rose/25 pl-7">
          {MOMENTS.map((m) => (
            <li key={m.title} className="apology-reveal relative">
              <span className="apology-heart absolute -left-[35px] top-2 h-3 w-3 rounded-full bg-apology-rose ring-4 ring-apology-cream" />
              <h2 className="font-hand text-3xl leading-none text-apology-ink">
                {m.title}
              </h2>
              <figure className="mt-4 rotate-[-1deg] rounded-2xl bg-apology-paper p-3 shadow-xl shadow-apology-ink/5 ring-1 ring-apology-ink/5 transition-transform duration-500 hover:rotate-0 hover:scale-[1.01]">
                <img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  className="w-full rounded-xl object-cover"
                />
                <figcaption className="mt-3 px-1 pb-1 text-sm leading-relaxed text-apology-ink/75">
                  {m.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>

        <section className="apology-reveal mt-20 text-center">
          <p className="font-serif text-xl italic text-apology-ink/80">
            All of this is still ours to continue.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              to="/letter"
              className="inline-flex w-full items-center justify-center rounded-full bg-apology-ink py-4 text-sm font-medium uppercase tracking-widest text-apology-cream shadow-lg shadow-apology-ink/15 transition-transform duration-200 hover:scale-[1.02]"
            >
              Read my letter
            </Link>
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-full border border-apology-ink/15 py-4 text-sm font-medium text-apology-ink transition-colors duration-200 hover:bg-apology-ink/5"
            >
              Back to my apology
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
