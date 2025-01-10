const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map", // Webpack source map loader code
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve content from 'dist' folder
    },
    watchFiles: ["./src/template.html"], // Watch HTML template changes
    hot: true, // Enable Hot Module Replacement
    open: true, // Automatically open the browser
    port: 8080, // You can change this if you prefer a different port
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Webpack HTML loader code
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Webpack CSS loader code
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i, // Webpack HTML image loader code
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Webpack Javascript image to HTML code
        type: "asset/resource",
      },
    ],
  },
};
