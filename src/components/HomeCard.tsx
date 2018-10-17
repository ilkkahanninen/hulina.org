import React from "react"
import styled from "styled-components"
import { Link } from "react-static"
import { theme } from "../theme"

interface Props {
  image: string
  route: string
  children: React.ReactNode
}

const ContentWrapper = styled.div`
  position: absolute;
  left: 30px;
  right: -10px;
  bottom: 10px;
  z-index: 1;
`

const Content = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  background: #222;
  padding: 10px 20px 20px;
  text-align: right;

  &,
  a {
    color: white;
  }
`

const CardContainer = styled(Link)<{ image: string }>`
  position: relative;

  background: url(${props => props.image});
  background-size: cover;

  width: 100vw;
  height: 100vw;

  @media screen and (min-width: 700px) {
    width: 50vw;
    height: 50vw;
  }

  @media screen and (min-width: 1200px) {
    width: 25vw;
    height: 25vw;
  }

  &:hover {
    ${ContentWrapper} {
      background: white;
      color: ${theme.colors.darkText};
    }
  }
`

export default ({ image, children, route }: Props) => (
  <CardContainer to={route} image={image}>
    <ContentWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
  </CardContainer>
)
