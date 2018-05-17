const webpack = require("webpack");
const path = require("path");

const config = {
  devtool: "inline-source-map",

  entry: {
    server: path.resolve(__dirname, "server/server.js")
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.test\.jsx?$).*\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "server"),
      path.resolve(__dirname, "node_modules")
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist/server"),
    publicPath: "/",
    filename: "[name].bundle.js",
    chunkFilename: "[name]-[chunkhash].chunk.js"
  },
  target: "node",
  node: {
    __dirname: false
  }
};

module.exports = config;