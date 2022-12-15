/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }))
    return config;
    }
}
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg'],
});

module.exports = nextConfig
