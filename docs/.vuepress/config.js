const nav = require('./config/nav.js')
module.exports = {
    title: 'A.T.Field',
    description: 'fly me to the moon',
    // dest: './_book', // 自定义输出目录
    plugins: {
        "vuepress-plugin-auto-sidebar": {
            titleMode: "uppercase",
        }
    },
    base: '/',
    themeConfig: {
        // docsDir: '/',
        nav: nav,
        lastUpdated: 'Last Updated',
        docsDir: 'docs',
    },
}