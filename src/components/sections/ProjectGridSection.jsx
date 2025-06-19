import React from "react"
import {
  ProjectGridSectionWrapper,
  ProjectGrid,
} from "../../styles/sections/ProjectGridSectionStyles"
import ProjectGridItem from "../projects/ProjectGridItem"
// import FeaturedProjectItem from "../projects/FeaturedProjectItem"

export default function ProjectGridSection({ projects }) {
  return (
    <ProjectGridSectionWrapper>
      <ProjectGrid>
        {projects
          .filter(p => !p.featuredProject)
          .map(project => (
            <ProjectGridItem key={project.internalName} project={project} />
          ))}
      </ProjectGrid>
    </ProjectGridSectionWrapper>
  )
}
