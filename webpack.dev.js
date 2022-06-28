const { merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    watchFiles: path.join(__dirname, "src"),
  },
  plugins: [new ESLintPlugin()],
  cache: true,
});
