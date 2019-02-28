const path = require("path");

module.exports = {
  mode: "delevopment",
  // resolve: {
  //   extensions: [".js", ".jsx"]
  //},
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.bundle.js"
  },
  //obiekt — module. Jego zadanie polega na wpływaniu na moduły, które bezpośrednio ładujemy jako zależności naszej aplikacji. Przeważnie jedynym parametrem, który będzie wpływał na moduły, będzie parametr rules.
  module: {
    rules: [
      {
        test: /\.jsx$/,
        //test — warunek, który musi zostać spełniony w nazwie importowanego modułu, aby mógł zostać przetransformowany danym loaderem. Najczęściej są to rozszerzenia (tak jak w przykładzie powyżej),
        loader: "babel-loader"
        //options: {presets: ['env', 'react']} //zamiast w bliku .babelrc mozna to wpisac tu
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader", //npm npm install --save-dev style-loader css-loader
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};
//Powyższy przykład testuje, czy ładowany moduł ma rozszerzenie .js, a następnie, jeśli warunek jest spełniony, transformuje go przy pomocy babel-loader.
