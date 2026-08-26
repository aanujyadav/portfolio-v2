import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Github, Linkedin, Phone, MapPin, Award, Code2, Briefcase, GraduationCap, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anujkumar Yadav — Software Engineer & Healthtech Builder" },
      { name: "description", content: "Anujkumar Yadav is a software engineer building healthcare products with React, Next.js, TypeScript and modern backend technologies. Currently building Zyathi - India's first Hindi-first femtech platform." },
      { property: "og:title", content: "Anujkumar Yadav — Software Engineer & Healthtech Builder" },
      { property: "og:description", content: "Software engineer building healthcare products from 0 → 1. Currently at RxMen and founding Zyathi - India's first Hindi-first femtech platform." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: "Anujkumar Yadav, software engineer, healthcare software engineer, femtech, women's health technology, Hindi healthcare apps, React developer, Next.js developer, TypeScript, product engineering, Zyathi, India femtech, healthcare accessibility" },
      { name: "author", content: "Anujkumar Yadav" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "theme-color", content: "#C4A962" },
      { name: "msapplication-TileColor", content: "#C4A962" },
      { property: "og:site_name", content: "Anujkumar Yadav" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:creator", content: "@aanujyadav" },
      { name: "twitter:site", content: "@aanujyadav" },
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
        jobTitle: "Software Engineer & Healthtech Builder",
        worksFor: [
          { "@type": "Organization", name: "RxMen" },
          { "@type": "Organization", name: "Zyathi", description: "India's first Hindi-first femtech platform" }
        ],
        email: "hello@aanuj.com",
        telephone: "+91 90960 20595",
        url: "https://aanuj.com",
        knowsAbout: ["Healthcare Software", "Product Engineering", "React", "Next.js", "TypeScript", "Femtech", "Women's Health", "AI/ML", "Hindi Localization"],
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
    note: "One of the earliest engineers building healthcare infrastructure from launch.",
    points: [
      "Owned frontend architecture for patient-facing healthcare platform, including authentication, API integration and reusable component systems.",
      "Led performance optimization from 60 → 90+ PageSpeed score through SSR implementation, Core Web Vitals improvements, and metadata automation.",
      "Built end-to-end patient workflows: onboarding, consultation booking, secure payment processing, and post-care engagement systems.",
      "Partnered directly with founders to evaluate and integrate critical healthcare vendors — payments, telehealth infrastructure, and clinical operations tooling.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "RaptorX",
    period: "Mar 2024 — Jul 2024",
    note: "Internship focused on dashboard architecture and web performance.",
    points: [
      "Architected core dashboard modules (logs, webhooks, settings) with full REST API integration and real-time updates.",
      "Led migration of marketing website to Next.js, improving load speed by 40% and search visibility.",
    ],
  },
];

