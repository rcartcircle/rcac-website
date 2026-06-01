"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronDown, Crown, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface BoardMember {
  name: string
  position: string
  initials: string
}

interface YearBoard {
  year: string
  theme?: string
  members: BoardMember[]
}

const pastBoards: YearBoard[] = [
  {
    year: "2023/24",
    theme: "Brushstrokes of Tomorrow",
    members: [
      { name: "Alexander Chen", position: "President", initials: "AC" },
      { name: "Sophia Williams", position: "Vice President", initials: "SW" },
      { name: "Marcus Johnson", position: "Secretary", initials: "MJ" },
      { name: "Isabella Garcia", position: "Treasurer", initials: "IG" },
      { name: "David Kim", position: "Editor", initials: "DK" },
      { name: "Emma Thompson", position: "Asst. Secretary", initials: "ET" },
    ],
  },
  {
    year: "2022/23",
    theme: "Colors of Unity",
    members: [
      { name: "Ryan Patel", position: "President", initials: "RP" },
      { name: "Olivia Brown", position: "Vice President", initials: "OB" },
      { name: "Nathan Lee", position: "Secretary", initials: "NL" },
      { name: "Ava Martinez", position: "Treasurer", initials: "AM" },
      { name: "Lucas Anderson", position: "Editor", initials: "LA" },
      { name: "Mia Robinson", position: "Asst. Secretary", initials: "MR" },
    ],
  },
  {
    year: "2021/22",
    theme: "Art Beyond Boundaries",
    members: [
      { name: "Ethan Taylor", position: "President", initials: "ET" },
      { name: "Charlotte Davis", position: "Vice President", initials: "CD" },
      { name: "Benjamin Wilson", position: "Secretary", initials: "BW" },
      { name: "Amelia Moore", position: "Treasurer", initials: "AM" },
      { name: "James White", position: "Editor", initials: "JW" },
      { name: "Harper Harris", position: "Asst. Secretary", initials: "HH" },
    ],
  },
  {
    year: "2020/21",
    theme: "Creative Resilience",
    members: [
      { name: "William Clark", position: "President", initials: "WC" },
      { name: "Evelyn Lewis", position: "Vice President", initials: "EL" },
      { name: "Henry Walker", position: "Secretary", initials: "HW" },
      { name: "Abigail Hall", position: "Treasurer", initials: "AH" },
      { name: "Sebastian Young", position: "Editor", initials: "SY" },
      { name: "Ella King", position: "Asst. Secretary", initials: "EK" },
    ],
  },
  {
    year: "2019/20",
    theme: "Vision & Expression",
    members: [
      { name: "Daniel Scott", position: "President", initials: "DS" },
      { name: "Victoria Green", position: "Vice President", initials: "VG" },
      { name: "Matthew Adams", position: "Secretary", initials: "MA" },
      { name: "Scarlett Baker", position: "Treasurer", initials: "SB" },
      { name: "Joseph Nelson", position: "Editor", initials: "JN" },
      { name: "Grace Carter", position: "Asst. Secretary", initials: "GC" },
    ],
  },
  {
    year: "2018/19",
    theme: "The Art of Possibilities",
    members: [
      { name: "Andrew Mitchell", position: "President", initials: "AM" },
      { name: "Chloe Perez", position: "Vice President", initials: "CP" },
      { name: "Christopher Roberts", position: "Secretary", initials: "CR" },
      { name: "Zoey Turner", position: "Treasurer", initials: "ZT" },
      { name: "Joshua Phillips", position: "Editor", initials: "JP" },
      { name: "Lily Campbell", position: "Asst. Secretary", initials: "LC" },
    ],
  },
]

