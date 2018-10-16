import fs from "fs"
import marked from "marked"
import path from "path"
import { promisify } from "util"
import * as yamlFront from "yaml-front-matter"
import axios from "axios"

const releasesPath = "content/releases"

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

export const getReleases = async () => {
  const files = await readDir(releasesPath)

  return Promise.all(
    files.map(async file => {
      const source = (await readFile(path.join(releasesPath, file))).toString()
      const { __content, author, ...header } = yamlFront.loadFront(source)
      const id = file.replace(/\.md$/, "")
      const bandcampEmbed = await getBandCampEmbedCode(header.bandcampUrl)

      return {
        id,
        ...header,
        author: author || "Eri esittäjiä",
        bandcampEmbed,
        description: marked(__content),
      }
    }),
  )
}
