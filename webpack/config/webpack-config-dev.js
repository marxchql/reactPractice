// 针对开发环境的webpack的配置
// Node.js文件 遵循CommonJs规范

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // 基础的配置

  // 开发环境还是生产环境
  mode: 'development',

  // 入口文件的配置
  entry: path.join(__dirname, '../src/index.js'),

  // 出口文件的配置
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'js/main.js'
  },

  // loader转换器的配置
  module: {
    rules: [
      // rules下面每一个对象就是一个loader的配置
      {
        test: /\.css$/,  // 做正则匹配的
        // style-loader用来将转换以后的js转回成css
        // loader的执行顺序是从后往前
        // use: ['style-loader', 'css-loader']         // 使用了哪个loader
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {// 配置优雅降级
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_models中的js文件
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }]
      },
      {
        test:/\.(png|jpg|gif)/,
        use:[{
          loader: 'url-loader',
          options: {
            limit: 5000,//字节少于5000 ——》 base64  超过5000  file
            outputPath: 'images/', //5000意思存到images
          }
        }]
      }
    ]
  },

  // plugin插件的配置
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/public/index.html'),
      filename: './index.html',//默认到output目录
      hash:true,//防止缓存,会给文件后面加入hash
      minify:{
        removeAttributeQuotes:true//压缩 去掉引号
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, '../src/static'), to: 'static' }
      ],
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, '../build'),
    compress: true,
    port: 9000
  }
}