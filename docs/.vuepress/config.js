module.exports = {
  base: '/dev/',
  locales: {
    '/': {
      lang: 'en-US', // 这个值会被设置在 <html> 的 lang 属性上
      title: 'Mission Docs',
      description: 'The Technical Docs of Mission'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Mission文档',
      description: 'Mission技术文档'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#21a4e7' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    locales: {
      '/': {
        label: 'EN',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('guide', 'Guide')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用',
            buttonText: '刷新'
          }
        },
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          }
        ],
        sidebar: {
          '/zh/guide/': genSidebarConfig('guide', '指南')
        }
      }
    }
  }
}

function genSidebarConfig(module, title) {
  if (module === 'guide') {
    return [
      {
        title,
        collapsable: false,
        children: ['api']
      }
    ]
  }
}