function MemberCard({ member, isLeader }: { member: BoardMember; isLeader: boolean }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-300",
        isLeader
          ? "bg-gradient-to-br from-navy to-navy-light p-[1px]"
          : "bg-border p-[1px] hover:bg-gold/50"
      )}
    >
      <div
        className={cn(
          "relative h-full rounded-xl p-4 transition-all duration-300",
          isLeader
            ? "bg-gradient-to-br from-navy to-navy-light"
            : "bg-card group-hover:bg-secondary/50"
        )}
      >
        {isLeader && (
          <Crown className="absolute top-3 right-3 w-4 h-4 text-gold" />
        )}
        
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-transform duration-300 group-hover:scale-105",
              isLeader
                ? "bg-gold text-navy"
                : "bg-navy/10 text-navy group-hover:bg-gold/20"
            )}
          >
            {member.initials}
          </div>
          
          <div className="min-w-0">
            <h4
              className={cn(
                "font-semibold text-sm truncate",
                isLeader ? "text-white" : "text-navy"
              )}
            >
              {member.name}
            </h4>
            <p
              className={cn(
                "text-xs truncate",
                isLeader ? "text-gold" : "text-navy/60"
              )}
            >
              {member.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function YearSection({ board, isExpanded, onToggle }: { 
  board: YearBoard
  isExpanded: boolean
  onToggle: () => void 
}) {
  const leaders = board.members.filter(m => 
    ["President", "Vice President", "Secretary"].includes(m.position)
  )
  const committee = board.members.filter(m => 
    !["President", "Vice President", "Secretary"].includes(m.position)
  )

  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-navy/20 to-transparent" />
      
      <div className="relative pl-16">
        {/* Year marker */}
        <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center shadow-lg">
          <span className="text-gold font-bold text-xs">{board.year.split("/")[0].slice(-2)}</span>
        </div>

        <div
          className={cn(
            "bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500",
            isExpanded ? "shadow-xl shadow-navy/5" : "shadow-md"
          )}
        >
          {/* Header - Always visible */}
          <button
            onClick={onToggle}
            className="w-full p-6 flex items-center justify-between hover:bg-secondary/30 transition-colors text-left"
          >
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-navy">
                  {board.year}
                </h3>
                <div className="flex items-center gap-1 text-navy/40">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{board.members.length}</span>
                </div>
              </div>
              {board.theme && (
                <p className="text-sm text-gold font-medium italic">
                  &quot;{board.theme}&quot;
                </p>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              {/* Preview avatars when collapsed */}
              {!isExpanded && (
                <div className="hidden sm:flex -space-x-2">
                  {leaders.slice(0, 3).map((member, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold border-2 border-card"
                    >
                      {member.initials}
                    </div>
                  ))}
                </div>
              )}
              
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-navy/60 transition-transform duration-300",
                  isExpanded && "rotate-180"
                )}
              />
            </div>
          </button>

          {/* Expanded content */}
          <div
            className={cn(
              "grid transition-all duration-500 ease-in-out",
              isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-6 space-y-6">
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                
                {/* Leaders */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-navy/50 font-semibold mb-3">
                    Executive Board
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {leaders.map((member, i) => (
                      <MemberCard key={i} member={member} isLeader={true} />
                    ))}
                  </div>
                </div>

                {/* Committee */}
                {committee.length > 0 && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-navy/50 font-semibold mb-3">
                      Committee Members
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {committee.map((member, i) => (
                        <MemberCard key={i} member={member} isLeader={false} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PastBoardsPage() {
  const [expandedYears, setExpandedYears] = useState<string[]>([pastBoards[0].year])

  const toggleYear = (year: string) => {
    setExpandedYears(prev =>
      prev.includes(year)
        ? prev.filter(y => y !== year)
        : [...prev, year]
    )
  }

  const expandAll = () => setExpandedYears(pastBoards.map(b => b.year))
  const collapseAll = () => setExpandedYears([])

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-navy hover:text-gold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="text-sm px-3 py-1.5 rounded-lg text-navy/60 hover:text-navy hover:bg-secondary transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="text-sm px-3 py-1.5 rounded-lg text-navy/60 hover:text-navy hover:bg-secondary transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10 mb-6">
            <Users className="w-4 h-4 text-gold" />
            <span className="text-sm text-navy/70 font-medium">Our Legacy</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-4">
            Past <span className="text-gold">Boards</span>
          </h1>
          
          <p className="text-lg text-navy/60 max-w-2xl mx-auto">
            Honoring the creative leaders who shaped our journey through the years.
            Each board brought unique vision and artistic excellence to our circle.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-navy">{pastBoards.length}</div>
              <div className="text-sm text-navy/50">Years</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">
                {pastBoards.reduce((acc, b) => acc + b.members.length, 0)}
              </div>
              <div className="text-sm text-navy/50">Members</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-navy">{pastBoards.length}</div>
              <div className="text-sm text-navy/50">Themes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {pastBoards.map((board) => (
              <YearSection
                key={board.year}
                board={board}
                isExpanded={expandedYears.includes(board.year)}
                onToggle={() => toggleYear(board.year)}
              />
            ))}
          </div>

          {/* End marker */}
          <div className="relative pl-16 mt-8">
            <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg">
              <Crown className="w-5 h-5 text-navy" />
            </div>
            <p className="text-navy/40 italic pt-3">
              And the legacy continues...
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-navy/50">
            Royal College Art Circle &bull; #AlwaysInAUniqueWay
          </p>
        </div>
      </footer>
    </main>
  )
}
