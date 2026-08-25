import { Code2, Link2, Mail, MapPin, ExternalLink } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { PixelPanel, SectionHeading } from "@/components/pixel"

export function AboutContact() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 lg:px-8">
      <SectionHeading eyebrow="ABOUT / CONTACT" title="Build something that matters." copy="A compact profile, a clear route, and an open invitation to collaborate." />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <PixelPanel accent="cyan" className="p-7 md:p-10">
          <p className="font-pixel text-[10px] uppercase tracking-[.18em] text-cyan">// PLAYER PROFILE</p>
          <h3 className="mt-6 font-pixel text-lg leading-relaxed text-foreground md:text-2xl">CURIOUS BY DEFAULT.<br />RELIABLE BY DESIGN.</h3>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">{profile.intro} I enjoy turning ambiguous ideas into systems that are useful, understandable, and ready to ship.</p>
          <div className="mt-8 flex flex-wrap gap-2">{["Backend systems", "Applied AI", "Cloud deployment", "Creative tech"].map((item) => <span key={item} className="border border-border bg-card px-3 py-2 font-mono text-xs text-secondary-foreground">{item}</span>)}</div>
        </PixelPanel>
        <PixelPanel accent="amber" className="p-7 md:p-10">
          <p className="font-pixel text-[10px] uppercase tracking-[.18em] text-amber">// OPEN CHANNEL</p>
          <h3 className="mt-6 font-pixel text-lg leading-relaxed text-foreground md:text-2xl">LET&apos;S CONNECT.</h3>
          <div className="mt-8 grid gap-3">
            <a className="flex items-center gap-3 border border-border bg-card p-3 text-sm transition-colors hover:border-cyan hover:text-cyan" href={`mailto:${profile.email}`}><Mail className="h-4 w-4" />{profile.email}</a>
            <a className="flex items-center gap-3 border border-border bg-card p-3 text-sm transition-colors hover:border-cyan hover:text-cyan" href={profile.linkedin} target="_blank" rel="noreferrer"><Link2 className="h-4 w-4" />LinkedIn <ExternalLink className="ml-auto h-3 w-3" /></a>
            <a className="flex items-center gap-3 border border-border bg-card p-3 text-sm transition-colors hover:border-cyan hover:text-cyan" href={profile.github} target="_blank" rel="noreferrer"><Code2 className="h-4 w-4" />GitHub <ExternalLink className="ml-auto h-3 w-3" /></a>
            <div className="flex items-center gap-3 p-3 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-amber" />{profile.location}</div>
          </div>
        </PixelPanel>
      </div>
      <footer className="mt-20 flex flex-col gap-4 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>JIMWELL MARIGMEN // PORTFOLIO MAP</span><a className="text-cyan hover:underline" href={profile.resume} download>DOWNLOAD RESUME</a></footer>
    </section>
  )
}
