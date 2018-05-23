const path = require("path");

const config = (module.exports = {
  entry: ["babel-polyfill", "./src/components/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" }
    ]
  }
});

module.exports = config;
