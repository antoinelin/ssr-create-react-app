require('import-export')
require('babel-core/register')({ presets: ['es2015', 'react', 'node6'] })

const http = require('http')
const express = require('express')

const run = require('./express').default

const buildApp = require('./../build/core.js').default
const manifest = require('./../build/asset-manifest.json')

const { webpackDev, webpackHot } = require('./middlewares/webpack-dev')

const app = express()
app.server = http.createServer(app)

run(app)

if (app.get('env') === 'development') {
  app.use(webpackDev)
  app.use(webpackHot)
}

app.get('*', (req, res) => {
  const context = {}
  res.send(buildApp(req, manifest['main.js'], manifest['main.css'], context))
})

app.server.listen(app.get('port'))
