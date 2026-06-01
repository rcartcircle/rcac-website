"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm uppercase tracking-widest font-medium">Who We Are</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 font-serif">
            About <span className="text-gold">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-lg text-navy/70 leading-relaxed">
              The Royal College Art Circle is a vibrant community of passionate artists, 
              designers, and creative minds dedicated to pushing the boundaries of artistic expression. 
              Founded with the vision of nurturing young talents, we provide a platform where 
              creativity flourishes and ideas transform into masterpieces.
            </p>
            <p className="text-lg text-navy/70 leading-relaxed">
              Our club organizes workshops, exhibitions, and collaborative projects that bring 
              together students from all disciplines. Whether you&apos;re a seasoned artist or just 
              beginning your creative journey, the Art Circle welcomes you with open arms.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Painting", "Digital Art", "Sculpture", "Photography", "Design"].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-navy/5 text-navy border border-navy/10 rounded-full text-sm hover:bg-gold/10 hover:border-gold/30 transition-colors cursor-default"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Teacher Card */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-navy rounded-2xl p-8 relative overflow-hidden group">
              {/* Decorative gold accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="text-sm uppercase tracking-widest text-gold mb-6 font-medium">
                  Teacher in Charge
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold/20">
                    <span className="text-3xl font-bold text-navy">JM</span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-cream mb-1">
                      Mrs. W.S. Vidanagama
                    </h3>
                    <p className="text-cream/70 text-sm mb-2">
                      Senior Art Teacher
                    </p>
                    <p className="text-cream/50 text-sm">
                      Royal College
                    </p>
                  </div>
                </div>
                
                <blockquote className="mt-6 text-cream/80 italic border-l-2 border-gold pl-4 text-sm leading-relaxed">
                  &quot;Art is not what you see, but what you make others see. Our mission is to 
                  help every student discover their unique artistic voice.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
