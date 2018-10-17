import { getReleases } from "./data"
import { getReleasePath } from "./paths"

export default async () => {
  const releases = await getReleases()

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
