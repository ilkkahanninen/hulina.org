import * as R from "ramda"
import { getReleases } from "./data"
import { getReleasePath } from "./paths"
import resizeImages from "../../resize-images"

const optimizeReleases = R.map(
  R.pick(["catalogNumber", "author", "title", "cover", "releaseDate"]),
)

export default async () => {
  const [releases] = await Promise.all([getReleases(), resizeImages()])

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
    {
      is404: true,
      component: "src/containers/404",
    },
  ]
}
