import React, { Component } from 'react'
import { appMeta } from './../meta'
import Page from './../Page'

import Welcome from './../../components/Welcome'

class App extends Component {
  getMetaData() {
    return {
      title: 'Homepage | SSR React-app',
      meta: appMeta,
      link: this.pageLink(),
    }
  }

  pageLink = () => {
    return []
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <Welcome />
      </Page>
    )
  }
}

export default App
