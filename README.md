# vue-web-demo Quasar版本

## 安装[Project setup]
```
npm install
```

### 开发[Compiles and hot-reloads for development]
```shell
# serve with hot reload at localhost:8080，
# 可修改 .env.development [VUE_APP_DEV_HOST, VUE_APP_DEV_PORT, VUE_APP_DEV_TARGET]
npm run dev
```

### 构建[Build]
```shell
# Compiles and minifies for development
npm run build:dev

# Compiles and minifies for testing
npm run build:test

# Compiles and minifies for staging
npm run build:stage

# Compiles and minifies for production
npm run build:prod
```

### 代码检查[Lints and fixes files]

```shell
npm run lint
```

### 注意

```shell
# 1、注意修改配置文件 .env.*
# 2、请搜索“此处代码可能需要修改！”部分确定是否根据业务修改代码。
# 3、路由配置属性 meta.requiresAuth:false 时代表不需要登录可访问（boolean false，非字符串）
# 4、路由配置属性 meta.allow:true 时代表不受权限控制，可直接访问
```

### 配置参考[Customize configuration]

See [Configuration Reference](https://cli.vuejs.org/config/).
