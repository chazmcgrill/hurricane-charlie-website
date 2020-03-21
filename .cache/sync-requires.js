const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/hurricanecharlie/Developer/Sites/hurricane-charlie-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/hurricanecharlie/Developer/Sites/hurricane-charlie-website/src/pages/404.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/hurricanecharlie/Developer/Sites/hurricane-charlie-website/src/pages/contact.tsx"))),
  "component---src-pages-gallery-tsx": hot(preferDefault(require("/Users/hurricanecharlie/Developer/Sites/hurricane-charlie-website/src/pages/gallery.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/hurricanecharlie/Developer/Sites/hurricane-charlie-website/src/pages/index.tsx"))),
  "component---src-pages-shop-tsx": hot(preferDefault(require("/Users/hurricanecharlie/Developer/Sites/hurricane-charlie-website/src/pages/shop.tsx")))
}

