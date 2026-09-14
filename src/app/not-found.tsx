import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,168,76,0.18),_transparent_35%),linear-gradient(135deg,_#091426_0%,_#10213f_30%,_#f4e9d8_100%)] px-6 py-10 text-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(9,20,38,0.82),rgba(16,33,63,0.62))]" />

      <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f1d37]/80 p-6 shadow-[0_30px_80px_rgba(9,20,38,0.55)] backdrop-blur-xl md:p-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border-none bg-[#d4a84c]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#f6d98d]">
            Royal College Art Circle
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h1 className="font-serif text-5xl leading-none text-white md:text-7xl">
              Page not found
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 md:text-lg">
              The page you were looking for may have moved, been renamed, or is
              currently under development. Let&apos;s take you back to the
              creative work happening on the main site.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#d4a84c] px-5 py-3 text-sm font-semibold text-[#0f1d37] transition hover:bg-[#f0d48b]"
              >
                Return home
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Explore projects
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-44 w-44 rounded-full bg-[#d4a84c]/20 blur-3xl" />
            <div className="relative rounded-[1.75rem] border border-[#d4a84c]/30 bg-[#101c31]/90 px-8 py-10 text-center shadow-[0_20px_50px_rgba(17,27,56,0.65)]">
              <div className="text-7xl font-black leading-none tracking-[-0.08em] text-[#f6d98d]">
                404
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-300">
                A Blank Canvas
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
