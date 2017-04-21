require('import-export')
require('babel-core/register')({ presets: ['es2015', 'react', 'node6'] })

const http = require('http')
const path = require('path')
const express = require('express')
const gzip = require('compression')

const temp = require('./../build/core.js')
const manifest = require('./../build/asset-manifest.json')
const ServerRender = require('./lib/server-render').default

const { webpackDev, webpackHot } = require('./middlewares/webpack-dev')

const app = express()
app.server = http.createServer(app)

app.use(gzip())

app.use(express.static(path.join(__dirname, '..', 'build')))

if (app.get('env') === 'development') {
  app.use(webpackDev)
  app.use(webpackHot)
}

app.get('*', (req, res) => {
  const context = {}
  res.end(temp(ServerRender, req, manifest['main.js'], context))
})
app.server.listen(process.env.PORT || 3000)
console.log(`listen on http://localhost:${app.server.address().port}`) // eslint-disable-line
