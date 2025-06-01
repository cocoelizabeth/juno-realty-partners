import styled from "styled-components"

export const StatsFeaturesSectionWrapper = styled.div`
  text-align: center;
  padding: var(--space-xl) var(--section-side-padding);
  padding-top: 0;
  max-width: var(--max-width);
  margin: 0 auto;
  /* margin-top: -30px; */
  @media only screen and (min-width: 1024px) {
      /* max-width: 1200px; */
  }
`
export const StatsWrapper = styled.div`
  display: grid;
  border-top: 1px solid var(--color-medium);

  @media only screen and (min-width: 480px) {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1px 1fr;
    grid-template-rows: 1fr 1fr;
    position: relative;
    max-width: 550px;
    margin: 0 auto;
    border-top: none;
  }


  @media only screen and (min-width: 768px) {
    max-width: 750px;
  }


  @media only screen and (min-width: 1024px) {
    grid-template-columns: auto 1fr auto 1fr auto 1fr auto;
    grid-template-rows: 1fr;
    max-width: 1200px;

  }
`
export const StatisticItemWrapper = styled.div`
  color: var(--color-dark);
  text-align: center;
  line-height: 1.7;
  padding: var(--space-gap) 0;
  margin: 0 auto;
  border-bottom: 1px solid var(--color-medium);
  width: 100%;

  @media only screen and (min-width: 480px) {
     border-bottom: none;
  }
`

export const Value = styled.div`
  font-size: var(--font-size-xl);
  font-family: var(--font-heading);
  color: var(--color-accent);
  line-height: 1;
  @media only screen and (min-width: 480px) {font-size: 35px;}
  @media only screen and (min-width: 768px) {font-size: 48px;}
  @media only screen and (min-width: 928px) {font-size: 55px;}
`

export const Label = styled.div`
  font-size: 16px;
  line-height: 1;
  @media only screen and (min-width: 768px) {font-size: 18px;}
`

export const Divider = styled.div`
  width: 2px;
  background-color: var(--color-medium);
  height: 100%;
  margin: 0 auto;
  &.line-1 {
    width: 0;
  }

  @media only screen and (min-width: 480px) {
    &.line-1 {
      position: absolute;
      height: 2px;
      width: 100%;
    }
  }

  @media only screen and (min-width: 1024px) {
    &.line-1 {
      width: 2px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      padding: 0;
    }
  }
`

export const StatsDisclaimer = styled.div`
  font-size: var(--font-size-sm);
  opacity: 0.48;
  margin: 0 auto;
  padding-top: var(--space-md);
  width: 100%;
  height: auto;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }

  @media only screen and (min-width: 928px) {
    padding-right: var(--space-gap);
  }
`
