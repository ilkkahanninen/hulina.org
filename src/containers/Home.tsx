import React from "react"
import * as R from "ramda"
import { withRouteData } from "react-static"
import styled from "styled-components"
import { Header } from "../components/Header"
import HomeCard from "../components/HomeCard"
import { PageMeta } from "../components/PageMeta"
import ReleaseTitle from "../components/ReleaseTitle"
import { getImagePath, getReleasePath } from "../model/paths"
import { ReleaseData } from "../types"
import Footer from "../components/Footer";

interface Props {
  releases: ReleaseData[]
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const sortByDate = R.sort(
  (a: ReleaseData, b: ReleaseData) => (a.releaseDate < b.releaseDate ? 1 : -1),
)

export default withRouteData(({ releases }: Props) => (
  <div>
    <PageMeta title="Etusivu" />
    <Header />
    <Container>
      {sortByDate(releases).map((release, index) => (
        <HomeCard
          image={getImagePath(release.cover)}
          route={getReleasePath(release)}
          key={index}
        >
          <ReleaseTitle release={release} />
        </HomeCard>
      ))}
    </Container>
    <Footer />
  </div>
))
