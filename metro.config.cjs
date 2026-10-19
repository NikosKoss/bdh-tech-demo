/* global __dirname */
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
// Saving test screenshots or PR drafts should not trigger Fast Refresh.
config.resolver.blockList.push(/(^|[/\\])\.workshop([/\\]|$)/);

module.exports = config;
