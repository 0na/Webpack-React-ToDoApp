const path = require("path");
//const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");
const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: "body"
  })
];
module.exports = env => {
  if (env === "production") {
    plugins.push(
      new OptimizeJsPlugin({
        sourceMap: false
      })
    );
    return {
      mode: env || "production" || "development",
      entry: "./src/index.js",
      output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.bundle.js"
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  modules: true
                }
              }
            ]
          }
        ]
      },
      optimization: {
        minimize: false // w trybie produkcyjnym kod jest domyślnie minifikowany. W trybie produkcyjnym jest domyślnie ustawione na true.
        //      minimizer: [new UglifyJsPlugin()] -brzydki kod
      },
      plugins: plugins
    };
  }
};
