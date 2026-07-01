import { createFileRoute, Link } from "@tanstack/react-router";
import { PROJECTS } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github, Code2, AlertTriangle, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { projectId } = Route.useParams();
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="btn-primary py-2 px-4 rounded-xl text-sm font-semibold">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Back Button */}
        <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 font-mono text-sm uppercase tracking-wider">
          <ArrowLeft className="size-4" /> Back to Portfolio
        </Link>

        {/* Header Section */}
        <div className="glass rounded-3xl p-6 sm:p-10 mb-12 border border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            {/* Image */}
            <div className="w-full md:w-1/2 shrink-0 rounded-2xl overflow-hidden bg-muted/20 border border-border/50 shadow-2xl">
              <img src={project.image} alt={project.name} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Title & Actions */}
            <div className="w-full md:w-1/2 flex flex-col h-full justify-center">
              <div className="mb-6">
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full mb-4 inline-block">
                  {project.type}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">{project.name}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-display font-medium">{project.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary rounded-xl py-3 px-6 text-sm font-semibold flex items-center justify-center gap-2 flex-1 sm:flex-none">
                    <ExternalLink className="size-4" /> Live Project
                  </a>
                ) : (
                  <div className="btn-primary rounded-xl py-3 px-6 text-sm font-semibold flex items-center justify-center gap-2 opacity-50 cursor-not-allowed flex-1 sm:flex-none">
                    <ExternalLink className="size-4" /> Live Project
                  </div>
                )}
                
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="glass rounded-xl py-3 px-6 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors border border-border/50 flex-1 sm:flex-none">
                    <Github className="size-4" /> GitHub Repo
                  </a>
                ) : (
                  <div className="glass rounded-xl py-3 px-6 text-sm font-semibold flex items-center justify-center gap-2 opacity-50 cursor-not-allowed border border-border/50 flex-1 sm:flex-none">
                    <Github className="size-4" /> GitHub Repo
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Main Content (Left, 2 cols) */}
          <div className="md:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 text-foreground">
                 Overview
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 text-foreground">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <AlertTriangle className="size-5" />
                </div>
                Challenges Faced
              </h2>
              <div className="glass p-8 rounded-3xl border border-primary/20 bg-primary/5">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {project.challenges}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 text-foreground">
                <div className="size-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Lightbulb className="size-5" />
                </div>
                Future Plans
              </h2>
              <div className="glass p-8 rounded-3xl border border-secondary/20 bg-secondary/5">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {project.futurePlans}
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar (Right, 1 col) */}
          <div className="md:col-span-1 space-y-6">
            <section className="glass p-8 rounded-3xl border border-border/50">
              <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
                <Code2 className="size-4" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-background border border-border text-foreground/80">
                    {s}
                  </span>
                ))}
              </div>
            </section>
            
            {project.highlight && (
              <section className="glass p-8 rounded-3xl border border-border/50 bg-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3 relative z-10">
                  Highlight
                </h3>
                <p className="font-display text-2xl font-bold text-foreground relative z-10">
                  {project.highlight}
                </p>
              </section>
            )}


          </div>

        </div>

      </div>
    </div>
  );
}
