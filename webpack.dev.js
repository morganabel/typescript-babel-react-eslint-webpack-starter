const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = webpackMerge(common, {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true,
    open: true,
  },
});
