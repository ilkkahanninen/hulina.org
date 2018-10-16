import React from "react"
import convert from "htmr"
import { Link } from "react-static"

interface Props {
  content: string
}

const ALink: React.SFC<React.LinkHTMLAttributes<{}>> = ({ href, children }) => (
  <Link to={href}>{children}</Link>
)

const transform = {
  a: ALink,
}

const HtmlContent = (props: Props) => (
  <div>{convert(props.content, { transform })}</div>
)

export default HtmlContent
