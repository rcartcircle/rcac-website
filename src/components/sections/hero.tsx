"use client"

import { AnimatedCounter } from "@/components/animated-counter"
import { useEffect, useRef, useState } from "react"

function FloatingShape({ delay, duration, className }: { delay: number; duration: number; className: string }) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  )
}

function PaintBrushCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const trailRef = useRef<{ x: number; y: number }[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      trailRef.current = [...trailRef.current.slice(-8), { x: e.clientX, y: e.clientY }]
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const heroSection = document.getElementById("hero-section")
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove)
      heroSection.addEventListener("mouseenter", handleMouseEnter)
      heroSection.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (heroSection) {
        heroSection.removeEventListener("mousemove", handleMouseMove)
        heroSection.removeEventListener("mouseenter", handleMouseEnter)
        heroSection.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  if (!isHovering) return null

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75"
      style={{ left: position.x - 12, top: position.y - 12 }}
    >
      <div className="w-6 h-6 rounded-full bg-gold/40 blur-sm" />
    </div>
  )
}

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsLoaded(true)
    })

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes paint-stroke {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, var(--navy) 40%, var(--gold) 50%, var(--navy) 60%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
      
      <PaintBrushCursor />
      
      <section 
        id="hero-section"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden bg-cream"
      >
        {/* Decorative floating shapes */}
        <FloatingShape delay={0} duration={6} className="top-20 left-[10%] w-16 h-16 border-2 border-gold/30 rounded-full" />
        <FloatingShape delay={1} duration={8} className="top-32 right-[15%] w-8 h-8 bg-navy/10 rotate-45" />
        <FloatingShape delay={2} duration={7} className="bottom-40 left-[20%] w-12 h-12 border-2 border-navy/20" />
        <FloatingShape delay={0.5} duration={9} className="bottom-32 right-[10%] w-20 h-20 border border-gold/20 rounded-full" />
        <FloatingShape delay={1.5} duration={6} className="top-1/2 left-[5%] w-6 h-6 bg-gold/20 rounded-full" />
        <FloatingShape delay={3} duration={8} className="top-1/3 right-[8%] w-10 h-10 border border-navy/15 rotate-12" />
        
        {/* Main decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] pointer-events-none">
          <div className="absolute inset-0 border border-navy/10 rounded-full" />
          <div className="absolute inset-8 border border-gold/15 rounded-full" />
          <div className="absolute inset-16 border border-navy/5 rounded-full" />
        </div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Small decorative element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-serif">
            <span className="text-navy block">Royal College</span>
            <span className="shimmer-text text-transparent">Art Circle</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gold mb-4 italic font-medium tracking-wide">
            #AlwaysInAUniqueWay
          </p>
          
          <p className="text-navy/70 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Fostering creativity, inspiring minds, and shaping the future of artistic expression since 1835.
          </p>
          
          {/* Stats with enhanced styling */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-16 max-w-3xl mx-auto">
            <div className="group">
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-status-completed rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-card" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <AnimatedCounter end={1} label="Completed" />
              </div>
            </div>
            <div className="group">
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-status-ongoing rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-card" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <AnimatedCounter end={2} label="Ongoing" />
              </div>
            </div>
            <div className="group">
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-status-upcoming rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-card" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <AnimatedCounter end={3} label="Upcoming" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-navy/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    </>
  )
}
