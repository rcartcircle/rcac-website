"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconPhone,
  IconWorld,
} from "@tabler/icons-react";

const exploreLinks = [
  ["Art Syllabus", "/art-syllabus"],
  ["Learning Portal", "/learning-portal"],
  ["Art Papers Bot", "https://t.me/artpastpapersbot/"],
  ["O/L Instruction Book", "/#instruction-book-card"],
  ["Art Trivia", "/art-trivia"],
  ["Workshop", "/#workshop-card"],
] as const;

const contacts = [
  ["Lakindu Vinduwara", "+94 77 117 1289", "tel:+94771171289"],
  ["Denuwan Vishwasarana", "+94 77 059 0198", "tel:+94770590198"],
  ["Dishnuka Edirisinghe", "+94 77 543 4222", "tel:+94775434222"],
] as const;

const socialLinks = [
  ["Website", "https://www.rcartcircle.com/", IconWorld],
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

function isExternalLink(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:")
  );
}

export function Footer() {
  return (
    <footer className="site-footer relative mt-auto overflow-hidden bg-[#1f1f27] px-6 pb-6 pt-16 font-sans text-[#d1d1d1] md:px-20">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-50 [mask-image:linear-gradient(to_top,black,transparent)]">
        <Image
          src="/assets/footer-bg.png"
          alt=""
          fill
          className="object-cover object-bottom"
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-12 md:flex-row md:items-start">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/assets/RCAC Logo.png"
            alt="Royal College Art Circle"
            width={300}
            height={100}
            className="h-auto w-[250px] object-contain md:w-[300px]"
          />
          <div className="flex items-center gap-6">
            {socialLinks.map(([label, href, Icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center rounded-full border border-[#e0e0e0] p-2 text-white transition-colors hover:bg-white hover:text-[#2d2d38]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <nav className="flex flex-col items-center gap-4 text-sm md:items-start">
          <h2 className="mb-2 text-lg font-semibold text-white">Explore</h2>
          {exploreLinks.map(([label, href]) =>
            isExternalLink(href) ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-[#bdbdbd] transition-colors hover:text-white"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="footer-link text-[#bdbdbd] transition-colors hover:text-white"
              >
                {label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex flex-col items-center gap-5 text-sm md:items-start">
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          {contacts.map(([name, number, href]) => (
            <div key={name}>
              <p className="mb-1">{name}</p>
              <a
                href={href}
                className="flex items-center gap-3 text-[#bdbdbd] transition hover:text-white"
              >
                <IconPhone className="h-4 w-4" />
                {number}
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 rounded-[18px] border border-[#9492a1] bg-[#2d2d38]/40 px-6 py-10 text-center md:items-start md:text-left">
          <a
            href="https://www.rcartcircle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-between gap-6 text-sm text-[#e0e0e0] transition hover:text-white"
          >
            <span>
              <strong>Visit Our Official Website</strong>
              <br />
              www.rcartcircle.com
            </span>
            <IconArrowUpRight className="h-8 w-8 shrink-0" />
          </a>
          <a
            href="mailto:info@artcircle.royalcollege.lk"
            className="flex w-full items-center justify-between gap-6 text-sm text-[#e0e0e0] transition hover:text-white"
          >
            <span>
              <strong>Contact Us</strong>
              <br />
              info@artcircle.royalcollege.lk
            </span>
            <IconArrowUpRight className="h-8 w-8 shrink-0" />
          </a>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-8 flex max-w-[1200px] flex-col items-center gap-4 border-t border-[#666] pt-5 text-center text-xs text-[#b4b4b4]">
        <p>
          © {new Date().getFullYear()} Chithra Akura | Royal College Art Circle
        </p>
      </div>
    </footer>
  );
}
