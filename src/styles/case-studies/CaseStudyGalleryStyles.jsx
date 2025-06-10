import styled from "styled-components"
import { Link } from "gatsby"
import { SecondaryButton } from "../ButtonStyles"

/**
 * The wrapper for the entire gallery slider
 */
export const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
`

/**
 * The flex‐container holding all slides
 */
export const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  margin-left: -1rem; /* to allow a bit of peeking on mobile */
`

/**
 * Each individual slide
 */
export const EmblaSlide = styled.div`
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
export const SlideImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

/**
 * Prev/Next arrow buttons
 */
export const PrevButton = styled.button`
  position: absolute;
  top: 50%;

  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: white;
  background: none;
  left: 0;
  filter: drop-shadow(2px 2px 7px #000);
   /* background-color:rgba(0,0,0, .5); */

  svg {
    height: 25px;
    width: 25px;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  &:hover {
    cursor: pointer;
    /* background-color: rgba(0, 0, 0, 1); */
    /* filter: drop-shadow(0 0 0 #000); */
  }

  @media only screen and (min-width: 928px) {
    /* left: 0.5rem; */
    svg {
      height: 40px;
      width: 40px;
    }
  }
`

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: white;
  background: none;
  filter: drop-shadow(2px 2px 7px #000);
  /* background-color:rgba(0,0,0, .5); */

  svg {
    height: 25px;
    width: 25px;
    cursor: pointer;
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  @media only screen and (min-width: 928px) {
    /* right: 0.5rem; */
    svg {
      height: 40px;
      width: 40px;
    }
  }
`

/**
 * Dots/navigation at the bottom
 */
export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  cursor: pointer !important;
`

export const Dot = styled.button`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: none;
  background: ${props =>
    props.selected ? "var(--color-dark)" : "var(--color-medium)"};
  transition: background 0.2s ease;
  cursor: pointer !important;
  &:hover {
    background: #777;
    cursor: pointer;
  }
`
