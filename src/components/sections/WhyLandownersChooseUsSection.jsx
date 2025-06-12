import React from "react"
import {
  WhyLandownersChooseUsSectionWrapper,
  SectionHeading,
  ContentWrapper,
  StatisticItemsWrapper,
  ReasonItemsWrapper
} from "../../styles/sections/WhyLandOwnersChooseUsStyles"
import StatisticItem from "../statistics/StatisticItem"
import ReasonItem from "../features/ReasonItem"
import { StatsDisclaimer } from "../../styles/statistics/StatisticItemStyles"


export default function WhyLandownersChooseUsSection({
  sectionHeading,
  reasonFeatures,
  stats,
  statsDisclaimer,
}) {
  //   const hasBody = Boolean(body?.raw)

  //   let path = ctaUrl.startsWith("/") ? ctaUrl : `/${ctaUrl}`

  return (
    <WhyLandownersChooseUsSectionWrapper>
      {sectionHeading && <SectionHeading>{sectionHeading}</SectionHeading>}
        <ContentWrapper>

 
      <StatisticItemsWrapper>
        {stats.map(stat => {
          return (
            <StatisticItem
              key={stat.label}
              label={stat.label}
              value={stat.value}
            />
          )
        })}
        <StatsDisclaimer>{statsDisclaimer}</StatsDisclaimer>
      </StatisticItemsWrapper>

      <ReasonItemsWrapper>
        {reasonFeatures.map(reason => {
          return (
            <ReasonItem
              key={reason.internalName}
              heading={reason.heading}
              body={reason.body}
            />
          )
        })}

      </ReasonItemsWrapper>
             </ContentWrapper>
      {/* {heading && <Title>{heading}</Title>} */}
      {/* only render <Body> if there's actual rich‐text JSON */}
      {/* {hasBody && (
        <Body>{documentToReactComponents(JSON.parse(body.raw))}</Body>
      )} */}
    </WhyLandownersChooseUsSectionWrapper>
  )
}
