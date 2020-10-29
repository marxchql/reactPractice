const path = require('path');

const { 
  override, 
  fixBabelImports, 
  addWebpackResolve, 
  addPostcssPlugins,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');

module.exports = override(
  // 按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  // 配置后缀名
  addWebpackResolve({
    extensions: [".js", ".json", ".jsx"]
  }),
  // 做移动端适配
  addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })]),
  // 修改别名
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src/'),
    "home": path.resolve(__dirname, 'src/home/'),
    "assets": path.resolve(__dirname, 'src/assets/'),
    "img": path.resolve(__dirname, 'src/assets/images/')
  }),
  // 添加修饰器
  addDecoratorsLegacy()
);