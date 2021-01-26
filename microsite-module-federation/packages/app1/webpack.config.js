const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
  },
  output: {
    publicPath: "auto",
  },
  // experiments: {
  //   asyncWebAssembly: true,
  //   importAsync: true,
  // },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        loader: "wasm-loader",
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      remotes: {
        app2: "app2@https://mf-app-2.herokuapp.com/remoteEntry.js",
      },
      exposes: {
        "./Button": "./src/Button",
      },
      // sharing code based on the installed version, to allow for multiple vendors with different versions
      shared: [
        {
          ...deps,
          react: {
            // eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            // eager: true,
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ],
};
