import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImage from "../assets/apology-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I'm Sorry, Noor — A Message From My Heart" },
      {
        name: "description",
        content:
          "A heartfelt apology for Noor. I hope this small page can begin to show how sorry I am and how much you mean to me.",
      },
      {
        property: "og:title",
        content: "I'm Sorry, Noor — A Message From My Heart",
      },
      {
        property: "og:description",
        content:
          "A heartfelt apology for Noor. I hope this small page can begin to show how sorry I am and how much you mean to me.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const PETALS = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 8.5 + 4) % 96}%`,
  size: 8 + ((i * 5) % 12),
  duration: 16 + ((i * 3) % 12),
  delay: -(i * 2.4),
  opacity: 0.25 + ((i % 4) * 0.12),
}));

function useReveal() {
  const ref = useRef<HTMLElement | null>(null);

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

function Index() {
  const [forgiven, setForgiven] = useState(false);
  const articleRef = useReveal();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-apology-cream px-6 py-16 text-apology-ink sm:px-8 lg:px-12">
      <div className="apology-glow" />

      <div aria-hidden="true">
        {PETALS.map((p, i) => (
          <span
            key={i}
            className="apology-petal"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <article ref={articleRef as never} className="relative mx-auto max-w-md">
        <header className="text-center">
          <span
            className="apology-reveal block font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-apology-rose/80"
            style={{ animationDelay: "0.1s" }}
          >
            A message for
          </span>
          <h1
            className="apology-reveal mt-3 font-serif text-7xl font-medium italic leading-none sm:text-8xl"
            style={{ animationDelay: "0.3s" }}
          >
            Noor
          </h1>
          <div className="apology-rule mx-auto mt-6 h-px w-12 bg-apology-rose/30" />
        </header>

        <section className="mt-16 space-y-8">
          <p
            className="apology-reveal text-balance font-serif text-2xl font-medium italic leading-relaxed"
            style={{ animationDelay: "0.55s" }}
          >
            I'm sorry, Noor. These past three weeks without you have shown me
            how much you truly mean to me.
          </p>
          <p
            className="apology-reveal text-base leading-loose text-apology-ink/85"
            style={{ animationDelay: "0.75s" }}
          >
            I know we ended things, and I don't take that lightly. I let you down,
            and seeing you hurt is the last thing I ever want. In the moments that
            mattered, I should have been softer, more patient, and more present.
            You deserve someone who makes you feel safe even on the hard days —
            and I fell short of that.
          </p>
          <p
            className="apology-reveal text-base leading-loose text-apology-ink/85"
            style={{ animationDelay: "0.9s" }}
          >
            But please know this: you are still the best part of my days, and I'm
            not ready to let one mistake turn into a distance between us. I'm asking
            for another chance — not to go back to how things were, but to start
            fresh, with more honesty, more care, and more love.
          </p>
        </section>

        <div className="apology-reveal mt-10 text-center">
          <Link
            to="/letter"
            className="inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-apology-rose underline-offset-4 transition-colors hover:text-apology-ink hover:underline"
          >
            Read my full letter to you
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <figure className="apology-reveal apology-reveal-letter mt-14 rotate-[-1deg] rounded-2xl bg-apology-paper p-3 shadow-xl shadow-apology-ink/5 ring-1 ring-apology-ink/5 transition-transform duration-500 hover:rotate-0 hover:scale-[1.01]">
          <img
            src={heroImage}
            alt="A handwritten letter, candlelight, and rose petals — the feeling I want to give you again"
            className="w-full rounded-xl object-cover"
            loading="eager"
          />
          <figcaption className="mt-4 px-1 pb-1 text-center">
            <p className="font-hand text-2xl leading-snug text-apology-ink/70">
              I want back to the warmth we always find together.
            </p>
          </figcaption>
        </figure>

        <section className="mt-16">
          <h2 className="apology-reveal text-center font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-apology-rose/80">
            My promises to you
          </h2>
          <ul className="mt-8 space-y-6">
            {[
              "To listen before I speak — especially when emotions are high.",
              "To never let a day end with us feeling far apart.",
              "To start fresh with honesty, gentleness, and full commitment.",
              "To choose us, every single day, no matter what comes.",
            ].map((promise, i) => (
              <li
                key={promise}
                className="apology-reveal flex items-start gap-4"
                style={{ animationDelay: `${0.15 * (i + 1)}s` }}
              >
                <span className="apology-heart mt-1.5 h-2 w-2 shrink-0 rounded-full bg-apology-rose" />
                <span className="text-base leading-relaxed text-apology-ink/90">
                  {promise}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="apology-reveal mt-20 text-center">
          {forgiven ? (
            <div className="animate-scale-in rounded-2xl border border-apology-rose/20 bg-apology-rose-soft/40 p-8">
              <p className="font-serif text-2xl font-medium italic text-apology-ink">
                Thank you, Noor.
              </p>
              <p className="mt-3 text-sm text-apology-ink/70">
                I'll spend every day earning this kindness you've given me.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="mb-6 font-serif text-xl italic text-apology-ink/80">
                I want another chance to love you the way you deserve. Will
                you let us start again?
              </p>
              <button
                onClick={() => setForgiven(true)}
                className="apology-heart inline-flex w-full items-center justify-center rounded-full bg-apology-ink py-4 text-sm font-medium uppercase tracking-widest text-apology-cream shadow-lg shadow-apology-ink/15 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                I forgive you — let's try again
              </button>
              <a
                href="sms:?body=Noor, I read your apology. Can we talk?"
                className="inline-flex w-full items-center justify-center rounded-full border border-apology-ink/15 bg-transparent py-4 text-sm font-medium text-apology-ink transition-colors duration-200 hover:bg-apology-ink/5"
              >
                I need a little time — let's talk
              </a>
            </div>
          )}
        </section>

        <footer className="apology-reveal mt-24 text-center">
          <div className="mx-auto mb-5 h-px w-10 bg-apology-rose/30" />
          <p className="font-serif text-2xl italic text-apology-ink/80">
            With all my love,
          </p>
          <p className="mt-1 font-hand text-4xl text-apology-ink">Always yours</p>
        </footer>
      </article>
    </main>
  );
}
