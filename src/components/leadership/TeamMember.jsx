import React from "react"
import {
  TeamMemberWrapper,
  TeamMemberPhoto,
  NameAndTitle,
  Bio,
  ContactInfo,
} from "../../styles/leadership/TeamMemberStyles"

import { GatsbyImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import {
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  Bold,
  Italic,
  Underline,
  RichTextLink,
  UnorderedList,
  OrderedList,
  ListItem,
} from "../../styles/leadership/RichTextStyles"

const baseRichTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
    // You can add more marks (code, strikethrough, etc.) if you like:
    // [MARKS.CODE]: text => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,

    [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
    [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
    [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,

    // Lists
    [BLOCKS.UL_LIST]: (node, children) => (
      <UnorderedList>{children}</UnorderedList>
    ),
    [BLOCKS.OL_LIST]: (node, children) => <OrderedList>{children}</OrderedList>,
    [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,

    // Hyperlinks
    [INLINES.HYPERLINK]: node => {
      const url = node.data.uri
      return (
        <RichTextLink href={url} target="_blank" rel="noopener noreferrer">
          {node.content.map(child => child.value).join("")}
        </RichTextLink>
      )
    },

    // You can add more blocks—blockquote, hr, tables, embedded entries/assets, etc.
    // [BLOCKS.QUOTE]: (node, children) => <BlockQuote>{children}</BlockQuote>,
    // [BLOCKS.HR]: () => <hr />,
  },
}
export default function TeamMember({ person }) {
  // Compute John’s dynamic years experience
  let options = baseRichTextOptions

  if (person.name === "John Favreau") {
    const INDUSTRY_START = 1987
    const DEV_START = 1998
    const nowYear = new Date().getFullYear()
    const yearsInIndustry = nowYear - INDUSTRY_START
    const yearsDeveloping = nowYear - DEV_START

    // Add a renderText that replaces "over 38 years" and "last 27 of"
    options = {
      ...baseRichTextOptions,
      renderText: text => {
        // Replace "over X years" → "over {yearsInIndustry} years"
        const replacedIndustry = text.replace(
          /over\s+\d+\s+years?/i,
          `over ${yearsInIndustry} years`
        )
        // Replace "last Y of" → "last {yearsDeveloping} of"
        const replacedBoth = replacedIndustry.replace(
          /last\s+\d+\s+of/i,
          `last ${yearsDeveloping} of`
        )
        return replacedBoth
      },
    }
  }

  // photo, name, title, bio, email, phone
  return (
    <TeamMemberWrapper>
      <div className="left-side">
        <TeamMemberPhoto>
          <GatsbyImage
            image={person.photo.gatsbyImageData}
            alt={person.photo.description}
            className="team-member-photo-container"
            //   aspectRatio={4 / 3}
          />
        </TeamMemberPhoto>
        <ContactInfo className="desktop">
          {person.email && (
            <p>
              <span className="contact-item-label">Email:</span>{" "}
              <a className="contact-item-link" href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </p>
          )}
          {person.phone && (
            <p>
              <span className="contact-item-label">Phone:</span>{" "}
              <a className="contact-item-link" href={`tel:${person.phone}`}>
                {person.phone}
              </a>
            </p>
          )}
        </ContactInfo>
      </div>

      <div className="right-side">
        <NameAndTitle>
          <h3 className="team-member-name">{person.name}</h3>
          <p className="team-member-title">{person.title}</p>
        </NameAndTitle>
        <ContactInfo className="mobile">
          {person.email && (
            <p>
              <span className="contact-item-label">Email:</span>{" "}
              <a className="contact-item-link" href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </p>
          )}
          {person.phone && (
            <p>
              <span className="contact-item-label">Phone:</span>{" "}
              <a className="contact-item-link" href={`tel:${person.phone}`}>
                {person.phone}
              </a>
            </p>
          )}
        </ContactInfo>
        <Bio>
          {person.bio?.raw
            ? documentToReactComponents(JSON.parse(person.bio.raw), options)
            : null}
        </Bio>
      </div>
    </TeamMemberWrapper>
  )
}
