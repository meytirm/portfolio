const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    work: "./src/work.js",
    home: "./src/home.js",
  },
  // output: {
  //   // filename: "main.[hash].js",
  //   filename: "[name].[fullhash].bundle.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][hash][ext]",
        },
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][hash][ext]",
        },
      },
    ],
  },

};
