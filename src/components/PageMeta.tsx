import * as React from "react"
import { Head } from "react-static"

interface Props {
  title?: string
  description?: string
  image?: string
  route?: string
}

export const PageMeta: React.SFC<Props> = ({
  title,
  image,
  description,
  route,
}) => {
  const fullTitle = `${title ? `${title} | ` : ""}Hulina`
  const descr = description || "Vaihtoehtokulttuuriyhdistys"
  const imageSrc = `${process.env.PUBLIC_URL}/${
    image ? `images/${image}` : "static_images/hulina-opengraph.png"
  }`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={descr} />
      <meta property="og:site_name" content="Hulina" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={descr} />
      <meta property="og:image" content={imageSrc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${process.env.PUBLIC_URL}${route}/`} />
      <meta property="og:locale" content="fi_FI" />
    </Head>
  )
}
