import fs from "fs"
import marked from "marked"
import path from "path"
import { promisify } from "util"
import * as yamlFront from "yaml-front-matter"
import axios from "axios"

const readDir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

const getBandCampEmbedCode = async url => {
  if (url) {
    const response = await axios(url)
    const match = response.data.match(
      /<meta property="og:video"[\w\W]+?content="(.*?)"/,
    )
    const code = match && match[1]
    if (!code) {
      console.log(
        "HUOM! Vaihda",
        url,
        "osoittamaan sivulle, josta varsinainen julkaisu löytyy!",
      )
    }
    return code
  }
  return undefined
}

const loadMarkdownFiles = async (src, callback) => {
  const files = await readDir(src)
  return Promise.all(
    files.map(async file => {
      const source = (await readFile(path.join(src, file))).toString()
      return callback({
        id: file.replace(/\.md$/, ""),
        ...yamlFront.loadFront(source),
      })
    }),
  )
}

export const getReleases = () =>
  loadMarkdownFiles(
    "content/releases",
    async ({ __content, author, ...header }) => ({
      ...header,
      type: "release",
      author: author || "Eri esittäjiä",
      bandcampEmbed: await getBandCampEmbedCode(header.bandcampUrl),
      description: marked(__content),
    }),
  )

export const getArticles = () =>
  loadMarkdownFiles(
    "content/articles",
    async ({ __content, ...header }) => ({
      ...header,
      type: "article",
      body: marked(__content),
    }),
  )
