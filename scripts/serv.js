/* eslint-disable */

process.env.NODE_ENV = 'production'
require('dotenv').config({ silent: true })

const emoji = require('node-emoji')
const chalk = require('chalk')
const fs = require('fs-extra')
const webpack = require('webpack')
const config = require('../config/webpack.config.prod')
const paths = require('../config/paths')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const FileSizeReporter = require('react-dev-utils/FileSizeReporter')

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild

const useYarn = fs.existsSync(paths.yarnLockFile)

function printErrors(summary, errors) {
  console.log(chalk.red(summary))
  console.log()
  errors.forEach(err => {
    console.log(err.message || err)
    console.log()
  })
}

function build(previousFileSizes) {
  console.log('Creating an optimized server-sided bundle...')
  webpack(config[1]).run((err, stats) => {
    if (err) {
      printErrors('Failed to compile.', [err])
      process.exit(1)
    }

    if (stats.compilation.errors.length) {
      printErrors('Failed to compile.', stats.compilation.errors)
      process.exit(1)
    }

    if (process.env.CI && stats.compilation.warnings.length) {
      printErrors('Failed to compile. When process.env.CI = true, warnings are treated as failures. Most CI servers set this automatically.', stats.compilation.warnings)
      process.exit(1)
    }
    console.log(chalk.green('Core bundle compiled successfully.'))
    console.log()
    console.log('File sizes after gzip:')
    console.log()
    printFileSizesAfterBuild(stats, previousFileSizes)
    console.log()
    console.log(chalk.green('Bundle ready to be deployed on server. ') + emoji.get('ok_hand'))
    console.log()
    console.log('Now you may start the Express server with:')
    console.log()
    console.log('  ' + chalk.cyan(useYarn ? 'yarn' : 'npm') +  ' start')
    console.log()
  })
}

if (!checkRequiredFiles([paths.appIndexJs])) {
  process.exit(1)
}

measureFileSizesBeforeBuild(paths.appBuild).then(previousFileSizes => {
  build(previousFileSizes)
})
