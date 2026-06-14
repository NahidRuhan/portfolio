import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Globe,
  Code2,
  Database,
  Server,
  Wrench,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/profile-pic.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nahid Pervej Ruhan — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-Stack Developer specializing in Next.js, TypeScript & the MERN stack. Building scalable, revenue-generating platforms from Dhaka, Bangladesh.",
      },
      { property: "og:title", content: "Nahid Pervej Ruhan — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-Stack Developer specializing in Next.js, TypeScript & the MERN stack.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const PROJECTS = [
  {
    name: "ElaRose",
    tagline: "Clothing Brand E-commerce Platform",
    description:
      "Full-stack commercial platform that boosted brand sales by 30% and drives ~BDT 50,000 in monthly revenue through an optimized catalog and seamless COD flow.",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Firebase", "Cloudinary"],
    live: "https://ela-rose-fornt-end-production.vercel.app/",
    github: null,
    highlight: "+30% sales",
  },
  {
    name: "Spread Fast",
    tagline: "Courier Delivery & Management System",
    description:
      "Serverless logistics platform with smart rider dispatching, real-time tracking, RBAC via Firebase Admin SDK, and Stripe checkout with optimistic UI.",
    stack: ["React", "Express", "MongoDB", "Stripe", "TanStack Query", "Firebase"],
    live: "https://spread-fast.web.app/",
    github: "https://github.com/NahidRuhan/Spread-Fast-Client",
    highlight: "Real-time",
  },
  {
    name: "Issue Tracker API",
    tagline: "REST API for Tracking Git Issues",
    description:
      "Strongly-typed REST API with PostgreSQL, JWT auth, RBAC, dynamic query filtering and a centralized error-handling architecture.",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "JWT"],
    live: null,
    github: "https://github.com/NahidRuhan/Issue-tracker-API",
    highlight: "Typed API",
  },
  {
    name: "Graduate Consultancy",
    tagline: "Digital Front Door for Consultancy Firm",
    description:
      "A modern, high-performance website serving as the digital front door for the firm. Features blazing fast SSR/SSG, SEO optimization, and lead-generating contact forms.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    live: "https://next-graduate-consultancy.vercel.app/",
    github: "https://github.com/NahidRuhan/next-graduate-consultancy",
    highlight: "SEO Optimized",
  },
  {
    name: "Ruhan's Karaoke Maker",
    tagline: "AI-Powered Audio Stem Separator",
    description:
      "Full-stack web application that utilizes Facebook's Demucs AI model to isolate vocals, drums, and bass from uploaded songs with a synchronized multi-track playback UI.",
    stack: ["React", "Node.js", "Python", "PyTorch", "FFmpeg", "Tailwind CSS"],
    live: null,
    github: "https://github.com/NahidRuhan/Ruhans-Karaoke-Maker",
    highlight: "Demucs AI",
  },
  {
    name: "Recipe Manager",
    tagline: "Recipe Sharing & Social Platform",
    description:
      "A full-stack recipe management application featuring user authentication, recipe saving, and a social system allowing users to follow others for culinary inspiration.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    live: "https://recipemanager.infinityfreeapp.com/",
    github: "https://github.com/NahidRuhan/recipe-save-with-php-sql",
    highlight: "Social Features",
  },
];

