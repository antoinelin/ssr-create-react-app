import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { appMeta } from './meta'

import Welcome from '~components/Welcome' // eslint-disable-line

class Home extends Component {
  getMetaData() {
    return {
      title: 'Homepage',
      meta: appMeta,
      link: this.pageLink(),
    }
  }

  pageLink = () => {
    return []
  }

  render() {
    return (
      <div>
        <Helmet {...this.getMetaData()} />
        <Welcome />
      </div>
    )
  }
}

export default Home
