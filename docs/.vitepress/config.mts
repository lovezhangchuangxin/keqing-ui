import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/keqing-ui/',
  title: 'Keqing UI',
  description: 'A Vue 3 Component Library',
  head: [['link', { rel: 'icon', href: './images/aqing.ico' }]],

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/components/button/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '安装', link: '/guide/install' },
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '自定义主题', link: '/guide/theme' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基本',
          items: [{ text: 'Button 按钮', link: '/components/button/' }],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/lovezhangchuangxin/keqing-ui' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Components Team',
    },

    search: {
      provider: 'local',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
  },
})
