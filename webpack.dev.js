const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    // filename: "main.[hash].js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['home', 'main'],
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['work', 'main'],
      filename: 'work.html',
      template: 'src/pages/work.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['main'],
      filename: 'skill.html',
      template: 'src/pages/skill.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['main'],
      filename: 'exprience.html',
      template: 'src/pages/exprience.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['main'],
      filename: 'education.html',
      template: 'src/pages/education.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  }
});
