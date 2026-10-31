"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Chithra Akura", href: "/chithra-akura", isPage: true },
  { label: "Leadership", href: "/leadership", isPage: true },
  { label: "Past Boards", href: "/past-boards", isPage: true },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLessonPage = pathname.includes("/art-syllabus/") && pathname.includes("/lesson-");

  const resolveHref = (href: string) => {
    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`;
    }

    return href;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy/10 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isLessonPage || isScrolled || isMobileMenuOpen
            ? "bg-cream/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo (image from public/logo.png) */}
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Royal College Art Circle"
                width={120}
                height={50}
                className="h-11 w-auto object-contain sm:h-[50px]"
                priority
              />
              <span className="sr-only">Royal College Art Circle</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={resolveHref(item.href)}
                  className="group relative text-sm font-bold text-navy/90 transition-colors hover:text-gold"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-cream/80 text-navy shadow-sm transition-colors hover:border-gold hover:text-gold md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`relative z-50 overflow-hidden transition-all duration-300 md:hidden ${isMobileMenuOpen ? "max-h-[calc(100vh-5rem)] pt-3 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <nav className="rounded-2xl border border-border bg-cream/95 p-2 shadow-xl shadow-navy/15 backdrop-blur-md">
              {navItems.map((item, index) => {
                const href = resolveHref(item.href);
                const isActive = item.isPage && pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${isActive ? "bg-navy text-cream" : "text-navy/75 hover:bg-navy/5 hover:text-navy"}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                    <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-gold" : "bg-navy/15"}`} />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
