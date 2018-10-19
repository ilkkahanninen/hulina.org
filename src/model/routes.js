import * as R from "ramda"
import { getReleases, getArticles } from "./data"
import { getReleasePath, getArticlePath } from "./paths"
import resizeImages from "../../resize-images"

const optimizeReleases = R.map(
  R.pick(["catalogNumber", "author", "title", "cover", "releaseDate"]),
)

export default async () => {
  const [releases, articles] = await Promise.all([
    getReleases(),
    getArticles(),
    resizeImages(),
  ])

  return [
    {
      path: "/",
      component: "src/containers/Home",
      getData: () => ({ releases: optimizeReleases(releases) }),
    },
    ...releases.map(release => ({
      path: getReleasePath(release),
      component: "src/containers/Release",
      getData: () => ({ release }),
    })),
    ...articles.map(article => ({
      path: getArticlePath(article),
      component: "src/containers/Article",
      getData: () => ({ article }),
    })),
    {
      is404: true,
      component: "src/containers/404",
    },
  ]
}
