"use client"

import { useEffect, useRef, useState } from "react"

type ProjectStatus = "completed" | "ongoing" | "upcoming"

interface Project {
  title: string
  description: string
  status: ProjectStatus
  icon: string
}

import projectsData from "@/data/projects-2026.json"

const projects: Project[] = projectsData as Project[]

const statusConfig: Record<ProjectStatus, { label: string; bgClass: string; textClass: string; dotClass: string }> = {
  completed: { 
    label: "Completed", 
    bgClass: "bg-emerald-100",
    textClass: "text-emerald-700",
    dotClass: "bg-emerald-500"
  },
  ongoing: { 
    label: "Ongoing", 
    bgClass: "bg-amber-100",
    textClass: "text-amber-700",
    dotClass: "bg-amber-500"
  },
  upcoming: { 
    label: "Upcoming", 
    bgClass: "bg-blue-100",
    textClass: "text-blue-700",
    dotClass: "bg-blue-500"
  },
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusConfig[project.status]
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-gold/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-navy/5"
      style={{ transitionDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image/Icon Area */}
      <div className="aspect-[4/3] bg-gradient-to-br from-navy/5 to-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
        
        {/* Decorative circles */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-navy/10 transition-transform duration-500 ${isHovered ? 'scale-150' : ''}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-gold/20 transition-transform duration-700 ${isHovered ? 'scale-125' : ''}`} />
        
        {/* Icon */}
        <div className={`absolute inset-0 flex items-center justify-center text-5xl transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
          {project.icon}
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${status.bgClass} ${status.textClass}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dotClass}`} />
            {status.label}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-navy/60 text-sm leading-relaxed">
          {project.description}
        </p>
        
        {/* Learn more link */}
        <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn more</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectStatus>("all")
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

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.status === activeFilter)

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 bg-card relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm uppercase tracking-widest font-medium">Our Work</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 font-serif">
            Our <span className="text-gold">Projects</span>
          </h2>
          <p className="text-navy/60 max-w-xl mx-auto">
            From exhibitions to workshops, explore our diverse range of artistic initiatives.
          </p>
        </div>

        {/* Filter Pills */}
        <div className={`flex justify-center gap-3 mb-12 flex-wrap transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: "all", label: "All Projects" },
            { value: "completed", label: "Completed" },
            { value: "ongoing", label: "Ongoing" },
            { value: "upcoming", label: "Upcoming" },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as "all" | ProjectStatus)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-navy text-cream shadow-lg shadow-navy/20"
                  : "bg-navy/5 text-navy hover:bg-navy/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
