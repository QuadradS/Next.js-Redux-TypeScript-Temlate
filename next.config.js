const withSass = require('@zeit/next-sass')

const config = withSass({
  target: process.env.NODE_ENV === 'production' ? 'serverless' : 'server',
  cssModules: true
})

module.exports = config
