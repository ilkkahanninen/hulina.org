import React from "react"
import { withRouteData } from "react-static"
import styled from "styled-components"
import { Card } from "../components/Card"
import { Header } from "../components/Header"
import HtmlContent from "../components/HtmlContent"
import { Image } from "../components/Image"
import { PageMeta } from "../components/PageMeta"
import { getImagePath, getImageFilename, getArticlePath } from "../model/paths"
import { theme } from "../theme"
import { ExtendedArticleData } from "../types"
import Footer from "../components/Footer"
import { formatDate } from "../utils/dates"
import { Title } from "../components/Title"

interface Props {
  article: ExtendedArticleData
}

const breakpoint = "800px"

const Wrapper = styled.div`
  position: relative;
  padding-top: 5px;
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
      max-width: 33vw;
      max-height: 80vh;
      width: auto;
      margin-top: 100px;
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
    margin-left: -90px;
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

const Author = styled.span`
  color: rgba(255, 255, 255, 0.5);
  margin-right: 2ex;
`

const Lead = styled.p`
  font-size: 140%;
  line-height: 1.75em;
  font-style: italic;
`

const Body = styled.div`
  max-width: 1000px;
  margin: 40px auto 150px;
  font-size: 120%;
  line-height: 1.75em;
`

export default withRouteData(({ article }: Props) => {
  const coverSrc = getImagePath(getImageFilename(article.cover, 700))

  return (
    <div>
      <PageMeta
        title={article.title}
        image={coverSrc}
        description={article.lead}
        route={getArticlePath(article)}
      />
      <Header smallLogo={true} />
      <Wrapper>
        <ImageWrapper>
          <Image src={coverSrc} alt="" />
        </ImageWrapper>
        <Card>
          <TitleWrapper>
            <Title>{article.title}</Title>
            <CatalogInfo>
              <ReleaseDate>{formatDate(article.releaseDate)}</ReleaseDate>
              <Author>{article.author}</Author>
            </CatalogInfo>
          </TitleWrapper>
          <Lead>{article.lead}</Lead>
        </Card>
      </Wrapper>
      <Body>
        <HtmlContent content={article.body} />
        <TitleWrapper>
          <ReleaseDate>{formatDate(article.releaseDate)}</ReleaseDate>
          <Author>{article.author}</Author>
        </TitleWrapper>
      </Body>
      <Footer />
    </div>
  )
})
