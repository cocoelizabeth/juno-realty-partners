// src/components/case-studies/CaseStudyGallery.jsx
import React, { useCallback, useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

/**
 * The wrapper for the entire gallery slider
 */
const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
`

/**
 * The flex‐container holding all slides
 */
const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  margin-left: -1rem; /* to allow a bit of peeking on mobile */
`

/**
 * Each individual slide
 */
const EmblaSlide = styled.div`
  position: relative;
  flex: 0 0 100%; /* 80% of the viewport width */
  /* margin-left: 1rem;       */
  box-sizing: border-box;

  /* Adjust height as needed; auto will let the image dictate it */
  height: auto;


  @media (min-width: 768px) {
    flex: 0 0 100%;
    /* margin-left: 1.5rem; */
    height: auto;
    max-height: 55vh;
  }

  @media (min-width: 1024px) {
    flex: 0 0 100%;
    /* margin-left: 2rem; */
    /* height: auto; */
   
  }
`

/**
 * The actual image “card” inside each slide
 */
const SlideImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`


const ArrowButtonContainer = styled.div`
      width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: var(--space-gap);

  
`
/**
 * Prev/Next arrow buttons
 */
// const PrevButton = styled.button`
//   position: absolute;
//   top: 50%;
//   left: 0.5rem;
//   transform: translateY(-50%);
//   background: rgba(255, 255, 255, 0.8);
//   border: none;
//   border-radius: 50%;
//   padding: 0.25rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 10;

//   position: relative;

//   &:disabled {
//     opacity: 0.3;
//     cursor: default;
//   }
// `

// const NextButton = styled.button`
//   position: absolute;
//   top: 50%;
//   right: 0.5rem;
//   transform: translateY(-50%);
//   background: rgba(255, 255, 255, 0.8);
//   border: none;
//   border-radius: 50%;
//   padding: 0.25rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 10;

//   &:disabled {
//     opacity: 0.3;
//     cursor: default;
//   }
// `
export const PrevButton = styled.button`
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--color-accent);
  cursor: pointer;
  z-index: 10;
  &:hover {
    /* opacity: 0.5; */
  }
  left: 0;
  padding-top: 0;
  margin-right: 0;
`

export const NextButton = styled.button`
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--color-accent);
  cursor: pointer;
  z-index: 10;
  &:hover {
    /* opacity: 0.5; */
  }
  right: 0;
  margin-left: 0;
`
/**
 * Dots/navigation at the bottom
 */
const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  cursor: pointer !important;
`

const Dot = styled.button`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: none;
  background: ${props => (props.selected ? "var(--color-dark)" : "var(--color-medium)")};
  transition: background 0.2s ease;
    cursor: pointer !important;
  &:hover {
    background: #777;
    cursor: pointer;
  }
`

export default function CaseStudyGallery({ gallery }) {
  // ➊ Set up the Embla carousel hook
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  })

  // ➋ Keep track of selected index and whether prev/next are enabled
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  // ➌ Called when user clicks “Prev”
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  // ➍ Called when user clicks “Next”
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // ➎ Update state whenever the carousel’s selected index changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  // ➏ Attach the `select` event once Embla API is ready
  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Prev & Next Buttons */}

      {/* ➐ Embla viewport and container */}
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {gallery.map((asset, index) => {
            // asset is a Contentful Asset from your page query
            const image = getImage(asset.gatsbyImageData)
            return (
              <EmblaSlide key={asset.contentful_id || index}>
                <SlideImageWrapper>
                  <GatsbyImage
                    image={image}
                    alt={asset.description || ""}
                    style={{ width: "100%", height: "100%" }}
                  />
                </SlideImageWrapper>
              </EmblaSlide>
            )
          })}
        </EmblaContainer>
      </EmblaViewport>

        <DotsContainer>
            {gallery.map((_, idx) => (
            <Dot
                key={idx}
                selected={idx === selectedIndex}
                onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            />
            ))}
        </DotsContainer>



                <ArrowButtonContainer>
                <PrevButton onClick={scrollPrev} aria-label="Previous testimonial">
                    ←
                </PrevButton>
                <NextButton onClick={scrollNext} aria-label="Next testimonial">
                    →
                </NextButton>
                </ArrowButtonContainer>

           
        </div>
  )
}
