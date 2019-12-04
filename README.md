<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
  
  
  
  === 项目 说明 ===
  
## 一、NEST.JS 简介
Nest是一套基于Node.js的强大的Web框架，可帮助你轻松构建出高效的、可扩展的应用程序。它是通过结合OOP（面向对象编程）和FP（函数式编程）的最佳理念，采用现代化JavaScript，使用TypeScript构建的。NestJs 的核心思想是提供一个层与层直接的耦合度极小，抽象化极高的架构体系。

官网：https://nestjs.com/
中文教程：https://docs.nestjs.cn/
## 二、开发环境搭建
请确保操作系统上安装了Node.js（> = 8.9.0）
安装nvm 进行node版本管理
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

使用Nest CLI建立新项目
$ npm i -g @nestjs/cli
$ nest new project-name
运行应用程序
$ npm run start
安装vscode nestjs snippets

三、nest.js控制器、路由、Get、Post方法参数
控制器负责处理传入的请求和向客户端返回响应 
使用CLI创建控制器  $ nest g controller <name>
$ nest g —help


       2. 路由

nest.js没有单独配置路由的地方，定义好控制器nest.js会自动配置对应路由
在 @Controller() 装饰器中使用路径前缀，它允许我们轻松对一组相关路由进行分组，并减少重复代码。


       3. 参数装饰器

修改扩展当前参数
@Request() Request 对象表示 HTTP 请求，并具有 Request 查询字符串，参数，HTTP 标头 和 正文
@Query() 针对GET请求
@Body() 针对POST请求
@Param() 获取动态路由


四、配置静态资源
引入http平台 platform-express
useStaticAssets()方法配置静态资源目录


五、配置模板引擎
$ npm i ejs —save


六、使用swagger自动生成接口文档
$ npm install --save @nestjs/swagger swagger-ui-express
@ApiUseTags() 标注当前控制器标签
@ApiOperation()标注当前接口标签
@ApiModelProperty() 表示模型属性


七、管道验证
$ npm i --save class-validator class-transformer
@IsNotEmpty() 传入提示错误

### NestJs Demo
1. 开发程序准备
    - node
    - nrm
    - nestjs
    - NestJs Snippets
    
2. 创建项目
    - 使用命令行创建 `nest new myapp`.
```
    Usage: nest <command> [options]
      new|n [options] [name]                          Generate Nest application
  build [options] [app]                           Build Nest application
  start [options] [app]                           Build Nest application
 ```
3. 项目结构.
    
        ```tree -L 1
├── README.md
├── dist
├── nest-cli.json
├── node_modules
├── package-lock.json
├── package.json
├── src
├── test
├── tsconfig.build.json
├── tsconfig.json
└── tslint.json
     ```
4. 配置项目依赖库,和构建脚本.
```
{
  "name": "project-blog-api",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "license": "MIT",
  "scripts": {
    "prebuild": "rimraf dist", //包装 rm -r -f命令删除文件
    "build": "nest build", //执行构建
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"", //统一代码风格,自动检索对齐代码
    "start": "nest start",//开启nest项目
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "tslint -p tsconfig.json -c tslint.json",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
  "dependencies": {
    "@hasezoey/typegoose": "^6.0.0-32",
    "@nestjs/common": "^6.7.2",
    "@nestjs/core": "^6.7.2",
    "@nestjs/platform-express": "^6.7.2",
    "@nestjs/swagger": "^3.1.0",
    "@types/mongoose": "^5.5.32",
    "class-transformer": "^0.2.3",  //数据转换,中间件
    "class-validator": "^0.11.0",   //管道验证
    "ejs": "^2.7.4", //<%= EJS %>嵌入式模版引擎,根据名字引入,根据接口数据动态返回html模版数据
    "mongodb": "^3.3.4",  //数据库引入
    "mongoose": "^5.7.11",  //数据库验证
    "nestjs-typegoose": "^7.0.0",
    "reflect-metadata": "^0.1.13", //数据反射模型
    "rimraf": "^3.0.0",  //用于删除构建目录
    "rxjs": "^6.5.3",    //响应式框架
    "swagger-ui-express": "^4.1.2" //api接口文档依赖
  },
  "devDependencies": {
    "@nestjs/cli": "^6.9.0",
    "@nestjs/schematics": "^6.7.0",
    "@nestjs/testing": "^6.7.1",
    "@types/express": "^4.17.1",
    "@types/jest": "^24.0.18",
    "@types/node": "^12.7.5",
    "@types/supertest": "^2.0.8",
    "jest": "^24.9.0",
    "prettier": "^1.18.2",
    "supertest": "^4.0.2",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.1.1",
    "ts-node": "^8.4.1",
    "tsconfig-paths": "^3.9.0",
    "tslint": "^5.20.0",    
    "typescript": "^3.6.3"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".spec.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "coverageDirectory": "./coverage",
    "testEnvironment": "node"
  }
}
```

5. 安装依赖库,新建工程文件目录
        ```tree -L 2
├── README.md
├── assets          //静态资源配置
│   ├── gcdm.plist
│   └── static.JPG
├── dist
│   ├── app.controller.d.ts
│   ├── app.controller.js
│   ├── app.controller.js.map
│   ├── app.module.d.ts
│   ├── app.module.js
│   ├── app.module.js.map
│   ├── app.service.d.ts
│   ├── app.service.js
│   ├── app.service.js.map
│   ├── cooper1
│   ├── cooper2
│   ├── coopers
│   ├── main.d.ts
│   ├── main.js
│   ├── main.js.map
│   ├── src
│   ├── test
│   ├── tsconfig.build.tsbuildinfo
│   └── tsconfig.tsbuildinfo
├── nest-cli.json
├── node_modules
├── ... //外部依赖库
├── package-lock.json
├── package.json
├── src //feature文件夹
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts   //
│   ├── app.service.ts. 
│   ├── cooper1  //cooper1和cooper2定义了模版路由跳转
│   ├── cooper2  //cooper1和cooper2定义了模版路由跳转
│   ├── coopers。//cooper Get/Delete/Post/Put及路由请求实现
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
├── tslint.json
└── views
    └── cooper
     ```
6. 详细代码及使用功能参照代码
