"use client"

import { useEffect, useRef, useState } from "react"

interface BoardMember {
  name: string
  role: string
  initials: string
}

const topBoard: BoardMember[] = [
  { name: "Senuth Sellahewa", role: "Secretary", initials: "SS" },
  { name: "Resandu Marasinghe", role: "Chairman", initials: "RM" },
  { name: "Chamithu Vithanage", role: "Treasurer", initials: "CV" },
]

const committee: BoardMember[] = [
  { name: "Binuk Perera", role: "Assistant Chairman", initials: "BP" },
  { name: "Charu Perera", role: "Assistant Secretary", initials: "CP" },
  { name: "Yuthmika Withanage", role: "Assistant Treasurer", initials: "YW" },
  { name: "Thinuga Lakdinu", role: "Student Coordinator", initials: "TL" },
  { name: "Malithu Perera", role: "IT Coordinator", initials: "MP" },
  { name: "Jevindu Weerawardhana", role: "Art Team Director", initials: "JW" },
  { name: "Yenuka de Alwis", role: "Event Coordinator", initials: "YA" },
]

function MemberCard({ member, featured = false, delay = 0 }: { member: BoardMember; featured?: boolean; delay?: number }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className={`
        group relative bg-card border rounded-xl p-6 
        h-full
        transition-all duration-300 cursor-default
        ${featured 
          ? 'border-gold/30 bg-gradient-to-br from-card to-gold/5 hover:border-gold hover:shadow-lg hover:shadow-gold/10' 
          : 'border-border hover:border-navy/30 hover:shadow-md'
        }
        hover:-translate-y-1
      `}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50 rounded-b-full" />
      )}
      
      <div className="flex flex-col items-center text-center">
        <div className={`
          relative rounded-full overflow-hidden mb-4 
          flex items-center justify-center transition-all duration-300
          ${featured 
            ? 'w-24 h-24 bg-gradient-to-br from-navy to-navy-light ring-4 ring-gold/30' 
            : 'w-20 h-20 bg-gradient-to-br from-navy/80 to-navy'
          }
          ${isHovered ? 'scale-105' : ''}
        `}>
          <span className={`font-bold text-cream ${featured ? 'text-2xl' : 'text-xl'}`}>
            {member.initials}
          </span>
          {featured && (
            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300" />
          )}
        </div>
        
        <h3 className={`font-semibold text-navy mb-1 ${featured ? 'text-lg' : 'text-base'}`}>
          {member.name}
        </h3>
        <p className={`${featured ? 'text-gold text-sm font-semibold' : 'text-navy/60 text-xs'}`}>
          {member.role}
        </p>
      </div>
    </div>
  )
}

export function Board() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="board" className="py-24 px-6 bg-cream relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm uppercase tracking-widest font-medium">Leadership</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 font-serif">
            Current <span className="text-gold">Board</span>
          </h2>
          <p className="text-navy/60 max-w-xl mx-auto">
            Meet the dedicated team leading our artistic endeavors this year.
          </p>
        </div>

        {/* Top Board - Featured Row */}
        <div className={`grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {topBoard.map((member, index) => (
            <MemberCard key={member.name} member={member} featured delay={index * 100} />
          ))}
        </div>

        {/* Committee Grid: 1 row on large screens */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-700 delay-400 lg:[grid-template-columns:repeat(7,minmax(0,1fr))] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {committee.map((member, index) => (
            <MemberCard key={member.name} member={member} delay={index * 50} />
          ))}
        </div>
      </div>
    </section>
  )
}
