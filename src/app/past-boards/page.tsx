"use client"

import { useState } from "react"
import { ChevronDown, Crown, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import pastBoardsData from "@/data/past-boards.json"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

interface BoardMember {
  name: string
  position: string
}

interface YearBoard {
  year: string
  theme?: string
  members: BoardMember[]
}

interface PastBoardsConfig {
  archiveStartYear?: number
  boards: YearBoard[]
}

const { archiveStartYear = 1995, boards: pastBoards } = pastBoardsData as PastBoardsConfig

const CURRENT_YEAR = new Date().getFullYear()

function getBoardStartYear(year: string): number {
  const match = year.match(/\d{4}/)
  return match ? Number(match[0]) : Number.NEGATIVE_INFINITY
}

const sortedBoards = [...pastBoards]
  .filter((board) => getBoardStartYear(board.year) < CURRENT_YEAR)
  .sort((a, b) => getBoardStartYear(b.year) - getBoardStartYear(a.year))

const AVAILABLE_YEARS = new Set(
  sortedBoards
    .map((board) => getBoardStartYear(board.year))
    .filter((year) => Number.isFinite(year))
    .map((year) => String(year))
)
const ARCHIVE_START_YEAR = archiveStartYear
const ARCHIVE_YEARS = Array.from(
  { length: CURRENT_YEAR - ARCHIVE_START_YEAR },
  (_, index) => String(CURRENT_YEAR - 1 - index)
)

const EXECUTIVE_POSITIONS = ["Chairman", "Secretary", "Treasurer"]

function getInitials(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (parts.length === 0) return "--"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

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
            {getInitials(member.name)}
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
    EXECUTIVE_POSITIONS.includes(m.position)
  )
  const committee = board.members.filter(m => 
    !EXECUTIVE_POSITIONS.includes(m.position)
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
                      {getInitials(member.name)}
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
  const [expandedYears, setExpandedYears] = useState<string[]>([sortedBoards[0]?.year ?? ""])

  const toggleYear = (year: string) => {
    setExpandedYears(prev =>
      prev.includes(year)
        ? prev.filter(y => y !== year)
        : [...prev, year]
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
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
          
          <p className="text-lg text-navy/60 max-w-2xl mx-auto mb-8">
            Explore the leadership timeline of the Royal College Art Circle.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {ARCHIVE_YEARS.map((year) => {
                const hasBoard = AVAILABLE_YEARS.has(year)

                return (
                  <span
                    key={year}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs border",
                      hasBoard
                        ? "bg-navy text-cream border-navy"
                        : "bg-card text-navy/35 border-border"
                    )}
                  >
                    {year}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {sortedBoards.map((board) => {
              return (
                <div key={board.year} id={`year-${board.year}`}>
                  <YearSection
                    board={board}
                    isExpanded={expandedYears.includes(board.year)}
                    onToggle={() => toggleYear(board.year)}
                  />
                </div>
              )
            })}
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

      <Footer />
    </main>
  )
}
