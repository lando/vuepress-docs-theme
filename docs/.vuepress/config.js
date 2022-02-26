const fs = require('fs');
const {path} = require('@vuepress/utils');
const yaml = require('js-yaml');

module.exports = {
  lang: 'en-US',
  title: 'VuePress 2 Default Theme +',
  description: 'The VuePress2 default Theme with some extra power!',
  head: [
    ['link', {rel: 'icon', href: '/images/favicon.png'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: path.resolve(__dirname, '../..'),
  themeConfig: {
    canonicalUrl: 'https://vuepress-theme-default-plus.lando.dev',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/vuepress-theme-default-plus',
    sidebar: [
      '/index.md',
      '/getting-started.md',
      '/config.md',
      '/components.md',
      {
        text: 'Guides',
        collapsible: true,
        children: [
          {
            text: 'Making a guide 1',
            link: '/making-a-guide.md',
          },
          {
            text: 'Making a guide 2',
            link: '/making-a-guide-2.md',
          },
          {
            text: 'Adding page metadata',
            link: '/adding-page-metadata.md',
          },
          {
            text: 'Adding a guide signup',
            link: '/guide-signup.md',
          },
          {
            text: 'Disabling rightbar',
            link: '/disabling-rightbar.md',
          },
        ],
      },
      '/development.md',
      '/support.md',
      {text: 'Examples', link: 'https://github.com/lando/vuepress-theme-default-plus'},
      {text: 'Release Notes', link: 'https://github.com/lando/vuepress-theme-default-plus/releases'},
    ],

    // @lando/vuepress-theme-default-plus config
    sidebarHeader: {
      enabled: true,
      title: 'Current Version',
    },
    social: {
      enabled: true,
      owner: '@devwithlando',
      icons: [{
        title: 'Twitter',
        svg: {
          path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
        },
        link: 'https://twitter.com/devwithlando',
      },
      {
        title: 'GitHub',
        svg: {
          path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
        },
        link: 'https://github.com/lando/vuepress-theme-default-plus',
      },
      {
        title: 'YouTube',
        svg: {
          path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
        },
        link: 'https://www.youtube.com/channel/UCl_QBNuGJNoo7yH-n18K7Kg',
      },
      {
        title: 'Sponsors',
        svg: {
          path: 'M17.625 1.499c-2.32 0-4.354 1.203-5.625 3.03-1.271-1.827-3.305-3.03-5.625-3.03C3.129 1.499 0 4.253 0 8.249c0 4.275 3.068 7.847 5.828 10.227a33.14 33.14 0 0 0 5.616 3.876l.028.017.008.003-.001.003c.163.085.342.126.521.125.179.001.358-.041.521-.125l-.001-.003.008-.003.028-.017a33.14 33.14 0 0 0 5.616-3.876C20.932 16.096 24 12.524 24 8.249c0-3.996-3.129-6.75-6.375-6.75zm-.919 15.275a30.766 30.766 0 0 1-4.703 3.316l-.004-.002-.004.002a30.955 30.955 0 0 1-4.703-3.316c-2.677-2.307-5.047-5.298-5.047-8.523 0-2.754 2.121-4.5 4.125-4.5 2.06 0 3.914 1.479 4.544 3.684.143.495.596.797 1.086.796.49.001.943-.302 1.085-.796.63-2.205 2.484-3.684 4.544-3.684 2.004 0 4.125 1.746 4.125 4.5 0 3.225-2.37 6.216-5.048 8.523z',
        },
        link: 'https://lando.dev/sponsor',
      }],
    },
    sponsors: {
      enabled: true,
      data: yaml.load(fs.readFileSync(path.resolve(__dirname, '..', '..', 'sponsors.yml'), 'utf8')),
    },
    carbonAds: {
      enabled: true,
      placement: 'landodev',
      serve: 'CE7DCKJU',
    },

    // Use Google Analytics
    ga: {
      enabled: true,
      id: 'G-ZSK3T9FTQ9',
    },
  },
};
