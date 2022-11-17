const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

let mode = 'development';

if(process.env.NODE_ENV === 'production') mode = 'production';

module.exports = {
    mode: mode,
    target: "web",

    entry: [
        './src/index.js'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],

    resolve: {
        extensions: [".js", ".jsx", ],
    },

    devtool: 'source-map',
    devServer: {
        host: "localhost",
        port: 8080,
        // static: "./dist",
        hot: true,
        open: true,
        static: {
            // match the output path
            directory: path.resolve(__dirname, 'dist'),
            // match the output 'publicPath'
            publicPath: '/',
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
            '/api/**': {
              target: 'http://localhost:3000/',
              secure: false,
            },
            '/assets/**': {
              target: 'http://localhost:3000/',
              secure: false,
            },
        },
    }
};