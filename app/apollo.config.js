/* eslint-env node */
// See https://www.apollographql.com/docs/devtools/apollo-config/
module.exports = {
  client: {
    service: {
      name: 'graphcms',
      url: 'https://api-eu-central-1.graphcms.com/v2/ckyfjv6m70u4m01z3094y4ugg/master',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.ts'],
  },
}
