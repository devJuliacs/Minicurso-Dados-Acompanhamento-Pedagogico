import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { AboutSection } from "@/components/sections/about-section"
import { EvaluationSection } from "@/components/sections/evaluation-section"
import { HeroSection } from "@/components/sections/hero-section"
import { MaterialSection } from "@/components/sections/material-section"
import { ReferencesSection } from "@/components/sections/references-section"
import { StudyPathSection } from "@/components/sections/study-path-section"
import { VideoSection } from "@/components/sections/video-section"

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <StudyPathSection />
        <VideoSection />
        <MaterialSection />
        <EvaluationSection />
        <ReferencesSection />
      </main>
      <SiteFooter />
    </>
  )
}
