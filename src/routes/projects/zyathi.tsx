import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Calendar, Users, Code2, Heart, Globe, Languages, Shield, Sparkles } from "lucide-react";

export const Route = createFileRoute("/projects/zyathi")({
  head: () => ({
    meta: [
      { title: "Zyathi — India's First Hindi-First Femtech Platform | Anujkumar Yadav" },
      { name: "description", content: "Building Zyathi: India's first family-centered women's health platform with Hindi-first approach, AI-powered guidance, and culturally relevant healthcare solutions." },
      { property: "og:title", content: "Zyathi — India's First Hindi-First Femtech Platform | Anujkumar Yadav" },
      { property: "og:description", content: "Founding engineer building accessible healthcare in Hindi with AI-powered guidance for Indian women." },
    ],
    links: [
      { rel: "canonical", href: "/projects/zyathi" },
    ],
  }),
  component: ZyathiPage,
});

function ZyathiPage() {
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
              to="/#projects" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Link>
            <a 
              href="https://zyathi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm transition hover:border-primary hover:text-primary"
            >
              Visit Zyathi <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6" role="main">
        {/* Hero */}
        <section className="pt-14 pb-20" aria-labelledby="hero-heading">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Currently Building
          </div>
          
          <h1 id="hero-heading" className="font-display mt-6 text-5xl md:text-7xl">
            <span className="text-gradient">Zyathi</span>
            <br />
            India's First Hindi-First Femtech Platform
          </h1>
          
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              2025 — Present
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Founding Engineer
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-pink-500" />
              Women's Health
            </div>
          </div>
          
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            Building India's first family-centered women's health OS covering every hormonal life stage from periods to menopause. 
            Creating accessible healthcare in Hindi with AI-powered guidance and culturally relevant solutions for Indian families.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://zyathi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
            >
              Visit Zyathi <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#vision"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm transition hover:border-primary"
            >
              <Heart className="h-4 w-4" /> Read the story
            </a>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Heart className="h-4 w-4" /> Vision
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">The Mission</h2>
          
          <div className="mt-10 rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl text-gradient mb-4">The Problem We're Solving</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Indian women face significant barriers accessing quality healthcare information and services. 
                  Language barriers, cultural stigma around women's health, and lack of family-centered care create gaps that technology can bridge.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Most healthcare platforms are built for English-speaking, urban audiences. But the majority of Indian women are more comfortable 
                  with Hindi and need healthcare solutions that respect cultural context and family dynamics.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl text-gradient mb-4">Our Solution</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Zyathi is building a comprehensive women's health operating system that puts Hindi first and families at the center. 
                  We cover every hormonal life stage—from periods to pregnancy to menopause—with culturally relevant guidance and AI-powered personalization.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Our platform provides healthcare accessibility in the language women think in, with content and recommendations that respect 
                  Indian family structures and cultural values around women's health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Zyathi Different */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-4 w-4" /> Differentiation
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">What Makes Us Different</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Languages className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-display text-xl text-gradient mb-2">Hindi-First Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Not just translation—content created and structured for Hindi-thinking users. 
                    Medical terminology, cultural references, and user flows designed for natural Hindi communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-display text-xl text-gradient mb-2">Family-Centered Care</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Healthcare decisions in Indian families involve multiple stakeholders. 
                    Our platform supports family involvement while maintaining privacy and individual autonomy.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Globe className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-display text-xl text-gradient mb-2">Complete Life Stage Coverage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From periods to menopause—every hormonal transition with personalized guidance, 
                    symptom tracking, and culturally appropriate recommendations for each life stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Code2 className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-display text-xl text-gradient mb-2">AI-Powered Personalization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AI trained on Indian women's health patterns, cultural context, and family dynamics. 
                    Personalized recommendations that understand local lifestyle and healthcare preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Code2 className="h-4 w-4" /> Architecture
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">Building for Scale & Accessibility</h2>

          <div className="mt-10 space-y-8">
            {/* Platform Architecture */}
            <article className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <h3 className="font-display text-3xl text-gradient mb-6">Modern Healthcare Platform</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Technology Choices</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Built with React and Next.js for performance and SEO crucial for healthcare content discovery. 
                    TypeScript for maintainable, scalable code as we build complex health tracking and AI features. 
                    Cloud infrastructure designed for privacy compliance and data security.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Hindi-First Implementation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Internationalization architecture that prioritizes Hindi as the primary language rather than treating it as a translation. 
                    Content management systems built for Devanagari script, cultural context management, and Hindi-natural user flows.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Privacy & Security</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Healthcare data requires the highest security standards. Implementation includes end-to-end encryption, 
                    compliance with Indian healthcare data regulations, and privacy-by-design architecture for sensitive health information.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['React', 'Next.js', 'TypeScript', 'Hindi i18n', 'Healthcare Compliance', 'Privacy Architecture', 'Cloud Security'].map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* AI & Personalization */}
            <article className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <h3 className="font-display text-3xl text-gradient mb-6">AI-Powered Health Guidance</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Cultural AI Training</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Developing AI models trained specifically on Indian women's health patterns, cultural practices, and family dynamics. 
                    This isn't Western health data translated—it's AI that understands Indian lifestyle, food habits, and social contexts.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Personalization Engine</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Building recommendation systems that factor in individual health history, family medical background, 
                    regional health patterns, and cultural preferences. Personalization that respects privacy while providing relevant guidance.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Safety & Accuracy</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Healthcare AI requires extreme accuracy and clear boundaries. Our systems provide educational guidance and 
                    pattern recognition while always directing users to qualified healthcare providers for medical decisions.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['Healthcare AI', 'Cultural Training Data', 'Personalization', 'Safety Protocols', 'Pattern Recognition', 'Medical Accuracy'].map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Product Features */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Heart className="h-4 w-4" /> Features
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">What We're Building</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Period & Cycle Tracking",
                description: "Comprehensive menstrual health tracking with culturally relevant insights and family sharing options.",
                icon: "🌸"
              },
              {
                title: "Pregnancy Journey",
                description: "Week-by-week guidance in Hindi with Indian diet recommendations and cultural practices.",
                icon: "🤱"
              },
              {
                title: "Menopause Support",
                description: "Evidence-based guidance for the transition, with understanding of Indian family dynamics.",
                icon: "🌺"
              },
              {
                title: "Family Health OS",
                description: "Connect healthcare decisions with family members while maintaining individual privacy.",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                title: "AI Health Assistant",
                description: "Personalized recommendations based on individual patterns and cultural context.",
                icon: "🤖"
              },
              {
                title: "Provider Network",
                description: "Connect with qualified healthcare providers who understand cultural and language needs.",
                icon: "👩‍⚕️"
              }
            ].map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-border/60 bg-card/40 p-6">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-display text-xl text-gradient mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Market & Impact */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Globe className="h-4 w-4" /> Impact
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">Market Opportunity</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-5xl text-gradient">650M+</div>
              <div className="mt-2 text-sm text-muted-foreground">Women in India needing accessible healthcare</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-5xl text-gradient">68%</div>
              <div className="mt-2 text-sm text-muted-foreground">Prefer Hindi for healthcare information</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-5xl text-gradient">₹50K Cr</div>
              <div className="mt-2 text-sm text-muted-foreground">Femtech market opportunity in India by 2030</div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
            <h3 className="font-display text-2xl text-gradient mb-6">Why Now?</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                India's digital healthcare adoption accelerated dramatically post-COVID. Women are increasingly seeking healthcare information online, 
                but existing solutions don't serve the linguistic and cultural needs of the majority of Indian women.
              </p>
              <p>
                The intersection of increasing smartphone penetration, growing health awareness, and cultural shift toward discussing women's health 
                creates a unique opportunity to build something truly impactful for Indian families.
              </p>
              <p>
                We're not just building another health app—we're creating the healthcare operating system for Indian women, 
                in the language they think in, with the cultural understanding they deserve.
              </p>
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Live Updates
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">Current Progress</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <h3 className="font-display text-2xl text-gradient mb-4">Platform Development</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Core Architecture</span>
                  <span className="text-sm font-medium text-green-500">Completed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Hindi i18n System</span>
                  <span className="text-sm font-medium text-green-500">In Progress</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">User Authentication</span>
                  <span className="text-sm font-medium text-green-500">Completed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Health Tracking Features</span>
                  <span className="text-sm font-medium text-blue-500">In Development</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <h3 className="font-display text-2xl text-gradient mb-4">Next Milestones</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Beta launch with period tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                  <span className="text-sm text-muted-foreground">AI recommendation engine</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Healthcare provider network</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Family sharing features</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Reflection */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Heart className="h-4 w-4" /> Personal
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">Why This Matters to Me</h2>

          <div className="mt-10 max-w-4xl">
            <blockquote className="font-display text-2xl md:text-3xl text-muted-foreground italic leading-relaxed mb-8">
              "Healthcare should be accessible in the language you think in, with understanding of the culture you live in. 
              For Indian women, that means building something fundamentally different from existing solutions."
            </blockquote>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Building Zyathi combines everything I'm passionate about: healthcare technology, accessibility, and solving problems that matter for real people. 
                The technical challenges are complex, but the human impact makes every line of code meaningful.
              </p>
              
              <p>
                Growing up in India, I've seen how language barriers and cultural gaps prevent people from accessing healthcare information they need. 
                Building a Hindi-first platform isn't just about translation—it's about creating healthcare experiences that feel natural and trustworthy 
                for the people who need them most.
              </p>
              
              <p>
                As a founding engineer, I get to make technical decisions that will impact millions of women and families. 
                The architecture choices I make today determine whether Zyathi can scale to serve India's diverse healthcare needs 
                while maintaining the cultural sensitivity and privacy that healthcare demands.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-border/60 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm transition hover:border-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Link>
            
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://zyathi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                Visit Zyathi <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}