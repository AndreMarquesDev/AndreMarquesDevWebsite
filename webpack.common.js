const path = require('path'),

    CleanWebpackPlugin = require('clean-webpack-plugin'),
    {VueLoaderPlugin} = require('vue-loader'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './sources/index.js',
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
                    publicPath: 'images/'
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
                        sourceMap: true
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
            { from: 'sources/manifest.json' },
            { from: '_redirects' },
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
        path: path.resolve(__dirname, 'public')
    }
};