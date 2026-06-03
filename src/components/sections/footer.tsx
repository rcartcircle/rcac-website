export function Footer() {
  return (
    <footer className="py-12 px-6 bg-navy text-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-2 font-serif">
              Royal College <span className="text-gold">Art Circle</span>
            </div>
            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} Royal College Art Circle. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#about" className="text-cream/70 hover:text-gold transition-colors">
              About
            </a>
            <a href="/leadership" className="text-cream/70 hover:text-gold transition-colors">
              Leadership
            </a>
            <a href="#projects" className="text-cream/70 hover:text-gold transition-colors">
              Projects
            </a>
            <a href="/past-boards" className="text-cream/70 hover:text-gold transition-colors">
              Past Boards
            </a>
            <a href="#contact" className="text-cream/70 hover:text-gold transition-colors">
              Contact
            </a>
          </nav>

          {/* Tagline */}
          <div className="text-gold text-sm italic font-medium">
            #AlwaysInAUniqueWay
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="mt-8 pt-8 border-t border-cream/10 text-center">
          <p className="text-cream/40 text-xs">
            Crafted with passion for art and creativity
          </p>
        </div>
      </div>
    </footer>
  )
}
