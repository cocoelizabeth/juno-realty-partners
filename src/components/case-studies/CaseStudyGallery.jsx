// src/components/case-studies/CaseStudyGallery.jsx
import React, { useCallback, useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";




import { 
    EmblaViewport,
    EmblaContainer,
    EmblaSlide,
    SlideImageWrapper,
    PrevButton,
    NextButton,
    DotsContainer,
    Dot
} from "../../styles/case-studies/CaseStudyGalleryStyles"

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
         
      <PrevButton onClick={scrollPrev} disabled={!canScrollPrev}>
        <RiArrowLeftSLine />
      </PrevButton>
      <NextButton onClick={scrollNext} disabled={!canScrollNext}>
        <RiArrowRightSLine />
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

        <DotsContainer>
            {gallery.map((_, idx) => (
            <Dot
                key={idx}
                selected={idx === selectedIndex}
                onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            />
            ))}
        </DotsContainer>


{/* 
                <ArrowButtonContainer>
                <PrevButton onClick={scrollPrev} aria-label="Previous testimonial">
                    ←
                </PrevButton>
                <NextButton onClick={scrollNext} aria-label="Next testimonial">
                    →
                </NextButton>
                </ArrowButtonContainer> */}

           
        </div>
  )
}
