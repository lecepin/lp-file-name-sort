const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "lpFileNameSort",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
  },
  module: {
    rules: [{ test: /\.js?$/, exclude: /node_modules/, use: ["babel-loader"] }],
  },
};
