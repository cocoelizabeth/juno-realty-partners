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
  flex: 0 0 100%;          /* 80% of the viewport width */
  margin-left: 1rem;      /* 1rem left gap so previous slide peeks */
  box-sizing: border-box;
  
  /* Adjust height as needed; auto will let the image dictate it */
  height: 300px;
  
  @media (min-width: 768px) {
    flex: 0 0 100%;
    margin-left: 1.5rem;
    height: 350px;
  }
  
  @media (min-width: 1024px) {
    flex: 0 0 100%;
    margin-left: 2rem;
    height: 500px;
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

/**
 * Prev/Next arrow buttons
 */
const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`

/**
 * Dots/navigation at the bottom
 */
const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`

const Dot = styled.button`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.selected ? "#333" : "#ccc")};
  transition: background 0.2s ease;

  &:hover {
    background: #777;
  }
`

export default function CaseStudyGallery({ gallery }) {
  // ➊ Set up the Embla carousel hook
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
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
      <PrevButton onClick={scrollPrev} disabled={!canScrollPrev}>
        <MdKeyboardArrowLeft size={24} />
      </PrevButton>
      <NextButton onClick={scrollNext} disabled={!canScrollNext}>
        <MdKeyboardArrowRight size={24} />
      </NextButton>

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

      {/* ➑ Dots/navigation indicators */}
      <DotsContainer>
        {gallery.map((_, idx) => (
          <Dot
            key={idx}
            selected={idx === selectedIndex}
            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
          />
        ))}
      </DotsContainer>
    </div>
  )
}
