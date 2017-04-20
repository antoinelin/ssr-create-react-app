const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')

const config = require('./../../config/webpack.config.prod')

export const webpackDev: express.RequestHandler = (req, res, next) =>
  webpackDevMiddleware(
    webpack(config[0]),
    {
      lazy: false,
      serverSideRender: true,
      publicPath: config[0].output.publicPath,
    },
  )(req, res, next)
