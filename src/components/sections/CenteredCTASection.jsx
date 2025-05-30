import React from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from "gatsby"
import { SectionWrapper, Title, Body } from "../../styles/sections/CenteredCTASectionStyles"
import { PrimaryButton } from "../../styles/ButtonStyles"
export default function CenteredCTASection({ heading, body, ctaText, ctaUrl }) {
    const hasBody = Boolean(body?.raw)
    
  return (
    <SectionWrapper>

      {heading && <Title>{heading}</Title>}
      {/* only render <Body> if there's actual rich‐text JSON */}
            {hasBody && (
        <Body>
          {documentToReactComponents(JSON.parse(body.raw))}
        </Body>
      )}

      {ctaText && <PrimaryButton to={ctaUrl}>{ctaText}</PrimaryButton>}
    </SectionWrapper>
  )
}
