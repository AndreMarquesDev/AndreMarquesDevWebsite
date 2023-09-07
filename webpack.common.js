const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const sass = require('sass');

module.exports = {
    mode: 'development',
    entry: './sources/index.js',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader'
        },
        {
            test: /\.vue$/,
            use: 'vue-loader'
        },
        {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }]
        },
        {
            test: /\.(jpe?g|png|gif|svg|webp)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: '/images/'
                },
            }]
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        implementation: sass,
                        sassOptions: {
                            fiber: false,
                        },
                    }
                }
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Index',
            filename: 'index.html',
            template: './sources/index.html',
            inject: 'head'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: '[id].css'
        }),
        new CopyWebpackPlugin([
            { from: '_redirects' },
            { from: 'robots.txt' },
            { from: 'sources/images/logoIcon-57x57.png', to: 'images' },
            { from: 'sources/images/logoIcon-60x60.png', to: 'images' },
            { from: 'sources/images/logoIcon-72x72.png', to: 'images' },
            { from: 'sources/images/logoIcon-76x76.png', to: 'images' },
            { from: 'sources/images/logoIcon-114x114.png', to: 'images' },
            { from: 'sources/images/logoIcon-120x120.png', to: 'images' },
            { from: 'sources/images/logoIcon-144x144.png', to: 'images' },
            { from: 'sources/images/logoIcon-152x152.png', to: 'images' },
            { from: 'sources/images/logoIcon-180x180.png', to: 'images' },
            { from: 'sources/images/logoIcon-192x192.png', to: 'images' },
            { from: 'sources/images/logoIcon-512x512.png', to: 'images' }
        ])
    ],
    devServer: {
        historyApiFallback: true
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    }
};