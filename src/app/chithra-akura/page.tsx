import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import projectsData from "@/data/projects-2026.json"

export default function ChithraAkuraPage() {
  const project = (projectsData as any[]).find((p) => p.slug === "chithra-akura")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-12 md:pt-36 md:pb-20">
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-4 tracking-tight">
              {project?.title ?? "Chithra Akura"}
            </h1>
            <p className="text-lg text-navy/60 max-w-2xl mx-auto leading-relaxed">
              {project?.description ?? "An educational art project."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-navy mb-4">About the Project</h2>
              <p className="text-navy/70">This page will host the migrated Chithra Akura content.
              For now, the content has been imported and will be restyled to match the Royal College Art Circle site.</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-navy mb-4">Resources</h2>
              <p className="text-navy/70">Original site and assets will be migrated into this route and refactored into components.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