const SKILLS = [
  {
    icon: Code2,
    title: "Languages",
    items: [
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "SQL", slug: "mysql" },
      { name: "Python", slug: "python" },
      { name: "C/C++", slug: "cplusplus" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express", invertDark: true },
      { name: "REST APIs", slug: null },
      { name: "Firebase", slug: "firebase" },
      { name: "Supabase", slug: "supabase" },
      { name: "OAuth 2.0", slug: null },
      { name: "JWT", slug: "jsonwebtokens" },
      { name: "Stripe", slug: "stripe" },
    ],
  },
  {
    icon: Globe,
    title: "Frontend",
    items: [
      { name: "React.js", slug: "react" },
      { name: "Next.js", slug: "nextdotjs", invertDark: true },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "TanStack Query", slug: "reactquery" },
      { name: "Axios", slug: "axios", invertDark: true },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Prisma", slug: "prisma", invertDark: true },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github", invertDark: true },
      { name: "Cursor", slug: null },
      { name: "Postman", slug: "postman" },
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Web Development Instructor",
    org: "CUB Skill Development Program",
    period: "Mar 2026 – Present",
    bullets: [
      "Delivered a full-stack curriculum to a cohort of 12 students covering JS frameworks, responsive frontend and backend API architecture.",
      "Mentored students through the full SDLC, conducting 8+ hands-on code reviews and guiding deployment of 8 functional web apps.",
    ],
  },
  {
    role: "Competitive Programming Instructor",
    org: "Canadian University of Bangladesh",
    period: "Jan 2023 – Oct 2023",
    bullets: [
      "Instructed 35 freshman students across two semesters in foundational C/C++ with hands-on algorithmic curricula.",
      "Coached 10 student teams across 2 live programming contests, providing optimization and real-time debugging guidance.",
    ],
  },
];

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { id: "github", icon: Github, href: "https://github.com/NahidRuhan", label: "GitHub" },
  { id: "linkedin", icon: Linkedin, href: "https://linkedin.com/in/nahidruhan", label: "LinkedIn" },
  { id: "email", icon: Mail, href: "mailto:nahidpervejruhan@gmail.com", label: "Email" },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <nav className="glass rounded-full flex items-center justify-between px-5 py-3">
          <a href="#top" className="font-display font-bold text-base tracking-tight">
            NR<span className="text-gradient">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:nahidpervejruhan@gmail.com"
            className="btn-primary rounded-full px-4 py-2 text-sm font-medium"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Available for new opportunities
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Building <span className="text-gradient">scalable</span>
              <br /> web platforms,
              <br /> end-to-end.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              I'm <span className="text-foreground font-medium">Nahid Pervej Ruhan</span>
              , a Full-Stack Developer from Dhaka specializing in Next.js,
              TypeScript and the MERN stack — shipping revenue-generating products
              and mentoring the next wave of engineers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
                View my work <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="glass rounded-full px-6 py-3 text-sm font-semibold hover:border-primary/40 transition-colors"
              >
                Get in touch
              </a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-muted-foreground">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.id} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="hover:text-foreground transition-colors" aria-label={link.label}>
                  <link.icon className="size-5" />
                </a>
              ))}
              <span className="inline-flex items-center gap-2 text-sm">
                <MapPin className="size-4" /> Dhaka, BD
              </span>
            </div>
          </div>
          <div className="relative justify-self-center md:justify-self-end">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl rounded-full" />
            <div className="relative glass rounded-3xl p-3 shadow-[var(--shadow-card)]">
              <img
                src={avatar}
                alt="Nahid Pervej Ruhan"
                width={320}
                height={320}
                className="rounded-2xl size-72 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 text-xs">
                <div className="font-mono text-secondary">~ uptime</div>
                <div className="font-display font-bold text-lg">3+ years</div>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 text-xs">
                <div className="font-mono text-primary">~ ships</div>
                <div className="font-display font-bold text-lg">10+ projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl mb-12">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="// about" title="A developer who ships and teaches." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              k: "Specialty",
              v: "Next.js · TypeScript · MERN stack with a focus on secure REST APIs and scalable database design.",
            },
            {
              k: "Impact",
              v: "Architected commercial platforms that drive real revenue, including a clothing brand averaging BDT 50K monthly.",
            },
            {
              k: "Beyond code",
              v: "Web Dev & Competitive Programming instructor — mentored 47+ students through full SDLC and live contests.",
            },
          ].map((item) => (
            <div
              key={item.k}
              className="glass card-hover rounded-2xl p-6"
            >
              <div className="font-mono text-xs text-secondary mb-2">{item.k}</div>
              <p className="text-foreground/90 leading-relaxed">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="// stack"
          title="Tools I reach for."
          subtitle="The technologies I use day-to-day to design, build and ship full-stack products."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((g) => (
            <div key={g.title} className="glass card-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                  <g.icon className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i.name}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-background/50 border border-border text-muted-foreground"
                  >
                    {i.slug ? (
                      <img
                        src={`https://cdn.simpleicons.org/${i.slug}`}
                        alt=""
                        className={`size-3 ${i.invertDark ? "dark:invert" : ""}`}
                      />
                    ) : (
                      <g.icon className="size-3" />
                    )}
                    {i.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="// selected work"
          title="Projects that ship."
          subtitle="A snapshot of products I've designed, built and shipped — from commercial e-commerce to typed REST APIs."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, idx) => (
            <article
              key={p.name}
              className={`glass card-hover rounded-3xl p-7 flex flex-col ${
                idx <= 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-primary/15 text-primary whitespace-nowrap">
                  {p.highlight}
                </span>
              </div>
              <p className="text-foreground/85 leading-relaxed mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-background/50 border border-border text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-4 text-sm">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:gap-2.5 transition-all"
                  >
                    Live <ArrowUpRight className="size-4" />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-secondary hover:gap-2.5 transition-all"
                  >
                    <Github className="size-4" /> Source
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="// experience" title="Where I've taught and built." />
        <div className="grid md:grid-cols-2 gap-6">
            {EXPERIENCE.map((e) => (
              <div key={e.role} className={`glass rounded-2xl p-6 card-hover ${e.role === "Web Development Instructor" ? "md:col-span-2" : ""}`}>
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div className="flex items-start gap-3">
                    <div className="size-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                      <Briefcase className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg leading-tight">
                        {e.role}
                      </h3>
                      <p className="text-sm text-muted-foreground">{e.org}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-foreground/85 leading-relaxed">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <aside className="glass rounded-2xl p-6 card-hover flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <GraduationCap className="size-5" />
              </div>
              <h3 className="font-display font-semibold text-lg">Education</h3>
            </div>
            <p className="font-medium">B.Sc. in Computer Science & Engineering</p>
            <p className="text-sm text-muted-foreground mt-1 mb-2">
              Canadian University of Bangladesh
            </p>
            <p className="font-mono text-xs text-primary mt-auto">
              Expected July 2026
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              // let's build
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              I'm currently open to full-stack roles, freelance builds and
              technical mentoring engagements. Let's talk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:nahidpervejruhan@gmail.com"
                className="btn-primary rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
              >
                <Mail className="size-4" /> nahidpervejruhan@gmail.com
              </a>
              <a
                href="tel:+8801886349919"
                className="glass rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 hover:border-secondary/40 transition-colors"
              >
                <Phone className="size-4" /> +880 1886-349919
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Nahid Pervej Ruhan. Crafted with care in
          Dhaka.
        </p>
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.id} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="hover:text-foreground transition-colors" aria-label={link.label}>
              <link.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
