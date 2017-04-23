require('import-export')
require('babel-core/register')({ presets: ['es2015', 'react', 'node6'] })

const http = require('http')
const express = require('express')
const helmet = require('helmet')

const run = require('./express').default

const buildApp = require('./../build/core.js').default
const manifest = require('./../build/asset-manifest.json')

const { webpackDev, webpackHot } = require('./middlewares/webpack-dev')

const { analytics } = require('./middlewares/scripts')

const app = express()
app.server = http.createServer(app)

app.use(helmet())
app.use(helmet.hidePoweredBy())

run(app)

if (app.get('env') === 'development') {
  app.use(webpackDev)
  app.use(webpackHot)
}

app.get('*', (req, res) => {
  const context = {}
  res.send(buildApp(req, manifest['main.js'], manifest['main.css'], context, analytics))
})

app.server.listen(app.get('port'))
