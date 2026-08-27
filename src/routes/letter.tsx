import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [
      { title: "A Letter for Noor — From My Heart" },
      {
        name: "description",
        content:
          "A handwritten letter for Noor — my honest words about how much she means to me and why I hope we can start again.",
      },
      {
        property: "og:title",
        content: "A Letter for Noor — From My Heart",
      },
      {
        property: "og:description",
        content:
          "A handwritten letter for Noor — my honest words about how much she means to me and why I hope we can start again.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LetterPage,
});

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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}

const LETTER_PARAGRAPHS = [
  "Noor,",
  "I have started this letter a hundred times in my head, and every time the words felt too small for what I wanted to say. But tonight I decided that even small words are better than silence, so here they are — honest, imperfect, and entirely from me.",
  "These past three weeks have been the loudest quiet I have ever known. The mornings feel slower, the nights feel longer, and everywhere I look I see pieces of you — a song you would hum, a corner of the city we used to walk through, a thought I would normally save just for you. I did not realize how much of my world was built around your presence until it was gone.",
  "I am not writing this to pretend that everything was perfect before. I know I made mistakes. I was careless with your feelings in moments when I should have been gentle. I let pride and stubbornness speak when I should have listened. I took your warmth for granted on days when you needed mine the most. Looking back, I can see every place where I should have chosen you more carefully, and I am truly sorry for each one.",
  "But I also want you to know that my feelings for you have never changed. You are still the person I want to share my good news with first. You are still the voice I want to hear when the day has been hard. You are still the only future that ever felt right to me. No one else laughs the way you do, no one else listens the way you do, and no one else makes ordinary moments feel like gifts the way you do.",
  "I am asking for another chance — not to go back to exactly what we were, but to build something better. I want to learn how to love you more patiently, how to hold your heart more carefully, and how to show up for you even when things are difficult. I want us to talk through the hard moments instead of walking away from them. I want to earn back the trust I lost, one small act of love at a time.",
  "If you are willing, I would like to start with a conversation — no pressure, no expectations, just the two of us being honest about where we go from here. And if you are not ready yet, I will wait. You are worth waiting for.",
  "Whatever you decide, I hope you read this and know that you are deeply loved, deeply missed, and deeply cherished. You deserve the kind of love that feels like home, and I want nothing more than to be the one who gives that to you again.",
  "With all my heart,",
  "Always yours",
];

function LetterPage() {
  const pageRef = useReveal();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-apology-cream px-6 py-14 text-apology-ink sm:px-8 lg:px-12">
      <div className="apology-glow" />

      <div ref={pageRef as never} className="relative mx-auto max-w-2xl">
        <header className="apology-reveal mb-10 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-apology-rose transition-colors hover:text-apology-ink"
          >
            <span aria-hidden="true">←</span> Back to the apology
          </Link>
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-apology-rose/80">
            A letter for
          </span>
        </header>

        <article className="apology-reveal apology-reveal-letter rotate-[-0.5deg] rounded-2xl bg-apology-paper p-8 shadow-xl shadow-apology-ink/5 ring-1 ring-apology-ink/5 sm:p-12">
          <div className="mx-auto max-w-lg">
            <h1 className="mb-8 text-center font-serif text-5xl font-medium italic leading-tight text-apology-ink sm:text-6xl">
              Noor
            </h1>

            <div className="space-y-6 font-hand text-xl leading-relaxed text-apology-ink/90 sm:text-2xl sm:leading-relaxed">
              {LETTER_PARAGRAPHS.map((text, index) => {
                const isSignature = index === 0 || index >= LETTER_PARAGRAPHS.length - 2;
                if (isSignature) {
                  return (
                    <p key={index} className="font-hand text-2xl text-apology-ink sm:text-3xl">
                      {text}
                    </p>
                  );
                }
                return <p key={index}>{text}</p>;
              })}
            </div>

            <div className="mt-12 flex justify-end">
              <span
                aria-hidden="true"
                className="font-hand text-4xl text-apology-rose/60"
              >
                ♡
              </span>
            </div>
          </div>
        </article>

        <footer className="apology-reveal mt-14 text-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-apology-ink/15 bg-transparent px-8 py-3.5 font-sans text-sm font-medium uppercase tracking-widest text-apology-ink transition-all duration-200 hover:bg-apology-ink hover:text-apology-cream"
          >
            Return to the main page
          </Link>
        </footer>
      </div>
    </main>
  );
}
