import projectsData from "@/data/projects-2026.json"

type ProjectStatus = "completed" | "ongoing" | "upcoming"

interface Project {
  status: ProjectStatus
}

const projects = projectsData as Project[]

export function countProjectsByStatus(status: ProjectStatus): number {
  return projects.filter((project) => project.status === status).length
}
