import Link from "next/link";
import { ArrowUpRight, Building2, CarFront, Leaf, Palette, Shirt, Sparkles } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const learningTopics = [
  ["Graphic Design", "https://sites.google.com/view/rcac-graphic-design/", Palette, "from-rose-500 to-pink-600"],
  ["Sculpting", "https://sites.google.com/view/rcac-sculpting/", Sparkles, "from-violet-500 to-purple-600"],
  ["Architecture", "https://sites.google.com/view/rcac-architecture/", Building2, "from-sky-500 to-cyan-600"],
  ["Fashion & Textiles", "https://sites.google.com/view/rcac-fashion-and-textiles/", Shirt, "from-amber-500 to-orange-600"],
  ["Vehicle Design", "https://sites.google.com/view/rcac-vehicle-designing/", CarFront, "from-teal-500 to-emerald-600"],
  ["Environmental Friendly Design", "https://sites.google.com/view/rcac-efd/", Leaf, "from-emerald-500 to-green-600"],
] as const;

export default function ChithraAkuraLearningPortalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-36">
        <div className="pointer-events-none absolute inset-0"><div className="absolute left-12 top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" /><div className="absolute bottom-8 right-12 h-80 w-80 rounded-full bg-navy/10 blur-3xl" /></div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Link href="/chithra-akura" className="text-xs font-semibold uppercase tracking-[0.24em] text-gold hover:text-navy">Chithra Akura</Link>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-navy md:text-5xl lg:text-6xl">Learning <span className="text-gold">Portal</span></h1>
            <p className="mt-4 text-base text-navy/65 md:text-lg">Explore focused learning modules for design, materials, visual thinking, and creative practice.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {learningTopics.map(([label, href, Icon, accent]) => (
              <Link key={label} href={href} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10">
                <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${accent} opacity-90`} />
                <div className="relative"><div className="flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/20 text-white ring-2 ring-white/20 backdrop-blur-sm"><Icon className="h-5 w-5" /></div><div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-cream transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><ArrowUpRight className="h-4 w-4" /></div></div><div className="mt-12"><div className="text-xs uppercase tracking-[0.2em] text-navy/45">Learning Track</div><h2 className="mt-2 pr-6 text-xl font-semibold text-navy">{label}</h2></div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
