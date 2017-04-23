const defaultMeta = [
  { name: 'author', content: 'Antoine Lin <contact@antoinelin.com>' },
  // IE META
  { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
  { name: 'msapplication-tap-highlight', content: 'no' },
  // APPLE META
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
  { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
  // MOBILE META
  { name: 'HandheldFriendly', content: 'true' },
  { name: 'format-detection', content: 'telephone=no' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
  // FACEBOOK META
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://ssr-react-app.now.sh/' },
  { property: 'og:image', content: 'https://facebook.github.io/react/img/logo_og.png' },
  { property: 'og:site_name', content: 'SSR React-app' },
  // TWITTER META
  { name: 'twitter:card', content: 'summary' },
  { name: 'twitter:url', content: 'https://ssr-react-app.now.sh/' },
  { name: 'twitter:site', content: 'SSR React-app' },
  { name: 'twitter:image', content: 'https://facebook.github.io/react/img/logo_og.png' },
]
// HOME PAGE
export const appMeta = defaultMeta.concat([
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
// ABOUT PAGE
export const aboutMeta = defaultMeta.concat([
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
