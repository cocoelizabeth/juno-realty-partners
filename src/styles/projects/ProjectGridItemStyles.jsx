import styled from "styled-components"

export const ProjectGridItemWrapper = styled.article`
  max-width: 100%;

  /* --top-row-font-size: 14px; */
  --top-row-padding: 9px 0 0 0;
  --second-row-font-size: 14px;
  --third-row-font-size: 14px;
  --line-one-flex-direction: row;
  --line-one-justify-content: space-between;
  --units-font-size: 14px;
  --type-font-size: 14px;
  --location-font-size: 14px;
  --type-dot-margin: 9px;
  --type-dot-display: inline-block;
  --units-and-type-justify-content: flex-start;

  img {
    width: 100%;
  }

  @media only screen and (min-width: 480px) {
    --units-font-size: 16px;
    --type-font-size: 16px;
    --location-font-size: 16px;
  }

  @media only screen and (min-width: 576px) {
    --units-font-size: 15px;
    --type-font-size: 15px;
    --location-font-size: 13px;
    --second-row-font-size: 13px;
    --third-row-font-size: 13px;
    --line-one-flex-direction: column;
    --units-and-type-justify-content: space-between;
    --type-dot-display: none;
  }
  @media only screen and (min-width: 768px) {
    --units-font-size: 13px;
    --type-font-size: 13px;
    --location-font-size: 13px;
    --second-row-font-size: 13px;
    --third-row-font-size: 13px;
    --top-row-padding: 9px 0 3px 0;
    --line-one-flex-direction: row;
    --units-and-type-justify-content: flex-start;
    --type-dot-display: inline-block;
  }

  @media only screen and (min-width: 928px) {
        --units-font-size: 15px;
    --type-font-size: 15px;
    --location-font-size: 15px;
    --second-row-font-size: 15px;
    --third-row-font-size: 15px;
    --top-row-padding: 9px 0 2px 0;
  }

  @media only screen and (min-width: 1024px) {
            --units-font-size: 12px;
    --type-font-size: 12px;
    --location-font-size: 12px;
    --second-row-font-size: 12px;
    --third-row-font-size: 12px;
    --top-row-padding: 9px 0 2px 0;
  }

    @media only screen and (min-width: 1200px) {
            --units-font-size: 15px;
    --type-font-size: 15px;
    --location-font-size: 15px;
    --second-row-font-size: 15px;
    --third-row-font-size: 15px;
    --top-row-padding: 9px 0 2px 0;
  }
`
export const TextWrapper = styled.div``
export const LineOneWrapper = styled.div`
  display: flex;
  text-align: left;
  flex-direction: var(--line-one-flex-direction);
  justify-content: space-between;
  padding: var(--top-row-padding);
`
export const UnitsAndTypeWrapper = styled.div`
  display: flex;
  justify-content: var(--units-and-type-justify-content);
`
export const Units = styled.p`
  color: var(--color-accent);
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  font-size: var(--units-font-size);
`
export const Type = styled.p`
  font-size: var(--type-font-size);
  &:before {
    content: "•";
    margin-left: var(--type-dot-margin);
    margin-right: var(--type-dot-margin);
    display: var(--type-dot-display);
  }
`
export const Location = styled.p`
  font-size: var(--location-font-size);
`
export const Status = styled.p`
  line-height: 1;
  font-size: var(--second-row-font-size);
  width: 100%;
  margin-bottom: 7px;
`
export const Role = styled.p`
  font-size: var(--third-row-font-size);
  line-height: 1;
`
