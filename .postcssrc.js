// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "autoprefixer": {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
  },
  "postcss-pxtorem": { 
    "rootValue": 32,
    "propList": ["*"]
  }
}
