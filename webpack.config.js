// dependencies
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");

// main configuration
module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "/dist")
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: false,
      hash: true
    }),
    new WebpackMd5Hash()
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
