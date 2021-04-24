/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const localeSubpaths = {};

module.exports = withPlugins([[withImages]], {
  publicRuntimeConfig: {
    localeSubpaths
  }
});
