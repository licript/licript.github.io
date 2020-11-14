---
tags:
  - parcel
  - react
  - 打包
---
# Parcel 打包工具开发React App指北

## Q&A
1. Q: 什么是Parcel?
A: 官方: 极速零配置Web应用打包工具 --> [Parcel中文官网](https://zh.parceljs.org/)
2. Q: Parcel的优势
A: 极速打包、几乎0配置、开箱即用、热模块替换、自动转换...(具体可参考官网指南)

::: tip
如果你觉得webpack太过于繁琐, 那么请尝试以下parcel吧!
:::

## Quick Start
#### 1. Step-1
通过npm 或者 yarn 安装 parcel
Npm:
`npm install -g parcel-bundler`
Yarn:
`yarn global add parcel-bundler`

#### 2. Step-2
创建一个react项目:
`mkdir parcel-react && cd parcel-react`
创建package.json文件:
`yarn init -y`
or
`npm init -y`

#### 3. Step-3
安装所需依赖
```bash
npm install --save react
npm install --save react-dom
npm install --save-dev @babel/preset-react
npm install --save-dev @babel/preset-env
npm install --save-dev parcel-bundler
```
or
```bash
yarn add  react react-dom
yarn add --dev @babel/preset-react @babel/preset-env parcel-bundler
```
#### 4. Step-4
创建 & 配置 .babelrc
```javascript
{
  "presets": ["@babel/preset-react"]
}
```
#### 5. Step-5
编写 index.html、index.js
```html
// index.html
<!DOCTYPE html>
<html>
    <head>
        <title>React starter app</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="index.js"></script>
    </body>
</html>
```

```javascript
// index.js
import * as React from 'react'
import ReactDOM from 'react-dom'

const App = ()=>(<div >this is a pacel react app</div>)

ReactDOM.render(<App/>, document.getElementById('root'))
```
#### 6. Step-6
配置package.json
```json
{
  "name": "parcel-react",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
  "devDependencies": {
    "@babel/core": "^7.12.3",
    "@babel/preset-env": "^7.12.1",
    "@babel/preset-react": "^7.12.1",
    "babel-preset-react": "^6.24.1",
    "parcel-bundler": "^1.12.4",
    // "typescript": "^4.0.5"
  },
  "scripts": {
    "start": "parcel index.html"
  }
}

```
以上,一个 parcel打包的web app就基本完成了
