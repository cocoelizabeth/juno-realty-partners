import React from "react"
import { QuoteSingularSectionWrapper } from "../../styles/quotes/QuoteStyles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import QuotationMark1 from "../../images/quotation-mark-1.svg"

export default function QuoteSingularBlock({ body, speaker, style }) {
  return (
    <QuoteSingularSectionWrapper>
      <div className="quote-wrapper">
        <QuotationMark1 className="quotation-svg" width={120} height={40} />
        {body && (
          <div className="quote">
            {documentToReactComponents(JSON.parse(body.raw))}
          </div>
        )}
        <div className="speaker">— {speaker}</div>
      </div>
    </QuoteSingularSectionWrapper>
  )
}
