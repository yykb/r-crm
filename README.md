## 搭建思路
- 目录结构搭建
- webpack配置
- ts配置
- babelrc配置
- 其它配置文件，如：.postcss, .eslint等
- React
- React Router



## 未完成及待优化的地方

1. css文件处理及优化（区分开发环境与生产环境）
2. 其它静态文件处理及优化（url-loader，区分开发环境与生产环境）
3. 项目性能及分析插件的配置
4. 别名的配置（`webpack.config.js`及`tsconfig.json`）
5. 页面权限管理及状态管理

## 遇到的坑

1. 使用scripty运行脚本时出现以下报错

   ```sh
   Error: spawn UNKNOWN
   ```

   原因：Windows环境不支持直接运行脚本

   解决方法：

   1. 换linux或mac环境
   2. 后缀名改为bat

2. webpack打包是提示模块无法编译，提示`Module not found`

   原因：webpack配置未添加tsx相关自动补全的配置

   解决方法：`webpack.config.js`中添加相关配置

   ```
   resolve: {
   	extensions: ['.js', '.jsx'], 
   }
   ```



## 其它

1. 如果只处理 TypeScript 可以使用 `awesome-typescript-loader`，建议使用`babel-loader` 方便增加更多功能，如老项目迁移时。
2. 当图片超过设定值时，webpack会使用file-loader对图片进行打包
3. 使用TypeScript时，需要与webpack中的别名配合使用
4. @types/node、@types/react、@types/react-router-dom ...
5. 之前没有接触过React，还需要继续加强理解尤其是路由及其相关组件部分