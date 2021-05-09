const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[fullhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [
      // new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        chunks: ["home", "main"],
        filename: "index.html",
        template: "src/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new HtmlWebpackPlugin({
        inject: true,
        chunks: ["work", "main"],
        filename: "work.html",
        template: "src/pages/work.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new HtmlWebpackPlugin({
        inject: true,
        chunks: ["main"],
        filename: "skill.html",
        template: "src/pages/skill.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new HtmlWebpackPlugin({
        inject: true,
        chunks: ["main"],
        filename: "exprience.html",
        template: "src/pages/exprience.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new HtmlWebpackPlugin({
        inject: true,
        chunks: ["main"],
        filename: "education.html",
        template: "src/pages/education.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[fullhash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, //Regular expression
        exclude: /(node_modules|bower_components)/, //excluded node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], //Preset used for env setup
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  target: ["es5"],
});
