import React from "react"
import { ReasonItemWrapper, Heading, Body } from "../../styles/features/ReasonItemStyles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


export default function ReasonItem({ heading, body }) {

  return (
    <ReasonItemWrapper>
     {heading && <Heading>{heading}</Heading>}
     {body && <Body>{documentToReactComponents(JSON.parse(body.raw))}</Body>}
    </ReasonItemWrapper>
  )
}
