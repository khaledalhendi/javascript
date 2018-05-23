const path = require("path");

const config = (module.exports = {
  entry: "./src/components/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: "babel-loader" }]
  }
});

module.exports = config;
