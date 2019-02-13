const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "../index.html"
  //filename: path.resolve(path.join(__dirname, "public", "index.html"))
});
const cssPlugin = new ExtractTextPlugin({ filename: "style.css" });

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(path.join(__dirname, "public", "build")),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [htmlPlugin, cssPlugin]
};
