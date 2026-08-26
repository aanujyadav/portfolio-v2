import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Star, Send, User, Briefcase, Heart, CheckCircle, Mail } from "lucide-react";
import { useState } from "react";
import { supabase, type TestimonialInsert } from "../lib/supabase";

export const Route = createFileRoute("/testimonials-submit")({
  head: () => ({
    meta: [
      { title: "Submit a Review — Testimonials | Anujkumar Yadav" },
      { name: "description", content: "Share your experience working with Anujkumar Yadav. Submit a testimonial about our collaboration on healthcare technology projects." },
      { property: "og:title", content: "Submit a Review — Testimonials | Anujkumar Yadav" },
      { property: "og:description", content: "Have you worked with Anuj? Share your experience and help others understand what it's like to collaborate on healthcare projects." },
      { property: "og:image", content: "/OG_anuj.png" },
      { property: "og:url", content: "https://aanuj.com/testimonials-submit" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/OG_anuj.png" },
    ],
    links: [
      { rel: "canonical", href: "/testimonials-submit" },
    ],
  }),
  component: SubmitTestimonialPage,
});

function SubmitTestimonialPage() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    email: '',
    relationship: '',
    project: '',
    rating: 5,
    testimonial: '',
    consent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Prepare data for Supabase
      const testimonialData: TestimonialInsert = {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        company: formData.company,
        relationship: formData.relationship,
        project: formData.project,
        rating: formData.rating,
        testimonial: formData.testimonial,
        consent: formData.consent,
        status: 'pending' // Will be reviewed before approval
      };

      // Insert into Supabase
      const { data, error: insertError } = await supabase
        .from('testimonials')
        .insert([testimonialData])
        .select();

      if (insertError) {
        throw insertError;
      }

      console.log('Testimonial submitted successfully:', data);
      setIsSubmitted(true);
      
    } catch (err) {
      console.error('Error submitting testimonial:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
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
                to="/testimonials" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Testimonials
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-3xl px-6 py-20" role="main">
          <div 
            className="rounded-3xl border border-border/60 bg-card/50 p-8 md:p-16 backdrop-blur-sm text-center"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">
              <span className="text-gradient italic">Thank you!</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Your testimonial has been submitted successfully! It's now pending review and will be published on the testimonials page once approved.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              I'll review your testimonial soon and you'll see it live on the site. Thank you for taking the time to share your experience!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm transition hover:border-primary"
              >
                View All Testimonials
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
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
              to="/testimonials" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Testimonials
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6" role="main">
        {/* Hero */}
        <section className="pt-16 pb-12" aria-labelledby="hero-heading">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <Heart className="h-4 w-4" /> Share Your Experience
          </div>
          
          <h1 id="hero-heading" className="font-display mt-8 text-5xl md:text-7xl leading-tight">
            Write a <span className="text-gradient italic">review</span>
          </h1>
          
          <p className="mt-10 max-w-2xl text-xl text-muted-foreground leading-relaxed">
            Have you worked with me on a project? I'd love to hear about your experience. 
            Your feedback helps me improve and shows others what collaboration looks like.
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mt-6">
              <p className="text-sm text-red-200">
                <strong>Error:</strong> {error}
              </p>
            </div>
          )}
        </section>

        {/* Form */}
        <section className="pb-20">
          <div 
            className="rounded-3xl border border-border/60 bg-card/50 p-8 md:p-12 backdrop-blur-sm"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="font-display text-2xl text-gradient">About You</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                      Your Role *
                    </label>
                    <input
                      type="text"
                      id="role"
                      required
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="e.g. Product Manager, Developer, Designer"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Company or organization name"
                    />
                  </div>
                </div>
              </div>

              {/* Work Relationship */}
              <div className="space-y-6">
                <h2 className="font-display text-2xl text-gradient">Our Collaboration</h2>
                
                <div>
                  <label htmlFor="relationship" className="block text-sm font-medium text-foreground mb-2">
                    How did we work together? *
                  </label>
                  <select
                    id="relationship"
                    required
                    value={formData.relationship}
                    onChange={(e) => handleInputChange('relationship', e.target.value)}
                    className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select relationship type</option>
                    <option value="Colleague">Colleague (same company)</option>
                    <option value="Teammate">Teammate (same project team)</option>
                    <option value="Client">Client (hired me for freelance work)</option>
                    <option value="Collaborator">Collaborator (worked together on project)</option>
                    <option value="Manager">Manager (managed me)</option>
                    <option value="Mentee">Mentee (I mentored you)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                    What project did we work on? *
                  </label>
                  <input
                    type="text"
                    id="project"
                    required
                    value={formData.project}
                    onChange={(e) => handleInputChange('project', e.target.value)}
                    className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. Healthcare Platform, Learning Management System, etc."
                  />
                </div>
              </div>

              {/* Rating and Review */}
              <div className="space-y-6">
                <h2 className="font-display text-2xl text-gradient">Your Review</h2>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Overall Rating *
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleInputChange('rating', star)}
                        className="transition hover:scale-110"
                      >
                        <Star 
                          className={`h-8 w-8 ${star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-yellow-400'}`}
                        />
                      </button>
                    ))}
                    <span className="ml-3 text-lg font-medium">{formData.rating} out of 5</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="testimonial" className="block text-sm font-medium text-foreground mb-2">
                    Your Testimonial *
                  </label>
                  <textarea
                    id="testimonial"
                    required
                    rows={6}
                    value={formData.testimonial}
                    onChange={(e) => handleInputChange('testimonial', e.target.value)}
                    className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Share your experience working with me. What was it like? What did I do well? How did our collaboration go? Be specific about the project and my contributions."
                  />
                  <div className="mt-2 text-sm text-muted-foreground">
                    {formData.testimonial.length}/500 characters recommended
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => handleInputChange('consent', e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    I consent to my testimonial being published on Anujkumar Yadav's portfolio website. 
                    I understand that my name, role, company, and testimonial will be publicly visible. 
                    My email address will not be published.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl px-8 py-4 text-lg font-medium text-primary-foreground transition hover:opacity-90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Review <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}