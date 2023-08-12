const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const styleBuilds = (...topLoader) => {
  const obj = [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: /* [path][name]__ */ "[local]--[hash:base64:5]",
        },
      },
    },
    ...topLoader,
  ];
  return obj;
};

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.tsx",
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
        use: styleBuilds(null),
      },
      {
        test: /\.less$/,
        use: styleBuilds("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: styleBuilds("sass-loader", {
          loader: "sass-resources-loader",
          options: {
            resources: "src/app/variables.scss",
          },
        }),
      },
      {
        test: /\.(jpg|jpe?g|png)$/,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {},
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
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
    }),
  ],
};
