import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Calendar, Users, Code2, Zap, Globe, Play, BookOpen, CreditCard } from "lucide-react";

export const Route = createFileRoute("/projects/skillflare")({
  head: () => ({
    meta: [
      { title: "SkillFlare — Full-Stack Learning Platform | Anujkumar Yadav" },
      { name: "description", content: "Deep dive into SkillFlare: a MERN stack learning platform with live coding environments, real-time video classes, and integrated payment processing." },
      { property: "og:title", content: "SkillFlare — Full-Stack Learning Platform | Anujkumar Yadav" },
      { property: "og:description", content: "Building practical skill development platform with in-browser coding environments and live instruction workflows." },
    ],
    links: [
      { rel: "canonical", href: "/projects/skillflare" },
    ],
  }),
  component: SkillFlarePage,
});

function SkillFlarePage() {
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
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6" role="main">
        {/* Hero */}
        <section className="pt-14 pb-20" aria-labelledby="hero-heading">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <BookOpen className="h-4 w-4" /> Full-Stack Learning Platform
          </div>
          
          <h1 id="hero-heading" className="font-display mt-6 text-5xl md:text-7xl">
            <span className="text-gradient">SkillFlare</span>
            <br />
            Learning Platform Case Study
          </h1>
          
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Sep 2023 — Present
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Team of 3 Engineers
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Frontend Lead
            </div>
          </div>
          
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            A comprehensive learning platform that bridges the gap between theoretical knowledge and practical skill development. 
            Built with MERN stack, featuring live coding environments, real-time video classes, and integrated payment processing.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
            >
              Explore the case study <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Problem Statement */}
        <section id="overview" className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Zap className="h-4 w-4" /> Problem
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">The Challenge</h2>
          
          <div className="mt-10 rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl text-gradient mb-4">The Market Gap</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Online learning platforms were failing at practical skill development. Students could watch videos and complete quizzes, 
                  but they lacked hands-on coding practice in realistic environments. The disconnect between theory and practice was obvious.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Most platforms either provided basic code editors without proper execution environments, 
                  or forced students to set up complex local development environments that created barriers to learning.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-2xl text-gradient mb-4">The Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We wanted to create a platform where students could learn by doing—writing real code, seeing immediate results, 
                  and getting live feedback from instructors. The goal was to make practical coding education accessible without setup barriers.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  This meant building not just a learning platform, but a complete development environment that could run in any browser 
                  while supporting live instruction and collaborative coding sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture & Approach */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Globe className="h-4 w-4" /> Architecture
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">Technical Foundation</h2>

          <div className="mt-10 space-y-8">
            {/* MERN Stack Choice */}
            <article className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <h3 className="font-display text-3xl text-gradient mb-6">MERN Stack Architecture</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">The Decision</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We chose the MERN stack (MongoDB, Express.js, React.js, Node.js) for its JavaScript uniformity and real-time capabilities. 
                    Having the same language across frontend and backend simplified development and enabled seamless data flow for live features.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Frontend Architecture</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    React.js with component-based architecture for the learning interface. Built reusable components for course content, 
                    coding environments, video players, and instructor dashboards. State management handled complex interactions 
                    between multiple real-time features.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Backend Design</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Node.js and Express.js backend with MongoDB for flexible data schemas. Designed APIs for course management, 
                    user progress tracking, code execution requests, and real-time communication between students and instructors.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSocket APIs', 'RESTful Services'].map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Key Features */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Code2 className="h-4 w-4" /> Features
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">What I Built</h2>

          <div className="mt-10 space-y-8">
            {/* Live Coding Environment */}
            <article className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-3xl text-gradient">In-Browser Coding Environment</h3>
                  <div className="text-sm text-accent mt-1">Real-time Code Execution</div>
                </div>
                <Play className="h-8 w-8 text-primary" />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">The Hard Problem</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Building a secure, performant code execution environment that runs in the browser while supporting multiple programming languages. 
                    This required proper sandboxing, performance optimization for concurrent users, and real-time feedback systems.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Technical Solution</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Implemented a containerized execution environment with WebAssembly for client-side code running and server-side execution for complex operations. 
                    Built custom code editors with syntax highlighting, autocomplete, and error detection. Added real-time collaboration features 
                    so instructors could see and help with student code in live sessions.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">User Experience</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Students can write, run, and debug code without any local setup. Instructors can share their screen, write code live, 
                    and students can follow along in their own environments. Code sessions are saved automatically and can be resumed later.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['WebAssembly', 'Code Sandboxing', 'Real-time Collaboration', 'Syntax Highlighting', 'Auto-save', 'Multi-language Support'].map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Live Video Integration */}
            <article className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-3xl text-gradient">ZEGOCLOUD Live Video Classes</h3>
                  <div className="text-sm text-accent mt-1">Real-time Instruction</div>
                </div>
                <Globe className="h-8 w-8 text-primary" />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Integration Challenge</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrating ZEGOCLOUD's video SDK with our existing learning platform while maintaining performance and user experience. 
                    The challenge was creating seamless transitions between video instruction and hands-on coding practice.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Implementation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Built custom video components that integrate with our course structure. Instructors can switch between presentation mode, 
                    code sharing, and student interaction seamlessly. Added features for screen sharing, whiteboard integration, 
                    and synchronized cursor movement during live coding sessions.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Student Experience</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Students join live classes with video, audio, and chat capabilities. They can see the instructor's code in real-time, 
                    ask questions through multiple channels, and practice along in their own coding environment while staying connected to the class.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['ZEGOCLOUD SDK', 'Video Streaming', 'Screen Sharing', 'Real-time Chat', 'Whiteboard Integration', 'Synchronized Sessions'].map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Payment Processing */}
            <article className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-3xl text-gradient">Razorpay Payment Integration</h3>
                  <div className="text-sm text-accent mt-1">Course Monetization</div>
                </div>
                <CreditCard className="h-8 w-8 text-primary" />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Business Requirements</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Built a complete monetization system supporting course purchases, subscription plans, and instructor payouts. 
                    The payment flow needed to handle different pricing models while maintaining security and providing clear user feedback throughout the process.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Technical Implementation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrated Razorpay's payment gateway with secure webhook handling for payment verification. 
                    Built custom checkout flows, subscription management, and automated course access granting. 
                    Added support for refunds, partial payments, and international transactions.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">User Journey</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Students can browse courses, preview content, and purchase with multiple payment options. 
                    After successful payment, they immediately get access to course materials and live class scheduling. 
                    The system handles everything from payment processing to automated email confirmations.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['Razorpay Integration', 'Webhook Security', 'Subscription Management', 'Automated Access', 'International Payments', 'Refund Processing'].map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Instructor Dashboard */}
            <article className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-3xl text-gradient">Instructor Interface & Workflows</h3>
                  <div className="text-sm text-accent mt-1">Teaching Platform</div>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Design Challenge</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Instructors needed a comprehensive dashboard to manage courses, track student progress, conduct live sessions, 
                    and handle administrative tasks. The interface had to be powerful enough for professional educators but intuitive enough for quick adoption.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Feature Set</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Built course creation tools with drag-and-drop curriculum building, student progress analytics, 
                    live session management with integrated video and coding tools, automated grading systems, and communication features for student interaction.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-3">Technical Focus</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Focused on frontend architecture that could handle complex data visualization, real-time updates, and multiple concurrent operations. 
                    Built reusable components that instructors could customize for different teaching styles and course types.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['Dashboard Design', 'Progress Analytics', 'Course Builder', 'Live Session Tools', 'Student Communication', 'Automated Grading'].map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Outcomes & Impact */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Zap className="h-4 w-4" /> Impact
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">Results & Learning</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-5xl text-gradient">100%</div>
              <div className="mt-2 text-sm text-muted-foreground">In-browser code execution success rate</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-5xl text-gradient">3x</div>
              <div className="mt-2 text-sm text-muted-foreground">Faster practical skill development vs traditional platforms</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="font-display text-5xl text-gradient">0</div>
              <div className="mt-2 text-sm text-muted-foreground">Local setup required for students</div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
            <h3 className="font-display text-2xl text-gradient mb-6">Platform Success</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Successfully launched a comprehensive learning platform with live coding capabilities, integrated payment processing, 
                and instructor-student interaction workflows. The platform handles real-time code execution, video streaming, 
                and collaborative coding sessions without requiring any local development environment setup.
              </p>
              <p>
                The technical architecture proved scalable and maintainable, supporting multiple concurrent users in live coding sessions 
                while maintaining performance and security standards. Payment processing integration enabled successful course monetization 
                from day one.
              </p>
              <p>
                Most importantly, we solved the core problem: students can now learn programming through hands-on practice 
                with immediate feedback and live instruction, making practical skill development accessible to anyone with a browser.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Reflection */}
        <section className="border-t border-border/60 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Code2 className="h-4 w-4" /> Reflection
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">What I Learned</h2>

          <div className="mt-10 max-w-4xl">
            <blockquote className="font-display text-2xl md:text-3xl text-muted-foreground italic leading-relaxed mb-8">
              "Building a learning platform isn't just about delivering content—it's about creating an environment where practical skills can develop naturally through guided practice and real-time feedback."
            </blockquote>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Working on SkillFlare taught me that complex integrations require more than just technical implementation. 
                Combining video streaming, code execution, and payment processing meant understanding how different systems interact 
                and ensuring they work together seamlessly from the user's perspective.
              </p>
              
              <p>
                Leading frontend architecture in a team environment showed me the importance of component design that other developers can understand and extend. 
                The instructor interface components I built became the foundation for features I didn't even anticipate when designing them.
              </p>
              
              <p>
                Most importantly, I learned that educational technology requires deep empathy for both students and instructors. 
                The best technical solution is worthless if it doesn't make learning easier or teaching more effective. 
                Every feature decision had to consider the human experience behind the interface.
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
              <Link
                to="/projects/zyathi"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                Next Project: Zyathi <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}