import React from "react"
import styled from "styled-components"
import { Link } from "react-static"
import logo from "../images/logo.svg"

interface Props {
  smallLogo?: boolean
}

const HeaderWrapper = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: black;
  z-index: 2;

  a {
    color: white;
    text-decoration: none;
  }
`

const StyledLink = styled(Link)`
  display: block;
  text-align: center;

  @media screen and (min-width: 700px) {
    width: 50vw;
  }

  @media screen and (min-width: 1200px) {
    width: 25vw;
  }

  &:hover {
    margin-left: 20px;
  }
`

const Logo = styled.img<{ small?: boolean }>`
  width: 300px;
  height: auto;

  ${props => (props.small ? "width: auto; height: 40px" : "")};
`

export const Header = ({ smallLogo }: Props) => (
  <HeaderWrapper>
    <StyledLink to="/">
      <Logo src={logo} small={smallLogo} />
    </StyledLink>
  </HeaderWrapper>
)
