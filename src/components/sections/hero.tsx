"use client";

import Image from "next/image";
import {
  IconArrowDownRight,
  IconCheck,
  IconClock,
  IconSparkles,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "@/components/animated-counter";
import { countProjectsByStatus } from "@/lib/project-stats";

function PaintBrushCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const trailRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    if (!heroSection) return;

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      trailRef.current = [
        ...trailRef.current.slice(-5),
        { x: event.clientX, y: event.clientY },
      ];
    };
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    heroSection.addEventListener("mousemove", handleMouseMove);
    heroSection.addEventListener("mouseenter", handleMouseEnter);
    heroSection.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      heroSection.removeEventListener("mousemove", handleMouseMove);
      heroSection.removeEventListener("mouseenter", handleMouseEnter);
      heroSection.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isHovering) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75"
      style={{ left: position.x - 10, top: position.y - 10 }}
    >
      <div className="h-5 w-5 border border-gold bg-cream/70 shadow-[0_0_20px_rgba(212,168,76,0.7)]" />
    </div>
  );
}

const statusItems = [
  ["Completed", "bg-status-completed", IconCheck],
  ["Ongoing", "bg-status-ongoing", IconClock],
  ["Upcoming", "bg-status-upcoming", IconSparkles],
] as const;

export function Hero() {
  const completedCount = countProjectsByStatus("completed");
  const ongoingCount = countProjectsByStatus("ongoing");
  const upcomingCount = countProjectsByStatus("upcoming");
  const counts = [completedCount, ongoingCount, upcomingCount];

  return (
    <section
      id="hero-section"
      className="relative min-h-screen overflow-hidden bg-cream text-navy"
    >
      <PaintBrushCursor />
      <div className="absolute inset-y-0 right-0 w-full md:w-[58%]">
        <Image
          src="/assets/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-30"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[58%] backdrop-blur-[18px] [mask-image:linear-gradient(to_right,black_0%,black_62%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(247,244,235,0.99)_0%,rgba(247,244,235,0.92)_22%,rgba(247,244,235,0.58)_42%,transparent_72%),radial-gradient(circle_at_0%_50%,rgba(247,244,235,0.97)_0%,rgba(247,244,235,0.84)_20%,rgba(247,244,235,0.38)_44%,transparent_72%),radial-gradient(circle_at_0%_100%,rgba(247,244,235,0.99)_0%,rgba(247,244,235,0.9)_22%,rgba(247,244,235,0.52)_44%,transparent_74%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-between px-6 pb-8 pt-32 sm:px-10 lg:px-16">
        <div className="grid flex-1 items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.75fr)]">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-navy/65">
              <span className="h-px w-14 bg-gold" />
              Royal College · Est. 1995
            </div>
            <h1 className="font-serif text-[clamp(4rem,10vw,9.5rem)] font-bold leading-[0.82] tracking-[-0.06em] text-navy">
              <span className="block">Royal</span>
              <span className="block text-gold">College</span>
              <span className="block text-navy/95">Art Circle</span>
            </h1>
            <div className="mt-10 flex max-w-xl flex-col gap-7 border-l border-gold/70 pl-5 sm:flex-row sm:items-end sm:gap-10">
              <p className="max-w-md text-base leading-7 text-navy/70 md:text-lg">
                A living archive of making, learning, and looking closer. A
                student-led home for artistic expression.
              </p>
              <a
                href="#projects"
                className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy"
              >
                Explore the work
                <IconArrowDownRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mr-0">
            <div className="absolute -inset-4 border border-gold/45" />
            <div className="relative overflow-hidden border border-navy/20 bg-cream/75 p-5 shadow-[0_24px_70px_rgba(25,38,73,0.14)] backdrop-blur-sm sm:p-7">
              <div className="flex items-start justify-between border-b border-navy/15 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-navy/55">
                    Field notes / 01
                  </p>
                  <p className="mt-2 font-serif text-2xl text-navy">
                    The making continues.
                  </p>
                </div>
                <span className="text-xs text-navy/45">RCAC</span>
              </div>
              <div className="grid grid-cols-2 gap-5 py-7 text-sm text-navy/65">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-navy/45">
                    Practice
                  </p>
                  <p className="mt-2 text-navy">Art · Design · Culture</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-navy/45">
                    Direction
                  </p>
                  <p className="mt-2 text-navy">Always in a unique way</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden border border-navy/15">
                <Image
                  src="/assets/hero-bg.png"
                  alt=""
                  fill
                  className="object-cover object-[68%_48%]"
                />
                <div className="absolute inset-0 bg-navy/15" />
                <span className="absolute bottom-4 left-4 bg-cream/90 px-3 py-2 text-xs uppercase tracking-[0.18em] text-navy">
                  #AlwaysInAUniqueWay
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid border-t border-navy/20 sm:grid-cols-3">
          {statusItems.map(([label, color, Icon], index) => (
            <div
              key={label}
              className="flex items-center gap-4 border-b border-navy/20 py-5 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center text-navy`}
              >
                <Icon className="h-8 w-auto" />
              </span>
              <AnimatedCounter end={counts[index]} label={label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
