/* global module */

let config = {
  "notGetBlocks": [
    "blocks-demo.html"
  ],
  "ignoredBlocks": [
    "no-js"
  ],
  "alwaysAddBlocks": [
    // "sprite-svg",
    // "sprite-png",
    // "object-fit-polyfill",
  ],
  "addStyleBefore": [
    "src/scss/fonts.scss",
    "src/scss/variables.scss",
    "src/scss/mixins.scss"
  ],
  "addStyleAfter": [
    // "src/scss/print.scss"
  ],
  "addJsBefore": [],
  "addJsAfter": [
    "./script.js"
  ],
  "addAssets": {
    "src/fonts/montserrat-bold.eot": "fonts/",
    "src/fonts/montserrat-bold.ttf": "fonts/",
    "src/fonts/montserrat-bold.woff": "fonts/",
    "src/fonts/montserrat-bold.woff2": "fonts/",
    "src/fonts/montserrat-regular.eot": "fonts/",
    "src/fonts/montserrat-regular.ttf": "fonts/",
    "src/fonts/montserrat-regular.woff": "fonts/",
    "src/fonts/montserrat-regular.woff2": "fonts/",
    "src/fonts/quicksand-bold-webfont.eot": "fonts/",
    "src/fonts/quicksand-bold-webfont.ttf": "fonts/",
    "src/fonts/quicksand-bold-webfont.woff": "fonts/",
    "src/fonts/quicksand-bold-webfont.woff2": "fonts/",

    "src/fonts/demo-empty-open-sans.woff2": "fonts/",
    // "src/img/demo-avatar-*": "img/",
    // "src/img/DSC_*": "img/",
    // "src/favicon/*.{png,ico,svg,xml,webmanifest}": "img/favicon",
  },
  "dir": {
    "src": "src/",
    "build": "build/",
    "blocks": "src/blocks/"
  }
};

module.exports = config;
