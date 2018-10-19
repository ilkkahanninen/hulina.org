import React from "react"
import styled from "styled-components"
import { theme } from "../theme"

interface Props {
  children: string
  superText?: string
}

const Heading = styled.h1`
  font-family: ${theme.fonts.serif};
  margin: 0;
`

const SuperText = styled.div`
  font-family: ${theme.fonts.serif};
  text-transform: uppercase;
  font-size: 80%;
  line-height: 1.25em;
  margin-bottom: 8px;
  opacity: 0.75;
`

export const Title = ({ children, superText }: Props) => (
  <div>
    {superText && <SuperText>{superText}</SuperText>}
    <Heading>{children}</Heading>
  </div>
)
