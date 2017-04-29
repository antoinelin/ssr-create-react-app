import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { aboutMeta } from './meta'

class About extends Component {
  getMetaData() {
    return {
      title: 'About',
      meta: aboutMeta,
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
        <h1>About</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default About
