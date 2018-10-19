import React from "react"
import { withRouteData } from "react-static"
import styled from "styled-components"
import { Card } from "../components/Card"
import { Header } from "../components/Header"
import HtmlContent from "../components/HtmlContent"
import { Image } from "../components/Image"
import { PageMeta } from "../components/PageMeta"
import ReleaseTitle from "../components/ReleaseTitle"
import { getImagePath, getReleasePath, getImageFilename } from "../model/paths"
import { theme } from "../theme"
import { ExtendedReleaseData } from "../types"
import Footer from "../components/Footer"
import { formatDate } from "../utils/dates"

interface Props {
  release: ExtendedReleaseData
}

const breakpoint = "800px"

const BandCampEmbed = styled.iframe`
  width: 100%;
  max-width: 700px;
  height: 120px;
  border: none;
  background: #222;
  background: rgba(16, 16, 16, 0.95);

  @media screen and (min-width: ${breakpoint}) {
    margin: -20px -40px 0 20px;
  }
`

const Wrapper = styled.div`
  position: relative;
  padding-top: 5px;
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

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;

  margin: -${theme.layout.padding}px;
  margin-bottom: ${theme.layout.padding}px;
  padding: 30px 100px 30px ${theme.layout.padding}px;

  background: #f0f0f0;
  color: ${theme.colors.darkText};

  @media screen and (min-width: ${breakpoint}) {
    background: #222;
    background: rgba(16, 16, 16, 0.95);
    color: white;

    margin-right: -${theme.layout.padding}px;
    margin-top: 10px;
    margin-left: -60px;
    margin-bottom: ${theme.layout.padding}px;
    padding-left: 50px;
  }
`

const CatalogInfo = styled.div`
  font-size: 80%
  text-transform: uppercase;
  margin-top: 4px;
`

const ReleaseDate = styled.span`
  color: rgba(255, 255, 255, 0.75);
  margin-right: 2ex;
`

const Genre = styled.span`
  color: rgba(255, 255, 255, 0.5);
  margin-right: 2ex;
`

export default withRouteData(({ release }: Props) => {
  const coverSrc = getImagePath(getImageFilename(release.cover, 700))

  return (
    <div>
      <PageMeta
        title={`${release.author} – ${release.title}`}
        image={coverSrc}
        description={release.description}
        route={getReleasePath(release)}
      />
      <Header smallLogo={true} />
      <Wrapper>
        <ImageWrapper>
          <Image src={coverSrc} alt="" />
          {release.bandcampEmbed && (
            <BandCampEmbed src={release.bandcampEmbed} />
          )}
        </ImageWrapper>
        <Card>
          <TitleWrapper>
            <ReleaseTitle release={release} />
            <CatalogInfo>
              <ReleaseDate>{formatDate(release.releaseDate)}</ReleaseDate>
              {release.genre.map(genre => (
                <Genre key={genre}>{genre}</Genre>
              ))}
            </CatalogInfo>
          </TitleWrapper>
          <HtmlContent content={release.description} />
        </Card>
      </Wrapper>
      <Footer />
    </div>
  )
})
