import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Github, Linkedin, Phone, MapPin, Award, Code2, Briefcase, GraduationCap, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anujkumar Yadav — Software Engineer" },
      { name: "description", content: "Software Engineer at RxMen building user-facing healthcare products with Next.js, React, and TypeScript. 2+ years shipping zero-to-one." },
      { property: "og:title", content: "Anujkumar Yadav — Software Engineer" },
      { property: "og:description", content: "Software Engineer at RxMen building user-facing healthcare products with Next.js, React, and TypeScript." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Anujkumar Yadav",
        jobTitle: "Software Engineer",
        worksFor: { "@type": "Organization", name: "RxMen" },
        email: "hello@aanuj.com",
        telephone: "+91 90960 20595",
        url: "https://aanuj.com",
        sameAs: [
          "https://github.com/aanujyadav",
          "https://linkedin.com/in/aanujyadav",
        ],
      }),
    }],
  }),
  component: Portfolio,
});

const skills = {
  Frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Shadcn", "Material UI"],
  Languages: ["JavaScript", "TypeScript"],
  "Backend & Data": ["MySQL", "Socket.io", "REST APIs"],
  "Tools & Cloud": ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Postman"],
};

const experience = [
  {
    role: "Software Engineer",
    company: "RxMen",
    period: "Aug 2024 — Present",
    note: "One of the earliest engineers building and scaling from launch.",
    points: [
      "Re-architected the frontend in Next.js — PageSpeed Insights 60 → 90+ via SSR, Core Web Vitals, SEO, and metadata automation.",
      "Owned end-to-end delivery of patient onboarding, consultation, payments, and engagement workflows.",
      "Partnered directly with founders, product, and design to refine scope and ship faster.",
      "Evaluated and integrated critical vendors — payments, calling infrastructure, and operations tooling.",
    ],
  },
  {
    role: "Frontend Developer — Intern",
    company: "RaptorX",
    period: "Mar 2024 — Jul 2024",
    points: [
      "Built core dashboard modules — logs, webhooks, settings — with full REST API integration.",
      "Migrated the marketing website to Next.js, improving load speed and search visibility.",
    ],
  },
];

