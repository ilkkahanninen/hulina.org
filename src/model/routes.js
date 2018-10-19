import * as R from "ramda"
import { getReleases, getArticles } from "./data"
import { getReleasePath, getArticlePath } from "./paths"
import resizeImages from "../../resize-images"

const optimizeReleases = R.map(
  R.pick(["type", "catalogNumber", "author", "title", "cover", "releaseDate"]),
)

const optimizeArticles = R.map(
  R.pick(["type", "id", "title", "cover", "releaseDate"]),
)

const sortByDate = R.sort(
  (a, b) => (new Date(a.releaseDate) < new Date(b.releaseDate) ? 1 : -1),
)

export default async () => {
  const [releases, articles] = await Promise.all([
    getReleases(),
    getArticles(),
    resizeImages(),
  ])

  const entries = sortByDate([
    ...optimizeReleases(releases),
    ...optimizeArticles(articles),
  ])

  return [
    {
      path: "/",
      component: "src/containers/Home",
      getData: () => ({
        entries,
      }),
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
