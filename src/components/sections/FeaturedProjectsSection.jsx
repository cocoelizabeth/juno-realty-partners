import React from "react"
import {
  FeaturedProjectsSectionWrapper,
  SectionHeading,
  FeaturedProjectsItemsWrapper,
  Disclaimer,
} from "../../styles/sections/FeaturedProjectsSectionStyles"
import { PrimaryButton } from "../../styles/ButtonStyles"
import FeaturedProjectItem from "../projects/FeaturedProjectItem"

export default function FeaturedProjectsSection({
  sectionHeading,
  showHeading,
  projects,
  currentSlug,
  ctaText,
  ctaUrl,
  showCTA,
  showDisclaimer,
  disclaimer
}) {
  let path = ctaUrl.startsWith("/") ? ctaUrl : `/${ctaUrl}`
  return (
    <FeaturedProjectsSectionWrapper $currentSlug={currentSlug}>
      {showHeading && sectionHeading && (
        <SectionHeading>{sectionHeading}</SectionHeading>
      )}

      {showDisclaimer && disclaimer && (
        <Disclaimer>{disclaimer}</Disclaimer>
      )}

      <FeaturedProjectsItemsWrapper $currentSlug={currentSlug} >
        {projects.map(project => {
          return (
            <FeaturedProjectItem
              key={project.internalName}
              featuredProject={project}
              currentSlug={currentSlug}
            />
          )
        })}
      </FeaturedProjectsItemsWrapper>

      {showCTA && ctaText && <PrimaryButton to={path}>{ctaText}</PrimaryButton>}
       
    </FeaturedProjectsSectionWrapper>


  )
}
