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
  Download,
  Rocket,
  Users,
  Lightbulb,
  ExternalLink,
  Calendar,
  Building2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/profile-pic.png";
import antigravityImg from "@/assets/antigravity.jpg";
import cursorImg from "@/assets/cursor.webp";
import oauthImg from "@/assets/oauth.webp";
import elaroseImg from "@/assets/elarose.png";
import spreadFastImg from "@/assets/spreadfast.png";
import graduateConsultancyImg from "@/assets/graduate-consultancy.png";
import karaokeImg from "@/assets/karaoke.png";

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
    year: "2024",
    type: "FULL STACK",
    image: elaroseImg
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
    year: "2023",
    type: "FULL STACK",
    image: spreadFastImg
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
    year: "2023",
    type: "FRONTEND",
    image: graduateConsultancyImg
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
    year: "2023",
    type: "BACKEND",
    image: "https://placehold.co/600x400/111111/444444?text=Issue+Tracker"
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
    year: "2022",
    type: "FULL STACK",
    image: karaokeImg
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
    year: "2022",
    type: "FULL STACK",
    image: "https://placehold.co/600x400/111111/444444?text=Recipe+Manager"
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
      { name: "OAuth 2.0", slug: null, customImg: oauthImg },
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
      { name: "Cursor", slug: null, customImg: cursorImg },
      { name: "Postman", slug: "postman" },
      { name: "Antigravity", slug: null, customImg: antigravityImg },
    ],
  },
];

const WORK_EXPERIENCE = [
  {
    role: "Web Development Instructor",
    company: "CUB Skill Development Program",
    location: "On-site",
    period: "Mar 2026 – Present",
    bullets: [
      "Delivered a full-stack curriculum to a cohort of 12 students covering JS frameworks, responsive frontend and backend API architecture.",
      "Mentored students through the full SDLC, conducting 8+ hands-on code reviews and guiding deployment of 8 functional web apps.",
    ],
    stack: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE.JS"],
    current: true,
  },
  {
    role: "Competitive Programming Instructor",
    company: "Canadian University of Bangladesh",
    location: "On-site",
    period: "Jan 2023 – Oct 2023",
    bullets: [
      "Instructed 35 freshman students across two semesters in foundational C/C++ with hands-on algorithmic curricula.",
      "Coached 10 student teams across 2 live programming contests, providing optimization and real-time debugging guidance.",
    ],
    stack: ["C", "C++", "ALGORITHMS", "DATA STRUCTURES"],
    current: false,
  },
];

