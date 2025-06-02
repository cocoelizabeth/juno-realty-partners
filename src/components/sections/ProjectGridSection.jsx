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
        {projects.map(project => {
          if (!project.featuredProject) {
            return (
              <ProjectGridItem
                key={project.internalName}
                project={project}
              />
            )
          }
        })}
      </ProjectGrid>
    </ProjectGridSectionWrapper>
  )
}
