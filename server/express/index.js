const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const flash = require('express-flash')
const methodOverride = require('method-override')
const gzip = require('compression')
const emoji = require('node-emoji')
const chalk = require('chalk')
const clearConsole = require('react-dev-utils/clearConsole')

const isInteractive = process.stdout.isTTY
const cacheTime = 86400000 * 7 // 7 days

process.env.PORT = 8000
// Add here G.Analytics ID
process.env.GOOGLE_ANALYTICS_ID = 'UA-97812447-1'
process.env.MIDDLEWARES = ['WEBPACK-DEV', 'WEBPACK-HOT']

export default (app) => {
  app.set('port', (process.env.PORT || 3000))
  app.set('analytics', (process.env.GOOGLE_ANALYTICS_ID || null))
  app.set('middlewares', (process.env.MIDDLEWARES || null))

  if (app.get('env') === 'production') {
    app.use(gzip())
  }

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(methodOverride())
  app.set('trust proxy', 'loopback')
  app.use(express.static(path.join(__dirname, '..', '..', 'build'), { maxAge: cacheTime }))
  app.use((req, res, next) => {
    if (req.url.match(/^\/(css|js|img|font)\/.+/)) {
      res.setHeader('Cache-Control', `public, max-age=${cacheTime}`)
    }
    next()
  })
  // Displayed logs
  // -------------------o
  if (isInteractive) {
    clearConsole()
  }
  /* eslint-disable */
  console.log()
  console.log(chalk.green('Starting the Express server... '))
  console.log()
  console.log(`ENV: ${chalk.cyan(app.get('env'))}`)
  if (app.get('env') === 'development') {
    console.log()
    console.log(`MIDDLEWARES: ${chalk.cyan(app.get('middlewares'))}`)  
  }
  console.log()
  console.log(`PORT: ${chalk.cyan(app.get('port'))}`)
  console.log()
  console.log(`ANALYTICS_ID: ${chalk.cyan(app.get('analytics'))}`)
  console.log()
  console.log(chalk.green('Server successfully started! ') + emoji.get('raised_hands'))
  console.log()
  /* eslint-enable */

  app.use(flash())
}
