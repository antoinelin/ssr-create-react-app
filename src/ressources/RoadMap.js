import { App, About } from '~pages'

const RoadMap = [
  {
    key: 'home',
    path: '/',
    exact: true,
    component: App,
  },
  {
    key: 'about',
    path: '/about',
    exact: true,
    component: About,
  },
]

export default RoadMap
