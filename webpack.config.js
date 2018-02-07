var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: __dirname + '/' + 'dist',
    filename: "[name].bundle.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  },
  devServer: {
    contentBase: __dirname + '/dist',
    // compress: true,
    host: '0.0.0.0',
    port: 8000
  },
  resolve: {
    modules: [__dirname + '/' + 'node_modules'],
    alias: { 
    }
  },
  plugins: [new HtmlWebpackPlugin()]
};
