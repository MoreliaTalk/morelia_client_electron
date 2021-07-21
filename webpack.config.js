const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    target: "electron-renderer",
    entry: "./src/render/source/index.js",
    output: {
        path: path.join(__dirname, "./src/render/dist/"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.svg$/,
            use: ["file-loader"]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/render/source/index.html"
        })
    ],
};