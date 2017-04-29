/* @flow */

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import _ from 'lodash'

import routes from '~src/Routes'
import config from '~src/config'

import '@theme/stylesheets/Default.css' // eslint-disable-line

export default () => {
  const withSubRoutes = route => (
    <Route
      key={_.uniqueId()}
      exact={route.exact || false}
      path={route.path}
      component={route.render}
    />
  )
  return (
    <div>
      <Helmet {...config.app} />
      <Switch>
        {
          routes.map(route => withSubRoutes(route))
        }
      </Switch>
    </div>
  )
}
