import React from "react"
import styled from "styled-components"
import { Link } from "react-static"
import { theme } from "../theme"
import { getImageFilename } from "../model/paths";

interface Props {
  image: string
  route: string
  children: React.ReactNode
}

const ContentWrapper = styled.div`
  position: absolute;
  left: 30px;
  right: -20px;
  bottom: 20px;
  z-index: 1;
`

const Content = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  background: #222;
  background: rgba(16, 16, 16, 0.95);
  padding: 10px 40px 20px;
  text-align: right;

  &,
  a {
    color: white;
  }
`

const CardContainer = styled(Link)`
  position: relative;

  width: 100vw;
  height: 100vw;
  padding: 5px;

  @media screen and (min-width: 700px) {
    width: 50vw;
    height: 50vw;
  }

  @media screen and (min-width: 1200px) {
    width: 25vw;
    height: 25vw;
  }

  &:hover {
    ${Content} {
      background: white;
      background: rgba(255, 255, 255, 0.95);
      color: ${theme.colors.darkText};
    }
  }
`

const Image = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background: url(${props => getImageFilename(props.src, 700)});
  background-size: cover;
  background-position: center;
`

export default ({ image, children, route }: Props) => (
  <CardContainer to={route}>
    <Image src={image} />
    <ContentWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
  </CardContainer>
)
