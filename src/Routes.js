import Home from './containers/Home'
import About from './containers/About'

export default [
  {
    path: '/',
    exact: true,
    render: Home,
  },
  {
    path: '/about',
    exact: true,
    render: About,
  },
]
