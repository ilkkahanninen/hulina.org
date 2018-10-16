import React from "react"
import styled from "styled-components"
import { theme } from "../theme"
import { Link } from "react-static"

const HeaderWrapper = styled.nav`
  background: ${theme.colors.primary};
  font-family: ${theme.fonts.serif};
  padding: ${theme.layout.padding}px;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
  }
`

export const Header = () => (
  <HeaderWrapper>
    <Link to="/">Hulina</Link>
  </HeaderWrapper>
)
