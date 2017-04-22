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

export default (app) => {
  app.set('port', (process.env.PORT || 3000))

  if (app.get('env') === 'production') {
    app.use(gzip())
  }

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(methodOverride())
  app.set('trust proxy', 'loopback')

  app.use(express.static(path.join(__dirname, '..', '..', 'build')))
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
  console.log()
  console.log(`MIDDLEWARES: ${app.get('env') === 'development' ? chalk.cyan(['WEBPACK-DEV'], ['WEBPACK-HOT']) : chalk.cyan('none')}`)
  console.log()
  console.log(`PORT: ${chalk.cyan(app.get('port'))}`)
  console.log()
  console.log(chalk.green('Server successfully started! ') + emoji.get('raised_hands'))
  console.log()
  /* eslint-enable */

  app.use(flash())
}
