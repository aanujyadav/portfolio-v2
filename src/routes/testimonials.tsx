import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Star, Quote, Users, Briefcase, Heart, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase, type Testimonial } from "../lib/supabase";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — What People Say | Anujkumar Yadav" },
      { name: "description", content: "Read what colleagues, teammates, freelance clients, and collaborators say about working with Anujkumar Yadav on healthcare and technology projects." },
      { property: "og:title", content: "Testimonials — What People Say | Anujkumar Yadav" },
      { property: "og:description", content: "Testimonials and reviews from colleagues, clients, and collaborators who have worked with Anuj on healthcare technology projects." },
      { property: "og:image", content: "/OG_anuj.png" },
      { property: "og:url", content: "https://aanuj.com/testimonials" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/OG_anuj.png" },
    ],
    links: [
      { rel: "canonical", href: "/testimonials" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error: fetchError } = await supabase
          .from('testimonials')
          .select('*')
          .eq('status', 'approved')
          .order('created_at', { ascending: false });

        if (fetchError) {
          throw fetchError;
        }

        setTestimonials(data || []);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError(err instanceof Error ? err.message : 'Failed to load testimonials');
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  const averageRating = testimonials.length > 0 
    ? testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length 
    : 0;
  const totalTestimonials = testimonials.length;

  function getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }

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
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6" role="main">
        {/* Hero */}
        <section className="pt-16 pb-24" aria-labelledby="hero-heading">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <Heart className="h-4 w-4" /> Reviews
          </div>
          
          <h1 id="hero-heading" className="font-display mt-8 text-5xl md:text-7xl leading-tight">
            What people say about <br />
            <span className="text-gradient italic">working with me</span>
          </h1>
          
          <p className="mt-10 max-w-3xl text-xl text-muted-foreground leading-relaxed">
            Testimonials from colleagues, teammates, freelance clients, and collaborators who have worked with me 
            on healthcare technology projects and software development.
          </p>

          {loading ? (
            <div className="mt-10 flex items-center gap-3">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              <span className="text-lg">Loading testimonials...</span>
            </div>
          ) : error ? (
            <div className="mt-10 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              <p className="text-red-200">Error loading testimonials: {error}</p>
            </div>
          ) : (
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-5 w-5 ${star <= Math.round(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">
                  {totalTestimonials > 0 ? averageRating.toFixed(1) : '5.0'} out of 5
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{totalTestimonials} review{totalTestimonials !== 1 ? 's' : ''}</span>
              </div>
            </div>
          )}
        </section>

        {/* Stats */}
        {!loading && !error && (
          <section className="border-t border-border/60 py-12">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
                <div className="font-display text-5xl text-gradient">
                  {testimonials.length > 0 ? `${averageRating.toFixed(1)}★` : '5.0★'}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">Average rating from all reviews</div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
                <div className="font-display text-5xl text-gradient">{totalTestimonials}+</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Review{totalTestimonials !== 1 ? 's' : ''} from colleagues and clients
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
                <div className="font-display text-5xl text-gradient">
                  {new Set(testimonials.map(t => t.company)).size}+
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Compan{new Set(testimonials.map(t => t.company)).size !== 1 ? 'ies' : 'y'} where I've built lasting relationships
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Grid */}
        {!loading && !error && (
          <section className="border-t border-border/60 py-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
              <Quote className="h-4 w-4" /> Testimonials
            </div>
            <h2 className="font-display mt-6 text-4xl md:text-6xl leading-tight">What they're saying</h2>

            {testimonials.length === 0 ? (
              <div className="mt-10 text-center py-20">
                <Quote className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-display text-2xl text-muted-foreground mb-2">No testimonials yet</h3>
                <p className="text-muted-foreground mb-6">Be the first to share your experience working with me!</p>
                <Link
                  to="/testimonials-submit"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
                >
                  Write the First Review <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <article
                    key={testimonial.id}
                    className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8"
                    style={{ boxShadow: "var(--shadow-soft)" }}
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6">
                      "{testimonial.testimonial}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        {getInitials(testimonial.name)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role} · {testimonial.company}</div>
                        <div className="mt-1 text-xs text-accent">{testimonial.relationship} · {testimonial.project}</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}


           <div className="mt-8 mb-20">
              <Link
                to="/testimonials-submit"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-medium text-primary-foreground transition hover:opacity-90 hover:scale-105"
                style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
              >
                Share Your Experience <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
      </main>
    </div>
  );
}