import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const gradeOptions = [
  ["Grade 6", "/legacy/sub-art-syllabus/grade-6/grade-6-main.html", "from-navy to-navy-light"],
  ["Grade 7", "/legacy/sub-art-syllabus/grade-7/grade-7-main.html", "from-gold to-yellow-400"],
  ["Grade 8", "/legacy/sub-art-syllabus/grade-8/grade-8-main.html", "from-slate-700 to-slate-900"],
  ["Grade 9", "/legacy/sub-art-syllabus/grade-9/grade-9-main.html", "from-indigo-700 to-indigo-900"],
  ["Grade 10", "/legacy/sub-art-syllabus/grade-10/grade-10-main.html", "from-emerald-700 to-emerald-900"],
  ["Grade 11", "/chithra-akura/art-syllabus/grade-11", "from-amber-600 to-amber-800"],
] as const;

export default function ChithraAkuraArtSyllabusPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-16 right-10 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Link href="/chithra-akura" className="text-xs font-semibold uppercase tracking-[0.24em] text-gold hover:text-navy">
              Chithra Akura
            </Link>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-navy md:text-5xl lg:text-6xl">
              Art <span className="text-gold">Syllabus</span>
            </h1>
            <p className="mt-4 text-base text-navy/65 md:text-lg">
              Choose a grade to browse the curriculum path and detailed lesson resources.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {gradeOptions.map(([label, href, accent]) => (
              <Link key={label} href={href} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10">
                <div className={`h-24 bg-gradient-to-br ${accent}`} />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5">
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">{label.replace("Grade ", "")}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm"><ArrowRight className="h-4 w-4" /></div>
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div><div className="text-xs uppercase tracking-[0.2em] text-navy/45">Curriculum</div><h2 className="mt-2 text-2xl font-semibold text-navy">{label}</h2></div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-cream transition-transform duration-300 group-hover:scale-110"><GraduationCap className="h-5 w-5" /></div>
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
