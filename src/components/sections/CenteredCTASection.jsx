import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  SectionWrapper,
  Title,
  Body,
} from "../../styles/sections/CenteredCTASectionStyles"
import { PrimaryButton } from "../../styles/ButtonStyles"

export default function CenteredCTASection({ heading, body, ctaText, ctaUrl, currentSlug }) {
  const hasBody = Boolean(body?.raw)

  let path = ctaUrl.startsWith("/") ? ctaUrl : `/${ctaUrl}`

  return (
    <SectionWrapper $currentSlug={currentSlug}>
      {heading && <Title>{heading}</Title>}
      {/* only render <Body> if there's actual rich‐text JSON */}
      {hasBody && (
        <Body>{documentToReactComponents(JSON.parse(body.raw))}</Body>
      )}

      {ctaText && <PrimaryButton to={path}>{ctaText}</PrimaryButton>}
    </SectionWrapper>
  )
}