const projects = [
  {
    name: "SkillFlare",
    tag: "MERN · Full-Stack Learning Platform",
    period: "Sep 2023 — Present",
    problem: "Online learning platforms struggled with practical skill development and lacked integrated coding environments for hands-on practice.",
    role: "Led frontend architecture and instructor interface development in a team of 3 engineers.",
    architecture: "Built with MERN stack, integrated ZEGOCLOUD for live video classes, Razorpay for payments, and custom in-browser coding environment.",
    hardProblem: "Real-time code execution in browser with proper sandboxing and performance optimization for concurrent users.",
    outcome: "Successfully launched platform with live coding capabilities, integrated payment processing, and instructor-student interaction workflows.",
    technologies: ["React.js", "Node.js", "MongoDB", "ZEGOCLOUD", "Razorpay"]
  },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:font-medium"
      >
        Skip to main content
      </a>
      
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-60" />

      {/* Nav */}
      <header className="sticky top-4 mx-4 rounded-full z-40 backdrop-blur-md bg-background/60 border-b border-border/50">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="#top" className="font-display text-2xl" aria-label="Home - Anujkumar Yadav">
            aanuj<span className="text-accent">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-foreground" aria-label="About section">About</a>
            <a href="#work" className="transition hover:text-foreground" aria-label="Work experience">Work</a>
            <a href="#projects" className="transition hover:text-foreground" aria-label="Projects and case studies">Projects</a>
            <a href="#contact" className="transition hover:text-foreground" aria-label="Contact information">Contact</a>
          </div>
          <a
            href="mailto:hello@aanuj.com"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm transition hover:border-primary hover:text-primary"
            aria-label="Send email to hello@aanuj.com"
          >
            Get in touch <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="main-content" className="mx-auto max-w-5xl px-6" role="main">
        {/* Hero */}
        <section className="pt-16 pb-24 md:pt-32 md:pb-40" aria-labelledby="hero-heading">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm" role="status">
            <span className="relative flex h-2 w-2" aria-label="Available status indicator">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" aria-hidden="true" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            </span>
            Available for collaborations
          </div>
          
          <h1 id="hero-heading" className="font-display mt-8 text-5xl md:text-7xl leading-tight">
            Anujkumar Yadav
          </h1>
          
          <div className="mt-0 font-display text-3xl md:text-5xl leading-tight text-muted-foreground">
            <span className="text-gradient italic">Software Engineer</span> building
            <br />
            healthcare products from <span className="text-gradient">0 → 1</span>.
          </div>
          
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            I build products across healthcare, AI, and modern web technologies with a focus on turning messy real world problems into simple, elegant software. 
            Currently building India's first Hindi-first femtech platform.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 hover:scale-105"
              style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
              aria-label="View my work experience and projects"
            >
              View my work <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:hello@aanuj.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm transition hover:border-primary hover:bg-card/60 backdrop-blur-sm"
              aria-label="Contact me via email"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Connect with me
            </a>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-accent" />
              <span>Healthcare</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-accent" />
              <span>Product Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-accent" />
              <span>0 → 1 Products</span>
            </div>
          </div>
        </section>

        {/* Currently Building */}
        <section className="border-t border-border/60 py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Currently building
          </div>
          <div 
            className="mt-6 rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8 cursor-pointer group transition hover:border-primary/60" 
            style={{ boxShadow: "var(--shadow-soft)" }}
            onClick={() => window.location.href = "/projects/zyathi"}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-3xl md:text-4xl text-gradient">Zyathi</h3>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-accent">India's first Hindi-first femtech platform</div>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Building India's first family-centered women's health OS covering every hormonal life stage from periods to menopause. 
              Creating accessible healthcare in Hindi with AI-powered guidance and culturally relevant solutions.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              <a href="https://zyathi.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" aria-label="Visit Zyathi website (opens in new tab)" onClick={(e) => e.stopPropagation()}>
                zyathi.com
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {['Femtech', 'Product Engineering', 'Healthcare', 'Hindi-first'].map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-background/60 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary transition group-hover:gap-3">
              Read detailed case study <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </section>

        {/* About / Stats */}
        <section id="about" className="grid gap-6 border-t border-border/60 py-12 md:grid-cols-3">
          {[
            { k: "2+", v: "Years building production healthcare products" },
            { k: "90+", v: "PageSpeed score after re-architecture" },
            { k: "0→1", v: "Patient workflows owned end-to-end" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-5xl text-gradient">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </section>

        {/* Why Healthcare */}
        <section className="border-t border-border/60 py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-4 w-4" /> Focus
          </div>
          <h2 className="font-display mt-6 text-4xl md:text-6xl leading-tight">Why healthcare?</h2>
          <div className="mt-10 max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I've spent my engineering career working close to healthcare, where software isn't just about shipping features.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Privacy, trust, clinical workflows, reliability and user behavior all matter in ways that go beyond typical product development. 
                  Healthcare software touches people's most vulnerable moments.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm particularly interested in building products around women's health, preventive care, and healthcare accessibility 
                  where technology can bridge cultural and language gaps in healthcare delivery.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The intersection of AI, localization, and healthcare creates opportunities to make quality healthcare accessible 
                  to people who have been systematically excluded from traditional healthcare systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Build */}
        <section className="border-t border-border/60 py-12">
          <SectionHeader icon={<Code2 className="h-4 w-4" />} eyebrow="What I do" title="What I build" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-2xl text-gradient mb-3">Healthcare products</div>
              <p className="text-muted-foreground">
                Patient-facing applications, clinical workflows, healthcare platforms. 
                Building trust through privacy-first design and reliable user experiences.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-2xl text-gradient mb-3">Product engineering</div>
              <p className="text-muted-foreground">
                Taking ideas from architecture → implementation → production. 
                Owning features end-to-end with focus on user outcomes.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-2xl text-gradient mb-3">AI-enabled experiences</div>
              <p className="text-muted-foreground">
                Using AI where it actually improves the workflow rather than adding an AI badge. 
                Focus on practical applications in healthcare and user interfaces.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-2xl text-gradient mb-3">System architecture</div>
              <p className="text-muted-foreground">
                Frontend performance optimization, API design, database architecture. 
                Building scalable systems that handle real-world healthcare complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="border-t border-border/60 py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Code2 className="h-4 w-4" /> Technologies
          </div>
          <h2 className="font-display mt-4 text-3xl">Engineering stack</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
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

        {/* Engineering Philosophy */}
        <section className="border-t border-border/60 py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-4 w-4" /> Philosophy
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">How I build</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-medium text-lg mb-2">Understand the problem first.</div>
              <p className="text-sm text-muted-foreground">
                I don't start with the framework. I start with the user and workflow.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-medium text-lg mb-2">Ship small.</div>
              <p className="text-sm text-muted-foreground">
                Get something useful into users' hands before building infrastructure nobody needs.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-medium text-lg mb-2">Healthcare requires trust.</div>
              <p className="text-sm text-muted-foreground">
                Privacy, security and reliability aren't optional features.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-medium text-lg mb-2">Measure outcomes.</div>
              <p className="text-sm text-muted-foreground">
                A feature isn't successful because it shipped. Success is user adoption and problem solving.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="work" className="border-t border-border/60 py-12">
          <SectionHeader icon={<Briefcase className="h-4 w-4" />} eyebrow="Experience" title="Where I've shipped" />
          <div className="mt-10 space-y-4">
            {experience.map((e, index) => (
              <article
                key={e.company}
                className="group rounded-2xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/60 md:p-8 cursor-pointer"
                style={{ boxShadow: "var(--shadow-soft)" }}
                onClick={() => {
                  if (e.company === "RxMen") {
                    window.location.href = "/work/rxmen";
                  }
                }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl md:text-3xl">
                    {e.role} <span className="text-muted-foreground">·</span>{" "}
                    <span className="text-gradient">{e.company}</span>
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">{e.period}</span>
                    {e.company === "RxMen" && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    )}
                  </div>
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
                {e.company === "RxMen" && (
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary transition group-hover:gap-3">
                    Read detailed case study <ArrowUpRight className="h-4 w-4" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-border/60 py-12">
          <SectionHeader icon={<Sparkles className="h-4 w-4" />} eyebrow="Case studies" title="Selected projects" />
          <div className="mt-10 grid gap-8">
            {projects.map((p) => (
              <article 
                key={p.name} 
                className="group rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8 cursor-pointer transition hover:border-primary/60"
                onClick={() => {
                  if (p.name === "SkillFlare") {
                    window.location.href = "/projects/skillflare";
                  }
                }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-3xl text-gradient">{p.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">{p.period}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-accent">{p.tag}</div>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Problem</h4>
                    <p className="text-muted-foreground">{p.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">My Role</h4>
                    <p className="text-muted-foreground">{p.role}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Hard Problem</h4>
                    <p className="text-muted-foreground">{p.hardProblem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Outcome</h4>
                    <p className="text-muted-foreground">{p.outcome}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary transition group-hover:gap-3">
                    Read detailed case study <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="border-t border-border/60 py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <Briefcase className="h-4 w-4" /> About
          </div>
          <h2 className="font-display mt-6 text-4xl md:text-6xl leading-tight">About Anuj</h2>
          <div className="mt-10 max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                  I'm a Software Engineer focused on building products at the intersection of technology and healthcare.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My work spans frontend architecture, backend systems, APIs, product development and UX. I've spent the last few years 
                  working on healthcare products and increasingly focus on the problems behind the software, not just the implementation.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What drives me is building technology that solves meaningful problems for real people. Healthcare, especially women's health, 
                  represents some of the most complex and impactful challenges where good software can genuinely improve lives.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  Long term, I want to build technology companies that solve meaningful healthcare problems at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Now */}
        <section className="border-t border-border/60 py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Live updates
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">Now</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Building</div>
              <div className="font-display text-xl">Zyathi</div>
              <p className="text-sm text-muted-foreground mt-2">India's first Hindi-first femtech platform</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Learning</div>
              <div className="font-display text-xl">AI × Women's Health</div>
              <p className="text-sm text-muted-foreground mt-2">Building culturally relevant AI for Indian women's healthcare</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Exploring</div>
              <div className="font-display text-xl">Hindi-first Healthcare</div>
              <p className="text-sm text-muted-foreground mt-2">Understanding language barriers in healthcare accessibility</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Looking for</div>
              <div className="font-display text-xl">Healthtech Builders</div>
              <p className="text-sm text-muted-foreground mt-2">Connecting with founders working on Healthtech solutions</p>
            </div>
          </div>
        </section>

        {/* Achievements + Education */}
        <section className="grid gap-6 border-t border-border/60 py-12 md:grid-cols-2">
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
        <section id="contact" className="border-t border-border/60 py-20">
          <div
            className="overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-8 md:p-16 backdrop-blur-sm"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="font-display text-5xl md:text-7xl leading-tight">
              Let's build something <br />
              <span className="text-gradient italic">meaningful</span>.
            </div>
            <p className="mt-8 max-w-2xl text-xl text-muted-foreground leading-relaxed">
              I'm interested in product-led teams shipping real-world healthcare and consumer software. 
              Looking for builders working on ambitious healthcare problems. 
            </p>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Reach out I reply to every mail.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:max-w-3xl">
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
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
        {icon} {eyebrow}
      </div>
      <h2 className={`font-display mt-6 leading-tight ${small ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"}`}>{title}</h2>
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
