import config from './../../config'

export const appMeta = config.defaultMeta.concat([
  { name: 'description', content: 'SSR React-app' },
  { name: 'robots', content: 'index, follow' },
  // APPLE META
  { name: 'apple-mobile-web-app-title', content: 'SSR React-app' },
  // FACEBOOK META
  { property: 'og:title', content: 'SSR React-app' },
  { property: 'og:description', content: 'SSR React-app' },
  // TWITTER META
  { name: 'twitter:title', content: 'SSR React-app' },
])
