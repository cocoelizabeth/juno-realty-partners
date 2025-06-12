import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  QuoteWrapper,
  PulloutQuoteWrapper,
  InlineQuoteWrapper,
  QuoteText,
  QuoteSpeaker,
} from "../../styles/case-studies/CaseStudyQuoteStyles"

export default function CaseStudyQuoteBlock({ quote }) {
  let inner;

  switch (quote.style) {
    case "Case Study - Aligned to right of text":
      inner = (
        <InlineQuoteWrapper>
          <blockquote className="quote-hanging-right">
            <QuoteText>
              {quote.body &&
                documentToReactComponents(JSON.parse(quote.body.raw))}
            </QuoteText>
            <QuoteSpeaker>— {quote.speaker}</QuoteSpeaker>
          </blockquote>
        </InlineQuoteWrapper>
      )
      break

    default:
      inner = (
        <PulloutQuoteWrapper>
          <blockquote className="quote-hanging-right">
            <QuoteText>
              {quote.body &&
                documentToReactComponents(JSON.parse(quote.body.raw))}
            </QuoteText>
            <QuoteSpeaker>— {quote.speaker}</QuoteSpeaker>
          </blockquote>
        </PulloutQuoteWrapper>
      )
  }

  return <QuoteWrapper>{inner}</QuoteWrapper>
}
