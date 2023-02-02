// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
const withSourceMaps = require("@zeit/next-source-maps");
const withImages = require("next-images");
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-pdf-ner-annotator']);

module.exports = withPlugins([
    withTM,
    [
        withImages,
        {
            exclude: /\.svg$/
        }
    ],
    withSourceMaps
],
{
    webpack: (config, options) => {
      if (!options.isServer) {
        config.resolve.alias["@sentry/node"] = "@sentry/browser";
      }
      config.module.rules.push({
        test: /\.svg$/, 
        use: ["@svgr/webpack"]
      });
      return config;
    }
});
