import * as React from "react"
import { Head } from "react-static"
import { publicURL } from "../../config"

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
  const imageSrc = `${publicURL}${image ||
    "/static_images/hulina-opengraph.png"}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={descr} />
      <meta property="og:site_name" content="Hulina" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={descr} />
      <meta property="og:image" content={imageSrc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${publicURL}${route}/`} />
      <meta property="og:locale" content="fi_FI" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}
