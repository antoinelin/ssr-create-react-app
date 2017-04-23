import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { aboutMeta } from './../meta'
import Page from './../Page'

class About extends Component {
  getMetaData() {
    return {
      title: 'About | SSR React-app',
      meta: aboutMeta,
      link: this.pageLink(),
    }
  }

  pageLink = () => {
    return []
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <h1>About</h1>
        <Link to="/">Home</Link>
      </Page>
    )
  }
}

export default About
