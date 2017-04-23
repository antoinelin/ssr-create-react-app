import React from 'react'

import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import { App, About } from './pages'

import './ressources/theme/stylesheets/Default.css'

const Routes: React.StatelessComponent<{}> = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={App}
    />
    <Route
      exact
      path="/about"
      component={About}
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
