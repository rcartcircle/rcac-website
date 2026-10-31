import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { readSyllabusIndex } from "@/lib/art-syllabus";

const gradeAccents = [
  "from-navy to-navy-light",
  "from-gold to-yellow-500",
  "from-emerald-700 to-emerald-900",
  "from-indigo-700 to-indigo-900",
  "from-amber-600 to-amber-800",
];

export async function generateStaticParams() {
  return [6, 7, 8, 9, 10, 11].map((grade) => ({ grade: `grade-${grade}` }));
}

function ComingSoonPage({ grade }: { grade: string }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-xl text-center">
          <Link href="/chithra-akura/art-syllabus" className="text-xs font-semibold uppercase tracking-[0.24em] text-gold hover:text-navy">
            Art Syllabus
          </Link>
          <h1 className="mt-5 font-serif text-4xl font-bold text-navy md:text-5xl">
            Grade <span className="text-gold">{grade.replace("grade-", "")}</span>
          </h1>
          <p className="mt-5 text-lg leading-8 text-navy/60">
            The lessons for this grade are being prepared and will be available soon.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default async function GradeSyllabusPage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = await params;
  let syllabus;

  try {
    syllabus = await readSyllabusIndex(grade);
  } catch {
    if (/^grade-(6|7|8|9|10)$/.test(grade)) {
      return <ComingSoonPage grade={grade} />;
    }
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-16 right-10 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Link href="/chithra-akura/art-syllabus" className="text-xs font-semibold uppercase tracking-[0.24em] text-gold hover:text-navy">
              Art Syllabus
            </Link>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-navy md:text-5xl lg:text-6xl">
              Grade <span className="text-gold">{syllabus.grade}</span>
            </h1>
            <p className="mt-4 text-base text-navy/65 md:text-lg">{syllabus.subject}</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {syllabus.lessons.map((lesson, index) => {
              const hasContent = Boolean(lesson.contentFile);
              const card = (
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-navy/10">
                  <div className={`h-24 bg-gradient-to-br ${gradeAccents[index % gradeAccents.length]}`} />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5">
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                      {String(lesson.id).padStart(2, "0")}
                    </span>
                    <ArrowRight className="h-5 w-5 text-white/80 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <div className="flex min-h-44 flex-col justify-between gap-6 p-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-navy/45">
                        <BookOpenText className="h-4 w-4" />
                        {lesson.code}
                      </div>
                      <h2 className="mt-3 text-xl font-semibold leading-snug text-navy">{lesson.title}</h2>
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${hasContent ? "text-gold" : "text-navy/35"}`}>
                      {hasContent ? "Open lesson" : "Coming soon"}
                    </span>
                  </div>
                </div>
              );

              return hasContent ? (
                <Link key={lesson.id} href={`/chithra-akura/art-syllabus/${grade}/lesson-${lesson.id}`}>
                  {card}
                </Link>
              ) : (
                <div key={lesson.id} aria-disabled="true" className="opacity-65">{card}</div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
