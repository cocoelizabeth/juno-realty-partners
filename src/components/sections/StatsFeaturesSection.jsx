import React from "react"
import {
  StatsFeaturesSectionWrapper,
  StatsWrapper,
  Divider,
  StatisticItemWrapper,
  Value,
  Label,
  StatsDisclaimer,
} from "../../styles/sections/StatsFeaturesSectionStyles"

export default function StatsFeaturesSection({ stats, statsDisclaimer }) {
  const START_YEAR = 1987;
  const NOW = new Date().getFullYear();
  const YEARS_EXPERIENCE = NOW-START_YEAR;
  return (
    <StatsFeaturesSectionWrapper>
      <StatsWrapper className="grid">
        {stats.map((stat, i) => {
          let value = stat.value;
          if (stat.internalName === "Years Experience Statistic") {
            value = YEARS_EXPERIENCE
          }
          return (
            <React.Fragment>
              <StatisticItemWrapper key={stat.label}>
                <Value>{value}</Value>
                <Label>{stat.label}</Label>
              </StatisticItemWrapper>

              {/* only insert a Divider if this is NOT the last element */}
              {i < stats.length - 1 && (
                <Divider className={`line line-${i}`}></Divider>
              )}
            </React.Fragment>
          )
        })}
      </StatsWrapper>

      <StatsDisclaimer>{statsDisclaimer}</StatsDisclaimer>
    </StatsFeaturesSectionWrapper>
  )
}
