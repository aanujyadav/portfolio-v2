import { jsxs, jsx } from "react/jsx-runtime";
import { ArrowUpRight, Mail, Code2, Briefcase, Sparkles, Award, GraduationCap, Phone, Github, Linkedin, MapPin } from "lucide-react";
const skills = {
  Frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Shadcn", "Material UI"],
  Languages: ["JavaScript", "TypeScript"],
  "Backend & Data": ["MySQL", "Socket.io", "REST APIs"],
  "Tools & Cloud": ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Postman"]
};
const experience = [{
  role: "Software Engineer",
  company: "RxMen",
  period: "Aug 2024 — Present",
  note: "One of the earliest engineers building and scaling from launch.",
  points: ["Re-architected the frontend in Next.js — PageSpeed Insights 60 → 90+ via SSR, Core Web Vitals, SEO, and metadata automation.", "Owned end-to-end delivery of patient onboarding, consultation, payments, and engagement workflows.", "Partnered directly with founders, product, and design to refine scope and ship faster.", "Evaluated and integrated critical vendors — payments, calling infrastructure, and operations tooling."]
}, {
  role: "Frontend Developer — Intern",
  company: "RaptorX",
  period: "Mar 2024 — Jul 2024",
  points: ["Built core dashboard modules — logs, webhooks, settings — with full REST API integration.", "Migrated the marketing website to Next.js, improving load speed and search visibility."]
}];
const projects = [{
  name: "SkillFlare",
  tag: "MERN · Team of 3",
  period: "Sep 2023 — Present",
  description: "Full-stack learning platform with course publishing, in-browser coding, ZEGOCLOUD live classes, and Razorpay payments. Led the instructor interface and landing page."
}];
function Portfolio() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 -z-10", style: {
      background: "var(--gradient-radial)"
    } }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 bg-grid opacity-60" }),
    /* @__PURE__ */ jsx("header", { className: "sticky top-4 mx-4 rounded-full z-40 backdrop-blur-md bg-background/60 border-b border-border/50", children: /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-5xl items-center justify-between px-6 py-5", children: [
      /* @__PURE__ */ jsxs("a", { href: "#top", className: "font-display text-2xl", children: [
        "aanuj",
        /* @__PURE__ */ jsx("span", { className: "text-accent", children: "." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden gap-8 text-sm text-muted-foreground md:flex", children: [
        /* @__PURE__ */ jsx("a", { href: "#about", className: "transition hover:text-foreground", children: "About" }),
        /* @__PURE__ */ jsx("a", { href: "#work", className: "transition hover:text-foreground", children: "Work" }),
        /* @__PURE__ */ jsx("a", { href: "#projects", className: "transition hover:text-foreground", children: "Projects" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "transition hover:text-foreground", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "mailto:hello@aanuj.com", className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm transition hover:border-primary hover:text-primary", children: [
        "Get in touch ",
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { id: "top", className: "mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsxs("section", { className: "pt-14 pb-20 md:pt-36 md:pb-40", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
          ] }),
          "Available for collaborations"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display mt-6 text-5xl md:text-7xl", children: [
          "Anujkumar Yadav.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gradient italic", children: "Software Engineer" }),
          " shipping",
          /* @__PURE__ */ jsx("br", {}),
          "healthcare from zero to one."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl", children: [
          "I build user-facing digital products. Currently at",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://rxmen.com", target: "_blank", rel: "noreferrer", className: "text-foreground underline decoration-primary decoration-2 underline-offset-4", children: "RxMen" }),
          ", a sexual wellness startup, where I own product features end-to-end across patient onboarding, consultation, and payments."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxs("a", { href: "#work", className: "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90", style: {
            background: "var(--gradient-warm)",
            boxShadow: "var(--shadow-glow)"
          }, children: [
            "See my work ",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "mailto:hello@aanuj.com", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm transition hover:border-primary", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
            " hello@aanuj.com"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "about", className: "grid gap-6 border-t border-border/60 py-10 md:grid-cols-3", children: [{
        k: "2+",
        v: "Years building production products"
      }, {
        k: "90+",
        v: "PageSpeed score after re-architecture"
      }, {
        k: "0→1",
        v: "Patient workflows owned end-to-end"
      }].map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/60 bg-card/40 p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-5xl text-gradient", children: s.k }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: s.v })
      ] }, s.v)) }),
      /* @__PURE__ */ jsxs("section", { className: "border-t border-border/60 py-10", children: [
        /* @__PURE__ */ jsx(SectionHeader, { icon: /* @__PURE__ */ jsx(Code2, { className: "h-4 w-4" }), eyebrow: "Toolkit", title: "Things I build with" }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-2", children: Object.entries(skills).map(([group, items]) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/60 bg-card/40 p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: group }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: items.map((s) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border bg-background/60 px-3 py-1 text-sm", children: s }, s)) })
        ] }, group)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "work", className: "border-t border-border/60 py-10", children: [
        /* @__PURE__ */ jsx(SectionHeader, { icon: /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4" }), eyebrow: "Experience", title: "Where I've shipped" }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-4", children: experience.map((e) => /* @__PURE__ */ jsxs("article", { className: "group rounded-2xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/60 md:p-8", style: {
          boxShadow: "var(--shadow-soft)"
        }, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-display text-2xl md:text-3xl", children: [
              e.role,
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "·" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: e.company })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: e.period })
          ] }),
          e.note && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm italic text-muted-foreground", children: e.note }),
          /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2.5 text-muted-foreground", children: e.points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-[15px] leading-relaxed", children: p })
          ] }, p)) })
        ] }, e.company)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "projects", className: "border-t border-border/60 py-10", children: [
        /* @__PURE__ */ jsx(SectionHeader, { icon: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }), eyebrow: "Side work", title: "Selected projects" }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6", children: projects.map((p) => /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl", children: p.name }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: p.period })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-accent", children: p.tag }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: p.description })
        ] }, p.name)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "grid gap-6 border-t border-border/60 py-10 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8", children: [
          /* @__PURE__ */ jsx(SectionHeader, { icon: /* @__PURE__ */ jsx(Award, { className: "h-4 w-4" }), eyebrow: "Recognition", title: "Achievements", small: true }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Frontend Excellence & Ownership Award" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "RxMen · Dec 2025" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Recognized for exceptional ownership, consistency, and high-quality feature delivery with strong focus on performance and UX." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8", children: [
          /* @__PURE__ */ jsx(SectionHeader, { icon: /* @__PURE__ */ jsx(GraduationCap, { className: "h-4 w-4" }), eyebrow: "Background", title: "Education", small: true }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "B.Tech, Computer Engineering" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Bajaj Institute of Technology, Wardha · 2021 — 2024" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Diploma, Computer Science" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Agnihotri School of Technology, Wardha · 2018 — 2021" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "contact", className: "border-t border-border/60 py-10", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-5 md:p-16", style: {
        boxShadow: "var(--shadow-soft)"
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: "font-display text-4xl md:text-6xl", children: [
          "Let's build something ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient italic", children: "people use" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xl text-muted-foreground", children: "I'm interested in product-led teams shipping real-world healthcare and consumer software. Reach out — I reply to every message." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-3 sm:grid-cols-2 md:max-w-2xl", children: [
          /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), label: "hello@aanuj.com", href: "mailto:hello@aanuj.com" }),
          /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), label: "+91 90960 20595", href: "tel:+919096020595" }),
          /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }), label: "github.com/aanujyadav", href: "https://github.com/aanujyadav" }),
          /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }), label: "linkedin.com/in/aanujyadav", href: "https://linkedin.com/in/aanujyadav" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("footer", { className: "flex flex-wrap items-center justify-between gap-3 border-t border-border/60 py-8 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
          " India · Available worldwide"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Anujkumar Yadav"
        ] })
      ] })
    ] })
  ] });
}
function SectionHeader({
  icon,
  eyebrow,
  title,
  small = false
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground", children: [
      icon,
      " ",
      eyebrow
    ] }),
    /* @__PURE__ */ jsx("h2", { className: `font-display mt-4 ${small ? "text-3xl" : "text-4xl md:text-5xl"}`, children: title })
  ] });
}
function ContactRow({
  icon,
  label,
  href
}) {
  return /* @__PURE__ */ jsxs("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "group flex items-center justify-between rounded-xl border border-border bg-background/40 px-4 py-3 transition hover:border-primary", children: [
    /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-3 text-sm", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: icon }),
      label
    ] }),
    /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" })
  ] });
}
export {
  Portfolio as component
};
