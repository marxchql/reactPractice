const path = require('path');
// html产出
const HtmlWebpackPlugin = require('html-webpack-plugin')
// vue文件的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 抽离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // 做正则匹配的
        // style-loader用来将转换以后的js转回成css
        // loader的执行顺序是从后往前
        // use: ['style-loader', 'css-loader']         // 使用了哪个loader
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  //添加一个配置项
  plugins:[
    new HtmlWebpackPlugin({
        template: path.join(__dirname, './src/public/index.html'),
        filename: './index.html',//默认到output目录
        hash:true,//防止缓存,会给文件后面加入hash
        minify:{
            removeAttributeQuotes:true//压缩 去掉引号
        }
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 8888,
    open: true,
    proxy: {
      '/ajax': 'https://m.maoyan.com'
    }
  },

  // 配置别名
  resolve: {
    alias: {
      co: path.resolve(__dirname, './src/components/')
    }
  }
}