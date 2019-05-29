const merge = require('webpack-merge');
    common = require('./webpack.common.js'),

    TerserPlugin = require('terser-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),

    ImageminPlugin = require('imagemin-webpack-plugin').default,
    imageminMozjpeg = require('imagemin-mozjpeg'),
    CompressionPlugin = require('compression-webpack-plugin'),
    FaviconsWebpackPlugin = require('favicons-webpack-plugin'),

    WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
                sourceMap: false,
                terserOptions: {
                    ie8: true,
                    safari10: true
                }
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: true
            })
        ]
    },
    plugins: [
        new CompressionPlugin({
            test: /\.(html|css|js)(\?.*)?$/i // only compressed html/css/js, skips compressing sourcemaps etc
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: ({ // lossy png compressor, remove for default lossless
                quality: '60'
            }),
            plugins: [imageminMozjpeg({ // lossy jpg compressor, remove for default lossless
                quality: '60'
            })]
        }),
        new FaviconsWebpackPlugin({
            logo: './sources/images/logo.png',
            background: '#09101c',
            title: 'André Marques',
            icons: {
                opengraph: true,
                twitter: true,
                windows: true
            }
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            exclude: ['_redirects'],
            offlineGoogleAnalytics: true,
            cleanupOutdatedCaches: true,
            runtimeCaching: [{
                // Match any same-origin request that contains 'api'.
                urlPattern: '/*',
                // Apply a network-first strategy.
                handler: 'NetworkFirst',
                options: {
                    // Fall back to the cache after 'n' seconds.
                    networkTimeoutSeconds: 5,
                }
            }],
            navigateFallback: '/index.html'
        })
    ]
});