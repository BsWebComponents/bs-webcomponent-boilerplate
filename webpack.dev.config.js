//webpack and its dependencies
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//package.json to pull in the project title

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: [
        "bs-webcomponent": './src/index.js',
    ],
    module: {
        preLoaders: [
            {
                test: /\.json$/, 
                exclude: /node_modules/,
                loader: 'json'
            }
        ],
        loaders:[
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
             test: /\.png$/,
             exclude: /node_modules/,
             loader: 'url-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style", "css?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]", "sass?sourceMap"]
            },
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.tff$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: __dirname + '/dev_build',
        publicPath: '/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dev_build',
        port: 8000,
        noInfo: true,
        open: true,
        hot: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
