import { Crown } from "lucide-react"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { Board } from "@/components/sections/board"

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-8 md:pt-36 md:pb-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10 mb-6">
              <Crown className="w-4 h-4 text-gold" />
              <span className="text-sm text-navy/70 font-medium">Current Leadership</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-4 tracking-tight">
              <span className="text-navy">Current </span>
              <span className="text-gold">Leadership</span>
            </h1>

            <p className="text-lg text-navy/60 max-w-2xl mx-auto leading-relaxed">
              Meet the teacher in-charge and the current board leading the Royal College Art Circle.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-navy rounded-2xl p-8 md:p-10 relative overflow-hidden group shadow-xl shadow-navy/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gold mb-6">
                Teacher in-Charge
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-center sm:text-left">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold/20 ring-4 ring-white/10">
                  <span className="text-3xl font-bold text-navy">SV</span>
                </div>

                <div className="sm:flex-1">
                  <h2 className="text-xl md:text-2xl font-semibold text-cream mb-1">
                    Mrs. Shyamila Vidanagama
                  </h2>
                  <p className="text-cream/70 text-sm mb-2">
                    Senior Art Teacher
                  </p>
                  <p className="text-cream/50 text-sm">
                    Royal College
                  </p>
                </div>
              </div>

              <blockquote className="mt-6 max-w-2xl text-cream/80 italic border-l-2 border-gold pl-4 text-sm leading-relaxed">
                &quot;Art is not what you see, but what you make others see. Our mission is to help every student discover their unique artistic voice.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Board />
      <Footer />
    </main>
  )
}
