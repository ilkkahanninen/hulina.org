import React from "react"
import * as R from "ramda"
import { withRouteData } from "react-static"
import styled from "styled-components"
import { Header } from "../components/Header"
import HomeCard from "../components/HomeCard"
import { PageMeta } from "../components/PageMeta"
import ReleaseTitle from "../components/ReleaseTitle"
import { getImagePath, getReleasePath, getArticlePath } from "../model/paths"
import { HomeEntry } from "../types"
import Footer from "../components/Footer"
import { Title } from "../components/Title"

interface Props {
  entries: HomeEntry[]
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const sortByDate = R.sort(
  (a: HomeEntry, b: HomeEntry) => (a.releaseDate < b.releaseDate ? 1 : -1),
)

export default withRouteData(({ entries }: Props) => (
  <div>
    <PageMeta title="Etusivu" />
    <Header />
    <Container>
      {sortByDate(entries).map((entry, index) => {
        switch (entry.type) {
          case "release":
            return (
              <HomeCard
                image={getImagePath(entry.cover)}
                route={getReleasePath(entry)}
                key={index}
              >
                <ReleaseTitle release={entry} />
              </HomeCard>
            )

          case "article":
            return (
              <HomeCard
                image={getImagePath(entry.cover)}
                route={getArticlePath(entry)}
                key={index}
              >
                <Title>{entry.title}</Title>
              </HomeCard>
            )

          default:
            return null
        }
      })}
    </Container>
    <Footer />
  </div>
))
