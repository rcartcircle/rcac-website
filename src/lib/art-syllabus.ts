import { readFile } from "node:fs/promises";
import path from "node:path";

export interface SyllabusLessonSummary {
  id: number;
  code: string;
  title: string;
  pdfStartPage?: number;
  contentFile: string | null;
  status: string;
}

export interface SyllabusIndex {
  grade: number;
  subject: string;
  lessons: SyllabusLessonSummary[];
}

export interface SyllabusSection {
  id: string;
  heading: string;
  image?: string;
  images?: string[];
  imageCaptions?: Record<string, string>;
  points?: SyllabusPoint[];
  numberedPoints?: SyllabusPoint[];
  afterNumberedPoints?: SyllabusPoint[];
  artworkList?: SyllabusPoint[];
  afterArtworkIntro?: string;
  afterArtworkList?: SyllabusPoint[];
  notes?: SyllabusNote;
  subSections?: SyllabusSubSection[];
}

export type SyllabusPoint = string | {
  text: string;
  subPoints?: string[];
};

export interface SyllabusNote {
  heading: string;
  items: string[];
}

export interface SyllabusSubSection {
  heading: string;
  text: string;
}

export interface SyllabusLesson {
  grade: number;
  id: number;
  code: string;
  title: string;
  sections: SyllabusSection[];
}

const syllabusDataRoot = path.join(
  process.cwd(),
  "src",
  "data",
  "chithra-akura",
  "art-syllabus",
);

function gradeDirectory(grade: string) {
  if (!/^grade-\d+$/.test(grade)) {
    throw new Error(`Invalid grade directory: ${grade}`);
  }

  return path.join(syllabusDataRoot, grade);
}

export async function readSyllabusIndex(grade: string): Promise<SyllabusIndex> {
  const file = await readFile(path.join(gradeDirectory(grade), "lessons.json"), "utf8");
  return JSON.parse(file) as SyllabusIndex;
}

export async function readSyllabusLesson(
  grade: string,
  lessonId: string,
): Promise<SyllabusLesson | null> {
  const index = await readSyllabusIndex(grade);
  const numericLessonId = lessonId.replace(/^lesson-/, "");
  const lesson = index.lessons.find((item) => String(item.id) === numericLessonId);

  if (!lesson?.contentFile) {
    return null;
  }

  const file = await readFile(
    path.join(gradeDirectory(grade), lesson.contentFile),
    "utf8",
  );
  return JSON.parse(file) as SyllabusLesson;
}
