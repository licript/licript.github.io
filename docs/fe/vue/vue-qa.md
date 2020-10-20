# Vue开发过程中遇到的问题 or 开发技巧
::: tip
以下代码都采用vue class的写法
:::

### 1. v-html渲染html标签
```
// index.ts
get msg() {
  return '<span>html文本内容</span>'
}

// index.vue
<template>
  <div v-html="msg"></div>
</template>

```

### 2.