import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Calendar, MapPin, Users, Code2, Zap, Globe, Shield } from "lucide-react";

export const Route = createFileRoute("/work/rxmen")({
  head: () => ({
    meta: [
      { title: "RxMen — Software Engineer Experience | Anujkumar Yadav" },
      { name: "description", content: "Deep dive into my role as Software Engineer at RxMen, building healthcare infrastructure from launch with focus on patient-facing applications and performance optimization." },
      { property: "og:title", content: "RxMen — Software Engineer Experience | Anujkumar Yadav" },
      { property: "og:description", content: "Healthcare platform engineering: patient workflows, performance optimization, and clinical operations tooling." },
    ],
    links: [
      { rel: "canonical", href: "/work/rxmen" },
    ],
  }),
  component: RxMenPage,
});

function RxMenPage() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-60" />

      {/* Nav */}
      <header className="sticky top-4 mx-4 rounded-full z-40 backdrop-blur-md bg-background/60 border-b border-border/50">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link to="/" className="font-display text-2xl" aria-label="Home - Anujkumar Yadav">
            aanuj<span className="text-accent">.</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link 
              to="/#work" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Work
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6" role="main">
        {/* Hero */}
        <section className="pt-14 pb-20" aria-labelledby="hero-heading">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Zap className="h-4 w-4" /> Healthcare Infrastructure
          </div>
          
          <h1 id="hero-heading" className="font-display mt-6 text-5xl md:text-7xl">
            <span className="text-gradient">RxMen</span>
            <br />
            Software Engineer
          </h1>
          
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Aug 2024 — Present
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Delhi, India
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Early Engineer
            </div>
          </div>
          
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            One of the earliest engineers building healthcare infrastructure from launch. 
            Owned frontend architecture for patient-facing platform, led performance optimization, 
            and transition problem to working product solution, partnered with founders on critical healthcare vendor integrations.
          </p>
        </section>

        {/* Overview */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Globe className="h-4 w-4" /> Overview
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">The Context</h2>
          
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <h3 className="font-display text-2xl text-gradient mb-4">The Company</h3>
              <p className="text-muted-foreground leading-relaxed">
                RxMen is building comprehensive healthcare infrastructure focused on men's health. 
                As one of the earliest engineers, I joined when the platform was transitioning from MVP to production ready healthcare solution.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The challenge wasn't just building software it was building healthcare software that handles real patient data, 
                integrates with clinical workflows, and maintains the trust and reliability that healthcare demands.
              </p>
            </div>
            
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <h3 className="font-display text-2xl text-gradient mb-4">My Role</h3>
              <p className="text-muted-foreground leading-relaxed">
                Frontend architecture ownership across the entire patient facing platform. 
                This meant everything from authentication flows and API integration to performance optimization and component system design.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Beyond code, I worked directly with founders to evaluate and integrate critical healthcare vendors payments, 
                telehealth infrastructure, and clinical operations tooling. Real decisions with real impact. 
              </p>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Code2 className="h-4 w-4" /> Projects
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">What I Built</h2>

          <div className="mt-10 space-y-8">
            {/* Performance Optimization */}
            <article className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-3xl text-gradient">Performance Optimization</h3>
                  <div className="text-sm text-accent mt-1">60 → 90+ PageSpeed Score</div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div>Sep 2024 — Dec 2024</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">The Problem</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Healthcare applications can't afford to be slow. A patient trying to book a consultation or access their health data 
                    expects immediate response. Our initial PageSpeed score of 60 wasn't acceptable for a production healthcare platform.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">The Approach</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I led a comprehensive performance audit and optimization initiative. This involved implementing SSR (Server-Side Rendering), 
                    optimizing Core Web Vitals, and automating metadata generation. Each change was measured against real user metrics and healthcare-specific usage patterns.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">The Outcome</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Achieved 90+ PageSpeed score across all critical patient-facing pages. More importantly, reduced time-to-interactive for 
                    consultation booking from 3.2s to 1.1s. In healthcare, every second of delay can mean a patient abandoning their care journey.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['SSR Implementation', 'Core Web Vitals', 'Metadata Automation', 'Performance Monitoring'].map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Patient Workflows */}
            <article className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-3xl text-gradient">End-to-End Patient Workflows</h3>
                  <div className="text-sm text-accent mt-1">Complete Healthcare Journey</div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div>Aug 2024 — Present</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">The Challenge</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Healthcare isn't just about building forms. It's about understanding patient psychology, clinical requirements, 
                    privacy regulations, and creating workflows that feel trustworthy and professional throughout the entire care journey.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">What I Built</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete patient experience: secure onboarding with health history collection, consultation booking with provider matching, 
                    integrated payment processing with healthcare billing requirements, and post-care engagement systems including prescription tracking and follow-up scheduling.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Technical Decisions</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Every component was built with healthcare compliance in mind. Authentication using healthcare-grade security, 
                    API integration with HIPAA-compliant data handling, and reusable component systems that maintain consistency across different clinical workflows.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['Authentication Systems', 'Payment Integration', 'Healthcare APIs', 'Component Architecture', 'Security Compliance'].map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Vendor Integrations */}
            <article className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-3xl text-gradient">Healthcare Vendor Integrations</h3>
                  <div className="text-sm text-accent mt-1">Strategic Technical Partnerships</div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div>Oct 2024 — Present</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">The Responsibility</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Worked directly with founders to evaluate and integrate critical healthcare infrastructure. 
                    This wasn't just technical integration—it was understanding business requirements, compliance needs, 
                    and long-term platform architecture decisions.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Key Integrations</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Payment processing systems with healthcare billing requirements, telehealth infrastructure for video consultations, 
                    clinical operations tooling for provider workflows, and prescription management systems. 
                    Each integration required deep technical evaluation and custom implementation.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Impact</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    These integrations became the foundation of RxMen's healthcare platform. The technical and strategic decisions made here 
                    enabled the platform to handle real patient care, process healthcare payments, and maintain clinical operations at scale.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['Healthcare Payments', 'Telehealth APIs', 'Clinical Tools', 'Prescription Systems', 'Vendor Evaluation'].map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Recognition */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Shield className="h-4 w-4" /> Recognition
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">Impact & Recognition</h2>

          <div className="mt-10 rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl text-gradient mb-4">Frontend Excellence & Ownership Award</h3>
                <div className="text-sm text-accent mb-4">RxMen · December 2025</div>
                <p className="text-muted-foreground leading-relaxed">
                  Recognized for exceptional ownership, consistency, and high-quality feature delivery with strong focus on performance and user experience. 
                  This award reflected not just technical execution but the healthcare-first approach to building patient-facing software.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-1">Performance</div>
                  <div className="font-display text-xl">90+ PageSpeed Score</div>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-1">Architecture</div>
                  <div className="font-display text-xl">Complete Frontend Ownership</div>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-1">Impact</div>
                  <div className="font-display text-xl">Production Healthcare Platform</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Zap className="h-4 w-4" /> Reflection
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">What I Learned</h2>

          <div className="mt-10 max-w-4xl">
            <blockquote className="font-display text-2xl md:text-3xl text-muted-foreground italic leading-relaxed mb-8">
              "Healthcare software isn't just about shipping features. It's about building trust through reliability, 
              privacy, and understanding that behind every user interaction is someone's health and well-being."
            </blockquote>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Working at RxMen taught me that healthcare software requires a fundamentally different approach. 
                Performance isn't just about user experience—it's about ensuring patients can access their care when they need it. 
                Security isn't just best practice—it's protecting someone's most private health information.
              </p>
              
              <p>
                Being one of the earliest engineers meant every technical decision had long-term consequences. 
                The component architecture I built became the foundation for new features. The performance optimizations I implemented 
                became the standard for all patient-facing interfaces.
              </p>
              
              <p>
                Most importantly, I learned that the best healthcare software feels invisible to the patient. 
                They should focus on their health, not navigating complex interfaces or waiting for slow pages to load. 
                That's the standard I hold myself to in everything I build.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-border/60 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm transition hover:border-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Work
            </Link>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects/skillflare"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                Next Project: SkillFlare <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}