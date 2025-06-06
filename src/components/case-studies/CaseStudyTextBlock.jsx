import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import {
  RichTextContainer,
  NumberedH3,
  UnorderedList,
  OrderedList,
  ListItem,
} from "../../styles/case-studies/CaseStudyRichTextStyles"
import CaseStudyQuoteBlock from "./CaseStudyQuoteBlock"
import { TextBlockSection } from "../../styles/case-studies/CaseStudyPageStyles"

export default function CaseStudyTextBlock({ content }) {
  const heading = content.heading // e.g. “The Opportunity”, “Challenges”, “Solutions”
  const bodyRaw = content.body?.raw
  const quoteRef = content.quote // optional quote entry
  const references = content.body?.references || []

  const richTextOptions = {
    renderMark: {
      // add bold, underline, italic, later
    },
    renderNode: {
      // Skip any paragraph whose content is empty or just whitespace
      [BLOCKS.PARAGRAPH]: (node, children) => {
                const allText = node.content
        .map(childNode => childNode.value || "")
        .join("")
        .trim()

      if (!allText) {
        // return null → do not render an empty <p>
        return null
      }

      // Otherwise render a normal <p>
      return <p>{children}</p>
      },
      // Replace <h3> blocks with our NumberedH3
      [BLOCKS.HEADING_3]: (node, children) => {
        return <NumberedH3>{children}</NumberedH3>
      },
      [BLOCKS.UL_LIST]: (node, children) => (
        <UnorderedList>{children}</UnorderedList>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <OrderedList>{children}</OrderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <ListItem>
          <span>{children}</span>
        </ListItem>
      ),

      // 2) Render embedded assets (images) as GatsbyImage
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // Grab the sys.id and find the matching Asset in `references`
        const assetId = node.data.target.sys.id
        const matchedAsset = references.find(
          ref =>
            ref.__typename === "ContentfulAsset" &&
            ref.contentful_id === assetId
        )
        if (!matchedAsset || !matchedAsset.gatsbyImageData) {
          return null
        }
        const image = getImage(matchedAsset.gatsbyImageData)
        return (
          <div style={{ margin: "var(--space-lg) 0" }}>
            <GatsbyImage image={image} alt={matchedAsset.description || ""} />
          </div>
        )
      },

      // 3) Render embedded entries, e.g. Quote entries
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        // Grab the sys.id and find the matching Entry in `references`

        const entryId = node.data.target.sys.id
        const matchedEntry = references.find(
          ref =>
            ref.__typename === "ContentfulQuote" &&
            ref.contentful_id === entryId
        )

        if (!matchedEntry) {
          return null
        }
        // Now we have the actual Quote object; hand it off to our QuoteBlock
        return <CaseStudyQuoteBlock quote={matchedEntry} />
      },

      // 4) If you ever embedded a hyperlink, you can render <a> tags for it:
      [INLINES.HYPERLINK]: (node, children) => {
        const url = node.data.uri
        return (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        )
      },
    },
  }

  return (
    <TextBlockSection>
      <h2 className="case-study-section-title">{heading}</h2>
      <RichTextContainer>
        {documentToReactComponents(JSON.parse(bodyRaw), richTextOptions)}
      </RichTextContainer>

      {/* non-embedded quote */}
      {/* {quoteRef && <CaseStudyQuoteBlock quote={quoteRef} />} */}
    </TextBlockSection>
  )
}