const EDUCATION = [
  {
    role: "BSc in Computer Science & Engineering",
    company: "Canadian University Of Bangladesh",
    period: "2022 - 2026",
    bullets: [
      "Pursuing a rigorous computer science curriculum with focus on algorithms, data structures, software engineering, and modern web systems.",
    ],
    stack: ["Data Structures & Algorithms", "Database Systems", "Software Engineering", "OOP"],
    current: true,
  },
  {
    role: "Higher Secondary Certificate (HSC)",
    company: "Jalalabad College",
    gpa: "5.00",
    period: "2019 - 2021",
    bullets: [
      "Completed HSC with Science group, building a strong foundation in Mathematics, Physics, and logical reasoning.",
    ],
    stack: ["Mathematics", "Chemistry", "Physics", "Information Technology"],
    current: false,
  },
  {
    role: "Secondary School Certificate (SSC)",
    company: "Sylhet Govt Pilot High School",
    gpa: "4.94",
    period: "2019",
    bullets: [
      "Graduated SSC with a focus on core sciences, establishing early analytical skills and academic excellence.",
    ],
    stack: ["Mathematics", "Chemistry", "Physics", "Information Technology"],
    current: false,
  }
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
        <WorkExperience />
        <Education />
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
              Nahid Pervej <span className="text-gradient">Ruhan</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              A <span className="text-foreground font-medium">Full-Stack Developer</span> from Dhaka specializing in Next.js,
              TypeScript and the MERN stack — shipping revenue-generating products
              and mentoring the next wave of engineers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
                View my work <ArrowUpRight className="size-4" />
              </a>
              <a
                href="/ruhan_resume.pdf"
                download="Nahid_Pervej_Ruhan_Resume.pdf"
                className="glass rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 hover:border-primary/40 transition-colors"
              >
                Download Resume <Download className="size-4" />
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
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="text-foreground/80 leading-relaxed space-y-4 text-lg">
              <p>
                My journey began with C/C++ in competitive programming, which taught me how to think algorithmically. I soon transitioned into web development, falling in love with the ability to build scalable, full-stack platforms from scratch.
              </p>
              <p>
                I thrive on architecting products that solve real-world problems and drive revenue. Whether it's designing secure REST APIs or optimizing a Next.js frontend, I enjoy taking ownership of the entire product lifecycle.
              </p>
              <p>
                Outside of IDEs and terminal windows, I enjoy exploring new technologies, playing sports, and painting. I'm also deeply passionate about teaching—having mentored over 47 students, I find joy in breaking down complex concepts for the next generation of developers.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 py-1 my-2">
              <p className="font-mono text-sm md:text-base italic text-primary">
                "To code, or not to code, Leave it to claude"
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-3 mt-2">
              {["FRONTEND", "BACKEND", "FULL STACK"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono border border-border rounded-md text-muted-foreground bg-background/50 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Grid of Cards */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mt-12 lg:mt-16">
            {[
              {
                id: "01",
                icon: Code2,
                title: "Clean Code",
                desc: "Maintainable, scalable architecture following industry standards.",
              },
              {
                id: "02",
                icon: Rocket,
                title: "Performance",
                desc: "Optimized for speed, Core Web Vitals, and scale.",
              },
              {
                id: "03",
                icon: Users,
                title: "Collaboration",
                desc: "Team player focused on shared goals and clear communication.",
              },
              {
                id: "04",
                icon: Lightbulb,
                title: "Innovation",
                desc: "Modern stacks applied to real-world business problems.",
              },
            ].map((card) => (
              <div
                key={card.id}
                className="relative glass card-hover rounded-2xl p-6 lg:p-8 overflow-hidden group"
              >
                {/* Large Background Number */}
                <div className="absolute top-2 right-4 font-display font-bold text-7xl opacity-5 text-foreground transition-opacity group-hover:opacity-10 select-none">
                  {card.id}
                </div>

                <div className="relative z-10">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <card.icon className="size-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
                    ) : i.customImg ? (
                      <img
                        src={i.customImg}
                        alt=""
                        className="size-3 object-contain rounded-sm"
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
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="// selected work"
          title="Projects that ship."
          subtitle="A snapshot of products I've designed, built and shipped — from commercial e-commerce to typed REST APIs."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="glass card-hover rounded-3xl flex flex-col group relative hover:z-[100]"
            >
              {/* Image Header Container */}
              <div className="relative w-full shrink-0 group/img">
                
                {/* The Cropped Image Header */}
                <div className="relative h-48 sm:h-52 w-full bg-muted/20 overflow-hidden rounded-t-3xl">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" />
                  
                  <div className="absolute bottom-4 left-4 glass bg-background/90 rounded-full px-3 py-1 text-[10px] font-mono text-muted-foreground uppercase tracking-wider z-10">
                    {p.type}
                  </div>
                </div>

                {/* The Enlarged Hover Popout */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] sm:w-[180%] max-w-[800px] z-[100] opacity-0 invisible group-hover/img:opacity-100 group-hover/img:visible transition-all duration-300 pointer-events-none drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <img src={p.image} alt={p.name} className="w-full h-auto object-contain rounded-2xl border border-border/50 bg-background/90 backdrop-blur-xl p-2 scale-95 group-hover/img:scale-100 transition-transform duration-300 ease-out" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold mb-2 leading-tight">{p.name}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary rounded-xl py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="size-4" /> LIVE
                    </a>
                  ) : (
                    <div className="btn-primary rounded-xl py-2.5 text-xs font-semibold flex items-center justify-center gap-2 opacity-50 cursor-not-allowed">
                      <ExternalLink className="size-4" /> LIVE
                    </div>
                  )}
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="glass rounded-xl py-2.5 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors border border-border/50"
                    >
                      <Github className="size-4" /> SOURCE
                    </a>
                  ) : (
                    <div className="glass rounded-xl py-2.5 text-xs font-semibold flex items-center justify-center gap-2 opacity-50 cursor-not-allowed border border-border/50">
                      <Github className="size-4" /> SOURCE
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkExperience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            From internships to production systems — a record of real delivery.
          </p>
        </div>

        <div className="relative border-l border-primary/20 ml-3 md:ml-4 space-y-10 pb-4">
          {WORK_EXPERIENCE.map((job) => (
            <div key={job.role} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-primary ring-4 ring-background" />

              {/* Job Card */}
              <div className="glass rounded-2xl p-6 md:p-8 card-hover">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-foreground">{job.role}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {job.company}
                      </span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <MapPin className="size-3.5" /> {job.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-background/50 border border-border px-3 py-1.5 rounded-full">
                      <Calendar className="size-3.5" /> {job.period}
                    </div>
                    {job.current && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full">
                        <div className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        CURRENT
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-foreground/85 leading-relaxed mb-6">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.stack.map(s => (
                    <span key={s} className="text-[10px] font-mono px-2 py-1 rounded-md bg-background border border-border text-muted-foreground uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 flex items-center gap-4">
          <div className="size-12 rounded-xl bg-background border border-border flex items-center justify-center text-primary shadow-sm shrink-0">
            <Building2 className="size-6" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-1">
              Education
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Academic background and core foundations.
            </p>
          </div>
        </div>

        <div className="relative border-l border-primary/20 ml-3 md:ml-4 space-y-10 pb-4">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-primary ring-4 ring-background" />

              <div className="glass rounded-3xl p-6 md:p-8 card-hover border border-border/50">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-foreground">{edu.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">
                        <Building2 className="size-3.5 inline-block mr-1.5 -mt-0.5" />
                        {edu.company}
                      </span>
                      {edu.gpa && (
                        <span className="text-muted-foreground font-mono text-xs border border-border/50 bg-background/50 px-2 py-0.5 rounded-md">
                          GPA <strong className="text-primary ml-1">{edu.gpa}</strong>
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-background/50 border border-border px-3 py-1.5 rounded-full">
                      <Calendar className="size-3.5" /> {edu.period}
                    </div>
                    {edu.current ? (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full">
                        <div className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        EXPECTED
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted/20 border border-border/50 px-3 py-1.5 rounded-full">
                        COMPLETED
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-foreground/85 leading-relaxed mb-6">
                  {edu.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {edu.stack.map(s => (
                    <span key={s} className="text-[10px] font-mono px-2 py-1 rounded-md bg-background border border-border text-muted-foreground uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
