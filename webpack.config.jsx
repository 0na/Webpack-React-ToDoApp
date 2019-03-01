const path = require("path");

module.exports = env => {
  const environment = env || "production";

  return {
    mode: environment,
    // mode: env || 'production',
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "app." + environment + "app.bundle.js"
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
    }
  };
};
