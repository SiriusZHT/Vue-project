## ABOUT
此项目是 vue + element-ui 构建的一个后台管理系统模版，对一些基础的功能进行封装，没有业务代码只是一个框架，具有登陆、权限、验证等功能，封装了一些基础组件，可以根据自己的业务需求修改;  
  很多地方可能写的不是很好，欢迎提意见共同进步  
  
## 注意
Vue 2.6.0以后版本弃用slot和slot-scope，改用v-slot,请及时更新Vue版本

## 技术栈
vue2 + vuex + vue-router + webpack + ES6/7 + sass + element-ui
## 目录结构

<pre>
│  .gitignore                       # 忽略文件,比如 node_modules
│  package.json                     # 项目配置
│  README.md                        # 项目说明
│  index.html                       # 首页
│
├─ webpack.base.config.js           # webpack 基础配置
├─ webpack.dev.config.js            # webpack 开发配置
├─ webpack.prod.config.js           # webpack 生产配置
│
│
├─node_modules
│
├─dist                              # 打包完的文件会自动放在这里
│
└─src
    ├─ api                          # api请求统一管理
    │
    ├─ assets                       # 放置静态资源图片
    │
    ├─components                    # 公用组件
    │
    ├─icons                         # 放置图标
    │
    └─libs                          # 放置一些工具函数
       │
       └─ auth.js                   # 放置权限认证函数
       │
       └─ enums.js                  # 放置自定义枚举值
       │
       └─ filters.js                # 自定义过滤器
       │
       └─ permission.js             # 路由跳转钩子函数
       │
       └─ request.js                # axios请求封装
       │
       └─ util.js                   # 一些通用工具函数
       │
       └─ validate.js               # 一些通用业务校验函数
    │
    │
    ├─router                        # 路由配置
    │
    └─ store                        # vuex的状态管理
         │
         └─ modules                 # store模块 
         │
         └─ getters.js              # 配置getters
         │
         └─ index.js                # 引用vuex，创建store                        
    │
    ├─styles                        # 放置css
    │
    ├─main.js                       # 程序入口文件，加载各种公共组件
	│
	├─app.vue		                # 入口组件,内含路由和公共部分
	│
    │
    └─views                         # 放置页面page
         │
         │
         └─ index.ejs  # 默认的html模板
│
└─ index.html                       # 入口html文件

</pre>

## 运行

```bash
# Clone project
git clone https://github.com/YUUXIAO/Vue-project.git

# Install dependencies
npm install

# Serve with hot reload at localhost:9528
npm run dev

# Build for production with minification
npm run build

# Build for production and view the bundle analyzer report
npm run build --report
```
