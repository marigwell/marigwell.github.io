"use client"

import { useState } from "react"
import { Code2, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { projects, categoryAccent, type Project } from "@/lib/portfolio-data"
import { accentHex } from "@/lib/accent"
import { SectionHeading, PixelTag, StateBadge } from "@/components/pixel"

export function ProjectsSection() {
  const flagship = projects.find((p) => p.flagship)
  const rest = projects.filter((p) => !p.flagship)

  return (
    <section id="projects" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Proof of what I build"
          intro="Backend systems, applied AI, and robotics projects with clear technical scope and stack."
          accent="magenta"
        />

        {flagship && <FlagshipCard project={flagship} />}

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} wide={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DossierHeader({ project }: { project: Project }) {
  const accent = categoryAccent[project.categories[0]]
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border bg-surface px-4 py-2">
      <span className="flex items-center gap-2">
        <span className="inline-flex gap-1" aria-hidden>
          <span className="h-2 w-2" style={{ background: accentHex[accent] }} />
          <span className="h-2 w-2 bg-border-bright" />
          <span className="h-2 w-2 bg-border-bright" />
        </span>
        <span className="font-pixel text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
          {project.id}.dossier
        </span>
      </span>
      <span className="font-pixel text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
        {project.year}
      </span>
    </div>
  )
}

function FlagshipCard({ project }: { project: Project }) {
  const accent = categoryAccent[project.categories[0]]
  return (
    <article
      className="border bg-surface-2"
      style={{ borderColor: accentHex[accent] }}
    >
      <DossierHeader project={project} />
      <div className="grid gap-6 p-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">{project.name}</h3>
            <StateBadge state={project.status} label={project.statusLabel} />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{project.role}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{project.summary}</p>

          <ul className="mt-5 space-y-2">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <span
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0"
                  style={{ background: accentHex[accent] }}
                  aria-hidden
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="font-pixel text-[9px] uppercase tracking-[0.15em] text-muted-foreground">Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <PixelTag key={s}>{s}</PixelTag>
            ))}
          </div>
          <p className="mt-5 font-pixel text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
            Categories
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.categories.map((c) => (
              <span
                key={c}
                className="border px-2 py-1 text-[11px] leading-none"
                style={{ borderColor: accentHex[categoryAccent[c]], color: accentHex[categoryAccent[c]] }}
              >
                {c}
              </span>
            ))}
          </div>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      <a href={project.caseUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-cyan px-3 py-2 text-[10px] font-pixel uppercase tracking-[0.1em] text-cyan transition-colors hover:bg-cyan hover:text-primary-foreground">
        <ExternalLink className="h-3.5 w-3.5" aria-hidden /> Live Demo
      </a>
      <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-border px-3 py-2 text-[10px] font-pixel uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground">
        <Code2 className="h-3.5 w-3.5" aria-hidden /> GitHub Repo
      </a>
    </div>
  )
}

function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  const [open, setOpen] = useState(false)
  const accent = categoryAccent[project.categories[0]]
  return (
    <article className={cn("flex flex-col border border-border bg-surface-2", wide && "lg:col-span-1")}>
      <DossierHeader project={project} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.name}</h3>
        </div>
        <p className="mt-0.5 text-xs uppercase tracking-wide text-muted-foreground">{project.role}</p>
        <div className="mt-3">
          <StateBadge state={project.status} label={project.statusLabel} />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        {open && (
          <ul className="mt-4 space-y-2">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <span
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0"
                  style={{ background: accentHex[accent] }}
                  aria-hidden
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <PixelTag key={s}>{s}</PixelTag>
            ))}
          </div>
          <ProjectLinks project={project} />

          <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-5 inline-flex w-fit items-center gap-2 border border-border px-3 py-1.5 text-[10px] font-pixel uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-cyan hover:text-cyan"
        >
          {open ? "Hide details" : "Read dossier"}
        </button>
      </div>
    </article>
  )
}
