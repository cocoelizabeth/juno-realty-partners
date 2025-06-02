 // src/components/sections/TestimonialsSection.jsx
import React, { useEffect, useState, useCallback, useRef } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { 
  QuoteSliderSectionWrapper,
  SliderViewport,
  SliderContainer,
  Slide,
  QuoteCard,
  QuoteText,
  AuthorLine,
  ArrowButtonContainer,
  PrevButton,
  NextButton,
  DotsContainer,
  Dot
   
} 
from "../../styles/sections/QuoteSliderStyles"
import QuotationMark1 from "../../images/quotation-mark-1.svg"
import useEmblaCarousel from "embla-carousel-react"


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
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Refs for measuring slide heights
    const slideRefs = useRef([])
    // const [maxHeight, setMaxHeight] = useState(0)

    // Measure heights whenever window or Embla resizes
    const resizeObserver = useRef(null)
    // const calculateMaxHeight = useCallback(() => {
    //     if (slideRefs.current.length === 0) return
    //     let max = 0
    //     slideRefs.current.forEach(slideEl => {
    //         if (!slideEl) return
    //         const h = slideEl.offsetHeight
    //         if (h > max) max = h
    //     })
    //     setMaxHeight(max)
    // }, [])

//   useEffect(() => {
//     if (!embla) return
//     // Whenever slide changes, recalc heights
//     calculateMaxHeight()

//     // Attach a ResizeObserver to recalc when a slide’s content or window changes
//     if (typeof ResizeObserver === "function") {
//       resizeObserver.current = new ResizeObserver(() => {
//         calculateMaxHeight()
//       })
//       slideRefs.current.forEach(el => {
//         if (el) resizeObserver.current.observe(el)
//       })
//     }

//     return () => {
//       if (resizeObserver.current) {
//         resizeObserver.current.disconnect()
//       }
//     }
//   }, [embla, calculateMaxHeight])

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


/* -------------------------------------------------------------------------- */
/*                                     OLD                                    */
/* -------------------------------------------------------------------------- */



  return (
    // <QuoteSliderSectionWrapper style={{ height: maxHeight + 80}}>
    <QuoteSliderSectionWrapper>


        {/* Embla viewport & container */}
      <SliderViewport ref={viewportRef} >
        <SliderContainer>
          {quotes.map((item, index) => (
            <Slide
              key={index}
              ref={el => (slideRefs.current[index] = el)}
            >
              <QuoteCard >
                        <QuotationMark1 className="quotation-svg" width={120} height={40} />

                <QuoteText>
                  {documentToReactComponents(
                    JSON.parse(item.body.raw),
                    richTextOptions
                  )}
                </QuoteText>
                <AuthorLine>
                — {item.speaker}
                </AuthorLine>
              </QuoteCard>
            </Slide>
          ))}
        </SliderContainer>
      </SliderViewport>

           {/* —— ➒ Prev/Next arrows */}
           <ArrowButtonContainer>
                  <PrevButton onClick={scrollPrev} aria-label="Previous testimonial">
        ←
      </PrevButton>
      <NextButton onClick={scrollNext} aria-label="Next testimonial">
        →
      </NextButton>

           </ArrowButtonContainer>
    


      {/* —— ➓ Dots */}
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
