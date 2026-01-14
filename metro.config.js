const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.unstable_enablePackageExports = true;

config.server = {
  ...config.server,
  port: 8088,
};

module.exports = config;
