import React, { useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  AccordionSectionWrapper,
  AccordionContentContainer,
  AccordionSectionHeading,
  AccordionContainer,
  AccordionItemContainer,
  AccordionItemTitle,
  AccordionItemBody,
  AccordionIcon,
} from "../../styles/sections/AccordionSectionStyles"

import { Bold, Italic } from "../../styles/accordion/RichTextStyles"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: text => <u>{text}</u>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    //  can add more later
  },
}

export default function AccordionSection({ sectionHeading, features }) {
  // state: which index is currently open (null if none)
  const [activeIndex, setActiveIndex] = useState(null)

  // toggle function: if we click the already-open index, close it (set null);
  // otherwise set activeIndex = clicked index
  const toggleAccordion = idx => {
    setActiveIndex(prev => (prev === idx ? null : idx))
  }

  return (
    <AccordionSectionWrapper>

      <AccordionContentContainer>
              {sectionHeading && (
        <AccordionSectionHeading>{sectionHeading}</AccordionSectionHeading>
      )}
      <AccordionContainer>
        {features.map((feature, idx) => {
          const isOpen = idx === activeIndex
          return (
            <AccordionItemContainer key={feature.internalName}>
              {/* Title row. When clicked, run toggleAccordion(idx).*/}
              <AccordionItemTitle onClick={() => toggleAccordion(idx)}>
                {feature.heading}

                {/*
                  Optionally show a “+” or “–” icon on the right.
                  You can either:
                  1) Pass isOpen down to the styled‐component and let it render “+” or “–” via CSS 
                     (e.g. `content: isOpen ? "–" : "+";`)
                  2) Render an explicit <span> here
                */}
                <AccordionIcon $isOpen={isOpen} />
              </AccordionItemTitle>

              {/*
                Only render the body if isOpen === true. 
                You can also render it always and use CSS to collapse/expand via max-height.
              */}
              {isOpen && (
                <AccordionItemBody>
                  {documentToReactComponents(JSON.parse(feature.body.raw), richTextOptions)}
                </AccordionItemBody>
              )}
            </AccordionItemContainer>
          )
        })}
      </AccordionContainer>
      </AccordionContentContainer>
    </AccordionSectionWrapper>
  )
}
