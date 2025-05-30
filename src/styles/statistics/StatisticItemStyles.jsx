import styled from "styled-components"

export const StatisticItemWrapper = styled.div`
  color: var(--color-dark);
  border-bottom: 1px solid var(--color-medium);
  text-align: center;
  line-height: 1.7;
  padding: var(--space-gap) 0;
  
  @media only screen and (min-width: 480px) {
  }

  @media only screen and (min-width: 768px) {
    text-align: left;
    border-bottom: none;
    padding-top: 0;
    padding-bottom: calc(var(--space-gap) * 2);
  }

  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`

export const Value = styled.div`
  font-size: var(--font-size-statistic);
  font-family: var(--font-heading);
  color: var(--color-accent);
  line-height: 1;

  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media only screen and (min-width: 928px) {
    font-size: 55px;
  }
`

export const Label = styled.div`
  font-size: 18px;
  line-height: 1;
`

export const StatsDisclaimer = styled.div`
  font-size: var(--font-size-sm);
  opacity: 0.48;
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }

  @media only screen and (min-width: 928px) {
    padding-right: var(--space-gap);
  }
`
