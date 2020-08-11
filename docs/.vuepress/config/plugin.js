const moment = require('moment');

moment.locale("zh-CN");

module.exports = {
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新"
    }
  },
  '@vuepress/back-to-top': true,
  '@vuepress/last-updated': {
    transformer: (timestamp, lang) => {
      const moment = require('moment')
      moment.locale(lang)
      return moment(timestamp).fromNow()
    }
    // moment(timestamp).format('LLLL')
  },
  "vuepress-plugin-auto-sidebar": {
    titleMode: "uppercase",
  }
};