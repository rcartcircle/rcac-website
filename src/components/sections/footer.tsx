"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconMail,
  IconMapPin,
  IconPhone,
  IconWorld,
} from "@tabler/icons-react";

const exploreLinks = [
  ["About", "/#about"],
  ["Leadership", "/leadership"],
  ["Chithra Akura", "/chithra-akura"],
] as const;

const contacts = [
  ["Resandu Marasinghe", "+94 70 720 0708", "tel:+94707200708"],
  ["Senuth Sellahewa", "+94 71 900 8992", "tel:+94719008992"],
  ["Chamithu Vithanage", "+94 78 476 4026", "tel:+94784764026"],
] as const;

const email = "royalcollegeartcircle@gmail.com";
const address = "Royal College Art Room, Royal College, Colombo 07, Sri Lanka";

const socialLinks = [
  ["Website", "https://artcircle.royalcollege.lk/", IconWorld],
  ["Instagram", "https://www.instagram.com/rcartcircle/", IconBrandInstagram],
  [
    "Facebook",
    "https://web.facebook.com/rcartcircle/?_rdc=1&_rdr",
    IconBrandFacebook,
  ],
  [
    "YouTube",
    "https://www.youtube.com/channel/UCEiZrkSbRAxR0WfzgFH2jmQ",
    IconBrandYoutube,
  ],
] as const;

export function Footer() {
  return (
    <footer className="site-footer relative mt-auto overflow-hidden bg-[#1f1f27] px-6 pb-6 pt-12 font-sans text-[#d1d1d1] md:px-12 md:pt-16 lg:px-20">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-35 [mask-image:linear-gradient(to_top,black,transparent)]">
        <Image
          src="/assets/footer-bg.png"
          alt=""
          fill
          className="object-cover object-bottom"
        />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1200px] gap-12 border-t border-white/10 pt-10 md:grid-cols-[1.35fr_0.7fr_1.2fr] md:gap-10 lg:gap-16">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#d4a84c]">
            Royal College · Est. 1995
          </p>
          <Image
            src="/assets/RCAC Logo.png"
            alt="Royal College Art Circle"
            width={300}
            height={100}
            unoptimized
            className="h-auto w-[240px] object-contain md:w-[290px]"
          />
          <p className="mt-5 max-w-xs text-center text-sm leading-6 text-white/55 md:text-left">
            A student-led home for artistic expression, learning, and making.
          </p>
          <div className="mt-7 flex items-center gap-3">
            {socialLinks.map(([label, href, Icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a84c] hover:bg-[#d4a84c] hover:text-[#1f1f27]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <nav className="flex flex-col items-center md:items-start">
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a84c]">Explore</h2>
          {exploreLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center gap-2 border-b border-white/10 py-3 text-sm text-[#bdbdbd] transition-colors first:border-t hover:text-white md:w-full"
            >
              {label}
              <IconArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a84c]">Contact Us</h2>
          {contacts.map(([name, number, href]) => (
            <div key={name} className="w-full border-b border-white/10 py-3 first:border-t">
              <p className="text-sm font-medium text-white">{name}</p>
              <a
                href={href}
                className="mt-1 flex items-center justify-center gap-2 text-sm text-[#bdbdbd] transition hover:text-white md:justify-start"
              >
                <IconPhone className="h-3.5 w-3.5 text-[#d4a84c]" />
                {number}
              </a>
            </div>
          ))}
          <a
            href={`mailto:${email}`}
            className="w-full border-b border-white/10 py-3 text-sm text-[#bdbdbd] transition hover:text-white"
          >
            <span className="flex items-center justify-center gap-2 md:justify-start">
              <IconMail className="h-3.5 w-3.5 text-[#d4a84c]" />
              <span className="break-all">{email}</span>
            </span>
          </a>
          <div className="w-full py-3 text-sm text-[#bdbdbd]">
            <span className="flex items-start justify-center gap-2 text-center md:justify-start md:text-left">
              <IconMapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4a84c]" />
              <span>{address}</span>
            </span>
          </div>
        </div>

      </div>
      <div className="relative z-10 mx-auto mt-12 flex max-w-[1200px] flex-col items-center gap-4 border-t border-white/10 pt-5 text-center text-xs text-[#b4b4b4]">
        <p>
          © {new Date().getFullYear()} Royal College Art Circle
        </p>
      </div>
    </footer>
  );
}
