import config from './../../config'

export const aboutMeta = config.defaultMeta.concat([
  { name: 'description', content: 'About SSR React-app' },
  { name: 'robots', content: 'index, follow' },
  // APPLE META
  { name: 'apple-mobile-web-app-title', content: 'About SSR React-app' },
  // FACEBOOK META
  { property: 'og:title', content: 'About SSR React-app' },
  { property: 'og:description', content: 'About SSR React-app' },
  // TWITTER META
  { name: 'twitter:title', content: 'About SSR React-app' },
])
