const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
// };

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.ts",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpe?g|png)$/,
        // loader: "file-loader",
        // options: {
        //   name: "[path][name].[ext]",
        //   type: "asset/resource",
        // },
        type: "asset/resource",
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        // use: ["file-loader"],
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3400,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
