const fs = require("fs")
const path = require("path")
const { promisify } = require("util")
const sharp = require("sharp")

const imageSizes = [700]

const imagesPath = "content/images"
const targetPath = "public/images"

const readDir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

const getImageFilename = (src, width) =>
  `${src.replace(/\.\w+$/, "")}${width ? `_${width}` : ""}.jpg`

const resize = (source, file) => width =>
  sharp(source)
    .resize(width)
    .toFile(path.join(targetPath, getImageFilename(file, width)))

module.exports = async () => {
  const files = await readDir(imagesPath)

  return Promise.all(
    files.map(async file => {
      try {
        const source = await readFile(path.join(imagesPath, file))
        const resizeTo = resize(source, file)
        await Promise.all(imageSizes.map(resizeTo))
      } catch (err) {
        console.error(err)
      }
    }),
  )
}
