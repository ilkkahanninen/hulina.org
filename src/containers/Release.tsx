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
import styled from "styled-components"

interface Props {
  release: ReleaseData
}

const breakpoint = "800px"

const BandCampEmbed = styled.iframe`
  width: 100%;
  max-width: 700px;
  height: 120px;
  border: none;
  background: white;
`

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 150px;
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (min-width: ${breakpoint}) {
    display: flex;
  }
`

const ImageWrapper = styled.div`
  @media screen and (min-width: ${breakpoint}) {
    img {
      width: auto;
      height: auto;
      max-width: 50vw;
      max-height: 66vh;
      width: auto;
    }
  }
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
      <Wrapper>
        <ImageWrapper>
          <Image src={coverSrc} alt="" />
          {release.bandcampEmbed && (
            <BandCampEmbed src={release.bandcampEmbed} />
          )}
        </ImageWrapper>
        <Card>
          <Title superText={release.author}>{release.title}</Title>
          <HtmlContent content={release.description} />
        </Card>
      </Wrapper>
    </div>
  )
})
