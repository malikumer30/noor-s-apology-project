import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

function Index() {
  const [forgiven, setForgiven] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-apology-cream px-6 py-16 text-apology-ink sm:px-8 lg:px-12">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_10%,_oklch(100%_0_0_/_0.5)_0%,_transparent_60%)]" />

      <article className="relative mx-auto max-w-md">
        <header className="text-center">
          <span className="block font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-apology-rose/80">
            A message for
          </span>
          <h1 className="mt-3 font-serif text-7xl font-medium italic leading-none sm:text-8xl">
            Noor
          </h1>
          <div className="mx-auto mt-6 h-px w-12 bg-apology-rose/30" />
        </header>

        <section className="mt-16 space-y-8">
          <p className="text-balance font-serif text-2xl font-medium italic leading-relaxed">
            I'm sorry. I know words alone can't mend what I broke, but I hope
            they can be a beginning.
          </p>
          <p className="text-base leading-loose text-apology-ink/85">
            I let you down, and seeing you hurt is the last thing I ever want. In
            the moments that mattered, I should have been softer, more patient,
            and more present. You deserve someone who makes you feel safe even on
            the hard days — and today, I fell short of that.
          </p>
          <p className="text-base leading-loose text-apology-ink/85">
            But please know this: you are the best part of my days, and I'm not
            going to let one mistake turn into a distance between us. I want to
            listen, to learn, and to be the person you can lean on again.
          </p>
        </section>

        <figure className="mt-14 rotate-[-1deg] rounded-2xl bg-apology-paper p-3 shadow-xl shadow-apology-ink/5 ring-1 ring-apology-ink/5 transition-transform duration-500 hover:rotate-0 hover:scale-[1.01]">
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
          <h2 className="text-center font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-apology-rose/80">
            My promises to you
          </h2>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-apology-rose" />
              <span className="text-base leading-relaxed text-apology-ink/90">
                To listen before I speak — especially when emotions are high.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-apology-rose" />
              <span className="text-base leading-relaxed text-apology-ink/90">
                To never let a day end with us feeling far apart.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-apology-rose" />
              <span className="text-base leading-relaxed text-apology-ink/90">
                To be honest, gentle, and fully yours — every single day.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-20 text-center">
          {forgiven ? (
            <div className="rounded-2xl border border-apology-rose/20 bg-apology-rose-soft/40 p-8">
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
                If your heart has any room left, can we try again?
              </p>
              <button
                onClick={() => setForgiven(true)}
                className="inline-flex w-full items-center justify-center rounded-full bg-apology-ink py-4 text-sm font-medium uppercase tracking-widest text-apology-cream shadow-lg shadow-apology-ink/15 transition-transform duration-200 active:scale-[0.98]"
              >
                I forgive you
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

        <footer className="mt-24 text-center">
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
