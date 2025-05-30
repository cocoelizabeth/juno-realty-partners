import React from "react"
import { StatisticItemWrapper, Value, Label } from "../../styles/statistics/StatisticItemStyles"



export default function StatisticItem({ label, value }) {
//   const heroImage = featuredProject.project.heroImage
//   const projectName = featuredProject.projectNameForCaseStudy
//   const caseStudyTitle = featuredProject.caseStudyTitle
//   const location = featuredProject.project.location
//   const units = featuredProject.project.units
//   const type = featuredProject.project.type

  return (
    <StatisticItemWrapper>
        <Value>{value}</Value>
        <Label>{label}</Label>

    </StatisticItemWrapper>
  )
}
