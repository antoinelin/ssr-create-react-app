/* eslint-disable */
process.env.NODE_ENV = 'development'

require('dotenv').config({ silent: true })

const chalk = require('chalk')
const webpack = require('webpack')
const express = require('express')
const detect = require('detect-port')
const clearConsole = require('react-dev-utils/clearConsole')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const getProcessForPort = require('react-dev-utils/getProcessForPort')
const prompt = require('react-dev-utils/prompt')
const fs = require('fs')
const config = require('../config/webpack.config.dev')
const paths = require('../config/paths')

const useYarn = fs.existsSync(paths.yarnLockFile)
const cli = useYarn ? 'yarn' : 'npm'
const isInteractive = process.stdout.isTTY

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1)
}

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000
let compiler
let handleCompile

function setupCompiler(host, port, protocol) {
  compiler = webpack(config, handleCompile)
  compiler.plugin('invalid', () => {
    if (isInteractive) {
      clearConsole()
    }
    console.log('Compiling...')
  })

  let isFirstCompile = true

  compiler.plugin('done', (stats) => {
    if (isInteractive) {
      clearConsole()
    }

    const messages = formatWebpackMessages(stats.toJson({}, true))
    const isSuccessful = !messages.errors.length && !messages.warnings.length
    const showInstructions = isSuccessful && (isInteractive || isFirstCompile)

    if (isSuccessful) {
      console.log(chalk.green('Compiled successfully!')) // eslint-disable-line
    }

    if (showInstructions) {
      console.log()
      console.log('The app is running at:')
      console.log()
      console.log('  ' + chalk.cyan(protocol + '://' + host + ':' + port + '/'))
      console.log()
      console.log('Note that the development build is not optimized.')
      console.log(`To create a production build, use ${chalk.cyan(`${cli} run build`)}.`)
      console.log()
      isFirstCompile = false
    }

    // If errors exist, only show errors.
    if (messages.errors.length) {
      console.log(chalk.red('Failed to compile.'))
      console.log()
      messages.errors.forEach(message => {
        console.log(message)
        console.log()
      })
      return
    }

    // Show warnings if no errors were found.
    if (messages.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.'))
      console.log();
      messages.warnings.forEach(message => {
        console.log(message)
        console.log()
      })
      // Teach some ESLint tricks.
      console.log('You may use special comments to disable some warnings.')
      console.log(`Use ${chalk.yellow('// eslint-disable-next-line')} to ignore the next line.`)
      console.log(`Use ${chalk.yellow('/* eslint-disable */')} to ignore all warnings in a file.`)
    }
  })
}

function runDevServer(host, port, protocol) {
  const devServer = express()
  devServer.use(express.static(config.output.path))
  devServer.use(require('webpack-dev-middleware')(compiler, {
    contentBase: paths.appBuild,
    publicPath: config.output.publicPath,
    noInfo: true,
    stats: { colors: true },
  }))
  devServer.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }))
  devServer.get('*', (req, res) => {
    res.sendFile(paths.appHtml)
  })
  devServer.listen(port, err => {
    if (err) {
      console.error(err)
      return
    }
    if (isInteractive) {
      clearConsole()
    }
    console.log(chalk.cyan('Starting the development server...'))
    console.log()
  })
}

function run(port) {
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
  const host = process.env.HOST || 'localhost'
  setupCompiler(host, port, protocol)
  runDevServer(host, port, protocol)
}

detect(DEFAULT_PORT).then(port => {
  if (port === DEFAULT_PORT) {
    run(port)
    return
  }
  if (isInteractive) {
    clearConsole()
    const existingProcess = getProcessForPort(DEFAULT_PORT)
    const question =
      chalk.yellow(`Something is already running on port ${DEFAULT_PORT}. 
        ${existingProcess ? `Probably:\n ${existingProcess}` : ''}
        \n\nWould you like to run the app on another port instead?`
      )
    prompt(question, true).then(shouldChangePort => {
      if (shouldChangePort) {
        run(port)
      }
    })
  } else {
    console.log(chalk.red(`Something is already running on port ${DEFAULT_PORT}.`))
  }
})
