import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  LineOneWrapper,
  ProjectGridItemWrapper,
  TextWrapper,
  UnitsAndTypeWrapper,
  Units,
  Type,
  Location,
  Status,
  Role,
} from "../../styles/projects/ProjectGridItemStyles"

export default function ProjectGridItem({ project }) {
  const heroImage = project.heroImage
  let units = project.units
  const location = project.location
  const status = project.status
  const type = project.type
  const role = project.role

  if (type.toLowerCase() === "master planning") {
    units = "Master Planned Community"
  } else {
    units = `${units} units`
  }
  //   const projectName = projectNameForCaseStudy
  //   const location = project.location
  //   const units = project.units
  //   const type = project.type

  return (
    <ProjectGridItemWrapper>
      <GatsbyImage
        image={heroImage.gatsbyImageData}
        alt={heroImage.description}
        className="project-grid-item-image-wrapper"
      />
      <TextWrapper>
        <LineOneWrapper>
          <UnitsAndTypeWrapper>
            <Units>{units}</Units>
            {type === "Mixed-use" && <Type>{type}</Type>}
          </UnitsAndTypeWrapper>
          <Location>{location}</Location>
        </LineOneWrapper>
        <Status>Status: {status}</Status>
        <Role>Role: {role}</Role>
      </TextWrapper>
    </ProjectGridItemWrapper>
  )
}
