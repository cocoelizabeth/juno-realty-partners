import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  FeaturedProjectItemWrapper,
  FeaturedProjectTextWrapper,
  ProjectImageLink,
} from "../../styles/projects/FeaturedProjectItemStyles"
import { SecondaryButton } from "../../styles/ButtonStyles"


export default function FeaturedProjectItem({ featuredProject }) {
  const heroImage = featuredProject.project.heroImage
  const projectName = featuredProject.projectNameForCaseStudy
  const caseStudyTitle = featuredProject.caseStudyTitle
  const location = featuredProject.project.location
//   const units = featuredProject.project.units
//   const type = featuredProject.project.type

  let ctaLink = featuredProject.slug.startsWith("/")
    ? `projects/${featuredProject.slug}`
    : `/projects/${featuredProject.slug}`

  return (
    <FeaturedProjectItemWrapper>
      <ProjectImageLink to={ctaLink} className="featured-project-image-wrapper">
        <GatsbyImage
          image={heroImage.gatsbyImageData}
          alt={heroImage.description}
          className="project-image-wrapper"
          loading="eager"
        />
      </ProjectImageLink>

      <FeaturedProjectTextWrapper to={ctaLink} className="featured-project-text-wrapper">
        <h3 className="featured-project-name">{projectName}</h3>
        <p className="featured-project-location">{location}</p>
        <p className="featured-case-study-title">{caseStudyTitle}</p>
        <SecondaryButton to={ctaLink}><div>Learn More</div></SecondaryButton>
      </FeaturedProjectTextWrapper>
    </FeaturedProjectItemWrapper>
  )
}
