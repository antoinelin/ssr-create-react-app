// @flow

import React from 'react'
import Helmet from 'react-helmet'

type Props = {
  title?: string,
  link?: Array<string>,
  meta?: Array<string>,
  children?: () => React$Element<any>,
}

const DefaultChildrenElement: React.StatelessComponent<{}> = () => (
  <div>
    <h3>Default Element</h3>
  </div>
)

const Page = (props: Props): React$Element<any> => {
  return (
    <div>
      <Helmet title={props.title} link={props.link} meta={props.meta} />
      { props.children }
    </div>
  )
}

Page.defaultProps = {
  title: 'SSR React-app',
  link: [],
  meta: [],
  children: <DefaultChildrenElement />,
}

export default Page
