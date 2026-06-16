"use client"

import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  label: string
}

export function AnimatedCounter({ end, duration = 1200, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(end)

  useEffect(() => {
    if (end <= 0) {
      setCount(0)
      return
    }

    let raf = 0
    let cancelled = false
    const start = performance.now()

    setCount(0)

    const tick = (now: number) => {
      if (cancelled) return

      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      if (progress >= 1) {
        setCount(end)
        return
      }

      setCount(Math.max(0, Math.round(eased * end)))
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    const fallback = window.setTimeout(() => {
      if (!cancelled) setCount(end)
    }, duration + 50)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      window.clearTimeout(fallback)
    }
  }, [end, duration])

  return (
    <div className="text-center">
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
