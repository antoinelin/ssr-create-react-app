const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./../../config/webpack.config.prod')

export const webpackDev: express.RequestHandler = (req, res, next) =>
  webpackDevMiddleware(
    webpack(config[0]),
    {
      lazy: false,
      serverSideRender: true,
      publicPath: config[0].output.publicPath,
      stats: {
        colors: true,
        chunks: false,
        'errors-only': true,
      },
    },
  )(req, res, next)

export const webpackHot: express.RequestHandler = (req, res, next) =>
  webpackHotMiddleware(webpack(config[0]))(req, res, next)
