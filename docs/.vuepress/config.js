const nav = require('./config/nav.js')
const plugins = require('./config/plugin.js')
module.exports = {
    title: 'A.T.Field',
    description: 'fly me to the moon',
    plugins: plugins,
    base: '/',
    sidebarDepth: 2,
    themeConfig: {
        docsDir: '/',
        base: '/',
        nav: nav,
        lastUpdated: 'Last Updated',
    },
}