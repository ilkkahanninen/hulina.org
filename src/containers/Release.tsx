import React from "react"
import { withRouteData } from "react-static"
import HtmlContent from "../components/HtmlContent"
import { PageMeta } from "../components/PageMeta"
import { ReleaseData } from "../types"
import { getReleasePath, getImagePath } from "../model/paths"
import { Header } from "../components/Header"
import { Image } from "../components/Image"
import { Card } from "../components/Card"
import { Title } from "../components/Title"
import styled from "styled-components";

interface Props {
  release: ReleaseData
}

const BandCampEmbed = styled.iframe`
  width: 100%;
  height: 120px;
  border: none;
  margin: 50px auto;
`

export default withRouteData(({ release }: Props) => {
  const coverSrc = getImagePath(release.cover)

  return (
    <div>
      <PageMeta
        title={`${release.author} – ${release.title}`}
        image={coverSrc}
        description={release.description}
        route={getReleasePath(release)}
      />
      <Header />
      <Image src={coverSrc} alt="" />
      <Card>
        <Title superText={release.author}>{release.title}</Title>
        <HtmlContent content={release.description} />
        {release.bandcampEmbed && (
          <BandCampEmbed src={release.bandcampEmbed} />
        )}
      </Card>
    </div>
  )
})
