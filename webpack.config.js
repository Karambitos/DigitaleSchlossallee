'use strict';

const distFolderPath = './';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {

    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    entry: {
        app: './assets/src/js/app.js',
        blocks: './blocks/entry.js'
    },

    output: {
        path: path.resolve(__dirname, 'assets/dist'),
        filename: '[name].min.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf|jpg|png|jpeg$)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: distFolderPath,
                    }
                }]
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].min.css'
        }),
        new VueLoaderPlugin()
    ],

    stats: {
        colors: true,
        children: false,
    },

    externals: {
        jquery: 'jQuery'
    },

    devtool: 'cheap-source-map'

};
