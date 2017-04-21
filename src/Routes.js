import React from 'react'

import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import Welcome from './components/Welcome'

import './ressources/theme/stylesheets/Default.css'

const Routes: React.StatelessComponent<{}> = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Welcome}
    />
    <Route
      exact
      path="/about"
      render={() => (
        <div>
          <h1>About</h1>
          <Link to="/">Home</Link>
        </div>
      )}
    />
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
