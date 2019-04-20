module.exports = {
  title: 'Pet',
  description: '代码风格指南',
  dest: './dist',
  base: '/tms-style-guide/',
  port: 3000,
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: "image/x-icon",
      href: "/favicon.ico"
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }]
  ],
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    }],
    ['@vuepress/last-updated', {
      transformer: (timestamp) => {
        const moment = require('moment');
        return moment(timestamp).format('YYYY-MM-DD hh:mm:ss A');
      }
    }],
    ['@vuepress/back-to-top', true],
    //修改默认图片selector
    ['@vuepress/medium-zoom', {
      selector: '.zoomable'
    }]
  ],
  themeConfig: {
    //上次更新插槽
    lastUpdated: '上次更新',
    // 默认是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'Pets-web/tms-style-guide',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页！',
    nav: [
      {
        text: '阅前指南',
        link: '/guide/'
      },
      {
        text: 'JS规范',
        link: '/js/'
      },
      {
        text: 'CSS规范',
        link: '/css/'
      },
      {
        text: 'Git工作流',
        link: '/git/'
      }
    ],
    sidebar: {
      '/guide/': [{
        title: '前言',
        collapsable: false,
        children: [
          ''
        ]
      }],
      '/js/': [{
        title: '规范列表',
        collapsable: false,
        children: [
          '',
          'vue'
        ]
      }],
      '/css/': [{
        title: '规范列表',
        collapsable: false,
        children: [
          '',
          'less'
        ]
      }],
      '/git/': [{
        title: '工作流列表',
        collapsable: false,
        children: [
          ''
        ]
      }]
    }
  }
}