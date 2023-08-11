const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
// };

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
    // "css-loader",
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
        use: styleBuilds(null), //[
        //   MiniCssExtractPlugin.loader,
        //   //"style-loader",
        //   "css-loader",
        // ],
      },
      {
        test: /\.less$/,
        use: styleBuilds("less-loader"), //[
        //   MiniCssExtractPlugin.loader,
        //   //"style-loader",
        //   // "css-loader",
        //   {
        //     loader: "css-loader",
        //     options: {
        //       modules: true,
        //     },
        //   },
        //   "less-loader",
        // ],
      },
      {
        test: /\.s[ac]ss$/,
        use: styleBuilds("sass-loader", {
          loader: "sass-resources-loader",
          options: {
            // Provide path to the file with resources
            resources: "src/app/variables.scss",
            // // Or array of paths
            // resources: [
            //   './path/to/vars.scss',
            //   './path/to/mixins.scss',
            //   './path/to/functions.scss'
            // ]
          },
        }), // [
        // MiniCssExtractPlugin.loader,
        // //"style-loader",
        // "css-loader",
        // "sass-loader",
        // ],
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
