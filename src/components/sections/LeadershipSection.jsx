import React from "react"
import { LeadershipSectionWrapper, SectionHeading, ContentWrapper } from "../../styles/sections/LeadershipSectionStyles"
import TeamMember from "../leadership/TeamMember"

export default function LeadershipSection({ sectionHeading, people }) {
  return (
    <LeadershipSectionWrapper>
      {sectionHeading && <SectionHeading>{sectionHeading}</SectionHeading>}
      <ContentWrapper>
        {people.map((person) => {
          return <TeamMember key={person.internalName} person={person} />
        })}
      </ContentWrapper>
    </LeadershipSectionWrapper>
  )
}
