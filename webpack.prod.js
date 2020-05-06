const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = webpackMerge(common, {
  mode: "production",
  devtool: "source-map",
});
