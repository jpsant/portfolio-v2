/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const localeSubpaths = {};

module.exports = withPlugins([[withImages]], {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  }
});
