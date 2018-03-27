const webpack = require('webpack'); // 用于访问内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
    libs: ['./lib/lib01.js','./lib/lib02.js','./lib/lib03.js'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build/dist'),
    /** 
     * publicPath: 如果开启了该配置，webpack会在生成的html中引入 entry中的文件js时，加上
     * 该配置项指定的路径。
     * 例子：
     *  不加时： <script src="app.123456876543.js">
     *  加了 publicPath: 'assets/'时： <script src="assets/app.12345654321.js">
     */
    // publicPath: 'assets/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // 这里想要成功的haul需要安装 babel-core 依赖包。
        use: 'babel-loader'
      },
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(png|jpeg|gif)$/,
        use: [
          'url-loader?limit=13312&name=[path][name].[hash].[ext]',
          'image-webpack-loader', // 图片压缩
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    // webpack 会自动将出口js文件加入到这个html文件中。
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new ExtractTextPlugin('[name].css'),
  ],
  // 这样写 会在浏览器的  sources 栏中加载源代码，方便调试
  devtool: "cheap-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'build/dist'),
    compress: true,
    port: 9000,
    // 这个配置不好用，会报：[HMR] Hot Module Replacement is disabled.
    // 可以在 package.json  中用 ：webpack-dev-server --hot --inline 来代替
    // hot: true,
  },
  // 文件过大时 给出警告
  /* performance: {
    maxEntrypointSize: 102400,
    maxAssetSize: 20480,
    hints: "warning",
  } */
};
module.exports = config;