const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');
const config = {
  // 单文件入口写法
  /* entry: './src/app.js', 
  output: {
    path: path.resolve(__dirname, 'build/dist'),
    filename: 'my-first-webpack.bundle.js'
  }, */
  // 多个入口点的写法：
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build/dist'),
    // publicPath: 'pms'  //  TODO:待查证 这是干嘛的，这个 放开的话，构建完成以后，访问页面时，会报 js 加载错误
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.css$/, use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ]},
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}) // webpack 会自动将出口文件加入进去
  ]
};
module.exports = config;