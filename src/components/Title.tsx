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

const SuperText = styled.div``

const Wrapper = styled.div`
  padding: 30px 0;
  font-family: ${theme.fonts.serif};
`

export const Title = ({ children, superText }: Props) => (
  <Wrapper>
    {superText && <SuperText>{superText}</SuperText>}
    <Heading>{children}</Heading>
  </Wrapper>
)
