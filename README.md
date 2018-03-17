## 程序目录

```
.
├── build                    # 编译后文件所在目录
│   ├── dev                  # 开发环境编译后目录
|   ├── prod                 # 生产环境编译后目录
|   └── static               # 编译后静态文件放置放置到这里
├── docs                     # 文档
├── src                      # 程序源文件
│   ├── components           # 全局可复用的表现组件(Presentational Components)
│   ├── containers           # 全局可复用的容器组件
│   ├── store                # Redux指定块
│   │   ├── createStore.js   # 创建和使用redux store
│   │   └── reducers.js      # Reducer注册和注入
│   ├── routes               # 主路由和异步分割点
│   │   ├── index.js         # 用store启动主程序路由
│   │   ├── Root.js          # 为上下文providers包住组件
│   │   └── Home             # 不规则路由
│   │       ├── index.js     # 路由定义和代码异步分割
│   │       ├── assets       # 组件引入的静态资源
│   │       ├── components   # 直观React组件
│   │       ├── container    # 连接actions和store
│   │       ├── modules      # reducers/constants/actions的集合
│   │       └── routes **    # 不规则子路由(** 可选择的)
├── assets                   # 模板文件生成build用
│   ├── static               # 模板文件直接复制过去的文件
│   ├── template             # 静态资源文件，比如图片等都从这里引用
│   └──                      # 模板文件用于生成文件的文件
└── tests                    # 单元测试
```
## 首先运行
```
npm i
npm i -g @storybook/cli
```
## 启动程序
* 组件开发`npm run storybook`
* 第一次运行`npm run dll`，打公共包，加入公共组件变化执行
* 项目调试`npm run start`(暂时不用)
* 项目发布开发者版本`npm run dev`
* 项目发布`npm run build`
* 项目发布静态打包`npm run server-render`
## 环境配置
[React开发，在VS Code中配置ESLint, Prettier, and Flow](http://www.zcfy.cc/article/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-2962.html)
### ESLint 代码检查
1. 安装ESLint 扩展
2. 安装ESLint    
`npm install eslint --save-dev`
3. 配置ESLint(eslintrc.js)    
[官方文档](http://eslint.cn/docs/user-guide/configuring)
### 页面预览地址
http://localhost:6006/iframe.html?selectedKind=%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6&selectedStory=Page%28%E9%A1%B5%E9%9D%A2%29
### 布局规范
* 布局方式
所有布局采用Flex布局方式
* 语义化
Page 每个页面只有一个
Module 每个页面多个，删除不会影响页面布局，复制到其他页面Page下面可以直接使用
Item 重复性的东西，如需要map循环的
* 布局方法
 1. 多列循环布局