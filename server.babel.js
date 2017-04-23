//  enable runtime transpilation to use ES6/7 in node

const fs = require('fs')

const babelrc = fs.readFileSync('./.babelrc')
let config

try {
  config = JSON.parse(babelrc)
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.') // eslint-disable-line
  console.error(err) // eslint-disable-line
}

require('babel-register')(config)
