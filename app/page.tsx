import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { ProgressionRoute } from "@/components/progression-route"
import { CareerMap } from "@/components/career-map"
import { ExperienceTabs } from "@/components/experience-tabs"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { CommunitySection } from "@/components/community-section"
import { AboutContact } from "@/components/about-contact"

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <Hero />
      <ProgressionRoute />
      <CareerMap />
      <ExperienceTabs />
      <ProjectsSection />
      <EducationSection />
      <CommunitySection />
      <AboutContact />
    </main>
  )
}
