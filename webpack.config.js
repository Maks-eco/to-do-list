const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
// const WebpackPwaManifest = require("webpack-pwa-manifest");
// const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

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
      {
        test: /\.svg$/,
        use: {
          loader: "svg-inline-loader",
          // removeTags: true,
          options: {
            // removeTags: true,
            // removingTags: [
            //   "title",
            //   "desc",
            //   "defs",
            //   "style",
            //   "sodipodi:namedview",
            //   "g",
            // ],
          },
        },
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
      manifest: "manifest.json",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
    }),
    // new WorkboxPlugin.GenerateSW({
    //   // these options encourage the ServiceWorkers to get in there fast
    //   // and not allow any straggling "old" SWs to hang around
    //   maximumFileSizeToCacheInBytes: 5194304,
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
    // new WebpackManifestPlugin(),
    // new WorkboxPlugin.InjectManifest({

    // }).
    // new WebpackPwaManifest({
    //   name: "My Progressive Web App",
    //   short_name: "MyPWA",
    //   description: "My awesome Progressive Web App!",
    //   background_color: "#ffffff",
    //   crossorigin: "use-credentials", //can be null, use-credentials or anonymous
    //   icons: [
    //     {
    //       src: path.resolve("src/app/assets/icon.png"),
    //       sizes: [96, 128, 192, 256, 512], // multiple sizes
    //       // destination: path.join("auto"),
    //     },
    //   ],
    // }),
    /* new CopyPlugin({
      patterns: [{ from: "./src/pwa/", to: "" }],
    }),
    new InjectManifest({
      maximumFileSizeToCacheInBytes: 5194304,
      swSrc: "./src/src-sw.js",
      swDest: "sw.js",
    }), */
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devtool: process.env.NODE_ENV === "development" ? "" : "nosources-source-map",
};
