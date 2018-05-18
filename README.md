> webpack 3.11.0
## 一、devServer
#### 1、热更新 --- hot: true
在 webpack.config.js 中添加：
```
devServer: {
  hot: true
}
```
时，启动时会报：
>会报：[HMR] Hot Module Replacement is disabled。

可以在 package.json 的 scripts 中用一下代码替代：
```
"scripts": {
  "start:dev": "webpack-dev-server --hot --inline"   
}
```

#### 2、webpack-dev-server 版本问题
  > 使用 3.*版本会有报错，可以改为 ^2.11.1

## 二、对于图片的处理
```
## webpack.comfig.js  --  module.rules中添加：
{
    test: /\.(png|jpeg|gif)$/,
    use: [
      // [path]:表示使用原有的路径; 也可以直接写死一个目录如：images/[name].[ext]?qing=[hash:8]
      // ?qing=[hash:8]:构建出来的图片名字不变，但是浏览器查看文件路径的时候，会在文件名字后面加上：?qing=12345678
      // 如果不在[ext]后面加参数，而是这样加：[path][name]-[hash:8].[ext],那么 不光构建后文件名字会变，浏览器端图片名字也会变。
      'url-loader?limit=133120&name=[path][name].[ext]?qing=[hash:8]',
      'img-loader',   
    ]
}
```
#### 1、js 中引用图片
```
import imgUrl from './resource/qzx.jpeg'
const _img = document.createElement('IMG');
_img.setAttribute('src', qzxUrl);
$('app').appendChild(_img);
```

#### 2、 css 中引用图片

```
background-image: url('../src/resource/qzx.jpeg');
```

## 三、对于CSS的处理
> 在 modules.rules 中添加：
```
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
```
> 注意： 使用 postcss-loader 时，需要在项目根目录添加文件：`postcss.config.js`，可只导出空对象：`module.exports = {};`