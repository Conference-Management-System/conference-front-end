
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports ={
    entry: "./index.js",
    mode: 'development',
    output: {
        path: __dirname + "/dist",
        filename: "./bundle.js"
    },
    devServer: {
        historyApiFallback: true
    },
    module:{
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({template: './index.html'}),
    ]
}