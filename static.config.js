import { reloadRoutes } from 'react-static/node'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'
import chokidar from 'chokidar'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'
import getRoutes from './src/model/routes'

// Paths Aliases defined through tsconfig.json
const typescriptWebpackPaths = require('./webpack.config.js')

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  siteRoot: 'https://hulina.netlify.com/',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({}),
  getRoutes,
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    // The styles are collected from each page component
    const html = render(sheet.collectStyles(<Comp />))
    // The collected page styles are stored in `meta`
    meta.styleTags = sheet.getStyleElement()
    // Return the html string for the page
    return html
  },
  webpack: (config, { defaultLoaders }) => {
    // Add .ts and .tsx extension to resolver
    config.resolve.extensions.push('.ts', '.tsx')

    // Add TypeScript Path Mappings (from tsconfig via webpack.config.js)
    // to react-statics alias resolution
    config.resolve.alias = typescriptWebpackPaths.resolve.alias

    // We replace the existing JS rule with one, that allows us to use
    // both TypeScript and JavaScript interchangeably
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: defaultLoaders.jsLoader.exclude, // as std jsLoader exclude
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                },
              },
            ],
          },
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]

    config.plugins.push(new ExtractTextPlugin('styles.css'))

    return config
  },
}
