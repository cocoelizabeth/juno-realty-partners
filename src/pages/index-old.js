// src/pages/index.js

import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

// A wrapped content container to test theme spacing
const Container = styled.div`
  padding: var(--space-lg);
  margin: 0 auto;
  text-align: center;
  background-color: var(--primary);
  padding-top: 72px;
  height: 200vh;
  background-color: #efefef;
  width: 100%;

`

// A primary button to test your accent color
const PrimaryButton = styled.button`
  background-color: var(--color-accent);
  color: var(--color-light);
  font-size: var(--font-size-md);
  padding: var(--space-sm) var(--space-md) ;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: var(--space-sm) ;

  &:hover {
    opacity: 0.9;
  }
`

export default function IndexPage() {
  return (
    <Layout>
      <Container>
        <h1>Welcome to Juno Realty Partners</h1>
        <p>
          We help landowners unlock hidden value through creative partnerships,
          flexible deal structures, and expert development guidance.
        </p>
        <PrimaryButton>Get in Touch</PrimaryButton>
      </Container>
    </Layout>
  )
}
