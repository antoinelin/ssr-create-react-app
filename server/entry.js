const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { StaticRouter } = require('react-router')

const Routes = require('./../src/Routes').default

const getHtml = (location, context) => ReactDOMServer.renderToString(
  <StaticRouter
    location={location}
    context={context}
  >
    <Routes />
  </StaticRouter>,
)

const buildApp = ({ html, scriptFilename, styleFilename, analytics }) => {
  return `
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>FROM THE SERVER</title>
        <link rel="stylesheet" href=${styleFilename}>
        ${analytics()}
      </head>
      <body>
        <div id="root">${html}</div>
        <script src=${scriptFilename}></script>
      </body>
    </html>
  `
}

export default (req, scriptFilename, styleFilename, context, analytics) => {
  const html = getHtml(req.url, context)
  return buildApp({ html, scriptFilename, styleFilename, analytics })
}
