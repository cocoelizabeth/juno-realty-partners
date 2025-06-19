// src/components/sections/TestimonialsSection.jsx
import React, { useEffect, useState, useRef } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import {
  QuoteSliderSectionWrapper,
  SliderViewport,
  SliderContainer,
  Slide,
  QuoteCard,
  QuoteText,
  AuthorLine,
  PrevButton,
  NextButton,
  DotsContainer,
  Dot,
} from "../../styles/sections/QuoteSliderStyles"
import QuotationMark1 from "../../images/quotation-mark-1.svg"
import useEmblaCarousel from "embla-carousel-react"
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"

// Customize how the quote’s RichText is rendered
const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
    [MARKS.ITALIC]: text => <em>{text}</em>,
    [MARKS.UNDERLINE]: text => <u>{text}</u>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    //  can add more later
  },
}

export default function QuoteSliderSection({ quotes = [] }) {
  // Set up Embla with options
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true, // infinite lopping
    // align: 0, // left align slides in viewport
    skipSnaps: false, // always snaps exactly one slide at a time
    containScroll: "trimSnaps", // doesnt allow blank peeks beyond real slides
  })

  // State to track which slide is selected (for dots)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Refs for measuring slide heights
  const slideRefs = useRef([])
  // const [maxHeight, setMaxHeight] = useState(0)

  // Listen for embla’s “select” event to update dots
  useEffect(() => {
    if (!embla) return
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap())
    }
    embla.on("select", onSelect)
    // initialize selected index
    setSelectedIndex(embla.selectedScrollSnap())
    return () => embla.off("select", onSelect)
  }, [embla])

  // Handlers for Prev/Next buttons
  const scrollPrev = () => embla && embla.scrollPrev()
  const scrollNext = () => embla && embla.scrollNext()

  return (
    <QuoteSliderSectionWrapper>
      <PrevButton onClick={scrollPrev}>
        <RiArrowLeftSLine />
      </PrevButton>
      <NextButton onClick={scrollNext}>
        <RiArrowRightSLine />
      </NextButton>
      {/* Embla viewport & container */}
      <SliderViewport ref={viewportRef}>
        <SliderContainer>
          {quotes.map((item, index) => (
            // <Slide key={index} ref={el => (slideRefs.current[index] = el)}>
            <Slide
              key={index}
              ref={el => (slideRefs.current[index] = el)}
              $isSelected={index === selectedIndex}
            >
              <QuoteCard>
                <QuotationMark1
                  className="quotation-svg"
                  width={120}
                  height={40}
                />

                <QuoteText>
                  {documentToReactComponents(
                    JSON.parse(item.body.raw),
                    richTextOptions
                  )}
                </QuoteText>
                <AuthorLine>— {item.speaker}</AuthorLine>
              </QuoteCard>
            </Slide>
          ))}
        </SliderContainer>
      </SliderViewport>

      {/* —— Dots */}
      <DotsContainer>
        {quotes.map((_, idx) => (
          <Dot
            key={idx}
            active={idx === selectedIndex}
            onClick={() => embla && embla.scrollTo(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
      </DotsContainer>

    </QuoteSliderSectionWrapper>
  )
}
