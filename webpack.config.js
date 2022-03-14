const path = require("path")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.js')],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-jsx', 
            '@babel/plugin-transform-classes',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-syntax-export-default-from']
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-jsx', 
            '@babel/plugin-transform-classes',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-syntax-export-default-from']
          },
        },
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js"
  },
  devServer: {
    port: 3000 
  },
  plugins: [
    new HTMLWebpackPlugin({template: "./src/index.html"}),
    new CleanWebpackPlugin()
  ],
}