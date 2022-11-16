const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development';

if(process.env.NODE_ENV === 'production') mode = 'production';

module.exports = {
    mode: mode,

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
                }
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: [".js", ".jsx", ],
    },

    devtool: 'source-map',
    devServer: {
        host: "localhost",
        port: 8080,
        static: "./dist",
        hot: true,
        open: true,
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