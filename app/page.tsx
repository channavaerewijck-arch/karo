"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#050507] text-slate-100 antialiased">
      {/* Glow */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        {/* HEADER */}
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-sm font-semibold tracking-[0.15em] text-amber-300">
              K
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.25em] text-slate-300">KARO</p>
              <p className="text-xs text-slate-500">Digital Studio · 2025</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#work" className="hover:text-amber-300">Work</a>
            <a href="#process" className="hover:text-amber-300">Process</a>
            <a href="#offer" className="hover:text-amber-300">Offer</a>
            <a href="#contact" className="hover:text-amber-300">Contact</a>
            <Link
              href="#contact"
              className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200 hover:bg-amber-400/20"
            >
              Start 7-Day Build
            </Link>
          </nav>
        </header>

        {/* HERO */}
        <section className="grid gap-16 pt-12 md:grid-cols-2 md:items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.span
              variants={fadeInUp}
              className="inline-block rounded-full border border-amber-400/30 bg-amber-400/5 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-amber-300"
            >
              7-Day Website Build
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-4xl font-light leading-tight text-slate-100 md:text-5xl lg:text-6xl"
            >
              <span className="font-semibold text-amber-200">Premium websites</span> voor lokale bedrijven —<br />
              opgeleverd in <span className="font-semibold text-amber-300">7 dagen</span>.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-xl text-slate-400 md:text-lg"
            >
              KARO ontwerpt en bouwt minimal, luxe websites die jouw lokale zaak
              volwassen, betrouwbaar en premium laten voelen — met een strak,
              bewezen proces van één week.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-amber-300 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black hover:bg-amber-200"
              >
                Start je 7-daagse build
              </Link>
              <a href="#work" className="text-xs uppercase tracking-[0.25em] text-slate-300 hover:text-amber-200">
                Bekijk werk
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-amber-500/20 via-transparent to-amber-300/10 blur-2xl" />

            <div className="relative rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-2xl">
              <div className="mb-4 flex items-center gap-2 text-[0.65rem] text-slate-500">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>

              <div className="space-y-6">
                <div className="h-40 rounded-xl bg-gradient-to-br from-amber-300/20 to-slate-800/50" />
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-2">
                      <div className="h-10 rounded bg-slate-800" />
                      <div className="h-2 w-3/4 rounded bg-slate-700" />
                      <div className="h-2 w-1/2 rounded bg-slate-700" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 flex justify-between">
                  <span>Gebouwd voor vertrouwen</span>
                  <span className="text-emerald-400">↑ Meer aanvragen</span>
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* WHY KARO */}
        <section id="why" className="mt-32">
          <h2 className="text-sm uppercase tracking-[0.28em] text-amber-300">Waarom KARO</h2>
          <p className="mt-2 max-w-xl text-xl text-slate-100">
            Luxe, minimal websites die lokale bedrijven premium doen aanvoelen.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "7-Dagse Oplevering",
                desc: "Strak proces. Geen vertragingen. Geen chaos.",
              },
              {
                title: "Gemaakt om te Converteren",
                desc: "Heldere structuur, sterke CTA’s, rust en vertrouwen.",
              },
              {
                title: "Premium Aesthetic",
                desc: "Minimal luxury visuals die jouw merk direct hoger plaatsen.",
              },
              {
                title: "Lokale Business Focus",
                desc: "Specifiek gebouwd voor salons, studio's, kantoren & diensten.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 hover:border-amber-300/40 transition"
              >
                <h3 className="text-sm font-semibold text-amber-200">{item.title}</h3>
                <p className="mt-2 text-xs text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="mt-32">
          <h2 className="text-sm uppercase tracking-[0.28em] text-amber-300">Het 7-Dagen Proces</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {[
              ["Dag 1", "Strategie + Planning"],
              ["Dag 2", "Wireframes"],
              ["Dag 3-4", "Design + Copy"],
              ["Dag 5-7", "Development + Launch"],
            ].map(([d, t]) => (
              <div key={d} className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-xs text-amber-200 uppercase tracking-[0.2em]">{d}</p>
                <p className="mt-2 text-sm text-slate-100">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mt-32">
          <h2 className="text-sm uppercase tracking-[0.28em] text-amber-300">Selected Work</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Boutique Salon", "+42% meer boekingen"],
              ["Advocatenkantoor", "+38% consultaanvragen"],
              ["Renovatiebedrijf", "+54% offerte aanvragen"],
            ].map(([label, result]) => (
              <div key={label} className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <div className="h-32 rounded-xl mb-4 bg-gradient-to-br from-amber-300/10 to-slate-800" />
                <h3 className="text-sm text-slate-100">{label}</h3>
                <p className="text-xs text-emerald-400 mt-1">{result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OFFER */}
        <section id="offer" className="mt-32">
          <h2 className="text-sm uppercase tracking-[0.28em] text-amber-300">7-Day Website Build</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-amber-400/40 bg-amber-400/10 p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-amber-200">Signature Offer</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-100">Premium Website Build</h3>

              <ul className="mt-6 space-y-3 text-xs text-amber-50">
                {[
                  "Strategie & structuur",
                  "Custom luxe homepage",
                  "3-5 kernpagina’s",
                  "Copy refinement",
                  "SEO-ready setup",
                  "CMS setup",
                  "Launch support",
                  "30 dagen naverzorging",
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300 mt-[5px]" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="mt-6 inline-block rounded-full bg-amber-300 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black hover:bg-amber-200"
              >
                Boek een call
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-xs text-slate-300">
              <p className="font-semibold text-slate-100">Perfect voor jou als je:</p>
              <ul className="mt-2 space-y-1">
                <li>• Een lokale service-business runt</li>
                <li>• Premium wil ogen</li>
                <li>• Geen maanden wil wachten</li>
              </ul>

              <p className="mt-6 font-semibold text-slate-100">Niet geschikt als je:</p>
              <ul className="mt-2 space-y-1">
                <li>• Een complex platform nodig hebt</li>
                <li>• DIY / goedkope templates wil</li>
                <li>• Lange projecten verkiest</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-32">
          <h2 className="text-sm uppercase tracking-[0.28em] text-amber-300">Contact</h2>

          <p className="mt-4 text-lg text-slate-100">
            Klaar om een website te laten bouwen die klanten oplevert?
          </p>

          <form className="mt-8 grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Naam"
              className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100"
            />
            <input
              type="text"
              placeholder="Bedrijfsnaam"
              className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100"
            />
            <input
              type="text"
              placeholder="Huidige website (optioneel)"
              className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100"
            />

            <textarea
              placeholder="Wat wil je dat je website voor je doet?"
              rows={4}
              className="md:col-span-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100"
            />

            <button
              type="submit"
              className="md:col-span-2 rounded-full bg-amber-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black hover:bg-amber-200"
            >
              Verstuur
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 border-t border-slate-900 pt-8 text-xs text-slate-500">
          <p className="font-semibold text-slate-300">KARO</p>
          <p className="text-[0.7rem]">Premium websites voor lokale bedrijven — gebouwd in 7 dagen.</p>
          <p className="mt-4 text-[0.65rem]">© {year} KARO. Alle rechten voorbehouden.</p>
        </footer>
      </div>
    </div>
  );
}