const projects = [
  {
    name: "SkillFlare",
    tag: "MERN · Team of 3",
    period: "Sep 2023 — Present",
    description:
      "Full-stack learning platform with course publishing, in-browser coding, ZEGOCLOUD live classes, and Razorpay payments. Led the instructor interface and landing page.",
  },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-60" />

      {/* Nav */}
      <header className="sticky top-4 mx-4 rounded-full z-40 backdrop-blur-md bg-background/60 border-b border-border/50">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="#top" className="font-display text-2xl">aanuj<span className="text-accent">.</span></a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-foreground">About</a>
            <a href="#work" className="transition hover:text-foreground">Work</a>
            <a href="#projects" className="transition hover:text-foreground">Projects</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </div>
          <a
            href="mailto:hello@aanuj.com"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm transition hover:border-primary hover:text-primary"
          >
            Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="pt-14 pb-20 md:pt-36 md:pb-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for collaborations
          </div>
          <h1 className="font-display mt-6 text-5xl md:text-7xl">
            Anujkumar Yadav.
            <br />
            <span className="text-gradient italic">Software Engineer</span> shipping
            <br />
            healthcare from zero to one.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            I build user-facing digital products. Currently at{" "}
            <a href="https://rxmen.com" target="_blank" rel="noreferrer" className="text-foreground underline decoration-primary decoration-2 underline-offset-4">
              RxMen
            </a>
            , a sexual wellness startup, where I own product features end-to-end across patient onboarding, consultation, and payments.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
            >
              See my work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@aanuj.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm transition hover:border-primary"
            >
              <Mail className="h-4 w-4" /> hello@aanuj.com
            </a>
          </div>
        </section>

        {/* About / Stats */}
        <section id="about" className="grid gap-6 border-t border-border/60 py-10 md:grid-cols-3">
          {[
            { k: "2+", v: "Years building production products" },
            { k: "90+", v: "PageSpeed score after re-architecture" },
            { k: "0→1", v: "Patient workflows owned end-to-end" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-5xl text-gradient">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="border-t border-border/60 py-10">
          <SectionHeader icon={<Code2 className="h-4 w-4" />} eyebrow="Toolkit" title="Things I build with" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-2xl border border-border/60 bg-card/40 p-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{group}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="rounded-full border border-border bg-background/60 px-3 py-1 text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="work" className="border-t border-border/60 py-10">
          <SectionHeader icon={<Briefcase className="h-4 w-4" />} eyebrow="Experience" title="Where I've shipped" />
          <div className="mt-10 space-y-4">
            {experience.map((e) => (
              <article
                key={e.company}
                className="group rounded-2xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/60 md:p-8"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl md:text-3xl">
                    {e.role} <span className="text-muted-foreground">·</span>{" "}
                    <span className="text-gradient">{e.company}</span>
                  </h3>
                  <span className="text-sm text-muted-foreground">{e.period}</span>
                </div>
                {e.note && <p className="mt-2 text-sm italic text-muted-foreground">{e.note}</p>}
                <ul className="mt-5 space-y-2.5 text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span className="text-[15px] leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-border/60 py-10">
          <SectionHeader icon={<Sparkles className="h-4 w-4" />} eyebrow="Side work" title="Selected projects" />
          <div className="mt-10 grid gap-6">
            {projects.map((p) => (
              <article key={p.name} className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-accent">{p.tag}</div>
                <p className="mt-4 text-muted-foreground">{p.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Achievements + Education */}
        <section className="grid gap-6 border-t border-border/60 py-10 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
            <SectionHeader icon={<Award className="h-4 w-4" />} eyebrow="Recognition" title="Achievements" small />
            <div className="mt-6">
              <div className="font-medium">Frontend Excellence & Ownership Award</div>
              <div className="text-sm text-muted-foreground">RxMen · Dec 2025</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Recognized for exceptional ownership, consistency, and high-quality feature delivery with strong focus on performance and UX.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
            <SectionHeader icon={<GraduationCap className="h-4 w-4" />} eyebrow="Background" title="Education" small />
            <div className="mt-6 space-y-5">
              <div>
                <div className="font-medium">B.Tech, Computer Engineering</div>
                <div className="text-sm text-muted-foreground">Bajaj Institute of Technology, Wardha · 2021 — 2024</div>
              </div>
              <div>
                <div className="font-medium">Diploma, Computer Science</div>
                <div className="text-sm text-muted-foreground">Agnihotri School of Technology, Wardha · 2018 — 2021</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border/60 py-10">
          <div
            className="overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-5 md:p-16"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="font-display text-4xl md:text-6xl">
              Let's build something <span className="text-gradient italic">people use</span>.
            </div>
            <p className="mt-5 max-w-xl text-muted-foreground">
              I'm interested in product-led teams shipping real-world healthcare and consumer software. Reach out — I reply to every message.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 md:max-w-2xl">
              <ContactRow icon={<Mail className="h-4 w-4" />} label="hello@aanuj.com" href="mailto:hello@aanuj.com" />
              <ContactRow icon={<Phone className="h-4 w-4" />} label="+91 90960 20595" href="tel:+919096020595" />
              <ContactRow icon={<Github className="h-4 w-4" />} label="github.com/aanujyadav" href="https://github.com/aanujyadav" />
              <ContactRow icon={<Linkedin className="h-4 w-4" />} label="linkedin.com/in/aanujyadav" href="https://linkedin.com/in/aanujyadav" />
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 py-8 text-sm text-muted-foreground">
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" /> India · Available worldwide
          </div>
          <div>© {new Date().getFullYear()} Anujkumar Yadav</div>
        </footer>
      </main>
    </div>
  );
}

function SectionHeader({
  icon, eyebrow, title, small = false,
}: { icon: React.ReactNode; eyebrow: string; title: string; small?: boolean }) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
        {icon} {eyebrow}
      </div>
      <h2 className={`font-display mt-4 ${small ? "text-3xl" : "text-4xl md:text-5xl"}`}>{title}</h2>
    </div>
  );
}

function ContactRow({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center justify-between rounded-xl border border-border bg-background/40 px-4 py-3 transition hover:border-primary"
    >
      <span className="inline-flex items-center gap-3 text-sm">
        <span className="text-primary">{icon}</span>
        {label}
      </span>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
    </a>
  );
}
