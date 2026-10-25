import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpenText } from "lucide-react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import {
  readSyllabusIndex,
  readSyllabusLesson,
  type SyllabusSection,
} from "@/lib/art-syllabus";

export async function generateStaticParams() {
  const syllabus = await readSyllabusIndex("grade-11");
  return syllabus.lessons
    .filter((lesson) => lesson.contentFile)
    .map((lesson) => ({ grade: "grade-11", lessonId: `lesson-${lesson.id}` }));
}

function SectionContent({ section }: { section: SyllabusSection }) {
  return (
    <section id={section.id} className="scroll-mt-28 border-t border-navy/10 pt-10">
      <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">{section.heading}</h2>
      {section.image ? (
        <a href={section.image} target="_blank" rel="noreferrer" className="mt-7 block overflow-hidden border border-border bg-card">
          <Image
            src={section.image}
            alt={section.heading}
            width={1200}
            height={800}
            className="mx-auto h-auto max-h-[34rem] w-full object-contain"
          />
        </a>
      ) : null}
      {section.points?.length ? (
        <ul className="mt-7 space-y-4 text-base leading-8 text-navy/75 md:text-lg">
          {section.points.map((point) => <li key={point} className="pl-6 before:mr-3 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-0.5 before:rounded-full before:bg-gold before:content-['']">{point}</li>)}
        </ul>
      ) : null}
      {section.numberedPoints?.length ? (
        <ol className="mt-3 list-decimal space-y-3 pl-12 text-base leading-8 text-navy/75 marker:font-semibold marker:text-gold md:text-lg">
          {section.numberedPoints.map((point) => <li key={point} className="pl-2">{point}</li>)}
        </ol>
      ) : null}
      {section.afterNumberedPoints?.length ? (
        <ul className="mt-7 space-y-4 text-base leading-8 text-navy/75 md:text-lg">
          {section.afterNumberedPoints.map((point) => <li key={point} className="pl-6 before:mr-3 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-0.5 before:rounded-full before:bg-gold before:content-['']">{point}</li>)}
        </ul>
      ) : null}
      {section.artworkList?.length ? (
        <div className="mt-7 border-l-2 border-gold/70 bg-card px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Selected works</p>
          <ul className="mt-3 space-y-2 text-navy/75">{section.artworkList.map((work) => <li key={work}>• {work}</li>)}</ul>
        </div>
      ) : null}
      {section.afterArtworkIntro ? (
        <p className="mt-7 text-base leading-8 text-navy/75 md:text-lg">
          {section.afterArtworkIntro}
        </p>
      ) : null}
      {section.afterArtworkList?.length ? (
        <ul className="mt-7 space-y-3 text-base leading-8 text-navy/75 md:text-lg">
          {section.afterArtworkList.map((point) => (
            <li key={point} className="pl-6 before:mr-3 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-0.5 before:rounded-full before:bg-gold before:content-['']">
              {point}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default async function SyllabusLessonPage({
  params,
}: {
  params: Promise<{ grade: string; lessonId: string }>;
}) {
  const { grade, lessonId } = await params;
  let syllabus;
  let lesson;

  try {
    syllabus = await readSyllabusIndex(grade);
    lesson = await readSyllabusLesson(grade, lessonId);
  } catch {
    notFound();
  }

  if (!lesson) notFound();

  const lessonPosition = syllabus.lessons.findIndex((item) => `lesson-${item.id}` === lessonId);
  const previousLesson = syllabus.lessons[lessonPosition - 1];
  const nextLesson = syllabus.lessons[lessonPosition + 1];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <header className="relative overflow-hidden bg-navy px-4 pb-16 pt-32 text-cream md:pt-40">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-gold/20" />
        <div className="relative mx-auto max-w-5xl">
          <Link href={`/chithra-akura/art-syllabus/${grade}`} className="inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-cream"><ArrowLeft className="h-4 w-4" /> Grade {lesson.grade}</Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lesson {String(lesson.id).padStart(2, "0")} · {lesson.code}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight md:text-6xl">{lesson.title}</h1>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <aside className="h-fit border border-border bg-card p-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold"><BookOpenText className="h-4 w-4" /> Contents</div>
            <nav className="mt-5 space-y-3 text-sm text-navy/70">{lesson.sections.map((section) => <a key={section.id} href={`#${section.id}`} className="block transition-colors hover:text-gold">{section.heading}</a>)}</nav>
          </aside>
          <article className="space-y-10">{lesson.sections.map((section) => <SectionContent key={section.id} section={section} />)}</article>
        </div>

        <nav className="mt-16 grid gap-4 border-t border-navy/10 pt-8 sm:grid-cols-2">
          {previousLesson?.contentFile ? <Link href={`/chithra-akura/art-syllabus/${grade}/lesson-${previousLesson.id}`} className="group border border-border bg-card p-5"><span className="text-xs uppercase tracking-[0.18em] text-navy/45">Previous lesson</span><span className="mt-2 flex items-center gap-2 font-semibold text-navy group-hover:text-gold"><ArrowLeft className="h-4 w-4" />{previousLesson.title}</span></Link> : <span />}
          {nextLesson?.contentFile ? <Link href={`/chithra-akura/art-syllabus/${grade}/lesson-${nextLesson.id}`} className="group border border-border bg-card p-5 text-right"><span className="text-xs uppercase tracking-[0.18em] text-navy/45">Next lesson</span><span className="mt-2 flex items-center justify-end gap-2 font-semibold text-navy group-hover:text-gold">{nextLesson.title}<ArrowRight className="h-4 w-4" /></span></Link> : null}
        </nav>
      </div>
      <Footer />
    </main>
  );
}
