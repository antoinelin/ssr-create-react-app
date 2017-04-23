import React from 'react'

import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import RoadMap from './RoadMap'

import './ressources/theme/stylesheets/Default.css'

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
