export interface ReleaseData {
  type: "release"
  catalogNumber: string
  author: string
  title: string
  cover: string
  releaseDate: string
}

export interface ExtendedReleaseData extends ReleaseData {
  id: string
  genre: string[]
  description: string
  bandcampUrl?: string
  bandcampEmbed?: string
  spotifyUrl?: string
}

export interface ArticleData {
  type: "article"
  title: string
  cover: string
  releaseDate: string
}

export interface ExtendedArticleData extends ArticleData {
  id: string
  author: string
  lead: string
  body: string
}

export type HomeEntry = ReleaseData | ArticleData
