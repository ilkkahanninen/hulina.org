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
`

export const Title = ({ children, superText }: Props) => (
  <div>
    {superText && <SuperText>{superText}</SuperText>}
    <Heading>{children}</Heading>
  </div>
)
