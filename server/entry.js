const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { StaticRouter } = require('react-router')
const { Helmet } = require('react-helmet')

const Routes = require('~src/Routes').default

const getHtml = (location, context) => ReactDOMServer.renderToString(
  <StaticRouter
    location={location}
    context={context}
  >
    <Routes />
  </StaticRouter>,
)

const buildApp = ({ html, scriptFilename, styleFilename, analytics, headAssets }) => {
  return `
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        ${headAssets.title.toString()}
        ${headAssets.meta.toString()}
        ${headAssets.link.toString()}
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
  const headAssets = Helmet.renderStatic()
  return buildApp({ html, scriptFilename, styleFilename, analytics, headAssets })
}
