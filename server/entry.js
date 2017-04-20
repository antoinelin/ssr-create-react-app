const React = require('react')
const ReactDOMServer = require('react-dom/server')

const catchMarkeup = require('./lib/catch')

module.exports = (ServerRender, req, scriptFilename, context) => {
  let html
  const css = catchMarkeup.collect(() => {
    html = ReactDOMServer.renderToString(
      <ServerRender
        location={req.url}
        context={context}
      />,
    )
  })
  return ReactDOMServer.renderToString(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>FROM THE SERVER</title>
        <style id="server-side-style" dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
        <script src={scriptFilename} />
      </body>
    </html>,
  )
}
