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

        <div className="max-w-3xl mx-auto">
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-navy/70 leading-relaxed text-justify hyphens-auto">
              The Art Circle of Royal College has been one of the most active societies of Royal College
since 1995. It is also one of the largest clubs in the school, with a member base of over
1000 students. This society has always supported in polishing the aesthetic talents of not
only Royalists but also of young students from all over the Island. The main duty of those
at the Art Circle is to develop the students talents to the extent of being recognized by
other people in society. Also, the circle works to pave a path for those talented students
who wish to carry out their skills in the future.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Painting",  "Sculpture", "Digital Art", "Design"].map((skill, index) => (
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
        </div>
      </div>
    </section>
  )
}
