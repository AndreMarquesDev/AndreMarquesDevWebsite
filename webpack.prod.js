const merge = require('webpack-merge');
    common = require('./webpack.common.js'),

    TerserPlugin = require('terser-webpack-plugin'),
    ImageminPlugin = require('imagemin-webpack-plugin').default,
    imageminMozjpeg = require('imagemin-mozjpeg'),
    CompressionPlugin = require('compression-webpack-plugin'),

    FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
    OfflinePlugin = require('offline-plugin'),
    WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
                sourceMap: true,
            })
        ]
    },
    plugins: [
        new CompressionPlugin({
            test: /\.(html|css|js)(\?.*)?$/i // only compressed html/css/js, skips compressing sourcemaps etc
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            gifsicle: { // lossless gif compressor
                optimizationLevel: 9
            },
            pngquant: ({ // lossy png compressor, remove for default lossless
                quality: '75'
            }),
            plugins: [imageminMozjpeg({ // lossy jpg compressor, remove for default lossless
                quality: '75'
            })]
        }),
        new FaviconsWebpackPlugin({
            logo: './sources/images/logo.svg',
            background: '#09101c',
            title: 'André Marques Dev',
            icons: {
                opengraph: true,
                twitter: true,
                windows: true
            }
        }),
        // new OfflinePlugin({
        //     ServiceWorker: {
        //         publicPath: '/sw.js'
        //     },
        //     publicPath: '/',
        //     appShell: '/',
        //     externals: [
        //       '/'
        //     ],
        //     autoUpdate: true
        //     // updateStrategy: 'all'
        // })
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
});