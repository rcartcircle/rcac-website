import Link from "next/link";
import { ArrowUpRight, BookOpenCheck, BookOpenText, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const resources = [
  {
    label: "Art Syllabus",
    eyebrow: "Curriculum resource",
    description:
      "Browse the art syllabus pathway from Grade 6 through Grade 11 and continue to the detailed lesson resources.",
    href: "/chithra-akura/art-syllabus",
    icon: BookOpenText,
    accent: "from-navy to-navy-light",
    external: false,
  },
  {
    label: "Learning Portal",
    eyebrow: "Creative practice",
    description:
      "Explore focused learning tracks across design, materials, architecture, fashion, vehicles, and environmental design.",
    href: "/chithra-akura/learning-portal",
    icon: GraduationCap,
    accent: "from-gold to-amber-500",
    external: false,
  },
  {
    label: "O/L Instruction Book",
    eyebrow: "Exam resource",
    description:
      "Read the instruction book online for guidance and reference while preparing for the G.C.E. Ordinary Level Art examination.",
    href: "https://online.pubhtml5.com/kdkt/lnri/",
    icon: BookOpenCheck,
    accent: "from-emerald-700 to-teal-500",
    external: true,
  },
] as const;

export default function ChithraAkuraPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-5rem] top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-0 right-[-4rem] h-96 w-96 rounded-full bg-navy/10 blur-3xl" />
          <div className="absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full border border-gold/15" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Chithra Akura
              <span className="h-px w-10 bg-gold" />
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-navy md:text-5xl lg:text-6xl">
              Learn art with <span className="text-gold">purpose.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-navy/65 md:text-lg">
              A learning space from the Royal College Art Circle, bringing the
              art syllabus and wider creative practice together in one place.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            {resources.map(({ label, eyebrow, description, href, icon: Icon, accent, external }) => (
              <Link
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-navy/10"
              >
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${accent}`}>
                  <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border border-white/20 transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute bottom-[-4rem] left-8 h-36 w-36 rounded-full border border-white/20" />
                  <div className="absolute inset-5 border border-white/20" />
                  <Icon className="absolute bottom-6 left-7 h-12 w-12 text-white/90 stroke-[1.25]" />
                  <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white/80 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    {eyebrow}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-bold text-navy">
                    {label}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-navy/65">
                    {description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-gold">
                    Explore resource
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
