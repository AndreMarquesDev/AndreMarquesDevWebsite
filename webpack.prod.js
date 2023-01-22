const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const CompressionPlugin = require('compression-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


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
    ]
});