export const getImageFilename = (src, width) =>
  `${src.replace(/\.\w+$/, "")}${width ? `_${width}` : ""}.jpg`

export const getImagePath = src => (src[0] === "/" ? src : `/images/${src}`)

export const releasesPath = "/julkaisut"

export const getReleasePath = release =>
  `${releasesPath}/${release.catalogNumber}`
