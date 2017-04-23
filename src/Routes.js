import React from 'react'

import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import RoadMap from '~ressources/RoadMap'

import '@theme/stylesheets/Default.css' // eslint-disable-line

const Routes: React.StatelessComponent<{}> = () => (
  <Switch>
    {RoadMap.map(route => (
      <Route {...route} />
    ))}
    <Route
      render={() => (
        <div>
          <h1>404 not found</h1>
          <Link to="/">Home</Link>
        </div>
      )}
    />
  </Switch>
)

export default Routes
