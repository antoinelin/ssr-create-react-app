const React = require('react')
const { StaticRouter } = require('react-router')

const Routes = require('./../../src/Routes').default

const ServerRender: React.StatelessComponent<{}> = ({ location, context }) => (
  <StaticRouter
    location={location}
    context={context}
  >
    <Routes />
  </StaticRouter>
)

export default ServerRender
