import React from "react"
import { ReleaseData } from "../types"
import { Title } from "./Title"

interface Props {
  release: ReleaseData
}

export default ({ release }: Props) => (
  <Title superText={`[${release.catalogNumber}] ${release.author}`}>{release.title}</Title>
)
