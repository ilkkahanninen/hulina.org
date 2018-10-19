export interface ReleaseData {
  catalogNumber: string
  author: string
  title: string
  cover: string
  releaseDate: string
}

export interface ExtendedReleaseData extends ReleaseData {
  genre: string[]
  description: string
  bandcampUrl?: string
  bandcampEmbed?: string
  spotifyUrl?: string
}

export interface ArticleData {
  title: string
  cover: string
  releaseDate: string
}

export interface ExtendedArticleData extends ArticleData {
  author: string
  lead: string
  body: string
}
