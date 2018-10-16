import React from "react"
import styled from "styled-components"
import { theme } from "../theme";

interface Props {
  children: string
  superText?: string
}

const Heading = styled.h1`
  margin: 0;
`

const SuperText = styled.div`
  margin-bottom: 3px;
  text-transform: uppercase;
`

const Wrapper = styled.div`
  margin: -${theme.layout.padding}px;
  margin-bottom: ${theme.layout.padding}px;
  padding: 50px ${theme.layout.padding}px;
  font-family: ${theme.fonts.serif};
  background: #f0f0f0;
`

export const Title = ({ children, superText }: Props) => (
  <Wrapper>
    {superText && <SuperText>{superText}</SuperText>}
    <Heading>{children}</Heading>
  </Wrapper>
)
