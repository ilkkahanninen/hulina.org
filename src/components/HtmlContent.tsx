import React from "react"
import convert from "htmr"
import { Link } from "react-static"
import { getImagePath, getImageFilename } from "../model/paths"
import styled from "styled-components"

interface Props {
  content: string
}

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`

const transform = {
  a: ({ href, children }: React.LinkHTMLAttributes<{}>) => (
    <Link to={href}>{children}</Link>
  ),
  img: ({ src, ...rest }: React.ImgHTMLAttributes<{}>) => (
    <StyledImage src={getImagePath(getImageFilename(src, 700))} {...rest} />
  ),
  hr: styled.hr`
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    margin: 60px 100px;
  `
}

const HtmlContent = (props: Props) => (
  <div>{convert(props.content, { transform })}</div>
)

export default HtmlContent
