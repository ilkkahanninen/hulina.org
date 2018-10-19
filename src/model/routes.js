import { getReleases } from "./data"
import { getReleasePath } from "./paths"
import resizeImages from "../../resize-images"

export default async () => {
  const [releases] = await Promise.all([getReleases(), resizeImages()])

  return [
    {
      path: "/",
      component: "src/containers/Home",
      getData: () => ({ releases }),
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
