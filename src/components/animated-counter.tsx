"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  label: string
}

export function AnimatedCounter({ end, duration = 500, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  const startAnimation = () => {
    if (hasAnimated.current) return

    hasAnimated.current = true
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation()
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    startAnimation()

    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div ref={countRef} className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tabular-nums">
        {count}
        <span className="text-gold">+</span>
      </div>
      <div className="text-navy/60 text-xs md:text-sm mt-2 uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  )
}
